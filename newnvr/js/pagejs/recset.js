function RecScheduleVal(){
	//
	this.record_time_num = new Array;

	//第一段
	this.recode_type0 =  new Array;
	this.start_hour0 =  new Array;
	this.start_min0 =  new Array;
	this.stop_hour0 =  new Array;
	this.stop_min0 =  new Array;

	//第二段
	this.recode_type1 =  new Array;
	this.start_hour1 =  new Array;
	this.start_min1 =  new Array;
	this.stop_hour1 =  new Array;
	this.stop_min1 =  new Array;

	//第三段
	this.recode_type2 =  new Array;
	this.start_hour2 =  new Array;
	this.start_min2 =  new Array;
	this.stop_hour2 =  new Array;
	this.stop_min2 =  new Array;

	//第四段
	this.recode_type3 =  new Array;
	this.start_hour3 =  new Array;
	this.start_min3 =  new Array;
	this.stop_hour3 =  new Array;
	this.stop_min3 =  new Array;

	//第五段
	this.recode_type4 =  new Array;
	this.start_hour4 =  new Array;
	this.start_min4 =  new Array;
	this.stop_hour4 =  new Array;
	this.stop_min4 =  new Array;

	//第六段
	this.recode_type5 =  new Array;
	this.start_hour5 =  new Array;
	this.start_min5 =  new Array;
	this.stop_hour5 =  new Array;
	this.stop_min5 =  new Array;
}


function STime(){
	this. nType =  new Array;
	this. start_hour =  new Array;
	this. start_min =  new Array;

	this. stop_hour =  new Array;
	this. stop_min =  new Array;
}
function WeekSelEnable()
{
	this.enbale = new Array;
}

var getrecchannum = 0;//通道
var getrecweekday = 0;//星期
var recscheduleval = new RecScheduleVal();
var recschedulevalcopy = new RecScheduleVal();
var weekselenable = new WeekSelEnable();
var str1 = "";
var cursel = "";
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
	getselectoption(8);
	load_rec_setting(1);

	$("#getrecchannum").change(function(){
		var index = $(this).val();
		if(index>=0)
		{
			if(index != cursel)
			{
				load_rec_setting($(this).val());
				cursel = index;
			}
		}
	});

});

//获取通道数
function getselectoption(num)
{

	$("#getrecchannum").children('option[value="1"]').wrap('<span>').hide();
	$("#getrecchannum").children('option[value="2"]').wrap('<span>').hide();
	$("#getrecchannum").children('option[value="3"]').wrap('<span>').hide();
	$("#getrecchannum").children('option[value="4"]').wrap('<span>').hide();
	$("#getrecchannum").children('option[value="5"]').wrap('<span>').hide();
	$("#getrecchannum").children('option[value="6"]').wrap('<span>').hide();
	$("#getrecchannum").children('option[value="7"]').wrap('<span>').hide();
	$("#getrecchannum").children('option[value="8"]').wrap('<span>').hide();
	$("#getrecchannum").children('option[value="9"]').wrap('<span>').hide();
	$("#getrecchannum").children('option[value="10"]').wrap('<span>').hide();
	$("#getrecchannum").children('option[value="11"]').wrap('<span>').hide();
	$("#getrecchannum").children('option[value="12"]').wrap('<span>').hide();
	$("#getrecchannum").children('option[value="13"]').wrap('<span>').hide();
	$("#getrecchannum").children('option[value="14"]').wrap('<span>').hide();
	$("#getrecchannum").children('option[value="15"]').wrap('<span>').hide();
	$("#getrecchannum").children('option[value="16"]').wrap('<span>').hide();
	$("#getrecchannum").children('option[value="17"]').wrap('<span>').hide();
	$("#getrecchannum").children('option[value="18"]').wrap('<span>').hide();
	$("#getrecchannum").children('option[value="19"]').wrap('<span>').hide();
	$("#getrecchannum").children('option[value="20"]').wrap('<span>').hide();
	$("#getrecchannum").children('option[value="21"]').wrap('<span>').hide();
	$("#getrecchannum").children('option[value="22"]').wrap('<span>').hide();
	$("#getrecchannum").children('option[value="23"]').wrap('<span>').hide();
	$("#getrecchannum").children('option[value="24"]').wrap('<span>').hide();
	$("#getrecchannum").children('option[value="25"]').wrap('<span>').hide();
	switch (num)
	{
		case 4:
		{

			$("#getrecchannum").children("span").children('option[value="1"]').unwrap();
			$("#getrecchannum").children("span").children('option[value="2"]').unwrap();
			$("#getrecchannum").children("span").children('option[value="3"]').unwrap();
			$("#getrecchannum").children("span").children('option[value="4"]').unwrap();
			$('#getrecchannum option[value="1"]').show();
			$('#getrecchannum option[value="2"]').show();
			$('#getrecchannum option[value="3"]').show();
			$('#getrecchannum option[value="4"]').show();
		}
			break;
		case 8:
		{
			$("#getrecchannum").children("span").children('option[value="1"]').unwrap();
			$("#getrecchannum").children("span").children('option[value="2"]').unwrap();
			$("#getrecchannum").children("span").children('option[value="3"]').unwrap();
			$("#getrecchannum").children("span").children('option[value="4"]').unwrap();
			$("#getrecchannum").children("span").children('option[value="5"]').unwrap();
			$("#getrecchannum").children("span").children('option[value="6"]').unwrap();
			$("#getrecchannum").children("span").children('option[value="7"]').unwrap();
			$("#getrecchannum").children("span").children('option[value="8"]').unwrap();

			$('#getrecchannum option[value="1"]').show();
			$('#getrecchannum option[value="2"]').show();
			$('#getrecchannum option[value="3"]').show();
			$('#getrecchannum option[value="4"]').show();
			$('#getrecchannum option[value="5"]').show();
			$('#getrecchannum option[value="6"]').show();
			$('#getrecchannum option[value="7"]').show();
			$('#getrecchannum option[value="8"]').show();

		}
			break;
		case 9:
		{
			//alert('hello');
			$("#getrecchannum").children("span").children('option[value="1"]').unwrap();
			$("#getrecchannum").children("span").children('option[value="2"]').unwrap();
			$("#getrecchannum").children("span").children('option[value="3"]').unwrap();
			$("#getrecchannum").children("span").children('option[value="4"]').unwrap();
			$("#getrecchannum").children("span").children('option[value="5"]').unwrap();
			$("#getrecchannum").children("span").children('option[value="6"]').unwrap();
			$("#getrecchannum").children("span").children('option[value="7"]').unwrap();
			$("#getrecchannum").children("span").children('option[value="8"]').unwrap();
			$("#getrecchannum").children("span").children('option[value="9"]').unwrap();

			$('#getrecchannum option[value="1"]').show();
			$('#getrecchannum option[value="2"]').show();
			$('#getrecchannum option[value="3"]').show();
			$('#getrecchannum option[value="4"]').show();
			$('#getrecchannum option[value="5"]').show();
			$('#getrecchannum option[value="6"]').show();
			$('#getrecchannum option[value="7"]').show();
			$('#getrecchannum option[value="8"]').show();
			$('#getrecchannum option[value="9"]').show();
		}
			break;
		case 25:
		{
			//alert('hello25');
			$("#getrecchannum").children("span").children('option[value="1"]').unwrap();
			$("#getrecchannum").children("span").children('option[value="2"]').unwrap();
			$("#getrecchannum").children("span").children('option[value="3"]').unwrap();
			$("#getrecchannum").children("span").children('option[value="4"]').unwrap();
			$("#getrecchannum").children("span").children('option[value="5"]').unwrap();
			$("#getrecchannum").children("span").children('option[value="6"]').unwrap();
			$("#getrecchannum").children("span").children('option[value="7"]').unwrap();
			$("#getrecchannum").children("span").children('option[value="8"]').unwrap();

			$("#getrecchannum").children("span").children('option[value="9"]').unwrap();
			$("#getrecchannum").children("span").children('option[value="10"]').unwrap();
			$("#getrecchannum").children("span").children('option[value="11"]').unwrap();
			$("#getrecchannum").children("span").children('option[value="12"]').unwrap();
			$("#getrecchannum").children("span").children('option[value="13"]').unwrap();
			$("#getrecchannum").children("span").children('option[value="14"]').unwrap();
			$("#getrecchannum").children("span").children('option[value="15"]').unwrap();
			$("#getrecchannum").children("span").children('option[value="16"]').unwrap();
			$("#getrecchannum").children("span").children('option[value="17"]').unwrap();

			$("#getrecchannum").children("span").children('option[value="18"]').unwrap();
			$("#getrecchannum").children("span").children('option[value="19"]').unwrap();
			$("#getrecchannum").children("span").children('option[value="20"]').unwrap();
			$("#getrecchannum").children("span").children('option[value="21"]').unwrap();
			$("#getrecchannum").children("span").children('option[value="22"]').unwrap();
			$("#getrecchannum").children("span").children('option[value="23"]').unwrap();
			$("#getrecchannum").children("span").children('option[value="24"]').unwrap();
			$("#getrecchannum").children("span").children('option[value="25"]').unwrap();


			$('#getrecchannum option[value="1"]').show();
			$('#getrecchannum option[value="2"]').show();
			$('#getrecchannum option[value="3"]').show();
			$('#getrecchannum option[value="4"]').show();
			$('#getrecchannum option[value="5"]').show();
			$('#getrecchannum option[value="6"]').show();
			$('#getrecchannum option[value="7"]').show();
			$('#getrecchannum option[value="8"]').show();
			$('#getrecchannum option[value="9"]').show();
			$('#getrecchannum option[value="10"]').show();
			$('#getrecchannum option[value="11"]').show();
			$('#getrecchannum option[value="12"]').show();
			$('#getrecchannum option[value="13"]').show();
			$('#getrecchannum option[value="14"]').show();
			$('#getrecchannum option[value="15"]').show();
			$('#getrecchannum option[value="16"]').show();
			$('#getrecchannum option[value="17"]').show();
			$('#getrecchannum option[value="18"]').show();
			$('#getrecchannum option[value="19"]').show();
			$('#getrecchannum option[value="20"]').show();
			$('#getrecchannum option[value="21"]').show();
			$('#getrecchannum option[value="22"]').show();
			$('#getrecchannum option[value="23"]').show();
			$('#getrecchannum option[value="24"]').show();
			$('#getrecchannum option[value="25"]').show();

		}
			break;
		default:
			break;
	}
}

