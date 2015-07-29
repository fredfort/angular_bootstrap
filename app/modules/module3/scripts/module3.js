'use strict';

/**
 * Main module of the application.
 */
angular
  .module('angular.bootstrap.module3', [
    //load dependencies specific to this module
  ])
  .config(function ($stateProvider, $urlRouterProvider) {

    var PATH = '/modules/module3';

    //default routes if the url does not match any of the followings
    $urlRouterProvider.otherwise('/module1');

    // Now set up the states
    $stateProvider
      .state('main.module3',{
        url:'module3',
        templateUrl: PATH + '/views/main.html',
        controller: 'Module3MainCtrl',
        resolve:{
          module3Error : ['API', function(API){
            return API.get('modules3');//A 404 is raised
          }]
        }
      });
  });