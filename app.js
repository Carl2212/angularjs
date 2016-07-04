/**
 * Created by wxh on 2016/4/25.
 */
var cn = angular.module('common',['ngRoute']);
//_______模板引擎路由$routeProvider_______
cn.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/',{templateUrl:'view/index.html',controller:cn.indexCtrl}).
        when('/products/',{templateUrl:"view/product.html",controller:cn.productCtrl}).
        when('/products/:pagename',{templateUrl:"view/product/homenav.html",controller:cn.homenavCtrl}).
        when('/products/:prevpage/:pagename',{templateUrl:"view/product/thirdnav.html",controller:cn.thirdnavCtrl}).
        when('/products/:secondpage/:prevpage/:pagename',{templateUrl:"view/product/productlist.html",controller:cn.productlistCtrl}).
        when('/products/:firstpage/:secondpage/:prevpage/:pronum',{templateUrl:"view/product/productdetail.html",controller:cn.productdetailCtrl}).

        when('/case_studies/',{templateUrl:"view/nav/sitenav.html",controller:cn.sitenavCtrl}).
        when('/case_studies/:pagename',{templateUrl:"view/casestudies.html",controller:cn.casestudiesCtrl}).
        when('/case_studies/:prevpage/:pagenum',{templateUrl:"view/casestudies/main.html",controller:cn.casemainCtrl}).

        when('/wisenet_lite/',{templateUrl:"view/nav/wisenetnav.html",controller:cn.sitenavCtrl}).
        when('/wisenet_lite/:pagename',{templateUrl:"view/wisenetlite.html",controller:cn.wisenetliteCtrl}).

        when('/tools/',{templateUrl:"view/nav/toolsnav.html",controller:cn.sitenavCtrl}).
        when('/tools/:pagename',{templateUrl:"view/tools.html",controller:cn.toolsCtrl}).

        when('/training/',{templateUrl:"view/nav/trainingnav.html",controller:cn.sitenavCtrl}).
        when('/training/:pagename',{templateUrl:"view/tools.html",controller:cn.toolsCtrl}).

        when('/sales/',{templateUrl:"view/nav/salesnav.html",controller:cn.sitenavCtrl}).
        when('/sales/north_america_sales_region',{templateUrl:"view/sales/north_america_sales_region.html",controller:cn.salesmapCtrl}).
        when('/sales/manufacturer_representatives',{templateUrl:"view/sales/manufacturer_representatives.html",controller:cn.salesmapCtrl}).
        when('/sales/samsung_strategic_distributors',{templateUrl:"view/sales/samsung_strategic_distributors.html",controller:cn.salesmapCtrl}).
        when('/sales/minimum_advertised_price__map__policy',{templateUrl:"view/sales/minimum.html",controller: cn.minimumCtrl}).

        when('/support/',{templateUrl:"view/nav/supportnav.html",controller:cn.sitenavCtrl}).
        when('/support/customer_service',{templateUrl:"view/support/main.html",controller: cn.supportmainCtrl}).
        when('/support/technical_support',{templateUrl:"view/support/main.html",controller: cn.supportmainCtrl}).
        when('/support/warranty_policy',{templateUrl:"view/support/warranty_policy.html",controller:cn.minimumCtrl}).
        when('/support/repair_form',{templateUrl:"view/support/repair_form.html",controller: cn.minimumCtrl}).

        when('/company/',{templateUrl:"view/nav/company.html",controller:cn.sitenavCtrl}).
        when('/company/about',{templateUrl:"view/company/main.html",controller: cn.companymainCtrl}).
        when('/company/press_room/:pagename',{templateUrl:"view/company/main.html",controller: cn.companymainCtrl}).
        when('/company/press_room/',{templateUrl:"view/company/pressroom.html",controller: cn.pressroomCtrl}).
        when('/company/trade_shows___events/',{templateUrl:"view/company/trade_shows.html",controller: cn.tradeshowsCtrl}).
        when('/site_map/',{templateUrl:"view/sitemap.html",controller: cn.sitepageCtrl}).
    otherwise({redirectTo:"/"});
}]);

