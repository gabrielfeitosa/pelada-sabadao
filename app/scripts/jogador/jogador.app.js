(function(){
'use strict';

angular
  .module('peladaApp')
  .config(function($routeProvider) {
    $routeProvider
      .when('/jogadores', {
        templateUrl: 'views/jogadores.html',
        controller: 'JogadorCtrl',
        controllerAs: 'vm'
      });
  });
})();
