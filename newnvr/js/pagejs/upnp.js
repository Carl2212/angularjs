function UpnpListVal() {
	this.servername =  new Array;
	this.upnptype =  new Array;
	this.inport =  new Array;
	this.outport = new Array;
	this.sel = new Array;
}

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

var nUpnpListVal = new UpnpListVal();
var upnpmapnum = 0;

$(document).ready(function(){
	load_upnp_setting();

	$("#upnp_add").click(function(){
		upnp_add();
	});

	$("#upnp_del").click(function(){
		upnp_del();
	});

	$("#upnp_save").click(function(){
		upnp_save();
	});
});


//upnp 保存
function upnp_save()
{
	var str="setupnpen=";
	if($("#getupnpen").is(":checked"))
	{
		str = str +1;
	}
	else
	{
		str = str +0;
	}

	str = str + "&setupnpno=";
	str = str + 0; //add

	str = str + "&setupnpnum=";
	str = str +  (parseInt(upnpmapnum) - 1);

	if((parseInt(upnpmapnum) - 1)==0)
	{
		str = str + "&setupnpservername=";

		str = str + "&setupnptype=";
		str = str + 0;

		str = str + "&setupnpinport=";

		str = str + "&setupnpextport=";

	}
	else
	{
		str = str + "&setupnpservername=";
		str = str + nUpnpListVal.servername[0];

		str = str + "&setupnptype=";
		str = str + 0;

		str = str + "&setupnpinport=";
		str = str + nUpnpListVal.inport[0];

		str = str + "&setupnpextport=";
		str = str + nUpnpListVal.outport[0];
	}


	var str1 = "../vb.htm?"+str;

	//$('#logTab').html('');
	var XMLHttpRequestObject = null;
	if (window.XMLHttpRequest)
	{
		XMLHttpRequestObject = new XMLHttpRequest();
	}
	else if (window.ActiveXObject)
	{
		XMLHttpRequestObject = new ActiveXObject("Microsoft.XMLHTTP");
	}
	XMLHttpRequestObject.open("GET",str1,true,loginUser,loginpsw);
	XMLHttpRequestObject.setRequestHeader("If-Modified-Since","0");
	XMLHttpRequestObject.send(null);

	XMLHttpRequestObject.onreadystatechange = function() {
		if (XMLHttpRequestObject.readyState == 4) {
			if (XMLHttpRequestObject.status == 200) {

				$addallDiv.remove();
				$addeditDiv.remove();

				load_upnp_setting();

			}

		}
	}
}

//删除upnp端口信息
function upnp_del()
{
	var bsel = false;
	var str="";
	for(var i = 0 ;i < upnpmapnum -1;i++)
	{
		if(parseInt(nUpnpListVal.sel[i]) == 1 )
		{
			str = str + "delupnpindex="+i+"&";
			bsel = true;
		}
	}
	//判断时候有删除
	if(bsel == false)
	{
		return;
	}

	str = str + "delupnpenter";

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
	XMLHttpRequestObject.open("GET",str1,true,loginUser,loginpsw);
	XMLHttpRequestObject.setRequestHeader("If-Modified-Since","0");
	XMLHttpRequestObject.send(null);

	XMLHttpRequestObject.onreadystatechange = function() {
		if (XMLHttpRequestObject.readyState == 4) {
			if (XMLHttpRequestObject.status == 200) {

				//如果全选被点击则还原
				if($("#upnpallcheck").is(":checked"))
				{
					$("#upnpallcheck").click();
				}
				//重新获取信息
				load_upnp_setting();
			}

		}
	}
}

