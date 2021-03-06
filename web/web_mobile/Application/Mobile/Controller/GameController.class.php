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
 * 游戏模块
 */
class GameController extends HomeController
{
    private $stopCode = [
        17, 20, 23, 60, 198, 200, 202,
    ];
    public $stop_times = [
        '36' => 6,
        '5' => 6,
        '43' => 6,
        '1' => 30,
        '38' => 6,
        '39' => 6,
        '16' => 30,
        '15' => 30,
        '6' => 30,
        // '20' => 30,
        '34' => 6,
        '44' => 30,
        '45' => 6,
        '9' => 7200,
        '10' => 7200,
    ];

    protected $gc_id = [1, 43, 16, 44, 6, 9, 10, 20];

    protected $zhushu_playeds = [
        45, 46, 47, 48, 49, 50, 51, 52, 152, 56, 53, 54, 20,
        1, 7, 13, 274, 11, 275, 270, 276, 28, 26, 34, 32, 30, 36, 15, 9, 253, 254, 255, 256, 257, 258, 278, 279, 280, 281, 3,
    ];

    protected $maxzs = 0;
    public $mus = [];

    public function game($type = null, $groupId = null, $played = null)
    {
        $played = I('played');
        if (I('type')) {
            $this->type = I('type');
        }

        if (I('groupId')) {
            $this->groupId = I('groupId');
        } else {
            // 默认进入三星玩法
            $this->groupId = 1;
        }

        $lastNo = $this->getGameLastNo($this->type);

        //$this->getValue("select data from {$this->prename}data where type={$this->type} and number='{$lastNo['actionNo']}'");
        $return = M('data')->where(['type' => $this->type, 'number' => $lastNo['actionNo']])->field('data')->find();
        $kjHao = $return['data'];
        if ($kjHao) {
            $kjHao = explode(',', $kjHao);
        }

        $actionNo = $this->getGameNo($this->type);
        $types = $this->getTypes();
        $kjdTime = $types[$this->type]['data_ftime'];
        $diffTime = strtotime($actionNo['actionTime']) - $this->time - $kjdTime;
        $kjDiffTime = strtotime($lastNo['actionTime']) - $this->time;

        $this->assign('type', $this->type);
        $this->assign('groupId', $this->groupId);
        $this->assign('types', $types);
        $this->assign('actionNo', $actionNo);
        $this->assign('lastNo', $lastNo);
        $this->assign('kjHao', $kjHao);
        $this->assign('kjdTime', $kjdTime);
        $this->assign('diffTime', $diffTime);
        $this->assign('kjDiffTime', $kjDiffTime);

        //$sql="select time, number, data from {$this->prename}data where type={$this->type} order by number desc,time desc limit 4";
        $history = M('data')->where(['type' => $this->type])->order('number desc')->limit(4)->field('time, number, data')->select();
        $this->assign('history', $history);

        $groups = $this->getGroups();
        $this->assign('groups', $groups);

        $this->getSystemSettings();
        $this->assign('settings', $this->settings);

        $playeds = $this->getPlayeds();
        $this->assign('playeds', $playeds);

        if (!$played) {
            $playeds2 = [];
            $i = 0;
            foreach ($playeds as $play) {
                if ($play['groupId'] == $this->groupId && $play['enable'] == 1) {
                    $playeds2[$i] = $play;
                    $i++;
                }
            }
            $played = $playeds2[0]['id'];
        }

        //dump($played);
        if ($played) {
            $this->played = $played;
        }

        $this->assign('playedId', $this->played);

        $maxPl = $this->getPl($this->type, $played);
        $this->assign('maxPl', $maxPl);

        //$sql="select * from {$this->prename}bets where uid={$_SESSION['user']['uid']} order by id desc limit 7";
        $order_list = M('bets')->where(['uid' => $this->user['uid']])->limit(7)->order('id desc')->select();
        $this->assign('order_list', $order_list);

        $this->assign('time', $this->time);

        $this->display();
    }

