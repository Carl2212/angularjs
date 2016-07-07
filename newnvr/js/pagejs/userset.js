var usercount = 0;
var sListUserInfo = 0;
var sListGroupInfo = 0;
var userlistdata=
{
	user_id:0,
	user_name:'',
	password:0,
	user_remarks:'',
	system_set_data_bit:0,
	playback_data_bit:0,
	live_preview_data_bit:0,
	belong_to_group:'',
	group_remarks:'',
	recv:0,

}

var grouplistdata=
{
	group_id:0,
	group_name:'',
	group_remarks:'',
	system_set_data_bit:0,
	playback_data_bit:0,
	live_preview_data_bit:0,
	recv:0,
}

if($.cookies.get('userName')) {
	loginUser = $.cookies.get('userName');
}
if($.cookies.get('pwd')) {
	loginpsw = $.cookies.get('pwd');
}
if($.cookies.get('arrayUser')) {
	arrayUser = 0;
}
if($.cookies.get('arrayGroup')) {
	arrayGroup = 0;
}
if($.cookies.get('selectUserIndex')) {
	selectUserIndex = 0;
}
if($.cookies.get('selectGroupIndex')) {
	selectGroupIndex = 0;
}

function InitConfig(){
	//语言初始化
	langJs=$.cookies.get('lang') || defaultLang;
	$.cookies.set('lang', langJs, {'hoursToLive': 24 * 365});
	$.getScript("../lang/"+langJs+".js",function() {
		InitLang();//初始化语言
	});
	//GetUserData();
	//GetGroupData();
	//click user
	$(".nav.nav-tabs li").on("click",function(){
		if(!$(this).hasClass('active')) {
			var tab_id = $(this).attr('tab-id');
			$(this).addClass('active').siblings(".active").removeClass('active');
			$(".logMain table[tab-id="+tab_id+"]").removeClass('hide').siblings().not(".hide").addClass('hide');
		}
	});
	$("#user_user").click(function(){
		OnBnClickUser();
	});

	//click user_group
	$("#user_group").click(function(){
		OnBnClickGroup();
	});

	$("#logadduer").click(function(){
		window.location.href="adduserset.html";
	});


	$("#logadduergroup").click(function(){
		window.location.href="addgroupset.html";
	});

};
function InitLang() {
	$("[data-id]").each(function(){
		$(this).text(lang[$(this).attr("data-id")]);
	});
	$("[value-id]").each(function(){
		$(this).val(lang[$(this).attr("value-id")]);
	});
}
function GetUserData()
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

	XMLHttpRequestObject.open("GET", "../vb.htm?selectalluserlist",true,loginUser,loginpsw);
	XMLHttpRequestObject.setRequestHeader("If-Modified-Since","0");
	XMLHttpRequestObject.send(null);
	$('#userList').empty();
	arrayUser = new Array();
	XMLHttpRequestObject.onreadystatechange = function()
	{
		if(XMLHttpRequestObject.readyState == 4)
		{
			if(XMLHttpRequestObject.status == 200)
			{
				var str = XMLHttpRequestObject.responseText;
				var str_sub = str.split("<br>");
				if(str == '')
				{
					window.parent.parent.save2(lang.lognologtip);
				}
				var className='';
				usercount = str_sub.length;

				for(j = 0; j < str_sub.length - 1; j++) {
					var str_sub_sub = str_sub[j].split(",");

					var sUserId = str_sub_sub[0].split("1=")[1];
					var sUserName = str_sub_sub[1].split("2=")[1];
					var sPasswd = str_sub_sub[2].split("3=")[1];
					var sUserRemarks = str_sub_sub[3].split("4=")[1];
					var sSystembit = str_sub_sub[4].split("5=")[1];
					var sPlaybackbit = str_sub_sub[5].split("6=")[1];
					var sLiveviewbit = str_sub_sub[6].split("7=")[1];
					var sBelongtogroup = str_sub_sub[7].split("8=")[1];
					var sGroupremarks = str_sub_sub[8].split("9=")[1];

					sListUserInfo = new Object();
					sListUserInfo.user_id = sUserId;
					sListUserInfo.user_name = sUserName;
					sListUserInfo.password = sPasswd;
					sListUserInfo.user_remarks = sUserRemarks;
					sListUserInfo.system_set_data_bit = sSystembit;
					sListUserInfo.playback_data_bit = sPlaybackbit;
					sListUserInfo.live_preview_data_bit = sLiveviewbit;
					sListUserInfo.belong_to_group = sBelongtogroup;
					sListUserInfo.group_remarks = sGroupremarks;

					arrayUser[j] = sListUserInfo;

					$.cookies.set('arrayUser',arrayUser,{'hoursToLive':24*7});

					className=j%2==0?'even':'odd';
					var nIndex = j+1;
					$('#userList').append('<tr class="'+className+'"><td><span style="width: 70px;"> '+nIndex+'</span></td>\
				<td><span style="width: 145px;">'+sUserName+'</span></td>\
				<td><span style="width: 110px;">'+sBelongtogroup+'</span></td>\
				<td><span style="width: 110px;"><a href="javascript:ModifyUser('+j+')" value="'+j+'">'+'edit'+'</a></span></td>\
				<td><span style="width: 110px;"><a href="javascript:DeleteUser('+j+')" value="'+j+'">'+'delete'+'</a></span></td>\
				<td><span style="width: 110px;">'+sUserRemarks+'</span></td></tr>'
					);
				}
			}
		}
	}
}

