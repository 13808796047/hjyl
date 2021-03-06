!
    function(e, t, i, s, n) {
        var o = {
                delayTime: 0,
                serviceUrl: "",
                serviceGetType: "once",
                msgPushWaitTime: 3,
                tipsHiddenTime: 5,
                cycleTime: 5,
                cycleType: "bottom",
                reloadType: "auto",
                noticeHtml: '<div class="public-notice"><div class="inner"><i class="ico-close"></i><i class="ico-volume"></i><#=msg#></div></div>',
                tipsHtml: '<div class="public-notice"><div class="inner"><i class="ico-close"></i><i class="ico-volume"></i><#=msg#></div></div>',
                tipsContainer: "<ul></ul>"
            },
            a = {
                init: function(e) {
                    var t = this;
                    t.cycleTime = null,
                        t.timestamp = 0,
                        t.addEvent("afterGetServiceData",
                            function(e, i) {
                                t.getMethodByName(i.data)
                            }),
                        t.addEvent("afterGetServicePush",
                            function(e, i) {
                                t.getMethodByName(i.data)
                            })
                },
                setdelayTime: function(e) {
                    this.defConfig.delayTime = e
                },
                getdelayTime: function() {
                    return this.defConfig.delayTime
                },
                setMsgPushWaitTime: function(e) {
                    this.defConfig.msgPushWaitTime = e
                },
                getMsgPushWaitTime: function() {
                    return this.defConfig.msgPushWaitTime
                },
                setServiceGetType: function(e) {
                    this.defConfig.serviceGetType = e
                },
                getServiceGetType: function() {
                    return this.defConfig.serviceGetType
                },
                getServiceUrl: function() {
                    return this.defConfig.serviceUrl
                },
                setServiceUrl: function(e) {
                    this.defConfig.serviceUrl = e
                },
                getNoticeHtml: function() {
                    return this.defConfig.noticeHtml
                },
                setNoticeHtml: function(e) {
                    this.defConfig.noticeHtml = e
                },
                getTipsHtml: function() {
                    return this.defConfig.tipsHtml
                },
                setTipsHtml: function(e) {
                    this.defConfig.tipsHtml = e
                },
                setCycleType: function(e) {
                    this.defConfig.cycleType = e
                },
                getCycleType: function() {
                    return this.defConfig.cycleType
                },
                getCycleTime: function() {
                    return this.defConfig.cycleTime
                },
                setCycleTime: function(e) {
                    this.defConfig.cycleTime = e
                },
                getTipsContainerHtml: function() {},
                setTipsContainerHtml: function() {},
                formatRow: function(e, t) {
                    var i, s, n = t;
                    for (i in n) n.hasOwnProperty(i) && (s = RegExp("<#=" + i + "#>", "g"), e = e.replace(s, n[i]));
                    return e
                },
                startLoadData: function() {
                    var e = this,
                        t = e.getdelayTime() || 0;
                    setTimeout(function() {
                            e.getServiceData()
                        },
                        1e3 * t)
                },
                getServiceData: function() {
                    var e = this;
                    "once" == e.getServiceGetType() ? e.getServiceDataOnce() : "push" == e.getServiceGetType() && e.getServiceDataRepeat()
                },
                getServiceDataOnce: function() {
                    var e = this;
                    s.ajax({
                        url: e.getServiceUrl(),
                        type: "GET",
                        dataType: "json",
                        success: function(t) {
                            1 == t.isSuccess ? e.fireEvent("afterGetServiceData", t) : e.errorTips(t)
                        },
                        error: function() {
                            e.errorTips({
                                name: "netError",
                                msg: "服务器数据异常"
                            })
                        }
                    })
                },
                getServiceDataRepeat: function(e) {
                    var t = this;
                    s.ajax({
                        url: t.getServiceUrl(),
                        type: "GET",
                        dataType: "json",
                        data: {
                            timestamp: t.timestamp
                        },
                        success: function(e) {
                            1 == e.isSuccess ? (t.timestamp = e.timestamp, "undefined" != typeof e.time && Number(e.time) && t.setMsgPushWaitTime(Number(e.time)), t.fireEvent("afterGetServicePush", e)) : t.errorTips(e)
                        },
                        error: function() {},
                        complete: function() {
                            t.reloadService()
                        }
                    })
                },
                reloadService: function() {
                    var e = this;
                    setTimeout(function() {
                            e.getServiceDataRepeat()
                        },
                        1e3 * e.getMsgPushWaitTime())
                },
                getMethodByName: function(e) {
                    var t, i, n = this;
                    if (n.fireEvent("beforStartMethod", e), e) if (i = e.name, t = e.tplData, "undefined" != typeof n[i] && s.isFunction(n[i])) n[i](t);
                    else try {
                            console.log("缺少数据接口: " + i)
                        } catch(o) {}
                },
                errorTips: function(e) {
                    var t = this,
                        i = e.name,
                        e = e.Tpldata,
                        n = t[i + "error"];
                    "undefined" != typeof n && s.isFunction(n) && n(e)
                },
                messageNotice: function(e) {
                    var t = this,
                        i = [];
                    i.push("<ul>");
                    for (var n = 0; n < e.length; n++) i.push('<li><a href="' + e[n].url + '">' + e[n].text + "</a></li>");
                    i.push("</ul>"),
                        t.messageNoticeDom = s(t.formatRow(t.getNoticeHtml(), {
                            msg: i.join("")
                        })),
                        t.messageNoticeDom.addClass("messageNotice"),
                        s("body").prepend(t.messageNoticeDom),
                        t.messageNoticeShow(),
                        t.bindEventNotice(t.messageNoticeDom, "message"),
                        t.messageCycleStart(t.messageNoticeDom.find("ul"), "li", "message")
                },
                bindEventNotice: function(e, t) {
                    var i = this;
                    e.bind("mouseenter",
                        function() {
                            i.messageCycleStop(t, e)
                        }),
                        e.bind("mouseleave",
                            function() {
                                i.messageCycleStart(e.find("ul"), "li", t)
                            })
                },
                messageCycleStart: function(e, t, i) {
                    var s, n = this,
                        o = e.find(t),
                        a = o.eq(0).outerHeight();
                    return o.size() > 1 && (n[i] = setInterval(function() {
                            s = e.find(t),
                                "top" == n.getCycleType() ? s.eq(0).animate({
                                        marginTop: -a
                                    },
                                    1e3,
                                    function() {
                                        e.append(s.eq(0)),
                                            s.eq(0).css("marginTop", 0)
                                    }) : "bottom" == n.getCycleType() && (s = s.eq(s.length - 1), e.prepend(s), s.css("marginTop", -a), s.eq(0).animate({
                                            marginTop: 0
                                        },
                                        1e3))
                        },
                        1e3 * n.getCycleTime())),
                        n
                },
                messageCycleStop: function(e, t) {
                    var i = this;
                    return i[e] && (clearInterval(i[e]), i[e] = null),
                        i
                },
                messageNoticeError: function(e) {},
                messageNoticeShow: function() {
                    var e = this,
                        t = e.messageNoticeDom;
                    return t.animate({
                        height: 28
                    }),
                        e
                },
                messageNoticehide: function() {
                    var e = this,
                        t = e.messageNoticeDom;
                    return t.animate({
                        height: 0
                    }),
                        e
                },
                messageTips: function(e) {
                    var t = this,
                        i = 0;
                    if (e) for (; i < e.length; i++) {
                        var s = e[i].html,
                            n = 1500 * i;
                        setTimeout(t.bulidTipsDoms(s), n)
                    }
                },
                bulidTipsDoms: function(e) {
                    var t = this;
                    return function() {
                        html = [],
                            html.push(e),
                            html = s(html.join("")),
                            t.tipsContainer.prepend(html),
                            t.startTipsHidden(html),
                            t.bindEventTips(html)
                    }
                },
                addTipsContainerDom: function() {
                    var e = this;
                    return e.tipsContainer = s('<ul style="position:fixed;bottom:10px;left:10px;_position:absolute" class="game_tipscontainer ie6fixedBR"></ul>'),
                        s("body").append(e.tipsContainer),
                        e
                },
                startTipsHidden: function(e) {
                    var t = this;
                    setTimeout(function() {
                            e.find(".close_btn").fadeOut(5e3),
                                e.fadeOut(5e3,
                                    function() {
                                        s(this).remove(),
                                            s(this).unbind()
                                    })
                        },
                        1e3 * t.defConfig.tipsHiddenTime)
                },
                bindEventTips: function(e) {
                    var t = this,
                        i = null;
                    e.bind("mouseenter",
                        function() {
                            i && (clearTimeout(i), i = null),
                            s(this).is(":animated") && (e.find(".close_btn").stop(), e.find(".close_btn").css("opacity", "1"), s(this).stop(), s(this).css("opacity", "1"))
                        }),
                        e.bind("mouseleave",
                            function() {
                                var e = s(this);
                                i = setTimeout(function() {
                                        t.startTipsHidden(e)
                                    },
                                    500)
                            }),
                        e.find(".close_btn").bind("click",
                            function() {
                                s(this).parent().remove()
                            })
                },
                messageTipsError: function() {},
                gameMessageNotice: function(e) {
                    var t = this,
                        i = [];
                    i.push("<ul>");
                    for (var n = 0; n < e.length; n++) i.push('<li><a href="' + e[n].url + '">' + e[n].text + "</a></li>");
                    i.push("</ul>"),
                        t.gameMessageNoticeDom = s(t.formatRow(t.getNoticeHtml(), {
                            msg: i.join("")
                        })),
                        t.gameMessageNoticeDom.addClass("gameMessageNotice"),
                        s(".main").prepend(t.gameMessageNoticeDom),
                        t.gameMessageNoticeShow(),
                        t.bindEventNotice(t.gameMessageNoticeDom, "gameMessage"),
                        t.messageCycleStart(t.gameMessageNoticeDom.find("ul"), "li", "gameMessage")
                },
                gameMessageNoticeShow: function() {
                    var e = this,
                        t = e.gameMessageNoticeDom;
                    return t.animate({
                        height: 28
                    }),
                        e
                },
                gameMessageNoticehide: function() {
                    var e = this,
                        t = e.gameMessageNoticeDom;
                    return t.animate({
                        height: 0
                    }),
                        e
                }
            },
            c = e.Class(a, i);
        c.defConfig = o,
            e[t] = c
    } (phoenix, "Notice", phoenix.Event, jQuery),
    $(function() {
        $("body").on("click", ".messageNotice .ico-close",
            function() {
                msgNoticeTips.messageNoticehide().messageCycleStop("message")
            }),
            $("body").on("click", ".gameMessageNotice .ico-close",
                function() {
                    msgNoticeTips.gameMessageNoticehide().messageCycleStop("gameMessage")
                });
        var e = new phoenix.Notice({
            delayTime: 5,
            serviceUrl: "/newgame_play.html?tag=getusermessage",
            serviceGetType: "push",
            msgPushWaitTime: 8
        });
        e.addTipsContainerDom().startLoadData()
    });