    final public function group($type, $groupId)
    {
        $this->playeds = $this->getPlayeds();
        $this->type = $type;
        $this->groupId = $groupId;

        $playeds2 = [];
        $i = 0;
        foreach ($this->playeds as $play) {
            if ($play['groupId'] == $groupId && $play['enable'] == 1) {
                $playeds2[$i] = $play;
                break;
                $i++;
            }
        }

        $playedId = $playeds2[0]['id'];
        $maxPl = $this->getPl($type, $playedId);
        $this->assign('maxPl', $maxPl);

        $this->assign('playeds', $this->playeds);
        $this->assign('type', $this->type);
        $this->assign('groupId', $this->groupId);

        $this->display('Game/load_tab_group');
    }

    final public function played($type, $playedId)
    {

        $this->playeds = $this->getPlayeds();
        $data = $this->playeds[$playedId];

        $this->type = $type;

        $maxPl = $this->getPl($type, $playedId);
        $this->assign('maxPl', $maxPl);

        $this->groupId = $data['groupId'];
        $this->played = $playedId;

        $this->assign('type', $type);
        $this->assign('groupId', $this->groupId);
        $this->assign('playedId', $playedId);
        $this->assign('simpleInfo', $data['simpleInfo']);
        $this->assign('tpl', $data['playedTpl']);
        $this->display("Game/inc_game_played");
    }

    private function getPl($type = null, $played = null)
    {
        $types = M('type')->where(['id' => $type])->find();
        if ($types['is_official'] == 1) {
            $data = M('played')->where(['id' => $played])->field('guo_prop as bonusProp,guo_prop_base as bonusPropBase')->find();
        } else {
            $data = M('played')->where(['id' => $played])->field('bonusProp, bonusPropBase')->find();
        }
        return $data;
    }

    //验证是否开启投注
    final public function checkBuy()
    {
        $actionNo = "";

        $this->settings = $this->getSystemSettings();
        if ($this->settings['switchBuy'] == 0) {
            $actionNo['flag'] = 1;
        }

        $this->ajaxReturn($actionNo, 'JSON');
    }

    final public function getNo($type)
    {
        $actionNo = $this->getGameNo($type);

        if ($type == 1 && $actionNo['actionTime'] == '00:00') {
            $actionNo['actionTime'] = strtotime($actionNo['actionTime']) + 24 * 3600;
        } else {
            $actionNo['actionTime'] = strtotime($actionNo['actionTime']);
        }

        $this->ajaxReturn($actionNo, 'JSON');
        //echo json_encode($actionNo);
    }

