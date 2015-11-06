(function() {
  'use strict';

  angular.module('peladaApp')
    .controller('JogadorCtrl',['$firebaseArray', function($firebaseArray) {
      var ref = new Firebase('https://pelada.firebaseio.com/jogadores');
      var self = this;
      self.jogadores = $firebaseArray(ref);
      init();

      function init(){
        resetJogador();
      }

      function resetJogador(){
        self.jogador = {
          nome: '',
          apelido:'',
          gols: 0,
          img:'jogador.jpg'
        };
      }

      self.add = function() {
        self.jogadores.$add(self.jogador);
        resetJogador();
      };

      self.remove = function(jogador){
        self.jogadores.$remove(jogador);
      }
    }]);
})();
