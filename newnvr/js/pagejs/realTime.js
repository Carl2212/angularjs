if($.cookies.get('userName')) {
	loginUser = $.cookies.get('userName');
}
if($.cookies.get('pwd')) {
	loginpsw = $.cookies.get('pwd');
}

if($.cookies.get('netmask')) {
	netmask = $.cookies.get('netmask');
}
if($.cookies.get('gateway')) {
	gateway = $.cookies.get('gateway');
}

if($.cookies.get('getsyschannum')) {
	channelnum = $.cookies.get('getsyschannum');
}

//var ip=window.location.href.split('/')[2].split(':')[0];
function PtzPresetVal(){
	this.presetnum = new Array;
	this.presetenable = new Array;
}

function  PtzCursieSubVal(){
	this.getcuren = new Array;
	this.getcursp = new Array;
	this.getcrudt = new Array;
	this.getcruprenum = new Array;
	this.getcrepreen = new Array;
}

function PtzCursieVal(){
	this.ptzcrulinenum = new Array;
	this.ptzcrulineenable = new Array;

	//this.ptzcursiesubval = new PtzCursieSubVal();
}

var ptzpresetval = new PtzPresetVal();
var ptzcurisesubval0 = new PtzCursieSubVal();
var ptzcurisesubval1 = new PtzCursieSubVal();
var ptzcurisesubval2 = new PtzCursieSubVal();

var ptzcurisesubval0copy = new PtzCursieSubVal();
var ptzcurisesubval1copy = new PtzCursieSubVal();
var ptzcurisesubval2copy = new PtzCursieSubVal();


var ptzcursieval = new PtzCursieVal();

var ip='172.18.194.30';

var port='80';
var tmpArr=window.location.href.split(':');
if(tmpArr[2]){
	port=tmpArr[2];
}



loginpsw = "12345";
var bliveview = new Array;
var brec = new Array;
var bsound = new Array;
var selstream = new Array;
var map=new Map();
var selWnd = 0;
var allselstream = 1;
var ballplay = false;
var ballrec=	false;
var chsel = 0;

$(function(){
	$('#setPicBtn').attr('title',lang.setPic);
	$('#fdBtn').attr('title',lang.fd);
	$('#play_stop').attr('title',lang.stop);
	$('#recordBtn').attr('title',lang.starRecord);

	$('#leftup').attr('title',lang.ptzleftup);
	$('#up').attr('title',lang.ptzup);
	$('#rightup').attr('title',lang.ptzrightup);
	$('#zoomup').attr('title',lang.ptzzoom + "+");
	$('#zoomdown').attr('title',lang.ptzzoom + "-");
	$('#left').attr('title',lang.ptzleft);
	$('#sudu').attr('title',lang.ptzspeed);
	$('#right').attr('title',lang.ptzright);

	$('#focusup').attr('title',lang.ptzfocus + '+');
	$('#focusdown').attr('title',lang.ptzfocus + '-');

	$('#leftdown').attr('title',lang.ptzleftdown);
	$('#down').attr('title',lang.ptzdown);
	$('#rightdown').attr('title',lang.ptzrightdown);
	$('#irisup').attr('title',lang.ptziris + '+');
	$('#irisdown').attr('title',lang.ptziris + '-');

	$('#ptzpresetbtn').attr('title',lang.ptzpresetdot);
	$('#ptzcursiebtn').attr('title',lang.ptzcuriseset);


	//var className = 0;
	for(var i= 1;i <= parseInt(channelnum);i++)
	{
		//
		bliveview[i] = false;
		brec[i] = false;
		bsound[i] = false;
		selstream[i] = 1;
		var window = "wnd" + (parseInt(i)-1);
		map.put(window,-1);
		//className= i%2==0?'even':'odd';
		$('#channellist').append('<div class="btn_channel">\
				<input type="button" class="play_btn" id="play'+i+'" title="'+lang.play+'"  onclick="startonechannelview(\''+i+'\');" />\
				<input type="button" class="stream" id="stream'+i+'" title="'+lang.mainStream+'"  onclick="setstreamtype(\''+i+'\');" />\
				<input type="button"  class="recordBtn" id="record'+i+'" title="'+lang.starRecord+'" onclick="setonechannelrecord(\''+i+'\');" />\
				<input type="button" class="set_pic" id="capture'+i+'" title="'+lang.setPic+'" onclick="setonechannelcapture(\''+i+'\');" /></div>');
	}

	//var $slide=$('#slide');
	//$slide.slider({
	//	max: 7,
	//	min:0,
	//	value:$('#ucInputSpeed').val(),
	//	slide: function( event,ui ){
	//		$('#ucInputSpeed').val(ui.value);
	//	}
	//});

	//$('#ucInputSpeed').keyup(function(event){
	//	var $this=$(this);
	//	if(event.keyCode == 13){
	//		var tmpVal=parseInt($this.val());
	//		if(tmpVal>=0 && tmpVal<=7){
	//			$this.val(tmpVal);
	//			$slide.slider("value", tmpVal);
	//		}else{
	//			$('#ucInputSpeed').focus();					//转移焦点避免按下enter时再次出现提示
	//			//alert(lang.setSlideTips2);
	//			window.parent.parent.save2(lang.setSlideTips2);
	//		}
	//	}
	//});

//PTZ
	load_ptz_preset(selWnd);
	load_ptz_curise(0);


	$("#getptzcrulinenum").change(function(){
		var index = $(this).val();
		if(index>=0)
		{
			if(index != chsel)
			{
				//alert(ptzcursieval.ptzcrulineenable[index]);
				if(parseInt(ptzcursieval.ptzcrulineenable[index]))
				{
					if(!$("#getptzcrulineen").is(":checked"))
						$("#getptzcrulineen").click();
				}
				else
				{
					if($("#getptzcrulineen").is(":checked"))
						$("#getptzcrulineen").click();
				}

				$('#ptzcurise_tab').html('');
				for(var i= 1;i <=32;i++)
				{
					switch (parseInt(index))
					{
						case 0:
							$('#ptzcurise_tab').append('<div class="btn_ptz">\
				<input type="button" class="void_btn" id="curiseindex'+i+'"   value="'+i+'"/>\
				<input type="button" class="void_btn" id="cursisename'+i+'"   value="'+lang.play+''+i+'" />\
				<input type="button" class="void_btn" id="curisepreset'+i+'" value="'+ptzcurisesubval0.getcruprenum[parseInt(i)-1]+'"  onclick="set_ptzcurise_preset(\''+i+'\');" />\
				<input type="button" class="void_btn" id="curisesp'+i+'"  value="'+ptzcurisesubval0.getcursp[parseInt(i)-1]+'"  onclick="set_ptzcurise_preset(\''+i+'\');" />\
				<input type="button" class="void_btn" id="curisedt'+i+'"  value="'+ptzcurisesubval0.getcrudt[parseInt(i)-1]+'"  onclick="set_ptzcurise_preset(\''+i+'\');" /></div>');

							break;
						case 1:
							$('#ptzcurise_tab').append('<div class="btn_ptz">\
				<input type="button" class="void_btn" id="curiseindex'+i+'"   value="'+i+'"/>\
				<input type="button" class="void_btn" id="cursisename'+i+'"   value="'+lang.play+''+i+'" />\
				<input type="button" class="void_btn" id="curisepreset'+i+'" value="'+ptzcurisesubval1.getcruprenum[parseInt(i)-1]+'"  onclick="set_ptzcurise_preset(\''+i+'\');" />\
				<input type="button" class="void_btn" id="curisesp'+i+'"  value="'+ptzcurisesubval1.getcursp[parseInt(i)-1]+'"  onclick="set_ptzcurise_preset(\''+i+'\');" />\
				<input type="button" class="void_btn" id="curisedt'+i+'"  value="'+ptzcurisesubval1.getcrudt[parseInt(i)-1]+'"  onclick="set_ptzcurise_preset(\''+i+'\');" /></div>');

							break;
						case 2:
							$('#ptzcurise_tab').append('<div class="btn_ptz">\
				<input type="button" class="void_btn" id="curiseindex'+i+'"   value="'+i+'"/>\
				<input type="button" class="void_btn" id="cursisename'+i+'"   value="'+lang.play+''+i+'" />\
				<input type="button" class="void_btn" id="curisepreset'+i+'" value="'+ptzcurisesubval2.getcruprenum[parseInt(i)-1]+'"  onclick="set_ptzcurise_preset(\''+i+'\');" />\
				<input type="button" class="void_btn" id="curisesp'+i+'"  value="'+ptzcurisesubval2.getcursp[parseInt(i)-1]+'"  onclick="set_ptzcurise_preset(\''+i+'\');" />\
				<input type="button" class="void_btn" id="curisedt'+i+'"  value="'+ptzcurisesubval2.getcrudt[parseInt(i)-1]+'"  onclick="set_ptzcurise_preset(\''+i+'\');" /></div>');

							break;
					}

				}
				chsel = index;
			}
		}
	});

	init();
});

