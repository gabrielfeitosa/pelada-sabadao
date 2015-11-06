(function() {
  'use strict';

  angular.module('peladaApp').factory('Auth', ['$firebaseAuth','$firebaseObject', '$rootScope', 'fbutil','$location',

    function($firebaseAuth, $firebaseObject, $rootScope, fbutil,$location) {
      var ref = fbutil.ref();
      var auth = $firebaseAuth(fbutil.ref());

      return {
        logar: function() {
          return auth.$authWithOAuthPopup('facebook').then(function(data) {
            cadastrarUsuario(data);
          });
        },
        logout: function() {
          auth.$unauth();
        },
        listen: function() {
          auth.$onAuth(function(user) {
            verificarLogado(user);
          });
        }
      };

      function verificarLogado(user) {
        $rootScope.logado = !!user;
        if($rootScope.logado){
          $rootScope.usuario = $firebaseObject(ref.child("usuarios").child(user.uid));
        }else{
          $rootScope.usuario = null;
          $location.path('/');
        }
      }

      function cadastrarUsuario(data) {
        fbutil.ref('usuarios',data.uid).set({
          provider: data.provider,
          nome: data.facebook.displayName,
          imgprofile: data.facebook.profileImageURL,
          ultimoLogin: (new Date()).toString()
        });
      }
    }
  ]);
})();
