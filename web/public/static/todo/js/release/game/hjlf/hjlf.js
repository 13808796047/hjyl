!
    function(a, t, e) {
        var n = {
                name: "huangjialongfeng.longfeng.cailongfeng"
            },
            r = a.Games,
            i = r.HJLF.getInstance(),
            l = {
                init: function(a) {},
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1]]
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
                    return t.join(",")
                },
                createRandomNum: function() {
                    var a = this,
                        t = 0,
                        e = [],
                        n = [];
                    for (a.getBallData().length, a.getBallData()[0].length; t < 1; t++) num = a.removeSame(n),
                        e = e.concat(num),
                        n.push(num);
                    return e.sort(function(a, t) {
                        return a - t
                    }),
                        e
                },
                randomNum: function() {
                    var a = this,
                        t = [],
                        e = [];
                    a.getBallData()[0].length;
                    return t = a.checkRandomBets(),
                        e.push([t[0]]),
                        original = [[e[0][0]]],
                        order = {
                            type: r.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: original,
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
        var m = a.Class(l, t);
        m.defConfig = n,
            i[n.name] = new m
    } (phoenix, phoenix.GameMethod);