
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
if($.cookies.get('selectUserIndex')) {
    selectUserIndex = $.cookies.get('selectUserIndex');
}

var m_sOldPWD = "";
var m_sOldUserName = "";
document.write("<script src='../lang/"+langJs+".js'><\/script>");

$(document).ready(function(){

    ShowUserData(selectUserIndex);

    $("#return").click(function(){
        window.history.back(-1);
    });

    $("#modify_save").click(function(){
       SaveData();
    });

    $("#exist_username").change(function(){
        var index = $('#exist_username').prop('selectedIndex');
        ShowUserData(index);
    });

    $("#modifybelongtogroup").change(function(){
        var index = $('#modifybelongtogroup').prop('selectedIndex');
        var lSysConfigDatabit = arrayGroup[index].system_set_data_bit;
        var lPlaybackDatabit = arrayGroup[index].playback_data_bit;
        var lLiveviewDatabit = arrayGroup[index].live_preview_data_bit;

        var userIndex = $('#exist_username').prop('selectedIndex');
        var lUserSysConfigDatabit = arrayUser[userIndex].system_set_data_bit;
        var lUserPlaybackDatabit = arrayUser[userIndex].playback_data_bit;
        var lUserLiveviewDatabit = arrayUser[userIndex].live_preview_data_bit;

        ShowSysConfigDatabit(lSysConfigDatabit,lUserSysConfigDatabit);
        $('#usersystem_allselect').prop('checked',GetSysConfigAllSelectStatus());

        ShowPlaybackDatabit(lPlaybackDatabit,lUserPlaybackDatabit);
        $('#userplayback_allselect').prop('checked',GetPlaybackAllSelectStatus());

        ShowLiveviewDatabit(lLiveviewDatabit,lUserLiveviewDatabit);
        $('#userliveview_allselect').prop('checked',GetLiveviewAllSelectStatus());

    });

    $("#modifypasswd").click(function(){
        var bSelectAll = $("#modifypasswd").is(':checked');
        if(bSelectAll)
        {
            $('#modifyoldpasswd').removeAttr('disabled');
            $('#modifynewpasswd').removeAttr('disabled');
            $('#modifyconfirmpasswd').removeAttr('disabled');
        }else
        {
            $('#modifyoldpasswd').attr('disabled','disabled');
            $('#modifynewpasswd').attr('disabled','disabled');
            $('#modifyconfirmpasswd').attr('disabled','disabled');
        }
    });

    $("#usersystem_allselect").click(function(){
        var bSelectAll = $("#usersystem_allselect").is(':checked');
        for(var i = 0; i < 12;i++)
        {
            if( !($(".user_systembit").eq(i).prop('disabled')))
            {
                $(".user_systembit").eq(i).prop('checked',bSelectAll);
            }
        }
    });

    $("#userplayback_allselect").click(function(){
        var bSelectAll = $("#userplayback_allselect").is(':checked');
        for(var i = 0; i < 25;i++)
        {
            if( !($(".user_playbackbit").eq(i).prop('disabled')))
            {
                $(".user_playbackbit").eq(i).prop('checked',bSelectAll);
            }
        }
    });

    $("#userliveview_allselect").click(function(){
        var bSelectAll = $("#userliveview_allselect").is(':checked');
        for(var i = 0; i < 25;i++)
        {
            if( !($(".user_liveviewbit").eq(i).prop('disabled')))
            {
                $(".user_liveviewbit").eq(i).prop('checked',bSelectAll);
            }
        }
    });

    $('.user_systembit').click(function(){
        SetSysConfigAllCheckStatus();
    });

    $('.user_playbackbit').click(function(){
        SetPlaybackAllCheckStatus();
    });

    $('.user_liveviewbit').click(function(){
        SetLiveviewAllCheckStatus();
    });
})

function SetSysConfigAllCheckStatus()
{
    $('#usersystem_allselect').prop('checked',GetSysConfigAllSelectStatus());
}

