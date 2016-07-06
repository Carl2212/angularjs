var qrcode = '';
var qrcode2 = '';
var qrcode3 = '';
var getfreeipen =  '';
var getfreeipandurl =  '';
var getfreeipiosurl =  '';
var getp2psconnecttatus =  '';

if($.cookies.get('userName')) {
	loginUser = $.cookies.get('userName');
}
if($.cookies.get('pwd')) {
	loginpsw = $.cookies.get('pwd');
}
if($.cookies.get('lang')){
	langJs=$.cookies.get('lang');
	$.cookies.set('lang', langJs,{'hoursToLive':24*365});
}
document.write("<script src='../lang/"+langJs+".js'><\/script>");

$(document).ready(function(){
	$('#p2psave').val(lang.save);
	qrcode = new QRCode(document.getElementById("code1"), {
		width : 116,//设置宽高
		height : 116
	});
	qrcode2 = new QRCode(document.getElementById("code2"), {
		width : 116,//设置宽高
		height : 116
	});
	qrcode3 = new QRCode(document.getElementById("code3"), {
		width : 116,//设置宽高
		height : 116
	});
	load_p2p_setting();

	$("#p2psave").click(function() {

		save_p2p();
	});

})

//设置p2p参数
function save_p2p()
{
	var str="setuser=";
	str = str + loginUser;
	str = str + "&setfreeipen=";
	if( $('#enableP2p').is(":checked"))
	{
		str = str + '1';
	}
	else
	{
		str = str + '0';
	}
	str = str + "&setdanaleen=";
	str = str + 0;

	var str1 = "../vb.htm?"+str;

	save_val(str1,15,0);


}

//获取P2P参数
function load_p2p_setting()
{
	var XMLHttpRequestObject = null;
	if (window.XMLHttpRequest)
	{
		XMLHttpRequestObject = new XMLHttpRequest();
	}
	else if (window.ActiveXObject)
	{
		XMLHttpRequestObject = new ActiveXObject("Microsoft.XMLHTTP");
	}

	XMLHttpRequestObject.open("GET", "../vb.htm?\
getfreeipen&\
getfreeipandurl&\
getfreeipiosurl&\
getdanaleen&\
getdanalandurl&\
getdanaliosurl&\
getp2psconnecttatus",true,loginUser,loginpsw);
	XMLHttpRequestObject.setRequestHeader("If-Modified-Since","0");
	XMLHttpRequestObject.send(null);

	XMLHttpRequestObject.onreadystatechange = function()
	{
		if(XMLHttpRequestObject.readyState == 4)
		{
			if(XMLHttpRequestObject.status == 200)
			{
				var str = XMLHttpRequestObject.responseText;
				//split_span_val_type2(str);

				var str_sub = str.split("OK ");
				getfreeipen = get_split_span_val(str_sub,"getfreeipen");
				getfreeipandurl = get_split_span_val(str_sub,"getfreeipandurl");
				getfreeipiosurl = get_split_span_val(str_sub,"getfreeipiosurl");
				getp2psconnecttatus = get_split_span_val(str_sub,"getp2psconnecttatus");



				load_sn_setting();
			}
		}
	}
}
//获取序列号
function load_sn_setting()
{
	var XMLHttpRequestObject = null;
	if (window.XMLHttpRequest)
	{
		XMLHttpRequestObject = new XMLHttpRequest();
	}
	else if (window.ActiveXObject)
	{
		XMLHttpRequestObject = new ActiveXObject("Microsoft.XMLHTTP");
	}

	XMLHttpRequestObject.open("GET", "../vb.htm?getlongsesn",true,loginUser,loginpsw);
	XMLHttpRequestObject.setRequestHeader("If-Modified-Since","0");
	XMLHttpRequestObject.send(null);

	XMLHttpRequestObject.onreadystatechange = function()
	{
		if(XMLHttpRequestObject.readyState == 4)
		{
			if(XMLHttpRequestObject.status == 200)
			{
				var str = XMLHttpRequestObject.responseText;

				var str_sub = str.split("OK ");

				$('#sn_label').text(str_sub[1]);

				//画二维码
				qrcode.makeCode(str_sub[1]);

				qrcode2.makeCode(getfreeipandurl);

				qrcode3.makeCode(getfreeipiosurl);

				if(getfreeipen==1){
					$('#enableP2p').attr('checked','checked');
				}
				if(getp2psconnecttatus==1){
					$('#p2pState').text(lang.p2pSuccess);
				}else{
					$('#p2pState').text(lang.p2pFailure);
				}


			}
		}
	}
}
