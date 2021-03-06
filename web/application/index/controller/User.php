<?php

namespace app\index\controller;

use app\common\Common;
use app\index\model\AdminLog;
use app\index\model\BankList;
use app\index\model\Bets;
use app\index\model\CoinLog;
use app\index\model\Content;
use app\index\model\DataTime;
use app\index\model\Gongzi;
use app\index\model\MemberBank;
use app\index\model\MemberRecharge;
use app\index\model\Members;
use app\index\model\MemberSession;
use app\index\model\Params;
use app\index\model\Played;
use app\index\model\Type;
use think\Controller;
use think\Db;
use think\Log;
use think\Request;
use think\Session;
use think\View;

class User extends Controller
{
    private $user;
    public $settings;
    public $adminLogType = [
        1 => '提现处理',
        2 => '充值确认',
        3 => '管理员充值',
        4 => '增加用户',
        5 => '修改用户',
        55 => '启用/禁用/删除/用户',

        6 => '删除用户',
        7 => '添加管理员',
        8 => '修改管理员密码',
        9 => '删除管理员',
        10 => '修改系统设置',

        11 => '银行添加',
        111 => '银行删除',

        12 => '彩种设置',
        13 => '玩法played设置',
        131 => '玩法groups设置',

        14 => '等级设置修改',
        15 => '兑换订单处理',
        16 => '兑换商品操作',
        17 => '添加开奖',
        171 => '手动派奖',

        18 => '修改投注记录',
        181 => '后台撤单',

        19 => '清除管理员',

        20 => '清理用户',
        21 => '清理数据',

        22 => '修改开奖时间',
        23 => '重置用户银行',
    ];

    protected function _initialize()
    {
        // 客服
        $kefu = Params::getParams('kefuGG')['kefuGG'];
        $stauts = Params::getParams('kefuStatus')['kefuStatus'];

        View::share(['kefu' => $kefu, 'status' => $stauts]);
        if (empty(Session::get('userData'))) {
            return view('index/login');
        } else {
            $this->assign('play_lists', (new Game())->play_list);
            $this->user = Session::get('userData');
        }
        if (!$this->settings) {
            if ($data = Params::select()) {
                foreach ($data as $var) {
                    $this->settings[$var['name']] = $var['value'];
                }
            }
        }
        return $this->assign('settings', $this->settings);
    }

    public function getIndex()
    {
        $uerType = Session::get('userData') ? Session::get('userData')['type'] : "0";
        $this->assign('page_url', isset($_GET['tag']) ? 'user_messages.html' : "user_list.html");
        $this->assign('tag', isset($_GET['tag']) ? $_GET['tag'] : "");
        $this->assign('user_type', $uerType);
        $this->assign('is_test', Session::get('userData') ? Session::get('userData')['is_test'] : "1");
        $user_rigongzi = Session::get('userData') ? Session::get('userData')['ri_gong_zi'] : 0;
        $user_rigongzi = substr_count(Session::get('userData')['parents'], ',') >= 4 || Session::get('userData')['type'] == 0 ? 0 : $user_rigongzi;
        $this->assign('user_rigongzi', ($user_rigongzi > 0 && $uerType == 1) ? true : false);

        return view('user/index');
    }

    public function breadCrumbs($arr)
    {
        array_push($arr, $cur_member);
        return $arr;
    }

    public function getUser_list()
    {
        $user = Session::get('userData');
        $uid = $user['uid'];
        $where = [];
        $arr = $user;
        if (!empty($_GET['uid'])) {
//            $cur_member = Members::get($_GET['uid'])->getData();
            //
            $uid = $_GET['uid'];

            $cur_member = Members::with('parent')->where('uid', $uid)->find();
            $arr = $cur_member;
//            $cur_member->parent();
            //            $arr = $cur_member->full_name;
            //            unset($arr[1]);
        } else {
            if (isset($_GET['bank_min'])) {
                $where['coin'] = ['>=', $_GET['bank_min']];
            }
            if (isset($_GET['bank_max']) && intval($_GET['bank_max']) > 0) {
                $where['coin'] = ['<=', intval($_GET['bank_max'])];
            }
        }
        $pageSize = isset($_GET['pageSize']) ? $_GET['pageSize'] : 10;
        if (isset($_GET['username']) && $_GET['username'] != '') {
            $where['username'] = ['like', strtolower(trim($_GET['username'])) . '%'];
            $where[] = ['exp', 'FIND_IN_SET(' . $uid . ',parents)'];
        } else {
            $where['parentId'] = $uid;
        }

//        $where['uid'] = array('or',$uid);

//        $list = Members::where($where)->where('FIND_IN_SET('.$uid.',parents)')->order('username')
        $list = Members::with('parent')->where($where)->whereOr('uid', $uid)->order('username')
            ->paginate($pageSize, false, ['query' => $_GET]);
        // 获取分页显示
        $page = $list->render();
        $total = $list->total();
        $currentPage = $list->currentPage();
        $this->assign('page', $page);
        $this->assign('total', $total);
        $this->assign('currentPage', $currentPage);
        $this->assign('totalPage', ceil($total / $pageSize));
        $first = [];
        $kk = 100;
//        dump($list->toArray());
        $list = $list->toArray()['data'];
        foreach ($list as $key => $sub) {
            $list[$key]['type'] = $sub['type'] = $sub['type'] == 0 ? "会员" : "代理";
            if ($sub['uid'] == $uid) {
                $first = $sub;
                $kk = $key;
            }
        }
        if (!empty($first)) {
            unset($list[$kk]);
            array_unshift($list, $first);
        }
        // dump($list);
        $this->assign('data_list', $list);

        $member = Members::get($uid)->getData();
        $this->assign('arr', $arr);
        $this->assign('userType', $user['type']);
        $this->assign('userCoin', $user['coin']);
        $this->assign('uid', $uid);
        $this->assign('is_test', $user['is_test']);
        $this->assign('login_uid', $user['uid']);
        $fandian = floatval($member['fanDian']);
        $fdhtml = "<option value=''>请选择返点</option><option value=$fandian>0</option>";
        for ($idx = 0.1; $idx < $fandian; $idx = $idx + 0.1) {
            if ($fandian == $idx) {
                continue;
            }
            $fdhtml .= "<option value=$idx>" . number_format($idx, 1) . "</option>";
        }
        $this->assign('fandian', $fdhtml);
        return view('user/user_list');
    }

