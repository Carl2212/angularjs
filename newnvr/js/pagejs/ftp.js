function FtpScheduleVal() {
	this.enable1 =  new Array;
	this.starthour1 =  new Array;
	this.startmin1 =  new Array;
	this.stophour1 =  new Array;
	this.stopmin1 =  new Array;
	this.enable2 =  new Array;
	this.starthour2 =  new Array;
	this.startmin2 =  new Array;
	this.stophour2 =  new Array;
	this.stopmin2 =  new Array;
}
var chsel = 0;
var weeksel = 0;
var ftpscheduleval = new FtpScheduleVal();
var ftpschedulevalcopy = new FtpScheduleVal();
var str1 = "";


function InitConfig(){
	InitFtpsChedchn();
	//获取当天星期几
	var nDate = new Date();
	weeksel = nDate.getDay();
	$("#getftpscheddate").val(weeksel);

	getselectoption(channelnum);
	load_ftp_setting();
	load_ftp_schedule(0);

	//$("#getftpschedisstarthour1").onkeyup = function()
	//{
	//	alert('hello');
	//	this.value = this.value.replace(/\D/g,'');
	//	if($("#getftpschedisstarthour1").val() > 24)
	//	{
	//		$("#getftpschedisstarthour1").val(24);
	//	}
	//}

	//切换通道
	$("#getftpschedchn").change(function(){
		var index = $(this).val();
		if(index>=0)
		{
			if(index != chsel)
			{
				//if($("#getftpschedchn").val() == '250') {
				//	load_ftp_schedule(0);
				//	$("#getftpschedchn").val('250');
				//}
				//else
					load_ftp_schedule($(this).val());
				chsel = index;
			}
		}
	});

	//切换星期
	$("#getftpscheddate").change(function(){
		var index = $(this).val();
		if(index>=0)
		{
			if(index != weeksel)
			{
				$('#getftpschedisstarthour1').val(ftpscheduleval.starthour1[index]);
				$('#getftpschedisstartmin1').val(ftpscheduleval.startmin1[index]);
				$('#getftpschedisstophour1').val(ftpscheduleval.stophour1[index]);
				$('#getftpschedisstoptmin1').val(ftpscheduleval.stopmin1[index]);
				if(ftpscheduleval.enable1[index]*1 == 1)
				{
					if(!$('#getftpschedtype1').is(":checked"))
						$('#getftpschedtype1').click();
				}
				else
				{
					if($('#getftpschedtype1').is(":checked"))
						$('#getftpschedtype1').click();
				}

				$('#getftpschedisstarthour2').val(ftpscheduleval.starthour2[index]);
				$('#getftpschedisstartmin2').val(ftpscheduleval.startmin2[index]);
				$('#getftpschedisstophour2').val(ftpscheduleval.stophour2[index]);
				$('#getftpschedisstoptmin2').val(ftpscheduleval.stopmin2[index]);
				if(ftpscheduleval.enable2[index]*1 == 1)
				{
					if(!$('#getftpschedtype2').is(":checked"))
						$('#getftpschedtype2').click();
				}
				else
				{
					if($('#getftpschedtype2').is(":checked"))
						$('#getftpschedtype2').click();
				}
				weeksel = index;
			}
		}
	});
    //保存
    $("#ftp_save").click(function(){
		var ipRegEx = /^(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])$/;

		if((!ipRegEx.test($("#getftpservierip").val())) || ($("#getftpservierip").val() =="0.0.0.0"))
		{
			window.parent.parent.save2(lang.IPAddr+lang.formatErr);
			return;

		}
		ftp_save();
		//ftp_save_schedule();
    });

	//ftp测试
	$("#ftp_test").click(function(){
		ftp_test();
	});
};

