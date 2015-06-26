(function () {
  'use strict';

  angular
    .module('tallerUcabApp')
    .controller('AccountCtrl', AccountCtrl);

  AccountCtrl.$inject = ['auth'];

  function AccountCtrl(auth) {
    var vm = this;
    vm.user = auth.user;

  }

})();
