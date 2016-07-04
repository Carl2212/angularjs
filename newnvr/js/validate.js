(function($){
	$.fn.checkMin2Max=function(options){
		return this.each(function(){
			var $this=$(this);
			var max=parseInt($this.attr('maxVal'));
			var min=parseInt($this.attr('minVal'));
			
			$this.blur(function(){
				var val=parseInt($this.val());
				if(val<min){
					val=min;
				}
				if(val>max){
					val=max;
				}
				if(val.toString()=='NaN'){
					val=0;
				}
				if(val.toString().length<2){
					val='0'+val;
				}
				$this.val(val);
			});
		});
	};
})(jQuery);
