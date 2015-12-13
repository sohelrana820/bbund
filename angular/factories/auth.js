app.factory('AuthService', function ($http, Session) {
    var authService = {};

    authService.login = function (credentials) {
        return $http
            .post('users/login', credentials)
            .then(function (res) {
                console.log(res.data);
                Session.create(res.data);
                return res.data;
            });
    };

    authService.isAuthenticated = function () {
        return !!Session.user;
    };

    authService.isAuthorized = function (authorizedRoles) {
        if (!angular.isArray(authorizedRoles)) {
            authorizedRoles = [authorizedRoles];
        }
        return (authService.isAuthenticated() &&
        authorizedRoles.indexOf(Session.userRole) !== -1);
    };

    return authService;
})