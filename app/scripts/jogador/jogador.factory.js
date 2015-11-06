(function() {
  'use strict';

  angular.module('peladaApp').factory('JogadorFactory', ['$firebaseArray', 'fbutil', function($firebaseArray, fbutil) {
    var jogadores = $firebaseArray(fbutil.ref().child('jogadores'));
    return {
      listar: function() {
        return jogadores;
      },
      adicionar: function(jogador) {
        jogadores.$add(jogador);
      },
      remover: function(jogador) {
        jogadores.$remove(jogador);
      },
      salvar: function(jogador){
        jogadores.$save(jogador);
      }
    };
  }]);
})();
