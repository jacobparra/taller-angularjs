(function () {
  'use strict';

  angular
    .module('tallerUcabApp')
    .factory('post', post);

  post.$inject = ['$http', 'BaseApiUrl'];

  function post($http, BaseApiUrl) {
    var service = {
        getPosts: getPosts,
    };
    return service;

    ////////////

    function getPosts() {

    }

  }

})();
