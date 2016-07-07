var path = '/source/img/product/switches/ethernet/';
var json = {};
json.map = $.trim($(".product-name h2").text());
var more_img = $(".more-views li");
json.img=[];
var i = 0;
more_img.each(function(){
    if(i == 0) {
        json.img.push(path+'s_img/'+json.map+'.ashx');
    }else{
        json.img.push(path+'s_img/'+json.map+i+'.ashx');
    }
    i++;
});
var reg = /\s|\(|\)|\-|\&|\//g;
var link_name = json.map.toLowerCase().replace(reg,"_");
json.brief = $.trim($(".std").text());
json.detail = $.trim($(".ContentContainer").text());
var tab = $("div[id^=tabs]");
json.element={};
tab.each(function(){
    var element = $.trim($(this).children('h2').text());
    var text = '';
    if(element !=''){
        if(element == 'Overview') {
            var title = $.trim($(this).children('p').eq(0).text());
            $(this).children('h2').remove();

            var p = $.trim($(this).html());
            text += p;
        }else if(element !== 'Accessories List'){
            var a = $.trim($(this).children("a").text());
            var suffix = a.substr(-3);
            text += "<a href='/scource/"+suffix+"/"+a+"'>"+a+"</a>";
        }else{
            text="<div class='in-div'><ul>";
            var li = $(".divRepeatviewpoert");
            li.each(function(){
                var img = $(this).find(".prd-img img").attr("src");
                console.log(img);
                var pimg = img.split("/");
                var img_name = pimg[pimg.length-1];
                var title = $.trim($(this).find('.prd-title a').text());
                var desc = $.trim($(this).find('.prd-description span').text());
                text +="<li><span class='in-scroll'><img src='"+path+"accesslist/"+img_name+"'>"+title+"</span><span class='in-scroll'>"+desc+"<a href='#'>read more...</a></span></li>";
            });
            text += "</ul></div>";
        }
        json.element[element] = text;
    }

});
var out_data={};
out_data[link_name] = json;
console.log(JSON.stringify(out_data));
/***
 * "snb_j_6010a":{
      "map":"SNB-J-6010",
      "new" : true,
      "brief" : "2MP 4.6mm Remote Head Camera",
      "detail" : "",
      "img" : [
        "/source/img/product/ipcamera/box/s_img/SNB-6010A.ashx","/source/img/product/ipcamera/box/s_img/SNB-6010A1.ashx","/source/img/product/ipcamera/box/s_img/SNB-6010A2.ashx","/source/img/product/ipcamera/box/s_img/SNB-6010A3.ashx"
      ],
      "element" : {
        "Overview" :"<p>Key Features:</p><ul><li>Designed for easy installation</li><li>Fits most standard door frames</li><li>Durable aluminum construction</li><li>Curved surface with 180º HFOV camera adjustment</li><li>Available in black </li><li>12VDC and POE</li><li>2MP 1080P camera installed</li><li>Max (1,920 x 1,080) resolution at 30 FPS</li><li>H.264, MJPEG dual codec</li><li>WDR (120dB), Defog</li><li>Advanced motion detection, VA</li><li>Micro SD/SDHC/SDXC memory slot</li></ul>",
        "Specifications":"<a href='/scource/pdf/SNB-J-6010-DoorJamb_Specifcations.pdf'>SNB-J-6010-DoorJamb_Specifcations.pdf</a>"
      }
    }
 */

//    function del_ff(elem) {
//    var elem_child = elem.childNodes;
//    for(var i = 0 ; i< elem_child.length ; i++) {
//        if(elem_child[i].nodeName == "#text" && !/\s/.test(elem_child.nodeValue)){
//            elem.removeChild(elem_child);
//        }
//    }
//}
