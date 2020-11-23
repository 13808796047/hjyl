<?php


class StatRechargeAndCash extends \think\console\Command
{

    protected function configure()
    {
        $this->setName('统计充值和提现')->setDescription("计划任务 统计充值和提现");
    }

    //调用SendMessage 这个类时,会自动运行execute方法
    protected function execute(\think\console\Input $input, \think\console\Output $output)
    {
        $output->writeln('统计开始....');
        /*** 这里写计划任务列表集 START ***/

        $this->stat();

        /*** 这里写计划任务列表集 END ***/
        $output->writeln('统计结束....');
    }

    //获取当天生日的员工 发短信
    public function stat()
    {
        $users = \app\index\model\Members::select();

        foreach($users as $user) {
            $stat = \app\index\model\StatRechargeCash::where('uid', $user->uid)->select();
            $data = [
                'username' => $user->username,
                'type' => $user->type,
                'coin' => $user->coin,
                'uid' => $user->uid,
                'parent' => $user->parent,
                'parents' => '-' . str_replace(',', '-', $user->parents) . '-',
                'recharge_amount' => $user->memberRecharges()->where('state', 11)->sum('amount'),
                'cash_amount' => $user->memberCashs()->sum('amount')

            ];
            if($stat) {
                $stat->update($data);
            } else {
                $stat->create($data);
            }
        }
    }

}