cn.factory("pathservice",function(){
    function pop_repeat(attr) {
        var out_attr = [];
        var json = {};
        for(var i = 0 ; i< attr.length; i++) {
            if(attr[i] && !json[attr[i]]) {
                out_attr.push(attr[i]);
                json[attr[i]] = 1;
            }
        }
        return out_attr;
    }
    return {
        path : function(p) {
            var link = p || window.location.hash;
            link  = link.replace(/\s|\#/g,"");
            var items = link.split("/");
            items = pop_repeat(items);
            return items;
        }
    };
});
//_______站点导航$sitemap控制器_______
cn.controller("sitemap",function($scope,$http) {
    $http.get('/source/json/sitemap.json',{cache:true}).success(function(res){
        $scope.sites = res[0].site;
        $scope.outlink = res[0].outlink;
    });
});
cn.controller("titleCtrl",function($scope,pathservice){
    var items = pathservice.path();
    param1 = items[items.length - 1] || 'index';
    param2 = items[items.length - 2] || 'camera';
    //列出后两级
    $scope.title = param1.toUpperCase().replace("_"," ")+" | "+param2.toUpperCase().replace("_"," ");
});
//_______linkbox_ctrl控制器_______
cn.controller('linkbox_ctrl',["$scope",function($scope){
    $scope.catalog={
        "title":"2015 Sales Catalog",
        "img":"/source/img/catalog.ashx",
        "brief":"See our security products in action.",
        "detail":"Samsung Techwin’s online catalog is your source for professional video surveillance systems. When you try our products you will experience the difference that these technologies provide.",
        "btn":"LEARN MORE>>",
        "href":"http://www.hanwhatechwinamerica.com/SAMSUNG/upload/Product_Specifications/2016-Sales-Catalog--web.pdf",
    };
    $scope.catalog16={
        "title":"2016 Sales Catalog",
        "img":"/source/img/2016-sales-catalog-widge.ashx",
        "brief":"See our security products in action.",
        "detail":"Samsung Techwin’s online catalog is your source for professional video surveillance systems. When you try our products you will experience the difference that these technologies provide.",
        "btn":"LEARN MORE>>",
        "href":"http://www.hanwhatechwinamerica.com/SAMSUNG/upload/Product_Specifications/2016-Sales-Catalog--web.pdf",
    };
    $scope.contact={
        "title":"Contact Us",
        "img":"/source/img/contact.ashx",
        "brief":"Need More Help?",
        "detail":"We strive to provide the best customer support in the industry. Please contact us if you have any questions about our products, need technical assistance or customer service support by calling us",
        "btn":"CONTACT US>>",
        "href":"/#/support/customer_service",
    };
    $scope.events={
        "title":"Trade Shows & Events",
        "img":"/source/img/tradeshow.ashx",
        "brief":"Calendar.",
        "detail":"Learn more about our professional video security solutions and interact with our representatives by visiting our various tradeshows and events organized all around the year.",
        "btn":"LEARN MORE>>",
        "href":"/#/company/trade_shows___events/",
    };
    $scope.youtube={
        "title":"Samsung Techwin YouTube Channel",
        "img":"/source/img/yout-tube-widget.ashx",
        "brief":"Explore our video library.",
        "detail":"Find our feature videos, online training, and new product releases.",
        "btn":"LEARN MORE>>",
        "href":"https://www.youtube.com/user/STWSecuritySolution",
    };
    $scope.training={
        "title":"Samsung Training",
        "img":"/source/img/Trainin_Widget.ashx",
        "brief":"Samsung IP Institute, Technology Showcases, Webinars and Videos",
        "detail":"Samsung training is targeted to any individual wanting to learn more about our product line.",
        "btn":"LEARN MORE>>",
        "href":"/#/training",
    };
}]);
//_______link-box组件纵向$expanderzdist_______
cn.directive("expanderzdist",function(){
    return {
        scope : {expander:'=expander'},
        restrict : 'E',
        template :  '<li>'+
        '<a class="z-box-img" href="{{expander.href}}"><img src="{{expander.img}}"></a>'+
        '<a class="link-og link-b" href="{{expander.href}}">{{expander.title}}</a>'+
        '<a  class="btn"href="{{expander.href}}">{{expander.btn}}</a>'+
        '</li>',
        replace : true,
        transclude: true,
    };
});
//_______link-box组件横向$expanderhdist_______
cn.directive("expanderhdist",function(){
    return {
        scope : {expander:'=expander'},
        restrict : 'E',
        template : '<li class="h-box">'+
        '<span class="h-box-img">'+
        '<a href="{{expander.href}}"><img src="{{expander.img}}"></a>'+
        '</span>'+
        '<span class="h-box-txt">'+
        '<a class="link-og" href="{{expander.href}}">{{expander.title}}</a>'+
        '<p class="brief">{{expander.brief}}</p>'+
        '<p class="detail">{{expander.detail}}</p>'+
        '<a href="{{expander.href}}" class="btn">{{expander.btn}}</a>'+
        '</span>' +
        '</li>',
        replace : true,
        transclude: true,
    };
});
//_______$indexCtrl控制器_______
cn.controller("indexCtrl",function($scope,jQuery) {
    var $j;
    if (typeof jQuery != "undefined") {
        $j = jQuery.noConflict();
    }
    if ($j != undefined) {
        $j(document).ready(function () {
            $("#slider-box").tinycarousel({ interval: true });
        });
    }
});
//_______$productCtrl控制器_______
cn.controller("productCtrl",function($scope,$http) {
    $http.get('/source/json/sitemap.json',{cache:true}).success(function(res){
        $scope.path = window.location.hash;
        $scope.products = res[0].products;
        $scope.maintxt = res[0].main_content.products;
    });
});
//_______$homenavCtrl控制器_______
cn.controller("homenavCtrl",function($scope,$http) {
    $http.get('/source/json/sitemap.json',{cache:true}).success(function(res){
        var reg = /\s|-/g;
        var path = window.location.hash;
        var item = path.substring(path.lastIndexOf("/")+1);
        $scope.itemmaps = res[0][item];
        $scope.maintxt = res[0].main_content;
        $scope.path = path;
        $scope.item = item;
    });
});
//_______字符串转化过滤器$titlefilter_______
cn.filter("titlefilter",function(){
    return function(val){
        //修改
        var reg = /\s|\(|\)|\-|\&|\/|\+|\./g;
        return val.toLowerCase().replace(reg,"_");
        //return encodeURI(val);
    }
});
cn.filter("getimgfilter",function(){
    return function(img){
        //修改
        console.log(img);
        if(angular.isArray(img)) {
            var reg = /(b_img)|(s_img)|(p_img)]/g;
            return img[0].replace(reg,"p_img");
        }else if(angular.isString(img)) {
            return img;
        }else{
            return "/source/img/no_img.png";
        }
    }
});
//_______目录转化过滤器$pathfilter_______
cn.filter("pathfilter",function(){
    return function(val,param1,param2){
        //修改
        var reg = /\s|\(|\)|\-|\&|\/|\"|\./g;
        val = val.toLowerCase().replace(reg,"_");
        if(param2 == undefined) {
            var items = param1.split("/");
            param1 = items[items.length - 3].substr(0,2);
            param2 = items[items.length - 2].substr(0,2);
        }else{
            param1 = param1.toLowerCase().replace(reg,"_").substr(0,2);
            param2 = param2.toLowerCase().replace(reg,"_").substr(0,2);
        }
        return param1+"_"+param2+"_"+val;
    }
});
//_______字符串转化过滤器$imgfilter size = 0 为普通图 1位大图 2为小图_______
cn.filter("imgfilter",function(){
    return function(val,size){
        var reg = /(b_img)|(s_img)|(p_img)/g;
        if(size == 1) {
            return val.replace(reg,"b_img");
        }else if(size == 2){
            return val.replace(reg,"s_img");
        }else{
            return val.replace(reg,"p_img");
        }
    }
});
//_______$thirdnavCtrl控制器_______
cn.controller("thirdnavCtrl",function($scope,$http) {
    $http.get('/source/json/sitemap.json',{cache:true}).success(function(res){
        $scope.maintxt = res[0].main_content;
        var path = window.location.hash;
        var items = path.split("/");
        var item = items[items.length-1];//最后一项为当前页面
        var parent = items[items.length-2];//父页面
        $scope.itemmaps = res[0][parent][item];
        $scope.path = path;
        $scope.parent = parent;
        $scope.item = item;

    });
});
//_______$productlistCtrl控制器_______
cn.controller("productlistCtrl",function($scope,$http,$routeParams) {
    $http.get('/source/json/sitemap.json',{cache:true}).success(function(res){
        $scope.maintxt = res[0].main_content;
        //假如没有第二等级下一个分类则跳转到详情页
        var maintxt = $scope.maintxt[$routeParams.prevpage];
        if(maintxt && maintxt.no_next_nav) {
            window.location.href= window.location.href+'/'+$routeParams.pagename;
        }
        var path = window.location.hash;
        var items = path.split("/");
        var item = items[items.length-1];//最后一项为当前页面
        var parent = items[items.length-2];//父页面
        var parents = items[items.length-3];
        console.log($scope.maintxt[item]);
        console.log(item,parent,parents);
        $scope.product = res[0][item];
        $scope.itemmaps = res[0][parents][parent] || res[0][parent][item];
        console.log(res[0][parents][parent]);
        $scope.item = item;
        $scope.path = path;
    });
});
//_______$productdetailCtrl控制器_______
cn.controller("productdetailCtrl",function($scope,$http) {
    $http.get('/source/json/sitemap.json',{cache:true}).success(function(res){
        var items = (window.location.hash).split("/");

        var item = items[items.length-1];//最后一项为当前页面
        var parent = items[items.length-2];//父页面
        $scope.maintxt = res[0].main_content;
        if(item == parent) {//说明是跳级进入产品详情页，数据查询方式不同
            $scope.product = $scope.maintxt[item];
        }else{
            $scope.product = res[0][parent][item];
        }
        $scope.itemmaps = res[0][items[items.length-4]][items[items.length-3]];
        $scope.switch = 'Overview';
        $scope.productid = 0;
        $scope.ahover = function() {
            $scope.productid = $(this)[0].$index;
        };
        $scope.tab_switch = function() {
            $scope.switch = $(this)[0].elem;
            $(".tab-title li").each(function(){
                if($(this).children("a").text() == $scope.switch) {
                    $(this).addClass('selected');
                }else{
                    $(this).removeClass('selected');
                }
            });
        };
        $scope.items = items;
        $scope.item = item;
    });
});

