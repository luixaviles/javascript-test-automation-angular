'use strict';

angular.module('projectApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ui.router',
    'ui.bootstrap',
    'dialogs.main',
    'pascalprecht.translate'
])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider
            .otherwise('/login');

        $locationProvider.html5Mode(true);
    });