<?php
// +----------------------------------------------------------------------
// | OneThink [ WE CAN DO IT JUST THINK IT ]
// +----------------------------------------------------------------------
// | Copyright (c) 2013 http://www.onethink.cn All rights reserved.
// +----------------------------------------------------------------------
// | Author: 麦当苗儿 <zuojiazi@vip.qq.com> <http://www.zjzit.cn>
// +----------------------------------------------------------------------

namespace Mobile\Controller;

/**
 * 用户控制器
 * 包括用户中心，用户登录及注册
 */
class UserController extends HomeController
{

    protected function _initialize()
    {

        parent::_initialize();
    }

    /* 用户中心首页 */
    public function index()
    {
        //$login = A('User/User', 'Api')->login('麦当苗儿ss', 'aoiujz');
        //$login = A('User/User', 'Api')->register('麦当苗儿ss', 'aoiujz', 'xiaoxiaoxiao@qq.com');
        //$login = A('User/User', 'Api')->checkEmail('zuojiazi@vip.qq.com');

        // dump($login);

    }

    public function test()
    {
        // $Model = new \Think\Model();
        // $sql = 'select * from ssc_members where uid=%d';
        // dump($sql);
        // //$return=$Model->query($sql,$_GET['id']);
        // dump($Model->getLastSql());
        // dump($return);exit;
    }

    /**
     * 推广注册
     */
    final public function register()
    {

        if (IS_POST) {
            if (!preg_match("/^[0-9a-zA-Z]{6,15}$/", I('username'))) {
                $this->error('用户名只能由英文和数字组成，长度6-15个字符');
            }

            $pwd = I('password');
            if (strlen($pwd) < 6) {
                $this->error('密码至少6位');
            }

            $linkData = M('links')->where(['lid' => I('lid'), 'uid' => I('uid')])->find();

            if (!$linkData) {
                $this->error('此链接不存在');
            }

            if (!$user2 = M('members')->find($linkData['uid'])) {
                $this->error('上级不存在');
            }

            if (M('members')->where(['username' => I('username')])->find()) {
                $this->error('用户名' . I('username') . '已存在');
            }

            $para = [
                'username' => I('username'),
                'type' => $linkData['type'],
                'password' => think_ucenter_md5(I('password'), UC_AUTH_KEY),
                'parentId' => $linkData['uid'],
                'parents' => $user2['parents'],
                'fanDian' => $linkData['fanDian'],
                'fanDianBdw' => $linkData['fanDianBdw'],
                'qq' => I('qq'),
                'regIP' => $this->ip(true),
                'regTime' => $this->time,
            ];

            M()->startTrans();
            if ($lastid = M('members')->add($para)) {
                if (M('members')->save(['uid' => $lastid, 'parents' => $user2['parents'] . ',' . $lastid])) {
                    M()->commit(); //成功则提交

                    $user = M('members')->find($lastid);
                    $ip = $this->ip(true);
                    $session = [
                        'uid' => $user['uid'],
                        'username' => $user['username'],
                        'session_key' => 0, //session_id(),
                        'loginTime' => $this->time,
                        'accessTime' => $this->time,
                        'loginIP' => $ip,
                    ];

                    if (!($lastid = M('member_session')->add($session))) {
                        $this->error('插入登陆记录表失败，登陆失败');
                    }

                    $user['sessionId'] = $lastid;
                    session('user', $user);
                    session('user_auth_sign2', data_auth_sign($_SERVER['HTTP_USER_AGENT']));
                    $this->success('注册成功', U('index/index'));
                }
            }

            M()->rollback(); //不成功，则回滚
            $this->error('注册失败');
        } else {
            $this->display('User/register');
        }
    }

    public $test;

