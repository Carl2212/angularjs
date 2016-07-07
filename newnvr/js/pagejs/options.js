//参数
var defaultLang = 'cn';
//测试参数
var test_ip = '172.18.194.203';
var test_user = 'admin';

function InitOption() {
	//语言初始化
	langJs=$.cookies.get('lang') || defaultLang;
	$.cookies.set('lang', langJs, {'hoursToLive': 24 * 365});

	$.getScript("./lang/"+langJs+".js",function(){
		InitLang();
	});
}

function InitLang() {
	$("[data-id=system]").text(lang.system);
	$("[data-id=baseOptions]").text(lang.baseOptions);
	$("[data-id=localNet]").text(lang.localNet);
	$("[data-id=userControl]").text(lang.userControl);
	$("[data-id=default_email]").text(lang.default_email);
	$("[data-id=default_ftp]").text(lang.default_ftp);
	$("[data-id=default_ddns]").text(lang.default_ddns);
	$("[data-id=default_p2p]").text(lang.default_p2p);
	$("[data-id=default_upnp]").text(lang.default_upnp);
	$("[data-id=default_cloud]").text(lang.default_cloud);
	$("[data-id=default_pppoe]").text(lang.default_pppoe);
	$("[data-id=channel]").text(lang.channel);
	$("[data-id=optionremote]").text(lang.optionremote);
	$("[data-id=optionencodeparam]").text(lang.optionencodeparam);
	$("[data-id=motionDetecting]").text(lang.motionDetecting);
	$("[data-id=video]").text(lang.video);
	$("[data-id=timeOption]").text(lang.timeOption);
	$("[data-id=optionptzset]").text(lang.optionptzset);
	$("[data-id=optiondefault]").text(lang.optiondefault);
	$("[data-id=systemSet]").text(lang.systemSet);
	$("[data-id=default_disk]").text(lang.optiondiskmanag);
	$("[data-id=optionupgrade]").text(lang.optionupgrade);
	$("[data-id=optionrecset]").text(lang.optionrecset);
	$("[data-id=optionloginfo]").text(lang.optionloginfo);
	$("[data-id=setTimeRestart]").text(lang.setTimeRestart);
	$("[data-id=optionverinfo]").text(lang.optionverinfo);
	$("[data-id=optionstorage]").text(lang.optionstorage);
	$("[data-id=optionexception]").text(lang.optionexception);
}



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

