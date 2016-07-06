
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
if($.cookies.get('arrayGroup')) {
	arrayGroup = $.cookies.get('arrayGroup');
}
if($.cookies.get('arrayUser')) {
	arrayUser = $.cookies.get('arrayUser');
}
document.write("<script src='../lang/"+langJs+".js'><\/script>");

$(document).ready(function(){
	InitGroupComboData();

	$("#add_return").click(function(){
		window.history.back(0);
	});

	$("#add_save").click(function(){
		SaveData();
	});

	$("#addbelonggroup").change(function(){
		var index = $('#addbelonggroup').prop('selectedIndex');
		var lSysConfigDatabit = arrayGroup[index].system_set_data_bit;
		var lPlaybackDatabit = arrayGroup[index].playback_data_bit;
		var lLiveviewDatabit = arrayGroup[index].live_preview_data_bit;

		ShowSysConfigDatabit(lSysConfigDatabit);
		$('#addusersystem_allselect').prop('checked',GetSysConfigAllSelectStatus());

		ShowPlaybackDatabit(lPlaybackDatabit);
		$('#adduserplayback_allselect').prop('checked',GetPlaybackAllSelectStatus());

		ShowLiveviewDatabit(lLiveviewDatabit);
		$('#adduserliveview_allselect').prop('checked',GetLiveviewAllSelectStatus());

	});

	$("#addusersystem_allselect").click(function(){
		var bSelectAll = $("#addusersystem_allselect").is(':checked');
		for(var i = 0; i < 12;i++)
		{
			if( !($(".adduser_systembit").eq(i).prop('disabled')))
			{
				$(".adduser_systembit").eq(i).prop('checked',bSelectAll);
			}
		}
	});

	$("#adduserplayback_allselect").click(function(){
		var bSelectAll = $("#adduserplayback_allselect").is(':checked');
		for(var i = 0; i < 25;i++)
		{
			if( !($(".adduser_playbackbit").eq(i).prop('disabled')))
			{
				$(".adduser_playbackbit").eq(i).prop('checked',bSelectAll);
			}
		}
	});

	$("#adduserliveview_allselect").click(function(){
		var bSelectAll = $("#adduserliveview_allselect").is(':checked');
		for(var i = 0; i < 25;i++)
		{
			if( !($(".adduser_liveviewbit").eq(i).prop('disabled')))
			{
				$(".adduser_liveviewbit").eq(i).prop('checked',bSelectAll);
			}
		}
	});

	$('.adduser_systembit').click(function(){
		SetSysConfigAllCheckStatus();
	});

	$('.adduser_playbackbit').click(function(){
		SetPlaybackAllCheckStatus();
	});

	$('.adduser_liveviewbit').click(function(){
		SetLiveviewAllCheckStatus();
	});
})

function SetSysConfigAllCheckStatus()
{
	$('#addusersystem_allselect').prop('checked',GetSysConfigAllSelectStatus());
}

function SetPlaybackAllCheckStatus()
{
	$('#adduserplayback_allselect').prop('checked',GetPlaybackAllSelectStatus());
}

function SetLiveviewAllCheckStatus()
{
	$('#adduserliveview_allselect').prop('checked',GetLiveviewAllSelectStatus());
}

function ShowSysConfigDatabit(nSysConfigDatabit)
{
	for(var i = 0;i < 12;i++)
	{
		$(".adduser_systembit").eq(i).removeAttr('disabled');
		if(nSysConfigDatabit & 1)
		{
			$(".adduser_systembit").eq(i).removeAttr('disabled');
			$(".adduser_systembit").eq(i).prop('checked',true);
		}else
		{
			$(".adduser_systembit").eq(i).attr('disabled','disabled');
			$(".adduser_systembit").eq(i).prop('checked',false);
		}
		nSysConfigDatabit = nSysConfigDatabit >> 1;
	}
}

function ShowPlaybackDatabit(nPlaybackDatabit)
{
	for(var i = 0;i < 25;i++)
	{
		$(".adduser_playbackbit").eq(i).attr('disabled','disabled');
		if(nPlaybackDatabit & 1)
		{
			$(".adduser_playbackbit").eq(i).removeAttr('disabled');
			$(".adduser_playbackbit").eq(i).prop('checked',true);
		}else
		{
			$(".adduser_playbackbit").eq(i).attr('disabled','disabled');
			$(".adduser_playbackbit").eq(i).prop('checked',false);
		}
		nPlaybackDatabit = nPlaybackDatabit >> 1;
	}
}

function ShowLiveviewDatabit(nLiveviewDatabit)
{
	for(var i = 0;i < 25;i++)
	{
		$(".adduser_liveviewbit").eq(i).attr('disabled','disabled');
		if(nLiveviewDatabit & 1)
		{
			$(".adduser_liveviewbit").eq(i).removeAttr('disabled');
			$(".adduser_liveviewbit").eq(i).prop('checked',true);
		}else
		{
			$(".adduser_liveviewbit").eq(i).attr('disabled','disabled');
			$(".adduser_liveviewbit").eq(i).prop('checked',false);
		}
		nLiveviewDatabit = nLiveviewDatabit >> 1;
	}
}

