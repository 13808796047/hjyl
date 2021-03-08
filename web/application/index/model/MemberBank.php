<?php
/**
 * Created by PhpStorm.
 * User: Hon <227560410@qq.com>
 * Date: 2017/9/7 0007
 * Time: 0:45
 */

namespace app\index\model;

use think\Model;

class MemberBank extends Model
{
    protected $pk = 'id';
    public function bankList()
    {
        return $this->belongsTo('BankList', 'bankId');
    }
    public function getAccountAttr($value)
    {
        //截取银行卡号前4位
        $prefix = substr($value, 0, 4);
//截取银行卡号后4位
        $suffix = substr($value, -4, 4);

        $maskBankCardNo = $prefix . " **** **** **** " . $suffix;

        return $maskBankCardNo;

    }
}
