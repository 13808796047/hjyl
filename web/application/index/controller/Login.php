<?php
/**
 * Created by PhpStorm.
 * User: Hon <227560410@qq.com>
 * Date: 2017/8/30 0030
 * Time: 20:19
 */

namespace app\index\controller;

use app\index\model\Members;
use app\index\model\Params;
use think\Controller;
use think\Request;
use think\Session;
use think\Validate;

class Login extends Controller
{
    public function getLogin()
    {
        // Session::clear();
        // Session::destroy();
        return view('index/login');
    }

    public function postLogin(Request $request)
    {
        $rules = [
//            'username|用户名'  => 'require|max:25',
            'loginpass|密码' => 'require',
            'validcode|验证码' => 'require|captcha',
        ];
        $validate = new Validate($rules);
        $data = $request->param();
        $result = $validate->check($data);
        if (!$result) {
            $this->error($validate->getError());
        }
        $map['username'] = $request->param('username');
        $user = Members::where($map)->find();

        if (!$user) {
            $this->error('用户不存在！');
        } else {
            if ($user['isDelete'] == 1) {
                $error = '用户已被删除';
                $this->error($error);
            }
            if ($user['enable'] == 0) {
                $error = '用户已被冻结';
                $this->error($error);
            }
            if ($user['admin'] == 1 || $user['sb'] == 2) {
                $error = '用户不存在';
                $this->error($error);
            }

            if (think_ucenter_md5($request->param('loginpass'), UC_AUTH_KEY) !== $user['password']) {
                $this->error('密码或用户名不正确！');
            }

            $session = array(
                'uid' => $user['uid'],
                'username' => $user['username'],
                'session_key' => session_id(),
                'loginTime' => time(),
                'accessTime' => time(),
                'loginIP' => $request->ip(),
            );
            $member_session = db('member_session');
            $re = $member_session->insert($session);
            if (!$re) {
                $this->error('插入登陆记录表失败，登陆失败');
            }

            $user['sessionId'] = $member_session->getLastInsID();

            $member_session->where('uid=' . $user['uid'] . ' and id<' . $user['sessionId'])
                ->update(['isOnLine' => 0]);
            Session::set('isLogin', true);
            Session::set('userData', $user);
            Session::set('user_auth_sign2', data_auth_sign($_SERVER['HTTP_USER_AGENT'])); //session实现ip认证，防止session被盗取时别人可以登录。在adminControll中验证ip是否一致
            //$this->success('登录成功！', url('index/index'),$user['uid']);
            $usdt_setting = Params::getParams('usdt_setting')['usdt_setting'];
            Session::set('usdt_setting', round(session('userData.coin') / $usdt_setting, 4));
            return json(["code" => 1, "msg" => "登录成功！", "data" => $user['uid'], "url" => url('index/index'), "wait" => 3]);
        }
    }

    public function getLogout()
    {
        $user = Session::get('userData');
        // var_dump(isset($user['uid']));die;
        if (!isset($user['uid'])) {
            return $this->redirect('index/login');
        }

        $where = isset($user['sessionId']) ? 'uid=' . $user['uid'] . ' and id=' . $user['sessionId'] : 'uid=' . $user['uid'];
        db('member_session')->where($where)->update(['isOnLine' => 0]);

        Session::clear();
        Session::destroy();

        return $this->redirect('index/login');
    }
}
