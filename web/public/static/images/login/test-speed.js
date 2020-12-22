//
$(function() {
    var countAjaxNum = 0;
    var saveResults = {};
    var saveArray = [];
    var saveTime = [];
    var loadTag = {};

    var max = function(array) {
        return Math.max.apply(Math, array);
    };

    var min = function(array) {
        return Math.min.apply(Math, array);
    }


    //域名测试
    var speedTest = function(cfg) {

        //默认参数
        this.def = {
            //
            hostList: '#J-host-list'
        }

        //自动执行初始化
        this.init();
    };

    //域名测试
    $.extend(speedTest['prototype'], {

        //初始化
        init: function(cfg) {
            var me = this;

            //配置参数
            $.extend(true, me['def'], cfg);
        },

        //渲染
        render: function(data) {
            var me = this,
                html = '',
                name = '',
                host = '';

            for (var i = 0; i < data.length; i++) {
                name = data[i]['name'],
                    host = data[i]['host'];


            };


        },

        //测试
        test: function(data, fn) {
            var me = this;

            //先进行参数重置
            //避免影响测试结果
            me.reset();

            for (var i = 0; i < data.length; i++) {
                name = data[i]['name'],
                    host = data[i]['host'];

                me.ping(name, host, data, fn);
            };
        },

        ping: function(name, host, res, fn) {
            var me = this;
            var beforeTime = new Date();
            var img = new Image();

            //判断是否在PING
            if (me.inuse) {
                return;
            }

            img.onload = function() {
                me.saveResult(name, host, beforeTime, fn, res, 'load');
            };
            img.onerror = function() {
                me.saveResult(name, host, beforeTime, fn, res, 'error');
            };

            img.src = 'http://' + host + '/favicon.ico?time=' + new Date().getTime();

            //超时处理
            setTimeout(function() {
                me.saveResult(name, host, beforeTime, fn, res, 'error');
            }, 5000);
        },

        //重置必须参数
        reset: function() {
            var me = this;

            saveTime = [];
            saveArray = [];
            loadTag = {};
        },

        //存储结果
        saveResult: function(name, host, beforeTime, fn, res, type) {
            var me = this,
                time = 0,
                afterTime = new Date();

            //如果已经加载过
            //则避免二次加载
            if (loadTag[name]) {
                return;
            }
            //创建加载标志
            loadTag[name] = true;
            //累加请求次数
            countAjaxNum++;
            //耗费时间
            time = afterTime.getTime() - beforeTime.getTime();
            //存储时间
            saveTime.push(time);
            //记录消息
            saveArray.push({ 'name': name, 'time': time, 'host': host, 'type': type });
            //末尾测试地址
            if (countAjaxNum == res.length) {
                //结束
                setTimeout(function() {
                    me.finish(fn);
                }, 1000);
                //重置计数器
                countAjaxNum = 0;
            }
        },

        //结束
        finish: function(fn) {
            var data = saveArray;

            var me = this,
                html = '',
                name = '',
                host = '',
                type = '',
                time = '';

            maxNum = max(saveTime);
            minNum = min(saveTime);


            for (var i = 0; i < data.length; i++) {
                name = data[i]['name'];
                host = data[i]['host'];
                time = data[i]['time'];
                type = data[i]['type'];
                var showNum = Math.floor(time / maxNum * 100);
                var speedStyleName = 'medium';

                var desc = '<li><div class="newloginIcon"><div class="newloginArrowDiv"><img src="../sy2/images/newloginIcon_03.png" class="newloginArrow"></div></div> <div class="newloginbtn"><a href="http://'+host+'">推荐线路</a></div></li>';

                if (time > 4000) { /* maxNum == time */
                    desc = '<li><div class="newloginIcon"><div class="newloginArrowDiv"><img src="../sy2/images/newloginIcon_03.png" class="newloginArrow"></div></div> <div class="newloginbtn"><a href="http://'+host+'" style="color:#e5ccbc">较不推荐</a></div></div></li>';
                    speedStyleName = 'slow';
                    console.log(name+"slow")
                } else if (time < 2000) { /* minNum == time */
                    desc = '<li><div class="newloginIcon"><div class="newloginArrowDiv"><img src="../sy2/images/newloginIcon_03.png" class="newloginArrow"></div></div> <div class="newloginbtn"><a href="http://'+host+'">推荐线路</a></div></div></li>';
                    speedStyleName = 'fast';
                    console.log(name+"fast")
                }

                if (type != 'load') {
                    msg="javascript:alert('该线路访问异常')"
                    desc = '<li><div class="newloginIcon"><div class="newloginArrowDiv"><img src="../sy2/images/newloginIcon_03.png" class="newloginArrow"></div></div> <div class="newloginbtn"><a href="'+msg+'" style="color:#e5ccbc">较不推荐</a></div></div></li>';
                    speedStyleName = 'slow';
                    console.log(name+"unload")
                }
                /*console.log(time);*/

                $(".newloginContent>ul").append(desc)



            };

            var realHtmlDom = $(html);

            $(me['def']['hostList']).html(realHtmlDom);

            fn && fn();

            setTimeout(function() {
                me.showProcess(data, realHtmlDom, maxNum, minNum);
            }, 500);
        },

        showProcess: function(data, $dom, maxNum, minNum) {
            $(".newlinechoiceloading").hide()
            var $domList =$('.newloginContent>ul>li');
            var me = this,
                name = '',
                host = '',
                time = '',
                type = '',
                showNum = '';

            for (var i = 0; i < data.length; i++) {



                time = data[i]['time'];
                type = data[i]['type'];
                showNum = Math.floor(time / maxNum * 180);
                realnum=180-showNum

                if (type != 'load') {
                   // $domList.eq(i).css('width', '100%');
                    $domList.eq(i).find(".newloginArrow").css({ WebkitTransform: 'rotate(' + 0 + 'deg)'});
                    $domList.eq(i).find(".newloginArrow").css({ '-moz-transform': 'rotate(' + 0 + 'deg)'});
                    $domList.eq(i).find(".newloginArrow").css({ 'transform': 'rotate(' + 0 + 'deg)'});

                } else {
                   // $domList.eq(i).css('width', showNum + '%');
                    $domList.eq(i).find(".newloginArrow").css({ WebkitTransform: 'rotate(' + realnum + 'deg)'});
                    $domList.eq(i).find(".newloginArrow").css({ '-moz-transform': 'rotate(' + realnum + 'deg)'});
                    $domList.eq(i).find(".newloginArrow").css({ 'transform': 'rotate(' + realnum + 'deg)'});

                    if(realnum<1){
                        var ran=Math.random()*10+5
                        $domList.eq(i).find(".newloginArrow").css({ WebkitTransform: 'rotate(' + ran + 'deg)'});
                        $domList.eq(i).find(".newloginArrow").css({ '-moz-transform': 'rotate(' + ran + 'deg)'});
                        $domList.eq(i).find(".newloginArrow").css({ 'transform': 'rotate(' + ran + 'deg)'});
                    }


                }

            }
        }
    });

    //实例化
    window.speed = new speedTest();
    //auto testing
    setTimeout(function() {
        $('.newlogintitle').click();
    });
});