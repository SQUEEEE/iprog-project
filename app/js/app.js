var iprogProj = angular.module('iprogProj', ['ngRoute','ngResource']);


iprogProj.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'partials/home.html',
        controller: 'iprogCtrl'
      }).
      when('/project', {
        templateUrl: 'partials/navigationView.html'
      }).
      otherwise({
        redirectTo: '/home'
      });
  }]);