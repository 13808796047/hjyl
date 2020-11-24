!function (e, t, a) {
    var n = {};
    n.cacheData = {},
        n.currentGame = null,
        n.currentGameTypes = null,
        n.currentGameStatistics = null,
        n.currentGameOrder = null,
        n.currentGameTrace = null,
        n.currentGameSubmit = null,
        n.currentGameMessage = null,
        n.currentGamePlan = null,
        n.getCurrentGame = function () {
            return n.currentGame
        },
        n.setCurrentGame = function (e) {
            n.currentGame = e
        },
        n.getCurrentGameTypes = function () {
            return n.currentGameTypes
        },
        n.setCurrentGameTypes = function (e) {
            n.currentGameTypes = e
        },
        n.getCurrentGameStatistics = function () {
            return n.currentGameStatistics
        },
        n.setCurrentGameStatistics = function (e) {
            n.currentGameStatistics = e
        },
        n.getCurrentGameOrder = function () {
            return n.currentGameOrder
        },
        n.setCurrentGameOrder = function (e) {
            n.currentGameOrder = e
        },
        n.getCurrentGameTrace = function () {
            return n.currentGameTrace
        },
        n.setCurrentGameTrace = function (e) {
            n.currentGameTrace = e
        },
        n.getCurrentGameSubmit = function () {
            return n.currentGameSubmit
        },
        n.setCurrentGameSubmit = function (e) {
            n.currentGameSubmit = e
        },
        n.getCurrentGameMessage = function () {
            return n.currentGameMessage
        },
        n.setCurrentGameMessage = function (e) {
            n.currentGameMessage = e
        },
        n.getCurrentGamePlan = function () {
            return n.currentGamePlan
        },
        n.setCurrentGamePlan = function (e) {
            n.currentGamePlan = e
        },
        e[t] = n
}(phoenix, "Games"),
    function (e, t, a, n) {
        var l = {
                name: "",
                basePath: "../game/",
                baseNamespace: "phoenix.Games.",
                dynamicConfigUrl: "/newgame_play.html",
                eventProxyPanel: "body",
                requestLastBallUrl: "/newgame_play.html"
            },
            i = e.Games,
            r = function (e) {
                for (var t, a = $.trim(e).split("&"), n = 0, l = a.length, i = {}; n < l; n++) t = a[n].split("="),
                t.length > 0 && (2 == t.length ? i[t[0]] = t[1] : i[t[0]] = "");
                return i
            },
            s = !1,
            o = !1;
        window.translate = GamesInitData.multilingual,
            window.fxid = GamesInitData.fxid,
            translate.defConfig.Dollar = 3 !== fxid ? translate.defConfig.Dollar : "VND",
            translate.MsgDollar = 3 !== fxid ? translate.MsgDollar : "VND";
        var c = {
                init: function (e) {
                    var t = this,
                        a = i.getCurrentGameMessage();
                    t.setName(e.name),
                        t.currentNumber = "",
                        i.setCurrentGame(t),
                        t.loadedHas = {},
                        t.currentGameMethod = null,
                        t.dynamicConfig = null,
                        t.addEvent("afterSwitchGameMethod",
                            function () {
                                i.getCurrentGame().getCurrentGameMethod().reSet();
                                i.getCurrentGame().getCurrentGameMethod().getGameMethodName();
                                i.getCurrentGameStatistics().setMultipleLimit(999999999),
                                    i.getCurrentGame().getCurrentGameMethod().updataGamesInfo()
                            }),
                        t.addEvent("changeDynamicConfig",
                            function () {
                                t.updateDynamicConfig()
                            }),
                        t.addEvent("afterSwitchGameMethod",
                            function () {
                                a = i.getCurrentGameMessage(),
                                    s = !1,
                                    o = !1,
                                    a.hide()
                            }),
                        t.addEvent("beforeSwitchGameMethod",
                            function () {
                                a = i.getCurrentGameMessage(),
                                    o = !0,
                                    setTimeout(function () {
                                            o && a.show({
                                                mask: !0,
                                                content: ['<div class="bd text-center">', '<div class="pop-waring">', '<div style="font-size:14px;"><em class="icon-spinner icon-spin icon-large mr10"></em> ' + translate.GameLoading + "</div>", "</div>", "</div>"].join("")
                                            })
                                        },
                                        600)
                            })
                },
                getMaxMultipleLimit: function (e) {
                    var t = e || i.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                        a = i.getCurrentGame().getDynamicConfig().gamelimit;
                    return Number(a[t].maxmultiple)
                },
                getDynamicConfigUrl: function () {
                    return "/newgame_play.html"
                },
                getLang: function () {
                    $.ajax({
                        url: getLangPath,
                        dataType: "json",
                        async: !1,
                        success: function (e) {
                            window.translate = e
                        }
                    })
                },
                systemInitNotice: function () {
                    var e = i.getCurrentGameMessage();
                    e.show({
                        mask: !0,
                        content: ['<div class="bd text-center">', '<div class="pop-waring">', '<div style="font-size:14px;"><em class="icon-spinner icon-spin icon-large mr10"></em> ' + translate.PageLoading + "</div>", "</div>", "</div>"].join("")
                    })
                },
                setBalanceValue: function (e) {
                    var t = this;
                    t.setDynamicConfig({
                        balance: e
                    })
                },
                getBalance: function () {
                    var e = this;
                    e.getDynamicConfig().balance
                },
                getBalanceFormServer: function () {
                    var e = this;
                    $.ajax({
                        url: e.getDynamicConfigUrl() + "?tag=getuserbalance",
                        cache: !1,
                        dataType: "JSON",
                        success: function (t) {
                            1 == Number(t.isSuccess) && e.setBalanceValue(t.availablebalance)
                        }
                    })
                },
                getCurrentMid: function () {
                    return window.GamesInitData.curmid
                },
                getServerDynamicConfig: function (e) {
                    var t = this,
                        a = (t.defConfig, t.getName(), r(window.location.href.replace(/^.*?\?/, "")).curmid.replace(/\D/g, "")),
                        n = (new Date).getTime();
                    $.ajax({
                        url: t.getDynamicConfigUrl() + "?curmid=" + a + "&flag=dynamicConfig&tag=" + n,
                        dataType: "JSON",
                        cache: !1,
                        success: function (a) {
                            1 == Number(a.isSuccess) && (t.setDynamicConfig(a.data), $.isFunction(e) && e.call(t, a.data))
                        }
                    })
                },
                getDynamicConfig: function () {
                    return this.dynamicConfig
                },
                setDynamicConfig: function (e) {
                    var t = this;
                    e.curmid = t.getCurrentMid(),
                        this.dynamicConfig = $.extend(!0, this.dynamicConfig, e),
                        this.fireEvent("changeDynamicConfig", e)
                },
                addDynamicBonus: function (e, t) {
                    "undefined" != typeof this.dynamicConfig.gamelimit && "undefined" != typeof this.dynamicConfig.gamelimit[e] && (this.dynamicConfig.gamelimit[e].usergroupmoney = t)
                },
                delCurrentPeriod: function (e) {
                    for (var t = this,
                             a = e || t.getDynamicConfig(), n = a.gamenumbers || [], l = n.length - 1; l >= 0; l--) if ($.trim(n[l].number) == $.trim(a.number)) {
                        n.splice(l, 1);
                        break
                    }
                },
                updateDynamicConfig: function () {
                    var e = this,
                        t = e.getDynamicConfig();
                    t.lastballs.split(",");
                    return 1 == t.isstop ? void setTimeout(function () {
                            phoenix.Games.getCurrentGameMessage().show({
                                type: "lotteryClose",
                                data: {
                                    tplData: {
                                        lotterys: [1, 2, 3, 4, 5, 6],
                                        lotteryName: "shishicai",
                                        lotteryPeriods: "20130528-276",
                                        orderDate: {
                                            year: "2013",
                                            month: "5",
                                            day: "3",
                                            hour: "1",
                                            min: "30"
                                        },
                                        lotteryType: [{
                                            name: "leli",
                                            pic: "#",
                                            url: "http://163.com"
                                        },
                                            {
                                                name: "kuaile8",
                                                pic: "#",
                                                url: "http://pp158.com"
                                            }]
                                    }
                                }
                            })
                        },
                        1e3) : (e.setCurrentNumber(t.number), $(".J-balance-show").text(t.balance), void (i.cacheData = {}))
                },
                eventProxy: function () {
                    var e = this,
                        t = e.defConfig,
                        a = $(t.eventProxyPanel);
                    a.click(function (t) {
                        var a, n, l = t.target.getAttribute("data-param");
                        l && "" != $.trim(l) && (t.preventDefault(), a = r(l), n = e.getCurrentGameMethod(), n && n.exeEvent(a, t.target))
                    })
                },
                startGetBetBall: function () {

                    var e = this;
                    setTimeout(function () {

                            e.startGetBetBallProcess = setInterval(function () {

                                    e.getCurrentTimeBall()
                                },
                                3e3)
                            e.getCurrentTimeBall()
                        },
                        3e3)
                },
                stopGetBetBall: function () {
                    var e = this;
                    clearInterval(e.startGetBetBallProcess),
                        e.startGetBetBallProcess = null
                },
                getCurrentTimeBall: function (e) {
                    var t = this;
                    t.lastRequest && t.lastRequest.abort(),
                        t.lastRequest = $.ajax({
                            url: t.defConfig.requestLastBallUrl + "?curmid=" + t.getCurrentMid() + "&flag=getopencodes",
                            dataType: "json",
                            async: !1,
                            cache: !1,
                            success: function (a) {
                                if (a.isSuccess == 1) {
                                    var currN = t.getDynamicConfig().number.split('-')[1];
                                    var befN = a.period.split('-')[1];

                                    if (Math.abs(currN - befN) == 2) {
                                        t.fireEvent("afterGetLastBall", a)
                                    } else {
                                        t.fireEvent("afterSuccessGetLastBall", a)
                                    }

                                }

                                // 1 == Number(a.isSuccess) && (t.fireEvent("afterGetLastBall", a), t.getDynamicConfig().number && a.period.replace(/-/g, "") !== Number((t.getDynamicConfig().number+"").replace(/-/g, "")) && (e && e(), t.fireEvent("afterSuccessGetLastBall", a)))
                            }
                        })
                },
                getGameMethodByName: function (e) {
                    var t = this;
                    t.loadedHas;
                    if (t.hasOwnProperty(e) && t[e] && $.isArray(t[e].balls) && $.isFunction(t[e].hide)) return t[e]
                },
                switchGameMethod: function (e) {
                    var t, a, n = this;
                    n.loadedHas;
                    if (!s) {
                        s = !0,
                            n.fireEvent("beforeSwitchGameMethod");
                        for (t in n) n.getGameMethodByName(t) && (t != e ? n[t].hide() : (n[t].show(), n.currentGameMethod = n[t], n.fireEvent("afterSwitchGameMethod", e)));
                        n.getGameMethodByName(e) || n.setup(e,
                            function () {
                                a = n.getGameMethodByName(e),
                                    a.show(),
                                    n.currentGameMethod = a,
                                    n.fireEvent("afterSetup"),
                                    n.fireEvent("afterSwitchGameMethod", e)
                            })
                    }
                },
                getCurrentGameMethod: function () {
                    return this.currentGameMethod
                },
                setup: function (e, t) {
                    var a, n = this,
                        l = n.buildPath(e),
                        i = function () {
                        };
                    a = arguments.length > 0 ? arguments[arguments.length - 1] : i,
                    $.isFunction(a) || (a = i),
                    n.isSetuped(e) || $.ajax({
                        url: l,
                        type: "GET",
                        cache: !0,
                        dataType: "script",
                        success: function () {
                            n.loadedHas[l] = !0,
                                a.call(n)
                        },
                        error: function (e, t) {
                            alert(translate.FailLoaded + "\n" + l + "\n" + translate.ErrorTypes + t)
                        }
                    })
                },
                buildPath: function (e) {
                    var t = this,
                        a = t.defConfig.basePath,
                        n = t.defConfig.baseNamespace,
                        l = a + n + e + ".js";
                    return l
                },
                isSetuped: function (e) {
                    var t = this,
                        a = t.loadedHas,
                        n = t.buildPath(e);
                    return a.hasOwnProperty(n)
                },
                setSetuped: function (e, t, a) {
                },
                getGameConfig: function () {
                },
                getName: function () {
                    return this.name
                },
                setName: function (e) {
                    this.name = e
                },
                setCurrentNumber: function (e) {
                    this.currentNumber = e
                },
                getCurrentNumber: function () {
                    return this.currentNumber
                },
                editSubmitData: function (e) {
                    return e
                },
                parseBallData: function (t, a) {
                    var n = e.Games,
                        l = {},
                        r = [],
                        s = [],
                        o = n.getCurrentGameOrder();
                    r = a.split("_");
                    for (var c = r.length - 1; c >= 0; c--) {
                        s = [],
                            singel = r[c].split("-");
                        for (var d = singel.length - 1; d >= 0; d--) s.push(singel[d].split(""));
                        l = {
                            type: t,
                            original: s,
                            lotterys: s,
                            moneyUnit: i.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: i.getCurrentGameStatistics().getMultip(),
                            onePrice: i.getCurrentGameStatistics().getOnePrice(),
                            num: s.length
                        },
                            l.amountText = i.getCurrentGameStatistics().formatMoney(l.num * l.moneyUnit * l.multiple * l.onePrice),
                            o.add(l)
                    }
                },
                parseDataFormUrl: function () {
                    var t = this,
                        a = e.Games.getCurrentGameTypes(),
                        n = $.trim(e.util.getParam("gametype")),
                        l = $.trim(e.util.getParam("ball"));
                    n && a.changeMode(n),
                    l && t.parseBallData(n, l)
                },
                showLotteryDescription: function (e) {
                    var t = "",
                        a = $("#J-lottery-info-status");
                    !e || e.length <= 0 || (t = 2 == e.length ? '<span class="f-left ml10">' + e[0] + '</span><span class="f-right mr10">' + e[1] + "</span>" : '<span class="f-left ml10">' + e[0] + "</span><span>" + e[1] + '</span><span class="f-right mr10">' + e[2] + "</span>", a.html(t))
                }
            },
            d = e.Class(c, a);
        d.defConfig = l,
            e[t] = d
    }(phoenix, "Game", phoenix.Event),
    function (e, t, a, n) {
        var l = {
                name: "",
                UIContainer: "#J-balls-main-panel",
                ballsDom: ".ball-number",
                ballAidDom: ".ball-aid-hot",
                ballCurrentCls: "ball-number-current",
                betsDom: ".bets-number",
                betAidDom: ".bets-aid-hot",
                betCurrentCls: "bets-number-current",
                methodMassageDom: ".prompt .method-tip",
                methodExampleDom: ".prompt .example-tip",
                hotColdUrl: "simulatedata/frequency.php",
                randomBetsNum: 500,
                danshiLimitBall: 9999
            },
            r = e.Games,
            s = {
                init: function (e) {
                    var t = this;
                    t.UIContainer = $(e.UIContainer),
                        t.container = $("<div></div>").appendTo(t.UIContainer),
                        t.buildUI(),
                        t.hide(),
                        t.balls = [],
                        t.rebuildData(),
                        t.periodData = [],
                        t.ballsDom = t.getBallsDom(),
                        t.ballsAidDom = t.getBallsAidDom(),
                        t.isBallsComplete = !1,
                        t.addEvent("updateData",
                            function (e, t) {
                                var a = this,
                                    t = a.isBallsComplete ? t : {
                                        lotterys: [],
                                        original: []
                                    };
                                r.getCurrentGameStatistics().updateData(t, a.getGameMethodName()),
                                    a.batchSetBallDom()
                            }),
                        t.addEvent("afterReset",
                            function () {
                                t.exeEvent_cancelCurrentButton()
                            }),
                        t.addEvent("afterSetBallData",
                            function (e, a, n, l) {
                                t.exeEvent_cancelCurrentButton(a, n, l)
                            })
                },
                savePeriodData: function (e) {
                    this.periodData = e
                },
                getPeriodData: function (e) {
                    return this.periodData
                },
                getBallsDom: function () {
                    var e = this,
                        t = e.defConfig,
                        a = e.balls;
                    return a.length < 1 ? [] : e.ballsDom ||
                        function () {
                            for (var n = e.container.find(t.ballsDom), l = 0, i = n.length, r = [], s = [], o = a[0].length; l < i; l++) r.push(n[l]),
                            (l + 1) % o != 0 && l + 1 != i || (s.push(r), r = []);
                            return s
                        }()
                },
                updataGamesInfo: function () {
                    var e = this,
                        t = e.getGameMethodName(),
                        a = r.getCurrentGame(),
                        l = a.getGameConfig().getInstance().getChildData(t).faceparamter;
                    typeof l !== n && e.methodTip({
                        tips: l.methoddesc,
                        example: l.methodexample
                    }),
                        t.indexOf("gundonghouerzhixuan") >= 0 || t.indexOf("gundonghousanzhixuan") >= 0 || phoenix.Games.currentGame.defConfig.basePath.indexOf("vitenam-new") >= 0 && (t.indexOf("erxing") >= 0 || t.indexOf("sanxing") >= 0) ? $("#J-play-select #announce").show(0) : $("#J-play-select #announce").hide(0)
                },
                getChart: function (e, t) {
                    var a = this,
                        n = $.trim(e),
                        l = "simulatedata/historyballs.php?type=" + e + "&extent=currentFre&line=5&lenth=30&lotteryid=99101&userid=31";
                    "undefined" == typeof r.cacheData.charts && (r.cacheData.charts = {}),
                        "undefined" != typeof r.cacheData.charts[n] ? t && t(r.cacheData.charts[n]) : $.ajax({
                            url: l,
                            dataType: "json",
                            success: function (e) {
                                if (1 == e.isSuccess) e.data.historyBalls,
                                    r.cacheData.charts[n] = e.data.historyBalls,
                                t && t(r.cacheData.charts[n]);
                                else try {
                                    window.console && console.log("服务器异常,请刷新页面重试。")
                                } catch (a) {
                                }
                            }
                        }),
                        a.fireEvent("afterUpdataGamesInfo", e)
                },
                methodTip: function (e) {
                    var t = this,
                        a = t.defConfig;
                    $(a.methodMassageDom).html(e.tips),
                        $(a.methodExampleDom).html(e.example)
                },
                getHotCold: function (e, t, a, n) {
                    return
                },
                reBuildHotCold: function (e, t) {
                    var a, n = this,
                        l = [],
                        i = [],
                        r = [],
                        s = 0,
                        o = 0;
                    if ("lost" == t) for (var c = 0; c < e.length; c++) {
                        a = e[c];
                        for (var d in a) {
                            var u = a[d].currentNum,
                                m = a[d].pinlv;
                            0 == u ? r = [[m, 0]] : m > r[0][0] ? r = [[m, u]] : m == r[0][0] && r.push([m, u]),
                                n.setBallAidData(c, u, m)
                        }
                        for (var f = 0; f < r.length; f++) n.setBallAidData(c, r[f][1], r[f][0], "ball-aid-hot")
                    } else if ("fre" == t) for (var c = 0; c < e.length; c++) {
                        a = e[c];
                        for (var d in a) {
                            var u = a[d].currentNum,
                                m = a[d].pinlv;
                            l.push([m, u]),
                                i.push(m),
                                n.setBallAidData(c, u, m)
                        }
                        s = Math.min.apply(Math, i),
                            o = Math.max.apply(Math, i);
                        for (var f = 0; f < l.length; f++) l[f][0] == s && n.setBallAidData(c, l[f][1], l[f][0], "ball-aid-cold"),
                        l[f][0] == o && n.setBallAidData(c, l[f][1], l[f][0], "ball-aid-hot");
                        l = [],
                            i = []
                    }
                },
                initHotColdEvent: function () {
                    var e = this,
                        t = 30,
                        a = "lost",
                        n = ".game-frequency-type li",
                        l = ".game-frequency-lost-length a, .game-frequency-fre-length a";
                    e.container.on("click", n,
                        function () {
                            var e,
                                n = ($(this).parent(), r.getCurrentGame().getCurrentGameMethod().getGameMethodName());
                            $(this).hasClass("fre") ? (a = $(this).attr("data-type"), t = 30, e = "30期") : $(this).hasClass("lost") && (a = $(this).attr("data-type"), t = "currentFre", e = "当前遗漏"),
                                r.getCurrentGame().getCurrentGameMethod().getHotCold(n, t, a, e)
                        }),
                        e.container.on("click", l,
                            function () {
                                var e = ($(this).parent(), r.getCurrentGame().getCurrentGameMethod().getGameMethodName()),
                                    t = $(this).html(),
                                    n = $(this).attr("data-type");
                                r.getCurrentGame().getCurrentGameMethod().getHotCold(e, n, a, t)
                            })
                },
                reSelect: function (e) {
                    var t, a, n, l, i, r, s = this,
                        o = (s.getGameMethodName(), e),
                        c = !1;
                    for (s.reSet(), t = 0, a = o.length; t < a; t++) for (n = 0, l = o[t].length; n < l; n++) i = t,
                        r = o[t][n],
                        s.setBallData(i, r, 1),
                        c = !0;
                    c && s.updateData()
                },
                makePostParameter: function (e) {
                    for (var t = [], a = e.length, n = 0; n < a; n++) t = t.concat(e[n].join("&"));
                    return t.join(",")
                },
                arrIndexOf: function (e, t) {
                    for (var a = 0,
                             n = 0; n < t.length; n++) t[n] == e && (a += 1);
                    return a || -1
                },
                rebuildData: function () {
                },
                getBallData: function () {
                    return this.balls
                },
                setBallData: function (e, t, a) {
                    var n = this,
                        l = n.getBallData();
                    n.fireEvent("beforeSetBallData", e, t, a, l),
                    e >= 0 && e < l.length && t >= 0 && t < l[0].length && (l[e][t] = a),
                        n.fireEvent("afterSetBallData", e, t, a)
                },
                getBetData: function () {
                    return this.bets
                },
                setBetData: function (e, t, a) {
                    var n = this,
                        l = n.getBetData();
                    n.fireEvent("beforeSetBetData", e, t, a),
                    e >= 0 && e < l.length && t >= 0 && t < l[0].length && (l[e][t] = a),
                        n.fireEvent("afterSetBetData", e, t, a)
                },
                setBallAidData: function (e, t, a, n) {
                    var l = this,
                        i = "ball-aid",
                        r = l.getBallsAidDom(),
                        n = n ? i + " " + n : i;
                    e >= 0 && e < r.length && r[e] && t >= 0 && t < r[e].length && r[e][t] && (r[e][t].innerHTML = a, r[e][t].className = n)
                },
                getBallsAidDom: function () {
                    var e = this,
                        t = e.defConfig,
                        a = e.balls;
                    return a.length < 1 ? [] : e.ballsAidDom ||
                        function () {
                            var n = e.container.find(t.ballAidDom),
                                l = 0,
                                r = a.length,
                                s = [];
                            for (i = 0; i < r; i++) {
                                var o = a[i],
                                    c = o.length,
                                    d = [];
                                for (j = 0; j < c; j++) n[l] && d.push(n[l]),
                                    l++;
                                s.push(d)
                            }
                            return s
                        }()
                },
                reSet: function (e) {
                    var t = this;
                    t.isBallsComplete = !1,
                        t.rebuildData(e),
                        t.updateData(),
                        t.fireEvent("afterReset")
                },
                getGameMethodName: function () {
                    return this.defConfig.name
                },
                show: function () {
                    var e = this;
                    e.fireEvent("beforeShow", e.container),
                        e.container.show(),
                        e.fireEvent("afterShow", e.container)
                },
                hide: function () {
                    var e = this;
                    e.fireEvent("beforeHide", e.container),
                        e.container.hide(),
                        e.fireEvent("afterHide", e.container)
                },
                exeEvent: function (e, t) {
                    var a = this;
                    $.isFunction(a["exeEvent_" + e.action]) && a["exeEvent_" + e.action].call(a, e, t)
                },
                exeEvent_addValue: function (e, t) {
                    var a = this,
                        n = a.bets,
                        l = Number(e.row),
                        i = e.bounds,
                        r = n[l],
                        s = (r.length, $(t)),
                        o = +s.parent().prev().val();
                    switch (i) {
                        case "Clear":
                            s.parent().prev().val("");
                            break;
                        default:
                            var c = +i.split("+")[1];
                            s.parent().prev().val(o + c)
                    }
                    a.exeEvent_bets(e, s.parent().prev()),
                        a.updateData()
                },
                exeEvent_addplan: function (e, t) {
                    var a = this;
                    r.getCurrentGamePlan().add(a, e, t)
                },
                exeEvent_batchSetBall: function (e, t) {
                    var a = this,
                        n = a.balls,
                        l = Number(e.row),
                        i = Number(e.cell),
                        s = e.bound,
                        o = n[l],
                        c = 0,
                        d = isNaN(i) ? o.length : 0,
                        u = n.length,
                        m = "undefined" == typeof e.start ? 0 : Number(e.start),
                        f = Math.ceil((d - m) / 2 + m),
                        p = $(t),
                        c = m;
                    if ("N115" == r.getCurrentGame().name && (f -= 1), isNaN(i)) for (; c < d; c++) a.setBallData(l, c, -1);
                    else for (; c < u; c++) n[c][i] = -1;
                    for (; c < d; c++) a.setBallData(l, c, -1);
                    switch (s) {
                        case "all":
                            if (isNaN(i)) for (c = m; c < d; c++) a.setBallData(l, c, 1);
                            else for (c = m; c < u; c++) a.setBallData(c, i, 1);
                            break;
                        case "big":
                            for (c = f; c < d; c++) a.setBallData(l, c, 1);
                            break;
                        case "small":
                            for (c = m; c < f; c++) a.setBallData(l, c, 1);
                            break;
                        case "odd":
                            for (c = m; c < d; c++) (c + 1) % 2 != 1 && a.setBallData(l, c, 1);
                            break;
                        case "even":
                            for (c = m; c < d; c++) (c + 1) % 2 == 1 && a.setBallData(l, c, 1);
                            break;
                        case "none":
                    }
                    p.addClass("current"),
                        a.updateData()
                },
                exeEvent_cancelCurrentButton: function (e, t, a) {
                    var n = this,
                        l = n.container,
                        i = "undefined" != typeof e ? l.find(".ball-control").eq(e) : l.find(".ball-control");
                    i.find("a").removeClass("current")
                },
                exeEvent_ball: function (e, t) {
                    var a = this,
                        l = $(t),
                        i = a.defConfig.ballCurrentCls;
                    if (e.value != n && e.row != n) "a" == l.get(0).nodeName.toLowerCase() ? l.hasClass(i) ? a.setBallData(Number(e.row), Number(e.value), -1) : (a.fireEvent("beforeSelect", e), a.setBallData(Number(e.row), Number(e.value), 1)) : l.parent().hasClass(i) ? a.setBallData(Number(e.row), Number(e.value), -1) : (a.fireEvent("beforeSelect", e), a.setBallData(Number(e.row), Number(e.value), 1));
                    else try {
                        window.console && console.log("GameMethod.exeEvent_ball: lack param")
                    } catch (s) {
                    }
                    try {
                        r.getCurrentGame().fireEvent("afterSelectBall", e)
                    } catch (s) {
                    }
                    a.updateData()
                },
                exeEvent_bets: function (e, t) {
                    var a = this,
                        l = $(t),
                        i = a.defConfig.betCurrentCls;
                    if (e.value != n && e.row != n) l.hasClass(i) ? a.setBetData(Number(e.row), Number(e.value), -1) : (a.fireEvent("beforeSelect", e), a.setBetData(Number(e.row), Number(e.value), +l.val()));
                    else try {
                        window.console && console.log("GameMethod.exeEvent_bets: lack param")
                    } catch (r) {
                    }
                    a.updateData()
                },
                batchSetBallDom: function () {
                    for (var e = this,
                             t = e.defConfig,
                             a = t.ballCurrentCls,
                             n = e.balls,
                             l = 0,
                             i = 0,
                             r = n.length,
                             s = 0,
                             o = e.getBallsDom(), c = ""; l < r; l++) for (s = n[l].length, i = 0; i < s; i++) 1 == n[l][i] ? (c = o[l][i].className, c = (" " + c + " ").replace(" " + a, ""), c += " " + a, o[l][i].className = c.replace(/\s/, "")) : (c = o[l][i].className, c = (" " + c + " ").replace(" " + a, ""), o[l][i].className = c.replace(/\s/, ""))
                },
                makeSubmitParameter: function (e) {
                    var t = r.getCurrentGame().getName(),
                        a = $.extend(!0, [], e);
                    if ("N115" == t) for (var n = 0; n < a.length; n++) {
                        for (var l = 0; l < a[n].length; l++) a[n][l] = Number(a[n][l]) < 10 ? "0" + a[n][l] : a[n][l];
                        a[n] = a[n].join("&")
                    } else for (var n = 0; n < a.length; n++) a[n] = a[n].join("&");
                    return a.join("|")
                },
                updateData: function () {
                    var e = this,
                        t = e.getLottery(),
                        a = e.getOriginal();
                    e.fireEvent("updateData", {
                        lotterys: t,
                        original: a
                    })
                },
                getOriginal: function () {
                    for (var e = this,
                             t = e.getBallData(), a = t.length, n = t[0].length, l = 0, i = 0, r = [], s = []; l < a; l++) {
                        for (r = [], i = 0; i < n; i++) t[l][i] > 0 && r.push(i);
                        s.push(r)
                    }
                    return s
                },
                getLottery: function (e) {
                    for (var t, a = this,
                             n = a.getBallData(), l = 0, i = n.length, r = !0, s = 0, o = 0, c = [], d = 1, u = 0; l < i; l++) {
                        for (c[l] = [], t = n[l], o = t.length, r = !0, u = 0, s = 0; s < o; s++) t[s] > 0 && (r = !1, e || c[l].push(s), u++);
                        if (r) return a.isBallsComplete = !1,
                            [];
                        d *= u
                    }
                    return a.isBallsComplete = !0,
                        e ? d : a.isBallsComplete ? a.combination(c) : []
                },
                removeSame: function (e) {
                    var t, a = 0,
                        n = this,
                        l = this.getBallData()[0].length;
                    e.length;
                    for (t = Math.floor(Math.random() * l); a < e.length; a++) if (t == e[a]) return arguments.callee.call(n, e);
                    return t
                },
                removeArraySame: function (e) {
                    var t, a = this,
                        n = 0,
                        l = a.getBallData()[0].length;
                    data.length;
                    for (t = Math.floor(Math.random() * l); n < e.length; n++) if (t == e[n]) return arguments.callee.call(a, e);
                    return t
                },
                getRandomBetsNum: function () {
                    return this.defConfig.randomBetsNum
                },
                createRandomNum: function () {
                    for (var e = this,
                             t = [], a = e.getBallData().length, n = e.getBallData()[0].length, l = 0; l < a; l++) t[l] = [Math.floor(Math.random() * n)],
                        t[l].sort(function (e, t) {
                            return e > t ? 1 : -1
                        });
                    return t
                },
                checkRandomBets: function (e, t) {
                    var a = this,
                        n = "undefined" == typeof e,
                        e = e || {},
                        l = [],
                        t = t || 0,
                        i = (a.getBallData().length, a.getBallData()[0].length, r.getCurrentGameOrder().getTotal().orders);
                    if (l = a.createRandomNum(), Number(t) > Number(a.getRandomBetsNum())) return l;
                    if (n) for (var s = 0; s < i.length; s++) if (i[s].type == a.defConfig.name) {
                        var o = i[s].original.join("");
                        e[o] = o
                    }
                    return e[l.join("")] ? (t++, arguments.callee.call(a, e, t)) : l
                },
                randomNum: function () {
                    var e = this,
                        t = [],
                        a = null,
                        n = (e.getBallData(), e.defConfig.name, []),
                        l = [];
                    return t = e.checkRandomBets(),
                        l = t,
                        n = e.combination(l),
                        a = {
                            type: r.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: l,
                            lotterys: n,
                            moneyUnit: r.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: r.getCurrentGameStatistics().getMultip(),
                            onePrice: r.getCurrentGameStatistics().getOnePrice(),
                            num: n.length
                        },
                        a.amountText = r.getCurrentGameStatistics().formatMoney(a.num * a.moneyUnit * a.multiple * a.onePrice),
                        a
                },
                setOrderIndex: function (e) {
                    var t = this;
                    t.lists = e
                },
                getOrderIndex: function () {
                    var e = this;
                    return e.lists
                },
                getNum: function () {
                    var e = this,
                        t = [],
                        a = e.getBallData().length,
                        n = (e.getBallData()[0].length, e.getTimes()),
                        l = e.getOrderIndex()[n],
                        i = e.keep[l];
                    if (n >= 0 && i.length > 0 && a >= i.length) for (var r = 0; r < a; r++) t[r] = [i[r]],
                        t[r].sort(function (e, t) {
                            return e > t ? 1 : -1
                        });
                    return t
                },
                getTimes: function () {
                    var e = this;
                    return e.num
                },
                setTimes: function (e) {
                    var t = this;
                    t.num = e
                },
                checkBets: function (e, t) {
                    var a = this,
                        n = "undefined" == typeof e,
                        e = e || {},
                        l = [],
                        t = t || 0,
                        i = (a.getBallData().length, a.getBallData()[0].length, r.getCurrentGameOrder().getTotal().orders);
                    if (l = a.getNum(), n) for (var s = 0; s < i.length; s++) if (i[s].type == a.defConfig.name) {
                        var o = i[s].original.join("");
                        e[o] = o
                    }
                    return e[l.join("")] ? (t++, arguments.callee.call(a, e, t)) : l
                },
                getNumOrder: function (e) {
                    var t = this,
                        a = [],
                        n = null,
                        l = (t.getBallData(), t.defConfig.name, []),
                        i = [];
                    return t.setTimes(e),
                        a = t.checkBets({}),
                        i = a,
                        l = t.combination(i),
                        n = {
                            original: i,
                            lotterys: l,
                            moneyUnit: r.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: r.getCurrentGameStatistics().getMultip(),
                            onePrice: r.getCurrentGameStatistics().getOnePrice()
                        },
                        n.amountText = r.getCurrentGameStatistics().formatMoney(n.num * n.moneyUnit * n.multiple * n.onePrice),
                        n
                },
                checkTestUserAddOrderNumber: function (e) {
                    var e = e || 3;
                    return window.GamesInitData.isTestUser && r.getCurrentGameSubmit().getSubmitData().lt_total_nums > e - 1
                },
                randomLotterys: function (e) {
                    var t, a = this,
                        n = 0,
                        l = "",
                        i = "undefined" != typeof a.betTypes,
                        s = 0;
                    for (r.getCurrentGameOrder().cancelSelectOrder(); n < e; n++) l = a.randomNum(),
                    i && (t = a.betTypes, s = Math.floor(Math.random() * t.length), "" !== a.betTypes[s] ? (l.type = t[s], l.num = a.getBetsNumber(s)) : (s = s + 1 <= t.length ? s + 1 : s - 1, l.type = t[s], l.num = a.getBetsNumber(s))),
                        l.subType = a.getSubmitType(),
                    a.checkTestUserAddOrderNumber() && (l = {
                        overTest: !0
                    }),
                        r.getCurrentGameOrder().add(l)
                },
                getBetsNumber: function (e) {
                },
                formatParam: function (e) {
                    for (var t, a = $.trim(e).split("&"), n = 0, l = a.length, i = {}; n < l; n++) t = a[n].split("="),
                    t.length > 0 && (2 == t.length ? i[t[0]] = t[1] : i[t[0]] = "");
                    return i
                },
                buildLotterys: function (e) {
                    var t = this,
                        a = 0,
                        l = 0,
                        i = "",
                        s = !0,
                        o = e.length,
                        c = t.getBetData();
                    t.setOrderIndex(e);
                    for (var d = r.getCurrentGameStatistics().getMultip(); a < o; a++) c[e[a]].forEach(function (e, a) {
                        if (e > 0) {
                            s = !1,
                                i = t.getNumOrder(l);
                            var o = i.original[i.original.length - 1];
                            o !== n && o[0] !== n ? (i.type = t.betTypes[a], i.subType = t.getSubmitType(), i.num = t.getBetsNumber(a), i.multiple = e * d, t.checkTestUserAddOrderNumber() && (i = {
                                overTest: !0
                            })) : i = t.getNumOrder(-1),
                                r.getCurrentGameOrder().add(i)
                        }
                    }),
                    s && (i = t.getNumOrder(-1), r.getCurrentGameOrder().add(i)),
                        l++;
                    t.fireEvent("afterAdd")
                },
                getHistoryBallLength: function () {
                    var e = r.getCurrentGameStatistics().getPeriodData().ball || r.getCurrentGameStatistics().getPeriodData().lastballs;
                    return e.split(",").length
                },
                getIsNorth: function () {
                    var e = window.GamesInitData.areatype ? window.GamesInitData.areatype[0].type : -1;
                    return 1 !== e
                },
                ballsErrorTip: function () {
                },
                countBallsNum: function () {
                    for (var e = this,
                             t = 0,
                             a = e.getBallData(), n = a.length - 1; n >= 0; n--) if ("[object Array]" == Object.prototype.toString.call(a[n]) && a[n].length > 0) for (var l = a[n].length - 1; l >= 0; l--) 1 == a[n][l] && t++;
                    else 1 == a[n] && t++;
                    return t
                },
                countBallsNumInLine: function (e) {
                    var t = this,
                        a = 0,
                        n = t.getBallData();
                    if ("[object Array]" == Object.prototype.toString.call(n[e]) && n[e].length > 0) for (var l = n[e].length - 1; l >= 0; l--) 1 == n[e][l] && a++;
                    else 1 == n[e] && a++;
                    return a || -1
                },
                LimitMaxBalls: function (e) {
                    var t = this,
                        a = 0;
                    t.getBallData(),
                        Number(a);
                    return a = t.countBallsNum(),
                    a > e
                },
                fullToHalf: function (e) {
                    var t = e || "",
                        a = "";
                    if (t) for (var n = 0; n <= t.length; n++) {
                        var l = t.charCodeAt(n);
                        a += 12288 == l ? " " : l > 65280 && l < 65375 ? String.fromCharCode(l - 65248) : String.fromCharCode(l)
                    }
                    return a
                },
                appendProgramToDom: function (e, t, a) {
                    var n = e.length || 0,
                        a = a || "",
                        l = $(t);
                    if (n && l.length && a) for (var i = 0; i < n; i++) {
                        var r = e[i],
                            s = a;
                        for (key in r) {
                            var o = "{{" + key + "}}";
                            s = s.replace(new RegExp(o, "g"), r[key])
                        }
                        l.prepend(s)
                    }
                },
                updateProgramStatus: function (e, t, a) {
                    var n = $(e).children().eq(t);
                    n.length && a
                },
                appendChaseToDom: function (e, t, a) {
                    var n = e.length || 0,
                        a = a || "",
                        l = $(t);
                    if (n && l.length && a) for (var i = 0; i < n; i++) {
                        var r = e[i],
                            s = a;
                        for (key in r) {
                            var o = "{{" + key + "}}";
                            s = s.replace(new RegExp(o, "g"), r[key])
                        }
                        l.prepend(s)
                    }
                },
                updateChaseStatus: function (e, t, a) {
                    var n = $(e).children().eq(t);
                    n.length && a
                },
                checkBallIsComplete: function () {
                    for (var e, t = this,
                             a = t.getBallData(), n = 0, l = a.length, i = !0, r = 0, s = 0; n < l; n++) {
                        for (e = a[n], s = e.length, i = !0, r = 0; r < s; r++) e[r] > 0 && (i = !1);
                        if (i) return t.isBallsComplete = !1,
                            !1
                    }
                    return t.isBallsComplete = !0
                },
                combine: function (e, t, a) {
                    var n = [],
                        l = 0;
                    if (a = a || [], 0 == t) return [a];
                    for (; l <= e.length - t; l++) n = n.concat(arguments.callee(e.slice(l + 1), t - 1, a.slice(0).concat(e[l])));
                    return n
                },
                combination: function (e) {
                    if (e.length < 1) return [];
                    var t, a, n, l = (e[0].length, e.length),
                        i = [],
                        r = [],
                        s = [];
                    for (i[t = l] = 1; t--;) i[t] = i[t + 1] * e[t].length;
                    for (n = i[0], t = 0; t < n; t++) {
                        for (s = [], a = 0; a < l; a++) s[a] = e[a][~~(t % i[a] / i[a + 1])];
                        r[t] = s
                    }
                    return r
                },
                checkLimitBall: function (e) {
                    /*var t = this,
                        a = r.getCurrentGameMessage(),
                        n = Number(e.lotterys.length) || 0;
                    n > t.defConfig.danshiLimitBall && (e.lotterys = [], a.show({
                        mask: !0,
                        content: ['<div class="bd text-center">', '<div class="pop-waring">', '<i class="ico-waring"></i>', '<div style="display:inline-block;*zoom:1;*display:inline;vertical-align:middle">最多支持' + t.defConfig.danshiLimitBall + "注单式内容，请调整！</div>", "</div>", "</div>"].join(""),
                        closeIsShow: !0,
                        closeFun: function() {
                            this.hide()
                        }
                    }))*/
                },
                removeArrFormTarget: function (e, t) {
                    for (var a = $.trim(e.join(" ")), n = 0; n < t.length; n++) a = a.replace(t[n].join(","), "");
                    return a = $.trim(a),
                        a ? a.split(/\s+/) : []
                },
                mathCorretBet: function (e, t) {
                    var a = this,
                        n = [].concat(e);
                    return 3 == t ? n = a.copySameArrappend(e, 3) : 4 == t ? n = a.copySameArrappend(e, 6) : 5 == t ? n = a.copySameArrappend(e, 10) : t <= 1 && (n = []),
                        n
                },
                copySameArrappend: function (e, t) {
                    for (var a = [], n = t - 1; n >= 0; n--) a = a.concat(e);
                    return a
                },
                checkPositionRules: function () {
                    var e = this,
                        t = 0,
                        a = e.container.find("#J-postion-select"),
                        n = a.find("input");
                    return n.each(function (e) {
                        $(this).prop("checked") && t++
                    }),
                        t
                },
                bindEventInstance: function () {
                    var e = this,
                        t = e.container.find("#J-postion-select");
                    t.on("change", "input",
                        function () {
                            e.handleDigitstrType("", $(this).attr("data-position")),
                                e.updateData()
                        })
                },
                getSubmitType: function () {
                    return "digital"
                },
                setCurrentDigitstr: function (e) {
                    var t = this;
                    t.digitstrType = e
                },
                getCurrentDigitstr: function () {
                    var e = this;
                    return e.digitstrType
                },
                handleDigitstrType: function (e, t) {
                    var a = this,
                        n = e || a.getCurrentDigitstr();
                    return n.indexOf(t) != -1 ? n = n.replace(t, "") : n += t,
                        a.setCurrentDigitstr(n),
                        n
                },
                pasteValidate: function (e, t) {
                    t !== t.replace(/[^0-9]/g, "") ? $(e.target).val(t.replace(/[^0-9]/g, "")) : (e.returnValue = !1, e.preventDefault && e.preventDefault())
                },
                refreshHistory: function (e) {
                    e && r.getCurrentGameStatistics().savePeriodData(e);
                    var t = "",
                        a = "",
                        n = "",
                        l = "",
                        e = e || r.getCurrentGameStatistics().getPeriodData(),
                        i = [],
                        s = r.getCurrentGame().name,
                        o = r.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                        c = $("#J-period-container");
                    if (a += ['<table class="table text-center">', "<tbody>"].join(""), e && e.historyBall) {
                        for (t in e.historyBall) n = e.historyBall[t],
                            a += ["<tr>", "<td>" + n.issue + "</td>", "<td>" + n.code + "</td>", "</tr>"].join("");
                        if ("ssc" == s) {
                            if (o.indexOf("housan") != -1) {
                                a = ['<table class="table text-center">', "<tbody>"].join("");
                                for (t in e.historyBall) n = e.historyBall[t],
                                    i = n.code.split(" "),
                                    l = i[2] == i[3] || i[2] == i[4] || i[3] == i[4] ? translate.Group3 : translate.Group6,
                                    a += ["<tr>", "<td>" + n.issue + "</td>", "<td>" + n.code + "</td>", "<td>" + l + "</td>", "</tr>"].join("")
                            }
                            if (o.indexOf("zhongsan") != -1) {
                                a = ['<table class="table text-center">', "<tbody>"].join("");
                                for (t in e.historyBall) n = e.historyBall[t],
                                    i = n.code.split(" "),
                                    l = i[1] == i[2] || i[1] == i[3] || i[2] == i[3] ? translate.Group3 : translate.Group6,
                                    a += ["<tr>", "<td>" + n.issue + "</td>", "<td>" + n.code + "</td>", "<td>" + l + "</td>", "</tr>"].join("")
                            }
                            if (o.indexOf("qiansan") != -1) {
                                a = ['<table class="table text-center">', "<tbody>"].join("");
                                for (t in e.historyBall) n = e.historyBall[t],
                                    i = n.code.split(" "),
                                    l = i[0] == i[1] || i[0] == i[2] || i[1] == i[2] ? translate.Group3 : translate.Group6,
                                    a += ["<tr>", "<td>" + n.issue + "</td>", "<td>" + n.code + "</td>", "<td>" + l + "</td>", "</tr>"].join("")
                            }
                            if (o.indexOf("daxiaodanshuangzu") != -1) {
                                a = ['<table class="table text-center">', "<tbody>"].join("");
                                for (t in e.historyBall) {
                                    n = e.historyBall[t],
                                        i = n.code.split(" "),
                                        l = "";
                                    var d = "";
                                    o.indexOf("houerdaxiaodanshuang") != -1 ? (d += i[3] >= 5 ? "EN" == __LAN__ ? translate.Big + "/" : translate.Big : "EN" == __LAN__ ? translate.Small + "/" : translate.Small, d += i[4] >= 5 ? "EN" == __LAN__ ? translate.Big + "/" : translate.Big : "EN" == __LAN__ ? translate.Small + "/" : translate.Small, d += i[3] % 2 == 1 ? "EN" == __LAN__ ? translate.Odds + "/" : translate.Odds : "EN" == __LAN__ ? translate.Evens + "/" : translate.Evens, d += i[4] % 2 == 1 ? "EN" == __LAN__ ? translate.Odds : translate.Odds : "EN" == __LAN__ ? translate.Evens : translate.Evens) : o.indexOf("qianerdaxiaodanshuang") != -1 && (d += i[0] >= 5 ? "EN" == __LAN__ ? translate.Big + "/" : translate.Big : "EN" == __LAN__ ? translate.Small + "/" : translate.Small, d += i[1] >= 5 ? "EN" == __LAN__ ? translate.Big + "/" : translate.Big : "EN" == __LAN__ ? translate.Small + "/" : translate.Small, d += i[0] % 2 == 1 ? "EN" == __LAN__ ? translate.Odds + "/" : translate.Odds : "EN" == __LAN__ ? translate.Evens + "/" : translate.Evens, d += i[1] % 2 == 1 ? "EN" == __LAN__ ? translate.Odds : translate.Odds : "EN" == __LAN__ ? translate.Evens : translate.Evens),
                                        l += d,
                                        a += ["<tr>", "<td>" + n.issue + "</td>", "<td>" + n.code + "</td>", "<td>" + l + "</td>", "</tr>"].join("")
                                }
                            }
                        }
                    }
                    a += "</tbody></table>",
                        c.html(a)
                },
                getPopupHelper: function (e, t) {
                    var a = '<div class="popup-tools">';
                    return $.each(["Clear", "+10", "+50", "+100", "+500", "+1000", "+2000", "+5000"],
                        function (n) {
                            a += '<button type="button" class="tool-button" data-param="action=addValue&value=' + t + "&row=" + e + "&bounds=" + this + '">' + this + "</button>"
                        }),
                        a += "</div>"
                }
            },
            o = e.Class(s, a);
        o.defConfig = l,
            e[t] = o
    }(phoenix, "GameMethod", phoenix.Event),
    function (e, t, a, n) {
        var l, i = {
                lotteryClose: ['<div class="bd text-center">', '<p class="text-title text-left">非常抱歉，本彩种已休市。<br />请与<#=orderDate#>后再购买</p>', '<div class="lottery-numbers text-left">', '<div class="tltle"><#=lotteryName#> 第<strong class="color-green"><#=lotteryPeriods#></strong>期开奖号码：</div>', '<div class="content">', "<#=lotterys#>", '<a href="#">查看更多&raquo;</a>', "</div>", "</div>", '<dl class="lottery-list">', "<dt>您可以购买以下彩种</dt>", "<#=lotteryType#>", "</dl>", "</div>"].join(""),
                checkProject: ['<div class="bd">', '<ul class="ui-form">', "<li>", '<input type="input" placeholder="方案名称" class="">', "</li>", "<li>", '<label for="question1" class="ui-label">彩种：</label>', '<span class="ui-text-info"><#=lotteryName#></span>', "</li>", "<li>", '<label for="answer1" class="ui-label">详情：</label>', '<div class="textarea" style="font-size:12px;">', "<#=lotteryInfo#>", "</div>", "</li>", "</ul>", "</div>"].join(""),
                checkLotters: ['<div class="bd">', '<ul class="ui-form">', "<li>", '<label for="question1" class="ui-label">彩种：</label>', '<span class="ui-text-info"><#=lotteryName#></span>', '<label for="question1" class="ui-label" style="margin-left:10px;">期号：</label>', '<span class="ui-text-info"><#=lotteryDate#>期</span>', "</li>", "<li>", '<label for="answer1" class="ui-label">详情：</label>', '<div class="textarea" style="font-size:12px;">', "<#=lotteryInfo#>", "</div>", "</li>", "<li>", '<label for="question2" class="ui-label">付款总金额：</label>', '<span class="ui-text-info"><span class="color-red"><#=lotteryamount#></span>元</span>', "</li>", "<li>", '<label for="question2" class="ui-label">付款帐号：</label>', '<span class="ui-text-info"><span class="color-red"><#=lotteryAcc#></span></span>', "</li>", "</ul>", "</div>"].join(""),
                planDetails: ['<div class="bd">', '<ul class="ui-form">', "<li>", '<label for="question1" class="ui-label">方案彩种：</label>', "<#=lotteryname#>", "</li>", "<li>", '<label for="question1" class="ui-label">投注期号：</label>', "<#=issue#>期", "</li>", "<li>", '<label for="question1" class="ui-label">方案名称：</label>', '<input type="text" id="J-plan-name" readonly="readonly" class="input" value="<#=planname#>" placeholder="在此输入方案名称">', "</li>", "<li>", '<label for="answer1" class="ui-label">方案详情：</label>', '<div class="textarea" style="font-size:12px;">', "<#=methodname#><#=codes#>", "</div>", "</li>", "<li>", '<label for="question2" class="ui-label">方案金额：</label>', '<span class="ui-text-info"><span class="color-red"><#=money#></span>元</span>', "</li>", "</ul>", "</div>"].join(""),
                checkPlan: ['<div class="bd">', '<ul class="ui-form">', "<li>", '<label for="question1" class="ui-label">方案彩种：</label>', "<#=lotteryName#>", "</li>", "<li>", '<label for="question1" class="ui-label">方案名称：</label>', '<input type="text" id="J-plan-name" class="input" value="<#=planName#>" placeholder="在此输入方案名称">', "</li>", "<li>", '<label for="answer1" class="ui-label">方案详情：</label>', '<div class="textarea" style="font-size:12px;">', "<#=lotteryInfo#>", "</div>", "</li>", "<li>", '<label for="question2" class="ui-label">方案金额：</label>', '<span class="ui-text-info"><span class="color-red"><#=lotteryamount#></span>元</span>', "</li>", "<li>", '<label for="question2" class="ui-label">付款帐号：</label>', '<span class="ui-text-info"><span class="color-red"><#=lotteryAcc#></span></span>', "</li>", "</ul>", "</div>"].join(""),
                nonSaleTime: ['<div class="bd text-center">', '<p class="text-title text-left">非常抱歉，本彩种未到销售时间。<br />请与<#=orderDate#>后再购买</p>', '<dl class="lottery-list">', "<dt>您可以购买以下彩种</dt>", "<#=lotteryType#>", "</dl>", "</div>"].join(""),
                normal: ['<div class="bd text-center">', '<div class="pop-waring">', '<i class="ico-waring <#=icon-class#>"></i>', '<h4 class="pop-text"><#=msg#><br /></h4>', "</div>", "</div>"].join(""),
                invalidtext: ['<div class="bd text-center">', '<div class="pop-waring">', '<i class="ico-waring <#=icon-class#>"></i>', '<h4 class="pop-text"><#=msg#><br /></h4>', "</div>", "</div>"].join(""),
                betExpired: ['<div class="bd text-center">', '<div class="pop-waring">', '<i class="ico-waring <#=icon-class#>"></i>', '<h4 class="pop-text"><#=msg#><br /></h4>', "</div>", "</div>"].join(""),
                multipleOver: ['<div class="bd text-center">', '<div class="pop-waring">', '<i class="ico-waring <#=icon-class#>"></i>', '<h4 class="pop-text"><#=msg#><br /></h4>', "</div>", "</div>"].join(""),
                pauseBet: ['<div class="bd text-center">', '<div class="pop-waring">', '<i class="ico-waring <#=icon-class#>"></i>', '<h4 class="pop-text"><#=msg#><br /></h4>', "</div>", "</div>"].join(""),
                successTip: ['<div class="bd text-center">', '<div class="pop-title">', '<i class="ico-waring <#=icon-class#>"></i>', '<h4 class="pop-text"><#=msg#><br /></h4>', "</div>", "</div>"].join(""),
                checkBalls: ['<div class="bd text-center">', '<div class="pop-title">', '<i class="ico-waring <#=iconClass#>"></i>', '<h4 class="pop-text">请至少选择一注投注号码！</h4>', "</div>", '<div class="pop-btn ">', '<a href="javascript:void(0);" class="btn closeBtn">关 闭<b class="btn-inner"></b></a>', "</div>", "</div>"].join(""),
                errorTip: ['<div class="bd text-center">', '<div class="pop-title">', '<i class="ico-error"></i>', '<h4 class="pop-text">方案提交失败,<br />请检查网络并重新提交！</h4>', "</div>", '<div class="pop-btn ">', '<a href="javascript:void(0);" class="btn closeBtn">关 闭<b class="btn-inner"></b></a>', "</div>", "</div>"].join(""),
                blockade: ['<div class="bd panel-game-msg-blockade" id="J-blockade-panel-main">', '<form id="J-form-blockade-detail" action="ssc-blockade-detail.php" target="_blank" method="post"></form>', '<div class="game-msg-blockade-text">存在<#=blockadeType#>内容，系统已为您做出 <a href="#" data-action="blockade-detail">最佳处理</a> ，点击<span class="color-red">“确认”</span>完成投注</div>', "<div>", '<div class="game-msg-blockade-line-title">彩种：<#=gameTypeTitle#></div>', '<div class="game-msg-blockade-line-title">期号：<#=currentGameNumber#></div>', "</div>", '<div id="J-game-panel-msg-blockade-0">', '<div class="game-msg-blockade-cont" id="J-msg-panel-submit-blockade-error0"><#=blockadeData0#></div>', "</div>", '<div class="game-msg-blockade-panel-money">', '<div><b>付款总金额：</b><span class="color-red"><b id="J-money-blockade-adjust"><#=amountAdjust#></b></span> 元&nbsp;&nbsp;&nbsp;&nbsp;<span style="display:<#=display#>"><b>减少投入：</b><span class="color-red"><b id="J-money-blockade-change"><#=amountChange#></b></span> 元</span></div>', "<div><b>付款账号：</b><#=username#></div>", "</div>", "<div>", '<p class="text-note">购买后请您尽量避免撤单，如撤单将收取手续费：￥<span class="handlingCharge">0.00</span>元</p>', '<p class="text-note">本次投注，若未涉及到付款金额变化，将不再提示</p>', "</div>", '<ul class="textarea cancel-bets clearfix" style="font-size:12px;margin-top:10px;">', '<li><span class="">奖期</span><span class="">撤单手续费</span></li>', "<li><span>2312321312</span><span>123131312313</span></li>", "<li><span>2312321312</span><span>123131312313</span></li>", "<li><span>2312321312</span><span>123131312313</span></li>", "<li><span>2312321312</span><span>123131312313</span></li>", "<li><span>2312321312</span><span>123131312313</span></li>", "<li><span>2312321312</span><span>123131312313</span></li>", "<li><span>2312321312</span><span>123131312313</span></li>", "<li><span>2312321312</span><span>123131312313</span></li>", "<li></li>", "</ul>", "</div>"].join("")
            },
            r = null,
            s = e.Games;
        "undefined" == typeof translate && (window.translate = parent.GamesInitData.multilingual);
        var o = {
                init: function (t) {
                    var a = this;
                    a.win = new e.util.MiniWindow({
                        cls: "pop w-9"
                    }),
                        a.mask = e.util.Mask.getInstance(),
                        a.reSet(),
                        a.win.addEvent("afterHide",
                            function () {
                                a.reSet()
                            }),
                        this.defConfig = {
                            lotteryClose: ['<div class="bd text-center">', '<p class="text-title text-left"' + translate.defConfig.LotteryClose[0] + "<br />" + translate.defConfig.Pls + "<#=orderDate#>" + translate.defConfig.LotteryClose[1] + "</p>", '<div class="lottery-numbers text-left">', '<div class="tltle"><#=lotteryName#> ' + translate.defConfig.LotteryName[0] + '<strong class="color-green"><#=lotteryPeriods#></strong>' + translate.defConfig.LotteryName[1] + "</div>", '<div class="content">', "<#=lotterys#>", '<a href="#">' + translate.defConfig.Loadmore + "&raquo;</a>", "</div>", "</div>", '<dl class="lottery-list">', "<dt>" + translate.defConfig.LotteryCloseInfo + "</dt>", "<#=lotteryType#>", "</dl>", "</div>"].join(""),
                            checkProject: ['<div class="bd">', '<ul class="ui-form">', "<li>", '<input type="input" placeholder="' + translate.defConfig.CaseName + '" class="">', "</li>", "<li>", '<label for="question1" class="ui-label">' + translate.defConfig.Types + "</label>", '<span class="ui-text-info"><#=lotteryName#></span>', "</li>", "<li>", '<label for="answer1" class="ui-label">' + translate.defConfig.DetailInfo + "</label>", '<div class="textarea" style="font-size:12px;">', "<#=lotteryInfo#>", "</div>", "</li>", "</ul>", "</div>"].join(""),
                            checkLotters: ['<div class="bd">', '<ul class="ui-form">', "<li>", '<label for="question1" class="ui-label">' + translate.defConfig.Types + "</label>", '<span class="ui-text-info"><#=lotteryName#></span>', '<label for="question1" class="ui-label" style="margin-left:10px;">' + translate.defConfig.Periods + "</label>", '<span class="ui-text-info"><#=lotteryDate#>' + translate.defConfig.Period + "</span>", "</li>", "<li>", '<label for="answer1" class="ui-label">' + translate.defConfig.DetailInfo + "</label>", '<div class="textarea" style="font-size:12px;">', "<#=lotteryInfo#>", "</div>", "</li>", "<li>", '<label for="question2" class="ui-label">' + translate.defConfig.PayAmout + "</label>", '<span class="ui-text-info"><span class="color-red"><#=lotteryamount#></span>' + translate.defConfig.Dollar + "</span>", "</li>", "<li>", '<label for="question2" class="ui-label">' + translate.defConfig.PayAccount + "</label>", '<span class="ui-text-info"><span class="color-red"><#=lotteryAcc#></span></span>', "</li>", "</ul>", "</div>"].join(""),
                            planDetails: ['<div class="bd">', '<ul class="ui-form">', "<li>", '<label for="question1" class="ui-label">' + translate.defConfig.TypesOfCase + "</label>", "<#=lotteryname#>", "</li>", "<li>", '<label for="question1" class="ui-label">' + translate.defConfig.BettingPeriod + "</label>", "<#=issue#>期", "</li>", "<li>", '<label for="question1" class="ui-label">"' + translate.defConfig.CaseName + "</label>", '<input type="text" id="J-plan-name" readonly="readonly" class="input" value="<#=planname#>" placeholder="' + translate.defConfig.InputCaseName + '">', "</li>", "<li>", '<label for="answer1" class="ui-label">' + translate.defConfig.DetailOfCase + "</label>", '<div class="textarea" style="font-size:12px;">', "<#=methodname#><#=codes#>", "</div>", "</li>", "<li>", '<label for="question2" class="ui-label">' + translate.defConfig.CashOfCase + "</label>", '<span class="ui-text-info"><span class="color-red"><#=money#></span>' + translate.defConfig.Dollar + "</span>", "</li>", "</ul>", "</div>"].join(""),
                            checkPlan: ['<div class="bd">', '<ul class="ui-form">', "<li>", '<label for="question1" class="ui-label">' + translate.defConfig.TypesOfCase + "</label>", "<#=lotteryName#>", "</li>", "<li>", '<label for="question1" class="ui-label">"' + translate.defConfig.CaseName + "</label>", '<input type="text" id="J-plan-name" class="input" value="<#=planName#>" placeholder="' + translate.defConfig.InputCaseName + '">', "</li>", "<li>", '<label for="answer1" class="ui-label">' + translate.defConfig.DetailOfCase + "</label>", '<div class="textarea" style="font-size:12px;">', "<#=lotteryInfo#>", "</div>", "</li>", "<li>", '<label for="question2" class="ui-label">' + translate.defConfig.CashOfCase + "</label>", '<span class="ui-text-info"><span class="color-red"><#=lotteryamount#></span>' + translate.defConfig.Dollar + "</span>", "</li>", "<li>", '<label for="question2" class="ui-label">' + translate.defConfig.PayAccount + "</label>", '<span class="ui-text-info"><span class="color-red"><#=lotteryAcc#></span></span>', "</li>", "</ul>", "</div>"].join(""),
                            nonSaleTime: ['<div class="bd text-center">', '<p class="text-title text-left">' + translate.defConfig.NonSaleTime[0] + "<br />" + translate.defConfig.Pls + "<#=orderDate#>" + translate.defConfig.NonSaleTime[1] + "</p>", '<dl class="lottery-list">', "<dt>" + translate.defConfig.LotteryCloseInfo + "</dt>", "<#=lotteryType#>", "</dl>", "</div>"].join(""),
                            normal: ['<div class="bd text-center">', '<div class="pop-waring">', '<i class="ico-waring <#=icon-class#>"></i>', '<h4 class="pop-text"><#=msg#><br /></h4>', "</div>", "</div>"].join(""),
                            invalidtext: ['<div class="bd text-center">', '<div class="pop-waring">', '<i class="ico-waring <#=icon-class#>"></i>', '<h4 class="pop-text"><#=msg#><br /></h4>', "</div>", "</div>"].join(""),
                            betExpired: ['<div class="bd text-center">', '<div class="pop-waring">', '<i class="ico-waring <#=icon-class#>"></i>', '<h4 class="pop-text"><#=msg#><br /></h4>', "</div>", "</div>"].join(""),
                            multipleOver: ['<div class="bd text-center">', '<div class="pop-waring">', '<i class="ico-waring <#=icon-class#>"></i>', '<h4 class="pop-text"><#=msg#><br /></h4>', "</div>", "</div>"].join(""),
                            pauseBet: ['<div class="bd text-center">', '<div class="pop-waring">', '<i class="ico-waring <#=icon-class#>"></i>', '<h4 class="pop-text"><#=msg#><br /></h4>', "</div>", "</div>"].join(""),
                            successTip: ['<div class="bd text-center">', '<div class="pop-title">', '<i class="ico-waring <#=icon-class#>"></i>', '<h4 class="pop-text"><#=msg#><br /></h4>', "</div>", "</div>"].join(""),
                            checkBalls: ['<div class="bd text-center">', '<div class="pop-title">', '<i class="ico-waring <#=iconClass#>"></i>', '<h4 class="pop-text">' + translate.SelectOne + "</h4>", "</div>", '<div class="pop-btn ">', '<a href="javascript:void(0);" class="btn closeBtn">' + translate.Close + '<b class="btn-inner"></b></a>', "</div>", "</div>"].join(""),
                            errorTip: ['<div class="bd text-center">', '<div class="pop-title">', '<i class="ico-error"></i>', '<h4 class="pop-text">' + translate.defConfig.errorTip[0] + ",<br />" + translate.defConfig.errorTip[1] + "</h4>", "</div>", '<div class="pop-btn ">', '<a href="javascript:void(0);" class="btn closeBtn">' + translate.Close + '<b class="btn-inner"></b></a>', "</div>", "</div>"].join(""),
                            blockade: ['<div class="bd panel-game-msg-blockade" id="J-blockade-panel-main">', '<form id="J-form-blockade-detail" action="ssc-blockade-detail.php" target="_blank" method="post"></form>', '<div class="game-msg-blockade-text">' + translate.defConfig.blockade.TitleInfo[0] + "<#=blockadeType#>" + translate.defConfig.blockade.TitleInfo[1] + ' <a href="#" data-action="blockade-detail">' + translate.defConfig.blockade.TitleInfo[2] + "</a> ，" + translate.defConfig.blockade.TitleInfo[3] + '<span class="color-red">“' + translate.defConfig.blockade.TitleInfo[4] + "”</span>" + translate.defConfig.blockade.TitleInfo[5] + "</div>", "<div>", '<div class="game-msg-blockade-line-title">' + translate.defConfig.Types + "<#=gameTypeTitle#></div>", '<div class="game-msg-blockade-line-title">' + translate.defConfig.Periods + "<#=currentGameNumber#></div>", "</div>", '<div id="J-game-panel-msg-blockade-0">', '<div class="game-msg-blockade-cont" id="J-msg-panel-submit-blockade-error0"><#=blockadeData0#></div>', "</div>", '<div class="game-msg-blockade-panel-money">', "<div><b>" + translate.defConfig.PayAmout + '</b><span class="color-red"><b id="J-money-blockade-adjust"><#=amountAdjust#></b></span> ' + translate.defConfig.Dollar + '&nbsp;&nbsp;&nbsp;&nbsp;<span style="display:<#=display#>"><b>减少投入：</b><span class="color-red"><b id="J-money-blockade-change"><#=amountChange#></b></span> ' + translate.defConfig.Dollar + "</span></div>", "<div><b>" + translate.defConfig.PayAccount + "</b><#=username#></div>", "</div>", "<div>", '<p class="text-note">' + translate.defConfig.blockade.Note[0] + '￥<span class="handlingCharge">0.00</span>' + translate.defConfig.Dollar + "</p>", '<p class="text-note">' + translate.defConfig.blockade.Note[1] + "</p>", "</div>", '<ul class="textarea cancel-bets clearfix" style="font-size:12px;margin-top:10px;">', '<li><span class="">' + translate.defConfig.Award + '</span><span class="">' + translate.defConfig.Cost + "</span></li>", "<li><span>2312321312</span><span>123131312313</span></li>", "<li><span>2312321312</span><span>123131312313</span></li>", "<li><span>2312321312</span><span>123131312313</span></li>", "<li><span>2312321312</span><span>123131312313</span></li>", "<li><span>2312321312</span><span>123131312313</span></li>", "<li><span>2312321312</span><span>123131312313</span></li>", "<li><span>2312321312</span><span>123131312313</span></li>", "<li><span>2312321312</span><span>123131312313</span></li>", "<li></li>", "</ul>", "</div>"].join("")
                        }
                },
                doAction: function (e) {
                    var t = this,
                        a = "rebulid" + e.type,
                        n = "getHtml" + e.type,
                        l = function () {
                        };
                    t[a] && $.isFunction(t[a]) && (l = t[a]),
                        e.tpl = "undefined" == typeof e.tpl ? t[n]() : "" + e.tpl,
                        delete e.type,
                        l.call(t, e)
                },
                formatHtml: function (e, t) {
                    var a, n, l = t;
                    for (a in l) l.hasOwnProperty(a) && (n = RegExp("<#=" + a + "#>", "g"), e = e.replace(n, l[a]));
                    return e
                },
                arrIndexOf: function (e, t) {
                    for (var a = 0,
                             n = 0; n < t.length; n++) t[n] == e && (a += 1);
                    return a || -1
                },
                getHtmlWaring: function () {
                    var e = this.defConfig;
                    return e.normal
                },
                rebulidnormal: function (e) {
                    var t = this,
                        a = {};
                    a.mask = !0,
                        a.closeText = translate.Close,
                        a.closeIsShow = !0,
                        a.closeFun = function () {
                            t.hide()
                        },
                        a.content = t.formatHtml(e.tpl, e.data.tplData),
                        t.show($.extend(a, e))
                },
                getHtmlnormal: function () {
                    return this.getHtmlWaring()
                },
                rebulidcheckLotters: function (e) {
                    var t = this,
                        a = (s.getCurrentGameOrder().getTotal().orders, {});
                    a.mask = !0,
                        a.iconClass = "",
                        a.content = t.formatHtml(e.tpl, e.data.tplData),
                        t.show($.extend(a, e))
                },
                getHtmlcheckLotters: function () {
                    var e = this.defConfig;
                    return e.checkLotters
                },
                rebulidcheckProject: function (e) {
                    var t = this,
                        a = (s.getCurrentGameOrder().getTotal().orders, {});
                    a.mask = !0,
                        a.iconClass = "",
                        a.content = t.formatHtml(e.tpl, e.data.tplData),
                        t.show($.extend(a, e))
                },
                getHtmlcheckProject: function () {
                    var e = this.defConfig;
                    return e.checkLotters
                },
                rebulidcheckPlan: function (e) {
                    var t = this,
                        a = (s.getCurrentGameOrder().getTotal().orders, {});
                    a.mask = !0,
                        a.iconClass = "",
                        a.content = t.formatHtml(e.tpl, e.data.tplData),
                        t.show($.extend(a, e))
                },
                getHtmlcheckPlan: function () {
                    var e = this.defConfig;
                    return e.checkPlan
                },
                rebulidplanDetails: function (e) {
                    var t = this,
                        a = (s.getCurrentGameOrder().getTotal().orders, {});
                    a.mask = !0,
                        a.iconClass = "",
                        a.content = t.formatHtml(e.tpl, e.data.tplData),
                        t.show($.extend(a, e))
                },
                getHtmlplanDetails: function () {
                    var e = this.defConfig;
                    return e.planDetails
                },
                rebulidlotteryClose: function (e) {
                    var t = this,
                        a = {};
                    lotteryName = e.data.tplData.lotteryName,
                        lotteryPeriods = e.data.tplData.lotteryPeriods,
                        time = e.data.tplData.orderDate,
                        lotterys = e.data.tplData.lotterys,
                        typeArray = e.data.tplData.lotteryType,
                        a.mask = !0,
                        a.iconClass = "",
                        a.closeIsShow = !0,
                        a.closeFun = function () {
                            t.hide()
                        },
                        e.data.tplData.lotteryName = function () {
                            return lotteryName || ""
                        },
                        e.data.tplData.lotteryPeriods = function () {
                            return lotteryPeriods || ""
                        },
                        e.data.tplData.orderDate = function () {
                            return time.year + "年" + time.month + "月" + time.day + "日 " + time.hour + ":" + time.min
                        },
                        e.data.tplData.lotterys = function () {
                            var e = "";
                            if ($.isArray(lotterys)) for (var t = 0; t < lotterys.length; t++) e += "<em>" + lotterys[t] + "</em>";
                            return e
                        },
                        e.data.tplData.lotteryType = function () {
                            var e = "";
                            if ($.isArray(typeArray)) for (var t = 0; t < typeArray.length; t++) e += '<dd><span style="background:url(' + typeArray[t].pic + ')" class="pic" title="' + typeArray[t].name + '" alt="' + typeArray[t].name + '"></span><a href="' + typeArray[t].url + '" class="btn">' + translate.GoBetting + '<b class="btn-inner"></b></a></dd>';
                            return e
                        },
                        a.content = t.formatHtml(e.tpl, e.data.tplData),
                        t.show($.extend(a, e))
                },
                getHtmllotteryClose: function () {
                    var e = this.defConfig;
                    return e.lotteryClose
                },
                rebulidnonSaleTime: function (e) {
                    var t = this,
                        a = {};
                    time = e.data.tplData.orderDate,
                        typeArray = e.data.tplData.lotteryType,
                        a.mask = !0,
                        a.iconClass = "",
                        a.closeIsShow = !0,
                        a.closeFun = function () {
                            t.hide()
                        },
                        e.data.tplData.orderDate = function () {
                            return time.year + "年" + time.month + "月" + time.day + "日 " + time.hour + ":" + time.min
                        },
                        e.data.tplData.lotteryType = function () {
                            var e = "";
                            if ($.isArray(typeArray)) for (var t = 0; t < typeArray.length; t++) e += '<dd><span style="background:url(' + typeArray[t].pic + ')" class="pic" title="' + typeArray[t].name + '" alt="' + typeArray[t].name + '"></span><a href="' + typeArray[t].url + '" class="btn">' + translate.GoBetting + '<b class="btn-inner"></b></a></dd>';
                            return e
                        },
                        a.content = t.formatHtml(e.tpl, e.data.tplData),
                        t.show($.extend(a, e))
                },
                getHtmlnonSaleTime: function () {
                    var e = this.defConfig;
                    return e.nonSaleTime
                },
                rebulidmustChoose: function (e) {
                    var t = this,
                        a = {};
                    a.mask = !0,
                        a.iconClass = "",
                        a.closeIsShow = !0,
                        a.closeFun = function () {
                            t.hide()
                        },
                        a.content = t.formatHtml(e.tpl, e.data.tplData),
                        t.show($.extend(a, e))
                },
                getHtmlmustChoose: function () {
                    return this.getHtmlWaring()
                },
                rebulidnetAbnormal: function (e) {
                    var t = this,
                        a = {};
                    a.mask = !0,
                        a.iconClass = "",
                        a.closeIsShow = !0,
                        a.closeFun = function () {
                            t.hide()
                        },
                        a.content = t.formatHtml(e.tpl, e.data.tplData),
                        t.show($.extend(a, e))
                },
                getHtmlnetAbnormal: function () {
                    return this.getHtmlWaring()
                },
                rebulidsuccess: function (e) {
                    var t = this,
                        a = {};
                    a.mask = !0,
                        a.iconClass = "",
                        a.closeIsShow = !0,
                        e.data.tplData.msg = translate.BetSuccessMsgs,
                        a.closeFun = function () {
                            t.hide()
                        },
                        a.content = t.formatHtml(e.tpl, e.data.tplData),
                        t.show($.extend(a, e))
                },
                getHtmlsuccess: function () {
                    var e = this.defConfig;
                    return e.successTip
                },
                rebulidloginTimeout: function (e) {
                    var t = this,
                        a = {};
                    a.mask = !0,
                        a.closeIsShow = !0,
                        a.closeFun = function () {
                            t.hide()
                        },
                        a.content = t.formatHtml(e.tpl, e.data.tplData),
                        t.show($.extend(a, e))
                },
                getHtmlloginTimeout: function () {
                    return this.getHtmlWaring()
                },
                rebulidserverError: function (e) {
                    var t = this,
                        a = {};
                    a.mask = !0,
                        a.iconClass = "",
                        a.closeIsShow = !0,
                        a.closeFun = function () {
                            t.hide()
                        },
                        a.content = t.formatHtml(e.tpl, e.data.tplData),
                        t.show($.extend(a, e))
                },
                getHtmlserverError: function () {
                    return this.getHtmlWaring()
                },
                rebulidsysErrorShow: function (e) {
                    var t = this,
                        a = {};
                    a.mask = !0,
                        a.iconClass = "",
                        a.closeIsShow = !0,
                        a.closeFun = function () {
                            window.location.href = "/"
                        },
                        a.content = t.formatHtml(e.tpl, e.data.tplData),
                        t.show($.extend(a, e))
                },
                getHtmlsysErrorShow: function () {
                    return this.getHtmlWaring()
                },
                rebulidInsufficientbalance: function (e) {
                    var t = this,
                        a = {};
                    a.mask = !0,
                        a.closeIsShow = !0,
                        a.closeFun = function () {
                            t.hide()
                        },
                        a.content = t.formatHtml(e.tpl, e.data.tplData),
                        t.show($.extend(a, e))
                },
                getHtmlInsufficientbalance: function () {
                    return this.getHtmlWaring()
                },
                rebulidpauseBet: function (e) {
                    var t = this,
                        a = {};
                    a.mask = !0,
                        a.confirmText = translate.Bet,
                        a.confirmIsShow = !0,
                        a.confirmFun = function () {
                            for (var t = s.getCurrentGameOrder(), a = 0; a < e.data.tplData.balls.length; a++) t.removeData(e.data.tplData.balls[a].id);
                            s.getCurrentGameSubmit().submitData()
                        },
                        a.closeText = translate.Close,
                        a.closeIsShow = !0,
                        a.closeFun = function () {
                            t.hide()
                        },
                        e.data.tplData.msg = function () {
                            for (var a = [], n = s.getCurrentGame().getGameConfig().getInstance(), l = 0; l < e.data.tplData.balls.length; l++) {
                                var i = e.data.tplData.balls[l].type,
                                    r = n.getTitleByName(i);
                                t.arrIndexOf(r.join(""), a) == -1 && a.push(r.join(""))
                            }
                            return translate.StopSaleMsgs.msg1 + "“" + a.join("") + "”" + translate.StopSaleMsgs.msg2
                        },
                        a.content = t.formatHtml(e.tpl, e.data.tplData),
                        t.show($.extend(a, e))
                },
                getHtmlpauseBet: function () {
                    var e = this.defConfig;
                    return e.pauseBet
                },
                rebulidmultipleOver: function (e) {
                    var t = this,
                        a = {};
                    a.mask = !0,
                        a.iconClass = "",
                        a.closeText = translate.Close,
                        a.closeIsShow = !0,
                        a.closeFun = function () {
                            t.hide()
                        },
                        e.data.tplData.msg = function () {
                            for (var a = [], n = s.getCurrentGame().getGameConfig().getInstance(), l = 0; l < e.data.tplData.balls.length; l++) {
                                var i = e.data.tplData.balls[l].type,
                                    r = n.getTitleByName(i);
                                t.arrIndexOf(r.join(""), a) == -1 && a.push(r.join(""))
                            }
                            return translate.StopSaleMsgs.msg1 + "“" + a.join("") + "”" + translate.StopSaleMsgs.msg3
                        },
                        a.content = t.formatHtml(e.tpl, e.data.tplData),
                        t.show($.extend(a, e))
                },
                getHtmlmultipleOver: function () {
                    var e = this.defConfig;
                    return e.multipleOver
                },
                rebulidinvalidtext: function (e) {
                    var t = this,
                        a = {};
                    a.mask = !0,
                        a.confirmText = translate.RefreshPage,
                        a.confirmIsShow = !0,
                        a.confirmFun = function () {
                            window.location.reload()
                        },
                        a.content = t.formatHtml(t.getHtmlinvalidtext(), e),
                        t.show($.extend(a, e))
                },
                getHtmlinvalidtext: function () {
                    var e = this.defConfig;
                    return e.invalidtext
                },
                rebulidbetExpired: function (e) {
                    var t = this,
                        a = {};
                    a.mask = !0,
                        a.closeText = translate.Close,
                        a.closeIsShow = !0,
                        a.closeFun = function () {
                            t.hide()
                        },
                        e.data.tplData.msg = function () {
                            return translate.StopSaleMsgs.msg4[0] + e.data.tplData.bitDate.expiredDate + translate.StopSaleMsgs.msg4[1] + e.data.tplData.bitDate.current + translate.StopSaleMsgs.msg4[2]
                        },
                        a.content = t.formatHtml(t.getHtmlbetExpired(), e.data.tplData),
                        t.show($.extend(a, e))
                },
                getHtmlbetExpired: function () {
                    var e = this.defConfig;
                    return e.betExpired
                },
                rebulidillegalTools: function (e) {
                    var t = this,
                        a = {};
                    a.mask = !0,
                        a.confirmText = translate.RefreshPage,
                        a.confirmIsShow = !0,
                        a.confirmFun = function () {
                            window.location.reload()
                        },
                        a.content = t.formatHtml(t.getHtmlbetExpired(), e.data.tplData),
                        t.show($.extend(a, e))
                },
                getHtmlblockade: function () {
                    return this.defConfig.blockade
                },
                rebulidblockade: function (t) {
                    var a = this,
                        n = {},
                        l = t.data.tplData,
                        i = t.data.orderData,
                        r = t.data.blockadeInfo,
                        o = i.balls,
                        c = {},
                        d = "",
                        u = "",
                        m = s.getCurrentGameOrder().formatMoney,
                        f = 28,
                        p = !1,
                        g = ['<ul class="game-msg-blockade-balls">'];
                    n.mask = !0,
                        n.closeIsShow = !0,
                        n.closeText = translate.Close,
                        n.confirmIsShow = !0,
                        n.confirmText = translate.OK,
                        n.closeFun = function () {
                            a.hide()
                        },
                        $.each(o,
                            function (e) {
                                c["" + this.id] = this,
                                    d = this.ball,
                                d.length > f && (d = d.substr(0, f) + "..."),
                                    u = s.getCurrentGame().getGameConfig().getInstance().getTitleByName(this.type).join("_"),
                                    g.push('<li data-id="' + this.id + '">[' + u + "] " + d + "</li>")
                            }),
                        g.push("</ul>"),
                        l.gameTypeTitle = s.getCurrentGame().getGameConfig().getInstance().getGameTypeCn(),
                        l.blockadeData0 = g.join(""),
                        l.amount = m(i.amount),
                        l.username = r.username,
                        l.amountAdjust = m(r.amountAdjust),
                        l.amountChange = m(i.amount - r.amountAdjust),
                        l.display = "",
                        1 == r.type ? l.blockadeType = translate.Limit : 2 == r.type ? (l.blockadeType = translate.ChangeAward, l.display = "none") : l.blockadeType = translate.ChangeAwardAndLimit,
                        n.callback = function () {
                            $.ajax({
                                url: s.getCurrentGameSubmit().defConfig.handlingChargeURL + "?amout=" + r.amountAdjust,
                                dataType: "json",
                                method: "GET",
                                success: function (e) {
                                    1 == Number(e.isSuccess) && a.getContentDom().find(".handlingCharge").html(e.data.handingcharge)
                                }
                            })
                        },
                        n.content = a.formatHtml(a.getHtmlbetExpired(), l),
                        n.confirmFun = function () {
                            var e = s.getCurrentGameMessage();
                            return !p && void $.ajax({
                                url: s.getCurrentGameSubmit().defConfig.URL,
                                data: i,
                                dataType: "json",
                                method: "POST",
                                beforeSend: function () {
                                    p = !0
                                },
                                success: function (t) {
                                    1 == Number(t.isSuccess) ? (e.show(t), a.clearData(), a.fireEvent("afterSubmitSuccess")) : e.show(t)
                                },
                                complete: function () {
                                    p = !1,
                                        a.fireEvent("afterSubmit")
                                }
                            })
                        },
                        a.show($.extend(n, t)),
                        e.util.toViewCenter(a.win.dom),
                        $("#J-blockade-panel-main").on("click", "[data-action]",
                            function (e) {
                                var t = $(this),
                                    a = $.trim(t.attr("data-action"));
                                $.trim(t.parent().attr("data-id"));
                                switch (e.preventDefault(), a) {
                                    case "blockade-detail":
                                        var n = $("#J-form-blockade-detail"),
                                            l = "-";
                                        n.html(""),
                                            $('<input type="hidden" value="' + i.gameType + '" name="gameType" />').appendTo(n),
                                            $.each(o,
                                                function () {
                                                    var e = this;
                                                    e.lockPoint && ("" != $.trim(e.lockPoint.beforeBlockadeList) && $.each(e.lockPoint.beforeBlockadeList,
                                                        function () {
                                                            var t = this;
                                                            $('<input type="hidden" value="' + t.beishu + l + t.blockadeDetail + l + t.realBeishu + l + e.type + l + e.ball + '" name="beforeBlockadeList[]" />').appendTo(n)
                                                        }), "" != $.trim(e.lockPoint.pointsList) && $.each(e.lockPoint.pointsList,
                                                        function () {
                                                            var t = this;
                                                            $('<input type="hidden" value="' + t.mult + l + t.point + l + t.retValue + l + e.type + l + e.ball + '" name="pointsList[]" />').appendTo(n)
                                                        }))
                                                }),
                                            n.submit()
                                }
                            })
                },
                getHtmlillegalTools: function () {
                    return this.getHtmlWaring()
                },
                rebulidsubFailed: function (e) {
                    var t = this,
                        a = {};
                    a.mask = !0,
                        a.closeText = translate.Close,
                        a.closeIsShow = !0,
                        a.closeFun = function () {
                            t.hide()
                        },
                        a.content = t.formatHtml(t.getHtmlbetExpired(), e.data.tplData),
                        t.show($.extend(a, e))
                },
                getHtmlsubFailed: function () {
                    return this.getHtmlWaring()
                },
                setTitle: function (e) {
                    var t = this,
                        a = t.win;
                    a.setTitle(e)
                },
                setContent: function (e, t) {
                    var a = this,
                        n = a.win;
                    n.setContent(e, t)
                },
                hideClose: function () {
                    var e = this,
                        t = e.win;
                    t.getCloseDom().hide()
                },
                hasOpenDialog: function () {
                    return $(".j-ui-miniwindow").size() > 0 && !$(".j-ui-miniwindow").is(":hidden")
                },
                checkDialogRules: function (e) {
                    var t = this;
                    return "no" === e.cover && !!t.hasOpenDialog()
                },
                hideTitle: function () {
                    var e = this,
                        t = e.win;
                    t.getTitleDom().hide()
                },
                show: function (e) {
                    var t = this,
                        a = t.win;
                    if (!t.checkDialogRules(e) && (t.reSet(), "undefined" == typeof e.data && (e.data = {}), e.data.tplData = "undefined" == typeof e.data.tplData ? {} : e.data.tplData, e)) {
                        if (e.type) return void t.doAction(e);
                        "undefined" != typeof e.tpl && (e.content = t.formatHtml(e.tpl, e.data.tplData)),
                        r && (clearTimeout(r), r = null),
                            t.setTitle(e.title || translate.WarmTips),
                            t.setContent(e.content || ""),
                        e.iconIsShow && a.showWaringIcon(),
                        e.confirmText && a.setConfirmName(e.confirmText),
                        e.cancelText && a.setCancelName(e.cancelText),
                        e.closeText && a.setCloseName(e.closeText),
                        e.normalCloseFun && (a.doNormalClose = e.normalCloseFun),
                        e.confirmFun && (a.doConfirm = e.confirmFun),
                        e.cancelFun && (a.doCancel = e.cancelFun),
                        e.closeFun && (a.doClose = e.closeFun),
                        e.confirmIsShow && a.showConfirmButton(),
                        e.cancelIsShow && a.showCancelButton(),
                        e.closeIsShow && a.showCloseButton(),
                        e.hideTitle && t.hideTitle(),
                        e.hideClose && t.hideClose(),
                        e.mask && t.mask.show(),
                            a.reSetPosition(),
                            t.limitHeight(),
                            a.show(),
                        e.callback && e.callback.call(t),
                        e.time && (r = setTimeout(function () {
                                t.hide(),
                                    clearTimeout(r),
                                    r = null
                            },
                            1e3 * e.time))
                    }
                },
                limitHeight: function () {
                    var e = this,
                        t = $(window).height(),
                        a = e.getContainerDom(),
                        n = a.outerHeight();
                    n > t && (a.height(Math.floor(.9 * t)), a.css({
                        overflow: "auto"
                    }))
                },
                getContainerDom: function () {
                    var e = this;
                    return e.win.getContainerDom()
                },
                getContentDom: function () {
                    var e = this;
                    return e.win.getContentDom()
                },
                hide: function () {
                    var e = this,
                        t = e.win;
                    t.hide(),
                        e.reSet()
                },
                reSet: function () {
                    var e = this,
                        t = e.win;
                    e.mask.hide(),
                        e.setTitle(translate.Tips),
                        e.setContent(""),
                        t.hideConfirmButton(),
                        t.hideCancelButton(),
                        t.hideCloseButton(),
                        t.doConfirm = function () {
                        },
                        t.doCancel = function () {
                        },
                        t.doClose = function () {
                        },
                        t.doNormalClose = function () {
                        },
                        t.setConfirmName(translate.OK),
                        t.setCancelName(translate.Cancel),
                        t.setCloseName(translate.Close),
                        t.reSetPosition()
                }
            },
            c = e.Class(o, a);
        c.defConfig = i,
            c.getInstance = function (e) {
                return l || (l = new c(e))
            },
            e[t] = c
    }(phoenix, "GameMessage", phoenix.Event);