(function () {
  'use strict';

  angular
    .module('tallerUcabApp')
    .controller('PostCreateCtrl', PostCreateCtrl);

  PostCreateCtrl.$inject = ['post', '$location'];

  function PostCreateCtrl(post, $location) {
    var vm = this;
    vm.post = {};
    vm.create = create;

    ////////////

    function create() {

      post.createPost(vm.post)
      .then(function (data){
        alert('¡Post creado!');
        $location.path('/post/' + data.objectId);
      });
    }

  }

})();