//显示通道数
function getselectoption(num)
{
	$("#getftpschedchn").children('option[value="250"]').wrap('<span>').hide();
	$("#getftpschedchn").children('option[value="1"]').wrap('<span>').hide();
	$("#getftpschedchn").children('option[value="2"]').wrap('<span>').hide();
	$("#getftpschedchn").children('option[value="3"]').wrap('<span>').hide();
	$("#getftpschedchn").children('option[value="4"]').wrap('<span>').hide();
	$("#getftpschedchn").children('option[value="5"]').wrap('<span>').hide();
	$("#getftpschedchn").children('option[value="6"]').wrap('<span>').hide();
	$("#getftpschedchn").children('option[value="7"]').wrap('<span>').hide();
	$("#getftpschedchn").children('option[value="8"]').wrap('<span>').hide();
	$("#getftpschedchn").children('option[value="9"]').wrap('<span>').hide();
	$("#getftpschedchn").children('option[value="10"]').wrap('<span>').hide();
	$("#getftpschedchn").children('option[value="11"]').wrap('<span>').hide();
	$("#getftpschedchn").children('option[value="12"]').wrap('<span>').hide();
	$("#getftpschedchn").children('option[value="13"]').wrap('<span>').hide();
	$("#getftpschedchn").children('option[value="14"]').wrap('<span>').hide();
	$("#getftpschedchn").children('option[value="15"]').wrap('<span>').hide();
	$("#getftpschedchn").children('option[value="16"]').wrap('<span>').hide();
	$("#getftpschedchn").children('option[value="17"]').wrap('<span>').hide();
	$("#getftpschedchn").children('option[value="18"]').wrap('<span>').hide();
	$("#getftpschedchn").children('option[value="19"]').wrap('<span>').hide();
	$("#getftpschedchn").children('option[value="20"]').wrap('<span>').hide();
	$("#getftpschedchn").children('option[value="21"]').wrap('<span>').hide();
	$("#getftpschedchn").children('option[value="22"]').wrap('<span>').hide();
	$("#getftpschedchn").children('option[value="23"]').wrap('<span>').hide();
	$("#getftpschedchn").children('option[value="24"]').wrap('<span>').hide();
	$("#getftpschedchn").children('option[value="0"]').wrap('<span>').hide();
	switch (num)
	{
		case 4:
		{
			$("#getftpschedchn").children("span").children('option[value="250"]').unwrap();
			$("#getftpschedchn").children("span").children('option[value="0"]').unwrap();
			$("#getftpschedchn").children("span").children('option[value="1"]').unwrap();
			$("#getftpschedchn").children("span").children('option[value="2"]').unwrap();
			$("#getftpschedchn").children("span").children('option[value="3"]').unwrap();


			$('#getftpschedchn option[value="250"]').show();
			$('#getftpschedchn option[value="0"]').show();
			$('#getftpschedchn option[value="1"]').show();
			$('#getftpschedchn option[value="2"]').show();
			$('#getftpschedchn option[value="3"]').show();

		}
			break;
		case 8:
		{
			$("#getftpschedchn").children("span").children('option[value="250"]').unwrap();
			$("#getftpschedchn").children("span").children('option[value="0"]').unwrap();
			$("#getftpschedchn").children("span").children('option[value="1"]').unwrap();
			$("#getftpschedchn").children("span").children('option[value="2"]').unwrap();
			$("#getftpschedchn").children("span").children('option[value="3"]').unwrap();
			$("#getftpschedchn").children("span").children('option[value="4"]').unwrap();
			$("#getftpschedchn").children("span").children('option[value="5"]').unwrap();
			$("#getftpschedchn").children("span").children('option[value="6"]').unwrap();
			$("#getftpschedchn").children("span").children('option[value="7"]').unwrap();

			$('#getftpschedchn option[value="250"]').show();
			$('#getftpschedchn option[value="0"]').show();
			$('#getftpschedchn option[value="1"]').show();
			$('#getftpschedchn option[value="2"]').show();
			$('#getftpschedchn option[value="3"]').show();
			$('#getftpschedchn option[value="4"]').show();
			$('#getftpschedchn option[value="5"]').show();
			$('#getftpschedchn option[value="6"]').show();
			$('#getftpschedchn option[value="7"]').show();

		}
			break;
		case 9:
		{
			$("#getftpschedchn").children("span").children('option[value="250"]').unwrap();
			$("#getftpschedchn").children("span").children('option[value="0"]').unwrap();
			$("#getftpschedchn").children("span").children('option[value="1"]').unwrap();
			$("#getftpschedchn").children("span").children('option[value="2"]').unwrap();
			$("#getftpschedchn").children("span").children('option[value="3"]').unwrap();
			$("#getftpschedchn").children("span").children('option[value="4"]').unwrap();
			$("#getftpschedchn").children("span").children('option[value="5"]').unwrap();
			$("#getftpschedchn").children("span").children('option[value="6"]').unwrap();
			$("#getftpschedchn").children("span").children('option[value="7"]').unwrap();
			$("#getftpschedchn").children("span").children('option[value="8"]').unwrap();

			$('#getftpschedchn option[value="250"]').show();
			$('#getftpschedchn option[value="0"]').show();
			$('#getftpschedchn option[value="1"]').show();
			$('#getftpschedchn option[value="2"]').show();
			$('#getftpschedchn option[value="3"]').show();
			$('#getftpschedchn option[value="4"]').show();
			$('#getftpschedchn option[value="5"]').show();
			$('#getftpschedchn option[value="6"]').show();
			$('#getftpschedchn option[value="7"]').show();
			$('#getftpschedchn option[value="8"]').show();

		}
			break;
		case 16:
		{
			$("#getftpschedchn").children("span").children('option[value="250"]').unwrap();
			$("#getftpschedchn").children("span").children('option[value="0"]').unwrap();
			$("#getftpschedchn").children("span").children('option[value="1"]').unwrap();
			$("#getftpschedchn").children("span").children('option[value="2"]').unwrap();
			$("#getftpschedchn").children("span").children('option[value="3"]').unwrap();
			$("#getftpschedchn").children("span").children('option[value="4"]').unwrap();
			$("#getftpschedchn").children("span").children('option[value="5"]').unwrap();
			$("#getftpschedchn").children("span").children('option[value="6"]').unwrap();
			$("#getftpschedchn").children("span").children('option[value="7"]').unwrap();
			$("#getftpschedchn").children("span").children('option[value="8"]').unwrap();

			$("#getftpschedchn").children("span").children('option[value="9"]').unwrap();
			$("#getftpschedchn").children("span").children('option[value="10"]').unwrap();
			$("#getftpschedchn").children("span").children('option[value="11"]').unwrap();
			$("#getftpschedchn").children("span").children('option[value="12"]').unwrap();
			$("#getftpschedchn").children("span").children('option[value="13"]').unwrap();
			$("#getftpschedchn").children("span").children('option[value="14"]').unwrap();
			$("#getftpschedchn").children("span").children('option[value="15"]').unwrap();

			$('#getftpschedchn option[value="250"]').show();
			$('#getftpschedchn option[value="0"]').show();
			$('#getftpschedchn option[value="1"]').show();
			$('#getftpschedchn option[value="2"]').show();
			$('#getftpschedchn option[value="3"]').show();
			$('#getftpschedchn option[value="4"]').show();
			$('#getftpschedchn option[value="5"]').show();
			$('#getftpschedchn option[value="6"]').show();
			$('#getftpschedchn option[value="7"]').show();
			$('#getftpschedchn option[value="8"]').show();
			$('#getftpschedchn option[value="9"]').show();
			$('#getftpschedchn option[value="10"]').show();
			$('#getftpschedchn option[value="11"]').show();
			$('#getftpschedchn option[value="12"]').show();
			$('#getftpschedchn option[value="13"]').show();
			$('#getftpschedchn option[value="14"]').show();
			$('#getftpschedchn option[value="15"]').show();

		}
			break;
		case 25:
		{
			$("#getftpschedchn").children("span").children('option[value="250"]').unwrap();
			$("#getftpschedchn").children("span").children('option[value="0"]').unwrap();
			$("#getftpschedchn").children("span").children('option[value="1"]').unwrap();
			$("#getftpschedchn").children("span").children('option[value="2"]').unwrap();
			$("#getftpschedchn").children("span").children('option[value="3"]').unwrap();
			$("#getftpschedchn").children("span").children('option[value="4"]').unwrap();
			$("#getftpschedchn").children("span").children('option[value="5"]').unwrap();
			$("#getftpschedchn").children("span").children('option[value="6"]').unwrap();
			$("#getftpschedchn").children("span").children('option[value="7"]').unwrap();
			$("#getftpschedchn").children("span").children('option[value="8"]').unwrap();

			$("#getftpschedchn").children("span").children('option[value="9"]').unwrap();
			$("#getftpschedchn").children("span").children('option[value="10"]').unwrap();
			$("#getftpschedchn").children("span").children('option[value="11"]').unwrap();
			$("#getftpschedchn").children("span").children('option[value="12"]').unwrap();
			$("#getftpschedchn").children("span").children('option[value="13"]').unwrap();
			$("#getftpschedchn").children("span").children('option[value="14"]').unwrap();
			$("#getftpschedchn").children("span").children('option[value="15"]').unwrap();
			$("#getftpschedchn").children("span").children('option[value="16"]').unwrap();
			$("#getftpschedchn").children("span").children('option[value="17"]').unwrap();

			$("#getftpschedchn").children("span").children('option[value="18"]').unwrap();
			$("#getftpschedchn").children("span").children('option[value="19"]').unwrap();
			$("#getftpschedchn").children("span").children('option[value="20"]').unwrap();
			$("#getftpschedchn").children("span").children('option[value="21"]').unwrap();
			$("#getftpschedchn").children("span").children('option[value="22"]').unwrap();
			$("#getftpschedchn").children("span").children('option[value="23"]').unwrap();
			$("#getftpschedchn").children("span").children('option[value="24"]').unwrap();

			$('#getftpschedchn option[value="250"]').show();
			$('#getftpschedchn option[value="0"]').show();
			$('#getftpschedchn option[value="1"]').show();
			$('#getftpschedchn option[value="2"]').show();
			$('#getftpschedchn option[value="3"]').show();
			$('#getftpschedchn option[value="4"]').show();
			$('#getftpschedchn option[value="5"]').show();
			$('#getftpschedchn option[value="6"]').show();
			$('#getftpschedchn option[value="7"]').show();
			$('#getftpschedchn option[value="8"]').show();
			$('#getftpschedchn option[value="9"]').show();
			$('#getftpschedchn option[value="10"]').show();
			$('#getftpschedchn option[value="11"]').show();
			$('#getftpschedchn option[value="12"]').show();
			$('#getftpschedchn option[value="13"]').show();
			$('#getftpschedchn option[value="14"]').show();
			$('#getftpschedchn option[value="15"]').show();
			$('#getftpschedchn option[value="16"]').show();
			$('#getftpschedchn option[value="17"]').show();
			$('#getftpschedchn option[value="18"]').show();
			$('#getftpschedchn option[value="19"]').show();
			$('#getftpschedchn option[value="20"]').show();
			$('#getftpschedchn option[value="21"]').show();
			$('#getftpschedchn option[value="22"]').show();
			$('#getftpschedchn option[value="23"]').show();
			$('#getftpschedchn option[value="24"]').show();
		}
			break;
		default:
			break;
	}
}

