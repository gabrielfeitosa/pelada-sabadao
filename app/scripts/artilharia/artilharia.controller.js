(function() {
  'use strict';

  angular.module('peladaApp')
    .controller('ArtilhariaCtrl',['JogadorFactory', function(JogadorFactory) {
      var self = this;
      self.jogadores = JogadorFactory.listar();

      function soma(param,numero){
        if(!param){
          param = 0;
        }
        return param + numero;
      }

      self.addJogo = function(jogador,number){
        jogador.jogos = soma(jogador.jogos,number);
        JogadorFactory.salvar(jogador);
      };

      self.addGol = function(jogador,number){
        jogador.gols = soma(jogador.gols,number);
        JogadorFactory.salvar(jogador);
      };

      self.calcularMedia = function(jogador){
        return jogador.gols / jogador.jogos;
      };

    }]);
})();
