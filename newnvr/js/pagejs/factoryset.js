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

	//初始操作
	$("#chdefault_all").click(function(){

		$("#chdefault_common").click();
		$("#chdefault_user").click();
		$("#chdefault_channel").click();
		$("#chdefault_record").click();
		$("#chdefault_net").click();
		$("#chdefault_motion").click();
		$("#chdefault_display").click();
		$("#chdefault_liveview").click();
		$("#chdefault_ddns").click();
		$("#chdefault_email").click();
		$("#chdefault_encode").click();


	});


	$("#default_save").click(function(){
		var str="setuser=";
		str = str + loginUser;
		if(!$("#chdefault_factory").is(":checked"))
		{
			str = str + "&setdefaultrecord=";
			if($("#chdefault_record").is(":checked"))
			{
				str = str +1;
			}
			else
			{
				str = str +0;
			}

			str=str + "&setdefaultnet=";
			if($("#chdefault_net").is(":checked"))
			{
				str = str +1;
			}
			else
			{
				str = str +0;
			}

			str = str + "&setdefaultchannel=";
			if($("#chdefault_channel").is(":checked"))
			{
				str = str +1;
			}
			else
			{
				str = str +0;
			}

			str=str + "&setdefaultcommond=";
			if($("#chdefault_common").is(":checked"))
			{
				str = str +1;
			}
			else
			{
				str = str +0;
			}

			str = str + "&setdefaultuser=";
			if($("#chdefault_user").is(":checked"))
			{
				str = str +1;
			}
			else
			{
				str = str +0;
			}

			str = str + "&setdefaultalarmin=";
			str = str +0;



			str = str + "&setdefaultsmtp=";
			if($("#chdefault_email").is(":checked"))
			{
				str = str +1;
			}
			else
			{
				str = str +0;
			}

			str = str + "&setdefaultmotion=";
			if($("#chdefault_motion").is(":checked"))
			{
				str = str +1;
			}
			else
			{
				str = str +0;
			}

			str = str + "&setdefaultddns=";
			if($("#chdefault_ddns").is(":checked"))
			{
				str = str +1;
			}
			else
			{
				str = str +0;
			}

			str = str + "&setdefaultpreview=";
			if($("#chdefault_liveview").is(":checked"))
			{
				str = str +1;
			}
			else
			{
				str = str +0;
			}

			str = str + "&setdefaultdisplay=";
			if($("#chdefault_display").is(":checked"))
			{
				str = str +1;
			}
			else
			{
				str = str +0;
			}

			str = str + "&setdefaultencode=";
			if($("#chdefault_encode").is(":checked"))
			{
				str = str +1;
			}
			else
			{
				str = str +0;
			}

			str = str + "&submitdefaultcfg=1";
		}
		else
		{
			str = str + "&setdefaultfactory=";
			if($("#chdefault_factory").is(":checked"))
			{
				str = str +1;
			}
			else
			{
				str = str +0;
			}

			str = str + "&submitdefaultcfg=1";
		}

		var str1 = "../vb.htm?"+str;
		save_val(str1,14,0);
	});

})