//保存时间表
function ftp_save_schedule()
{
	if(($("#getftpschedisstarthour1").val()*1)  > ($("#getftpschedisstophour1").val()*1)
		|| (($("#getftpschedisstarthour1").val()*1) ==($("#getftpschedisstophour1").val()*1) && ($("#getftpschedisstartmin1").val()*1) > ($("#getftpschedisstoptmin1").val()*1))){

		window.parent.parent.save2(lang.recinvalidsce);
		return;
	}


	if(($("#getftpschedisstarthour2").val()*1) > ($("#getftpschedisstophour2").val()*1)
		|| (($("#getftpschedisstarthour2").val()*1) == ($("#getftpschedisstophour2").val()*1) && ($("#getftpschedisstartmin2").val()*1) > ($("#getftpschedisstoptmin2").val()*1))){
		window.parent.parent.save2(lang.recinvalidsce);
		return;
	}

	if ( $("[matchval='getftpschedtype1']").is(":checked") && $("[matchval='getftpschedtype2']").is(":checked"))
	{
		if ((($("#getftpschedisstophour1").val()*1) > ($("#getftpschedisstarthour2").val()*1))
			|| ((($("#getftpschedisstophour1").val()*1) == ($("#getftpschedisstarthour2").val()*1))
			&& ( ($("#getftpschedisstoptmin1").val()*1) > ($("#getftpschedisstartmin2").val()*1))))
		{
			$("#getftpschedisstophour1").val($("#getftpschedisstophour2").val());
			$("#getftpschedisstoptmin1").val($("#getftpschedisstoptmin2").val());
			$("#getftpschedisstophour2").val('00');
			$("#getftpschedisstoptmin2").val('00');
			$("#getftpschedisstarthour2").val('00');
			$("#getftpschedisstoptmin2").val('00');

			$("[matchval='getftpschedtype2']").click();

		}
	}

	if($("#getftpschedchn").val() != '250')
		{

			if($("#getftpscheddate").val() != '7')
			{
				//非all channel 非all week
				ftp_oneweek_save($("#getftpschedchn").val());
			}
			else
			{
				//非all channel all week
				ftp_allweek_save($("#getftpschedchn").val());
			}
		}
		else
		{
			if($("#getftpscheddate").val() != '7')
			{
				//all channel 非all week
				ftp_oneweekandallchannel_save(0);
			}
			else
			{
				//all channel all week
				ftp_allweekandchannel_save(0);
			}
		}
}

