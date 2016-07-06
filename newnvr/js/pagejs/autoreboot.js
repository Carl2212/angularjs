var d=new Date();
var pc_time=new Date();
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

$(document).ready(function(){

	//初始操作
    load_autoreboot();

	$('#getautomaintaintype').change(function(){
		var $this=$(this);
		switch($this.val()){
			case '0':
				$('#getautomaintainhour').attr('style','display:none');
				$('#getautomaintainmin').attr('style','display:none');
				$('#getautomaintainday').attr('style','display:none');
				$('#getautomaintainweek').attr('style','display:none');
				$('#weekDay11').attr('style','display:none');
				$('#weekDay12').attr('style','display:none');
				$('#weekDay10').attr('style','display:none');
				break;
			case '1':
				$('#getautomaintainhour').attr('style','display:none');
				$('#getautomaintainmin').attr('style','display:none');
				$('#getautomaintainday').attr('style','display:none');
				$('#getautomaintainweek').attr('style','display:none');
				$('#weekDay11').attr('style','display:none');
				$('#weekDay12').attr('style','display:none');
				$('#weekDay10').attr('style','display:none');

				$('#getautomaintainhour').removeAttr('style');
				$('#getautomaintainmin').removeAttr('style');
				$('#weekDay11').removeAttr('style');
				$('#weekDay12').removeAttr('style');
				break;
			case '2':
				$('#getautomaintainhour').attr('style','display:none');
				$('#getautomaintainmin').attr('style','display:none');
				$('#getautomaintainday').attr('style','display:none');
				$('#getautomaintainweek').attr('style','display:none');
				$('#weekDay11').attr('style','display:none');
				$('#weekDay12').attr('style','display:none');
				$('#weekDay10').attr('style','display:none');

				$('#getautomaintainhour').removeAttr('style');
				$('#getautomaintainmin').removeAttr('style');
				$('#getautomaintainweek').removeAttr('style');
				$('#weekDay11').removeAttr('style');
				$('#weekDay12').removeAttr('style');
				break;
			case '3':
				$('#getautomaintainhour').attr('style','display:none');
				$('#getautomaintainmin').attr('style','display:none');
				$('#getautomaintainday').attr('style','display:none');
				$('#getautomaintainweek').attr('style','display:none');
				$('#weekDay11').attr('style','display:none');
				$('#weekDay12').attr('style','display:none');
				$('#weekDay10').attr('style','display:none');

				$('#getautomaintainhour').removeAttr('style');
				$('#getautomaintainmin').removeAttr('style');
				$('#getautomaintainday').removeAttr('style');
				$('#weekDay11').removeAttr('style');
				$('#weekDay12').removeAttr('style');
				$('#weekDay10').removeAttr('style');
				break;
		}
	});

    //保存
	$("#autoreboot_save").click(function(){

		autoreboot_save();
	});

})

function autoreboot_save()
{
	var str="";
	str = str + "setautomaintaintype=";
	str = str + $("#getautomaintaintype").val();
	str = str + "&setautomaintainday=";
	str = str + $("#getautomaintainday").val();


	str = str + "&setautomaintainweek=";
	str = str + $("#getautomaintainweek").val();
	str = str + "&setautomaintainhour=";
	str = str + $("#getautomaintainhour").val();
	str = str + "&setautomaintainmin=";
	str = str + $("#getautomaintainmin").val();

	var str1 = "../vb.htm?"+str;
	save_val(str1,0,0);

}

function load_autoreboot()
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

	XMLHttpRequestObject.open("GET", "../vb.htm?getautomaintaintype&getautomaintainday&getautomaintainweek&getautomaintainhour&getautomaintainmin",true,loginUser,loginpsw);
	XMLHttpRequestObject.setRequestHeader("If-Modified-Since","0");
	XMLHttpRequestObject.send(null);
	
	XMLHttpRequestObject.onreadystatechange = function()
	{
	   if(XMLHttpRequestObject.readyState == 4)
	   {
			if(XMLHttpRequestObject.status == 200)
			{ 
				var str = XMLHttpRequestObject.responseText;
				var str_sub = str.split("OK ");
				var model = get_split_span_val(str_sub,"getautomaintaintype");
				if(model == 0)
				{
					;
				}
				else if(model == 1)
				{
					$('#getautomaintainhour').removeAttr('style');
					$('#getautomaintainmin').removeAttr('style');
					$('#weekDay11').removeAttr('style');
					$('#weekDay12').removeAttr('style');
				}
				else if(model == 2)
				{
					$('#getautomaintainhour').removeAttr('style');
					$('#getautomaintainmin').removeAttr('style');
					$('#getautomaintainweek').removeAttr('style');

					$('#weekDay11').removeAttr('style');
					$('#weekDay12').removeAttr('style');
				}
				else if(model == 3) {
					$('#getautomaintainhour').removeAttr('style');
					$('#getautomaintainmin').removeAttr('style');
					$('#getautomaintainday').removeAttr('style');

					$('#weekDay11').removeAttr('style');
					$('#weekDay12').removeAttr('style');
					$('#weekDay10').removeAttr('style');
				}
				split_span_val_type2(str);
			}
	    }
	}
}



