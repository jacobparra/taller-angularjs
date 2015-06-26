(function () {
  'use strict';

  angular
    .module('tallerUcabApp')
    .controller('PostDetailCtrl', PostDetailCtrl);

  PostDetailCtrl.$inject = ['$routeParams', '$http', 'BaseApiUrl'];

  function PostDetailCtrl($routeParams, $http, BaseApiUrl) {
    var vm = this;
    vm.post = {};
    vm.user = {};

    ////////////

    // $routeParams.postId
    $http.get(BaseApiUrl + '/posts/' + $routeParams.postId)
      .success(function(data) {
        vm.post = data;

        $http.get(BaseApiUrl + '/users/' + vm.post.userId)
        .success(function(data) {
          vm.user = data;
        });

      });

  }

})();