function load_rec_setting(num)
{
	switch (num)
	{
		case 250:
			load_rec_week(0,0);
			break;
		default :
			load_rec_week(num-1,0);
			$("#getrecchannum").val(num);
			break;
	}
}

function load_rec_week(num,week)
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

	XMLHttpRequestObject.open("GET", "../vb.htm?getrecchannum="+num+"&getrecweekday="+week,true,loginUser,loginpsw);
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
				for (var j = 0; j < str_sub.length; j++)
				{
					var str_sub_sub = str_sub[j].split("=");
					if ("getrecchannum" == str_sub_sub[0] && str_sub_sub[0] != "") {
						getrecchannum = str_sub_sub[1].split("\n")[0];
						//alert(getrecchannum);
					}
					if ("getrecweekday" == str_sub_sub[0] && str_sub_sub[0] != "") {
						getrecweekday = str_sub_sub[1].split(";")[0];
						var str_sub_sub_sub = str_sub_sub[1].split(";");
						for(var i = 0 ;i < str_sub_sub_sub.length ; i++)
						{
							//alert(str_sub_sub_sub[i]);
							var str_sub_sub_sub_sub = str_sub_sub_sub[i].split(",");
							//alert(str_sub_sub_sub_sub);
							for(var k = 0;k< str_sub_sub_sub_sub.length;k++)
							{
								var str_sub_sub_sub_sub_sub =  str_sub_sub_sub_sub[k].split(":");
								getrecparam(str_sub_sub_sub_sub_sub);
							}
						}
					}
				}

				//继续获取
				var weekday = parseInt(week) + 1;
				if(parseInt(weekday) < 7)
				{
					load_rec_week(num,weekday);
				}

			}
		}
	}

}

