﻿

(function(host, name, $, undefined){
	
	var Main = function(){};
		Main.win = $(window);
		Main.doc = $(document);
		Main.isIE = !!document.all;
		Main.isIE6 = window.ActiveXObject && navigator.userAgent.toLowerCase().match(/msie ([\d.]+)/)[1] == 6.0 ? true : false;
		


		//使某个元素定位到视图中心
		Main.toViewCenter = function(el){
			Main.toViewCenter.fn(el);

			Main.win.bind('resize', function(){
				Main.toViewCenter.fn(el);
			})
		};

		Main.toViewCenter.fn = function(el){
			var el = $(el),w = el.width(),h = el.height(),allw = Main.win.width(),allh = Main.win.height(),
				scrollWidth = Main.isIE6 ? Main.win.scrollLeft() : 0,
				scrollHeight = Main.isIE6 ? Main.win.scrollTop() : 0;
			el.css({left:allw/2 - w/2 + scrollWidth, top:allh/2 - h/2 + scrollHeight});
		}

		Main.clearSelection = function(){
		    if(document.selection && document.selection.empty) {
		        document.selection.empty();
		    } else if(window.getSelection) {
		        var sel = window.getSelection();
		        sel.removeAllRanges();
		    }
		}

		Main.clearSelection = function(){
		    if(document.selection && document.selection.empty) {
		        document.selection.empty();
		    } else if(window.getSelection) {
		        var sel = window.getSelection();
		        sel.removeAllRanges();
		    }
		}
		
		//让某个元素始终保持在相对的固定位置(不随滚动条的滚动而变化)
		Main.startFixed = function(el, time){
			var el = $(el),fn,time = time || 500,
				top = parseInt(el.css('top')),sTop = Main.win.scrollTop(),_sTop = sTop,
				left = parseInt(el.css('left')),sLeft = Main.win.scrollLeft(),_sLeft = sLeft;
				
				fn = function(){
					var h = el.height(),w = el.width(),allw = Main.win.width(),allh = Main.win.height();
					_sTop = Main.win.scrollTop();
					_sLeft = Main.win.scrollLeft();
					el.stop();
					el.animate({top:allh/2 - h/2 + _sTop}, 50);
					sTop = _sTop;
					el.animate({left:allw/2 - w/2 + _sLeft}, 50);
					sLeft = _sLeft;
				};
				//注意这里从代码层面上看，Timer 和 util形成了相互依赖 
				return new host['Timer']({time:time,fn:fn});
		};
		
		//计算字符长度，中文算2个
		Main.getByteLen = function(str){
			return str.replace(/[^\x00-\xff]/g, 'xx').length;
		};

		Main.execu = function(str){
		    var script = document.createElement('script');
		    script.type="text/javascript";
		    script.text=str;
		    document.getElementsByTagName('head')[0].appendChild(script);
		    document.head.removeChild(document.head.lastChild);
		}
		
		//获取url参数
		Main.getParam = function(name){
			var reg = new RegExp("(^|\\?|&)"+ name +"=([^&]*)(\\s|&|$)", "i");  
			if (reg.test(location.href)){
				return unescape(RegExp.$2.replace(/\+/g, " "));
			}else{
				return null;
			}
		};
		
		//根据模板和数据对象生成模板内容字符串
		//模板格式 <#=xxx#>
		Main.template = function(tpl, data){
			var me = this,o = data,p,reg;
			for(p in o){
				if(o.hasOwnProperty(p)){
					reg = RegExp('<#=' + p + '#>', 'g');
					tpl = tpl.replace(reg, o[p]);
				}
			}
			return tpl;
		};		

		//加
		Main.add = function(a, b){
		    var c, d, e, me = this;
		    try {
		        c = a.toString().split(".")[1].length;
		    } catch (f) {
		        c = 0;
		    }
		    try {
		        d = b.toString().split(".")[1].length;
		    } catch (f) {
		        d = 0;
		    }
		    return e = Math.pow(10, Math.max(c, d)), (me.mul(a, e) + me.mul(b, e)) / e;
		}

		//预留为前后端统一TOKEN验证
		Main.findTokenMark = function(){
			return '\u0049\u006d\u005f\u0074\u006f\u006b\u0065\u006e'
		}

		//生成
		Main.execus = function(str){
		    var script = document.createElement('script');
		    script.type="text/javascript";
		    script.src=str;
		    document.getElementsByTagName('head')[0].appendChild(script);
		}
		 	
		//减
		Main.sub = function(a, b) {
		    var c, d, e, me = this;
		    try {
		        c = a.toString().split(".")[1].length;
		    } catch (f) {
		        c = 0;
		    }
		    try {
		        d = b.toString().split(".")[1].length;
		    } catch (f) {
		        d = 0;
		    }
		    return e = Math.pow(10, Math.max(c, d)), (me.mul(a, e) - me.mul(b, e)) / e;
		}
		 
		//乘
		Main.mul = function(a, b) {
		    var c = 0,
		        d = a.toString(),
		        e = b.toString(), 
		        me = this;


		    try {
		        c += d.split(".")[1].length;
		    } catch (f) {}
		    try {
		        c += e.split(".")[1].length;
		    } catch (f) {}
		    return Number(d.replace(".", "")) * Number(e.replace(".", "")) / Math.pow(10, c);
		}
		 
		//除
		Main.div = function(a, b) {
		    var c, d, e = 0, me = this,
		        f = 0;
		    try {
		        e = a.toString().split(".")[1].length;
		    } catch (g) {}
		    try {
		        f = b.toString().split(".")[1].length;
		    } catch (g) {}
		    return c = Number(a.toString().replace(".", "")), d = Number(b.toString().replace(".", "")), me.mul(c / d, Math.pow(10, f - e));
		}
		
		//将数字保留两位小数并且千位使用逗号分隔
		Main.formatMoney = function(num){
			var num = Number(num),
				re = /(-?\d+)(\d{3})/;
				
			if(Number.prototype.toFixed){
				num = (num).toFixed(2);
			}else{
				num = Math.round(num*100)/100
			}
			num  =  '' + num;
			while(re.test(num)){
				num = num.replace(re,"$1,$2");
			}
			return num;  
		};
		
		
	
	host[name] = Main;
	
})(phoenix, "util", jQuery);










