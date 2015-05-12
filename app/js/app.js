var iprogProj = angular.module('iprogProj', ['ngRoute','ngResource']);

iprogProj.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'partials/home.html',
        controller: 'iprogCtrl'
      }).
      when('/project', {
        templateUrl: 'partials/navigationView.html',
        controller: 'navigationCtrl'
      }).
      when('/pattern',{
        templateUrl: 'partials/navigationView.html',
        controller: 'navigationCtrl'
      }).
      when('/profile',{
        templateUrl: 'partials/navigationView.html',
        controller: 'navigationCtrl'
      }).
      otherwise({
        redirectTo: '/home'
      });
  }]);