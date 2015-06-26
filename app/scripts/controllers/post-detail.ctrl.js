(function () {
  'use strict';

  angular
    .module('tallerUcabApp')
    .controller('PostDetailCtrl', PostDetailCtrl);

  PostDetailCtrl.$inject = ['$routeParams', '$location', 'post'];

  function PostDetailCtrl($routeParams, $location, post) {
    var vm = this;
    vm.post = {};
    vm.user = {};
    vm.remove = remove;

    ////////////

    post.getPost($routeParams.postId)
    .then(function (data) {
      vm.post = data.post;
      vm.user = data.user;
    });

    function remove(postId) {
      post.removePost(postId)
      .then(function () {
        alert('Post removido');
        $location.path('/');
      });
    }

  }

})();
