/*************************************************
 Function:		InitConfig
 Description:	初始化页面
 Input:			none
 Output:
 return:
 *************************************************/
function InitConfig(){
	//load_email_setting();

    //保存
    $("#email_save").click(function(){
		email_save();
    });

	$("#emailtest").click(function(){
		email_test();
	});
	

};

//
function email_test()
{
	var str1 = "../vb.htm?testemailstatus";
	save_val(str1,10,0);
}


function email_save()
{
	var str="setuser=";
	str = str + loginUser;
	str = str + "&setsmtpserver=";
	str = str + $("[matchval='getsmtpserver']").val();

	str = str + "&setsmtpuser=";
	str = str + $("[matchval='getsmtpuser']").val();

	str = str + "&setsmtppasswd=";
	str = str + $("[matchval='getsmtppasswd']").val();

	str = str + "&setsmtpreceiver=";
	str = str + $("[matchval='getsmtpreceiver']").val();

	str = str + "&setsmtpsender=";
	str = str + $("[matchval='getsmtpsender']").val();

	str = str + "&setsmtptheme=";
	str = str + $("[matchval='getsmtptheme']").val();

	str = str + "&setsmtpen=";
	if( $("[matchval='getsmtpen']").is(":checked"))
	{
		str = str + '1';
	}
	else
	{
		str = str + '0';
	}

	str = str + "&setsmtpanoen=";
	str = str + '0';

	str = str + "&setsmtpfileen=";
	if( $("[matchval='getsmtpfileen']").is(":checked"))
	{
		str = str + '1';
	}
	else
	{
		str = str + '0';
	}

	str = str + "&setsmtpport=";
	str = str + $("[matchval='getsmtpport']").val();


	str = str + "&setsmtpenctype=";
	str = str + $("[matchval='getsmtpenctype']").val();

	str = str + "&setsmtpinterval=";
	str = str + $("[matchval='getsmtpinterval']").val();

	str = str + "&setsmtphealthen=";
	str = str +	'0';

	str = str + "&setsmtphealthinterval=";
	str = str +	'0';

    var str1 = "../vb.htm?"+str;

    save_val(str1,0,0);


}


function load_email_setting(num)
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

	XMLHttpRequestObject.open("GET", "../vb.htm?getsmtpserver\
&getsmtpuser\
&getsmtppasswd\
&getsmtpreceiver\
&getsmtpsender\
&getsmtptheme\
&getsmtpanoen\
&getsmtpfileen\
&getsmtpport\
&getsmtpenctype\
&getsmtpinterval\
&getsmtphealthen\
&getsmtphealthinterval\
&getsmtpen",true,loginUser,loginpsw);
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

