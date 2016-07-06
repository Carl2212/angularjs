var cursel = 0;
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
	getselectoption(9);
	load_ptzset_setting(0);

	$("#getptzserialchannel").change(function(){
		var index = $(this).val();
		if(index>=0)
		{
			if(index != cursel)
			{
				load_ptzset_setting($(this).val());
				cursel = index;
			}
		}
	});
    //保存
    $("#ptzset_save").click(function(){
		ptzset_save();
    });
	

})


function getselectoption(num)
{

	$("#getptzserialchannel").children('option[value="1"]').wrap('<span>').hide();
	$("#getptzserialchannel").children('option[value="2"]').wrap('<span>').hide();
	$("#getptzserialchannel").children('option[value="3"]').wrap('<span>').hide();
	$("#getptzserialchannel").children('option[value="4"]').wrap('<span>').hide();
	$("#getptzserialchannel").children('option[value="5"]').wrap('<span>').hide();
	$("#getptzserialchannel").children('option[value="6"]').wrap('<span>').hide();
	$("#getptzserialchannel").children('option[value="7"]').wrap('<span>').hide();
	$("#getptzserialchannel").children('option[value="8"]').wrap('<span>').hide();
	$("#getptzserialchannel").children('option[value="9"]').wrap('<span>').hide();
	$("#getptzserialchannel").children('option[value="10"]').wrap('<span>').hide();
	$("#getptzserialchannel").children('option[value="11"]').wrap('<span>').hide();
	$("#getptzserialchannel").children('option[value="12"]').wrap('<span>').hide();
	$("#getptzserialchannel").children('option[value="13"]').wrap('<span>').hide();
	$("#getptzserialchannel").children('option[value="14"]').wrap('<span>').hide();
	$("#getptzserialchannel").children('option[value="15"]').wrap('<span>').hide();
	$("#getptzserialchannel").children('option[value="16"]').wrap('<span>').hide();
	$("#getptzserialchannel").children('option[value="17"]').wrap('<span>').hide();
	$("#getptzserialchannel").children('option[value="18"]').wrap('<span>').hide();
	$("#getptzserialchannel").children('option[value="19"]').wrap('<span>').hide();
	$("#getptzserialchannel").children('option[value="20"]').wrap('<span>').hide();
	$("#getptzserialchannel").children('option[value="21"]').wrap('<span>').hide();
	$("#getptzserialchannel").children('option[value="22"]').wrap('<span>').hide();
	$("#getptzserialchannel").children('option[value="23"]').wrap('<span>').hide();
	$("#getptzserialchannel").children('option[value="24"]').wrap('<span>').hide();
	$("#getptzserialchannel").children('option[value="0"]').wrap('<span>').hide();
	switch (num)
	{
		case 4:
		{
			$("#getptzserialchannel").children("span").children('option[value="0"]').unwrap();
			$("#getptzserialchannel").children("span").children('option[value="1"]').unwrap();
			$("#getptzserialchannel").children("span").children('option[value="2"]').unwrap();
			$("#getptzserialchannel").children("span").children('option[value="3"]').unwrap();


			$('#getptzserialchannel option[value="0"]').show();
			$('#getptzserialchannel option[value="1"]').show();
			$('#getptzserialchannel option[value="2"]').show();
			$('#getptzserialchannel option[value="3"]').show();

		}
			break;
		case 9:
		{
			$("#getptzserialchannel").children("span").children('option[value="0"]').unwrap();
			$("#getptzserialchannel").children("span").children('option[value="1"]').unwrap();
			$("#getptzserialchannel").children("span").children('option[value="2"]').unwrap();
			$("#getptzserialchannel").children("span").children('option[value="3"]').unwrap();
			$("#getptzserialchannel").children("span").children('option[value="4"]').unwrap();
			$("#getptzserialchannel").children("span").children('option[value="5"]').unwrap();
			$("#getptzserialchannel").children("span").children('option[value="6"]').unwrap();
			$("#getptzserialchannel").children("span").children('option[value="7"]').unwrap();
			$("#getptzserialchannel").children("span").children('option[value="8"]').unwrap();


			$('#getptzserialchannel option[value="0"]').show();
			$('#getptzserialchannel option[value="1"]').show();
			$('#getptzserialchannel option[value="2"]').show();
			$('#getptzserialchannel option[value="3"]').show();
			$('#getptzserialchannel option[value="4"]').show();
			$('#getptzserialchannel option[value="5"]').show();
			$('#getptzserialchannel option[value="6"]').show();
			$('#getptzserialchannel option[value="7"]').show();
			$('#getptzserialchannel option[value="8"]').show();

		}
			break;
		case 25:
		{
			$("#getptzserialchannel").children("span").children('option[value="0"]').unwrap();
			$("#getptzserialchannel").children("span").children('option[value="1"]').unwrap();
			$("#getptzserialchannel").children("span").children('option[value="2"]').unwrap();
			$("#getptzserialchannel").children("span").children('option[value="3"]').unwrap();
			$("#getptzserialchannel").children("span").children('option[value="4"]').unwrap();
			$("#getptzserialchannel").children("span").children('option[value="5"]').unwrap();
			$("#getptzserialchannel").children("span").children('option[value="6"]').unwrap();
			$("#getptzserialchannel").children("span").children('option[value="7"]').unwrap();
			$("#getptzserialchannel").children("span").children('option[value="8"]').unwrap();

			$("#getptzserialchannel").children("span").children('option[value="9"]').unwrap();
			$("#getptzserialchannel").children("span").children('option[value="10"]').unwrap();
			$("#getptzserialchannel").children("span").children('option[value="11"]').unwrap();
			$("#getptzserialchannel").children("span").children('option[value="12"]').unwrap();
			$("#getptzserialchannel").children("span").children('option[value="13"]').unwrap();
			$("#getptzserialchannel").children("span").children('option[value="14"]').unwrap();
			$("#getptzserialchannel").children("span").children('option[value="15"]').unwrap();
			$("#getptzserialchannel").children("span").children('option[value="16"]').unwrap();
			$("#getptzserialchannel").children("span").children('option[value="17"]').unwrap();

			$("#getptzserialchannel").children("span").children('option[value="18"]').unwrap();
			$("#getptzserialchannel").children("span").children('option[value="19"]').unwrap();
			$("#getptzserialchannel").children("span").children('option[value="20"]').unwrap();
			$("#getptzserialchannel").children("span").children('option[value="21"]').unwrap();
			$("#getptzserialchannel").children("span").children('option[value="22"]').unwrap();
			$("#getptzserialchannel").children("span").children('option[value="23"]').unwrap();
			$("#getptzserialchannel").children("span").children('option[value="24"]').unwrap();


			$('#getptzserialchannel option[value="0"]').show();
			$('#getptzserialchannel option[value="1"]').show();
			$('#getptzserialchannel option[value="2"]').show();
			$('#getptzserialchannel option[value="3"]').show();
			$('#getptzserialchannel option[value="4"]').show();
			$('#getptzserialchannel option[value="5"]').show();
			$('#getptzserialchannel option[value="6"]').show();
			$('#getptzserialchannel option[value="7"]').show();
			$('#getptzserialchannel option[value="8"]').show();
			$('#getptzserialchannel option[value="9"]').show();
			$('#getptzserialchannel option[value="10"]').show();
			$('#getptzserialchannel option[value="11"]').show();
			$('#getptzserialchannel option[value="12"]').show();
			$('#getptzserialchannel option[value="13"]').show();
			$('#getptzserialchannel option[value="14"]').show();
			$('#getptzserialchannel option[value="15"]').show();
			$('#getptzserialchannel option[value="16"]').show();
			$('#getptzserialchannel option[value="17"]').show();
			$('#getptzserialchannel option[value="18"]').show();
			$('#getptzserialchannel option[value="19"]').show();
			$('#getptzserialchannel option[value="20"]').show();
			$('#getptzserialchannel option[value="21"]').show();
			$('#getptzserialchannel option[value="22"]').show();
			$('#getptzserialchannel option[value="23"]').show();
			$('#getptzserialchannel option[value="24"]').show();
		}
			break;
		default:
			break;
	}
}