function getrecparam(str_sub_sub_sub_sub_sub)
{
	if ("getrectotalseg" == str_sub_sub_sub_sub_sub[0] && str_sub_sub_sub_sub_sub[0] != "")
	{
		recscheduleval.record_time_num[getrecweekday] = str_sub_sub_sub_sub_sub[1];
	}

	//0
	if ("getrectype0" == str_sub_sub_sub_sub_sub[0] && str_sub_sub_sub_sub_sub[0] != "")
	{
		recscheduleval.recode_type0[getrecweekday] = str_sub_sub_sub_sub_sub[1];
	}
	if ("getrecstarthour0" == str_sub_sub_sub_sub_sub[0] && str_sub_sub_sub_sub_sub[0] != "")
	{
		recscheduleval.start_hour0[getrecweekday] = str_sub_sub_sub_sub_sub[1];
	}
	if ("getrecstartmin0" == str_sub_sub_sub_sub_sub[0] && str_sub_sub_sub_sub_sub[0] != "")
	{
		recscheduleval.start_min0[getrecweekday] = str_sub_sub_sub_sub_sub[1];
	}
	if ("getrecstophour0" == str_sub_sub_sub_sub_sub[0] && str_sub_sub_sub_sub_sub[0] != "")
	{
		recscheduleval.stop_hour0[getrecweekday] = str_sub_sub_sub_sub_sub[1];
	}
	if ("getrecstopmin0" == str_sub_sub_sub_sub_sub[0] && str_sub_sub_sub_sub_sub[0] != "")
	{
		recscheduleval.stop_min0[getrecweekday] = str_sub_sub_sub_sub_sub[1];
	}

	//1
	if ("getrectype1" == str_sub_sub_sub_sub_sub[0] && str_sub_sub_sub_sub_sub[0] != "")
	{
		recscheduleval.recode_type1[getrecweekday] = str_sub_sub_sub_sub_sub[1];
	}
	if ("getrecstarthour1" == str_sub_sub_sub_sub_sub[0] && str_sub_sub_sub_sub_sub[0] != "")
	{
		recscheduleval.start_hour1[getrecweekday] = str_sub_sub_sub_sub_sub[1];
	}
	if ("getrecstartmin1" == str_sub_sub_sub_sub_sub[0] && str_sub_sub_sub_sub_sub[0] != "")
	{
		recscheduleval.start_min1[getrecweekday] = str_sub_sub_sub_sub_sub[1];
	}
	if ("getrecstophour1" == str_sub_sub_sub_sub_sub[0] && str_sub_sub_sub_sub_sub[0] != "")
	{
		recscheduleval.stop_hour1[getrecweekday] = str_sub_sub_sub_sub_sub[1];
	}
	if ("getrecstopmin1" == str_sub_sub_sub_sub_sub[0] && str_sub_sub_sub_sub_sub[0] != "")
	{
		recscheduleval.stop_min1[getrecweekday] = str_sub_sub_sub_sub_sub[1];
	}

	//2
	if ("getrectype2" == str_sub_sub_sub_sub_sub[0] && str_sub_sub_sub_sub_sub[0] != "")
	{
		recscheduleval.recode_type2[getrecweekday] = str_sub_sub_sub_sub_sub[1];
	}
	if ("getrecstarthour2" == str_sub_sub_sub_sub_sub[0] && str_sub_sub_sub_sub_sub[0] != "")
	{
		recscheduleval.start_hour2[getrecweekday] = str_sub_sub_sub_sub_sub[1];
	}
	if ("getrecstartmin2" == str_sub_sub_sub_sub_sub[0] && str_sub_sub_sub_sub_sub[0] != "")
	{
		recscheduleval.start_min2[getrecweekday] = str_sub_sub_sub_sub_sub[1];
	}
	if ("getrecstophour2" == str_sub_sub_sub_sub_sub[0] && str_sub_sub_sub_sub_sub[0] != "")
	{
		recscheduleval.stop_hour2[getrecweekday] = str_sub_sub_sub_sub_sub[1];
	}
	if ("getrecstopmin2" == str_sub_sub_sub_sub_sub[0] && str_sub_sub_sub_sub_sub[0] != "")
	{
		recscheduleval.stop_min2[getrecweekday] = str_sub_sub_sub_sub_sub[1];
	}

	//3
	if ("getrectype3" == str_sub_sub_sub_sub_sub[0] && str_sub_sub_sub_sub_sub[0] != "")
	{
		recscheduleval.recode_type3[getrecweekday] = str_sub_sub_sub_sub_sub[1];
	}
	if ("getrecstarthour3" == str_sub_sub_sub_sub_sub[0] && str_sub_sub_sub_sub_sub[0] != "")
	{
		recscheduleval.start_hour3[getrecweekday] = str_sub_sub_sub_sub_sub[1];
	}
	if ("getrecstartmin3" == str_sub_sub_sub_sub_sub[0] && str_sub_sub_sub_sub_sub[0] != "")
	{
		recscheduleval.start_min3[getrecweekday] = str_sub_sub_sub_sub_sub[1];
	}
	if ("getrecstophour3" == str_sub_sub_sub_sub_sub[0] && str_sub_sub_sub_sub_sub[0] != "")
	{
		recscheduleval.stop_hour3[getrecweekday] = str_sub_sub_sub_sub_sub[1];
	}
	if ("getrecstopmin3" == str_sub_sub_sub_sub_sub[0] && str_sub_sub_sub_sub_sub[0] != "")
	{
		recscheduleval.stop_min3[getrecweekday] = str_sub_sub_sub_sub_sub[1];
	}

	//4
	if ("getrectype4" == str_sub_sub_sub_sub_sub[0] && str_sub_sub_sub_sub_sub[0] != "")
	{
		recscheduleval.recode_type4[getrecweekday] = str_sub_sub_sub_sub_sub[1];
	}
	if ("getrecstarthour4" == str_sub_sub_sub_sub_sub[0] && str_sub_sub_sub_sub_sub[0] != "")
	{
		recscheduleval.start_hour4[getrecweekday] = str_sub_sub_sub_sub_sub[1];
	}
	if ("getrecstartmin4" == str_sub_sub_sub_sub_sub[0] && str_sub_sub_sub_sub_sub[0] != "")
	{
		recscheduleval.start_min4[getrecweekday] = str_sub_sub_sub_sub_sub[1];
	}
	if ("getrecstophour4" == str_sub_sub_sub_sub_sub[0] && str_sub_sub_sub_sub_sub[0] != "")
	{
		recscheduleval.stop_hour4[getrecweekday] = str_sub_sub_sub_sub_sub[1];
	}
	if ("getrecstopmin4" == str_sub_sub_sub_sub_sub[0] && str_sub_sub_sub_sub_sub[0] != "")
	{
		recscheduleval.stop_min4[getrecweekday] = str_sub_sub_sub_sub_sub[1];
	}

	//5

	if ("getrectype5" == str_sub_sub_sub_sub_sub[0] && str_sub_sub_sub_sub_sub[0] != "")
	{
		recscheduleval.recode_type5[getrecweekday] = str_sub_sub_sub_sub_sub[1];
	}
	if ("getrecstarthour5" == str_sub_sub_sub_sub_sub[0] && str_sub_sub_sub_sub_sub[0] != "")
	{
		recscheduleval.start_hour5[getrecweekday] = str_sub_sub_sub_sub_sub[1];
	}
	if ("getrecstartmin5" == str_sub_sub_sub_sub_sub[0] && str_sub_sub_sub_sub_sub[0] != "")
	{
		recscheduleval.start_min5[getrecweekday] = str_sub_sub_sub_sub_sub[1];
	}
	if ("getrecstophour5" == str_sub_sub_sub_sub_sub[0] && str_sub_sub_sub_sub_sub[0] != "")
	{
		recscheduleval.stop_hour5[getrecweekday] = str_sub_sub_sub_sub_sub[1];
	}
	if ("getrecstopmin5" == str_sub_sub_sub_sub_sub[0] && str_sub_sub_sub_sub_sub[0] != "")
	{
		recscheduleval.stop_min5[getrecweekday] = str_sub_sub_sub_sub_sub[1];
	}

}