function ftp_test()
{
	var str1 = "../vb.htm?testftpfunction";
	save_val(str1,11,0);
}
//设置非整周 &&全通道数据
function ftp_oneweekandallchannel_save(chanel)
{
	str1 = "";
	var str="";
	str = str + "&setftpschedchn=";
	str = str + chanel;

	str = str + "&setftpschedisallweek=";
	str = str + 0;

	str1 = "../vb.htm?"+str;

	var XMLHttpRequestObject = null;
	if (window.XMLHttpRequest)
	{
		XMLHttpRequestObject = new XMLHttpRequest();
	}
	else if (window.ActiveXObject)
	{
		XMLHttpRequestObject = new ActiveXObject("Microsoft.XMLHTTP");
	}

	XMLHttpRequestObject.open("GET", str1, true,loginUser,loginpsw);
	XMLHttpRequestObject.setRequestHeader("cache-control","no-cache");
	XMLHttpRequestObject.setRequestHeader("context-type","text/xml;charset=utf-8");
	XMLHttpRequestObject.setRequestHeader("Content-Type","application/x-www-form-encodeURIComponent");
	XMLHttpRequestObject.setRequestHeader("If-Modified-Since","0");
	XMLHttpRequestObject.send(null);
	XMLHttpRequestObject.onreadystatechange = function() {

		if (XMLHttpRequestObject.readyState == 4) {

			if (XMLHttpRequestObject.status == 200) {

				ftpschedulevalcopy = ftpscheduleval;
				if( $("[matchval='getftpschedtype1']").is(":checked"))
				{
					ftpschedulevalcopy.enable1[$("[matchval='getftpscheddate']").val()] =  1;
				}
				else
				{
					ftpschedulevalcopy.enable1[$("[matchval='getftpscheddate']").val()] = 0 ;
				}

				ftpschedulevalcopy.starthour1[$("[matchval='getftpscheddate']").val()] = $("[matchval='getftpschedisstarthour1']").val();
				ftpschedulevalcopy.startmin1[$("[matchval='getftpscheddate']").val()] = $("[matchval='getftpschedisstartmin1']").val();
				ftpschedulevalcopy.stophour1[$("[matchval='getftpscheddate']").val()] = $("[matchval='getftpschedisstophour1']").val();
				ftpschedulevalcopy.stophour2[$("[matchval='getftpscheddate']").val()] = $("[matchval='getftpschedisstoptmin1']").val();

				if( $("[matchval='getftpschedtype2']").is(":checked"))
				{
					ftpschedulevalcopy.enable2[$("[matchval='getftpscheddate']").val()] = 1;
				}
				else
				{
					ftpschedulevalcopy.enable2[$("[matchval='getftpscheddate']").val()] = 0;
				}

				ftpschedulevalcopy.starthour2[$("[matchval='getftpscheddate']").val()] = $("[matchval='getftpschedisstarthour2']").val();
				ftpschedulevalcopy.startmin2[$("[matchval='getftpscheddate']").val()] = $("[matchval='getftpschedisstartmin2']").val();
				ftpschedulevalcopy.stophour2[$("[matchval='getftpscheddate']").val()] = $("[matchval='getftpschedisstophour2']").val();
				ftpschedulevalcopy.stopmin2[$("[matchval='getftpscheddate']").val()] = $("[matchval='getftpschedisstoptmin2']").val();

				//alert("hello");
				ftp_oneweekandallchannel_from7to6_save(0,chanel);

			}
		}
	}

}

function ftp_oneweekandallchannel_from7to6_save(week,channel)
{
	str1 = "";
	var str = "";
	str = str + "&setftpscheddate=";
	str = str + week;

	str = str + "&setftpschedtype1=";
	str = str + ftpschedulevalcopy.enable1[week];

	str = str + "&setftpschedisstarthour1=";
	str = str + ftpschedulevalcopy.starthour1[week];

	str = str + "&setftpschedisstartmin1=";
	str = str + ftpschedulevalcopy.startmin1[week];

	str = str + "&setftpschedisstophour1=";
	str = str + ftpschedulevalcopy.stophour1[week];

	str = str + "&setftpschedisstoptmin1=";
	str = str + ftpschedulevalcopy.stopmin1[week];

	str = str + "&setftpschedtype2=";
	str = str + ftpschedulevalcopy.enable2[week];

	str = str + "&setftpschedisstarthour2=";
	str = str + ftpschedulevalcopy.starthour2[week];

	str = str + "&setftpschedisstartmin2=";
	str = str + ftpschedulevalcopy.startmin2[week];

	str = str + "&setftpschedisstophour2=";
	str = str + ftpschedulevalcopy.stophour2[week];

	str = str + "&setftpschedisstoptmin2=";
	str = str + ftpschedulevalcopy.stopmin2[week];

	str1 = "../vb.htm?"+str;

	var XMLHttpRequestObject = null;
	if (window.XMLHttpRequest)
	{
		XMLHttpRequestObject = new XMLHttpRequest();
	}
	else if (window.ActiveXObject)
	{
		XMLHttpRequestObject = new ActiveXObject("Microsoft.XMLHTTP");
	}

	XMLHttpRequestObject.open("GET", str1, true,loginUser,loginpsw);
	XMLHttpRequestObject.setRequestHeader("cache-control","no-cache");
	XMLHttpRequestObject.setRequestHeader("context-type","text/xml;charset=utf-8");
	XMLHttpRequestObject.setRequestHeader("Content-Type","application/x-www-form-encodeURIComponent");
	XMLHttpRequestObject.setRequestHeader("If-Modified-Since","0");
	XMLHttpRequestObject.send(null);
	XMLHttpRequestObject.onreadystatechange = function() {
		if (XMLHttpRequestObject.readyState == 4) {

			if (XMLHttpRequestObject.status == 200) {

				//ftpscheduleval = ftpschedulevalcopy;
				week = week*1 + 1;
				if(week*1 <8)
				{
					ftp_oneweekandallchannel_from7to6_save(week,channel);
					return;
				}
				else
				{
					channel = channel*1 + 1;
					if(channel*1 < (channelnum*1 + 1))
					{
						ftp_oneweekandallchannel_save(channel);
					}
					else
					{
						ftpscheduleval = ftpschedulevalcopy;
						window.parent.parent.save2(lang.saved);
					}

				}
			}
		}
	};


}

