//SYS_UPDATE = (function(){
//    return {
//
//        d:{},
//
//        ToString:function(type){
//
//            if(type==0)
//            {
//                SYS_UPDATE.d={};
//                return SYS_UPDATE.d;
//            }
//            else
//            {
//
//                return SYS_UPDATE.d;
//            }
//        },
//
//        TranslatePage:function()
//        {
//            //var vec = document.getElementsByTagName('label');
//            //vec[0].innerHTML = v_update_0;
//            //vec[1].innerHTML = v_update_2;
//            //vec[2].innerHTML = v_update_14;
//            //vec[3].innerHTML = v_update_12;
//            //vec[5].innerHTML = v_update_15;
//            //vec[7].innerHTML = v_update_13;
//            //vec[8].innerHTML = v_update_9;
//            //
//            //$_id('sys_upate').value = v_update_6;
//        },
//
//        formDeviceCfg:function(mtype)
//        {
//
//            $.ajax({
//                type: "POST",
//                contentType: "application/json",
//                async: false,
//                url: addstr + "//goform//formDeviceCfg",
//                data:JSON.stringify({
//                    type: 0,
//                    ch:1,
//                    param:{
//                        ip:ip,
//                        username:username,
//                        pwd:psw
//                    },
//                    data:SYS_UPDATE.ToString(0)
//                }),
//                dataType: "json",
//                error: function(XMLHttpRequest, textStatus, errorThrown)
//                {
//                    Util.HideWait();
//                    //"timeout", "error", "notmodified"  "parsererror"
//                    // RedirectMsg();
//                },
//                success: function(result)
//                {
//                    Util.HideWait();
//                    SYS_UPDATE.FillData(mtype,result);
//
//                }
//            });
//        },
//
//        //数据处理
//        FillData:function(type,result)
//        {
//
//            var obj=result;
//
//            if(obj.result==-1)
//            {
//            }
//            else
//            {
//                SYS_UPDATE.d = result.data;
//            }
//
//
//
//        },
//
//        CheckSubForm:function()
//        {
//            if(SYS_UPDATE.d.dwHDCount == 0)
//            {
//                alert(v_update_3);
//                return false;
//            }
//            if(document.form1.selfile.value=="")
//            {
//                alert(v_update_7);
//                document.form1.selfile.focus();
//                return false;
//            }
//            FileType=document.form1.selfile.value.substr(document.form1.selfile.value.length-6).toUpperCase();
//            if (FileType!="UPDATE")
//            {
//                alert(v_update_8);
//                document.form1.selfile.select();
//                return false;
//            }
//            else
//            {
//                return true;
//            }
//        },
//        UpdateSubmit:function()
//        {
//            //SYS_UPDATE.formDeviceCfg(0);
//            //if(SYS_UPDATE.d=={})
//            //{
//            //    return;
//            //}
//            var fileSize = SYS_UPDATE.checkFileSize();
//            if(!fileSize)
//            {
//                return;
//            }
//            if((SYS_UPDATE.d.dwHDCount == 0)&&(fileSize>SYS_UPDATE.d.FreeSize))
//            {
//                alert(v_update_10);
//                return;
//            }
//            else
//            {
//                Util.ShowWait();
//                form1.submit();
//            }
//
//
//
//            /*if(SYS_UPDATE.CheckSubForm())
//             {
//             Util.ShowWait();
//             form1.submit();
//             }*/
//        },
//
//
//
//        checkFileSize:function()
//        {
//            //$();
//            alert('baby i love you');
//            var browserCfg = {};//获取浏览器类�?
//           // var tipMsg = v_update_11;
//            var ua = window.navigator.userAgent;
//            if (ua.indexOf("Trident")>=1)
//            {
//                browserCfg.ie = true;
//            }
//            else if(ua.indexOf("Firefox")>=1)
//            {
//                browserCfg.firefox = true;
//            }
//            else if(ua.indexOf("Chrome")>=1)
//            {
//                browserCfg.chrome = true;
//            }
//            else if(ua.indexOf("AppleWebKit")>=1)
//            {
//                browserCfg.safari = true;
//            }
//
//            try{
//                var obj_file = document.getElementById("txtFileName");//判断文件是否为空和类�?
//                //alert(obj_file);
//                if(obj_file.value=="")
//                {
//                    //alert('·��Ϊ��');
//                    alert('void path');
//                    return false;
//                }
//                FileType=obj_file.value.substr(obj_file.value.length-6).toUpperCase();
//                if (FileType!="UPDATE")
//                {
//                    alert(v_update_8);
//                    document.form1.fileuploade.select();
//                    return false;
//                }
//                var filesize = 0;//获取文件大小
//
//                if(browserCfg.firefox || browserCfg.chrome ||browserCfg.safari)
//                {
//                    filesize = obj_file.files[0].size;
//                }
//                else if(browserCfg.ie)
//                {
//                    /*var obj_img = document.getElementById('tempimg');
//                     obj_img.dynsrc="file://"+obj_file.value;
//                     filesize = obj_img.fileSize;*/
//
//                    var fileSystem = new ActiveXObject("Scripting.FileSystemObject");
//
//                    var file = fileSystem.GetFile(obj_file.value);
//                    filesize = file.Size;    // 文件大小，单位：b
//                    // alert(filesize);
//                }
//                else
//                {
//                    alert(tipMsg);
//                    return false;
//                }
//
//                if(filesize==-1)
//                {
//                    alert(tipMsg);
//                    return false;
//                }
//                else
//                {
//                    //alert(filesize);
//                    //alert("文件大小符合要求");
//                    return filesize;
//                }
//            }catch(e){
//                alert(e);
//            }
//        }
//    };
//}());
//
//
//window.onload = function()
//{
//
//    SYS_UPDATE.TranslatePage();
//    $('#upgrade_upgrade').click(function(){
//        alert('hellobaby');
//        SYS_UPDATE.UpdateSubmit();
//    });
//};
function InitConfig(){

     $("#upgrade_upgrade").click(function(){
         //gVar.errTitle = $("#upgrade_set2").text();
        var path = $("#txtFileName").val();
        if(path == "")
        {
            alert('');
            //ShowPaop( $("#upgrade_set2").text(), lg.get("IDS_UPGRADE_EMPTY"));
            return;
        }
         alert(path);
       //var returndata = gDvr.FileUpgrade(path);
       if(returndata*1 == 0)
       {
             MasklayerShow();
              blockTimeID = setTimeout("upgrade_process()",1000);
       }

    });

      $("#upgrade_reboot").click(function(){
         //gVar.errTitle = $("#upgrade_set2").text();
        device_reboot();
    });

     $("#upgrade_shutdown").click(function(){
         gVar.errTitle = $("#upgrade_set2").text();
        device_shut();
    });
    setProgress();

};