function editrecshcudel(num)
{

	$allDiv=$('<div id="all"></div>').css("opacity", 0.3);
	$editDiv=$('<div id="recedit">\
			<div class="receditHeader"><label>'+lang.recschdule+'</label></div>\
			<div class="receditContent">\
				<div>\
					<span><label>'+lang.rectip+'</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label id="weekdaytip">'+lang.recsun+'</label></span>\
				</div>\
				<div>\
					<label>'+lang.timeschdele+'1</label>\
					<input type="text"  onkeyup="if(keyboardFilter()) {value=NumberRangeLimt(this,0,24)}" onblur="if(this.value == (\'\')) this.value=(\'00\')" size="2" maxlength="2"  class="select" matchval="recstarthour1"/>\
					<label >:</label>\
					<input type="text" onkeyup="if(keyboardFilter()) {value=NumberRangeLimt(this,0,59)}" onblur="if(this.value == (\'\')) this.value=(\'00\')" size="2" maxlength="2"  class="select" matchval="recstartmin1"/>\
					<input type="text" onkeyup="if(keyboardFilter()) {value=NumberRangeLimt(this,0,24)}" onblur="if(this.value == (\'\')) this.value=(\'00\')" size="2" maxlength="2"  class="select" matchval="recstophour1"/>\
					<label >:</label>\
					<input type="text" onkeyup="if(keyboardFilter()) {value=NumberRangeLimt(this,0,24)}" onblur="if(this.value == (\'\')) this.value=(\'00\')" size="2" maxlength="2"    class="select" matchval="recstopmin1"/>\
					<input type="checkbox" id="recnormal1"  matchval="recnormal1"/>\
					<label>'+lang.recnormal+'</label>\
					<input type="checkbox" id="recmotion1"  matchval="recmotion1"/>\
					<label>'+lang.recmotion+'</label>\
				</div>\
				<div>\
					<label>'+lang.timeschdele+'2</label>\
					<input type="text"  onkeyup="if(keyboardFilter()) {value=NumberRangeLimt(this,0,24)}" onblur="if(this.value == (\'\')) this.value=(\'00\')" size="2" maxlength="2"  class="select" matchval="recstarthour2"/>\
					<label >:</label>\
					<input type="text" onkeyup="if(keyboardFilter()) {value=NumberRangeLimt(this,0,59)}" onblur="if(this.value == (\'\')) this.value=(\'00\')" size="2" maxlength="2"  class="select" matchval="recstartmin2"/>\
					<input type="text" onkeyup="if(keyboardFilter()) {value=NumberRangeLimt(this,0,24)}" onblur="if(this.value == (\'\')) this.value=(\'00\')" size="2" maxlength="2"  class="select" matchval="recstophour2"/>\
					<label >:</label>\
					<input type="text" onkeyup="if(keyboardFilter()) {value=NumberRangeLimt(this,0,24)}" onblur="if(this.value == (\'\')) this.value=(\'00\')" size="2" maxlength="2"    class="select" matchval="recstopmin2"/>\
					<input type="checkbox" id="recnormal2"  matchval="recnormal2"/>\
					<label>'+lang.recnormal+'</label>\
					<input type="checkbox" id="recmotion2"  matchval="recmotion2"/>\
					<label>'+lang.recmotion+'</label>\
				</div>\
				<div>\
					<label>'+lang.timeschdele+'3</label>\
					<input type="text"  onkeyup="if(keyboardFilter()) {value=NumberRangeLimt(this,0,24)}" onblur="if(this.value == (\'\')) this.value=(\'00\')" size="2" maxlength="2"  class="select" matchval="recstarthour3"/>\
					<label >:</label>\
					<input type="text" onkeyup="if(keyboardFilter()) {value=NumberRangeLimt(this,0,59)}" onblur="if(this.value == (\'\')) this.value=(\'00\')" size="2" maxlength="2"  class="select" matchval="recstartmin3"/>\
					<input type="text" onkeyup="if(keyboardFilter()) {value=NumberRangeLimt(this,0,24)}" onblur="if(this.value == (\'\')) this.value=(\'00\')" size="2" maxlength="2"  class="select" matchval="recstophour3"/>\
					<label >:</label>\
					<input type="text" onkeyup="if(keyboardFilter()) {value=NumberRangeLimt(this,0,24)}" onblur="if(this.value == (\'\')) this.value=(\'00\')" size="2" maxlength="2"    class="select" matchval="recstopmin3"/>\
					<input type="checkbox" id="recnormal3"  matchval="recnormal3"/>\
					<label>'+lang.recnormal+'</label>\
					<input type="checkbox" id="recmotion3"  matchval="recmotion3"/>\
					<label>'+lang.recmotion+'</label>\
				</div>\
				<div>\
					<label>'+lang.timeschdele+'4</label>\
					<input type="text"  onkeyup="if(keyboardFilter()) {value=NumberRangeLimt(this,0,24)}" onblur="if(this.value == (\'\')) this.value=(\'00\')" size="2" maxlength="2"  class="select" matchval="recstarthour4"/>\
					<label >:</label>\
					<input type="text" onkeyup="if(keyboardFilter()) {value=NumberRangeLimt(this,0,59)}" onblur="if(this.value == (\'\')) this.value=(\'00\')" size="2" maxlength="2"  class="select" matchval="recstartmin4"/>\
					<input type="text" onkeyup="if(keyboardFilter()) {value=NumberRangeLimt(this,0,24)}" onblur="if(this.value == (\'\')) this.value=(\'00\')" size="2" maxlength="2"  class="select" matchval="recstophour4"/>\
					<label >:</label>\
					<input type="text" onkeyup="if(keyboardFilter()) {value=NumberRangeLimt(this,0,24)}" onblur="if(this.value == (\'\')) this.value=(\'00\')" size="2" maxlength="2"    class="select" matchval="recstopmin4"/>\
					<input type="checkbox" id="recnormal4"  matchval="recnormal4"/>\
					<label>'+lang.recnormal+'</label>\
					<input type="checkbox" id="recmotion4"  matchval="recmotion4"/>\
					<label>'+lang.recmotion+'</label>\
				</div>\
				<div>\
					<label>'+lang.timeschdele+'5</label>\
					<input type="text"  onkeyup="if(keyboardFilter()) {value=NumberRangeLimt(this,0,24)}" onblur="if(this.value == (\'\')) this.value=(\'00\')" size="2" maxlength="2"  class="select" matchval="recstarthour5"/>\
					<label >:</label>\
					<input type="text" onkeyup="if(keyboardFilter()) {value=NumberRangeLimt(this,0,59)}" onblur="if(this.value == (\'\')) this.value=(\'00\')" size="2" maxlength="2"  class="select" matchval="recstartmin5"/>\
					<input type="text" onkeyup="if(keyboardFilter()) {value=NumberRangeLimt(this,0,24)}" onblur="if(this.value == (\'\')) this.value=(\'00\')" size="2" maxlength="2"  class="select" matchval="recstophour5"/>\
					<label >:</label>\
					<input type="text" onkeyup="if(keyboardFilter()) {value=NumberRangeLimt(this,0,24)}" onblur="if(this.value == (\'\')) this.value=(\'00\')" size="2" maxlength="2"    class="select" matchval="recstopmin5"/>\
					<input type="checkbox" id="recnormal5"  matchval="recnormal5"/>\
					<label>'+lang.recnormal+'</label>\
					<input type="checkbox" id="recmotion5"  matchval="recmotion5"/>\
					<label>'+lang.recmotion+'</label>\
				</div>\
				<div>\
					<label>'+lang.timeschdele+'6</label>\
					<input type="text"  onkeyup="if(keyboardFilter()) {value=NumberRangeLimt(this,0,24)}" onblur="if(this.value == (\'\')) this.value=(\'00\')" size="2" maxlength="2"  class="select" matchval="recstarthour6"/>\
					<label >:</label>\
					<input type="text" onkeyup="if(keyboardFilter()) {value=NumberRangeLimt(this,0,59)}" onblur="if(this.value == (\'\')) this.value=(\'00\')" size="2" maxlength="2"  class="select" matchval="recstartmin6"/>\
					<input type="text" onkeyup="if(keyboardFilter()) {value=NumberRangeLimt(this,0,24)}" onblur="if(this.value == (\'\')) this.value=(\'00\')" size="2" maxlength="2"  class="select" matchval="recstophour6"/>\
					<label >:</label>\
					<input type="text" onkeyup="if(keyboardFilter()) {value=NumberRangeLimt(this,0,59)}" onblur="if(this.value == (\'\')) this.value=(\'00\')" size="2" maxlength="2"    class="select" matchval="recstopmin6"/>\
					<input type="checkbox" id="recnormal6"  matchval="recnormal6"/>\
					<label>'+lang.recnormal+'</label>\
					<input type="checkbox" id="recmotion6"  matchval="recmotion6"/>\
					<label>'+lang.recmotion+'</label>\
				</div>\
				<div>\
				<label>'+lang.recyingyong+'</label>\
				</div>\
				<div>\
				<input type="checkbox" id="recall"  matchval="recall"/>\
				<label>'+lang.allchannel+'</label>\
				<input type="checkbox" id="recsun"  matchval="recsun"/>\
				<label>'+lang.recsun+'</label>\
				<input type="checkbox" id="recmon"  matchval="recmon"/>\
				<label>'+lang.recmon+'</label>\
				<input type="checkbox" id="recfeb"  matchval="recfeb"/>\
				<label>'+lang.recfeb+'</label>\
				<input type="checkbox" id="recwen"  matchval="recwen"/>\
				<label>'+lang.recwen+'</label>\
				<input type="checkbox" id="recthe"  matchval="recthe"/>\
				<label>'+lang.recthe+'</label>\
				<input type="checkbox" id="recfri"  matchval="recfri"/>\
				<label>'+lang.recfri+'</label>\
				<input type="checkbox" id="recsat"  matchval="recsat"/>\
				<label>'+lang.recsat+'</label>\
				</div>\
				<div style="padding-top: 5px; text-align: center;">\
				<input type="button"  value="'+lang.confirm+'" onclick="recplansave(\''+ num+'\');" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\
				<input id="receditCancel" type="button" value="'+lang.cancel+'" />\
				</div>\
			</div>\
		</div>');
	$('body').prepend($allDiv).prepend($editDiv);

	showrecparam(num);

	$( "#recedit" ).draggable({
		handle: ".receditHeader"
	});

	switch (num*1)
	{
		case 0:
			$("#recsun").attr('disabled','disabled');
			break;
		case 1:
			$("#recmon").attr('disabled','disabled');
			break;
		case 2:
			$("#recfeb").attr('disabled','disabled');
			break;
		case 3:
			$("#recwen").attr('disabled','disabled');
			break;
		case 4:
			$("#recthe").attr('disabled','disabled');
			break;
		case 5:
			$("#recfri").attr('disabled','disabled');
			break;
		case 6:
			$("#recsat").attr('disabled','disabled');
			break;
		default:
			$("#recsun").attr('disabled','disabled');
			break;
	}

	$("#recall").click(function(){
		if($("#recall").is(":checked"))
		{
			if(!$("#recsun").is(":checked"))
				$("#recsun").click();
			if(!$("#recmon").is(":checked"))
				$("#recmon").click();
			if(!$("#recfeb").is(":checked"))
				$("#recfeb").click();
			if(!$("#recwen").is(":checked"))
				$("#recwen").click();
			if(!$("#recthe").is(":checked"))
				$("#recthe").click();
			if(!$("#recfri").is(":checked"))
				$("#recfri").click();
			if(!$("#recsat").is(":checked"))
				$("#recsat").click();
		}
		else
		{
			if($("#recsun").is(":checked"))
				$("#recsun").click();
			if($("#recmon").is(":checked"))
				$("#recmon").click();
			if($("#recfeb").is(":checked"))
				$("#recfeb").click();
			if($("#recwen").is(":checked"))
				$("#recwen").click();
			if($("#recthe").is(":checked"))
				$("#recthe").click();
			if($("#recfri").is(":checked"))
				$("#recfri").click();
			if($("#recsat").is(":checked"))
				$("#recsat").click();

			switch (num*1)
			{
				case 0:
					$("#recsun").click();
					break;
				case 1:
					$("#recmon").click();
					break;
				case 2:
					$("#recfeb").click();
					break;
				case 3:
					$("#recwen").click();
					break;
				case 4:
					$("#recthe").click();
					break;
				case 5:
					$("#recfri").click();
					break;
				case 6:
					$("#recsat").click();
					break;
			}
		}

	});

	$('#receditCancel').click(function(){
		$allDiv.remove();
		$editDiv.remove();
	});
}


