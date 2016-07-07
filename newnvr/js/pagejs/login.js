
//参数
var defaultLang = 'cn'; //默认语言
var src_httpport = 0;
var src_ip = "";
var src_rtspport = 0;
var src_dhcp = false;
var encode_user = '';
var get_url_vb = 'http://%ip/vb.htm?setloginpro&setlogin=%login&setloginip=%ip';
var get_url_ini = 'http://%ip/ini.htm';


//使用设备登陆
var ip=window.location.href.split('/')[2].split(':')[0];
var port='80';
var tmpArr=window.location.href.split(':');
if(tmpArr[2]){
	port=tmpArr[2];
}
var test_ip = '172.18.194.203';
var test_user = 'admin';

function Initlogin() {
	//语言下拉菜单初始化
	langJs=$.cookies.get('lang') || defaultLang;
	$('#lang .dval').text($("[data-value="+langJs+"]").text());

	//语言下拉菜单选择
	$(".langsel").on("click",function(){
		$.cookies.set('lang', $(this).attr("data-value"),{'hoursToLive':24*365});
		window.location.reload();
	});
	$.getScript("./lang/"+langJs+".js",function(){
		InitLang();
		$(document).keyup(function(e){
			if(e.keyCode == 13){
				$("#loginBtn").click();
			}
		});
		var username = $.cookies.get("userName");
		var pwd = $.cookies.get("pwd");
		if(username && pwd) {
			$("#loginBtn").click();
		}
	});
}
$("#loginBtn").on("click",function(){
	//判断用户名密码是否空 格式等
	//用户名密码加密
	var username = $.cookies.get('userName') || $('#userName').val();
	var pwd = $.cookies.get('pwd') || $('#pwd').val();

	encode_user = Base64.encode(username + ":" + pwd);
	$.ajax({
		type:"GET",
		url:get_url_ini.replace(/\%ip/g,test_ip),
		beforeSend : function(xhr){
			xhr.setRequestHeader("If-Modifined-Since",0);
			xhr.setRequestHeader("Authorization","Basic "+encode_user);
		},
		dataType :'text/html',
		complete : function(xhr,textStatus){
			if(xhr.status == 200) {
				var str = xhr.responseText;
				var str_sub = str.split("<br>");

				var str_sub_sub = str_sub[1].split("netmask=")[1];

				$.cookies.set('netmask',str_sub[1].split("netmask=")[1],{'hoursToLive':24*7});
				$.cookies.set('gateway', str_sub[2].split("gateway=")[1],{'hoursToLive':24*7});

				$.cookies.set('getsyschannum', str_sub[21].split("getsyschannum=")[1],{'hoursToLive':24*7});

				$.cookies.set('rePwd', true,{'hoursToLive':24*7});
				$.cookies.set('userName', $('#userName').val(),{'hoursToLive':24*7});
				$.cookies.set('pwd', $('#pwd').val(),{'hoursToLive':24*7});

				$.cookies.set('lang',$('#lang').val(),{'hoursToLive':24*7});
				window.location.href='index.html';
			}else{
				alert(lang.alertLoginErr);
			}
		}
	});
});

function InitLang() {
	$("#loginBtn").text( lang.loginBtn);
	$.cookies.get('userName') ? $('#userName').val($.cookies.get('userName')) : $('#userName').attr("placeholder",lang.userName);
	$.cookies.get('pwd') ? $('#pwd').val($.cookies.get('pwd')) : $('#pwd').attr("placeholder",lang.pwd);
}


//判断系统
function detectOS() {
	var sUserAgent = navigator.userAgent;
	var isWin = (navigator.platform == "Win32") || (navigator.platform == "Windows");
	var isMac = (navigator.platform == "Mac68K") || (navigator.platform == "MacPPC") || (navigator.platform == "Macintosh") || (navigator.platform == "MacIntel");
	if (isMac)
	{
		return "Mac";
	}
	var isUnix = (navigator.platform == "X11") && !isWin && !isMac;
	if (isUnix) return "Unix";
	var isLinux = (String(navigator.platform).indexOf("Linux") > -1);

	var bIsAndroid = sUserAgent.toLowerCase().match(/android/i) == "android";
	if (isLinux) {
		if(bIsAndroid) return "Android";
		else return "Linux";
	}
	if (isWin) {
		return "win"
	}
	return "other";
}



//javaScript如何监听浏览器关闭事件
window.onbeforeunload = onclose;
function onclose() {

}

