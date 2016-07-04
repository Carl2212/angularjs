(function($){
	$.fn.myTab=function(options){
		return this.each(function(){
			//此块定义的函数和变量是object级别的
			var opts=$.extend({},$.fn.myTab.defaults,options);
			var $this=$(this);
			var $reBtns=$this.find('.resizebtn');
			var $reLine=$this.find('.resizeLine');
			var $ul=$this.find('ul');
			var $lis=$this.find('li');
			$this.find('table tr:odd').addClass('odd');
			$this.find('table tr:even').addClass('even');
			
			var countWidth=0;
			$lis.each(function(){
				countWidth+=$(this).outerWidth();
			});
			$ul.width(countWidth);
			
			
			$reBtns.each(function(tempindex){
				var $reBtn=$(this);
				var temleft=$reBtn.offset().left;
				var $li=$reBtn.parent();
				
				$reBtn.mousedown(function(){
					$('body').addClass('noselect');
					$reLine.css('height',$this.height()).css('display','block').css('left',$reBtn.position().left);
					
					$(document).mousemove(function(e){
						$reLine.css('left',e.clientX-$this.offset().left);
					});
					
					$(document).mouseup(function(e){
						var offsetLeft=e.clientX-$reBtn.offset().left;
						var newwidth=$li.width()+offsetLeft;
						
						//加最大值最小值判断
						if(newwidth<opts.minHW){
							newwidth=opts.minHW;
						}else if(newwidth>opts.maxHW){
							newwidth=opts.maxHW;
						}
						
						$li.width(newwidth);
						
						$this.find('tr').each(function(){
							var $thisspan=$(this).find('td').eq(tempindex).find('span').eq(0);
							$thisspan.width(newwidth);
						});
						
						var countWidth=0;
						$lis.each(function(){
							countWidth+=$(this).outerWidth();
						});
						$ul.width(countWidth);
						
						
						$reLine.css('display','none');
						$(document).unbind('mousemove');
						$(document).unbind('mouseup');	
						$('body').removeClass('noselect');
						
					});
					
				});
				
			});
			
		});
	};
	
	$.fn.myTab.defaults={minHW:86,maxHW:600};
})(jQuery);
