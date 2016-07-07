var src_httpport = 0;
var src_ip = "";
var src_rtspport = 0;
var src_dhcp = false;

function InitConfig(){
	langJs=$.cookies.get('lang') || defaultLang;
	$.cookies.set('lang', langJs, {'hoursToLive': 24 * 365});
	$.getScript("../lang/"+langJs+".js",function() {
		InitLang();//初始化语言
	});
	$("[matchval='mac']").attr('disabled','disabled');
	load_net_setting();
    //保存
	$("#net_save").click(function(){
		 var ipRegEx = /^(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])$/;
		
		 if((!ipRegEx.test($("#ipaddr_input").val())) || ($("#ipaddr_input").val() =="0.0.0.0"))
		 {
			 window.parent.parent.save2(lang.IPAddr+lang.formatErr);
		 }
		 if((!ipRegEx.test($("#mask_input").val()))|| ($("#mask_input").val() =="0.0.0.0"))
		 {
			 window.parent.parent.save2(lang.subnetMask+lang.formatErr);
		 } 
		 if((!ipRegEx.test($("#gate_input").val()))|| ($("#gate_input").val() =="0.0.0.0"))
		  {
			  window.parent.parent.save2(lang.gatewey+lang.formatErr);
		  }
		  if((!ipRegEx.test($("#dns1_input").val()))|| ($("#dns1_input").val() =="0.0.0.0"))
		  {
			  window.parent.parent.save2(lang.defaultDNS+lang.formatErr);
		  }
		  if((!ipRegEx.test($("#dns2_input").val()))|| ($("#dns2_input").val() =="0.0.0.0"))
		  {
			  window.parent.parent.save2(lang.defaultDNS+lang.formatErr);
		  } 

			save_net();
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
function save_net()
{
     var str="netip=";
    str = str + $("[matchval='netip']").val();
    str = str + "&netmask=";
    str = str + $("[matchval='netmask']").val();
    str = str + "&gateway=";
    str = str + $("[matchval='gateway']").val();

    str = str + "&dns1=";
    str = str + $("[matchval='dns1']").val();
    str = str + "&dns2=";
    str = str + $("[matchval='dns2']").val();
    str = str + "&mac=";
    str = str + $("[matchval='mac']").val();
	str = str + "&dhcpenable="
	if( $("[matchval='dhcpenable']").is(":checked"))
	{
		str = str + '1';
	}
	else
	{
		str = str + '0';
	}
   str = str + "&dnsautoenalbe=0";

    var str1 = "../vb.htm?"+str;

    save_val(str1,6,0);


}


function load_net_setting()
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

	XMLHttpRequestObject.open("GET", "../ini.htm",true,loginUser,loginpsw);
	XMLHttpRequestObject.setRequestHeader("If-Modified-Since","0");
	XMLHttpRequestObject.send(null);
	
	XMLHttpRequestObject.onreadystatechange = function()
	{
	   if(XMLHttpRequestObject.readyState == 4)
	   {
			if(XMLHttpRequestObject.status == 200)
			{
				var str = XMLHttpRequestObject.responseText;	
				split_span_val(str);
	            src_httpport = 1*$("[matchval='httpport']").val();
				src_ip = $("[matchval='netip']").val();
				src_dhcp = $("[matchval='dhcpenable']").is(":checked");
			}
	    }
	}	
}

function save_netport()
{
     var str="rtspserverport=";
    str = str + $("[matchval='rtspserverport']").val();
    str = str + "&tcpport=";
    str = str + $("[matchval='tcpport']").val();
    str = str + "&httpport=";
    str = str + $("[matchval='httpport']").val();
    str = str + "&multicast=";
    str = str + $("[matchval='multicast']").val();
    var str1 = "../vb.htm?"+str;

	save_val(str1, 9, 0);

	//注意：此页面必须发送ip信息和端口信息后设备端才修改生效
	if(src_httpport != 1*$("[matchval='httpport']").val() || src_ip != $("[matchval='netip']").val())
	{
		window.parent.parent.location.href = "http://"+$("[matchval='netip']").val()+":"+$("[matchval='httpport']").val()+"/login.html";
	}
	else {


	}

}