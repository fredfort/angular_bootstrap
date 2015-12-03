'use strict';

/**
 * Main module of the application.
 */
angular
  .module('angular.bootstrap', [
    'ui.router',
    'angular.bootstrap.htmlTemplates',
    'angular.bootstrap.module1',
    'angular.bootstrap.module2'
  ])
  .config(config)
  .run(run);

  function run(){
  }

  function config($stateProvider, $urlRouterProvider,$httpProvider,$compileProvider,config) {


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
  }