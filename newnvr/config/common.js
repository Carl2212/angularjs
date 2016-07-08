// JavaScript Document

//注意:由于此次都是字符串操作，请严格遵守字符串格式即: {n, m}   如果多个这个的格式和在一起用'；'隔开
	var XML_INDEX = [8,16,24,32,48,64,80,96,128,160,192,224,256,320,384,448,512,"Normal","Good","Better","Best"];
	var CIF_PAL_BITRATE = [[0, 0],[0, 1],[0, 2],[1, 3],[1, 4],[1, 5],[2, 6],[2, 7],[2, 7],[3, 7],[3, 8],[3, 9],[3, 9],[4, 9],[4, 10],[4, 10],[5, 11],[5, 12],[5, 12],[6, 12],[6, 13],[6, 13],[7, 14],[7, 15],[8, 15],[0, 0],[0, 0],[0, 0],[0, 0],[0, 0]];
	
	var CIF_NTSC_BITRATE = [[0, 0],[0, 1],[0, 2],[1, 3],[1, 3],[1, 4],[1, 5],[2, 5],[2, 6],[2, 7],[2, 7],[3, 7],[3, 8],[3, 8],[3, 9],[3, 9],[4, 9],[4, 9],[4, 10],[4, 10],[5, 10],[5, 11],[5, 12],[6, 12],[6, 13],[6, 13],[7, 13],[7, 14],[7, 15],[8, 15]];

	var HD1_PAL_BITRATE = [[0, 0],[0, 3],[0, 5],[0, 6],[1, 8],[1, 9],[1, 10],[2, 10],[2, 11],[3, 12],[3, 12],[3, 13],[4, 13],[4, 14],[5, 14],[5, 14],[5, 15],[5, 15],[5, 15],[6, 16],[6, 16],[6, 16],[6, 16],[6, 17],[7, 17],[0, 0],[0, 0],[0, 0],[0, 0],[0, 0]]
	
	var HD1_NTSC_BITRATE= [[0, 0],[0, 3],[0, 5],[0, 6],[1, 8],[1, 8],[1, 9],[1, 9],[1, 10],[2, 10],[2, 11],[2, 11],[2, 11],[3, 12],[3, 12],[3, 12],[3, 13],[4, 13],[4, 14],[5, 14],[5, 14],[5, 15],[5, 15],[5, 15],[6, 16],[6, 16],[6, 16],[6, 16],[6, 17],[7, 17]]
	
	var D1_PAL_BITRATE = [[0, 6],[2, 10],[3, 13],[5, 14],[6, 16],[6, 17],[7, 18],[8, 18],[9, 19],[10, 20],[10, 20],[10, 21],[11, 21],[11, 21],[11, 21],[12, 21],[13, 21],[13, 21],[13, 21],[14, 21],[14, 21],[14, 21],[14, 21],[14, 21],[15, 21],[0, 0],[0, 0],[0, 0],[0, 0],[0, 0]];

	var D1_NTSC_BITRATE = [[0, 6],[2, 10],[3, 13],[5, 14],[6, 16],[6, 17],[7, 18],[7, 18],[8, 18],[8, 18],[9, 19],[9, 19],[10, 20],[10, 20],[10, 21],[11, 21],[11, 21],[11, 21],[12, 21],[12, 21],[12, 21],[13, 21],[13, 21],[13, 21],[14, 21],[14, 21],[14, 21],[14, 21],[14, 21],[15, 21]];
	 
	 var P720_BITRATE = [[22,25],[22,25],[22,25],[22,25],[22,25],[22,25],[22,25],[22,25],[22,25],[22,25],[22,25],[22,25],[22,25],[22,25],[22,25],[22,25],[22,25],[22,25],[22,25],[22,25],[22,25],[22,25],[22,25],[22,25],[22,25],[22,25],[22,25],[22,25],[22,25],[22,25]];
	//在切换帧率或分辨率时所对应的默认码流
	//  0   1   2   3   4    5    6    7    8    9   10   11   12   13   14   15   16    17    18    19    20    21     下标
	// 32, 48, 64, 80, 96, 128, 160, 192, 224, 256, 320, 384, 448, 512, 640, 768, 896, 1024, 1280, 1536, 1792, 2048     码率
	var D1_PAL_FPS_DEFAULTBITRATE = [[1, 2],[2, 5],[3, 5],[4, 8],[5, 8],[6, 10],[7, 10],[8, 12],[9, 12],[10,13],[11,13],[12,14],[13,14],[14,14],[15,15],[16,16],[17,16],[18,17],[19,17],[20,18],[21,18],[22,19],[23,19],[24,19],[25,21]];
	var D1_NTSC_FPS_DEFAULTBITRATE = [[1, 2],[2, 5],[3, 5],[4, 8],[5, 8],[6, 10],[7, 10],[8, 12],[9, 12],[10,13],[11,13],[12,14],[13,14],[14,14],[15,15],[16,16],[17,16],[18,17],[19,17],[20,18],[21,18],[22,19],[23,19],[24,19],[25,21],[26,21],[27,21],[28,21],[29,21],[30,21]];
	
	var HD1_PAL_FPS_DEFAULTBITRATE = [[1, 1],[2, 3],[3, 3],[4, 6],[5, 6],[6, 9],[7, 9],[8, 10],[9, 10],[10,12],[11,12],[12,13],[13,13],[14,13],[15,14],[16,14],[17,14],[18,15],[19,15],[20,16],[21,16],[22,16],[23,16],[24,16],[25,17]];
	var HD1_NTSC_FPS_DEFAULTBITRATE = [[1, 1],[2, 3],[3, 3],[4, 6],[5, 6],[6, 9],[7, 9],[8, 10],[9, 10],[10,12],[11,12],[12,13],[13,13],[14,13],[15,14],[16,14],[17,14],[18,15],[19,15],[20,16],[21,16],[22,16],[23,16],[24,16],[25,17],[26,17],[27,17],[28,17],[29,17],[30,17]];
	
	var CIF_PAL_FPS_DEFAULTBITRATE = [[1, 0],[2, 1],[3, 1],[4, 3],[5, 3],[6, 5],[7, 5],[8, 6],[9, 6],[10,8],[11,8],[12,9],[13,9],[14,9],[15,10],[16,10],[17,10],[18,11],[19,11],[20,12],[21,12],[22,12],[23,12],[24,12],[25,13]];
	var CIF_NTSC_FPS_DEFAULTBITRATE = [[1, 0],[2, 1],[3, 1],[4, 3],[5, 3],[6, 5],[7, 5],[8, 6],[9, 6],[10,8],[11,8],[12,9],[13,9],[14,9],[15,10],[16,10],[17,10],[18,11],[19,11],[20,12],[21,12],[22,12],[23,12],[24,12],[25,13],[26,13],[27,13],[28,13],[29,13],[30,13]];
	
	var LanguageArray  = [["CHS", "中文"],["CHT","繁体中文"],["CSY","Čeština"],["DAN","Dansk"],["ENU", "English"],
						  ["FIN","Finnish"],["FRA","Français"],["DEU","Deutsch"],["ELL","Ελληνικα"],["HEB","Hebrew"],
						  ["HUN","Magyar"],["ITA","Italiano"],["JPN","日本語"],["PLK","Polski"],["PTG","Português"],
						  ["RUS", "Pусский"],["ESN","Español"],["THA","ไทย"],["SLV","Slovenija"],["ROM","România"],
						  ["BRG","Български"],["TRK","Türk"]];	
    var arrVal = new Array();   

    arrVal[0] = "encodingList";
    arrVal[1] = "encoding0";
    arrVal[2] = "resolutionList0";
    arrVal[3] = "resolution0";
    arrVal[4] = "resolutionList1";
    arrVal[5] = "resolution1";
    arrVal[6] = "encodingList";
    arrVal[7] = "encoding1";

	var ip=window.location.href.split('/')[2].split(':')[0];
	var port='80';
	var loginUser ='';
	var loginpsw = '';
	var langJs='en';
 	var netmask = '';
	var gateway = '';
	var channelnum = 0;

	var arrayUser = 0;
	var arrayGroup = 0;
	var selectUserIndex = 0;
	var selectGroupIndex = 0;
	var default_lang = 'cn';

