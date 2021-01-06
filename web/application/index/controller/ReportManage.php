<?php
/**
 * Created by PhpStorm.
 * User: wtx
 * Date: 2017/8/30
 * Time: 20:44
 */

namespace app\index\controller;

use app\index\model\Bets;
use app\index\model\CoinLogReport;
use app\index\model\MemberCash;
use app\index\model\MemberRecharge;
use app\index\model\Members;
use app\index\model\Params;
use app\index\model\Type;
use think\Controller;
use think\Db;
use think\Request;
use think\Session;
use think\View;

class ReportManage extends Controller
{

    public $liqTypeName = [
        1 => '充值',
        2 => '返点',
        //3=>'返点',//分红
        //4=>'抽水金额',
        5 => '停止追号',
        6 => '中奖金额',
        7 => '撤单',
        8 => '提现失败返回冻结金额',
        9 => '管理员充值',
        10 => '解除抢庄冻结金额',
        //11=>'收单金额',
        12 => '下级转账',
        13 => '上级充值成功扣款',
        50 => '签到赠送',
        51 => '首次绑定银行卡赠送',
        52 => '充值佣金',
        53 => '消费活动',
        54 => '充值赠送',
        55 => '注册佣金',
        56 => '佣金活动',
        57 => '充值返利',

        100 => '抢庄冻结金额',
        101 => '投注冻结金额',
        102 => '追号投注',
        103 => '抢庄返点金额',
        //104=>'抢庄抽水金额',
        105 => '抢庄赔付金额',
        106 => '提现冻结',
        107 => '提现成功扣除冻结金额',
        108 => '开奖扣除冻结金额',
        109 => '日工资',
    ];

    public $modeConfig = [
        '2' => '元',
        '0.2' => '角',
        '0.02' => '分',
        '0.002' => '厘',
    ];

    protected function _initialize()
    {
        // 客服
        $kefu = Params::getParams('kefuGG')['kefuGG'];
        $stauts = Params::getParams('kefuStatus')['kefuStatus'];

        View::share(['kefu' => $kefu, 'status' => $stauts]);
        if (!empty(Session::get('userData'))) {
            $this->assign('play_lists', (new Game())->play_list);
            return view('index/login');
        } else {
            $this->user = Session::get('userData');
        }
    }

    public function getIndex(Request $request)
    {
        return view('report_manage/index');
    }

    /**
     * 获取用户下属ID集合
     * @param $uid int
     * @param $ids string
     * @return string
     * @throws string
     * @author jack
     */
    public function getUnderlingUIds($uid, $ids = '')
    {
        $back = Db('gygy_members')->field('uid')->where('parent_uid', $uid)->select();
        if (!empty($back) && is_array($back)) {
            foreach ($back as $v) {
                //防止当前人的ID重复去查询，形成恶性循环
                if ($v['id'] == $uid) {
                    continue;
                }
                $back2 = Db('ns_member', '', false)->where('parent_uid', $v['uid'])->count('uid');
                if ($back2 > 0) {
                    $ids = $this->getUnderlingUIds($v['uid'], $ids);
                } else {
                    $ids .= ',' . $v['id'];
                }
            }
        }
        $ids = $uid . ',' . $ids . ',';
        $ids = str_replace(',,', ",", $ids);
        $ids = trim($ids, ',');
        return $ids;
    }

