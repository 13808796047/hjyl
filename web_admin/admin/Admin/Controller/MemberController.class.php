<?php


namespace Admin\Controller;


class MemberController extends AdminController 
{
    public function index()
    {
        $this->meta_title = '用户信息';
        $this->display();
    }
}