//设置整周 全通道数据
function ftp_allweekandchannel_save(chanel)
{
	str1 = "";
	var str="";
	str = str + "&setftpschedchn=";
	str = str + chanel;

	str = str + "&setftpschedisallweek=";
	str = str + 1;

	str = str + "&setftpscheddate=";
	str = str + $("[matchval='getftpscheddate']").val();

	str = str + "&setftpschedtype1=";
	if( $("[matchval='getftpschedtype1']").is(":checked"))
	{
		str = str + '1';
	}
	else
	{
		str = str + '0';
	}

	str = str + "&setftpschedisstarthour1=";
	str = str + $("[matchval='getftpschedisstarthour1']").val();

	str = str + "&setftpschedisstartmin1=";
	str = str + $("[matchval='getftpschedisstartmin1']").val();

	str = str + "&setftpschedisstophour1=";
	str = str + $("[matchval='getftpschedisstophour1']").val();

	str = str + "&setftpschedisstoptmin1=";
	str = str + $("[matchval='getftpschedisstoptmin1']").val();


	str = str + "&setftpschedtype2=";
	if( $("[matchval='getftpschedtype2']").is(":checked"))
	{
		str = str + '1';
	}
	else
	{
		str = str + '0';
	}

	str = str + "&setftpschedisstarthour2=";
	str = str + $("[matchval='getftpschedisstarthour2']").val();

	str = str + "&setftpschedisstartmin2=";
	str = str + $("[matchval='getftpschedisstartmin2']").val();

	str = str + "&setftpschedisstophour2=";
	str = str + $("[matchval='getftpschedisstophour2']").val();

	str = str + "&setftpschedisstoptmin2=";
	str = str + $("[matchval='getftpschedisstoptmin2']").val();

	str1 = "../vb.htm?"+str;

	var XMLHttpRequestObject = null;
	if (window.XMLHttpRequest)
	{
		XMLHttpRequestObject = new XMLHttpRequest();
	}
	else if (window.ActiveXObject)
	{
		XMLHttpRequestObject = new ActiveXObject("Microsoft.XMLHTTP");
	}

	XMLHttpRequestObject.open("GET", str1, true,loginUser,loginpsw);
	XMLHttpRequestObject.setRequestHeader("cache-control","no-cache");
	XMLHttpRequestObject.setRequestHeader("context-type","text/xml;charset=utf-8");
	XMLHttpRequestObject.setRequestHeader("Content-Type","application/x-www-form-encodeURIComponent");
	XMLHttpRequestObject.setRequestHeader("If-Modified-Since","0");
	XMLHttpRequestObject.send(null);
	XMLHttpRequestObject.onreadystatechange = function() {

		if (XMLHttpRequestObject.readyState == 4) {

			if (XMLHttpRequestObject.status == 200) {

				chanel = chanel*1 + 1;
				if(chanel*1 <(channelnum*1 + 1))
				{
					ftp_allweekandchannel_save(chanel);
				}
				else
				{
					for(var week = 0;week < 8;week++)
					{
						if( $("[matchval='getftpschedtype1']").is(":checked"))
						{
							ftpscheduleval.enable1[week] =  1;
						}
						else
						{
							ftpscheduleval.enable1[week] = 0 ;
						}

						ftpscheduleval.starthour1[week] = $("[matchval='getftpschedisstarthour1']").val();
						ftpscheduleval.startmin1[week] = $("[matchval='getftpschedisstartmin1']").val();
						ftpscheduleval.stophour1[week] = $("[matchval='getftpschedisstophour1']").val();
						ftpscheduleval.stophour2[week] = $("[matchval='getftpschedisstoptmin1']").val();

						if( $("[matchval='getftpschedtype2']").is(":checked"))
						{
							ftpscheduleval.enable2[week] = 1;
						}
						else
						{
							ftpscheduleval.enable2[week] = 0;
						}

						ftpscheduleval.starthour2[week] = $("[matchval='getftpschedisstarthour2']").val();
						ftpscheduleval.startmin2[week] = $("[matchval='getftpschedisstartmin2']").val();
						ftpscheduleval.stophour2[week] = $("[matchval='getftpschedisstophour2']").val();
						ftpscheduleval.stopmin2[week] = $("[matchval='getftpschedisstoptmin2']").val();

					}
					window.parent.parent.save2(lang.saved);
				}
			}
		}
	}
}