    public function getUser_userinfo()
    {
        $member = [];
        $team_coin = 0;
        if (isset($_GET['uid'])) {
            $member = Members::where(['uid' => $_GET['uid']])->find();
            if ($member) {
                $list = Members::where('FIND_IN_SET(' . $member['uid'] . ',parents)')->select();
                foreach ($list as $item => $sub) {
                    $team_coin = $team_coin + $sub['coin'];
                }
            }
        }
        $this->assign('member', $member);
        $this->assign('team_coin', $team_coin);
        return view('user/user_userinfo');
    }

    public function getUser_userteam()
    {
        $member = [];
        $team_coin = 0;
        if (isset($_GET['uid'])) {
            $member = Members::where(['uid' => $_GET['uid']])->find();
            if ($member) {
                $list = Members::where('FIND_IN_SET(' . $member['uid'] . ',parents)')->select();
                foreach ($list as $item => $sub) {
                    $team_coin = $team_coin + $sub['coin'];
                }
            }
        }
        $this->assign('member', $member);
        $this->assign('team_coin', $team_coin);
        return view('user/user_userteam');
    }

    public function getGameinfo_gamelist()
    {
        $member = [];
        $username = "";
        $cur_username = "";
        if (isset($_GET['uid'])) {
            $member = Members::where(['uid' => $_GET['uid']])->find();
            if ($member) {
                $cur_username = $member['username'];
            }
        }
        if (isset($_GET['username'])) {
            $username = $_GET['username'];
            $member = Members::where(['username' => $username])->find();
            $cur_username = $username;
        }
        $p_days = isset($_GET['days']) ? $_GET['days'] : date('Y-m-d', time()); //投注时间
        $lotteryid = isset($_GET['lotteryid']) ? $_GET['lotteryid'] : ""; //彩种名称
        $methodid = isset($_GET['methodid']) ? $_GET['methodid'] : ""; //游戏玩法
        $issue = isset($_GET['issue']) ? $_GET['issue'] : ""; //彩种奖期
        $include = isset($_GET['include']) ? $_GET['include'] : ""; //包含下级
        //获取投注时间
        $days = [];
        for ($idx = 0; $idx < 5; $idx++) {
            $cur_day = strtotime(date('Y-m-d', time()));
            $days[$idx] = date("Y-m-d", $cur_day - (86400 * $idx));
        }
        $uid = $member ? $member['uid'] : "";
        if (!empty($include) && $uid) {
            $where['uid'] = ['like', '%' . $uid . '%'];
        } else {
            $where['uid'] = $uid;
        }
        $where['actionTime'] = ['between time', [$p_days, $p_days]];
        if (!empty($lotteryid)) {
            $where['type'] = $lotteryid;
        }
        if (!empty($methodid)) {
            $where['playedId'] = $methodid;
        }
        if (!empty($issue)) {
            $where['actionNo'] = $issue;
        }
        $pageSize = 20;
        $bets = Bets::where($where)->paginate($pageSize, false, ['query' => $_GET]);
        foreach ($bets as $idx => $sub) {
            $bets[$idx]['type'] = $this->getGameType($sub['type']);
            $bets[$idx]['playedId'] = $this->getPayType($sub['playedId']);
            $bets[$idx]['mode'] = $this->mode($sub['mode']);
            $bets[$idx]['lotteryNo'] = $sub['lotteryNo'] ? $sub['lotteryNo'] : "---";
            $bets[$idx]['zj_money'] = $sub['lotteryNo'] ? number_format($sub['bonus'], 2) : '0.00';
            if ($sub['isDelete'] == 1) {
                $bets[$idx]['status_name'] = "已撤单";
            } elseif (!$sub['lotteryNo']) {
                $bets[$idx]['status_name'] = "未开奖";
            } elseif ($sub['zjCount']) {
                $bets[$idx]['status_name'] = "已中奖";
            } else {
                $bets[$idx]['status_name'] = "未中奖";
            }
        }
        $total = $bets->total();
        $this->assign('bets', $bets);
        $this->assign('total', $total);
        $this->assign('page', $bets->render());
        $this->assign('currentPage', $bets->currentPage());
        $this->assign('totalPage', ceil($total / $pageSize));
        $this->assign('days', $days);
        $this->assign('member', $member);
        $this->assign('cur_username', $cur_username);
        $this->assign('types_data', $this->types());
        $this->assign('data_method', json_encode($this->played()));
        $this->assign('data_issue', json_encode($this->getNo()));
        return view('user/gameinfo_gamelist');
    }

    public function getUser_edituserpoint()
    {
        return view('user/user_edituserpoint');
    }

    public function getUser_messagestoparent()
    {
        return view('user/user_messagestoparent');
    }

