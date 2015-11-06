'use strict';

/**
 * @ngdoc function
 * @name peladaApp.controller:SampleCtrl
 * @description
 * # SampleCtrl
 * Controller of the peladaApp
 */
angular.module('peladaApp')
  .controller("SampleCtrl", ["$scope", "Auth",
    function($scope, Auth) {
      $scope.auth = Auth;

      // any time auth status updates, add the user data to scope
      $scope.auth.$onAuth(function(authData) {
        $scope.authData = authData;
      });
    }
  ]);

angular.module('peladaApp').factory("Auth", ["$firebaseAuth",
  function($firebaseAuth) {
    var ref = new Firebase("https://pelada.firebaseio.com");
    return $firebaseAuth(ref);
  }
]);
