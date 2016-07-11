

function InitConfig(){
	load_version_setting();
};

function load_version_setting()
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
			}
		}
	}
}

