/**
 * Created by root on 11/29/15.
 */

app.config(function($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl : 'templates/home.html',
            controller  : 'HomeController'
        })


});