/**
 * Created by wxh on 2016/5/17.
 */
var app = angular.module('managepro',['meta.umeditor']);
app.factory("ajaxFac",['$http',function($http){
    function _ajax(url,data,type,callback,headers) {
        $http({
            url:url,
            data: $.param(data),
            method:type,
            headers:{ 'Content-Type': 'application/x-www-form-urlencoded' },
        }).then(function(r){callback(r)},function(r){console.log(r)});
    }
    return {
        post : function(url,data,callback){
            _ajax(url,data,"POST",callback);
        },
        get : function(url,data,callback){
            _ajax(url,data,"GET",callback);
        }
    }
}]);
app.controller("protypelistCtrl",['$scope','ajaxFac',function($scope,ajaxFac){
    var url = "/manage/index.php/index/get_next_info";
    var data = {site:"products"};
    ajaxFac.post(url,data,function(r){
        $scope.protype = r.data.data[0];
    });
}]);
app.run(['$rootScope',function($rootScope){
    console.log($rootScope);
}]);
app.directive("attributebox",['ajaxFac',function(ajaxFac){
    return {
        scope:{content:"=content"},
        restrict : 'E',
        templateUrl:"/manage/Tpl/Product/attributebox.html",
        link:function(scope,element,attr) {
            //scope.ueditor = UM.getEditor("ueditor1");
            scope.config ={};
            function save_data(callback) {
                //获取数据
                var data = {tab_name:scope.selected,tab_content:scope.attr_content};
                //请求post
                var url = "/manage/index.php/index/save_attr";
                ajaxFac.post(url,data,function(r){
                    if(r.status == 1) {//传出id
                        if(scope.attr != undefined) {
                            scope.attr.push(r.data.guid);
                        }else{
                            scope.attr=[r.data.guid];
                        }
                        callback(r);
                    }else{
                        alert("失败提交，请重试");
                    }
                });
            }
            //保存
            scope.save = function() {
                save_data(function(r){

                });
            };
            //保存并新增属性
            scope.save_addnew = function() {
                //save_data(function (r) {
                    scope.attr_content = '';
                    $("#listening").val(true);
                //});
            }
        },
        transclude : true
    };
}]);
