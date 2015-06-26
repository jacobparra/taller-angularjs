(function () {
  'use strict';

  angular
    .module('tallerUcabApp')
    .factory('post', post);

  post.$inject = ['$http', '$q', 'BaseApiUrl'];

  function post($http, $q, BaseApiUrl) {

    var service = {
        getPosts: getPosts,
        getPost: getPost,
        createPost: createPost,
        removePost: removePost
    };
    return service;

    ////////////

    function getPosts() {
      var deferred = $q.defer();

      var config = {
        params: {order: '-createdAt'}
      };

      $http.get(BaseApiUrl + '/classes/Post', config)
      .success(function (data) {
        deferred.resolve(data.results);
      });

      return deferred.promise;
    }

    function getPost(postId) {
      var deferred = $q.defer();

      var post = {};

      $http.get(BaseApiUrl + '/classes/Post/' + postId)
      .success(function (data) {
        post = data;

        $http.get(BaseApiUrl + '/classes/_User/' + post.userId)
          .success(function (data) {
            deferred.resolve({
              post: post,
              user: data
          });

        });
      });

      return deferred.promise;
    }

    function createPost(newPost) {
      var deferred = $q.defer();

      newPost.userId = auth.user.objectId;

      $http.post(BaseApiUrl + '/classes/Post', newPost)
      .success(function (data) {
        deferred.resolve(data);
      });

      return deferred.promise;
    }

    function removePost(postId) {
      var deferred = $q.defer();

      $http.delete(BaseApiUrl + '/classes/Post/' + postId)
      .success(function () {
        deferred.resolve();
      });

      return deferred.promise;
    }

  }

})();
