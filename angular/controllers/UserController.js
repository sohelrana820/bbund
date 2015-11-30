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

    $scope.pageClass = 'signup_page_bg';

    $scope.disableSignupBtn = true;

    $scope.signupForm = function(user) {

        $http({
            url: 'users',
            method: "POST",
            data: user,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
            .success(function (response, status, headers, config) {
                toastr.success('Tag has been saved successfully');
            })
            .error(function (response, status, headers, config) {
                toastr.error('Sorry, something went wrong');
            });
    };

    $scope.signupValidation = function(user) {

        $http({
            url: 'users/signup_validation',
            method: "POST",
            data: user,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
            .success(function (response, status, headers, config) {
                console.log(response);
            })
            .error(function (response, status, headers, config) {
                console.log(response);
            });

    }

}]);

app.controller('SigninController', ['$scope', '$filter', '$http', function($scope, $filter, $http){
    $scope.pageClass = 'signin_page_bg';
}]);