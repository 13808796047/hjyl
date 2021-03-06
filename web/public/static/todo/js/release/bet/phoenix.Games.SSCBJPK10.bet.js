!
    function () {
        var e = phoenix.Games;
        phoenix.Games.SSCBJPK10.getInstance(),
            phoenix.GameTypes.getInstance(),
            phoenix.GameStatistics.getInstance(),
            phoenix.GameOrder.getInstance(),
            phoenix.GameSubmit.getInstance(),
            phoenix.Games.SSCBJPK10.Message.getInstance(),
            phoenix.GamePlan.getInstance();
        var t = function (t) {
            // 数据进入
            var n = new phoenix.flipTimer($(".flipTimer")),
                r = !0,
                a = !0,
                o = t.data,
                i = new phoenix.CountDown({
                    isLoop: !1,
                    showDom: ".deadline-number",
                    expands: {
                        _showTime: function (e) {
                            var t = this,
                                r = ($(t.defConfig.showDom), t.checkNum(e.h) + ""),
                                a = t.checkNum(e.m) + "",
                                i = t.checkNum(e.s) + "";
                            pointerAngleH = 6 * (60 - parseInt(r)),
                                pointerAngleM = 6 * (60 - parseInt(a)),
                                pointerAngleS = 6 * (60 - parseInt(i)),
                                n.reNew(r, a, i),
                                /*isNaN(o.number.replace(/-/g, "")) || t.fireEvent("afterShowTime", e, t)*/
                            isNaN(o.number) || t.fireEvent("afterShowTime", e, t)
                        }
                    }
                });
            e.getCurrentGame().addEvent("afterSwitchGameMethod",
                function () {
                    a ? (phoenix.Games.SSCBJPK10.getInstance().removeFakeBallDom(), a = !1, o.historyBall && setTimeout(function () {
                            e.getCurrentGame().getCurrentGameMethod().refreshHistory(o)
                        },
                        1e3)) : e.getCurrentGame().getCurrentGameMethod().refreshHistory()
                }),
                e.getCurrentGameTypes().addEvent("endChange",
                    function () {
                        r && (phoenix.Games.SSCBJPK10.getInstance().removeFakeMenuDom(), e.getCurrentGameTypes().containerShow(), r = !1)
                    }),
                e.getCurrentGame().addEvent("changeDynamicConfig",
                    function (t, n) {
                        if ("undefined" != typeof n.balance && $("#J-balance-value").html(n.balance), n.lastballs) {
                            var r = n.lastballs.split(",");
                            console.log('第几期->>', n.number)
                            $("#J-lotter-info-number").text(n.number),
                                $("#J-lotter-info-lastnumber").text(n.lastnumber),
                                $("#J-lottery-info-balls").find("em").each(function (e) {
                                    this.innerHTML = r[e]
                                }),
                                e.getCurrentGame().showLotteryDescription(n.lastballsTrans),
                                console.log('pk')
                            e.getCurrentGame().startGetBetBall(),
                                i.setStartTime(new Date(n.nowtime)),
                                i.setEndTime(new Date(n.nowstoptime)),
                                i.continueCount()
                        }
                    }),
                e.getCurrentGame().setDynamicConfig(o),
                e.getCurrentGameStatistics().getBonusData(),
                e.getCurrentGameTypes().addEvent("endShow",
                    function () {
                        $.support.leadingWhitespace ? e.getCurrentGameTypes().changeMode(e.getCurrentGame().getGameConfig().getInstance().getDefaultMethod()) : setTimeout(function () {
                                e.getCurrentGameTypes().changeMode(e.getCurrentGame().getGameConfig().getInstance().getDefaultMethod())
                            },
                            1e3)
                    }),
                setTimeout(function () {
                        $("body").append('<iframe src="' + e.getCurrentGame().getGameConfig().getInstance().getUploadPath() + '" name="check_file_frame" style="display:none;"></iframe>'),
                            phoenix.GameTrace.getInstance()
                    },
                    0),
                e.getCurrentGame().addEvent("afterSuccessGetLastBall",
                    function (t, n) {
                        var r = n.ball.split(","),
                            a = n.period;
                        try {
                            e.getCurrentGame().stopGetBetBall(),
                                e.getCurrentGame().getCurrentGameMethod().refreshHistory(n),
                                e.getCurrentGame().showLotteryDescription(n.lastballsTrans),
                                $("#J-lotter-info-lastnumber").text(a),
                                $("#J-lottery-info-balls").find("em").each(function (e) {
                                    this.innerHTML = r[e]
                                })
                        } catch (o) {
                        }
                    }),
                i.addEvent("afterSuccessRedRessTime",
                    function (t, n) {
                        n.availablebalance && e.getCurrentGame().setBalanceValue(n.availablebalance)
                    }),
                e.getCurrentGameSubmit().addEvent("afterSubmitSuccess",
                    function () {
                        e.getCurrentGame().getBalanceFormServer()
                    }),
                function () {
                    var e = $("#J-submit-count"),
                        t = $(".countdown"),
                        n = t.find("a").width(),
                        r = $(".main").offset().left,
                        a = $(".main").offset().top,
                        o = null;
                    t.css("right", r - n),
                        $(window).scroll(function (e) {
                            o && (clearTimeout(o), o = null),
                                o = setTimeout(function () {
                                        n = t.find("a").width(),
                                            r = $(".main").offset().left,
                                            a = $(".main").offset().top,
                                            $(window).scrollTop() > a ? t.show() : (t.hide(), t.hasClass("countdown-current") || t.addClass("countdown-current"))
                                    },
                                    30)
                        }),
                        t.find("a").bind("click",
                            function () {
                                t.hasClass("countdown-current") ? t.removeClass("countdown-current") : t.addClass("countdown-current")
                            }),
                        i.addEvent("afterShowTime",
                            function (n, r, a) {
                                var o = a.checkNum(r.m) + "",
                                    i = a.checkNum(r.s) + "";
                                e.html(o + ":" + i),
                                    t.find("strong").html(o + ":" + i)
                            })
                }(),
                i.addEvent("afterTimeFinish",
                    function () {
                        var t = e.getCurrentGameMessage();
                        e.getCurrentGame().getDynamicConfig().issueCode;
                        e.getCurrentGame().delCurrentPeriod(e.getCurrentGame().getDynamicConfig()),
                            e.getCurrentGame().getServerDynamicConfig(),
                            t.show({
                                cover: "no",
                                mask: !0,
                                cancelIsShow: !0,
                                cancelFun: function () {
                                    this.hide()
                                },
                                time: 1,
                                content: translate.EndOfAwardWording
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
                    function () {
                        var e = document.querySelector(".example-button").getBoundingClientRect(),
                            t = document.querySelector(".prompt").getBoundingClientRect(),
                            n = $(".example-tip");
                        n.css({
                            left: e.right + 5,
                            width: t.right - e.right - 15 > n.textWidth() + 24 ? n.textWidth() + 24 + "px" : t.right - e.right - 15 > 64 ? t.right - e.right - 15 + "px" : "auto"
                        }).show().css({
                            top: e.top - n.height() + 23
                        })
                    }).on("mouseleave", ".example-button",
                    function () {
                        $(".example-tip").hide()
                    }),
                function () {
                    var e = $("#J-game-chart"),
                        t = function () {
                            var t = "/newgame_play.html?curmid=" + window.GamesInitData.curmid + "&flag=historyBalls&size=10";
                            $.ajax({
                                url: t,
                                dataType: "html",
                                success: function (t) {
                                    e.find(".inner-content").html(t)
                                },
                                error: function (t, n) {
                                    e.find(".inner-content").html(translate.FailToGetNumberWording + t.responseText)
                                }
                            })
                        };
                    $(".chart-switch").bind("click",
                        function () {
                            $(".control-btn").removeClass("current-control"),
                                e.parent().hasClass("game-chart") ? e.parent().removeClass() : ($(this).addClass("current-control"), e.parent().removeClass(), t(), e.parent().addClass("game-chart"))
                        })
                }(),
                $("#J-add-order").click(function () {
                    e.getCurrentGameOrder().add(e.getCurrentGameStatistics().getResultData())
                }),
                $("#J-bet-order").click(function () {
                    e.getCurrentGameOrder().addbet(e.getCurrentGameStatistics().getResultData(),
                        function () {
                            e.getCurrentGameSubmit().submitBetOrderData()
                        })
                }),
                $("#restdata").click(function () {
                    e.getCurrentGameOrder().reSet().cancelSelectOrder(),
                        e.getCurrentGame().getCurrentGameMethod().reSet()
                }),
                $("body").on("click", ".remove-error",
                    function () {
                        e.getCurrentGame().getCurrentGameMethod().removeOrderError()
                    }).on("click", ".remove-same",
                    function () {
                        e.getCurrentGame().getCurrentGameMethod().removeOrderSame()
                    }).on("click", ".remove-all",
                    function () {
                        e.getCurrentGame().getCurrentGameMethod().removeOrderAll()
                    }),
                $("#J-fresh-balance").on("click",
                    function () {
                        e.getCurrentGame().getBalanceFormServer()
                    }),
                $("#J-header-toggle").on("click",
                    function () {
                        $("body").toggleClass("header-hiden"),
                            "收起顶部" == $.trim($(this).text()) ? $(this).text("展开顶部") : $(this).text("收起顶部")
                    }),
                $("body").on("click", "#J-submit-order",
                    function () {
                        e.getCurrentGameSubmit().submitData()
                    }),
                $("body").on("click", "#J-close-fnarea",
                    function () {
                        $(this).parent().removeClass(),
                            $(".control-btn").removeClass("current-control")
                    }),
                $("#J-history-control").on("click", ".menu-button-title a",
                    function () {
                        var e = $(this).parent().parent(),
                            t = $(this)[0].className.replace(/current|\s/g, "");
                        e.find(".menu-button-title a").removeClass("current"),
                            $(this).addClass("current"),
                            e.find(".inner-content").hide(),
                            e.find("." + t + "-content").show()
                    }),
                $("#J-history-control").on("click", ".details-lottery",
                    function () {
                        $(this).next().hide().show()
                    }),
                $("#J-balls-statistics-lockMultiple, .icon-unlock, .icon-lock").on("click",
                    function (e) {
                        var t = $("#J-balls-statistics-panel"),
                            n = $("#J-balls-statistics-lockMultiple");
                        t.find(".icon-unlock")[0] ? (n.prop("checked", !0), t.find(".icon-unlock").removeClass("icon-unlock").addClass("icon-lock")) : (n.prop("checked", !1), t.find(".icon-lock").removeClass(".icon-lock").addClass("icon-unlock"))
                    })
        };
        t(jsDynamicConfig)
    }();