    final public function postCode()
    {
        $m = M('members')->where(['uid' => $this->user['uid']])->find();
        if ((!empty($m) && intval($m['is_sleep']) == 1) || empty($m)) {
            $this->error('网络异常，请重新投注！');
            exit;
        }

        $codes = I('code');
        $para = I('para');

        $amount = 0;
        $fpcount = 1; //飞盘 默认为1
        $this->getSystemSettings();
        if ($this->settings['switchBuy'] == 0) {
            $this->error('本平台已经停止购买！');
        }
        if ($this->settings['switchDLBuy'] == 0 && $this->user['type']) {
            $this->error('代理不能买单！');
        }

        if (count($codes) == 0) {
            $this->error('请先选择号码再提交投注');
        }

        //检查时间 期数
        $actionTime = $this->getGameActionTime($para['type']); //当期时间
        $actionNo_array = explode('|', $para['actionNo']);
        $actionNo = $this->getGameActionNo($para['type']); //当期期数
        /************************ 之间修改代码勿动 开始****************************/
        $no2 = str_replace('-', '', $actionNo);
        foreach ($actionNo_array as $action_no) {
            $no = str_replace('-', '', $action_no);
            if ($no < $no2) {
                $this->error('投注失败：该期投注时间已过');
            }
        }
        $time = time() + $this->stop_times[$para['type']];
        if ($actionTime <= $time) {
            $this->error('投注失败：该期投注时间已过');
        }

        //当期投注截止时间已过 不准投注
        if ($actionTime - $this->before_stop_time < time()) {
            $this->error('投注失败：该期投注时间已过');
        }

        /************************ 之间修改代码勿动 结束****************************/
        if ($actionNo != $para['actionNo']) {
            $this->error('投注失败：你投注第' . $para['actionNo'] . '已过购买时间2');
        }

        // 查检每注的赔率是否正常
        $this->getPlayeds();
        foreach ($codes as $code) {
            if (in_array($code['playedId'], $this->stopCode) && mb_strlen(str_replace(',', '', $code['actionData'])) > 9) {
                return $this->error('最多只能选9个号');
            }
            //彩种开启关闭判断
            $cur_type = $this->types[$code['type']];
            if ($cur_type['enable'] != 1) {
                $this->error($this->types[$code['type']]['title'] . '已停止投注！');
            }

            //检查开启
            $played = $this->playeds[$code['playedId']];
            if ($cur_type['is_official'] == 1) {
                if (!$played['is_official_open']) {
                    $this->error('官彩游戏玩法组已停,请刷新再投 -1');
                }
            } else {
                if (!$played['enable']) {
                    $this->error('游戏玩法组已停,请刷新再投 -1');
                }
            }

            //检查赔率
            $chkBonus = ($played['bonusProp'] - $played['bonusPropBase']) / $this->settings['fanDianMax'] * ($this->user['fanDian'] - $code['fanDian']) + $played['bonusPropBase']; //实际奖金

//            if($code['bonusProp'] > $played['bonusProp']) {
            //                $this->error('投注金额过大');
            //            }
            //            $this->success('最高赔付' . $played['bonusProp']);
            if ($code['bonusProp'] < $played['bonusPropBase']) {
                $this->error('提交数据出错，请重新投注 -2');
            }

            if (intval($chkBonus) != intval($code['bonusProp'])) {
                $this->error('提交数据出错，请重新投注 -3');
            }
            //检查返点
            if (floatval($code['fanDian']) > floatval($this->user['fanDian']) || floatval($code['fanDian']) > floatval($this->settings['fanDianMax'])) {
                $this->error('提交数据出错，请重新投注 -4');
            }
            //检查倍数
            if (intval($code['beiShu']) < 1) {
                $this->error('倍数只能为大于1正整数');
            }
            // 检查注数
            /*  dump($played['betCountFun']);
            if ($betCountFun == $played['betCountFun']) {
            if ($played['betCountFun'] == 'descar') {
            if ($code['actionNum'] > Bet::$betCountFun($code['actionData'])) {
            $this->error('提交数据出错，请重新投注 -5');
            }
            } elseif ($played['betCountFun'] == 'descar2') {
            if ($code['actionNum'] < 1) {
            $this->error('提交数据出错，请重新投注 -6');
            }
            } else {
            dump($betCountFun);
            exit;
            if ($code['actionNum'] != Bet::$betCountFun($code['actionData'])) {
            $this->error('提交数据出错，请重新投注 -7' . Bet::$betCountFun($code['actionData']));
            }
            }
            } *////end

            //防作弊 20150722
            if ($this->types[$code['type']]['type'] != $played['type']) {
                $this->error('提交数据出错，请重新投注2');
            }

            if (strpos($played['name'], "任选") > -1 && $played['type'] == 1) {
                //检查任选的万千百十个位数是否作弊
                if ($code['weiShu'] != 0 && $code['weiShu'] != 3 && $code['weiShu'] != 5 && $code['weiShu'] != 6 && $code['weiShu'] != 7 && $code['weiShu'] != 9 &&
                    $code['weiShu'] != 10 && $code['weiShu'] != 11 && $code['weiShu'] != 19 && $code['weiShu'] != 14 && $code['weiShu'] != 22 &&
                    $code['weiShu'] != 28 && $code['weiShu'] != 12 && $code['weiShu'] != 13 && $code['weiShu'] != 17 && $code['weiShu'] != 18 &&
                    $code['weiShu'] != 20 && $code['weiShu'] != 21 && $code['weiShu'] != 25 && $code['weiShu'] != 26 && $code['weiShu'] != 15 &&
                    $code['weiShu'] != 23 && $code['weiShu'] != 30 && $code['weiShu'] != 29 && $code['weiShu'] != 27) {
                    $this->error('提交数据出错，请重新投注2');
                }

                //任选四复式
                if ($played['id'] == 8) {
                    str_replace("-", "#", $code['actionData'], $num);
                    if ($num > 1) {
                        $this->error('提交数据出错，请重新投注4');
                    }
                }
                //任选三复式
                if ($played['id'] == 14) {
                    str_replace("-", "#", $code['actionData'], $num);
                    if ($num > 2) {
                        $this->error('提交数据出错，请重新投注4');
                    }
                }
                //任选二复式
                if ($played['id'] == 29) {
                    str_replace("-", "#", $code['actionData'], $num);
                    if ($num > 3) {
                        $this->error('提交数据出错，请重新投注4');
                    }
                }
                //任选二大小单双
                if ($played['id'] == 44) {
                    str_replace("-", "#", $code['actionData'], $num);
                    if ($num > 3) {
                        $this->error('提交数据出错，请重新投注4');
                    }
                }

                if ($played['id'] == 9) {
                    if ($code['weiShu'] != 15 && $code['weiShu'] != 23 && $code['weiShu'] != 27 && $code['weiShu'] != 29 && $code['weiShu'] != 30) {
                        $this->error('提交数据出错，请重新投注2');
                    }
                }

                if ($played['id'] == 15 || $played['id'] == 22 || $played['id'] == 23 || $played['id'] == 24 || $played['id'] == 41) {
                    if ($code['weiShu'] != 7 && $code['weiShu'] != 11 && $code['weiShu'] != 13 && $code['weiShu'] != 14 && $code['weiShu'] != 19 &&
                        $code['weiShu'] != 21 && $code['weiShu'] != 22 && $code['weiShu'] != 25 && $code['weiShu'] != 26 && $code['weiShu'] != 28) {
                        $this->error('提交数据出错，请重新投注2');
                    }
                }

                if ($played['id'] == 30 || $played['id'] == 35 || $played['id'] == 36) {
                    if ($code['weiShu'] != 3 && $code['weiShu'] != 5 && $code['weiShu'] != 6 && $code['weiShu'] != 9 && $code['weiShu'] != 10 &&
                        $code['weiShu'] != 12 && $code['weiShu'] != 17 && $code['weiShu'] != 18 && $code['weiShu'] != 20 && $code['weiShu'] != 24) {
                        $this->error('提交数据出错，请重新投注2');
                    }
                }
            }

            if ($played['id'] == 17 || $played['id'] == 20) {
                if (mb_strlen($code['actionData']) > 9) {
                    $this->error('单笔投注注数最大不能超过9位');
                }
            }

            //11x5 bug
            if (strpos($played['name'], "任选") > -1 && $played['type'] == 2) {
                if (!strstr($code['actionData'], ' ') && $played['name'] != '任选一') {
                    $this->error('提交数据出错，请重新投注');
                }
                //检查任选的投注号码是否重复的作弊
                foreach (explode(' ', $code['actionData']) as $d) {
                    str_replace($d, "#", $code['actionData'], $num);
                    if ($num > 1) {
                        $this->error('提交数据出错，1请重新投注3');
                    }
                }
            }
            //11x5 bug
            if (strpos($played['name'], "组选") > -1 && $played['type'] == 2) {
                if (!strstr($code['actionData'], ' ')) {
                    $this->error('提交数据出错，请重新投注3');
                }
                //检查任选的投注号码是否重复的作弊
                foreach (explode(' ', $code['actionData']) as $d) {
                    str_replace($d, "#", $code['actionData'], $num);
                    if ($num > 1) {
                        $this->error('提交数据出错，请重新投注3');
                    }
                }
            }
            if (!$this->MaxZhuShu($code['type'], $played['id'], $code['actionNum'], $actionNo, $this->user['uid'])) {
                return $this->error("超过最大注数");
            }

            if (!$this->ZhuShuMax($code['type'], $played, $code['actionNum'], $actionNo, $this->user['uid'], $cur_type)) {
                return $this->error("超过最大注数");
            }
        }

        $ip = get_client_ip();

        if ($para['fpEnable']) {
            $fpcount = 2;
        }

        $para2 = [
            'actionTime' => $this->time,
            'actionNo' => $para['actionNo'],
            'kjTime' => $actionTime,
            'actionIP' => $ip,
            'uid' => $this->user['uid'],
            'username' => $this->user['username'],
            'serializeId' => uniqid(),
        ];

        if ($zhuihao = I('zhuiHao')) {
            $liqType = 102;
            $info = '追号投注';

            $beishu_array = explode('|', $para['beishu']);

            $codes_2 = [];
            foreach ($codes as $i => $code) {
                $i = 0;
                foreach ($actionNo_array as $action_no) {
                    $para2 = [
                        'actionTime' => $this->time,
                        'actionNo' => $action_no,
                        'kjTime' => $actionTime,
                        'actionIP' => $ip,
                        'uid' => $this->user['uid'],
                        'username' => $this->user['username'],
                        'serializeId' => uniqid(),
                    ];
                    $code['beiShu'] = $beishu_array[$i];
                    $code['zhuiHao'] = 1;
                    $new_code = array_merge($code, $para2);
                    array_push($codes_2, $new_code);
                    $amount += abs($code['actionNum'] * $code['mode'] * $code['beiShu'] * $fpcount);
                    $i++;
                }
            }
            $codes = $codes_2;
            $codes = array_splice($codes, 1);
        } else {
            $liqType = 101;
            $info = '投注';

            foreach ($codes as $i => $code) {
                $codes[$i] = array_merge($code, $para2);
                $amount += abs($code['actionNum'] * $code['mode'] * $code['beiShu'] * $fpcount);
            }
        }

        // 查询用户可用资金
        $user = M('members')->where(['uid' => $this->user['uid']])->field('coin')->find();
        $userAmount = $user['coin'];
        if ($userAmount < $amount) {
            $this->error('您的可用资金不足，是否充值？');
        }

        // 开始事物处理
        $Model = new \Think\Model();
        $Model->startTrans();

        $isBetSuccess = [];
        $isCoinSuccess = [];
        $i = 0;
        foreach ($codes as $code) {
            // 插入投注表
            $code['wjorderId'] = $code['type'] . $code['playedId'] . $this->randomkeys(8 - strlen($code['type'] . $code['playedId']));
            $code['actionNum'] = abs($code['actionNum']);
            $code['mode'] = abs($code['mode']);
            $code['beiShu'] = abs($code['beiShu']);
            $code['istest'] = $this->user['is_test']; //添加是不是测试账户标识
            $amount = abs($code['actionNum'] * $code['mode'] * $code['beiShu'] * $fpcount);
            unset($code['playedName']);
            $code['bets_money'] = $amount;
            $isBetSuccess[$i] = M('bets')->add($code);

            // 添加用户资金流动日志
            $isCoinSuccess[$i] = $this->addCoin([
                'uid' => $this->user['uid'],
                'type' => $code['type'],
                'liqType' => $liqType,
                'info' => $info,
                'extfield0' => $isBetSuccess[$i],
                'extfield1' => $para['serializeId'],
                'coin' => -$amount,
            ]);
            $i++;
        }
        $isSuc = true;
        for (; $i >= 0; $i--) {
            if ($isBetSuccess[$i] === false || $isCoinSuccess[$i] === false) {
                $isSuc = false;
                break;
            }
        }

        if ($isSuc) {
            //将投注记录写入文件
            //            if (!is_dir('./Record/')) {
            //                mkdir('./Record/');
            //            }
            //            $fp         = fopen("./Record/" . $code['username'] . ".txt", "a+");
            //            $tz_content = $code['wjorderId'] . " 投注内容：" . $code['actionData'] . " 玩法：" . $code['playedId'] . " 元角分：" . $code['mode'] . " 倍数：" . $code['beiShu'] . " 注数：" . $code['actionNum'] . " 时间：" . date('m-d H:i:s', time()) . "\r\n\r\n";
            //            $flag       = fwrite($fp, $tz_content);
            //            if (!$flag) {
            //                $this->error('创建投注记录文件失败');
            //            }
            //            fclose($fp);

            $Model->commit(); //成功则提交
            if (in_array(strtolower($this->user['username']), [
                'cswt001', 'cswt002', 'cswt003', 'cswt004', 'cswt005', 'cswt006'])) { //委托账户批量投注
                $Model = new \Think\Model();
                foreach ($isBetSuccess as $value) {
                    if ($value) {
                        if ($Model->query(" call sp_EntrustBet({$value},'{$this->user['username']}')") === false) {
                            $this->error('投注成功，wr账户投注失败！' . ($Model->getDbError()));
                        }
                    }

                }
            }
            $this->success('投注成功');
        } else {
            $Model->rollback(); //不成功，则回滚
            $this->error('投注失败');
        }
    }

