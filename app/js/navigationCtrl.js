iprogProj.controller('navigationCtrl', function ($scope, $routeParams, iprogProj) {

	/*$scope.typeOfView = $routeParams.typeOfView;*/
/*
	var init = function(){
		if($routeParams.id){
			$scope.setView(id);
		}
	}
*/

	$scope.getView = function(){
		return iprogProj.getView();
	}

	$scope.setView = function(text){
		iprogProj.setView(text);
		console.log(text)
	}

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






})