    public function getRechargeStat(Request $request)
    {
        //获取查询时间
        $days = [];
        for ($idx = 0; $idx < 32; $idx++) {
            $cur_day = strtotime(date('Y-m-d', time()));
            $days[$idx] = date("Y-m-d", $cur_day - (86400 * $idx));
        }
        //    dump($request->param());
        $params = $request->param();
        if (!isset($params['isquery']) && !isset($params['id'])) {
//            $this->assign('liqTypeName', $this->liqTypeName);
            //            $this->assign('modeConfig', $this->modeConfig);
            //            $this->assign('total', 0);
            //            $this->assign('page', "");
            //            $this->assign('currentPage', "");
            //            $this->assign('totalPage', 0);
            $this->assign('days', $days);
//            $this->assign('types_data', $this->types());
            $this->assign('data', []);
            return view('report_manage/recharge_stat');
        }

        isset($params['id']) ? $uid = $params['id'] : $uid = session('userData')['uid'];

        $builder = new Members();
//        $pwhere[] = ['exp', 'FIND_IN_SET(' . $uid . ',parents)'];
        //        $pwhere['isDelete'] = 0;
        if (isset($_GET['username']) && $_GET['username'] != '') {
            $where['username'] = ['like', strtolower(trim($_GET['username'])) . '%'];
            $where[] = ['exp', 'FIND_IN_SET(' . $uid . ',parents)'];
        } else {
            $where['parentId'] = $uid;
        }

        $childs = $builder->where($where)->select();
        if (isset($params['days']) && isset($params['days2'])) {

            $start = strtotime($params['days'] . '00:00:00');
            $end = strtotime($params['days2'] . " 23:59:59");
        } else {
            $start = strtotime(date('Y-m-d 00:00:00', time()));
            $end = strtotime(date('Y-m-d 23:59:59', time()));
        }

        $data = [];
        foreach ($childs as $key => $value) {
            $cuids = Members::where("FIND_IN_SET({$value->uid},parents)")->column('uid');
            $data[$key] = [
                'uid' => $value->uid,
                'username' => $value->username,
                'type' => $value->type,
                'coin' => $value->coin,
                'totalRecharge' => MemberRecharge::where('uid', 'in', $cuids)
                    ->where('state', 11)
                    ->where('actionTime', 'between', [$start, $end])
                    ->sum('amount'),
                'totalCash' => MemberCash::where('uid', 'in', $cuids)
                    ->where('state', 4)
                    ->where('actionTime', 'between', [$start, $end])
                    ->sum('amount'),
            ];
        }
        $this->assign('uid', $uid);
        $this->assign('days', $days);
        $this->assign('data', $data);
        return view('report_manage/recharge_stat');
    }