var browserCfg = {};//鑾峰彇娴忚鍣ㄧ被鍨?
var ua = window.navigator.userAgent;
if (ua.indexOf("Trident")>=1)
{
	browserCfg.ie = true;
}
else if(ua.indexOf("Firefox")>=1)
{
	browserCfg.firefox = true;
}
else if(ua.indexOf("Chrome")>=1)
{
	browserCfg.chrome = true;
}
else if(ua.indexOf("AppleWebKit")>=1)
{
	browserCfg.safari = true;
}

function closewnd() 
{
	gDvr.LogOut();
}

function DivBox(objMain, obj){
	var $obj = $(obj);
	if ($(objMain).attr("checked")*1 != 1){
		$obj.find("select").attr("disabled",true);
		$obj.children().attr("disabled", "disabled");
		$obj.fadeTo("slow", 0.2);
	}else{
		$obj.find("select").attr("disabled",false);
		$obj.fadeTo("slow", 1,function(){
			//兼容safari处理
			$obj.css("filter","");
		});
		$obj.children().attr("disabled", "");
	}
}

//显示遮罩层
function MasklayerShow() 
{
	//HidePaop();
	//clearTimeout(gVar.nTimer);
	var bgObj=document.getElementById("MaskLayout");
	bgObj.style.width = document.body.offsetWidth + "px";
	bgObj.style.height = screen.height + "px";
	bgObj.style.display = "block";
}

//隐藏遮罩层
function MasklayerHide()
{
	var bgObj=document.getElementById("MaskLayout");
	bgObj.style.width = document.body.offsetWidth + "px";
	bgObj.style.height = screen.height + "px";
	bgObj.style.display = "none";
}

function ShowPaop(title, contant){
	
		if (typeof title != 'undefined' && typeof contant != 'undefined'){
			clearTimeout(gVar.nTimer);
			if ($("#MsgPaop").attr("name") != "in"){
				$("#MsgPaop").css("display", "").slideDown("slow").attr("name", "in");
			}
			$("#Paoptitle").attr("innerHTML", "<center>"+title+"</center>");
			$("#PaopContant").attr("innerHTML", contant);
			setTimeout(function(){
				$("#PaopBg").css("background-position", "0 -31px")
				setTimeout(function(){
					$("#PaopBg").css("background-position", "0px -62px")
					setTimeout(function(){$("#PaopBg").css("background-position", "0 0")}, 200);
				}, 200);
			}, 200);
			gVar.nTimer = setTimeout(function(){
				HidePaop();
			}, 5000);
		}
}
	
function HidePaop(){
	if(gDvr.DevType == 4 && gVar.sPage == "live"){
		$("#IPCTooltip").fadeOut("slow").slideUp("slow", function(){
		$(this).css("display", "none");
		}).attr("name", "out");
	}else{
		$("#MsgPaop").fadeOut("slow").slideUp("slow", function(){
			$(this).css("display", "none");
		}).attr("name", "out");
	}
}

function Web_prompt(str){
//	if(!$.browser.safari)
// 		gDvr.CloseNetConnect(1);
  	MasklayerHide();
	if(str == "" || str == null) { str = "can't find the language !";}
	$("#loginLgBtn_1").get(0).onclick = Login;
	$("#Web_false").text(str).css("color","red");
	setTimeout('$("#Web_false").fadeIn("slow")',500);
	setTimeout('$("#Web_false").fadeOut("slow")',5000);
}
//IE下




