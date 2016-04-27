var link_box = angular.module("linkbox",[]);
link_box.controller('linkbox_ctrl',["$scope",function($scope){
    var link_content = {
        "catalog":{
            "title":"2015 Sales Catalog",
            "img":"/source/img/catalog.ashx",
            "brief":"See our security products in action.",
            "detail":"Samsung Techwin’s online catalog is your source for professional video surveillance systems. When you try our products you will experience the difference that these technologies provide.",
            "btn":"LEARN MORE>>",
            "href":"#",
        },
        "contact":{
            "title":"Contact Us",
            "img":"/source/img/catalog.ashx",
            "brief":"Need More Help?",
            "detail":"We strive to provide the best customer support in the industry. Please contact us if you have any questions about our products, need technical assistance or customer service support by calling us",
            "btn":"CONTACT US>>",
            "href":"#",
        },
        "events":{
            "title":"Trade Shows & Events",
            "img":"/source/img/catalog.ashx",
            "brief":"Calendar.",
            "detail":"Learn more about our professional video security solutions and interact with our representatives by visiting our various tradeshows and events organized all around the year.",
            "btn":"LEARN MORE>>",
            "href":"#",
        }
    };
    $scope.link_content = link_content;
}]);

link_box.directive("econtainer",function(){
    return {
        scope : {dist:'@expanderData'},
        restrict : 'AE',
        template : "<ul class='link-box {{dist}}' ng-transclude></ul>",
        replace : true,
        transclude: true,
    };
});
link_box.directive("expander",function(){
    return {
        scope : {expander:'@listData'},
        require : '^?expandercontainer',
        restrict : 'AE',
        template : "<li class="h-box"></li>",
        replace : true,
        transclude: true,
        link :function() {

        },
    };
});

link_box.filter("checkmark",function(){
    var item =list
    return function(input) {
        if(item !== undefined) {
            if(item instanceof Array){
                for(var i = 0 ; i< item.length ;i++) {
                    if(item[i] == input){
                        return '\u2713';
                    }
                }
            }else if(item == input){
                return '\u2713';
            }
        }
        return  '\u2718';
    }
});

