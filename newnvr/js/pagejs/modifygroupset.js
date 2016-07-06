
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
if($.cookies.get('arrayUser')) {
    arrayUser = $.cookies.get('arrayUser');
}
if($.cookies.get('arrayGroup')) {
    arrayGroup = $.cookies.get('arrayGroup');
}
if($.cookies.get('selectGroupIndex')) {
    selectGroupIndex = $.cookies.get('selectGroupIndex');
}
var m_sOldGroupName='';
var m_lSysConfigDatabit = 0;
var m_lPlaybackDatabit = 0;
var m_lLiveviewDatabit = 0;

document.write("<script src='../lang/"+langJs+".js'><\/script>");

$(document).ready(function(){

    ShowGroupData(selectGroupIndex);

    $("#modifygroup_return").click(function(){
        window.history.back(0);
    });

    $("#modifygroup_save").click(function(){
        SaveData();
    });

    $("#exist_group").change(function(){
        var index = $('#exist_group').prop('selectedIndex');
        ShowGroupData(index);
    });

    $("#groupsystem_allselect").click(function(){
        var bSelectAll = $("#groupsystem_allselect").is(':checked');
        for(var i = 0; i < 12;i++)
        {
            if( !($(".group_systembit").eq(i).prop('disabled')))
            {
                $(".group_systembit").eq(i).prop('checked',bSelectAll);
            }
        }
    });

    $("#groupplayback_allselect").click(function(){
        var bSelectAll = $("#groupplayback_allselect").is(':checked');
        for(var i = 0; i < 25;i++)
        {
            if( !($(".group_playbackbit").eq(i).prop('disabled')))
            {
                $(".group_playbackbit").eq(i).prop('checked',bSelectAll);
            }
        }
    });

    $("#groupliveview_allselect").click(function(){
        var bSelectAll = $("#groupliveview_allselect").is(':checked');
        for(var i = 0; i < 25;i++)
        {
            if( !($(".group_liveviewbit").eq(i).prop('disabled')))
            {
                $(".group_liveviewbit").eq(i).prop('checked',bSelectAll);
            }
        }
    });

    $('.group_systembit').click(function(){
        SetSysConfigAllCheckStatus();
    });

    $('.group_playbackbit').click(function(){
        SetPlaybackAllCheckStatus();
    });

    $('.group_liveviewbit').click(function(){
        SetLiveviewAllCheckStatus();
    });

})

function SetSysConfigAllCheckStatus()
{
    $('#groupsystem_allselect').prop('checked',GetSysConfigAllSelectStatus());
}

function SetPlaybackAllCheckStatus()
{
    $('#groupplayback_allselect').prop('checked',GetPlaybackAllSelectStatus());
}

function SetLiveviewAllCheckStatus()
{
    $('#groupliveview_allselect').prop('checked',GetLiveviewAllSelectStatus());
}

function GetSysConfigAllSelectStatus()
{
    for(var i = 0; i < 12;i++)
    {
        if(!($(".group_systembit").eq(i).is(':checked')))
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
        if(!($(".group_playbackbit").eq(i).is(':checked')))
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
        if(!($(".group_liveviewbit").eq(i).is(':checked')))
        {
            return false;
        }
    }
    return true;
}

function ShowAdminAuthoControl(bHide)
{
    if(!bHide)
    {
        $('#modifygroupname').attr('disabled','disabled');
        $('#modifygroupsystem').attr('disabled','disabled');
        $('#modifygroupplayback').attr('disabled','disabled');
        $('#modifygroupliveview').attr('disabled','disabled');
        $('#groupsystem_allselect').attr('disabled','disabled');
        $('#groupplayback_allselect').attr('disabled','disabled');
        $('#groupliveview_allselect').attr('disabled','disabled');

        for(var i = 0; i < 12;i++)
        {
            $(".group_systembit").eq(i).attr('disabled','disabled');
        }

        for(var i = 0; i < 25;i++)
        {
            $(".group_playbackbit").eq(i).attr('disabled','disabled');
        }

        for(var i = 0; i < 25;i++)
        {
            $(".group_liveviewbit").eq(i).attr('disabled','disabled');
        }
    }else
    {
        $('#modifygroupname').removeAttr('disabled');
        $('#modifygroupsystem').removeAttr('disabled');
        $('#modifygroupplayback').removeAttr('disabled');
        $('#modifygroupliveview').removeAttr('disabled');
        $('#groupsystem_allselect').removeAttr('disabled');
        $('#groupplayback_allselect').removeAttr('disabled');
        $('#groupliveview_allselect').removeAttr('disabled');

        for(var i = 0; i < 12;i++)
        {
            $(".group_systembit").eq(i).removeAttr('disabled');
        }

        for(var i = 0; i < 25;i++)
        {
            $(".group_playbackbit").eq(i).removeAttr('disabled');
        }

        for(var i = 0; i < 25;i++)
        {
            $(".group_liveviewbit").eq(i).removeAttr('disabled');
        }
    }

}

function ShowSysConfigDatabit(nSynConfigDatabit)
{
    for(var i = 0;i < 12;i++)
    {
        if(nSynConfigDatabit & 1)
        {
            $(".group_systembit").eq(i).prop('checked',true);
        }else
        {
            $(".group_systembit").eq(i).prop('checked',false);
        }
        nSynConfigDatabit = nSynConfigDatabit >> 1;
    }
}

