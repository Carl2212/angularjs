//参数
var defaultLang = 'cn';

function InitConfig() {
	//语言初始化
	langJs=$.cookies.get('lang') || defaultLang;
	$.cookies.set('lang', langJs, {'hoursToLive': 24 * 365});

	$.getScript("../lang/"+langJs+".js",function(){
		InitLang();
	});
}
function InitLang(){
	$("[data-id=diskno]").text(lang.diskno);
	$("[data-id=logNum]").text(lang.logNum);
	$("[data-id=eidt]").text(lang.eidt);
	$("[data-id=IPAddr]").text(lang.IPAddr);
	$("[data-id=port]").text(lang.port);
	$("[data-id=remoteprotol]").text(lang.remoteprotol);
	$("[data-id=shuaixuan]").text(lang.shuaixuan);
	$("[data-id=channel]").text(lang.channel);
	$("[data-id=remotedel]").text(lang.remotedel);
	$("[data-id=remotecfg]").text(lang.remotecfg);
	$("[data-id=diskstatus]").text(lang.diskstatus);
	$("[data-id=remotedel]").text(lang.remotedel);
	$("[data-id=other]").text(lang.other);
}

//搜索获取的设备信息
function SearchDeviceVal() {
	this.ip =  new Array;
	this.username =  new Array;
	this.pwd =  new Array;
	this.type = new Array;
	this.port = new Array;
	this.manu = new Array;
	this.mac = new Array;
	this.devType = new Array;
	this.pIndex = new Array;
	this.sel = new Array;
}
//已添加的设备信息
function SearchDeviceValAdd() {
	this.channel =  new Array;
	this.chanenable =  new Array;
	this.channame =  new Array;
	this.channo = new Array;
	this.chanstream = new Array;
	this.chanip = new Array;
	this.chanport = new Array;
	this.chanusername = new Array;
	this.chanpwd = new Array;
	this.chanprotocol = new Array;
	this.chanprotype = new Array;
	this.sel = new Array;
}

var nSearchDeviceVal = new SearchDeviceVal();
var nSearchDeviceValAdd = new SearchDeviceValAdd();
var indexadded = 0;//已经添加的设置通道号
var searchcount = 0;
var indexaddedcount = 0;//已经添加的设置通道数

if($.cookies.get('userName')) {
	loginUser = $.cookies.get('userName');
}
if($.cookies.get('pwd')) {
	loginpsw = $.cookies.get('pwd');
}

if($.cookies.get('netmask')) {
	netmask = $.cookies.get('netmask');
}
if($.cookies.get('gateway')) {
	gateway = $.cookies.get('gateway');
}

if($.cookies.get('getsyschannum')) {
	channelnum = $.cookies.get('getsyschannum');
}


if($.cookies.get('lang')){
	langJs=$.cookies.get('lang');
	$.cookies.set('lang', langJs,{'hoursToLive':24*365});
}
document.write("<script src='../lang/"+langJs+".js'><\/script>");



$(document).ready(function(){

	load_device_search_added();
	$("#device_search").click(function(){
		load_device_search();
	});

	$("#device_add").click(function(){
		load_device_add();
	});

	$("#device_del").click(function(){
		load_device_del();
	});

	$("#device_manul").click(function(){
		editaddedip(0);
	});


});


function load_device_search_added()
{
	$('#logTab1').html('');
	indexadded = 0;
	indexaddedcount = 0;
	load_device_search_added_sub(0);
}

