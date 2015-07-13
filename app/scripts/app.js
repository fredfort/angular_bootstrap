'use strict';

/**
 * Main module of the application.
 */
angular
  .module('angular.bootstrap', [
    'ngResource',
    'ngAnimate',
    'ui.router',
    'ui.bootstrap',
    'angular.bootstrap.module1',
    'angular.bootstrap.module2',
    'angular.bootstrap.module3'
  ])
  .config(function ($stateProvider, $urlRouterProvider,$httpProvider) {

    //Intercept all xhr request
    $httpProvider.interceptors.push('HttpInterceptor');

    //default routes if the url does not match any of the followings
    $urlRouterProvider.otherwise('/welcome'); 

    // Now set up the states
    $stateProvider
      .state('main',{
        url:'/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        abstract:true
      })
      .state('main.welcome',{
        url:'welcome',
        templateUrl: 'views/welcome.html'
      }); 
  });