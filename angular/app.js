var app = angular.module('bBundApp', ['ui.bootstrap', 'ngRoute', 'ngAnimate']);

app.controller('HomeController', ['$scope', '$filter', '$http', function($scope, $filter, $http){
    $scope.pageClass = 'home_page_bg';
}]);