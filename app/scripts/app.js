'use strict';

/**
 * @ngdoc overview
 * @name peladaApp
 * @description
 * # peladaApp
 *
 * Main module of the application.
 */
angular
  .module('peladaApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase'
  ])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .constant('FBURL', 'https://gabrielfeitosa.firebaseio.com');