    /**
     * {{{ ajax撤单
     */
    final public function deleteCode()
    {
        //$this->beginTransaction();

        $Model = new \Think\Model();
        $Model->startTrans();

        $id = I('id');
        //$sql="select * from {$this->prename}bets where id=".$id;
        if (!$data = M('bets')->where(['id' => I('id')])->find()) {
            $this->error('找不到定单。');
        }

        if ($data['isDelete']) {
            $this->error('这单子已经撤单过了。');
        }

        if ($data['uid'] != $this->user['uid']) {
            $this->error('这单子不是您的，您不能撤单。');
        }
        // 可考虑管理员能给用户撤单情况
        if ($data['kjTime'] <= $this->time) {
            $this->error('已经开奖，不能撤单');
        }

        if ($data['lotteryNo']) {
            $this->error('已经开奖，不能撤单');
        }

        if ($data['qz_uid']) {
            $this->error('单子已经被人抢庄，不能撤单');
        }

        // 冻结时间后不能撤单
        $this->getTypes();
        $ftime = $this->getTypeFtime($data['type']);
        if ($data['kjTime'] - $ftime < $this->time) {
            $this->error('这期已经结冻，不能撤单');
        }

        $amount = $data['beiShu'] * $data['mode'] * $data['actionNum'] * intval(($data['fpEnable'] ? '2' : '1'));
        $amount = abs($amount);
        // 添加用户资金变更日志
        $isSuc1 = $this->addCoin([
            'uid' => $data['uid'],
            'type' => $data['type'],
            'playedId' => $data['playedId'],
            'liqType' => 7,
            'info' => "撤单",
            'extfield0' => $id,
            'coin' => $amount,
        ]);

        // 更改定单为已经删除状态
        $map['isDelete'] = 1;
        $isSuc2 = M('bets')->where('id=' . $id)->save($map);

        if ($isSuc1 !== false && $isSuc2 == true) {
            //将投注记录写入文件
            if (!is_dir('Record/')) {
                mkdir('Record/');
            }

            $fp = fopen("Record/" . $data['username'] . ".txt", "a+");
            $tz_content = $data['wjorderId'] . " 撤单 " . date('m-d H:i:s', time()) . "\r\n\r\n";
            $flag = fwrite($fp, $tz_content);
            if (!$flag) {
                $this->error('创建投注记录文件失败');
            }
            fclose($fp);

            $Model->commit(); //成功则提交
            $this->success('撤单成功');
        } else {
            $Model->rollback(); //不成功，则回滚
            $this->error('撤单失败');
        }

    }
    //}}}

