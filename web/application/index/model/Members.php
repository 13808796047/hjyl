<?php
/**
 * Created by PhpStorm.
 * User: Hon <227560410@qq.com>
 * Date: 2017/9/7 0007
 * Time: 0:45
 */

namespace app\index\model;


use think\Model;

class Members extends Model
{
    protected $pk = 'uid';

    public function getList($where, $page = 1, $pageSize = 10)
    {
        return $this->where($where)->page($page, $pageSize)->select();
    }

    /**
     * 查询用户信息
     * @param $uid
     * @return array|false|\PDOStatement|string|Model
     */
    public static function getMemberInfo($uid)
    {
        $m = self::where(['uid' => $uid])->find();
        return $m;
    }

    // 上级
    public function parent()
    {
        return $this->belongsTo('Members', 'parentId');
    }

    public function children()
    {
        return $this->hasMany('Members', 'parentId');
    }

    public function memberRecharges()
    {
        return $this->hasMany('MemberRecharge', 'uid');
    }

    public function memberCashs()
    {
        return $this->hasMany('MemberCash', 'uid');
    }

    // 定义一个访问器，获取所有祖先类目的 ID 值
    public function getPathIdsAttribute()
    {
        // trim($str, '-') 将字符串两端的 - 符号去除
        // explode() 将字符串以 - 为分隔切割为数组
        // 最后 array_filter 将数组中的空值移除
        return array_filter(explode('-', trim($this->parents, ',')));
    }

    // 定义一个访问器，获取所有祖先类目并按层级排序
    public function getAncestorsAttribute()
    {
        return Members::getQuery()
            // 使用上面的访问器获取所有祖先类目 ID
            ->whereIn('id', $this->parents)
            ->get();
    }
}