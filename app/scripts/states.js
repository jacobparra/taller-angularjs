(function () {
  'use strict';

  angular
    .module('tallerUcabApp')
    .config(states);

  states.$inject = ['$stateProvider', '$urlRouterProvider'];

  function states ($stateProvider, $urlRouterProvider) {

    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'partials/post-list.html',
      controller: 'PostListCtrl',
      controllerAs: 'vm'
    })
    .state('post-detail', {
      url: '/post/:postId',
      templateUrl: 'partials/post-detail.html',
      controller: 'PostDetailCtrl',
      controllerAs: 'vm'
    })
    .state('post-new', {
      url: '/new',
      templateUrl: 'partials/post-create.html',
      controller: 'PostCreateCtrl',
      controllerAs: 'vm'
    })
    .state('account', {
      url: '/account',
      templateUrl: 'partials/account.html',
      controller: 'AccountCtrl',
      controllerAs: 'vm'
    });

    $urlRouterProvider.otherwise("/");
  }

})();
