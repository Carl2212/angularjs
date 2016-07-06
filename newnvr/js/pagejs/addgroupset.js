
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

	$("#addreoup_return").click(function(){
		window.history.back(0);
	});

	$("#addgroup_save").click(function(){
		SaveData();
	});

	$("#addgroupsystem_allselect").click(function(){
		var bSelectAll = $("#addgroupsystem_allselect").is(':checked');
		for(var i = 0; i < 12;i++)
		{
			if( !($(".addgroup_systembit").eq(i).prop('disabled')))
			{
				$(".addgroup_systembit").eq(i).prop('checked',bSelectAll);
			}
		}
	});

	$("#addgroupplayback_allselect").click(function(){
		var bSelectAll = $("#addgroupplayback_allselect").is(':checked');
		for(var i = 0; i < 25;i++)
		{
			if( !($(".addgroup_playbackbit").eq(i).prop('disabled')))
			{
				$(".addgroup_playbackbit").eq(i).prop('checked',bSelectAll);
			}
		}
	});

	$("#addgroupliveview_allselect").click(function(){
		var bSelectAll = $("#addgroupliveview_allselect").is(':checked');
		for(var i = 0; i < 25;i++)
		{
			if( !($(".addgroup_liveviewbit").eq(i).prop('disabled')))
			{
				$(".addgroup_liveviewbit").eq(i).prop('checked',bSelectAll);
			}
		}
	});

	$('.addgroup_systembit').click(function(){
		SetSysConfigAllCheckStatus();
	});

	$('.addgroup_playbackbit').click(function(){
		SetPlaybackAllCheckStatus();
	});

	$('.addgroup_liveviewbit').click(function(){
		SetLiveviewAllCheckStatus();
	});

})

function SetSysConfigAllCheckStatus()
{
	$('#addgroupsystem_allselect').prop('checked',GetSysConfigAllSelectStatus());
}

function SetPlaybackAllCheckStatus()
{
	$('#addgroupplayback_allselect').prop('checked',GetPlaybackAllSelectStatus());
}

function SetLiveviewAllCheckStatus() {
	$('#addgroupliveview_allselect').prop('checked', GetLiveviewAllSelectStatus());
}

function GetSysConfigAllSelectStatus()
{
	for(var i = 0; i < 12;i++)
	{
		if(!($(".addgroup_systembit").eq(i).is(':checked')))
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
		if(!($(".addgroup_playbackbit").eq(i).is(':checked')))
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
		if(!($(".addgroup_liveviewbit").eq(i).is(':checked')))
		{
			return false;
		}
	}
	return true;
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

	for(var i = 0; i < 12;i++)
	{
		if($('.addgroup_systembit').eq(i).is(':checked'))
		{
			nRight += GetNum(i);
		}
	}
	return nRight;
}

function GetPlaybackDatabit()
{
	var nRight = 0;

	for(var i = 0; i < 25;i++)
	{
		if($('.addgroup_playbackbit').eq(i).is(':checked'))
		{
			nRight += GetNum(i);
		}
	}
	return nRight;
}

function GetLiveviewDatabit()
{
	var nRight = 0;
	for(var i = 0; i < 25;i++)
	{
		if($('.addgroup_liveviewbit').eq(i).is(':checked'))
		{
			nRight += GetNum(i);
		}
	}
	return nRight;
}

function SaveData() {
	if (arrayGroup.length >= 20) {
		alert('most add 20 group');
		return;
	}
	if ($('#addgroupname').val() == 'admin')
	{
		alert('group name are not be admin');
		return;
	}
	for(var i = 0; i < arrayGroup.length;i++)
	{
		if($('#addgroupname').val() == arrayGroup[i].group_name)
		{
			alert('group name has exist');
			return;
		}
	}
	var lSysConfig = GetSysConfigDatabit();
	var lPlaybackDatabit = GetPlaybackDatabit();
	var lLiveviewDatabit = GetLiveviewDatabit();

	var strURL = '../vb.htm?'+'addgroupname='+$('#addgroupname').val()+'&addgroupremarks='+$('#addgroupremark').val()+'\
&addgsystemsetdatabit='+lSysConfig+'\
&addgplaybackdatabit='+lPlaybackDatabit+'\
&addglivepreviewdatabit='+lLiveviewDatabit;

	save_val(strURL,0,0);

}