//vb.htm?&setptzcruch=0&setptzcrulinenum=0&setptzcrulineen=1 &setptzcrupreset0_7=
//	set_cru_en0:1,set_cru_sp0:2,set_cru_dt0:8,set_cru_pre0_num:83,set_cru_pre0_en:0;
//set_cru_en1:1,set_cru_sp1:2,set_cru_dt1:4,set_cru_pre1_num:2,set_cru_pre1_en:0;
//set_cru_en2:1,set_cru_sp2:1,set_cru_dt2:22,set_cru_pre2_num:2,set_cru_pre2_en:0;
//set_cru_en3:0,set_cru_sp3:0,set_cru_dt3:0,set_cru_pre3_num:0,set_cru_pre3_en:0;
//set_cru_en4:0,set_cru_sp4:0,set_cru_dt4:0,set_cru_pre4_num:0,set_cru_pre4_en:0;
//set_cru_en5:0,set_cru_sp5:0,set_cru_dt5:0,set_cru_pre5_num:0,set_cru_pre5_en:0;
//set_cru_en6:0,set_cru_sp6:0,set_cru_dt6:0,set_cru_pre6_num:0,set_cru_pre6_en:0;
//set_cru_en7:0,set_cru_sp7:0,set_cru_dt7:0,set_cru_pre7_num:0,set_cru_pre7_en:0

///vb.htm?&setptzcruch=0&setptzcrulinenum=0&setptzcrulineen=1&setptzcrupreset0_7=
//	set_cru_en0:1,set_cru_sp0:2,set_cru_dt0:8,set_cru_pre0_num:83,set_cru_pre0_en:0,
//	set_cru_en1:2,set_cru_sp1:0,set_cru_dt1:0,set_cru_pre1_num:0,set_cru_pre1_en:0,
//	set_cru_en2:0,set_cru_sp2:0,set_cru_dt2:0,set_cru_pre2_num:0,set_cru_pre2_en:0,
//	set_cru_en3:0,set_cru_sp3:0,set_cru_dt3:0,set_cru_pre3_num:0,set_cru_pre3_en:0,
//	set_cru_en4:0,set_cru_sp4:0,set_cru_dt4:0,set_cru_pre4_num:0,set_cru_pre4_en:0,
//	set_cru_en5:0,set_cru_sp5:0,set_cru_dt5:0,set_cru_pre5_num:0,set_cru_pre5_en:0,
//	set_cru_en6:0,set_cru_sp6:0,set_cru_dt6:0,set_cru_pre6_num:0,set_cru_pre6_en:0,
//	set_cru_en7:0,set_cru_sp7:0,set_cru_dt7:0,set_cru_pre7_num:0,set_cru_pre7_en:0,


function set_ptzcrusizesavebtn(num)
{

	var str="&setptzcruch=";
	str = str + selWnd;


	str = str + "&setptzcrulinenum=";
	str = str + $("#getptzcrulinenum").val();

	str = str + "&setptzcrulineen=";
	if( $("#getptzcrulineen").is(":checked"))
	{
		str = str + '1';
	}
	else
	{
		str = str + '0';
	}

	switch (parseInt(num))
	{
		case 0:
			str = str + "&setptzcrupreset0_7=";
			break;
		case 8:
			str = str + "&setptzcrupreset8_15=";
			break;
		case 16:
			str = str + "&setptzcrupreset16_23=";
			break;
		case 24:
			str = str + "&setptzcrupreset24_31=";
			break;
	}

	switch (parseInt($("#getptzcrulinenum").val()))
	{
		case 0:
			for(var i = num;i < num+8; i++ )
			{
				str = str + "set_cru_en"+i+":";
				str = str + ptzcurisesubval0copy.getcuren[i]+",";

				str = str + "set_cru_sp"+i+":";
				str = str + ptzcurisesubval0copy.getcursp[i]+",";

				str = str + "set_cru_dt"+i+":";
				str = str + ptzcurisesubval0copy.getcrudt[i]+",";


				str = str + "set_cru_pre"+i+"_num"+":";
				str = str + ptzcurisesubval0copy.getcruprenum[i]+",";


				str = str + "set_cru_pre"+i+"_en"+":";
				str = str + ptzcurisesubval0copy.getcrepreen[i]+";";

			}
			break;
		case 1:
			for(var i = i;i < i+8; i++ )
			{
				str = str + "set_cru_en"+i+":";
				str = str + ptzcurisesubval1copy.getcuren[i]+",";

				str = str + "set_cru_sp"+i+":";
				str = str + ptzcurisesubval1copy.getcursp[i]+",";

				str = str + "set_cru_dt"+i+":";
				str = str + ptzcurisesubval1copy.getcrudt[i]+",";


				str = str + "set_cru_pre"+i+"_num"+":";
				str = str + ptzcurisesubval1copy.getcruprenum[i]+",";


				str = str + "set_cru_pre"+i+"_en"+":";
				str = str + ptzcurisesubval1copy.getcrepreen[i]+";";

			}
			break;
		case 2:
			for(var i = num;i < num+8; i++ )
			{
				str = str + "set_cru_en"+i+":";
				str = str + ptzcurisesubval2copy.getcuren[i]+",";

				str = str + "set_cru_sp"+i+":";
				str = str + ptzcurisesubval2copy.getcursp[i]+",";

				str = str + "set_cru_dt"+i+":";
				str = str + ptzcurisesubval2copy.getcrudt[i]+",";


				str = str + "set_cru_pre"+i+"_num"+":";
				str = str + ptzcurisesubval2copy.getcruprenum[i]+",";


				str = str + "set_cru_pre"+i+"_en"+":";
				str = str + ptzcurisesubval2copy.getcrepreen[i]+";";

			}
			break;
	}


	var str1 = "../vb.htm?"+str;
	var XMLHttpRequestObject = null;
	if (window.XMLHttpRequest)
	{
		XMLHttpRequestObject = new XMLHttpRequest();
	}
	else if (window.ActiveXObject)
	{
		XMLHttpRequestObject = new ActiveXObject("Microsoft.XMLHTTP");
	}

	XMLHttpRequestObject.open("GET", str1, true,loginUser,loginpsw);
	XMLHttpRequestObject.setRequestHeader("cache-control","no-cache");
	XMLHttpRequestObject.setRequestHeader("context-type","text/xml;charset=utf-8");
	XMLHttpRequestObject.setRequestHeader("Content-Type","application/x-www-form-encodeURIComponent");
	XMLHttpRequestObject.setRequestHeader("If-Modified-Since","0");
	XMLHttpRequestObject.send(null);
	XMLHttpRequestObject.onreadystatechange = function() {

		if (XMLHttpRequestObject.readyState == 4) {

			if (XMLHttpRequestObject.status == 200) {

				num = num + 8;
				if(num <32)
				{
					set_ptzcrusizesavebtn(num);
				}
			}

		}
	}
}

