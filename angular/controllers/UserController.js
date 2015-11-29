app.config(function($routeProvider) {
    $routeProvider

        .when('/users/signup', {
            templateUrl : 'templates/users/signup.html',
            controller  : 'SignupController'
        })

        .when('/users/signin', {
            templateUrl : 'templates/users/signin.html',
            controller  : 'SigninController'
        })

});

app.controller('SignupController', ['$scope', '$filter', '$http', function($scope, $filter, $http){
    $scope.pageClass = 'signup_page_bg f';
}]);

app.controller('SigninController', ['$scope', '$filter', '$http', function($scope, $filter, $http){
    $scope.pageClass = 'signin_page_bg';
}]);