function load_device_search_added_sub(i)
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
	var HTML="";
	var str = "../vb.htm?getchannelnum=" + i + "&getchanenable&getchanname&getchanno&getchanstream&getchandeviceip&getchandeviceport&getchanusername&getchanuserpwd&getchandeviceprotocol&getchanmanprotocoltype";
	XMLHttpRequestObject.open("GET",str,true,loginUser,loginpsw);
	XMLHttpRequestObject.setRequestHeader("If-Modified-Since","0");
	XMLHttpRequestObject.send(null);

	XMLHttpRequestObject.onreadystatechange = function()
	{
		if(XMLHttpRequestObject.readyState == 4)
		{
			if(XMLHttpRequestObject.status == 200)
			{
				var str = XMLHttpRequestObject.responseText;
				if(str == '')
				{
					window.parent.parent.save2(lang.lognologtip);
				}
				var className='';

				var str_sub = str.split("OK ");

				for (var j = 0; j < str_sub.length; j++) {

					str_sub_sub = str_sub[j].split("=");

					if ("getchannelnum" == str_sub_sub[0] && str_sub_sub[0] != "") {
						nSearchDeviceValAdd.channel[i] = str_sub_sub[1].split("\n")[0];
					}
					if ("getchanenable" == str_sub_sub[0] && str_sub_sub[0] != "") {
						nSearchDeviceValAdd.chanenable[i] = str_sub_sub[1].split("\n")[0];
					}
					if ("getchanno" == str_sub_sub[0] && str_sub_sub[0] != "") {
						nSearchDeviceValAdd.channo[i] = str_sub_sub[1].split("\n")[0];

					}
					if ("getchanname" == str_sub_sub[0] && str_sub_sub[0] != "") {
						nSearchDeviceValAdd.channame[i] = str_sub_sub[1].split("\n")[0];

					}
					if ("getchanstream" == str_sub_sub[0] && str_sub_sub[0] != "") {
						nSearchDeviceValAdd.chanstream[i] = str_sub_sub[1].split("\n")[0];
					}
					if ("getchandeviceip" == str_sub_sub[0] && str_sub_sub[0] != "") {
						nSearchDeviceValAdd.chanip[i] = str_sub_sub[1].split("\n")[0];
					}
					if ("getchandeviceport" == str_sub_sub[0] && str_sub_sub[0] != "") {
						nSearchDeviceValAdd.chanport[i] = str_sub_sub[1].split("\n")[0];
					}
					if ("getchanusername" == str_sub_sub[0] && str_sub_sub[0] != "") {
						nSearchDeviceValAdd.chanusername[i] = str_sub_sub[1].split("\n")[0];
					}
					if ("getchanuserpwd" == str_sub_sub[0] && str_sub_sub[0] != "") {
						nSearchDeviceValAdd.chanpwd[i] = str_sub_sub[1].split("\n")[0];
					}
					if ("getchandeviceprotocol" == str_sub_sub[0] && str_sub_sub[0] != "") {
						nSearchDeviceValAdd.chanprotocol[i] = str_sub_sub[1].split("\n")[0];
					}
					if ("getchanmanprotocoltype" == str_sub_sub[0] && str_sub_sub[0] != "") {
						nSearchDeviceValAdd.chanprotype[i] = str_sub_sub[1].split("\n")[0];
					}
				}
				var channel = parseInt(nSearchDeviceValAdd.channel[i]) + 1;
				var enable =  nSearchDeviceValAdd.chanenable[i];
				var chanip = nSearchDeviceValAdd.chanip[i]
				var chanport = nSearchDeviceValAdd.chanport[i];
				var chanprotype = nSearchDeviceValAdd.chanprotype[i];

				switch (chanprotype)
				{
					case '2':
						chanprotype = 'ONVIF';
						break;
					case '3':
						chanprotype = 'RTSP';
						break;
					case '4':
						chanprotype = 'Private';
						break;
					default :
						chanprotype = 'ONVIF';
						break;
				}

				if(enable == '1')
				{
					//<td><span style="width: 55px;"><a href="javascript:editip(\''+i+'\');" title="'+"状态"+'">'+"状态"+'</a></span></td>\
					className= indexadded%2==0?'even':'odd';
					$('#logTab1').append('<tr class="'+className+'"><td><span style="width: 55px;"><input type="checkbox" id="searchcheckadded'+i+'" onclick="enablesearchaddedvalue('+i+')" value="'+i+'"/> '+channel+'</span></td>\
				<td><span style="width: 55px;"><a href="javascript:editaddedip(\''+i+'\');" title="'+lang.eidt+'">'+lang.eidt+'</a></span></td>\
				<td><span style="width: 55px;"><a href="javascript:device_del_sub_sub(\''+i+'\');" title="'+lang.remotedel+'">'+lang.remotedel+'</a></span></td>\
				<td><span style="width: 55px;"><a href="javascript:loadencodehtml(\''+i+'\');" title="'+lang.remotecfg+'">'+lang.remotecfg+'</a></span></td>\
				<td><span style="width: 150px;">'+chanip+'</span></td>\
				<td><span style="width: 55px;">'+chanport+'</span></td>\
				<td><span style="width: 55px;">'+chanprotype+'</span></td>\
				<td><span style="width: 55px;">'+"..."+'</span></td></tr>');

					indexadded++;
					indexaddedcount++;
				}

				if(i++ < channelnum)
				{
					load_device_search_added_sub(i);
				}
			}
		}
	}
}