//设置巡航设置之预置点
function set_ptzcurise_preset(curise)
{

	$allDiv=$('<div id="ptzall"></div>').css("opacity", 1.0);
	$editDiv=$('<div id="PTZedit">\
			<div class="PTZeditHeader"><label>'+lang.ptzcurise+'</label></div>\
			<div class="PTZeditContent">\
				<div>\
					<span><label>'+lang.ptzpreset+'</label></span>\
						<span width="200px;"><select id="editpreset" class="select"  >\
									<option value="1">1</option>\
									<option value="2">2</option>\
									<option value="3">3</option>\
									<option value="4">4</option>\
									<option value="5">5</option>\
									<option value="6">6</option>\
									<option value="7">7</option>\
									<option value="8">8</option>\
									<option value="9">9</option>\
									<option value="10">10</option>\
									<option value="11">11</option>\
									<option value="12">12</option>\
									<option value="13">13</option>\
									<option value="14">14</option>\
									<option value="15">15</option>\
									<option value="16">16</option>\
									<option value="17">17</option>\
									<option value="18">18</option>\
									<option value="19">19</option>\
									<option value="20">20</option>\
									<option value="21">21</option>\
									<option value="22">22</option>\
									<option value="23">23</option>\
									<option value="24">24</option>\
									<option value="25">25</option>\
									<option value="26">26</option>\
									<option value="27">27</option>\
									<option value="28">28</option>\
									<option value="29">29</option>\
									<option value="30">30</option>\
									<option value="31">31</option>\
									<option value="32">32</option>\
									<option value="33">33</option>\
									<option value="34">34</option>\
									<option value="35">35</option>\
									<option value="36">36</option>\
									<option value="37">37</option>\
									<option value="38">38</option>\
									<option value="39">39</option>\
									<option value="40">40</option>\
									<option value="41">41</option>\
									<option value="42">42</option>\
									<option value="43">43</option>\
									<option value="44">44</option>\
									<option value="45">45</option>\
									<option value="46">46</option>\
									<option value="47">47</option>\
									<option value="48">48</option>\
									<option value="49">49</option>\
									<option value="50">50</option>\
									<option value="51">51</option>\
									<option value="52">52</option>\
									<option value="53">53</option>\
									<option value="54">54</option>\
									<option value="55">55</option>\
									<option value="56">56</option>\
									<option value="57">57</option>\
									<option value="58">58</option>\
									<option value="59">59</option>\
									<option value="60">60</option>\
									<option value="61">61</option>\
									<option value="62">62</option>\
									<option value="63">63</option>\
									<option value="64">64</option>\
									<option value="65">65</option>\
									<option value="66">66</option>\
									<option value="67">67</option>\
									<option value="68">68</option>\
									<option value="69">69</option>\
									<option value="70">70</option>\
									<option value="71">71</option>\
									<option value="72">72</option>\
									<option value="73">73</option>\
									<option value="74">74</option>\
									<option value="75">75</option>\
									<option value="76">76</option>\
									<option value="77">77</option>\
									<option value="78">78</option>\
									<option value="79">79</option>\
									<option value="80">80</option>\
									<option value="81">81</option>\
									<option value="82">82</option>\
									<option value="83">83</option>\
									<option value="84">84</option>\
									<option value="85">85</option>\
									<option value="86">86</option>\
									<option value="87">87</option>\
									<option value="88">88</option>\
									<option value="89">89</option>\
									<option value="90">90</option>\
									<option value="91">91</option>\
									<option value="92">92</option>\
									<option value="93">93</option>\
									<option value="94">94</option>\
									<option value="95">95</option>\
									<option value="96">96</option>\
									<option value="97">97</option>\
									<option value="98">98</option>\
									<option value="99">99</option>\
									<option value="100">100</option>\
									<option value="101">101</option>\
									<option value="102">102</option>\
									<option value="103">103</option>\
									<option value="104">104</option>\
									<option value="105">105</option>\
									<option value="106">106</option>\
									<option value="107">107</option>\
									<option value="108">108</option>\
									<option value="109">109</option>\
									<option value="110">110</option>\
									<option value="111">111</option>\
									<option value="112">112</option>\
									<option value="113">113</option>\
									<option value="114">114</option>\
									<option value="115">115</option>\
									<option value="116">116</option>\
									<option value="117">117</option>\
									<option value="118">118</option>\
									<option value="119">119</option>\
									<option value="120">120</option>\
									<option value="121">121</option>\
									<option value="122">122</option>\
									<option value="123">123</option>\
									<option value="124">124</option>\
									<option value="125">125</option>\
									<option value="126">126</option>\
									<option value="127">127</option>\
									<option value="128">128</option>\
									</select>\
									</span>\
				</div>\
				<div>\
				<span><label>'+lang.ptzcurisedt+'</label></span>\
				<span><input style="width:40px" onkeyup="if(keyboardFilter()) {value=NumberRangeLimt(this,0,30)}" onblur="if(this.value == (\'\')) this.value=(\'00\')"  maxlength="2" id="editptzdt" name="editptzdt" type="text" matchval="getchanusername"  /></span>\
				</div>\
				<div>\
				<span><label>'+lang.ptcuisesp+'</label></span>\
				<span>\
				<select id="editptzsp" class="select" matchval="editptzsp" >\
									<option value="0">0</option>\
									<option value="1">1</option>\
									<option value="2">2</option>\
									<option value="3">3</option>\
									<option value="4">4</option>\
									<option value="5">5</option>\
									<option value="6">6</option>\
									<option value="7">7</option>\
						</select>\
				</span>\
				</div>\
				<div style="padding-top: 5px; text-align: center;">\
				<input type="button"  value="'+lang.confirm+'" onclick="ptzpresetsave(\''+ curise+'\');" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\
				<input type="button"  value="'+lang.del+'" onclick="ptzpredelsave(\''+ curise+'\');" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\
				<input id="ptzeditCancel" type="button" value="'+lang.cancel+'" />\
				</div>\
			</div>\
		</div>');
	$('body').prepend($allDiv).prepend($editDiv);
	$( "#PTZedit" ).draggable({
		handle: ".PTZeditHeader"
	});

	switch (parseInt($("#getptzcrulinenum").val()))
	{
		case 0:

			$("#editpreset").val(ptzcurisesubval0.getcruprenum[curise - 1]);
			$("#editptzdt").val(ptzcurisesubval0.getcrudt[curise - 1]);
			$("#editptzsp").val(ptzcurisesubval0.getcursp[curise - 1]);
			if(parseInt(ptzcurisesubval0.getcruprenum[curise - 1]) == 0)
			{
				$("#editpreset").val(1);
			}
			break;
		case 1:
			$("#editpreset").val(ptzcurisesubval1.getcruprenum[curise - 1]);
			$("#editptzdt").val(ptzcurisesubval1.getcrudt[curise - 1]);
			$("#editptzsp").val(ptzcurisesubval1.getcursp[curise - 1]);
			if(parseInt(ptzcurisesubval1.getcruprenum[curise - 1]) == 0)
			{
				$("#editpreset").val(1);
			}
			break;
		case 2:
			$("#editpreset").val(ptzcurisesubval2.getcruprenum[curise - 1]);
			$("#editptzdt").val(ptzcurisesubval2.getcrudt[curise - 1]);
			$("#editptzsp").val(ptzcurisesubval2.getcursp[curise - 1]);
			if(parseInt(ptzcurisesubval2.getcruprenum[curise - 1]) == 0)
			{
				$("#editpreset").val(1);
			}
			break;
	}

	$('#ptzeditCancel').click(function(){
		$allDiv.remove();
		$editDiv.remove();
	});
}