//获取需要设置的参数并保存在备用数组中 并进行时间的优化
function getsavingrecvalue(num)
{
	var  recTime = new STime();
	//录像类型 1：普通录像 2：动态录像  3：普通录像&&动态录像
	var setrectyoe0 = 0;
	if($("#recnormal1").is(":checked"))
	{
		setrectyoe0 = setrectyoe0 + 1;
	}
	if($("#recmotion1").is(":checked"))
	{
		setrectyoe0 = setrectyoe0 + 2;
	}

	recTime.nType[0] = setrectyoe0;


	var setrectyoe1 = 0;
	if($("#recnormal2").is(":checked"))
	{
		setrectyoe1 = setrectyoe1 + 1;
	}
	if($("#recmotion2").is(":checked"))
	{
		setrectyoe1 = setrectyoe1 + 2;
	}

	recTime.nType[1] = setrectyoe1;

	var setrectyoe2 = 0;
	if($("#recnormal3").is(":checked"))
	{
		setrectyoe2 = setrectyoe2 + 1;
	}
	if($("#recmotion3").is(":checked"))
	{
		setrectyoe2 = setrectyoe2 + 2;
	}

	recTime.nType[2] = setrectyoe2;

	var setrectyoe3 = 0;
	if($("#recnormal4").is(":checked"))
	{
		setrectyoe3 = setrectyoe3 + 1;
	}
	if($("#recmotion4").is(":checked"))
	{
		setrectyoe3 = setrectyoe3 + 2;
	}

	recTime.nType[3] = setrectyoe3;

	var setrectyoe4 = 0;
	if($("#recnormal5").is(":checked"))
	{
		setrectyoe4 = setrectyoe4 + 1;
	}
	if($("#recmotion5").is(":checked"))
	{
		setrectyoe4 = setrectyoe4 + 2;
	}

	recTime.nType[4] = setrectyoe4;

	var setrectyoe5 = 0;
	if($("#recnormal6").is(":checked"))
	{
		setrectyoe5 = setrectyoe5 + 1;
	}
	if($("#recmotion6").is(":checked"))
	{
		setrectyoe5 = setrectyoe5 + 2;
	}
	recTime.nType[5] = setrectyoe5;
	//获取时间段起始时间和结束时间


	recTime.start_hour[0] = $("[matchval='recstarthour1']").val();
	recTime.start_min[0] = $("[matchval='recstartmin1']").val();
	recTime.stop_hour[0] = $("[matchval='recstophour1']").val();
	recTime.stop_min[0] = $("[matchval='recstopmin1']").val();

	//-------------
	recTime.start_hour[1] = $("[matchval='recstarthour2']").val();
	recTime.start_min[1]= $("[matchval='recstartmin2']").val();
	recTime.stop_hour[1] = $("[matchval='recstophour2']").val();
	recTime.stop_min[1] = $("[matchval='recstopmin2']").val();

	recTime.start_hour[2] = $("[matchval='recstarthour3']").val();
	recTime.start_min[2] = $("[matchval='recstartmin3']").val();
	recTime.stop_hour[2] = $("[matchval='recstophour3']").val();
	recTime.stop_min[2] = $("[matchval='recstopmin3']").val();

	recTime.start_hour[3] = $("[matchval='recstarthour4']").val();
	recTime.start_min[3] = $("[matchval='recstartmin4']").val();
	recTime.stop_hour[3] = $("[matchval='recstophour4']").val();
	recTime.stop_min[3] = $("[matchval='recstopmin4']").val();

	recTime.start_hour[4] = $("[matchval='recstarthour5']").val();
	recTime.start_min[4] = $("[matchval='recstartmin5']").val();
	recTime.stop_hour[4] = $("[matchval='recstophour5']").val();
	recTime.stop_min[4] = $("[matchval='recstopmin5']").val();

	recTime.start_hour[5] = $("[matchval='recstarthour6']").val();
	recTime.start_min[5] = $("[matchval='recstartmin6']").val();
	recTime.stop_hour[5] = $("[matchval='recstophour6']").val();
	recTime.stop_min[5] = $("[matchval='recstopmin6']").val();

	for (var i = 0; i < 5;i++)
	{
		for (var j = i+1 ; j <= 5;j++)
		{
			if (recTime.nType[i]*1 == recTime.nType[j]*1)
			{
				//1, 1开始时间 < 2 开始时间
				if (recTime.start_hour[i]*1 < recTime.start_hour[j]*1 || (recTime.start_hour[i]*1 == recTime.start_hour[j]*1 && recTime.start_min[i]*1 < recTime.start_min[j]*1))
				{
					//1,1 结束时间 < 2 结束时间
					if (recTime.stop_hour[i]*1 < recTime.stop_hour[j]*1 || (recTime.stop_hour[i]*1 == recTime.stop_hour[j]*1 && recTime.stop_min[i]*1 < recTime.stop_min[j]*1))
					{
						//2,1结束时间  > 2 开始时间
						if (recTime.stop_hour[i]*1 > recTime.start_hour[j]*1 || (recTime.start_hour[i]*1 == recTime.start_hour[j]*1 && recTime.stop_min[i]*1 >= recTime.start_min[j]*1))
						{
							recTime.stop_hour[i] = recTime.stop_hour[j];
							recTime.stop_min[i] = recTime.stop_min[j];
							recTime.start_hour[j] = 0;
							recTime.start_min[j] = 0;
							recTime.stop_hour[j] = 0;
							recTime.stop_min[j] = 0;
							recTime.nType[j]= 0;
						}

					}
					//2, 1 结束时间 > 2 结束时间
					else if (recTime.stop_hour[i]*1 > recTime.stop_hour[j]*1 || (recTime.stop_hour[i]*1 == recTime.stop_hour[j]*1 && recTime.stop_min[i]*1 > recTime.stop_min[j]*1))
					{
						recTime.start_hour[j] = 0;
						recTime.start_min[j] = 0;
						recTime.stop_hour[j] = 0;
						recTime.stop_min[j] = 0;
						recTime.nType[j] = 0;
						//m_nType[j] = 0;
					}
				}

				//2, 1开始时间 > 2 开始时间
				else if (recTime.start_hour[i]*1 > recTime.start_hour[j]*1 || (recTime.start_hour[i]*1 == recTime.start_hour[j]*1 && recTime.start_min[i]*1 >= recTime.start_min[j]*1))
				{
					//1,1 结束时间 < 2 结束时间
					if (recTime.stop_hour[i]*1 < recTime.stop_hour[j]*1 || (recTime.stop_hour[i]*1 == recTime.stop_hour[j]*1 && recTime.stop_min[i]*1 < recTime.stop_min[j]*1))
					{
						recTime.start_hour[i] = recTime.start_hour[j];
						recTime.start_min[i] = recTime.start_min[j];
						recTime.stop_hour[i] = recTime.stop_hour[j];
						recTime.stop_min[i] = recTime.stop_min[j];

						recTime.start_hour[j] = 0;
						recTime.start_min[j] = 0;
						recTime.stop_hour[j] = 0;
						recTime.stop_min[j] = 0;
						recTime.nType[j] = 0;
					}
					//2, 1 结束时间 > 2 结束时间
					else if (recTime.stop_hour[i]*1 > recTime.stop_hour[j]*1 || (recTime.stop_hour[i]*1 == recTime.stop_hour[j]*1 && recTime.stop_min[i]*1 >= recTime.stop_min[j]*1))
					{
						//1, 2结束时间 > 1 开始时间
						if (recTime.stop_hour[j] > recTime.start_hour[i] || (recTime.stop_hour[j] == recTime.start_hour[i] && recTime.stop_min[j] >= recTime.start_min[i]))
						{
							recTime.start_hour[i] = recTime.start_hour[j];
							recTime.start_min[i] = recTime.start_min[j];
							recTime.start_hour[j] = 0;
							recTime.start_min[j] = 0;
							recTime.stop_hour[j] = 0;
							recTime.stop_min[j] = 0;
							recTime.nType[j] = 0;
						}
					}
				}
				//3,1 开始时间 == 2 开始时间
				else if (recTime.start_hour[i]*1 == recTime.start_hour[j]*1 && recTime.start_min[i]*1 == recTime.start_min[j]*1)
				{

				}

			}
		}
	}

	recschedulevalcopy.recode_type0[num] = recTime.nType[0];
	recschedulevalcopy.recode_type1[num] = recTime.nType[1];
	recschedulevalcopy.recode_type2[num] = recTime.nType[2];
	recschedulevalcopy.recode_type3[num] = recTime.nType[3];
	recschedulevalcopy.recode_type4[num] = recTime.nType[4];
	recschedulevalcopy.recode_type5[num] = recTime.nType[5];

	recschedulevalcopy.start_hour0[num] = recTime.start_hour[0];
	recschedulevalcopy.start_min0[num] = recTime.start_min[0];
	recschedulevalcopy.stop_hour0[num] = recTime.stop_hour[0];
	recschedulevalcopy.stop_min0[num] = recTime.stop_min[0];

	recschedulevalcopy.start_hour1[num] = recTime.start_hour[1];
	recschedulevalcopy.start_min1[num] = recTime.start_min[1];
	recschedulevalcopy.stop_hour1[num] = recTime.stop_hour[1];
	recschedulevalcopy.stop_min1[num] = recTime.stop_min[1];

	recschedulevalcopy.start_hour2[num] = recTime.start_hour[2];
	recschedulevalcopy.start_min2[num] = recTime.start_min[2];
	recschedulevalcopy.stop_hour2[num] = recTime.stop_hour[2];
	recschedulevalcopy.stop_min2[num] = recTime.stop_min[2];

	recschedulevalcopy.start_hour3[num] = recTime.start_hour[3];
	recschedulevalcopy.start_min3[num] = recTime.start_min[3];
	recschedulevalcopy.stop_hour3[num] = recTime.stop_hour[3];
	recschedulevalcopy.stop_min3[num] = recTime.stop_min[3];

	recschedulevalcopy.start_hour4[num] = recTime.start_hour[4];
	recschedulevalcopy.start_min4[num] = recTime.start_min[4];
	recschedulevalcopy.stop_hour4[num] = recTime.stop_hour[4];
	recschedulevalcopy.stop_min4[num] = recTime.stop_min[4];

	recschedulevalcopy.start_hour5[num] = recTime.start_hour[5];
	recschedulevalcopy.start_min5[num] = recTime.start_min[5];
	recschedulevalcopy.stop_hour5[num] = recTime.stop_hour[5];
	recschedulevalcopy.stop_min5[num] = recTime.stop_min[5];




	//获取总共的录像的段数
	var setrectotalseg = 0;
	if(recschedulevalcopy.recode_type0[num])
	{
		setrectotalseg = setrectotalseg + 1;
	}
	if(recschedulevalcopy.recode_type1[num])
	{
		setrectotalseg = setrectotalseg + 1;
	}
	if(recschedulevalcopy.recode_type2[num])
	{
		setrectotalseg = setrectotalseg + 1;
	}
	if(recschedulevalcopy.recode_type3[num])
	{
		setrectotalseg = setrectotalseg + 1;
	}
	if(recschedulevalcopy.recode_type4[num])
	{
		setrectotalseg = setrectotalseg + 1;
	}
	if(recschedulevalcopy.recode_type5[num])
	{
		setrectotalseg = setrectotalseg + 1;
	}
	recschedulevalcopy.record_time_num[num] = setrectotalseg;
}


