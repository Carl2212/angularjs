var lb = angular.module("linkbox",[]);
lb.controller('linkbox_ctrl',["$scope",function($scope){
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
lb.directive("expanderzdist",function(){
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
lb.directive("expanderhdist",function(){
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
angular.bootstrap(document.getElementById("linkb"), ['linkbox']);