    public function getOrdersList(Request $request)
    {
        set_time_limit(0);
        //获取投注时间
        $days = [];
        for ($idx = 0; $idx < 5; $idx++) {
            $cur_day = strtotime(date('Y-m-d', time()));
            $days[$idx] = date("Y-m-d", $cur_day - (86400 * $idx));
        }

        $para = $_GET;
        if (!isset($para['isquery'])) {
            $this->assign('liqTypeName', $this->liqTypeName);
            $this->assign('modeConfig', $this->modeConfig);
            $this->assign('total', 0);
            $this->assign('page', "");
            $this->assign('currentPage', "");
            $this->assign('totalPage', 0);
            $this->assign('days', $days);
            $this->assign('types_data', $this->types());
            $this->assign('data', []);
            return view('report_manage/orders_list');
        }
        $pageSize = isset($para['PageSize']) ? $para['PageSize'] : 20;
        $lotteryid = isset($para['lotteryid']) ? $para['lotteryid'] : ""; //彩种名称
        $where = [];
        $uid = session('userData.uid');
        $baseSql = Db::table('gygy_coin_log')->alias('c')
            ->field(
                'c.uid,c.actionTime,c.liqType,c.extfield0,c.extfield1,c.coin,c.userCoin,m.uid,m.username'
            );
        // 彩种限制
        if (!empty($lotteryid)) {
            $baseSql->where('c.type', '=', $lotteryid);
        }
        // 用户名限制
        $pwhere[] = ['exp', 'FIND_IN_SET(' . $uid . ',m.parents)'];
        $pwhere['m.isDelete'] = 0;
        if (isset($para['username']) && $para['username'] && $para['username'] != '用户名') {
            if (mb_strlen($para['username']) > 20) {
                $this->assign('data', []);
                return;
            }

            $baseSql->where('m.username', '=', $para['username']);
            // $baseSql->where('m.parents', 'like', "%$uid%");
            //            $baseSql->where($pwhere);
        }
        if (!empty($para['user_select'])) {
            //用户类型限制
            switch ($para['user_select']) {
                case 1:
                    //我自己
                    $baseSql->where('m.uid', '=', $uid);
                    break;
                case 2:
                    //直属下线
                    $baseSql->where('m.parentId', '=', $uid);
                    break;
                case 3:
                    // 所有下级
                    $baseSql->where($pwhere)->where('m.uid', '<>', $uid);
                    break;
                default:
                    //所有人
                    $baseSql->where(function ($query) use ($uid) {
                        $query->where($pwhere)->whereOr('m.uid', '=', $uid);
                    });
                    break;
            }
        } else {
            $baseSql->where(function ($query) use ($uid, $pwhere) {
                // $query->whereLike('m.parents', $uid)->whereOr('m.uid','=', $uid);
                $query->where($pwhere)->whereOr('m.uid', '=', $uid);
            });
        }
        // 账变类型限制
        if (!empty($para['ordertype'])) {
            $baseSql->where('c.liqType', '=', $para['ordertype']);
            if ($para['ordertype'] == 2) {
                $baseSql->whereBetween('c.liqType', [2, 3]);
            }
        }

        // 模式限制
        if (!empty($para['modes'])) {
            if ($para['modes'] == 1) {
                $baseSql->where('b.mode', 2);
            } elseif ($para['modes'] == 2) {
                $baseSql->where('b.mode', 0.2);
            } elseif ($para['modes'] == 3) {
                $baseSql->where('b.mode', 0.02);
            } elseif ($para['modes'] == 4) {
                $baseSql->where('b.mode', 0.002);
            }
        }

        if (empty($para['days'])) {
            $time = strtotime(date('Y-m-d'));
        } else {
            $time = strtotime($para['days']);
        }

        $baseSql->whereBetween('c.actionTime', [$time, $time + 86399]);
        $data = $baseSql
//            ->join("gygy_bets b","b.id=c.extfield0")
        ->join("gygy_members m", "m.uid=c.uid")
        /*->join("gygy_type t","t.id=c.type")
        ->join("gygy_played p","p.id=c.playedId")*/
            ->where($where)
            ->order('m.username asc')
            ->paginate($pageSize, false, ['query' => $_GET]);
//        dump($baseSql->getLastSql());
        //        exit;
        $total = $data->total();
//        dump($data);

        $this->assign('liqTypeName', $this->liqTypeName);
        $this->assign('modeConfig', $this->modeConfig);

        $this->assign('total', $total);
        $this->assign('page', $data->render());
        $this->assign('currentPage', $data->currentPage());
        $this->assign('totalPage', ceil($total / $pageSize));
        $this->assign('days', $days);
        $this->assign('types_data', $this->types());
        $new_data = $data->toArray()['data'];
        foreach ($new_data as $ke => $v) {
            $bets = Bets::alias('b')->where('b.id', $v['extfield0'])
                ->field('b.id,b.actionNo,b.mode,b.type,b.playedId,b.wjorderId,t.title as type_cn,p.name as played_name')
                ->join("gygy_type t", "t.id=b.type")
                ->join("gygy_played p", "p.id=b.playedId")
                ->find();

            $new_data[$ke]['id'] = $bets['id'];
            $new_data[$ke]['actionNo'] = $bets['actionNo'];
            $new_data[$ke]['mode'] = $bets['mode'];
            $new_data[$ke]['type'] = $bets['type'];
            $new_data[$ke]['playedId'] = $bets['playedId'];
            $new_data[$ke]['wjorderId'] = $bets['wjorderId'];
            $new_data[$ke]['type_cn'] = $bets['type_cn'];
            $new_data[$ke]['played_name'] = $bets['played_name'];
        }
        $this->assign('data', $new_data);
        return view('report_manage/orders_list');
    }

