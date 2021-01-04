﻿

//模拟下拉框组件
(function(host, name, Event, $, undefined){
	var defConfig = {
		//最外层添加的class样式
		cls:'ui-simulation-select',
		//是否同时能输入
		isInput:false,
		//是否为数字型选择控件
		isNum: false,
		//是否为展示列表
		isSelectList: false,
		//对应的真实select
		realDom:'',
		//模拟select模板
		tpl:'<div class="choose-model"><div class="choose-list" style="display:none;"><#=loopItems#></div><span class="info"><input data-realvalue="<#=value#>" class="choose-input" disabled="disabled" type="text" value="<#=text#>" /></span><i class="icon-chevron-down"></i></div>',
		//数字型模版
		numTpl:'<div class="choose-model"><i class="icon-minus no_selection num-mins"></i><div class="choose-list" style="display:none;"><#=loopItems#></div><span class="info"><input data-realvalue="<#=value#>" class="choose-input" disabled="disabled" type="text" value="<#=text#>" /></span><i class="icon-plus no_selection num-plus"></i></div>',
		//数字型模版
		selectTpl:'<div class="choose-model select-list"><div class="choose-list"><#=loopItems#></div><span class="info" style="display:none"><input data-realvalue="<#=value#>" class="choose-input" disabled="disabled" type="text" value="<#=text#>"  /></span></div>',
		//单行元素模板
		itemTpl:'<a data-value="<#=value#>" href="javascript:void(0);"><#=text#></a>'
	};
	
	var pros = {
		init:function(cfg){
			var me = this;
			me.realDom = $(cfg.realDom);
			me.realDom.hide();
			me.dom = null;
			me.listDom = null;
			me.buildSelect();
		},
		bindEvent: function(){
			var me = this;

			$(document).mousedown(function(e){
				var el = e.target;
				if(!$.contains(me.dom.get(0), el)){
					me.getListDom().hide();
				}
			});
		},

		defaultBind: function(dom){
			var me = this;

			dom.click(function(e){
				var el = e.target;
				//如果是选项点击
				if(!!el.getAttribute('data-value')){
					me.setValue(el.getAttribute('data-value'));
				}
				me.getListDom().toggle();
			});
		},

		selectBind: function(dom){
			var me = this;

			dom.click(function(e){
				var el = e.target;
				//如果是选项点击
				if(!!el.getAttribute('data-value')){
					$(el).addClass('current').siblings().removeClass('current');
					me.setValue(el.getAttribute('data-value'));
				}
			});
		},

		//数字
		numBindEvent: function(dom){
			var me = this;

			dom.on('click', '.num-mins', function(e){
				me.setValue(Number(me.getValue()) - 1);
				e.preventDefault();
				host.util.clearSelection();
			});

			dom.on('click', '.num-plus', function(e){
				me.setValue(Number(me.getValue()) + 1);
				e.preventDefault();
				host.util.clearSelection();
			});

			dom.click(function(e){
				var el = e.target;
				//如果是选项点击
				if(!!el.getAttribute('data-value')){
					me.setValue(el.getAttribute('data-value'));
				}

				if($(el).hasClass('choose-input') || !!el.getAttribute('data-value')){
					me.getListDom().toggle();	
				}
			});
		},

		buildSelect:function(){
			var me = this,
				tplRender = '',
				cfg = me.defConfig,
				tpl = cfg.tpl,
				numTpl = cfg.numTpl,
				selectTpl = cfg.selectTpl,
				itemTpl = cfg.itemTpl,
				items = me.getRealDom().options,
				len = items.length,
				i = 0,
				itemStrArr = [],
				currValue = '',
				currText = '';

			for(;i < len;i++){
				itemStrArr[i] = itemTpl.replace(/<#=value#>/g, items[i].value).replace(/<#=text#>/g, items[i].text);
				if(i == me.getRealDom().selectedIndex){
					currValue = items[i].value;
					currText = items[i].text;
				}
			}

			if(cfg.isNum){
				tplRender = numTpl;
			}else if(cfg.isSelectList){
				tplRender = selectTpl;	
			}else{
				tplRender = tpl;
			}

			tpl = tplRender.replace(/<#=text#>/g, currText).replace(/<#=loopItems#>/g, itemStrArr.join(''));
			me.dom = $(tpl);
			me.dom.addClass(cfg.cls);
			me.dom.insertBefore(me.getRealDom());
			
			if(cfg.isNum){
				me.numBindEvent(me.dom);
				me.getInput().removeAttr('disabled');
				me.inputEvent();
				me.bindEvent();
			}else if(cfg.isInput){
				me.defaultBind(me.dom);	
				me.getInput().removeAttr('disabled');
				me.inputEvent();
				me.bindEvent();
			}else if(cfg.isSelectList){
				me.selectBind(me.dom);	
				me.dom.find('.choose-list a[data-value="'+currValue+'"]').addClass('current');
			}else{
				me.getInput().removeAttr('disabled').attr('readonly', 'readonly');
				me.bindEvent();
				me.defaultBind(me.dom);	
			}
			
			me.setValue(currValue);
			// console.log(me.defConfig.realDom, $(me.defConfig.realDom).size(), $('body').find('#J-trace-panel').size());			
		},
		replaceRealDomEl: function(html){
			var me = this,
				$realDom = $(me.getRealDom());

			$realDom.html(html);
		},
		//更新
		update: function(){
			var me = this;

			//重置所有元素
			me.reset();
			//重新生成DOM结构
			me.buildSelect();
		},
		getInput:function(){
			var me = this;
			return me.input || (me.input = me.dom.find('.choose-input'));
		},
		//input校验函数
		inputEvent:function(){
			
		},
		getListDom:function(){
			var me = this;
			return me.listDom || (me.listDom = me.dom.find('.choose-list'));
		},
		getRealDom:function(){
			return this.realDom[0];
		},
		setValue:function(value){
			var me = this,dom = me.getRealDom(),index = dom.selectedIndex,options = dom.options,len = options.length,i = 0,text = '';
			for(;i < len;i++){
				if(value == options[i].value){
					options[i].selected = true;
					text = options[i].text;
				}else{
					options[i].selected = false;
				}
			}
			me.getInput().attr('data-realvalue', value);
			text = text == '' ? value : text;
			me.getInput().val(text);
			me.fireEvent('change', value, text);
		},
		getValue:function(){
			//console.log(this.defConfig.realDom, $(this.defConfig.realDom).size(), $('body').find('#J-trace-panel').html())
			var me = this,dom = me.getRealDom(),index = dom.selectedIndex;
			//console.log(me.getRealDom().outerHTML, index);
			if(index == -1){
				
			}

			if(me.defConfig.isInput || me.defConfig.isNum){
				return me.getInput().attr('data-realvalue');
			}
			return dom.options[index] ? dom.options[index].value : undefined;
		},
		getText:function(){
			var dom = this.getRealDom(),index = dom.selectedIndex;
			return dom.options[index].text;
		},
		reset: function(){
			var me = this;
			me.dom.remove();
			me.dom = null;
			me.listDom = null;
			// me.input = null;
		},
		show:function(){
			this.dom.show();
		},
		hide:function(){
			this.dom.hide();
		}

	};

	var Main = host.Class(pros, Event);
		Main.defConfig = defConfig;
	host[name] = Main;


})(phoenix, "Select", phoenix.Event, jQuery);








