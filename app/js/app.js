var iprogProj = angular.module('iprogProj', ['ngRoute','ngResource']);

var routeProvider = iprogProj.config(['$routeProvider',
  function($routeProvider) {

    routeProvider = $routeProvider;
    $routeProvider.
      when('/home', {
        templateUrl: 'partials/home.html',
        controller: 'iprogCtrl'
      }).
      when('/nav/:id', {
        templateUrl: 'partials/navigationView.html',
        controller: 'navigationCtrl'
      }).
      otherwise({
        redirectTo: '/home'
      });
  }]);