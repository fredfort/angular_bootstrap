'use strict';

angular.module('angular.bootstrap')
.factory('localJSCache', function(){
	var CACHE_VALUE_KEY = 'cache_value'; 

	//init the cachedValues from the localstorage is the key exists, or leave the object empty
	var cachedValues = {};
	if(localStorage.getItem(CACHE_VALUE_KEY)){
		cachedValues = JSON.parse(localStorage.getItem(CACHE_VALUE_KEY));
	}

	/*
	* Check if the value is already cached, return true if the value is cached
	*/
	var isCachedValue = function(key){
		return _.has(cachedValues, key);
	};

	/*
	* Return the value matching the key 'key'. The value returned is an array
	*/
	var getCachedValue = function(key){
		return cachedValues[key];
	};

	/*
	* cache the value 'value' under the key 'key'. key is string, value an array
	*/
	var addCachedValue = function(key, value){
		cachedValues[key] = value;
		localStorage.setItem(CACHE_VALUE_KEY, JSON.stringify(cachedValues));
	};

	//Return methods accessible outside the service
	return {
		isCachedValue:isCachedValue,
		getCachedValue:getCachedValue,
		addCachedValue:addCachedValue
	};

});