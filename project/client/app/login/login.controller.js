'use strict';

angular.module('projectApp')
    .controller('LoginController', function ($scope, $state) {
        var USER = {
            username: 'test',
            password: 'test'
        }
        $scope.user = {};

        $scope.login = function() {
            $scope.error = undefined;
            if (angular.equals(USER, $scope.user)) {
                $state.go('main');
            } else {
                $scope.error = 'Invalid credentials';
            }
        }
    });
