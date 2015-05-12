var iprogProj = angular.module('iprogProj', ['ngRoute','ngResource']);

iprogProj.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'partials/home.html',
        controller: 'iprogCtrl'
      }).
      when('/nav/:oneView', {
        templateUrl: 'partials/navigationView.html',
        controller: 'navigationCtrl'
      }).
      when('/nav',{
        templateUrl: 'partials/navigationView.html',
        controller: 'navigationCtrl'
      }).
      otherwise({
        redirectTo: '/home'
      });
  }]);