//添加端口信息 ，弹出对话框
function upnp_add()
{
	$addallDiv=$('<div id="all"></div>').css("opacity", 0.7);
	$addeditDiv=$('<div id="upnpedit">\
			<div class="upnpeditHeader">'+lang.upnpportinfo+'</div>\
			<div class="upnpeditContent">\
				<table width="100%">\
					<tr>\
						<td width="200px" height="15px"><label>'+lang.upnpservername+'</label></td>\
						<td width="200px;"><input maxlength="31" id="servername" name="servername" type="text"  value="'+""+'"  /></td>\
					</tr>\
					<tr>\
						<td width="200px" height="15px"><label>'+lang.upnpprotocol+'</label></td>\
						<td width="200px;"><select id="upnpprotocol" class="select" matchval="upnpprotocol" >\
									<option value="0">TCP</option>\
						</select>\
					</tr>\
					<tr>\
						<td width="200px" height="15px"><label>'+lang.upnpinput+'</label></td>\
						<td width="200px;"><input onkeyup="if(keyboardFilter()) {value=NumberRangeLimt(this,1,65535)}" onblur="if(this.value == (\'\')) this.value=(\'00\')" maxlength="31" id="upnpinput" name="upnpinput" type="text"  value="'+"0"+'"  /></td>\
					</tr>\
					<tr>\
						<td width="200px" height="15px"><label>'+lang.upnpoutput+'</label></td>\
						<td width="200px;"><input onkeyup="if(keyboardFilter()) {value=NumberRangeLimt(this,1,65535)}" onblur="if(this.value == (\'\')) this.value=(\'00\')"  maxlength="31" id="upnpoutput" name="upnpoutput" type="text"  value="'+"0"+'"  /></td>\
					</tr>\
					<tr>\
						<td colspan="2">\
							<div style="padding-top: 5px; text-align: center;">\
								<input type="button"  value="'+lang.confirm+'" onclick="upnpportinfoaddsave(\''+ j+'\');" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\
								<input id="upnpeditCancel" type="button" value="'+lang.cancel+'" />\
							</div>\
						</td>\
					</tr>\
				</table>\
			</div>\
		</div>');
	$('body').prepend($addallDiv).prepend($addeditDiv);
	//$('#userType').val(powerType);

	$( "#edit" ).draggable({
		handle: ".upnpeditHeader"
	});

	$('#upnpeditCancel').click(function(){
		$addallDiv.remove();
		$addeditDiv.remove();
	});
}

//添加upnp 端口信息
function upnpportinfoaddsave(j)
{
	if($('#servername').val() == "")
	{
		window.parent.parent.save2(lang.upnptip2);
		return;
	}
	if($('#upnpinput').val() == "0" ||$('#upnpoutput').val() == "0" )
	{
		window.parent.parent.save2(lang.upnptip3);
		return;
	}
	if($('#upnpinput').val() == "" ||$('#upnpoutput').val() == "" )
	{
		window.parent.parent.save2(lang.upnptip4);
		return;
	}
	for(var k =0 ; k < upnpmapnum - 1; k++)
	{
		if( $('#upnpinput').val() == nUpnpListVal.inport[k])
		{
			window.parent.parent.save2(lang.upnptip1);
			return;
		}
		if( $('#upnpoutput').val() == nUpnpListVal.outport[k])
		{
			window.parent.parent.save2(lang.upnptip1);
			return;
		}
	}
	var str="setupnpen=";
	if($("#getupnpen").is(":checked"))
	{
		str = str +1;
	}
	else
	{
		str = str +0;
	}

	str = str + "&setupnpno=";
	str = str + (parseInt(upnpmapnum) - 1); //add

	str = str + "&setupnpnum=";
	str = str +  (parseInt(upnpmapnum));

	str = str + "&setupnpservername=";
	str = str + $('#servername').val();

	str = str + "&setupnptype=";
	str = str + 0;

	str = str + "&setupnpinport=";
	str = str + $('#upnpinput').val();

	str = str + "&setupnpextport=";
	str = str + $('#upnpoutput').val();

	var str1 = "../vb.htm?"+str;

	$('#upnpTab').html('');
	var XMLHttpRequestObject = null;
	if (window.XMLHttpRequest)
	{
		XMLHttpRequestObject = new XMLHttpRequest();
	}
	else if (window.ActiveXObject)
	{
		XMLHttpRequestObject = new ActiveXObject("Microsoft.XMLHTTP");
	}
	XMLHttpRequestObject.open("GET",str1,true,loginUser,loginpsw);
	XMLHttpRequestObject.setRequestHeader("If-Modified-Since","0");
	XMLHttpRequestObject.send(null);

	XMLHttpRequestObject.onreadystatechange = function() {
		if (XMLHttpRequestObject.readyState == 4) {
			if (XMLHttpRequestObject.status == 200) {

				$addallDiv.remove();
				$addeditDiv.remove();

				load_upnp_setting();

			}

		}
	}

}

//获取upnp信息
function load_upnp_setting()
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

	XMLHttpRequestObject.open("GET", "../vb.htm?getupnpen&getupnpnum&getupnpdevstate&getupnpdevinip&getupnpdevextip",true,loginUser,loginpsw);
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
				var getupnpen = get_split_span_val(str_sub,"getupnpen");
				if(parseInt(getupnpen) == 1)
				{
					var getupnpdevstate = get_split_span_val(str_sub,"getupnpdevstate");
					if( parseInt(getupnpdevstate) == 0)
					{
						$('#upnptip').text(lang.upnpconnectting);
					}
					else if( parseInt(getupnpdevstate)  == 1)
					{
						$('#upnptip').text(lang.upnpconnected);
					}
				}
				else
				{
					$('#upnptip').text("");
					$('#getupnpdevinip').val("");
					$('#getupnpdevextip').val("");
				}


				load_upnp_list();


			}
		}
	}
}

