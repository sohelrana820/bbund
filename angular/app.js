(function() {
    var app = angular.module('bBundApp', ['ui.bootstrap', 'ngRoute']);

    app.config(function($routeProvider) {
        $routeProvider

            .when('/', {
                templateUrl : 'templates/home.html',
                controller  : 'HomeController'
            })

            .when('/users/login', {
                templateUrl : 'templates/login.html',
                controller  : 'UsersController'
            })

            .when('/users/signup', {
                templateUrl : 'templates/signup.html',
                controller  : 'UsersController'
            })

    });

    app.controller('HomeController', function(){

    });

    app.controller('UsersController', function(){

    });

})();
