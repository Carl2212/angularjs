var videomode = 0;
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
	load_deviceset_setting();

    //保存
    $("#device_save").click(function(){
		device_save();
    });
})


function device_save()
{
	var str="setuser=";
	str = str + loginUser;
	str = str + "&setdevname=";
	str = str + $("[matchval='getdevname']").val();

	str = str + "&setlanguage=";
	str = str + $("[matchval='getlanguage']").val();

	str = str + "&setrecyclerecord=";
	str = str + $("[matchval='getrecyclerecord']").val();

	str = str + "&setdrvid=";
	str = str + $("[matchval='getdrvid']").val();//$("[matchval='getdrvid']").val();

	str = str + "&setvideomode=";
	str = str + '0';

	str = str + "&getvideomode=";
	str = str + $("[matchval='getvideomode']").val();

	str = str + "&setstandbytime=";
	str = str + $("[matchval='getstandbytime']").val();


    var str1 = "../vb.htm?"+str;

    save_val(str1,12,0);


}


function load_deviceset_setting()
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

	XMLHttpRequestObject.open("GET", "../ini.htm",true,loginUser,loginpsw);
	XMLHttpRequestObject.setRequestHeader("If-Modified-Since","0");
	XMLHttpRequestObject.send(null);

	XMLHttpRequestObject.onreadystatechange = function()
	{
		if(XMLHttpRequestObject.readyState == 4)
		{
			if(XMLHttpRequestObject.status == 200)
			{
				var str = XMLHttpRequestObject.responseText;
				videomode = $("[matchval='getvideomode']").val();
				split_span_val(str);
			}
		}
	}
}