    public function getUser_adduser()
    {
        $user = Session::get('userData');
        $model_u = new Members();
        $login_user = $model_u->where(['uid' => $user['uid']])->find();
        $fandian = $login_user ? $login_user['fanDian'] : 0;
        $option = "<option value='$fandian'>0</option>";
        for ($idx = 0.1; $idx <= $fandian; $idx += 0.1) {
            $bldw = round($fandian - $idx, 1); //自身保留点位
            $idx = number_format($idx, 1);
            $option .= "<option value='$bldw'>$idx</option>";
        }
        $this->assign('option', $option);
        if (!empty($_POST)) {
            $conf = new Members();
            if (!preg_match("/^[0-9a-zA-Z]{6,11}$/", $_POST['username'])) {
                $this->error('用户名只能由英文和数字组成，长度6-11个字符');
            }
            $m = $conf::where(['username' => $_POST['username']])->find();
            if (!empty($m)) {
                $this->error('用户已经存在');
            }
            $password = think_ucenter_md5($_POST['userpass'], UC_AUTH_KEY);
            if ($_POST['point'] > $fandian) {
                $this->error('返点设置有误！');
            }

            if ($_POST['usertype'] == 0) {
                $_POST['point'] = 0;
            }

            $data = [
                'type' => $_POST['usertype'],
                'password' => $password,
                'coinPassword' => $password,
                'username' => $_POST['username'],
                /* 'nickname'=>$_POST['nickname'],
                'qq'=>$_POST['qq'],*/
                'fanDian' => $_POST['point'],
                'regTime' => time(),
                'is_test' => $user['is_test'],
                'parents' => 0,
            ];
            $conf::insert($data);
            if ($lastid = $conf->getLastInsID()) {
                $data2['parentId'] = $user['uid'];
                $data2['parents'] = $user['parents'] . ',' . $lastid;
                $conf->where(['uid' => $lastid])->update($data2);
                $this->addLog(4, $lastid, $data['username']);
                $this->success('添加成功');
            }
        }
        return view('user/user_adduser');
    }

    public function postUser_adduser()
    {
        $this->getUser_adduser();
    }

    public function getUser_otheradduser()
    {
        return view('user/user_otheradduser');
    }

