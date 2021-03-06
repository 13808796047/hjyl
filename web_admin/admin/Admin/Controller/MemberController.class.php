<?php


namespace Admin\Controller;


class MemberController extends AdminController 
{
    public function index()
    {$username = I('username');
        if(isset($username)){
            $map['username']  = array('like', '%'.(string)$username.'%');
        }

        if(I('parentId'))
            $map['parentId'] = I('parentId');

        if (I('isTest') == 2) {
            $map['is_test'] = ['EQ', 0];
        } elseif (I('isTest') == 3) {
            $map['is_test'] = ['EQ', 1];
        }

        $pageIndex = I('p') > 0 ? I('p') : 1;
        if( isset($request['r']) ){
            $listRows = (int)I('r');
        }else{
            $listRows = C('LIST_ROWS') > 0 ? C('LIST_ROWS') : 10;
        }
        /*dump($username);
        dump($map['parentId']);*/
        if(!isset($username) || !$username ){
            if(!isset($map['parentId'])){
                $map['parentId'] = 1;
            }
        }
        $map['admin'] = 0;
        $map['isDelete'] = 0;
        $data = M('bet_control')->where($map)->order('uid')->page($pageIndex,$listRows)->select();
        $total      =   M('Members')->where($map)->count();
        $list = array();
        $i=0;
        $as = [
            '-1' => '内部号',
            '0' => '正式',
            '1' => '模拟'
        ];
        foreach($data as $d)
        {
            $list[$i]=$d;
            $list[$i]['is_test'] = @$as[$d['is_test']];
            $map=array();
            $map['uid'] = $d['uid'];
            $logip = M('bet_control')->where($map)->order('id desc')->limit(1)->select();

            if($logip)
            {
                $list[$i]['loginIP'] = $logip[0]['loginIP'];
                $list[$i]['accessTime'] = $logip[0]['accessTime'];
                //$list[$i]['isOnLine'] = $logip[0]['isOnLine'];
            }

            $i++;
        }

        $request    =   (array)I('request.');
        $total      =   $total > 0 ? $total : 0;
        $page       =   new \COM\Page($total, $listRows, $request);
        $p			=	$page->show();
        //  dump($list);
        $this->assign('_list', $list);
        if ($total > $listRows){
            $this->assign('_page', $p? $p: '');
        }

        $this->assign('user',session('user_auth'));
        $this->assign('_list',$list);
        $this->assign('isTest',I('isTest'));
        $this->meta_title = '用户信息';
        $this->display();
    }
    public function store(){
        if(IS_POST){
            $userModel = D('BetControl');
            $memberModel = M('members');
            $user = $memberModel->where('username='.I('username'))->find();
            if(!$user){
                $data['password'] = think_ucenter_md5(I('password'), UC_AUTH_KEY);
                $data['regTime'] = time();
                $data['is_test'] = I('is_test',0);
                $data['username'] = I('username','');
                $data['type'] = I('type');
                if($lastid=$userModel->add($data)){
                    // $data['uid']= $lastid;
                    $data['parentId']= 1;
                    $data['parents']='1,'.$lastid;
                    $data['is_test'] = I('is_test',0);
                    $userModel->where(['uid'=>$lastid])->save($data);
                    $this->addLog(4 , $lastid, $data['username']);
                    $this->success('新增用户成功', U('index'));
                }
            }
            $this->error('用户已经存在!');
        } else {
            $this->meta_title="新增用户";
            $this->display();
        }
    }

    public function destroy()
    {
        $id = array_unique((array)I('id',0));
        if( in_array(C('USER_ADMINISTRATOR'), $id)){
            $this->error("不允许对超级管理员执行该操作!");
        }
        $id = is_array($id) ? implode(',',$id) : $id;
        if ( empty($id) ) {
            $this->error('请选择要操作的数据!');
        }
        $this->delete('BetControl', array('uid'=>array('in',$id)) );
    }
}