//删除巡航设置中的预置点
function ptzpredelsave(curise)
{
	ptzcurisesubval0copy = ptzcurisesubval0;
	ptzcurisesubval1copy = ptzcurisesubval1;
	ptzcurisesubval2copy = ptzcurisesubval2;

	var curisepreset = "#curisepreset" + curise;
	var curisesp = "#curisesp" + curise;
	var curisedt = "#curisedt" + curise;

	$(curisepreset).val('0');
	$(curisesp).val('0');
	$(curisedt).val('0');

	switch (parseInt($("#getptzcrulinenum").val()))
	{
		case 0:
			ptzcurisesubval0copy.getcruprenum[curise - 1] = '0';
			ptzcurisesubval0copy.getcrudt[curise - 1] = '0';
			ptzcurisesubval0copy.getcursp[curise - 1] = '0';
			break;
		case 1:
			ptzcurisesubval1copy.getcruprenum[curise - 1] = '0';
			ptzcurisesubval1copy.getcrudt[curise - 1] = '0';
			ptzcurisesubval1copy.getcursp[curise - 1] = '0';
			break;
		case 2:
			ptzcurisesubval2copy.getcruprenum[curise - 1] = '0';
			ptzcurisesubval2copy.getcrudt[curise - 1] = '0';
			ptzcurisesubval2copy.getcursp[curise - 1] = '0';
			break;
	}

	$allDiv.remove();
	$editDiv.remove();

}


//设置巡航设置中的预置点
function ptzpresetsave(curise)
{
	ptzcurisesubval0copy = ptzcurisesubval0;
	ptzcurisesubval1copy = ptzcurisesubval1;
	ptzcurisesubval2copy = ptzcurisesubval2;

	var curisepreset = "#curisepreset" + curise;
	var curisesp = "#curisesp" + curise;
	var curisedt = "#curisedt" + curise;

	$(curisepreset).val($("#editpreset").val());
	$(curisesp).val($("#editptzsp").val());
	$(curisedt).val($("#editptzdt").val());

	switch (parseInt($("#getptzcrulinenum").val()))
	{
		case 0:
			ptzcurisesubval0copy.getcruprenum[curise - 1] = $("#editpreset").val();
			ptzcurisesubval0copy.getcrudt[curise - 1] = $("#editptzdt").val();
			ptzcurisesubval0copy.getcursp[curise - 1] = $("#editptzsp").val();
			break;
		case 1:
			ptzcurisesubval1copy.getcruprenum[curise - 1] = $("#editpreset").val();
			ptzcurisesubval1copy.getcrudt[curise - 1] = $("#editptzdt").val();
			ptzcurisesubval1copy.getcursp[curise - 1] = $("#editptzsp").val();
			break;
		case 2:
			ptzcurisesubval2copy.getcruprenum[curise - 1] = $("#editpreset").val();
			ptzcurisesubval2copy.getcrudt[curise - 1] = $("#editptzdt").val();
			ptzcurisesubval2copy.getcursp[curise - 1] = $("#editptzsp").val();
			break;
	}

	$allDiv.remove();
	$editDiv.remove();

}

//选择预置点和巡航设置
function set_ptzpresetbtn()
{
	//$('#realTime').css('width',realtimewidth+'px');
	$("#ptzpreset").css('display','block');
	$("#ptzcurise").css('display','none');
	load_ptz_preset(selWnd);

}

function set_ptzcursiebtn()
{
	$("#ptzpreset").css('display','none');
	$("#ptzcurise").css('display','block');
	load_ptz_curise(0);
}