function GetGroupData()
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

	XMLHttpRequestObject.open("GET", "../vb.htm?selectallgrouplist",true,loginUser,loginpsw);
	XMLHttpRequestObject.setRequestHeader("If-Modified-Since","0");
	XMLHttpRequestObject.send(null);
	arrayGroup = new Array();
	$('#groupList').empty();
	XMLHttpRequestObject.onreadystatechange = function()
	{
		if(XMLHttpRequestObject.readyState == 4)
		{
			if(XMLHttpRequestObject.status == 200)
			{
				var str = XMLHttpRequestObject.responseText;
				var str_sub = str.split("<br>");
				if(str == '')
				{
					window.parent.parent.save2(lang.lognologtip);
				}
				var className='';
				usercount = str_sub.length;

				for(j = 0; j < str_sub.length - 1; j++) {
					var str_sub_sub = str_sub[j].split(",");

					var sGroupId = str_sub_sub[0].split("group_id=")[1];
					var sGroupName = str_sub_sub[1].split("group_name=")[1];
					var sGroupRemarks = str_sub_sub[2].split("group_remarks=")[1];
					var sGroupSystemBit = str_sub_sub[3].split("system_bit=")[1];
					var sGroupPlaybackBit = str_sub_sub[4].split("playbakc=")[1];
					var sGroupLiveBit = str_sub_sub[5].split("live_bit=")[1];


					sListGroupInfo = new Object();
					sListGroupInfo.group_id = sGroupId;
					sListGroupInfo.group_name = sGroupName;
					sListGroupInfo.group_remarks = sGroupRemarks;
					sListGroupInfo.system_set_data_bit = sGroupSystemBit;
					sListGroupInfo.playback_data_bit = sGroupPlaybackBit;
					sListGroupInfo.live_preview_data_bit = sGroupLiveBit;

					arrayGroup[j] = sListGroupInfo;

					$.cookies.set('arrayGroup',arrayGroup,{'hoursToLive':24*7});
					className=j%2==0?'even':'odd';
					var nIndex = j+1;
					$('#groupList').append('<tr class="'+className+'"><td><span style="width: 70px;"> '+nIndex+'</span></td>\
				<td><span style="width: 110px;">'+sGroupName+'</span></td>\
				<td><span style="width: 110px;"><a href="javascript:ModifyGroup('+j+')" value="'+j+'">'+'edit'+'</a></span></td>\
				<td><span style="width: 110px;"><a href="javascript:DeleteGroup('+j+')" value="'+j+'">'+'delete'+'</a></span></td>\
				<td><span style="width: 110px;">'+sGroupRemarks+'</span></td></tr>'
					);
				}
			}
		}
	}
}

function OnBnClickUser()
{
	document.getElementById("user_list").style.display = 'block';
	document.getElementById("group_list").style.display = 'none';

	document.getElementById("logadduer").style.display = 'block';
	document.getElementById("logadduergroup").style.display = 'none';

}

function OnBnClickGroup()
{
	document.getElementById("user_list").style.display = 'none';
	document.getElementById("group_list").style.display = 'block';

	document.getElementById("logadduer").style.display = 'none';
	document.getElementById("logadduergroup").style.display = 'block';

}

function DeleteUser(nIndex)
{
	if(arrayUser[nIndex].user_name == "admin")
	{
		alert('admin cannot delete');
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

	var str1 = "../vb.htm?deluser="+arrayUser[nIndex].user_id;
	alert(str1);
	XMLHttpRequestObject.open("GET", str1,true,loginUser,loginpsw);
	XMLHttpRequestObject.setRequestHeader("If-Modified-Since","0");
	XMLHttpRequestObject.send(null);

	XMLHttpRequestObject.onreadystatechange = function() {
		if (XMLHttpRequestObject.readyState == 4) {
			if (XMLHttpRequestObject.status == 200) {
				GetUserData();
			}
		}

	}

}

function DeleteGroup(nIndex)
{
	if(arrayGroup[nIndex].group_name == "admin")
	{
		alert('admin cannot delete');
		return;
	}

	for(var i = 0;i < arrayUser.length;i++)
	{
		if(arrayUser[i].belong_to_group == arrayGroup[nIndex].group_name)
		{
			alert("the group has exist user,cannot delete");
			return;
		}
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

	var str1 = "../vb.htm?delgroup="+arrayGroup[nIndex].group_id;
	alert(str1);
	XMLHttpRequestObject.open("GET", str1,true,loginUser,loginpsw);
	XMLHttpRequestObject.setRequestHeader("If-Modified-Since","0");
	XMLHttpRequestObject.send(null);

	XMLHttpRequestObject.onreadystatechange = function() {
		if (XMLHttpRequestObject.readyState == 4) {
			if (XMLHttpRequestObject.status == 200) {
				GetGroupData();
			}
		}

	}
}

function ModifyUser(nIndex)
{
	$.cookies.set('selectUserIndex',nIndex,{'hoursToLive':24*7});
	window.location.href = "modifyuserset.html";
}

function ModifyGroup(nIndex)
{
	$.cookies.set('selectGroupIndex',nIndex,{'hoursToLive':24*7});
	window.location.href = "modifygroupset.html";
}