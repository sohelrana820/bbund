var compareTo = function() {
    return {
        require: "ngModel",
        scope: {
            otherModelValue: "=compareTo"
        },
        link: function(scope, element, attributes, ngModel) {

            ngModel.$validators.compareTo = function(modelValue) {
                console.log(modelValue);
                console.log(scope.otherModelValue);
                return modelValue == scope.otherModelValue;
            };

            scope.$watch("otherModelValue", function() {
                ngModel.$validate();
            });
        }
    };
};

app.directive('matchPassword', function() {
    return {
        restrict: 'A',
        require: ['^ngModel', '^form'],
        link: function(scope, element, attrs, ctrls) {
            var formController = ctrls[1];
            var ngModel = ctrls[0];
            var otherPasswordModel = formController[attrs.matchPassword];

            ngModel.$validators.passwordMatch = function(modelValue, viewValue) {
                var password = modelValue || viewValue;
                var otherPassword = otherPasswordModel.$modelValue || otherPasswordModel.viewValue;
                return password === otherPassword;
            };

        } // end link
    }; // end return
})

app.directive('validatePasswordCharacters', function() {

    var REQUIRED_PATTERNS = [
        // /\d+/,    //numeric values
        // /[a-z]+/, //lowercase values
        // /[A-Z]+/, //uppercase values
        // /\W+/,    //special characters
        /^\S+$/   //no whitespace allowed
    ];

    return {
        require : 'ngModel',
        link : function($scope, element, attrs, ngModel) {
            ngModel.$validators.passwordCharacters = function(value) {
                var status = true;
                angular.forEach(REQUIRED_PATTERNS, function(pattern) {
                    status = status && pattern.test(value);
                });
                return status;
            };
        } // end link
    }; // end return

})

app.directive('uniqueEmail', function($http, $q) {
    return {
        require : 'ngModel',
        link : function($scope, element, attrs, ngModel) {
            ngModel.$validators.uniqueEmail = function(modelValue, viewValue) {
                var email = modelValue || viewValue;
                if (typeof email != 'undefined'){
                    // Here need t write script for checking the duplicate email.
                }
                return true;
            };
        }
    };
});