//获取预置点
function load_ptz_curise(crulinenum)
{
	$('#ptzcurise_tab').html("");
	var XMLHttpRequestObject = null;
	if (window.XMLHttpRequest)
	{
		XMLHttpRequestObject = new XMLHttpRequest();
	}
	else if (window.ActiveXObject)
	{
		XMLHttpRequestObject = new ActiveXObject("Microsoft.XMLHTTP");
	}
	XMLHttpRequestObject.open("GET", "../vb.htm?getptzcruch="+selWnd+"&getptzcrulinenum="+crulinenum+"&getptzcrulineen&getptzcrupreset0_15", true,loginUser,loginpsw);
	XMLHttpRequestObject.setRequestHeader("cache-control","no-cache");
	XMLHttpRequestObject.setRequestHeader("context-type","text/xml;charset=utf-8");
	XMLHttpRequestObject.setRequestHeader("Content-Type","application/x-www-form-encodeURIComponent");
	XMLHttpRequestObject.setRequestHeader("If-Modified-Since","0");
	XMLHttpRequestObject.send(null);
	XMLHttpRequestObject.onreadystatechange = function() {

		if (XMLHttpRequestObject.readyState == 4) {

			if (XMLHttpRequestObject.status == 200) {

				var str = XMLHttpRequestObject.responseText;
				var str_sub = str.split("OK ");
				var getptzcrulinenum = 0;

				for (var j = 0; j < str_sub.length; j++) {

					var str_sub_sub = str_sub[j].split("=");

					if ("getptzcrulinenum" == str_sub_sub[0] && str_sub_sub[0] != "") {
						getptzcrulinenum = str_sub_sub[1].split("\n")[0];
					}
				}
				for (var j = 0; j < str_sub.length; j++) {

					var str_sub_sub = str_sub[j].split("=");


					if ("getptzcrulineen" == str_sub_sub[0] && str_sub_sub[0] != "") {
						ptzcursieval.ptzcrulineenable[getptzcrulinenum] = str_sub_sub[1].split("\n")[0];
					}
					if ("getptzcrupreset0_15" == str_sub_sub[0] && str_sub_sub[0] != "") {

						var str_sub_sub_sub = str_sub_sub[1].split("\n")[0];
						var str_sub_sub_sub_sub = str_sub_sub_sub.split(";");

						for (var i = 0; i < str_sub_sub_sub_sub.length - 1; i++) {

							var enable = "get_cru_en"+i+":";
							var str_sub_sub_sub_sub_sub = str_sub_sub_sub_sub[i].split(enable)[1];

							enable = "get_cru_sp"+i+":";
							var str_sub_sub_sub_sub_sub_sub = str_sub_sub_sub_sub[i].split(enable)[1];

							enable = "get_cru_dt"+i+":";
							var str_sub_sub_sub_sub_sub_sub_sub = str_sub_sub_sub_sub[i].split(enable)[1];

							enable = "get_cru_pre"+i+"_num:";
							var str_sub_sub_sub_sub_sub_sub_sub_sub = str_sub_sub_sub_sub[i].split(enable)[1];

							enable = "get_cru_pre"+i+"_en:";
							var str_sub_sub_sub_sub_sub_sub_sub_sub_sub = str_sub_sub_sub_sub[i].split(enable)[1];

							switch (parseInt(crulinenum))
							{
								case 0:
									ptzcurisesubval0.getcuren[i] = str_sub_sub_sub_sub_sub.split(",")[0];
									ptzcurisesubval0.getcursp[i] = str_sub_sub_sub_sub_sub_sub.split(",")[0];
									ptzcurisesubval0.getcrudt[i] = str_sub_sub_sub_sub_sub_sub_sub.split(",")[0];
									ptzcurisesubval0.getcruprenum[i] = str_sub_sub_sub_sub_sub_sub_sub_sub.split(",")[0];
									ptzcurisesubval0.getcrepreen[i] = str_sub_sub_sub_sub_sub_sub_sub_sub_sub.split(",")[0];
									break;
								case 1:
									ptzcurisesubval1.getcuren[i] = str_sub_sub_sub_sub_sub.split(",")[0];
									ptzcurisesubval1.getcursp[i] = str_sub_sub_sub_sub_sub_sub.split(",")[0];
									ptzcurisesubval1.getcrudt[i] = str_sub_sub_sub_sub_sub_sub_sub.split(",")[0];
									ptzcurisesubval1.getcruprenum[i] = str_sub_sub_sub_sub_sub_sub_sub_sub.split(",")[0];
									ptzcurisesubval1.getcrepreen[i] = str_sub_sub_sub_sub_sub_sub_sub_sub_sub.split(",")[0];
									break;
								case 2:
									ptzcurisesubval2.getcuren[i] = str_sub_sub_sub_sub_sub.split(",")[0];
									ptzcurisesubval2.getcursp[i] = str_sub_sub_sub_sub_sub_sub.split(",")[0];
									ptzcurisesubval2.getcrudt[i] = str_sub_sub_sub_sub_sub_sub_sub.split(",")[0];
									ptzcurisesubval2.getcruprenum[i] = str_sub_sub_sub_sub_sub_sub_sub_sub.split(",")[0];
									ptzcurisesubval2.getcrepreen[i] = str_sub_sub_sub_sub_sub_sub_sub_sub_sub.split(",")[0];
									break;

							}

						}
					}
				}


				if(parseInt(crulinenum) < 3)
				{
					var num = parseInt(crulinenum);
					load_ptz_curise_16_31(num);
				}

			}

		}
	}
}


function load_ptz_curise_16_31(crulinenum)
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
	XMLHttpRequestObject.open("GET", "../vb.htm?getptzcruch="+selWnd+"&getptzcrulinenum="+crulinenum+"&getptzcrulineen&getptzcrupreset16_31", true,loginUser,loginpsw);
	XMLHttpRequestObject.setRequestHeader("cache-control","no-cache");
	XMLHttpRequestObject.setRequestHeader("context-type","text/xml;charset=utf-8");
	XMLHttpRequestObject.setRequestHeader("Content-Type","application/x-www-form-encodeURIComponent");
	XMLHttpRequestObject.setRequestHeader("If-Modified-Since","0");
	XMLHttpRequestObject.send(null);
	XMLHttpRequestObject.onreadystatechange = function() {

		if (XMLHttpRequestObject.readyState == 4) {

			if (XMLHttpRequestObject.status == 200) {

				var str = XMLHttpRequestObject.responseText;
				var str_sub = str.split("OK ");
				var getptzcruch = 0;
				for (var j = 0; j < str_sub.length; j++) {

					str_sub_sub = str_sub[j].split("=");

					if ("getptzcruch" == str_sub_sub[0] && str_sub_sub[0] != "") {
						getptzcruch = str_sub_sub[1].split("\n")[0];
					}
				}
				for (var j = 0; j < str_sub.length; j++) {

					str_sub_sub = str_sub[j].split("=");

					if ("getptzcrulineen" == str_sub_sub[0] && str_sub_sub[0] != "") {
						ptzcursieval.ptzcrulineenable[getptzcruch] = str_sub_sub[1].split("\n")[0];

					}
					if ("getptzcrupreset16_31" == str_sub_sub[0] && str_sub_sub[0] != "") {

						var str_sub_sub_sub = str_sub_sub[1].split("\n")[0];
						var str_sub_sub_sub_sub = str_sub_sub_sub.split(";");
						//alert(str_sub_sub_sub_sub);
						for (var i = 0; i < str_sub_sub_sub_sub.length - 1; i++) {

							var k = i + 16;
							var enable = "get_cru_en"+k +":";
							var str_sub_sub_sub_sub_sub = str_sub_sub_sub_sub[i].split(enable)[1];

							enable = "get_cru_sp"+k +":";
							var str_sub_sub_sub_sub_sub_sub = str_sub_sub_sub_sub[i].split(enable)[1];

							enable = "get_cru_dt"+k +":";
							var str_sub_sub_sub_sub_sub_sub_sub = str_sub_sub_sub_sub[i].split(enable)[1];


							enable = "get_cru_pre"+k +"_num:";
							var str_sub_sub_sub_sub_sub_sub_sub_sub = str_sub_sub_sub_sub[i].split(enable)[1];


							enable = "get_cru_pre"+k +"_en:";
							var str_sub_sub_sub_sub_sub_sub_sub_sub_sub = str_sub_sub_sub_sub[i].split(enable)[1];

							switch (parseInt(crulinenum))
							{
								case 0:
									ptzcurisesubval0.getcuren[i+16] = str_sub_sub_sub_sub_sub.split(",")[0];
									ptzcurisesubval0.getcursp[i+16] = str_sub_sub_sub_sub_sub_sub.split(",")[0];
									ptzcurisesubval0.getcrudt[i+16] = str_sub_sub_sub_sub_sub_sub_sub.split(",")[0];
									ptzcurisesubval0.getcruprenum[i+16] = str_sub_sub_sub_sub_sub_sub_sub_sub.split(",")[0];
									ptzcurisesubval0.getcrepreen[i+16] = str_sub_sub_sub_sub_sub_sub_sub_sub_sub.split(",")[0];
									break;
								case 1:
									ptzcurisesubval1.getcuren[i+16] = str_sub_sub_sub_sub_sub.split(",")[0];
									ptzcurisesubval1.getcursp[i+16] = str_sub_sub_sub_sub_sub_sub.split(",")[0];
									ptzcurisesubval1.getcrudt[i+16] = str_sub_sub_sub_sub_sub_sub_sub.split(",")[0];
									ptzcurisesubval1.getcruprenum[i+16] = str_sub_sub_sub_sub_sub_sub_sub_sub.split(",")[0];
									ptzcurisesubval1.getcrepreen[i+16] = str_sub_sub_sub_sub_sub_sub_sub_sub_sub.split(",")[0];
									break;
								case 2:
									ptzcurisesubval2.getcuren[i+16] = str_sub_sub_sub_sub_sub.split(",")[0];
									ptzcurisesubval2.getcursp[i+16] = str_sub_sub_sub_sub_sub_sub.split(",")[0];
									ptzcurisesubval2.getcrudt[i+16] = str_sub_sub_sub_sub_sub_sub_sub.split(",")[0];
									ptzcurisesubval2.getcruprenum[i+16] = str_sub_sub_sub_sub_sub_sub_sub_sub.split(",")[0];
									ptzcurisesubval2.getcrepreen[i+16] = str_sub_sub_sub_sub_sub_sub_sub_sub_sub.split(",")[0];
									break;

							}
						}
					}
				}

				//---------------
				crulinenum = parseInt(crulinenum) + 1;
				if(parseInt(crulinenum) < 3 )
				{
					load_ptz_curise(crulinenum);
				}
				else
				{
					if(parseInt(ptzcursieval.ptzcrulineenable[0]))
					{
						if(!$("#getptzcrulineen").is(":checked"))
							$("#getptzcrulineen").click();
					}
					else
					{
						if($("#getptzcrulineen").is(":checked"))
							$("#getptzcrulineen").click();
					}


					for(var i= 1;i <=32;i++)
					{
						var play = lang.play;
						var getcruprenum = ptzcurisesubval0.getcruprenum[parseInt(i)-1];
						var getcursp = ptzcurisesubval0.getcursp[parseInt(i)-1];
						var getcrudt = ptzcurisesubval0.getcrudt[parseInt(i)-1];
						$('#ptzcurise_tab').append('<div class="btn_ptz">\
				<input type="button" class="void_btn" id="curiseindex'+i+'"   value="'+i+'"/>\
				<input type="button" class="void_btn" id="cursisename'+i+'"   value="'+ play +''+i+'" />\
				<input type="button" class="void_btn" id="curisepreset'+i+'" value="'+getcruprenum+'"  onclick="set_ptzcurise_preset(\''+i+'\');" />\
				<input type="button" class="void_btn" id="curisesp'+i+'"  value="'+ getcursp +'"  onclick="set_ptzcurise_preset(\''+i+'\');" />\
				<input type="button" class="void_btn" id="curisedt'+i+'"  value="'+ getcrudt +'"  onclick="set_ptzcurise_preset(\''+i+'\');" /></div>');


					}

					ptzcurisesubval0copy = ptzcurisesubval0;
					ptzcurisesubval1copy = ptzcurisesubval1;
					ptzcurisesubval2copy = ptzcurisesubval2;


				}

			}

		}
	}
}

