
//测试参数
var test_ip = '172.18.194.203';
var test_user = 'admin';


$(function(){
	var $ulA=$('#optionsContainer li a');
	$ulA.click(function(){
		$ulA.removeClass('current');
		$(this).addClass('current');
	});


	var $tagTargets=$('#optionsContainer .tagTarget');
	var $dt=$('#optionsContainer dt');
	var $dd=$('#optionsContainer dd');
	$tagTargets.click(function(){
		$dt.each(function(index){
			var $this=$dt.eq(index);
			$this.removeClass($this.attr('current'));
		});
		var $thisDt=$(this).parent();
		$thisDt.addClass($thisDt.attr('current'));
		$dd.addClass('hide');
		var $tmpA=$thisDt.next().removeClass('hide').find('a').eq(0);
		$tmpA.click();
		$('#iframeOptions').attr('src',$tmpA.attr('href'));
	});
});





function getLeft(){
	var $iframeOptions=$('#iframeOptions');
	var left2=$iframeOptions.offset().left;
	return left2;
}
function getTop(){
	var $iframeOptions=$('#iframeOptions');
	var top2=$iframeOptions.offset().top;
	return top2;
}

