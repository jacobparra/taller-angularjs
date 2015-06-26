(function () {
  'use strict';

  angular
    .module('tallerUcabApp')
    .config(config);

  config.$inject = ['$httpProvider'];

  function config($httpProvider) {
    $httpProvider.defaults.headers.common['X-Parse-Application-Id'] = '<My-Parse-App-Id>';
    $httpProvider.defaults.headers.common['X-Parse-REST-API-Key'] = '<My-Parse-REST-API-Key>';
  }

})();
