var cursel = 0;

function InitConfig(){
	///////设置通道数
	InitFtpsChedchn();

	getselectoption(channelnum);
	load_motion_setting(1);

    $("#getmotiondetchan").change(function(){
			load_motion_setting($(this).val());
    });
    //////保存
    $("#motion_save").click(function(){
		motion_save();
    });

};

//获取通道数，并在下拉菜单中显示
function getselectoption(num)
{

	$("#getmotiondetchan").children('option[value="1"]').wrap('<span>').hide();
	$("#getmotiondetchan").children('option[value="2"]').wrap('<span>').hide();
	$("#getmotiondetchan").children('option[value="3"]').wrap('<span>').hide();
	$("#getmotiondetchan").children('option[value="4"]').wrap('<span>').hide();
	$("#getmotiondetchan").children('option[value="5"]').wrap('<span>').hide();
	$("#getmotiondetchan").children('option[value="6"]').wrap('<span>').hide();
	$("#getmotiondetchan").children('option[value="7"]').wrap('<span>').hide();
	$("#getmotiondetchan").children('option[value="8"]').wrap('<span>').hide();
	$("#getmotiondetchan").children('option[value="9"]').wrap('<span>').hide();
	$("#getmotiondetchan").children('option[value="10"]').wrap('<span>').hide();
	$("#getmotiondetchan").children('option[value="11"]').wrap('<span>').hide();
	$("#getmotiondetchan").children('option[value="12"]').wrap('<span>').hide();
	$("#getmotiondetchan").children('option[value="13"]').wrap('<span>').hide();
	$("#getmotiondetchan").children('option[value="14"]').wrap('<span>').hide();
	$("#getmotiondetchan").children('option[value="15"]').wrap('<span>').hide();
	$("#getmotiondetchan").children('option[value="16"]').wrap('<span>').hide();
	$("#getmotiondetchan").children('option[value="17"]').wrap('<span>').hide();
	$("#getmotiondetchan").children('option[value="18"]').wrap('<span>').hide();
	$("#getmotiondetchan").children('option[value="19"]').wrap('<span>').hide();
	$("#getmotiondetchan").children('option[value="20"]').wrap('<span>').hide();
	$("#getmotiondetchan").children('option[value="21"]').wrap('<span>').hide();
	$("#getmotiondetchan").children('option[value="22"]').wrap('<span>').hide();
	$("#getmotiondetchan").children('option[value="23"]').wrap('<span>').hide();
	$("#getmotiondetchan").children('option[value="24"]').wrap('<span>').hide();
	$("#getmotiondetchan").children('option[value="25"]').wrap('<span>').hide();
	switch (num)
	{
		case 4:
		{
			$("#getmotiondetchan").children("span").children('option[value="1"]').unwrap();
			$("#getmotiondetchan").children("span").children('option[value="2"]').unwrap();
			$("#getmotiondetchan").children("span").children('option[value="3"]').unwrap();
			$("#getmotiondetchan").children("span").children('option[value="4"]').unwrap();
			$('#getmotiondetchan option[value="1"]').show();
			$('#getmotiondetchan option[value="2"]').show();
			$('#getmotiondetchan option[value="3"]').show();
			$('#getmotiondetchan option[value="4"]').show();
		}
			break;
		case 8:
		{
			$("#getmotiondetchan").children("span").children('option[value="1"]').unwrap();
			$("#getmotiondetchan").children("span").children('option[value="2"]').unwrap();
			$("#getmotiondetchan").children("span").children('option[value="3"]').unwrap();
			$("#getmotiondetchan").children("span").children('option[value="4"]').unwrap();
			$("#getmotiondetchan").children("span").children('option[value="5"]').unwrap();
			$("#getmotiondetchan").children("span").children('option[value="6"]').unwrap();
			$("#getmotiondetchan").children("span").children('option[value="7"]').unwrap();
			$("#getmotiondetchan").children("span").children('option[value="8"]').unwrap();

			$('#getmotiondetchan option[value="1"]').show();
			$('#getmotiondetchan option[value="2"]').show();
			$('#getmotiondetchan option[value="3"]').show();
			$('#getmotiondetchan option[value="4"]').show();
			$('#getmotiondetchan option[value="5"]').show();
			$('#getmotiondetchan option[value="6"]').show();
			$('#getmotiondetchan option[value="7"]').show();
			$('#getmotiondetchan option[value="8"]').show();
		}
			break;
		case 9:
		{
			$("#getmotiondetchan").children("span").children('option[value="1"]').unwrap();
			$("#getmotiondetchan").children("span").children('option[value="2"]').unwrap();
			$("#getmotiondetchan").children("span").children('option[value="3"]').unwrap();
			$("#getmotiondetchan").children("span").children('option[value="4"]').unwrap();
			$("#getmotiondetchan").children("span").children('option[value="5"]').unwrap();
			$("#getmotiondetchan").children("span").children('option[value="6"]').unwrap();
			$("#getmotiondetchan").children("span").children('option[value="7"]').unwrap();
			$("#getmotiondetchan").children("span").children('option[value="8"]').unwrap();
			$("#getmotiondetchan").children("span").children('option[value="9"]').unwrap();

			$('#getmotiondetchan option[value="1"]').show();
			$('#getmotiondetchan option[value="2"]').show();
			$('#getmotiondetchan option[value="3"]').show();
			$('#getmotiondetchan option[value="4"]').show();
			$('#getmotiondetchan option[value="5"]').show();
			$('#getmotiondetchan option[value="6"]').show();
			$('#getmotiondetchan option[value="7"]').show();
			$('#getmotiondetchan option[value="8"]').show();
			$('#getmotiondetchan option[value="9"]').show();
		}
			break;
		case 25:
		{
			$("#getmotiondetchan").children("span").children('option[value="1"]').unwrap();
			$("#getmotiondetchan").children("span").children('option[value="2"]').unwrap();
			$("#getmotiondetchan").children("span").children('option[value="3"]').unwrap();
			$("#getmotiondetchan").children("span").children('option[value="4"]').unwrap();
			$("#getmotiondetchan").children("span").children('option[value="5"]').unwrap();
			$("#getmotiondetchan").children("span").children('option[value="6"]').unwrap();
			$("#getmotiondetchan").children("span").children('option[value="7"]').unwrap();
			$("#getmotiondetchan").children("span").children('option[value="8"]').unwrap();

			$("#getmotiondetchan").children("span").children('option[value="9"]').unwrap();
			$("#getmotiondetchan").children("span").children('option[value="10"]').unwrap();
			$("#getmotiondetchan").children("span").children('option[value="11"]').unwrap();
			$("#getmotiondetchan").children("span").children('option[value="12"]').unwrap();
			$("#getmotiondetchan").children("span").children('option[value="13"]').unwrap();
			$("#getmotiondetchan").children("span").children('option[value="14"]').unwrap();
			$("#getmotiondetchan").children("span").children('option[value="15"]').unwrap();
			$("#getmotiondetchan").children("span").children('option[value="16"]').unwrap();
			$("#getmotiondetchan").children("span").children('option[value="17"]').unwrap();

			$("#getmotiondetchan").children("span").children('option[value="18"]').unwrap();
			$("#getmotiondetchan").children("span").children('option[value="19"]').unwrap();
			$("#getmotiondetchan").children("span").children('option[value="20"]').unwrap();
			$("#getmotiondetchan").children("span").children('option[value="21"]').unwrap();
			$("#getmotiondetchan").children("span").children('option[value="22"]').unwrap();
			$("#getmotiondetchan").children("span").children('option[value="23"]').unwrap();
			$("#getmotiondetchan").children("span").children('option[value="24"]').unwrap();
			$("#getmotiondetchan").children("span").children('option[value="25"]').unwrap();


			$('#getmotiondetchan option[value="1"]').show();
			$('#getmotiondetchan option[value="2"]').show();
			$('#getmotiondetchan option[value="3"]').show();
			$('#getmotiondetchan option[value="4"]').show();
			$('#getmotiondetchan option[value="5"]').show();
			$('#getmotiondetchan option[value="6"]').show();
			$('#getmotiondetchan option[value="7"]').show();
			$('#getmotiondetchan option[value="8"]').show();
			$('#getmotiondetchan option[value="9"]').show();
			$('#getmotiondetchan option[value="10"]').show();
			$('#getmotiondetchan option[value="11"]').show();
			$('#getmotiondetchan option[value="12"]').show();
			$('#getmotiondetchan option[value="13"]').show();
			$('#getmotiondetchan option[value="14"]').show();
			$('#getmotiondetchan option[value="15"]').show();
			$('#getmotiondetchan option[value="16"]').show();
			$('#getmotiondetchan option[value="17"]').show();
			$('#getmotiondetchan option[value="18"]').show();
			$('#getmotiondetchan option[value="19"]').show();
			$('#getmotiondetchan option[value="20"]').show();
			$('#getmotiondetchan option[value="21"]').show();
			$('#getmotiondetchan option[value="22"]').show();
			$('#getmotiondetchan option[value="23"]').show();
			$('#getmotiondetchan option[value="24"]').show();
			$('#getmotiondetchan option[value="25"]').show();

		}
			break;
		default:
			break;
	}
}

