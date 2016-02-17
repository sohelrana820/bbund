app.factory('flashMessage', function ($rootScope, $cookies) {

    var factory = {};

    factory.setFlash = function (message, type) {
        $cookies.message = message;
        $cookies.type = type;
    }

    factory.getFlash = function () {

        type = $cookies.type;
        message = $cookies.message;

        if (message) {
            if (type == 'error') {
                toastr.error(message);
            }

            else if (type == 'success') {
                toastr.success(message);
            }

            else if (type == 'warning') {
                toastr.warning(message);
            }

            else {
                toastr.info(message);
            }
        }

        $cookies.type = '';
        $cookies.message = '';
    }
    return factory;
});