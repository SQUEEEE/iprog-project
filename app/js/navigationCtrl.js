iprogProj.controller('navigationCtrl', function ($scope, iprogProj) {

	$scope.getProject = iprogProj.getProject();
	

	/* This did not work :(
	$scope.boxView = function(){
		var iprogProjVar = angular.module('iprogProj', ['ngRoute','ngResource']);
		var returnText = ""
		iprogProjVar.config(['$routeProvider',
		  function($routeProvider) {
		    $routeProvider.
		      when('/project', {
		        returnText = 'partials/projectView.html'
		      }).
		      when('/designer', {
		      	returnText = 'partials/designerView.html'
		      })
		      when('/profile', {
		      	returnText = 'partials/profileView.html'
		      })
		  }]);
		return returnText
	}

	*/



})