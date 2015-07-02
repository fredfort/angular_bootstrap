'use strict';

angular.module('angular.bootstrap')
  .controller('MainCtrl',['$scope','API','localJSCache', function ($scope,API,localJSCache) {
    $scope.data = {};
  }]);
