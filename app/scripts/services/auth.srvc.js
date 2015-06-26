(function () {
  'use strict';

  angular
    .module('tallerUcabApp')
    .factory('auth', auth);

  auth.$inject = ['$http', 'BaseApiUrl', '$q'];

  function auth($http, BaseApiUrl, $q) {

    var service = {
    };
    return service;

    ////////////

    function login() {
    }

    function logout() {
    }

  }

})();
