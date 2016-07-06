//参数
var defaultLang = 'cn';
//测试参数
var test_ip = '172.18.194.203';
var test_user = 'admin';

function InitConfig() {
	//语言初始化
	langJs=$.cookies.get('lang') || defaultLang;
	$.cookies.set('lang', langJs, {'hoursToLive': 24 * 365});

	$.getScript("../lang/"+langJs+".js",function(){
		InitLang();
	});
}
function InitLang() {
	$("[data-id]").each(function(){
		$(this).text(lang[$(this).attr("data-id")]);
	});
	$("[value-id]").each(function(){
		$(this).val(lang[$(this).attr("value-id")]);
	});
}






var d=new Date();
var pc_time=new Date();
if($.cookies.get('userName')) {
	loginUser = $.cookies.get('userName');
}
if($.cookies.get('pwd')) {
	loginpsw = $.cookies.get('pwd');
}

$(document).ready(function(){
	//初始操作
	//$('#setDate').val(d.Format("yyyy-MM-dd"));
    //
	//var $datepicker=$("#setDate").datepicker({
	//	dateFormat: "yy-mm-dd",
	//	showButtonPanel: true
	//});
    //
	//$('input[name="ucModel"]').click(function(){
	//	var $this=$(this);
	//	ucModelChecked($this);
	//});
    //load_time();
	//setDeviceTime();
    ////保存
	//$("#datetime_save").click(function(){
    //
	//	datetime_save();
	//});
})

function ucModelChecked($ele){
	$('#setDate').attr('disabled','disabled');
	$('#getsystemtimehour').attr('disabled','disabled');
	$('#getsystemtimeminutes').attr('disabled','disabled');
	$('#getsystemtimeseconds').attr('disabled','disabled');

	$('#pc_time').attr('disabled','disabled');

	$('#getntpserver').attr('disabled','disabled');
	$('#getntptimezone').attr('disabled','disabled');
	$('#getntpport').attr('disabled','disabled');
	$('#getntinterval').attr('disabled','disabled');

	$('#getntptimezone').attr('disabled','disabled');


	var tmp_index=parseInt($ele.val());
	switch(tmp_index){
		case 0:
			if($('input[name="ucModel"][value="0"]').is(':checked'))
			{

				$('input[name="ucModel"][value="0"]').click();
				$('input[name="ucModel"][value="0"]').click();
				$('input[name="ucModel"][value="0"]').attr('checked','checked');
			}
			else
			{
				$('input[name="ucModel"][value="0"]').click();
				$('input[name="ucModel"][value="0"]').attr('checked','checked');
			}
			$('input[name="ucModel"][value="1"]').prop('checked',false);
			$('input[name="ucModel"][value="2"]').prop('checked',false);

			$('#setDate').prop('disabled',false);
			$('#getsystemtimehour').prop('disabled',false);
			$('#getsystemtimeminutes').prop('disabled',false);
			$('#getsystemtimeseconds').prop('disabled',false);
			break;
		case 1:
			if($('input[name="ucModel"][value="1"]').is(':checked'))
			{

				$('input[name="ucModel"][value="1"]').click();
				$('input[name="ucModel"][value="1"]').click();
				$('input[name="ucModel"][value="1"]').attr('checked','checked');
			}
			else
			{
				$('input[name="ucModel"][value="1"]').click();
				$('input[name="ucModel"][value="1"]').attr('checked','checked');
			}
			$('input[name="ucModel"][value="0"]').prop('checked',false);
			$('input[name="ucModel"][value="2"]').prop('checked',false);
			$('#pc_time').prop('disabled',false);
			break;
		case 2:
			if($('input[name="ucModel"][value="2"]').is(':checked'))
			{

				$('input[name="ucModel"][value="2"]').click();
				$('input[name="ucModel"][value="2"]').click();
				$('input[name="ucModel"][value="2"]').attr('checked','checked');
			}
			else
			{
				$('input[name="ucModel"][value="2"]').click();
				$('input[name="ucModel"][value="2"]').attr('checked','checked');
			}



			$('input[name="ucModel"][value="0"]').prop('checked',false);
			$('input[name="ucModel"][value="1"]').prop('checked',false);
			$('#getntpserver').prop('disabled',false);
			$('#getntptimezone').prop('disabled',false);
			$('#getntpport').prop('disabled',false);
			$('#getntinterval').prop('disabled',false);
			$('#getntptimezone').prop('disabled',false);
			break;
	}
}

function setDeviceTime(){

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
					$('input[name="ucModel"][value="0"]').attr('checked','checked');
					ucModelChecked($('input[name="ucModel"]:checked'));
				}
				else if(mode == 1)
				{
					$('input[name="ucModel"][value="2"]').attr('checked','checked');
					ucModelChecked($('input[name="ucModel"]:checked'));
				}
				d=new Date(year,month-1,day,hour,min,sec);			//rtJson.ucMonth-1   跟设备的月分有差别
				$('#setDate').val(d.Format("yyyy-MM-dd"));
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