function loadencodehtml(i)
{
	window.parent.parent.selchannel = i;
	window.location.href = 'encodeset.html';
}

function editaddedip(i)
{
	$allDiv=$('<div id="all"></div>').css("opacity", 0.7);
	$editDiv=$('<div id="edit">\
			<div class="editHeader"></div>\
			<div class="editContent">\
				<table width="100%">\
					<tr>\
						<td width="200px" height="15px"><label>'+lang.channel+'</label></td>\
						<td width="200px;"><select id="editaddedchannel" class="select" matchval="getchannelnum" >\
									<option value="250">'+lang.allchannel+'</option>\
									<option value="1">CH1</option>\
									<option value="2">CH2</option>\
									<option value="3">CH3</option>\
									<option value="4">CH4</option>\
									<option value="5">CH5</option>\
									<option value="6">CH6</option>\
									<option value="7">CH7</option>\
									<option value="8">CH8</option>\
						</select>\
						</td>\
					</tr>\
					<tr>\
						<td width="200px" height="15px"><input type="checkbox" id="editaddedenable"  matchval="getchanenable"/><label>'+lang.deladdedeable+'</label></td>\
					</tr>\
					<tr>\
						<td width="200px" height="15px"><label>'+lang.remoteprotol+'</label></td>\
						<td width="200px;"><select id="editaddedprotol" class="select" matchval="editaddedprotol" >\
									<option value="0">ONVIF</option>\
									<option value="1">Private</option>\
									<option value="2">RTSP</option>\
						</select>\
						</td>\
					</tr>\
					<tr>\
						<td width="200px" height="15px"><label>'+lang.liveviewstream+'</label></td>\
						<td width="200px;"><select id="editaddedstream" class="select" matchval="getchanstream" >\
									<option value="0">'+lang.mainStream+'</option>\
									<option value="1">'+lang.childStream+'</option>\
						</select>\
					</tr>\
					<tr>\
						<td width="200px" height="15px"><label>'+lang.userName+'</label></td>\
						<td width="200px;"><input maxlength="31" id="addedname" name="addedname" type="text" matchval="getchanusername"  /></td>\
					</tr>\
					<tr>\
						<td width="200px" height="15px"><label>'+lang.pwd+'</label></td>\
						<td width="200px;"><input maxlength="31" id="addedpwd" name="addedpwd" type="password" matchval="getchanuserpwd"   /></td>\
					</tr>\
					<tr>\
					<td id="tdlabelip" style="display: none" width="200px" height="15px"><label>'+lang.IPAddr+'</label></td>\
					<td id="tdinputip" style="display: none" width="200px;"><input maxlength="31" id="addedip" name="addedip" type="text" matchval="getchandeviceip"   /></td>\
					</tr>\
					<tr>\
					<td id="tdlabelport" style="display: none" width="200px" height="15px"><label>'+lang.port+'</label></td>\
					<td id="tdinputport" style="display: none" width="200px;"><input maxlength="31" id="addedport" name="addedport" type="text" matchval="getchandeviceport"    /></td>\
					</tr>\
					<td id="tdlabelmainstream" style="display: none" width="200px" height="15px"><label>'+lang.mainStream+'</label></td>\
					<td id="tdinputmainstream" style="display: none" width="200px;"><input maxlength="31" id="addedmainstream" name="addedmainstream" type="text" matchval="getchanrtspmainurl"    /></td>\
					</tr>\
					<tr>\
					<td id="tdlabelsubstream" style="display: none" width="200px" height="15px"><label>'+lang.childStream+'</label></td>\
					<td id="tdinputsubstream" style="display: none" width="200px;"><input maxlength="31" id="addedsubstream" name="addedsubstream" type="text" matchval="getchanrtspsuburl"   /></td>\
					</tr>\
					<tr>\
						<td colspan="2">\
							<div style="padding-top: 5px; text-align: center;">\
								<input type="button"  value="'+lang.confirm+'" onclick="postsearchaddedEdit(\''+ i+'\');" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\
								<input id="editCancel" type="button" value="'+lang.cancel+'" />\
							</div>\
						</td>\
					</tr>\
				</table>\
			</div>\
		</div>');
	$('body').prepend($allDiv).prepend($editDiv);
	var chsel = i;
	var chsel1 = i*1 +1;
	loadchannelset(chsel1);

	$("#editaddedchannel").change(function(){
		var index = $(this).val();
		if(index>=0)
		{
			if(index != chsel)
			{
				loadchannelset($(this).val());
				chsel = index;
			}
		}
	});

	$("#editaddedprotol").change(function(){
		var index = $(this).val();
		$('#tdlabelip').attr("style","display:none");
		$('#tdinputip').attr("style","display:none");
		$('#tdlabelport').attr("style","display:none");
		$('#tdinputport').attr("style","display:none");
		$('#tdlabelmainstream').attr("style","display:none");
		$('#tdinputmainstream').attr("style","display:none");
		$('#tdlabelsubstream').attr("style","display:none");
		$('#tdinputsubstream').attr("style","display:none");
		if(index == 2)
		{
			$('#tdlabelmainstream').removeAttr('style');
			$('#tdinputmainstream').removeAttr('style');
			$('#tdlabelsubstream').removeAttr('style');
			$('#tdinputsubstream').removeAttr('style');
		}
		else
		{
			$('#tdlabelip').removeAttr('style');
			$('#tdinputip').removeAttr('style');
			$('#tdlabelport').removeAttr('style');
			$('#tdinputport').removeAttr('style');
		}
	});

	$( "#edit" ).draggable({
		handle: ".editHeader"
	});

	$('#editCancel').click(function(){
		$allDiv.remove();
		$editDiv.remove();
	});

}

