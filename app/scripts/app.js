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
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/artilharia', {
        templateUrl: 'views/artilharia.html',
        controller: 'ArtilhariaCtrl',
        controllerAs: 'vm'
      })
      .when('/jogadores', {
        templateUrl: 'views/jogadores.html',
        controller: 'JogadorCtrl',
        controllerAs: 'vm'
      }).otherwise({
        redirectTo: '/'
      });
  });
