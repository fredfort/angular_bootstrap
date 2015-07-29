'use strict';

angular.module('angular.bootstrap.module1')
.controller('Module1MainCtrl',['$scope','module1Data',function($scope, module1Data){
	$scope.module1Data = module1Data;
}]);