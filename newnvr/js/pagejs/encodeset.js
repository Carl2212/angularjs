var cursel = 0;
var bmainreslution = false;
var nmainnum = 0;
var bsubreslution = false;
var nsubnum = 0;

function InitConfig(){

	InitFtpsChedchn();

	getselectoption(channelnum);
	//alert(window.parent.parent.selchannel);
	load_encode_setting(window.parent.parent.selchannel);
	window.parent.parent.selchannel = 0;

	$("#getahdencodechannelno").change(function(){
		var index = $(this).val();
		if(index>=0)
		{
			if(index != cursel)
			{
				load_encode_setting(($(this).val()-1));
				cursel = index;
			}
		}
	});


	$("#encode_save").click(function(){
		encode_save();
	});


};

function encode_save()
{

	var str="";

	str = str + "&setahdencodechannelno=";
	str = str +  String(parseInt($("[matchval='getahdencodechannelno1']").val())-1);

	str = str + "&setahdencodemainencodetype=";
	str = str +  $("[matchval='getahdencodemainencodetype']").val();

	str = str + "&setahdencodemainencodemode=";
	str = str +  $("[matchval='getahdencodemainencodemode']").val();

	str = str + "&setahdencodemainresolution=";
	str = str +  $("[matchval='getahdencodemainresolution1']").val();

	str = str + "&setahdencodemainframerate=";
	str = str +  $("[matchval='getahdencodemainframerate']").val();

	str = str + "&setahdencodemainbiterate=";
	str = str +  $("[matchval='getahdencodemainbiterate']").val();

	str = str + "&setahdencodesubencodetype=";
	str = str +  $("[matchval='getahdencodesubencodetype']").val();

	str = str + "&setahdencodesubencodemode=";
	str = str +  $("[matchval='getahdencodemainencodemode']").val();

	str = str + "&setahdencodesubresolution=";
	str = str +  $("[matchval='getahdencodesubresolution1']").val();

	str = str + "&setahdencodesubframerate=";
	str = str +  $("[matchval='getahdencodesubframerate']").val();

	str = str + "&setahdencodesubbitrate=";
	str = str +  $("[matchval='getahdencodesubbitrate']").val();

	var str1 = "../vb.htm?"+str;

	save_val(str1,0,0);


}



