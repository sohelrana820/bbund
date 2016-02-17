var app = angular.module('bBundApp', ['ui.bootstrap', 'ngRoute', 'ngAnimate', 'ngCookies', 'ngMessages']);


app.controller('ApplicationController', function ($scope, USER_ROLES, AuthService) {
    $scope.pageClass = 'home_page_bg';
    $scope.currentUser = null;
    $scope.userRoles = USER_ROLES;
    $scope.isAuthorized = AuthService.isAuthorized;

    $scope.setCurrentUser = function (user) {
        $scope.currentUser = user;
    };
})

app.constant('AUTH_EVENTS', {
    loginSuccess: 'auth-login-success',
    loginFailed: 'auth-login-failed',
    logoutSuccess: 'auth-logout-success',
    sessionTimeout: 'auth-session-timeout',
    notAuthenticated: 'auth-not-authenticated',
    notAuthorized: 'auth-not-authorized'
})

app.constant('USER_ROLES', {
    all: '*',
    admin: 'admin',
    editor: 'editor',
    guest: 'guest'
})

app.service('Session', function () {
    this.create = function (user) {
        this.user = user;
    };
    this.destroy = function () {
        this.user = user;
    };
})