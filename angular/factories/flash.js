
app.factory('flashMessage', function ($rootScope, $cookies) {

    var factory = {};

    factory.setFlash = function (message, type) {
        $cookies.message = message;
        $cookies.type = type;
    }

    factory.getFlash = function () {
        type = $cookies.type;

        if(type != 'null' && $cookies.message != 'null'){
            if (type == 'error') {
                toastr.error($cookies.message);
            }

            else if (type == 'success') {
                toastr.success($cookies.message);
            }

            else if (type == 'warning') {
                toastr.warning($cookies.message);
            }

            else {
                toastr.info($cookies.message);
            }

            $cookies.message = null;
            $cookies.type = null;
        }
    }

    return factory;

});