    /**
     * ajax取定单列表
     */
    final public function getOrdered($type = null)
    {
        if (!$this->type) {
            $this->type = $type;
        }

        //$sql="select * from {$this->prename}bets where uid={$_SESSION['user']['uid']} order by id desc limit 7";
        $order_list = M('bets')->where(['uid' => $this->user['uid']])->limit(7)->order('id desc')->select();
        $this->assign('order_list', $order_list);

        $this->assign('time', $this->time);

        $types = $this->getTypes();
        $this->assign('types', $types);

        $playeds = $this->getPlayeds();
        $this->assign('playeds', $playeds);

        $this->display('Game/inc_game_order_history');
    }

    final public function getQiHao($type)
    {
        $thisNo = $this->getGameNo($type);
        $data = [
            'lastNo' => $this->getGameLastNo($type),
            'thisNo' => $this->getGameNo($type),
            'diffTime' => strtotime($thisNo['actionTime']) - $this->time,
            'validTime' => $thisNo['actionTime'],
            'kjdTime' => $this->getTypeFtime($type),
        ];

        $this->ajaxReturn($data, 'JSON');
    }

    final public function getLastKjData($type)
    {
        //dump($type);
        $ykMoney = 0;
        $czName = '重庆时时彩';
        $this->type = $type;
        if (!$lastNo = $this->getGameLastNo($this->type)) {
            $this->error('查找最后开奖期号出错');
        }

        $data = D('data')->where(['type' => $this->type, 'number' => $lastNo['actionNo']])->field('data')->find();

        if (!$lastNo['data'] = $data['data'])
        //$this->error('获取数据出错');
        {
            return null;
        }

        $thisNo = $this->getGameNo($this->type);
        $lastNo['actionName'] = $czName;
        $lastNo['thisNo'] = $thisNo['actionNo'];
        $lastNo['diffTime'] = strtotime($thisNo['actionTime']) - $this->time;
        $lastNo['kjdTime'] = $this->getTypeFtime($type);

        $this->ajaxReturn($lastNo, 'JSON');
        //return $lastNo;
    }

