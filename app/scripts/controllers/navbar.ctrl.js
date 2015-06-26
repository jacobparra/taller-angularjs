(function () {
  'use strict';

  angular
    .module('tallerUcabApp')
    .controller('NavbarCtrl', NavbarCtrl);

  NavbarCtrl.$inject = ['auth', '$location'];

  function NavbarCtrl(auth, $location) {
    var vm = this;

    vm.user = auth.user;
    vm.credentials = {};

    vm.login = login;
    vm.logout = logout;

    ////////////

    function login() {
      auth.login(vm.credentials)
      .then(function() {
        alert('Log in exitoso!');
      })
    }

    function logout() {
      auth.logout();
      $location.path('/');
    }
  }

})();