    public function getUser_userset()
    {
        return view('user/user_userset');
    }
    // =================================
    public function getUserBalance()
    {
        $user = Members::where(['uid' => input('user_id')])->find();
        $usdt_total = \number_format($user['coin'] / $this->settings['usdt_setting'], 4);
        return json(["isSuccess" => 1, "availablebalance" => $user['coin'], 'usdt_total' => $usdt_total]);
    }
    public function getUser_setmenu()
    {
        $user = Session::get('userData');
        $this->assign('is_test', $user ? $user['is_test'] : 1);
        $list = MemberBank::where(['uid' => $user['uid']])->where('enable', 1)->order('id desc')->select();
        $this->assign('list', $list);

        return view('user/user_setmenu');
    }
    public function userBankStore(Request $request)
    {

        $type = \input('type');
        $userData = Session::get('userData');
        $uid = $userData['uid'];
        $user = Members::where(['uid' => $uid])->find();

        switch ($type) {
            case 'usdt':
                if (request()->isPost()) {
                    $account_name = input('account_name');
                    $bankId = 0;
                    $account = input('account');
                    $bankDetail = input('bankDetail');

                    $mbank = MemberBank::where(['uid' => $uid, 'bankId' => 0])->select();
                    if (count($mbank) > 0 && $account_name != $mbank[0]['username']) {
                        return json([
                            'code' => 500,
                            'msg' => '绑定的新usdt持有人必须跟之前绑定的一致',
                        ]);
                    }
                    if (!$account_name || !$account) {
                        return json([
                            'code' => 500,
                            'msg' => '卡号信息有误',
                        ]);

                    }
                    if (count($mbank) >= 5) {
                        return json([
                            'code' => 500,
                            'msg' => '最多绑定5个usdt地址',
                        ]);

                    }
                    $has_bank = MemberBank::where(['account' => $account])->find();
                    if ($has_bank) {
                        return json([
                            'code' => 500,
                            'msg' => '该钱包已经存在',
                        ]);

                    }
                    if ($user['coinPassword'] != think_ucenter_md5(input('scpassword'), UC_AUTH_KEY)) {
                        return json([
                            'code' => 500,
                            'msg' => '资金密码不正确',
                        ]);

                    }
                    $data = [
                        'uid' => $uid,
                        'bankId' => 0,
                        'username' => $account_name,
                        'account' => $account,
                        'actionTime' => time(),
                        'bankDetail' => $bankDetail,
                    ];

                    MemberBank::insert($data);
                    return json(['code' => 200, 'msg' => '绑定成功!']);

                }

                return view('user/user_usdt_add');

                break;

            default:
                if (request()->isPost()) {
                    $account_name = input('account_name');
                    $bankId = input('bankId');
                    $account = input('account');
                    $bankDetail = input('bankDetail');

                    $mbank = MemberBank::where(['uid' => $uid])->where('bankId', '>', 0)->select();
                    if (count($mbank) > 0 && $account_name != $mbank[0]['username']) {
                        return json([
                            'code' => 500,
                            'msg' => '绑定的新银行持卡人必须跟之前绑定的一致',
                        ]);
                    }
                    if (!$account_name || !$account) {
                        return json([
                            'code' => 500,
                            'msg' => '卡号信息有误',
                        ]);

                    } elseif (count($mbank) >= 5) {
                        return json([
                            'code' => 500,
                            'msg' => '最多绑定5个银行卡',
                        ]);

                    } else {
                        $bank = BankList::where(['id' => $bankId])->find();
                        if (!$bank) {
                            return json([
                                'code' => 500,
                                'msg' => '银行信息有误',
                            ]);
                        }
                        $has_bank = MemberBank::where(['account' => $account])->find();
                        if ($has_bank) {
                            return json([
                                'code' => 500,
                                'msg' => '该银行已经存在',
                            ]);

                        }
                        if ($user['coinPassword'] != think_ucenter_md5(input('scpassword'), UC_AUTH_KEY)) {
                            return json([
                                'code' => 500,
                                'msg' => '资金密码不正确',
                            ]);

                        }

                        $data = [
                            'uid' => $uid,
                            'bankId' => $bankId,
                            'username' => $account_name,
                            'account' => $account,
                            'actionTime' => time(),
                            'bankDetail' => $bankDetail ? $bankDetail : $bank['name'],
                        ];
                        MemberBank::insert($data);
                        return json([
                            'code' => 200,
                            'msg' => '银行卡绑定成功!',
                        ]);

                    }
                }
                $bank_list = BankList::order('id desc')->select();
                $this->assign('bank_list', $bank_list);

                return view('user/user_bank_add');
                break;
        }

    }
    public function userBankDel()
    {
        MemberBank::destroy(input('id'));
        return \json([
            'code' => 200,
            'msg' => '删除成功!',
        ]);
    }
    public function changePassword()
    {
        if (!empty($_POST)) {
            $changetype = input('changetype');
            $user = Session::get('userData');
            $where = ['uid' => $user['uid']];
            $member = Members::where($where)->find();
//    ["coinPassword"] =&gt; string(32) "9601f874b0e5c0c05dba8a9c5f209e99"

            if (input('newpass') != input('confirm_newpass')) {
                return json([
                    'code' => 500,
                    'msg' => '两次密码不一致',
                ]);

            }
            $oldpass = think_ucenter_md5(input('oldpass'), UC_AUTH_KEY);
            $newpass = think_ucenter_md5(input('newpass'), UC_AUTH_KEY);
            // \dump($oldpass);87dd81f7ae6350f36668c86b66040f6e
            // \dump($newpass);9601f874b0e5c0c05dba8a9c5f209e99

            if ($changetype == 'loginpass') {
                if (($member['password'] == $oldpass) || $oldpass == "") {
                    Members::where($where)->update([
                        'password' => $newpass,
                    ]);
                } else {
                    return json([
                        'code' => 500,
                        'msg' => '旧密码不正确',
                    ]);
                }
            } elseif ($changetype == 'secpass') {
                if ($member['coinPassword'] == $oldpass || $oldpass == "") {
                    Members::where($where)->update([
                        'coinPassword' => $newpass,
                    ]);
                } else {
                    return json([
                        'code' => 500,
                        'msg' => '资金密码不正确',
                    ]);

                }
            } else {
                $this->success('你要弄什么');
            }
            $this->success('设置成功');
        }
    }
    public function withDrawIndex()
    {
        return view('user/with_draw', [
            'user' => Session::get('userData'),
            'usdt_setting' => $this->settings['usdt_setting'],
        ]);
    }
//     public function withDrawStore()
    //     {
    //         $user = Session::get('userData');
    //         $amount = intval(input('amount'));
    //         if ($user['is_test'] == 1) {
    //             $this->error('此账号无此权限');
    //         }
    //         if ($user['coin'] < $amount) {
    //             $this->error('你账户资金不足');
    //         }
    //         $time = strtotime(date('Y-m-d', $this->time));
    //         $cash = MemberCash::where(['actionTime' => ['egt', $time], 'uid' => $user['uid']])->field('count(*) as count')->find();
    // //        $grade = MemberLevel::where(array('level' => $this->user['grade']))->field('maxToCashCount')->find();
    //         if ($times = $cash['count']) {
    //             //$cashTimes=$grade['maxToCashCount'];
    //             $cashTimes = $this->settings['cashTimes'];
    //             if ($times >= $cashTimes) {
    //                 $this->error('对不起，今天你提现次数已达到最大限额，请明天再来');
    //             }
    //         }
    // //增加黑客修改提现金额为负数不合法的判断
    //         if ($amount < 100) {
    //             $this->error('提现金额不得低于100元');
    //         }
    //         if ($amount > 100000) {
    //             $this->error('单次提现金额不能大于10万');
    //         }

//         if ($amount < $this->settings['cashMin'] || $amount > $this->settings['cashMax']) {
    //             $this->error('提现金额必须介于' . $this->settings['cashMin'] . '和' . $this->settings['cashMax'] . '之间');
    //         }
    //         //提示时间检查
    //         $baseTime = strtotime(date('Y-m-d ', $this->time) . '06:00');
    //         $fromTime = strtotime(date('Y-m-d ', $this->time) . $this->settings['cashFromTime'] . ':00');
    //         $toTime = strtotime(date('Y-m-d ', $this->time) . $this->settings['cashToTime'] . ':00');
    // //if($toTime<$baseTime) $toTime.=24*3600;
    //         if (($fromTime > $toTime && $this->time < $fromTime && $this->time > $toTime)
    //             || ($fromTime < $toTime && ($this->time < $fromTime || $this->time > $toTime))
    //         ) {
    //             $this->error("提现时间：从" . $this->settings['cashFromTime'] . "到" . $this->settings['cashToTime']);
    //         }
    //         $memberBankId = input('bankId');
    //         $bank = MemberBank::where(['uid' => $this->user['uid'], 'id' => $memberBankId])->find();
    //         if (empty($bank)) {
    //             $this->error('未绑定银行卡无法提现');
    //         }
    //         if ($bank['actionTime'] + 8 * 60 * 60 > time()) {
    //             $this->error('该银行卡添加不足8小时，不能用于提现');
    //         }
    //         $gRs = MemberRecharge::where(['uid' => $this->user['uid'], 'state' => ['in', '1,2,9'], 'isDelete' => 0])
    //             ->field('sum(case when rechargeAmount>0 then rechargeAmount else amount end) as rechargeAmount')->find();
    //         $rechargeTotal = $gRs["rechargeAmount"];
    //         if ($rechargeTotal > 0) {
    // //            $betAmount = M('bets')->where(array('uid' => $this->user['uid'], 'isDelete' => 0, 'lotteryNo' => array('neq', '')))->sum(mode * beiShu * actionNum);
    //             $betAmount = $user['scoreTotal'];
    //             // dump($rechargeTotal);//90000
    //             // dump($betAmount);//209
    //             if ($betAmount < ($rechargeTotal * 0.25)) {
    //                 $this->error('未达到投注量无法提现');
    //             }
    //         }
    //         $para['username'] = $bank['username'];
    //         $para['account'] = $bank['account'];
    //         $para['amount'] = $amount;
    //         $para['bankId'] = $bank['bankId'];
    //         $para['memberBankId'] = $bank['id'];
    //         $para['actionTime'] = $this->time;
    //         $para['uid'] = $this->user['uid'];

//         Db::startTrans();
    //         $users = Members::where(['uid' => $user['uid']])->lock(true)->find();
    //         if ($users['coin'] < $amount) {
    //             Db::rollback();
    //             $this->error('你账户资金不足');
    //         }
    // // 插入提现请求表
    //         $cash = new MemberCash();
    //         $cash::insert($para);
    //         if ($lastid = $cash->getLastInsID()) {
    //             // 流动资金
    //             $return = $this->addCoin([
    //                 'coin' => 0 - $para['amount'],
    //                 'fcoin' => $para['amount'],
    //                 'uid' => $para['uid'],
    //                 'liqType' => 106,
    //                 'info' => "提现[$lastid]资金冻结",
    //                 'extfield0' => $lastid,
    //             ]);
    //             // 提现金额分账记录
    //             if (!empty($amountGroup)) {
    //                 $cashSplit = [];
    //                 foreach ($amountGroup as $amount) {
    //                     $row['cashId'] = $lastid;
    //                     $row['uid'] = $this->user['uid'];
    //                     $row['actionTime'] = $this->time;
    //                     $row['splitAmount'] = $amount;
    //                     $row['bankId'] = $bank['bankId'];
    //                     $row['account'] = $bank['account'];
    //                     $row['username'] = $bank['username'];
    //                     $row['state'] = 1;

//                     $cashSplit[] = $row;
    //                 }
    //                 $splitRet = (new MemberCashSplit())->saveAll($cashSplit);
    //                 if (!$splitRet) {
    //                     Db::rollback(); //不成功，则回滚
    //                     $this->error('提交提现请求出错');
    //                 }
    //             }
    //             if ($return) {
    //                 Db::commit(); //成功则提交
    //                 $this->success('申请提现成功，提现将在10分钟内到账，如未到账请联系在线客服。');
    //             } else {
    //                 Db::rollback(); //不成功，则回滚
    //                 $this->error('提交提现请求出错');
    //             }
    //         }

//     }
    public function getMemberBanks()
    {
        $type = input('type');
        $user = Session::get('userData');
        if ($type == 0) {
            return json([
                'code' => 200,
                'data' => MemberBank::where(['uid' => $user['uid']])->where('bankId', '>', 0)->select(),
            ]);
        } else {
            return json([
                'code' => 200,
                'data' => MemberBank::where(['uid' => $user['uid'], 'bankId' => 0])->select(),
            ]);

        }
    }
    // ============
    public function getUser_userbankinfo()
    {
        $user = Session::get('userData');
        $where = ['uid' => $user['uid']];
        $member = Members::where($where)->find();
        $this->assign('is_test', $user ? $user['is_test'] : 1);
        if (!$member) {
            $this->error('回话过期');
        }
        if (!empty($_GET)) {
            $secpass = $_GET['secpass'];
            if ($member['coinPassword'] != think_ucenter_md5($secpass, UC_AUTH_KEY)) {
                $this->error('资金密码不正确');
            } else {
                $this->assign('list', $this->bankList());
                return view('user/user_setuserbankinfo');
            }
        }
        return view('user/user_userbankinfo');
    }

