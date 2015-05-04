iprogProj.controller('navigationCtrl', function ($scope, $routeParams, iprogProj) {

	/*$scope.typeOfView = $routeParams.typeOfView;*/

	$scope.hoverText =  function(){
		return iprogProj.getHoverText();
	}

	$scope.utdataHover = function(text){
		if (iprogProj.getUtdataHover() && $scope.hoverText()==text){
			return iprogProj.getUtdataHover(); 
		}
	}

	$scope.hover = function(text){
		console.log("in hover")
		iprogProj.setUtdataHover(true, text);
	}

	$scope.leaveHover = function(){
		iprogProj.setUtdataHover(false, "");
	}

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