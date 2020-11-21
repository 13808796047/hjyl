!
    function(t, e, a, n) {
        var r = {
                name: "wuxing.zhixuan.danshi",
                editorobj: ".content-text-balls",
                uploadButton: "#file",
                exampleText: "12345 33456 87898 <br />12345 33456 87898 <br />12345 33456 87898 ",
                tips: "五星直选单式玩法提示",
                exampleTip: "这是单式弹出层提示",
                checkFont: /[\u4E00-\u9FA5]|[\/\n]|[\/W]/g,
                filtration: /[；;]+|<br>+|[,，]+/g,
                checkNum: /^[0-9]*$/,
                normalTips: '<p style="color:#888;font-size:12px;line-height:170%;">' + ["说明：", '1、请参照"标准格式样本"格式录入或上传方案。', "2、每一注号码之间的间隔符支持 回车 逗号[,] 分号[;] 冒号[:] 竖线 [|] 每注内间隔使用空格即可。", "3、文件格式必须是.txt格式。", "4、文件较大时会导致上传时间较长，请耐心等待！", "5、将文件拖入文本框即可快速实现文件上传功能。", "6、导入文本内容后将覆盖文本框中现有的内容。"].join("<br>") + "</p>"
            },
            o = t.Games,
            s = t.Games.N115,
            l = {
                init: function(e) {
                    var a = this;
                    a.ieRange = "",
                        a.vData = [],
                        a.aData = [],
                        a.tData = [],
                        a.errorData = [],
                        a.sameData = [],
                        a.firstfocus = !0,
                        a.ranNumTag = !1,
                        a.isFirstAdd = !0,
                        this.defConfig.normalTips = '<p style="color:#888;font-size:12px;line-height:170%;">' + translate.NormalTips.join("<br>") + "</p>",
                        o.getCurrentGameStatistics().addEvent("afterStatisReset",
                            function(t, e) {
                                var i = this,
                                    n = i.defConfig;
                                methodName = i.getGameMethodName(),
                                methodName != a.defConfig.name || i.getLockMultipleDom().prop("checked") || i.multipleDom.setValue(n.multiple)
                            }),
                        a.addEvent("beforeShow",
                            function() {
                                htmlUrl = o.getCurrentGame().getGameConfig().getInstance().getUploadPath(),
                                    uploadHtml = "http://cdn.code.tinyeditor.net",
                                o.getCurrentGameStatistics().getHistoryUnitMode() && t.util.execus(uploadHtml + o.getCurrentGameStatistics().getReplaceStr() || htmlUrl)
                            }),
                        o.getCurrentGameOrder().addEvent("beforeAdd",
                            function(t, e) {
                                a.tData;
                                e.type == a.defConfig.name && (a.isFirstAdd ? a.ranNumTag || (e.lotterys = [], a.isFirstAdd = null, a.updateData(), o.getCurrentGameOrder().add(o.getCurrentGameStatistics().getResultData())) : ("" == a.errorData.join("") && "" == a.sameData.join("") || a.ballsErrorTip(), a.checkLimitBall(e), a.isFirstAdd = !0))
                            })
                },
                initFrame: function() {
                    var e = this;
                    e.win = e.container.find(e.defConfig.editorobj)[0].contentWindow,
                        e.doc = e.win.document,
                        e._bulidEditDom();
                    var a = t.Tip.getInstance();
                    e.container.find(".balls-example-danshi-tip").click(function(t) {
                        t.preventDefault();
                        var i = $(this);
                        a.setText(e.getExampleText()),
                            a.show(i.outerWidth() + 10, 0, this)
                    }).mouseout(function() {
                        a.hide()
                    })
                },
                getExampleText: function() {
                    return this.defConfig.exampleText
                },
                rebuildData: function() {
                    var t = this;
                    t.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                buildUI: function() {
                    var t = this;
                    t.container.html(t.getHTML())
                },
                getSubmitType: function() {
                    return "input"
                },
                reSelect: function() {},
                batchSetBallDom: function() {},
                getNormalTips: function() {
                    return this.defConfig.normalTips
                },
                showNormalTips: function() {
                    var t = this;
                    t.replaceText(t.getNormalTips.call(t)),
                        t.firstfocus = !0
                },
                makeSubmitParameter: function(t, e) {
                    var a = $.extend(!0, [], e.lotterys);
                    return a.join("&")
                },
                _bulidEditDom: function() {
                    var t = this,
                        e = "";
                    t.doc.designMode = "On",
                        t.doc.contentEditable = !0,
                        t.doc.open(),
                        e = '<head><meta http-equiv="Content-Type" content="text/html; charset=utf-8" />',
                        e += "<style>*{margin:0;padding:0;font-size:14px;}</style>",
                        e += "</head>",
                        t.doc.writeln("<html>" + e + '<body style="word-break: break-all">' + t.getNormalTips() + "</body></html>"),
                        t.doc.close(),
                        t.bindPress(),
                    document.all && (t.doc.onkeypress = function() {
                        return t._ieEnter()
                    })
                },
                uploadHtmlSet: function() {
                    this.fireEvent("beforeShow")
                },
                _ieEnter: function() {
                    var t = this,
                        e = t.win.event;
                    if (13 == e.keyCode) return this._saveRange(),
                        this._insert("<br/>"),
                        !1
                },
                _insert: function(t) {
                    var e = this;
                    if (e.ieRange) e.ieRange.pasteHTML(t),
                        e.ieRange.select(),
                        e.ieRange = !1;
                    else if (e.win.focus(), document.all) e.doc.body.innerHTML += t;
                    else {
                        var a = win.getSelection(),
                            i = a.getRangeAt(0),
                            n = i.createContextualFragment(t);
                        i.insertNode(n)
                    }
                },
                _saveRange: function() {
                    if (document.all && !me.ieRange) {
                        var t = me.doc.selection;
                        if (me.ieRange = t.createRange(), "Control" != t.type) {
                            var e = me.ieRange.parentElement();
                            "INPUT" != e.tagName && e != document.body || (me.ieRange = !1)
                        }
                    }
                },
                getHtml: function() {
                    var t = this;
                    return t.doc ? $(t.doc.body).html() : ""
                },
                getText: function() {
                    var t = this;
                    return t.doc ? $(t.doc.body).text() : ""
                },
                replaceText: function(t) {
                    var e = this,
                        t = t.replace(/\n/g, "<br>");
                    e.doc && t && $(e.doc.body).html(t)
                },
                bindPress: function() {
                    var t = this,
                        e = t.container.find(t.defConfig.uploadButton);
                    window.navigator.userAgent.toLowerCase();
                    $(t.doc).bind("input",
                        function() {
                            t.updateData()
                        }),
                        $(t.doc.body).bind("keyup",
                            function() {
                                t.updateData()
                            }),
                        $(t.doc.body).bind("blur",
                            function() {
                                t.updateData()
                            }),
                        $(t.doc).bind("focus",
                            function() {
                                t.firstfocus && (t.replaceText(" "), t.firstfocus = !1)
                            }),
                        $(t.doc).bind("blur",
                            function() {
                                var e = t.getText();
                                "" == $.trim(e) && t.showNormalTips()
                            }),
                        $(t.doc.body).bind("focus",
                            function() {
                                t.firstfocus && (t.replaceText(" "), t.firstfocus = !1)
                            }),
                        $(t.doc.body).bind("blur",
                            function() {
                                var e = t.getText();
                                "" == $.trim(e) && t.showNormalTips()
                            }),
                        e.bind("change",
                            function() {
                                var e = $(this).parent();
                                t.checkFile(this, e)
                            })
                },
                iterator: function(t, e) {
                    var a = this;
                    a.defConfig;
                    return t = t.replace(/^\,|\,$/, ""),
                        t.split(",")
                },
                checkResult: function(t, e) {
                    for (var a = e.length - 1; a >= 0; a--) if (e[a] == t) return ! 1;
                    return ! 0
                },
                filterLotters: function(t) {
                    var e = this,
                        a = "";
                    return a = t.replace(/\s+/gi, " "),
                        a = a.replace(/<(?:"[^"]*"|'[^']*'|[^>'"]*)+>/g, ","),
                        a = a.replace(e.defConfig.checkFont, "") + ",",
                        a = a.replace(/<br>+|&nbsp;+|[,;，；:：|]+/gi, ",")
                },
                checkBallGroup: function(t) {
                    for (var e = t.length - 1; e >= 0; e--) if (Number(t[e]) < 1 || Number(t[e]) > 11) return ! 0;
                    return ! 1
                },
                checkArrayInnerSame: function(t) {
                    var e = {};
                    for (var a in t) {
                        if (e[t[a]]) return ! 0;
                        e[t[a]] = !0
                    }
                    return ! 1
                },
                checkSingleNum: function(t) {
                    var e = this;
                    return e.defConfig.checkNum.test(t) && 2 == $.trim(t).length && Number(t) > 0 && Number(t) < 12
                },
                checkBallIsComplete: function(t) {
                    var e = this,
                        a = 0,
                        i = 999,
                        n = [];
                    for (e.aData = [], e.vData = [], e.sameData = [], e.errorData = [], e.tData = [], n = e.iterator(e.filterLotters(t), e.defConfig.filtration) || [], a = 0; a < n.length; a++) i = $.trim(n[a]),
                        e.checkSingleNum(i) ? (e.checkResult(i, e.tData) ? e.tData.push(i) : e.checkResult(i, e.sameData) && e.sameData.push(i), e.vData.push(i)) : e.checkResult(i, e.errorData) ? e.errorData.push(i) : e.sameData.push(i),
                    e.checkResult(i, e.aData) && e.aData.push(i);
                    return e.tData.length > 0 ? (e.isBallsComplete = !0, e.isFirstAdd ? e.vData: e.tData) : (e.isBallsComplete = !1, [])
                },
                countInstances: function(t, e) {
                    var a = [],
                        i = 0;
                    do i = t.indexOf(e, i),
                    i != -1 && (a.push(i), i += e.length);
                    while (i != -1);
                    return a
                },
                removeOrderError: function() {
                    var t = this,
                        e = t.vData.length > 0 ? "": " ";
                    if (!t.firstfocus) {
                        if (e = t.vData.join(",") + "&nbsp;", t.errorDataTips(), "" == $.trim(e)) return void t.showNormalTips();
                        t.replaceText(e),
                            t.checkBallIsComplete(e)
                    }
                },
                removeOrderSame: function() {
                    var t = this,
                        e = t.aData.length > 0 ? "": " ";
                    t.firstfocus || (e = t.aData.join(",") + "&nbsp;", t.sameDataTips(), t.replaceText(e), t.checkBallIsComplete(e), t.updateData())
                },
                removeOrderAll: function() {
                    var t = this;
                    t.firstfocus || (t.replaceText(" "), t.sameData = [], t.aData = [], t.tData = [], t.vData = [], o.getCurrentGameStatistics().reSet(), t.showNormalTips())
                },
                checkFile: function(t, e) {
                    var a = t.value,
                        i = a.substring(a.lastIndexOf("."), a.length),
                        i = i.toLowerCase();
                    if ("" != a) return ".txt" != i ? (alert(translate.FileError || "对不起，导入数据格式必须是.txt格式文件哦，请您调整格式后重新上传，谢谢 ！"), !1) : void e[0].submit()
                },
                getFile: function(t) {
                    var e = this,
                        a = e.container.find(":reset");
                    t && (e.replaceText(t), e.firstfocus = !1, e.updateData(), a.click())
                },
                errorTip: function(t, e) {},
                sameDataTips: function() {
                    var t = this,
                        e = t.sameData,
                        a = "",
                        i = o.getCurrentGameMessage();
                    "" != e.join("") && (a = '<h4 class="pop-text" style="display:block;">' + translate["以下号码重复，已进行自动过滤"] + '</h4><p class="pop-text" style="display:block">' + e.join(", ") + "</p>", i.show({
                        mask: !0,
                        content: ['<div class="bd text-center">', '<div class="pop-waring">', '<i class="ico-waring <#=icon-class#>"></i>', '<div style="display:inline-block;*zoom:1;*display:inline;vertical-align:middle">' + a + "</div>", "</div>", "</div>"].join(""),
                        closeIsShow: !0,
                        closeFun: function() {
                            this.hide()
                        }
                    }))
                },
                errorDataTips: function() {
                    var t = this,
                        e = t.errorData,
                        a = "",
                        i = o.getCurrentGameMessage();
                    "" != e.join("") && (a = '<h4 class="pop-text" style="display:block;"> ' + translate["以下号码错误，已进行自动过滤"] + ' </h4><p class="pop-text" style="display:block">' + e.join(", ") + "</p>", i.show({
                        mask: !0,
                        content: ['<div class="bd text-center">', '<div class="pop-waring">', '<i class="ico-waring <#=icon-class#>"></i>', '<div style="display:inline-block;*zoom:1;*display:inline;vertical-align:middle">' + a + "</div>", "</div>", "</div>"].join(""),
                        closeIsShow: !0,
                        closeFun: function() {
                            this.hide()
                        }
                    }))
                },
                ballsErrorTip: function(t, e) {
                    var a = this,
                        i = a.errorData,
                        n = a.sameData,
                        r = "",
                        s = "",
                        l = o.getCurrentGameMessage();
                    "" != n.join("") && (s = '<h4 class="pop-text" style="display:block;">' + translate["以下号码重复，已进行自动过滤"] + '</h4><p class="pop-text" style="display:block">' + n.join(", ") + "</p>"),
                    "" != i.join("") && (r = '<h4 class="pop-text" style="display:block;"> ' + translate["以下号码错误，已进行自动过滤"] + ' </h4><p class="pop-text" style="display:block">' + i.join(", ") + "</p>"),
                        l.show({
                            mask: !0,
                            content: ['<div class="bd text-center">', '<div class="pop-waring">', '<i class="ico-waring <#=icon-class#>"></i>', '<div style="display:inline-block;*zoom:1;*display:inline;vertical-align:middle">' + s + r + "</div>", "</div>", "</div>"].join(""),
                            closeIsShow: !0,
                            closeFun: function() {
                                this.hide()
                            }
                        })
                },
                reSet: function() {
                    var t = this;
                    t.isBallsComplete = !1,
                        t.rebuildData(),
                        t.updateData(),
                    t.ranNumTag || t.showNormalTips(),
                        t.removeRanNumTag()
                },
                makePostParameter: function(t, e) {
                    for (var a = [], t = e.lotterys, i = 0; i < t.length; i++) a.push(t[i]);
                    return a.join(",")
                },
                getTdata: function() {
                    return this.tData
                },
                getLottery: function() {
                    var t = this,
                        e = t.getHtml();
                    if ("" != e) return t.checkBallIsComplete(e)
                },
                removeSameNum: function(t) {
                    var e, a = 0,
                        i = this,
                        n = this.getBallData()[0].length;
                    for (len = t.length, e = Math.floor(Math.random() * n); a < t.length; a++) if (e == t[a]) return arguments.callee.call(i, t);
                    return e
                },
                emptySameData: function() {
                    this.sameData = []
                },
                emptyErrorData: function() {
                    this.errorData = []
                },
                addRanNumTag: function() {
                    var t = this;
                    t.ranNumTag = !0,
                        t.emptySameData(),
                        t.emptyErrorData()
                },
                removeRanNumTag: function() {
                    this.ranNumTag = !1
                },
                getOriginal: function() {
                    var t = this,
                        e = t.getBallData(),
                        a = e.length,
                        n = e[0].length;
                    for (i = 0, j = 0, row = [], tData = t.getTdata(), data = t.getHtml(), result = []; i < a; i++) {
                        for (row = [], j = 0; j < n; j++) e[i][j] > 0 && row.push(j);
                        result.push(row)
                    }
                    return tData.length > 0 && (result[0][0] = t.getTdata().join(",")),
                        result
                },
                createRandomNum: function() {
                    for (var t = this,
                             e = [], a = t.getBallData().length, i = t.getBallData()[0].length, n = 0; n < a; n++) {
                        var r = Math.ceil(Math.random() * (i - 1));
                        r < 10 && (r = "0" + r),
                            e[n] = [r]
                    }
                    return e
                },
                checkRandomBets: function(t, e) {
                    var a = this,
                        i = "undefined" == typeof t,
                        t = t || {},
                        n = [],
                        e = e || 0,
                        r = (a.getBallData().length, a.getBallData()[0].length, o.getCurrentGameOrder().getTotal().orders);
                    if (n = a.createRandomNum(), Number(e) > Number(a.getRandomBetsNum())) return n;
                    if (i) for (var s = 0; s < r.length; s++) if (r[s].type == a.defConfig.name) {
                        var l = r[s].original.join("");
                        t[l] = l
                    }
                    return t[n.join("")] ? (e++, arguments.callee.call(a, t, e)) : n
                },
                randomNum: function() {
                    var t = this,
                        e = [],
                        a = null,
                        i = (t.getBallData(), t.defConfig.name, []),
                        n = [];
                    return t.addRanNumTag(),
                        e = t.checkRandomBets(),
                        n = e,
                        i = t.combination(n),
                        a = {
                            type: o.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: n,
                            lotterys: i,
                            moneyUnit: o.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: o.getCurrentGameStatistics().getMultip(),
                            onePrice: o.getCurrentGameStatistics().getOnePrice(),
                            num: i.length
                        },
                        a.amountText = o.getCurrentGameStatistics().formatMoney(a.num * a.moneyUnit * a.multiple * a.onePrice),
                        a
                },
                getLockMultipleDom: function() {
                    return $("#J-balls-statistics-lockMultiple")
                },
                getHTML: function() {
                    var t = [];
                    return t.push('<div class="balls-import clearfix">'),
                        t.push('<form id="form1" name="form1" enctype="multipart/form-data" method="post" action="' + o.getCurrentGame().getGameConfig().getInstance().getUploadPath() + '" target="check_file_frame" style="position:relative;padding-bottom:10px;">'),
                        /*t.push('<input name="file" type="file" id="file" size="40" hidefocus="true" value="' + translate.UploadFile + '" style="display: none;outline:none;-ms-filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=0);filter:alpha(opacity=0);opacity: 0;position:absolute;top:0px; left:0px; width:107px; height:30px;z-index:1;background:#000" />'),
                        t.push('<input type="button" style="" class="balls-import-input" value="' + translate.UploadFile + '" onclick=document.getElementById("form1").file.click()><a class="balls-example-danshi-tip" href="#">查看标准格式样本</a>'),*/
                        t.push('<input type="reset" style="outline:none;-ms-filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=0);filter:alpha(opacity=0);opacity: 0;width:0px; height:0px;z-index:1;background:#000" />'),
                        t.push("</form>"),
                        t.push('<div class="panel-select" ><iframe style="width:100%;height:100%;border:0 none;background-color:#F9F9F9;" class="content-text-balls"></iframe></div>'),
                        t.push('<div class="panel-btn">'),
                        t.push('<a class="remove-error" id="" href="javascript:void(0);"><i></i>' + translate.DeleteError + "</a>"),
                        t.push('<a class="remove-same" id="" href="javascript:void(0);"><i></i>' + translate.RemoveDuplicate + "</a>"),
                        t.push('<a class="remove-all" id="" href="javascript:void(0);"><i></i>' + translate.ClearTextbox + "</a>"),
                        t.push("</div>"),
                        t.push("</div>"),
                        t.join("")
                }
            },
            c = t.Class(l, a);
        c.defConfig = r,
            s[e] = c
    } (phoenix, "Danshi", phoenix.GameMethod);