function showandhidestream()
{
	;
}
function loadchannelset(i)
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

	XMLHttpRequestObject.open("GET", "../vb.htm?getchannelnum="+i+"&getchanenable&getchanname&getchanno&getchanstream&getchandeviceip&getchandeviceport&getchanusername&getchanuserpwd&getchandeviceprotocol&getchanrtspmainurl&getchanrtspsuburl&getchanmanprotocoltype",true,loginUser,loginpsw);
	XMLHttpRequestObject.setRequestHeader("If-Modified-Since","0");
	XMLHttpRequestObject.send(null);

	XMLHttpRequestObject.onreadystatechange = function()
	{
		if(XMLHttpRequestObject.readyState == 4)
		{
			if(XMLHttpRequestObject.status == 200) {
				var str = XMLHttpRequestObject.responseText;

				split_span_val_type2(str);

				var str_sub = str.split("OK ");
				var getchannelnum = get_split_span_val(str_sub, "getchannelnum");
				var getchanmanprotocoltype = get_split_span_val(str_sub, "getchanmanprotocoltype");

				$("#editaddedchannel").val(parseInt(getchannelnum));
				//alert(getchanmanprotocoltype);

				$('#tdlabelip').attr("style","display:none");
				$('#tdinputip').attr("style","display:none");
				$('#tdlabelport').attr("style","display:none");
				$('#tdinputport').attr("style","display:none");
				$('#tdlabelmainstream').attr("style","display:none");
				$('#tdinputmainstream').attr("style","display:none");
				$('#tdlabelsubstream').attr("style","display:none");
				$('#tdinputsubstream').attr("style","display:none");

				if (getchanmanprotocoltype == 2)
				{
					$('#tdlabelip').removeAttr('style');
					$('#tdinputip').removeAttr('style');
					$('#tdlabelport').removeAttr('style');
					$('#tdinputport').removeAttr('style');
					$("#editaddedprotol").val(0);
				}
				else 	if (getchanmanprotocoltype == 3)
				{
					$('#tdlabelmainstream').removeAttr('style');
					$('#tdinputmainstream').removeAttr('style');
					$('#tdlabelsubstream').removeAttr('style');
					$('#tdinputsubstream').removeAttr('style');
					$("#editaddedprotol").val(2);
				}
				if (getchanmanprotocoltype == 4)
				{
					$('#tdlabelip').removeAttr('style');
					$('#tdinputip').removeAttr('style');
					$('#tdlabelport').removeAttr('style');
					$('#tdinputport').removeAttr('style');
					$("#editaddedprotol").val(1);
				}


			}
		}
	}
}

