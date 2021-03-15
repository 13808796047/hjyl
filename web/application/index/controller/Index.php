<?php
namespace app\index\controller;

use app\index\model\Content;
use app\index\model\Params;
use think\Controller;
use think\Session;
use think\View;

class Index extends Controller
{
    public function index()
    {
        // 客服
        $kefu = Params::getParams('kefuGG')['kefuGG'];
        $stauts = Params::getParams('kefuStatus')['kefuStatus'];

        View::share(['kefu' => $kefu, 'status' => $stauts]);
        $json = config('multilingual');

        $this->assign('foot', 'footer');
        $m_c = new Content();
        $this->assign('play_lists', (new Game())->play_list);
        $notice = $m_c->getNotice();
        $this->assign('hash', md5(Session::get('userData.sessionId')));
        $this->assign('notice', $notice);
        $this->assign('notice_first', count($notice) > 0 ? $notice[0] : array());
        return view('index/index');
    }

//    public function getLogin()
    //    {
    //        return view('index/login');
    //    }
}