    /* 登录页面 */
    public function login()
    {
        //dump($_POST);
        if (IS_POST) { //登录验证

            $username = I('username');
            $password = I('password');
            if ($username == '' || $password == '') {
                $error = '用户名或密码不能为空';
                $this->error($error);
            }

            $Members = M('Members');
            $map = [];
            $map['username'] = $username;
            $map['password'] = think_ucenter_md5($password, UC_AUTH_KEY);
            $user = $Members->where($map)->find();

            if ($user) {
                if ($user['isDelete'] == 1) {
                    $error = '用户已被删除';
                    $this->error($error);
                } elseif ($user['enable'] == 0) {
                    $error = '用户已被冻结';
                    $this->error($error);
                } else {
                    $ip = $this->ip(true);
                    $session = [
                        'uid' => $user['uid'],
                        'username' => $user['username'],
                        'session_key' => session_id(),
                        'loginTime' => $this->time,
                        'accessTime' => $this->time,
                        'loginIP' => $ip,
                    ];

                    $session = array_merge($session, $this->getBrowser());

                    if (!($lastid = M('member_session')->add($session))) {
                        \Think\Log::write('xief ' . M('member_session')->getLastSql());
                        $this->error('插入登陆记录表失败，登陆失败');
                    }
                    $user['sessionId'] = $lastid;

                    $data['isOnLine'] = '0';
                    $where = [
                        'uid' => $user['uid'],
                        'id' => ['LT', $user['sessionId']],
                    ];
                    M('member_session')->where('uid=' . $user['uid'] . ' and id<' . $user['sessionId'])->save($data);

                    session('user', $user);
                    session('user_auth_sign2', data_auth_sign($_SERVER['HTTP_USER_AGENT'])); //session实现ip认证，防止session被盗取时别人可以登录。在adminControll中验证ip是否一致
                    if (I('id')) {
                        $url = U('game/game?id=' . I('id'));
                    } else {
                        $url = U('index/index');
                    }

                    $this->success('登录成功！', $url);
                }
            } else {
                $error = '用户名或密码错误';
                $this->error($error);
            }

        } else { //显示登录表单

            $this->display();
        }
    }

    /* 退出登录 */
    public function logout()
    {

        if (session('user')) {
            M('member_session')->where(['uid' => session('user.uid')])->save(['isOnLine' => 0]);
        }
        session('user', null);
        session('user_auth_sign', null);
        session('cart', null);
        $this->success('退出成功！', U('user/login'));
    }

    private function getBrowser()
    {
        $flag = $_SERVER['HTTP_USER_AGENT'];
        $para = [];

        // 检查操作系统
        if (preg_match('/Windows[\d\. \w]*/', $flag, $match)) {
            $para['os'] = $match[0];
        }

        if (preg_match('/Chrome\/[\d\.\w]*/', $flag, $match)) {
            // 检查Chrome
            $para['browser'] = $match[0];
        } elseif (preg_match('/Safari\/[\d\.\w]*/', $flag, $match)) {
            // 检查Safari
            $para['browser'] = $match[0];
        } elseif (preg_match('/MSIE [\d\.\w]*/', $flag, $match)) {
            // IE
            $para['browser'] = $match[0];
        } elseif (preg_match('/Opera\/[\d\.\w]*/', $flag, $match)) {
            // opera
            $para['browser'] = $match[0];
        } elseif (preg_match('/Firefox\/[\d\.\w]*/', $flag, $match)) {
            // Firefox
            $para['browser'] = $match[0];
        } else {
            $para['browser'] = 'unkown';
        }
        //print_r($para);exit;
        $para = [];
        return $para;
    }

    /* 个人信息 */
    public function info()
    {
        if (IS_POST) {
            $data['address'] = I('address');
            $data['nickname'] = I('nickname');
            $data['idCard'] = I('idCard');
            $data['mobile'] = I('mobile');

            if (M('members')->where(['id' => $this->user['id']])->save($data)) {
                $this->success('保存信息成功');
            } else {
                $this->error('信息未修改');
            }
        } else {
            $user = M('members')->where(['uid' => $this->user['uid']])->find();
            $this->assign('user', $user);

            $this->meta_title = "个人中心";

            $this->getSystemSettings();
            $this->assign('settings', $this->settings);
            $this->display();
        }
    }

    public function infodetail()
    {
        $user = M('members')->where(['uid' => $this->user['uid']])->find();
        $this->assign('user', $user);

        $this->meta_title = "个人中心";
        $this->display();
    }

    public function address()
    {
        $user = M('members')->where(['uid' => $this->user['uid']])->find();
        $this->assign('user', $user);

        $this->meta_title = "个人中心";
        $this->display();
    }
    public function getUserBalance()
    {
        $user = M('members')->where(['uid' => $this->user['uid']])->find();

        return $this->ajaxReturn($user['coin'], 'JSON');
    }
    /* 登录密码 */
    public function password()
    {

        if (IS_POST) {
            $opwd = I('oldpassword');
            if (!$opwd) {
                $this->error('原密码不能为空');
            }

            if (strlen($opwd) < 6) {
                $this->error('原密码至少6位');
            }

            if (!$npwd = I('newpassword')) {
                $this->error('密码不能为空');
            }

            if (strlen($npwd) < 6) {
                $this->error('密码至少6位');
            }

            if (I('newpassword') != I('repassword')) {
                $this->error('输入的新密码和确认密码不一致');
            }

            $user = M('members')->where('uid=' . $this->user['uid'])->find();
            $pwd = $user['password'];

            $opwd = think_ucenter_md5($opwd, UC_AUTH_KEY);
            if ($opwd != $pwd) {
                $this->error('原密码不正确');
            }

            if (M('members')->where('uid=' . $this->user['uid'])->save(['password' => think_ucenter_md5($npwd, UC_AUTH_KEY)])) {
                $this->success('修改密码成功', U('user/info'));
            }

            $this->error('修改密码失败或新密码与旧密码一致');
        } else {

            $this->display();
        }
    }