function postsearchaddedEdit(i)
{
	var ipRegEx = /^(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])$/;

	if((!ipRegEx.test($('#addedip').val())) || $('#addedip').val() =="0.0.0.0")
	{
		window.parent.parent.save2(lang.IPAddr+lang.formatErr);
		return;
	}
	var str = "setuser=";
	str = str + loginUser;

	str="setchannelnum=";
	if( $('#editaddedchannel').val() == 0)
		str = str + 250;
	else
		str = str + (parseInt($('#editaddedchannel').val()) - 1);

	str = str + "&setchanenable=";
	if($("#editaddedenable").is(":checked"))
	{
		str = str +1;
	}
	else
	{
		str = str +0;
	}

	str = str + "&setchanstream=";
	str = str + $('#editaddedstream').val();

	str = str + "&setchandeviceip=";
	str = str +  $('#addedip').val();

	str = str + "&setchandeviceport=";
	str = str + $('#addedport').val();

	str = str + "&setchanusername=";
	str = str + $('#addedname').val();

	str = str + "&setchanuserpwd=";
	str = str + $('#addedpwd').val();

	str = str + "&setchanmanprotocoltype=";
	if($('#editaddedprotol ').val() == 0)
		str = str + 2;
	else if($('#editaddedprotol ').val()  == 1)
		str = str + 4;
	else if($('#editaddedprotol ').val()  == 2)
		str = str + 3;

	str = str + "&setchanrtspmainurl=";
	str = str + $('#addedmainstream').val();

	str = str + "&setchanrtspsuburl=";
	str = str + $('#addedsubstream').val();

	str = str + "&setchandeviceprotocol=";
	str = str + 0;

	//alert(nSearchDeviceVal.devType[i]);


	var str1 = "../vb.htm?"+str;

	save_val(str1,0,0);

	$allDiv.remove();
	$editDiv.remove();
	load_device_search_added();
}

function enablesearchaddedvalue(i)
{
	var help = "#searchcheckadded" + i;
	if($(help).is(":checked"))
	{
		nSearchDeviceValAdd.sel[i] = 1;

	}
	else
	{
		nSearchDeviceValAdd.sel[i] = 0;
	}
}

function enablesearchaddedallvalue()
{

	for(i = 0 ;i <channelnum  ; i++)
	{
		if($("#searchcheckadded").is(":checked"))
		{
			var help = "#searchcheckadded" + i;
			if(!$(help).is(":checked"))
				$(help).click();

			nSearchDeviceValAdd.sel[i] = 1;
		}
		else
		{
			var help = "#searchcheckadded" + i;
			if($(help).is(":checked"))
				$(help).click();

			nSearchDeviceValAdd.sel[i] = 0;
		}
	}
}



function load_device_del()
{
	device_del_sub(0);
}

function device_del_sub_sub(num)
{
	var str = "";

	str ="setuser=";
	str = str + loginUser;

	str = str + "&setchannelnum=";
	str = str + num;

	str = str + "&setchanenable=";
	str = str + 0;

	str = str + "&setchanstream=";
	str = str + nSearchDeviceValAdd.chanstream[num];

	str = str + "&setchandeviceip=";
	str = str + nSearchDeviceValAdd.chanip[num];

	str = str + "&setchandeviceport=";
	str = str + nSearchDeviceValAdd.chanport[num];

	str = str + "&setchanusername=";
	str = str + nSearchDeviceValAdd.chanusername[num];

	str = str + "&setchanuserpwd=";
	str = str + nSearchDeviceValAdd.chanpwd[num];

	str = str + "&setchanmanprotocoltype=";
	if(nSearchDeviceValAdd.chanprotype[num] == 'ONVIF')
		str = str + 2;
	else if(nSearchDeviceValAdd.chanprotype[num] == 'Private')
		str = str + 4;
	//str = str + nSearchDeviceVal.devType[i];

	str = str + "&setchandeviceprotocol=";
	str = str + nSearchDeviceValAdd.chanprotocol[num];

	var str1 = "../vb.htm?"+str;

	nSearchDeviceValAdd.sel[num] = 0;

	save_val(str1,18,0);


}