function recplansave(num)
{
	recschedulevalcopy = recscheduleval;

	//获取需要保持的数据
	getsavingrecvalue(num);

	//保持一个星期的数据

	if($("#recsun").is(":checked")) {
		weekselenable.enbale[0] = 1;
	}
	else
	{
		weekselenable.enbale[0] = 0;
	}

	if($("#recmon").is(":checked")) {
		weekselenable.enbale[1] = 1;
	}
	else
	{
		weekselenable.enbale[1] = 0;
	}

	if($("#recfeb").is(":checked")) {
		weekselenable.enbale[2] = 1;
	}
	else
	{
		weekselenable.enbale[2] = 0;
	}

	if($("#recwen").is(":checked")) {
		weekselenable.enbale[3] = 1;
	}
	else
	{
		weekselenable.enbale[3] = 0;
	}

	if($("#recthe").is(":checked")) {
		weekselenable.enbale[4] = 1;
	}
	else
	{
		weekselenable.enbale[4] = 0;
	}

	if($("#recfri").is(":checked")) {
		weekselenable.enbale[5] = 1;
	}
	else
	{
		weekselenable.enbale[5] = 0;
	}

	if($("#recsat").is(":checked")) {
		weekselenable.enbale[6] = 1;
	}
	else
	{
		weekselenable.enbale[6] = 0;
	}
	//recsaveoneweek(num,num);
	recsaveallweek(0,num);//从星期天开始
	recscheduleval = recschedulevalcopy;
}

