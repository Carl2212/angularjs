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
	load_pppoe_setting();

    //保存
    $("#pppoe_save").click(function(){
		pppoe_save();
    });

})


function pppoe_save()
{
	var str="";

	str = str + "&setpppoeuser=";
	str = str + $("[matchval='getpppoeuser']").val();

	str = str + "&setpppoepass=";
	str = str + $("[matchval='getpppoepass']").val();


	str = str + "&setpppoeenable=";
	if( $("[matchval='getpppoeenable']").is(":checked"))
	{
		str = str + '1';
	}
	else
	{
		str = str + '0';
	}

    var str1 = "../vb.htm?"+str;

    save_val(str1,0,0);


}


function load_pppoe_setting()
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

	XMLHttpRequestObject.open("GET", "../vb.htm?getpppoeuser&getpppoepass&getpppoeenable&getpppoeip&getpppoemask",true,loginUser,loginpsw);
	XMLHttpRequestObject.setRequestHeader("If-Modified-Since","0");
	XMLHttpRequestObject.send(null);
	
	XMLHttpRequestObject.onreadystatechange = function()
	{
	   if(XMLHttpRequestObject.readyState == 4)
	   {
			if(XMLHttpRequestObject.status == 200)
			{
				var str = XMLHttpRequestObject.responseText;
				//var str_sub = str.split("<br>");
				//alert(str_sub);
				split_span_val_type2(str);

	            //src_rtspport = 1*$("[matchval='rtspserverport']").val();
			}
	    }
	}	
}

