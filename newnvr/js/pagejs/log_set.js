var d=new Date();
var pc_time=new Date();
var searchlog_page = 0;
function InitConfig(){

	var d=new Date();
	$('#starttime').val(d.Format("yyyy-MM-dd") + ' 00:00:00');
	$('#endtime').val(d.Format("yyyy-MM-dd") + ' 23:59:59');

	$(".datepicker").datepicker({
		language : 'zh-CN',
		autoclose : true,
		todayBtn : true,
		clearBtn : true,
		format : "yyyy-mm-dd"
	});

	load_device_time();

   $("#log_search").click(function(){
	    load_log_search();
    });

    $("#log_delete").click(function(){
	    call_log_delete();
    });

	$("#log_pre").click(function(){
	    if(searchlog_page >0)
	    {
	        searchlog_page-- ;
	         $(".tablesearch").hide();
            for( k = 0; k <8; k++)
            {
                var pag = searchlog_page*8 +k;
                 $("#nvr_logsearch_"+pag).css("display","block");
            }
	    }

	});

	$("#log_next").click(function(){
	     var max = $(".tablesearch").size();
	    if(searchlog_page >=0 && ((searchlog_page+1)*8<=max) )
	    {
	          searchlog_page ++ ;
             $(".tablesearch").hide();
            for( k = 0; k <8; k++)
            {
               var pag = searchlog_page*8 + k;
               $("#nvr_logsearch_"+pag).css("display","block");
            }
	    }

	});
};

function load_device_time()
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

	XMLHttpRequestObject.open("GET", "../vb.htm?getsystemtimeyear&getsystemtimemonth&getsystemtimeday&getsystemtimehour&getsystemtimeminutes&getsystemtimeseconds&getntpserver&getntpport&getntinterval&getntpdateformat&getntpdateseparator&getntptimeformat&getntptimezone&getntpcontrol",true,loginUser,loginpsw);
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

				var str_sub = str.split("OK ");
				var sec = get_split_span_val(str_sub,"getsystemtimeseconds");
				var hour = get_split_span_val(str_sub,"getsystemtimehour");
				var min = get_split_span_val(str_sub,"getsystemtimeminutes");
				var year = get_split_span_val(str_sub,"getsystemtimeyear");
				var month = get_split_span_val(str_sub,"getsystemtimemonth");
				var day = get_split_span_val(str_sub,"getsystemtimeday");
				var mode = get_split_span_val(str_sub,"getntpcontrol");

				jQuery('#log_start_time,#log_end_time').datetimepicker({
					timeFormat: "HH:mm:ss",
					dateFormat: "yy-mm-dd"
				});
				var tempTime=new Date();
				var beginTime=new Date(year,month - 1,day);
				var endTime=new Date(year,month - 1,day,23,59,59);
				$('#log_start_time').val(beginTime.Format("yyyy-MM-dd hh:mm:ss"));
				$('#log_end_time').val(endTime.Format("yyyy-MM-dd hh:mm:ss"));
			}
		}
	}
}

function call_log_delete()
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
    var HTML="";
    var str = " ../vb.htm?setdeletelog=1";
	XMLHttpRequestObject.open("GET",str,true,loginUser,loginpsw);
	XMLHttpRequestObject.setRequestHeader("If-Modified-Since","0");
	XMLHttpRequestObject.send(null);

	XMLHttpRequestObject.onreadystatechange = function()
	{
	   if(XMLHttpRequestObject.readyState == 4)
	   {
			if(XMLHttpRequestObject.status == 200)
			{
			    setTimeout("load_log_search()",10);
		    }
	    }
	}
}

function load_log_search()
{
	if($('#log_start_time').val()=='' || $('#log_end_time').val()==''){
		window.parent.parent.save2(lang.setTimeTips1);
		return;
	}

	var tmpbegin=parseInt($('#log_start_time').val().replace(/-/g,'').replace(/\s/g,'').replace(/:/g,''));
	var tmpend=parseInt($('#log_end_time').val().replace(/-/g,'').replace(/\s/g,'').replace(/:/g,''));
	if(tmpbegin>=tmpend){
		window.parent.parent.save2(lang.setTimeTips2);
		return;
	}

	$('#logTab').html('');
	var log_start_timer1 = $('#log_start_time').val();
	var tempArr = log_start_timer1.split(" ");
	var beginDateArr=tempArr[0];
	var beginTimeArr=tempArr[1];
	beginDateArr=beginDateArr.split("-");
	beginTimeArr=beginTimeArr.split(":");

	tempArr=$('#log_end_time').val().split(" ");
	var endDateArr=tempArr[0];
	var endTimeArr=tempArr[1];
	endDateArr=endDateArr.split("-");
	endTimeArr=endTimeArr.split(":");

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
    var str = "../vb.htm?setlogtype="+$("#ltype_sel").val()+"&setlogbeginyear="+beginDateArr[0]+"&setlogbeginmon="+beginDateArr[1]+"&setlogbeginday="+beginDateArr[2]+"&setlogbeginhour="+beginTimeArr[0]+"&setlogbeginmin="+beginTimeArr[1]+"&setlogbeginsec="+beginTimeArr[2]+"&setlogendyear="+endDateArr[0]+"&setlogendmon="+endDateArr[1]+"&setlogendday="+endDateArr[2]+"&setlogendhour="+endTimeArr[0]+"&setlogendmin="+endTimeArr[1]+"&setlogendsec="+endTimeArr[2]+"&setquerylog=1";
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
				str_sub = str.split("<br>");
				if(str == '')
				{
					window.parent.parent.save2(lang.lognologtip);
				}
				var className='';
                for(j = 0; j < str_sub.length - 1; j++)
                {
		             str_sub_sub = str_sub[j].split(",");


					var index_t = parseInt(str_sub_sub[0].split("1=")[1]) + 1;


					var time_t = str_sub_sub[1].split("2=")[1];

					var mes_t = get_mes_val(str_sub_sub[2].split("3=")[1]);


					var name_t = str_sub_sub[3].split("4=")[1];

						className= j%2==0?'even':'odd';
						$('#logTab').append('<tr class="'+className+'"><td><span style="width: 55px;">'+index_t+'</span></td>\
				<td><span style="width: 145px;">'+time_t+'</span></td>\
				<td><span style="width: 450px;">'+mes_t+'</span></td>\
				<td><span style="width: 75px;">'+name_t+'</span></td></tr>'
						);

                }

			}
	    }
	}
}