function recsaveallweek(index,num)
{
	if(weekselenable.enbale[index]*1 == 1)
	{
		recsaveoneweek(index,num);
	}
	else
	{
		if(index*1 == 7)
			return;
		index = index*1 + 1;
		recsaveallweek(index,num);
		return;
	}

	var XMLHttpRequestObject = null;
	if (window.XMLHttpRequest)
	{
		XMLHttpRequestObject = new XMLHttpRequest();
	}
	else if (window.ActiveXObject)
	{
		XMLHttpRequestObject = new ActiveXObject("Microsoft.XMLHTTP");
	}
	//alert(str1);
	XMLHttpRequestObject.open("GET", str1, true,loginUser,loginpsw);
	XMLHttpRequestObject.setRequestHeader("cache-control","no-cache");
	XMLHttpRequestObject.setRequestHeader("context-type","text/xml;charset=utf-8");
	XMLHttpRequestObject.setRequestHeader("Content-Type","application/x-www-form-encodeURIComponent");
	XMLHttpRequestObject.setRequestHeader("If-Modified-Since","0");
	XMLHttpRequestObject.send(null);
	XMLHttpRequestObject.onreadystatechange = function() {

		if (XMLHttpRequestObject.readyState == 4) {

			if (XMLHttpRequestObject.status == 200) {

				index = index*1 + 1;
				recsaveallweek(index,num);
				if(index*1 == 7)
				{
					window.parent.parent.save2(lang.saved);
					return;
				}
			}
		}
	}
}