function getselectoption(num)
{

	$("#getahdencodechannelno").children('option[value="1"]').wrap('<span>').hide();
	$("#getahdencodechannelno").children('option[value="2"]').wrap('<span>').hide();
	$("#getahdencodechannelno").children('option[value="3"]').wrap('<span>').hide();
	$("#getahdencodechannelno").children('option[value="4"]').wrap('<span>').hide();
	$("#getahdencodechannelno").children('option[value="5"]').wrap('<span>').hide();
	$("#getahdencodechannelno").children('option[value="6"]').wrap('<span>').hide();
	$("#getahdencodechannelno").children('option[value="7"]').wrap('<span>').hide();
	$("#getahdencodechannelno").children('option[value="8"]').wrap('<span>').hide();
	$("#getahdencodechannelno").children('option[value="9"]').wrap('<span>').hide();
	$("#getahdencodechannelno").children('option[value="10"]').wrap('<span>').hide();
	$("#getahdencodechannelno").children('option[value="11"]').wrap('<span>').hide();
	$("#getahdencodechannelno").children('option[value="12"]').wrap('<span>').hide();
	$("#getahdencodechannelno").children('option[value="13"]').wrap('<span>').hide();
	$("#getahdencodechannelno").children('option[value="14"]').wrap('<span>').hide();
	$("#getahdencodechannelno").children('option[value="15"]').wrap('<span>').hide();
	$("#getahdencodechannelno").children('option[value="16"]').wrap('<span>').hide();
	$("#getahdencodechannelno").children('option[value="17"]').wrap('<span>').hide();
	$("#getahdencodechannelno").children('option[value="18"]').wrap('<span>').hide();
	$("#getahdencodechannelno").children('option[value="19"]').wrap('<span>').hide();
	$("#getahdencodechannelno").children('option[value="20"]').wrap('<span>').hide();
	$("#getahdencodechannelno").children('option[value="21"]').wrap('<span>').hide();
	$("#getahdencodechannelno").children('option[value="22"]').wrap('<span>').hide();
	$("#getahdencodechannelno").children('option[value="23"]').wrap('<span>').hide();
	$("#getahdencodechannelno").children('option[value="24"]').wrap('<span>').hide();
	$("#getahdencodechannelno").children('option[value="25"]').wrap('<span>').hide();
	switch (num)
	{
		case 4:
		{

			$("#getahdencodechannelno").children("span").children('option[value="1"]').unwrap();
			$("#getahdencodechannelno").children("span").children('option[value="2"]').unwrap();
			$("#getahdencodechannelno").children("span").children('option[value="3"]').unwrap();
			$("#getahdencodechannelno").children("span").children('option[value="4"]').unwrap();
			$('#getahdencodechannelno option[value="1"]').show();
			$('#getahdencodechannelno option[value="2"]').show();
			$('#getahdencodechannelno option[value="3"]').show();
			$('#getahdencodechannelno option[value="4"]').show();
		}
			break;
		case 8:
		{
			$("#getahdencodechannelno").children("span").children('option[value="1"]').unwrap();
			$("#getahdencodechannelno").children("span").children('option[value="2"]').unwrap();
			$("#getahdencodechannelno").children("span").children('option[value="3"]').unwrap();
			$("#getahdencodechannelno").children("span").children('option[value="4"]').unwrap();
			$("#getahdencodechannelno").children("span").children('option[value="5"]').unwrap();
			$("#getahdencodechannelno").children("span").children('option[value="6"]').unwrap();
			$("#getahdencodechannelno").children("span").children('option[value="7"]').unwrap();
			$("#getahdencodechannelno").children("span").children('option[value="8"]').unwrap();

			$('#getahdencodechannelno option[value="1"]').show();
			$('#getahdencodechannelno option[value="2"]').show();
			$('#getahdencodechannelno option[value="3"]').show();
			$('#getahdencodechannelno option[value="4"]').show();
			$('#getahdencodechannelno option[value="5"]').show();
			$('#getahdencodechannelno option[value="6"]').show();
			$('#getahdencodechannelno option[value="7"]').show();
			$('#getahdencodechannelno option[value="8"]').show();

		}
			break;
		case 9:
		{
			//alert('hello');
			$("#getahdencodechannelno").children("span").children('option[value="1"]').unwrap();
			$("#getahdencodechannelno").children("span").children('option[value="2"]').unwrap();
			$("#getahdencodechannelno").children("span").children('option[value="3"]').unwrap();
			$("#getahdencodechannelno").children("span").children('option[value="4"]').unwrap();
			$("#getahdencodechannelno").children("span").children('option[value="5"]').unwrap();
			$("#getahdencodechannelno").children("span").children('option[value="6"]').unwrap();
			$("#getahdencodechannelno").children("span").children('option[value="7"]').unwrap();
			$("#getahdencodechannelno").children("span").children('option[value="8"]').unwrap();
			$("#getahdencodechannelno").children("span").children('option[value="9"]').unwrap();

			$('#getahdencodechannelno option[value="1"]').show();
			$('#getahdencodechannelno option[value="2"]').show();
			$('#getahdencodechannelno option[value="3"]').show();
			$('#getahdencodechannelno option[value="4"]').show();
			$('#getahdencodechannelno option[value="5"]').show();
			$('#getahdencodechannelno option[value="6"]').show();
			$('#getahdencodechannelno option[value="7"]').show();
			$('#getahdencodechannelno option[value="8"]').show();
			$('#getahdencodechannelno option[value="9"]').show();
		}
			break;
		case 25:
		{
			//alert('hello25');
			$("#getahdencodechannelno").children("span").children('option[value="1"]').unwrap();
			$("#getahdencodechannelno").children("span").children('option[value="2"]').unwrap();
			$("#getahdencodechannelno").children("span").children('option[value="3"]').unwrap();
			$("#getahdencodechannelno").children("span").children('option[value="4"]').unwrap();
			$("#getahdencodechannelno").children("span").children('option[value="5"]').unwrap();
			$("#getahdencodechannelno").children("span").children('option[value="6"]').unwrap();
			$("#getahdencodechannelno").children("span").children('option[value="7"]').unwrap();
			$("#getahdencodechannelno").children("span").children('option[value="8"]').unwrap();

			$("#getahdencodechannelno").children("span").children('option[value="9"]').unwrap();
			$("#getahdencodechannelno").children("span").children('option[value="10"]').unwrap();
			$("#getahdencodechannelno").children("span").children('option[value="11"]').unwrap();
			$("#getahdencodechannelno").children("span").children('option[value="12"]').unwrap();
			$("#getahdencodechannelno").children("span").children('option[value="13"]').unwrap();
			$("#getahdencodechannelno").children("span").children('option[value="14"]').unwrap();
			$("#getahdencodechannelno").children("span").children('option[value="15"]').unwrap();
			$("#getahdencodechannelno").children("span").children('option[value="16"]').unwrap();
			$("#getahdencodechannelno").children("span").children('option[value="17"]').unwrap();

			$("#getahdencodechannelno").children("span").children('option[value="18"]').unwrap();
			$("#getahdencodechannelno").children("span").children('option[value="19"]').unwrap();
			$("#getahdencodechannelno").children("span").children('option[value="20"]').unwrap();
			$("#getahdencodechannelno").children("span").children('option[value="21"]').unwrap();
			$("#getahdencodechannelno").children("span").children('option[value="22"]').unwrap();
			$("#getahdencodechannelno").children("span").children('option[value="23"]').unwrap();
			$("#getahdencodechannelno").children("span").children('option[value="24"]').unwrap();
			$("#getahdencodechannelno").children("span").children('option[value="25"]').unwrap();


			$('#getahdencodechannelno option[value="1"]').show();
			$('#getahdencodechannelno option[value="2"]').show();
			$('#getahdencodechannelno option[value="3"]').show();
			$('#getahdencodechannelno option[value="4"]').show();
			$('#getahdencodechannelno option[value="5"]').show();
			$('#getahdencodechannelno option[value="6"]').show();
			$('#getahdencodechannelno option[value="7"]').show();
			$('#getahdencodechannelno option[value="8"]').show();
			$('#getahdencodechannelno option[value="9"]').show();
			$('#getahdencodechannelno option[value="10"]').show();
			$('#getahdencodechannelno option[value="11"]').show();
			$('#getahdencodechannelno option[value="12"]').show();
			$('#getahdencodechannelno option[value="13"]').show();
			$('#getahdencodechannelno option[value="14"]').show();
			$('#getahdencodechannelno option[value="15"]').show();
			$('#getahdencodechannelno option[value="16"]').show();
			$('#getahdencodechannelno option[value="17"]').show();
			$('#getahdencodechannelno option[value="18"]').show();
			$('#getahdencodechannelno option[value="19"]').show();
			$('#getahdencodechannelno option[value="20"]').show();
			$('#getahdencodechannelno option[value="21"]').show();
			$('#getahdencodechannelno option[value="22"]').show();
			$('#getahdencodechannelno option[value="23"]').show();
			$('#getahdencodechannelno option[value="24"]').show();
			$('#getahdencodechannelno option[value="25"]').show();

		}
			break;
		default:
			break;
	}
}

