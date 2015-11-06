(function() {
  'use strict';

  angular
    .module('peladaApp')
    .config(function($routeProvider) {
      $routeProvider
        .when('/artilharia', {
          templateUrl: 'views/artilharia.html',
          controller: 'ArtilhariaCtrl',
          controllerAs: 'vm'
        });
    });
})();
