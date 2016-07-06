//参数
var defaultLang = 'cn';

function InitConfig() {
	//语言初始化
	langJs=$.cookies.get('lang') || defaultLang;
	$.cookies.set('lang', langJs, {'hoursToLive': 24 * 365});

	$.getScript("../lang/"+langJs+".js",function(){
		InitLang();
	});
}

function InitLang() {
	$("#viewing").val(lang.viewing);
	$("#save").val(lang.save);
	$("#vedioPath").text(lang.vedioPath+' : ');
	$("#playbackPath").text(lang.playbackPath+' : ');
	$("#previewImgPath").text(lang.previewImgPath+' : ');
	$("#logPath").text(lang.logPath+' : ');
}

$(document).ready(function(){

	window.parent.parent.setPlugin(-10000,-10000,-100,-100);

	var rtJson=window.parent.parent.plugin.queryAllKey();

	rtJson=eval('({'+rtJson+'})');

	$('#getvedioPath').val(rtJson.RecordWebDisk);
	$('#getpreviewImgPath').val(rtJson.CaptureWebPath);
	$('#getplaybackPath').val(rtJson.DownloadFileWebPath);
	$('#getlogPath').val(rtJson.LogSavaPath);



	$("#vedioPath").click(function() {
		//$("#getvedioPath").val(BrowseFolder());.
		getPath('getvedioPath');
	});
	$("#playbackPath").click(function() {
		//$("#getvedioPath").val(BrowseFolder());.
		getPath('getplaybackPath');
	});
	$("#previewImgPath").click(function() {
		//$("#getvedioPath").val(BrowseFolder());.
		getPath('getpreviewImgPath');
	});

	$("#logPath").click(function() {
		//$("#getvedioPath").val(BrowseFolder());.
		getPath('getlogPath');
	});
	$("#path_save").click(function() {
		//$("#getvedioPath").val(BrowseFolder());.
		save();
	});

});


function getPath(eleId){
	var path=window.parent.parent.plugin.brwoseFolder();
	if(path!=''){
		$('#'+eleId).val(path);
	}
}


function save(){
	var RecordWebDisk=$('#getvedioPath').val().replace(/\\/g,'\\\\');
	var DownloadFileWebPath=$('#getplaybackPath').val().replace(/\\/g,'\\\\');
	var CaptureWebPath=$('#getpreviewImgPath').val().replace(/\\/g,'\\\\');
	//var CapturePlaybackWebPath=$('#playbackPath').val().replace(/\\/g,'\\\\');
	//var ClipsWebPath=$('#clipPath').val().replace(/\\/g,'\\\\');
	var LogSavaPath=$('#getlogPath').val().replace(/\\/g,'\\\\');

	window.parent.parent.plugin.addAllKey(RecordWebDisk,
		CaptureWebPath,
		DownloadFileWebPath,
		'0',
		'0',
		'0',
		'0',
		'0',
		'0',
		LogSavaPath);


	window.parent.parent.save2(lang.saved);
	<!--alert(lang.saved); -->
}
