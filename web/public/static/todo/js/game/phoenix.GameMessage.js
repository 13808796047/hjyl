﻿
//追号区域
;
(function(host, name, Event, undefined) {
    var defConfig = {
            //彩种休市提示
            lotteryClose: ['<div class="bd text-center">',
                '<p class="text-title text-left">非常抱歉，本彩种已休市。<br />请与<#=orderDate#>后再购买</p>',
                '<div class="lottery-numbers text-left">',
                '<div class="tltle"><#=lotteryName#> 第<strong class="color-green"><#=lotteryPeriods#></strong>期开奖号码：</div>',
                '<div class="content">',
                '<#=lotterys#>',
                '<a href="#">查看更多&raquo;</a>',
                '</div>',
                '</div>',
                '<dl class="lottery-list">',
                '<dt>您可以购买以下彩种</dt>',
                '<#=lotteryType#>',
                '</dl>',
                '</div>'
            ].join(''),
            //投注信息核对
            checkProject: ['<div class="bd">',
                '<ul class="ui-form">',
                '<li>',
                '<input type="input" placeholder="方案名称" class="">',
                '</li>',
                '<li>',
                '<label for="question1" class="ui-label">彩种：</label>',
                '<span class="ui-text-info"><#=lotteryName#></span>',
                '</li>',
                '<li>',
                '<label for="answer1" class="ui-label">详情：</label>',
                '<div class="textarea" style="font-size:12px;">',
                '<#=lotteryInfo#>',
                '</div>',
                '</li>',
                '</ul>',
                '</div>'
            ].join(''),
            //投注信息核对
            checkLotters: ['<div class="bd">',
                '<ul class="ui-form">',
                '<li>',
                '<label for="question1" class="ui-label">彩种：</label>',
                '<span class="ui-text-info"><#=lotteryName#></span>',
                '<label for="question1" class="ui-label" style="margin-left:10px;">期号：</label>',
                '<span class="ui-text-info"><#=lotteryDate#>期</span>',
                '</li>',
                '<li>',
                '<label for="answer1" class="ui-label">详情：</label>',
                '<div class="textarea" style="font-size:12px;">',
                '<#=lotteryInfo#>',
                '</div>',
                '</li>',
                '<li>',
                '<label for="question2" class="ui-label">付款总金额：</label>',
                '<span class="ui-text-info"><span class="color-red"><#=lotteryamount#></span>元</span>',
                '</li>',
                '<li>',
                '<label for="question2" class="ui-label">付款帐号：</label>',
                '<span class="ui-text-info"><span class="color-red"><#=lotteryAcc#></span></span>',
                '</li>',
                '</ul>',
                '</div>'
            ].join(''),

            //方案详情
            planDetails: ['<div class="bd">',
                '<ul class="ui-form">',
                '<li>',
                '<label for="question1" class="ui-label">方案彩种：</label>',
                '<#=lotteryname#>',
                '</li>',
                '<li>',
                '<label for="question1" class="ui-label">投注期号：</label>',
                '<#=issue#>期',
                '</li>',
                '<li>',
                '<label for="question1" class="ui-label">方案名称：</label>',
                '<input type="text" id="J-plan-name" readonly="readonly" class="input" value="<#=planname#>" placeholder="在此输入方案名称">',
                '</li>',
                '<li>',
                '<label for="answer1" class="ui-label">方案详情：</label>',
                '<div class="textarea" style="font-size:12px;">',
                '<#=methodname#><#=codes#>',
                '</div>',
                '</li>',
                '<li>',
                '<label for="question2" class="ui-label">方案金额：</label>',
                '<span class="ui-text-info"><span class="color-red"><#=money#></span>元</span>',
                '</li>',
                '</ul>',
                '</div>'
            ].join(''),

            //投注信息核对
            checkPlan: ['<div class="bd">',
                '<ul class="ui-form">',
                '<li>',
                '<label for="question1" class="ui-label">方案彩种：</label>',
                '<#=lotteryName#>',
                '</li>',
                '<li>',
                '<label for="question1" class="ui-label">方案名称：</label>',
                '<input type="text" id="J-plan-name" class="input" value="<#=planName#>" placeholder="在此输入方案名称">',
                '</li>',
                '<li>',
                '<label for="answer1" class="ui-label">方案详情：</label>',
                '<div class="textarea" style="font-size:12px;">',
                '<#=lotteryInfo#>',
                '</div>',
                '</li>',
                '<li>',
                '<label for="question2" class="ui-label">方案金额：</label>',
                '<span class="ui-text-info"><span class="color-red"><#=lotteryamount#></span>元</span>',
                '</li>',
                '<li>',
                '<label for="question2" class="ui-label">付款帐号：</label>',
                '<span class="ui-text-info"><span class="color-red"><#=lotteryAcc#></span></span>',
                '</li>',
                '</ul>',
                '</div>'
            ].join(''),

            //未到销售时间
            nonSaleTime: ['<div class="bd text-center">',
                '<p class="text-title text-left">非常抱歉，本彩种未到销售时间。<br />请与<#=orderDate#>后再购买</p>',
                '<dl class="lottery-list">',
                '<dt>您可以购买以下彩种</dt>',
                '<#=lotteryType#>',
                '</dl>',
                '</div>'
            ].join(''),

            //正常提示
            normal: ['<div class="bd text-center">',
                '<div class="pop-waring">',
                '<i class="ico-waring <#=icon-class#>"></i>',
                '<h4 class="pop-text"><#=msg#><br /></h4>',
                '</div>',
                '</div>'
            ].join(''),

            //无效字符提示
            invalidtext: ['<div class="bd text-center">',
                '<div class="pop-waring">',
                '<i class="ico-waring <#=icon-class#>"></i>',
                '<h4 class="pop-text"><#=msg#><br /></h4>',
                '</div>',
                '</div>'
            ].join(''),

            //投注过期提示
            betExpired: ['<div class="bd text-center">',
                '<div class="pop-waring">',
                '<i class="ico-waring <#=icon-class#>"></i>',
                '<h4 class="pop-text"><#=msg#><br /></h4>',
                '</div>',
                '</div>'
            ].join(''),

            //倍数超限
            multipleOver: ['<div class="bd text-center">',
                '<div class="pop-waring">',
                '<i class="ico-waring <#=icon-class#>"></i>',
                '<h4 class="pop-text"><#=msg#><br /></h4>',
                '</div>',
                '</div>'
            ].join(''),

            //暂停销售
            pauseBet: ['<div class="bd text-center">',
                '<div class="pop-waring">',
                '<i class="ico-waring <#=icon-class#>"></i>',
                '<h4 class="pop-text"><#=msg#><br /></h4>',
                '</div>',
                '</div>'
            ].join(''),

            //成功提示
            successTip: ['<div class="bd text-center">',
                '<div class="pop-title">',
                '<i class="ico-waring <#=icon-class#>"></i>',
                '<h4 class="pop-text"><#=msg#><br /></h4>',
                '</div>',
                /*'<p class="text-note">您可以通过”<a href="#">游戏记录</a>“查询您的投注记录！</p>',*/
                '</div>'
            ].join(''),
            //提醒选求提示
            checkBalls: ['<div class="bd text-center">',
                '<div class="pop-title">',
                '<i class="ico-waring <#=iconClass#>"></i>',
                '<h4 class="pop-text">请至少选择一注投注号码！</h4>',
                '</div>',
                '<div class="pop-btn ">',
                '<a href="javascript:void(0);" class="btn closeBtn">关 闭<b class="btn-inner"></b></a>',
                '</div>',
                '</div>'
            ].join(''),
            //错误提示
            errorTip: ['<div class="bd text-center">',
                '<div class="pop-title">',
                '<i class="ico-error"></i>',
                '<h4 class="pop-text">方案提交失败,<br />请检查网络并重新提交！</h4>',
                '</div>',
                '<div class="pop-btn ">',
                '<a href="javascript:void(0);" class="btn closeBtn">关 闭<b class="btn-inner"></b></a>',
                '</div>',
                '</div>'
            ].join(''),
            //封锁变价
            blockade: ['<div class="bd panel-game-msg-blockade" id="J-blockade-panel-main">',
                '<form id="J-form-blockade-detail" action="ssc-blockade-detail.php" target="_blank" method="post"></form>',
                '<div class="game-msg-blockade-text">存在<#=blockadeType#>内容，系统已为您做出 <a href="#" data-action="blockade-detail">最佳处理</a> ，点击<span class="color-red">“确认”</span>完成投注</div>',
                '<div>',
                '<div class="game-msg-blockade-line-title">彩种：<#=gameTypeTitle#></div>',
                '<div class="game-msg-blockade-line-title">期号：<#=currentGameNumber#></div>',
                '</div>',
                '<div id="J-game-panel-msg-blockade-0">',
                '<div class="game-msg-blockade-cont" id="J-msg-panel-submit-blockade-error0"><#=blockadeData0#></div>',
                '</div>',
                '<div class="game-msg-blockade-panel-money">',
                '<div><b>付款总金额：</b><span class="color-red"><b id="J-money-blockade-adjust"><#=amountAdjust#></b></span> 元&nbsp;&nbsp;&nbsp;&nbsp;<span style="display:<#=display#>"><b>减少投入：</b><span class="color-red"><b id="J-money-blockade-change"><#=amountChange#></b></span> 元</span></div>',
                '<div><b>付款账号：</b><#=username#></div>',
                '</div>',
                '<div>',
                '<p class="text-note">购买后请您尽量避免撤单，如撤单将收取手续费：￥<span class="handlingCharge">0.00</span>元</p>',
                '<p class="text-note">本次投注，若未涉及到付款金额变化，将不再提示</p>',
                '</div>',
                '<ul class="textarea cancel-bets clearfix" style="font-size:12px;margin-top:10px;">',
                '<li><span class="">奖期</span><span class="">撤单手续费</span></li>',
                '<li><span>2312321312</span><span>123131312313</span></li>',
                '<li><span>2312321312</span><span>123131312313</span></li>',
                '<li><span>2312321312</span><span>123131312313</span></li>',
                '<li><span>2312321312</span><span>123131312313</span></li>',
                '<li><span>2312321312</span><span>123131312313</span></li>',
                '<li><span>2312321312</span><span>123131312313</span></li>',
                '<li><span>2312321312</span><span>123131312313</span></li>',
                '<li><span>2312321312</span><span>123131312313</span></li>',
                '<li></li>',
                '</ul>',
                '</div>'
            ].join('')
        },
        instance,
        closeTime = null,
        Games = host.Games;

    if ((typeof translate) == 'undefined') {
        //取obj傳遞語系
        //語系檔路徑
        // var cookies = document.cookie;
        // var arr = cookies.split('; ');
        // var obj = {};
        // for (var i = 0; i < arr.length; i++) {
        //     var _arr = arr[i].split('=');
        //     obj[_arr[0]] = _arr[1];
        // }
        // var Lang = 'CN';
        // switch (obj.user_lang) {
        //     case "2":
        //         Lang = 'EN';
        //         break;
        //     case "3":
        //         Lang = 'VM';
        //         break;
        //     default:
        //         Lang = 'CN';
        //         break;
        // }
        // // GamesInitData.LANG = GamesInitData.LANG == undefined ? 'CN' : GamesInitData.LANG;
        // var getLangPath = 'sy2/todo/js/lang/Lang_' + Lang + '.json';
        // //載入語系檔
        // $.ajax({
        //     url: getLangPath,
        //     dataType: 'json',
        //     async: false,
        //     success: function(data) {
        //         window.translate = data;
        //     }
        // });
        window.translate = parent.GamesInitData.multilingual;

    }

    var pros = {
        //初始化
        init: function(cfg) {
            var me = this;
            me.win = new host.util.MiniWindow({
                //实例化时追加的最外层样式名
                cls: 'pop w-9'
            });
            me.mask = host.util.Mask.getInstance();
            //绑定隐藏完成事件
            me.reSet();
            me.win.addEvent('afterHide', function() {
                me.reSet()
            });

            this.defConfig = {
                //彩种休市提示
                lotteryClose: ['<div class="bd text-center">',
                    '<p class="text-title text-left"' + translate.defConfig.LotteryClose[0] + '<br />' + translate.defConfig.Pls + '<#=orderDate#>' + translate.defConfig.LotteryClose[1] + '</p>',
                    '<div class="lottery-numbers text-left">',
                    '<div class="tltle"><#=lotteryName#> ' + translate.defConfig.LotteryName[0] + '<strong class="color-green"><#=lotteryPeriods#></strong>' + translate.defConfig.LotteryName[1] + '</div>',
                    '<div class="content">',
                    '<#=lotterys#>',
                    '<a href="#">' + translate.defConfig.Loadmore + '&raquo;</a>',
                    '</div>',
                    '</div>',
                    '<dl class="lottery-list">',
                    '<dt>' + translate.defConfig.LotteryCloseInfo + '</dt>',
                    '<#=lotteryType#>',
                    '</dl>',
                    '</div>'
                ].join(''),
                //投注信息核对
                checkProject: ['<div class="bd">',
                    '<ul class="ui-form">',
                    '<li>',
                    '<input type="input" placeholder="' + translate.defConfig.CaseName + '" class="">',
                    '</li>',
                    '<li>',
                    '<label for="question1" class="ui-label">' + translate.defConfig.Types + '</label>',
                    '<span class="ui-text-info"><#=lotteryName#></span>',
                    '</li>',
                    '<li>',
                    '<label for="answer1" class="ui-label">' + translate.defConfig.DetailInfo + '</label>',
                    '<div class="textarea" style="font-size:12px;">',
                    '<#=lotteryInfo#>',
                    '</div>',
                    '</li>',
                    '</ul>',
                    '</div>'
                ].join(''),
                //投注信息核对
                checkLotters: ['<div class="bd">',
                    '<ul class="ui-form">',
                    '<li>',
                    '<label for="question1" class="ui-label">' + translate.defConfig.Types + '</label>',
                    '<span class="ui-text-info"><#=lotteryName#></span>',
                    '<label for="question1" class="ui-label" style="margin-left:10px;">' + translate.defConfig.Periods + '</label>',
                    '<span class="ui-text-info"><#=lotteryDate#>' + translate.defConfig.Period + '</span>',
                    '</li>',
                    '<li>',
                    '<label for="answer1" class="ui-label">' + translate.defConfig.DetailInfo + '</label>',
                    '<div class="textarea" style="font-size:12px;">',
                    '<#=lotteryInfo#>',
                    '</div>',
                    '</li>',
                    '<li>',
                    '<label for="question2" class="ui-label">' + translate.defConfig.PayAmout + '</label>',
                    '<span class="ui-text-info"><span class="color-red"><#=lotteryamount#></span>' + translate.defConfig.Dollar + '</span>',
                    '</li>',
                    '<li>',
                    '<label for="question2" class="ui-label">' + translate.defConfig.PayAccount + '</label>',
                    '<span class="ui-text-info"><span class="color-red"><#=lotteryAcc#></span></span>',
                    '</li>',
                    '</ul>',
                    '</div>'
                ].join(''),

                //方案详情
                planDetails: ['<div class="bd">',
                    '<ul class="ui-form">',
                    '<li>',
                    '<label for="question1" class="ui-label">' + translate.defConfig.TypesOfCase + '</label>',
                    '<#=lotteryname#>',
                    '</li>',
                    '<li>',
                    '<label for="question1" class="ui-label">' + translate.defConfig.BettingPeriod + '</label>',
                    '<#=issue#>期',
                    '</li>',
                    '<li>',
                    '<label for="question1" class="ui-label">"' + translate.defConfig.CaseName + '</label>',
                    '<input type="text" id="J-plan-name" readonly="readonly" class="input" value="<#=planname#>" placeholder="' + translate.defConfig.InputCaseName + '">',
                    '</li>',
                    '<li>',
                    '<label for="answer1" class="ui-label">' + translate.defConfig.DetailOfCase + '</label>',
                    '<div class="textarea" style="font-size:12px;">',
                    '<#=methodname#><#=codes#>',
                    '</div>',
                    '</li>',
                    '<li>',
                    '<label for="question2" class="ui-label">' + translate.defConfig.CashOfCase + '</label>',
                    '<span class="ui-text-info"><span class="color-red"><#=money#></span>' + translate.defConfig.Dollar + '</span>',
                    '</li>',
                    '</ul>',
                    '</div>'
                ].join(''),

                //投注信息核对
                checkPlan: ['<div class="bd">',
                    '<ul class="ui-form">',
                    '<li>',
                    '<label for="question1" class="ui-label">' + translate.defConfig.TypesOfCase + '</label>',
                    '<#=lotteryName#>',
                    '</li>',
                    '<li>',
                    '<label for="question1" class="ui-label">"' + translate.defConfig.CaseName + '</label>',
                    '<input type="text" id="J-plan-name" class="input" value="<#=planName#>" placeholder="' + translate.defConfig.InputCaseName + '">',
                    '</li>',
                    '<li>',
                    '<label for="answer1" class="ui-label">' + translate.defConfig.DetailOfCase + '</label>',
                    '<div class="textarea" style="font-size:12px;">',
                    '<#=lotteryInfo#>',
                    '</div>',
                    '</li>',
                    '<li>',
                    '<label for="question2" class="ui-label">' + translate.defConfig.CashOfCase + '</label>',
                    '<span class="ui-text-info"><span class="color-red"><#=lotteryamount#></span>' + translate.defConfig.Dollar + '</span>',
                    '</li>',
                    '<li>',
                    '<label for="question2" class="ui-label">' + translate.defConfig.PayAccount + '</label>',
                    '<span class="ui-text-info"><span class="color-red"><#=lotteryAcc#></span></span>',
                    '</li>',
                    '</ul>',
                    '</div>'
                ].join(''),

                //未到销售时间
                nonSaleTime: ['<div class="bd text-center">',
                    '<p class="text-title text-left">' + translate.defConfig.NonSaleTime[0] + '<br />' + translate.defConfig.Pls + '<#=orderDate#>' + translate.defConfig.NonSaleTime[1] + '</p>',
                    '<dl class="lottery-list">',
                    '<dt>' + translate.defConfig.LotteryCloseInfo + '</dt>',
                    '<#=lotteryType#>',
                    '</dl>',
                    '</div>'
                ].join(''),

                //正常提示
                normal: ['<div class="bd text-center">',
                    '<div class="pop-waring">',
                    '<i class="ico-waring <#=icon-class#>"></i>',
                    '<h4 class="pop-text"><#=msg#><br /></h4>',
                    '</div>',
                    '</div>'
                ].join(''),

                //无效字符提示
                invalidtext: ['<div class="bd text-center">',
                    '<div class="pop-waring">',
                    '<i class="ico-waring <#=icon-class#>"></i>',
                    '<h4 class="pop-text"><#=msg#><br /></h4>',
                    '</div>',
                    '</div>'
                ].join(''),

                //投注过期提示
                betExpired: ['<div class="bd text-center">',
                    '<div class="pop-waring">',
                    '<i class="ico-waring <#=icon-class#>"></i>',
                    '<h4 class="pop-text"><#=msg#><br /></h4>',
                    '</div>',
                    '</div>'
                ].join(''),

                //倍数超限
                multipleOver: ['<div class="bd text-center">',
                    '<div class="pop-waring">',
                    '<i class="ico-waring <#=icon-class#>"></i>',
                    '<h4 class="pop-text"><#=msg#><br /></h4>',
                    '</div>',
                    '</div>'
                ].join(''),

                //暂停销售
                pauseBet: ['<div class="bd text-center">',
                    '<div class="pop-waring">',
                    '<i class="ico-waring <#=icon-class#>"></i>',
                    '<h4 class="pop-text"><#=msg#><br /></h4>',
                    '</div>',
                    '</div>'
                ].join(''),

                //成功提示
                successTip: ['<div class="bd text-center">',
                    '<div class="pop-title">',
                    '<i class="ico-waring <#=icon-class#>"></i>',
                    '<h4 class="pop-text"><#=msg#><br /></h4>',
                    '</div>',
                    /*'<p class="text-note">您可以通过”<a href="#">游戏记录</a>“查询您的投注记录！</p>',*/
                    '</div>'
                ].join(''),
                //提醒选求提示
                checkBalls: ['<div class="bd text-center">',
                    '<div class="pop-title">',
                    '<i class="ico-waring <#=iconClass#>"></i>',
                    '<h4 class="pop-text">' + translate.SelectOne + '</h4>',
                    '</div>',
                    '<div class="pop-btn ">',
                    '<a href="javascript:void(0);" class="btn closeBtn">' + translate.Close + '<b class="btn-inner"></b></a>',
                    '</div>',
                    '</div>'
                ].join(''),
                //错误提示
                errorTip: ['<div class="bd text-center">',
                    '<div class="pop-title">',
                    '<i class="ico-error"></i>',
                    '<h4 class="pop-text">' + translate.defConfig.errorTip[0] + ',<br />' + translate.defConfig.errorTip[1] + '</h4>',
                    '</div>',
                    '<div class="pop-btn ">',
                    '<a href="javascript:void(0);" class="btn closeBtn">' + translate.Close + '<b class="btn-inner"></b></a>',
                    '</div>',
                    '</div>'
                ].join(''),
                //封锁变价
                blockade: ['<div class="bd panel-game-msg-blockade" id="J-blockade-panel-main">',
                    '<form id="J-form-blockade-detail" action="ssc-blockade-detail.php" target="_blank" method="post"></form>',
                    '<div class="game-msg-blockade-text">' + translate.defConfig.blockade.TitleInfo[0] + '<#=blockadeType#>' + translate.defConfig.blockade.TitleInfo[1] + ' <a href="#" data-action="blockade-detail">' + translate.defConfig.blockade.TitleInfo[2] + '</a> ，' + translate.defConfig.blockade.TitleInfo[3] + '<span class="color-red">“' + translate.defConfig.blockade.TitleInfo[4] + '”</span>' + translate.defConfig.blockade.TitleInfo[5] + '</div>',
                    '<div>',
                    '<div class="game-msg-blockade-line-title">' + translate.defConfig.Types + '<#=gameTypeTitle#></div>',
                    '<div class="game-msg-blockade-line-title">' + translate.defConfig.Periods + '<#=currentGameNumber#></div>',
                    '</div>',
                    '<div id="J-game-panel-msg-blockade-0">',
                    '<div class="game-msg-blockade-cont" id="J-msg-panel-submit-blockade-error0"><#=blockadeData0#></div>',
                    '</div>',
                    '<div class="game-msg-blockade-panel-money">',
                    '<div><b>' + translate.defConfig.PayAmout + '</b><span class="color-red"><b id="J-money-blockade-adjust"><#=amountAdjust#></b></span> ' + translate.defConfig.Dollar + '&nbsp;&nbsp;&nbsp;&nbsp;<span style="display:<#=display#>"><b>减少投入：</b><span class="color-red"><b id="J-money-blockade-change"><#=amountChange#></b></span> ' + translate.defConfig.Dollar + '</span></div>',
                    '<div><b>' + translate.defConfig.PayAccount + '</b><#=username#></div>',
                    '</div>',
                    '<div>',
                    '<p class="text-note">' + translate.defConfig.blockade.Note[0] + '￥<span class="handlingCharge">0.00</span>' + translate.defConfig.Dollar + '</p>',
                    '<p class="text-note">' + translate.defConfig.blockade.Note[1] + '</p>',
                    '</div>',
                    '<ul class="textarea cancel-bets clearfix" style="font-size:12px;margin-top:10px;">',
                    '<li><span class="">' + translate.defConfig.Award + '</span><span class="">' + translate.defConfig.Cost + '</span></li>',
                    '<li><span>2312321312</span><span>123131312313</span></li>',
                    '<li><span>2312321312</span><span>123131312313</span></li>',
                    '<li><span>2312321312</span><span>123131312313</span></li>',
                    '<li><span>2312321312</span><span>123131312313</span></li>',
                    '<li><span>2312321312</span><span>123131312313</span></li>',
                    '<li><span>2312321312</span><span>123131312313</span></li>',
                    '<li><span>2312321312</span><span>123131312313</span></li>',
                    '<li><span>2312321312</span><span>123131312313</span></li>',
                    '<li></li>',
                    '</ul>',
                    '</div>'
                ].join('')
            };
        },
        //彩种提示类型
        doAction: function(data) {
            var me = this,
                funName = 'rebulid' + data['type'],
                getHtml = 'getHtml' + data['type'],
                fn = function() {};



            if (me[funName] && $.isFunction(me[funName])) {
                fn = me[funName];
            }
            data['tpl'] = typeof data['tpl'] == 'undefined' ? me[getHtml]() : '' + data['tpl'];
            //删除type数据
            //防止在渲染的时候进行递归调用
            delete data['type'];
            //调用子类方法
            fn.call(me, data);
        },
        formatHtml: function(tpl, order) {
            var me = this,
                o = order,
                p, reg;
            for (p in o) {
                if (o.hasOwnProperty(p)) {
                    reg = RegExp('<#=' + p + '#>', 'g');
                    tpl = tpl.replace(reg, o[p]);
                }
            }
            return tpl;
        },
        //检查数组存在某数
        arrIndexOf: function(value, arr) {
            var r = 0;
            for (var s = 0; s < arr.length; s++) {
                if (arr[s] == value) {
                    r += 1;
                }
            }
            return r || -1;
        },
        //通用
        getHtmlWaring: function() {
            var cfg = this.defConfig;
            return cfg.normal;
        },
        //默认弹窗
        rebulidnormal: function(parameter) {
            var me = this,
                result = {};
            result['mask'] = true;
            result['closeText'] = translate.Close;
            result['closeIsShow'] = true;
            result['closeFun'] = function() {
                me.hide()
            };
            result['content'] = me.formatHtml(parameter['tpl'], parameter['data']['tplData']);
            me.show($.extend(result, parameter));
        },
        //获取默认提示弹窗
        getHtmlnormal: function() {
            return this.getHtmlWaring();
        },
        /*
        	//彩种核对
        	phoenix.Games.getCurrentGameMessage().show({
        	   type : 'checkLotters',
        	   data : {
        	   		tplData : {
        		   		//当期彩票详情
        		        lotteryDate : '20121128-023',
        		        //彩种名称
        		        lotteryName : 'shishicai',
        		        //投注详情
        		        lotteryInfo : ,
        		        //彩种金额
        		        lotteryamount : {'year':'2013','month':'5','day':'3','hour':'1','min':'30'},
        		        //付款帐号
        		        lotteryAcc :，
        		       	//手续费
        		       	lotteryCharge 
        	   		}
        		}
        	})
         */
        rebulidcheckLotters: function(parameter) {
            var me = this,
                order = Games.getCurrentGameOrder().getTotal()['orders'],
                result = {};
            result['mask'] = true;
            result['iconClass'] = '';

            // //彩种名称
            // parameter['data']['tplData']['lotteryName'] = function(){
            // 	return lotteryName || '';
            // };
            // //本次开奖期数
            // parameter['data']['tplData']['lotteryPeriods'] = function(){
            // 	return lotteryPeriods || '';
            // };
            // //购买日期
            // parameter['data']['tplData']['orderDate'] = function(){
            // 	return time['year'] + '年' + time['month'] + '月' + time['day'] + '日 ' + time['hour'] + ':' + time['min'];
            // };
            // //彩票详情
            // parameter['data']['tplData']['lotterys'] = function(){
            // 	var html  = '';
            // 	if($.isArray(lotterys)){
            // 		for (var i = 0; i < lotterys.length; i++) {
            // 			html += '<em>' + lotterys[i] + '</em>';
            // 		};
            // 	}
            // 	return html;
            // };
            // //彩票种类
            // parameter['data']['tplData']['lotteryType'] = function(){
            // 	var html  = '';
            // 	if($.isArray(typeArray)){
            // 		for (var i = 0; i < typeArray.length; i++) {
            // 			html += '<dd><span style="background:url(' + typeArray[i]['pic'] +')" class="pic" title="' + typeArray[i]['name'] + '" alt="' + typeArray[i]['name'] + '"></span><a href="' + typeArray[i]['url'] + '" class="btn">'+translate.GoBetting+'<b class="btn-inner"></b></a></dd>';
            // 		};
            // 	}	
            // 	return html;
            // };
            result['content'] = me.formatHtml(parameter['tpl'], parameter['data']['tplData']);
            me.show($.extend(result, parameter));
        },
        getHtmlcheckLotters: function() {
            var cfg = this.defConfig;
            return cfg.checkLotters;
        },
        rebulidcheckProject: function(parameter) {
            var me = this,
                order = Games.getCurrentGameOrder().getTotal()['orders'],
                result = {};
            result['mask'] = true;
            result['iconClass'] = '';
            result['content'] = me.formatHtml(parameter['tpl'], parameter['data']['tplData']);
            me.show($.extend(result, parameter));
        },
        getHtmlcheckProject: function() {
            var cfg = this.defConfig;
            return cfg.checkLotters;
        },
        rebulidcheckPlan: function(parameter) {
            var me = this,
                order = Games.getCurrentGameOrder().getTotal()['orders'],
                result = {};
            result['mask'] = true;
            result['iconClass'] = '';
            result['content'] = me.formatHtml(parameter['tpl'], parameter['data']['tplData']);
            me.show($.extend(result, parameter));
        },
        getHtmlcheckPlan: function() {
            var cfg = this.defConfig;
            return cfg.checkPlan;
        },
        rebulidplanDetails: function(parameter) {
            var me = this,
                order = Games.getCurrentGameOrder().getTotal()['orders'],
                result = {};
            result['mask'] = true;
            result['iconClass'] = '';
            result['content'] = me.formatHtml(parameter['tpl'], parameter['data']['tplData']);
            me.show($.extend(result, parameter));
        },
        getHtmlplanDetails: function() {
            var cfg = this.defConfig;
            return cfg.planDetails;
        },
        /*
        	//彩种关闭调用实例
        	phoenix.Games.getCurrentGameMessage().show({
        	   type : 'lotteryClose',
        	   data : {
        	   		tplData : {
        		   		//当期彩票详情
        		        lotterys : [1,2,3,4,5,6],
        		        //彩种名称
        		        lotteryName : 'shishicai',
        		        //开奖期数
        		        lotteryPeriods : '20130528-276',
        		        //开始购买时间
        		        orderDate : {'year':'2013','month':'5','day':'3','hour':'1','min':'30'},
        		        //提示彩票种类
        		        lotteryType : [{'name':'leli','pic':'#','url':'http://163.com'},{'name':'kuaile8','pic':'#','url':'http://pp158.com'}]
        	   		}
        		}
        	})
         */
        //彩种关闭
        rebulidlotteryClose: function(parameter) {
            var me = this,
                result = {};
            lotteryName = parameter['data']['tplData']['lotteryName'];
            lotteryPeriods = parameter['data']['tplData']['lotteryPeriods'];
            time = parameter['data']['tplData']['orderDate'];
            lotterys = parameter['data']['tplData']['lotterys'];
            typeArray = parameter['data']['tplData']['lotteryType'];
            result['mask'] = true;
            result['iconClass'] = '';
            result['closeIsShow'] = true;
            result['closeFun'] = function() {
                me.hide();
            };
            //彩种名称
            parameter['data']['tplData']['lotteryName'] = function() {
                return lotteryName || '';
            };
            //本次开奖期数
            parameter['data']['tplData']['lotteryPeriods'] = function() {
                return lotteryPeriods || '';
            };
            //购买日期
            parameter['data']['tplData']['orderDate'] = function() {
                return time['year'] + '年' + time['month'] + '月' + time['day'] + '日 ' + time['hour'] + ':' + time['min'];
            };
            //彩票详情
            parameter['data']['tplData']['lotterys'] = function() {
                var html = '';
                if ($.isArray(lotterys)) {
                    for (var i = 0; i < lotterys.length; i++) {
                        html += '<em>' + lotterys[i] + '</em>';
                    };
                }
                return html;
            };
            //彩票种类
            parameter['data']['tplData']['lotteryType'] = function() {
                var html = '';
                if ($.isArray(typeArray)) {
                    for (var i = 0; i < typeArray.length; i++) {
                        html += '<dd><span style="background:url(' + typeArray[i]['pic'] + ')" class="pic" title="' + typeArray[i]['name'] + '" alt="' + typeArray[i]['name'] + '"></span><a href="' + typeArray[i]['url'] + '" class="btn">' + translate.GoBetting + '<b class="btn-inner"></b></a></dd>';
                    };
                }
                return html;
            };
            result['content'] = me.formatHtml(parameter['tpl'], parameter['data']['tplData']);
            me.show($.extend(result, parameter));
        },
        getHtmllotteryClose: function() {
            var cfg = this.defConfig;
            return cfg.lotteryClose;
        },
        /*
        	//调用实例
        	phoenix.Games.getCurrentGameMessage().show({
        	   type : 'nonSaleTime',
        	   data : {
        	       tplData:{
        				//开始购买时间
        		        orderDate : {'year':'2013','month':'5','day':'3','hour':'1','min':'30'},
        		        //提示彩票种类
        		        lotteryType : [{'name':'leli','pic':'#','url':'http://163.com'},{'name':'kuaile8','pic':'#','url':'http://pp158.com'}]
        	       }
        	   }
        	})
         */
        //未到销售时间
        rebulidnonSaleTime: function(parameter) {
            var me = this,
                result = {};
            time = parameter['data']['tplData']['orderDate'];
            typeArray = parameter['data']['tplData']['lotteryType'];
            result['mask'] = true;
            result['iconClass'] = '';
            result['closeIsShow'] = true;
            result['closeFun'] = function() {
                me.hide();
            };
            //购买日期
            parameter['data']['tplData']['orderDate'] = function() {
                return time['year'] + '年' + time['month'] + '月' + time['day'] + '日 ' + time['hour'] + ':' + time['min'];
            };
            //彩票种类
            parameter['data']['tplData']['lotteryType'] = function() {
                var html = '';

                if ($.isArray(typeArray)) {
                    for (var i = 0; i < typeArray.length; i++) {
                        html += '<dd><span style="background:url(' + typeArray[i]['pic'] + ')" class="pic" title="' + typeArray[i]['name'] + '" alt="' + typeArray[i]['name'] + '"></span><a href="' + typeArray[i]['url'] + '" class="btn">' + translate.GoBetting + '<b class="btn-inner"></b></a></dd>';
                    };
                }
                return html;
            };
            result['content'] = me.formatHtml(parameter['tpl'], parameter['data']['tplData']);
            me.show($.extend(result, parameter));
        },
        getHtmlnonSaleTime: function() {
            var cfg = this.defConfig;
            return cfg.nonSaleTime;
        },
        //至少选择一注
        rebulidmustChoose: function(parameter) {
            var me = this,
                result = {};
            result['mask'] = true;
            result['iconClass'] = '';
            result['closeIsShow'] = true;
            result['closeFun'] = function() {
                me.hide();
            };
            result['content'] = me.formatHtml(parameter['tpl'], parameter['data']['tplData']);
            me.show($.extend(result, parameter));
        },
        getHtmlmustChoose: function() {
            return this.getHtmlWaring();
        },
        //网络连接异常
        rebulidnetAbnormal: function(parameter) {
            var me = this,
                result = {};
            result['mask'] = true;
            result['iconClass'] = '';
            result['closeIsShow'] = true;
            result['closeFun'] = function() {
                me.hide();
            };
            result['content'] = me.formatHtml(parameter['tpl'], parameter['data']['tplData']);
            me.show($.extend(result, parameter));
        },
        getHtmlnetAbnormal: function() {
            return this.getHtmlWaring();
        },
        //提交成功
        rebulidsuccess: function(parameter) {
            var me = this,
                result = {};
            result['mask'] = true;
            result['iconClass'] = '';
            result['closeIsShow'] = true;
            parameter['data']['tplData']['msg'] = translate.BetSuccessMsgs;
            result['closeFun'] = function() {
                me.hide();
            };
            result['content'] = me.formatHtml(parameter['tpl'], parameter['data']['tplData']);
            me.show($.extend(result, parameter));
        },
        getHtmlsuccess: function() {
            var cfg = this.defConfig;
            return cfg.successTip;
        },
        //登陆超时loginTimeout
        rebulidloginTimeout: function(parameter) {
            var me = this,
                result = {};
            result['mask'] = true;
            result['closeIsShow'] = true;
            result['closeFun'] = function() {
                me.hide();
            };
            result['content'] = me.formatHtml(parameter['tpl'], parameter['data']['tplData']);
            me.show($.extend(result, parameter));
        },
        getHtmlloginTimeout: function() {
            return this.getHtmlWaring();
        },
        //服务器错误
        rebulidserverError: function(parameter) {
            var me = this,
                result = {};
            result['mask'] = true;
            result['iconClass'] = '';
            result['closeIsShow'] = true;
            result['closeFun'] = function() {
                me.hide();
            };
            result['content'] = me.formatHtml(parameter['tpl'], parameter['data']['tplData']);
            me.show($.extend(result, parameter));
        },
        getHtmlserverError: function() {
            return this.getHtmlWaring();
        },
        //服务器错误
        rebulidsysErrorShow: function(parameter) {
            var me = this,
                result = {};
            result['mask'] = true;
            result['iconClass'] = '';
            result['closeIsShow'] = true;
            result['closeFun'] = function() {
                window.location.href = "/";
            };
            result['content'] = me.formatHtml(parameter['tpl'], parameter['data']['tplData']);
            me.show($.extend(result, parameter));
        },
        getHtmlsysErrorShow: function() {
            return this.getHtmlWaring();
        },
        //余额不足
        rebulidInsufficientbalance: function(parameter) {
            var me = this,
                result = {};
            result['mask'] = true;
            result['closeIsShow'] = true;
            result['closeFun'] = function() {
                me.hide();
            };
            result['content'] = me.formatHtml(parameter['tpl'], parameter['data']['tplData']);
            me.show($.extend(result, parameter));
        },
        getHtmlInsufficientbalance: function() {
            return this.getHtmlWaring();
        },
        //暂停销售
        rebulidpauseBet: function(parameter) {
            var me = this,
                result = {};
            result['mask'] = true;
            result['confirmText'] = translate.Bet;
            result['confirmIsShow'] = true;
            result['confirmFun'] = function() {
                var order = Games.getCurrentGameOrder(),
                    i = 0;
                //删除指定类别的投注
                for (; i < parameter['data']['tplData']['balls'].length; i++) {
                    order.removeData(parameter['data']['tplData']['balls'][i]['id']);
                };
                //提交投注
                Games.getCurrentGameSubmit().submitData();
            };
            result['closeText'] = translate.Close;
            result['closeIsShow'] = true;
            result['closeFun'] = function() {
                me.hide();
            };
            //生成消息
            parameter['data']['tplData']['msg'] = function() {
                var numText = [],
                    gameConfig = Games.getCurrentGame().getGameConfig().getInstance(),
                    k = 0;
                //输出暂停销售名称集合
                for (; k < parameter['data']['tplData']['balls'].length; k++) {
                    var current = parameter['data']['tplData']['balls'][k]['type'],
                        typeText = gameConfig.getTitleByName(current);
                    if (me.arrIndexOf(typeText.join(''), numText) == -1) {
                        numText.push(typeText.join(''));
                    }
                };
                return translate.StopSaleMsgs.msg1 + '“' + numText.join('') + '”' + translate.StopSaleMsgs.msg2;
            };
            result['content'] = me.formatHtml(parameter['tpl'], parameter['data']['tplData']);
            me.show($.extend(result, parameter));
        },
        getHtmlpauseBet: function() {
            var cfg = this.defConfig;
            return cfg.pauseBet;
        },
        //倍数超限
        rebulidmultipleOver: function(parameter) {
            var me = this,
                result = {};
            result['mask'] = true;
            result['iconClass'] = '';
            result['closeText'] = translate.Close;
            result['closeIsShow'] = true;
            result['closeFun'] = function() {
                me.hide();
            };
            //生成消息
            parameter['data']['tplData']['msg'] = function() {
                var numText = [],
                    gameConfig = Games.getCurrentGame().getGameConfig().getInstance(),
                    k = 0;
                //输出暂停销售名称集合
                for (; k < parameter['data']['tplData']['balls'].length; k++) {
                    var current = parameter['data']['tplData']['balls'][k]['type'],
                        typeText = gameConfig.getTitleByName(current);
                    if (me.arrIndexOf(typeText.join(''), numText) == -1) {
                        numText.push(typeText.join(''));
                    }
                };
                return translate.StopSaleMsgs.msg1 + '“' + numText.join('') + '”' + translate.StopSaleMsgs.msg3;
            };
            result['content'] = me.formatHtml(parameter['tpl'], parameter['data']['tplData']);
            me.show($.extend(result, parameter));
        },
        getHtmlmultipleOver: function() {
            var cfg = this.defConfig;
            return cfg.multipleOver;
        },
        //无效字符
        rebulidinvalidtext: function(parameter) {
            var me = this,
                result = {};
            result['mask'] = true;
            result['confirmText'] = translate.RefreshPage;
            result['confirmIsShow'] = true;
            result['confirmFun'] = function() {
                window.location.reload();
            };
            result['content'] = me.formatHtml(me.getHtmlinvalidtext(), parameter);
            me.show($.extend(result, parameter));
        },
        getHtmlinvalidtext: function() {
            var cfg = this.defConfig;
            return cfg.invalidtext;
        },
        //投注过期
        rebulidbetExpired: function(parameter) {
            var me = this,
                result = {};
            result['mask'] = true;
            result['closeText'] = translate.Close;
            result['closeIsShow'] = true;
            result['closeFun'] = function() {
                me.hide();
            };
            parameter['data']['tplData']['msg'] = function() {
                return translate.StopSaleMsgs.msg4[0] + parameter['data']['tplData']['bitDate']['expiredDate'] + translate.StopSaleMsgs.msg4[1] + parameter['data']['tplData']['bitDate']['current'] + translate.StopSaleMsgs.msg4[2];
            };
            result['content'] = me.formatHtml(me.getHtmlbetExpired(), parameter['data']['tplData']);
            me.show($.extend(result, parameter));
        },
        getHtmlbetExpired: function() {
            var cfg = this.defConfig;
            return cfg.betExpired;
        },
        //非法投注工具
        rebulidillegalTools: function(parameter) {
            var me = this,
                result = {};
            result['mask'] = true;
            result['confirmText'] = translate.RefreshPage;
            result['confirmIsShow'] = true;
            result['confirmFun'] = function() {
                window.location.reload();
            };
            result['content'] = me.formatHtml(me.getHtmlbetExpired(), parameter['data']['tplData']);
            me.show($.extend(result, parameter));
        },


        //封锁变价模板
        getHtmlblockade: function() {
            return this.defConfig.blockade;
        },
        //封锁变价
        rebulidblockade: function(parameter) {
            var me = this,
                result = {},
                tplData = parameter['data']['tplData'],
                orderData = parameter['data']['orderData'],
                blockadeInfo = parameter['data']['blockadeInfo'],
                balls = orderData['balls'],
                dataHas = {},
                ballStr = '',
                typeName = '',
                formatMoney = Games.getCurrentGameOrder().formatMoney,
                maxLen = 28,
                //是否在提交中
                isSubmitLoading = false,
                blockadeData0 = ['<ul class="game-msg-blockade-balls">'];

            result['mask'] = true;
            result['closeIsShow'] = true;
            result['closeText'] = translate.Close;
            result['confirmIsShow'] = true;
            result['confirmText'] = translate.OK;
            result['closeFun'] = function() {
                me.hide();
            };

            $.each(balls, function(i) {
                dataHas['' + this['id']] = this;
                ballStr = this['ball'];
                if (ballStr.length > maxLen) {
                    ballStr = ballStr.substr(0, maxLen) + '...';
                }
                typeName = Games.getCurrentGame().getGameConfig().getInstance().getTitleByName(this['type']).join('_');

                blockadeData0.push('<li data-id="' + this['id'] + '">[' + typeName + '] ' + ballStr + '</li>');
            });
            blockadeData0.push('</ul>');

            tplData['gameTypeTitle'] = Games.getCurrentGame().getGameConfig().getInstance().getGameTypeCn();
            tplData['blockadeData0'] = blockadeData0.join('');
            tplData['amount'] = formatMoney(orderData['amount']);
            tplData['username'] = blockadeInfo['username'];
            tplData['amountAdjust'] = formatMoney(blockadeInfo['amountAdjust']);
            tplData['amountChange'] = formatMoney(orderData['amount'] - blockadeInfo['amountAdjust']);
            tplData['display'] = '';

            if (blockadeInfo['type'] == 1) {
                tplData['blockadeType'] = translate.Limit;
            } else if (blockadeInfo['type'] == 2) {
                tplData['blockadeType'] = translate.ChangeAward;
                tplData['display'] = 'none';
            } else {
                tplData['blockadeType'] = translate.ChangeAwardAndLimit;
            }

            //获得撤单手续费
            result['callback'] = function() {
                $.ajax({
                    url: Games.getCurrentGameSubmit().defConfig.handlingChargeURL + '?amout=' + blockadeInfo['amountAdjust'],
                    dataType: 'json',
                    method: 'GET',
                    success: function(r) {
                        if (Number(r['isSuccess']) == 1) {
                            me.getContentDom().find('.handlingCharge').html(r['data']['handingcharge']);
                        }
                    }
                });
            };

            result['content'] = me.formatHtml(me.getHtmlbetExpired(), tplData);


            //再次提交注单
            result['confirmFun'] = function() {
                var message = Games.getCurrentGameMessage();
                if (isSubmitLoading) {
                    return false;
                }
                $.ajax({
                    url: Games.getCurrentGameSubmit().defConfig.URL,
                    data: orderData,
                    dataType: 'json',
                    method: 'POST',
                    beforeSend: function() {
                        isSubmitLoading = true;
                    },
                    success: function(r) {
                        //返回消息标准
                        // {"isSuccess":1,"type":"消息代号","msg":"返回的文本消息","data":{xxx:xxx}}
                        if (Number(r['isSuccess']) == 1) {
                            message.show(r);
                            me.clearData();
                            me.fireEvent('afterSubmitSuccess');
                        } else {
                            message.show(r);
                        }
                    },
                    complete: function() {
                        isSubmitLoading = false;
                        me.fireEvent('afterSubmit');
                    }
                });
            };
            //console.log(parameter);
            me.show($.extend(result, parameter));
            host.util.toViewCenter(me.win.dom);
            //console.log(parameter);



            //面板内的事件
            $('#J-blockade-panel-main').on('click', '[data-action]', function(e) {
                var el = $(this),
                    action = $.trim(el.attr('data-action')),
                    id = $.trim(el.parent().attr('data-id'));
                e.preventDefault();
                //console.log(action, id, dataHas[id]);
                switch (action) {
                    //查看详情
                    case 'blockade-detail':
                        //将投注内容转换成Input内容
                        var form = $('#J-form-blockade-detail'),
                            splitStr = '-';
                        form.html('');
                        //游戏名称
                        $('<input type="hidden" value="' + orderData['gameType'] + '" name="gameType" />').appendTo(form);
                        //选球内容和玩法名称以 /// 分隔
                        $.each(balls, function() {
                            var me = this;
                            if (me['lockPoint']) {
                                if ($.trim(me['lockPoint']['beforeBlockadeList']) != '') {
                                    $.each(me['lockPoint']['beforeBlockadeList'], function() {
                                        var dt = this;
                                        $('<input type="hidden" value="' + dt['beishu'] + splitStr + dt['blockadeDetail'] + splitStr + dt['realBeishu'] + splitStr + me['type'] + splitStr + me['ball'] + '" name="beforeBlockadeList[]" />').appendTo(form);
                                    });
                                }
                                if ($.trim(me['lockPoint']['pointsList']) != '') {
                                    $.each(me['lockPoint']['pointsList'], function() {
                                        var dt = this;
                                        $('<input type="hidden" value="' + dt['mult'] + splitStr + dt['point'] + splitStr + dt['retValue'] + splitStr + me['type'] + splitStr + me['ball'] + '" name="pointsList[]" />').appendTo(form);
                                    });
                                }

                            }

                        });
                        form.submit();
                        break;
                    default:
                        break;
                }
            });


        },


        getHtmlillegalTools: function() {
            return this.getHtmlWaring();
        },
        //提交失败
        rebulidsubFailed: function(parameter) {
            var me = this,
                result = {};
            result['mask'] = true;
            result['closeText'] = translate.Close;
            result['closeIsShow'] = true;
            result['closeFun'] = function() {
                me.hide();
            };
            result['content'] = me.formatHtml(me.getHtmlbetExpired(), parameter['data']['tplData']);
            me.show($.extend(result, parameter));
        },
        getHtmlsubFailed: function() {
            return this.getHtmlWaring();
        },
        //添加题目
        setTitle: function(html) {
            var me = this,
                win = me.win;
            win.setTitle(html);
        },
        //添加内容
        setContent: function(html, delay) {
            var me = this,
                win = me.win;

            win.setContent(html, delay);
        },
        //隐藏关闭按钮
        hideClose: function() {
            var me = this,
                win = me.win;

            win.getCloseDom().hide();
        },

        //是否有打开弹窗
        hasOpenDialog: function() {
            var me = this;
            return ($('.j-ui-miniwindow').size() > 0) && !($('.j-ui-miniwindow').is(':hidden'));
        },

        checkDialogRules: function(data) {
            var me = this;

            if (data['cover'] === 'no') {
                //是否有打开窗口
                if (me.hasOpenDialog()) {
                    return true;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        },

        //隐藏标题栏
        hideTitle: function() {
            var me = this,
                win = me.win;

            win.getTitleDom().hide();
        },

        //弹窗显示 具体参数说明
        //弹窗类型(会根据弹窗类型自动获取模版) type
        //模版 tpl  数据 tplData
        //内容:content, 绑定函数: callback, 是否遮罩: mask
        //宽度:width, 长度:height, 自动关闭时间单位S:time
        //禁止覆盖当前弹窗 cover 默认覆盖
        //是否显示头部: hideTitle, 是否显示关闭按钮:hideClose 
        //确认按钮 是否显示: confirmIsShow 名称: confirmText 事件: confirmFun
        //取消按钮 是否显示: cancelIsShow  名称: cancelText	事件: cancelFun
        //关闭按钮 是否显示: closeIsShow   名称: closeText	事件: closeFun
        //显示警告图示 iconIsShow
        show: function(data) {
            var me = this,
                win = me.win;

            //检查过滤规则
            if (me.checkDialogRules(data)) {
                return;
            }

            //重置
            me.reSet();
            if (typeof data['data'] == 'undefined') {
                data['data'] = {};
            }
            data['data']['tplData'] = typeof data['data']['tplData'] == 'undefined' ? {} : data['data']['tplData'];

            if (!data) { return }

            if (data['type']) {
                me.doAction(data);
                return;
            } else {
                if (typeof data['tpl'] != 'undefined') {
                    data['content'] = me.formatHtml(data['tpl'], data['data']['tplData']);
                }
            }

            //取消自动关闭时间缓存
            if (closeTime) {
                clearTimeout(closeTime);
                closeTime = null;
            }

            //加入题目 && 内容
            me.setTitle(data['title'] || translate.WarmTips);
            me.setContent(data['content'] || '');
            //是否显示警告图示
            if (data['iconIsShow']) {
                win.showWaringIcon();
            }
            //按钮名称
            if (data['confirmText']) {
                win.setConfirmName(data['confirmText']);
            }
            if (data['cancelText']) {
                win.setCancelName(data['cancelText']);
            }
            if (data['closeText']) {
                win.setCloseName(data['closeText']);
            }
            //按钮事件
            if (data['normalCloseFun']) {
                win.doNormalClose = data['normalCloseFun'];
            }
            if (data['confirmFun']) {
                win.doConfirm = data['confirmFun'];
            }
            if (data['cancelFun']) {
                win.doCancel = data['cancelFun'];
            }
            if (data['closeFun']) {
                win.doClose = data['closeFun'];
            }
            //按钮显示
            if (data['confirmIsShow']) {
                win.showConfirmButton();
            }
            if (data['cancelIsShow']) {
                win.showCancelButton();
            }
            if (data['closeIsShow']) {
                win.showCloseButton();
            }
            //判断是否隐藏头部和关闭按钮
            if (data['hideTitle']) {
                me.hideTitle();
            }
            if (data['hideClose']) {
                me.hideClose();
            }
            //遮罩显示
            if (data['mask']) {
                me.mask.show();
            }

            //限制窗口高度超过           
            win.reSetPosition();
            //window总体高度

            me.limitHeight();

            win.show();

            //执行回调事件
            if (data['callback']) {
                data['callback'].call(me);
            }

            //定时关闭
            if (data['time']) {
                closeTime = setTimeout(function() {
                    me.hide();
                    clearTimeout(closeTime);
                    closeTime = null;
                }, data['time'] * 1000)
            }

        },
        limitHeight: function() {
            var me = this,
                wHeight = $(window).height(),
                dom = me.getContainerDom(),
                domHeight = dom.outerHeight();

            if (domHeight > wHeight) {
                dom.height(Math.floor(wHeight * 0.9));
                dom.css({
                    'overflow': 'auto'
                });
            }
        },
        getContainerDom: function() {
            var me = this;
            return me.win.getContainerDom();
        },
        //获取内容容器DOM
        getContentDom: function() {
            var me = this;
            return me.win.getContentDom();
        },
        //弹窗隐藏
        hide: function() {
            var me = this,
                win = me.win;

            win.hide();
            me.reSet();
        },
        //重置
        reSet: function() {
            var me = this,
                win = me.win;
            me.mask.hide();
            me.setTitle(translate.Tips);
            me.setContent('');
            win.hideConfirmButton();
            win.hideCancelButton();
            win.hideCloseButton();
            win.doConfirm = function() {};
            win.doCancel = function() {};
            win.doClose = function() {};
            win.doNormalClose = function() {};
            win.setConfirmName(translate.OK);
            win.setCancelName(translate.Cancel);
            win.setCloseName(translate.Close);
            win.reSetPosition();
        }
    }

    var Main = host.Class(pros, Event);
    Main.defConfig = defConfig;
    Main.getInstance = function(cfg) {
        return instance || (instance = new Main(cfg));
    };
    host[name] = Main;

})(phoenix, "GameMessage", phoenix.Event);