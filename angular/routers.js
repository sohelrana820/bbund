/**
 * Created by root on 11/29/15.
 */

app.config(function($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl : 'templates/home.html',
            controller  : 'HomeController'
        })

        .when('/users/signin', {
            templateUrl : 'templates/users/signin.html',
            controller  : 'UsersController'
        })

        .when('/users/signup', {
            templateUrl : 'templates/users/signup.html',
            controller  : 'UsersController'
        })

});