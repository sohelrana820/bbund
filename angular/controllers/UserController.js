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
        $http({
            url: 'users/signup_validation',
            method: "POST",
            data: user,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
            .success(function (errors, status, headers, config) {
                $scope.errors = errors;
            })
            .error(function (response, status, headers, config) {
                console.log(response);
            });

    }

}]);


app.controller('SigninController', ['$rootScope', '$scope', '$filter', '$http', 'flashMessage', 'AuthService', 'AUTH_EVENTS', function($rootScope, $scope, $filter, $http, flashMessage, AuthService, AUTH_EVENTS){
    $scope.pageClass = 'signin_page_bg';
    flashMessage.getFlash();

    $scope.signinForm = function (credentials) {
        console.log(credentials);
        AuthService.login(credentials).then(function (user) {
            $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
            $scope.setCurrentUser(user);
        }, function () {
            $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
        });
    };

}]);

