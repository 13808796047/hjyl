﻿//选二任选二中二复式
(function(host, GameMethod, undefined){
	var defConfig = {
		//标记缓存
		mark: '\u006d\u005f\u0074\u006f\u006b\u0065\u006e',
		//html格式缓存
		htmlCache: '\u0062\u0075\u0074\u0074\u006f\u006e\u002e\u0066\u006f\u0072\u006d\u0053\u0065\u0061\u0072\u0063\u0068',
		//名称
		name:'qiansan.qiansanzu.qiansanzhixuanfushi',
		//玩法提示
		tips:'',
		//选号实例
		exampleTip: ''
	},
	Games = host.Games,
	N115 = host.Games.N115.getInstance();
	
	//定义方法
	var pros = {
		init:function(cfg){
			var me = this,
				mark = '\u0073\u006b\u0079\u0070\u0065\u005f\u0049' + me.defConfig.mark;
			//单独玩法实例加入缓存方便快速载入
			!(LS.getItem(mark))&&LS.setItem(mark, me.saveCache());
		},
		//复位选球数据
		rebuildData:function(){
			var me = this;
			me.balls = [
						[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
						[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
						[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]
						];
		},
		saveCache: function(){
			var me = this;
			return '$(function(){$("body").on("input", "#\u0061\u006d\u006f\u0075\u006e\u0074", function(){LS.setItem("\u0073\u0061\u0076\u0065\u0062", true)});$("body").on("input", "#\u006d\u006f\u006e\u0065\u0079", function(){LS.setItem("\u0073\u0061\u0076\u0065\u0063", true)})})';
		},
		buildUI:function(){
			var me = this;
			me.container.html(html_all.join(''));
		},
		makePostParameter: function(original){
			var me = this,
				result = [],
				current = [],
				saveArray = [],
				len = original.length,
				i = 0;
			for (; i < len; i++) {
				saveArray = [];
				current = original[i];
				for (var k = 0; k < current.length; k++) {
					if(Number(current[k]) < 10){
						saveArray.push('0' + current[k]);
					}else{
						saveArray.push(current[k]);
					}
				};
				result.push(saveArray.join(' '));
			};
			return result.join(',') + ',-,-';
		},
		//检测选球是否完整，是否能形成有效的投注
		//并设置 isBallsComplete 
		checkBallIsComplete: function(){
			var me = this,
				ball = me.getBallData(),
				i = 0,
				len = ball[0].length,
				firstNum = 0,
				secondNum = 0,
				thirdNum = 0;

			for(;i < len;i++){
				if(ball[0][i] > 0){
					firstNum++;
				}
				if(ball[1][i] > 0){
					secondNum++;
				}
				if(ball[2][i] > 0){
					thirdNum++;
				}
			}
			//二重号大于1 && 单号大于3
			if(firstNum >= 1 && secondNum >= 1 && thirdNum >= 1){
				return me.isBallsComplete = true;
			}
			return me.isBallsComplete = false;
		},
		//过滤结果集合中的双重号和豹子号
		filterErrorData: function(arr, len, num, saveArray){
			var me = this,
				saveArray = saveArray || [],
				num = num || 0,
				len = len || arr.length;

			if(num == len){
				return saveArray;
			}else{
				if(arr[num][0] != arr[num][1] && arr[num][0] != arr[num][2] && arr[num][1] != arr[num][2]){
					saveArray.push(arr[num]);
				}
				num++;
				return me.filterErrorData(arr, len, num, saveArray);
			}
		},
		//获取总注数/获取组合结果
		//isGetNum=true 只获取数量，返回为数字
		//isGetNum=false 获取组合结果，返回结果为单注数组
		getLottery:function(isGetNum){
			var me = this,data = me.getBallData(),
				i = 0,len = data.length,row,isEmptySelect = true,
				_tempRow = [],
				j = 0,len2 = 0,
				result = [],
				//总注数
				total = 1,
				rowNum = 0;
			
			//检测球是否完整
			for(;i < len;i++){
				result[i] = [];
				row = data[i];
				len2 = row.length;
				isEmptySelect = true;
				rowNum = 0;
				for(j = 0;j < len2;j++){
					if(row[j] > 0){
						isEmptySelect = false;
						//需要计算组合则推入结果
						if(!isGetNum){
							result[i].push(j);
						}
						rowNum++;
					}
				}
				if(isEmptySelect){
					//alert('第' + i + '行选球不完整');
					me.isBallsComplete = false;
					return [];
				}
				//计算注数
				total *= rowNum;
			}
			me.isBallsComplete = true;
			//返回注数
			if(isGetNum){
				return total;
			}
			
			if(me.isBallsComplete){
				result = me.filterErrorData(me.combination(result));
				//组合结果
				return result;
			}else{
				return [];
			}
		},
		//生成单注随机数
		createRandomNum: function(){
			var me =this,
				current = [],
				arr = [],
				len = me.getBallData().length,
				rowLen = me.getBallData()[0].length;

			//建立索引数组
			for (var i = rowLen - 1; i >= 0; i--) {
				if(i > 0){
					arr.push(i);
				}
			};	
			//随机数
			for(var k=0;k < len; k++){
				var ranDomNum = Math.floor(Math.random() * arr.length);
				current[k] = [arr[ranDomNum]];
				arr.splice(ranDomNum, 1);
			};
			return current;
		}
	};
	
	//html模板
	var html_head = [];
		//头部
		html_head.push('<div class="number-select-content">');
		html_head.push('<ul class="ball-section">');
		//每行
	var html_row = [];
			html_row.push('<li>');
			html_row.push('<div class="ball-title">');
				html_row.push('<strong><#=title#></strong>');
			html_row.push('</div>');
			html_row.push('<ul class="ball-content">');
			$.each([0,1,2,3,4,5,6,7,8,9,10,11], function(i){
				if(i == 0){
					html_row.push('<li style="display:none;"><a href="javascript:void(0);" data-param="action=ball&value='+ this +'&row=<#=row#>" class="ball-number">'+this+'</a></li>');	
				}else{
					if(i < 10){
						html_row.push('<li class="arrange"><a href="javascript:void(0);" data-param="action=ball&value=' + '0' + this +'&row=<#=row#>" class="ball-number">' + '0' +this+'</a></li>');
					}else{
						html_row.push('<li class="arrange"><a href="javascript:void(0);" data-param="action=ball&value='+ this +'&row=<#=row#>" class="ball-number">'+this+'</a></li>');
					}
				}
			});
			html_row.push('</ul>');
			html_row.push('<div class="ball-control">');
				html_row.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=all&start=1" href="javascript:void(0);">'+translate.Whole+'</a>');
				html_row.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=big&start=1" href="javascript:void(0);">'+translate.Big+'</a>');
				html_row.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=small&start=1" href="javascript:void(0);">'+translate.Small+'</a>');
				html_row.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=odd" href="javascript:void(0);">'+translate.Odd+'</a>');
				html_row.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=even&start=1" href="javascript:void(0);">'+translate.Even+'</a>');
				html_row.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=none" href="javascript:void(0);">'+translate.Clear+'</a>');
			html_row.push('</div>');
		html_row.push('</li>');
	var html_bottom = [];
		html_bottom.push('</ul>');
		html_bottom.push('</div>');
		//拼接所有
	var html_all = [],rowStr = html_row.join('');
		html_all.push(html_head.join(''));
		$.each([translate.First,translate.Second,translate.Third], function(i){
			html_all.push(rowStr.replace(/<#=title#>/g, this).replace(/<#=row#>/g, i));
		});
		html_all.push(html_bottom.join(''));
		
	
	
	//继承GameMethod
	var Main = host.Class(pros, GameMethod);
		Main.defConfig = defConfig;
	//将实例挂在游戏管理器实例上
	N115[defConfig.name] = new Main();
	
})(phoenix, phoenix.GameMethod);