function GetSysConfigAllSelectStatus()
{
	for(var i = 0; i < 12;i++)
	{
		if(!($(".adduser_systembit").eq(i).is(':checked')))
		{
			return false;
		}
	}
	return true;
}

function GetPlaybackAllSelectStatus()
{
	for(var i = 0; i < 25;i++)
	{
		if(!($(".adduser_playbackbit").eq(i).is(':checked')))
		{
			return false;
		}
	}
	return true;
}

function GetLiveviewAllSelectStatus()
{
	for(var i = 0; i < 25;i++)
	{
		if(!($(".adduser_liveviewbit").eq(i).is(':checked')))
		{
			return false;
		}
	}
	return true;
}

function InitGroupComboData()
{
	var belongGroup = document.getElementById("addbelonggroup");
	var newGroup = "";
	for(var i = 0; i < arrayGroup.length;i++)
	{
		newGroup += '<option>'+arrayGroup[i].group_name+'</option>';
	}
	belongGroup.innerHTML = newGroup;
	$('#addbelonggroup').get(0).selectedIndex = 0;

	var lSysConfigDatabit = arrayGroup[0].system_set_data_bit;
	var lPlaybackDatabit = arrayGroup[0].playback_data_bit;
	var lLiveviewDatabit = arrayGroup[0].live_preview_data_bit;

	ShowSysConfigDatabit(lSysConfigDatabit);
	$('#addusersystem_allselect').prop('checked',GetSysConfigAllSelectStatus());

	ShowPlaybackDatabit(lPlaybackDatabit);
	$('#adduserplayback_allselect').prop('checked',GetPlaybackAllSelectStatus());

	ShowLiveviewDatabit(lLiveviewDatabit);
	$('#adduserliveview_allselect').prop('checked',GetLiveviewAllSelectStatus());


}

function GetNum(index)
{
	var result = 1;
	for(var i = 1;i <= index;i++)
	{
		result *= 2;
	}
	return result;
}

function GetSysConfigDatabit()
{
	var nRight = 0;
	if($('#addusersystem_allselect').is(':checked'))
	{
		nRight = arrayGroup[$('#addbelonggroup').prop('selectedIndex')].system_set_data_bit;
		return nRight;
	}
	for(var i = 0; i < 12;i++)
	{
		if($('#adduser_systembit').eq(i).is(':checked'))
		{
			nRight += GetNum(i);
		}
	}
	return nRight;
}

function GetPlaybackDatabit()
{
	var nRight = 0;
	if($('#adduserplayback_allselect').is(':checked'))
	{
		nRight = arrayGroup[$('#addbelonggroup').prop('selectedIndex')].system_set_data_bit;
		return nRight;
	}
	for(var i = 0; i < 25;i++)
	{
		if($('#adduser_playbackbit').eq(i).is(':checked'))
		{
			nRight += GetNum(i);
		}
	}
	return nRight;
}

function GetLiveviewDatabit()
{
	var nRight = 0;
	if($('#adduserliveview_allselect').is(':checked'))
	{
		nRight = arrayGroup[$('#addbelonggroup').prop('selectedIndex')].system_set_data_bit;
		return nRight;
	}
	for(var i = 0; i < 25;i++)
	{
		if($('#adduser_liveviewbit').eq(i).is(':checked'))
		{
			nRight += GetNum(i);
		}
	}
	return nRight;
}


function SaveData()
{
	if(arrayUser.length >= 256)
	{
		alert('most add 256 user');
		return;
	}
	var m_sUsername = $('#adduser').val();
	if(m_sUsername == '')
	{
		alert('please enter username');
		return;
	}
	if(m_sUsername == 'admin')
	{
		alert('add username are not be admin');
		return;
	}
	if(m_sUsername == 'root')
	{
		alert('add username are not be root');
		return;
	}
	for(var i = 0 ; i < arrayUser.length;i++)
	{
		if(m_sUsername == arrayUser[i].user_name)
		{
			alert('user name has exist');
			return;
		}
	}
	if($('#addpasswd').val() == '' || $('#addmodifyconfirmpasswd').val() == '')
	{
		alert('please enter password');
		return;
	}
	if($('#addpasswd').val() !=  $('#addmodifyconfirmpasswd').val())
	{
		alert('password are not match');
		return;
	}
	var lSysConfig = GetSysConfigDatabit();
	var lPlaybackDatabit = GetPlaybackDatabit();
	var lLiveviewDatabit = GetLiveviewDatabit();

	var sBelongGroup = $('#addbelonggroup').val();
	var sGroupRemarks = arrayGroup[$('#addbelonggroup').prop('selectedIndex')].group_remarks;

	var strURL = '../vb.htm?'+'addusername='+m_sUsername+'&addpassword='+$('#addpasswd').val()+'&adduserremarks='+$('#addremarks').val()+'\
&addusystemsetdatabit='+lSysConfig+'\
&adduplaybackdatabit='+lPlaybackDatabit+'\
&addulivepreviewdatabit='+lLiveviewDatabit+'\
&addbelongtogroup='+sBelongGroup+'&addusergroupremarks='+sGroupRemarks;

	save_val(strURL,2,0);
}