    public function getRechargeList(Request $request)
    {
        //获取提现时间
        $days = [];
        for ($idx = 0; $idx < 5; $idx++) {
            $cur_day = strtotime(date('Y-m-d', time()));
            $days[$idx] = date("Y-m-d", $cur_day - (86400 * $idx));
        }

        $para = $_GET;
        if (!isset($para['isquery'])) {
            $this->assign('data', []);
            $this->assign('days', $days);
            $this->assign('total', 0);
            $this->assign('page', "");
            $this->assign('currentPage', "");
            $this->assign('totalPage', "");
            return view('report_manage/recharge_list');
        }
        $pageSize = isset($para['PageSize']) ? $para['PageSize'] : 20;
        $uid = session('userData.uid');
        $userBaseSql = Db::table('gygy_members')->field('uid,username');
        $pwhere[] = ['exp', 'FIND_IN_SET(' . $uid . ',parents)'];
        $pwhere['isDelete'] = 0;
        // 用户名限制
        if (isset($para['username']) && $para['username'] && $para['username'] != '用户名') {
            if (mb_strlen($para['username']) > 20) {
                $this->assign('data', []);
                return;
            }
            // 按用户名查找时
            // 只要符合用户名且是自己所有下级的都可查询
            // 用户名用模糊方式查询
            $userBaseSql->whereLike('username', $para['username'] . '%');
            // $userBaseSql->whereLike('parents',$uid);
            //            $userBaseSql->whereLike($pwhere);
        } else {
            //用户类型限制
            $para['utype'] = isset($para['utype']) ? $para['utype'] : '';
            switch ($para['utype']) {
                case 1:
                    //我自己
                    $userBaseSql->where('uid', '=', $uid);
                    break;
                case 2:
                    //直属下线
                    $userBaseSql->where('parentId', '=', $uid);
                    break;
                case 3:
                    // 所有下级
                    // $userBaseSql->where('parents', 'like', "%$uid%")->where('uid','<>',$uid);
                    $userBaseSql->where($pwhere)->where('uid', '<>', $uid);
                    break;
                default:
                    //所有人
                    $userBaseSql->where(function ($query) use ($uid, $pwhere) {
                        $query->where( /*'parents', 'like', "%$uid%"*/$pwhere)->whereOr('uid', '=', $uid);
                    });
                    break;
            }
        }
        $userList = $userBaseSql->select();
        $userData = [];
        $userStr = "";
        foreach ($userList as $user) {
            $userStr = $userStr . $user['uid'] . ',';
            $userData[$user['uid']] = $user;
        }

        $where = [];

        // 时间限制
        // 时间限制
        if (!empty($para['days']) && !empty($para['days2'])) {
            $where['actionTime'] = ['between', [strtotime($para['days'] . '00:00:00'), strtotime($para['days2'] . " 23:59:59")]];
        } elseif (!empty($para['days'])) {
            $where['actionTime'] = ['egt', strtotime($para['days'])];
        } elseif (!empty($para['days2'])) {
            $where['actionTime'] = ['elt', strtotime($para['days2'])];
        } else {
            $where['actionTime'] = ['between', [strtotime(date("Y-m-d")), time()]];
        }
//        if(isset($params['days']) && isset($params['days2'])) {
        //
        //            $start = strtotime($params['days'] . '00:00:00');
        //            $end = strtotime($params['days2'] . " 23:59:59");
        //        } else {
        //            $start = strtotime(date('Y-m-d 00:00:00', time()));
        //            $end = strtotime(date('Y-m-d 23:59:59', time()));
        //        }
        $where['uid'] = ['in', $userStr];
        $cashList = Db::table('gygy_member_recharge')
            ->field('id,uid,username,rechargeId,amount,rechargeAmount,mBankId,state,info,actionTime')
            ->where($where)
            ->where('state', 11)
            ->order('username asc')
            ->paginate($pageSize, false, ['query' => $para]);
        $total = $cashList->total();
        foreach ($cashList as $key => $cash) {
            $cashList[$key] = array_merge($cash, $userData[$cash['uid']]);
        }
//var_dump(Db::table('gygy_member_recharge')->getLastSql());exit;
        $this->assign('data', $cashList);
        $this->assign('days', $days);
        $this->assign('total', $total);
        $this->assign('page', $cashList->render());
        $this->assign('currentPage', $cashList->currentPage());
        $this->assign('totalPage', ceil($total / $pageSize));

        return view('report_manage/recharge_list');
    }