    public function bankList()
    {
        $user = Session::get('userData');
        $list = MemberBank::where(['uid' => $user['uid']])->where('enable', 1)->order('id desc')->select();
        foreach ($list as $key => $item) {
            $list[$key]['account'] = '***************' . substr($item['account'], strlen($item['account']) - 4, 4);
        }
        return $list;
    }

    // usdt
    public function getSecurity_adduserusdt()
    {
        return view('user/security_adduserusdt');
    }
    public function usdtAccountStore(Request $request)
    {
        $user = Session::get('userData');
        $data = [
            'uid' => $user['uid'],
            'bankId' => '',
            'username' => $request->param('account_name'),
            'account' => $request->param('account'),
            'actionTime' => time(),
            'bankDetail' => $request->param('bankDetail'),
        ];
        MemberBank::insert($data);
        return json(['code' => 201, 'message' => '绑定成功!']);

    }

    public function getSecurity_adduserbank()
    {
        $this->assign('list', $this->bankList());
        $user = Session::get('userData');
        $uid = $user['uid'];
        if (!empty($_GET['account_name'])) {
            $account_name = $_GET['account_name'];
            $bankId = $_GET['bankId'];
            $account = trim($_GET['account']);
            $bankDetail = $_GET['bankDetail'];
            $mbank = MemberBank::where(['uid' => $uid])->select();
            if (count($mbank) > 0 && $account_name != $mbank[0]['username']) {
                $this->error('绑定的新银行持卡人必须跟之前绑定的一致');
            }
            if (!$account_name || !$account) {
                $this->error('卡号信息有误');
            } elseif (count($mbank) >= 5) {
                $this->error('最多绑定5个银行卡');
            } else {
                $bank = BankList::where(['id' => $bankId])->find();
                if (!$bank) {
                    $this->error('银行信息有误');
                }
                $has_bank = MemberBank::where(['account' => $account])->find();
                if ($has_bank) {
                    $this->error('该银行已经存在');
                }
                $data = [
                    'uid' => $uid,
                    'bankId' => $bankId,
                    'username' => $account_name,
                    'account' => $account,
                    'actionTime' => time(),
                    'bankDetail' => $bankDetail ? $bankDetail : $bank['name'],
                ];
                MemberBank::insert($data);
                $this->success('新增成功');
            }
        }
        $con = new Common();
        $this->assign('bankList', $con->bankLists());
        return view('user/security_adduserbank');
    }

    public function getUser_changeloginpass()
    {
        if (!empty($_POST)) {
            $changetype = $_POST['changetype'];
            $user = Session::get('userData');
            $where = ['uid' => $user['uid']];
            $member = Members::where($where)->find();
            if (!$member) {
                $this->error('回话过期');
            }
            $oldpass = think_ucenter_md5($_POST['oldpass'], UC_AUTH_KEY);
            $newpass = think_ucenter_md5($_POST['newpass'], UC_AUTH_KEY);
            if ($changetype == 'loginpass') {
                if (($member['password'] == $oldpass) || $oldpass == "") {
                    Members::where($where)->update([
                        'password' => $newpass,
                    ]);
                } else {
                    $this->error('旧密码不正确');
                }
            } elseif ($changetype == 'secpass') {
                if ($member['coinPassword'] == $oldpass || $oldpass == "") {
                    Members::where($where)->update([
                        'coinPassword' => $newpass,
                    ]);
                } else {
                    $this->error('资金密码不正确');
                }
            } else {
                $this->success('你要弄什么');
            }
            $this->success('设置成功');
        }
        return view('user/user_changeloginpass');
    }