    /* 资金密码 */
    public function coinpassword()
    {

        if (IS_POST) {
            $opwd = I('oldpassword');
            if (!$opwd) {
                $this->error('原密码不能为空');
            }

            if (strlen($opwd) < 6) {
                $this->error('原密码至少6位');
            }

            if (!$npwd = I('newpassword')) {
                $this->error('密码不能为空');
            }

            if (strlen($npwd) < 6) {
                $this->error('密码至少6位');
            }

            if (I('newpassword') != I('repassword')) {
                $this->error('输入的新密码和确认密码不一致');
            }

            $user = M('members')->where('uid=' . $this->user['uid'])->find();
            $pwd = $user['coinPassword'];

            $opwd = think_ucenter_md5($opwd, UC_AUTH_KEY);
            if ($opwd != $pwd) {
                $this->error('原密码不正确');
            }

            if (M('members')->where('uid=' . $this->user['uid'])->save(['coinPassword' => think_ucenter_md5($npwd, UC_AUTH_KEY)])) {
                $this->success('修改密码成功', U('user/info'));
            }

            $this->error('修改密码失败或新密码与旧密码一致');
        } else {
            $this->display();
        }
    }

    /* 银行信息 */
    public function bank()
    {
        $user = M('members')->where(['uid' => $this->user['uid']])->find();
        if (!$user['coinPassword']) {
            $this->error('请先设置资金密码', U('user/coinpassword'));
        }

        $map = [];
        $map['uid'] = $this->user['uid'];
        $map['enable'] = 1;
        $mybanks = M('MemberBank')->alias('m')
            ->join('left join gygy_bank_list b ON m.bankId=b.id')
            ->field('m.*,b.name')
            ->where($map)->where('bankId>0')->select();
        $this->assign('mybanks', $mybanks);
        $usdts = M('MemberBank')->alias('m')
            ->join('left join gygy_bank_list b ON m.bankId=b.id')
            ->field('m.*,b.name')
            ->where($map)->where('bankId=0')->select();

        $this->assign('usdts', $usdts);
        $banks = M('bank_list')->where('isDelete=0')->order('sort')->select();

        foreach ($banks as $var) {
            $banks2[$var['id']] = $var;
        }
        $this->assign('banks', $banks2);

        $this->display();
    }
    public function add_bank()
    {

        if (IS_POST) {
            $type = I('type');

            $user = $this->user;
            if (think_ucenter_md5(I('secpass'), UC_AUTH_KEY) != $user['coinPassword']) {
                return $this->ajaxReturn([
                    'code' => 500,
                    'msg' => '资金密码不正确',
                ]);
            }
            //检查银行账号唯一
            $map = [];
            $map['account'] = I('account');
            $bank = M('member_bank')->where($map)->find();
            if ($bank) {
                return $this->ajaxReturn([
                    'code' => 500,
                    'msg' => '该' . I('account') . '账号已经使用',
                ]);
            }
            if ($type == 'bank') {
                $map = [];
                $map['uid'] = $this->user['uid'];
                $bank = M('member_bank')->where($map)->where('bankId>0')->select();
                if (count($bank) > 5) {
                    return $this->ajaxReturn([
                        'code' => 500,
                        'msg' => '最多只能绑定五张银行卡',
                    ]);
                }
                if (count($bank) > 0 && I('username') != $bank[0]['username']) {
                    return $this->ajaxReturn([
                        'code' => 500,
                        'msg' => '绑定的新钱包持有人必须跟之前绑定的一致',
                    ]);
                }
            } else {
                $map = [];
                $map['uid'] = $this->user['uid'];
                $bank = M('member_bank')->where($map)->where('bankId=0')->select();
                if (count($bank) > 5) {
                    return $this->ajaxReturn([
                        'code' => 500,
                        'msg' => '最多只能绑定五个钱包地址',
                    ]);
                }
                if (count($bank) > 0 && I('username') != $bank[0]['username']) {
                    return $this->ajaxReturn([
                        'code' => 500,
                        'msg' => '绑定的新钱包持有人必须跟之前绑定的一致',
                    ]);
                }
            }

            $b['uid'] = $this->user['uid'];
            $b['editEnable'] = 0;
            $b['bankId'] = $type == 'bank' ? I('bankId') : 0;
            $b['account'] = I('account');
            $b['username'] = I('username');
            $b['actionTime'] = time();

            if (M('member_bank')->add($b)) {
                // 如果是工行，参与工行卡首次绑定活动
                if (I('bankId') == 1) {
                    //读取系统配置
                    $this->getSystemSettings();
                    if ($coin = floatval($this->settings['huoDongRegister'])) {
                        $liqType = 51;
                        $info = '首次绑定工行卡赠送';
                        $ip = $this->ip(true);
                        $bankAccount = I('account');

                        if (!$ip) {
                            $ip = 0;
                        }

                        // 查找是否已经赠送过
                        //$sql="select id from {$this->prename}coin_log where liqType=$liqType and (`uid`={$this->user['uid']} or extfield0=$ip or extfield1=$bankAccount) limit 1";

                        $where['uid'] = $this->user['uid'];
                        $where['extfield0'] = $ip;
                        $where['extfield1'] = $bankAccount;
                        $where['_logic'] = 'or';
                        $map['_complex'] = $where;
                        $map['liqType'] = $liqType;

                        if (!M('coin_log')->where($map)->find()) {
                            $this->addCoin([
                                'coin' => $coin,
                                'liqType' => $liqType,
                                'info' => $info,
                                'extfield0' => $ip,
                                'extfield1' => $bankAccount,
                            ]);
                            $this->success(sprintf('更改银行信息成功，由于你第一次绑定工行卡，系统赠送%.2f元', $coin));
                        }
                    }
                }
                return $this->ajaxReturn([
                    'code' => 200,
                    'msg' => '绑定钱包信息成功',
                ]);
            }

        } else {
            $type = I('type');

            if ($type == 'bank') {

                $banks = M('BankList')->where('isDelete=0')->order('sort')->select();
                $this->assign('banks', $banks);

                $this->display('user/add_bank');

            } else {
                $this->display('user/add_usdt');

            }
        }

    }
    /**
     * 设置银行账户
     */
    public function setCBAccount()
    {
        if (IS_POST) {
            $user = M('members')->where('uid=' . $this->user['uid'])->find();

            if (think_ucenter_md5(I('coinPassword'), UC_AUTH_KEY) != $user['coinPassword']) {
                $this->error('资金密码不正确');
            }

            //检查银行账号唯一
            $map = [];
            $map['account'] = I('account');
            $bank = M('member_bank')->where($map)->find();
            if ($bank) {
                $this->error('该' . I('account') . '银行账号已经使用');
            }

            $map = [];
            $map['uid'] = $this->user['uid'];
            $bank = M('member_bank')->where($map)->select();
            if (count($bank) > 2) {
                $this->error('最多只能绑定三张银行卡');
            } else {
                if (count($bank) > 0 && I('username') != $bank[0]['username']) {
                    $this->error('绑定的新银行持卡人必须跟之前绑定的一致');
                }

                $b['uid'] = $this->user['uid'];
                $b['editEnable'] = 0;
                $b['bankId'] = I('bankId');
                $b['account'] = I('account');
                $b['username'] = I('username');
                $b['actionTime'] = time();

                if (M('member_bank')->add($b)) {
                    // 如果是工行，参与工行卡首次绑定活动
                    if (I('bankId') == 1) {
                        //读取系统配置
                        $this->getSystemSettings();
                        if ($coin = floatval($this->settings['huoDongRegister'])) {
                            $liqType = 51;
                            $info = '首次绑定工行卡赠送';
                            $ip = $this->ip(true);
                            $bankAccount = I('account');

                            if (!$ip) {
                                $ip = 0;
                            }

                            // 查找是否已经赠送过
                            //$sql="select id from {$this->prename}coin_log where liqType=$liqType and (`uid`={$this->user['uid']} or extfield0=$ip or extfield1=$bankAccount) limit 1";

                            $where['uid'] = $this->user['uid'];
                            $where['extfield0'] = $ip;
                            $where['extfield1'] = $bankAccount;
                            $where['_logic'] = 'or';
                            $map['_complex'] = $where;
                            $map['liqType'] = $liqType;

                            if (!M('coin_log')->where($map)->find()) {
                                $this->addCoin([
                                    'coin' => $coin,
                                    'liqType' => $liqType,
                                    'info' => $info,
                                    'extfield0' => $ip,
                                    'extfield1' => $bankAccount,
                                ]);
                                $this->success(sprintf('更改银行信息成功，由于你第一次绑定工行卡，系统赠送%.2f元', $coin));
                            }
                        }
                    }
                    $this->success('更改银行信息成功', U('bank'));
                } else {
                    $this->error('更改银行信息出错');
                }
            }
        }
    }

