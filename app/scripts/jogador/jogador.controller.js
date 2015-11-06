(function() {
  'use strict';

  angular.module('peladaApp')
    .controller('JogadorCtrl',['JogadorFactory', function(JogadorFactory) {
      var self = this;
      self.jogadores = JogadorFactory.listar();
      init();

      function init(){
        resetJogador();
      }

      function resetJogador(){
        self.jogador = {
          nome: '',
          apelido:'',
          jogos:0,
          gols: 0,
          img:'jogador.jpg'
        };
      }

      self.add = function() {
        JogadorFactory.adicionar(self.jogador);
        resetJogador();
      };

      self.remove = function(jogador){
        JogadorFactory.remover(jogador);
      };
    }]);
})();
