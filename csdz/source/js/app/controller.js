/**
 * Created by wxh on 2016/4/25.
 */

function sitemap($scope,$http) {
    $http.get('/source/json/sitemap.json').success(function(res){
        $scope.sites = res;
        $scope.reg = /\s/g;
    });
}
function indexCtrl($scope) {
    window.link_box({dist:true,type_list:'catalog,contact,evnets'});
}



function productCtrl() {

}