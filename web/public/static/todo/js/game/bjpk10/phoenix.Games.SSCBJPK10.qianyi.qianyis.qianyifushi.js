
//BJPK10 前一/前一/前一
(function (host, GameMethod, undefined) {
	var defConfig = { name: "qianyi.qianyis.qianyifushi" },
    Games = host.Games,
    SSCBJPK10 = host.Games.SSCBJPK10.getInstance();

	//定义方法
	var pros = {
		init: function (cfg) {
			var me = this;
		},
		//复位选球数据
		rebuildData: function () {
			var me = this;
			me.balls = [
				[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
			];
		},
		buildUI: function () {
			var me = this;
			me.container.html(html_all.join(''));
		},
		//获取组合结果
		getLottery:function(isGetNum){
			var me = this,data = me.getBallData(),
				i = 0,len = data.length,row,
				_tempRow = [],
				j = 0,len2 = 0,
				result = [],
				result2 = [],
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
						me.isBallsComplete = true;
						//需要计算组合则推入结果
						if(!isGetNum){
							result[i].push(j);
						}
						rowNum++;
					}
				}
				//计算注数
				total *= rowNum;
			}
			
			//返回注数
			if(isGetNum){
				return total;
			}
			
			if(me.isBallsComplete){
				//组合结果
				for(i = 0,len = result.length;i < len;i++){
					for(j = 0,len2 = result[i].length;j < len2;j++){
						result2.push([result[i][j]]);
					}
				}
				return result2;
			}else{
				return [];
			}	
		},
		//检测选球是否完整，是否能形成有效的投注
		//并设置 isBallsComplete
		// PhoenixKM : 20170602 Fri 15:25:53 GameMethod.js 內有上層方法, 此為特化覆寫方法, 視需要覆寫
		// 這邊使用的情況是 , 省去後端重工這個部分, 當然前提是"如果計算正確" , 可使用 特定 key 加密(工) , 後端只需對特定值 解(求)密(值) , 確定是經過"正常程序"計算出來的值
		checkBallIsComplete: function () {
			var me = this,
				ball = me.getBallData()[0],
				i = 0,
				len = ball.length,
				num = 0;
			for (; i < len; i++) {
				if (ball[i] > 0) {
					num++;
				}
			}
			if (num >= 1) {
				return me.isBallsComplete = true;
			}
			return me.isBallsComplete = false;
		},
		// PhoenixKM : 20170602 在投注項顯示的方式 计算注数覆写方法 ****重要****
		makePostParameter:function(data, order){
			var me = this,
				result = [],
				data = order['original'],
				i = 0;
			for (; i < data.length; i++) {
				var kdata = data[i];
                saveArray = [];
				for(var k=0; k< kdata.length;k++){
					if(Number(kdata[k]) < 10){
						 saveArray.push('0' + kdata[k]);
					 }else{
					 	saveArray.push(kdata[k]);
					 }
				}

				result = result.concat(saveArray.join(' '));
			}
			return result.join(' , ');
		},
		editSubmitData:function(data){
			var rows = data['ball'].split('|'),
				i = 0,
				len = rows.length,
				j = 0,
				len2,
				cells;
			for(i = 0; i < len; i++){
				cells = rows[i].split('-');
				len2 = cells.length;
				for(j = 0; j < len2; j++){
					if(cells[j] != ''){
						cells[j] = Number(cells[j]) - 1;
					}
				}
				rows[i] = cells.join('');
			}
			data['ball'] = rows.join('|');
		},
		setBallData: function(x, y, value) {
			var me = this,
				data = me.getBallData();
			if(y == 0){
				return;
			}
			me.fireEvent('beforeSetBallData', x, y, value);
			if (x >= 0 && x < data.length && y >= 0) {
				data[x][y] = value;
			}
			me.fireEvent('afterSetBallData', x, y, value);
		},
		// PhoenixKM : 20170603 Sat 21:16:01 覆寫 產生隨機樹的起始值.
        createRandomNum: function() {
            var me = this,
                current = [],
                len = me.getBallData().length,
                rowLen = me.getBallData()[0].length-1;
            //随机数
            for (var k = 0; k < len; k++) {
                current[k] = [Math.floor(Math.random() * rowLen)+1];
                current[k].sort(function(a, b) {
                    return a > b ? 1 : -1;
                });
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
	$.each([0,'01','02','03','04','05','06','07','08','09',10], function (i) {
		if(i == 0){
			html_row.push('<li style="display:none"><a href="javascript:void(0);" class="ball-number">' + this + '</a></li>');
		}else{
			html_row.push('<li><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + '</a></li>');
		}
	});
	html_row.push('</ul>');
	html_row.push('<div class="ball-control">');
	html_row.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=all" href="javascript:void(0);">' + translate.Whole + '</a>');
	html_row.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=big" href="javascript:void(0);">' + translate.Big + '</a>');
	html_row.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=small" href="javascript:void(0);">' + translate.Small + '</a>');
	html_row.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=odd" href="javascript:void(0);">' + translate.Odd + '</a>');
	html_row.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=even" href="javascript:void(0);">' + translate.Even + '</a>');
	html_row.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=none" href="javascript:void(0);">' + translate.Clear + '</a>');
	html_row.push('</div>');
	html_row.push('</li>');
	var html_bottom = [];
	html_bottom.push('</ul>');
	html_bottom.push('</div>');
	//拼接所有
	var html_all = [], rowStr = html_row.join('');
	html_all.push(html_head.join(''));
	$.each([translate.冠军], function (i) {
		html_all.push(rowStr.replace(/<#=title#>/g, this).replace(/<#=row#>/g, i));
	});
	html_all.push(html_bottom.join(''));




	//继承GameMethod
	var Main = host.Class(pros, GameMethod);
	Main.defConfig = defConfig;
	//将实例挂在游戏管理器实例上
	SSCBJPK10[defConfig.name] = new Main();

})(phoenix, phoenix.GameMethod);