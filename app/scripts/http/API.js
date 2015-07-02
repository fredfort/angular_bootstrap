'use strict';

angular.module('angular.bootstrap')

.factory('API',['$http',function($http){
	var baseURL = '';
	return {		
		getAncients:function(){
			return $http.get(baseURL);
		}, 

		searchAncients:function(searchCriteria){
			return $http.get(baseURL+"?search="+searchCriteria);
		}, 

		getError: function(){
			return $http.get(baseURL+"?error=true");
		}	
	};

}]);