    /*历史开奖*/
    final public function history()
    {

        $this->type = I('type', '', 'intval');
        $history = M('data')->where(['type' => $this->type])->order('number desc,time desc')->limit(10)->field('id,number,data')->select();

        $this->assign('_list', $history);
        $this->meta_title = "历史开奖";
        $this->display();
    }

    /*投注记录*/
    final public function betlog()
    {
        $where['uid'] = $this->user['uid'];
        $betList = M('bets')->field('id,wjorderId,uid,username,type,playedId,actionNo,beiShu,mode,lotteryNo,isDelete,zjCount,bonus,actionNum,fpEnable,actionTime')->where($where)->order('id desc,actionTime desc')->select();
        $this->recordList($betList);
        $this->meta_title = "投注记录";
        $this->display();
    }

    final public function gethistory()
    {

        $this->type = I('type', '', 'intval');
        $history = M('data')->where(['type' => $this->type, 'id' => ['lt', I('last_id', '', 'intval')]])->order('number desc,time desc')->limit(10)->field('id,number,data')->select();

        $this->assign('_list', $history);
        $this->meta_title = "历史开奖";
        $this->display('Game/gethistory');
    }

    //随机函数
    public function randomkeys($length)
    {
        $key = "";
        $pattern = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        $pattern1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $pattern2 = '0123456789';
        for ($i = 0; $i < $length; $i++) {
            $key .= $pattern{mt_rand(0, 35)};
        }

        return $key;
    }

