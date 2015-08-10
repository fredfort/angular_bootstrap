'use strict';

angular.module('angular.bootstrap.module3')
.controller('Module3MainCtrl',module3MainCtrl);

module3MainCtrl.inject = ['$scope','module3Error'];
function module3MainCtrl($scope, module3Error){
	$scope.module3Error = module3Error;
}