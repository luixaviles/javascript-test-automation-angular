'use strict';

angular.module('projectApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('main', {
                url: '/home',
                templateUrl: 'app/main/main.html',
                controller: 'MainController'
            });
    });