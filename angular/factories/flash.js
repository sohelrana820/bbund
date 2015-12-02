app.factory('flashMessage', function ($rootScope, $cookies) {

    var factory = {};

    factory.setFlash = function (message, type) {
        $cookies.message = message;
        $cookies.type = type;
    }

    factory.getFlash = function () {
        type = $cookies.type;

        console.log($cookies.message);

        if ($cookies.message != 'null') {
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
        }
        $cookies.message = null;
    }

    return factory;

});