    public function getCashList(Request $request)
    {
        //获取提现时间
        $days = [];
        for ($idx = 0; $idx < 5; $idx++) {
            $cur_day = strtotime(date('Y-m-d', time()));
            $days[$idx] = date("Y-m-d", $cur_day - (86400 * $idx));
        }

        $para = $request->get();
        if (!isset($para['isquery'])) {
            $this->assign('bankData', []);
            $this->assign('data', []);
            $this->assign('days', $days);
            $this->assign('total', 0);
            $this->assign('page', "");
            $this->assign('currentPage', 1);
            $this->assign('totalPage', "");
            return view('report_manage/cash_list');
        }
        $pageSize = isset($para['PageSize']) ? $para['PageSize'] : 20;
        $uid = session('userData.uid');
        $pwhere[] = ['exp', 'FIND_IN_SET(' . $uid . ',parents)'];
        $pwhere['isDelete'] = 0;
        // 用户名限制
        $userBaseSql = Db::table('gygy_members')->field('uid,username');
        if (isset($para['username']) && $para['username'] && $para['username'] != '用户名') {
            if (mb_strlen($para['username']) > 20) {
                $this->assign('data', []);
                return;
            }
            // 按用户名查找时
            // 只要符合用户名且是自己所有下级的都可查询
            // 用户名用模糊方式查询
            $userBaseSql->whereLike('username', $para['username']);
            // $userBaseSql->whereLike('parents',$uid);
            $userBaseSql->where($pwhere);
        } else {
            //用户类型限制
            $para['utype'] = isset($para['utype']) ? $para['utype'] : '';
            switch ($para['utype']) {
                case 1:
                    //我自己
                    $userBaseSql->where('uid', '=', $uid);
                    break;
                case 2:
                    //直属下线
                    $userBaseSql->where('parentId', '=', $uid);
                    break;
                case 3:
                    // 所有下级
                    $userBaseSql->where( /*'parents', 'like', "%$uid%"*/$pwhere)->where('uid', '<>', $uid);
                    break;
                default:
                    //所有人
                    $userBaseSql->where(function ($query) use ($uid, $pwhere) {
                        $query->where( /*'parents', 'like', "%$uid%"*/$pwhere)->whereOr('uid', '=', $uid);
                    });
                    break;
            }
        }

        $userList = $userBaseSql->select();
        $userData = [];
        $userStr = '';
        foreach ($userList as $user) {
            $userStr = $userStr . $user['uid'] . ',';
            $userData[$user['uid']] = $user;
        }

        $where = [
            'isDelete' => 0,
        ];

        // 时间限制
        if (!empty($para['days']) && !empty($para['days2'])) {
            $where['actionTime'] = ['between', [strtotime($para['days']), strtotime($para['days2'])]];
        } elseif (!empty($para['days'])) {
            $where['actionTime'] = ['egt', strtotime($para['days'])];
        } elseif (!empty($para['days2'])) {
            $where['actionTime'] = ['elt', strtotime($para['days2'])];
        } else {
            $where['actionTime'] = ['between', [strtotime(date("Y-m-d")), time()]];
        }
        $where['uid'] = ['in', $userStr];
        $cashList = Db::table('gygy_member_cash')
            ->field('id,uid,actionTime,amount,account,username,state,bankId,info')
            ->where($where)
            ->order('username asc')
            ->paginate($pageSize, false, ['query' => $para]);
        $total = $cashList->total();
        /*$i = 0;
        foreach ($cashList as $cash) {
        $data[$i] = array_merge($cash, $userData[$cash['uid']]);
        $i++;
        }*/

//        var_dump(Db::table('gygy_member_cash')->getLastSql());exit;
        $bankList = Db::table('gygy_bank_list')->field('id,name')->where(['isDelete' => 0])->order('id')->select();
        $bankData = [];
        foreach ($bankList as $bank) {
            $bankData[$bank['id']] = $bank;
        }
        $this->assign('bankData', $bankData);
        $this->assign('data', $cashList);
        $this->assign('days', $days);
        $this->assign('total', $total);
        $this->assign('page', $cashList->render());
        $this->assign('currentPage', $cashList->currentPage());
        $this->assign('totalPage', ceil($total / $pageSize));

        return view('report_manage/cash_list');
    }