//获取预置点
function load_ptz_preset(channel)
{
	$('#preset_tab').html("");
	var XMLHttpRequestObject = null;
	if (window.XMLHttpRequest)
	{
		XMLHttpRequestObject = new XMLHttpRequest();
	}
	else if (window.ActiveXObject)
	{
		XMLHttpRequestObject = new ActiveXObject("Microsoft.XMLHTTP");
	}

	XMLHttpRequestObject.open("GET", "../vb.htm?getptzallprech="+selWnd+"&getptzallprenum&getptzallpreen", true,loginUser,loginpsw);
	XMLHttpRequestObject.setRequestHeader("cache-control","no-cache");
	XMLHttpRequestObject.setRequestHeader("context-type","text/xml;charset=utf-8");
	XMLHttpRequestObject.setRequestHeader("Content-Type","application/x-www-form-encodeURIComponent");
	XMLHttpRequestObject.setRequestHeader("If-Modified-Since","0");
	XMLHttpRequestObject.send(null);
	XMLHttpRequestObject.onreadystatechange = function() {

		if (XMLHttpRequestObject.readyState == 4) {

			if (XMLHttpRequestObject.status == 200) {


				$('#preset_tab').html('');
				for(var i= 1;i <=128;i++)
				{
					$('#preset_tab').append('<div class="btn_ptz">\
					<input type="button" class="void_btn" id="index'+i+'" value="'+i+'"   />\
					<input type="button" class="void_btn" id="preset'+i+'" value="'+lang.play+''+i+'"   />\
					<input type="button" class="set_btn" id="set_btn'+i+'" title="'+lang.play+'"  onclick="set_btn(\''+i+'\');" />\
					<input type="button" class="call_btn" id="call_btn'+i+'" title="'+lang.mainStream+'"  onclick="call_btn(\''+i+'\');" />\
					<input type="button" class="del_btn" id="del_btn'+i+'" title="'+lang.setPic+'" onclick="del_btn(\''+i+'\');" /></div>');
				}

				var str = XMLHttpRequestObject.responseText;
				//alert(str);

				var str_sub = str.split("OK getptzallpreen=")[1];
				var str_sub_sub = str_sub.split(";");

				for (var i = 0; i < str_sub_sub.length; i++) {


					var enable = "getpreset"+i+"_en:";
					var help = str_sub_sub[i].split(enable)[1];
					ptzpresetval.presetenable[i] = help;

					if(ptzpresetval.presetenable[i] == "1")
					{
						var channel = parseInt(i) + 1;
						var preset = "#preset"+channel;
						$(preset).val(channel);
					}

				}


			}

		}
	}
}

//删除预置点
function del_btn(i)
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

	XMLHttpRequestObject.open("GET", "../vb.htm?setptzallprech="+selWnd+"&setptzallprenum="+i+"&setptzallpreen=0&setptzallpreopera=0", true,loginUser,loginpsw);
	XMLHttpRequestObject.setRequestHeader("cache-control","no-cache");
	XMLHttpRequestObject.setRequestHeader("context-type","text/xml;charset=utf-8");
	XMLHttpRequestObject.setRequestHeader("Content-Type","application/x-www-form-encodeURIComponent");
	XMLHttpRequestObject.setRequestHeader("If-Modified-Since","0");
	XMLHttpRequestObject.send(null);
	XMLHttpRequestObject.onreadystatechange = function() {

		if (XMLHttpRequestObject.readyState == 4) {

			if (XMLHttpRequestObject.status == 200) {

				load_ptz_preset(selWnd);
			}

		}
	}
}

//设置预置点
function set_btn(i)
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

	XMLHttpRequestObject.open("GET", "../vb.htm?setptzallprech="+selWnd+"&setptzallprenum="+i+"&setptzallpreen=1&setptzallpreopera=0", true,loginUser,loginpsw);
	XMLHttpRequestObject.setRequestHeader("cache-control","no-cache");
	XMLHttpRequestObject.setRequestHeader("context-type","text/xml;charset=utf-8");
	XMLHttpRequestObject.setRequestHeader("Content-Type","application/x-www-form-encodeURIComponent");
	XMLHttpRequestObject.setRequestHeader("If-Modified-Since","0");
	XMLHttpRequestObject.send(null);
	XMLHttpRequestObject.onreadystatechange = function() {

		if (XMLHttpRequestObject.readyState == 4) {

			if (XMLHttpRequestObject.status == 200) {
				load_ptz_preset(selWnd);
			}

		}
	}
}

//调用预置点
function call_btn(i)
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

	XMLHttpRequestObject.open("GET", "../vb.htm?setptzallprech="+selWnd+"&setptzallprenum="+i+"&setptzallpreen=1&setptzallpreopera=1", true,loginUser,loginpsw);
	XMLHttpRequestObject.setRequestHeader("cache-control","no-cache");
	XMLHttpRequestObject.setRequestHeader("context-type","text/xml;charset=utf-8");
	XMLHttpRequestObject.setRequestHeader("Content-Type","application/x-www-form-encodeURIComponent");
	XMLHttpRequestObject.setRequestHeader("If-Modified-Since","0");
	XMLHttpRequestObject.send(null);
	XMLHttpRequestObject.onreadystatechange = function() {

		if (XMLHttpRequestObject.readyState == 4) {

			if (XMLHttpRequestObject.status == 200) {


			}

		}
	}
}


