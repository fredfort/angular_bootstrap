'use strict';

angular.module('angular.bootstrap.module1')
.controller('Module1MainCtrl',module1MainCtrl);

module1MainCtrl.$inject = ['$scope','module1Data'];

function module1MainCtrl($scope, module1Data){
	$scope.module1Data = module1Data;
}