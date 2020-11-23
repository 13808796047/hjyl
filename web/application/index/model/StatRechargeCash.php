<?php


namespace app\index\model;


use think\Model;

class StatRechargeCash extends Model
{
//    protected static function init()
//    {
//        self::event('before_insert', function($stat) {
//            // 如果是创建一个根目录
//            if(is_null($stat->parent_id)) {
//                // 将层级设为0
//                $stat->level = 0;
//                // 将path设为 -
//                $stat->path = '-';
//            } else {
//                $stat->level = $stat->parent->level + 1;
//                $stat->path = $stat->parent->path . $stat->parent_id . '-';
//            }
//        });
//    }
//
//    public function parent()
//    {
//        return $this->belongsTo('StatRechargeCash');
//    }
//
//    public function children()
//    {
//        return $this->hasMany('StatRechargeCash', 'parent_id');
//    }
}