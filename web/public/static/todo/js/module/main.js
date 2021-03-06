function styleAlert(s) {
    var a = $(window.top.document).height(),
        t = $('<div class="j-ui-miniwindow pop w-9" style="z-index: 700; position: fixed; display: block; left: 0; top:0; bottom:0; right:0; margin:auto; height:150px;"><div class="hd"><i class="close closeBtn"></i><span class="title">温馨提示</span></div><div class="bd"><div class="bd text-center"><div class="pop-waring"><i class="ico-waring"></i><h4 class="pop-text" style="max-width:310px"><span>' + s + '</span><br></h4></div></div></div><a style="display: none;" href="javascript:void(0);" class="btn confirm">确 认<b class="btn-inner"></b></a><a style="display: none;" href="javascript:void(0);" class="btn cancel">取 消<b class="btn-inner"></b></a><a href="javascript:void(0);" style="display: inline-block;" class="btn closeTip">关 闭<b class="btn-inner"></b></a></div><div class="j-ui-mask" style="position: absolute; left: 0px; top: 0px; opacity: 0.5; z-index: 600; width: 100%; height: ' + a + 'px; display: block; background-color: rgb(51, 51, 51);"></div>');
    $(window.top.document).find("body").append(t),
        $(window.top.document).find(".closeTip, .closeBtn").click(function() {
            t.remove()
        })
}
function styleConfirm(s, a) {
    var t = $(window.top.document).height(),
        n = $('<div class="j-ui-miniwindow pop w-9" style="z-index: 700; position: fixed; display: block; left: 0; top:0; bottom:0; right:0; margin:auto; height:150px;"><div class="hd"><i class="close closeBtn"></i><span class="title">温馨提示</span></div><div class="bd"><div class="bd text-center"><div class="pop-waring"><i class="ico-waring"></i><h4 class="pop-text" style="max-width:310px"><span>' + s + '</span><br></h4></div></div></div><a id="del" href="javascript:void(0);" style="display: inline-block;" class="btn closeTip">确 认<b class="btn-inner"></b></a><a id="cancel" href="javascript:void(0);" style="display: inline-block;" class="btn closeTip">取 消<b class="btn-inner"></b></a><a href="javascript:void(0);" style="display: none;" class="btn closeTip">关 闭<b class="btn-inner"></b></a></div><div class="j-ui-mask" style="position: absolute; left: 0px; top: 0px; opacity: 0.5; z-index: 600; width: 100%; height: ' + t + 'px; display: block; background-color: rgb(51, 51, 51);"></div>');
    $(window.top.document).find("body").append(n),
        $(window.top.document).find(".closeTip, .closeBtn").click(function() {
            n.remove()
        }),
        $(window.top.document).find("#del").click(function() {
            a()
        }),
        $(window.top.document).find("#cancel").click(function() {
            n.remove()
        })
}
function firadio_cookie_set(s, a, t, n) {
    var e = new Date,
        l = s + "=" + encodeURIComponent(a) + "; ";
    void 0 == t && 0 != t || (t = t == -1 ? 316224e5: parseInt(t), e.setTime(e.getTime() + t), l += "expires=" + e.toUTCString() + "; "),
        n = n || "/",
        l += "path=" + n,
        document.cookie = l
}
function firadio_cookie_get(s) {
    var a = "(?:; )?" + encodeURIComponent(s) + "=([^;]*);?";
    return a = new RegExp(a),
        a.test(document.cookie) ? decodeURIComponent(RegExp.$1) : ""
}
function getUrlPar(s) {
    var a = location.search.match(new RegExp("[?&]" + s + "=([^&]*)(&?)", "i"));
    return a ? a[1] : a
}
function validateUserName(s) {
    var a = /(.)\1{3,}/;
    if (a.exec(s)) return ! 1;
    var t = /^[0-9a-zA-Z]{6,16}$/;
    return !! t.exec(s)
}
function validateUserPss(s) {
    var a = /^[0-9a-zA-Z]{8,16}$/;
    return !! a.exec(s) && (a = /^\d+$/, !a.exec(s) && (a = /^[a-zA-Z]+$/, !a.exec(s) && (a = /(.)\1{2,}/, !a.exec(s))))
}
function validateInputDate(s) {
    if (s = jQuery.trim(s), "" == s || null == s) return ! 0;
    var a = s.split(" "),
        t = new Array,
        n = new Array;
    if (a[0].indexOf("-") != -1) t = a[0].split("-");
    else if (a[0].indexOf("/") != -1) t = a[0].split("/");
    else {
        if (a[0].toString().length < 8) return ! 1;
        t[0] = a[0].substring(0, 4),
            t[1] = a[0].substring(4, 6),
            t[2] = a[0].substring(6, 8)
    }
    if (void 0 != a[1] && null != a[1] || (a[1] = "00:00:00"), a[1].indexOf(":") != -1 && (n = a[1].split(":")), void 0 != t[2] && ("" == t[0] || "" == t[1])) return ! 1;
    if (void 0 != t[1] && "" == t[0]) return ! 1;
    if (void 0 != n[2] && ("" == n[0] || "" == n[1])) return ! 1;
    if (void 0 != n[1] && "" == n[0]) return ! 1;
    t[0] = void 0 == t[0] || "" == t[0] ? 1970 : t[0],
        t[1] = void 0 == t[1] || "" == t[1] ? 0 : t[1] - 1,
        t[2] = void 0 == t[2] || "" == t[2] ? 0 : t[2],
        n[0] = void 0 == n[0] || "" == n[0] ? 0 : n[0],
        n[1] = void 0 == n[1] || "" == n[1] ? 0 : n[1],
        n[2] = void 0 == n[2] || "" == n[2] ? 0 : n[2];
    var e = new Date(t[0], t[1], t[2], n[0], n[1], n[2]);
    return e.getFullYear() == t[0] && e.getMonth() == t[1] && e.getDate() == t[2] && e.getHours() == n[0] && e.getMinutes() == n[1] && e.getSeconds() == n[2]
}
function srip2tInit() {
    sriptSetInterval1 && clearInterval(sriptSetInterval1),
        $("#newsList li:odd").addClass("odd"),
        $("#newsList li:even").addClass("even"),
        $(".formTable tr:odd").addClass("odd"),
        $(".formTable tr:even").addClass("even"),
        $(".grayTable tr th:first-child").css("borderLeft", "1px solid #D5D8DE"),
        $(".grayTable tr td:first-child").css("borderLeft", "1px solid #EFEFEF"),
        $(".grayTable tr td:last-child").css("borderRight", "1px solid #EFEFEF"),
        $("#checkAll").click(function() {
            this.checked ? $("input[type=checkbox][name=items]").attr("checked", !0) : $("input[type=checkbox][name=items]").attr("checked", !1)
        });
    var s = !1;
    $("#tyAll1").click(function() {
        $("input[type=checkbox][name=tyAll]").attr("checked", !0);
        var a = $("#tyText1").val();
        $("input[type=text][name=tyText1]").val(a),
            s = !0
    }),
        $("#tyAll2").click(function() {
            $("input[type=checkbox][name=tyAll]").attr("checked", !0);
            var a = $("#tyText2").val();
            $("input[type=text][name=tyText2]").val(a),
                s = !0
        }),
        $("#tyText1").keyup(function() {
            if (s) {
                var a = $(this).val();
                $("input[type=text][name=tyText1]").val(a)
            }
        }).keyup(),
        $("#tyText2").keyup(function() {
            if (s) {
                var a = $(this).val();
                $("input[type=text][name=tyText2]").val(a)
            }
        }).keyup(),
        $("#setDetail").click(function() {
            var s = parseInt($("#allbackset").css("height"));
            0 == s ? ($(this).val("收起详细"), $("#allbackset").animate({
                    height: "430px"
                },
                500,
                function() {})) : ($(this).val("详细设置"), $("#allbackset").animate({
                    height: "0px"
                },
                500,
                function() {}))
        }),
        jQuery("#starttime").dynDateTime({
            ifFormat: "%Y-%m-%d %H:%M:00",
            daFormat: "%l;%M %p, %e %m,  %Y",
            align: "Br",
            electric: !0,
            singleClick: !1,
            button: ".next()",
            onUpdate: function() {
                $("#starttime").change()
            },
            showOthers: !0,
            weekNumbers: !0,
            showsTime: !0
        }),
        jQuery("#starttime").change(function() {
            validateInputDate(jQuery("#starttime").val()) || (jQuery("#starttime").val(""), sAlert("时间格式不正确,正确的格式为:2009-06-10 10:59")),
            "" != $("#endtime").val() && $("#starttime").val() > $("#endtime").val() && ($("#starttime").val(""), sAlert("输入的时间不符合逻辑"))
        }),
        jQuery("#endtime").dynDateTime({
            ifFormat: "%Y-%m-%d %H:%M:00",
            daFormat: "%l;%M %p, %e %m,  %Y",
            align: "Br",
            electric: !0,
            singleClick: !1,
            button: ".next()",
            onUpdate: function() {
                $("#endtime").change()
            },
            showOthers: !0,
            weekNumbers: !0,
            showsTime: !0
        }),
        jQuery("#endtime").change(function() {
            validateInputDate(jQuery("#endtime").val()) || (jQuery("#endtime").val(""), sAlert("时间格式不正确,正确的格式为:2009-06-10 10:59")),
            "" != $("#starttime").val() && $("#starttime").val() > $("#endtime").val() && ($("#endtime").val(""), sAlert("输入的时间不符合逻辑"))
        })
}
function validateUserPss(s) {
    var a = /^[0-9a-zA-Z]{8,16}$/;
    return !! a.exec(s) && (a = /^\d+$/, !a.exec(s) && (a = /^[a-zA-Z]+$/, !a.exec(s) && (a = /(.)\1{2,}/, !a.exec(s))))
}
function changeAddress(s, a) {
    "emaildeposit" == a ? "icbcChongzhi" == s ? ($("#siderbar li:nth-child(1)").addClass("current"), $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 充值提现 <span class="st"> > </span> 工行充值')) : "abcChongzhi" == s ? ($("#siderbar li:nth-child(2)").addClass("current"), $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 充值提现 <span class="st"> > </span> 农行充值')) : "ccbChongzhi" == s ? ($("#siderbar li:nth-child(3)").addClass("current"), $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 充值提现 <span class="st"> > </span> 建行充值')) : "tenpaychongzhi" == s ? ($("#siderbar li:nth-child(4)").addClass("current"), $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 充值提现 <span class="st"> > </span> 财付通充值')) : "platwithdraw" == s && ($("#siderbar li:nth-child(5)").addClass("current"), $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 充值提现 <span class="st"> > </span> 我要提现')) : "userCenter" == a ? "userset" == s ? ($("#siderbar li:nth-child(1)").addClass("current"), $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 账户信息 <span class="st"> > </span> 频道设定')) : "changeloginpass" == s ? ($("#siderbar li:nth-child(2)").addClass("current"), $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 账户信息 <span class="st"> > </span> 修改密码')) : "changename" == s ? ($("#siderbar li:nth-child(3)").addClass("current"), $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 账户信息 <span class="st"> > </span> 修改昵称')) : "emailbind" == s ? ($("#siderbar li:nth-child(4)").addClass("current"), $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 账户信息 <span class="st"> > </span> 邮箱绑定')) : "userbankinfo" == s ? ($("#siderbar li:nth-child(5)").addClass("current"), $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 账户信息 <span class="st"> > </span> 卡号绑定')) : "myEmails" == s ? ($("#siderbar li:nth-child(6)").addClass("current"), $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 账户信息 <span class="st"> > </span> 我的消息')) : "userlist" == s ? ($("#siderbar li:nth-child(7)").addClass("current"), $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 账户信息 <span class="st"> > </span> 用户列表')) : "userlist_yhxx" == s ? ($("#siderbar li:nth-child(7)").addClass("current"), $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 账户信息 <span class="st"> > </span> 用户列表 <span class="st"> > </span> 用户信息')) : "userlist_td" == s ? ($("#siderbar li:nth-child(7)").addClass("current"), $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 账户信息 <span class="st"> > </span> 用户列表 <span class="st"> > </span> 团队')) : "userlist_cz" == s ? ($("#siderbar li:nth-child(7)").addClass("current"), $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 账户信息 <span class="st"> > </span> 用户列表 <span class="st"> > </span> 彩种设置')) : "userlist_yxzb" == s ? ($("#siderbar li:nth-child(7)").addClass("current"), $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 账户信息 <span class="st"> > </span> 用户列表 <span class="st"> > </span> 游戏账变')) : "userlist_czjl" == s ? ($("#siderbar li:nth-child(7)").addClass("current"), $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 账户信息 <span class="st"> > </span> 用户列表 <span class="st"> > </span> 充值记录')) : "userlist_dj" == s ? ($("#siderbar li:nth-child(7)").addClass("current"), $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 账户信息 <span class="st"> > </span> 用户列表 <span class="st"> > </span> 冻结')) : "userlist_cz" == s ? ($("#siderbar li:nth-child(7)").addClass("current"), $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 账户信息 <span class="st"> > </span> 用户列表 <span class="st"> > </span> 充值')) : "openadmin" == s ? ($("#siderbar li:nth-child(8)").addClass("current"), $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 账户信息 <span class="st"> > </span> 开户管理')) : "adduser" == s && ($("#siderbar li:nth-child(9)").addClass("current"), $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 账户信息 <span class="st"> > </span> 增加用户')) : "gameinfo" == a ? "gamelist" == s ? ($("#siderbar li:nth-child(1)").addClass("current"), $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 游戏记录 <span class="st"> > </span> 购彩查询')) : "task" == s && ($("#siderbar li:nth-child(2)").addClass("current"), $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 游戏记录 <span class="st"> > </span> 追号查询')) : "report" == a ? "checkbalance" == s ? ($("#siderbar li:nth-child(1)").addClass("current"), $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 报表管理 <span class="st"> > </span> 余额查询')) : "bankreport" == s ? ($("#siderbar li:nth-child(2)").addClass("current"), $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 报表管理 <span class="st"> > </span> 充提记录')) : "orders" == s ? ($("#siderbar li:nth-child(3)").addClass("current"), $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 报表管理 <span class="st"> > </span> 游戏账变')) : "userpoint" == s ? ($("#siderbar li:nth-child(4)").addClass("current"), $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 报表管理 <span class="st"> > </span> 返点总额')) : "list" == s && ($("#siderbar li:nth-child(5)").addClass("current"), $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 报表管理 <span class="st"> > </span> 报表查询')) : "help" == a && ("noticelist" == s ? ($("#siderbar li:nth-child(1)").addClass("current"), $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 新手指南 <span class="st"> > </span> 公告列表')) : "noticeDetail" == s ? ($("#siderbar li:nth-child(1)").addClass("current"), $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 新手指南 <span class="st"> > </span> 公告列表 <span class="st"> > </span> 详细')) : "playinfo" == s ? ($("#siderbar li:nth-child(2)").addClass("current"), $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 新手指南 <span class="st"> > </span> 玩法介绍')) : "answer" == s && ($("#siderbar li:nth-child(3)").addClass("current"), $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 新手指南 <span class="st"> > </span> 常见问题')))
}
function validateNickName(s) {
    var a = /^.{2,10}$/g;
    return !! a.exec(s)
}
function siderbarInit(s, a, t) {
    "emaildeposit" == a ? ($("#siderbar .title").html("充值提现"), $("#mainContent .topName").html("充值提现"), $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 充值提现'), $("#siderbar .list").html("<li><a href=javascript:void(0) onclick=ListClick('chongzhi','emaildeposit','mdeposit') id=mdeposit>工行充值</a></li>"), $("#siderbar .list").append("<li><a href=javascript:void(0) onclick=ListClick('chongzhi','emaildeposit','abc') id=abc>农行充值</a></li>"), $("#siderbar .list").append("<li><a href=javascript:void(0) onclick=ListClick('chongzhi','emaildeposit','ccb') id=ccb>建行充值</a></li>"), $("#siderbar .list").append("<li><a href=javascript:void(0) onclick=ListClick('chongzhi','emaildeposit','tenpay') id=tenpay>财付通充值</a></li>"), $("#siderbar .list").append("<li><a href=javascript:void(0) onclick=ListClick('platwithdraw','security','platwithdraw') id=platwithdraw>我要提现</a></li>"), "mdeposit" == t ? ($("#siderbar li:nth-child(1)").addClass("current"), $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 充值提现 <span class="st"> > </span> 工行充值')) : "abc" == t ? ($("#siderbar li:nth-child(2)").addClass("current"), $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 充值提现 <span class="st"> > </span> 农行充值')) : "ccb" == t ? ($("#siderbar li:nth-child(3)").addClass("current"), $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 充值提现 <span class="st"> > </span> 建行充值')) : "tenpay" == t ? ($("#siderbar li:nth-child(4)").addClass("current"), $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 充值提现 <span class="st"> > </span> 财付通充值')) : "platwithdraw" == t && ($("#siderbar li:nth-child(5)").addClass("current"), $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 充值提现 <span class="st"> > </span> 我要提现'))) : "user" == a ? ($("#siderbar .title").html("账户信息"), $("#mainContent .topName").html("账户信息"), $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 账户信息'), $("#siderbar .list").html("<li><a href=javascript:void(0) onclick=ListClick('userset','user','userset') id=userset>频道设定</a></li>"), $("#siderbar .list").append("<li><a href=javascript:void(0) onclick=ListClick('changeloginpass','user','changeloginpass') id=changeloginpass>修改密码</a></li>"), $("#siderbar .list").append("<li><a href=javascript:void(0) onclick=ListClick('changename','user','changename') id=changename>修改昵称</a></li>"), $("#siderbar .list").append("<li><a href=javascript:void(0) onclick=ListClick('emailbind','user','emailbind') id=emailbind>邮箱绑定</a></li>"), $("#siderbar .list").append("<li><a href=javascript:void(0) onclick=ListClick('userbankinfo','user','userbankinfo') id=userbankinfo>卡号绑定</a></li>"), $("#siderbar .list").append("<li><a href=javascript:void(0) onclick=ListClick('myEmails','userCenter') id=myEmails>我的消息</a></li>"), $("#siderbar .list").append("<li><a href=javascript:void(0) onclick=ListClick('userlist','userCenter') id=userlist>用户列表</a></li>"), $("#siderbar .list").append("<li><a href=javascript:void(0) onclick=ListClick('openadmin','userCenter') id=openadmin>开户管理</a></li>"), $("#siderbar .list").append("<li><a href=javascript:void(0) onclick=ListClick('adduser','userCenter') id=adduser>增加用户</a></li>"), "userset" == s ? ($("#siderbar li:nth-child(1)").addClass("current"), $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 账户信息 <span class="st"> > </span> 频道设定')) : "changeloginpass" == s ? ($("#siderbar li:nth-child(2)").addClass("current"), $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 账户信息 <span class="st"> > </span> 修改密码')) : "changename" == s ? ($("#siderbar li:nth-child(3)").addClass("current"), $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 账户信息 <span class="st"> > </span> 修改昵称')) : "emailbind" == s ? ($("#siderbar li:nth-child(4)").addClass("current"), $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 账户信息 <span class="st"> > </span> 邮箱绑定')) : "userbankinfo" == s ? ($("#siderbar li:nth-child(5)").addClass("current"), $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 账户信息 <span class="st"> > </span> 卡号绑定')) : "myEmails" == s ? ($("#siderbar li:nth-child(6)").addClass("current"), $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 账户信息 <span class="st"> > </span> 我的消息')) : "userlist" == s ? ($("#siderbar li:nth-child(7)").addClass("current"), $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 账户信息 <span class="st"> > </span> 用户列表')) : "userlist_yhxx" == s ? ($("#siderbar li:nth-child(7)").addClass("current"), $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 账户信息 <span class="st"> > </span> 用户列表 <span class="st"> > </span> 用户信息')) : "userlist_td" == s ? ($("#siderbar li:nth-child(7)").addClass("current"), $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 账户信息 <span class="st"> > </span> 用户列表 <span class="st"> > </span> 团队')) : "userlist_cz" == s ? ($("#siderbar li:nth-child(7)").addClass("current"), $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 账户信息 <span class="st"> > </span> 用户列表 <span class="st"> > </span> 彩种')) : "userlist_yxzb" == s ? ($("#siderbar li:nth-child(7)").addClass("current"), $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 账户信息 <span class="st"> > </span> 用户列表 <span class="st"> > </span> 游戏账变')) : "userlist_czjl" == s ? ($("#siderbar li:nth-child(7)").addClass("current"), $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 账户信息 <span class="st"> > </span> 用户列表 <span class="st"> > </span> 充值记录')) : "userlist_dj" == s ? ($("#siderbar li:nth-child(7)").addClass("current"), $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 账户信息 <span class="st"> > </span> 用户列表 <span class="st"> > </span> 冻结')) : "userlist_cz" == s ? ($("#siderbar li:nth-child(7)").addClass("current"), $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 账户信息 <span class="st"> > </span> 用户列表 <span class="st"> > </span> 充值')) : "openadmin" == s ? ($("#siderbar li:nth-child(8)").addClass("current"), $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 账户信息 <span class="st"> > </span> 开户管理')) : "adduser" == s && ($("#siderbar li:nth-child(9)").addClass("current"), $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 账户信息 <span class="st"> > </span> 增加用户'))) : "gameinfo" == a ? ($("#siderbar .title").html("游戏记录"), $("#mainContent .topName").html("游戏记录"), $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 游戏记录'), $("#siderbar .list").html("<li><a href=javascript:void(0) onclick=ListClick('gamelist','gameinfo') id=gamelist>购彩查询</a></li>"), $("#siderbar .list").append("<li><a href=javascript:void(0) onclick=ListClick('task','gameinfo') id=task>追号查询</a></li>"), "gamelist" == s ? ($("#siderbar li:nth-child(1)").addClass("current"), $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 游戏记录 <span class="st"> > </span> 购彩查询')) : "task" == s && ($("#siderbar li:nth-child(2)").addClass("current"), $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 游戏记录 <span class="st"> > </span> 追号查询'))) : "report" == a ? ($("#siderbar .title").html("报表管理"), $("#mainContent .topName").html("报表管理"), $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 报表管理'), $("#siderbar .list").html("<li><a href=javascript:void(0) onclick=ListClick('checkbalance','report') id=checkbalance>余额查询</a></li>"), $("#siderbar .list").append("<li><a href=javascript:void(0) onclick=ListClick('bankreport','report') id=bankreport>充提记录</a></li>"), $("#siderbar .list").append("<li><a href=javascript:void(0) onclick=ListClick('orders','report') id=orders>游戏账变</a></li>"), $("#siderbar .list").append("<li><a href=javascript:void(0) onclick=ListClick('userpoint','report') id=userpoint>返点总额</a></li>"), $("#siderbar .list").append("<li><a href=javascript:void(0) onclick=ListClick('list','report') id=list>报表查询</a></li>"), "checkbalance" == s ? ($("#siderbar li:nth-child(1)").addClass("current"), $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 报表管理 <span class="st"> > </span> 余额查询')) : "bankreport" == s ? ($("#siderbar li:nth-child(2)").addClass("current"), $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 报表管理 <span class="st"> > </span> 充提记录')) : "orders" == s ? ($("#siderbar li:nth-child(3)").addClass("current"), $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 报表管理 <span class="st"> > </span> 游戏账变')) : "userpoint" == s ? ($("#siderbar li:nth-child(4)").addClass("current"), $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 报表管理 <span class="st"> > </span> 返点总额')) : "list" == s && ($("#siderbar li:nth-child(5)").addClass("current"), $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 报表管理 <span class="st"> > </span> 报表查询'))) : "help" == a && ($("#siderbar .title").html("新手指南"), $("#mainContent .topName").html("新手指南"), $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 新手指南'), $("#siderbar .list").html("<li><a href=javascript:void(0) onclick=ListClick('noticelist','help') id=noticelist>公告列表</a></li>"), $("#siderbar .list").append("<li><a href=javascript:void(0) onclick=ListClick('playinfo','help') id=playinfo>玩法介绍</a></li>"), $("#siderbar .list").append("<li><a href=javascript:void(0) onclick=ListClick('answer','help') id=answer>常见问题</a></li>"), "noticelist" == s ? ($("#siderbar li:nth-child(1)").addClass("current"), $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 新手指南 <span class="st"> > </span> 公告列表')) : "noticeDetail" == s ? ($("#siderbar li:nth-child(1)").addClass("current"), $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 新手指南 <span class="st"> > </span> 公告列表 <span class="st"> > </span> 详细')) : "playinfo" == s ? ($("#siderbar li:nth-child(2)").addClass("current"), $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 新手指南 <span class="st"> > </span> 玩法介绍')) : "answer" == s && ($("#siderbar li:nth-child(3)").addClass("current"), $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 新手指南 <span class="st"> > </span> 常见问题')))
}
function ListClick(s, a, t) {
    if ($("#" + t).parents("#siderbar").find("li").removeClass("current"), $("#" + t).parent().addClass("current"), t != temp ? siderbarInit(s, a, t) : changeAddress(s, a, t), temp = t, t) var n = "&tag=" + t;
    $("#contentBox").each(function() {
        var t = $(this);
        t.html('<div align=center><img src="images/sy/loadingAnimation.gif"><br><br>正在载入......</div>'),
            $.ajax({
                type: "POST",
                url: a + "_" + s + ".html?ajax=1" + n,
                timeout: 3e4,
                dataType: "html",
                success: function(s) {
                    var a = s;
                    s || (a = $(s).filter("#errorBox").html()),
                        t.empty(),
                        t.html(a),
                        clearTimeout()
                },
                error: function(s, a, t) {
                    sAlert("请求超时请重试")
                }
            })
    })
}
function nochecksercuity(s) {
    $("#contentBox").each(function() {
        var a = $(this);
        a.html('<div align=center><img src="images/sy/loadingAnimation.gif"><br><br>正在载入......</div>'),
            $.ajax({
                type: "POST",
                url: "security_platwithdraw.html?check=" + s,
                timeout: 3e4,
                dataType: "html",
                success: function(s) {
                    var t = s;
                    s || (t = $(s).filter("#errorBox").html()),
                        a.empty(),
                        a.html(t),
                        clearTimeout()
                },
                error: function(s, a, t) {
                    sAlert("请求超时请重试")
                }
            })
    })
}
function checkWithdraw(s, a, t) {
    s.value = formatFloat(s.value),
    parseFloat(s.value) > parseFloat(t) && (sAlert("输入金额超出了可用余额"), s.value = t),
        jQuery("#" + a).html(changeMoneyToChinese(s.value))
}
function postdata(s, a, t, n) {
    var e, l = "";
    e = s.length;
    for (var i = 0; i < e; i++) l += s[i] + "=" + n.elements[s[i]].value + "&";
    $.ajax({
        type: "POST",
        url: a + "_" + t + ".html?ajax=1",
        processData: !1,
        data: l,
        success: function(s) {
            $("#contentBox").html(s)
        }
    })
}
function checkemailWithdraw(s, a, t) {
    s.value = formatFloat(s.value),
    parseFloat(s.value) > parseFloat(t) && (sAlert("您的充值金额不能高于最高充值限额!"), s.value = t),
        jQuery("#" + a).html(changeMoneyToChinese(s.value))
}
function formatFloat(s) {
    if (s = s.replace(/^[^\d]/g, ""), s = s.replace(/[^\d.]/g, ""), s = s.replace(/\.{2,}/g, "."), s = s.replace(/^[0].*/g, ""), s = s.replace(".", "$#$").replace(/\./g, "").replace("$#$", "."), s.indexOf(".") != -1) {
        var a = s.split(".");
        s = a[0].substr(0, 15) + "." + a[1].substr(0, 2)
    } else s = s.substr(0, 15);
    return s
}
function changeMoneyToChinese(s) {
    var a, t, e, l = new Array("零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"),
        r = new Array("", "拾", "佰", "仟"),
        c = new Array("", "万", "亿", "兆"),
        d = new Array("角", "分", "毫", "厘"),
        o = "整",
        h = "元",
        u = 1e15,
        $ = "";
    if ("" == s) return "";
    if (s = parseFloat(s), s >= u) return sAlert("超出最大处理数字"),
        "";
    if (0 == s) return $ = l[0] + h + o;
    if (s = s.toString(), s.indexOf(".") == -1 ? (a = s, t = "") : (e = s.split("."), a = e[0], t = e[1].substr(0, 4)), parseInt(a, 10) > 0) {
        for (zeroCount = 0, IntLen = a.length, i = 0; i < IntLen; i++) n = a.substr(i, 1),
            p = IntLen - i - 1,
            q = p / 4,
            m = p % 4,
            "0" == n ? zeroCount++:(zeroCount > 0 && ($ += l[0]), zeroCount = 0, $ += l[parseInt(n)] + r[m]),
        0 == m && zeroCount < 4 && ($ += c[q]);
        $ += h
    }
    if ("" != t) for (decLen = t.length, i = 0; i < decLen; i++) n = t.substr(i, 1),
    "0" != n && ($ += l[Number(n)] + d[i]);
    return "" == $ ? $ += l[0] + h + o: "" == t && ($ += o),
        $
}
function SetWinHeight(s) {
    var a = s;
    document.getElementById && a && !window.opera && (a.contentDocument && a.contentDocument.body.offsetHeight ? a.height = a.contentDocument.body.offsetHeight: a.Document && a.Document.body.scrollHeight && (a.height = a.Document.body.scrollHeight))
}
function SetIframeHeight() {
    SetWinHeight(document.getElementById("mainFrame"))
}
if ("undefined" == typeof phoenix) var phoenix = {
    GameMessage: function() {}
};
var sAlert = styleAlert,
    sConfirm = styleConfirm,
    temp = getUrlPar("tag");
$(function() {
    $("#refff").click(function() {
        $("#checkmoneys").html("载入中..."),
            $.ajax({
                type: "POST",
                url: "./default_menu.html",
                data: "flag=getmoney",
                timeout: 1e4,
                success: function(s) {
                    if ("error" == s) return $("#checkmoneys").html("<font color='red'>读取数据出错</font>"),
                        !1;
                    var a = /<(.*)>.*<\/\1>/;
                    return a.exec(s) ? (window.top.location.href = "../default_main.html", !1) : ($("#checkmoneys").html(moneyFormat(s)), !0)
                },
                error: function() {
                    $("#checkmoneys").html("<font color='red'>读取数据出错</font>")
                }
            })
    })
});