//让文本框、文本域和密码框可以选择
function fbd()
{
	var the = event.srcElement ;
 	//通过body的onselectstart属性，控制叶面内容的可选状态。
 	//标签是 input text 以及 文本域textarea 的，均为可以选择项目。
 	if( !( ( the.tagName== "INPUT" && the.type.toLowerCase() == "password" ) ||( the.tagName== "INPUT" && the.type.toLowerCase() == "text" ) || the.tagName== "TEXTAREA" )){
 		return false;
 	}
 	return true;
}

//复制通道公共方法
function copyTD(displayDiv,checkboxIds,joinDiv, num){
	if (typeof num == 'undefined')	num = gDvr.nChannel;
	$(displayDiv).css("display","block");	
	var tempstr = "";
	var tempstr1 = "";
	for(var i=0;i<num;i++)
	{
		var inner = "";
		if((i+1).toString().length==1){
			inner += '<div style="float:left;"><input type="checkbox" id="'+checkboxIds+''+(i+1)+'" value="'+i+'"/>'+lg.get("IDS_CH")+'0'+(i+1)+'</div>';
			if(i<8)
				tempstr += inner;
			else
				tempstr1 += inner;
		}
		else
			tempstr1+='<div style="float:left;"><input type="checkbox" id="'+checkboxIds+''+(i+1)+'" value="'+i+'"/>'+lg.get("IDS_CH")+(i+1)+'</div>';
	}
	document.getElementById(joinDiv+"_1").innerHTML=tempstr;
	document.getElementById(joinDiv+"_2").innerHTML=tempstr1;
}

