/**
 * Created by wxh on 2016/4/25.
 */

angular.module('common',[]).
    config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/',{templateUrl:'view/index.html',controller:indexCtrl}).
        when('/product',{templateUrl:"view/product.html",controller:productCtrl}).
        otherwise({redirectTo:"/"});
}]);