function SetPlaybackAllCheckStatus()
{
    $('#userplayback_allselect').prop('checked',GetPlaybackAllSelectStatus());
}

function SetLiveviewAllCheckStatus()
{
    $('#userliveview_allselect').prop('checked',GetLiveviewAllSelectStatus());
}

function ShowAdminAuthoControl(bHide)
{
    if(!bHide)
    {
        $('#modifyusername').attr('disabled','disabled');
        $('#modifybelongtogroup').attr('disabled','disabled');
        $('#modifyuserremarks').attr('disabled','disabled');
        $('#modifysystem').attr('disabled','disabled');
        $('#modifyplayback').attr('disabled','disabled');
        $('#modifyliveview').attr('disabled','disabled');
        $('#usersystem_allselect').attr('disabled','disabled');
        $('#userplayback_allselect').attr('disabled','disabled');
        $('#userliveview_allselect').attr('disabled','disabled');

        for(var i = 0; i < 12;i++)
        {
            $(".user_systembit").eq(i).attr('disabled','disabled');
        }

        for(var i = 0; i < 25;i++)
        {
            $(".user_playbackbit").eq(i).attr('disabled','disabled');
        }

        for(var i = 0; i < 25;i++)
        {
            $(".user_liveviewbit").eq(i).attr('disabled','disabled');
        }
    }else
    {
        $('#modifyusername').removeAttr('disabled');
        $('#modifybelongtogroup').removeAttr('disabled');
        $('#modifyuserremarks').removeAttr('disabled');
        $('#modifysystem').removeAttr('disabled');
        $('#modifyplayback').removeAttr('disabled');
        $('#modifyliveview').removeAttr('disabled');
        $('#usersystem_allselect').removeAttr('disabled');
        $('#userplayback_allselect').removeAttr('disabled');
        $('#userliveview_allselect').removeAttr('disabled');

        for(var i = 0; i < 12;i++)
        {
            $(".user_systembit").eq(i).removeAttr('disabled');
        }

        for(var i = 0; i < 25;i++)
        {
            $(".user_playbackbit").eq(i).removeAttr('disabled');
        }

        for(var i = 0; i < 25;i++)
        {
            $(".user_liveviewbit").eq(i).removeAttr('disabled');
        }
    }

}

function ShowSysConfigDatabit(nSysConfigDatabit,nUserSysConfigDatabit)
{
    var newAutho = nSysConfigDatabit & nUserSysConfigDatabit;
    for(var i = 0;i < 12;i++)
    {
        $(".user_systembit").eq(i).removeAttr('disabled');
        if(nSysConfigDatabit & 1)
        {
            $(".user_systembit").eq(i).removeAttr('disabled');
        }else
        {
            $(".user_systembit").eq(i).attr('disabled','disabled');
        }
        nSysConfigDatabit = nSysConfigDatabit >> 1;
    }

    for(var i = 0;i < 12;i++)
    {
        if(newAutho & 1)
        {
            $(".user_systembit").eq(i).prop('checked',true);
        }else
        {
            $(".user_systembit").eq(i).prop('checked',false);
        }
        newAutho = newAutho >> 1;
    }
}

function ShowPlaybackDatabit(nPlaybackDatabit,nUserPlaybackDatabit)
{
    var newAutho = nPlaybackDatabit & nUserPlaybackDatabit;
    for(var i = 0;i < 25;i++)
    {
        $(".user_playbackbit").eq(i).attr('disabled','disabled');
        if(nPlaybackDatabit & 1)
        {
            $(".user_playbackbit").eq(i).removeAttr('disabled');
        }else
        {
            $(".user_playbackbit").eq(i).attr('disabled','disabled');
        }
        nPlaybackDatabit = nPlaybackDatabit >> 1;
    }

    for(var i = 0;i < 25;i++)
    {
        if(newAutho & 1)
        {
            $(".user_playbackbit").eq(i).prop('checked',true);
        }else
        {
            $(".user_playbackbit").eq(i).prop('checked',false);
        }
        newAutho = newAutho >> 1;
    }
}

