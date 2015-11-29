(function() {
    var app = angular.module('bBundApp', ['ui.bootstrap', 'ngRoute']);

    app.config(function($routeProvider) {
        $routeProvider

            .when('/users/signup', {
                templateUrl : 'templates/signup.html',
                controller  : 'UsersController'
            })

    });

    app.controller('UsersController', function(){

    });

})();