function save_ptz(channel,speed,preset,opera)
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

	XMLHttpRequestObject.open("GET", "../vb.htm?setptzchannel="+channel+"&setptzspeed="+speed+"&setptzpreset="+preset+"&setptzopera="+opera, true,loginUser,loginpsw);
	XMLHttpRequestObject.setRequestHeader("cache-control","no-cache");
	XMLHttpRequestObject.setRequestHeader("context-type","text/xml;charset=utf-8");
	XMLHttpRequestObject.setRequestHeader("Content-Type","application/x-www-form-encodeURIComponent");
	XMLHttpRequestObject.setRequestHeader("If-Modified-Since","0");
	XMLHttpRequestObject.send(null);
	XMLHttpRequestObject.onreadystatechange = function() {

		if (XMLHttpRequestObject.readyState == 4) {

			if (XMLHttpRequestObject.status == 200) {
			}

		}
	}
}

//ptz
//----------------------------------------------------------------------------------------------------------------------
//左上
function leftupdown()
{
	save_ptz(selWnd,$('#ucInputSpeed').val(),"1","9");
}

function leftupup()
{
	save_ptz(selWnd,$('#ucInputSpeed').val(),"1","10");
}

//上
function updown()
{
	save_ptz(selWnd,$('#ucInputSpeed').val(),"1","1");
}

function upup()
{
	save_ptz(selWnd,$('#ucInputSpeed').val(),"1","2");
}

//右上
function rightupdown()
{
	save_ptz(selWnd,$('#ucInputSpeed').val(),"1","11");
}

function rightupup()
{
	save_ptz(selWnd,$('#ucInputSpeed').val(),"1","12");
}

//左
function leftdown()
{
	save_ptz(selWnd,$('#ucInputSpeed').val(),"1","5");
}

function leftup()
{
	save_ptz(selWnd,$('#ucInputSpeed').val(),"1","6");
}

//右
function rightdown()
{
	save_ptz(selWnd,$('#ucInputSpeed').val(),"1","7");
}

function rightup()
{
	save_ptz(selWnd,$('#ucInputSpeed').val(),"1","8");
}

//左下
function leftdowndown()
{
	save_ptz(selWnd,$('#ucInputSpeed').val(),"1","13");
}

function leftdownup()
{
	save_ptz(selWnd,$('#ucInputSpeed').val(),"1","14");
}

//下
function downdown()
{
	save_ptz(selWnd,$('#ucInputSpeed').val(),"1","3");
}

function downup()
{
	save_ptz(selWnd,$('#ucInputSpeed').val(),"1","4");
}

//右下
function rightdowndown()
{
	save_ptz(selWnd,$('#ucInputSpeed').val(),"1","15");
}

function rightdownup()
{
	save_ptz(selWnd,$('#ucInputSpeed').val(),"1","16");
}

//变倍+
function zoomupdown()
{
	save_ptz(selWnd,$('#ucInputSpeed').val(),"1","20");
}

function zoomupup()
{
	save_ptz(selWnd,$('#ucInputSpeed').val(),"1","21");
}

//变倍-
function zoomdowndown()
{
	save_ptz(selWnd,$('#ucInputSpeed').val(),"1","22");
}

function zoomdownup()
{
	save_ptz(selWnd,$('#ucInputSpeed').val(),"1","23");
}

//聚焦+
function focusupdown()
{
	save_ptz(selWnd,$('#ucInputSpeed').val(),"1","24");
}

function focusupup()
{
	save_ptz(selWnd,$('#ucInputSpeed').val(),"1","25");
}

//聚焦-
function focusdowndown()
{
	save_ptz(selWnd,$('#ucInputSpeed').val(),"1","26");
}

function focusdownup()
{
	save_ptz(selWnd,$('#ucInputSpeed').val(),"1","27");
}

//光圈+
function irisupdown()
{
	save_ptz(selWnd,$('#ucInputSpeed').val(),"1","28");
}

function irisupup()
{
	save_ptz(selWnd,$('#ucInputSpeed').val(),"1","29");
}

//光圈-
function irisdowndown()
{
	save_ptz(selWnd,$('#ucInputSpeed').val(),"1","30");
}

function irisdownup()
{
	save_ptz(selWnd,$('#ucInputSpeed').val(),"1","31");
}

//获取选择的窗口
function getselwnd()
{
	selWnd = window.parent.plugin.getselwnd();
	//console.log(selWnd);
	if(0)
	{
		load_ptz_preset(selWnd);
	}
	setTimeout("getselwnd()", 100);
}

//----------------------------------------------------------------------------------------------------------------------

function startonechannelview(channel)
{
	var window1 = "wnd" + selWnd;
	if(!bliveview[channel])
	{
		console.log("map.get(window1)");
		console.log(map.get(window1));
		console.log(selstream[channel]);
		//如果此窗口没有视频播放
		if(parseInt(map.get(window1)) == -1)
		{
			console.log("selWnd");
			console.log(selWnd);
			map.put(window1,channel);

			window.parent.plugin.startview(ip,port,loginUser,loginpsw,String(selstream[channel]),String(channel));

			ballplay = 1;//存在播放

			bliveview[channel] = true;
			var play = "#play" + channel;
			$(play).removeClass().addClass('stop_btn');
			$(play).attr('title',lang.stop);
		}
		else//如果此窗口有视频播放
		{
			console.log("selWnd1");
			console.log(selWnd);
			window.parent.plugin.stopview(map.get(window1));
			bliveview[parseInt(map.get(window1))] = false;

			var play0 = "#play" + map.get(window1);
			$(play0).removeClass().addClass('play_btn');
			$(play0).attr('title',lang.play);
			//map.put(window1,-1);

			map.put(window1,channel);

			window.parent.plugin.startview(ip,port,loginUser,loginpsw,String(selstream[channel]),String(channel));

			bliveview[channel] = true;
			var play = "#play" + channel;
			$(play).removeClass().addClass('stop_btn');
			$(play).attr('title',lang.stop);
		}
	}
	else
	{
		//if(parseInt(map.get(window1)) == selWnd)
		//{
		window.parent.plugin.stopview(channel);
		bliveview[channel] = false;
		map.put(window1,-1);
		var play = "#play" + channel;
		$(play).removeClass().addClass('play_btn');
		$(play).attr('title',lang.play);
		//}
		//else
		//{
		//	console.log(channel);
		//	window.parent.plugin.stopview(channel);
		//	bliveview[channel] = false;
		//	map.put(window1,-1);
		//	var play0 = "#play" + channel;
		//	$(play0).removeClass().addClass('play_btn');
		//	$(play0).attr('title',lang.play);
		//
		//
		//	map.put(window1,selWnd);
		//	window.parent.plugin.startview(ip,port,loginUser,loginpsw,selstream[channel],channel);
		//
		//	bliveview[channel] = true;
		//	var play = "#play" + channel;
		//	$(play).removeClass().addClass('stop_btn');
		//	$(play).attr('title',lang.stop);
		//}

	}


}

