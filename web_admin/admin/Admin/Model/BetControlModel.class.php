<?php
// +----------------------------------------------------------------------
// | OneThink [ WE CAN DO IT JUST THINK IT ]
// +----------------------------------------------------------------------
// | Copyright (c) 2013 http://www.onethink.cn All rights reserved.
// +----------------------------------------------------------------------
// | Author: 麦当苗儿 <zuojiazi@vip.qq.com> <http://www.zjzit.cn>
// +----------------------------------------------------------------------

namespace Admin\Model;
use Think\Model;

/**
 * 用户模型
 * @author 麦当苗儿 <zuojiazi@vip.qq.com>
 */

class BetControl extends Model {

    protected $_validate = array(
        array('username', '1,16', '用户名长度为1-16个字符', self::EXISTS_VALIDATE, 'length'),
        array('username', '', '昵称被占用', self::EXISTS_VALIDATE, 'unique'), //用户名被占用
        array('password', '6,32', '密码长度6-32位', self::EXISTS_VALIDATE, 'length'),
        array('fanDian', '1,32', '返点不能为空', self::EXISTS_VALIDATE, 'length'),
        array('fanDianBdw', '1,32', '不定位返点不能为空', self::EXISTS_VALIDATE, 'length'),
    );

    public function lists($status = 1, $order = 'uid DESC', $field = true){
        $map = array('status' => $status);
        return $this->field($field)->where($map)->order($order)->select();
    }
}