//设置整周数据 非全通道
function ftp_allweek_save(channel)
{
	str1 = "";
	var str="";
	str = str + "&setftpschedchn=";
	str = str + channel;

	str = str + "&setftpschedisallweek=";
	str = str + 1;

	str = str + "&setftpscheddate=";
	str = str + $("[matchval='getftpscheddate']").val();

	str = str + "&setftpschedtype1=";
	if( $("[matchval='getftpschedtype1']").is(":checked"))
	{
		str = str + '1';
	}
	else
	{
		str = str + '0';
	}

	str = str + "&setftpschedisstarthour1=";
	str = str + $("[matchval='getftpschedisstarthour1']").val();

	str = str + "&setftpschedisstartmin1=";
	str = str + $("[matchval='getftpschedisstartmin1']").val();

	str = str + "&setftpschedisstophour1=";
	str = str + $("[matchval='getftpschedisstophour1']").val();

	str = str + "&setftpschedisstoptmin1=";
	str = str + $("[matchval='getftpschedisstoptmin1']").val();


	str = str + "&setftpschedtype2=";
	if( $("[matchval='getftpschedtype2']").is(":checked"))
	{
		str = str + '1';
	}
	else
	{
		str = str + '0';
	}

	str = str + "&setftpschedisstarthour2=";
	str = str + $("[matchval='getftpschedisstarthour2']").val();

	str = str + "&setftpschedisstartmin2=";
	str = str + $("[matchval='getftpschedisstartmin2']").val();

	str = str + "&setftpschedisstophour2=";
	str = str + $("[matchval='getftpschedisstophour2']").val();

	str = str + "&setftpschedisstoptmin2=";
	str = str + $("[matchval='getftpschedisstoptmin2']").val();

	str1 = "../vb.htm?"+str;



	for(var week = 0;week < 8;week++)
	{
		if( $("[matchval='getftpschedtype1']").is(":checked"))
		{
			ftpscheduleval.enable1[week] =  1;
		}
		else
		{
			ftpscheduleval.enable1[week] = 0 ;
		}

		ftpscheduleval.starthour1[week] = $("[matchval='getftpschedisstarthour1']").val();
		ftpscheduleval.startmin1[week] = $("[matchval='getftpschedisstartmin1']").val();
		ftpscheduleval.stophour1[week] = $("[matchval='getftpschedisstophour1']").val();
		ftpscheduleval.stophour2[week] = $("[matchval='getftpschedisstoptmin1']").val();

		if( $("[matchval='getftpschedtype2']").is(":checked"))
		{
			ftpscheduleval.enable2[week] = 1;
		}
		else
		{
			ftpscheduleval.enable2[week] = 0;
		}

		ftpscheduleval.starthour2[week] = $("[matchval='getftpschedisstarthour2']").val();
		ftpscheduleval.startmin2[week] = $("[matchval='getftpschedisstartmin2']").val();
		ftpscheduleval.stophour2[week] = $("[matchval='getftpschedisstophour2']").val();
		ftpscheduleval.stopmin2[week] = $("[matchval='getftpschedisstoptmin2']").val();

	}
	save_val(str1,0,0);
}


