/*参数params*/
var defaultLang = 'cn';

/*初始化js*/
function Initindex() {
	$(".menu_items").on("click",function(e){
		$(this).addClass('selected').siblings(".selected").removeClass("selected");
	});



	//iframe高度
	$("iframe1").height($(window).height - 80);
}



if($.cookies.get('userName')) {
	loginUser = $.cookies.get('userName');
}
if($.cookies.get('pwd')) {
	loginpsw = $.cookies.get('pwd');
}
var langJs='en';

if($.cookies.get('lang')){
	langJs=$.cookies.get('lang');
}

var selchannel = 0; //编码设置选中
document.write("<script src='./lang/"+langJs+".js'><\/script>");

var plugin = null;

//javaScript如何监听浏览器关闭事件
window.onbeforeunload = onclose;
function onclose() {

}

function logout(){
	window.location.href='login.html';
}



function loginPlay(){
	$('#user_name').text(loginUser);

	//var ret = plugin.StartRealplay("172.18.194.31","80","Admin","1234");
	//alert(plugin.queryAllKey());
}





function reload(){
	window.location.href=window.location.href;
}


function modeAlert(){
	$allDiv=$('<div class="all" style="z-index:9999; position:absolute; top:0px; left:0px; right:0px; bottom:0px; background-color:#000;"></div>');

	$('body').append($allDiv);

	$allDiv.css('width',$(window).width()+'px')
		.css('height',document.body.scrollHeight+'px')
		.css("opacity", 0.75);

	$waitDiv=$('<div id="waitBlock" style="z-index:10000;">\
    	<div class="progressOuter" style="z-index:10000;">\
			<div class="progressInner" style="z-index:10000;"></div>\
			<div class="progressText" style="top:0px; left:0px; right:0px; bottom:0px; width: 362px; text-align: center; line-height: 20px; position: absolute; z-index:100000;">'+lang.optionsLoading+'...</div>\
		</div></div>');

	$('body').append($waitDiv);

	setCenter($waitDiv);

	waitOne();
}

function waitOne(){
	var $progressInner=$('.progressInner');
	$progressInner.width($progressInner.width()+3);
	if($progressInner.width()<362){
		setTimeout('waitOne()',1000);
	}else{
		window.location.href='http://'+ip+':'+port+'/';
	}
}

function setCenter($div){
	var left=($(window).width()-$div.width())/2;
	var top=($(window).height()-$div.height())/2+$(document).scrollTop();
	$div.css('left',left);
	$div.css('top',top);
}

//function detectOS() {
//	var sUserAgent = navigator.userAgent;
//
//	var isWin = (navigator.platform == "Win32") || (navigator.platform == "Windows");
//	var isMac = (navigator.platform == "Mac68K") || (navigator.platform == "MacPPC") || (navigator.platform == "Macintosh") || (navigator.platform == "MacIntel");
//	if (isMac)
//	{
//		$("#pluginDiv").html(" <object style='z-index: 10;' id='plugin' type='application/x-herospeed-agraccess-plugin'> <param name='onload' value='pluginLoaded' /> </object>");
//		return "Mac";
//	}
//	var isUnix = (navigator.platform == "X11") && !isWin && !isMac;
//	if (isUnix) return "Unix";
//	var isLinux = (String(navigator.platform).indexOf("Linux") > -1);
//
//	var bIsAndroid = sUserAgent.toLowerCase().match(/android/i) == "android";
//	if (isLinux) {
//		if(bIsAndroid) return "Android";
//		else return "Linux";
//	}
//	if (isWin) {
//		$("#pluginDiv").html(" <object style='z-index: 10;' id='plugin' type='application/x-lsnetclientctl'> <param name='onload' value='pluginLoaded' /> </object>");
//		//	alert("hello");
//		return "win"
//	}
//	return "other";
//}
//detectOS();

//右下角显示提示语
function closeDiv(){
	if(document.getElementById('PcPoPmarket')==null)return;
	document.getElementById('PcPoPmarket').style.display = 'none';
}

function save2(save){
	document.getElementById('savelabel').innerText=save;
	document.getElementById('PcPoPmarket').style.display = 'block';
	if(document.getElementById("PcPoPmarket")!=null)
	{
		setTimeout("closeDiv();",2000);
	}
}
function setTitle(title)
{
	$(document).attr("title",title);
}

function setPlugin(left,top,width,height){
	var $iframe1=$('#iframe1');
	var left1=$iframe1.offset().left;
	var top1=$iframe1.offset().top;

	$('#pluginDiv').css('width',width).css('height',height).css('left',left+left1).css('top',top+top1);
	$('#plugin').css('width',width).css('height',height);
	//if(detectOS() == "Mac")
	//{
	//	if(browserCfg.firefox)
	//	{
	//		startview(streamsel);
	//	}
	//}
	//       	startview(streamsel);
}

$(function(){
	plugin = document.getElementById('plugin');
	var $links=$('.mainList a');
	$links.click(function(){
		$('.current').removeClass('current');
		$(this).addClass('current');
	});


});


