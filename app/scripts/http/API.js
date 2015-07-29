'use strict';

angular.module('angular.bootstrap')

.factory('API',['$http','config',function($http, config){
	var baseUrl = config.api.baseUrl;

	return {
		get:function(url){
			return $http.get(baseUrl+url);
		}, 		
		post:function(url, bodyParams){
			if(!bodyParams || !angular.isObject(bodyParams)){
				throw "Second parameters need to be an Object";
			}
			return $http.post(baseUrl+url,bodyParams);
		}, 

		put:function(url, bodyParams){
			return $http.put(baseUrl+url,bodyParams);
		}, 

		delete: function(url){
			return $http.delete(url);
		}	
	};

}]);