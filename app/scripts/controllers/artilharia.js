(function() {
  'use strict';

  angular.module('peladaApp')
    .controller('ArtilhariaCtrl',['$firebaseArray', function($firebaseArray) {
      var ref = new Firebase('https://pelada.firebaseio.com/jogadores');
      var self = this;
      self.jogadores = $firebaseArray(ref);

      self.addGol = function(jogador){
        jogador.gols += 1;
        self.jogadores.$save(jogador);
      }
      self.addGolContra = function(jogador){
        jogador.gols -= 1;
        self.jogadores.$save(jogador);
      }
    }]);
})();