    final public function cash()
    {
        $bank = M('member_bank')->where(['enable' => 1, 'uid' => $this->user['uid']])->select();
        $bankList = M('bank_list')->where(['isDelete' => 0])->field('id as lid,name')->select();
        $bankList2 = [];
        foreach ($bankList as $b) {
            $bankList2[$b['lid']] = $b;
        }
        foreach ($bank as $key => $b) {
            if ($bbb = $bankList2[$b['bankId']]) {
                $bank[$key] = array_merge($b, $bbb);
            }
        }

        $this->assign('bank', $bank);
        $grade = M('member_level')->where(['level' => $this->user['grade']])->field('maxToCashCount')->find();
        $this->assign('maxToCashCount', $grade['maxToCashCount']);

        $time = strtotime(date('Y-m-d', $this->time));
        $cash = M('member_cash')->where(['actionTime' => ['egt', $time], 'uid' => $this->user['uid']])->field('count(*) as count')->find();
        $this->assign('cashTimes', 3 - $cash['count']);
        $this->assign('settings', $this->settings);

        $this->display();
    }

    /* 进入充值，生产充值订单 */
    final public function recharge()
    {

        if (IS_POST) {
            if (I('amount') <= 0) {
                return $this->ajaxReturn(['code' => 3, 'msg' => '充值金额必须大于0', 'data' => ''], 'json');
            }

            $this->user = session('user');
            $count = M('member_recharge')
                ->where(['uid' => $this->user['uid'], 'state' => 10])
                ->order('id desc')
                ->limit(5)->count();

            if ($count > 5) {
                return $this->ajaxReturn(["code" => 2, "msg" => "充值次数太多，请30分钟后再操作!", "data" => 1800]);
            }
            $amount = I('amount');
            $data = [
                'amount' => $amount,
                'rechargeAmount' => $amount,
                'actionUid' => $this->user['uid'],
                'actionIP' => $this->ip(true),
                'actionTime' => time(),
                'rechargeTime' => time(),
            ];

            $data['uid'] = $this->user['uid'];
            $data['coin'] = 0;
            $data['fcoin'] = 0;
            $data['username'] = $this->user['username'];
            $data['info'] = '银行卡充值';
            $data['state'] = 10;
            $data['mBankId'] = 1;
            $data['rechargeId'] = date('YmdHis') . mt_rand(10, 99);
            $result = M('member_recharge')->add($data);
            if (!$result) {
                return json(["code" => 0, "msg" => "失败", "data" => '']);
            }
            // // 插入提现请求表
            // unset($para['coinpwd']);
            $para['rechargeId'] = $result['rechargeId'];
            $para['actionTime'] = $this->time;
            $para['uid'] = $this->user['uid'];
            $para['username'] = $this->user['username'];
            $para['actionIP'] = $this->ip(true);
            $para['mBankId'] = 13;
            $para['info'] = '银行卡充值';
            $para['amount'] = intval(I('amount'));
            M('coin_log')->add($para);
            // if(M('member_recharge')->add($para)){

            // }else{
            //     $this->error('充值订单生产请求出错');
            // }

            // $data['rechargeId'] = $para['rechargeId'];

            $this->ajaxReturn(['code' => 1, 'msg' => '提交成功', 'data' => 15], 'json');

        } else {
            $bank = M('member_bank')->where(['uid' => 1, 'admin' => 1, 'enable' => 1])->select();
            $bankName = M('bank_list')->where('id=' . $bank[0]['bankId'])->find();
            // var_dump($bankName);
            $this->getSystemSettings();
            $this->assign('settings', $this->settings);
            $this->assign('bankName', $bankName);
            $this->assign('bank', $bank);
            $this->display();
        }

    }

    final private function getRechId()
    {
        $rechargeId = $this->guid();
        if (M('member_recharge')->where(['rechargeId' => $rechargeId])->find()) {
            getRechId();
        } else {
            return $rechargeId;
        }
    }

    public function guid()
    {
        $chars = md5(uniqid(mt_rand(), true));
        $uuid = substr($chars, 0, 8);
        $uuid .= substr($chars, 8, 4);
        $uuid .= substr($chars, 12, 4);
        $uuid .= substr($chars, 16, 4);
        $uuid .= substr($chars, 20, 12);
        return $uuid;
    }
}
