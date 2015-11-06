(function() {
'use strict';

/**
 * @ngdoc function
 * @name peladaApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the peladaApp
 */
angular.module('peladaApp')
  .controller('MenuCtrl', function($scope, $location) {
    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
})();