    public function getReportList(Request $request)
    {
        //获取查询时间
        $days = [];
        for ($idx = 1; $idx < 35; $idx++) {
            $cur_day = strtotime(date('Y-m-d', time()));
            $days[$idx] = date("Y-m-d", $cur_day - (86400 * $idx));
        }

        $para = $request->get();
        if (!isset($para['isquery'])) {
            $all['coin'] = 0.00;
            $all['rechargeAmount'] = 0.00;
            $all['cashAmount'] = 0.00;
            $all['betAmount'] = 0.00;
            $all['zjAmount'] = 0.00;
            $all['fanDianAmount'] = 0.00;
            $all['brokerageAmount'] = 0.00;
            $all['zyk'] = 0.00;
            $this->assign('data', []);
            $this->assign('all', $all);
            $para = empty($para) ? ['dete0' => 1, 'date1' => 0, 'date2' => 0] : $para;
            $this->assign('para', $para);
            $this->assign('days', $days);
            return view('report_manage/report_list');
        }
        $pageSize = isset($para['PageSize']) ? $para['PageSize'] : 20;
        $uid = session('userData.uid');
        $builder = new Members();
//        $pwhere[] = ['exp', 'FIND_IN_SET(' . $uid . ',parents)'];
        //        $pwhere['isDelete'] = 0;
        if (isset($para['username']) && $para['username'] != '') {
            $where['username'] = strtolower(trim($para['username']));
            $uid = Member::field('uid')->where($where)->find()['uid'];
        }

        // $childs = $builder->where('uid', session('userData.uid'))->select();

        if (isset($para['date2'])) {
            $toTime = strtotime($para['date2']);
        } else {
            $toTime = strtotime(date('Ymd', time()));
        }
        if (isset($para['date1'])) {
            $fromTime = strtotime($para['date1']);
        } else {
            $fromTime = strtotime(date('Ymd', time()));
        }
        if (isset($para['date0']) && $para['date0'] == 1) {
            $fromTime = strtotime(date('Ymd', time()));
            $toTime = strtotime(date('Ymd', time()));
        }
        $all = [];
        $sql = "SELECT * FROM (
                SELECT
                 m.username,
                 m.uid,
                 if(m.type=1,'代理','会员') AS type,
                  sum(r.coin) AS coin,
                    sum(r.rechargeAmount) AS rechargeAmount,
                    sum(r.cashAmount) AS cashAmount,
                    sum(r.betAmount) AS betAmount,
                    sum(r.zjAmount) AS zjAmount,
                    sum(r.fanDianAmount) AS fanDianAmount,
                    sum(r.brokerageAmount) AS brokerageAmount,
                    sum(r.zyk) AS zyk
                FROM gygy_members as m LEFT JOIN gygy_coin_log_report as r ON r.uid=m.uid AND r.actionTime BETWEEN {$fromTime} AND {$toTime}
                WHERE m.uid = {$uid}
                GROUP BY m.uid
                UNION
                SELECT  * FROM
                (SELECT
                        mm.username,
                         mm.uid,
                        if(mm.type=1,'代理','会员') AS type,
                        sum(r2.coin) AS coin,
                        sum(r2.rechargeAmount) AS rechargeAmount,
                        sum(r2.cashAmount) AS cashAmount,
                        sum(r2.betAmount) AS betAmount,
                        sum(r2.zjAmount) AS zjAmount,
                        sum(r2.fanDianAmount) AS fanDianAmount,
                        sum(r2.brokerageAmount) AS brokerageAmount,
                        sum(r2.zyk) AS zyk
                     FROM gygy_members mm
                    LEFT JOIN (
                    SELECT
                        m.uid,
                        m.username,
                        m.parentId,
                        m.parents,
                        r.coin,
                        r.rechargeAmount,
                        r.cashAmount,
                        r.betAmount,
                        r.zjAmount,
                        r.fanDianAmount,
                        r.brokerageAmount,
                        r.zyk
                    FROM
                        gygy_members AS m
                    JOIN gygy_coin_log_report AS r ON m.uid = r.uid
                    WHERE
                        FIND_IN_SET({$uid}, m.parents) AND m.uid <> {$uid}
                    AND r.actionTime BETWEEN {$fromTime} AND {$toTime}
                    ) as r2
                    ON FIND_IN_SET(mm.uid,r2.parents)
                    WHERE mm.parentId = {$uid}
                    GROUP BY mm.uid
                    ORDER BY mm.username asc) t
                ) r1 ";
        $data = Db::query($sql);
        $all['coin'] = 0.00;
        $all['rechargeAmount'] = 0.00;
        $all['cashAmount'] = 0.00;
        $all['betAmount'] = 0.00;
        $all['zjAmount'] = 0.00;
        $all['fanDianAmount'] = 0.00;
        $all['brokerageAmount'] = 0.00;
        $all['zyk'] = 0.00;
        $myRecord = [];
        foreach ($data as $item => $sub) {
            $all['coin'] += $sub['coin'];
            $all['rechargeAmount'] += $sub['rechargeAmount'];
            $all['cashAmount'] += $sub['cashAmount'];
            $all['betAmount'] += $sub['betAmount'];
            $all['zjAmount'] += $sub['zjAmount'];
            $all['fanDianAmount'] += $sub['fanDianAmount'];
            $all['brokerageAmount'] += $sub['brokerageAmount'];
            $all['zyk'] += floatval($sub['zjAmount'] - $sub['betAmount'] + $sub['fanDianAmount'] + $sub['brokerageAmount']);

            $data[$item]['coin'] = floatval($sub['coin']);
            $data[$item]['rechargeAmount'] = floatval($sub['rechargeAmount']);
            $data[$item]['cashAmount'] = floatval($sub['cashAmount']);
            $data[$item]['betAmount'] = floatval($sub['betAmount']);
            $data[$item]['zjAmount'] = floatval($sub['zjAmount']);
            $data[$item]['fanDianAmount'] = floatval($sub['fanDianAmount']);
            $data[$item]['brokerageAmount'] = floatval($sub['brokerageAmount']);
            $data[$item]['zyk'] = floatval($sub['zjAmount'] - $sub['betAmount'] + $sub['fanDianAmount'] + $sub['brokerageAmount']);
            /*if ($uid == $sub['uid']) {
        $myRecord = $data[$item];
        unset($data[$item]);
        }*/
        }
        $data = [];
        $all['betAmount'] = 0.00;
        $all['zjAmount'] = 0.00;
        $all['fanDianAmount'] = 0.00;
        $all['brokerageAmount'] = 0.00;
        $all['zyk'] = 0.00;

