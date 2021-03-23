var $ = document.querySelector.bind(document)
var $$ = document.querySelectorAll.bind(document)

// Angular
var App = angular.module("App", ["ngRoute", "angularCSS", "ngSanitize"])
.run(function constructor($rootScope) {
  $rootScope.GAMES_PAGE = [];

  $rootScope.ADMIN_GAME = [];
  $rootScope.ADMIN_GAME_PAGINATION = [];
  $rootScope.ADMIN_SOFTWARE = [];
  $rootScope.ADMIN_SOFTWARE_PAGINATION = [];

  $rootScope.OLD_TAG = '';
  $rootScope.PAGINATION = [];
})
.factory("$getData", function () {
  return function ($http, url, callback) {
    $http({
      method: "GET",
      url: url
    }).then(res => {
      callback(null, res.data);
    }), (res) => {
      callback(res, null)
    }
  }
})

// Components
// DB_CONNECTION = mongodb+srv://alehap664:alehap664@demo.tuev1.mongodb.net/AngularJS?retryWrites=true&w=majority








