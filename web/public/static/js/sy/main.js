
//主页面函数
;(function(host, $, undefined){
	host.resizeHeight = function(){
		
		var $frameDom = $('#mainFrame'),
			parentWindow = window.parent,
			historyHeight = 0,
			height = $frameDom.contents().find('body').height();
			$frameDom.height(height);
	};
	//自动响应高度
	//Hsien 20160826修正
	//自动响应高度
	host.autoResizeHeight = function(height){
		
		if(/gameinfo\_gamelist\.html/.test($('#mainFrame').attr('src')))
		{
			height+=50;
		}
		var $frameDom = ($('#mainFrame').size() > 0) ? $('#mainFrame') : $('#mainFrame_menu');

		$frameDom.css({
			'height': height
		});
	};
	//切换到旧版贴在右边
	var stickOldLink = function(){
		$("#goToOld").css({
			left:($(window).width()-1000)/2 + 1010 + "px"
		});
	}
	$(function(){
		stickOldLink();
		//自动投注
		$('.J-plan-bet').on('click', function(){
			var url = $(this).attr('data-url'),
				id = $(this).attr('data-planid');

			LS && LS.setItem('planId', id);
			setTimeout(function(){
				window.location.href = url;
			}, 100)
		});

		//左侧栏位选择中样式
		$(".left-aside .row").click(function(){
			$(".left-aside .row").not($(this)).removeClass("active");
			$(this).addClass("active");
            //var sAHtml = $(this).find('a').html();
            //var sANavgiate1 = sAHtml.split('</i>')[1];
			var sANavgiate1 = $(this).find('a').text();
			if(sANavgiate1)
			{
				$('div.right-aside a.navgiate1').html($.trim(sANavgiate1));
			}	
            	
		})

		$('.J-fresh-balance').click(function(){

			//自动刷新
	        $.ajax({
	            url: '/newgame_play.html?tag=getuserbalance',
	            dataType: 'json',
	            method: 'GET',
	            success: function(r) {
	                if (Number(r['isSuccess']) == 1) {
	                   $('.J-balance-show').text('￥' + r['availablebalance']);
	                }
	            },
	            complete: function(){},
	            error: function(res){}
	        });
		});
		//当改变浏览器大小/卷动页面
		$(window).on({
			resize: function(){
				stickOldLink();
			},
			scroll: function(){
				stickOldLink();
			}
		})

	});

})(window, jQuery);
﻿//主页面函数
;(function(host, $, undefined){

	//自动响应高度
	//Hsien 20160826修正
	//自动响应高度
	host.autoResizeHeight = function(height){
		
		if(/gameinfo\_gamelist\.html/.test($('#mainFrame').attr('src')))
		{
			height+=50;
		}
		var $frameDom = ($('#mainFrame').size() > 0) ? $('#mainFrame') : $('#mainFrame_menu');

		$frameDom.css({
			'height': height
		});
	};
	//切换到旧版贴在右边
	var stickOldLink = function(){
		$("#goToOld").css({
			left:($(window).width()-1000)/2 + 1010 + "px"
		});
	}
	$(function(){
		stickOldLink();
		//自动投注
		$('.J-plan-bet').on('click', function(){
			var url = $(this).attr('data-url'),
				id = $(this).attr('data-planid');

			LS && LS.setItem('planId', id);
			setTimeout(function(){
				window.location.href = url;
			}, 100)
		});

		//左侧栏位选择中样式
		$(".left-aside .row").click(function(){
			$(".left-aside .row").not($(this)).removeClass("active");
			$(this).addClass("active");
                        var sAHtml = $(this).find('a').html();
                        var sANavgiate1 = sAHtml.split('</i>')[1];
                        if(sANavgiate1)
                            $('div.right-aside a.navgiate1').html(sANavgiate1.trim());
		})

		$('.J-fresh-balance').click(function(){

			//自动刷新
	        $.ajax({
	            url: '/newgame_play.html?tag=getuserbalance',
	            dataType: 'json',
	            method: 'GET',
	            success: function(r) {
	                if (Number(r['isSuccess']) == 1) {
	                   $('.J-balance-show').text('￥' + r['availablebalance']);
	                }
	            },
	            complete: function(){},
	            error: function(res){}
	        });
		});
		//当改变浏览器大小/卷动页面
		$(window).on({
			resize: function(){
				stickOldLink();
			},
			scroll: function(){
				stickOldLink();
			}
		})

	});

})(window, jQuery);
!function(t,a,i){t.autoResizeHeight=function(t){/gameinfo\_gamelist\.html/.test(a("#mainFrame").attr("src"))&&(t+=50);var i=a(a("#mainFrame").size()>0?"#mainFrame":"#mainFrame_menu");i.css({height:t})};var e=function(){a("#goToOld").css({left:(a(window).width()-1e3)/2+1010+"px"})};a(function(){e(),a(".J-plan-bet").on("click",function(){var t=a(this).attr("data-url"),i=a(this).attr("data-planid");LS&&LS.setItem("planId",i),setTimeout(function(){window.location.href=t},100)}),a(".left-aside .row").click(function(){a(".left-aside .row").not(a(this)).removeClass("active"),a(this).addClass("active");var t=a(this).find("a").html(),i=t.split("</i>")[1];i&&a("div.right-aside a.navgiate1").html(i.trim())}),a(".J-fresh-balance").click(function(){a.ajax({url:"/newgame_play.html?tag=getuserbalance",dataType:"json",method:"GET",success:function(t){1==Number(t.isSuccess)&&a(".J-balance-show").text("￥"+t.availablebalance)},complete:function(){},error:function(t){}})}),a(window).on({resize:function(){e()},scroll:function(){e()}})})}(window,jQuery);