function device_del_sub(num)
{

	var j = 0;
	var str = "";
	for(j = num;j < channelnum ;j++)
	{
		if(nSearchDeviceValAdd.sel[j] == '1')
		{
			str ="setuser=";
			str = str + loginUser;

			str = str + "&setchannelnum=";
			str = str + j;

			str = str + "&setchanenable=";
			str = str + 0;

			str = str + "&setchanstream=";
			str = str + nSearchDeviceValAdd.chanstream[j];

			str = str + "&setchandeviceip=";
			str = str + nSearchDeviceValAdd.chanip[j];

			str = str + "&setchandeviceport=";
			str = str + nSearchDeviceValAdd.chanport[j];

			str = str + "&setchanusername=";
			str = str + nSearchDeviceValAdd.chanusername[j];

			str = str + "&setchanuserpwd=";
			str = str + nSearchDeviceValAdd.chanpwd[j];

			str = str + "&setchanmanprotocoltype=";
			if(nSearchDeviceValAdd.chanprotype[j] == 'ONVIF')
				str = str + 2;
			else if(nSearchDeviceValAdd.chanprotype[j] == 'Private')
				str = str + 4;
			//str = str + nSearchDeviceVal.devType[i];

			str = str + "&setchandeviceprotocol=";
			str = str + nSearchDeviceValAdd.chanprotocol[j];



			var str1 = "../vb.htm?"+str;

			nSearchDeviceValAdd.sel[j] = 0;

			break;
		}

	}


	if(str == "")
	{
		//总开关不选中
		if($("#searchcheckadded").is(":checked")) {
			$("#searchcheckadded").click();
		}
		load_device_search_added();
	}
	else
	{
		save_val(str1,17,++j);
	}

}


//以上为已添加设备列表处理函数
//----------------------------------------------------------------------------------------------------------------------------------------------------------------
//以下为搜索列表中处理函数
//----------------------------------------------------------------------------------------------------------------------------------------------------------------

function load_device_search()
{
	$('#logTab').html('');
	var XMLHttpRequestObject = null;
	if (window.XMLHttpRequest)
	{
		XMLHttpRequestObject = new XMLHttpRequest();
	}
	else if (window.ActiveXObject)
	{
		XMLHttpRequestObject = new ActiveXObject("Microsoft.XMLHTTP");
	}
	var HTML="";
	var protocol = 0;
	switch ( $('#getprotocl').val())
	{
		case '0':
			protocol = 2;
			break;
		case '1':
			protocol = 6;
			break;
		case '2':
			protocol = 4;
			break;
		case  '3':
			protocol = 5;
			break;
	}
	var str = "../vb.htm?searchcamera=" + protocol;
	XMLHttpRequestObject.open("GET",str,true,loginUser,loginpsw);
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
				var str_sub = str.split("<br>");
				if(str == '')
				{
					window.parent.parent.save2(lang.lognologtip);
				}
				var className='';
				searchcount = str_sub.length;
				for(j = 0; j < str_sub.length - 1; j++)
				{
					var  str_sub_sub = str_sub[j].split(",");

					var no = j + 1;
					var ip = str_sub_sub[0].split("ip=")[1] ;

					var port = str_sub_sub[1].split("port=")[1];

					var name = str_sub_sub[4].split("name=")[1];

					var pwd = str_sub_sub[5].split("pwd=")[1];

					var devtype = str_sub_sub[7].split("devType=")[1];

					nSearchDeviceVal.ip[j] = ip;

					nSearchDeviceVal.username[j] = name;

					nSearchDeviceVal.pwd[j] = pwd;

					nSearchDeviceVal.port[j] = port;

					nSearchDeviceVal.type[j] = str_sub_sub[2].split("type=")[1];

					nSearchDeviceVal.manu[j] = str_sub_sub[3].split("manu=")[1];

					nSearchDeviceVal.mac[j] = str_sub_sub[6].split("mac=")[1];

					nSearchDeviceVal.devType[j] = str_sub_sub[7].split("devType=")[1];

					nSearchDeviceVal.pIndex[j] = str_sub_sub[8].split("pIndex=")[1];

					//var diskcheck = 'diskcheck' + j;
					//<td><span style="width: 145px;"><a href="javascript:editUser(\''+userList[i]['UserName']+'\',\''+userList[i]['Authority']+'\');" title="'+lang.eidt+'">'+lang.eidt+'</a></span></td>\
					className= j%2==0?'even':'odd';
					$('#logTab').append('<tr class="'+className+'"><td><span style="width: 55px;"><input type="checkbox" id="searchcheck'+j+'" onclick="enablesearchvalue('+j+')" value="'+j+'"/> '+no+'</span></td>\
				<td><span style="width: 145px;"><a href="javascript:editip(\''+nSearchDeviceVal.ip[j]+'\',\''+nSearchDeviceVal.username[j]+'\',\''+nSearchDeviceVal.pwd[j]+'\',\''+netmask+'\',\''+gateway+'\',\''+j+'\');" title="'+lang.eidt+'">'+lang.eidt+'</a></span></td>\
				<td><span style="width: 220px;">'+ip+'</span></td>\
				<td><span style="width: 220px;">'+port+'</span></td>\
				<td><span style="width: 75px;">'+devtype+'</span></td></tr>'
					);
				}
				$('#searchindex').text(--searchcount);

			}
		}
	}
}