function CreateLiveBtn(){
       

	//live页面根据通道号生成通道
	if ($(".mclcontainer").attr("name") != "isDown"){return;}   //isdown此处有用
	liveHtml +="<div style='margin-top:15px;'></div>"; //nChannel此时为0
	for(var i=1;i<=gDvr.nChannel;i++){
		liveHtml+='<div style="width:195px; height:23px; margin-left:5px; margin-top:5px;border:0px solid blue;"  class="live_1"><div class="live_td" style="float:left; color:#fff;margin-top:4px; font-size:12px; width:90px; text-align:right;" >CH'+i+
		'</div><div id="liveChn_Play_'+i+'" class="live_td" style="font-size:12px; width:10px; float:left; background-image:url(images/live_play.gif); background-repeat:no-repeat; height:14px;margin-top:5px; margin-left:15px; cursor:pointer" title='+
		lg.get("IDS_PLAY_ONOFF")+'></div><div id="liveChn_Rec_'+i+'" class="live_td" style="font-size:12px; width:18px; float:left; background-image:url(images/chanel_icon.gif); background-repeat:no-repeat; height:14px;margin-top:5px; margin-left:15px; cursor:pointer" title='+
		lg.get("IDS_RECORD_ONOFF")+'></div><div id="liveChn_Cap_'+i+'" class="live_td" style="font-size:12px; width:18px; float:left; background-image:url(images/chanel_icon.gif);background-repeat: no-repeat; background-position:0 -14px; height:14px;margin-top:5px; margin-left:15px; cursor:pointer" title='+
		lg.get("IDS_BTN_CAP")+'></div></div>';
	}
	$("#liveleft").html(liveHtml); //预览页面的通道
	
	//回放页面根据通道生成通道号
	var playHtml="";
	for(var i=1;(i<=gDvr.nChannel) && (i<=8);i++){
		playHtml+=("<div style='text-align:left; margin-left:22px; color:white; width:80px;'><input id='pbCheck"+i+"' class='playBack_chks'  name='channelcheck' value='"+i+"' type='radio'/>CH"+i+"</div>");
	}
	$("#playBack_td1").attr("innerHTML", playHtml);  //同步回放下的已有的通道
	playHtml="";
	for(var i=9;(i<=gDvr.nChannel) && (i<=16);i++){
		playHtml+=("<div style='text-align:left; margin-left:22px; color:white; width:80px;'><input id='pbCheck"+i+"' class='playBack_chks' name='channelcheck' value='"+i+"' type='radio'/>CH"+i+"</div>");
	}
	$("#playBack_td2").attr("innerHTML", playHtml);//同步回放下的已有的通道
	
	UI.Button("div[id^='liveChn_Play_']", 10, null, function(e, p){	//live页面左边栏按钮注册,通道预览开关
		var $p = $(p);
		var str = $p.attr("id");
		if (e.type == "mousedown"){
			if ($p.attr("name") == "disable" ){
				return false; 
			}else if($p.attr("name") != "active" ){
				var cmd = str.split("_")[2]*1;
				gDvr.PreViewStart(cmd);
			}
			else{
			    var cmd = str.split("_")[2]*1;
				gDvr.PreViewStop(cmd);
			}
			return false;
		}else if(e.type == "mouseover"){
			if($p.attr("name")=="disable")
				return false;
				}
		else if(e.type == "mouseout"){
			if($p.attr("name")=="disable")
				return false;}
		else if(e.type == "mouseup"){
			if($p.attr("name")=="disable")
				return false;}
	    
		if ($p.attr("name") != "active"){
			return true;
		}
		return false;
	})
	
	UI.Button("div[id^='liveChn_Rec_']", 18, null, function(e, p){	//Rec页面左边栏按钮注册
		var $p = $(p);
		if (e.type == "mousedown"){
			var cmd = ($p.attr("id").split("_")[2]*1);
	
				if ($p.attr("name") != "active" ){
				     if(gDvr.PreViewRec(cmd))
				     {
					    $p.attr("name", "active");
					    return false;
					 }
				}else{
				      gDvr.PreViewStopRec(cmd);
					  $p.attr("name", "");	
			    }
			    return true;
		}else{
			if ($p.attr("name") == "active" ){
				return false;
			}else{
				return true;
			}
		}
	})
	
	UI.Button("div[id^='liveChn_Cap_']", 18, null, function(e, p){	//CAP页面左边栏按钮注册
		var $p = $(p);
		var cmd = ($p.attr("id").split("_")[2]*1);
		if (e.type == "mousedown"){
			gDvr.PreViewCapture(cmd);
			
		}
		return true;
	});
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////


	
//过滤方向键 
function keyboardFilter(){
	if ((event.keyCode >= 37 && event.keyCode <= 40) || (event.keyCode == 8) || (event.keyCode == 9)){
		return false;
	}
	return true; 
}
	  //对端口进行限制
function NumberRangeLimt(ctrId,minVal,maxVal){
//var str =$("#"+ctrId.id).get(0).value.replace(/\D/g,'');
	var str = ($(ctrId).val()).replace(/\D/g,'');
	if(minVal != maxVal)
	{
	  if(str != "" && str < minVal) {return minVal;}
	  if(str > maxVal) {return maxVal;}
	}
	return str;
}
		 
function Reset(){
	$("#username").val("");
	$("#passwd").val("");
	$("#login_language").val(gVar.defaultLg);
	$("#login_language").change();
	$("#username").focus();
}

//检查字符串
function CheckStringValue(str,bpswd){
	
	if(bpswd != 1)
	{
	if(str == "" || str == null) 
	   return 1;
	}
	
	 ss = str.split(" ");  
	 if(ss.length != 1)
	    return 2;
		
	return 0;	
}

function split_span_val(str){   
    var str_sub = str.split("<br>");
	var spanval = document.getElementsByTagName("span");
	for (var i = 0; i < spanval.length; i++)
	{	
	    if(spanval[i].getAttribute("matchval")!="")
	    {
	        for(j = 0; j < str_sub.length - 1; j++)
		    {
			    str_sub_sub = str_sub[j].split("=");
			    if(spanval[i].getAttribute("matchval") == str_sub_sub[0] && str_sub_sub[0] != "")
			    {
					    var len1 = str_sub_sub[0].length;
					    spanval[i].innerHTML = str_sub[j].substr(len1+1);
					    break;
			    }			
		    }
	    }
			
	}
	
	var input_val = document.getElementsByTagName("input");
	for (var i = 0; i < input_val.length; i++)
	{	
		if((input_val[i].type == "text" || input_val[i].type == "password") && input_val[i].getAttribute("matchval") != "")
		{
			for(j = 0; j < str_sub.length - 1; j++)
			{
			
				str_sub_sub = str_sub[j].split("=");
				if(input_val[i].getAttribute("matchval") == str_sub_sub[0] && str_sub_sub[0] != "")
				{
						var len2 = str_sub_sub[0].length;
						input_val[i].value = str_sub[j].substr(len2+1);	
						 break;
				}			
			}
		}		
		if(input_val[i].type == "radio" && input_val[i].getAttribute("matchval") != "")
		{
			for(j = 0; j < str_sub.length - 1; j++)
			{
				str_sub_sub = str_sub[j].split("=");
				if(input_val[i].getAttribute("matchval") == str_sub_sub[0] && str_sub_sub[1] != "" && str_sub_sub[0] != "")
				{
			
					if(input_val[i].value == str_sub_sub[1])
					{
					    
						//input_val[i].checked = true;
						$(input_val[i]).click();
					}
					else
					{
						input_val[i].checked = false;
					}
					 break;
				}
				
			}
		}
		if(input_val[i].type == "checkbox" && input_val[i].getAttribute("matchval") != "")
		{
			for(j = 0; j < str_sub.length - 1; j++)
			{
				str_sub_sub = str_sub[j].split("=");
				if(input_val[i].getAttribute("matchval") == str_sub_sub[0] && str_sub_sub[1] != "" && str_sub_sub[0] != "")
				{
						if(str_sub_sub[1] >= 1)
						{							
							input_val[i].checked = true;
							$(input_val[i]).click();
							input_val[i].checked = true;
						}
						else
						{
							//$(input_val[i]).click();
							input_val[i].checked = false;
							$(input_val[i]).click();
							input_val[i].checked = false;
						}
						 break;
				}
				
			}
		}		
	}
	
	
	var input_select_val = document.getElementsByTagName("select");

	for (var i = 0; i < input_select_val.length; i++)
	{
	    var html_str_fps = "";
	    if (input_select_val[i].getAttribute("matchval") && input_select_val[i].getAttribute("matchval") != "") 
	    {
	         var obj = get_split_span_val(str_sub,input_select_val[i].getAttribute("matchval"));
	        if (GetValName(input_select_val[i].getAttribute("matchval")) != "" &&obj!="") 
		    {

		         obj = get_split_span_val(str_sub,GetValName(input_select_val[i].getAttribute("matchval")));
		         str_sub_sub_sub = obj.split(/[,;]/g);
		          for (k = 0; k <str_sub_sub_sub.length; k ++) 
                 {
                    html_str_fps+="<option value='"+k+"'>"+str_sub_sub_sub[k]+"</option>"
                 }
				alert(html_str_fps);
                 $(input_select_val[i]).html(html_str_fps);
                 obj = get_split_span_val(str_sub,input_select_val[i].getAttribute("matchval"));
		    }
		     if(input_select_val[i].getAttribute("matchval") != "" && obj != "")
		    {
			    var tag = 0;
			    for (k = 0; k < input_select_val[i].length; k ++)
			    {			
				    if(input_select_val[i].options[k].value == obj)
				    {

				        //setTimeout("select_option("+input_select_val[i].options[k]+")",1);
						input_select_val[i].options[k].selected = true;
					   // input_select_val[i].options[k].setAttribute("selected","selected");
					    tag = 1;
					    //$(input_select_val[i]).change();
				    }
			    }
			    if(tag == 0)
			    {
		            //setTimeout("select_option("+input_select_val[i].options[0]+")",1);
					input_select_val[i].options[0].selected = true;
				   // input_select_val[i].options[0].setAttribute("selected","selected");
				    //$(input_select_val[i]).change();
			    }
		    }
		   
	    }
	}
}



function split_span_val_type2(str){   
    var str_sub = str.split("OK ");

	var spanval = document.getElementsByTagName("span");
	for (var i = 0; i < spanval.length; i++)
	{	
	    if(spanval[i].getAttribute("matchval")!="")
	    {
	        for(j = 0; j < str_sub.length ; j++)
		    {
			    str_sub_sub = str_sub[j].split("=");
			    if(spanval[i].getAttribute("matchval") == str_sub_sub[0] && str_sub_sub[0] != "")
			    {
					   // var len1 = str_sub_sub[0].length;
					    spanval[i].innerHTML = str_sub_sub[1].split("\n")[0];
					    break;
			    }			
		    }
	    }
			
	}
	
	var input_val = document.getElementsByTagName("input");
	for (var i = 0; i < input_val.length; i++)
	{	
		if((input_val[i].type == "text" || input_val[i].type == "password") && input_val[i].getAttribute("matchval") != "")
		{
			for(j = 0; j < str_sub.length ; j++)
			{
			
				str_sub_sub = str_sub[j].split("=");
				if(input_val[i].getAttribute("matchval") == str_sub_sub[0] && str_sub_sub[0] != "")
				{
						//var len2 = str_sub_sub[0].length;
						input_val[i].value = str_sub_sub[1].split("\n")[0];	
						 break;
				}			
			}
		}		
		if(input_val[i].type == "radio" && input_val[i].getAttribute("matchval") != "")
		{
			for(j = 0; j < str_sub.length ; j++)
			{
				str_sub_sub = str_sub[j].split("=");
				if(input_val[i].getAttribute("matchval") == str_sub_sub[0] && str_sub_sub[1] != "" && str_sub_sub[0] != "")
				{
			
					if(input_val[i].value == str_sub_sub[1].split("\n")[0])
					{
					    
						//input_val[i].checked = true;
						$(input_val[i]).click();
					}
					else
					{
						input_val[i].checked = false;
					}
					 break;
				}
				
			}
		}
		if(input_val[i].type == "checkbox" && input_val[i].getAttribute("matchval") != "")
		{
			for(j = 0; j < str_sub.length ; j++)
			{
				str_sub_sub = str_sub[j].split("=");
				if(input_val[i].getAttribute("matchval") == str_sub_sub[0] && str_sub_sub[1] != "" && str_sub_sub[0] != "")
				{
						if(str_sub_sub[1].split("\n")[0] >= 1)
						{							
							input_val[i].checked = true;
							$(input_val[i]).click();
							input_val[i].checked = true;
						}
						else
						{
							//$(input_val[i]).click();
							input_val[i].checked = false;
							$(input_val[i]).click();
							input_val[i].checked = false;	
						}
						 break;
				}
				
			}
		}		
	}
	
	
	var input_select_val = document.getElementsByTagName("select");
	for (var i = 0; i < input_select_val.length; i++)
	{		
		for(j = 0; j < str_sub.length ; j++)
		{
			str_sub_sub = str_sub[j].split("=");
			if(input_select_val[i].getAttribute("matchval") == str_sub_sub[0] && str_sub_sub[1] != "" && str_sub_sub[0] != "")
			{
			       // alert(input_select_val[i].getAttribute("matchval"));

					var tag = 0;
					for (k = 0; k < input_select_val[i].length; k ++)
					{
						if (input_select_val[i].options[k].value == str_sub_sub[1].split("\n")[0])
						{
							input_select_val[i].options[k].selected = true;
							tag = 1;
							//$(input_select_val[i]).change();
						}
					}
					if(tag == 0)
					{
						input_select_val[i].options[0].selected = true;
						//$(input_select_val[i]).change();
					}
			}
			else
			if(input_select_val[i].getAttribute("matchval") == str_sub_sub[0] && str_sub_sub[1] == "" && str_sub_sub[0] != "")
			{
				//alert(input_select_val[i].getAttribute("matchval"));
					input_select_val[i].options[0].selected = true;	
					//$(input_select_val[i]).change();
			}
		}
	}
}

function GetValName(str)
{

    for (var i=1 ; i< arrVal.length; i=i+2)
    {
        if (arrVal[i] == str) 
        {
            return arrVal[i-1];
            
        }
    }
    return ""; 
}

function get_split_span_val(strtest,substr){  


    for(j = 0; j < strtest.length; j++)
    {

        str_sub_sub = strtest[j].split("=");
        if(substr == str_sub_sub[0] && str_sub_sub[0] != "")
		{
            var len1 = str_sub_sub[0].length;
            return strtest[j].substr(len1+1);
        }
    }
	return "";		
}

function get_split_span_val2(strtest,substr){  


    for(j = 0; j < strtest.length; j++)
    {
        str_sub_sub = strtest[j].split("=");
        if(substr == str_sub_sub[0] && str_sub_sub[0] != "")
        {
            return str_sub_sub[1].split("\n")[0]
        }
    }
	return "";		
}



var blockTimeID = null;
function  save_val(str1,n1,n2){	//str1: cmd string;  n1:0.none  1.alarm time schedule  2.sip number list 3.user list 4.storage device and JPG/AVI file list 9.oem  ; n2: 0.save  1.add  2.remove   3.modify  4.update  5.umount storage device
	if(str1 != "")
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

		XMLHttpRequestObject.open("GET", str1, true,loginUser,loginpsw);
		XMLHttpRequestObject.setRequestHeader("cache-control","no-cache");
		XMLHttpRequestObject.setRequestHeader("context-type","text/xml;charset=utf-8");
		XMLHttpRequestObject.setRequestHeader("Content-Type","application/x-www-form-encodeURIComponent");
		XMLHttpRequestObject.setRequestHeader("If-Modified-Since","0");
		XMLHttpRequestObject.send(null);
		XMLHttpRequestObject.onreadystatechange = function()
		{

		   if(XMLHttpRequestObject.readyState == 4)
		   {

				if(XMLHttpRequestObject.status == 200)
				{
					//alert(n1);
				    if(n1 == 0)
				    {
						window.parent.parent.save2(lang.saved);
				    }
				    else if(n1 == 1)
				    {
				        setTimeout("set_time()",10);
				    }
				    else if(n1 == 2)
				    {
				        ShowPaop(gVar.errTitle, lg.get("IDS_USER_ADDSUCC"));
				        setTimeout("load_user_list()",10);
				    }
				    else if(n1 == 3)
				    {
				       ShowPaop(gVar.errTitle, lg.get("IDS_USER_MODIFYSUCC"));
				       if(user_newpasswd != gVar.passwd)
				       {
				            window.location.href = "./login.html?"+gVar.nDate;
				       } 
				    }
				    else if(n1 == 4)
				    {
				        ShowPaop(gVar.errTitle, lg.get("IDS_USER_DELETESUCC"));
				        setTimeout("load_user_list()",10);
				    }
				    else if(n1 == 5)
				    {
				       // MasklayerShow();
                       blockTimeID = setTimeout("formatprocess()",1000); 
				    }
				    else if(n1 == 6) //net_save
				    {
						//alert('save_netport');

						setTimeout("save_netport()",10);
				    }
				    else if(n1 == 7)
				    {  
				        ShowPaop(gVar.errTitle, lg.get("IDS_CONFIRM_REBOOTING"));
				    }
				    else if(n1 == 8)
				    {  
				        ShowPaop(gVar.errTitle, lg.get("IDS_UPGRADE_SHUT_SUCC"));
				    }
				    else if(n1 == 9)//net_save
				    { 
				        //gDvr.ChangePort($("[matchval='tcpport']").val()*1,$("[matchval='rtspserverport']").val()*1);

							window.parent.parent.save2(lang.saved);
				        //}
				        
				    }
					else if(n1 == 10)
					{
						var str = XMLHttpRequestObject.responseText;
						var str_sub = str.split("OK ");
						var str_sub_sub = str_sub[1].split("=");
						if(str_sub_sub[0] == "testemailstatus")
						{
							if(str_sub_sub[1]=='1')
							{
								window.parent.parent.save2(lang.emailtestok);
							}
							else
							{
								window.parent.parent.save2(lang.emailtestfail);
							}
						}
					}
					else if(n1 == 11)
					{
						var str = XMLHttpRequestObject.responseText;
						var str_sub = str.split("OK ");
						alert(str_sub);
						var str_sub_sub = str_sub[1].split("=");
						if(str_sub_sub[0] == "testftpfunction")
						{
							if(str_sub_sub[1]=='1')
							{
								window.parent.parent.save2(lang.ftptestok);
							}
							else
							{
								window.parent.parent.save2(lang.ftptestok);
							}
						}
					}
					else if(n1 == 12)
					{
						window.parent.parent.save2(lang.saved);
						if(videomode != $("[matchval='getvideomode']").val())
						{
							window.parent.parent.location.href='../login.html';

						}
					}
					else if(n1 == 13)
					{
						window.parent.parent.save2(lang.saved);
						load_time();
					}
					else if(n1 == 14)
					{
						if($("#chdefault_factory").is(":checked"))
						{
							alert('跳转到登陆界面，并且ip为192.168.1.88');
						}
						if($("#chdefault_display").is(":checked")||$("#chdefault_liveview").is(":checked")||$("#chdefault_channel").is(":checked")||$("#chdefault_common").is(":checked"))
						{
							window.parent.parent.location.href='../login.html';
						}
					}
					else if(n1 == 15)
					{
						window.parent.parent.save2(lang.saved);
						load_p2p_setting();
					}
					else if(n1 == 16)
					{
						device_add_sub(n2);
					}
					else if(n1 == 17)
					{
						device_del_sub(n2);
					}
					else if(n1 == 18)
					{
						load_device_search_added();
					}
			
				}
				else
				{
				    if(n1 == 2)
				    {
				        ShowPaop(gVar.errTitle, lg.get("IDS_USER_ADDFAIL"));
				    }
				    else if(n1 == 3)
				    {
				        ShowPaop(gVar.errTitle, lg.get("IDS_USER_MODIFYFAIL"));
				    }
				     else if(n1 == 4)
				    {
				        ShowPaop(gVar.errTitle, lg.get("IDS_USER_DELETEFAIL"));
				    }
				     else if(n1 == 5)
				    {
				        ShowPaop(gVar.errTitle, lg.get("IDS_DISK_FORMATERR"));
				    }
				    else if(n1 == 7)
				    {
				        ShowPaop(gVar.errTitle, lg.get("IDS_CONFIRM_REBOOT_FAIL"));
				    }
				     else if(n1 == 8)
				    {  
				        ShowPaop(gVar.errTitle, lg.get("IDS_UPGRADE_SHUT_FAIL"));
				    }
				    else
				    {
				        ShowPaop(gVar.errTitle, lg.get("IDS_SAVE_FAILED"));
				     }
				}
		    }
		 }
    }
}


