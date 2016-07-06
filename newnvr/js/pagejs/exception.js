var cursel = 0;
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
	getselectoption(0);
	load_exception_setting(0);

	$("#disk_exception").click(function(){
		cursel = 0;
		getselectoption(0);
		$("#geteventtype").val(0);
		load_exception_setting(0);
	});

	$("#network_exception").click(function(){
		cursel = 1;
		getselectoption(1);
		$("#geteventtype").val(2);
		load_exception_setting(2);
	});
    $("#geteventtype").change(function(){
		if(cursel == 0)
				load_exception_setting($(this).val());
		else
		{
			//alert($(this).val());
			var optionsel = $(this).val();

			if(browserCfg.safari)
			{
				if(optionsel == 0)
				{
					optionsel = 2;
				}
				else if(optionsel == 1)
				{
					optionsel = 3;
				}
			}
			load_exception_setting(optionsel)
		}
    });
    ////保存
    $("#exception_save").click(function(){
		exception_save();
    });
	

})

function getselectoption(num)
{
	$("#geteventtype").children('option[value="0"]').wrap('<span>').hide();
	$("#geteventtype").children('option[value="1"]').wrap('<span>').hide();
	$("#geteventtype").children('option[value="2"]').wrap('<span>').hide();
	$("#geteventtype").children('option[value="3"]').wrap('<span>').hide();
	switch (num)
	{
		case 0:
		{
			$("#geteventtype").children("span").children('option[value="0"]').unwrap();
			$("#geteventtype").children("span").children('option[value="1"]').unwrap();
			$('#geteventtype option[value="1"]').show();
			$('#geteventtype option[value="0"]').show();

		}
			break;
		case 1:
		{
			$("#geteventtype").children("span").children('option[value="2"]').unwrap();
			$("#geteventtype").children("span").children('option[value="3"]').unwrap();

			$('#geteventtype option[value="2"]').show();
			$('#geteventtype option[value="3"]').show();
		}
			break;
		default:
			break;
	}
}

function exception_save()
{
	var str="";

	str = str + "&seteventtype=";

	if(cursel == 0)
	{
		str = str + $("[matchval='geteventtype']").val();

	}
	else
	{
		var optionsel =  $("[matchval='geteventtype']").val();

		if(browserCfg.safari)
		{
			if(optionsel == 0)
			{
				optionsel = 2;
			}
			else if(optionsel == 1)
			{
				optionsel = 3;
			}
		}
		str = str + optionsel;
	}

	str = str + "&seteventenalbe=";
	if( $("[matchval='geteventenalbe']").is(":checked"))
	{
		str = str + '1';
	}
	else
	{
		str = str + '0';
	}

	str = str + "&seteventdisplay=";
	if( $("[matchval='geteventdisplay']").is(":checked"))
	{
		str = str + '1';
	}
	else
	{
		str = str + '0';
	}

	str = str + "&seteventemail=";
	if( $("[matchval='geteventemail']").is(":checked"))
	{
		str = str + '1';
	}
	else
	{
		str = str + '0';
	}

	str = str + "&seteventbuzzer=";
	if( $("[matchval='geteventbuzzer']").is(":checked"))
	{
		str = str + '1';
	}
	else
	{
		str = str + '0';
	}



    var str1 = "../vb.htm?"+str;

    save_val(str1,0,0);


}


function load_exception_setting(num)
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

	XMLHttpRequestObject.open("GET", "../vb.htm?geteventtype="+num+"&geteventenalbe&geteventdisplay&geteventemail&geteventbuzzer",true,loginUser,loginpsw);
	XMLHttpRequestObject.setRequestHeader("If-Modified-Since","0");
	XMLHttpRequestObject.send(null);
	
	XMLHttpRequestObject.onreadystatechange = function()
	{
	   if(XMLHttpRequestObject.readyState == 4)
	   {
			if(XMLHttpRequestObject.status == 200)
			{
				var str = XMLHttpRequestObject.responseText;
				split_span_val_type2(str);
			}
	    }
	}	
}