function setstreamtype(channel)
{
	if(bliveview[channel])
	{
		if(selstream[channel] == 1)
		{
			selstream[channel] = 0;
			var stream = "#stream" + channel;
			$(stream).removeClass().addClass('streaming');
			$(stream).attr('title',lang.childStream);
		}
		else
		{
			selstream[channel] = 1;
			var stream = "#stream" + channel;
			$(stream).removeClass().addClass('stream');
			$(stream).attr('title',lang.mainStream);
		}
		window.parent.plugin.startview(ip,port,loginUser,loginpsw,String(selstream[channel]),String(channel));
	}
}

function setonechannelrecord(channel)
{
	if(!brec[channel])
	{
		var record = "#record" + channel;
		$(record).removeClass().addClass('recording');
		$(record).attr('title',lang.endRecord);
		brec[channel] = true;
	}
	else
	{
		var record = "#record" + channel;
		$(record).removeClass().addClass('recordBtn');
		$(record).attr('title',lang.starRecord);
		brec[channel] = false;
	}
	window.parent.plugin.onClickedRec(channel);

}

function setonechannelcapture(channel)
{
	window.parent.plugin.onClickedPic(channel);

}

function init(){

	window.parent.setTitle(lang.realTime);

	if(window.parent.loginFlag==false){
		setTimeout("init()", 50);
		return;
	}

	reszie();
	window.parent.window.onresize=function(){
		reszie();
	};

	window.parent.plugin.setwndchannelnum("4");
	window.parent.plugin.login(ip,port,loginUser,loginpsw);
	getselwnd();

	$("#channel1").click(function(){

		window.parent.plugin.setwndchannelnum("1");
		window.parent.plugin.setwndchannelnum("1");
	});

	$("#channel4").click(function(){

		window.parent.plugin.setwndchannelnum("4");
		window.parent.plugin.setwndchannelnum("4");
	});

	$("#channel9").click(function(){

		window.parent.plugin.setwndchannelnum("9");
		window.parent.plugin.setwndchannelnum("9");
	});

	$("#channel16").click(function(){

		window.parent.plugin.setwndchannelnum("16");
		window.parent.plugin.setwndchannelnum("16");
	});

	$("#channel25").click(function(){

		window.parent.plugin.setwndchannelnum("25");
		window.parent.plugin.setwndchannelnum("25");
	});


	$("#stream").click(function(){

		if(allselstream == 1)
		{
			allselstream = 0;
			var stream = "#stream" ;
			$(stream).removeClass().addClass('streaming');
			$(stream).attr('title',lang.childStream);
		}
		else
		{
			allselstream = 1;
			var stream = "#stream";
			$(stream).removeClass().addClass('stream');
			$(stream).attr('title',lang.mainStream);
		}
		for(var channel = 0; channel < 4; channel++)
		{
			if(bliveview[channel])
			{
				window.parent.plugin.startview(ip,port,loginUser,loginpsw,String(allselstream),String(channel));
			}
		}

	});


	$("#allplay").click(function(){

		if(!ballplay)
		{
			var allplay = "#allplay" ;
			$(allplay).removeClass().addClass('allplaying');
			$(allplay).attr('title',lang.allplay);
			window.parent.plugin.allstopview();
			ballplay = false;
		}
		else
		{
			window.parent.plugin.allstartview(ip,port,loginUser,loginpsw,String(allselstream));
			var allplay = "#allplay" ;
			$(allplay).removeClass().addClass('allplay');
			$(allplay).attr('title',lang.allstop);
			ballplay = true;
		}
	});

	$("#allrec").click(function(){

		if(!ballrec)
		{
			var allplay = "#allrec" ;
			$(allplay).removeClass().addClass('allrecing');
			$(allplay).attr('title',lang.allplay);
			window.parent.plugin.allstartrec();
			ballrec = false;
		}
		else
		{
			window.parent.plugin.allstartrec();
			var allplay = "#allrec" ;
			$(allplay).removeClass().addClass('allrec');
			$(allplay).attr('title',lang.allstop);
			ballrec = true;
		}
	});

	//$('#fdBtn').click(function(){
	//	var $this=$(this);
	//	if($this.attr('class')=='fd'){
	//		window.parent.plugin().zoomVideo();
	//		$this.removeClass().addClass('fding');
	//		$('#fdBtn').attr('title',lang.cancel);
	//	}else{
	//		window.parent.plugin().zoomVideoNull();
	//		$this.removeClass().addClass('fd');
	//		$('#fdBtn').attr('title',lang.fd);
	//	}
	//});
	//
	//var flag = 0;
	//$('#recordBtn').click(function(){
	//	var $this=$(this);
	//	//window.parent.plugin().setViewPosition(0,0,$('#realTime').width(),$('#realTime').height());
	//	flag=window.parent.plugin().onClickedRec();
	//	if(flag==true){
	//		$this.removeClass().addClass('recording');
	//		window.parent.recorFlag=true;
	//		$('#recordBtn').attr('title',lang.endRecord);
	//	}else{
	//		$this.removeClass().addClass('recordBtn');
	//		window.parent.recorFlag=false;
	//		$('#recordBtn').attr('title',lang.starRecord);
	//	}
	//});
	//
	//$('#play_stop').click(function(){
	//	var $this=$(this);
	//	if($this.attr('class')=='stop_btn'){
	//		//先关闭录像
	//		if(window.parent.recorFlag)
	//		{
	//			$('#recordBtn').removeClass().addClass('recordBtn');
	//			$('#recordBtn').attr('title',lang.starRecord);
	//			window.parent.plugin().onClickedRec();
	//		}
	//		if(window.parent.soundFlag==1){
	//			window.parent.soundFlag = window.parent.plugin().enableAudio();
	//
	//		}
	//		$('#soundOpen').attr('checked',false);
	//
	//		window.parent.plugin().stopview();
	//		$this.removeClass().addClass('play_btn');
	//		$('#play_stop').attr('title',lang.play);
	//	}else{
	//		window.parent.startview($('input[name="streamType"]:checked').val());
	//		$this.removeClass().addClass('stop_btn');
	//		$('#play_stop').attr('title',lang.stop);
	//	}
	//});
	//
	//
	//$('input[name="streamType"]').click(function(){
	//	if(window.parent.recorFlag)
	//	{
	//		window.parent.plugin().onClickedRec();
	//	}
	//	if(window.parent.soundFlag==1){
	//		window.parent.soundFlag = window.parent.plugin().enableAudio();
	//
	//	}
	//	$('#soundOpen').attr('checked',false);
	//	window.parent.startview($('input[name="streamType"]:checked').val());
	//	window.parent.streamsel = String($('input[name="streamType"]:checked').val());
	//	if(window.parent.soundFlag==1){
	//		window.parent.plugin().enableAudio();
	//	}
	//	$('#play_stop').removeClass().addClass('stop_btn');
	//	$('#recordBtn').removeClass().addClass('recordBtn');
	//	$('#play_stop').attr('title',lang.stop);
	//	$('#recordBtn').attr('title',lang.starRecord);
	//
	//});
	//reszie();

}

function reszie(){
	var realtimewidth = document.body.clientWidth - 400;
	$('#realTime').css('width',realtimewidth+'px');
	$('#btn_panel').css('width',realtimewidth+'px')
	var $plugin=$('#realTime');


	window.parent.setPlugin($plugin.offset().left,$plugin.offset().top,$plugin.width(),$plugin.height());
	window.parent.plugin.setwndchannelnum("9");
	window.parent.plugin.setwndchannelnum("9");
}