function ShowLiveviewDatabit(nLiveviewDatabit,nUserLiveviewDatabit)
{
    var newAutho = nLiveviewDatabit & nUserLiveviewDatabit;
    for(var i = 0;i < 25;i++)
    {
        $(".user_liveviewbit").eq(i).attr('disabled','disabled');
        if(nLiveviewDatabit & 1)
        {
            $(".user_liveviewbit").eq(i).removeAttr('disabled');
        }else
        {
            $(".user_liveviewbit").eq(i).attr('disabled','disabled');
        }
        nLiveviewDatabit = nLiveviewDatabit >> 1;
    }

    for(var i = 0;i < 25;i++)
    {
        if(newAutho & 1)
        {
            $(".user_liveviewbit").eq(i).prop('checked',true);
        }else
        {
            $(".user_liveviewbit").eq(i).prop('checked',false);
        }
        newAutho = newAutho >> 1;
    }
}

function GetSysConfigAllSelectStatus()
{
    for(var i = 0; i < 12;i++)
    {
        if(!($(".user_systembit").eq(i).is(':checked'))
        && $(".user_systembit").eq(i).prop('disabled'))
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
        if(!($(".user_playbackbit").eq(i).is(':checked'))
            && $(".user_playbackbit").eq(i).prop('disabled'))
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
        if(!($(".user_liveviewbit").eq(i).is(':checked'))
            && $(".user_liveviewbit").eq(i).prop('disabled'))
        {
            return false;
        }
    }
    return true;
}

function ShowUserData(nIndex)
{
    var existUser = document.getElementById("exist_username");
    var newUser = "";
    for(var i = 0; i < arrayUser.length;i++)
    {
        newUser += '<option>'+arrayUser[i].user_name+'</option>';
    }
    existUser.innerHTML = newUser;
    $('#exist_username').get(0).selectedIndex = nIndex;
   // existUser.options[nIndex].selected = true;

    var belongGroup = document.getElementById("modifybelongtogroup");
    var newGroup = "";
    var nBelongGroupIndex = 0;
    for(var i = 0; i < arrayGroup.length;i++)
    {
        newGroup += '<option>'+arrayGroup[i].group_name+'</option>';
    }
    belongGroup.innerHTML = newGroup;
    for(var i = 0; i < belongGroup.length;i++)
    {
        if(belongGroup[i].innerText == arrayUser[nIndex].belong_to_group)
        {
            nBelongGroupIndex = i;
            break;
           // belongGroup.options[nIndex].selected = true;
        }
    }
    $('#modifybelongtogroup').get(0).selectedIndex = nBelongGroupIndex;
    m_sOldPWD = arrayUser[nIndex].password;
    var m_sUsername = document.getElementById("modifyusername");
    m_sUsername.value = arrayUser[nIndex].user_name;
    m_sOldUserName = arrayUser[nIndex].user_name;
    var m_sRemark = document.getElementById("modifyuserremarks");
    m_sRemark.value = arrayUser[nIndex].user_remarks;

    $('#modifypasswd').prop('checked',false);
    $('#modifyoldpasswd').attr('disabled','disabled');
    $('#modifynewpasswd').attr('disabled','disabled');
    $('#modifyconfirmpasswd').attr('disabled','disabled');

    if(m_sUsername.value == 'admin' || m_sUsername.value == loginUser)
    {
        $('#usersystem_allselect').prop('checked',true);
        for(var i = 0;i < 12;i++)
        {
            $(".user_systembit").eq(i).prop('checked',true);
        }
        ShowAdminAuthoControl(false);
    }else
    {
        ShowAdminAuthoControl(true);

        var lSysConfigDatabit = arrayGroup[nBelongGroupIndex].system_set_data_bit;
        var lPlaybackDatabit = arrayGroup[nBelongGroupIndex].playback_data_bit;
        var lLiveviewDatabit = arrayGroup[nBelongGroupIndex].live_preview_data_bit;

        var lUserSysConfigDatabit = arrayUser[nIndex].system_set_data_bit;
        var lUserPlaybackDatabit = arrayUser[nIndex].playback_data_bit;
        var lUserLiveviewDatabit = arrayUser[nIndex].live_preview_data_bit;

        ShowSysConfigDatabit(lSysConfigDatabit,lUserSysConfigDatabit);
        $('#usersystem_allselect').prop('checked',GetSysConfigAllSelectStatus());

        ShowPlaybackDatabit(lPlaybackDatabit,lUserPlaybackDatabit);
        $('#userplayback_allselect').prop('checked',GetPlaybackAllSelectStatus());

        ShowLiveviewDatabit(lLiveviewDatabit,lUserLiveviewDatabit);
        $('#userliveview_allselect').prop('checked',GetLiveviewAllSelectStatus());
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
        if($('.user_systembit').eq(i).is(':checked'))
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
        if($('.user_playbackbit').eq(i).is(':checked'))
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
        if($('.user_liveviewbit').eq(i).is(':checked'))
        {
            nRight += GetNum(i);
        }
    }
    return nRight;
}

