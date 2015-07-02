'use strict';

/**
 * Main module of the application.
 */
angular
  .module('angular.bootstrap', [
    'ngResource',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider,$httpProvider) {

    //Intercept all xhr request
    $httpProvider.interceptors.push('HttpInterceptor');

    //default routes if the url does not match any of the followings
    $urlRouterProvider.otherwise('/');

    // Now set up the states
    $stateProvider
      .state('main',{
        url:'/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
  });