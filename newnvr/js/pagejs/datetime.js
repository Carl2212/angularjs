//参数
var defaultLang = 'cn';
//测试参数
var test_ip = '172.18.194.203';
var test_user = 'admin';

function InitConfig() {
	//初始化时间
	InitSelecthour();
	InitSelectminutes();
	InitSelectseconds();
	InitSelecttimezone();//初始化时区
	//初始操作
	var d=new Date();
	$('#setDate').val(d.Format("yyyy-MM-dd"));

	$(".datepicker").datepicker({
		language : 'zh-CN',
		autoclose : true,
		todayBtn : true,
		clearBtn : true,
		format : "yyyy-mm-dd"
	});

	$('input[name="ucModel"]').on("click",function(){
		console.log($(this));
		ucModelChecked($(this));
	});

	ucModelChecked($("#ntpsettime"));//初始化
	load_time();
	setDeviceTime();

	//保存
	$("#datetime_save").click(function(){
		datetime_save();
	});
}
function ucModelChecked(elem) {
	var selected_model_id = elem.val();
	$("input[name=ucModel]").not(elem).each(function(){
		var model_id = $(this).val();
		$(this).prop("checked",false);
		$("dt[name=ucModelcontent][model-id="+model_id+"]").find("input,button,a,select").attr('disabled','disabled');
	});
	elem.attr("checked","checked");
	$("dt[name=ucModelcontent][model-id="+selected_model_id+"]").find("input,button,a,select").prop('disabled',false);
}
function setDeviceTime(){
	var pc_time=new Date();
	var pc_t=pc_time.getTime();
	pc_t+=1000;
	pc_time=new Date(pc_t);
	$('#pc_time').val(pc_time.Format("yyyy-MM-dd hh:mm:ss"));
	setTimeout("setDeviceTime()", 1000);
}


function load_time()
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

	XMLHttpRequestObject.open("GET", "../vb.htm?getsystemtimeyear&getsystemtimemonth&getsystemtimeday&getsystemtimehour&getsystemtimeminutes&getsystemtimeseconds&getntpserver&getntpport&getntinterval&getntpdateformat&getntpdateseparator&getntptimeformat&getntptimezone&getntpcontrol",true,loginUser,loginpsw);
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
				var sec = get_split_span_val(str_sub,"getsystemtimeseconds");
				var hour = get_split_span_val(str_sub,"getsystemtimehour");
				var min = get_split_span_val(str_sub,"getsystemtimeminutes");
				var year = get_split_span_val(str_sub,"getsystemtimeyear");
				var month = get_split_span_val(str_sub,"getsystemtimemonth");
				var day = get_split_span_val(str_sub,"getsystemtimeday");
				var mode = get_split_span_val(str_sub,"getntpcontrol");
				if(mode == 0)
				{
					ucModelChecked($('#manualsettime'));
				}
				else if(mode == 1)
				{
					ucModelChecked($('#pcsettime'));
				}else{
					ucModelChecked($('#ntpsettime'));
				}
				d=new Date(year,month-1,day,hour,min,sec);			//rtJson.ucMonth-1   跟设备的月分有差别
				var setdate = d.Format("yyyy-MM-dd");
				$('#setDate').val(setdate);
				//$(".datepicker").datepicker("getDate").toLocaleString();//获取
				$(".datepicker").datepicker("setDate", setdate);//设置
			}
	    }
	}
}



function datetime_save()
{
	var str="setuser=";
	str = str + loginUser;
	var set_flag=parseInt($("input[name='ucModel']:checked").val());
	switch(set_flag){
		case 0:
			if($('#setDate').val()==false){
				window.parent.parent.save2(lang.setDate);
			}
			var date = $('#setDate').val();

			var year = date.split('-')[0];
			var month =date.split('-')[1];
			var day = date.split('-')[2];

			str = str + "&setsystemtimeyear=";
			str = str + year;
			str = str + "&setsystemtimemonth=";
			str = str + month;
			str = str + "&setsystemtimeday=";
			str = str + day;

			str = str + "&setsystemtimehour=";
			str = str + $("#getsystemtimehour").val();
			str = str + "&setsystemtimeminutes=";
			str = str + $("#getsystemtimeminutes").val();
			str = str + "&setsystemtimeseconds=";
			str = str + $("#getsystemtimeseconds").val();

			str = str + "&setntpcontrol=";
			str = str + 0;
			str = str + "&setntpserver=";
			str = str + $("#getntpserver").val();
			str = str + "&setntptimezone=";
			str = str + $("#getntptimezone").val();
			str = str + "&setntinterval=";
			str = str + $("#getntinterval").val();
			str = str + "&setntpdateformat=";
			str = str + $("#getntpdateformat").val();
			str = str + "&setntpdateseparator=";
			str = str + $("#getntpdateseparator").val();
			str = str + "&setntptimeformat=";
			str = str + $("#getntptimeformat").val();
			str = str + "&setntpport=";
			str = str + $("#getntpport").val();

			break;
		case 1:
			var d=new Date();

			str = str + "&setsystemtimeyear=";
			str = str + d.getFullYear();
			str = str + "&setsystemtimemonth=";
			str = str + d.getMonth()+1;
			str = str + "&setsystemtimeday=";
			str = str + d.getDate();

			str = str + "&setsystemtimehour=";
			str = str + d.getHours();
			str = str + "&setsystemtimeminutes=";
			str = str + d.getMinutes();
			str = str + "&setsystemtimeseconds=";
			str = str + d.getSeconds();

			str = str + "&setntpcontrol=";
			str = str + 0;
			str = str + "&setntpserver=";
			str = str + $("#getntpserver").val();
			str = str + "&setntptimezone=";
			str = str + $("#getntptimezone").val();
			str = str + "&setntinterval=";
			str = str + $("#getntinterval").val();
			str = str + "&setntpdateformat=";
			str = str + $("#getntpdateformat").val();
			str = str + "&setntpdateseparator=";
			str = str + $("#getntpdateseparator").val();
			str = str + "&setntptimeformat=";
			str = str + $("#getntptimeformat").val();
			str = str + "&setntpport=";
			str = str + $("#getntpport").val();
			break;
		case 2:
			str = str + "&setntpserver=";
			str = str + $("#getntpserver").val();
			str = str + "&setntptimezone=";
			str = str + $("#getntptimezone").val();
			str = str + "&setntpcontrol=";
			str = str + 1;
			str = str + "&setntinterval=";
			str = str + $("#getntinterval").val();
			str = str + "&setntpdateformat=";
			str = str + $("#getntpdateformat").val();
			str = str + "&setntpdateseparator=";
			str = str + $("#getntpdateseparator").val();
			str = str + "&setntptimeformat=";
			str = str + $("#getntptimeformat").val();
			str = str + "&setntpport=";
			str = str + $("#getntpport").val();

			break;
	}

    var str1 = "../vb.htm?"+str;
    save_val(str1,13,0);

}