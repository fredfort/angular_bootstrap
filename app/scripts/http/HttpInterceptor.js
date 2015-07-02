'use strict';

angular.module('angular.bootstrap').factory('HttpInterceptor',['$q', function($q) {
    var sessionInjector = {

    	request: function(config){
        //do something before requesting the API
    		return config;
    	},

      responseError: function(rejection){
        //do something with the rejected request
        return $q.reject(rejection);    
      }
    };
    return sessionInjector;
}]);