//_______字符串转html过滤器$trusttoHtml________
cn.filter('trusttoHtml', ['$sce',function($sce) {
    return function(val) {
        return $sce.trustAsHtml(val);
    };
}]);
//_______$sitenavCtrl控制器________
cn.controller("sitenavCtrl",function($scope,$http) {
    $http.get('/source/json/sitemap.json',{cache:true}).success(function(res){
        var path = window.location.hash;
        var items = path.split("/");
        var item = items[items.length -2];
        var parent = 'site';
        $scope.itemmaps = res[0][parent][item].smap;
        $scope.maintxt = res[0].main_content;
        $scope.path = path;
        $scope.item = item;
    });
});
//_______$casestudiesCtrl控制器________
cn.controller("casestudiesCtrl",function($scope,$http) {
    $http.get('/source/json/sitemap.json',{cache:true}).success(function(res){
        var path = window.location.hash;
        var items = path.split("/");
        var item = items[items.length -1];
        $scope.itemmaps = res[0][item];
        $scope.maintxt = res[0].main_content;
        $scope.path = path;
        $scope.item = item;
    });
});
cn.controller("pressroomCtrl",function($scope,$http) {
    $http.get('/source/json/sitemap.json',{cache:true}).success(function(res){
        var path = window.location.hash;
        var items = path.split("/");
        var item = items[items.length -2];
        $scope.itemmaps = res[0][item];
        $scope.maintxt = res[0].main_content[item];
        $scope.path = path;
        $scope.item = item;
    });
});

