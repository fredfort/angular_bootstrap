'use strict';

angular.module('angular.bootstrap.module1')
.controller('Module1MainCtrl',module1MainCtrl);

module1MainCtrl.$inject = ['module1Data'];

function module1MainCtrl(module1Data){
	/*jshint validthis: true */
	var vm = this;
	vm.module1Data = module1Data;
}