    /**
     * 彩种玩法最大注数单独控制
     * @param $curmid
     * @param $playedInfo
     * @param $num
     * @param $actionNo
     * @param $uid
     * @return bool
     */
    protected function ZhuShuMax($curmid, $playedInfo, $num, $actionNo, $uid, $cur_type)
    {
        //查询官方id
        //        $gf = Type::where(array('is_official'=>1))->select();
        //        $guoTypes = array();
        //        foreach ($gf as $key=>$item) {
        //            $guoTypes[] = $item['id'];
        //        }
        if ($cur_type['is_official'] == 1) {
//        if(in_array($curmid,dynamicConfig::$guoTypes)){
            $maxzs = $playedInfo['gmaxCount'];
        } else {
            $maxzs = $playedInfo['maxCount'];
        }
        if ($maxzs < 0) {
            $this->error('玩法正在升级中...');
            return false;
        } elseif ($maxzs > 0) {
            $played_id = $playedInfo['id'];
            $this->mus[$curmid][$played_id] = isset($this->mus[$curmid][$played_id]) ? $this->mus[$curmid][$played_id] + $num : $num;
            $num = $this->mus[$curmid][$played_id];
            $betRe = M("bets")->where(['actionNo' => $actionNo,
                'type' => $curmid,
                'playedId' => $played_id,
                'uid' => $uid,
                'isDelete' => 0,
            ])->sum('actionNum');
            $num = $num + $betRe;
            if ($num > $maxzs) {
//                $this->error('该玩法当期累计最大投注注数不能超过' . $maxzs . '注');
                return true;
            }
        }
        return true;
    }

    protected function MaxZhuShu($curmid, $played_id, $num, $actionNo, $uid)
    {
        if (in_array($curmid, $this->zhushu_curmids)) {
            if (in_array($played_id, $this->zhushu_playeds)) {
                if ($played_id == 3) {
                    $maxzs = 9999;
                } else {
                    $maxzs = $this->settings['gc_syxw_ds_zs']['gc_syxw_ds_zs'];
                }

                if ($maxzs < 0) {
                    $this->error('玩法正在升级中...');
                    return false;
                } elseif ($maxzs > 0) {
                    $this->mus[$curmid][$played_id] = isset($this->mus[$curmid][$played_id]) ? $this->mus[$curmid][$played_id] + $num : $num;
                    $num = $this->mus[$curmid][$played_id];
                    $betRe = M("bets")->where(['actionNo' => $actionNo,
                        'type' => $curmid,
                        'playedId' => $played_id,
                        'uid' => $uid,
                        'isDelete' => 0,
                    ])->sum('actionNum');
                    $num = $num + $betRe;
                    if ($num > $maxzs) {
//                        $this->error('该玩法当期累计最大投注注数不能超过' . $maxzs . '注');
                        return true;
                    }
                }
            }
        }
        return true;
    }
}