//_______$casemainCtrl下级控制器________
cn.controller("casemainCtrl",function($scope,$http) {
    $http.get('/source/json/sitemap.json',{cache:true}).success(function(res){
        var path = window.location.hash;
        var items = path.split("/");
        var item = items[items.length -1];
        var parent = items[items.length -2];
        $scope.itemmaps = res[0][parent][item];
        $scope.path = path.substr(0,path.lastIndexOf("/"));
        $scope.item = item;
        $scope.maintxt = res[0].main_content;
        $scope.parent = parent;
    });
});
//_______$casemainCtrl下级控制器________
cn.controller("companymainCtrl",function($scope,$http) {
    $http.get('/source/json/sitemap.json',{cache:true}).success(function(res){
        var path = window.location.hash;
        var items = path.split("/");
        var item = items[items.length -1];
        if(items.length > 3) {
            var parent = items[items.length -2];
            $scope.itemmaps = res[0][parent][item.replace("pr_","")];
        }else{
            $scope.itemmaps = res[0].main_content[item];
        }
        $scope.maintxt = res[0].main_content;
        $scope.path = path;
        $scope.item = item;
    });
});
//_______$mainessay文章模板________
cn.directive("mainessay",function(){
    return {
        restrict : 'E',
        link : function(scope,element,attrs){
            attrs.$observe("templatenum",function(v){
                scope.contentUrl = '/view/' + v + '.html';
            });
        },
        template :  '<div ng-include="contentUrl"></div>',

    };
});
//_______但前目录展示组件$pathlist________
cn.directive("pathlist",["pathservice",function(pathservice){
    return {
        restrict : 'E',
        link : function(scope){
            scope.$watch("maintxt",function(txt){
                var items = pathservice.path();
                var path = '';
                scope.items = [];
                scope.items[0] ={"name":"Home","path":''};
                for(var i = 0 ; i< items.length ;i++){
                    if(items[i] != "" && items[i] !="#" && items[i] != undefined){
                        path += items[i]+'/';
                        console.log(txt,items[i]);
                        scope.items.push({"name":txt[items[i]].name,"path":path});

                    }
                }
            },true);
        },
        template :  '<ul class="pathlist"><li ng-repeat="v in items"><a href="/#/{{v.path}}">{{v.name}}</a>»</li></ul>',
    };
}]);
//_______$wisenetliteCtrl控制器________
cn.controller("wisenetliteCtrl",function($scope,$http) {
    $http.get('/source/json/sitemap.json',{cache:true}).success(function(res){
        var path = window.location.hash;
        var items = path.split("/");
        var item = items[items.length -1];
        var itemcontent = res[0][item];
        var itemmaps = [];
        for(var i = 0 ; i < itemcontent.length; i++) {
            var content = itemcontent[i].split("/");
            var root = [];
            for(var j = 0 ;j < content.length ; j++) {
                if(j == 0){
                    console.log(content[j],content);
                    root = res[0][content[j]];
                }else{
                    itemmaps[i] = root[content[j]];
                }
            }
        }
        $scope.itemmaps = itemmaps;
        $scope.linkpath ="products/security_cameras/ip_cameras/se_ip_wisenet_lite";
        $scope.maintxt = res[0].main_content;
        $scope.path = path;
        $scope.item = item;
    });
});
cn.controller("tradeshowsCtrl",function($scope,$http) {
    $http.get('/source/json/sitemap.json',{cache:true}).success(function(res){
        var path = window.location.hash;
        var items = path.split("/");
        var item = items[items.length -2];
        $scope.maintxt = res[0].main_content[item];
        var date = new Date;
        $scope.month = '0'+(date.getMonth()+1);
        $scope.year = date.getFullYear().toString();
        $scope.itemsdata = res[0][item];
        $scope.itemmaps = res[0][item][$scope.year+'-'+$scope.month];
        $scope.path = path;
        $scope.item = item;
    });
    $scope.timechange = function(y){
        $scope.itemmaps = $scope.itemsdata[$scope.year+'-'+$scope.month];
    };
});