function device_restart()
{
     var str1 = "../vb.htm?setuser=" + loginUser+"&setsystemreboot";
     save_val(str1,7,0);
}

function formatprocess()
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
	XMLHttpRequestObject.open("GET", "../vb.htm?formatprocess",true,loginUser,loginpsw);
	XMLHttpRequestObject.setRequestHeader("If-Modified-Since","0");
	XMLHttpRequestObject.send(null);
	
	XMLHttpRequestObject.onreadystatechange = function()
	{
	   if(XMLHttpRequestObject.readyState == 4)
	   {
			if(XMLHttpRequestObject.status == 200)
			{ 
				var str = XMLHttpRequestObject.responseText;	
				var str_sub = str.split("=");
				var process =  str_sub[1];//str_sub[1].split("\n")[0];
				blockTimeID = process;
                //var show_str= lg.get("IDS_DISK_FORMATING")+"...( "+process+"% )";
                // ShowPaop(gVar.errTitle, show_str);
                 if(process*1 <100)
                {

                   setTimeout("formatprocess()",1000);
                }
                else
                {
						device_restart();
                      //MasklayerHide();
                      //setTimeout("load_disk_info()",10);
                }
            
			}
	    }
	}
}

//function modeAlert(){
//	$allDiv=$('<div class="all" style="z-index:9999; position:absolute; top:0px; left:0px; right:0px; bottom:0px; background-color:#000;"></div>');
//
//	$('body').append($allDiv);
//
//	$allDiv.css('width',$(window).width()+'px')
//		.css('height',document.body.scrollHeight+'px')
//		.css("opacity", 0.75);
//
//	$waitDiv=$('<div id="waitBlock" style="z-index:10000;">\
//    	<div class="progressOuter" style="z-index:10000;">\
//			<div class="progressInner" style="z-index:10000;"></div>\
//			<div class="progressText" style="top:0px; left:0px; right:0px; bottom:0px; width: 362px; text-align: center; line-height: 20px; position: absolute; z-index:100000;">'+"正在格式化磁盘，请稍后"+'...</div>\
//		</div></div>');
//
//	$('body').append($waitDiv);
//
//	setCenter($waitDiv);
//
//	waitOne();
//}
//
//function waitOne(){
//	var $progressInner=$('.progressInner');
//	//alert(blockTimeID);
//	$progressInner.width($progressInner.width()*blockTimeID/100);
//	if($progressInner.width()<362){
//		setTimeout('waitOne()',1000);
//	}else{
//		window.location.href='http://'+ip+':'+port+'/';
//	}
//}
//
//function setCenter($div){
//	var left=($(window).width()-$div.width())/2;
//	var top=($(window).height()-$div.height())/2+$(document).scrollTop();
//	$div.css('left',left);
//	$div.css('top',top);
//}