    public function postUser_changeloginpass()
    {
        $this->getUser_changeloginpass();
    }

    public function getUser_bindsequestion()
    {
        return view('user/user_bindsequestion');
    }

    public function getUser_emailbind()
    {
        return view('user/user_emailbind');
    }

    public function getUser_changename()
    {
        $user = Session::get('userData');
        $member = Members::where(['uid' => $user['uid']])->find();
        $nickname = $member ? $member['nickname'] : "";
        $this->assign('nickname', $nickname);
        if (!empty($_POST['nickname'])) {
            Members::where(['uid' => $user['uid']])->update([
                'nickname' => $_POST['nickname'],
            ]);
            $this->addLog(4, $user['uid'], $_POST['username']);
            $this->assign('nickname', $_POST['nickname']);
            $this->success('修改成功');
        }
        return view('user/user_changename');
    }

    public function postUser_changename()
    {
        $this->getUser_changename();
    }

    public function getUser_messages()
    {
        $pageSize = 20;
        $list = Content::where(['enable' => 1])->order('id desc')->paginate($pageSize);
        $page = $list->render();
        $total = $list->total();
        $this->assign('list', $list);
        $this->assign('page', $page);
        $this->assign('total', $total);
        $this->assign('currentPage', $list->currentPage());
        $this->assign('totalPage', ceil($total / $pageSize));
        return view('user/user_messages');
    }

    public function getShowMessage()
    {
        $data = Content::where(['id' => $_GET['id']])->find();
        $this->assign('data', $data);
        return view('user/showmessage');
    }

    public function getUser_team()
    {
        $user = Session::get('userData');
        $team_coin = 0;
        $team_man = 0;
        $today_add = 0;
        $today_bets = 0;
        $online = 0;
        $member = Members::where(['uid' => $user['uid']])->find();
        if ($member) {
            $where[] = ['exp', 'FIND_IN_SET(' . $member['uid'] . ',parents)'];
            $where['isDelete'] = 0;
            $list = Members::where($where)->field('uid,coin,regTime')->select();
            foreach ($list as $item => $sub) {
                $team_coin = $team_coin + $sub['coin'];
                if (strtotime(date('Y-m-d', $sub['regTime'])) == strtotime(date('Y-m-d', time()))) {
                    $today_add++;
                }
            }
            $team_man = count($list);
            $logins = MemberSession::where(['accessTime' => ['gt', time() - 900], 'isOnLine' => 1])->field('uid')->order('id')->select();
            foreach ($logins as $l) {
                $logins2[$l['uid']] = $l;
            }
            foreach ($list as $child) {
                if (isset($logins2[$child['uid']])) {
                    $online++;
                }
            }
        }
        $this->assign('team_coin', $team_coin);
        $this->assign('team_man', $team_man);
        $this->assign('today_add', $today_add);
        $this->assign('today_bets', $today_bets);
        $this->assign('online', $online);
        return view('user/user_team');
    }

    public function getGameType($id)
    {
        $type = Type::where(['id' => $id])->find();
        if ($type) {
            return $type['title'];
        } else {
            return "";
        }
    }

    public function getPayType($id)
    {
        $info = Played::where(['id' => $id])->find();
        if ($info) {
            return $info['name'];
        } else {
            return "";
        }
    }

    public function mode($mode)
    {
        $modeName = ['2.00' => '元', '0.20' => '角', '0.02' => '分'];
        return isset($modeName[$mode]) ? $modeName[$mode] : 1;
    }

    public function types()
    {
        return Type::where(['isDelete' => 0])->order('sort')->select();
    }

    public function played()
    {
        $type = Type::where(['isDelete' => 0])->order('sort')->select();
        $playeds = Played::where(['enable' => 1])->order('sort')->select();
        $data = [];
        if ($playeds) {
            foreach ($type as $item) {
                foreach ($playeds as $var) {
                    $cur_play = ['lotteryid' => $var['type'], 'methodid' => $var['id'], 'methodname' => $var['name']];
                    if ($item['type'] == $var['type']) {
                        $data[$item['id']][$var['id']] = $cur_play;
                    }
                }
            }
        }
        return $data;
    }

    public function getNo()
    {
        $time = strtotime(date('Y-m-d', time()));
        $me = new Common();
        $data = [];
        $type = Type::where(['isDelete' => 0])->order('sort')->select();
        $date_time = DataTime::order('actionTime')->select();
        $return = [];
        foreach ($date_time as $item) {
            $return[$item['type']][$item['id']] = $item;
        }
        foreach ($type as $item) {
            $fun = $item['onGetNoed'];
            if (isset($return[$item['id']])) {
                $cur_no_arr = $return[$item['id']];
                $idx = 0;
                foreach ($cur_no_arr as $sub_key => $sub_item) {
                    $me->type = $sub_item['type'];
                    $actionNo = $sub_item['actionNo'];
                    $actionTime = $sub_item['actionNo'];
//                    $kjTime = $me->getTypeFtime($me->type);
                    //                    $atime  = date('H:i:s', $time + $kjTime);
                    if (method_exists($me, $fun)) {
                        $me->$fun($actionNo, $actionTime, $time, $item['data_ftime']);
                        $data[$item['id']][$idx] = [
                            'issue' => $actionNo,
                            'lotteryid' => $actionNo,
                            'dateend' => date('Y-m-d', $time),
                        ];
                    }
                    $idx++;
                }
            }
        }
        return $data;
    }