        foreach ($childs as $key => $value) {
            $cuids = Members::where("FIND_IN_SET({$value->uid},parents)")->column('uid');
            $data[$key] = [
                'uid' => $value->uid,
                'username' => $value->username,
                'type' => $value->type,
                'betAmount' => CoinLogReport::where('uid', 'in', $cuids)
                    ->where('actionTime', 'between', [$fromTime, $toTime])
                    ->sum('betAmount'),
                'zjAmount' => CoinLogReport::where('uid', 'in', $cuids)
                    ->where('actionTime', 'between', [$fromTime, $toTime])
                    ->sum('zjAmount'),
                'fanDianAmount' => CoinLogReport::where('uid', 'in', $cuids)
                    ->where('actionTime', 'between', [$fromTime, $toTime])
                    ->sum('fanDianAmount'),
                'brokerageAmount' => CoinLogReport::where('uid', 'in', $cuids)
                    ->where('actionTime', 'between', [$fromTime, $toTime])
                    ->sum('brokerageAmount'),
                'zyk' => CoinLogReport::where('uid', 'in', $cuids)
                    ->where('actionTime', 'between', [$fromTime, $toTime])
                    ->sum('zyk'),
            ];
            $all['betAmount'] += $data[$key]['betAmount'];
            $all['zjAmount'] += $data[$key]['zjAmount'];
            $all['fanDianAmount'] += $data[$key]['fanDianAmount'];
            $all['brokerageAmount'] += $data[$key]['brokerageAmount'];
            $all['zyk'] += floatval($data[$key]['zjAmount'] - $data[$key]['betAmount'] + $data[$key]['fanDianAmount'] + $data[$key]['brokerageAmount']);
        }
        // $this->assign('uid', $uid);
        // $this->assign('days', $days);
        // $this->assign('data', $data);

        /*if (!empty($myRecord)) {
        array_unshift($data, $myRecord);
        }*/

        //团队
        $this->assign('data', $data);
        $this->assign('all', $all);
        $para = empty($para) ? ['dete0' => 1, 'date1' => 0, 'date2' => 0] : $para;
        $this->assign('para', $para);
        $this->assign('days', $days);

        return view('report_manage/report_list');
    }

    public function types()
    {
        return Type::where(['isDelete' => 0])->order('sort')->select();
    }

}
