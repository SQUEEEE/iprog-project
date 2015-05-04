var iprogProj = angular.module('iprogProj', ['ngRoute','ngResource']);


iprogProj.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'partials/home.html',
        controller: 'iprogCtrl'
      }).
      when('/project/: typeOfView', {
        templateUrl: 'partials/navigationView.html',
        template: 'project',
        controller: 'navigationCtrl'
      }).
      when('/project', {
        templateUrl: 'partials/navigationView.html',
        controller: 'navigationCtrl'
      }).
      otherwise({
        redirectTo: '/home'
      });
  }]);