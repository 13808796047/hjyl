!function() {
        var e = phoenix.Games;
        phoenix.Games.FC3D.getInstance(),
            phoenix.GameTypes.getInstance(),
            phoenix.GameStatistics.getInstance(),
            phoenix.GameOrder.getInstance(),
            phoenix.GameSubmit.getInstance(),
            phoenix.Games.FC3D.Message.getInstance(),
            phoenix.GamePlan.getInstance();
        var t = function(t) {
            var n = new phoenix.flipTimer($(".flipTimer")),
                a = !0,
                r = !0,
                o = t.data,
                i = new phoenix.CountDown({
                    isLoop: !1,
                    showDom: ".deadline-number",
                    expands: {
                        _showTime: function(e) {
                            var t = this,
                                a = ($(t.defConfig.showDom), t.checkNum(e.h) + ""),
                                r = t.checkNum(e.m) + "",
                                o = t.checkNum(e.s) + "";
                            pointerAngleH = 6 * (60 - parseInt(a)),
                                pointerAngleM = 6 * (60 - parseInt(r)),
                                pointerAngleS = 6 * (60 - parseInt(o)),
                                n.reNew(a, r, o),
                                t.fireEvent("afterShowTime", e, t)
                        }
                    }
                });
            e.getCurrentGame().addEvent("afterSwitchGameMethod",
                function() {
                    r ? (phoenix.Games.FC3D.getInstance().removeFakeBallDom(), r = !1, o.historyBall && setTimeout(function() {
                            e.getCurrentGame().getCurrentGameMethod().refreshHistory(o)
                        },
                        100)) : e.getCurrentGame().getCurrentGameMethod().refreshHistory()
                }),
                e.getCurrentGameTypes().addEvent("endChange",
                    function() {
                        a && (phoenix.Games.FC3D.getInstance().removeFakeMenuDom(), e.getCurrentGameTypes().containerShow(), a = !1)
                    }),
                e.getCurrentGame().addEvent("changeDynamicConfig",
                    function(t, n) {
                        if ("undefined" != typeof n.balance && $("#J-balance-value").html(n.balance), n.lastballs) {
                            var a = n.lastballs.split(",");
                            $("#J-lotter-info-number").text(n.number),
                                $("#J-lotter-info-lastnumber").text(n.lastnumber),
                                $("#J-lottery-info-balls").find("em").each(function(e) {
                                    this.innerHTML = a[e]
                                }),
                                e.getCurrentGame().showLotteryDescription(n.lastballsTrans),
                                e.getCurrentGame().startGetBetBall(),
                                i.setStartTime(new Date(n.nowtime)),
                                i.setEndTime(new Date(n.nowstoptime)),
                                i.continueCount()
                        }
                    }),
                e.getCurrentGame().setDynamicConfig(o),
                e.getCurrentGameStatistics().getBonusData(),
                e.getCurrentGameTypes().addEvent("endShow",
                    function() {
                        $.support.leadingWhitespace ? e.getCurrentGameTypes().changeMode(e.getCurrentGame().getGameConfig().getInstance().getDefaultMethod()) : setTimeout(function() {
                                e.getCurrentGameTypes().changeMode(e.getCurrentGame().getGameConfig().getInstance().getDefaultMethod())
                            },
                            1e3)
                    }),
                setTimeout(function() {
                        $("body").append('<iframe src="' + e.getCurrentGame().getGameConfig().getInstance().getUploadPath() + '" name="check_file_frame" style="display:none;"></iframe>'),
                            phoenix.GameTrace.getInstance()
                    },
                    0),
                e.getCurrentGame().addEvent("afterSuccessGetLastBall",
                    function(t, n) {
                        var a = n.ball.split(","),
                            r = n.period;
                        try {
                            e.getCurrentGame().stopGetBetBall(),
                                e.getCurrentGame().getCurrentGameMethod().refreshHistory(n),
                                e.getCurrentGame().showLotteryDescription(n.lastballsTrans),
                                $("#J-lotter-info-lastnumber").text(r),
                                $("#J-lottery-info-balls").find("em").each(function(e) {
                                    this.innerHTML = a[e]
                                })
                        } catch(o) {}
                    }),
                i.addEvent("afterSuccessRedRessTime",
                    function(t, n) {
                        n.availablebalance && e.getCurrentGame().setBalanceValue(n.availablebalance)
                    }),
                e.getCurrentGameSubmit().addEvent("afterSubmitSuccess",
                    function() {
                        e.getCurrentGame().getBalanceFormServer()
                    }),
                function() {
                    var e = $("#J-submit-count"),
                        t = $(".countdown"),
                        n = t.find("a").width(),
                        a = $(".main").offset().left,
                        r = $(".main").offset().top,
                        o = null;
                    t.css("right", a - n),
                        $(window).scroll(function(e) {
                            o && (clearTimeout(o), o = null),
                                o = setTimeout(function() {
                                        n = t.find("a").width(),
                                            a = $(".main").offset().left,
                                            r = $(".main").offset().top,
                                            $(window).scrollTop() > r ? t.show() : (t.hide(), t.hasClass("countdown-current") || t.addClass("countdown-current"))
                                    },
                                    30)
                        }),
                        t.find("a").bind("click",
                            function() {
                                t.hasClass("countdown-current") ? t.removeClass("countdown-current") : t.addClass("countdown-current")
                            }),
                        i.addEvent("afterShowTime",
                            function(n, a, r) {
                                var o = "" + r.checkNum(a.h),
                                    i = "" + r.checkNum(a.m),
                                    c = "" + r.checkNum(a.s);
                                e.html(o + ":" + i + ":" + c),
                                    t.find("strong").html(o + ":" + i + ":" + c)
                            })
                } (),
                i.addEvent("afterTimeFinish",
                    function() {
                        var t = e.getCurrentGameMessage();
                        e.getCurrentGame().delCurrentPeriod(e.getCurrentGame().getDynamicConfig()),
                            e.getCurrentGame().getServerDynamicConfig(),
                            t.show({
                                cover: "no",
                                mask: !0,
                                cancelIsShow: !0,
                                cancelFun: function() {
                                    this.hide()
                                },
                                time: 1,
                                content: '<span class="text-center">' + translate.EndOfAwardWording + "</span>"
                            })
                    }),
                new phoenix.Tab({
                    par: ".program-chase",
                    triggers: ".program-chase-title > li",
                    panels: ".program-chase-content > li",
                    eventType: "click",
                    currPanelClass: "current"
                }),
                $(".prompt").on("mouseenter", ".example-button",
                    function() {
                        var e = document.querySelector(".example-button").getBoundingClientRect(),
                            t = (document.querySelector(".prompt").getBoundingClientRect(), $(".example-tip"));
                        t.css({
                            left: e.right + 5
                        }).show().css({
                            top: e.top - t.height() + 23
                        })
                    }).on("mouseleave", ".example-button",
                    function() {
                        $(".example-tip").hide()
                    }),
                function() {
                    var e = $("#J-game-chart"),
                        t = function() {
                            var t = "/newgame_play.shtml?curmid=" + window.GamesInitData.curmid + "&flag=historyBalls&size=10";
                            $.ajax({
                                url: t,
                                dataType: "html",
                                success: function(t) {
                                    e.find(".inner-content").html(t)
                                },
                                error: function(t, n) {
                                    e.find(".inner-content").html(translate.FailToGetNumberWording + t.responseText)
                                }
                            })
                        };
                    $(".chart-switch").bind("click",
                        function() {
                            $(".control-btn").removeClass("current-control"),
                                e.parent().hasClass("game-chart") ? e.parent().removeClass() : ($(this).addClass("current-control"), e.parent().removeClass(), t(), e.parent().addClass("game-chart"))
                        })
                } (),
                $("#J-add-order").click(function() {
                    e.getCurrentGameOrder().add(e.getCurrentGameStatistics().getResultData())
                }),
                $("#J-bet-order").click(function() {
                    e.getCurrentGameOrder().addbet(e.getCurrentGameStatistics().getResultData(),
                        function() {
                            e.getCurrentGameSubmit().submitBetOrderData()
                        })
                }),
                $("#randomone").click(function() {
                    e.getCurrentGame().getCurrentGameMethod().randomLotterys(1)
                }),
                $("#randomfive").click(function() {
                    e.getCurrentGame().getCurrentGameMethod().randomLotterys(5)
                }),
                $("#restdata").click(function() {
                    e.getCurrentGameOrder().reSet().cancelSelectOrder(),
                        e.getCurrentGame().getCurrentGameMethod().reSet()
                }),
                $("body").on("click", ".remove-error",
                    function() {
                        e.getCurrentGame().getCurrentGameMethod().removeOrderError()
                    }).on("click", ".remove-same",
                    function() {
                        e.getCurrentGame().getCurrentGameMethod().removeOrderSame()
                    }).on("click", ".remove-all",
                    function() {
                        e.getCurrentGame().getCurrentGameMethod().removeOrderAll()
                    }),
                $("#J-fresh-balance").on("click",
                    function() {
                        e.getCurrentGame().getBalanceFormServer()
                    }),
                $("#J-header-toggle").on("click",
                    function() {
                        $("body").toggleClass("header-hiden"),
                            "收起顶部" == $.trim($(this).text()) ? $(this).text("展开顶部") : $(this).text("收起顶部")
                    }),
                $("body").on("click", "#J-submit-order",
                    function() {
                        e.getCurrentGameSubmit().submitData()
                    }),
                $("body").on("click", "#J-close-fnarea",
                    function() {
                        $(this).parent().removeClass(),
                            $(".control-btn").removeClass("current-control")
                    }),
                $("#J-history-control").on("click", ".menu-button-title a",
                    function() {
                        var e = $(this).parent().parent(),
                            t = $(this)[0].className.replace(/current|\s/g, "");
                        e.find(".menu-button-title a").removeClass("current"),
                            $(this).addClass("current"),
                            e.find(".inner-content").hide(),
                            e.find("." + t + "-content").show()
                    }),
                $("#J-history-control").on("click", ".details-lottery",
                    function() {
                        $(this).next().hide().show()
                    }),
                $("#J-balls-statistics-lockMultiple, .icon-unlock, .icon-lock").on("click",
                    function(e) {
                        var t = $("#J-balls-statistics-panel"),
                            n = $("#J-balls-statistics-lockMultiple");
                        t.find(".icon-unlock")[0] ? (n.prop("checked", !0), t.find(".icon-unlock").removeClass("icon-unlock").addClass("icon-lock")) : (n.prop("checked", !1), t.find(".icon-lock").removeClass(".icon-lock").addClass("icon-unlock"))
                    })
        };
        t(jsDynamicConfig)
    } ();