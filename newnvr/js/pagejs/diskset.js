var disksel = 0;
var diskcount = 0;
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
	load_disk_setting();

	$("#disk_format").click(function(){
		if (confirm(lang.diskformattip))
		{
			var str = "../vb.htm?setuser=" + loginUser+ "&formatdisk="+disksel;
			save_val(str,5,0);
			window.parent.parent.modeAlert();
		}
	});
})


function load_disk_setting()
{
	$('#logTab').html('');
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
	var str = "../vb.htm?getdisk";
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
				if(str == '')
				{
					window.parent.parent.save2(lang.noconnectdisk);
				}
				diskcount = str_sub.length;
				var className='';
				for(j = 0; j < str_sub.length - 1; j++)
				{
					var  str_sub_sub = str_sub[j].split(",");

                	var indexstr = 'diskNo' + j + '=';
					var diskNo = str_sub_sub[0].split(indexstr)[1] ;


					var status = str_sub_sub[1].split("status=")[1];
					switch (status)
					{
						case '0':
							status = lang.diskunmount;
							break;
						case '1':
							status = lang.disknormal;
							break;
						case '2':
							status = lang.diskused;
							break;
						default:
							break;
					}

					var capability = parseInt(str_sub_sub[2].split("capability=")[1])/1024;
					capability = capability.toFixed(3) + 'GB';

					var freesapce = parseInt(str_sub_sub[3].split("freesapce=")[1])/1024;
					freesapce = freesapce.toFixed(3)  + 'GB';

					var type = str_sub_sub[4].split("type=")[1];
					switch (type)
					{
						case '0':
							type = "SATA";
							break;
						case '1':
							type = 'USB';
							break;
						default:
							break;
					}
					//var diskcheck = 'diskcheck' + j;
					className= j%2==0?'even':'odd';
					$('#logTab').append('<tr class="'+className+'"><td><span style="width: 55px;"><input type="checkbox" id="diskcheck'+j+'" onclick="enablecheckvalue('+j+')" value="'+j+'"/> '+diskNo+'</span></td>\
				<td><span style="width: 145px;">'+status+'</span></td>\
				<td><span style="width: 220px;">'+capability+'</span></td>\
				<td><span style="width: 220px;">'+freesapce+'</span></td>\
				<td><span style="width: 75px;">'+type+'</span></td></tr>'
					);


				}

			}
		}
	}
}

function enablecheckvalue(num)
{

	//var i = 0;
	for(i = 0 ;i <diskcount -1 ; i++)
	{
		if(i !=num)
		{
			var help = "#diskcheck" + i;
			if($(help).is(":checked"))
			{
				$(help).click();
			}
		}

	}
	var help = "#diskcheck" + num;
	if($(help).is(":checked"))
	{

	}
	else
	{
		$(help).click();

	}
	disksel = num;
}
