iprogProj.controller('navigationCtrl', function ($scope, $routeParams, iprogProj) {

	var id = $routeParams.id
	$scope.type = $routeParams.type
	
	//binding for navigation purposes
	$scope.currentPattern = iprogProj.currentPattern
	$scope.currentProject = iprogProj.currentProject
	$scope.currentProfile = iprogProj.currentProfile

	var userProjects = iprogProj.userProjects

	$scope.getNextUserProject = function(){
		return userProjects.projects[0].permalink
	}

	/*$scope.getView = function(){
		return iprogProj.getView();
	}

	$scope.setView = function(text){
		iprogProj.setView(text);
		
	}*/

	$scope.clickLeftArrow = function(){
		console.log("klickade åt vänster");
	}

	$scope.clickRightArrow = function(){
		console.log("klickade åt höger");
	}
	$scope.hoverText =  function(){
		return iprogProj.getHoverText();
	}

	$scope.utdataHover = function(text){
		if (iprogProj.getUtdataHover() && $scope.hoverText()==text){
			return iprogProj.getUtdataHover(); 
		}
	}

	$scope.hover = function(text){
		iprogProj.setUtdataHover(true, text);
	}

	$scope.leaveHover = function(){
		iprogProj.setUtdataHover(false, "");
	}

	//setting the type so the view knows what to show
	//$scope.setView($routeParams.type)

})