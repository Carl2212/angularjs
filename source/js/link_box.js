/*简单组件——外链框组*/
(function(window,undefined){
    function link_box(){
        var dist = true;//true为横向，false纵向
        var type_list = ['catalog'];//外链框组的类型数组
        //组件内容
        var  link_content = {
            "catalog":{
                "title":"2015 Sales Catalog",
                "brief":"See our security products in action.",
                "detail":"Samsung Techwin’s online catalog is your source for professional video surveillance systems. When you try our products you will experience the difference that these technologies provide.",
                "btn":"LEARN MORE>>",
                "link":"#",
            },
            "contact":{
                "title":"Contact Us",
                "brief":"Need More Help?",
                "detail":"We strive to provide the best customer support in the industry. Please contact us if you have any questions about our products, need technical assistance or customer service support by calling us",
                "btn":"CONTACT US>>",
                "link":"#",
            },
            "events":{
                "title":"Trade Shows & Events",
                "brief":"Calendar.",
                "detail":"Learn more about our professional video security solutions and interact with our representatives by visiting our various tradeshows and events organized all around the year.",
                "btn":"LEARN MORE>>",
                "link":"#",
            }
        };
        var dom_h_dist='<li class="h-box"> <span class="h-box-img"> <a link="%link"><img src="%img"> </a> </span> <span class="h-box-txt"> <a class="link-og" link="%link">%title</a> <p class="brief">%brief</p> <p class="detail"> %detail</p> <a link="#" class="btn">%btn</a> </span> </li>';
        var dom_z_dist = '<li> <a class="z-box-img" link="%link"><img src="%img"></a> <a class="link-og link-b" link="%link">%title</a> <a link="#" class="btn">%btn</a> </li>';
        return function(params) {
            dist = params.dist;
            type_list = params.type_list.split(",");
            var box_txt,box_class;
            for(var i = 0 ;i < type_list.length ; i++) {
                var type = type_list[i];
                var content= link_content[type];
                if(dist) {
                    box_txt += strreplace(dom_h_dist,["%link","%title","%brief","%detail","%btn"],[content.link,content.title,content.brief,content.detail,content.btn]);
                    box_class ="link-box h-dist";
                }else{
                    box_txt += strreplace(dom_h_dist,["%link","%title","%btn"],[content.link,content.title,content.btn]);
                    box_class ="link-box z-dist";
                }
            }
            box_txt = "<ul class='"+box_class+"'>%s</ul>".replace("%s",box_txt);
            console.log(box_txt);
        };
    }
    function strreplace(replaced_txt,params , replace) {
        for(var i = 0 ; i < params.length ; i++){
            replaced_txt = replaced_txt.replace(params[i],replace[i]);
        }
        console.log(replaced_txt);
        return replaced_txt;
    }
    window.link_box = link_box();
})(window);