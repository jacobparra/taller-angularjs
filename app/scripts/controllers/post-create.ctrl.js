(function () {
  'use strict';

  angular
    .module('tallerUcabApp')
    .controller('PostCreateCtrl', PostCreateCtrl);

  PostCreateCtrl.$inject = ['$http'];

  function PostCreateCtrl($http) {
    var vm = this;
    vm.post = {};
    vm.create = create;

    ////////////

    function create() {

    }

  }

})();