//_______$thirdnavCtrl控制器_______
cn.controller("toolsCtrl",function($scope,$http) {
    $http.get('/source/json/sitemap.json',{cache:true}).success(function(res){
        var path = window.location.hash;
        var items = path.split("/");
        var item = items[items.length-1];//最后一项为当前页面
        $scope.maintxt = res[0].main_content;
        $scope.itemmaps = res[0].main_content[item];
        $scope.path = path;
        $scope.item = item;

    });
});
//_______$salesmapCtrl控制器_______
cn.controller("salesmapCtrl",function($scope,$http) {
    $http.get('/source/json/sitemap.json',{cache:true}).success(function(res){
        var path = window.location.hash;
        var items = path.split("/");
        var item = items[items.length-1];//最后一项为当前页面
        $scope.maintxt = res[0].main_content;
        $scope.itemmaps = res[0].main_content[item];

        $scope.path = path;
        $scope.item = item;

    });
});

//_______$scorllbarmodule滚动模块_______
cn.directive("scorllbarmodule",function(){
    return {
        restrict : 'E',
        templateUrl : "/view/scrollbar.html",
        replace : true,
        transclude: true,
        link : function(scope,element,attrs){
            var $jq;
            if (typeof jQuery != "undefined") {
                $jq = jQuery.noConflict();
            }
            if ($jq != undefined) {
                setTimeout(function(){
                    $jq(element).tinyscrollbar({ thumbSize: 58 });
                },5);
            }
        }
    };
});
//_______$scorllbarmodule滚动模块_______
cn.directive("ngSlider",function(){
    return {
        restrict : 'A',
        link : function(scope,element,attrs){
            var $jq;
            if (typeof jQuery != "undefined") {
                $jq = jQuery.noConflict();
            }
            if ($jq != undefined) {
                $jq('#slider-box').cycle({
                    fx: 'scrollHorz',
                    speed: 'fast',
                    timeout: 3000,
                    slideExpr: 'li',
                    pause: 1,
                    speed: 3000
                });

            }
        }
    };
});
//_______$scorllbarmodule滚动模块_______
cn.directive("ngSliderbutton",function(){
    return {
        restrict : 'A',
        link : function(scope,element,attrs){
            var $jq;
            if (typeof jQuery != "undefined") {
                $jq = jQuery.noConflict();
            }
            if ($jq != undefined) {
                $jq('#slider_pro').tinycarousel({ display: 1 });
            }
        }
    };
});
cn.controller("companyaboutCtrl",function($scope,$http) {
    $http.get('/source/json/sitemap.json',{cache:true}).success(function(res){
        var path = window.location.hash;
        var items = path.split("/");
        var item = items[items.length-1];//最后一项为当前页面
        $scope.maintxt = res[0].main_content;
        $scope.itemmaps = res[0].main_content[item];
        $scope.path = path;
        $scope.item = item;
    });
});
cn.controller("minimumCtrl",function($scope,$http) {
    $http.get('/source/json/sitemap.json',{cache:true}).success(function(res){
        $scope.maintxt = res[0].main_content;
        var path = window.location.hash;
        $scope.path = path;
        var $jq;
        if (typeof jQuery != "undefined") {
            $jq = jQuery.noConflict();
        }
        if ($jq != undefined) {
            $jq("#scrollbar1").tinyscrollbar({ thumbSize: 58 });
        }
    });

});
cn.controller("sitepageCtrl",function($scope,$http) {
    $http.get('/source/json/sitemap.json',{cache:true}).success(function(res){
        var path = window.location.hash;
        var items = path.split("/");
        var item = items[items.length-1];//最后一项为当前页面
        $scope.maintxt = res[0].main_content;
        var itemmaps = res[0].site;
        $scope.path = path;
        $scope.item = item;
    });

});