function ptzset_save()
{
	var str="";
	str = str + "&setptzserialchannel=";
	str = str + $("[matchval='getptzserialchannel']").val();

	str = str + "&setptzserialnnprotocol=";
	str = str + $("[matchval='getptzserialnnprotocol']").val();

	str = str + "&setptzserialnaddr=";
	str = str + $("[matchval='getptzserialnaddr']").val();

	str = str + "&setptzserialnbaudrate=";
	str = str + $("[matchval='getptzserialnbaudrate']").val();

	str = str + "&setptzserialndatabit=";
	str = str + $("[matchval='getptzserialndatabit']").val();

	str = str + "&setptzserialnstopbit=";
	str = str + $("[matchval='getptzserialnstopbit']").val();

	str = str + "&setptzserialnchecktype=";
	str = str + $("[matchval='getptzserialnchecktype']").val();

    var str1 = "../vb.htm?"+str;

    save_val(str1,0,0);


}


function load_ptzset_setting(num)
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

	XMLHttpRequestObject.open("GET", "../vb.htm?getptzserialchannel="+num+"&getptzserialnnprotocol&getptzserialnaddr&getptzserialnbaudrate&getptzserialndatabit&getptzserialnstopbit&getptzserialnchecktype",true,loginUser,loginpsw);
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
				//alert(str);
				split_span_val_type2(str);

	            //src_rtspport = 1*$("[matchval='rtspserverport']").val();
			}
	    }
	}	
}