//获取upnplist
function load_upnp_list()
{
	$('#upnpTab').html("");
	var className = 0;
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
	var str = "../vb.htm?getupnplist";
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

				var str_sub = str.split("<br>");

				upnpmapnum = str_sub.length;
				for (var j = 0; j < str_sub.length - 1; j++) {

					var str_sub_sub = str_sub[j].split(",");
					for (var k = 0; k < str_sub_sub.length; k++)
					{
							var str_sub_sub_sub = str_sub_sub[k].split("=");
							if ("getupnpservername" == str_sub_sub_sub[0] && str_sub_sub_sub[0] != "") {
								nUpnpListVal.servername[j] = str_sub_sub_sub[1].split("\n")[0];
							}
							if (" getupnptype" == str_sub_sub_sub[0] ) {
								nUpnpListVal.upnptype[j] = str_sub_sub_sub[1].split("\n")[0];
							}

							if (" getupnpinport" == str_sub_sub_sub[0] && str_sub_sub_sub[0] != "") {
								nUpnpListVal.inport[j] = str_sub_sub_sub[1].split("\n")[0];
							}
							if (" getupnpextport" == str_sub_sub_sub[0] && str_sub_sub_sub[0] != "") {
								nUpnpListVal.outport[j] = str_sub_sub_sub[1].split("\n")[0];
							}
					}

					className= j%2==0?'even':'odd';
					$('#upnpTab').append('<tr id="upnpindex'+j+'" class="even"><td><span style="width: 55px;"><input type="checkbox" id="upnpadded'+j+'" onclick="enablupnpvalue('+j+')" value="'+j+'"/> '+(parseInt(j)+1)+'</span></td>\
				<td><span style="width: 145px;" ondblclick="javascript:editupnpvalue(\''+j+'\');" onclick="javascript:editupnp(\''+j+'\');" >'+nUpnpListVal.servername[j]+'</span></td>\
				<td><span style="width: 220px;" ondblclick="javascript:editupnpvalue(\''+j+'\');" onclick="javascript:editupnp(\''+j+'\');">'+'TCP'+'</span></td>\
				<td><span style="width: 220px;" ondblclick="javascript:editupnpvalue(\''+j+'\');" onclick="javascript:editupnp(\''+j+'\');">'+nUpnpListVal.inport[j]+'</span></td>\
				<td><span style="width: 75px;" ondblclick="javascript:editupnpvalue(\''+j+'\');" onclick="javascript:editupnp(\''+j+'\');">'+nUpnpListVal.outport[j]+'</span></td></tr>');

				}

			}
		}
	}
}

//编辑端口信息
function editupnpvalue(j)
{
	$upnpeditallDiv=$('<div id="all"></div>').css("opacity", 0.7);
	$upnpediteditDiv=$('<div id="upnpedit">\
			<div class="upnpeditHeader">'+lang.upnpportinfo+'</div>\
			<div class="upnpeditContent">\
				<table width="100%">\
					<tr>\
						<td width="200px" height="15px"><label>'+lang.upnpservername+'</label></td>\
						<td width="200px;"><input maxlength="31" id="servername" name="servername" type="text"  value="'+nUpnpListVal.servername[j]+'"  /></td>\
					</tr>\
					<tr>\
						<td width="200px" height="15px"><label>'+lang.upnpprotocol+'</label></td>\
						<td width="200px;"><select id="upnpprotocol" class="select" matchval="upnpprotocol" >\
									<option value="0">TCP</option>\
						</select>\
					</tr>\
					<tr>\
						<td width="200px" height="15px"><label>'+lang.upnpinput+'</label></td>\
						<td width="200px;"><input onkeyup="if(keyboardFilter()) {value=NumberRangeLimt(this,1,65535)}" onblur="if(this.value == (\'\')) this.value=(\'00\')" maxlength="31" id="upnpinput" name="upnpinput" type="text"  value="'+nUpnpListVal.inport[j]+'"  /></td>\
					</tr>\
					<tr>\
						<td width="200px" height="15px"><label>'+lang.upnpoutput+'</label></td>\
						<td width="200px;"><input onkeyup="if(keyboardFilter()) {value=NumberRangeLimt(this,1,65535)}" onblur="if(this.value == (\'\')) this.value=(\'00\')" maxlength="31" id="upnpoutput" name="upnpoutput" type="text"  value="'+nUpnpListVal.outport[j]+'"  /></td>\
					</tr>\
					<tr>\
						<td colspan="2">\
							<div style="padding-top: 5px; text-align: center;">\
								<input type="button"  value="'+lang.confirm+'" onclick="upnpportinfosave(\''+ j+'\');" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\
								<input id="upnpeditCancel" type="button" value="'+lang.cancel+'" />\
							</div>\
						</td>\
					</tr>\
				</table>\
			</div>\
		</div>');
	$('body').prepend($upnpeditallDiv).prepend($upnpediteditDiv);
	//$('#userType').val(powerType);

	$( "#upnpedit" ).draggable({
		handle: ".upnpeditHeader"
	});

	$('#upnpeditCancel').click(function(){
		$upnpeditallDiv.remove();
		$upnpediteditDiv.remove();
	});

}

