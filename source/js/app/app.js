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
        when('/wisenet_lite/',{templateUrl:"view/nav/wisenetnav.html",controller:cn.sitenavCtrl}).
        when('/tools/',{templateUrl:"view/nav/toolsnav.html",controller:cn.sitenavCtrl}).
        when('/training/',{templateUrl:"view/nav/trainingnav.html",controller:cn.sitenavCtrl}).
        when('/sales/',{templateUrl:"view/nav/salesnav.html",controller:cn.sitenavCtrl}).
        when('/sales/north_america_sales_region',{templateUrl:"view/sales/north_america_sales_region.html",controller:cn.salesmapCtrl}).
        when('/sales/manufacturer_representatives',{templateUrl:"view/sales/manufacturer_representatives.html",controller:cn.salesmapCtrl}).
        when('/sales/samsung_strategic_distributors',{templateUrl:"view/sales/samsung_strategic_distributors.html",controller:cn.salesmapCtrl}).
        when('/support/',{templateUrl:"view/nav/supportnav.html",controller:cn.sitenavCtrl}).

        when('/tools/:pagename',{templateUrl:"view/tools.html",controller:cn.toolsCtrl}).
        when('/training/:pagename',{templateUrl:"view/tools.html",controller:cn.toolsCtrl}).
        when('/case_studies/:pagename',{templateUrl:"view/casestudies.html",controller:cn.casestudiesCtrl}).
        when('/case_studies/:prevpage/:pagenum',{templateUrl:"view/casestudies/main.html",controller:cn.casemainCtrl}).
        when('/wisenet_lite/:pagename',{templateUrl:"view/wisenetlite.html",controller:cn.wisenetliteCtrl}).
    otherwise({redirectTo:"/"});
}]);
//_______站点导航$sitemap控制器_______
cn.controller("sitemap",function($scope,$http) {
    $http.get('/source/json/sitemap.json').success(function(res){
        $scope.sites = res[0].site;
    });
});
//_______linkbox_ctrl控制器_______
cn.controller('linkbox_ctrl',["$scope",function($scope){
    $scope.catalog={
        "title":"2015 Sales Catalog",
        "img":"/source/img/catalog.ashx",
        "brief":"See our security products in action.",
        "detail":"Samsung Techwin’s online catalog is your source for professional video surveillance systems. When you try our products you will experience the difference that these technologies provide.",
        "btn":"LEARN MORE>>",
        "href":"#",
    };
    $scope.contact={
        "title":"Contact Us",
        "img":"/source/img/catalog.ashx",
        "brief":"Need More Help?",
        "detail":"We strive to provide the best customer support in the industry. Please contact us if you have any questions about our products, need technical assistance or customer service support by calling us",
        "btn":"CONTACT US>>",
        "href":"#",
    };
    $scope.events={
        "title":"Trade Shows & Events",
        "img":"/source/img/catalog.ashx",
        "brief":"Calendar.",
        "detail":"Learn more about our professional video security solutions and interact with our representatives by visiting our various tradeshows and events organized all around the year.",
        "btn":"LEARN MORE>>",
        "href":"#",
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
    $http.get('/source/json/sitemap.json').success(function(res){
        $scope.path = window.location.hash;
        $scope.products = res[0].products;
        $scope.maintxt = res[0].first_nav_content.products;
    });
});
//_______$homenavCtrl控制器_______
cn.controller("homenavCtrl",function($scope,$http) {
    $http.get('/source/json/sitemap.json').success(function(res){
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
        var reg = /\s|-/g;
        return val.toLowerCase().replace(reg,"_");
    }
});
//_______$thirdnavCtrl控制器_______
cn.controller("thirdnavCtrl",function($scope,$http) {
    $http.get('/source/json/sitemap.json').success(function(res){
        var path = window.location.hash;
        var items = path.split("/");
        var item = items[items.length-1];//最后一项为当前页面
        var parent = items[items.length-2];//父页面
        $scope.itemmaps = res[0][parent][item];
        $scope.maintxt = res[0].main_content;
        $scope.path = path;
        $scope.item = $scope.itemmaps.map;

    });
});
//_______$productlistCtrl控制器_______
cn.controller("productlistCtrl",function($scope,$http) {
    $http.get('/source/json/sitemap.json').success(function(res){
        var path = window.location.hash;
        var items = path.split("/");
        var item = items[items.length-1];//最后一项为当前页面
        var parent = items[items.length-2];//父页面
        var parents = items[items.length-3];

        $scope.product = res[0][item];
        $scope.itemmaps = res[0][parents][parent];
        $scope.maintxt = res[0].main_content;
        $scope.path = path;
        $scope.item = item;
    });
});
//_______$productdetailCtrl控制器_______
cn.controller("productdetailCtrl",function($scope,$http) {
    $http.get('/source/json/sitemap.json').success(function(res){
        var path = window.location.hash;
        var item = 'snp_l5233';

        $scope.product = res[0]['wisenet_lite'][item];
        $scope.itemmaps = res[0]['security_cameras']['ip_cameras'];

        //console.log($scope.product.element.length,$scope.product.element.img,$scope.product.img,$scope.product.element);
        //for(elem in $scope.product.element) {
        //    console.log(elem);
        //}
        //for(var i = 0 ; i< $scope.product.element.length ; i++) {
        //    console.log($scope.product.element[i]);
        //}
        //console.log($scope.product,$scope.itemmaps);


        $scope.path = path;
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
    $http.get('/source/json/sitemap.json').success(function(res){
        var path = window.location.hash;
        var items = path.split("/");
        var item = items[items.length -2];
        var parent = 'site';
        $scope.itemmaps = res[0][parent][item].smap;
        $scope.maintxt = res[0].main_content;
        $scope.fnav = res[0].first_nav_content;
        $scope.path = path;
        $scope.item = item;
    });
});
//_______$casestudiesCtrl控制器________
cn.controller("casestudiesCtrl",function($scope,$http) {
    $http.get('/source/json/sitemap.json').success(function(res){
        var path = window.location.hash;
        var items = path.split("/");
        var item = items[items.length -1];
        $scope.itemmaps = res[0][item];
        $scope.maintxt = res[0].main_content;
        $scope.path = path;
        $scope.item = item;
    });
});
//_______$casemainCtrl下级控制器________
cn.controller("casemainCtrl",function($scope,$http) {
    $http.get('/source/json/sitemap.json').success(function(res){
        var path = window.location.hash;
        var items = path.split("/");
        var item = items[items.length -1];
        var parent = items[items.length -2];
        $scope.itemmaps = res[0][parent][item];
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
                scope.contentUrl = '/view/casestudies/' + v + '.html';
            });
        },
        template :  '<div ng-include="contentUrl"></div>',

    };
});
//_______但前目录展示组件$pathlist________
cn.directive("pathlist",function(){
    return {
        restrict : 'E',
        link : function(scope){
            scope.$watch("path",function(v){
                var path = v;
                if(path != undefined) {
                    var items = path.split("/");
                    path = '';
                    scope.items = [];
                    scope.items[0] ={"name":"home","path":''};
                    for(var i = 0 ; i< items.length ;i++){
                        if(items[i] != "" && items[i] !="#" && items[i] != undefined){
                            path += items[i]+'/';
                            scope.items.push({"name":items[i],"path":path});
                        }

                    }
                }
            });
        },
        template :  '<ul class="pathlist"><li ng-repeat="v in items"><a href="/#/{{v.path}}">{{v.name}}</a>»</li></ul>',
    };
});
//_______$wisenetliteCtrl控制器________
cn.controller("wisenetliteCtrl",function($scope,$http) {
    $http.get('/source/json/sitemap.json').success(function(res){
        var path = window.location.hash;
        var items = path.split("/");
        var item = items[items.length -1];
        var itemcontent = res[0][item];
        var itemmaps = [];
        for(var i = 0 ; i < itemcontent.length; i++) {
            var content = itemcontent[i].split("/");
            for(var j = 0 ;j < content.length ; j++) {
                if(j == 0){
                    itemmaps[i] = res[0][content[j]];
                }else{
                    itemmaps[i] = itemmaps[i][content[j]];
                }
            }
        }
        $scope.itemmaps = itemmaps;
        $scope.linkpath ="products/security_cameras/ip_cameras/wisenet_lite";
        $scope.maintxt = res[0].main_content;
        $scope.path = path;
        $scope.item = item;
    });
});

//_______$thirdnavCtrl控制器_______
cn.controller("toolsCtrl",function($scope,$http) {
    $http.get('/source/json/sitemap.json').success(function(res){
        var path = window.location.hash;
        var items = path.split("/");
        var item = items[items.length-1];//最后一项为当前页面
        $scope.itemmaps = res[0].main_content[item];
        $scope.path = path;
        $scope.item = item;

    });
});
//_______$salesmapCtrl控制器_______
cn.controller("salesmapCtrl",function($scope,$http) {
    $http.get('/source/json/sitemap.json').success(function(res){
        var path = window.location.hash;
        var items = path.split("/");
        var item = items[items.length-1];//最后一项为当前页面
        console.log(item);
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
            console.log(new Date());
            var $jq;
            if (typeof jQuery != "undefined") {
                $jq = jQuery.noConflict();
            }
            if ($jq != undefined) {
                $jq(element).tinyscrollbar({ thumbSize: 58 });
            }

        }
    };
});