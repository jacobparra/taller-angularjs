(function () {
  'use strict';

  angular
    .module('tallerUcabApp')
    .run(run);

  run.$inject = ['auth'];

  function run(auth) {
    auth.restoreSession();
  }

})();
