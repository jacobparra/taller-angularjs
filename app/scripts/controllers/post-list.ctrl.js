(function () {
  'use strict';

  angular
    .module('tallerUcabApp')
    .controller('PostListCtrl', PostListCtrl);

  PostListCtrl.$inject = ['post'];

  function PostListCtrl(post) {
    var vm = this;
    vm.posts = [];

    ////////////

    post.getPosts()
    .then(function (data) {
      vm.posts = data;
    });
  }

})();