function enablesearchallvalue()
{
	for(i = 0 ;i <searchcount  ; i++)
	{
		if($("#searchcheck").is(":checked"))
		{
			var help = "#searchcheck" + i;
			if(!$(help).is(":checked"))
				$(help).click();

			nSearchDeviceVal.sel[i] = 1;
		}
		else
		{
			var help = "#searchcheck" + i;
			if($(help).is(":checked"))
				$(help).click();

			nSearchDeviceVal.sel[i] = 0;
		}
	}
}

function enablesearchvalue(i)
{
	var help = "#searchcheck" + i;
	if($(help).is(":checked"))
	{
		nSearchDeviceVal.sel[i] = 1;

	}
	else
	{
		nSearchDeviceVal.sel[i] = 0;
	}
}

//以上为已添加设备列表处理函数
//----------------------------------------------------------------------------------------------------------------------------------------------------------------
//以下为搜索列表中处理函数
//----------------------------------------------------------------------------------------------------------------------------------------------------------------
function load_device_add()
{
	device_add_sub(0);
}



function device_add_sub(num)
{

	if($("#searchcheck").is(":checked")) {
		if(indexaddedcount == channelnum )
		{
			load_device_search_added();
		}
		var i = 0;
		for(i = num;i < searchcount ;i++)
		{
			if(nSearchDeviceVal.sel[i] == '1')
			{
				for(j = 0;j < channelnum ;j++)
				{
					if(nSearchDeviceValAdd.chanenable[j] == '0')
					{
						var str="setuser=";
						str = str + loginUser;

						str = str + "&setchannelnum=";
						str = str + j;

						str = str + "&setchanenable=";
						str = str + 1;

						str = str + "&setchanstream=";
						str = str + 1;

						str = str + "&setchandeviceip=";
						str = str + nSearchDeviceVal.ip[i];

						str = str + "&setchandeviceport=";
						str = str + nSearchDeviceVal.port[i];

						str = str + "&setchanusername=";
						str = str + nSearchDeviceVal.username[i];

						str = str + "&setchanuserpwd=";
						str = str + nSearchDeviceVal.pwd[i];

						str = str + "&setchanmanprotocoltype=";
						if(nSearchDeviceVal.devType[i] == 'ONVIF')
							str = str + 2;
						else if(nSearchDeviceVal.devType[i] == 'Private')
							str = str + 4;

						str = str + "&setchandeviceprotocol=";
						str = str + 0;



						var str1 = "../vb.htm?"+str;

						nSearchDeviceValAdd.chanenable[j] = 1;
						indexaddedcount++;
						break;
					}


				}
				break;
			}

		}

		save_val(str1,16,++i);
	}
	else
	{
		var i = 0;
		for(i = num;i < searchcount ;i++)
		{
			if(nSearchDeviceVal.sel[i] == '1')
			{
				for(j = 0;j < channelnum ;j++)
				{
					if(nSearchDeviceValAdd.chanenable[j] == '0')
					{
						var str="setuser=";
						str = str + loginUser;

						str = str + "&setchannelnum=";
						str = str + j;

						str = str + "&setchanenable=";
						str = str + 1;

						str = str + "&setchanstream=";
						str = str + 1;

						str = str + "&setchandeviceip=";
						str = str + nSearchDeviceVal.ip[i];

						str = str + "&setchandeviceport=";
						str = str + nSearchDeviceVal.port[i];

						str = str + "&setchanusername=";
						str = str + nSearchDeviceVal.username[i];

						str = str + "&setchanuserpwd=";
						str = str + nSearchDeviceVal.pwd[i];

						str = str + "&setchanmanprotocoltype=";
						if(nSearchDeviceVal.devType[i] == 'ONVIF')
							str = str + 2;
						else if(nSearchDeviceVal.devType[i] == 'Private')
							str = str + 4;

						str = str + "&setchandeviceprotocol=";
						str = str + 0;

						var str1 = "../vb.htm?"+str;

						nSearchDeviceValAdd.chanenable[j] = 1;
						indexaddedcount++;
						break;
					}
				}
				break;
			}

		}

		if(i == searchcount)
		{

			load_device_search_added();
		}
		else
		{
			save_val(str1,16,++i);
		}

	}



}