//设置单周数据  非全通道（其他周的数据也要下发）
function ftp_oneweek_save(channel)
{
	str1 = "";
	var str="";
	str = str + "&setftpschedchn=";
	str = str + channel;

	str = str + "&setftpschedisallweek=";
	str = str + 0;

	str1 = "../vb.htm?"+str;
	var XMLHttpRequestObject = null;
	if (window.XMLHttpRequest)
	{
		XMLHttpRequestObject = new XMLHttpRequest();
	}
	else if (window.ActiveXObject)
	{
		XMLHttpRequestObject = new ActiveXObject("Microsoft.XMLHTTP");
	}

	XMLHttpRequestObject.open("GET", str1, true,loginUser,loginpsw);
	XMLHttpRequestObject.setRequestHeader("cache-control","no-cache");
	XMLHttpRequestObject.setRequestHeader("context-type","text/xml;charset=utf-8");
	XMLHttpRequestObject.setRequestHeader("Content-Type","application/x-www-form-encodeURIComponent");
	XMLHttpRequestObject.setRequestHeader("If-Modified-Since","0");
	XMLHttpRequestObject.send(null);
	XMLHttpRequestObject.onreadystatechange = function() {

		if (XMLHttpRequestObject.readyState == 4) {

			if (XMLHttpRequestObject.status == 200) {

				ftpschedulevalcopy = ftpscheduleval;
				if( $("[matchval='getftpschedtype1']").is(":checked"))
				{
					ftpschedulevalcopy.enable1[$("[matchval='getftpscheddate']").val()] =  1;
				}
				else
				{
					ftpschedulevalcopy.enable1[$("[matchval='getftpscheddate']").val()] = 0 ;
				}

				ftpschedulevalcopy.starthour1[$("[matchval='getftpscheddate']").val()] = $("[matchval='getftpschedisstarthour1']").val();
				ftpschedulevalcopy.startmin1[$("[matchval='getftpscheddate']").val()] = $("[matchval='getftpschedisstartmin1']").val();
				ftpschedulevalcopy.stophour1[$("[matchval='getftpscheddate']").val()] = $("[matchval='getftpschedisstophour1']").val();
				ftpschedulevalcopy.stophour2[$("[matchval='getftpscheddate']").val()] = $("[matchval='getftpschedisstoptmin1']").val();

				if( $("[matchval='getftpschedtype2']").is(":checked"))
				{
					ftpschedulevalcopy.enable2[$("[matchval='getftpscheddate']").val()] = 1;
				}
				else
				{
					ftpschedulevalcopy.enable2[$("[matchval='getftpscheddate']").val()] = 0;
				}

				ftpschedulevalcopy.starthour2[$("[matchval='getftpscheddate']").val()] = $("[matchval='getftpschedisstarthour2']").val();
				ftpschedulevalcopy.startmin2[$("[matchval='getftpscheddate']").val()] = $("[matchval='getftpschedisstartmin2']").val();
				ftpschedulevalcopy.stophour2[$("[matchval='getftpscheddate']").val()] = $("[matchval='getftpschedisstophour2']").val();
				ftpschedulevalcopy.stopmin2[$("[matchval='getftpscheddate']").val()] = $("[matchval='getftpschedisstoptmin2']").val();

				ftp_from7to6_save(0);

			}
		}
	}
	window.parent.parent.save2(lang.saved);

}
//按周日到周六的顺序设置数据  发送7次数据
function ftp_from7to6_save(week)
{
	str1 = "";
	var str = "";
	str = str + "&setftpscheddate=";
	str = str + week;

	str = str + "&setftpschedtype1=";
	str = str + ftpschedulevalcopy.enable1[week];

	str = str + "&setftpschedisstarthour1=";
	str = str + ftpschedulevalcopy.starthour1[week];

	str = str + "&setftpschedisstartmin1=";
	str = str + ftpschedulevalcopy.startmin1[week];

	str = str + "&setftpschedisstophour1=";
	str = str + ftpschedulevalcopy.stophour1[week];

	str = str + "&setftpschedisstoptmin1=";
	str = str + ftpschedulevalcopy.stopmin1[week];

	str = str + "&setftpschedtype2=";
	str = str + ftpschedulevalcopy.enable2[week];

	str = str + "&setftpschedisstarthour2=";
	str = str + ftpschedulevalcopy.starthour2[week];

	str = str + "&setftpschedisstartmin2=";
	str = str + ftpschedulevalcopy.startmin2[week];

	str = str + "&setftpschedisstophour2=";
	str = str + ftpschedulevalcopy.stophour2[week];

	str = str + "&setftpschedisstoptmin2=";
	str = str + ftpschedulevalcopy.stopmin2[week];

	str1 = "../vb.htm?"+str;

	var XMLHttpRequestObject = null;
	if (window.XMLHttpRequest)
	{
		XMLHttpRequestObject = new XMLHttpRequest();
	}
	else if (window.ActiveXObject)
	{
		XMLHttpRequestObject = new ActiveXObject("Microsoft.XMLHTTP");
	}

	XMLHttpRequestObject.open("GET", str1, true,loginUser,loginpsw);
	XMLHttpRequestObject.setRequestHeader("cache-control","no-cache");
	XMLHttpRequestObject.setRequestHeader("context-type","text/xml;charset=utf-8");
	XMLHttpRequestObject.setRequestHeader("Content-Type","application/x-www-form-encodeURIComponent");
	XMLHttpRequestObject.setRequestHeader("If-Modified-Since","0");
	XMLHttpRequestObject.send(null);
	XMLHttpRequestObject.onreadystatechange = function() {
		if (XMLHttpRequestObject.readyState == 4) {

			if (XMLHttpRequestObject.status == 200) {

				week = week*1 + 1;
				if(week*1 <8)
				{
					ftp_from7to6_save(week);
				}
				else
				{
					ftpscheduleval = ftpschedulevalcopy;
				}
			}
		}
	}
}
///vb.htm?setftpenable=0&setftpservierip=172.18.191.1&setftpusername=123123&setftppassword=123123&setftpfoldername=123123&setftpport=21
function ftp_save()
{
	var str="";
	str = str + "&setftpenable=";
	if( $("[matchval='getftpenable']").is(":checked"))
	{
		str = str + '1';
	}
	else
	{
		str = str + '0';
	}

	str = str + "&setftpservierip=";
	str = str + $("[matchval='getftpservierip']").val();

	str = str + "&setftpusername=";
	str = str + $("[matchval='getftpusername']").val();

	str = str + "&setftppassword=";
	str = str + $("[matchval='getftppassword']").val();

	str = str + "&setftpfoldername=";
	str = str + $("[matchval='getftpfoldername']").val();

	str = str + "&setftpport=";
	str = str + ($("[matchval='getftpport']").val()>65535?'65535':$("[matchval='getftpport']").val());

	var str1 = "../vb.htm?"+str;

	var XMLHttpRequestObject = null;
	if (window.XMLHttpRequest)
	{
		XMLHttpRequestObject = new XMLHttpRequest();
	}
	else if (window.ActiveXObject)
	{
		XMLHttpRequestObject = new ActiveXObject("Microsoft.XMLHTTP");
	}

	XMLHttpRequestObject.open("GET", str1, true,loginUser,loginpsw);
	XMLHttpRequestObject.setRequestHeader("cache-control","no-cache");
	XMLHttpRequestObject.setRequestHeader("context-type","text/xml;charset=utf-8");
	XMLHttpRequestObject.setRequestHeader("Content-Type","application/x-www-form-encodeURIComponent");
	XMLHttpRequestObject.setRequestHeader("If-Modified-Since","0");
	XMLHttpRequestObject.send(null);
	XMLHttpRequestObject.onreadystatechange = function() {
		if (XMLHttpRequestObject.readyState == 4) {

			if (XMLHttpRequestObject.status == 200) {

				ftp_save_schedule();
			}
		}
	}
}

function onlyNum()
{
	if(!(event.keyCode==46)&&!(event.keyCode==8)&&!(event.keyCode==37)&&!(event.keyCode==39))
		if(!((event.keyCode>=48&&event.keyCode<=57)||(event.keyCode>=96&&event.keyCode<=105)))
			event.returnValue=false;
}

