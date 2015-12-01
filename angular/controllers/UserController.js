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

app.controller('SignupController', ['$scope', '$filter', '$http', '$location', 'flash', function($scope, $filter, $http, $location, flash){

    $scope.flash = flash;

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
                flash.setMessage('Your account has been created');
                flash.setMessageType('Error');
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


app.controller('SigninController', ['$scope', '$filter', '$http', 'flash', function($scope, $filter, $http, flash){
    $scope.pageClass = 'signin_page_bg';
    $scope.flash = flash;
}]);


app.factory("flash", function($rootScope) {
    var queue = [];
    var currentMessage = "";
    var currentMessageType = "";

    $rootScope.$on("$routeChangeSuccess", function() {
        currentMessage = queue.shift() || "";
        currentMessageType = queue.shift() || "";
    });

    return {
        setMessageType: function(type) {
            queue.push(type);
        },
        getMessageType: function() {
            return currentMessageType;
        },
        setMessage: function(message) {
            queue.push(message);
        },
        getMessage: function() {
            return currentMessage;
        }
    };
});