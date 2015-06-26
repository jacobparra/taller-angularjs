(function () {
  'use strict';

  angular
    .module('tallerUcabApp')
    .controller('PostListCtrl', PostListCtrl);

  PostListCtrl.$inject = ['$http', 'BaseApiUrl'];

  function PostListCtrl($http, BaseApiUrl) {
    var vm = this;
    vm.posts = [];

    ////////////

    $http.get(BaseApiUrl + '/posts')
      .success(function(data) {
        vm.posts = data;
      });
  }

})();