    public function addLog($type, $extfield0 = 0, $extfield1 = '')
    {
        $this->user = Session::get('userData');
        $log = [
            'uid' => $this->user['uid'],
            'username' => $this->user['username'],
            'type' => $type,
            'actionTime' => time(),
            'actionIP' => get_client_ip(1),
            'action' => $this->adminLogType[$type],
            'extfield0' => $extfield0,
            'extfield1' => $extfield1,
        ];
        AdminLog::insert($log);
        //\Think\Log::write('xiefff  '.M('admin_log')->getLastSql());
    }

    public function postChongzhi()
    {
        // $switchCharge = Params::getParams('switchCharge')['switchCharge'];
        // if(!$switchCharge) {
        //     $this->error('充值网络异常，请稍后再试！');
        // }
        $this->user = Session::get('userData');
        if ($this->user['uid'] == $_POST['touid']) {
            $this->error('不能给自己充值');
        }
        if (empty($_POST['money']) || intval($_POST['money']) < 1) {
            $this->error('充值金额必须大于0');
        }
        if (empty($_POST['zjmm'])) {
            $this->error('资金密码不能为空');
        }
        // if ($this->user['is_test'] != 1) {
        //     if (empty($_POST['bankno'])) {
        //         $this->error('验证银行卡号不能为空！');
        //     }
        //     $banks = MemberBank::where(['uid' => $this->user['uid'], 'enable' => 1, 'account' => $_POST['bankno']])->count();
        //     if ($banks == 0) {
        //         $this->error('验证银行卡号不正确！');
        //     }
        // }
        $touid = $_POST['touid'];
        $money = $_POST['money'];
        $zjmm = $_POST['zjmm'];
        //转账次数限制
        if (!$this->zzcs()) {
            $this->error("每天只能转账一次");
        }
        //转账限制
        if (!$this->zzxz()) {
            $this->error("投注金额必须超过充值金额的30");
        }

        $db = db();
        $db->startTrans();
        $me = Members::where(['uid' => $this->user['uid']])->lock(true)->find();
        $menewmoney = $me['coin'] - $money;
        if ($menewmoney < 0) {
            $db->rollback();
            $this->error('余额不足，请先充值余额');
            exit();
        }
        if (empty($me['coinPassword']) || ($me['coinPassword'] != think_ucenter_md5($zjmm, UC_AUTH_KEY))) {
            $db->rollback();
            $this->error('资金密码未设置或不正确');
            exit();
        }
        $user = Members::where(['uid' => $touid])->find();
        $p_arr = explode(',', $user['parents']);
        if (!in_array($this->user['uid'], $p_arr)) {
            $db->rollback();
            $this->error('不是你的直属下级，不可以充值');
            exit();
        }
        $usernewmoney = $user['coin'] + $money;
        $data1['uid'] = $me['uid'];
        $data1['coin'] = $menewmoney;
        $data2['uid'] = $user['uid'];
        $data2['coin'] = $usernewmoney;
        $comm = new Common();
        //if (M('members')->save($data1)) {

        $isSuc1 = $comm->addCoin([
            'uid' => $me['uid'],
            'coin' => "-" . $money,
            'liqType' => 200,
            'info' => "资金转移到用户：" . $user['username'],
        ]);
        Members::where('uid', $this->user['uid'])->setInc('scoreTotal', $money);

        if ($isSuc1 == true) {
            $isSuc2 = $comm->addCoin([
                'uid' => $user['uid'],
                'coin' => $money,
                'liqType' => 201,
                'info' => "由用户转入资金：" . $me['username'],
            ]);
        } else {
            Log::record('扣除资金失败');
            $db->rollback();
            $this->error('操作失败');
            exit;
        }
        $rechage = [
            'uid' => $user['uid'],
            'actionUid' => $this->user['uid'],
            'coin' => $user['coin'],
            'fcoin' => $user['fcoin'],
            'username' => $user['username'],
            'rechargeId' => $this->getRechId(),
            'amount' => $money,
            'rechargeAmount' => $money,
            'actionIP' => get_client_ip(1),
            'actionTime' => time(),
            'rechargeTime' => time(),
            'state' => 1,
            'info' => '上级' . $this->user['username'] . '给下级转账',
            'flag' => 1, //上级给下级充值
        ];
        $rech = MemberRecharge::insert($rechage);
        if (!$rech) {
            Log::record('给下级充值资金失败');
            $db->rollback();
            $this->error('操作失败');
        }
        if ($isSuc2 == true) {
            $me = Members::where(['uid' => $this->user['uid']])->find();
            if ($me['coin'] < 1) {
                $db->rollback();
                $this->error('余额不足，请先充值余额');
                exit();
            }
            $db->commit();
            $this->success('操作成功');
        } else {
            Log::record('给下级充值资金失败');
            $db->rollback();
            $this->error('操作失败');
        }
    }