function SaveData()
{
    var sPassword = 0;
    if($('#modifypasswd').is(':checked'))
    {
        if($('#modifyoldpasswd').val() != m_sOldPWD)
        {
            alert('error password');
            return;
        }
        if($('#modifynewpasswd').val() == '' || $('#modifyconfirmpasswd').val() == '')
        {
            alert('please enter password');
            return;
        }
        if($('#modifynewpasswd').val() != $('#modifyconfirmpasswd').val())
        {
            alert('password are not match');
            return;
        }
        sPassword = $('#modifynewpasswd').val();
    }else
    {
        sPassword = m_sOldPWD;
    }

    var m_sUsername = $('#modifyusername').val();
    if(m_sUsername == 'root')
    {
        alert('user name are not be root');
        return;
    }
    if(m_sUsername != m_sOldUserName)
    {
        for(var i = 0; i < arrayUser.length;i++)
        {
            if(m_sUsername == arrayUser[i].user_name)
            {
                alert('user has exist');
                return;
            }
        }
    }

    var lSysConfig = GetSysConfigDatabit();
    var lPlaybackDatabit = GetPlaybackDatabit();
    var lLiveviewDatabit = GetLiveviewDatabit();

    var sUserId = arrayUser[$('#exist_username').prop('selectedIndex')].user_id;
    var sGroupName = $('#modifybelongtogroup').val();
    var sGroupRemarks = arrayUser[$('#exist_username').prop('selectedIndex')].group_remarks;
    var strURL = '';
    if(m_sUsername == 'admin' || m_sUsername == loginUser)
    {
       strURL = '../vb.htm?'+'modifyuserid='+sUserId+'&modifyusername='+m_sUsername+'&modifypassword='+sPassword+'\
&modifyuserremarks='+$('#modifyuserremarks').val()+'&modifyusystemsetdatabit='+arrayUser[$('#exist_username').prop('selectedIndex')].system_set_data_bit+'\
&modifyuplaybackdatabit='+arrayUser[$('#exist_username').prop('selectedIndex')].playback_data_bit+'\
&modifyulivepreviewdata_bit='+arrayUser[$('#exist_username').prop('selectedIndex')].live_preview_data_bit+'\
&modifyubelongtogroup='+sGroupName+'&modifyugroupremarks='+sGroupRemarks;

        save_val(strURL,3,1);
    }else
    {
        strURL = '../vb.htm?'+'modifyuserid='+sUserId+'&modifyusername='+m_sUsername+'&modifypassword='+sPassword+'\
&modifyuserremarks='+$('#modifyuserremarks').val()+'&modifyusystemsetdatabit='+lSysConfig+'\
&modifyuplaybackdatabit='+lPlaybackDatabit+'\
&modifyulivepreviewdata_bit='+lLiveviewDatabit+'\
&modifyubelongtogroup='+sGroupName+'&modifyugroupremarks='+sGroupRemarks;

        save_val(strURL,3,0);
    }



}