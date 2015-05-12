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
        controler: 'navigationCtrl'
      }).
      when('/profile',{
        templateUrl: 'partials/profileView.html',
        controler: 'navigationCtrl'
      }).
      otherwise({
        redirectTo: '/home'
      });
  }]);