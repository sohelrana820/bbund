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

app.controller('SignupController', ['$scope', '$filter', '$http', '$location', 'flashMessage', function($scope, $filter, $http, $location, flashMessage){


    $scope.pageClass = 'signup_page_bg';

    $scope.errors = null;

    $scope.disableSignupBtn = true;


    $scope.signupForm = function(user) {

        $http({
            url: 'users',
            method: "POST",
            data: user,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
            .success(function (response, status, headers, config) {
                flashMessage.setFlash('Your account has been created');
                $location.path('/users/signin');
            })
            .error(function (response, status, headers, config) {
                toastr.error('Sorry, something went wrong');
            });
    };

    $scope.signupValidation = function(user) {
        flashMessage.setFlash('Your account has been created');
        $location.path('/users/signin');
        $http({
            url: 'users/signup_validation',
            method: "POST",
            data: user,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
            .success(function (errors, status, headers, config) {
                $scope.errors = errors;
                if(Object.keys(user).length == 4 && errors == 'null')
                {
                    $scope.disableSignupBtn = false;
                }
                else{
                    $scope.disableSignupBtn = true;
                }

            })
            .error(function (response, status, headers, config) {
                console.log(response);
            });

    }

}]);


app.controller('SigninController', ['$scope', '$filter', '$http', 'flashMessage', function($scope, $filter, $http, flashMessage){
    $scope.pageClass = 'signin_page_bg';
    flashMessage.getFlash();

    console.log($scope.pageClass);
}]);