function editip(ip,name,pwd,mask,gateway,i)
{
	$allDiv=$('<div id="all"></div>').css("opacity", 0.7);
	$editDiv=$('<div id="edit">\
			<div class="editHeader"></div>\
			<div class="editContent">\
				<table width="100%">\
					<tr>\
						<td width="200px" height="15px"><label>'+lang.IPAddr+'</label></td>\
						<td width="200px;"><input maxlength="31" id="ip" name="ip" type="text"  value="'+ip+'"  /></td>\
					</tr>\
					<tr>\
						<td width="200px" height="15px"><label>'+lang.subnetMask+'</label></td>\
						<td width="200px;"><input maxlength="31" id="mask" name="mask" type="text"  value="'+mask+'"  /></td>\
					</tr>\
					<tr>\
						<td width="200px" height="15px"><label>'+lang.gateway+'</label></td>\
						<td width="200px;"><input maxlength="31" id="gateway" name="gateway" type="text"  value="'+gateway+'"  /></td>\
					</tr>\
					<tr>\
						<td width="200px" height="15px"><label>'+lang.userName+'</label></td>\
						<td width="200px;"><input maxlength="31" id="name" name="name" type="text"  value="'+name+'"  /></td>\
					</tr>\
					<tr>\
						<td width="200px" height="15px"><label>'+lang.pwd+'</label></td>\
						<td width="200px;"><input maxlength="31" id="pwd" name="pwd" type="password"  value="'+pwd+'"  /></td>\
					</tr>\
					<tr>\
						<td colspan="2">\
							<div style="padding-top: 5px; text-align: center;">\
								<input type="button"  value="'+lang.confirm+'" onclick="postsearchEdit(\''+ i+'\');" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\
								<input id="editCancel" type="button" value="'+lang.cancel+'" />\
							</div>\
						</td>\
					</tr>\
				</table>\
			</div>\
		</div>');
	$('body').prepend($allDiv).prepend($editDiv);
	//$('#userType').val(powerType);

	$( "#edit" ).draggable({
		handle: ".editHeader"
	});

	$('#editCancel').click(function(){
		$allDiv.remove();
		$editDiv.remove();
	});

	if($('#userName').val()=='admin'){
		$('#userType').attr('disabled','disabled');
	}
}

//setoldipaddr=%s\
//&setnewipaddr=%s\
//&setmask=%s\
//&setport=%d\
//&setusername=%s\
//&setuserpwd=%s\
//&setmac=%s\
//&setindex=%s\
//&setipcnetworkcfg=
function postsearchEdit(i)
{

	var ipRegEx = /^(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])$/;

	if((!ipRegEx.test($('#ip').val())) || $('#ip').val() =="0.0.0.0")
	{
		window.parent.parent.save2(lang.IPAddr+lang.formatErr);
		return;
	}

	var str="setoldipaddr=";
	str = str + nSearchDeviceVal.ip[i];

	str = str + "&setnewipaddr=";
	str = str + $('#ip').val();

	str = str + "&setmask=";
	str = str + netmask;

	str = str + "&setport=";
	str = str + nSearchDeviceVal.port[i];

	str = str + "&setusername=";
	str = str + nSearchDeviceVal.username[i];

	str = str + "&setuserpwd=";
	str = str + nSearchDeviceVal.pwd[i];

	str = str + "&setmac=";
	str = str + nSearchDeviceVal.mac[i];

	str = str + "&setindex=";
	str = str + nSearchDeviceVal.pIndex[i];

	str = str + "&setipcnetworkcfg=";
	//alert(nSearchDeviceVal.devType[i]);
	if(nSearchDeviceVal.devType[i] == 'ONVIF')
		str = str + 2;
	else if(nSearchDeviceVal.devType[i] == 'Private')
		str = str + 4;

	var str1 = "../vb.htm?"+str;

	save_val(str1,0,0);


}