function load_encode_setting(num)
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

	XMLHttpRequestObject.open("GET", "../vb.htm?getahdencodechannelno="+num+"&getahdencodemainencodetype&getahdencodemainresolution&getahdencodemainencodemode&getahdencodemainframerate&getahdencodemainbiterate&getahdencodemainresolutionjoin&getahdencodesubencodetype&getahdencodesubresolution&getahdencodesubencodemode&getahdencodesubbitrate&getahdencodesubframerate&getahdencodesubresolutionjoin",true,loginUser,loginpsw);
	XMLHttpRequestObject.setRequestHeader("If-Modified-Since","0");
	XMLHttpRequestObject.send(null);

	XMLHttpRequestObject.onreadystatechange = function()
	{
		if(XMLHttpRequestObject.readyState == 4)
		{
			if(XMLHttpRequestObject.status == 200)
			{
				var str = XMLHttpRequestObject.responseText;
				//alert(str);
				var str_sub = str.split("OK ");

				for (var j = 0; j < str_sub.length; j++) {

					var str_sub_sub = str_sub[j].split("=");
					if ("getahdencodemainresolutionjoin" == str_sub_sub[0] && str_sub_sub[0] != "") {
						var str_sub_sub_sub = str_sub_sub[1].split(";");
						var html_str_fps = "";
						nmainnum  = str_sub_sub_sub.length - 1;
						for (k = 0; k <str_sub_sub_sub.length - 1; k ++)
						{
							html_str_fps+="<option value='"+k+"'>"+str_sub_sub_sub[k]+"</option>"
						}
						$("#getahdencodemainresolutionjoin").html(html_str_fps);

						bmainreslution = true;
					}
					else
					{
						bmainreslution = false;
					}
					if ("getahdencodesubresolutionjoin" == str_sub_sub[0] && str_sub_sub[0] != "") {

						var str_sub_sub_sub = str_sub_sub[1].split(";");
						var html_str_fps = "";
						nsubnum  = str_sub_sub_sub.length - 1;
						for (k = 0; k <str_sub_sub_sub.length - 1; k ++)
						{
							html_str_fps+="<option value='"+k+"'>"+str_sub_sub_sub[k]+"</option>"
						}
						$("#getahdencodesubresolutionjoin").html(html_str_fps);

						bsubreslution = true;
					}
					else
					{
						bsubreslution = false;
					}

				}
				//alert($("#getahdencodechannelno").length);
				for (var j = 0; j < str_sub.length; j++) {

					var str_sub_sub = str_sub[j].split("=");
					if ("getahdencodemainresolution" == str_sub_sub[0] && str_sub_sub[0] != "") {
						if(bmainreslution)
						{
							var input_select_val = document.getElementsByTagName("select");
							for (var i = 0; i < input_select_val.length; i++) {
								if (input_select_val[i].getAttribute("matchval") == "getahdencodemainresolution1") {
									for (k = 0; k < nsubnum; k ++)
									{
										//alert(str_sub_sub[1].split("\n")[0]);
										if (input_select_val[i].options[k].value == str_sub_sub[1].split("\n")[0])
										{
											input_select_val[i].options[k].selected = true;

										}
									}
								}
							}
							//for (k = 0; k < nmainnum; k ++)
							//{
							//	if ($("#getahdencodemainresolutionjoin").options[k].value == str_sub_sub[1].split("\n")[0])
							//	{
							//		$("#getahdencodemainresolutionjoin").options[k].selected = true;
                            //
							//	}
							//}
						}

					}
					if ("getahdencodesubresolution" == str_sub_sub[0] && str_sub_sub[0] != "") {
						if(bsubreslution)
						{
							var input_select_val = document.getElementsByTagName("select");
							for (var i = 0; i < input_select_val.length; i++) {
								if (input_select_val[i].getAttribute("matchval") == "getahdencodesubresolution1") {
									for (k = 0; k < nsubnum; k ++)
									{
										//alert(str_sub_sub[1].split("\n")[0]);
										if (input_select_val[i].options[k].value == str_sub_sub[1].split("\n")[0])
										{
											input_select_val[i].options[k].selected = true;

										}
									}
								}
							}
							//alert($("#getahdencodesubresolutionjoin").options[0].value);

						}

					}

				}
				split_span_val_type2(str);
				$("#getahdencodechannelno").val(++num);
			}
		}
	}
}