function recsaveoneweek(week,num)
{
	str1 = "";
	var str="";
	str = str + "setrecchannum=";
	str = str + getrecchannum;

	str = str + "&setrecweekday=";
	str = str + week;

	str = str + ";setrectotalseg:";
	str = str + recschedulevalcopy.record_time_num[num];

	//时间段1
	str = str + ";setrectype0:";
	str = str + recschedulevalcopy.recode_type0[num];
	str = str + ",setrecstarthour0:";
	str = str + recschedulevalcopy.start_hour0[num];
	str = str + ",setrecstartmin0:";
	str = str + recschedulevalcopy.start_min0[num];
	str = str + ",setrecstophour0:";
	str = str + recschedulevalcopy.stop_hour0[num];
	str = str + ",setrecstopmin0:";
	str = str + recschedulevalcopy.stop_min0[num];

	//时间段2
	str = str + ";setrectype1:";
	str = str + recschedulevalcopy.recode_type1[num];
	str = str + ",setrecstarthour1:";
	str = str + recschedulevalcopy.start_hour1[num];
	str = str + ",setrecstartmin1:";
	str = str + recschedulevalcopy.start_min1[num];
	str = str + ",setrecstophour1:";
	str = str + recschedulevalcopy.stop_hour1[num];
	str = str + ",setrecstopmin1:";
	str = str + recschedulevalcopy.stop_min1[num];

	//时间段3
	str = str + ";setrectype2:";
	str = str + recschedulevalcopy.recode_type2[num];
	str = str + ",setrecstarthour2:";
	str = str + recschedulevalcopy.start_hour2[num];
	str = str + ",setrecstartmin2:";
	str = str + recschedulevalcopy.start_min2[num];
	str = str + ",setrecstophour2:";
	str = str + recschedulevalcopy.stop_hour2[num];
	str = str + ",setrecstopmin2:";
	str = str + recschedulevalcopy.stop_min2[num];

	//时间段4
	str = str + ";setrectype3:";
	str = str + recschedulevalcopy.recode_type3[num];
	str = str + ",setrecstarthour3:";
	str = str + recschedulevalcopy.start_hour3[num];
	str = str + ",setrecstartmin3:";
	str = str + recschedulevalcopy.start_min3[num];
	str = str + ",setrecstophour3:";
	str = str + recschedulevalcopy.stop_hour3[num];
	str = str + ",setrecstopmin3:";
	str = str + recschedulevalcopy.stop_min3[num];

	//时间段5
	str = str + ";setrectype4:";
	str = str + recschedulevalcopy.recode_type4[num];
	str = str + ",setrecstarthour4:";
	str = str + recschedulevalcopy.start_hour4[num];
	str = str + ",setrecstartmin4:";
	str = str + recschedulevalcopy.start_min4[num];
	str = str + ",setrecstophour4:";
	str = str + recschedulevalcopy.stop_hour4[num];
	str = str + ",setrecstopmin4:";
	str = str + recschedulevalcopy.stop_min4[num];

	//时间段6
	str = str + ";setrectype5:";
	str = str + recschedulevalcopy.recode_type5[num];
	str = str + ",setrecstarthour5:";
	str = str + recschedulevalcopy.start_hour5[num];
	str = str + ",setrecstartmin5:";
	str = str + recschedulevalcopy.start_min5[num];
	str = str + ",setrecstophour5:";
	str = str + recschedulevalcopy.stop_hour5[num];
	str = str + ",setrecstopmin5:";
	str = str + recschedulevalcopy.stop_min5[num];

	str1 = "../vb.htm?"+str;


}

function showrecparam(num)
{
	$("[matchval='recstarthour1']").val(recscheduleval.start_hour0[num]);
	$("[matchval='recstartmin1']").val(recscheduleval.start_min0[num]);
	$("[matchval='recstophour1']").val(recscheduleval.stop_hour0[num]);
	$("[matchval='recstopmin1']").val(recscheduleval.stop_min0[num]);


	if(recscheduleval.recode_type0[num]*1 == 1)
	{
		$("#recnormal1").click();
	}
	else if(recscheduleval.recode_type0[num]*1 == 2)
	{
		$("#recmotion1").click();
	}
	else if(recscheduleval.recode_type0[num]*1 == 3)
	{
		$("#recnormal1").click();
		$("#recmotion1").click();
	}

	$("[matchval='recstarthour2']").val(recscheduleval.start_hour1[num]);
	$("[matchval='recstartmin2']").val(recscheduleval.start_min1[num]);
	$("[matchval='recstophour2']").val(recscheduleval.stop_hour1[num]);
	$("[matchval='recstopmin2']").val(recscheduleval.stop_min1[num]);

	if(recscheduleval.recode_type1[num]*1 == 1)
	{
		$("#recnormal2").click();
	}
	else if(recscheduleval.recode_type1[num]*1 == 2)
	{
		$("#recmotion2").click();
	}
	else if(recscheduleval.recode_type1[num]*1 == 3)
	{
		$("#recnormal2").click();
		$("#recmotion2").click();
	}

	$("[matchval='recstarthour3']").val(recscheduleval.start_hour2[num]);
	$("[matchval='recstartmin3']").val(recscheduleval.start_min2[num]);
	$("[matchval='recstophour3']").val(recscheduleval.stop_hour2[num]);
	$("[matchval='recstopmin3']").val(recscheduleval.stop_min2[num]);

	if(recscheduleval.recode_type2[num]*1 == 1)
	{
		$("#recnormal3").click();
	}
	else if(recscheduleval.recode_type2[num]*1 == 2)
	{
		$("#recmotion3").click();
	}
	else if(recscheduleval.recode_type2[num]*1 == 3)
	{
		$("#recnormal3").click();
		$("#recmotion3").click();
	}

	$("[matchval='recstarthour4']").val(recscheduleval.start_hour3[num]);
	$("[matchval='recstartmin4']").val(recscheduleval.start_min3[num]);
	$("[matchval='recstophour4']").val(recscheduleval.stop_hour3[num]);
	$("[matchval='recstopmin4']").val(recscheduleval.stop_min3[num]);

	if(recscheduleval.recode_type3[num]*1 == 1)
	{
		$("#recnormal4").click();
	}
	else if(recscheduleval.recode_type3[num]*1 == 2)
	{
		$("#recmotion4").click();
	}
	else if(recscheduleval.recode_type3[num]*1 == 3)
	{
		$("#recnormal4").click();
		$("#recmotion4").click();
	}

	$("[matchval='recstarthour5']").val(recscheduleval.start_hour4[num]);
	$("[matchval='recstartmin5']").val(recscheduleval.start_min4[num]);
	$("[matchval='recstophour5']").val(recscheduleval.stop_hour4[num]);
	$("[matchval='recstopmin5']").val(recscheduleval.stop_min4[num]);

	if(recscheduleval.recode_type4[num]*1 == 1)
	{
		$("#recnormal5").click();
	}
	else if(recscheduleval.recode_type4[num]*1 == 2)
	{
		$("#recmotion5").click();
	}
	else if(recscheduleval.recode_type4[num]*1 == 3)
	{
		$("#recnormal5").click();
		$("#recmotion5").click();
	}

	$("[matchval='recstarthour6']").val(recscheduleval.start_hour5[num]);
	$("[matchval='recstartmin6']").val(recscheduleval.start_min5[num]);
	$("[matchval='recstophour6']").val(recscheduleval.stop_hour5[num]);
	$("[matchval='recstopmin6']").val(recscheduleval.stop_min5[num]);

	if(recscheduleval.recode_type5[num]*1 == 1)
	{
		$("#recnormal6").click();
	}
	else if(recscheduleval.recode_type5[num]*1 == 2)
	{
		$("#recmotion6").click();
	}
	else if(recscheduleval.recode_type5[num]*1 == 3)
	{
		$("#recnormal6").click();
		$("#recmotion6").click();
	}

	switch (num)
	{
		case 0:
			$("#recsun").click();
			$("#weekdaytip").text(lang.recsun);
			break;
		case 1:
			$("#recmon").click();
			$("#weekdaytip").text(lang.recmon);
			break;
		case 2:
			$("#recfeb").click();
			$("#weekdaytip").text(lang.recfeb);
			break;
		case 3:
			$("#recwen").click();
			$("#weekdaytip").text(lang.recwen);
			break;
		case 4:
			$("#recthe").click();
			$("#weekdaytip").text(lang.recthe);
			break;
		case 5:
			$("#recfri").click();
			$("#weekdaytip").text(lang.recfri);
			break;
		case 6:
			$("#recsat").click();
			$("#weekdaytip").text(lang.recsat);
			break;
	}
}