function get_mes_val(str)
{
	var valuetran = "";
	switch (str.substr(2,1))
	{
		case '1':
		{
			switch (str.substr(2).substr(1))
			{
				case '01':
					valuetran = lang.logopendevie;
					break;
				case '02':
					valuetran = lang.logclosedevice;
					break;
				case '03':
					valuetran = lang.logrestartdevice;
					break;
				case '04':
					valuetran = lang.logsystemypdate;
					break;
				case '05':
					valuetran = lang.logrestore;
					break;
				default:
					break;

			}
		}
			break;
		case '2':
		{
			switch (str.substr(2).substr(1))
			{
				case '01':
					valuetran = lang.loglogin;
					break;
				case '02':
					valuetran = lang.loglogout;
					break;
				case '03':
					valuetran = lang.logadduer;
					break;
				case '04':
					valuetran = lang.logdeleteuer;
					break;
				case '05':
					valuetran = lang.logmodifyuser;
					break;
				case '06':
					valuetran = lang.logadduergroup;
					break;
				case '07':
					valuetran = lang.logdeleteusergroup;
					break;
				case '08':
					valuetran = lang.logmodifyusergrop;
					break;
				default:
					break;

			}
		}
			break;
		case '3':
		{
			switch (str.substr(2).substr(1))
			{

				case '01':
					valuetran = lang.logcommcfg;
					break;
				case '02':
					valuetran = lang.logrescom;
					break;
				case '03':
					valuetran = lang.logencode;
					break;
				case '04':
					valuetran = lang.logresencode;
					break;
				case '05':
					valuetran = lang.logrecordvideo;
					break;
				case '06':
					valuetran = lang.logresrecord;
					break;
				case '07':
					valuetran = lang.lognet;
					break;
				case '08':
					valuetran = lang.logresnet;
					break;
				case '09':
					valuetran = lang.logalarm;
					break;
				case '0a':
					valuetran = lang.logresalarm;
					break;
				case '0b':
					valuetran = lang.logmotiondet;
					break;
				case '0c':
					valuetran = lang.logresmotiondet;
					break;
				case '0d':
					valuetran = lang.logcruise;
					break;
				case '0e':
					valuetran = lang.logrescruise;
					break;
				case '0f':
					valuetran = lang.logoutputmode;
					break;
				case '10':
					valuetran = lang.logresoutputmode;
					break;
				case '11':
					valuetran = lang.logchannel;
					break;
				case '12':
					valuetran = lang.logreschannel;
					break;
				case '13':
					valuetran = lang.logimagecol;
					break;
				case '14':
					valuetran = lang.logresimagecol;
					break;

				case '15':
					valuetran = lang.logpreview;
					break;
				case '16':
					valuetran = lang.logrespreview;
					break;
				case '17':
					valuetran = lang.logresusercfg;
					break;
				case '18':
					valuetran = lang.logsen;
					break;
				case '19':
					valuetran = lang.logressen;
					break;
				case '1a':
					valuetran = lang.logddns;
					break;

				case '1b':
					valuetran = lang.logsmtp;
					break;
				case '1c':
					valuetran = lang.logcloud;
					break;
				case '1d':
					valuetran = lang.logupnp;
					break;
				case '1e':
					valuetran = lang.logserial;
					break;
				default:
					break;

			}
		}
			break;
		case '4':
		{
			switch (str.substr(2).substr(1))
			{
				case '01':
					valuetran = lang.logup;
					break;
				case '02':
					valuetran = lang.logdown;
					break;
				case '03':
					valuetran = lang.logdiskformat;
					break;
				case '04':
					valuetran = lang.logdiskread;
					break;
				case '05':
					valuetran = lang.logdiskwrite;
					break;
				case '06':
					valuetran = lang.logvideobackup;
					break;
				default:
					break;
			}
		}
			break;
		case '5':
		{
			switch (str.substr(2).substr(1))
			{
				case '01':
					valuetran = lang.logntp;
					break;
				case '02':
					valuetran = lang.logopendefend;
					break;
				case '03':
					valuetran = lang.logclosedefend;
					break;
				case '04':
					valuetran = lang.logopenvidereca;
					break;
				case '05':
					valuetran = lang.logclosevideoreca;
					break;
				case '06':
					valuetran = lang.logopenvideorecm;
					break;
				case '07':
					valuetran = lang.logclosevideorecm;
					break;
				case '08':
					valuetran = lang.logopenvideoreco;
					break;
				case '09':
					valuetran = lang.logclosevideoreco;
					break;
				case '0a':
					valuetran = lang.logopendhcp;
					break;
				case '0b':
					valuetran = lang.logmcfgnet;
					break;
				case '0c':
					valuetran = lang.logomovedec;
					break;
				case '0d':
					valuetran = lang.logcmovedec;
					break;
				case '0e':
					valuetran = lang.logobuzzer;
					break;
				case '0f':
					valuetran = lang.logcbuzzer;
					break;
				case '10':
					valuetran = lang.logolinkagerrec;
					break;
				case '11':
					valuetran = lang.logclinkagerec;
					break;
				case '12':
					valuetran = lang.logosenalarm;
					break;
				case '13':
					valuetran = lang.logcsenalarm;
					break;
				case '14':
					valuetran = lang.logoruise;
					break;
				case '15':
					valuetran = lang.logcruise;
					break;
				case '16':
					valuetran = lang.logaddcruise;
					break;
				case '17':
					valuetran = lang.logdelcruise;
					break;
				case '18':
					valuetran = lang.logoscan;
					break;
				case '19':
					valuetran = lang.logcscan;
					break;

				case '1a':
					valuetran = lang.logoddns;
					break;
				case '1b':
					valuetran = lang.logoupnp;
					break;
				case '1c':
					valuetran = lang.logcupnp;
					break;
				case '1d':
					valuetran = lang.logop2p;
					break;
				case '1e':
					valuetran = lang.logcp2p;
					break;
				case '1f':
					valuetran = lang.logosmtp;
					break;
				case '20':
					valuetran = lang.logcsmtp;
					break;
				case '21':
					valuetran = lang.logosound;
					break;
				case '22':
					valuetran = lang.logcsound;
					break;
				default:
					break;

			}
		}
			break;

		case '6':
		{
			switch (str.substr(2).substr(1))
			{
				case '01':
					valuetran = lang.lognodisk;
					break;
				case '02':
					valuetran = lang.logdiskfmtfail;
					break;
				case '03':
					valuetran = lang.logdiskfmfok;
					break;
				case '04':
					valuetran = lang.logdiskexc;
					break;
				case '05':
					valuetran = lang.logdiskspace;
					break;
				case '06':
					valuetran = lang.loggetencodefail;
					break;
				case '07':
					valuetran = lang.logsaveencodefail;
					break;
				case '08':
					valuetran = lang.logencodeexc;
					break;
				case '09':
					valuetran = lang.logdelalllog;
					break;
				case '0a':
					valuetran = lang.logrecerdexc;
					break;
				case '0b':
					valuetran = lang.logdisconnect;
					break;
				case '0c':
					valuetran = lang.logconnetok;
					break;
				case '0d':
					valuetran = lang.logipclash;
					break;
				case '0e':
					valuetran = lang.logmacclash;
					break;
				case '0f':
					valuetran = lang.logddnsfail;
					break;
				case '10':
					valuetran = lang.logddnsok;
					break;
				case '11':
					valuetran = lang.logntpupdatefail;
					break;
				case '12':
					valuetran = lang.logntpupdateok;
					break;
				case '13':
					valuetran = lang.logupnpfail;
					break;
				case '14':
					valuetran = lang.logupnpok;
					break;
				case '15':
					valuetran = lang.logemailsendfail;
					break;
				case '16':
					valuetran = lang.logemailsendok;
					break;
				case '17':
					valuetran = lang.logp2pconnectfail;
					break;
				case '18':
					valuetran = lang.logp2pconnectok;
					break;
				case '19':
					valuetran = lang.logfileupfail;
					break;

				case '1a':
					valuetran = lang.logfileupok;
					break;
				case '1b':
					valuetran = lang.logfiledownfail;
					break;
				case '1c':
					valuetran = lang.logfiledownok;
					break;
				case '1d':
					valuetran = lang.logsenalarm;
					break;
				case '1e':
					valuetran = lang.logvideolost;
					break;
				case '1f':
					valuetran = lang.logfilebackupfail;
					break;
				case '20':
					valuetran = lang.logunfinddev;
					break;
				case '21':
					valuetran = lang.lognoptz;
					break;

				default:
					break;

			}
		}
			break;

	}

	return valuetran;
}

function get_tran_val(num)
{
    var valuetran = num;
    if(valuetran*1 <10)
    {
        valuetran = "0"+valuetran*1;
    }
    return valuetran;
}