(function () {
  'use strict';

  angular
    .module('tallerUcabApp')
    .factory('auth', auth);

  auth.$inject = ['$http', 'BaseApiUrl', '$q', '$window'];

  function auth($http, BaseApiUrl, $q, $window) {
    var user = {};

    var service = {
        user: user,
        login: login,
        logout: logout,
        restoreSession: restoreSession
    };
    return service;

    ////////////

    function login(credentials) {
      var deferred = $q.defer();

      var config = {
        params: credentials
      };

      $http.get(BaseApiUrl + '/login', config)
      .success(function (data) {
        var serializedUser = angular.toJson(data);

        angular.copy(data, user);

        $window.sessionStorage.setItem('user', serializedUser);

        deferred.resolve(user);
      });

      return deferred.promise;
    }

    function logout() {
      angular.copy({}, user);

      $window.sessionStorage.removeItem('user');
    }

    function restoreSession() {
      var restoredUser = angular.fromJson($window.sessionStorage.getItem('user'));

      if (restoredUser) {
        angular.copy(restoredUser, user);
      }
    }

  }

})();
