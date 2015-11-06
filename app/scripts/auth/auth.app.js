(function(){
  'use strict';

  angular
    .module('peladaApp')
    .run(['Auth', function(Auth) {
      Auth.listen();
    }])
;

})();