function set_time()
{
    var str1;
    var date =$("#normal_start_time").val();
	var time = $("#normal_timer").timer.GetTimeFor24($("#normal_timer"));
	var sub_time = time.split(":");
	var sub_date = date.split("-");
    var str="setsystemtimeyear=";
    str = str + sub_date[0];
    str = str + "&setsystemtimemonth=";
    str = str + sub_date[1];
    str = str + "&setsystemtimeday=";
    str = str + sub_date[2];
     str = str + "&setsystemtimehour=";
    str = str + sub_time[0];
     str = str + "&setsystemtimeminutes=";
    str = str + sub_time[1];
     str = str + "&setsystemtimeseconds=";
    str = str + sub_time[2];
     str1 = "./vb.htm?"+str;
    save_val(str1,0,0);
    
}

function num_round(v,e) 
{ 
    var t=1; 
    for(;e>0;t*=10,e--); 
    for(;e<0;t/=10,e++); 
    return Math.round(v*t)/t; 
}
/*************************************************
 Function:		Base64
 Description:	Base64加密解密
 Input:			无
 Output:			无
 return:			无
 *************************************************/
var Base64 = {

	// private property
	_keyStr : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",

	// public method for encoding
	encode : function (input) {
		var output = "";
		var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
		var i = 0;

		input = Base64._utf8_encode(input);

		while (i < input.length) {

			chr1 = input.charCodeAt(i++);
			chr2 = input.charCodeAt(i++);
			chr3 = input.charCodeAt(i++);

			enc1 = chr1 >> 2;
			enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
			enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
			enc4 = chr3 & 63;

			if (isNaN(chr2)) {
				enc3 = enc4 = 64;
			} else if (isNaN(chr3)) {
				enc4 = 64;
			}

			output = output + this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) + this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);

		}

		return output;
	},

	// public method for decoding
	decode : function (input) {
		var output = "";
		var chr1, chr2, chr3;
		var enc1, enc2, enc3, enc4;
		var i = 0;

		input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

		while (i < input.length) {

			enc1 = this._keyStr.indexOf(input.charAt(i++));
			enc2 = this._keyStr.indexOf(input.charAt(i++));
			enc3 = this._keyStr.indexOf(input.charAt(i++));
			enc4 = this._keyStr.indexOf(input.charAt(i++));

			chr1 = (enc1 << 2) | (enc2 >> 4);
			chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
			chr3 = ((enc3 & 3) << 6) | enc4;

			output = output + String.fromCharCode(chr1);

			if (enc3 != 64) {
				output = output + String.fromCharCode(chr2);
			}
			if (enc4 != 64) {
				output = output + String.fromCharCode(chr3);
			}

		}

		output = Base64._utf8_decode(output);

		return output;

	},

	// private method for UTF-8 encoding
	_utf8_encode : function (string) {
		string = string.replace(/\r\n/g,"\n");
		var utftext = "";

		for (var n = 0; n < string.length; n++) {

			var c = string.charCodeAt(n);

			if (c < 128) {
				utftext += String.fromCharCode(c);
			} else if ((c > 127) && (c < 2048)) {
				utftext += String.fromCharCode((c >> 6) | 192);
				utftext += String.fromCharCode((c & 63) | 128);
			} else {
				utftext += String.fromCharCode((c >> 12) | 224);
				utftext += String.fromCharCode(((c >> 6) & 63) | 128);
				utftext += String.fromCharCode((c & 63) | 128);
			}

		}

		return utftext;
	},

	// private method for UTF-8 decoding
	_utf8_decode : function (utftext) {
		var string = "";
		var i = 0;
		var c = c1 = c2 = 0;

		while ( i < utftext.length ) {

			c = utftext.charCodeAt(i);

			if (c < 128) {
				string += String.fromCharCode(c);
				i++;
			} else if ((c > 191) && (c < 224)) {
				c2 = utftext.charCodeAt(i+1);
				string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
				i += 2;
			} else {
				c2 = utftext.charCodeAt(i+1);
				c3 = utftext.charCodeAt(i+2);
				string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
				i += 3;
			}

		}

		return string;
	}
}
/*************************************************
 Function:		InitConfig
 Description:	初始化公共配置
 Input:			none
 Output:
 return:
 *************************************************/