var $progressInner=$('#progressInner');
function setProgress(){
    var progress= 100;
    if(progress<=100){
        $('#progressText').text(progress+'%');
        progress=parseInt(progress)*3.6;
        $progressInner.css('width',parseInt(progress));

        setTimeout("setProgress()",1000);
    }else{
        if(progress==1281){
            $('#progressOuter').text('100%');
            $progressInner.css('width',362);
            window.parent.parent.modeAlert();
        }else{
            //alert(lang.upgradeError3+progress+'��');
            window.parent.parent.save2(lang.upgradeError3+progress+'��');
        }
    }
}

function device_reboot()
{
     //if (confirm(lg.get("IDS_CONFIRM_REBOOT")))
    if (confirm('�Ƿ������豸'))
	{
        var str="setuser=";
        str = str + "admin"

        str = str + '&setsystemreboot';
        var str1 = "../vb.htm?"+str;

		//var str1 = "./vb.htm?setsystemreboot";
        save_val(str1,7,0);
	}

}

function device_shut()
{
//     if (confirm(lg.get("IDS_CONFIRM_REBOOT")))
//	{
//		var str1 = "./vb.htm?setsystemshutdown";
//        save_val(str1,8,0);
//	}

}

function upgrade_process()
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
	XMLHttpRequestObject.open("GET", "./vb.htm?upgradeprocess",true,gVar.user,gVar.passwd);
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
				var prog =  str_sub[1];//str_sub[1].split("\n")[0];
                var show_str= lg.get("IDS_UPGRADE_UPGRADEING")+"...( "+prog+"% )";
                 ShowPaop( $("#upgrade_set2").text(), show_str);
                 if(prog*1 <100)
                {

                   setTimeout("upgrade_process()",1000);
                }
                else
                {
                      MasklayerHide();
                }

			}
	    }
	}
}