'use strict';

angular.module('angular.bootstrap')
  .controller('MainCtrl',['$scope','API','config',function ($scope,API,config) {
    $scope.data = {};
    $scope.data.environment = config.environment;
  }]);