function ShowPlaybackDatabit(nPlaybackDatabit)
{
    for(var i = 0;i < 25;i++)
    {
        if(nPlaybackDatabit & 1)
        {
            $(".group_playbackbit").eq(i).prop('checked',true);
        }else
        {
            $(".group_playbackbit").eq(i).prop('checked',false);
        }
        nPlaybackDatabit = nPlaybackDatabit >> 1;
    }
}

function ShowLiveviewDatabit(nLiveviewDatabit)
{
    for(var i = 0;i < 25;i++)
    {
        if(nLiveviewDatabit & 1)
        {
            $(".group_liveviewbit").eq(i).prop('checked',true);
        }else
        {
            $(".group_liveviewbit").eq(i).prop('checked',false);
        }
        nLiveviewDatabit = nLiveviewDatabit >> 1;
    }
}

function GetSysConfigAllSelectStatus()
{
    for(var i = 0; i < 12;i++)
    {
        if(!($(".group_systembit").eq(i).is(':checked')))
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
        if(!($(".group_playbackbit").eq(i).is(':checked')))
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
        if(!($(".group_liveviewbit").eq(i).is(':checked')))
        {
            return false;
        }
    }
    return true;
}

function ShowGroupData(nIndex)
{
    var existGroup = document.getElementById("exist_group");
    var newGroup = "";
    for(var i = 0; i < arrayGroup.length;i++)
    {
        newGroup += '<option>'+arrayGroup[i].group_name+'</option>';
    }
    existGroup.innerHTML = newGroup;
    $('#exist_group').get(0).selectedIndex = nIndex;
    var m_sGroupname = document.getElementById("modifygroupname");
    m_sGroupname.value = arrayGroup[nIndex].group_name;
    m_sOldGroupName = arrayGroup[nIndex].group_name;

    var m_sGroupremarks = document.getElementById("modifygroupremarks");
    m_sGroupremarks.value = arrayGroup[nIndex].group_remarks;

    if(m_sGroupname.value == 'admin')
    {
        ShowAdminAuthoControl(false);
    }else
    {
        ShowAdminAuthoControl(true);

        m_lSysConfigDatabit = arrayGroup[nIndex].system_set_data_bit;
        m_lPlaybackDatabit = arrayGroup[nIndex].playback_data_bit;
        m_lLiveviewDatabit = arrayGroup[nIndex].live_preview_data_bit;

        ShowSysConfigDatabit(m_lSysConfigDatabit);
        $('#groupsystem_allselect').prop('checked',GetSysConfigAllSelectStatus());

        ShowPlaybackDatabit(m_lPlaybackDatabit);
        $('#groupplayback_allselect').prop('checked',GetPlaybackAllSelectStatus());

        ShowLiveviewDatabit(m_lLiveviewDatabit);
        $('#groupliveview_allselect').prop('checked',GetLiveviewAllSelectStatus());

    }

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
        if($('.group_systembit').eq(i).is(':checked'))
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
        if($('.group_playbackbit').eq(i).is(':checked'))
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
        if($('.group_liveviewbit').eq(i).is(':checked'))
        {
            nRight += GetNum(i);
        }
    }
    return nRight;
}

function SaveData()
{
    var m_sGroupName = $('#modifygroupname').val();
    if(m_sOldGroupName != m_sGroupName)
    {
        for(var i = 0; i < arrayGroup.length;i++)
        {
            if(m_sGroupName == arrayGroup[i].group_name)
            {
                alert('group name has exist');
                return;
            }
        }
    }
    var bGroupHasUser = false;
    var sLoginUserBelongGroup = '';
    for(var i = 0; i < arrayUser.length;i++)
    {
        if(loginUser == arrayUser[i].user_name)
        {
            sLoginUserBelongGroup = arrayUser[i].belong_to_group;
        }
        if(arrayUser[i].belong_to_group == m_sOldGroupName)
        {
            bGroupHasUser = true;
        }
    }

    var lSysConfig = GetSysConfigDatabit();
    var lPlaybackDatabit = GetPlaybackDatabit();
    var lLiveviewDatabit = GetLiveviewDatabit();

    if(m_sGroupName == sLoginUserBelongGroup || bGroupHasUser)
    {
        if(lSysConfig < m_lSysConfigDatabit || lPlaybackDatabit < m_lPlaybackDatabit || lLiveviewDatabit < m_lLiveviewDatabit)
        {
            alert('Currently logged in user belongs group not reduce group permissions');
            return;
        }
    }
    var groupid = arrayGroup[$('#exist_group').prop('selectedIndex')].group_id;

    var strURL = '../vb.htm?'+'modifygroupid='+groupid+'&modifygroupname='+m_sGroupName+'\
&modifygroupremarks='+$('#modifygroupremarks').val()+'&modifygsystemsetdatabit='+lSysConfig+'\
&modifygplaybackdatabit='+lPlaybackDatabit+'\
&modifyglivepreviewdatabit='+lLiveviewDatabit;

    save_val(strURL,2,0);
}