//移动侦测参数设置
function motion_save()
{

	var str="setuser=";
	str = str + loginUser;

	str = str + "&setmotiondetchan=";
	str = str +  $("[matchval='getmotiondetchan']").val();

	str = str + "&setmotiondeten=";
	if( $("[matchval='getmotiondeten']").is(":checked"))
	{
		str = str + '1';
	}
	else
	{
		str = str + '0';
	}


	str = str + "&setmotiondetbeepen=";
	if( $("[matchval='getmotiondetbeepen']").is(":checked"))
	{
		str = str + '1';
	}
	else
	{
		str = str + '0';
	}

	str = str + "&setmotiondetbeeptime=";
	str = str + $("[matchval='getmotiondetbeeptime']").val();

	str = str + "&setmotiondetrecorden=";
	if( $("[matchval='getmotiondetrecorden']").is(":checked"))
	{
		str = str + '1';
	}
	else
	{
		str = str + '0';
	}

	str = str + "&setmotiondetrecordtime=";
	str = str + $("[matchval='getmotiondetrecordtime']").val();

	str = str + "&setmotiondetsmtpen=";
	str = str + '0';

	str = str + "&setmotiondetftpen=";
	str = str + '0';


	str = str + "&setmotiondetsen=";
	switch ( $("[matchval='getmotiondetsen']").val())
	{
		case '0':
			str = str + '80';
			break;
		case '1':
			str = str + '70';
			break;
		case '2':
			str = str + '60';
			break;
		case '3':
			str = str + '50';
			break;
		case '4':
			str = str + '40';
			break;
		case '5':
			str = str + '30';
			break;
		case '6':
			str = str + '20';
			break;
	}
	str = str + "&setmotiondetres=";
	str = str + '0';

    var str1 = "../vb.htm?"+str;

    save_val(str1,0,0);


}

