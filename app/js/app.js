var iprogProj = angular.module('iprogProj', ['ngRoute','ngResource']);


iprogProj.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'partials/home.html'
      }).
      when('/project', {
        templateUrl: 'partials/projectView.html'
      }).
      otherwise({
        redirectTo: '/home'
      });
  }]);