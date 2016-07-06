var cursel = 0;
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
	load_ddns_setting(0);

	$("#ddnstype").change(function(){
		var index = $(this).val();
		if(index>=0)
		{
			if(index != cursel)
			{
				load_ddns_setting($(this).val());
				cursel = index;
			}
		}
	});
    //保存
    $("#ddns_save").click(function(){
		save_ddns();
    });
	

})

function save_ddns()
{
	var str="setuser=";
	str = str + loginUser;
	str = str + "&setddnsen=";
	if( $("[matchval='getddnsen']").is(":checked"))
	{
		str = str + '1';
	}
	else
	{
		str = str + '0';
	}

	str = str + "&setddnstype=";
	str = str + $("[matchval='getddnstype']").val();

	str = str + "&setddnsintertime=";
	var intertime = $("[matchval='getddnsintertime']").val();
	if(intertime < 60)
		intertime = 60;
	str = str + String(intertime);

	str = str + "&setddnsusertype=0";

	str = str + "&setddnsdomainname=";
	str = str + $("[matchval='getddnsdomainname']").val();

	str = str + "&setddnsusername=";
	str = str + $("[matchval='getddnsusername']").val();

	str = str + "&setddnsuserpwd=";
	str = str + $("[matchval='getddnsuserpwd']").val();

    var str1 = "../vb.htm?"+str;

    save_val(str1,0,0);


}


function load_ddns_setting(num)
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

	XMLHttpRequestObject.open("GET", "../vb.htm?getddnstype="+num+"&getddnsen&getddnsintertime&getddnsusertype&getddnsdomainname&getddnsusername&getddnsuserpwd",true,loginUser,loginpsw);
	XMLHttpRequestObject.setRequestHeader("If-Modified-Since","0");
	XMLHttpRequestObject.send(null);
	
	XMLHttpRequestObject.onreadystatechange = function()
	{
	   if(XMLHttpRequestObject.readyState == 4)
	   {
			if(XMLHttpRequestObject.status == 200)
			{
				var str = XMLHttpRequestObject.responseText;
				split_span_val_type2(str);
			}
	    }
	}	
}

