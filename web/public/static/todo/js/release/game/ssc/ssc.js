!
    function(a, t, e) {
        var n = {
                name: "budingwei.budingweizu.housanermabudingwei"
            },
            r = a.Games,
            i = a.Games.SSC.getInstance(),
            l = {
                init: function(a) {},
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                buildUI: function() {
                    var a = this;
                    a.container.html(h.join(""))
                },
                checkBallIsComplete: function() {
                    for (var a = this,
                             t = a.getBallData()[0], e = 0, n = t.length, r = 0; e < n; e++) t[e] > 0 && r++;
                    return r >= 2 ? a.isBallsComplete = !0 : a.isBallsComplete = !1
                },
                getLottery: function() {
                    for (var a = this,
                             t = a.getBallData()[0], e = 0, n = t.length, r = (a.defConfig.name, []); e < n; e++) t[e] > 0 && r.push(e);
                    return a.checkBallIsComplete() ? a.combine(r, 2) : []
                },
                makePostParameter: function(a) {
                    for (var t = [], e = a.length, n = 0; n < e; n++) t = t.concat(a[n].join(""));
                    return t.join("")
                },
                randomNum: function() {
                    for (var a, t = this,
                             e = 0,
                             n = [], i = [], l = (t.getBallData()[0].length, []); e < 2; e++) a = t.removeSame(l),
                        n = n.concat(a),
                        l.push(a);
                    return n.sort(function(a, t) {
                        return a - t
                    }),
                        i.push([n[0], n[1]]),
                        original = [[i[0][0], i[0][1]]],
                        order = {
                            type: r.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: original,
                            lotterys: i,
                            moneyUnit: r.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: r.getCurrentGameStatistics().getMultip(),
                            onePrice: r.getCurrentGameStatistics().getOnePrice(),
                            num: i.length
                        },
                        order.amountText = r.getCurrentGameStatistics().formatMoney(order.num * order.moneyUnit * order.multiple * order.onePrice),
                        order
                }
            },
            o = [];
        o.push('<div class="number-select-content">'),
            o.push('<ul class="ball-section">');
        var s = [];
        s.push("<li>"),
            s.push('<ul class="ball-content">'),
            $.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                function(a) {
                    s.push('<li><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + "</a></li>")
                }),
            s.push("</ul>"),
            s.push('<div class="ball-control">'),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=all" href="javascript:void(0);">' + translate.Whole + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=big" href="javascript:void(0);">' + translate.Big + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=small" href="javascript:void(0);">' + translate.Small + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=odd" href="javascript:void(0);">' + translate.Odd + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=even" href="javascript:void(0);">' + translate.Even + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=none" href="javascript:void(0);">' + translate.Clear + "</a>"),
            s.push("</div>"),
            s.push("</li>");
        var u = [];
        u.push("</ul>"),
            u.push("</div>");
        var h = [],
            c = s.join("");
        h.push(o.join("")),
            $.each([""],
                function(a) {
                    h.push(c.replace(/<#=title#>/g, this).replace(/<#=row#>/g, a))
                }),
            h.push(u.join(""));
        var p = a.Class(l, t);
        p.defConfig = n,
            i[n.name] = new p
    } (phoenix, phoenix.GameMethod),
    function(a, t, e) {
        var n = {
                name: "budingwei.budingweizu.housanyimabudingwei"
            },
            r = a.Games,
            i = a.Games.SSC.getInstance(),
            l = {
                init: function(a) {},
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                buildUI: function() {
                    var a = this;
                    a.container.html(h.join(""))
                },
                checkBallIsComplete: function() {
                    for (var a = this,
                             t = a.getBallData()[0], e = 0, n = t.length, r = 0; e < n; e++) t[e] > 0 && r++;
                    return r >= 1 ? a.isBallsComplete = !0 : a.isBallsComplete = !1
                },
                getLottery: function() {
                    for (var a = this,
                             t = a.getBallData()[0], e = 0, n = t.length, r = []; e < n; e++) t[e] > 0 && r.push(e);
                    return a.checkBallIsComplete() ? a.combine(r, 1) : []
                },
                makePostParameter: function(a) {
                    for (var t = [], e = a.length, n = 0; n < e; n++) t = t.concat(a[n].join(""));
                    return t.join("")
                },
                randomNum: function() {
                    for (var a, t = this,
                             e = 0,
                             n = [], i = [], l = (t.getBallData()[0].length, []); e < 1; e++) a = t.removeSame(l),
                        n = n.concat(a),
                        l.push(a);
                    return n.sort(function(a, t) {
                        return a - t
                    }),
                        i.push([n[0]]),
                        original = [[i[0][0]]],
                        order = {
                            type: r.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: original,
                            lotterys: i,
                            moneyUnit: r.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: r.getCurrentGameStatistics().getMultip(),
                            onePrice: r.getCurrentGameStatistics().getOnePrice(),
                            num: i.length
                        },
                        order.amountText = r.getCurrentGameStatistics().formatMoney(order.num * order.moneyUnit * order.multiple * order.onePrice),
                        order
                }
            },
            o = [];
        o.push('<div class="number-select-content">'),
            o.push('<ul class="ball-section">');
        var s = [];
        s.push("<li>"),
            s.push('<ul class="ball-content">'),
            $.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                function(a) {
                    s.push('<li><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + "</a></li>")
                }),
            s.push("</ul>"),
            s.push('<div class="ball-control">'),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=all" href="javascript:void(0);">' + translate.Whole + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=big" href="javascript:void(0);">' + translate.Big + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=small" href="javascript:void(0);">' + translate.Small + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=odd" href="javascript:void(0);">' + translate.Odd + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=even" href="javascript:void(0);">' + translate.Even + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=none" href="javascript:void(0);">' + translate.Clear + "</a>"),
            s.push("</div>"),
            s.push("</li>");
        var u = [];
        u.push("</ul>"),
            u.push("</div>");
        var h = [],
            c = s.join("");
        h.push(o.join("")),
            $.each([""],
                function(a) {
                    h.push(c.replace(/<#=title#>/g, this).replace(/<#=row#>/g, a))
                }),
            h.push(u.join(""));
        var p = a.Class(l, t);
        p.defConfig = n,
            i[n.name] = new p
    } (phoenix, phoenix.GameMethod),
    function(a, t, e) {
        var n = {
                name: "budingwei.budingweizhi.sixingyimabudingwei"
            },
            r = a.Games,
            i = a.Games.SSC.getInstance(),
            l = {
                init: function(a) {},
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                buildUI: function() {
                    var a = this;
                    a.container.html(h.join(""))
                },
                checkBallIsComplete: function() {
                    for (var a = this,
                             t = a.getBallData()[0], e = 0, n = t.length, r = 0; e < n; e++) t[e] > 0 && r++;
                    return r >= 1 ? a.isBallsComplete = !0 : a.isBallsComplete = !1
                },
                getLottery: function() {
                    for (var a = this,
                             t = a.getBallData()[0], e = 0, n = t.length, r = []; e < n; e++) t[e] > 0 && r.push(e);
                    return a.checkBallIsComplete() ? a.combine(r, 1) : []
                },
                makePostParameter: function(a) {
                    for (var t = [], e = a.length, n = 0; n < e; n++) t = t.concat(a[n].join(""));
                    return t.join("")
                },
                randomNum: function() {
                    for (var a, t = this,
                             e = 0,
                             n = [], i = [], l = (t.getBallData()[0].length, []); e < 1; e++) a = t.removeSame(l),
                        n = n.concat(a),
                        l.push(a);
                    return n.sort(function(a, t) {
                        return a - t
                    }),
                        i.push([n[0]]),
                        original = [[i[0][0]]],
                        order = {
                            type: r.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: original,
                            lotterys: i,
                            moneyUnit: r.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: r.getCurrentGameStatistics().getMultip(),
                            onePrice: r.getCurrentGameStatistics().getOnePrice(),
                            num: i.length
                        },
                        order.amountText = r.getCurrentGameStatistics().formatMoney(order.num * order.moneyUnit * order.multiple * order.onePrice),
                        order
                }
            },
            o = [];
        o.push('<div class="number-select-content">'),
            o.push('<ul class="ball-section">');
        var s = [];
        s.push("<li>"),
            s.push('<ul class="ball-content">'),
            $.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                function(a) {
                    s.push('<li><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + "</a></li>")
                }),
            s.push("</ul>"),
            s.push('<div class="ball-control">'),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=all" href="javascript:void(0);">' + translate.Whole + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=big" href="javascript:void(0);">' + translate.Big + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=small" href="javascript:void(0);">' + translate.Small + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=odd" href="javascript:void(0);">' + translate.Odd + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=even" href="javascript:void(0);">' + translate.Even + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=none" href="javascript:void(0);">' + translate.Clear + "</a>"),
            s.push("</div>"),
            s.push("</li>");
        var u = [];
        u.push("</ul>"),
            u.push("</div>");
        var h = [],
            c = s.join("");
        h.push(o.join("")),
            $.each([""],
                function(a) {
                    h.push(c.replace(/<#=title#>/g, this).replace(/<#=row#>/g, a))
                }),
            h.push(u.join(""));
        var p = a.Class(l, t);
        p.defConfig = n,
            i[n.name] = new p
    } (phoenix, phoenix.GameMethod),
    /*function(a, t, e) {
        var n = {
                name: "budingwei.budingweizhi.sixingermabudingwei"
            },
            r = a.Games,
            i = a.Games.SSC.getInstance(),
            l = {
                init: function(a) {},
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                buildUI: function() {
                    var a = this;
                    a.container.html(h.join(""))
                },
                checkBallIsComplete: function() {
                    for (var a = this,
                             t = a.getBallData()[0], e = 0, n = t.length, r = 0; e < n; e++) t[e] > 0 && r++;
                    return r >= 1 ? a.isBallsComplete = !0 : a.isBallsComplete = !1
                },
                getLottery: function() {
                    for (var a = this,
                             t = a.getBallData()[0], e = 0, n = t.length, r = []; e < n; e++) t[e] > 0 && r.push(e);
                    return a.checkBallIsComplete() ? a.combine(r, 1) : []
                },
                makePostParameter: function(a) {
                    for (var t = [], e = a.length, n = 0; n < e; n++) t = t.concat(a[n].join(","));
                    return t.join("")
                },
                randomNum: function() {
                    for (var a, t = this,
                             e = 0,
                             n = [], i = [], l = (t.getBallData()[0].length, []); e < 1; e++) a = t.removeSame(l),
                        n = n.concat(a),
                        l.push(a);
                    return n.sort(function(a, t) {
                        return a - t
                    }),
                        i.push([n[0]]),
                        original = [[i[0][0]]],
                        order = {
                            type: r.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: original,
                            lotterys: i,
                            moneyUnit: r.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: r.getCurrentGameStatistics().getMultip(),
                            onePrice: r.getCurrentGameStatistics().getOnePrice(),
                            num: i.length
                        },
                        order.amountText = r.getCurrentGameStatistics().formatMoney(order.num * order.moneyUnit * order.multiple * order.onePrice),
                        order
                }
            },
            o = [];
        o.push('<div class="number-select-content">'),
            o.push('<ul class="ball-section">');
        var s = [];
        s.push("<li>"),
            s.push('<ul class="ball-content">'),
            $.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                function(a) {
                    s.push('<li><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + "</a></li>")
                }),
            s.push("</ul>"),
            s.push('<div class="ball-control">'),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=all" href="javascript:void(0);">' + translate.Whole + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=big" href="javascript:void(0);">' + translate.Big + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=small" href="javascript:void(0);">' + translate.Small + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=odd" href="javascript:void(0);">' + translate.Odd + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=even" href="javascript:void(0);">' + translate.Even + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=none" href="javascript:void(0);">' + translate.Clear + "</a>"),
            s.push("</div>"),
            s.push("</li>");
        var u = [];
        u.push("</ul>"),
            u.push("</div>");
        var h = [],
            c = s.join("");
        h.push(o.join("")),
            $.each([""],
                function(a) {
                    h.push(c.replace(/<#=title#>/g, this).replace(/<#=row#>/g, a))
                }),
            h.push(u.join(""));
        var p = a.Class(l, t);
        p.defConfig = n,
            i[n.name] = new p
    } (phoenix, phoenix.GameMethod),*/
    function(a, t, e) {
        var n = {
                name: "budingwei.budingweizhi.sixingermabudingwei"
            },
            r = a.Games,
            i = a.Games.SSC.getInstance(),
            l = {
                init: function(a) {},
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                buildUI: function() {
                    var a = this;
                    a.container.html(h.join(""))
                },
                checkBallIsComplete: function() {
                    for (var a = this,
                             t = a.getBallData()[0], e = 0, n = t.length, r = 0; e < n; e++) t[e] > 0 && r++;
                    return r >= 2 ? a.isBallsComplete = !0 : a.isBallsComplete = !1
                },
                getLottery: function() {
                    for (var a = this,
                             t = a.getBallData()[0], e = 0, n = t.length, r = (a.defConfig.name, []); e < n; e++) t[e] > 0 && r.push(e);
                    return a.checkBallIsComplete() ? a.combine(r, 2) : []
                },
                makePostParameter: function(a) {
                    for (var t = [], e = a.length, n = 0; n < e; n++) t = t.concat(a[n].join(""));
                    return t.join("")
                },
                randomNum: function() {
                    for (var a, t = this,
                             e = 0,
                             n = [], i = [], l = (t.getBallData()[0].length, []); e < 2; e++) a = t.removeSame(l),
                        n = n.concat(a),
                        l.push(a);
                    return n.sort(function(a, t) {
                        return a - t
                    }),
                        i.push([n[0], n[1]]),
                        original = [[i[0][0], i[0][1]]],
                        order = {
                            type: r.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: original,
                            lotterys: i,
                            moneyUnit: r.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: r.getCurrentGameStatistics().getMultip(),
                            onePrice: r.getCurrentGameStatistics().getOnePrice(),
                            num: i.length
                        },
                        order.amountText = r.getCurrentGameStatistics().formatMoney(order.num * order.moneyUnit * order.multiple * order.onePrice),
                        order
                }
            },
            o = [];
        o.push('<div class="number-select-content">'),
            o.push('<ul class="ball-section">');
        var s = [];
        s.push("<li>"),
            s.push('<ul class="ball-content">'),
            $.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                function(a) {
                    s.push('<li><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + "</a></li>")
                }),
            s.push("</ul>"),
            s.push('<div class="ball-control">'),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=all" href="javascript:void(0);">' + translate.Whole + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=big" href="javascript:void(0);">' + translate.Big + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=small" href="javascript:void(0);">' + translate.Small + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=odd" href="javascript:void(0);">' + translate.Odd + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=even" href="javascript:void(0);">' + translate.Even + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=none" href="javascript:void(0);">' + translate.Clear + "</a>"),
            s.push("</div>"),
            s.push("</li>");
        var u = [];
        u.push("</ul>"),
            u.push("</div>");
        var h = [],
            c = s.join("");
        h.push(o.join("")),
            $.each([""],
                function(a) {
                    h.push(c.replace(/<#=title#>/g, this).replace(/<#=row#>/g, a))
                }),
            h.push(u.join(""));
        var p = a.Class(l, t);
        p.defConfig = n,
            i[n.name] = new p
    } (phoenix, phoenix.GameMethod),
    function(a, t, e) {
        var n = {
                name: "budingwei.budingweiji.wuxingermabudingwei"
            },
            r = a.Games,
            i = a.Games.SSC.getInstance(),
            l = {
                init: function(a) {},
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                buildUI: function() {
                    var a = this;
                    a.container.html(h.join(""))
                },
                checkBallIsComplete: function() {
                    for (var a = this,
                             t = a.getBallData()[0], e = 0, n = t.length, r = 0; e < n; e++) t[e] > 0 && r++;
                    return r >= 2 ? a.isBallsComplete = !0 : a.isBallsComplete = !1
                },
                getLottery: function() {
                    for (var a = this,
                             t = a.getBallData()[0], e = 0, n = t.length, r = (a.defConfig.name, []); e < n; e++) t[e] > 0 && r.push(e);
                    return a.checkBallIsComplete() ? a.combine(r, 2) : []
                },
                makePostParameter: function(a) {
                    for (var t = [], e = a.length, n = 0; n < e; n++) t = t.concat(a[n].join(""));
                    return t.join("")
                },
                randomNum: function() {
                    for (var a, t = this,
                             e = 0,
                             n = [], i = [], l = (t.getBallData()[0].length, []); e < 2; e++) a = t.removeSame(l),
                        n = n.concat(a),
                        l.push(a);
                    return n.sort(function(a, t) {
                        return a - t
                    }),
                        i.push([n[0], n[1]]),
                        original = [[i[0][0], i[0][1]]],
                        order = {
                            type: r.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: original,
                            lotterys: i,
                            moneyUnit: r.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: r.getCurrentGameStatistics().getMultip(),
                            onePrice: r.getCurrentGameStatistics().getOnePrice(),
                            num: i.length
                        },
                        order.amountText = r.getCurrentGameStatistics().formatMoney(order.num * order.moneyUnit * order.multiple * order.onePrice),
                        order
                }
            },
            o = [];
        o.push('<div class="number-select-content">'),
            o.push('<ul class="ball-section">');
        var s = [];
        s.push("<li>"),
            s.push('<ul class="ball-content">'),
            $.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                function(a) {
                    s.push('<li><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + "</a></li>")
                }),
            s.push("</ul>"),
            s.push('<div class="ball-control">'),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=all" href="javascript:void(0);">' + translate.Whole + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=big" href="javascript:void(0);">' + translate.Big + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=small" href="javascript:void(0);">' + translate.Small + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=odd" href="javascript:void(0);">' + translate.Odd + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=even" href="javascript:void(0);">' + translate.Even + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=none" href="javascript:void(0);">' + translate.Clear + "</a>"),
            s.push("</div>"),
            s.push("</li>");
        var u = [];
        u.push("</ul>"),
            u.push("</div>");
        var h = [],
            c = s.join("");
        h.push(o.join("")),
            $.each([""],
                function(a) {
                    h.push(c.replace(/<#=title#>/g, this).replace(/<#=row#>/g, a))
                }),
            h.push(u.join(""));
        var p = a.Class(l, t);
        p.defConfig = n,
            i[n.name] = new p
    } (phoenix, phoenix.GameMethod),
    function(a, t, e) {
        var n = {
                name: "budingwei.budingweiji.wuxingsanmabudingwei"
            },
            r = a.Games,
            i = a.Games.SSC.getInstance(),
            l = {
                init: function(a) {},
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                buildUI: function() {
                    var a = this;
                    a.container.html(h.join(""))
                },
                checkBallIsComplete: function() {
                    for (var a = this,
                             t = a.getBallData()[0], e = 0, n = t.length, r = 0; e < n; e++) t[e] > 0 && r++;
                    return r >= 3 ? a.isBallsComplete = !0 : a.isBallsComplete = !1
                },
                getLottery: function() {
                    for (var a = this,
                             t = a.getBallData()[0], e = 0, n = t.length, r = (a.defConfig.name, []); e < n; e++) t[e] > 0 && r.push(e);
                    return a.checkBallIsComplete() ? a.combine(r, 3) : []
                },
                makePostParameter: function(a) {
                    for (var t = [], e = a.length, n = 0; n < e; n++) t = t.concat(a[n].join(""));
                    return t.join("")
                },
                randomNum: function() {
                    for (var a, t = this,
                             e = 0,
                             n = [], i = [], l = (t.getBallData()[0].length, []); e < 3; e++) a = t.removeSame(l),
                        n = n.concat(a),
                        l.push(a);
                    return n.sort(function(a, t) {
                        return a - t
                    }),
                        i.push([n[0], n[1]]),
                        original = [[i[0][0], i[0][1]]],
                        order = {
                            type: r.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: original,
                            lotterys: i,
                            moneyUnit: r.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: r.getCurrentGameStatistics().getMultip(),
                            onePrice: r.getCurrentGameStatistics().getOnePrice(),
                            num: i.length
                        },
                        order.amountText = r.getCurrentGameStatistics().formatMoney(order.num * order.moneyUnit * order.multiple * order.onePrice),
                        order
                }
            },
            o = [];
        o.push('<div class="number-select-content">'),
            o.push('<ul class="ball-section">');
        var s = [];
        s.push("<li>"),
            s.push('<ul class="ball-content">'),
            $.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                function(a) {
                    s.push('<li><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + "</a></li>")
                }),
            s.push("</ul>"),
            s.push('<div class="ball-control">'),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=all" href="javascript:void(0);">' + translate.Whole + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=big" href="javascript:void(0);">' + translate.Big + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=small" href="javascript:void(0);">' + translate.Small + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=odd" href="javascript:void(0);">' + translate.Odd + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=even" href="javascript:void(0);">' + translate.Even + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=none" href="javascript:void(0);">' + translate.Clear + "</a>"),
            s.push("</div>"),
            s.push("</li>");
        var u = [];
        u.push("</ul>"),
            u.push("</div>");
        var h = [],
            c = s.join("");
        h.push(o.join("")),
            $.each([""],
                function(a) {
                    h.push(c.replace(/<#=title#>/g, this).replace(/<#=row#>/g, a))
                }),
            h.push(u.join(""));
        var p = a.Class(l, t);
        p.defConfig = n,
            i[n.name] = new p
    } (phoenix, phoenix.GameMethod),
    function(a, t, e) {
        var n = {
                name: "budingwei.budingweizu.qiansanermabudingwei"
            },
            r = a.Games,
            i = a.Games.SSC.getInstance(),
            l = {
                init: function(a) {},
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                buildUI: function() {
                    var a = this;
                    a.container.html(h.join(""))
                },
                checkBallIsComplete: function() {
                    for (var a = this,
                             t = a.getBallData()[0], e = 0, n = t.length, r = 0; e < n; e++) t[e] > 0 && r++;
                    return r >= 2 ? a.isBallsComplete = !0 : a.isBallsComplete = !1
                },
                getLottery: function() {
                    for (var a = this,
                             t = a.getBallData()[0], e = 0, n = t.length, r = (a.defConfig.name, []); e < n; e++) t[e] > 0 && r.push(e);
                    return a.checkBallIsComplete() ? a.combine(r, 2) : []
                },
                makePostParameter: function(a) {
                    for (var t = [], e = a.length, n = 0; n < e; n++) t = t.concat(a[n].join(""));
                    return t.join("")
                },
                randomNum: function() {
                    for (var a, t = this,
                             e = 0,
                             n = [], i = [], l = (t.getBallData()[0].length, []); e < 2; e++) a = t.removeSame(l),
                        n = n.concat(a),
                        l.push(a);
                    return n.sort(function(a, t) {
                        return a - t
                    }),
                        i.push([n[0], n[1]]),
                        original = [[i[0][0], i[0][1]]],
                        order = {
                            type: r.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: original,
                            lotterys: i,
                            moneyUnit: r.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: r.getCurrentGameStatistics().getMultip(),
                            onePrice: r.getCurrentGameStatistics().getOnePrice(),
                            num: i.length
                        },
                        order.amountText = r.getCurrentGameStatistics().formatMoney(order.num * order.moneyUnit * order.multiple * order.onePrice),
                        order
                }
            },
            o = [];
        o.push('<div class="number-select-content">'),
            o.push('<ul class="ball-section">');
        var s = [];
        s.push("<li>"),
            s.push('<ul class="ball-content">'),
            $.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                function(a) {
                    s.push('<li><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + '</a><span class="ball-aid-hot">0</span></li>')
                }),
            s.push("</ul>"),
            s.push('<div class="ball-control">'),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=all" href="javascript:void(0);">' + translate.Whole + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=big" href="javascript:void(0);">' + translate.Big + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=small" href="javascript:void(0);">' + translate.Small + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=odd" href="javascript:void(0);">' + translate.Odd + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=even" href="javascript:void(0);">' + translate.Even + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=none" href="javascript:void(0);">' + translate.Clear + "</a>"),
            s.push("</div>"),
            s.push("</li>");
        var u = [];
        u.push("</ul>"),
            u.push("</div>");
        var h = [],
            c = s.join("");
        h.push(o.join("")),
            $.each([""],
                function(a) {
                    h.push(c.replace(/<#=title#>/g, this).replace(/<#=row#>/g, a))
                }),
            h.push(u.join(""));
        var p = a.Class(l, t);
        p.defConfig = n,
            i[n.name] = new p
    } (phoenix, phoenix.GameMethod),
    function(a, t, e) {
        var n = {
                name: "budingwei.budingweizu.qiansanyimabudingwei"
            },
            r = a.Games,
            i = a.Games.SSC.getInstance(),
            l = {
                init: function(a) {},
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                buildUI: function() {
                    var a = this;
                    a.container.html(h.join(""))
                },
                checkBallIsComplete: function() {
                    for (var a = this,
                             t = a.getBallData()[0], e = 0, n = t.length, r = 0; e < n; e++) t[e] > 0 && r++;
                    return r >= 1 ? a.isBallsComplete = !0 : a.isBallsComplete = !1
                },
                getLottery: function() {
                    for (var a = this,
                             t = a.getBallData()[0], e = 0, n = t.length, r = []; e < n; e++) t[e] > 0 && r.push(e);
                    return a.checkBallIsComplete() ? a.combine(r, 1) : []
                },
                makePostParameter: function(a) {
                    for (var t = [], e = a.length, n = 0; n < e; n++) t = t.concat(a[n].join(""));
                    return t.join("")
                },
                randomNum: function() {
                    for (var a, t = this,
                             e = 0,
                             n = [], i = [], l = (t.getBallData()[0].length, []); e < 1; e++) a = t.removeSame(l),
                        n = n.concat(a),
                        l.push(a);
                    return n.sort(function(a, t) {
                        return a - t
                    }),
                        i.push([n[0]]),
                        original = [[i[0][0]]],
                        order = {
                            type: r.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: original,
                            lotterys: i,
                            moneyUnit: r.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: r.getCurrentGameStatistics().getMultip(),
                            onePrice: r.getCurrentGameStatistics().getOnePrice(),
                            num: i.length
                        },
                        order.amountText = r.getCurrentGameStatistics().formatMoney(order.num * order.moneyUnit * order.multiple * order.onePrice),
                        order
                }
            },
            o = [];
        o.push('<div class="number-select-content">'),
            o.push('<ul class="ball-section">');
        var s = [];
        s.push("<li>"),
            s.push('<ul class="ball-content">'),
            $.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                function(a) {
                    s.push('<li><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + "</a></li>")
                }),
            s.push("</ul>"),
            s.push('<div class="ball-control">'),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=all" href="javascript:void(0);">' + translate.Whole + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=big" href="javascript:void(0);">' + translate.Big + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=small" href="javascript:void(0);">' + translate.Small + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=odd" href="javascript:void(0);">' + translate.Odd + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=even" href="javascript:void(0);">' + translate.Even + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=none" href="javascript:void(0);">' + translate.Clear + "</a>"),
            s.push("</div>"),
            s.push("</li>");
        var u = [];
        u.push("</ul>"),
            u.push("</div>");
        var h = [],
            c = s.join("");
        h.push(o.join("")),
            $.each([""],
                function(a) {
                    h.push(c.replace(/<#=title#>/g, this).replace(/<#=row#>/g, a))
                }),
            h.push(u.join(""));
        var p = a.Class(l, t);
        p.defConfig = n,
            i[n.name] = new p
    } (phoenix, phoenix.GameMethod),
    function(a, t, e) {
        var n = {
                name: "daxiaodanshuang.daxiaodanshuangzu.houerdaxiaodanshuang",
                tips: "后二直选复式玩法提示",
                exampleTip: "后二直选复式范例"
            },
            r = a.Games,
            i = r.SSC.getInstance(),
            l = {
                init: function(a) {},
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1], [ - 1, -1, -1, -1]]
                },
                buildUI: function() {
                    var a = this;
                    a.container.html(h.join(""))
                },
                makePostParameter: function(a) {
                    for (var t = 0,
                             e = a.length,
                             n = []; t < e; t++) {
                        for (var r = 0; r < a[t].length; r++) {
                            var i = [translate.Big, translate.Small, translate.Odds, translate.Evens],
                                l = a[t][r];
                            a[t][r] = i[l]
                        }
                        n.push(a[t].join(""))
                    }
                    return n.join(",")
                },
                makeSubmitParameter: function(a) {
                    for (var t = $.extend(!0, [], a), e = [translate.Big, translate.Small, translate.Odds, translate.Evens], n = 0; n < t.length; n++) {
                        for (var r = 0; r < t[n].length; r++) {
                            var i = t[n][r];
                            t[n][r] = e[i]
                        }
                        t[n] = t[n].join("&")
                    }
                    return t.join("|")
                },
                getSubmitType: function() {
                    return "dxds"
                }
            },
            o = [];
        o.push('<div class="number-select-content">'),
            o.push('<ul class="ball-section">');
        var s = [];
        s.push("<li>"),
            s.push('<div class="ball-title">'),
            s.push("<strong><#=title#></strong>"),
            s.push("</div>"),
            s.push('<ul class="ball-content">'),
            $.each([0, 1, 2, 3],
                function(a) {
                    var t = "";
                    0 == this && (t = translate.Big),
                    1 == this && (t = translate.Small),
                    2 == this && (t = translate.Odds),
                    3 == this && (t = translate.Evens),
                        s.push('<li><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + t + "</a>")
                }),
            s.push("</ul>"),
            s.push('<div class="ball-control">'),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=all" href="javascript:void(0);">' + translate.Whole + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=none" href="javascript:void(0);">' + translate.Clear + "</a>"),
            s.push("</div>"),
            s.push("</li>");
        var u = [];
        u.push("</ul>"),
            u.push("</div>");
        var h = [],
            c = s.join("");
        h.push(o.join("")),
            $.each([translate.Ten, translate.Dollar],
                function(a) {
                    h.push(c.replace(/<#=title#>/g, this).replace(/<#=row#>/g, a))
                }),
            h.push(u.join(""));
        var p = a.Class(l, t);
        p.defConfig = n,
            i[n.name] = new p
    } (phoenix, phoenix.GameMethod),
    function(a, t, e) {
        var n = {
                name: "daxiaodanshuang.daxiaodanshuangzu.qianerdaxiaodanshuang",
                tips: "后二直选复式玩法提示",
                exampleTip: "后二直选复式范例"
            },
            r = a.Games,
            i = r.SSC.getInstance(),
            l = {
                init: function(a) {},
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1], [ - 1, -1, -1, -1]]
                },
                buildUI: function() {
                    var a = this;
                    a.container.html(h.join(""))
                },
                makePostParameter: function(a) {
                    for (var t = 0,
                             e = a.length,
                             n = []; t < e; t++) {
                        for (var r = 0; r < a[t].length; r++) {
                            var i = [translate.Big, translate.Small, translate.Odds, translate.Evens],
                                l = a[t][r];
                            a[t][r] = i[l]
                        }
                        n.push(a[t].join(""))
                    }
                    return n.join(",")
                },
                makeSubmitParameter: function(a) {
                    for (var t = $.extend(!0, [], a), e = [translate.Big, translate.Small, translate.Odds, translate.Evens], n = 0; n < t.length; n++) {
                        for (var r = 0; r < t[n].length; r++) {
                            var i = t[n][r];
                            t[n][r] = e[i]
                        }
                        t[n] = t[n].join("&")
                    }
                    return t.join("|")
                },
                getSubmitType: function() {
                    return "dxds"
                }
            },
            o = [];
        o.push('<div class="number-select-content">'),
            o.push('<ul class="ball-section">');
        var s = [];
        s.push("<li>"),
            s.push('<div class="ball-title">'),
            s.push("<strong><#=title#></strong>"),
            s.push("</div>"),
            s.push('<ul class="ball-content">'),
            $.each([0, 1, 2, 3],
                function(a) {
                    var t = "";
                    0 == this && (t = translate.Big),
                    1 == this && (t = translate.Small),
                    2 == this && (t = translate.Odds),
                    3 == this && (t = translate.Evens),
                        s.push('<li><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + t + "</a>")
                }),
            s.push("</ul>"),
            s.push('<div class="ball-control">'),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=all" href="javascript:void(0);">' + translate.Whole + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=none" href="javascript:void(0);">' + translate.Clear + "</a>"),
            s.push("</div>"),
            s.push("</li>");
        var u = [];
        u.push("</ul>"),
            u.push("</div>");
        var h = [],
            c = s.join("");
        h.push(o.join("")),
            $.each([translate.Million, translate.Thousand],
                function(a) {
                    h.push(c.replace(/<#=title#>/g, this).replace(/<#=row#>/g, a))
                }),
            h.push(u.join(""));
        var p = a.Class(l, t);
        p.defConfig = n,
            i[n.name] = new p
    } (phoenix, phoenix.GameMethod),
    function(a, t, e) {
        var n = {
                name: "dingweidan.dingweidanzu.dingweidan",
                tips: "一星定位胆复式玩法提示",
                exampleTip: "一星定位胆玩复式范例"
            },
            r = a.Games,
            i = r.SSC.getInstance(),
            l = {
                init: function(a) {},
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                buildUI: function() {
                    var a = this;
                    a.container.html(h.join(""))
                },
                getLottery: function(a) {
                    for (var t, e = this,
                             n = e.getBallData(), r = 0, i = n.length, l = 0, o = 0, s = [], u = [], h = 1, c = 0; r < i; r++) {
                        for (s[r] = [], t = n[r], o = t.length, isEmptySelect = !0, c = 0, l = 0; l < o; l++) t[l] > 0 && (e.isBallsComplete = !0, a || s[r].push(l), c++);
                        h *= c
                    }
                    if (a) return h;
                    if (e.isBallsComplete) {
                        for (r = 0, i = s.length; r < i; r++) for (l = 0, o = s[r].length; l < o; l++) u.push([s[r][l]]);
                        return u
                    }
                    return []
                },
                makePostParameter: function(a) {
                    for (var t = 0,
                             e = a.length,
                             n = []; t < e; t++) a[t].length < 1 ? n.push("-") : n.push(a[t].join(""));
                    return n.join(",")
                },
                randomNum: function() {
                    var a = this,
                        t = 0,
                        e = [],
                        n = null,
                        i = a.getBallData().length,
                        l = a.getBallData()[0].length,
                        o = [],
                        s = [],
                        u = 0,
                        h = 0;
                    for (u = Math.floor(Math.random() * i); t < i; t++) t == u ? (h = Math.floor(Math.random() * l), e.push([h])) : e.push([]);
                    return s = e,
                        o = [[h]],
                        n = {
                            type: r.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: s,
                            lotterys: o,
                            moneyUnit: r.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: r.getCurrentGameStatistics().getMultip(),
                            onePrice: r.getCurrentGameStatistics().getOnePrice(),
                            num: o.length
                        },
                        n.amountText = r.getCurrentGameStatistics().formatMoney(n.num * n.moneyUnit * n.multiple * n.onePrice),
                        n
                }
            },
            o = [];
        o.push('<div class="number-select-content">'),
            o.push('<ul class="ball-section">');
        var s = [];
        s.push("<li>"),
            s.push('<div class="ball-title">'),
            s.push("<strong><#=title#></strong>"),
            s.push("</div>"),
            s.push('<ul class="ball-content">'),
            $.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                function(a) {
                    s.push('<li><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + "</a></li>")
                }),
            s.push("</ul>"),
            s.push('<div class="ball-control">'),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=all" href="javascript:void(0);">' + translate.Whole + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=big" href="javascript:void(0);">' + translate.Big + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=small" href="javascript:void(0);">' + translate.Small + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=odd" href="javascript:void(0);">' + translate.Odd + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=even" href="javascript:void(0);">' + translate.Even + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=none" href="javascript:void(0);">' + translate.Clear + "</a>"),
            s.push("</div>"),
            s.push("</li>");
        var u = [];
        u.push("</ul>"),
            u.push("</div>");
        var h = [],
            c = s.join("");
        h.push(o.join("")),
            $.each([translate.Million, translate.Thousand, translate.Hundred, translate.Ten, translate.Dollar],
                function(a) {
                    h.push(c.replace(/<#=title#>/g, this).replace(/<#=row#>/g, a))
                }),
            h.push(u.join(""));
        var p = a.Class(l, t);
        p.defConfig = n,
            i[n.name] = new p
    } (phoenix, phoenix.GameMethod),
    function(a, t, e) {
        var n = {
                name: "erxing.zhixuan.houerdanshi",
                tips: "后二直选单式玩法提示",
                exampleTip: "后二直选单式弹出层提示"
            },
            r = a.Games,
            i = r.SSC.getInstance(),
            l = {
                init: function(a) {
                    var t = this;
                    setTimeout(function() {
                            t.initFrame()
                        },
                        25),
                        r.getCurrentGameSubmit().addEvent("afterSubmitSuccess",
                            function() {
                                r.SSC.getInstance().getHTML()
                            })
                },
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                randomNum: function() {
                    var a = this,
                        t = [],
                        e = null,
                        n = (a.getBallData(), a.defConfig.name, []),
                        i = [];
                    return a.addRanNumTag(),
                        t = a.checkRandomBets(),
                        i = [[t.join(",")], []],
                        n = a.combination(t),
                        e = {
                            type: r.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: i,
                            lotterys: n,
                            moneyUnit: r.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: r.getCurrentGameStatistics().getMultip(),
                            onePrice: r.getCurrentGameStatistics().getOnePrice(),
                            num: n.length
                        },
                        e.amountText = r.getCurrentGameStatistics().formatMoney(e.num * e.moneyUnit * e.multiple * e.onePrice),
                        e
                }
            },
            o = a.Class(l, t);
        o.defConfig = n,
            i[n.name] = new o
    } (phoenix, phoenix.Games.SSC.Danshi),
    function(a, t, e) {
        var n = {
                name: "erxing.zhixuan.houerfushi",
                tips: "后二直选复式玩法提示",
                exampleTip: "后二直选复式范例"
            },
            r = a.Games,
            i = r.SSC.getInstance(),
            l = {
                init: function(a) {},
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                buildUI: function() {
                    var a = this;
                    a.container.html(h.join(""))
                },
                makePostParameter: function(a) {
                    var t = 0,
                        e = a.length,
                        n = [];
                    // for (n.push("-"), n.push("-"), n.push("-"); t < e; t++) n.push(a[t].join(""));
                    for (/*n.push("-"), n.push("-"), n.push("-");*/t; t < e; t++) n.push(a[t].join(""));
                    return n.join(",")
                }
            },
            o = [];
        o.push('<div class="number-select-content">'),
            o.push('<ul class="ball-section">');
        var s = [];
        s.push("<li>"),
            s.push('<div class="ball-title">'),
            s.push("<strong><#=title#></strong>"),
            s.push("</div>"),
            s.push('<ul class="ball-content">'),
            $.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                function(a) {
                    s.push('<li><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + "</a>")
                }),
            s.push("</ul>"),
            s.push('<div class="ball-control">'),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=all" href="javascript:void(0);">' + translate.Whole + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=big" href="javascript:void(0);">' + translate.Big + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=small" href="javascript:void(0);">' + translate.Small + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=odd" href="javascript:void(0);">' + translate.Odd + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=even" href="javascript:void(0);">' + translate.Even + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=none" href="javascript:void(0);">' + translate.Clear + "</a>"),
            s.push("</div>"),
            s.push("</li>");
        var u = [];
        u.push("</ul>"),
            u.push("</div>");
        var h = [],
            c = s.join("");
        h.push(o.join("")),
            $.each([translate.Tens, translate.Dollars],
                function(a) {
                    h.push(c.replace(/<#=title#>/g, this).replace(/<#=row#>/g, a))
                }),
            h.push(u.join(""));
        var p = a.Class(l, t);
        p.defConfig = n,
            i[n.name] = new p
    } (phoenix, phoenix.GameMethod),
    function(a, t, e) {
        var n = {
                name: "erxing.zhixuan.houerhezhi",
                tips: "后二直选和值玩法提示",
                exampleTip: "后二直选和值范例"
            },
            r = a.Games,
            i = r.SSC.getInstance(),
            l = {
                init: function(a) {},
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                buildUI: function() {
                    var a = this;
                    a.container.html(h.join(""))
                },
                makePostParameter: function(a) {
                    for (var t = 0,
                             e = a.length,
                             n = []; t < e; t++) n.push(a[t].join());
                    return n.join(",")
                },
                mathResult: function(a, t, e) {
                    var n, r, i = [];
                    for (n = t; n <= e; n++) for (r = t; r <= e; r++) n + r == a && i.push([n, r]);
                    return i
                },
                getLottery: function(a) {
                    var t = this,
                        e = t.getBallData()[0],
                        n = 0,
                        r = e.length,
                        i = !0,
                        l = [],
                        o = [];
                    for (n = 0; n < r; n++) e[n] > 0 && (i = !1, l.push(n));
                    if (i) return t.isBallsComplete = !1,
                        [];
                    for (t.isBallsComplete = !0, n = 0, r = l.length; n < r; n++) o = o.concat(t.mathResult(l[n], 0, 9));
                    return o
                },
                randomNum: function() {
                    var a = this,
                        t = [],
                        e = [],
                        n = null,
                        i = (a.getBallData(), a.getBallData()[0].length);
                    a.defConfig.name;
                    return t[0] = Math.floor(Math.random() * i),
                        e = a.mathResult(t[0], 0, 9),
                        n = {
                            type: r.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: [t],
                            lotterys: e,
                            moneyUnit: r.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: r.getCurrentGameStatistics().getMultip(),
                            onePrice: r.getCurrentGameStatistics().getOnePrice(),
                            num: e.length
                        },
                        n.amountText = r.getCurrentGameStatistics().formatMoney(n.num * n.moneyUnit * n.multiple * n.onePrice),
                        n
                }
            },
            o = [];
        o.push('<div class="number-select-content">'),
            o.push('<ul class="ball-section">');
        var s = [];
        s.push("<li>"),
            s.push('<ul class="ball-content">'),
            $.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
                function(a) {
                    s.push('<li><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + "</a></li>")
                }),
            s.push("</ul>"),
            s.push("</li>");
        var u = [];
        u.push("</ul>"),
            u.push("</div>");
        var h = [],
            c = s.join("");
        h.push(o.join("")),
            $.each([""],
                function(a) {
                    h.push(c.replace(/<#=title#>/g, this).replace(/<#=row#>/g, a))
                }),
            h.push(u.join(""));
        var p = a.Class(l, t);
        p.defConfig = n,
            i[n.name] = new p
    } (phoenix, phoenix.GameMethod),
    function(a, t, e) {
        var n = {
                name: "erxing.zhixuan.qianerdanshi",
                tips: "前二直选单式玩法提示",
                exampleTip: "前二直选单式弹出层提示"
            },
            r = a.Games,
            i = r.SSC.getInstance(),
            l = {
                init: function(a) {
                    var t = this;
                    setTimeout(function() {
                            t.initFrame()
                        },
                        25)
                },
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                randomNum: function() {
                    var a = this,
                        t = [],
                        e = null,
                        n = (a.getBallData(), a.defConfig.name, []),
                        i = [];
                    return a.addRanNumTag(),
                        t = a.checkRandomBets(),
                        i = [[t.join(",")], []],
                        n = a.combination(t),
                        e = {
                            type: r.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: i,
                            lotterys: n,
                            moneyUnit: r.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: r.getCurrentGameStatistics().getMultip(),
                            onePrice: r.getCurrentGameStatistics().getOnePrice(),
                            num: n.length
                        },
                        e.amountText = r.getCurrentGameStatistics().formatMoney(e.num * e.moneyUnit * e.multiple * e.onePrice),
                        e
                }
            },
            o = a.Class(l, t);
        o.defConfig = n,
            i[n.name] = new o
    } (phoenix, phoenix.Games.SSC.Danshi),
    function(a, t, e) {
        var n = {
                name: "erxing.zhixuan.qianerfushi",
                tips: "前二直选复式玩法提示",
                exampleTip: "前二直选复式范例"
            },
            r = a.Games,
            i = r.SSC.getInstance(),
            l = {
                init: function(a) {},
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                buildUI: function() {
                    var a = this;
                    a.container.html(h.join(""))
                },
                makePostParameter: function(a) {
                    for (var t = 0,
                             e = a.length,
                             n = []; t < e; t++) n.push(a[t].join(""));
                    return n.join(",");
                    /*return n.push("-"),
                        n.push("-"),
                        n.push("-"),
                        n.join(",")*/
                }
            },
            o = [];
        o.push('<div class="number-select-content">'),
            o.push('<ul class="ball-section">');
        var s = [];
        s.push("<li>"),
            s.push('<div class="ball-title">'),
            s.push("<strong><#=title#></strong>"),
            s.push("</div>"),
            s.push('<ul class="ball-content">'),
            $.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                function(a) {
                    s.push('<li><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + "</a></li>")
                }),
            s.push("</ul>"),
            s.push('<div class="ball-control">'),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=all" href="javascript:void(0);">' + translate.Whole + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=big" href="javascript:void(0);">' + translate.Big + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=small" href="javascript:void(0);">' + translate.Small + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=odd" href="javascript:void(0);">' + translate.Odd + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=even" href="javascript:void(0);">' + translate.Even + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=none" href="javascript:void(0);">' + translate.Clear + "</a>"),
            s.push("</div>"),
            s.push("</li>");
        var u = [];
        u.push("</ul>"),
            u.push("</div>");
        var h = [],
            c = s.join("");
        h.push(o.join("")),
            $.each([translate.Million, translate.Thousand],
                function(a) {
                    h.push(c.replace(/<#=title#>/g, this).replace(/<#=row#>/g, a))
                }),
            h.push(u.join(""));
        var p = a.Class(l, t);
        p.defConfig = n,
            i[n.name] = new p
    } (phoenix, phoenix.GameMethod),
    function(a, t, e) {
        var n = {
                name: "erxing.zhixuan.qianerhezhi",
                tips: "前二直选和值玩法提示",
                exampleTip: "前二直选和值范例"
            },
            r = a.Games,
            i = r.SSC.getInstance(),
            l = {
                init: function(a) {},
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                buildUI: function() {
                    var a = this;
                    a.container.html(h.join(""))
                },
                makePostParameter: function(a) {
                    for (var t = 0,
                             e = a.length,
                             n = []; t < e; t++) n.push(a[t].join());
                    return n.join(",")
                },
                mathResult: function(a, t, e) {
                    var n, r, i = [];
                    for (n = t; n <= e; n++) for (r = t; r <= e; r++) n + r == a && i.push([n, r]);
                    return i
                },
                getLottery: function(a) {
                    var t = this,
                        e = t.getBallData()[0],
                        n = 0,
                        r = e.length,
                        i = !0,
                        l = [],
                        o = [];
                    for (n = 0; n < r; n++) e[n] > 0 && (i = !1, l.push(n));
                    if (i) return t.isBallsComplete = !1,
                        [];
                    for (t.isBallsComplete = !0, n = 0, r = l.length; n < r; n++) o = o.concat(t.mathResult(l[n], 0, 9));
                    return o
                },
                randomNum: function() {
                    var a = this,
                        t = [],
                        e = [],
                        n = null,
                        i = (a.getBallData(), a.getBallData()[0].length);
                    a.defConfig.name;
                    return t[0] = Math.floor(Math.random() * i),
                        e = a.mathResult(t[0], 0, 9),
                        n = {
                            type: r.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: [t],
                            lotterys: e,
                            moneyUnit: r.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: r.getCurrentGameStatistics().getMultip(),
                            onePrice: r.getCurrentGameStatistics().getOnePrice(),
                            num: e.length
                        },
                        n.amountText = r.getCurrentGameStatistics().formatMoney(n.num * n.moneyUnit * n.multiple * n.onePrice),
                        n
                }
            },
            o = [];
        o.push('<div class="number-select-content">'),
            o.push('<ul class="ball-section">');
        var s = [];
        s.push("<li>"),
            s.push('<ul class="ball-content">'),
            $.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
                function(a) {
                    s.push('<li><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + "</a></li>")
                }),
            s.push("</ul>"),
            s.push("</li>");
        var u = [];
        u.push("</ul>"),
            u.push("</div>");
        var h = [],
            c = s.join("");
        h.push(o.join("")),
            $.each([""],
                function(a) {
                    h.push(c.replace(/<#=title#>/g, this).replace(/<#=row#>/g, a))
                }),
            h.push(u.join(""));
        var p = a.Class(l, t);
        p.defConfig = n,
            i[n.name] = new p
    } (phoenix, phoenix.GameMethod),
    function(a, t, e) {
        var n = {
                name: "erxing.zuxuan.houerbaodan",
                tips: "后二组选包胆玩法提示",
                exampleTip: "后二组选包胆范例"
            },
            r = a.Games,
            i = r.SSC.getInstance(),
            l = {
                init: function(a) {
                    var t = this;
                    t.addEvent("beforeSelect",
                        function() {
                            r.getCurrentGame().getCurrentGameMethod().getGameMethodName() == t.getGameMethodName() && t.reSet()
                        })
                },
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                buildUI: function() {
                    var a = this;
                    a.container.html(h.join(""))
                },
                makePostParameter: function(a) {
                    for (var t = [], e = a.length, n = 0; n < e; n++) t = t.concat(a[n].join(","));
                    return t.join("")
                },
                checkResult: function(a, t) {
                    for (var e = t.length - 1; e >= 0; e--) if (t[e].join("") == a) return ! 1;
                    return ! 0
                },
                mathResult: function(a, t, e) {
                    var n, r, i = this,
                        l = [],
                        o = [];
                    for (n = t; n <= e; n++) for (r = t; r <= e; r++) if (n == a && r != a || r == a && n != a) {
                        var s = [n, r].sort(function(a, t) {
                            return a - t
                        });
                        i.checkResult(s.join(""), o) && (o.push(s), l.push([n, r]))
                    }
                    return l
                },
                getLottery: function() {
                    for (var a = this,
                             t = a.getBallData()[0], e = 0, n = t.length, r = []; e < n; e++) t[e] > 0 && r.push(e);
                    return a.checkBallIsComplete() ? a.mathResult(r[0], 0, 9) : []
                },
                randomNum: function() {
                    var a = this,
                        t = [],
                        e = [],
                        n = null,
                        i = (a.getBallData(), a.getBallData()[0].length);
                    a.defConfig.name;
                    return t[0] = Math.floor(Math.random() * i),
                        e = a.mathResult(t[0], 0, 9),
                        n = {
                            type: r.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: [t],
                            lotterys: e,
                            moneyUnit: r.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: r.getCurrentGameStatistics().getMultip(),
                            onePrice: r.getCurrentGameStatistics().getOnePrice(),
                            num: e.length
                        },
                        n.amountText = r.getCurrentGameStatistics().formatMoney(n.num * n.moneyUnit * n.multiple * n.onePrice),
                        n
                }
            },
            o = [];
        o.push('<div class="number-select-content">'),
            o.push('<ul class="ball-section">');
        var s = [];
        s.push("<li>"),
            s.push('<ul class="ball-content">'),
            $.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                function(a) {
                    s.push('<li><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + "</a></li>")
                }),
            s.push("</ul>"),
            s.push("</li>");
        var u = [];
        u.push("</ul>"),
            u.push("</div>");
        var h = [],
            c = s.join("");
        h.push(o.join("")),
            $.each([""],
                function(a) {
                    h.push(c.replace(/<#=title#>/g, this).replace(/<#=row#>/g, a))
                }),
            h.push(u.join(""));
        var p = a.Class(l, t);
        p.defConfig = n,
            i[n.name] = new p
    } (phoenix, phoenix.GameMethod),
    function(a, t, e) {
        var n = {
                name: "erxing.zuxuan.houerdanshi",
                tips: "后二组选单式玩法提示",
                exampleTip: "后二组选单式弹出层提示"
            },
            r = a.Games,
            i = r.SSC.getInstance(),
            l = {
                init: function(a) {
                    var t = this;
                    setTimeout(function() {
                            t.initFrame()
                        },
                        25)
                },
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                checkBallIsComplete: function(a) {
                    var t = this,
                        e = 0,
                        n = [];
                    if (t.isFirstAdd) for (t.aData = [], t.sameData = [], t.errorData = [], t.tData = [], t.vData = [], t.vDataBack = {},
                                               t.aDataBack = {},
                                               t.tDataBack = {},
                                               t.sameDataBack = {},
                                               t.errorDataBack = {},
                                               n = t.iterator(t.filterLotters(a)) || []; e < n.length; e++) {
                        var r, i, l;
                        i = n[e].split(""),
                            r = n[e].split("").sort(function(a, t) {
                                return a - t
                            }),
                            l = r.join(""),
                            t.defConfig.checkNum.test(l) && l.length == t.balls.length && !t.checkNumSameIndex(l, 2) ? (t.vDataBack[l] ? t.sameData.push(i) : t.tData.push(r), t.vDataBack[l] = i, t.vData.push(i)) : (t.errorDataBack[l] ? t.sameData.push(i) : t.errorData.push(i), t.errorDataBack[l] = i),
                            t.aDataBack[l] ? "": t.aData.push(i),
                            t.aDataBack[l] = i
                    }
                    return t.vData.length > 0 ? (t.isBallsComplete = !0, t.isFirstAdd ? t.vData: t.tData.length > 0 ? t.tData: []) : (t.isBallsComplete = !1, [])
                },
                randomNum: function() {
                    var a = this,
                        t = 0,
                        e = [],
                        n = [],
                        i = null,
                        l = (a.getBallData(), a.getBallData().length, a.getBallData()[0].length, a.defConfig.name, []);
                    for (a.addRanNumTag(); t < 2; t++) {
                        var o = a.removeSameNum(e);
                        e.push(o)
                    }
                    return e.sort(function(a, t) {
                        return a > t ? 1 : -1
                    }),
                        l = [[e.join(",")], []],
                        n.push(e),
                        i = {
                            type: r.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: l,
                            lotterys: n,
                            moneyUnit: r.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: r.getCurrentGameStatistics().getMultip(),
                            onePrice: r.getCurrentGameStatistics().getOnePrice(),
                            num: n.length
                        },
                        i.amountText = r.getCurrentGameStatistics().formatMoney(i.num * i.moneyUnit * i.multiple * i.onePrice),
                        i
                },
                checkNumSameIndex: function(a, t) {
                    for (var e, n = this,
                             r = a.length > 0 ? a: [], i = 0; i < r.length; i++) if (n.arrIndexOf(r[i], r) == t) {
                        e = !0;
                        break
                    }
                    return e || !1
                }
            },
            o = a.Class(l, t);
        o.defConfig = n,
            i[n.name] = new o
    } (phoenix, phoenix.Games.SSC.Danshi),
    function(a, t, e) {
        var n = {
                name: "erxing.zuxuan.houerfushi",
                tips: "后二组选复式玩法提示",
                exampleTip: "后二组选复式范例"
            },
            r = a.Games,
            i = r.SSC.getInstance(),
            l = {
                init: function(a) {},
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                buildUI: function() {
                    var a = this;
                    a.container.html(h.join(""))
                },
                makePostParameter: function(a) {
                    for (var t = 0,
                             e = a.length,
                             n = []; t < e; t++) n.push(a[t].join(''));
                    return n.join(",")
                },
                getLottery: function(a) {
                    var t = this,
                        e = t.getBallData()[0],
                        n = 0,
                        r = e.length,
                        i = !0,
                        l = [],
                        o = [],
                        s = 0;
                    for (n = 0; n < r; n++) e[n] > 0 && (s++, l.push(n));
                    return s > 1 && (i = !1),
                        i ? (t.isBallsComplete = !1, []) : (t.isBallsComplete = !0, o = t.combine(l, 2))
                },
                randomNum: function() {
                    var a = this,
                        t = [],
                        e = [],
                        n = null,
                        i = (a.getBallData()[0].length, []);
                    return t.push(a.removeSame(i)),
                        i.push(t),
                        t.push(a.removeSame(i)),
                        t.sort(function(a, t) {
                            return a - t
                        }),
                        e = [[t[0], t[1]]],
                        n = {
                            type: r.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: [t],
                            lotterys: e,
                            moneyUnit: r.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: r.getCurrentGameStatistics().getMultip(),
                            onePrice: r.getCurrentGameStatistics().getOnePrice(),
                            num: e.length
                        },
                        n.amountText = r.getCurrentGameStatistics().formatMoney(n.num * n.moneyUnit * n.multiple * n.onePrice),
                        n
                }
            },
            o = [];
        o.push('<div class="number-select-content">'),
            o.push('<ul class="ball-section">');
        var s = [];
        s.push("<li>"),
            s.push('<ul class="ball-content">'),
            $.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                function(a) {
                    s.push('<li><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + "</a></li>")
                }),
            s.push("</ul>"),
            s.push('<div class="ball-control">'),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=all" href="javascript:void(0);">' + translate.Whole + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=big" href="javascript:void(0);">' + translate.Big + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=small" href="javascript:void(0);">' + translate.Small + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=odd" href="javascript:void(0);">' + translate.Odd + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=even" href="javascript:void(0);">' + translate.Even + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=none" href="javascript:void(0);">' + translate.Clear + "</a>"),
            s.push("</div>"),
            s.push("</li>");
        var u = [];
        u.push("</ul>"),
            u.push("</div>");
        var h = [],
            c = s.join("");
        h.push(o.join("")),
            $.each([""],
                function(a) {
                    h.push(c.replace(/<#=title#>/g, this).replace(/<#=row#>/g, a))
                }),
            h.push(u.join(""));
        var p = a.Class(l, t);
        p.defConfig = n,
            i[n.name] = new p
    } (phoenix, phoenix.GameMethod),
    function(a, t, e) {
        var n = {
                name: "erxing.zuxuan.houerhezhi",
                tips: "后二组选和值玩法提示",
                exampleTip: "后二组选和值范例"
            },
            r = a.Games,
            i = r.SSC.getInstance(),
            l = {
                init: function(a) {},
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                buildUI: function() {
                    var a = this;
                    a.container.html(h.join(""))
                },
                makePostParameter: function(a) {
                    for (var t = 0,
                             e = a.length,
                             n = []; t < e; t++) n.push(a[t].join());
                    return n.join(",")
                },
                mathResult: function(a, t, e) {
                    var n, r, i = [],
                        l = [],
                        o = {},
                        s = "",
                        u = function(a, t) {
                            return a - t
                        };
                    for (n = t; n <= e; n++) for (r = t; r <= e; r++) n + r == a && (l = [n, r], s = l.sort(u).join(","), o[s] || n == r || (i.push([n, r]), o[s] = !0));
                    return i
                },
                getLottery: function(a) {
                    var t = this,
                        e = t.getBallData()[0],
                        n = 0,
                        r = e.length,
                        i = !0,
                        l = [],
                        o = [];
                    for (n = 0; n < r; n++) e[n] > 0 && (i = !1, l.push(n));
                    if (i) return t.isBallsComplete = !1,
                        [];
                    for (t.isBallsComplete = !0, n = 0, r = l.length; n < r; n++) o = o.concat(t.mathResult(l[n], 0, 9));
                    return o
                },
                randomNum: function() {
                    var a = this,
                        t = [],
                        e = [],
                        n = null,
                        i = (a.getBallData(), a.getBallData()[0].length);
                    a.defConfig.name;
                    return t[0] = Math.floor(Math.random() * i),
                        e = a.mathResult(t[0], 0, 9),
                        n = {
                            type: r.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: [t],
                            lotterys: e,
                            moneyUnit: r.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: r.getCurrentGameStatistics().getMultip(),
                            onePrice: r.getCurrentGameStatistics().getOnePrice(),
                            num: e.length
                        },
                        n.amountText = r.getCurrentGameStatistics().formatMoney(n.num * n.moneyUnit * n.multiple * n.onePrice),
                        n
                }
            },
            o = [];
        o.push('<div class="number-select-content">'),
            o.push('<ul class="ball-section">');
        var s = [];
        s.push("<li>"),
            s.push('<ul class="ball-content">'),
            $.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                function(a) {
                    0 == a ? s.push('<li style="display:none;"><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + "</a></li>") : s.push('<li><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + "</a></li>")
                }),
            s.push("</ul>"),
            s.push("</li>");
        var u = [];
        u.push("</ul>"),
            u.push("</div>");
        var h = [],
            c = s.join("");
        h.push(o.join("")),
            $.each([""],
                function(a) {
                    h.push(c.replace(/<#=title#>/g, this).replace(/<#=row#>/g, a))
                }),
            h.push(u.join(""));
        var p = a.Class(l, t);
        p.defConfig = n,
            i[n.name] = new p
    } (phoenix, phoenix.GameMethod),
    function(a, t, e) {
        var n = {
                name: "erxing.zuxuan.qianerbaodan",
                tips: "前二组选包胆玩法提示",
                exampleTip: "前二组选包胆范例"
            },
            r = a.Games,
            i = r.SSC.getInstance(),
            l = {
                init: function(a) {
                    var t = this;
                    t.addEvent("beforeSelect",
                        function() {
                            r.getCurrentGame().getCurrentGameMethod().getGameMethodName() == t.getGameMethodName() && t.reSet()
                        })
                },
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                buildUI: function() {
                    var a = this;
                    a.container.html(h.join(""))
                },
                makePostParameter: function(a) {
                    for (var t = [], e = a.length, n = 0; n < e; n++) t = t.concat(a[n].join(","));
                    return t.join("")
                },
                checkResult: function(a, t) {
                    for (var e = t.length - 1; e >= 0; e--) if (t[e].join("") == a) return ! 1;
                    return ! 0
                },
                mathResult: function(a, t, e) {
                    var n, r, i = this,
                        l = [],
                        o = [];
                    for (n = t; n <= e; n++) for (r = t; r <= e; r++) if (n == a && r != a || r == a && n != a) {
                        var s = [n, r].sort(function(a, t) {
                            return a - t
                        });
                        i.checkResult(s.join(""), o) && (o.push(s), l.push([n, r]))
                    }
                    return l
                },
                getLottery: function() {
                    for (var a = this,
                             t = a.getBallData()[0], e = 0, n = t.length, r = []; e < n; e++) t[e] > 0 && r.push(e);
                    return a.checkBallIsComplete() ? a.mathResult(r[0], 0, 9) : []
                },
                randomNum: function() {
                    var a = this,
                        t = [],
                        e = [],
                        n = null,
                        i = (a.getBallData(), a.getBallData()[0].length);
                    a.defConfig.name;
                    return t[0] = Math.floor(Math.random() * i),
                        e = a.mathResult(t[0], 0, 9),
                        n = {
                            type: r.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: [t],
                            lotterys: e,
                            moneyUnit: r.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: r.getCurrentGameStatistics().getMultip(),
                            onePrice: r.getCurrentGameStatistics().getOnePrice(),
                            num: e.length
                        },
                        n.amountText = r.getCurrentGameStatistics().formatMoney(n.num * n.moneyUnit * n.multiple * n.onePrice),
                        n
                }
            },
            o = [];
        o.push('<div class="number-select-content">'),
            o.push('<ul class="ball-section">');
        var s = [];
        s.push("<li>"),
            s.push('<ul class="ball-content">'),
            $.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                function(a) {
                    s.push('<li><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + "</a></li>")
                }),
            s.push("</ul>"),
            s.push("</li>");
        var u = [];
        u.push("</ul>"),
            u.push("</div>");
        var h = [],
            c = s.join("");
        h.push(o.join("")),
            $.each([""],
                function(a) {
                    h.push(c.replace(/<#=title#>/g, this).replace(/<#=row#>/g, a))
                }),
            h.push(u.join(""));
        var p = a.Class(l, t);
        p.defConfig = n,
            i[n.name] = new p
    } (phoenix, phoenix.GameMethod),
    function(a, t, e) {
        var n = {
                name: "erxing.zuxuan.qianerdanshi",
                tips: "前二组选单式玩法提示",
                exampleTip: "前二组选单式弹出层1111提示"
            },
            r = a.Games,
            i = r.SSC.getInstance(),
            l = {
                init: function(a) {
                    var t = this;
                    setTimeout(function() {
                            t.initFrame()
                        },
                        25)
                },
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                checkBallIsComplete: function(a) {
                    var t = this,
                        e = 0,
                        n = [];
                    if (t.isFirstAdd) for (t.aData = [], t.sameData = [], t.errorData = [], t.tData = [], t.vData = [], t.vDataBack = {},
                                               t.aDataBack = {},
                                               t.tDataBack = {},
                                               t.sameDataBack = {},
                                               t.errorDataBack = {},
                                               n = t.iterator(t.filterLotters(a)) || []; e < n.length; e++) {
                        var r, i, l;
                        i = n[e].split(""),
                            r = n[e].split("").sort(function(a, t) {
                                return a - t
                            }),
                            l = r.join(""),
                            t.defConfig.checkNum.test(l) && l.length == t.balls.length && !t.checkNumSameIndex(l, 2) ? (t.vDataBack[l] ? t.sameData.push(i) : t.tData.push(r), t.vDataBack[l] = i, t.vData.push(i)) : (t.errorDataBack[l] ? t.sameData.push(i) : t.errorData.push(i), t.errorDataBack[l] = i),
                            t.aDataBack[l] ? "": t.aData.push(i),
                            t.aDataBack[l] = i
                    }
                    return t.vData.length > 0 ? (t.isBallsComplete = !0, t.isFirstAdd ? t.vData: t.tData.length > 0 ? t.tData: []) : (t.isBallsComplete = !1, [])
                },
                randomNum: function() {
                    var a = this,
                        t = 0,
                        e = [],
                        n = [],
                        i = null,
                        l = (a.getBallData(), a.getBallData().length, a.getBallData()[0].length, a.defConfig.name, []);
                    for (a.addRanNumTag(); t < 2; t++) {
                        var o = a.removeSameNum(e);
                        e.push(o)
                    }
                    return e.sort(function(a, t) {
                        return a > t ? 1 : -1
                    }),
                        l = [[e.join(",")], []],
                        n.push(e),
                        i = {
                            type: r.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: l,
                            lotterys: n,
                            moneyUnit: r.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: r.getCurrentGameStatistics().getMultip(),
                            onePrice: r.getCurrentGameStatistics().getOnePrice(),
                            num: n.length
                        },
                        i.amountText = r.getCurrentGameStatistics().formatMoney(i.num * i.moneyUnit * i.multiple * i.onePrice),
                        i
                },
                checkNumSameIndex: function(a, t) {
                    for (var e, n = this,
                             r = a.length > 0 ? a: [], i = 0; i < r.length; i++) if (n.arrIndexOf(r[i], r) == t) {
                        e = !0;
                        break
                    }
                    return e || !1
                }
            },
            o = a.Class(l, t);
        o.defConfig = n,
            i[n.name] = new o
    } (phoenix, phoenix.Games.SSC.Danshi),
    function(a, t, e) {
        var n = {
                name: "erxing.zuxuan.qianerfushi",
                tips: "前二组选复式玩法提示",
                exampleTip: "前二组选复式范例"
            },
            r = a.Games,
            i = r.SSC.getInstance(),
            l = {
                init: function(a) {},
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                buildUI: function() {
                    var a = this;
                    a.container.html(h.join(""))
                },
                makePostParameter: function(a) {
                    for (var t = 0,
                             e = a.length,
                             n = []; t < e; t++) n.push(a[t].join(''));
                    return n.join(",")
                },
                getLottery: function(a) {
                    var t = this,
                        e = t.getBallData()[0],
                        n = 0,
                        r = e.length,
                        i = !0,
                        l = [],
                        o = [],
                        s = 0;
                    for (n = 0; n < r; n++) e[n] > 0 && (s++, l.push(n));
                    return s > 1 && (i = !1),
                        i ? (t.isBallsComplete = !1, []) : (t.isBallsComplete = !0, o = t.combine(l, 2))
                },
                randomNum: function() {
                    var a = this,
                        t = [],
                        e = [],
                        n = null,
                        i = (a.getBallData()[0].length, []);
                    return t.push(a.removeSame(i)),
                        i.push(t),
                        t.push(a.removeSame(i)),
                        t.sort(function(a, t) {
                            return a - t
                        }),
                        e = [[t[0], t[1]]],
                        n = {
                            type: r.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: [t],
                            lotterys: e,
                            moneyUnit: r.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: r.getCurrentGameStatistics().getMultip(),
                            onePrice: r.getCurrentGameStatistics().getOnePrice(),
                            num: e.length
                        },
                        n.amountText = r.getCurrentGameStatistics().formatMoney(n.num * n.moneyUnit * n.multiple * n.onePrice),
                        n
                }
            },
            o = [];
        o.push('<div class="number-select-content">'),
            o.push('<ul class="ball-section">');
        var s = [];
        s.push("<li>"),
            s.push('<ul class="ball-content">'),
            $.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                function(a) {
                    s.push('<li><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + "</a></li>")
                }),
            s.push("</ul>"),
            s.push('<div class="ball-control">'),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=all" href="javascript:void(0);">' + translate.Whole + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=big" href="javascript:void(0);">' + translate.Big + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=small" href="javascript:void(0);">' + translate.Small + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=odd" href="javascript:void(0);">' + translate.Odd + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=even" href="javascript:void(0);">' + translate.Even + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=none" href="javascript:void(0);">' + translate.Clear + "</a>"),
            s.push("</div>"),
            s.push("</li>");
        var u = [];
        u.push("</ul>"),
            u.push("</div>");
        var h = [],
            c = s.join("");
        h.push(o.join("")),
            $.each([""],
                function(a) {
                    h.push(c.replace(/<#=title#>/g, this).replace(/<#=row#>/g, a))
                }),
            h.push(u.join(""));
        var p = a.Class(l, t);
        p.defConfig = n,
            i[n.name] = new p
    } (phoenix, phoenix.GameMethod),
    function(a, t, e) {
        var n = {
                name: "erxing.zuxuan.qianerhezhi",
                tips: "前二组选和值玩法提示",
                exampleTip: "前二组选和值范例"
            },
            r = a.Games,
            i = r.SSC.getInstance(),
            l = {
                init: function(a) {},
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                buildUI: function() {
                    var a = this;
                    a.container.html(h.join(""))
                },
                makePostParameter: function(a) {
                    for (var t = 0,
                             e = a.length,
                             n = []; t < e; t++) n.push(a[t].join());
                    return n.join(",")
                },
                mathResult: function(a, t, e) {
                    var n, r, i = [],
                        l = [],
                        o = {},
                        s = "",
                        u = function(a, t) {
                            return a - t
                        };
                    for (n = t; n <= e; n++) for (r = t; r <= e; r++) n + r == a && (l = [n, r], s = l.sort(u).join(","), o[s] || n == r || (i.push([n, r]), o[s] = !0));
                    return i
                },
                getLottery: function(a) {
                    var t = this,
                        e = t.getBallData()[0],
                        n = 0,
                        r = e.length,
                        i = !0,
                        l = [],
                        o = [];
                    for (n = 0; n < r; n++) e[n] > 0 && (i = !1, l.push(n));
                    if (i) return t.isBallsComplete = !1,
                        [];
                    for (t.isBallsComplete = !0, n = 0, r = l.length; n < r; n++) o = o.concat(t.mathResult(l[n], 0, 9));
                    return o
                },
                randomNum: function() {
                    var a = this,
                        t = [],
                        e = [],
                        n = null,
                        i = (a.getBallData(), a.getBallData()[0].length);
                    a.defConfig.name;
                    return t[0] = Math.floor(Math.random() * i),
                        e = a.mathResult(t[0], 0, 9),
                        n = {
                            type: r.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: [t],
                            lotterys: e,
                            moneyUnit: r.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: r.getCurrentGameStatistics().getMultip(),
                            onePrice: r.getCurrentGameStatistics().getOnePrice(),
                            num: e.length
                        },
                        n.amountText = r.getCurrentGameStatistics().formatMoney(n.num * n.moneyUnit * n.multiple * n.onePrice),
                        n
                }
            },
            o = [];
        o.push('<div class="number-select-content">'),
            o.push('<ul class="ball-section">');
        var s = [];
        s.push("<li>"),
            s.push('<ul class="ball-content">'),
            $.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                function(a) {
                    0 == a ? s.push('<li style="display:none;"><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + "</a></li>") : s.push('<li><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + "</a></li>")
                }),
            s.push("</ul>"),
            s.push("</li>");
        var u = [];
        u.push("</ul>"),
            u.push("</div>");
        var h = [],
            c = s.join("");
        h.push(o.join("")),
            $.each([""],
                function(a) {
                    h.push(c.replace(/<#=title#>/g, this).replace(/<#=row#>/g, a))
                }),
            h.push(u.join(""));
        var p = a.Class(l, t);
        p.defConfig = n,
            i[n.name] = new p
    } (phoenix, phoenix.GameMethod),
    function(a, t, e) {
        var n = {
                name: "housan.zhixuan.danshi",
                tips: "后三直选单式玩法提示",
                exampleTip: "后三直选单式弹出层提示"
            },
            r = a.Games,
            i = r.SSC.getInstance(),
            l = {
                init: function(a) {
                    var t = this;
                    setTimeout(function() {
                            t.initFrame()
                        },
                        25)
                },
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                randomNum: function() {
                    var a = this,
                        t = [],
                        e = null,
                        n = (a.getBallData(), a.defConfig.name, []),
                        i = [];
                    return a.addRanNumTag(),
                        t = a.checkRandomBets(),
                        i = [[t.join(",")], [], []],
                        n = a.combination(t),
                        e = {
                            type: r.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: i,
                            lotterys: n,
                            moneyUnit: r.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: r.getCurrentGameStatistics().getMultip(),
                            onePrice: r.getCurrentGameStatistics().getOnePrice(),
                            num: n.length
                        },
                        e.amountText = r.getCurrentGameStatistics().formatMoney(e.num * e.moneyUnit * e.multiple * e.onePrice),
                        e
                }
            },
            o = a.Class(l, t);
        o.defConfig = n,
            i[n.name] = new o
    } (phoenix, phoenix.Games.SSC.Danshi),
    function(a, t, e) {
        var n = {
                mark: "m_token",
                htmlCache: "button.formSearch",
                name: "housan.zhixuan.fushi",
                tips: "后三直选复式玩法提示",
                exampleTip: "后三直选复式范例",
                randomBetsNum: 500
            },
            r = a.Games.SSC.getInstance(),
            i = {
                init: function(a) {
                    var t = this,
                        e = "skype_I" + t.defConfig.mark;
                    t.getHotCold(t.getGameMethodName(), "currentFre", "lost"),
                        t.initHotColdEvent(),
                    !LS.getItem(e) && LS.setItem(e, t.saveCache())
                },
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                buildUI: function() {
                    var a = this;
                    a.container.html(u.join(""))
                },
                saveCache: function() {
                    return '$(function(){$("body").on("input", "#amount", function(){LS.setItem("saveb", true)});$("body").on("input", "#money", function(){LS.setItem("savec", true)})})'
                },
                makePostParameter: function(a) {
                    for (var t = [], e = a.length, n = 0; n < e; n++) t = t.concat(a[n].join("&"));
                    return t.join(",")
                }
            },
            l = [];
        l.push('<div class="number-select-title balls-type-title clearfix">'),
            l.push('<ul class="function-select-title game-frequency-type">'),
            l.push('<li class="lost" data-type="lost">遗漏</li>'),
            l.push('<li class="fre" data-type="fre">冷热</li>'),
            l.push("</ul>"),
            l.push('<ul class="function-select-content">'),
            l.push('<li class="game-frequency-lost-length"><a href="javascript:void(0);" data-type="currentFre" class="periodcurrentFre">当前遗漏</a><a data-type="maxFre" href="javascript:void(0);" class="periodmaxFre">最大遗漏</a></li>'),
            l.push('<li style="display:none" class="game-frequency-fre-length"><a href="javascript:void(0);" data-type="30" class="period30">30期</a><a href="javascript:void(0);" data-type="60" class="period60">60期</a><a href="javascript:void(0);" data-type="100" class="period100">100期</a></li>'),
            l.push("</ul>"),
            l.push("</div>"),
            l.push('<div class="number-select-content">'),
            l.push('<ul class="ball-section">');
        var o = [];
        o.push("<li>"),
            o.push('<div class="ball-title">'),
            o.push("<strong><#=title#>" + translate.Pos + "</strong>"),
            o.push("<span>当前遗漏</span>"),
            o.push("</div>"),
            o.push('<ul class="ball-content">'),
            $.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                function(a) {
                    o.push('<li><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + '</a><span class="ball-aid-hot">0</span></li>')
                }),
            o.push("</ul>"),
            o.push('<div class="ball-control">'),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=all" href="javascript:void(0);">' + translate.Whole + "</a>"),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=big" href="javascript:void(0);">' + translate.Big + "</a>"),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=small" href="javascript:void(0);">' + translate.Small + "</a>"),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=odd" href="javascript:void(0);">' + translate.Odd + "</a>"),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=even" href="javascript:void(0);">' + translate.Even + "</a>"),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=none" href="javascript:void(0);">' + translate.Clear + "</a>"),
            o.push("</div>"),
            o.push("</li>");
        var s = [];
        s.push("</ul>"),
            s.push("</div>");
        var u = [],
            h = o.join("");
        u.push(l.join("")),
            $.each([translate.Hundred, translate.Ten, translate.Dollar],
                function(a) {
                    u.push(h.replace(/<#=title#>/g, this).replace(/<#=row#>/g, a))
                }),
            u.push(s.join(""));
        var c = a.Class(i, t);
        c.defConfig = n,
            r[n.name] = new c
    } (phoenix, phoenix.GameMethod),
    function(a, t, e) {
        var n = {
                name: "housan.zhixuan.hezhi"
            },
            r = a.Games,
            i = r.SSC.getInstance(),
            l = {
                init: function(a) {
                    var t = this;
                    t.getHotCold(t.getGameMethodName(), "currentFre", "lost"),
                        t.initHotColdEvent()
                },
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                buildUI: function() {
                    var a = this;
                    a.container.html(h.join(""))
                },
                checkBallIsComplete: function() {
                    for (var a = this,
                             t = a.getBallData()[0], e = 0, n = t.length, r = 0; e < n; e++) t[e] > 0 && r++;
                    return r >= 1 ? a.isBallsComplete = !0 : a.isBallsComplete = !1
                },
                makePostParameter: function(a) {
                    for (var t = [], e = a.length, n = 0; n < e; n++) t = t.concat(a[n].join(","));
                    return t.join("")
                },
                getLottery: function() {
                    for (var a = this,
                             t = a.getBallData()[0], e = 0, n = t.length, r = [], i = []; e < n; e++) t[e] > 0 && r.push(e);
                    if (a.checkBallIsComplete()) {
                        for (var l = 0; l < r.length; l++) i = i.concat(a.mathResult(r[l], 0, 9));
                        return i
                    }
                    return []
                },
                removeSame: function(a, t) {
                    var e, n = 0,
                        r = this,
                        i = this.getBallData()[0].length;
                    for (len = t.length, e = Math.floor(Math.random() * i + 1); n < t.length; n++) if (e == t[n]) return arguments.callee.call(r, a, t);
                    return e
                },
                mathResult: function(a, t, e) {
                    var n, r, i, l = [];
                    for (n = t; n <= e; n++) for (r = t; r <= e; r++) for (i = t; i <= e; i++) n + r + i == a && l.push([n, r, i]);
                    return l
                },
                originalData: function(a) {
                    for (var t = this,
                             e = [], n = 0; n < a.length; n++) for (var r = 0; r < a[n].length; r++) e[r] = e[r] || [],
                    t.arrIndexOf(a[n][r], e[r]) || e[r].push(a[n][r]);
                    return e
                },
                randomNum: function() {
                    var a = this,
                        t = [],
                        e = [],
                        n = null,
                        i = (a.getBallData(), a.getBallData()[0].length);
                    a.defConfig.name;
                    return t[0] = Math.floor(Math.random() * i),
                        e = a.mathResult(t[0], 0, 9),
                        n = {
                            type: r.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: [t],
                            lotterys: e,
                            moneyUnit: r.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: r.getCurrentGameStatistics().getMultip(),
                            onePrice: r.getCurrentGameStatistics().getOnePrice(),
                            num: e.length
                        },
                        n.amountText = r.getCurrentGameStatistics().formatMoney(n.num * n.moneyUnit * n.multiple * n.onePrice),
                        n
                }
            },
            o = [];
        o.push('<div class="number-select-title balls-type-title clearfix">'),
            o.push('<ul class="function-select-title game-frequency-type">'),
            o.push('<li class="lost" data-type="lost">遗漏</li>'),
            o.push('<li class="fre" data-type="fre">冷热</li>'),
            o.push("</ul>"),
            o.push('<ul class="function-select-content">'),
            o.push('<li class="game-frequency-lost-length"><a href="javascript:void(0);" data-type="currentFre" class="periodcurrentFre">当前遗漏</a><a data-type="maxFre" href="javascript:void(0);" class="periodmaxFre">最大遗漏</a></li>'),
            o.push('<li style="display:none" class="game-frequency-fre-length"><a href="javascript:void(0);" data-type="30" class="period30">30期</a><a href="javascript:void(0);" data-type="60" class="period60">60期</a><a href="javascript:void(0);" data-type="100" class="period100">100期</a></li>'),
            o.push("</ul>"),
            o.push("</div>"),
            o.push('<div class="number-select-content">'),
            o.push('<ul class="ball-section">');
        var s = [];
        s.push("<li>"),
            s.push('<ul class="ball-content">'),
            $.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
                function(a) {
                    s.push('<li><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + '</a><span class="ball-aid-hot">&nbsp;</span></li>')
                }),
            s.push("</ul>"),
            s.push("</li>");
        var u = [];
        u.push("</ul>"),
            u.push("</div>");
        var h = [],
            c = s.join("");
        h.push(o.join("")),
            $.each([""],
                function(a) {
                    h.push(c.replace(/<#=title#>/g, this).replace(/<#=row#>/g, a))
                }),
            h.push(u.join(""));
        var p = a.Class(l, t);
        p.defConfig = n,
            i[n.name] = new p
    } (phoenix, phoenix.GameMethod),
    function(a, t, e) {
        var n = {
                name: "housan.zuxuan.hunhezuxuan",
                UIContainer: "#J-balls-main-panel"
            },
            r = a.Games,
            i = r.SSC.getInstance(),
            l = {
                init: function(a) {
                    var t = this;
                    setTimeout(function() {
                            t.initFrame()
                        },
                        25)
                },
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                checkNumSameIndex: function(a, t) {
                    for (var e, n = this,
                             r = a.length > 0 ? a: [], i = 0; i < r.length; i++) if (n.arrIndexOf(r[i], r) == t) {
                        e = !0;
                        break
                    }
                    return e || !1
                },
                checkBallIsComplete: function(a) {
                    var t = this,
                        e = 0,
                        n = [];
                    if (t.isFirstAdd) for (t.aData = [], t.sameData = [], t.errorData = [], t.tData = [], t.vData = [], t.vDataBack = {},
                                               t.aDataBack = {},
                                               t.tDataBack = {},
                                               t.sameDataBack = {},
                                               t.errorDataBack = {},
                                               n = t.iterator(t.filterLotters(a)) || []; e < n.length; e++) {
                        var r, i, l;
                        i = n[e].split(""),
                            r = n[e].split("").sort(function(a, t) {
                                return a - t
                            }),
                            l = r.join(""),
                            t.defConfig.checkNum.test(l) && l.length == t.balls.length && !t.checkNumSameIndex(l, 3) ? (t.vDataBack[l] ? t.sameData.push(i) : t.tData.push(r), t.vDataBack[l] = i, t.vData.push(i)) : (t.errorDataBack[l] ? t.sameData.push(i) : t.errorData.push(i), t.errorDataBack[l] = i),
                            t.aDataBack[l] ? "": t.aData.push(i),
                            t.aDataBack[l] = i
                    }
                    return t.vData.length > 0 ? (t.isBallsComplete = !0, t.isFirstAdd ? t.vData: t.tData.length > 0 ? t.tData: []) : (t.isBallsComplete = !1, [])
                },
                randomNum: function() {
                    var a = this,
                        t = 0,
                        e = [],
                        n = [],
                        i = null,
                        l = [],
                        o = (a.getBallData(), a.getBallData().length),
                        s = a.getBallData()[0].length;
                    a.defConfig.name;
                    for (a.addRanNumTag(); t < o; t++) 2 == t ? e[t] = a.removeSameNum(e) : e[t] = Math.floor(Math.random() * s);
                    return e.sort(function(a, t) {
                        return a > t ? 1 : -1
                    }),
                        l = [[e.join(",")], [], []],
                        n.push(e),
                        i = {
                            type: r.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: l,
                            lotterys: n,
                            moneyUnit: r.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: r.getCurrentGameStatistics().getMultip(),
                            onePrice: r.getCurrentGameStatistics().getOnePrice(),
                            num: n.length
                        },
                        i.amountText = r.getCurrentGameStatistics().formatMoney(i.num * i.moneyUnit * i.multiple * i.onePrice),
                        i
                }
            },
            o = a.Class(l, t);
        o.defConfig = n,
            i[n.name] = new o
    } (phoenix, phoenix.Games.SSC.Danshi),
    function(a, t, e) {
        var n = {
                name: "housan.zuxuan.zuliu"
            },
            r = a.Games,
            i = a.Games.SSC.getInstance(),
            l = {
                init: function(a) {},
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                buildUI: function() {
                    var a = this;
                    a.container.html(h.join(""))
                },
                checkBallIsComplete: function() {
                    for (var a = this,
                             t = a.getBallData()[0], e = 0, n = t.length, r = 0; e < n; e++) t[e] > 0 && r++;
                    return r >= 3 ? a.isBallsComplete = !0 : a.isBallsComplete = !1
                },
                makePostParameter: function(a) {
                    for (var t = [], e = a.length, n = 0; n < e; n++) t = t.concat(a[n].join(""));
                    return t.join(",")
                },
                getLottery: function() {
                    for (var a = this,
                             t = a.getBallData()[0], e = 0, n = t.length, r = []; e < n; e++) t[e] > 0 && r.push(e);
                    return a.checkBallIsComplete() ? a.combine(r, 3) : []
                },
                checkRandomBets: function(a, t) {
                    for (var e = this,
                             n = "undefined" == typeof a,
                             a = a || {},
                             i = [], t = t || 0, l = (e.getBallData().length, e.getBallData()[0].length, r.getCurrentGameOrder().getTotal().orders), o = 0; o < 3; o++) i[o] = [e.removeSame(i)];
                    if (i.sort(function(a, t) {
                            return a - t
                        }), Number(t) > Number(e.getRandomBetsNum())) return i;
                    if (n) for (var s = 0; s < l.length; s++) if (l[s].type == e.defConfig.name) {
                        var u = l[s].original.join("");
                        a[u] = u
                    }
                    return a[i.join("")] ? (t++, arguments.callee.call(e, a, t)) : i
                },
                randomNum: function() {
                    var a = this,
                        t = [],
                        e = [],
                        n = null;
                    a.getBallData(),
                        a.getBallData()[0].length,
                        a.defConfig.name;
                    return t = a.checkRandomBets(),
                        e = [t],
                        n = {
                            type: r.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: [t],
                            lotterys: e,
                            moneyUnit: r.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: r.getCurrentGameStatistics().getMultip(),
                            onePrice: r.getCurrentGameStatistics().getOnePrice(),
                            num: e.length
                        },
                        n.amountText = r.getCurrentGameStatistics().formatMoney(n.num * n.moneyUnit * n.multiple * n.onePrice),
                        n
                }
            },
            o = [];
        o.push('<div class="number-select-content">'),
            o.push('<ul class="ball-section">');
        var s = [];
        s.push("<li>"),
            s.push('<ul class="ball-content">'),
            $.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                function(a) {
                    s.push('<li><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + "</a></li>")
                }),
            s.push("</ul>"),
            s.push('<div class="ball-control">'),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=all" href="javascript:void(0);">' + translate.Whole + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=big" href="javascript:void(0);">' + translate.Big + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=small" href="javascript:void(0);">' + translate.Small + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=odd" href="javascript:void(0);">' + translate.Odd + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=even" href="javascript:void(0);">' + translate.Even + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=none" href="javascript:void(0);">' + translate.Clear + "</a>"),
            s.push("</div>"),
            s.push("</li>");
        var u = [];
        u.push("</ul>"),
            u.push("</div>");
        var h = [],
            c = s.join("");
        h.push(o.join("")),
            $.each([""],
                function(a) {
                    h.push(c.replace(/<#=title#>/g, this).replace(/<#=row#>/g, a))
                }),
            h.push(u.join(""));
        var p = a.Class(l, t);
        p.defConfig = n,
            i[n.name] = new p
    } (phoenix, phoenix.GameMethod),
    function(a, t, e) {
        var n = {
                name: "housan.zuxuan.zuliudanshi",
                UIContainer: "#J-balls-main-panel"
            },
            r = a.Games,
            i = r.SSC.getInstance(),
            l = {
                init: function(a) {
                    var t = this;
                    setTimeout(function() {
                            t.initFrame()
                        },
                        25)
                },
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                checkNumSameIndex: function(a, t) {
                    for (var e, n = this,
                             r = a.length > 0 ? a: [], i = 0; i < r.length; i++) if (n.arrIndexOf(r[i], r) >= t) {
                        e = !0;
                        break
                    }
                    return e || !1
                },
                checkBallIsComplete: function(a) {
                    var t = this,
                        e = 0,
                        n = [],
                        r = [];
                    for (t.aData = [], t.sameData = [], t.errorData = [], t.tData = [], t.vData = [], r = t.iterator(t.filterLotters(a)) || []; e < r.length; e++) t.defConfig.checkNum.test(r[e]) && r[e].length == t.balls.length && !t.checkNumSameIndex(r[e], 2) ? (n = r[e].split(""), n.sort(function(a, t) {
                        return a - t
                    }), r[e] = n.join(""), t.checkResult(r[e], t.tData) ? t.tData.push(r[e].split("")) : t.checkResult(r[e], t.sameData) && t.sameData.push(r[e].split("")), t.vData.push(r[e].split(""))) : t.checkResult(r[e], t.errorData) ? t.errorData.push(r[e].split("")) : t.sameData.push(r[e].split("")),
                    t.checkResult(r[e], t.aData) && t.aData.push(r[e].split(""));
                    return t.tData.length > 0 ? (t.isBallsComplete = !0, t.tData) : (t.isBallsComplete = !1, [])
                },
                randomNum: function() {
                    var a = this,
                        t = 0,
                        e = [],
                        n = [],
                        i = null,
                        l = [],
                        o = (a.getBallData(), a.getBallData().length);
                    a.getBallData()[0].length,
                        a.defConfig.name;
                    for (a.addRanNumTag(); t < o; t++) e[t] = a.removeSameNum(e);
                    return e.sort(function(a, t) {
                        return a > t ? 1 : -1
                    }),
                        l = [[e.join(",")], [], []],
                        n.push(e),
                        i = {
                            type: r.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: l,
                            lotterys: n,
                            moneyUnit: r.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: r.getCurrentGameStatistics().getMultip(),
                            onePrice: r.getCurrentGameStatistics().getOnePrice(),
                            num: n.length
                        },
                        i.amountText = r.getCurrentGameStatistics().formatMoney(i.num * i.moneyUnit * i.multiple * i.onePrice),
                        i
                }
            },
            o = a.Class(l, t);
        o.defConfig = n,
            i[n.name] = new o
    } (phoenix, phoenix.Games.SSC.Danshi),
    function(a, t, e) {
        var n = {
                name: "housan.zuxuan.zusan"
            },
            r = a.Games,
            i = a.Games.SSC.getInstance(),
            l = {
                init: function(a) {},
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                buildUI: function() {
                    var a = this;
                    a.container.html(h.join(""))
                },
                makePostParameter: function(a) {
                    for (var t = [], e = a.length, n = 0; n < e; n++) t = t.concat(a[n].join(""));
                    return t.join("")
                },
                checkBallIsComplete: function() {
                    for (var a = this,
                             t = a.getBallData(), e = 0, n = t[0].length, r = 0; e < n; e++) t[0][e] > 0 && r++;
                    return r >= 2 ? a.isBallsComplete = !0 : a.isBallsComplete = !1
                },
                getLottery: function() {
                    var a = this,
                        t = a.getBallData(),
                        e = 0,
                        n = t[0].length,
                        r = [],
                        i = [],
                        l = [];
                    if (arr = [], nr = new Array, a.checkBallIsComplete()) {
                        for (; e < n; e++) t[0][e] > 0 && arr.push(e);
                        for (var o = 0; o < arr.length; o++) i = [],
                            r = arr.concat(),
                            i.push([[arr[o], arr[o]].join("")]),
                            r.splice(o, 1),
                            i.push(r),
                            l = l.concat(a.combination(i));
                        for (var s = 0; s < l.length; s++) l[s] = l[s].join("").split("");
                        return l
                    }
                    return []
                },
                getLotteryOriginal: function(a) {
                    for (var t = a,
                             e = this,
                             n = e.getBallData(), r = (n[0].length, []), i = [], l = [], o = 0; o < t.length; o++) i = [],
                        r = t.concat(),
                        i.push([[t[o], t[o]].join("")]),
                        r.splice(o, 1),
                        i.push(r),
                        l = l.concat(e.combination(i));
                    for (var s = 0; s < l.length; s++) l[s] = l[s].join("").split("");
                    return l
                },
                removeSame: function(a) {
                    var t, e = 0,
                        n = this,
                        r = this.getBallData()[0].length;
                    for (len = a.length, t = Math.floor(Math.random() * r); e < a.length; e++) if (t == a[e]) return arguments.callee.call(n, a);
                    return t
                },
                randomNum: function() {
                    var a = this,
                        t = 0,
                        e = [],
                        n = [],
                        i = null;
                    for (a.getBallData(), a.getBallData()[0].length, a.defConfig.name; t < 2; t++) e[t] = a.removeSame(e);
                    return e.sort(function(a, t) {
                        return a > t ? 1 : -1
                    }),
                        n = a.getLotteryOriginal(e),
                        i = {
                            type: r.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: [e],
                            lotterys: n,
                            moneyUnit: r.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: r.getCurrentGameStatistics().getMultip(),
                            onePrice: r.getCurrentGameStatistics().getOnePrice(),
                            num: n.length
                        },
                        i.amountText = r.getCurrentGameStatistics().formatMoney(i.num * i.moneyUnit * i.multiple * i.onePrice),
                        i
                }
            },
            o = [];
        o.push('<div class="number-select-content">'),
            o.push('<ul class="ball-section">');
        var s = [];
        s.push("<li>"),
            s.push('<ul class="ball-content">'),
            $.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                function(a) {
                    s.push('<li><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + "</a></li>")
                }),
            s.push("</ul>"),
            s.push('<div class="ball-control">'),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=all" href="javascript:void(0);">' + translate.Whole + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=big" href="javascript:void(0);">' + translate.Big + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=small" href="javascript:void(0);">' + translate.Small + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=odd" href="javascript:void(0);">' + translate.Odd + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=even" href="javascript:void(0);">' + translate.Even + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=none" href="javascript:void(0);">' + translate.Clear + "</a>"),
            s.push("</div>"),
            s.push("</li>");
        var u = [];
        u.push("</ul>"),
            u.push("</div>");
        var h = [],
            c = s.join("");
        h.push(o.join("")),
            $.each([""],
                function(a) {
                    h.push(c.replace(/<#=title#>/g, this).replace(/<#=row#>/g, a))
                }),
            h.push(u.join(""));
        var p = a.Class(l, t);
        p.defConfig = n,
            i[n.name] = new p
    } (phoenix, phoenix.GameMethod),
    function(a, t, e) {
        var n = {
                name: "housan.zuxuan.zusandanshi",
                UIContainer: "#J-balls-main-panel"
            },
            r = a.Games,
            i = r.SSC.getInstance(),
            l = {
                init: function(a) {
                    var t = this;
                    setTimeout(function() {
                            t.initFrame()
                        },
                        25)
                },
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1]];
                },
                checkNumSameIndex: function(a, t) {
                    for (var e, n = this,
                             r = a.length > 0 ? a: [], i = 0; i < r.length; i++) if (n.arrIndexOf(r[i], r) == t) {
                        e = !0;
                        break
                    }
                    return e || !1
                },
                checkBallIsComplete: function(a) {
                    var t = this,
                        e = 0,
                        n = [],
                        r = [];
                    for (t.aData = [], t.sameData = [], t.errorData = [], t.tData = [], t.vData = [], r = t.iterator(t.filterLotters(a)) || []; e < r.length; e++) t.defConfig.checkNum.test(r[e]) && r[e].length == t.balls.length && t.checkNumSameIndex(r[e], 2) ? (n = r[e].split(""), n.sort(function(a, t) {
                        return a - t
                    }), r[e] = n.join(""), t.checkResult(r[e], t.tData) ? t.tData.push(r[e].split("")) : t.checkResult(r[e], t.sameData) && t.sameData.push(r[e].split("")), t.vData.push(r[e].split(""))) : t.checkResult(r[e], t.errorData) && t.errorData.push(r[e].split("")),
                    t.checkResult(r[e], t.aData) && t.aData.push(r[e].split(""));
                    return t.tData.length > 0 ? (t.isBallsComplete = !0, t.tData) : (t.isBallsComplete = !1, [])
                },
                randomNum: function() {
                    var a = this,
                        t = 0,
                        e = [],
                        n = [],
                        i = null,
                        l = [];
                    a.getBallData(),
                        a.getBallData().length,
                        a.getBallData()[0].length,
                        a.defConfig.name;
                    for (a.addRanNumTag(); t < 2; t++) {
                        var o = a.removeSameNum(e);
                        t < 1 ? e.push(o, o) : e.push(o)
                    }
                    return e.sort(function(a, t) {
                        return a > t ? 1 : -1
                    }),
                        l = [[e.join(",")], [], []],
                        n.push(e),
                        i = {
                            type: r.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: l,
                            lotterys: n,
                            moneyUnit: r.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: r.getCurrentGameStatistics().getMultip(),
                            onePrice: r.getCurrentGameStatistics().getOnePrice(),
                            num: n.length
                        },
                        i.amountText = r.getCurrentGameStatistics().formatMoney(i.num * i.moneyUnit * i.multiple * i.onePrice),
                        i
                }
            },
            o = a.Class(l, t);
        o.defConfig = n,
            i[n.name] = new o
    } (phoenix, phoenix.Games.SSC.Danshi),
    function(a, t, e) {
        var n = {
                name: "housan.zuxuan.zuxuanbaodan"
            },
            r = a.Games,
            i = a.Games.SSC.getInstance(),
            l = {
                init: function(a) {
                    var t = this;
                    t.addEvent("beforeSelect",
                        function() {
                            r.getCurrentGame().getCurrentGameMethod().getGameMethodName() == t.getGameMethodName() && t.reSet()
                        })
                },
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                buildUI: function() {
                    var a = this;
                    a.container.html(h.join(""))
                },
                checkBallIsComplete: function() {
                    for (var a = this,
                             t = a.getBallData()[0], e = 0, n = t.length, r = 0; e < n; e++) t[e] > 0 && r++;
                    return r >= 1 ? a.isBallsComplete = !0 : a.isBallsComplete = !1
                },
                getLottery: function() {
                    for (var a = this,
                             t = a.getBallData()[0], e = 0, n = t.length, r = []; e < n; e++) t[e] > 0 && r.push(e);
                    return a.checkBallIsComplete() ? a.mathResult(r[0], 0, 9) : []
                },
                checkResult: function(a, t) {
                    for (var e = t.length - 1; e >= 0; e--) if (t[e].join("") == a) return ! 1;
                    return ! 0
                },
                mathResult: function(a, t, e) {
                    var n, r, i, l = this,
                        o = [],
                        s = [];
                    for (n = t; n <= e; n++) for (r = t; r <= e; r++) for (i = t; i <= e; i++) if (n == a && 3 != l.arrIndexOf(n, [n, r, i]) || r == a && 3 != l.arrIndexOf(n, [n, r, i]) || i == a && 3 != l.arrIndexOf(n, [n, r, i])) {
                        var u = [n, r, i].sort(function(a, t) {
                            return a - t
                        });
                        l.checkResult(u.join(""), s) && (s.push(u), o.push([n, r, i]))
                    }
                    return o
                },
                makePostParameter: function(a) {
                    for (var t = [], e = a.length, n = 0; n < e; n++) t = t.concat(a[n].join(","));
                    return t.join("")
                },
                randomNum: function() {
                    var a = this,
                        t = [],
                        e = [],
                        n = a.getBallData()[0].length;
                    return t[0] = Math.floor(Math.random() * n),
                        e = a.mathResult(t[0], 0, 9),
                        order = {
                            type: r.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: [t],
                            lotterys: e,
                            moneyUnit: r.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: r.getCurrentGameStatistics().getMultip(),
                            onePrice: r.getCurrentGameStatistics().getOnePrice(),
                            num: e.length
                        },
                        order.amountText = r.getCurrentGameStatistics().formatMoney(order.num * order.moneyUnit * order.multiple * order.onePrice),
                        order
                }
            },
            o = [];
        o.push('<div class="number-select-content">'),
            o.push('<ul class="ball-section">');
        var s = [];
        s.push("<li>"),
            s.push('<ul class="ball-content">'),
            $.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                function(a) {
                    s.push('<li><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + "</a></li>")
                }),
            s.push("</ul>"),
            s.push("</li>");
        var u = [];
        u.push("</ul>"),
            u.push("</div>");
        var h = [],
            c = s.join("");
        h.push(o.join("")),
            $.each([""],
                function(a) {
                    h.push(c.replace(/<#=title#>/g, this).replace(/<#=row#>/g, a))
                }),
            h.push(u.join(""));
        var p = a.Class(l, t);
        p.defConfig = n,
            i[n.name] = new p
    } (phoenix, phoenix.GameMethod),
    function(a, t, e) {
        var n = {
                name: "housan.zuxuan.zuxuanhezhi"
            },
            r = a.Games,
            i = r.SSC.getInstance(),
            l = {
                init: function(a) {},
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                buildUI: function() {
                    var a = this;
                    a.container.html(h.join(""))
                },
                checkBallIsComplete: function() {
                    for (var a = this,
                             t = a.getBallData()[0], e = 0, n = t.length, r = 0; e < n; e++) t[e] > 0 && r++;
                    return r >= 1 ? a.isBallsComplete = !0 : a.isBallsComplete = !1
                },
                makePostParameter: function(a) {
                    for (var t = [], e = a.length, n = 0; n < e; n++) t = t.concat(a[n].join(","));
                    return t.join("")
                },
                getLottery: function() {
                    for (var a = this,
                             t = a.getBallData()[0], e = 0, n = t.length, r = [], i = []; e < n; e++) t[e] > 0 && r.push(e);
                    if (a.checkBallIsComplete()) {
                        for (var l = 0; l < r.length; l++) i = i.concat(a.mathResult(r[l], 0, 9));
                        return i
                    }
                    return []
                },
                removeSame: function(a, t) {
                    var e, n = 0,
                        r = this,
                        i = this.getBallData()[0].length;
                    for (len = t.length, e = Math.floor(Math.random() * i + 1); n < t.length; n++) if (e == t[n]) return arguments.callee.call(r, a, t);
                    return e
                },
                checkResult: function(a, t) {
                    for (var e = t.length - 1; e >= 0; e--) if (t[e].join("") == a) return ! 1;
                    return ! 0
                },
                mathResult: function(a, t, e) {
                    var n, r, i, l = this,
                        o = [],
                        s = [];
                    for (n = t; n <= e; n++) for (r = t; r <= e; r++) for (i = t; i <= e; i++) if (n + r + i == a && 3 != l.arrIndexOf(n, [n, r, i])) {
                        var u = [n, r, i].sort(function(a, t) {
                            return a - t
                        });
                        l.checkResult(u.join(""), s) && (s.push(u), o.push([n, r, i]))
                    }
                    return o
                },
                originalData: function(a) {
                    for (var t = this,
                             e = [], n = 0; n < a.length; n++) for (var r = 0; r < a[n].length; r++) e[r] = e[r] || [],
                    t.arrIndexOf(a[n][r], e[r]) || e[r].push(a[n][r]);
                    return e
                },
                checkRandomBets: function(a, t) {
                    var e = this,
                        n = "undefined" == typeof a,
                        a = a || {},
                        i = [],
                        t = t || 0,
                        l = (e.getBallData().length, e.getBallData()[0].length),
                        o = r.getCurrentGameOrder().getTotal().orders;
                    if (i[0] = Math.ceil(Math.random() * (l - 1)), Number(t) > Number(e.getRandomBetsNum())) return i;
                    if (n) for (var s = 0; s < o.length; s++) if (o[s].type == e.defConfig.name) {
                        var u = o[s].original.join("");
                        a[u] = u
                    }
                    return a[i.join("")] ? (t++, arguments.callee.call(e, a, t)) : i
                },
                randomNum: function() {
                    var a = this,
                        t = [],
                        e = [],
                        n = null;
                    a.getBallData(),
                        a.getBallData()[0].length,
                        a.defConfig.name;
                    return t = a.checkRandomBets(),
                        e = a.mathResult(t[0], 0, 9),
                        n = {
                            type: r.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: [t],
                            lotterys: e,
                            moneyUnit: r.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: r.getCurrentGameStatistics().getMultip(),
                            onePrice: r.getCurrentGameStatistics().getOnePrice(),
                            num: e.length
                        },
                        n.amountText = r.getCurrentGameStatistics().formatMoney(n.num * n.moneyUnit * n.multiple * n.onePrice),
                        n
                }
            },
            o = [];
        o.push('<div class="number-select-content">'),
            o.push('<ul class="ball-section">');
        var s = [];
        s.push("<li>"),
            s.push('<ul class="ball-content">'),
            $.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
                function(a) {
                    0 == a ? s.push('<li style="display:none"><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + "</a></li>") : s.push('<li><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + "</a></li>")
                }),
            s.push("</ul>"),
            s.push("</li>");
        var u = [];
        u.push("</ul>"),
            u.push("</div>");
        var h = [],
            c = s.join("");
        h.push(o.join("")),
            $.each([""],
                function(a) {
                    h.push(c.replace(/<#=title#>/g, this).replace(/<#=row#>/g, a))
                }),
            h.push(u.join(""));
        var p = a.Class(l, t);
        p.defConfig = n,
            i[n.name] = new p
    } (phoenix, phoenix.GameMethod),
    function(a, t, e) {
        var n = {
                name: "qiansan.zhixuan.danshi",
                tips: "前三直选单式玩法提示",
                exampleTip: "前三直选单式弹出层22提示"
            },
            r = a.Games,
            i = r.SSC.getInstance(),
            l = {
                init: function(a) {
                    var t = this;
                    setTimeout(function() {
                            t.initFrame()
                        },
                        25)
                },
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                randomNum: function() {
                    var a = this,
                        t = [],
                        e = null,
                        n = (a.getBallData(), a.defConfig.name, []),
                        i = [];
                    return a.addRanNumTag(),
                        t = a.checkRandomBets(),
                        i = [[t.join(",")], [], []],
                        n = a.combination(t),
                        e = {
                            type: r.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: i,
                            lotterys: n,
                            moneyUnit: r.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: r.getCurrentGameStatistics().getMultip(),
                            onePrice: r.getCurrentGameStatistics().getOnePrice(),
                            num: n.length
                        },
                        e.amountText = r.getCurrentGameStatistics().formatMoney(e.num * e.moneyUnit * e.multiple * e.onePrice),
                        e
                }
            },
            o = a.Class(l, t);
        o.defConfig = n,
            i[n.name] = new o
    } (phoenix, phoenix.Games.SSC.Danshi),
    function(a, t, e) {
        var n = {
                name: "qiansan.zhixuan.fushi",
                tips: "前三直选复式玩法提示",
                exampleTip: "前三直选复式范例",
                randomBetsNum: 500
            },
            r = a.Games.SSC.getInstance(),
            i = {
                init: function(a) {
                    var t = this;
                    t.getHotCold(t.getGameMethodName(), "currentFre", "lost"),
                        t.initHotColdEvent()
                },
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                buildUI: function() {
                    var a = this;
                    a.container.html(u.join(""))
                }
            },
            l = [];
        l.push('<div class="number-select-title balls-type-title clearfix">'),
            l.push('<ul class="function-select-title game-frequency-type">'),
            l.push('<li class="lost" data-type="lost">遗漏</li>'),
            l.push('<li class="fre" data-type="fre">冷热</li>'),
            l.push("</ul>"),
            l.push('<ul class="function-select-content">'),
            l.push('<li class="game-frequency-lost-length"><a href="javascript:void(0);" data-type="currentFre" class="periodcurrentFre">当前遗漏</a><a data-type="maxFre" href="javascript:void(0);" class="periodmaxFre">最大遗漏</a></li>'),
            l.push('<li style="display:none" class="game-frequency-fre-length"><a href="javascript:void(0);" data-type="30" class="period30">30期</a><a href="javascript:void(0);" data-type="60" class="period60">60期</a><a href="javascript:void(0);" data-type="100" class="period100">100期</a></li>'),
            l.push("</ul>"),
            l.push("</div>"),
            l.push('<div class="number-select-content">'),
            l.push('<ul class="ball-section">');
        var o = [];
        o.push("<li>"),
            o.push('<div class="ball-title">'),
            o.push("<strong><#=title#>" + translate.Pos + "</strong>"),
            o.push("<span>当前遗漏</span>"),
            o.push("</div>"),
            o.push('<ul class="ball-content">'),
            $.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                function(a) {
                    o.push('<li><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + '</a><span class="ball-aid-hot">0</span></li>')
                }),
            o.push("</ul>"),
            o.push('<div class="ball-control">'),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=all" href="javascript:void(0);">' + translate.Whole + "</a>"),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=big" href="javascript:void(0);">' + translate.Big + "</a>"),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=small" href="javascript:void(0);">' + translate.Small + "</a>"),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=odd" href="javascript:void(0);">' + translate.Odd + "</a>"),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=even" href="javascript:void(0);">' + translate.Even + "</a>"),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=none" href="javascript:void(0);">' + translate.Clear + "</a>"),
            o.push("</div>"),
            o.push("</li>");
        var s = [];
        s.push("</ul>"),
            s.push("</div>");
        var u = [],
            h = o.join("");
        u.push(l.join("")),
            $.each([translate.Million, translate.Thousand, translate.Hundred],
                function(a) {
                    u.push(h.replace(/<#=title#>/g, this).replace(/<#=row#>/g, a))
                }),
            u.push(s.join(""));
        var c = a.Class(i, t);
        c.defConfig = n,
            r[n.name] = new c
    } (phoenix, phoenix.GameMethod),
    function(a, t, e) {
        var n = {
                name: "qiansan.zhixuan.hezhi"
            },
            r = a.Games,
            i = r.SSC.getInstance(),
            l = {
                init: function(a) {
                    var t = this;
                    t.getHotCold(t.getGameMethodName(), "currentFre", "lost"),
                        t.initHotColdEvent()
                },
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                buildUI: function() {
                    var a = this;
                    a.container.html(h.join(""))
                },
                checkBallIsComplete: function() {
                    for (var a = this,
                             t = a.getBallData()[0], e = 0, n = t.length, r = 0; e < n; e++) t[e] > 0 && r++;
                    return r >= 1 ? a.isBallsComplete = !0 : a.isBallsComplete = !1
                },
                makePostParameter: function(a) {
                    for (var t = [], e = a.length, n = 0; n < e; n++) t = t.concat(a[n].join(","));
                    return t.join("")
                },
                getLottery: function() {
                    for (var a = this,
                             t = a.getBallData()[0], e = 0, n = t.length, r = [], i = []; e < n; e++) t[e] > 0 && r.push(e);
                    if (a.checkBallIsComplete()) {
                        for (var l = 0; l < r.length; l++) i = i.concat(a.mathResult(r[l], 0, 9));
                        return i
                    }
                    return []
                },
                removeSame: function(a, t) {
                    var e, n = 0,
                        r = this,
                        i = this.getBallData()[0].length;
                    for (len = t.length, e = Math.floor(Math.random() * i + 1); n < t.length; n++) if (e == t[n]) return arguments.callee.call(r, a, t);
                    return e
                },
                mathResult: function(a, t, e) {
                    var n, r, i, l = [];
                    for (n = t; n <= e; n++) for (r = t; r <= e; r++) for (i = t; i <= e; i++) n + r + i == a && l.push([n, r, i]);
                    return l
                },
                originalData: function(a) {
                    for (var t = this,
                             e = [], n = 0; n < a.length; n++) for (var r = 0; r < a[n].length; r++) e[r] = e[r] || [],
                    t.arrIndexOf(a[n][r], e[r]) || e[r].push(a[n][r]);
                    return e
                },
                randomNum: function() {
                    var a = this,
                        t = [],
                        e = [],
                        n = null,
                        i = (a.getBallData(), a.getBallData()[0].length);
                    a.defConfig.name;
                    return t[0] = Math.floor(Math.random() * i),
                        e = a.mathResult(t[0], 0, 9),
                        n = {
                            type: r.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: [t],
                            lotterys: e,
                            moneyUnit: r.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: r.getCurrentGameStatistics().getMultip(),
                            onePrice: r.getCurrentGameStatistics().getOnePrice(),
                            num: e.length
                        },
                        n.amountText = r.getCurrentGameStatistics().formatMoney(n.num * n.moneyUnit * n.multiple * n.onePrice),
                        n
                }
            },
            o = [];
        o.push('<div class="number-select-title balls-type-title clearfix">'),
            o.push('<ul class="function-select-title game-frequency-type">'),
            o.push('<li class="lost" data-type="lost">遗漏</li>'),
            o.push('<li class="fre" data-type="fre">冷热</li>'),
            o.push("</ul>"),
            o.push('<ul class="function-select-content">'),
            o.push('<li class="game-frequency-lost-length"><a href="javascript:void(0);" data-type="currentFre" class="periodcurrentFre">当前遗漏</a><a data-type="maxFre" href="javascript:void(0);" class="periodmaxFre">最大遗漏</a></li>'),
            o.push('<li style="display:none" class="game-frequency-fre-length"><a href="javascript:void(0);" data-type="30" class="period30">30期</a><a href="javascript:void(0);" data-type="60" class="period60">60期</a><a href="javascript:void(0);" data-type="100" class="period100">100期</a></li>'),
            o.push("</ul>"),
            o.push("</div>"),
            o.push('<div class="number-select-content">'),
            o.push('<ul class="ball-section">');
        var s = [];
        s.push("<li>"),
            s.push('<ul class="ball-content">'),
            $.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
                function(a) {
                    s.push('<li><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + '</a><span class="ball-aid-hot">&nbsp;</span></li>')
                }),
            s.push("</ul>"),
            s.push("</li>");
        var u = [];
        u.push("</ul>"),
            u.push("</div>");
        var h = [],
            c = s.join("");
        h.push(o.join("")),
            $.each([""],
                function(a) {
                    h.push(c.replace(/<#=title#>/g, this).replace(/<#=row#>/g, a))
                }),
            h.push(u.join(""));
        var p = a.Class(l, t);
        p.defConfig = n,
            i[n.name] = new p
    } (phoenix, phoenix.GameMethod),
    function(a, t, e) {
        var n = {
                name: "qiansan.zuxuan.hunhezuxuan",
                UIContainer: "#J-balls-main-panel"
            },
            r = a.Games,
            i = r.SSC.getInstance(),
            l = {
                init: function(a) {
                    var t = this;
                    setTimeout(function() {
                            t.initFrame()
                        },
                        25)
                },
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                checkNumSameIndex: function(a, t) {
                    for (var e, n = this,
                             r = a.length > 0 ? a: [], i = 0; i < r.length; i++) if (n.arrIndexOf(r[i], r) == t) {
                        e = !0;
                        break
                    }
                    return e || !1
                },
                checkBallIsComplete: function(a) {
                    var t = this,
                        e = 0,
                        n = [];
                    if (t.isFirstAdd) for (t.aData = [], t.sameData = [], t.errorData = [], t.tData = [], t.vData = [], t.vDataBack = {},
                                               t.aDataBack = {},
                                               t.tDataBack = {},
                                               t.sameDataBack = {},
                                               t.errorDataBack = {},
                                               n = t.iterator(t.filterLotters(a)) || []; e < n.length; e++) {
                        var r, i, l;
                        i = n[e].split(""),
                            r = n[e].split("").sort(function(a, t) {
                                return a - t
                            }),
                            l = r.join(""),
                            t.defConfig.checkNum.test(l) && l.length == t.balls.length && !t.checkNumSameIndex(l, 3) ? (t.vDataBack[l] ? t.sameData.push(i) : t.tData.push(r), t.vDataBack[l] = i, t.vData.push(i)) : (t.errorDataBack[l] ? t.sameData.push(i) : t.errorData.push(i), t.errorDataBack[l] = i),
                            t.aDataBack[l] ? "": t.aData.push(i),
                            t.aDataBack[l] = i
                    }
                    return t.vData.length > 0 ? (t.isBallsComplete = !0, t.isFirstAdd ? t.vData: t.tData.length > 0 ? t.tData: []) : (t.isBallsComplete = !1, [])
                },
                randomNum: function() {
                    var a = this,
                        t = 0,
                        e = [],
                        n = [],
                        i = null,
                        l = [],
                        o = (a.getBallData(), a.getBallData().length),
                        s = a.getBallData()[0].length;
                    a.defConfig.name;
                    for (a.addRanNumTag(); t < o; t++) 2 == t ? e[t] = a.removeSameNum(e) : e[t] = Math.floor(Math.random() * s);
                    return e.sort(function(a, t) {
                        return a > t ? 1 : -1
                    }),
                        l = [[e.join(",")], [], []],
                        n.push(e),
                        i = {
                            type: r.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: l,
                            lotterys: n,
                            moneyUnit: r.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: r.getCurrentGameStatistics().getMultip(),
                            onePrice: r.getCurrentGameStatistics().getOnePrice(),
                            num: n.length
                        },
                        i.amountText = r.getCurrentGameStatistics().formatMoney(i.num * i.moneyUnit * i.multiple * i.onePrice),
                        i
                }
            },
            o = a.Class(l, t);
        o.defConfig = n,
            i[n.name] = new o
    } (phoenix, phoenix.Games.SSC.Danshi),
    function(a, t, e) {
        var n = {
                name: "qiansan.zuxuan.zuliu"
            },
            r = a.Games,
            i = a.Games.SSC.getInstance(),
            l = {
                init: function(a) {},
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                buildUI: function() {
                    var a = this;
                    a.container.html(h.join(""))
                },
                checkBallIsComplete: function() {
                    for (var a = this,
                             t = a.getBallData()[0], e = 0, n = t.length, r = 0; e < n; e++) t[e] > 0 && r++;
                    return r >= 3 ? a.isBallsComplete = !0 : a.isBallsComplete = !1
                },
                makePostParameter: function(a) {
                    for (var t = [], e = a.length, n = 0; n < e; n++) t = t.concat(a[n].join(""));
                    return t.join("")
                },
                getLottery: function() {
                    for (var a = this,
                             t = a.getBallData()[0], e = 0, n = t.length, r = []; e < n; e++) t[e] > 0 && r.push(e);
                    return a.checkBallIsComplete() ? a.combine(r, 3) : []
                },
                checkRandomBets: function(a, t) {
                    for (var e = this,
                             n = "undefined" == typeof a,
                             a = a || {},
                             i = [], t = t || 0, l = (e.getBallData().length, e.getBallData()[0].length, r.getCurrentGameOrder().getTotal().orders), o = 0; o < 3; o++) i[o] = [e.removeSame(i)];
                    if (i.sort(function(a, t) {
                            return a - t
                        }), Number(t) > Number(e.getRandomBetsNum())) return i;
                    if (n) for (var s = 0; s < l.length; s++) if (l[s].type == e.defConfig.name) {
                        var u = l[s].original.join("");
                        a[u] = u
                    }
                    return a[i.join("")] ? (t++, arguments.callee.call(e, a, t)) : i
                },
                randomNum: function() {
                    var a = this,
                        t = [],
                        e = [],
                        n = null;
                    a.getBallData(),
                        a.getBallData()[0].length,
                        a.defConfig.name;
                    return t = a.checkRandomBets(),
                        e = [t],
                        n = {
                            type: r.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: [t],
                            lotterys: e,
                            moneyUnit: r.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: r.getCurrentGameStatistics().getMultip(),
                            onePrice: r.getCurrentGameStatistics().getOnePrice(),
                            num: e.length
                        },
                        n.amountText = r.getCurrentGameStatistics().formatMoney(n.num * n.moneyUnit * n.multiple * n.onePrice),
                        n
                }
            },
            o = [];
        o.push('<div class="number-select-content">'),
            o.push('<ul class="ball-section">');
        var s = [];
        s.push("<li>"),
            s.push('<ul class="ball-content">'),
            $.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                function(a) {
                    s.push('<li><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + "</a></li>")
                }),
            s.push("</ul>"),
            s.push('<div class="ball-control">'),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=all" href="javascript:void(0);">' + translate.Whole + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=big" href="javascript:void(0);">' + translate.Big + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=small" href="javascript:void(0);">' + translate.Small + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=odd" href="javascript:void(0);">' + translate.Odd + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=even" href="javascript:void(0);">' + translate.Even + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=none" href="javascript:void(0);">' + translate.Clear + "</a>"),
            s.push("</div>"),
            s.push("</li>");
        var u = [];
        u.push("</ul>"),
            u.push("</div>");
        var h = [],
            c = s.join("");
        h.push(o.join("")),
            $.each([""],
                function(a) {
                    h.push(c.replace(/<#=title#>/g, this).replace(/<#=row#>/g, a))
                }),
            h.push(u.join(""));
        var p = a.Class(l, t);
        p.defConfig = n,
            i[n.name] = new p
    } (phoenix, phoenix.GameMethod),
    function(a, t, e) {
        var n = {
                name: "qiansan.zuxuan.zuliudanshi",
                UIContainer: "#J-balls-main-panel"
            },
            r = a.Games,
            i = r.SSC.getInstance(),
            l = {
                init: function(a) {
                    var t = this;
                    setTimeout(function() {
                            t.initFrame()
                        },
                        25)
                },
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                checkNumSameIndex: function(a, t) {
                    for (var e, n = this,
                             r = a.length > 0 ? a: [], i = 0; i < r.length; i++) if (n.arrIndexOf(r[i], r) >= t) {
                        e = !0;
                        break
                    }
                    return e || !1
                },
                checkBallIsComplete: function(a) {
                    var t = this,
                        e = 0,
                        n = [],
                        r = [];
                    for (t.aData = [], t.sameData = [], t.errorData = [], t.tData = [], t.vData = [], r = t.iterator(t.filterLotters(a)) || []; e < r.length; e++) t.defConfig.checkNum.test(r[e]) && r[e].length == t.balls.length && !t.checkNumSameIndex(r[e], 2) ? (n = r[e].split(""), n.sort(function(a, t) {
                        return a - t
                    }), r[e] = n.join(""), t.checkResult(r[e], t.tData) ? t.tData.push(r[e].split("")) : t.checkResult(r[e], t.sameData) && t.sameData.push(r[e].split("")), t.vData.push(r[e].split(""))) : t.checkResult(r[e], t.errorData) && t.errorData.push(r[e].split("")),
                    t.checkResult(r[e], t.aData) && t.aData.push(r[e].split(""));
                    return t.tData.length > 0 ? (t.isBallsComplete = !0, t.tData) : (t.isBallsComplete = !1, [])
                },
                randomNum: function() {
                    var a = this,
                        t = 0,
                        e = [],
                        n = [],
                        i = null,
                        l = [],
                        o = (a.getBallData(), a.getBallData().length);
                    a.getBallData()[0].length,
                        a.defConfig.name;
                    for (a.addRanNumTag(); t < o; t++) e[t] = a.removeSameNum(e);
                    return e.sort(function(a, t) {
                        return a > t ? 1 : -1
                    }),
                        l = [[e.join(",")], [], []],
                        n.push(e),
                        i = {
                            type: r.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: l,
                            lotterys: n,
                            moneyUnit: r.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: r.getCurrentGameStatistics().getMultip(),
                            onePrice: r.getCurrentGameStatistics().getOnePrice(),
                            num: n.length
                        },
                        i.amountText = r.getCurrentGameStatistics().formatMoney(i.num * i.moneyUnit * i.multiple * i.onePrice),
                        i
                }
            },
            o = a.Class(l, t);
        o.defConfig = n,
            i[n.name] = new o
    } (phoenix, phoenix.Games.SSC.Danshi),
    function(a, t, e) {
        var n = {
                name: "qiansan.zuxuan.zusan"
            },
            r = a.Games,
            i = a.Games.SSC.getInstance(),
            l = {
                init: function(a) {},
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                buildUI: function() {
                    var a = this;
                    a.container.html(h.join(""))
                },
                makePostParameter: function(a) {
                    for (var t = [], e = a.length, n = 0; n < e; n++) t = t.concat(a[n].join(""));
                    return t.join("")
                },
                checkBallIsComplete: function() {
                    for (var a = this,
                             t = a.getBallData(), e = 0, n = t[0].length, r = 0; e < n; e++) t[0][e] > 0 && r++;
                    return r >= 2 ? a.isBallsComplete = !0 : a.isBallsComplete = !1
                },
                getLottery: function() {
                    var a = this,
                        t = a.getBallData(),
                        e = 0,
                        n = t[0].length,
                        r = [],
                        i = [],
                        l = [];
                    if (arr = [], nr = new Array, a.checkBallIsComplete()) {
                        for (; e < n; e++) t[0][e] > 0 && arr.push(e);
                        for (var o = 0; o < arr.length; o++) i = [],
                            r = arr.concat(),
                            i.push([[arr[o], arr[o]].join("")]),
                            r.splice(o, 1),
                            i.push(r),
                            l = l.concat(a.combination(i));
                        for (var s = 0; s < l.length; s++) l[s] = l[s].join("").split("");
                        return l
                    }
                    return []
                },
                getLotteryOriginal: function(a) {
                    for (var t = a,
                             e = this,
                             n = e.getBallData(), r = (n[0].length, []), i = [], l = [], o = 0; o < t.length; o++) i = [],
                        r = t.concat(),
                        i.push([[t[o], t[o]].join("")]),
                        r.splice(o, 1),
                        i.push(r),
                        l = l.concat(e.combination(i));
                    for (var s = 0; s < l.length; s++) l[s] = l[s].join("").split("");
                    return l
                },
                removeSame: function(a) {
                    var t, e = 0,
                        n = this,
                        r = this.getBallData()[0].length;
                    for (len = a.length, t = Math.floor(Math.random() * r); e < a.length; e++) if (t == a[e]) return arguments.callee.call(n, a);
                    return t
                },
                randomNum: function() {
                    var a = this,
                        t = 0,
                        e = [],
                        n = [],
                        i = null;
                    for (a.getBallData(), a.getBallData()[0].length, a.defConfig.name; t < 2; t++) e[t] = a.removeSame(e);
                    return e.sort(function(a, t) {
                        return a > t ? 1 : -1
                    }),
                        n = a.getLotteryOriginal(e),
                        i = {
                            type: r.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: [e],
                            lotterys: n,
                            moneyUnit: r.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: r.getCurrentGameStatistics().getMultip(),
                            onePrice: r.getCurrentGameStatistics().getOnePrice(),
                            num: n.length
                        },
                        i.amountText = r.getCurrentGameStatistics().formatMoney(i.num * i.moneyUnit * i.multiple * i.onePrice),
                        i
                }
            },
            o = [];
        o.push('<div class="number-select-content">'),
            o.push('<ul class="ball-section">');
        var s = [];
        s.push("<li>"),
            s.push('<ul class="ball-content">'),
            $.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                function(a) {
                    s.push('<li><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + "</a></li>")
                }),
            s.push("</ul>"),
            s.push('<div class="ball-control">'),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=all" href="javascript:void(0);">' + translate.Whole + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=big" href="javascript:void(0);">' + translate.Big + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=small" href="javascript:void(0);">' + translate.Small + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=odd" href="javascript:void(0);">' + translate.Odd + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=even" href="javascript:void(0);">' + translate.Even + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=none" href="javascript:void(0);">' + translate.Clear + "</a>"),
            s.push("</div>"),
            s.push("</li>");
        var u = [];
        u.push("</ul>"),
            u.push("</div>");
        var h = [],
            c = s.join("");
        h.push(o.join("")),
            $.each([""],
                function(a) {
                    h.push(c.replace(/<#=title#>/g, this).replace(/<#=row#>/g, a))
                }),
            h.push(u.join(""));
        var p = a.Class(l, t);
        p.defConfig = n,
            i[n.name] = new p
    } (phoenix, phoenix.GameMethod),
    function(a, t, e) {
        var n = {
                name: "qiansan.zuxuan.zusandanshi",
                UIContainer: "#J-balls-main-panel"
            },
            r = a.Games,
            i = r.SSC.getInstance(),
            l = {
                init: function(a) {
                    var t = this;
                    setTimeout(function() {
                            t.initFrame()
                        },
                        25)
                },
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                checkNumSameIndex: function(a, t) {
                    for (var e, n = this,
                             r = a.length > 0 ? a: [], i = 0; i < r.length; i++) if (n.arrIndexOf(r[i], r) == t) {
                        e = !0;
                        break
                    }
                    return e || !1
                },
                checkBallIsComplete: function(a) {
                    var t = this,
                        e = 0,
                        n = [],
                        r = [];
                    for (t.aData = [], t.sameData = [], t.errorData = [], t.tData = [], t.vData = [], r = t.iterator(t.filterLotters(a)) || []; e < r.length; e++) t.defConfig.checkNum.test(r[e]) && r[e].length == t.balls.length && t.checkNumSameIndex(r[e], 2) ? (n = r[e].split(""), n.sort(function(a, t) {
                        return a - t
                    }), r[e] = n.join(""), t.checkResult(r[e], t.tData) ? t.tData.push(r[e].split("")) : t.checkResult(r[e], t.sameData) && t.sameData.push(r[e].split("")), t.vData.push(r[e].split(""))) : t.checkResult(r[e], t.errorData) && t.errorData.push(r[e].split("")),
                    t.checkResult(r[e], t.aData) && t.aData.push(r[e].split(""));
                    return t.tData.length > 0 ? (t.isBallsComplete = !0, t.tData) : (t.isBallsComplete = !1, [])
                },
                randomNum: function() {
                    var a = this,
                        t = 0,
                        e = [],
                        n = [],
                        i = null,
                        l = [];
                    a.getBallData(),
                        a.getBallData().length,
                        a.getBallData()[0].length,
                        a.defConfig.name;
                    for (a.addRanNumTag(); t < 2; t++) {
                        var o = a.removeSameNum(e);
                        t < 1 ? e.push(o, o) : e.push(o)
                    }
                    return e.sort(function(a, t) {
                        return a > t ? 1 : -1
                    }),
                        l = [[e.join(",")], [], []],
                        n.push(e),
                        i = {
                            type: r.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: l,
                            lotterys: n,
                            moneyUnit: r.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: r.getCurrentGameStatistics().getMultip(),
                            onePrice: r.getCurrentGameStatistics().getOnePrice(),
                            num: n.length
                        },
                        i.amountText = r.getCurrentGameStatistics().formatMoney(i.num * i.moneyUnit * i.multiple * i.onePrice),
                        i
                }
            },
            o = a.Class(l, t);
        o.defConfig = n,
            i[n.name] = new o
    } (phoenix, phoenix.Games.SSC.Danshi),
    function(a, t, e) {
        var n = {
                name: "qiansan.zuxuan.zuxuanbaodan"
            },
            r = a.Games,
            i = a.Games.SSC.getInstance(),
            l = {
                init: function(a) {
                    var t = this;
                    t.addEvent("beforeSelect",
                        function() {
                            r.getCurrentGame().getCurrentGameMethod().getGameMethodName() == t.getGameMethodName() && t.reSet()
                        })
                },
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                buildUI: function() {
                    var a = this;
                    a.container.html(h.join(""))
                },
                checkBallIsComplete: function() {
                    for (var a = this,
                             t = a.getBallData()[0], e = 0, n = t.length, r = 0; e < n; e++) t[e] > 0 && r++;
                    return r >= 1 ? a.isBallsComplete = !0 : a.isBallsComplete = !1
                },
                getLottery: function() {
                    for (var a = this,
                             t = a.getBallData()[0], e = 0, n = t.length, r = []; e < n; e++) t[e] > 0 && r.push(e);
                    return a.checkBallIsComplete() ? a.mathResult(r[0], 0, 9) : []
                },
                checkResult: function(a, t) {
                    for (var e = t.length - 1; e >= 0; e--) if (t[e].join("") == a) return ! 1;
                    return ! 0
                },
                mathResult: function(a, t, e) {
                    var n, r, i, l = this,
                        o = [],
                        s = [];
                    for (n = t; n <= e; n++) for (r = t; r <= e; r++) for (i = t; i <= e; i++) if (n == a && 3 != l.arrIndexOf(n, [n, r, i]) || r == a && 3 != l.arrIndexOf(n, [n, r, i]) || i == a && 3 != l.arrIndexOf(n, [n, r, i])) {
                        var u = [n, r, i].sort(function(a, t) {
                            return a - t
                        });
                        l.checkResult(u.join(""), s) && (s.push(u), o.push([n, r, i]))
                    }
                    return o
                },
                makePostParameter: function(a) {
                    for (var t = [], e = a.length, n = 0; n < e; n++) t = t.concat(a[n].join(","));
                    return t.join("")
                },
                randomNum: function() {
                    var a = this,
                        t = [],
                        e = [],
                        n = a.getBallData()[0].length;
                    return t[0] = Math.floor(Math.random() * n),
                        e = a.mathResult(t[0], 0, 9),
                        order = {
                            type: r.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: [t],
                            lotterys: e,
                            moneyUnit: r.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: r.getCurrentGameStatistics().getMultip(),
                            onePrice: r.getCurrentGameStatistics().getOnePrice(),
                            num: e.length
                        },
                        order.amountText = r.getCurrentGameStatistics().formatMoney(order.num * order.moneyUnit * order.multiple * order.onePrice),
                        order
                }
            },
            o = [];
        o.push('<div class="number-select-content">'),
            o.push('<ul class="ball-section">');
        var s = [];
        s.push("<li>"),
            s.push('<ul class="ball-content">'),
            $.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                function(a) {
                    s.push('<li><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + "</a></li>")
                }),
            s.push("</ul>"),
            s.push("</li>");
        var u = [];
        u.push("</ul>"),
            u.push("</div>");
        var h = [],
            c = s.join("");
        h.push(o.join("")),
            $.each([""],
                function(a) {
                    h.push(c.replace(/<#=title#>/g, this).replace(/<#=row#>/g, a))
                }),
            h.push(u.join(""));
        var p = a.Class(l, t);
        p.defConfig = n,
            i[n.name] = new p
    } (phoenix, phoenix.GameMethod),
    function(a, t, e) {
        var n = {
                name: "qiansan.zuxuan.zuxuanhezhi"
            },
            r = a.Games,
            i = r.SSC.getInstance(),
            l = {
                init: function(a) {},
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                buildUI: function() {
                    var a = this;
                    a.container.html(h.join(""))
                },
                checkBallIsComplete: function() {
                    for (var a = this,
                             t = a.getBallData()[0], e = 0, n = t.length, r = 0; e < n; e++) t[e] > 0 && r++;
                    return r >= 1 ? a.isBallsComplete = !0 : a.isBallsComplete = !1
                },
                makePostParameter: function(a) {
                    for (var t = [], e = a.length, n = 0; n < e; n++) t = t.concat(a[n].join(","));
                    return t.join("")
                },
                getLottery: function() {
                    for (var a = this,
                             t = a.getBallData()[0], e = 0, n = t.length, r = [], i = []; e < n; e++) t[e] > 0 && r.push(e);
                    if (a.checkBallIsComplete()) {
                        for (var l = 0; l < r.length; l++) i = i.concat(a.mathResult(r[l], 0, 9));
                        return i
                    }
                    return []
                },
                removeSame: function(a, t) {
                    var e, n = 0,
                        r = this,
                        i = this.getBallData()[0].length;
                    for (len = t.length, e = Math.floor(Math.random() * i + 1); n < t.length; n++) if (e == t[n]) return arguments.callee.call(r, a, t);
                    return e
                },
                checkResult: function(a, t) {
                    for (var e = t.length - 1; e >= 0; e--) if (t[e].join("") == a) return ! 1;
                    return ! 0
                },
                mathResult: function(a, t, e) {
                    var n, r, i, l = this,
                        o = [],
                        s = [];
                    for (n = t; n <= e; n++) for (r = t; r <= e; r++) for (i = t; i <= e; i++) if (n + r + i == a && 3 != l.arrIndexOf(n, [n, r, i])) {
                        var u = [n, r, i].sort(function(a, t) {
                            return a - t
                        });
                        l.checkResult(u.join(""), s) && (s.push(u), o.push([n, r, i]))
                    }
                    return o
                },
                originalData: function(a) {
                    for (var t = this,
                             e = [], n = 0; n < a.length; n++) for (var r = 0; r < a[n].length; r++) e[r] = e[r] || [],
                    t.arrIndexOf(a[n][r], e[r]) || e[r].push(a[n][r]);
                    return e
                },
                checkRandomBets: function(a, t) {
                    var e = this,
                        n = "undefined" == typeof a,
                        a = a || {},
                        i = [],
                        t = t || 0,
                        l = (e.getBallData().length, e.getBallData()[0].length),
                        o = r.getCurrentGameOrder().getTotal().orders;
                    if (i[0] = Math.ceil(Math.random() * (l - 1)), Number(t) > Number(e.getRandomBetsNum())) return i;
                    if (n) for (var s = 0; s < o.length; s++) if (o[s].type == e.defConfig.name) {
                        var u = o[s].original.join("");
                        a[u] = u
                    }
                    return a[i.join("")] ? (t++, arguments.callee.call(e, a, t)) : i
                },
                randomNum: function() {
                    var a = this,
                        t = [],
                        e = [],
                        n = null;
                    a.getBallData(),
                        a.getBallData()[0].length,
                        a.defConfig.name;
                    return t = a.checkRandomBets(),
                        e = a.mathResult(t[0], 0, 9),
                        n = {
                            type: r.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: [t],
                            lotterys: e,
                            moneyUnit: r.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: r.getCurrentGameStatistics().getMultip(),
                            onePrice: r.getCurrentGameStatistics().getOnePrice(),
                            num: e.length
                        },
                        n.amountText = r.getCurrentGameStatistics().formatMoney(n.num * n.moneyUnit * n.multiple * n.onePrice),
                        n
                }
            },
            o = [];
        o.push('<div class="number-select-content">'),
            o.push('<ul class="ball-section">');
        var s = [];
        s.push("<li>"),
            s.push('<ul class="ball-content">'),
            $.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
                function(a) {
                    0 == a ? s.push('<li style="display:none"><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + "</a></li>") : s.push('<li><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + "</a></li>");
                }),
            s.push("</ul>"),
            s.push("</li>");
        var u = [];
        u.push("</ul>"),
            u.push("</div>");
        var h = [],
            c = s.join("");
        h.push(o.join("")),
            $.each([""],
                function(a) {
                    h.push(c.replace(/<#=title#>/g, this).replace(/<#=row#>/g, a))
                }),
            h.push(u.join(""));
        var p = a.Class(l, t);
        p.defConfig = n,
            i[n.name] = new p
    } (phoenix, phoenix.GameMethod),
    function(a, t, e) {
        var n = {
                name: "quwei.wuxingquwei.haoshichengshuang"
            },
            r = a.Games,
            i = a.Games.SSC.getInstance(),
            l = {
                init: function(a) {},
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                buildUI: function() {
                    var a = this;
                    a.container.html(h.join(""))
                },
                checkBallIsComplete: function() {
                    for (var a = this,
                             t = a.getBallData()[0], e = 0, n = t.length, r = 0; e < n; e++) t[e] > 0 && r++;
                    return r >= 1 ? a.isBallsComplete = !0 : a.isBallsComplete = !1
                },
                getLottery: function() {
                    for (var a = this,
                             t = a.getBallData()[0], e = 0, n = t.length, r = []; e < n; e++) t[e] > 0 && r.push(e);
                    return a.checkBallIsComplete() ? a.combine(r, 1) : []
                },
                makePostParameter: function(a) {
                    for (var t = [], e = a.length, n = 0; n < e; n++) t = t.concat(a[n].join(""));
                    return t.join("")
                },
                randomNum: function() {
                    for (var a, t = this,
                             e = 0,
                             n = [], i = [], l = (t.getBallData()[0].length, []); e < 1; e++) a = t.removeSame(l),
                        n = n.concat(a),
                        l.push(a);
                    return n.sort(function(a, t) {
                        return a - t
                    }),
                        i.push([n[0]]),
                        original = [[i[0][0]]],
                        order = {
                            type: r.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: original,
                            lotterys: i,
                            moneyUnit: r.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: r.getCurrentGameStatistics().getMultip(),
                            onePrice: r.getCurrentGameStatistics().getOnePrice(),
                            num: i.length
                        },
                        order.amountText = r.getCurrentGameStatistics().formatMoney(order.num * order.moneyUnit * order.multiple * order.onePrice),
                        order
                }
            },
            o = [];
        o.push('<div class="number-select-content">'),
            o.push('<ul class="ball-section">');
        var s = [];
        s.push("<li>"),
            s.push('<ul class="ball-content">'),
            $.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                function(a) {
                    s.push('<li><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + "</a></li>")
                }),
            s.push("</ul>"),
            s.push('<div class="ball-control">'),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=all" href="javascript:void(0);">' + translate.Whole + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=big" href="javascript:void(0);">' + translate.Big + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=small" href="javascript:void(0);">' + translate.Small + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=odd" href="javascript:void(0);">' + translate.Odd + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=even" href="javascript:void(0);">' + translate.Even + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=none" href="javascript:void(0);">' + translate.Clear + "</a>"),
            s.push("</div>"),
            s.push("</li>");
        var u = [];
        u.push("</ul>"),
            u.push("</div>");
        var h = [],
            c = s.join("");
        h.push(o.join("")),
            $.each([""],
                function(a) {
                    h.push(c.replace(/<#=title#>/g, this).replace(/<#=row#>/g, a))
                }),
            h.push(u.join(""));
        var p = a.Class(l, t);
        p.defConfig = n,
            i[n.name] = new p
    } (phoenix, phoenix.GameMethod),
    function(a, t, e) {
        var n = {
                name: "quwei.wuxingquwei.sanxingbaoxi"
            },
            r = a.Games,
            i = a.Games.SSC.getInstance(),
            l = {
                init: function(a) {},
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                buildUI: function() {
                    var a = this;
                    a.container.html(h.join(""))
                },
                checkBallIsComplete: function() {
                    for (var a = this,
                             t = a.getBallData()[0], e = 0, n = t.length, r = 0; e < n; e++) t[e] > 0 && r++;
                    return r >= 1 ? a.isBallsComplete = !0 : a.isBallsComplete = !1
                },
                getLottery: function() {
                    for (var a = this,
                             t = a.getBallData()[0], e = 0, n = t.length, r = []; e < n; e++) t[e] > 0 && r.push(e);
                    return a.checkBallIsComplete() ? a.combine(r, 1) : []
                },
                makePostParameter: function(a) {
                    for (var t = [], e = a.length, n = 0; n < e; n++) t = t.concat(a[n].join(""));
                    return t.join("")
                },
                randomNum: function() {
                    for (var a, t = this,
                             e = 0,
                             n = [], i = [], l = (t.getBallData()[0].length, []); e < 1; e++) a = t.removeSame(l),
                        n = n.concat(a),
                        l.push(a);
                    return n.sort(function(a, t) {
                        return a - t
                    }),
                        i.push([n[0]]),
                        original = [[i[0][0]]],
                        order = {
                            type: r.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: original,
                            lotterys: i,
                            moneyUnit: r.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: r.getCurrentGameStatistics().getMultip(),
                            onePrice: r.getCurrentGameStatistics().getOnePrice(),
                            num: i.length
                        },
                        order.amountText = r.getCurrentGameStatistics().formatMoney(order.num * order.moneyUnit * order.multiple * order.onePrice),
                        order
                }
            },
            o = [];
        o.push('<div class="number-select-content">'),
            o.push('<ul class="ball-section">');
        var s = [];
        s.push("<li>"),
            s.push('<ul class="ball-content">'),
            $.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                function(a) {
                    s.push('<li><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + "</a></li>")
                }),
            s.push("</ul>"),
            s.push('<div class="ball-control">'),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=all" href="javascript:void(0);">' + translate.Whole + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=big" href="javascript:void(0);">' + translate.Big + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=small" href="javascript:void(0);">' + translate.Small + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=odd" href="javascript:void(0);">' + translate.Odd + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=even" href="javascript:void(0);">' + translate.Even + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=none" href="javascript:void(0);">' + translate.Clear + "</a>"),
            s.push("</div>"),
            s.push("</li>");
        var u = [];
        u.push("</ul>"),
            u.push("</div>");
        var h = [],
            c = s.join("");
        h.push(o.join("")),
            $.each([""],
                function(a) {
                    h.push(c.replace(/<#=title#>/g, this).replace(/<#=row#>/g, a))
                }),
            h.push(u.join(""));
        var p = a.Class(l, t);
        p.defConfig = n,
            i[n.name] = new p
    } (phoenix, phoenix.GameMethod),
    function(a, t, e) {
        var n = {
                name: "quwei.wuxingquwei.sijifacai"
            },
            r = a.Games,
            i = a.Games.SSC.getInstance(),
            l = {
                init: function(a) {},
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                buildUI: function() {
                    var a = this;
                    a.container.html(h.join(""))
                },
                checkBallIsComplete: function() {
                    for (var a = this,
                             t = a.getBallData()[0], e = 0, n = t.length, r = 0; e < n; e++) t[e] > 0 && r++;
                    return r >= 1 ? a.isBallsComplete = !0 : a.isBallsComplete = !1
                },
                getLottery: function() {
                    for (var a = this,
                             t = a.getBallData()[0], e = 0, n = t.length, r = []; e < n; e++) t[e] > 0 && r.push(e);
                    return a.checkBallIsComplete() ? a.combine(r, 1) : []
                },
                makePostParameter: function(a) {
                    for (var t = [], e = a.length, n = 0; n < e; n++) t = t.concat(a[n].join(""));
                    return t.join("")
                },
                randomNum: function() {
                    for (var a, t = this,
                             e = 0,
                             n = [], i = [], l = (t.getBallData()[0].length, []); e < 1; e++) a = t.removeSame(l),
                        n = n.concat(a),
                        l.push(a);
                    return n.sort(function(a, t) {
                        return a - t
                    }),
                        i.push([n[0]]),
                        original = [[i[0][0]]],
                        order = {
                            type: r.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: original,
                            lotterys: i,
                            moneyUnit: r.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: r.getCurrentGameStatistics().getMultip(),
                            onePrice: r.getCurrentGameStatistics().getOnePrice(),
                            num: i.length
                        },
                        order.amountText = r.getCurrentGameStatistics().formatMoney(order.num * order.moneyUnit * order.multiple * order.onePrice),
                        order
                }
            },
            o = [];
        o.push('<div class="number-select-content">'),
            o.push('<ul class="ball-section">');
        var s = [];
        s.push("<li>"),
            s.push('<ul class="ball-content">'),
            $.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                function(a) {
                    s.push('<li><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + "</a></li>")
                }),
            s.push("</ul>"),
            s.push('<div class="ball-control">'),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=all" href="javascript:void(0);">' + translate.Whole + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=big" href="javascript:void(0);">' + translate.Big + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=small" href="javascript:void(0);">' + translate.Small + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=odd" href="javascript:void(0);">' + translate.Odd + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=even" href="javascript:void(0);">' + translate.Even + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=none" href="javascript:void(0);">' + translate.Clear + "</a>"),
            s.push("</div>"),
            s.push("</li>");
        var u = [];
        u.push("</ul>"),
            u.push("</div>");
        var h = [],
            c = s.join("");
        h.push(o.join("")),
            $.each([""],
                function(a) {
                    h.push(c.replace(/<#=title#>/g, this).replace(/<#=row#>/g, a))
                }),
            h.push(u.join(""));
        var p = a.Class(l, t);
        p.defConfig = n,
            i[n.name] = new p
    } (phoenix, phoenix.GameMethod),
    function(a, t, e) {
        var n = {
                name: "quwei.wuxingquwei.yifanfengshun"
            },
            r = a.Games,
            i = a.Games.SSC.getInstance(),
            l = {
                init: function(a) {},
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                buildUI: function() {
                    var a = this;
                    a.container.html(h.join(""))
                },
                checkBallIsComplete: function() {
                    for (var a = this,
                             t = a.getBallData()[0], e = 0, n = t.length, r = 0; e < n; e++) t[e] > 0 && r++;
                    return r >= 1 ? a.isBallsComplete = !0 : a.isBallsComplete = !1
                },
                getLottery: function() {
                    for (var a = this,
                             t = a.getBallData()[0], e = 0, n = t.length, r = []; e < n; e++) t[e] > 0 && r.push(e);
                    return a.checkBallIsComplete() ? a.combine(r, 1) : []
                },
                makePostParameter: function(a) {
                    for (var t = [], e = a.length, n = 0; n < e; n++) t = t.concat(a[n].join(""));
                    return t.join("")
                },
                randomNum: function() {
                    for (var a, t = this,
                             e = 0,
                             n = [], i = [], l = (t.getBallData()[0].length, []); e < 1; e++) a = t.removeSame(l),
                        n = n.concat(a),
                        l.push(a);
                    return n.sort(function(a, t) {
                        return a - t
                    }),
                        i.push([n[0]]),
                        original = [[i[0][0]]],
                        order = {
                            type: r.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: original,
                            lotterys: i,
                            moneyUnit: r.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: r.getCurrentGameStatistics().getMultip(),
                            onePrice: r.getCurrentGameStatistics().getOnePrice(),
                            num: i.length
                        },
                        order.amountText = r.getCurrentGameStatistics().formatMoney(order.num * order.moneyUnit * order.multiple * order.onePrice),
                        order
                }
            },
            o = [];
        o.push('<div class="number-select-content">'),
            o.push('<ul class="ball-section">');
        var s = [];
        s.push("<li>"),
            s.push('<ul class="ball-content">'),
            $.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                function(a) {
                    s.push('<li><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + "</a></li>")
                }),
            s.push("</ul>"),
            s.push('<div class="ball-control">'),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=all" href="javascript:void(0);">' + translate.Whole + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=big" href="javascript:void(0);">' + translate.Big + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=small" href="javascript:void(0);">' + translate.Small + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=odd" href="javascript:void(0);">' + translate.Odd + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=even" href="javascript:void(0);">' + translate.Even + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=none" href="javascript:void(0);">' + translate.Clear + "</a>"),
            s.push("</div>"),
            s.push("</li>");
        var u = [];
        u.push("</ul>"),
            u.push("</div>");
        var h = [],
            c = s.join("");
        h.push(o.join("")),
            $.each([""],
                function(a) {
                    h.push(c.replace(/<#=title#>/g, this).replace(/<#=row#>/g, a))
                }),
            h.push(u.join(""));
        var p = a.Class(l, t);
        p.defConfig = n,
            i[n.name] = new p
    } (phoenix, phoenix.GameMethod),
    function(a, t, e) {
        var n = {
                name: "renxuan.renxuaner.renxuanerzxds",
                tips: "前二直选单式玩法提示",
                exampleTip: "前二直选单式弹出层22提示"
            },
            r = a.Games,
            l = r.SSC.getInstance(),
            o = {
                init: function(a) {
                    var t = this;
                    setTimeout(function() {
                            t.initFrame()
                        },
                        25),
                        t.digitstrType = "s_g_",
                        t.setCurrentDigitstr(t.digitstrType),
                        t.bindEventInstance()
                },
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                getOriginal: function() {
                    var a = this,
                        t = a.getBallData(),
                        e = t.length,
                        n = t[0].length;
                    for (i = 0, j = 0, row = [], tData = a.getTdata(), data = a.getHtml(), result = []; i < e; i++) {
                        for (row = [], j = 0; j < n; j++) t[i][j] > 0 && row.push(j);
                        result.push(row)
                    }
                    return tData.length > 0 && (result[0][0] = a.getTdata().join("&")),
                        result
                },
                checkBallIsComplete: function(a) {
                    var t = this,
                        e = 0,
                        n = [];
                    if (t.isFirstAdd) for (t.aData = [], t.vData = [], t.sameData = [], t.errorData = [], t.tData = [], t.vDataBack = {},
                                               t.aDataBack = {},
                                               t.tDataBack = {},
                                               t.sameDataBack = {},
                                               t.errorDataBack = {},
                                               n = t.iterator(t.filterLotters(a)) || []; e < n.length; e++) {
                        var r = n[e].split(""),
                            i = n[e];
                        t.checkSingleNum(i) ? (t.vDataBack[i] ? t.sameData.push(r) : t.tData.push(r), t.vDataBack[i] = r, t.vData.push(r)) : (t.errorDataBack[i] ? t.sameData.push(r) : t.errorData.push(r), t.errorDataBack[i] = r),
                            t.aDataBack[i] ? "": t.aData.push(r),
                            t.aDataBack[i] = r
                    }
                    return t.vData.length > 0 ? (t.isBallsComplete = !0, t.isFirstAdd ? t.mathCorretBet(t.vData, t.checkPositionRules()) : t.tData.length > 0 ? t.mathCorretBet(t.tData, t.checkPositionRules()) : []) : (t.isBallsComplete = !1, [])
                },
                randomNum: function() {
                    var a = this,
                        t = [],
                        e = null,
                        n = ["s_g_", "w_q_", "q_b_", "b_s_", "w_g_"],
                        i = (a.getBallData(), a.defConfig.name, []),
                        l = [];
                    return a.addRanNumTag(),
                        t = a.checkRandomBets(),
                        l = [[t.join(",")], []],
                        i = a.combination(t),
                        e = {
                            type: r.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: l,
                            lotterys: i,
                            moneyUnit: r.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: r.getCurrentGameStatistics().getMultip(),
                            onePrice: r.getCurrentGameStatistics().getOnePrice(),
                            digitstr: n[Math.floor(Math.random() * n.length)],
                            num: i.length
                        },
                        e.amountText = r.getCurrentGameStatistics().formatMoney(e.num * e.moneyUnit * e.multiple * e.onePrice),
                        e
                },
                makeSubmitParameter: function(a) {
                    var t = $.extend(!0, [], a);
                    return t.join("").replace(/,/g, "")
                },
                makePostParameter: function(a) {
                    for (var t = [], e = a.length, n = 0; n < e; n++) t = t.concat(a[n].join("").replace(/\&/g, " ").replace(/\,/g, ""));
                    return t.join(" ")
                },
                getHTML: function() {
                    var a = [];
                    return a.push('<div class="balls-import clearfix">'),
                        a.push('<form id="form1" name="form1" enctype="multipart/form-data" method="post" action="' + r.getCurrentGame().getGameConfig().getInstance().getUploadPath() + '" target="check_file_frame" style="position:relative;padding-bottom:10px;">'),
                        /*a.push('<input name="file" type="file" id="file" size="40" hidefocus="true" value="' + translate.UploadFile + '" style="outline:none;-ms-filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=0);filter:alpha(opacity=0);opacity: 0;position:absolute;top:0px; left:0px; width:107px; height:30px;z-index:1;background:#000" />'),
                        a.push('<input type="button" class="balls-import-input" value="' + translate.UploadFile + '" onclick=document.getElementById("form1").file.click()><a class="balls-example-danshi-tip" href="#">查看标准格式样本</a>'),*/
                        a.push('<input type="reset" style="outline:none;-ms-filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=0);filter:alpha(opacity=0);opacity: 0;width:0px; height:0px;z-index:1;background:#000" />'),
                        a.push('<div id="J-postion-select" class="balls-import clearfix postion-select">'),
                        a.push('<label><input type="checkbox" class="wan" data-position="w_"> ' + translate.Million + "</label>"),
                        a.push('<label><input type="checkbox" class="qian" data-position="q_"> ' + translate.Thousand + "</label>"),
                        a.push('<label><input type="checkbox" class="bai" data-position="b_"> ' + translate.Hundred + "</label>"),
                        a.push('<label><input type="checkbox" checked="checked" class="shi" data-position="s_"> ' + translate.Ten + "</label>"),
                        a.push('<label><input type="checkbox" checked="checked" class="ge" data-position="g_"> ' + translate.Dollar + "</label>"),
                        a.push("</div>"),
                        a.push("</form>"),
                        a.push('<div class="panel-select" ><iframe style="width:100%;height:100%;border:0 none;background-color:#F9F9F9;" class="content-text-balls"></iframe></div>'),
                        a.push('<div class="panel-btn">'),
                        a.push('<a class="remove-error" id="" href="javascript:void(0);"><i></i>' + translate.DeleteError + "</a>"),
                        a.push('<a class="remove-same" id="" href="javascript:void(0);"><i></i>' + translate.RemoveDuplicate + "</a>"),
                        a.push('<a class="remove-all" id="" href="javascript:void(0);"><i></i>' + translate.ClearTextbox + "</a>"),
                        a.push("</div>"),
                        a.push("</div>"),
                        a.join("")
                }
            },
            s = a.Class(o, t);
        s.defConfig = n,
            l[n.name] = new s
    } (phoenix, phoenix.Games.SSC.Danshi),
    function(a, t, e) {
        var n = {
                name: "renxuan.renxuaner.renxuanerzxfs",
                tips: "前二直选复式玩法提示",
                exampleTip: "前二直选复式范例"
            },
            r = a.Games,
            i = r.SSC.getInstance(),
            l = {
                init: function(a) {},
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                buildUI: function() {
                    var a = this;
                    a.container.html(h.join(""))
                },
                getLottery: function(a) {
                    for (var t, e = this,
                             n = e.getBallData(), r = 0, i = n.length, l = !0, o = 0, s = 0, u = [], h = [], c = 1, p = 0, m = 0; r < i; r++) {
                        var d = [];
                        for (t = n[r], s = t.length, l = !0, p = 0, o = 0; o < s; o++) t[o] > 0 && (l = !1, a || (u.push(o), d.push(o)), p++);
                        if (l);
                        else {
                            if (d.length > 1) for (var g = e.combine(d, 2), f = g.length - 1; f >= 0; f--) h.push(g[f]);
                            m++
                        }
                        c *= p
                    }
                    return e.isBallsComplete = m > 1,
                        a ? c: e.isBallsComplete ? e.removeArrFormTarget(e.combine(u, 2), h) : []
                },
                makePostParameter: function(a) {
                    for (var t = 0,
                             e = 5,
                             n = []; t < e; t++)"undefined" == typeof a[t] || 0 == a[t].length ? n.push("-") : n = n.concat(a[t].join("&"));
                    return n.join(",")
                },
                createRandomNum: function() {
                    for (var a = this,
                             t = [], e = 2, n = a.getBallData()[0].length, r = 0; r < e; r++) t[r] = [Math.floor(Math.random() * n)],
                        t[r].sort(function(a, t) {
                            return a > t ? 1 : -1
                        });
                    return t
                }
            },
            o = [];
        o.push('<div class="number-select-content">'),
            o.push('<ul class="ball-section">');
        var s = [];
        s.push("<li>"),
            s.push('<div class="ball-title">'),
            s.push("<strong><#=title#>" + translate.Pos + "</strong>"),
            s.push("</div>"),
            s.push('<ul class="ball-content">'),
            $.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                function(a) {
                    s.push('<li><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + "</a></li>")
                }),
            s.push("</ul>"),
            s.push('<div class="ball-control">'),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=all" href="javascript:void(0);">' + translate.Whole + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=big" href="javascript:void(0);">' + translate.Big + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=small" href="javascript:void(0);">' + translate.Small + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=odd" href="javascript:void(0);">' + translate.Odd + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=even" href="javascript:void(0);">' + translate.Even + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=none" href="javascript:void(0);">' + translate.Clear + "</a>"),
            s.push("</div>"),
            s.push("</li>");
        var u = [];
        u.push("</ul>"),
            u.push("</div>");
        var h = [],
            c = s.join("");
        h.push(o.join("")),
            $.each([translate.Million, translate.Thousand, translate.Hundred, translate.Ten, translate.Dollar],
                function(a) {
                    h.push(c.replace(/<#=title#>/g, this).replace(/<#=row#>/g, a))
                }),
            h.push(u.join(""));
        var p = a.Class(l, t);
        p.defConfig = n,
            i[n.name] = new p
    } (phoenix, phoenix.GameMethod),
    function(a, t, e) {
        var n = {
                name: "renxuan.renxuaner.renxuanerzzds",
                tips: "前二组选单式玩法提示",
                exampleTip: "前二组选单式弹出层1111提示"
            },
            r = a.Games,
            l = r.SSC.getInstance(),
            o = {
                init: function(a) {
                    var t = this;
                    setTimeout(function() {
                            t.initFrame()
                        },
                        25),
                        t.digitstrType = "s_g_",
                        t.setCurrentDigitstr(t.digitstrType),
                        t.bindEventInstance()
                },
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                checkBallIsComplete: function(a) {
                    var t = this,
                        e = 0,
                        n = [];
                    if (t.isFirstAdd) for (t.aData = [], t.sameData = [], t.errorData = [], t.tData = [], t.vData = [], t.vDataBack = {},
                                               t.aDataBack = {},
                                               t.tDataBack = {},
                                               t.sameDataBack = {},
                                               t.errorDataBack = {},
                                               n = t.iterator(t.filterLotters(a)) || []; e < n.length; e++) {
                        var r, i, l;
                        i = n[e].split(""),
                            r = n[e].split("").sort(function(a, t) {
                                return a - t
                            }),
                            l = r.join(""),
                            t.defConfig.checkNum.test(l) && l.length == t.balls.length && !t.checkNumSameIndex(l, 2) ? (t.vDataBack[l] ? t.sameData.push(i) : t.tData.push(r), t.vDataBack[l] = i, t.vData.push(i)) : (t.errorDataBack[l] ? t.sameData.push(i) : t.errorData.push(i), t.errorDataBack[l] = i),
                            t.aDataBack[l] ? "": t.aData.push(i),
                            t.aDataBack[l] = i
                    }
                    return t.vData.length > 0 ? (t.isBallsComplete = !0, t.isFirstAdd ? t.mathCorretBet(t.vData, t.checkPositionRules()) : t.tData.length > 0 ? t.mathCorretBet(t.tData, t.checkPositionRules()) : []) : (t.isBallsComplete = !1, [])
                },
                randomNum: function() {
                    var a = this,
                        t = 0,
                        e = [],
                        n = [],
                        i = null,
                        l = ["s_g_", "w_q_", "q_b_", "b_s_", "w_g_"],
                        o = (a.getBallData(), a.getBallData().length, a.getBallData()[0].length, a.defConfig.name, []);
                    for (a.addRanNumTag(); t < 2; t++) {
                        var s = a.removeSameNum(e);
                        e.push(s)
                    }
                    return e.sort(function(a, t) {
                        return a > t ? 1 : -1
                    }),
                        o = [[e.join(",")], []],
                        n.push(e),
                        i = {
                            type: r.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: o,
                            lotterys: n,
                            moneyUnit: r.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: r.getCurrentGameStatistics().getMultip(),
                            onePrice: r.getCurrentGameStatistics().getOnePrice(),
                            digitstr: l[Math.floor(Math.random() * l.length)],
                            num: n.length
                        },
                        i.amountText = r.getCurrentGameStatistics().formatMoney(i.num * i.moneyUnit * i.multiple * i.onePrice),
                        i
                },
                checkNumSameIndex: function(a, t) {
                    for (var e, n = this,
                             r = a.length > 0 ? a: [], i = 0; i < r.length; i++) if (n.arrIndexOf(r[i], r) == t) {
                        e = !0;
                        break
                    }
                    return e || !1
                },
                getOriginal: function() {
                    var a = this,
                        t = a.getBallData(),
                        e = t.length,
                        n = t[0].length;
                    for (i = 0, j = 0, row = [], tData = a.getTdata(), data = a.getHtml(), result = []; i < e; i++) {
                        for (row = [], j = 0; j < n; j++) t[i][j] > 0 && row.push(j);
                        result.push(row)
                    }
                    return tData.length > 0 && (result[0][0] = a.getTdata().join("&")),
                        result
                },
                makeSubmitParameter: function(a) {
                    var t = $.extend(!0, [], a);
                    return t.join("").replace(/,/g, "")
                },
                makePostParameter: function(a) {
                    for (var t = [], e = a.length, n = 0; n < e; n++) t = t.concat(a[n].join("").replace(/\&/g, " ").replace(/\,/g, ""));
                    return t.join(" ")
                },
                getHTML: function() {
                    var a = [];
                    return a.push('<div class="balls-import clearfix">'),
                        a.push('<form id="form1" name="form1" enctype="multipart/form-data" method="post" action="' + r.getCurrentGame().getGameConfig().getInstance().getUploadPath() + '" target="check_file_frame" style="position:relative;padding-bottom:10px;">'),
                        /*a.push('<input name="file" type="file" id="file" size="40" hidefocus="true" value="' + translate.UploadFile + '" style="outline:none;-ms-filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=0);filter:alpha(opacity=0);opacity: 0;position:absolute;top:0px; left:0px; width:107px; height:30px;z-index:1;background:#000" />'),
                        a.push('<input type="button" class="balls-import-input" value="' + translate.UploadFile + '" onclick=document.getElementById("form1").file.click()><a class="balls-example-danshi-tip" href="#">查看标准格式样本</a>'),*/
                        a.push('<input type="reset" style="outline:none;-ms-filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=0);filter:alpha(opacity=0);opacity: 0;width:0px; height:0px;z-index:1;background:#000" />'),
                        a.push('<div id="J-postion-select" class="balls-import clearfix postion-select">'),
                        a.push('<label><input type="checkbox" class="wan" data-position="w_"> ' + translate.Million + "</label>"),
                        a.push('<label><input type="checkbox" class="qian" data-position="q_"> ' + translate.Thousand + "</label>"),
                        a.push('<label><input type="checkbox" class="bai" data-position="b_"> ' + translate.Hundred + "</label>"),
                        a.push('<label><input type="checkbox" checked="checked" class="shi" data-position="s_"> ' + translate.Ten + "</label>"),
                        a.push('<label><input type="checkbox" checked="checked" class="ge" data-position="g_"> ' + translate.Dollar + "</label>"),
                        a.push("</div>"),
                        a.push("</form>"),
                        a.push('<div class="panel-select" ><iframe style="width:100%;height:100%;border:0 none;background-color:#F9F9F9;" class="content-text-balls"></iframe></div>'),
                        a.push('<div class="panel-btn">'),
                        a.push('<a class="remove-error" id="" href="javascript:void(0);"><i></i>' + translate.DeleteError + "</a>"),
                        a.push('<a class="remove-same" id="" href="javascript:void(0);"><i></i>' + translate.RemoveDuplicate + "</a>"),
                        a.push('<a class="remove-all" id="" href="javascript:void(0);"><i></i>' + translate.ClearTextbox + "</a>"),
                        a.push("</div>"),
                        a.push("</div>"),
                        a.join("")
                }
            },
            s = a.Class(o, t);
        s.defConfig = n,
            l[n.name] = new s
    } (phoenix, phoenix.Games.SSC.Danshi),
    function(a, t, e) {
        var n = {
                name: "renxuan.renxuaner.renxuanerzzfs",
                tips: "前二组选复式玩法提示",
                exampleTip: "前二组选复式范例"
            },
            r = a.Games,
            i = r.SSC.getInstance(),
            l = {
                init: function(a) {
                    var t = this;
                    t.digitstrType = "s_g_",
                        t.setCurrentDigitstr(t.digitstrType),
                        t.bindEventInstance()
                },
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                buildUI: function() {
                    var a = this;
                    a.container.html(h.join(""))
                },
                makePostParameter: function(a) {
                    for (var t = 0,
                             e = a.length,
                             n = []; t < e; t++) n.push(a[t].join());
                    return n.join(",")
                },
                getLottery: function(a) {
                    var t = this,
                        e = t.getBallData()[0],
                        n = 0,
                        r = e.length,
                        i = !0,
                        l = [],
                        o = [],
                        s = 0;
                    for (n = 0; n < r; n++) e[n] > 0 && (s++, l.push(n));
                    return s > 1 && (i = !1),
                        i ? (t.isBallsComplete = !1, []) : (t.isBallsComplete = !0, o = t.combine(l, 2), t.mathCorretBet(o, t.checkPositionRules()))
                },
                randomNum: function() {
                    var a = this,
                        t = [],
                        e = [],
                        n = null,
                        i = (a.getBallData()[0].length, []);
                    return t.push(a.removeSame(i)),
                        i.push(t),
                        t.push(a.removeSame(i)),
                        t.sort(function(a, t) {
                            return a - t
                        }),
                        e = [[t[0], t[1]]],
                        n = {
                            type: r.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: [t],
                            lotterys: e,
                            moneyUnit: r.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: r.getCurrentGameStatistics().getMultip(),
                            onePrice: r.getCurrentGameStatistics().getOnePrice(),
                            digitstr: "s_g_",
                            num: e.length
                        },
                        n.amountText = r.getCurrentGameStatistics().formatMoney(n.num * n.moneyUnit * n.multiple * n.onePrice),
                        n
                }
            },
            o = [];
        o.push('<div id="J-postion-select" class="balls-import clearfix postion-select">'),
            o.push('<label><input type="checkbox" class="wan" data-position="w_"> ' + translate.Million + "</label>"),
            o.push('<label><input type="checkbox" class="qian" data-position="q_"> ' + translate.Thousand + "</label>"),
            o.push('<label><input type="checkbox" class="bai" data-position="b_"> ' + translate.Hundred + "</label>"),
            o.push('<label><input type="checkbox" checked="checked" class="shi" data-position="s_"> ' + translate.Ten + "</label>"),
            o.push('<label><input type="checkbox" checked="checked" class="ge" data-position="g_"> ' + translate.Dollar + "</label>"),
            o.push("</div>"),
            o.push('<div class="number-select-content">'),
            o.push('<ul class="ball-section">');
        var s = [];
        s.push("<li>"),
            s.push('<ul class="ball-content">'),
            $.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                function(a) {
                    s.push('<li><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + "</a></li>")
                }),
            s.push("</ul>"),
            s.push('<div class="ball-control">'),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=all" href="javascript:void(0);">' + translate.Whole + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=big" href="javascript:void(0);">' + translate.Big + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=small" href="javascript:void(0);">' + translate.Small + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=odd" href="javascript:void(0);">' + translate.Odd + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=even" href="javascript:void(0);">' + translate.Even + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=none" href="javascript:void(0);">' + translate.Clear + "</a>"),
            s.push("</div>"),
            s.push("</li>");
        var u = [];
        u.push("</ul>"),
            u.push("</div>");
        var h = [],
            c = s.join("");
        h.push(o.join("")),
            $.each([""],
                function(a) {
                    h.push(c.replace(/<#=title#>/g, this).replace(/<#=row#>/g, a))
                }),
            h.push(u.join(""));
        var p = a.Class(l, t);
        p.defConfig = n,
            i[n.name] = new p
    } (phoenix, phoenix.GameMethod),
    function(a, t, e) {
        var n = {
                name: "renxuan.renxuansan.renxuansanzl"
            },
            r = a.Games,
            i = a.Games.SSC.getInstance(),
            l = {
                init: function(a) {
                    var t = this;
                    t.digitstrType = "s_g_b_",
                        t.setCurrentDigitstr(t.digitstrType),
                        t.bindEventInstance()
                },
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                buildUI: function() {
                    var a = this;
                    a.container.html(h.join(""))
                },
                checkBallIsComplete: function() {
                    for (var a = this,
                             t = a.getBallData()[0], e = 0, n = t.length, r = 0; e < n; e++) t[e] > 0 && r++;
                    return r >= 3 ? a.isBallsComplete = !0 : a.isBallsComplete = !1
                },
                makePostParameter: function(a) {
                    for (var t = [], e = a.length, n = 0; n < e; n++) t = t.concat(a[n].join(""));
                    return t.join("")
                },
                getLottery: function() {
                    for (var a = this,
                             t = a.getBallData()[0], e = 0, n = t.length, r = []; e < n; e++) t[e] > 0 && r.push(e);
                    return a.checkBallIsComplete() ? a.mathCorretBet(a.combine(r, 3), a.checkPositionRules()) : []
                },
                mathCorretBet: function(a, t) {
                    var e = this,
                        n = [].concat(a);
                    return 4 == t ? n = e.copySameArrappend(a, 4) : 5 == t ? n = e.copySameArrappend(a, 10) : t <= 2 && (n = []),
                        n
                },
                checkRandomBets: function(a, t) {
                    for (var e = this,
                             n = "undefined" == typeof a,
                             a = a || {},
                             i = [], t = t || 0, l = (e.getBallData().length, e.getBallData()[0].length, r.getCurrentGameOrder().getTotal().orders), o = 0; o < 3; o++) i[o] = [e.removeSame(i)];
                    if (i.sort(function(a, t) {
                            return a - t
                        }), Number(t) > Number(e.getRandomBetsNum())) return i;
                    if (n) for (var s = 0; s < l.length; s++) if (l[s].type == e.defConfig.name) {
                        var u = l[s].original.join("");
                        a[u] = u
                    }
                    return a[i.join("")] ? (t++, arguments.callee.call(e, a, t)) : i
                },
                randomNum: function() {
                    var a = this,
                        t = [],
                        e = [],
                        n = null;
                    a.getBallData(),
                        a.getBallData()[0].length,
                        a.defConfig.name;
                    return t = a.checkRandomBets(),
                        e = [t],
                        n = {
                            type: r.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: [t],
                            lotterys: e,
                            moneyUnit: r.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: r.getCurrentGameStatistics().getMultip(),
                            onePrice: r.getCurrentGameStatistics().getOnePrice(),
                            digitstr: "s_g_b_",
                            num: e.length
                        },
                        n.amountText = r.getCurrentGameStatistics().formatMoney(n.num * n.moneyUnit * n.multiple * n.onePrice),
                        n
                }
            },
            o = [];
        o.push('<div id="J-postion-select" class="balls-import clearfix postion-select">'),
            o.push('<label><input type="checkbox" class="wan" data-position="w_"> ' + translate.Million + "</label>"),
            o.push('<label><input type="checkbox" class="qian" data-position="q_"> ' + translate.Thousand + "</label>"),
            o.push('<label><input type="checkbox" checked="checked" class="bai" data-position="b_"> ' + translate.Hundred + "</label>"),
            o.push('<label><input type="checkbox" checked="checked" class="shi" data-position="s_"> ' + translate.Ten + "</label>"),
            o.push('<label><input type="checkbox" checked="checked" class="ge" data-position="g_"> ' + translate.Dollar + "</label>"),
            o.push("</div>"),
            o.push('<div class="number-select-content">'),
            o.push('<ul class="ball-section">');
        var s = [];
        s.push("<li>"),
            s.push('<ul class="ball-content">'),
            $.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                function(a) {
                    s.push('<li><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + "</a></li>")
                }),
            s.push("</ul>"),
            s.push('<div class="ball-control">'),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=all" href="javascript:void(0);">' + translate.Whole + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=big" href="javascript:void(0);">' + translate.Big + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=small" href="javascript:void(0);">' + translate.Small + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=odd" href="javascript:void(0);">' + translate.Odd + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=even" href="javascript:void(0);">' + translate.Even + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=none" href="javascript:void(0);">' + translate.Clear + "</a>"),
            s.push("</div>"),
            s.push("</li>");
        var u = [];
        u.push("</ul>"),
            u.push("</div>");
        var h = [],
            c = s.join("");
        h.push(o.join("")),
            $.each([""],
                function(a) {
                    h.push(c.replace(/<#=title#>/g, this).replace(/<#=row#>/g, a))
                }),
            h.push(u.join(""));
        var p = a.Class(l, t);
        p.defConfig = n,
            i[n.name] = new p
    } (phoenix, phoenix.GameMethod),
    function(a, t, e) {
        var n = {
                name: "renxuan.renxuansan.renxuansanzs"
            },
            r = a.Games,
            i = a.Games.SSC.getInstance(),
            l = {
                init: function(a) {
                    var t = this;
                    t.digitstrType = "s_g_b_",
                        t.setCurrentDigitstr(t.digitstrType),
                        t.bindEventInstance()
                },
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                buildUI: function() {
                    var a = this;
                    a.container.html(h.join(""))
                },
                makePostParameter: function(a) {
                    for (var t = [], e = a.length, n = 0; n < e; n++) t = t.concat(a[n].join(""));
                    return t.join("")
                },
                checkBallIsComplete: function() {
                    for (var a = this,
                             t = a.getBallData(), e = 0, n = t[0].length, r = 0; e < n; e++) t[0][e] > 0 && r++;
                    return r >= 2 ? a.isBallsComplete = !0 : a.isBallsComplete = !1
                },
                getLottery: function() {
                    var a = this,
                        t = a.getBallData(),
                        e = 0,
                        n = t[0].length,
                        r = [],
                        i = [],
                        l = [];
                    if (arr = [], nr = new Array, a.checkBallIsComplete()) {
                        for (; e < n; e++) t[0][e] > 0 && arr.push(e);
                        for (var o = 0; o < arr.length; o++) i = [],
                            r = arr.concat(),
                            i.push([[arr[o], arr[o]].join("")]),
                            r.splice(o, 1),
                            i.push(r),
                            l = l.concat(a.combination(i));
                        for (var s = 0; s < l.length; s++) l[s] = l[s].join("").split("");
                        return a.mathCorretBet(l, a.checkPositionRules())
                    }
                    return []
                },
                mathCorretBet: function(a, t) {
                    var e = this,
                        n = [].concat(a);
                    return 4 == t ? n = e.copySameArrappend(a, 4) : 5 == t ? n = e.copySameArrappend(a, 10) : t <= 2 && (n = []),
                        n
                },
                getLotteryOriginal: function(a) {
                    for (var t = a,
                             e = this,
                             n = e.getBallData(), r = (n[0].length, []), i = [], l = [], o = 0; o < t.length; o++) i = [],
                        r = t.concat(),
                        i.push([[t[o], t[o]].join("")]),
                        r.splice(o, 1),
                        i.push(r),
                        l = l.concat(e.combination(i));
                    for (var s = 0; s < l.length; s++) l[s] = l[s].join("").split("");
                    return l
                },
                removeSame: function(a) {
                    var t, e = 0,
                        n = this,
                        r = this.getBallData()[0].length;
                    for (len = a.length, t = Math.floor(Math.random() * r); e < a.length; e++) if (t == a[e]) return arguments.callee.call(n, a);
                    return t
                },
                randomNum: function() {
                    var a = this,
                        t = 0,
                        e = [],
                        n = [],
                        i = null;
                    for (a.getBallData(), a.getBallData()[0].length, a.defConfig.name; t < 2; t++) e[t] = a.removeSame(e);
                    return e.sort(function(a, t) {
                        return a > t ? 1 : -1
                    }),
                        n = a.getLotteryOriginal(e),
                        i = {
                            type: r.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: [e],
                            lotterys: n,
                            moneyUnit: r.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: r.getCurrentGameStatistics().getMultip(),
                            onePrice: r.getCurrentGameStatistics().getOnePrice(),
                            digitstr: "s_g_b_",
                            num: n.length
                        },
                        i.amountText = r.getCurrentGameStatistics().formatMoney(i.num * i.moneyUnit * i.multiple * i.onePrice),
                        i
                }
            },
            o = [];
        o.push('<div id="J-postion-select" class="balls-import clearfix postion-select">'),
            o.push('<label><input type="checkbox" class="wan" data-position="w_"> ' + translate.Million + "</label>"),
            o.push('<label><input type="checkbox" class="qian" data-position="q_"> ' + translate.Thousand + "</label>"),
            o.push('<label><input type="checkbox" checked="checked" class="bai" data-position="b_"> ' + translate.Hundred + "</label>"),
            o.push('<label><input type="checkbox" checked="checked" class="shi" data-position="s_"> ' + translate.Ten + "</label>"),
            o.push('<label><input type="checkbox" checked="checked" class="ge" data-position="g_"> ' + translate.Dollar + "</label>"),
            o.push("</div>"),
            o.push('<div class="number-select-content">'),
            o.push('<ul class="ball-section">');
        var s = [];
        s.push("<li>"),
            s.push('<ul class="ball-content">'),
            $.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                function(a) {
                    s.push('<li><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + "</a></li>")
                }),
            s.push("</ul>"),
            s.push('<div class="ball-control">'),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=all" href="javascript:void(0);">' + translate.Whole + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=big" href="javascript:void(0);">' + translate.Big + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=small" href="javascript:void(0);">' + translate.Small + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=odd" href="javascript:void(0);">' + translate.Odd + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=even" href="javascript:void(0);">' + translate.Even + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=none" href="javascript:void(0);">' + translate.Clear + "</a>"),
            s.push("</div>"),
            s.push("</li>");
        var u = [];
        u.push("</ul>"),
            u.push("</div>");
        var h = [],
            c = s.join("");
        h.push(o.join("")),
            $.each([""],
                function(a) {
                    h.push(c.replace(/<#=title#>/g, this).replace(/<#=row#>/g, a))
                }),
            h.push(u.join(""));
        var p = a.Class(l, t);
        p.defConfig = n,
            i[n.name] = new p
    } (phoenix, phoenix.GameMethod),
    function(a, t, e) {
        var n = {
                name: "renxuan.renxuansan.renxuansanzxds",
                tips: "前三直选单式玩法提示",
                exampleTip: "前三直选单式弹出层22提示"
            },
            r = a.Games,
            l = r.SSC.getInstance(),
            o = {
                init: function(a) {
                    var t = this;
                    setTimeout(function() {
                            t.initFrame()
                        },
                        25),
                        t.digitstrType = "s_g_b_",
                        t.setCurrentDigitstr(t.digitstrType),
                        t.bindEventInstance()
                },
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                checkBallIsComplete: function(a) {
                    var t = this,
                        e = 0,
                        n = [];
                    if (t.isFirstAdd) for (t.aData = [], t.vData = [], t.sameData = [], t.errorData = [], t.tData = [], t.vDataBack = {},
                                               t.aDataBack = {},
                                               t.tDataBack = {},
                                               t.sameDataBack = {},
                                               t.errorDataBack = {},
                                               n = t.iterator(t.filterLotters(a)) || []; e < n.length; e++) {
                        var r = n[e].split(""),
                            i = n[e];
                        t.checkSingleNum(i) ? (t.vDataBack[i] ? t.sameData.push(r) : t.tData.push(r), t.vDataBack[i] = r, t.vData.push(r)) : (t.errorDataBack[i] ? t.sameData.push(r) : t.errorData.push(r), t.errorDataBack[i] = r),
                            t.aDataBack[i] ? "": t.aData.push(r),
                            t.aDataBack[i] = r
                    }
                    return t.vData.length > 0 ? (t.isBallsComplete = !0, t.isFirstAdd ? t.mathCorretBet(t.vData, t.checkPositionRules()) : t.tData.length > 0 ? t.mathCorretBet(t.tData, t.checkPositionRules()) : []) : (t.isBallsComplete = !1, [])
                },
                randomNum: function() {
                    var a = this,
                        t = [],
                        e = null,
                        n = (a.getBallData(), a.defConfig.name, ["b_s_g_", "w_q_b_", "q_b_s_", "w_b_s_", "w_b_g_"]),
                        i = [],
                        l = [];
                    return a.addRanNumTag(),
                        t = a.checkRandomBets(),
                        l = [[t.join(",")], [], []],
                        i = a.combination(t),
                        e = {
                            type: r.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: l,
                            lotterys: i,
                            moneyUnit: r.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: r.getCurrentGameStatistics().getMultip(),
                            onePrice: r.getCurrentGameStatistics().getOnePrice(),
                            digitstr: n[Math.floor(Math.random() * n.length)],
                            num: i.length
                        },
                        e.amountText = r.getCurrentGameStatistics().formatMoney(e.num * e.moneyUnit * e.multiple * e.onePrice),
                        e
                },
                mathCorretBet: function(a, t) {
                    var e = this,
                        n = [].concat(a);
                    return 4 == t ? n = e.copySameArrappend(a, 4) : 5 == t ? n = e.copySameArrappend(a, 10) : t <= 2 && (n = []),
                        n
                },
                getOriginal: function() {
                    var a = this,
                        t = a.getBallData(),
                        e = t.length,
                        n = t[0].length;
                    for (i = 0, j = 0, row = [], tData = a.getTdata(), data = a.getHtml(), result = []; i < e; i++) {
                        for (row = [], j = 0; j < n; j++) t[i][j] > 0 && row.push(j);
                        result.push(row)
                    }
                    return tData.length > 0 && (result[0][0] = a.getTdata().join("&")),
                        result
                },
                makeSubmitParameter: function(a) {
                    var t = $.extend(!0, [], a);
                    return t.join("").replace(/,/g, "")
                },
                makePostParameter: function(a) {
                    for (var t = [], e = a.length, n = 0; n < e; n++) t = t.concat(a[n].join("").replace(/\&/g, " ").replace(/\,/g, ""));
                    return t.join(" ")
                },
                getHTML: function() {
                    var a = [];
                    return a.push('<div class="balls-import clearfix">'),
                        a.push('<form id="form1" name="form1" enctype="multipart/form-data" method="post" action="' + r.getCurrentGame().getGameConfig().getInstance().getUploadPath() + '" target="check_file_frame" style="position:relative;padding-bottom:10px;">'),
                        /*a.push('<input name="file" type="file" id="file" size="40" hidefocus="true" value="' + translate.UploadFile + '" style="outline:none;-ms-filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=0);filter:alpha(opacity=0);opacity: 0;position:absolute;top:0px; left:0px; width:107px; height:30px;z-index:1;background:#000" />'),
                        a.push('<input type="button" class="balls-import-input" value="' + translate.UploadFile + '" onclick=document.getElementById("form1").file.click()><a class="balls-example-danshi-tip" href="#">查看标准格式样本</a>'),*/
                        a.push('<input type="reset" style="outline:none;-ms-filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=0);filter:alpha(opacity=0);opacity: 0;width:0px; height:0px;z-index:1;background:#000" />'),
                        a.push('<div id="J-postion-select" class="balls-import clearfix postion-select">'),
                        a.push('<label><input type="checkbox" class="wan" data-position="w_"> ' + translate.Million + "</label>"),
                        a.push('<label><input type="checkbox" class="qian" data-position="q_"> ' + translate.Thousand + "</label>"),
                        a.push('<label><input type="checkbox" checked="checked" class="bai" data-position="b_"> ' + translate.Hundred + "</label>"),
                        a.push('<label><input type="checkbox" checked="checked" class="shi" data-position="s_"> ' + translate.Ten + "</label>"),
                        a.push('<label><input type="checkbox" checked="checked" class="ge" data-position="g_"> ' + translate.Dollar + "</label>"),
                        a.push("</div>"),
                        a.push("</form>"),
                        a.push('<div class="panel-select" ><iframe style="width:100%;height:100%;border:0 none;background-color:#F9F9F9;" class="content-text-balls"></iframe></div>'),
                        a.push('<div class="panel-btn">'),
                        a.push('<a class="remove-error" id="" href="javascript:void(0);"><i></i>' + translate.DeleteError + "</a>"),
                        a.push('<a class="remove-same" id="" href="javascript:void(0);"><i></i>' + translate.RemoveDuplicate + "</a>"),
                        a.push('<a class="remove-all" id="" href="javascript:void(0);"><i></i>' + translate.ClearTextbox + "</a>"),
                        a.push("</div>"),
                        a.push("</div>"),
                        a.join("")
                }
            },
            s = a.Class(o, t);
        s.defConfig = n,
            l[n.name] = new s
    } (phoenix, phoenix.Games.SSC.Danshi),
    function(a, t, e) {
        var n = {
                name: "renxuan.renxuansan.renxuansanzxfs",
                tips: "前三直选复式玩法提示",
                exampleTip: "前三直选复式范例",
                randomBetsNum: 500
            },
            r = a.Games.SSC.getInstance(),
            i = {
                init: function(a) {},
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                buildUI: function() {
                    var a = this;
                    a.container.html(u.join(""))
                },
                getLottery: function(a) {
                    for (var t, e = this,
                             n = e.getBallData(), r = 0, i = n.length, l = !0, o = 0, s = 0, u = [], h = 1, c = 0, p = 0; r < i; r++) {
                        for (t = n[r], s = t.length, l = !0, p = 0, o = 0; o < s; o++) t[o] > 0 && (!u[c] && (u[c] = []), l = !1, a || u[c].push(o), p++);
                        l ? e.isBallsComplete = !1 : c++,
                            h *= p
                    }
                    return e.isBallsComplete = c >= 3,
                        a ? h: e.isBallsComplete ? c > 3 ? new Array(e.gettotalnum(u, 3)) : e.combination(u) : []
                },
                gettotalnum: function(a, t) {
                    for (var e = this,
                             n = 0,
                             r = a.length,
                             i = e.getdata(t, r), l = 0; l < i.length; l++) {
                        for (var o = 1,
                                 s = i[l], u = 0; u < s.length; u++) {
                            var h = s[u],
                                c = a[h - 1],
                                p = c.length;
                            o *= p
                        }
                        n += o
                    }
                    return n
                },
                getdata: function(a, t) {
                    var e = this,
                        n = new Array;
                    first = !0,
                        position = a - 1,
                        l = new Array(a);
                    for (var r = 0,
                             i = 0; i < a; i++) l[i] = i + 1;
                    for (var n = new Array; e.hasNext(l, t);) {
                        for (var l = e.next(l, t), o = new Array, i = 0; i < l.length; i++) o.push(l[i]),
                            r++;
                        n.push(o)
                    }
                    return n
                },
                hasNext: function(a, t) {
                    return a[0] < t - a.length + 1
                },
                next: function(a, t) {
                    if (first) return first = !1,
                        a;
                    a[a.length - 1] == t ? position--:position = a.length - 1,
                        a[position]++;
                    for (var e = position + 1; e < a.length; e++) a[e] = a[e - 1] + 1;
                    return a
                },
                makePostParameter: function(a) {
                    for (var t = 0,
                             e = 5,
                             n = []; t < e; t++)"undefined" == typeof a[t] || 0 == a[t].length ? n.push("-") : n = n.concat(a[t].join("&"));
                    return n.join(",")
                },
                createRandomNum: function() {
                    for (var a = this,
                             t = [], e = 3, n = a.getBallData()[0].length, r = 0; r < e; r++) t[r] = [Math.floor(Math.random() * n)],
                        t[r].sort(function(a, t) {
                            return a > t ? 1 : -1
                        });
                    return t
                }
            },
            l = [];
        l.push('<div class="number-select-content">'),
            l.push('<ul class="ball-section">');
        var o = [];
        o.push("<li>"),
            o.push('<div class="ball-title">'),
            o.push("<strong><#=title#>" + translate.Pos + "</strong>"),
            o.push("</div>"),
            o.push('<ul class="ball-content">'),
            $.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                function(a) {
                    o.push('<li><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + "</a></li>")
                }),
            o.push("</ul>"),
            o.push('<div class="ball-control">'),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=all" href="javascript:void(0);">' + translate.Whole + "</a>"),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=big" href="javascript:void(0);">' + translate.Big + "</a>"),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=small" href="javascript:void(0);">' + translate.Small + "</a>"),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=odd" href="javascript:void(0);">' + translate.Odd + "</a>"),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=even" href="javascript:void(0);">' + translate.Even + "</a>"),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=none" href="javascript:void(0);">' + translate.Clear + "</a>"),
            o.push("</div>"),
            o.push("</li>");
        var s = [];
        s.push("</ul>"),
            s.push("</div>");
        var u = [],
            h = o.join("");
        u.push(l.join("")),
            $.each([translate.Million, translate.Thousand, translate.Hundred, translate.Ten, translate.Dollar],
                function(a) {
                    u.push(h.replace(/<#=title#>/g, this).replace(/<#=row#>/g, a))
                }),
            u.push(s.join(""));
        var c = a.Class(i, t);
        c.defConfig = n,
            r[n.name] = new c
    } (phoenix, phoenix.GameMethod),
    function(a, t, e) {
        var n = {
                name: "renxuan.renxuansi.renxuansids",
                tips: "四星直选单式玩法提示",
                exampleTip: "四星直选单式弹出层1111提示"
            },
            r = a.Games,
            l = r.SSC.getInstance(),
            o = {
                init: function(a) {
                    var t = this;
                    setTimeout(function() {
                            t.initFrame()
                        },
                        25),
                        t.digitstrType = "s_g_b_q_",
                        t.setCurrentDigitstr(t.digitstrType),
                        t.bindEventInstance()
                },
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                checkBallIsComplete: function(a) {
                    var t = this,
                        e = 0,
                        n = [];
                    if (t.isFirstAdd) for (t.aData = [], t.vData = [], t.sameData = [], t.errorData = [], t.tData = [], t.vDataBack = {},
                                               t.aDataBack = {},
                                               t.tDataBack = {},
                                               t.sameDataBack = {},
                                               t.errorDataBack = {},
                                               n = t.iterator(t.filterLotters(a)) || []; e < n.length; e++) {
                        var r = n[e].split(""),
                            i = n[e];
                        t.checkSingleNum(i) ? (t.vDataBack[i] ? t.sameData.push(r) : t.tData.push(r), t.vDataBack[i] = r, t.vData.push(r)) : (t.errorDataBack[i] ? t.sameData.push(r) : t.errorData.push(r), t.errorDataBack[i] = r),
                            t.aDataBack[i] ? "": t.aData.push(r),
                            t.aDataBack[i] = r
                    }
                    return t.vData.length > 0 ? (t.isBallsComplete = !0, t.isFirstAdd ? t.mathCorretBet(t.vData, t.checkPositionRules()) : t.tData.length > 0 ? t.mathCorretBet(t.tData, t.checkPositionRules()) : []) : (t.isBallsComplete = !1, [])
                },
                mathCorretBet: function(a, t) {
                    var e = this,
                        n = [].concat(a);
                    return 5 == t ? n = e.copySameArrappend(a, 5) : t <= 3 && (n = []),
                        n
                },
                getHTML: function() {
                    var a = [];
                    return a.push('<div class="balls-import clearfix">'),
                        a.push('<form id="form1" name="form1" enctype="multipart/form-data" method="post" action="' + r.getCurrentGame().getGameConfig().getInstance().getUploadPath() + '" target="check_file_frame" style="position:relative;padding-bottom:10px;">'),
                        /*a.push('<input name="file" type="file" id="file" size="40" hidefocus="true" value="' + translate.UploadFile + '" style="outline:none;-ms-filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=0);filter:alpha(opacity=0);opacity: 0;position:absolute;top:0px; left:0px; width:107px; height:30px;z-index:1;background:#000" />'),
                        a.push('<input type="button" class="balls-import-input" value="' + translate.UploadFile + '" onclick=document.getElementById("form1").file.click()><a class="balls-example-danshi-tip" href="#">查看标准格式样本</a>'),*/
                        a.push('<input type="reset" style="outline:none;-ms-filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=0);filter:alpha(opacity=0);opacity: 0;width:0px; height:0px;z-index:1;background:#000" />'),
                        a.push('<div id="J-postion-select" class="balls-import clearfix postion-select">'),
                        a.push('<label><input type="checkbox" class="wan" data-position="w_"> ' + translate.Million + "</label>"),
                        a.push('<label><input type="checkbox" checked="checked" class="qian" data-position="q_"> ' + translate.Thousand + "</label>"),
                        a.push('<label><input type="checkbox" checked="checked" class="bai" data-position="b_"> ' + translate.Hundred + "</label>"),
                        a.push('<label><input type="checkbox" checked="checked" class="shi" data-position="s_"> ' + translate.Ten + "</label>"),
                        a.push('<label><input type="checkbox" checked="checked" class="ge" data-position="g_"> ' + translate.Dollar + "</label>"),
                        a.push("</div>"),
                        a.push("</form>"),
                        a.push('<div class="panel-select" ><iframe style="width:100%;height:100%;border:0 none;background-color:#F9F9F9;" class="content-text-balls"></iframe></div>'),
                        a.push('<div class="panel-btn">'),
                        a.push('<a class="remove-error" id="" href="javascript:void(0);"><i></i>' + translate.DeleteError + "</a>"),
                        a.push('<a class="remove-same" id="" href="javascript:void(0);"><i></i>' + translate.RemoveDuplicate + "</a>"),
                        a.push('<a class="remove-all" id="" href="javascript:void(0);"><i></i>' + translate.ClearTextbox + "</a>"),
                        a.push("</div>"),
                        a.push("</div>"),
                        a.join("")
                },
                getOriginal: function() {
                    var a = this,
                        t = a.getBallData(),
                        e = t.length,
                        n = t[0].length;
                    for (i = 0, j = 0, row = [], tData = a.getTdata(), data = a.getHtml(), result = []; i < e; i++) {
                        for (row = [], j = 0; j < n; j++) t[i][j] > 0 && row.push(j);
                        result.push(row)
                    }
                    return tData.length > 0 && (result[0][0] = a.getTdata().join("&")),
                        result
                },
                makeSubmitParameter: function(a) {
                    var t = $.extend(!0, [], a);
                    return t.join("").replace(/,/g, "")
                },
                makePostParameter: function(a) {
                    for (var t = [], e = a.length, n = 0; n < e; n++) t = t.concat(a[n].join("").replace(/\&/g, " ").replace(/\,/g, ""));
                    return t.join(" ")
                },
                randomNum: function() {
                    var a = this,
                        t = [],
                        e = null,
                        n = ["q_b_s_g_", "w_q_b_s_", "w_q_b_g_", "w_b_s_g_", "w_q_s_g_"],
                        i = (a.getBallData(), a.defConfig.name, []),
                        l = [];
                    return a.addRanNumTag(),
                        t = a.checkRandomBets(),
                        l = [[t.join(",")], [], [], []],
                        i = a.combination(t),
                        e = {
                            type: r.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: l,
                            lotterys: i,
                            moneyUnit: r.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: r.getCurrentGameStatistics().getMultip(),
                            onePrice: r.getCurrentGameStatistics().getOnePrice(),
                            digitstr: n[Math.floor(Math.random() * n.length)],
                            num: i.length
                        },
                        e.amountText = r.getCurrentGameStatistics().formatMoney(e.num * e.moneyUnit * e.multiple * e.onePrice),
                        e
                }
            },
            s = a.Class(o, t);
        s.defConfig = n,
            l[n.name] = new s
    } (phoenix, phoenix.Games.SSC.Danshi),
    function(a, t, e) {
        var n = {
                name: "renxuan.renxuansi.renxuansifs",
                tips: "四星直选复式玩法提示",
                exampleTip: "四星直选复式范本",
                randomBetsNum: 1e3
            },
            r = a.Games.SSC.getInstance(),
            i = {
                init: function(a) {},
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                buildUI: function() {
                    var a = this;
                    a.container.html(u.join(""))
                },
                getLottery: function(a) {
                    for (var t, e = this,
                             n = e.getBallData(), r = 0, i = n.length, l = !0, o = 0, s = 0, u = [], h = 1, c = 0, p = 0; r < i; r++) {
                        for (t = n[r], s = t.length, l = !0, p = 0, o = 0; o < s; o++) t[o] > 0 && (!u[c] && (u[c] = []), l = !1, a || u[c].push(o), p++);
                        l ? e.isBallsComplete = !1 : c++,
                            h *= p
                    }
                    return e.isBallsComplete = c >= 4,
                        a ? h: e.isBallsComplete ? c > 4 ? new Array(e.gettotalnum(u, 4)) : e.combination(u) : []
                },
                gettotalnum: function(a, t) {
                    for (var e = this,
                             n = 0,
                             r = a.length,
                             i = e.getdata(t, r), l = 0; l < i.length; l++) {
                        for (var o = 1,
                                 s = i[l], u = 0; u < s.length; u++) {
                            var h = s[u],
                                c = a[h - 1],
                                p = c.length;
                            o *= p
                        }
                        n += o
                    }
                    return n
                },
                getdata: function(a, t) {
                    var e = this,
                        n = new Array;
                    first = !0,
                        position = a - 1,
                        l = new Array(a);
                    for (var r = 0,
                             i = 0; i < a; i++) l[i] = i + 1;
                    for (var n = new Array; e.hasNext(l, t);) {
                        for (var l = e.next(l, t), o = new Array, i = 0; i < l.length; i++) o.push(l[i]),
                            r++;
                        n.push(o)
                    }
                    return n
                },
                hasNext: function(a, t) {
                    return a[0] < t - a.length + 1
                },
                next: function(a, t) {
                    if (first) return first = !1,
                        a;
                    a[a.length - 1] == t ? position--:position = a.length - 1,
                        a[position]++;
                    for (var e = position + 1; e < a.length; e++) a[e] = a[e - 1] + 1;
                    return a
                },
                makePostParameter: function(a) {
                    for (var t = 0,
                             e = 5,
                             n = []; t < e; t++)"undefined" == typeof a[t] || 0 == a[t].length ? n.push("-") : n = n.concat(a[t].join("&"));
                    return n.join(",")
                },
                createRandomNum: function() {
                    for (var a = this,
                             t = [], e = 4, n = a.getBallData()[0].length, r = 0; r < e; r++) t[r] = [Math.floor(Math.random() * n)],
                        t[r].sort(function(a, t) {
                            return a > t ? 1 : -1
                        });
                    return t
                }
            },
            l = [];
        l.push('<div class="number-select-content">'),
            l.push('<ul class="ball-section">');
        var o = [];
        o.push("<li>"),
            o.push('<div class="ball-title">'),
            o.push("<strong><#=title#>" + translate.Pos + "</strong>"),
            o.push("</div>"),
            o.push('<ul class="ball-content">'),
            $.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                function(a) {
                    o.push('<li><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + "</a></li>")
                }),
            o.push("</ul>"),
            o.push('<div class="ball-control">'),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=all" href="javascript:void(0);">' + translate.Whole + "</a>"),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=big" href="javascript:void(0);">' + translate.Big + "</a>"),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=small" href="javascript:void(0);">' + translate.Small + "</a>"),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=odd" href="javascript:void(0);">' + translate.Odd + "</a>"),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=even" href="javascript:void(0);">' + translate.Even + "</a>"),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=none" href="javascript:void(0);">' + translate.Clear + "</a>"),
            o.push("</div>"),
            o.push("</li>");
        var s = [];
        s.push("</ul>"),
            s.push("</div>");
        var u = [],
            h = o.join("");
        u.push(l.join("")),
            $.each([translate.Million, translate.Thousand, translate.Hundred, translate.Ten, translate.Dollar],
                function(a) {
                    u.push(h.replace(/<#=title#>/g, this).replace(/<#=row#>/g, a))
                }),
            u.push(s.join(""));
        var c = a.Class(i, t);
        c.defConfig = n,
            r[n.name] = new c
    } (phoenix, phoenix.GameMethod),
    function(a, t, e) {
        var n = {
                name: "sixing.zhixuan.danshi",
                tips: "四星直选单式玩法提示",
                exampleTip: "四星直选单式弹出层1111提示"
            },
            r = a.Games,
            i = r.SSC.getInstance(),
            l = {
                init: function(a) {
                    var t = this;
                    setTimeout(function() {
                            t.initFrame()
                        },
                        25)
                },
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                randomNum: function() {
                    var a = this,
                        t = [],
                        e = null,
                        n = (a.getBallData(), a.defConfig.name, []),
                        i = [];
                    return a.addRanNumTag(),
                        t = a.checkRandomBets(),
                        i = [[t.join(",")], [], [], []],
                        n = a.combination(t),
                        e = {
                            type: r.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: i,
                            lotterys: n,
                            moneyUnit: r.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: r.getCurrentGameStatistics().getMultip(),
                            onePrice: r.getCurrentGameStatistics().getOnePrice(),
                            num: n.length
                        },
                        e.amountText = r.getCurrentGameStatistics().formatMoney(e.num * e.moneyUnit * e.multiple * e.onePrice),
                        e
                }
            },
            o = a.Class(l, t);
        o.defConfig = n,
            i[n.name] = new o
    } (phoenix, phoenix.Games.SSC.Danshi),
    function(a, t, e) {
        var n = {
                name: "sixing.zhixuan.fushi",
                tips: "四星直选复式玩法提示",
                exampleTip: "四星直选复式范本",
                randomBetsNum: 1e3
            },
            r = a.Games.SSC.getInstance(),
            i = {
                init: function(a) {
                    var t = this;
                    t.getHotCold(t.getGameMethodName(), "currentFre", "lost"),
                        t.initHotColdEvent()
                },
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                buildUI: function() {
                    var a = this;
                    a.container.html(u.join(""))
                },
                checkBallIsComplete: function() {
                    for (var a, t = this,
                             e = t.getBallData(), n = 0, r = e.length, i = !0, l = 0, o = 0; n < r; n++) {
                        for (a = e[n], o = a.length, i = !0, l = 0; l < o; l++) a[l] > 0 && (i = !1);
                        if (i) return t.isBallsComplete = !1,
                            !1
                    }
                    return t.isBallsComplete = !0
                },
                getLottery: function() {
                    var a, t = this,
                        e = t.getBallData(),
                        n = 0,
                        r = e.length,
                        i = 0,
                        l = 0,
                        o = [];
                    if (t.checkBallIsComplete()) {
                        for (; n < r; n++) for (o[n] = [], a = e[n], l = a.length, i = 0; i < l; i++) a[i] > 0 && o[n].push(i);
                        return t.combination(o)
                    }
                    return []
                },
                makePostParameter: function(a) {
                    for (var t = [], e = a.length, n = 0; n < e; n++) t = t.concat(a[n].join(""));
                    return t.join(",")
                }
            },
            l = [];
        l.push('<div class="number-select-title balls-type-title clearfix">'),
            l.push('<ul class="function-select-title game-frequency-type">'),
            l.push('<li class="lost" data-type="lost">遗漏</li>'),
            l.push('<li class="fre" data-type="fre">冷热</li>'),
            l.push("</ul>"),
            l.push('<ul class="function-select-content">'),
            l.push('<li class="game-frequency-lost-length"><a href="javascript:void(0);" data-type="currentFre" class="periodcurrentFre">当前遗漏</a><a data-type="maxFre" href="javascript:void(0);" class="periodmaxFre">最大遗漏</a></li>'),
            l.push('<li style="display:none" class="game-frequency-fre-length"><a href="javascript:void(0);" data-type="30" class="period30">30期</a><a href="javascript:void(0);" data-type="60" class="period60">60期</a><a href="javascript:void(0);" data-type="100" class="period100">100期</a></li>'),
            l.push("</ul>"),
            l.push("</div>"),
            l.push('<div class="number-select-content">'),
            l.push('<ul class="ball-section">');
        var o = [];
        o.push("<li>"),
            o.push('<div class="ball-title">'),
            o.push("<strong><#=title#>" + translate.Pos + "</strong>"),
            o.push("<span>当前遗漏</span>"),
            o.push("</div>"),
            o.push('<ul class="ball-content">'),
            $.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                function(a) {
                    o.push('<li><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + '</a><span class="ball-aid-hot">0</span></li>')
                }),
            o.push("</ul>"),
            o.push('<div class="ball-control">'),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=all" href="javascript:void(0);">' + translate.Whole + "</a>"),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=big" href="javascript:void(0);">' + translate.Big + "</a>"),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=small" href="javascript:void(0);">' + translate.Small + "</a>"),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=odd" href="javascript:void(0);">' + translate.Odd + "</a>"),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=even" href="javascript:void(0);">' + translate.Even + "</a>"),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=none" href="javascript:void(0);">' + translate.Clear + "</a>"),
            o.push("</div>"),
            o.push("</li>");
        var s = [];
        s.push("</ul>"),
            s.push("</div>");
        var u = [],
            h = o.join("");
        u.push(l.join("")),
            $.each([translate.Thousand, translate.Hundred, translate.Ten, translate.Dollar],
                function(a) {
                    u.push(h.replace(/<#=title#>/g, this).replace(/<#=row#>/g, a))
                }),
            u.push(s.join(""));
        var c = a.Class(i, t);
        c.defConfig = n,
            r[n.name] = new c
    } (phoenix, phoenix.GameMethod),
    function(a, t, e) {
        var n = {
                name: "sixing.zuxuan.zuxuan12"
            },
            r = a.Games,
            i = a.Games.SSC.getInstance(),
            l = {
                init: function(a) {},
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                buildUI: function() {
                    var a = this;
                    a.container.html(h.join(""))
                },
                checkBallIsComplete: function() {
                    for (var a = this,
                             t = a.getBallData(), e = 0, n = t[0].length, r = 0, i = 0; e < n; e++) t[0][e] > 0 && i++,
                    t[1][e] > 0 && r++;
                    return r >= 2 && i >= 1 ? a.isBallsComplete = !0 : a.isBallsComplete = !1
                },
                getLottery: function() {
                    var a = this,
                        t = a.getBallData(),
                        e = 0,
                        n = t[1].length,
                        r = [];
                    if (arr = [], nr = new Array, a.checkBallIsComplete()) {
                        for (; e < n; e++) t[1][e] > 0 && arr.push(e);
                        r = a.combine(arr, 2);
                        for (var e = 0; e < t[0].length; e++) if (1 == t[0][e]) for (var i = 0; i < r.length; i++) a.arrIndexOf(e, r[i]) == -1 && nr.push(r[i].concat([e, e]));
                        return nr
                    }
                    return []
                },
                makePostParameter: function(a) {
                    var t, e = [],
                        n = [],
                        r = [],
                        i = 0;
                    for (t = a[0].length; i < t; i++) n.push(a[0][i]);
                    for (i = 0, t = a[1].length; i < t; i++) r.push(a[1][i]);
                    return e = [n.join(""), r.join("")],
                        e.join(",")
                },
                checkRandomBets: function(a, t) {
                    for (var e = this,
                             n = "undefined" == typeof a,
                             a = a || {},
                             i = [], t = t || 0, l = "", o = [], s = [], u = (e.getBallData().length, e.getBallData()[0].length, r.getCurrentGameOrder().getTotal().orders), h = 0; h < 3; h++) h < 1 ? (l = e.removeSame(o), i = i.concat(l), o.push(l)) : (l = e.removeSame(o), s = s.concat(l), o.push(l));
                    if (s.sort(function(a, t) {
                            return a - t
                        }), i = [i, s], Number(t) > Number(e.getRandomBetsNum())) return i;
                    if (n) for (var c = 0; c < u.length; c++) if (u[c].type == e.defConfig.name) {
                        var p = u[c].original.join("");
                        a[p] = p
                    }
                    return a[i.join("")] ? (t++, arguments.callee.call(e, a, t)) : i
                },
                randomNum: function() {
                    for (var a, t = this,
                             e = 0,
                             n = [], i = [], l = [], o = (t.getBallData()[0].length, []); e < 3; e++) e < 1 ? (a = t.removeSame(o), n = n.concat(a), o.push(a)) : (a = t.removeSame(o), i = i.concat(a), o.push(a));
                    return n = t.checkRandomBets(),
                        l.push([n[0], n[0], [n[1][0]], [n[1][1]]]),
                        order = {
                            type: r.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: n,
                            lotterys: l,
                            moneyUnit: r.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: r.getCurrentGameStatistics().getMultip(),
                            onePrice: r.getCurrentGameStatistics().getOnePrice(),
                            num: l.length
                        },
                        order.amountText = r.getCurrentGameStatistics().formatMoney(order.num * order.moneyUnit * order.multiple * order.onePrice),
                        order
                }
            },
            o = [];
        o.push('<div class="number-select-content">'),
            o.push('<ul class="ball-section">');
        var s = [];
        s.push("<li>"),
            s.push('<div class="ball-title">'),
            s.push("<strong><#=title#>" + translate.Pos + "</strong>"),
            s.push("<span></span>"),
            s.push("</div>"),
            s.push('<ul class="ball-content">'),
            $.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                function(a) {
                    s.push('<li><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + "</a></li>")
                }),
            s.push("</ul>"),
            s.push('<div class="ball-control">'),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=all" href="javascript:void(0);">' + translate.Whole + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=big" href="javascript:void(0);">' + translate.Big + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=small" href="javascript:void(0);">' + translate.Small + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=odd" href="javascript:void(0);">' + translate.Odd + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=even" href="javascript:void(0);">' + translate.Even + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=none" href="javascript:void(0);">' + translate.Clear + "</a>"),
            s.push("</div>"),
            s.push("</li>");
        var u = [];
        u.push("</ul>"),
            u.push("</div>");
        var h = [],
            c = s.join("");
        h.push(o.join("")),
            $.each([translate.Double, translate.Single],
                function(a) {
                    h.push(c.replace(/<#=title#>/g, this).replace(/<#=row#>/g, a))
                }),
            h.push(u.join(""));
        var p = a.Class(l, t);
        p.defConfig = n,
            i[n.name] = new p
    } (phoenix, phoenix.GameMethod),
    function(a, t, e) {
        var n = {
                name: "sixing.zuxuan.zuxuan24"
            },
            r = a.Games,
            i = a.Games.SSC.getInstance(),
            l = {
                init: function(a) {},
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                buildUI: function() {
                    var a = this;
                    a.container.html(h.join(""))
                },
                checkBallIsComplete: function() {
                    for (var a = this,
                             t = a.getBallData()[0], e = 0, n = t.length, r = 0; e < n; e++) t[e] > 0 && r++;
                    return r >= 4 ? a.isBallsComplete = !0 : a.isBallsComplete = !1
                },
                getLottery: function() {
                    for (var a = this,
                             t = a.getBallData()[0], e = 0, n = t.length, r = []; e < n; e++) t[e] > 0 && r.push(e);
                    return a.checkBallIsComplete() ? a.combine(r, 4) : []
                },
                makePostParameter: function(a) {
                    for (var t = [], e = a.length, n = 0; n < e; n++) t = t.concat(a[n].join(""));
                    return t.join("")
                },
                checkRandomBets: function(a, t) {
                    for (var e = this,
                             n = "undefined" == typeof a,
                             a = a || {},
                             i = [], t = t || 0, l = "", o = [], s = (e.getBallData().length, e.getBallData()[0].length, r.getCurrentGameOrder().getTotal().orders), u = 0; u < 4; u++) l = e.removeSame(o),
                        i = i.concat(l),
                        o.push(l);
                    if (i.sort(function(a, t) {
                            return a - t
                        }), i = [i[0], i[1], i[2], i[3]], Number(t) > Number(e.getRandomBetsNum())) return i;
                    if (n) for (var h = 0; h < s.length; h++) if (s[h].type == e.defConfig.name) {
                        var c = s[h].original.join("");
                        a[c] = c
                    }
                    return a[i.join(",")] ? (t++, arguments.callee.call(e, a, t)) : i
                },
                randomNum: function() {
                    var a = this,
                        t = [],
                        e = [];
                    a.getBallData()[0].length;
                    return t = a.checkRandomBets(),
                        e.push([[t[0]], [t[1]], [t[2]], [t[3]]]),
                        order = {
                            type: r.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: [t],
                            lotterys: e,
                            moneyUnit: r.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: r.getCurrentGameStatistics().getMultip(),
                            onePrice: r.getCurrentGameStatistics().getOnePrice(),
                            num: e.length
                        },
                        order.amountText = r.getCurrentGameStatistics().formatMoney(order.num * order.moneyUnit * order.multiple * order.onePrice),
                        order
                }
            },
            o = [];
        o.push('<div class="number-select-content">'),
            o.push('<ul class="ball-section">');
        var s = [];
        s.push("<li>"),
            s.push('<ul class="ball-content">'),
            $.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                function(a) {
                    s.push('<li><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + "</a></li>")
                }),
            s.push("</ul>"),
            s.push('<div class="ball-control">'),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=all" href="javascript:void(0);">' + translate.Whole + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=big" href="javascript:void(0);">' + translate.Big + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=small" href="javascript:void(0);">' + translate.Small + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=odd" href="javascript:void(0);">' + translate.Odd + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=even" href="javascript:void(0);">' + translate.Even + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=none" href="javascript:void(0);">' + translate.Clear + "</a>"),
            s.push("</div>"),
            s.push("</li>");
        var u = [];
        u.push("</ul>"),
            u.push("</div>");
        var h = [],
            c = s.join("");
        h.push(o.join("")),
            $.each([""],
                function(a) {
                    h.push(c.replace(/<#=title#>/g, this).replace(/<#=row#>/g, a))
                }),
            h.push(u.join(""));
        var p = a.Class(l, t);
        p.defConfig = n,
            i[n.name] = new p
    } (phoenix, phoenix.GameMethod),
    function(a, t, e) {
        var n = {
                name: "sixing.zuxuan.zuxuan4"
            },
            r = a.Games,
            i = a.Games.SSC.getInstance(),
            l = {
                init: function(a) {},
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                buildUI: function() {
                    var a = this;
                    a.container.html(h.join(""))
                },
                checkBallIsComplete: function() {
                    for (var a = this,
                             t = a.getBallData(), e = 0, n = t[0].length, r = 0, i = 0; e < n; e++) t[0][e] > 0 && i++,
                    t[1][e] > 0 && r++;
                    return r >= 1 && i >= 1 ? a.isBallsComplete = !0 : a.isBallsComplete = !1
                },
                getLottery: function() {
                    var a = this,
                        t = a.getBallData(),
                        e = 0,
                        n = t[1].length,
                        r = [];
                    if (arr = [], nr = new Array, a.checkBallIsComplete()) {
                        for (; e < n; e++) t[1][e] > 0 && arr.push(e);
                        r = a.combine(arr, 1);
                        for (var e = 0; e < t[0].length; e++) if (1 == t[0][e]) for (var i = 0; i < r.length; i++) a.arrIndexOf(e, r[i]) == -1 && nr.push(r[i].concat([e, e, e]));
                        return nr
                    }
                    return []
                },
                makePostParameter: function(a) {
                    var t, e = [],
                        n = [],
                        r = [],
                        i = 0;
                    for (t = a[0].length; i < t; i++) n.push(a[0][i]);
                    for (i = 0, t = a[1].length; i < t; i++) r.push(a[1][i]);
                    return e = [n.join(""), r.join("")],
                        e.join(",")
                },
                randomNum: function() {
                    for (var a, t = this,
                             e = 0,
                             n = [], i = [], l = [], o = (t.getBallData()[0].length, []); e < 2; e++) e < 1 ? (a = t.removeSame(o), n = n.concat(a), o.push(a)) : (a = t.removeSame(o), i = i.concat(a), o.push(a));
                    return n.sort(function(a, t) {
                        return a - t
                    }),
                        l.push(n[0]),
                        l = [l.concat(i)],
                        original = [[l[0][0]], [l[0][1]]],
                        order = {
                            type: r.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: original,
                            lotterys: l,
                            moneyUnit: r.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: r.getCurrentGameStatistics().getMultip(),
                            onePrice: r.getCurrentGameStatistics().getOnePrice(),
                            num: l.length
                        },
                        order.amountText = r.getCurrentGameStatistics().formatMoney(order.num * order.moneyUnit * order.multiple * order.onePrice),
                        order
                }
            },
            o = [];
        o.push('<div class="number-select-content">'),
            o.push('<ul class="ball-section">');
        var s = [];
        s.push("<li>"),
            s.push('<div class="ball-title">'),
            s.push("<strong><#=title#>" + translate.Pos + "</strong>"),
            s.push("<span></span>"),
            s.push("</div>"),
            s.push('<ul class="ball-content">'),
            $.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                function(a) {
                    s.push('<li><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + "</a></li>")
                }),
            s.push("</ul>"),
            s.push('<div class="ball-control">'),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=all" href="javascript:void(0);">' + translate.Whole + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=big" href="javascript:void(0);">' + translate.Big + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=small" href="javascript:void(0);">' + translate.Small + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=odd" href="javascript:void(0);">' + translate.Odd + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=even" href="javascript:void(0);">' + translate.Even + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=none" href="javascript:void(0);">' + translate.Clear + "</a>"),
            s.push("</div>"),
            s.push("</li>");
        var u = [];
        u.push("</ul>"),
            u.push("</div>");
        var h = [],
            c = s.join("");
        h.push(o.join("")),
            $.each([translate.Triple, translate.Single],
                function(a) {
                    h.push(c.replace(/<#=title#>/g, this).replace(/<#=row#>/g, a))
                }),
            h.push(u.join(""));
        var p = a.Class(l, t);
        p.defConfig = n,
            i[n.name] = new p
    } (phoenix, phoenix.GameMethod),
    function(a, t, e) {
        var n = {
                name: "sixing.zuxuan.zuxuan6"
            },
            r = a.Games,
            i = a.Games.SSC.getInstance(),
            l = {
                init: function(a) {},
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                buildUI: function() {
                    var a = this;
                    a.container.html(h.join(""))
                },
                checkBallIsComplete: function() {
                    for (var a = this,
                             t = a.getBallData()[0], e = 0, n = t.length, r = 0; e < n; e++) t[e] > 0 && r++;
                    return r >= 2 ? a.isBallsComplete = !0 : a.isBallsComplete = !1
                },
                getLottery: function() {
                    for (var a = this,
                             t = a.getBallData()[0], e = 0, n = t.length, r = []; e < n; e++) t[e] > 0 && r.push(e);
                    for (var i = 0; i < r.length; i++) r[i] = [r[i], r[i]];
                    return a.checkBallIsComplete() ? a.combine(r, 2) : []
                },
                makePostParameter: function(a) {
                    for (var t = [], e = a.length, n = 0; n < e; n++) t = t.concat(a[n].join(""));
                    return t.join("")
                },
                randomNum: function() {
                    for (var a, t = this,
                             e = 0,
                             n = [], i = [], l = (t.getBallData()[0].length, []); e < 2; e++) a = t.removeSame(l),
                        n = n.concat(a),
                        l.push(a);
                    return n.sort(function(a, t) {
                        return a - t
                    }),
                        i.push([n[0], n[1]]),
                        original = [[i[0][0], i[0][1]]],
                        order = {
                            type: r.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: original,
                            lotterys: i,
                            moneyUnit: r.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: r.getCurrentGameStatistics().getMultip(),
                            onePrice: r.getCurrentGameStatistics().getOnePrice(),
                            num: i.length
                        },
                        order.amountText = r.getCurrentGameStatistics().formatMoney(order.num * order.moneyUnit * order.multiple * order.onePrice),
                        order
                }
            },
            o = [];
        o.push('<div class="number-select-content">'),
            o.push('<ul class="ball-section">');
        var s = [];
        s.push("<li>"),
            s.push('<div class="ball-title">'),
            s.push("<strong><#=title#>" + translate.Pos + "</strong>"),
            s.push("<span></span>"),
            s.push("</div>"),
            s.push('<ul class="ball-content">'),
            $.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                function(a) {
                    s.push('<li><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + "</a></li>")
                }),
            s.push("</ul>"),
            s.push('<div class="ball-control">'),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=all" href="javascript:void(0);">' + translate.Whole + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=big" href="javascript:void(0);">' + translate.Big + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=small" href="javascript:void(0);">' + translate.Small + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=odd" href="javascript:void(0);">' + translate.Odd + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=even" href="javascript:void(0);">' + translate.Even + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=none" href="javascript:void(0);">' + translate.Clear + "</a>"),
            s.push("</div>"),
            s.push("</li>");
        var u = [];
        u.push("</ul>"),
            u.push("</div>");
        var h = [],
            c = s.join("");
        h.push(o.join("")),
            $.each([translate.Double],
                function(a) {
                    h.push(c.replace(/<#=title#>/g, this).replace(/<#=row#>/g, a))
                }),
            h.push(u.join(""));
        var p = a.Class(l, t);
        p.defConfig = n,
            i[n.name] = new p
    } (phoenix, phoenix.GameMethod),
    function(a, t, e) {
        var n = {
                name: "wuxing.zhixuan.danshi",
                tips: "五星直选单式玩法提示",
                exampleTip: "这是单式弹出层提示"
            },
            r = a.Games,
            i = r.SSC.getInstance(),
            l = {
                init: function(a) {
                    var t = this;
                    setTimeout(function() {
                            t.initFrame()
                        },
                        25)
                },
                randomNum: function() {
                    var a = this,
                        t = [],
                        e = null,
                        n = (a.getBallData(), a.defConfig.name, []),
                        i = [];
                    return a.addRanNumTag(),
                        t = a.checkRandomBets(),
                        i = [[t.join(",")], [], [], [], []],
                        n = a.combination(t),
                        e = {
                            type: r.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: i,
                            lotterys: n,
                            moneyUnit: r.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: r.getCurrentGameStatistics().getMultip(),
                            onePrice: r.getCurrentGameStatistics().getOnePrice(),
                            num: n.length
                        },
                        e.amountText = r.getCurrentGameStatistics().formatMoney(e.num * e.moneyUnit * e.multiple * e.onePrice),
                        e
                }
            },
            o = a.Class(l, t);
        o.defConfig = n,
            i[n.name] = new o
    } (phoenix, phoenix.Games.SSC.Danshi),
    function(a, t, e) {
        var n = {
                name: "wuxing.zhixuan.fushi",
                tips: "五星直选复式玩法提示",
                exampleTip: "五星直选复式范例"
            },
            r = a.Games.SSC.getInstance(),
            i = {
                init: function(a) {
                    var t = this;
                    t.initHotColdEvent()
                },
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                buildUI: function() {
                    var a = this;
                    a.container.html(u.join(""))
                }
            },
            l = [];
        l.push('<div class="number-select-title balls-type-title clearfix">'),
            l.push('<ul class="function-select-title game-frequency-type">'),
            l.push('<li class="lost" data-type="lost">遗漏</li>'),
            l.push('<li class="fre" data-type="fre">冷热</li>'),
            l.push("</ul>"),
            l.push('<ul class="function-select-content">'),
            l.push('<li class="game-frequency-lost-length"><a href="javascript:void(0);" data-type="currentFre" class="periodcurrentFre">当前遗漏</a><a data-type="maxFre" href="javascript:void(0);" class="periodmaxFre">最大遗漏</a></li>'),
            l.push('<li style="display:none" class="game-frequency-fre-length"><a href="javascript:void(0);" data-type="30" class="period30">30期</a><a href="javascript:void(0);" data-type="60" class="period60">60期</a><a href="javascript:void(0);" data-type="100" class="period100">100期</a></li>'),
            l.push("</ul>"),
            l.push("</div>"),
            l.push('<div class="number-select-content">'),
            l.push('<ul class="ball-section">');
        var o = [];
        o.push("<li>"),
            o.push('<div class="ball-title">'),
            o.push("<strong><#=title#>" + translate.Pos + "</strong>"),
            o.push("<span>当前遗漏</span>"),
            o.push("</div>"),
            o.push('<ul class="ball-content">'),
            $.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                function(a) {
                    o.push('<li><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + '</a><span class="ball-aid-hot">0</span></li>')
                }),
            o.push("</ul>"),
            o.push('<div class="ball-control">'),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=all" href="javascript:void(0);">' + translate.Whole + "</a>"),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=big" href="javascript:void(0);">' + translate.Big + "</a>"),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=small" href="javascript:void(0);">' + translate.Small + "</a>"),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=odd" href="javascript:void(0);">' + translate.Odd + "</a>"),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=even" href="javascript:void(0);">' + translate.Even + "</a>"),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=none" href="javascript:void(0);">' + translate.Clear + "</a>"),
            o.push("</div>"),
            o.push("</li>");
        var s = [];
        s.push("</ul>"),
            s.push("</div>");
        var u = [],
            h = o.join("");
        u.push(l.join("")),
            $.each([translate.Million, translate.Thousand, translate.Hundred, translate.Ten, translate.Dollar],
                function(a) {
                    u.push(h.replace(/<#=title#>/g, this).replace(/<#=row#>/g, a))
                }),
            u.push(s.join(""));
        var c = a.Class(i, t);
        c.defConfig = n,
            r[n.name] = new c
    } (phoenix, phoenix.GameMethod),
    function(a, t, e) {
        var n = {
                name: "wuxing.zuxuan.zuxuan10"
            },
            r = a.Games,
            i = a.Games.SSC.getInstance(),
            l = {
                init: function(a) {},
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                buildUI: function() {
                    var a = this;
                    a.container.html(h.join(""))
                },
                checkBallIsComplete: function() {
                    for (var a = this,
                             t = a.getBallData(), e = 0, n = t[0].length, r = 0, i = 0; e < n; e++) t[0][e] > 0 && i++,
                    t[1][e] > 0 && r++;
                    return r >= 1 && i >= 1 ? a.isBallsComplete = !0 : a.isBallsComplete = !1
                },
                getLottery: function() {
                    var a = this,
                        t = a.getBallData(),
                        e = 0,
                        n = t[1].length,
                        r = [];
                    if (arr = [], nr = new Array, a.checkBallIsComplete()) {
                        for (; e < n; e++) t[1][e] > 0 && arr.push(e);
                        r = a.combine(arr, 1);
                        for (var i = 0; i < r.length; i++) r[i] = [r[i][0], r[i][0]];
                        for (var e = 0; e < t[0].length; e++) if (1 == t[0][e]) for (var l = 0; l < r.length; l++) a.arrIndexOf(e, r[l]) == -1 && nr.push(r[l].concat([e, e, e]));
                        return nr
                    }
                    return []
                },
                removeSame: function(a) {
                    var t, e = 0,
                        n = this,
                        r = this.getBallData()[0].length;
                    for (len = a.length, t = Math.floor(Math.random() * r); e < a.length; e++) if (t == a[e]) return arguments.callee.call(n, a);
                    return t
                },
                makePostParameter: function(a) {
                    var t, e = [],
                        n = [],
                        r = [],
                        i = 0;
                    for (t = a[0].length; i < t; i++) n.push(a[0][i]);
                    for (i = 0, t = a[1].length; i < t; i++) r.push(a[1][i]);
                    return e = [n.join(""), r.join("")],
                        e.join(",")
                },
                randomNum: function() {
                    for (var a, t = this,
                             e = 0,
                             n = [], i = [], l = [], o = (t.getBallData()[0].length, []); e < 3; e++) e < 1 ? (a = t.removeSame(o), n = n.concat(a), o.push(a)) : (a = t.removeSame(o), i = i.concat(a), o.push(a));
                    return n.sort(function(a, t) {
                        return a - t
                    }),
                        l.push(n[0]),
                        l.push(n[0]),
                        l.push(n[0]),
                        l = [l.concat(i)],
                        original = [[l[0][0]], [l[0][4]]],
                        order = {
                            type: r.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: original,
                            lotterys: l,
                            moneyUnit: r.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: r.getCurrentGameStatistics().getMultip(),
                            onePrice: r.getCurrentGameStatistics().getOnePrice(),
                            num: l.length
                        },
                        order.amountText = r.getCurrentGameStatistics().formatMoney(order.num * order.moneyUnit * order.multiple * order.onePrice),
                        order
                }
            },
            o = [];
        o.push('<div class="number-select-content">'),
            o.push('<ul class="ball-section">');
        var s = [];
        s.push("<li>"),
            s.push('<div class="ball-title">'),
            s.push("<strong><#=title#>" + translate.Pos + "</strong>"),
            s.push("<span></span>"),
            s.push("</div>"),
            s.push('<ul class="ball-content">'),
            $.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                function(a) {
                    s.push('<li><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + "</a></li>")
                }),
            s.push("</ul>"),
            s.push('<div class="ball-control">'),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=all" href="javascript:void(0);">' + translate.Whole + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=big" href="javascript:void(0);">' + translate.Big + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=small" href="javascript:void(0);">' + translate.Small + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=odd" href="javascript:void(0);">' + translate.Odd + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=even" href="javascript:void(0);">' + translate.Even + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=none" href="javascript:void(0);">' + translate.Clear + "</a>"),
            s.push("</div>"),
            s.push("</li>");
        var u = [];
        u.push("</ul>"),
            u.push("</div>");
        var h = [],
            c = s.join("");
        h.push(o.join("")),
            $.each([translate.Triple, translate.Double],
                function(a) {
                    h.push(c.replace(/<#=title#>/g, this).replace(/<#=row#>/g, a))
                }),
            h.push(u.join(""));
        var p = a.Class(l, t);
        p.defConfig = n,
            i[n.name] = new p
    } (phoenix, phoenix.GameMethod),
    function(a, t, e) {
        var n = {
                name: "wuxing.zuxuan.zuxuan120"
            },
            r = a.Games,
            i = a.Games.SSC.getInstance(),
            l = {
                init: function(a) {},
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                buildUI: function() {
                    var a = this;
                    a.container.html(h.join(""))
                },
                checkBallIsComplete: function() {
                    for (var a = this,
                             t = a.getBallData()[0], e = 0, n = t.length, r = 0; e < n; e++) t[e] > 0 && r++;
                    return r >= 5 ? a.isBallsComplete = !0 : a.isBallsComplete = !1
                },
                getLottery: function() {
                    for (var a = this,
                             t = a.getBallData()[0], e = 0, n = t.length, r = []; e < n; e++) t[e] > 0 && r.push(e);
                    return a.checkBallIsComplete() ? a.combine(r, 5) : []
                },
                removeSame: function(a) {
                    var t, e = 0,
                        n = this,
                        r = this.getBallData()[0].length;
                    for (len = a.length, t = Math.floor(Math.random() * r); e < a.length; e++) if (t == a[e]) return arguments.callee.call(n, a);
                    return t
                },
                makePostParameter: function(a) {
                    for (var t = [], e = a.length, n = 0; n < e; n++) t = t.concat(a[n].join(""));
                    return t.join(",")
                },
                checkRandomBets: function(a, t) {
                    for (var e = this,
                             n = "undefined" == typeof a,
                             a = a || {},
                             i = [], t = t || 0, l = (e.getBallData().length, e.getBallData()[0].length, r.getCurrentGameOrder().getTotal().orders), o = 0; o < 5; o++) {
                        var s = e.removeSame(i);
                        i.push(s)
                    }
                    if (i.sort(function(a, t) {
                            return a - t
                        }), Number(t) > Number(e.getRandomBetsNum())) return i;
                    if (n) for (var u = 0; u < l.length; u++) if (l[u].type == e.defConfig.name) {
                        var h = l[u].original.join("");
                        a[h] = h
                    }
                    return a[i.join(",")] ? (t++, arguments.callee.call(e, a, t)) : i
                },
                randomNum: function() {
                    var a = this,
                        t = [],
                        e = [],
                        n = null;
                    a.getBallData(),
                        a.defConfig.name;
                    return t = a.checkRandomBets(),
                        e = [t],
                        n = {
                            type: r.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: [t],
                            lotterys: e,
                            moneyUnit: r.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: r.getCurrentGameStatistics().getMultip(),
                            onePrice: r.getCurrentGameStatistics().getOnePrice(),
                            num: e.length
                        },
                        n.amountText = r.getCurrentGameStatistics().formatMoney(n.num * n.moneyUnit * n.multiple * n.onePrice),
                        n
                }
            },
            o = [];
        o.push('<div class="number-select-content">'),
            o.push('<ul class="ball-section">');
        var s = [];
        s.push("<li>"),
            s.push('<ul class="ball-content">'),
            $.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                function(a) {
                    s.push('<li><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + "</a></li>")
                }),
            s.push("</ul>"),
            s.push('<div class="ball-control">'),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=all" href="javascript:void(0);">' + translate.Whole + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=big" href="javascript:void(0);">' + translate.Big + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=small" href="javascript:void(0);">' + translate.Small + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=odd" href="javascript:void(0);">' + translate.Odd + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=even" href="javascript:void(0);">' + translate.Even + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=none" href="javascript:void(0);">' + translate.Clear + "</a>"),
            s.push("</div>"),
            s.push("</li>");
        var u = [];
        u.push("</ul>"),
            u.push("</div>");
        var h = [],
            c = s.join("");
        h.push(o.join("")),
            $.each([""],
                function(a) {
                    h.push(c.replace(/<#=title#>/g, this).replace(/<#=row#>/g, a))
                }),
            h.push(u.join(""));
        var p = a.Class(l, t);
        p.defConfig = n,
            i[n.name] = new p
    } (phoenix, phoenix.GameMethod),
    function(a, t, e) {
        var n = {
                name: "wuxing.zuxuan.zuxuan20"
            },
            r = a.Games,
            i = a.Games.SSC.getInstance(),
            l = {
                init: function(a) {},
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                buildUI: function() {
                    var a = this;
                    a.container.html(h.join(""))
                },
                checkBallIsComplete: function() {
                    for (var a = this,
                             t = a.getBallData(), e = 0, n = t[0].length, r = 0, i = 0; e < n; e++) t[0][e] > 0 && i++,
                    t[1][e] > 0 && r++;
                    return r >= 2 && i >= 1 ? a.isBallsComplete = !0 : a.isBallsComplete = !1
                },
                getLottery: function() {
                    var a = this,
                        t = a.getBallData(),
                        e = 0,
                        n = t[1].length,
                        r = [];
                    if (arr = [], nr = new Array, a.checkBallIsComplete()) {
                        for (; e < n; e++) t[1][e] > 0 && arr.push(e);
                        r = a.combine(arr, 2);
                        for (var e = 0; e < t[0].length; e++) if (1 == t[0][e]) for (var i = 0; i < r.length; i++) a.arrIndexOf(e, r[i]) == -1 && nr.push(r[i].concat([e, e, e]));
                        return nr
                    }
                    return []
                },
                removeSame: function(a) {
                    var t, e = 0,
                        n = this,
                        r = this.getBallData()[0].length;
                    for (len = a.length, t = Math.floor(Math.random() * r); e < a.length; e++) if (t == a[e]) return arguments.callee.call(n, a);
                    return t
                },
                makePostParameter: function(a) {
                    var t, e = [],
                        n = [],
                        r = [],
                        i = 0;
                    for (t = a[0].length; i < t; i++) n.push(a[0][i]);
                    for (i = 0, t = a[1].length; i < t; i++) r.push(a[1][i]);
                    return e = [n.join(""), r.join("")],
                        e.join(",")
                },
                checkRandomBets: function(a, t) {
                    for (var e = this,
                             n = "undefined" == typeof a,
                             a = a || {},
                             i = [], t = t || 0, l = "", o = [], s = [], u = (e.getBallData().length, e.getBallData()[0].length, r.getCurrentGameOrder().getTotal().orders), h = 0; h < 3; h++) h < 1 ? (l = e.removeSame(o), i = i.concat(l), o.push(l)) : (l = e.removeSame(o), s = s.concat(l), o.push(l));
                    if (s.sort(function(a, t) {
                            return a - t
                        }), i = [i, s], Number(t) > Number(e.getRandomBetsNum())) return i;
                    if (n) for (var c = 0; c < u.length; c++) if (u[c].type == e.defConfig.name) {
                        var p = u[c].original.join("");
                        a[p] = p
                    }
                    return a[i.join("")] ? (t++, arguments.callee.call(e, a, t)) : i
                },
                randomNum: function() {
                    var a = this,
                        t = [],
                        e = [];
                    a.getBallData()[0].length;
                    return t = a.checkRandomBets(),
                        e = [[t[0], t[0], t[0], [t[1][0]], [t[1][1]]]],
                        order = {
                            type: r.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: t,
                            lotterys: e,
                            moneyUnit: r.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: r.getCurrentGameStatistics().getMultip(),
                            onePrice: r.getCurrentGameStatistics().getOnePrice(),
                            num: e.length
                        },
                        order.amountText = r.getCurrentGameStatistics().formatMoney(order.num * order.moneyUnit * order.multiple * order.onePrice),
                        order
                }
            },
            o = [];
        o.push('<div class="number-select-content">'),
            o.push('<ul class="ball-section">');
        var s = [];
        s.push("<li>"),
            s.push('<div class="ball-title">'),
            s.push("<strong><#=title#>" + translate.Pos + "</strong>"),
            s.push("<span></span>"),
            s.push("</div>"),
            s.push('<ul class="ball-content">'),
            $.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                function(a) {
                    s.push('<li><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + "</a></li>")
                }),
            s.push("</ul>"),
            s.push('<div class="ball-control">'),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=all" href="javascript:void(0);">' + translate.Whole + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=big" href="javascript:void(0);">' + translate.Big + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=small" href="javascript:void(0);">' + translate.Small + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=odd" href="javascript:void(0);">' + translate.Odd + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=even" href="javascript:void(0);">' + translate.Even + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=none" href="javascript:void(0);">' + translate.Clear + "</a>"),
            s.push("</div>"),
            s.push("</li>");
        var u = [];
        u.push("</ul>"),
            u.push("</div>");
        var h = [],
            c = s.join("");
        h.push(o.join("")),
            $.each([translate.Triple, translate.Single],
                function(a) {
                    h.push(c.replace(/<#=title#>/g, this).replace(/<#=row#>/g, a))
                }),
            h.push(u.join(""));
        var p = a.Class(l, t);
        p.defConfig = n,
            i[n.name] = new p
    } (phoenix, phoenix.GameMethod),
    function(a, t, e) {
        var n = {
                name: "wuxing.zuxuan.zuxuan30"
            },
            r = a.Games,
            i = a.Games.SSC.getInstance(),
            l = {
                init: function(a) {},
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                buildUI: function() {
                    var a = this;
                    a.container.html(h.join(""))
                },
                checkBallIsComplete: function() {
                    for (var a = this,
                             t = a.getBallData(), e = 0, n = t[0].length, r = 0, i = 0; e < n; e++) t[0][e] > 0 && i++,
                    t[1][e] > 0 && r++;
                    return r >= 1 && i >= 2 ? a.isBallsComplete = !0 : a.isBallsComplete = !1
                },
                getLottery: function() {
                    var a = this,
                        t = a.getBallData(),
                        e = 0,
                        n = t[1].length,
                        r = [];
                    if (arr = [], nr = new Array, a.checkBallIsComplete()) {
                        for (; e < n; e++) t[0][e] > 0 && arr.push(e);
                        for (var i = 0; i < arr.length; i++) arr[i] = [arr[i], arr[i]];
                        r = a.combine(arr, 2);
                        for (var e = 0; e < t[1].length; e++) if (1 == t[1][e]) for (var l = 0; l < r.length; l++) a.arrIndexOf(e, r[l]) == -1 && nr.push(r[l].concat([e]));
                        return nr
                    }
                    return []
                },
                removeSame: function(a) {
                    var t, e = 0,
                        n = this,
                        r = this.getBallData()[0].length;
                    for (len = a.length, t = Math.floor(Math.random() * r); e < a.length; e++) if (t == a[e]) return arguments.callee.call(n, a);
                    return t
                },
                checkRandomBets: function(a, t) {
                    for (var e = this,
                             n = "undefined" == typeof a,
                             a = a || {},
                             i = [], t = t || 0, l = "", o = [], s = [], u = (e.getBallData().length, e.getBallData()[0].length, r.getCurrentGameOrder().getTotal().orders), h = 0; h < 3; h++) h < 2 ? (l = e.removeSame(o), i = i.concat(l), o.push(l)) : (l = e.removeSame(o), s = s.concat(l), o.push(l));
                    if (i.sort(function(a, t) {
                            return a - t
                        }), i = [i, s], Number(t) > Number(e.getRandomBetsNum())) return i;
                    if (n) for (var c = 0; c < u.length; c++) if (u[c].type == e.defConfig.name) {
                        var p = u[c].original.join("");
                        a[p] = p
                    }
                    return a[i.join("")] ? (t++, arguments.callee.call(e, a, t)) : i
                },
                randomNum: function() {
                    var a = this,
                        t = [],
                        e = [];
                    a.getBallData()[0].length;
                    return t = a.checkRandomBets(),
                        e = [[t[0][0], t[0][0], t[0][1], t[0][1], t[1][0]]],
                        order = {
                            type: r.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: t,
                            lotterys: e,
                            moneyUnit: r.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: r.getCurrentGameStatistics().getMultip(),
                            onePrice: r.getCurrentGameStatistics().getOnePrice(),
                            num: e.length
                        },
                        order.amountText = r.getCurrentGameStatistics().formatMoney(order.num * order.moneyUnit * order.multiple * order.onePrice),
                        order
                }
            },
            o = [];
        o.push('<div class="number-select-content">'),
            o.push('<ul class="ball-section">');
        var s = [];
        s.push("<li>"),
            s.push('<div class="ball-title">'),
            s.push("<strong><#=title#>" + translate.Pos + "</strong>"),
            s.push("<span></span>"),
            s.push("</div>"),
            s.push('<ul class="ball-content">'),
            $.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                function(a) {
                    s.push('<li><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + "</a></li>")
                }),
            s.push("</ul>"),
            s.push('<div class="ball-control">'),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=all" href="javascript:void(0);">' + translate.Whole + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=big" href="javascript:void(0);">' + translate.Big + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=small" href="javascript:void(0);">' + translate.Small + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=odd" href="javascript:void(0);">' + translate.Odd + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=even" href="javascript:void(0);">' + translate.Even + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=none" href="javascript:void(0);">' + translate.Clear + "</a>"),
            s.push("</div>"),
            s.push("</li>");
        var u = [];
        u.push("</ul>"),
            u.push("</div>");
        var h = [],
            c = s.join("");
        h.push(o.join("")),
            $.each([translate.Double, translate.Single],
                function(a) {
                    h.push(c.replace(/<#=title#>/g, this).replace(/<#=row#>/g, a))
                }),
            h.push(u.join(""));
        var p = a.Class(l, t);
        p.defConfig = n,
            i[n.name] = new p
    } (phoenix, phoenix.GameMethod),
    function(a, t, e) {
        var n = {
                name: "wuxing.zuxuan.zuxuan5"
            },
            r = a.Games,
            i = a.Games.SSC.getInstance(),
            l = {
                init: function(a) {},
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                buildUI: function() {
                    var a = this;
                    a.container.html(h.join(""))
                },
                checkBallIsComplete: function() {
                    for (var a = this,
                             t = a.getBallData(), e = 0, n = t[0].length, r = 0, i = 0; e < n; e++) t[0][e] > 0 && i++,
                    t[1][e] > 0 && r++;
                    return r >= 1 && i >= 1 ? a.isBallsComplete = !0 : a.isBallsComplete = !1
                },
                makePostParameter: function(a) {
                    for (var t = this,
                             e = [], n = [], a = a.lotterys, r = 0; r < a.length; r++) for (var i = 0; i < a[r].length; i++) 4 == t.arrIndexOf(a[r][i], a[r]) ? t.arrIndexOf(a[r][i], n) == -1 && n.push(a[r][i]) : t.arrIndexOf(a[r][i], e) == -1 && e.push(a[r][i]);
                    return n.join("") + "," + e.join("")
                },
                getLottery: function() {
                    var a = this,
                        t = a.getBallData(),
                        e = 0,
                        n = t[1].length,
                        r = [];
                    if (arr = [], nr = new Array, a.checkBallIsComplete()) {
                        for (; e < n; e++) t[1][e] > 0 && arr.push(e);
                        r = a.combine(arr, 1);
                        for (var e = 0; e < t[0].length; e++) if (1 == t[0][e]) for (var i = 0; i < r.length; i++) a.arrIndexOf(e, r[i]) == -1 && nr.push(r[i].concat([e, e, e, e]));
                        return nr
                    }
                    return []
                },
                removeSame: function(a) {
                    var t, e = 0,
                        n = this,
                        r = this.getBallData()[0].length;
                    for (len = a.length, t = Math.floor(Math.random() * r); e < a.length; e++) if (t == a[e]) return arguments.callee.call(n, a);
                    return t
                },
                makePostParameter: function(a) {
                    var t, e = [],
                        n = [],
                        r = [],
                        i = 0;
                    for (t = a[0].length; i < t; i++) n.push(a[0][i]);
                    for (i = 0, t = a[1].length; i < t; i++) r.push(a[1][i]);
                    return e = [n.join(""), r.join("")],
                        e.join(",")
                },
                randomNum: function() {
                    for (var a, t = this,
                             e = 0,
                             n = [], i = [], l = [], o = (t.getBallData()[0].length, []); e < 2; e++) e < 1 ? (a = t.removeSame(o), n = n.concat(a), o.push(a)) : (a = t.removeSame(o), i = i.concat(a), o.push(a));
                    return n.sort(function(a, t) {
                        return a - t
                    }),
                        l.push(n[0]),
                        l.push(n[0]),
                        l.push(n[0]),
                        l.push(n[0]),
                        l = [l.concat(i)],
                        original = [[l[0][0]], [l[0][4]]],
                        order = {
                            type: r.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: original,
                            lotterys: l,
                            moneyUnit: r.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: r.getCurrentGameStatistics().getMultip(),
                            onePrice: r.getCurrentGameStatistics().getOnePrice(),
                            num: l.length
                        },
                        order.amountText = r.getCurrentGameStatistics().formatMoney(order.num * order.moneyUnit * order.multiple * order.onePrice),
                        order
                }
            },
            o = [];
        o.push('<div class="number-select-content">'),
            o.push('<ul class="ball-section">');
        var s = [];
        s.push("<li>"),
            s.push('<div class="ball-title">'),
            s.push("<strong><#=title#>" + translate.Pos + "</strong>"),
            s.push("<span></span>"),
            s.push("</div>"),
            s.push('<ul class="ball-content">'),
            $.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                function(a) {
                    s.push('<li><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + "</a></li>")
                }),
            s.push("</ul>"),
            s.push('<div class="ball-control">'),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=all" href="javascript:void(0);">' + translate.Whole + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=big" href="javascript:void(0);">' + translate.Big + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=small" href="javascript:void(0);">' + translate.Small + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=odd" href="javascript:void(0);">' + translate.Odd + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=even" href="javascript:void(0);">' + translate.Even + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=none" href="javascript:void(0);">' + translate.Clear + "</a>"),
            s.push("</div>"),
            s.push("</li>");
        var u = [];
        u.push("</ul>"),
            u.push("</div>");
        var h = [],
            c = s.join("");
        h.push(o.join("")),
            $.each([translate.Four, translate.Single],
                function(a) {
                    h.push(c.replace(/<#=title#>/g, this).replace(/<#=row#>/g, a))
                }),
            h.push(u.join(""));
        var p = a.Class(l, t);
        p.defConfig = n,
            i[n.name] = new p
    } (phoenix, phoenix.GameMethod),
    function(a, t, e) {
        var n = {
                name: "wuxing.zuxuan.zuxuan60"
            },
            r = a.Games,
            i = a.Games.SSC.getInstance(),
            l = {
                init: function(a) {},
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                buildUI: function() {
                    var a = this;
                    a.container.html(h.join(""))
                },
                checkBallIsComplete: function() {
                    for (var a = this,
                             t = a.getBallData(), e = 0, n = t[0].length, r = 0, i = 0; e < n; e++) t[0][e] > 0 && i++,
                    t[1][e] > 0 && r++;
                    return r >= 3 && i >= 1 ? a.isBallsComplete = !0 : a.isBallsComplete = !1
                },
                getLottery: function() {
                    var a = this,
                        t = a.getBallData(),
                        e = 0,
                        n = t[1].length,
                        r = [];
                    if (arr = [], nr = new Array, a.checkBallIsComplete()) {
                        for (; e < n; e++) t[1][e] > 0 && arr.push(e);
                        r = a.combine(arr, 3);
                        for (var e = 0; e < t[0].length; e++) if (1 == t[0][e]) for (var i = 0; i < r.length; i++) a.arrIndexOf(e, r[i]) == -1 && nr.push(r[i].concat([e, e]));
                        return nr
                    }
                    return []
                },
                removeSame: function(a) {
                    var t, e = 0,
                        n = this,
                        r = this.getBallData()[0].length;
                    for (len = a.length, t = Math.floor(Math.random() * r); e < a.length; e++) if (t == a[e]) return arguments.callee.call(n, a);
                    return t
                },
                makePostParameter: function(a) {
                    var t, e = [],
                        n = [],
                        r = [],
                        i = 0;
                    for (t = a[0].length; i < t; i++) n.push(a[0][i]);
                    for (i = 0, t = a[1].length; i < t; i++) r.push(a[1][i]);
                    return e = [n.join(""), r.join("")],
                        e.join(",")
                },
                checkRandomBets: function(a, t) {
                    for (var e = this,
                             n = "undefined" == typeof a,
                             a = a || {},
                             i = [], t = t || 0, l = "", o = [], s = [], u = (e.getBallData().length, e.getBallData()[0].length, r.getCurrentGameOrder().getTotal().orders), h = 0; h < 4; h++) h < 1 ? (l = e.removeSame(o), i = i.concat(l), o.push(l)) : (l = e.removeSame(o), s = s.concat(l), o.push(l));
                    if (s.sort(function(a, t) {
                            return a - t
                        }), i = [i, s], Number(t) > Number(e.getRandomBetsNum())) return i;
                    if (n) for (var c = 0; c < u.length; c++) if (u[c].type == e.defConfig.name) {
                        var p = u[c].original.join("");
                        a[p] = p
                    }
                    return a[i.join("")] ? (t++, arguments.callee.call(e, a, t)) : i
                },
                randomNum: function() {
                    var a = this,
                        t = [],
                        e = [];
                    a.getBallData()[0].length;
                    return t = a.checkRandomBets(),
                        e = [[t[0], t[0], [t[1][0]], [t[1][1]], [t[1][2]]]],
                        order = {
                            type: r.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: t,
                            lotterys: e,
                            moneyUnit: r.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: r.getCurrentGameStatistics().getMultip(),
                            onePrice: r.getCurrentGameStatistics().getOnePrice(),
                            num: e.length
                        },
                        order.amountText = r.getCurrentGameStatistics().formatMoney(order.num * order.moneyUnit * order.multiple * order.onePrice),
                        order
                }
            },
            o = [];
        o.push('<div class="number-select-content">'),
            o.push('<ul class="ball-section">');
        var s = [];
        s.push("<li>"),
            s.push('<div class="ball-title">'),
            s.push("<strong><#=title#>" + translate.Pos + "</strong>"),
            s.push("<span></span>"),
            s.push("</div>"),
            s.push('<ul class="ball-content">'),
            $.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                function(a) {
                    s.push('<li><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + "</a></li>")
                }),
            s.push("</ul>"),
            s.push('<div class="ball-control">'),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=all" href="javascript:void(0);">' + translate.Whole + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=big" href="javascript:void(0);">' + translate.Big + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=small" href="javascript:void(0);">' + translate.Small + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=odd" href="javascript:void(0);">' + translate.Odd + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=even" href="javascript:void(0);">' + translate.Even + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=none" href="javascript:void(0);">' + translate.Clear + "</a>"),
            s.push("</div>"),
            s.push("</li>");
        var u = [];
        u.push("</ul>"),
            u.push("</div>");
        var h = [],
            c = s.join("");
        h.push(o.join("")),
            $.each([translate.Double, translate.Single],
                function(a) {
                    h.push(c.replace(/<#=title#>/g, this).replace(/<#=row#>/g, a))
                }),
            h.push(u.join(""));
        var p = a.Class(l, t);
        p.defConfig = n,
            i[n.name] = new p
    } (phoenix, phoenix.GameMethod),
    function(a, t, e) {
        var n = {
                name: "zhongsan.zhixuan.danshi",
                tips: "前三直选单式玩法提示",
                exampleTip: "前三直选单式弹出层22提示",
                exampleText: "264<br />184<br />270<br />629<br />235"
            },
            r = a.Games,
            i = r.SSC.getInstance(),
            l = {
                init: function(a) {
                    var t = this;
                    setTimeout(function() {
                            t.initFrame()
                        },
                        25)
                },
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                }
            },
            o = a.Class(l, t);
        o.defConfig = n,
            i[n.name] = new o
    } (phoenix, phoenix.Games.SSC.Danshi),
    function(a, t, e) {
        var n = {
                name: "zhongsan.zhixuan.fushi",
                tips: "前三直选复式玩法提示",
                exampleTip: "前三直选复式范例",
                randomBetsNum: 500
            },
            r = a.Games.SSC.getInstance(),
            i = {
                init: function(a) {
                    var t = this;
                    t.getHotCold(t.getGameMethodName(), "currentFre", "lost"),
                        t.initHotColdEvent()
                },
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                buildUI: function() {
                    var a = this;
                    a.container.html(u.join(""))
                },
                makePostParameter: function(a) {
                    var t = 0,
                        e = a.length,
                        n = [];
                    for (n; t < e; t++) n.push(a[t].join(""));
                    return  n.join(",")
                }
            },
            l = [];
        l.push('<div class="number-select-title balls-type-title clearfix">'),
            l.push('<ul class="function-select-title game-frequency-type">'),
            l.push('<li class="lost" data-type="lost">遗漏</li>'),
            l.push('<li class="fre" data-type="fre">冷热</li>'),
            l.push("</ul>"),
            l.push('<ul class="function-select-content">'),
            l.push('<li class="game-frequency-lost-length"><a href="javascript:void(0);" data-type="currentFre" class="periodcurrentFre">当前遗漏</a><a data-type="maxFre" href="javascript:void(0);" class="periodmaxFre">最大遗漏</a></li>'),
            l.push('<li style="display:none" class="game-frequency-fre-length"><a href="javascript:void(0);" data-type="30" class="period30">30期</a><a href="javascript:void(0);" data-type="60" class="period60">60期</a><a href="javascript:void(0);" data-type="100" class="period100">100期</a></li>'),
            l.push("</ul>"),
            l.push("</div>"),
            l.push('<div class="number-select-content">'),
            l.push('<ul class="ball-section">');
        var o = [];
        o.push("<li>"),
            o.push('<div class="ball-title">'),
            o.push("<strong><#=title#>" + translate.Pos + "</strong>"),
            o.push("<span>当前遗漏</span>"),
            o.push("</div>"),
            o.push('<ul class="ball-content">'),
            $.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                function(a) {
                    o.push('<li><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + '</a><span class="ball-aid-hot">0</span></li>')
                }),
            o.push("</ul>"),
            o.push('<div class="ball-control">'),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=all" href="javascript:void(0);">' + translate.Whole + "</a>"),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=big" href="javascript:void(0);">' + translate.Big + "</a>"),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=small" href="javascript:void(0);">' + translate.Small + "</a>"),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=odd" href="javascript:void(0);">' + translate.Odd + "</a>"),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=even" href="javascript:void(0);">' + translate.Even + "</a>"),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=none" href="javascript:void(0);">' + translate.Clear + "</a>"),
            o.push("</div>"),
            o.push("</li>");
        var s = [];
        s.push("</ul>"),
            s.push("</div>");
        var u = [],
            h = o.join("");
        u.push(l.join("")),
            $.each([translate.Thousand, translate.Hundred, translate.Ten],
                function(a) {
                    u.push(h.replace(/<#=title#>/g, this).replace(/<#=row#>/g, a))
                }),
            u.push(s.join(""));
        var c = a.Class(i, t);
        c.defConfig = n,
            r[n.name] = new c
    } (phoenix, phoenix.GameMethod),
    function(a, t, e) {
        var n = {
                name: "zhongsan.zhixuan.hezhi"
            },
            r = a.Games,
            i = r.SSC.getInstance(),
            l = {
                init: function(a) {
                    var t = this;
                    t.getHotCold(t.getGameMethodName(), "currentFre", "lost"),
                        t.initHotColdEvent()
                },
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                buildUI: function() {
                    var a = this;
                    a.container.html(h.join(""))
                },
                checkBallIsComplete: function() {
                    for (var a = this,
                             t = a.getBallData()[0], e = 0, n = t.length, r = 0; e < n; e++) t[e] > 0 && r++;
                    return r >= 1 ? a.isBallsComplete = !0 : a.isBallsComplete = !1
                },
                makePostParameter: function(a) {
                    for (var t = [], e = a.length, n = 0; n < e; n++) t = t.concat(a[n].join(","));
                    return t.join("")
                },
                getLottery: function() {
                    for (var a = this,
                             t = a.getBallData()[0], e = 0, n = t.length, r = [], i = []; e < n; e++) t[e] > 0 && r.push(e);
                    if (a.checkBallIsComplete()) {
                        for (var l = 0; l < r.length; l++) i = i.concat(a.mathResult(r[l], 0, 9));
                        return i
                    }
                    return []
                },
                removeSame: function(a, t) {
                    var e, n = 0,
                        r = this,
                        i = this.getBallData()[0].length;
                    for (len = t.length, e = Math.floor(Math.random() * i + 1); n < t.length; n++) if (e == t[n]) return arguments.callee.call(r, a, t);
                    return e
                },
                mathResult: function(a, t, e) {
                    var n, r, i, l = [];
                    for (n = t; n <= e; n++) for (r = t; r <= e; r++) for (i = t; i <= e; i++) n + r + i == a && l.push([n, r, i]);
                    return l
                },
                originalData: function(a) {
                    for (var t = this,
                             e = [], n = 0; n < a.length; n++) for (var r = 0; r < a[n].length; r++) e[r] = e[r] || [],
                    t.arrIndexOf(a[n][r], e[r]) || e[r].push(a[n][r]);
                    return e
                },
                randomNum: function() {
                    var a = this,
                        t = [],
                        e = [],
                        n = null,
                        i = (a.getBallData(), a.getBallData()[0].length);
                    a.defConfig.name;
                    return t[0] = Math.floor(Math.random() * i),
                        e = a.mathResult(t[0], 0, 9),
                        n = {
                            type: r.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: [t],
                            lotterys: e,
                            moneyUnit: r.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: r.getCurrentGameStatistics().getMultip(),
                            onePrice: r.getCurrentGameStatistics().getOnePrice(),
                            num: e.length
                        },
                        n.amountText = r.getCurrentGameStatistics().formatMoney(n.num * n.moneyUnit * n.multiple * n.onePrice),
                        n
                }
            },
            o = [];
        o.push('<div class="number-select-title balls-type-title clearfix">'),
            o.push('<ul class="function-select-title game-frequency-type">'),
            o.push('<li class="lost" data-type="lost">遗漏</li>'),
            o.push('<li class="fre" data-type="fre">冷热</li>'),
            o.push("</ul>"),
            o.push('<ul class="function-select-content">'),
            o.push('<li class="game-frequency-lost-length"><a href="javascript:void(0);" data-type="currentFre" class="periodcurrentFre">当前遗漏</a><a data-type="maxFre" href="javascript:void(0);" class="periodmaxFre">最大遗漏</a></li>'),
            o.push('<li style="display:none" class="game-frequency-fre-length"><a href="javascript:void(0);" data-type="30" class="period30">30期</a><a href="javascript:void(0);" data-type="60" class="period60">60期</a><a href="javascript:void(0);" data-type="100" class="period100">100期</a></li>'),
            o.push("</ul>"),
            o.push("</div>"),
            o.push('<div class="number-select-content">'),
            o.push('<ul class="ball-section">');
        var s = [];
        s.push("<li>"),
            s.push('<ul class="ball-content">'),
            $.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
                function(a) {
                    s.push('<li><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + '</a><span class="ball-aid-hot">&nbsp;</span></li>')
                }),
            s.push("</ul>"),
            s.push("</li>");
        var u = [];
        u.push("</ul>"),
            u.push("</div>");
        var h = [],
            c = s.join("");
        h.push(o.join("")),
            $.each([""],
                function(a) {
                    h.push(c.replace(/<#=title#>/g, this).replace(/<#=row#>/g, a))
                }),
            h.push(u.join(""));
        var p = a.Class(l, t);
        p.defConfig = n,
            i[n.name] = new p
    } (phoenix, phoenix.GameMethod),
    function(a, t, e) {
        var n = {
                name: "qiansan.zuxuan.hezhi"
            },
            r = a.Games,
            i = r.SSC.getInstance(),
            l = {
                init: function(a) {},
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                buildUI: function() {
                    var a = this;
                    a.container.html(h.join(""))
                },
                checkBallIsComplete: function() {
                    for (var a = this,
                             t = a.getBallData()[0], e = 0, n = t.length, r = 0; e < n; e++) t[e] > 0 && r++;
                    return r >= 1 ? a.isBallsComplete = !0 : a.isBallsComplete = !1
                },
                makePostParameter: function(a) {
                    for (var t = [], e = a.length, n = 0; n < e; n++) t = t.concat(a[n].join(","));
                    return t.join("")
                },
                getLottery: function() {
                    for (var a = this,
                             t = a.getBallData()[0], e = 0, n = t.length, r = [], i = []; e < n; e++) t[e] > 0 && r.push(e);
                    if (a.checkBallIsComplete()) {
                        for (var l = 0; l < r.length; l++) i = i.concat(a.mathResult(r[l], 0, 9));
                        return i
                    }
                    return []
                },
                removeSame: function(a, t) {
                    var e, n = 0,
                        r = this,
                        i = this.getBallData()[0].length;
                    for (len = t.length, e = Math.floor(Math.random() * i + 1); n < t.length; n++) if (e == t[n]) return arguments.callee.call(r, a, t);
                    return e
                },
                checkResult: function(a, t) {
                    for (var e = t.length - 1; e >= 0; e--) if (t[e].join("") == a) return ! 1;
                    return ! 0
                },
                mathResult: function(a, t, e) {
                    var n, r, i, l = this,
                        o = [],
                        s = [];
                    for (n = t; n <= e; n++) for (r = t; r <= e; r++) for (i = t; i <= e; i++) if (n + r + i == a && 3 != l.arrIndexOf(n, [n, r, i])) {
                        var u = [n, r, i].sort(function(a, t) {
                            return a - t
                        });
                        l.checkResult(u.join(""), s) && (s.push(u), o.push([n, r, i]))
                    }
                    return o
                },
                originalData: function(a) {
                    for (var t = this,
                             e = [], n = 0; n < a.length; n++) for (var r = 0; r < a[n].length; r++) e[r] = e[r] || [],
                    t.arrIndexOf(a[n][r], e[r]) || e[r].push(a[n][r]);
                    return e
                },
                checkRandomBets: function(a, t) {
                    var e = this,
                        n = "undefined" == typeof a,
                        a = a || {},
                        i = [],
                        t = t || 0,
                        l = (e.getBallData().length, e.getBallData()[0].length),
                        o = r.getCurrentGameOrder().getTotal().orders;
                    if (i[0] = Math.ceil(Math.random() * (l - 1)), Number(t) > Number(e.getRandomBetsNum())) return i;
                    if (n) for (var s = 0; s < o.length; s++) if (o[s].type == e.defConfig.name) {
                        var u = o[s].original.join("");
                        a[u] = u
                    }
                    return a[i.join("")] ? (t++, arguments.callee.call(e, a, t)) : i
                },
                randomNum: function() {
                    var a = this,
                        t = [],
                        e = [],
                        n = null;
                    a.getBallData(),
                        a.getBallData()[0].length,
                        a.defConfig.name;
                    return t = a.checkRandomBets(),
                        e = a.mathResult(t[0], 0, 9),
                        n = {
                            type: r.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: [t],
                            lotterys: e,
                            moneyUnit: r.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: r.getCurrentGameStatistics().getMultip(),
                            onePrice: r.getCurrentGameStatistics().getOnePrice(),
                            num: e.length
                        },
                        n.amountText = r.getCurrentGameStatistics().formatMoney(n.num * n.moneyUnit * n.multiple * n.onePrice),
                        n
                }
            },
            o = [];
        o.push('<div class="number-select-content">'),
            o.push('<ul class="ball-section">');
        var s = [];
        s.push("<li>"),
            s.push('<ul class="ball-content">'),
            $.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
                function(a) {
                    0 == a ? s.push('<li style="display:none"><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + "</a></li>") : s.push('<li><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + "</a></li>")
                }),
            s.push("</ul>"),
            s.push("</li>");
        var u = [];
        u.push("</ul>"),
            u.push("</div>");
        var h = [],
            c = s.join("");
        h.push(o.join("")),
            $.each([""],
                function(a) {
                    h.push(c.replace(/<#=title#>/g, this).replace(/<#=row#>/g, a))
                }),
            h.push(u.join(""));
        var p = a.Class(l, t);
        p.defConfig = n,
            i[n.name] = new p
    } (phoenix, phoenix.GameMethod),
    function(a, t, e) {
        var n = {
                name: "zhongsan.zuxuan.zuliu"
            },
            r = a.Games,
            i = a.Games.SSC.getInstance(),
            l = {
                init: function(a) {},
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                buildUI: function() {
                    var a = this;
                    a.container.html(h.join(""))
                },
                checkBallIsComplete: function() {
                    for (var a = this,
                             t = a.getBallData()[0], e = 0, n = t.length, r = 0; e < n; e++) t[e] > 0 && r++;
                    return r >= 3 ? a.isBallsComplete = !0 : a.isBallsComplete = !1
                },
                makePostParameter: function(a) {
                    for (var t = [], e = a.length, n = 0; n < e; n++) t = t.concat(a[n].join(""));
                    return t.join("")
                },
                getLottery: function() {
                    for (var a = this,
                             t = a.getBallData()[0], e = 0, n = t.length, r = []; e < n; e++) t[e] > 0 && r.push(e);
                    return a.checkBallIsComplete() ? a.combine(r, 3) : []
                },
                checkRandomBets: function(a, t) {
                    for (var e = this,
                             n = "undefined" == typeof a,
                             a = a || {},
                             i = [], t = t || 0, l = (e.getBallData().length, e.getBallData()[0].length, r.getCurrentGameOrder().getTotal().orders), o = 0; o < 3; o++) i[o] = [e.removeSame(i)];
                    if (i.sort(function(a, t) {
                            return a - t
                        }), Number(t) > Number(e.getRandomBetsNum())) return i;
                    if (n) for (var s = 0; s < l.length; s++) if (l[s].type == e.defConfig.name) {
                        var u = l[s].original.join("");
                        a[u] = u
                    }
                    return a[i.join("")] ? (t++, arguments.callee.call(e, a, t)) : i
                },
                randomNum: function() {
                    var a = this,
                        t = [],
                        e = [],
                        n = null;
                    a.getBallData(),
                        a.getBallData()[0].length,
                        a.defConfig.name;
                    return t = a.checkRandomBets(),
                        e = [t],
                        n = {
                            type: r.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: [t],
                            lotterys: e,
                            moneyUnit: r.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: r.getCurrentGameStatistics().getMultip(),
                            onePrice: r.getCurrentGameStatistics().getOnePrice(),
                            num: e.length
                        },
                        n.amountText = r.getCurrentGameStatistics().formatMoney(n.num * n.moneyUnit * n.multiple * n.onePrice),
                        n
                }
            },
            o = [];
        o.push('<div class="number-select-content">'),
            o.push('<ul class="ball-section">');
        var s = [];
        s.push("<li>"),
            s.push('<ul class="ball-content">'),
            $.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                function(a) {
                    s.push('<li><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + "</a></li>")
                }),
            s.push("</ul>"),
            s.push('<div class="ball-control">'),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=all" href="javascript:void(0);">' + translate.Whole + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=big" href="javascript:void(0);">' + translate.Big + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=small" href="javascript:void(0);">' + translate.Small + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=odd" href="javascript:void(0);">' + translate.Odd + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=even" href="javascript:void(0);">' + translate.Even + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=none" href="javascript:void(0);">' + translate.Clear + "</a>"),
            s.push("</div>"),
            s.push("</li>");
        var u = [];
        u.push("</ul>"),
            u.push("</div>");
        var h = [],
            c = s.join("");
        h.push(o.join("")),
            $.each([""],
                function(a) {
                    h.push(c.replace(/<#=title#>/g, this).replace(/<#=row#>/g, a))
                }),
            h.push(u.join(""));
        var p = a.Class(l, t);
        p.defConfig = n,
            i[n.name] = new p
    } (phoenix, phoenix.GameMethod),
    function(a, t, e) {
        var n = {
                name: "zhongsan.zuxuan.zuliudanshi",
                UIContainer: "#J-balls-main-panel"
            },
            r = a.Games,
            i = r.SSC.getInstance(),
            l = {
                init: function(a) {
                    var t = this;
                    setTimeout(function() {
                            t.initFrame()
                        },
                        25)
                },
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                checkNumSameIndex: function(a, t) {
                    for (var e, n = this,
                             r = a.length > 0 ? a: [], i = 0; i < r.length; i++) if (n.arrIndexOf(r[i], r) >= t) {
                        e = !0;
                        break
                    }
                    return e || !1
                },
                checkBallIsComplete: function(a) {
                    var t = this,
                        e = 0,
                        n = [],
                        r = [];
                    for (t.aData = [], t.sameData = [], t.errorData = [], t.tData = [], t.vData = [], r = t.iterator(t.filterLotters(a)) || []; e < r.length; e++) t.defConfig.checkNum.test(r[e]) && r[e].length == t.balls.length && !t.checkNumSameIndex(r[e], 2) ? (n = r[e].split(""), n.sort(function(a, t) {
                        return a - t
                    }), r[e] = n.join(""), t.checkResult(r[e], t.tData) ? t.tData.push(r[e].split("")) : t.checkResult(r[e], t.sameData) && t.sameData.push(r[e].split("")), t.vData.push(r[e].split(""))) : t.checkResult(r[e], t.errorData) && t.errorData.push(r[e].split("")),
                    t.checkResult(r[e], t.aData) && t.aData.push(r[e].split(""));
                    return t.tData.length > 0 ? (t.isBallsComplete = !0, t.tData) : (t.isBallsComplete = !1, [])
                },
                randomNum: function() {
                    var a = this,
                        t = 0,
                        e = [],
                        n = [],
                        i = null,
                        l = [],
                        o = (a.getBallData(), a.getBallData().length);
                    a.getBallData()[0].length,
                        a.defConfig.name;
                    for (a.addRanNumTag(); t < o; t++) e[t] = a.removeSameNum(e);
                    return e.sort(function(a, t) {
                        return a > t ? 1 : -1
                    }),
                        l = [[e.join(",")], [], []],
                        n.push(e),
                        i = {
                            type: r.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: l,
                            lotterys: n,
                            moneyUnit: r.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: r.getCurrentGameStatistics().getMultip(),
                            onePrice: r.getCurrentGameStatistics().getOnePrice(),
                            num: n.length
                        },
                        i.amountText = r.getCurrentGameStatistics().formatMoney(i.num * i.moneyUnit * i.multiple * i.onePrice),
                        i
                }
            },
            o = a.Class(l, t);
        o.defConfig = n,
            i[n.name] = new o
    } (phoenix, phoenix.Games.SSC.Danshi),
    function(a, t, e) {
        var n = {
                name: "zhongsan.zuxuan.zuliu"
            },
            r = a.Games,
            i = a.Games.SSC.getInstance(),
            l = {
                init: function(a) {},
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                buildUI: function() {
                    var a = this;
                    a.container.html(h.join(""))
                },
                checkBallIsComplete: function() {
                    for (var a = this,
                             t = a.getBallData()[0], e = 0, n = t.length, r = 0; e < n; e++) t[e] > 0 && r++;
                    return r >= 3 ? a.isBallsComplete = !0 : a.isBallsComplete = !1
                },
                makePostParameter: function(a) {
                    for (var t = [], e = a.length, n = 0; n < e; n++) t = t.concat(a[n].join(""));
                    return t.join("")
                },
                getLottery: function() {
                    for (var a = this,
                             t = a.getBallData()[0], e = 0, n = t.length, r = []; e < n; e++) t[e] > 0 && r.push(e);
                    return a.checkBallIsComplete() ? a.combine(r, 3) : []
                },
                checkRandomBets: function(a, t) {
                    for (var e = this,
                             n = "undefined" == typeof a,
                             a = a || {},
                             i = [], t = t || 0, l = (e.getBallData().length, e.getBallData()[0].length, r.getCurrentGameOrder().getTotal().orders), o = 0; o < 3; o++) i[o] = [e.removeSame(i)];
                    if (i.sort(function(a, t) {
                            return a - t
                        }), Number(t) > Number(e.getRandomBetsNum())) return i;
                    if (n) for (var s = 0; s < l.length; s++) if (l[s].type == e.defConfig.name) {
                        var u = l[s].original.join("");
                        a[u] = u
                    }
                    return a[i.join("")] ? (t++, arguments.callee.call(e, a, t)) : i
                },
                randomNum: function() {
                    var a = this,
                        t = [],
                        e = [],
                        n = null;
                    a.getBallData(),
                        a.getBallData()[0].length,
                        a.defConfig.name;
                    return t = a.checkRandomBets(),
                        e = [t],
                        n = {
                            type: r.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: [t],
                            lotterys: e,
                            moneyUnit: r.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: r.getCurrentGameStatistics().getMultip(),
                            onePrice: r.getCurrentGameStatistics().getOnePrice(),
                            num: e.length
                        },
                        n.amountText = r.getCurrentGameStatistics().formatMoney(n.num * n.moneyUnit * n.multiple * n.onePrice),
                        n
                }
            },
            o = [];
        o.push('<div class="number-select-content">'),
            o.push('<ul class="ball-section">');
        var s = [];
        s.push("<li>"),
            s.push('<ul class="ball-content">'),
            $.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                function(a) {
                    s.push('<li><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + "</a></li>")
                }),
            s.push("</ul>"),
            s.push('<div class="ball-control">'),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=all" href="javascript:void(0);">' + translate.Whole + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=big" href="javascript:void(0);">' + translate.Big + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=small" href="javascript:void(0);">' + translate.Small + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=odd" href="javascript:void(0);">' + translate.Odd + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=even" href="javascript:void(0);">' + translate.Even + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=none" href="javascript:void(0);">' + translate.Clear + "</a>"),
            s.push("</div>"),
            s.push("</li>");
        var u = [];
        u.push("</ul>"),
            u.push("</div>");
        var h = [],
            c = s.join("");
        h.push(o.join("")),
            $.each([""],
                function(a) {
                    h.push(c.replace(/<#=title#>/g, this).replace(/<#=row#>/g, a))
                }),
            h.push(u.join(""));
        var p = a.Class(l, t);
        p.defConfig = n,
            i[n.name] = new p
    } (phoenix, phoenix.GameMethod),
    function(a, t, e) {
        var n = {
                name: "zhongsan.zuxuan.zusan"
            },
            r = a.Games,
            i = a.Games.SSC.getInstance(),
            l = {
                init: function(a) {},
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                buildUI: function() {
                    var a = this;
                    a.container.html(h.join(""))
                },
                makePostParameter: function(a) {
                    for (var t = [], e = a.length, n = 0; n < e; n++) t = t.concat(a[n].join(""));
                    return t.join("")
                },
                checkBallIsComplete: function() {
                    for (var a = this,
                             t = a.getBallData(), e = 0, n = t[0].length, r = 0; e < n; e++) t[0][e] > 0 && r++;
                    return r >= 2 ? a.isBallsComplete = !0 : a.isBallsComplete = !1
                },
                getLottery: function() {
                    var a = this,
                        t = a.getBallData(),
                        e = 0,
                        n = t[0].length,
                        r = [],
                        i = [],
                        l = [];
                    if (arr = [], nr = new Array, a.checkBallIsComplete()) {
                        for (; e < n; e++) t[0][e] > 0 && arr.push(e);
                        for (var o = 0; o < arr.length; o++) i = [],
                            r = arr.concat(),
                            i.push([[arr[o], arr[o]].join("")]),
                            r.splice(o, 1),
                            i.push(r),
                            l = l.concat(a.combination(i));
                        for (var s = 0; s < l.length; s++) l[s] = l[s].join("").split("");
                        return l
                    }
                    return []
                },
                getLotteryOriginal: function(a) {
                    for (var t = a,
                             e = this,
                             n = e.getBallData(), r = (n[0].length, []), i = [], l = [], o = 0; o < t.length; o++) i = [],
                        r = t.concat(),
                        i.push([[t[o], t[o]].join("")]),
                        r.splice(o, 1),
                        i.push(r),
                        l = l.concat(e.combination(i));
                    for (var s = 0; s < l.length; s++) l[s] = l[s].join("").split("");
                    return l
                },
                removeSame: function(a) {
                    var t, e = 0,
                        n = this,
                        r = this.getBallData()[0].length;
                    for (len = a.length, t = Math.floor(Math.random() * r); e < a.length; e++) if (t == a[e]) return arguments.callee.call(n, a);
                    return t
                },
                randomNum: function() {
                    var a = this,
                        t = 0,
                        e = [],
                        n = [],
                        i = null;
                    for (a.getBallData(), a.getBallData()[0].length, a.defConfig.name; t < 2; t++) e[t] = a.removeSame(e);
                    return e.sort(function(a, t) {
                        return a > t ? 1 : -1
                    }),
                        n = a.getLotteryOriginal(e),
                        i = {
                            type: r.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: [e],
                            lotterys: n,
                            moneyUnit: r.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: r.getCurrentGameStatistics().getMultip(),
                            onePrice: r.getCurrentGameStatistics().getOnePrice(),
                            num: n.length
                        },
                        i.amountText = r.getCurrentGameStatistics().formatMoney(i.num * i.moneyUnit * i.multiple * i.onePrice),
                        i
                }
            },
            o = [];
        o.push('<div class="number-select-content">'),
            o.push('<ul class="ball-section">');
        var s = [];
        s.push("<li>"),
            s.push('<ul class="ball-content">'),
            $.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                function(a) {
                    s.push('<li><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + "</a></li>")
                }),
            s.push("</ul>"),
            s.push('<div class="ball-control">'),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=all" href="javascript:void(0);">' + translate.Whole + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=big" href="javascript:void(0);">' + translate.Big + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=small" href="javascript:void(0);">' + translate.Small + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=odd" href="javascript:void(0);">' + translate.Odd + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=even" href="javascript:void(0);">' + translate.Even + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=none" href="javascript:void(0);">' + translate.Clear + "</a>"),
            s.push("</div>"),
            s.push("</li>");
        var u = [];
        u.push("</ul>"),
            u.push("</div>");
        var h = [],
            c = s.join("");
        h.push(o.join("")),
            $.each([""],
                function(a) {
                    h.push(c.replace(/<#=title#>/g, this).replace(/<#=row#>/g, a))
                }),
            h.push(u.join(""));
        var p = a.Class(l, t);
        p.defConfig = n,
            i[n.name] = new p
    } (phoenix, phoenix.GameMethod),
    function(a, t, e) {
        var n = {
                name: "zhongsan.zuxuan.zuxuanbaodan"
            },
            r = a.Games,
            i = a.Games.SSC.getInstance(),
            l = {
                init: function(a) {
                    var t = this;
                    t.addEvent("beforeSelect",
                        function() {
                            r.getCurrentGame().getCurrentGameMethod().getGameMethodName() == t.getGameMethodName() && t.reSet()
                        })
                },
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                buildUI: function() {
                    var a = this;
                    a.container.html(h.join(""))
                },
                checkBallIsComplete: function() {
                    for (var a = this,
                             t = a.getBallData()[0], e = 0, n = t.length, r = 0; e < n; e++) t[e] > 0 && r++;
                    return r >= 1 ? a.isBallsComplete = !0 : a.isBallsComplete = !1
                },
                getLottery: function() {
                    for (var a = this,
                             t = a.getBallData()[0], e = 0, n = t.length, r = []; e < n; e++) t[e] > 0 && r.push(e);
                    return a.checkBallIsComplete() ? a.mathResult(r[0], 0, 9) : []
                },
                checkResult: function(a, t) {
                    for (var e = t.length - 1; e >= 0; e--) if (t[e].join("") == a) return ! 1;
                    return ! 0
                },
                mathResult: function(a, t, e) {
                    var n, r, i, l = this,
                        o = [],
                        s = [];
                    for (n = t; n <= e; n++) for (r = t; r <= e; r++) for (i = t; i <= e; i++) if (n == a && 3 != l.arrIndexOf(n, [n, r, i]) || r == a && 3 != l.arrIndexOf(n, [n, r, i]) || i == a && 3 != l.arrIndexOf(n, [n, r, i])) {
                        var u = [n, r, i].sort(function(a, t) {
                            return a - t
                        });
                        l.checkResult(u.join(""), s) && (s.push(u), o.push([n, r, i]))
                    }
                    return o
                },
                makePostParameter: function(a) {
                    for (var t = [], e = a.length, n = 0; n < e; n++) t = t.concat(a[n].join(","));
                    return t.join("")
                },
                randomNum: function() {
                    var a = this,
                        t = [],
                        e = [],
                        n = a.getBallData()[0].length;
                    return t[0] = Math.floor(Math.random() * n),
                        e = a.mathResult(t[0], 0, 9),
                        order = {
                            type: r.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: [t],
                            lotterys: e,
                            moneyUnit: r.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: r.getCurrentGameStatistics().getMultip(),
                            onePrice: r.getCurrentGameStatistics().getOnePrice(),
                            num: e.length
                        },
                        order.amountText = r.getCurrentGameStatistics().formatMoney(order.num * order.moneyUnit * order.multiple * order.onePrice),
                        order
                }
            },
            o = [];
        o.push('<div class="number-select-content">'),
            o.push('<ul class="ball-section">');
        var s = [];
        s.push("<li>"),
            s.push('<ul class="ball-content">'),
            $.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                function(a) {
                    s.push('<li><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + "</a></li>")
                }),
            s.push("</ul>"),
            s.push("</li>");
        var u = [];
        u.push("</ul>"),
            u.push("</div>");
        var h = [],
            c = s.join("");
        h.push(o.join("")),
            $.each([""],
                function(a) {
                    h.push(c.replace(/<#=title#>/g, this).replace(/<#=row#>/g, a))
                }),
            h.push(u.join(""));
        var p = a.Class(l, t);
        p.defConfig = n,
            i[n.name] = new p
    } (phoenix, phoenix.GameMethod),
    function(a, t, e) {
        var n = {
                name: "zhongsan.zuxuan.zuxuanhezhi"
            },
            r = a.Games,
            i = r.SSC.getInstance(),
            l = {
                init: function(a) {},
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                buildUI: function() {
                    var a = this;
                    a.container.html(h.join(""))
                },
                checkBallIsComplete: function() {
                    for (var a = this,
                             t = a.getBallData()[0], e = 0, n = t.length, r = 0; e < n; e++) t[e] > 0 && r++;
                    return r >= 1 ? a.isBallsComplete = !0 : a.isBallsComplete = !1
                },
                makePostParameter: function(a) {
                    for (var t = [], e = a.length, n = 0; n < e; n++) t = t.concat(a[n].join(","));
                    return t.join("")
                },
                getLottery: function() {
                    for (var a = this,
                             t = a.getBallData()[0], e = 0, n = t.length, r = [], i = []; e < n; e++) t[e] > 0 && r.push(e);
                    if (a.checkBallIsComplete()) {
                        for (var l = 0; l < r.length; l++) i = i.concat(a.mathResult(r[l], 0, 9));
                        return i
                    }
                    return []
                },
                removeSame: function(a, t) {
                    var e, n = 0,
                        r = this,
                        i = this.getBallData()[0].length;
                    for (len = t.length, e = Math.floor(Math.random() * i + 1); n < t.length; n++) if (e == t[n]) return arguments.callee.call(r, a, t);
                    return e
                },
                checkResult: function(a, t) {
                    for (var e = t.length - 1; e >= 0; e--) if (t[e].join("") == a) return ! 1;
                    return ! 0
                },
                mathResult: function(a, t, e) {
                    var n, r, i, l = this,
                        o = [],
                        s = [];
                    for (n = t; n <= e; n++) for (r = t; r <= e; r++) for (i = t; i <= e; i++) if (n + r + i == a && 3 != l.arrIndexOf(n, [n, r, i])) {
                        var u = [n, r, i].sort(function(a, t) {
                            return a - t
                        });
                        l.checkResult(u.join(""), s) && (s.push(u), o.push([n, r, i]))
                    }
                    return o
                },
                originalData: function(a) {
                    for (var t = this,
                             e = [], n = 0; n < a.length; n++) for (var r = 0; r < a[n].length; r++) e[r] = e[r] || [],
                    t.arrIndexOf(a[n][r], e[r]) || e[r].push(a[n][r]);
                    return e
                },
                checkRandomBets: function(a, t) {
                    var e = this,
                        n = "undefined" == typeof a,
                        a = a || {},
                        i = [],
                        t = t || 0,
                        l = (e.getBallData().length, e.getBallData()[0].length),
                        o = r.getCurrentGameOrder().getTotal().orders;
                    if (i[0] = Math.ceil(Math.random() * (l - 1)), Number(t) > Number(e.getRandomBetsNum())) return i;
                    if (n) for (var s = 0; s < o.length; s++) if (o[s].type == e.defConfig.name) {
                        var u = o[s].original.join("");
                        a[u] = u
                    }
                    return a[i.join("")] ? (t++, arguments.callee.call(e, a, t)) : i
                },
                randomNum: function() {
                    var a = this,
                        t = [],
                        e = [],
                        n = null;
                    a.getBallData(),
                        a.getBallData()[0].length,
                        a.defConfig.name;
                    return t = a.checkRandomBets(),
                        e = a.mathResult(t[0], 0, 9),
                        n = {
                            type: r.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: [t],
                            lotterys: e,
                            moneyUnit: r.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: r.getCurrentGameStatistics().getMultip(),
                            onePrice: r.getCurrentGameStatistics().getOnePrice(),
                            num: e.length
                        },
                        n.amountText = r.getCurrentGameStatistics().formatMoney(n.num * n.moneyUnit * n.multiple * n.onePrice),
                        n
                }
            },
            o = [];
        o.push('<div class="number-select-content">'),
            o.push('<ul class="ball-section">');
        var s = [];
        s.push("<li>"),
            s.push('<ul class="ball-content">'),
            $.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
                function(a) {
                    0 == a ? s.push('<li style="display:none"><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + "</a></li>") : s.push('<li><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + "</a></li>")
                }),
            s.push("</ul>"),
            s.push("</li>");
        var u = [];
        u.push("</ul>"),
            u.push("</div>");
        var h = [],
            c = s.join("");
        h.push(o.join("")),
            $.each([""],
                function(a) {
                    h.push(c.replace(/<#=title#>/g, this).replace(/<#=row#>/g, a))
                }),
            h.push(u.join(""));
        var p = a.Class(l, t);
        p.defConfig = n,
            i[n.name] = new p
    } (phoenix, phoenix.GameMethod);