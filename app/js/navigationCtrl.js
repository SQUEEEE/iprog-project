iprogProj.controller('navigationCtrl', function ($scope, $routeParams, iprogProj) {

	/*$scope.typeOfView = $routeParams.typeOfView;*/
/*
	var init = function(){
		if($routeParams.id){
			$scope.setView(id);
		}
	}
*/
	var id = $routeParams.id

	$scope.getView = function(){
		return iprogProj.getView();
	}

	$scope.setView = function(text){
		id = $routeParams.id
		iprogProj.setView(text);
		console.log(id)
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

	$scope.setView(id)







})