function InitPublic(callback) {
	langJs = $.cookies.get('lang') || defaultLang;
	$.cookies.set('lang', langJs, {'hoursToLive': 24 * 365});
	$.getScript("../lang/" + langJs + ".js", function () {
		InitLang();//初始化语言
		Initdropdown();
		if(callback && callback != undefined) {
			callback();
		}
	});
};
/*************************************************
 Function:		Initdropdown
 Description:	初始化下拉菜单
 Input:			none
 Output:
 return:
 *************************************************/
function Initdropdown() {
	$(".dropdown").each(function(){//下拉菜单初始化
		$(this).find(".select-value").text($(this).find(".select-option").eq(0).text())
				.attr('data-value',$(this).find(".select-option").eq(0).attr("data-value"));
	});

	$(".select-option").on("click",function(){//下拉菜单点击
		var option_text = $(this).text();
		var option_value = $(this).attr("data-value");
		$(this).parents(".dropdown").find(".select-value").text(option_text).attr("data-value", option_value);
	});
}
/*************************************************
 Function:		InitLang
 Description:	初始化语言(必须先加载完语言再调用此方法)
 Input:			none
 Output:
 return:
 *************************************************/

function InitLang() {
	$("[data-id]").each(function(){
		$(this).text(lang[$(this).attr("data-id")]);
	});
	$("[value-id]").each(function(){
		$(this).val(lang[$(this).attr("value-id")]);
	});
}
/*************************************************
 Function:		InitSelecttimezone
 Description:	初始化时区下拉菜单选项
 Input:			none
 Output:
 return:
 *************************************************/
