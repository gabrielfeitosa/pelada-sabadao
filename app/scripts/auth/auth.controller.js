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
    .controller('AuthCtrl', ['$scope', 'Auth', function($scope, Auth) {
      $scope.auth = Auth;
    }]);
})();
