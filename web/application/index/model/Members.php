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
    public function getPathIdsAttr()
    {
        // trim($str, '-') 将字符串两端的 - 符号去除
        // explode() 将字符串以 - 为分隔切割为数组
        // 最后 array_filter 将数组中的空值移除
        return array_filter(explode('-', trim($this->parents, ',')));
    }

    // 定义一个访问器，获取所有祖先类目并按层级排序
    public function getAncestorsAttr()
    {
        return Members::getQuery()
            // 使用上面的访问器获取所有祖先类目 ID
            ->whereIn('uid', $this->parents)
            ->select();
    }

    // 定义一个访问器，获取以 - 为分隔的所有祖先类目名称以及当前类目的名称
    public function getFullNameAttr()
    {
        return $this->ancestors  // 获取所有祖先类目
        ->pluck('name') // 取出所有祖先类目的 name 字段作为一个数组
        ->push($this->name) // 将当前类目的 name 字段值加到数组的末尾
        ->implode(' - '); // 用 - 符号将数组的值组装成一个字符串
    }
}