//设置端口信息
function upnpportinfosave(j)
{

	if($('#servername').val() == "")
	{
		window.parent.parent.save2(lang.upnptip2);
		return;
	}
	if($('#upnpinput').val() == "0" ||$('#upnpoutput').val() == "0" )
	{
		window.parent.parent.save2(lang.upnptip3);
		return;
	}

	if($('#upnpinput').val() == "" ||$('#upnpoutput').val() == "" )
	{
		window.parent.parent.save2(lang.upnptip4);
		return;
	}
	for(var k =0 ; k < upnpmapnum - 1; k++)
	{
		if(j != k)
		{
			if( $('#upnpinput').val() == nUpnpListVal.inport[k])
			{
				window.parent.parent.save2(lang.upnptip1);
				return;
			}
			if( $('#upnpoutput').val() == nUpnpListVal.outport[k])
			{
				window.parent.parent.save2(lang.upnptip1);
				return;
			}
		}
	}
	var str="setupnpen=";
	if($("#getupnpen").is(":checked"))
	{
		str = str +1;
	}
	else
	{
		str = str +0;
	}

	str = str + "&setupnpno=";
	str = str + 0;

	str = str + "&setupnpnum=";
	str = str +  (parseInt(upnpmapnum)-1);

	str = str + "&setupnpservername=";
	str = str + $('#servername').val();

	str = str + "&setupnptype=";
	str = str + 0;

	str = str + "&setupnpinport=";
	str = str + $('#upnpinput').val();

	str = str + "&setupnpextport=";
	str = str + $('#upnpoutput').val();

	var str1 = "../vb.htm?"+str;

	$('#upnpTab').html('');
	var XMLHttpRequestObject = null;
	if (window.XMLHttpRequest)
	{
		XMLHttpRequestObject = new XMLHttpRequest();
	}
	else if (window.ActiveXObject)
	{
		XMLHttpRequestObject = new ActiveXObject("Microsoft.XMLHTTP");
	}
	XMLHttpRequestObject.open("GET",str1,true,loginUser,loginpsw);
	XMLHttpRequestObject.setRequestHeader("If-Modified-Since","0");
	XMLHttpRequestObject.send(null);

	XMLHttpRequestObject.onreadystatechange = function() {
		if (XMLHttpRequestObject.readyState == 4) {
			if (XMLHttpRequestObject.status == 200) {

				$upnpeditallDiv.remove();
				$upnpediteditDiv.remove();

				load_upnp_setting();

			}

		}
	}

}

//列表中选中亮光
function editupnp(j)
{
	for(var i = 0;i < upnpmapnum - 1;i++) {
		var help = "#upnpindex" + i;
		$(help).attr("class","even");
	}

	var help = "#upnpindex" + j;
		$(help).attr("class","blueodd");



}

//全部选中
function enableupnpallvalue()
{
	for(var i = 0;i < upnpmapnum - 1;i++)
	{
		if($("#upnpallcheck").is(":checked"))
		{
				var help = "#upnpadded" + i;
				if(!$(help).is(":checked"))
					$(help).click();

				nUpnpListVal.sel[i] = 1;
		}
		else
		{
				var help = "#upnpadded" + i;
				if($(help).is(":checked"))
					$(help).click();

				nUpnpListVal.sel[i] = 0;
		}
	}
}

function enablupnpvalue(index)
{
	var help = "#upnpadded" + i;
	if($(help).is(":checked"))
	{
		nUpnpListVal.sel[i] = 1;

	}
	else
	{
		nUpnpListVal.sel[i] = 0;
	}
}