    final private function getRechId()
    {
        $rechargeId = $this->guid();
        if (MemberRecharge::where(['rechargeId' => $rechargeId])->find()) {
            $this->getRechId();
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

    //充值限制
    public function zzxz()
    {
        if ($this->user['type'] == 1) {
            return true;
        }
        //充值金额
        $gRs = MemberRecharge::where(['uid' => $this->user['uid'], 'state' => ['in', '1,2,9'], 'isDelete' => 0])->field('sum(case when rechargeAmount>0 then rechargeAmount else amount end) as rechargeAmount')->find();
        //投注金额
        $bet = Bets::where(['uid' => $this->user['uid'], 'isDelete' => 0, 'lotteryNo' => ['neq', '']])->field('sum(mode*beiShu*actionNum) as betAmout')->find();
        if (!empty($gRs) && !empty($bet)) {
            return false;
        } else {
            $betAmout = $bet['betAmout'];
            $rechargeAmount = $gRs["rechargeAmount"];
            $bfb = round($betAmout / $rechargeAmount, 2) * 100;
            if ($bfb >= 30) {
                return true;
            } else {
                return false;
            }
        }
    }

    //转账次数限制
    public function zzcs()
    {
        //代理商不限制
        if ($this->user['type'] == 1) {
            return true;
        }
        $map = [
            'uid' => $this->user['uid'],
            'liqType' => 200,
            'actionTime' => ['egt', strtotime(date('Y-m-d', $this->time))]];
        $m = CoinLog::where($map)
            ->order('actionTime desc')
            ->find();
        if (empty($m)) {
            return true;
        }
        return false;
    }

    public function getUser_rigongzi()
    {
        $user = Session::get('userData');
        $username = $user['username'];
        $uid = $user['uid'];
        $where = [];
        if (!empty($_GET['uid'])) {
            $cur_member = Members::get($_GET['uid'])->getData();
            $username = $cur_member ? $cur_member['username'] : "";
            $uid = $_GET['uid'];
        } else {
            if (isset($_GET['username'])) {
                $where['username'] = $_GET['username'];
            }
            if (isset($_GET['bank_min'])) {
                $where['coin'] = ['>=', $_GET['bank_min']];
            }
            if (isset($_GET['bank_max']) && intval($_GET['bank_max']) > 0) {
                $where['coin'] = ['<=', $_GET['bank_max']];
            }
        }
        $pageSize = isset($_GET['pageSize']) ? $_GET['pageSize'] : 10;
        $where['parentId'] = $uid;
        if (isset($_GET['username'])) {
            $config = [
                'query' => [
                    'username' => $_GET['username'],
                    'uid' => $uid,
                ],
            ];
        } else {
            $config = [
                'query' => [
                    'uid' => $uid,
                ],
            ];
        }
        $list = Members::alias('a')->where($where)
            ->field('a.*,(SELECT COUNT(1) FROM gygy_members WHERE FIND_IN_SET(a.uid,parents) ) as zrs,
(SELECT SUM(coin) FROM gygy_members WHERE FIND_IN_SET(a.uid,parents) ) as zje')
            ->order('a.username asc')
            ->paginate($pageSize, false, $config);
        // 获取分页显示
        $page = $list->render();
        $total = $list->total();
        $currentPage = $list->currentPage();
        $this->assign('data_list', $list);
        $this->assign('page', $page);
        $this->assign('total', $total);
        $this->assign('currentPage', $currentPage);
        $this->assign('totalPage', ceil($total / $pageSize));
        foreach ($list as $key => $sub) {
            $list[$key]['rgz_at'] = $sub['rgz_at'] ? date('Y-m-d', $sub['rgz_at']) : "";
        }
        $rgz_option = [];
        $rgz_biaozhun = [];
        $cnt = $user['ri_gong_zi'] / 10;
        $ri_gong_zi = $user['ri_gong_zi'];
        for ($idx = $cnt; $idx >= 0; $idx--) {
            $cur_v = $ri_gong_zi - ($idx * 10);
            if ($cur_v > 10) {
                $rgz_option[$cur_v] = $cur_v;
            }
        }
        for ($idx = 0; $idx <= $cnt; $idx++) {
            $cur_v = $ri_gong_zi - ($idx * 10);
            if ($cur_v >= 120) {
                $rgz_biaozhun[] = [
                    'title' => ($cur_v == 120 ? '1万10-' . $cur_v . '元' : '1万' . $cur_v . '元'),
                    'renshu' => $cur_v == 200 ? "288人以上" : pow(2, ($cur_v - 120) / 10) . '人以上',
                ];
            }
        }
        if ($ri_gong_zi < 120) {
            $rgz_biaozhun[] = [
                'title' => '1万10-' . $ri_gong_zi,
                'renshu' => '1人以上',
            ];
        }
        $this->assign('username', $username);
        $this->assign('userType', $user['type']);
        $this->assign('userCoin', $user['coin']);
        $this->assign('ri_gong_zi', $ri_gong_zi);
        $this->assign('uid', $uid);
        $this->assign('rgz_option', $rgz_option);
        $this->assign('rgz_biaozhun', array_reverse($rgz_biaozhun));
        return view('user/user_rigongzi');
    }

    public function postShezhirgz()
    {
        $this->user = Session::get('userData');
        if ($this->user['uid'] == $_POST['touid']) {
            $this->error('不能给自己设置');
        }
        if (empty($_POST['money'])) {
            $this->error('请选择日工资');
        }
        $ceng = substr_count($this->user['parents'], ',');
        if ($ceng <= 3) {
            $subrgzcnt = Members::where('parentId', $this->user['uid'])->where('uid', '<>', $_POST['touid'])->where('ri_gong_zi', '>', 0)->count();
            if ($subrgzcnt >= 20 && $ceng >= 2) {
                $this->error('最多只可以给20个直属下级设置日工资');
            }
        } else {
            $this->error('你没有设置日工资权限');
        }
        Members::where(['uid' => $_POST['touid']])->update(['ri_gong_zi' => $_POST['money'], 'rgz_at' => time()]);
        $this->success('设置成功');
    }

    public function getUser_rigongzi_detail()
    {
        $data = Gongzi::where('uid', $_GET['uid'])->limit(0, 10)->select();
        $zt = [
            '1' => '未达标',
            '2' => '未领取',
            '3' => '已领取',
        ];
        foreach ($data as $key => $item) {
            $data[$key]['zt'] = $zt[$item['zt']];
        }
        $this->assign('data', $data);
        return view('user/user_rigongzi_detail');
    }

    public function postFandian()
    {
        $user = Session::get('userData');
        $touid = $_POST['touid'];
        $login_member = Members::where(['uid' => $user['uid']])->find();
        $member = Members::where(['parentId' => $touid])->field('max(fanDian) as fanDian')->find();
        $fandian = $login_member['fanDian'] - $_POST['fandian'];
        if ($fandian >= 0 && $fandian >= $member['fanDian']) {
            Members::where(['uid' => $touid])->update(['fanDian' => $fandian]);
        } else {
            $this->error('设置返点超出范围');
        }
        $this->success('设置成功');
    }
}