//获取移动侦测参数
function load_motion_setting(num)
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

	XMLHttpRequestObject.open("GET", "../vb.htm?getmotiondetchan="+num+"&getmotiondeten&getmotiondetbeepen&getmotiondetbeeptime&getmotiondetrecorden&getmotiondetrecordtime&getmotiondetsmtpen&getmotiondetftpen&getmotiondetsen&getmotiondetres",true,loginUser,loginpsw);
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

				var str_sub = str.split("OK ");

				for (var j = 0; j < str_sub.length; j++) {

					var str_sub_sub = str_sub[j].split("=");
					if ("getmotiondetsen" == str_sub_sub[0] && str_sub_sub[0] != "") {
						var getmotiondetsen = str_sub_sub[1].split("\n")[0];
						switch (getmotiondetsen)
						{
							case '80':
								$("#getmotiondetsen").val(0);
								break;
							case '70':
								$("#getmotiondetsen").val(1);
								break;
							case '60':
								$("#getmotiondetsen").val(2);
								break;
							case '50':
								$("#getmotiondetsen").val(3);
								break;
							case '40':
								$("#getmotiondetsen").val(4);
								break;
							case '30':
								$("#getmotiondetsen").val(5);
								break;
							case '20':
								$("#getmotiondetsen").val(6);
								break;
							default:
								break;
						}
					}
					if ("getmotiondetbeeptime" == str_sub_sub[0] && str_sub_sub[0] != "") {
						var getmotiondetbeeptime = str_sub_sub[1].split("\n")[0];
						if(getmotiondetbeeptime == '0')
						{
							$("#getmotiondetbeeptime").val(1);
						}
					}
				}
			}
	    }
	}	
}

