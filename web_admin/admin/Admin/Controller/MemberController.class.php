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
        $data = M('Members')->where($map)->order('uid')->page($pageIndex,$listRows)->select();
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
            $logip = M('member_session')->where($map)->order('id desc')->limit(1)->select();

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
}