function InitSelecttimezone() {
	var timezone = $("#getntptimezone").siblings(".dropdown-menu");
	var zone_list = '';
	for(var i =0 ;i < 48 ; i++) {
		zone_list += '<li><a class="select-option" href="javascript:void(0);" data-value="'+i+'">'+lang['GMT'+i]+'</a></li>';
	}
	timezone.append(zone_list);
}
/*************************************************
 Function:		InitSelecthour
 Description:	初始化小时下拉菜单选项
 Input:			none
 Output:
 return:
 *************************************************/
function InitSelecthour() {
	var timehour = $("#getsystemtimehour").siblings(".dropdown-menu");
	var hour_list = '';
	for(var i =0 ;i < 24 ; i++) {
		var j = (i < 10) ? ('0'+i) : i;
		hour_list += '<li><a class="select-option" href="javascript:void(0);" data-value="'+i+'">'+j+'</a></li>';
	}
	timehour.append(hour_list);
}
/*************************************************
 Function:		InitSelectminutes
 Description:	初始化分钟下拉菜单选项
 Input:			none
 Output:
 return:
 *************************************************/
function InitSelectminutes() {
	var timeminutes = $("#getsystemtimeminutes").siblings(".dropdown-menu");
	var minutes_list = '';
	for(var i =0 ;i < 60 ; i++) {
		var j = (i < 10) ? ('0'+i) : i;
		minutes_list += '<li><a class="select-option" href="javascript:void(0);" data-value="'+i+'">'+j+'</a></li>';
	}
	timeminutes.append(minutes_list);
}
/*************************************************
 Function:		InitSelectseconds
 Description:	初始化秒下拉菜单选项
 Input:			none
 Output:
 return:
 *************************************************/
function InitSelectseconds() {
	var timeseconds = $("#getsystemtimeseconds").siblings(".dropdown-menu");
	var seconds_list = '';
	for(var i =0 ;i < 60 ; i++) {
		var j = (i < 10) ? ('0'+i) : i;
		seconds_list += '<li><a class="select-option" href="javascript:void(0);" data-value="'+i+'">'+j+'</a></li>';
	}
	timeseconds.append(seconds_list);
}
/*************************************************
 Function:		InitSelectseconds
 Description:	初始化通道下拉菜单选项
 Input:			none
 Output:
 return:
 *************************************************/
function InitFtpsChedchn() {
	var timeseconds = $("#getftpschedchn").siblings(".dropdown-menu");
	var seconds_list = '';
	for(var i =0 ;i < 25 ; i++) {
		var j = (i < 10) ? ('0'+i) : i;
		seconds_list += '<li><a class="select-option" href="javascript:void(0);" data-value="'+i+'">'+j+'</a></li>';
	}
	timeseconds.append(seconds_list);
}