$(function(){
	$('#sidebar .submenu').click(function(){
		if($(this).hasClass('open')){
			$(this).removeClass('open');
			$(this).find('ul').stop().animate({'height':0},500);
		}else{
			$(this).addClass('open');
			$(this).find('ul').stop().animate({'height':$(this).find('li').length*36},500);
		}
	});
	$('#qiehuan a').click(function(){
		$('.widget-content').hide();
		$('.widget-content').eq($(this).index()).show();
	});
	$('#sidebar a').click(function(){
		if($.cookie('left_li', $(this).attr('lang')))
		return true;
		else
		return false;
	});
	$("#sidebar .nav-li").each(function(i) {
        $(this).find('a').attr('lang',i);
    });
	$("#sidebar .nav-li").eq($.cookie('left_li')).addClass('active');
	$("#sidebar .nav-li").eq($.cookie('left_li')).find('ul').height('auto');
});
function removeerror(){
	$('.alert .close').triggerHandler('click');
}
function CheckAll(form){
	for (var i=0;i<form.elements.length;i++){
		var e = form.elements[i];
		if (e.name != 'chkall'){
			e.checked = form.chkall.checked;
		}
	}
}
function getSelect(form){
	var ids='';
	for (var i=0;i<form.elements.length;i++) {
		var e = form.elements[i];
		if(e.type == 'checkbox' && e.name != 'chkall' && e.name != 'chkall_box2'){
			if(e.checked) ids += e.value + ',';
		}
	}
	return ids.replace(/,$/mg, "");;
}