//给时间表赋值
function get_ftp_schedule(num)
{
	$('#getftpschedisstarthour1').val(ftpscheduleval.starthour1[num]);
	$('#getftpschedisstartmin1').val(ftpscheduleval.startmin1[num]);
	$('#getftpschedisstophour1').val(ftpscheduleval.stophour1[num]);
	$('#getftpschedisstoptmin1').val(ftpscheduleval.stopmin1[num]);
	if(ftpscheduleval.enable1[num]*1 == 1)
	{
		if(!$('#getftpschedtype1').is(":checked"))
			$('#getftpschedtype1').click();
	}
	else
	{
		if($('#getftpschedtype1').is(":checked"))
			$('#getftpschedtype1').click();
	}


	$('#getftpschedisstarthour2').val(ftpscheduleval.starthour2[num]);
	$('#getftpschedisstartmin2').val(ftpscheduleval.startmin2[num]);
	$('#getftpschedisstophour2').val(ftpscheduleval.stophour2[num]);
	$('#getftpschedisstoptmin2').val(ftpscheduleval.stopmin2[num]);
	if(ftpscheduleval.enable2[num]*1 == 1)
	{
		if(!$('#getftpschedtype2').is(":checked"))
			$('#getftpschedtype2').click();
	}
	else
	{
		if($('#getftpschedtype2').is(":checked"))
			$('#getftpschedtype2').click();
	}

}

function load_ftp_schedule_sub(i)
{
	var XMLHttpRequestObject1 = null;
	if (window.XMLHttpRequest)
	{
		XMLHttpRequestObject1 = new XMLHttpRequest();
	}
	else if (window.ActiveXObject)
	{
		XMLHttpRequestObject1 = new ActiveXObject("Microsoft.XMLHTTP");
	}
	XMLHttpRequestObject1.open("GET", "../vb.htm?getftpscheddate="+i+"&getftpschedtype1&getftpschedisstarthour1&getftpschedisstartmin1&getftpschedisstophour1&getftpschedisstoptmin1&getftpschedtype2&getftpschedisstarthour2&getftpschedisstartmin2&getftpschedisstophour2&getftpschedisstoptmin2",true,loginUser,loginpsw);
	XMLHttpRequestObject1.setRequestHeader("If-Modified-Since","0");
	XMLHttpRequestObject1.send(null);
	XMLHttpRequestObject1.onreadystatechange = function()
	{
		if (XMLHttpRequestObject1.readyState == 4)
		{
			if (XMLHttpRequestObject1.status == 200)
			{
				var str = XMLHttpRequestObject1.responseText;

				var str_sub = str.split("OK ");

				for (var j = 0; j < str_sub.length; j++) {

					str_sub_sub = str_sub[j].split("=");

					if ("getftpschedtype1" == str_sub_sub[0] && str_sub_sub[0] != "") {
						ftpscheduleval.enable1[i] = str_sub_sub[1].split("\n")[0];
					}
					if ("getftpschedisstarthour1" == str_sub_sub[0] && str_sub_sub[0] != "") {
						ftpscheduleval.starthour1[i] = str_sub_sub[1].split("\n")[0];
					}
					if ("getftpschedisstartmin1" == str_sub_sub[0] && str_sub_sub[0] != "") {
						ftpscheduleval.startmin1[i] = str_sub_sub[1].split("\n")[0];

					}
					if ("getftpschedisstophour1" == str_sub_sub[0] && str_sub_sub[0] != "") {
						ftpscheduleval.stophour1[i] = str_sub_sub[1].split("\n")[0];

					}
					if ("getftpschedisstoptmin1" == str_sub_sub[0] && str_sub_sub[0] != "") {
						ftpscheduleval.stopmin1[i] = str_sub_sub[1].split("\n")[0];
					}
					if ("getftpschedtype2" == str_sub_sub[0] && str_sub_sub[0] != "") {
						ftpscheduleval.enable2[i] = str_sub_sub[1].split("\n")[0];
					}
					if ("getftpschedisstarthour2" == str_sub_sub[0] && str_sub_sub[0] != "") {
						ftpscheduleval.starthour2[i] = str_sub_sub[1].split("\n")[0];
					}
					if ("getftpschedisstartmin2" == str_sub_sub[0] && str_sub_sub[0] != "") {
						ftpscheduleval.startmin2[i] = str_sub_sub[1].split("\n")[0];
					}
					if ("getftpschedisstophour2" == str_sub_sub[0] && str_sub_sub[0] != "") {
						ftpscheduleval.stophour2[i] = str_sub_sub[1].split("\n")[0];
					}
					if ("getftpschedisstoptmin2" == str_sub_sub[0] && str_sub_sub[0] != "") {
						ftpscheduleval.stopmin2[i] = str_sub_sub[1].split("\n")[0];
					}
				}
				if(i == 8)
				{
					get_ftp_schedule(weeksel);
				}
				if(i++ < 8)
				{
					load_ftp_schedule_sub(i);
				}

			}
		}
	}
}

//获取ftp中的时间表信息
function load_ftp_schedule(num)
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

	//首先告诉设备需要获取哪个通道的信息
	if(num*1 == 250)
		XMLHttpRequestObject.open("GET", "../vb.htm?getftpschedchn="+0,true,loginUser,loginpsw);
	else
		XMLHttpRequestObject.open("GET", "../vb.htm?getftpschedchn="+num,true,loginUser,loginpsw);
	XMLHttpRequestObject.setRequestHeader("If-Modified-Since","0");
	XMLHttpRequestObject.send(null);

	XMLHttpRequestObject.onreadystatechange = function()
	{
		if(XMLHttpRequestObject.readyState == 4)
		{
			if(XMLHttpRequestObject.status == 200)
			{

				//然后获取此通道一个星期的信息
				load_ftp_schedule_sub(0);

				$("#getftpschedchn").val(num);
			}
		}
	}
}



function load_ftp_setting()
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

	XMLHttpRequestObject.open("GET", "../vb.htm?getftpenable&getftpservierip&getftpusername&getftppassword&getftpfoldername&getftpport",true,loginUser,loginpsw);
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








