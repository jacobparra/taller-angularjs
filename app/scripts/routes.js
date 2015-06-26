(function () {
  'use strict';

  angular
    .module('tallerUcabApp')
    .config(routes);

  routes.$inject = ['$routeProvider'];

  function routes ($routeProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'partials/post-list.html',
        controller: 'PostListCtrl',
        controllerAs: 'vm'
      })
      .when('/post/:postId', {
        templateUrl: 'partials/post-detail.html',
        controller: 'PostDetailCtrl',
        controllerAs: 'vm'
      })
      .when('/new', {
        templateUrl: 'partials/post-create.html',
        controller: 'PostCreateCtrl',
        controllerAs: 'vm'
      });
  }

})();
