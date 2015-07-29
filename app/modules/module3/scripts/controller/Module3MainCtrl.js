'use strict';

angular.module('angular.bootstrap.module2')
.controller('Module3MainCtrl',['$scope','module3Error', function($scope, module3Error){
	$scope.module3Error = module3Error;
}]);