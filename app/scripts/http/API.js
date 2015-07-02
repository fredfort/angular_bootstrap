angular.module('angular.bootstrap')

.factory('API',['$http',function($http){
	var baseURL = 'https://athena-7.herokuapp.com/ancients.json';

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
	}

}]);