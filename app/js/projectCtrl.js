iprogProj.controller('projectCtrl', function ($scope, iprogProj) {

	$scope.getProject = iprogProj.getProject();
	$scope.photos = $scope.getProject.project.photos;

	$scope.projname = $scope.getProject.project.name;

	$scope.userName = $scope.getProject.project.user.username;
	$scope.userPic = $scope.getProject.project.user.small_photo_url;

	$scope.myData = new Firebase("https://testiprog.firebaseio.com/");

    $scope.saveChoice = function() {
    	$scope.myData.push({data:"klickat!"});
    };

    $scope.hoverText =  function(){
		return iprogProj.getHoverText();
	}

	$scope.utdataHover = function(text){
		if (iprogProj.getUtdataHover() && $scope.hoverText()==text){
			return iprogProj.getHeartHover(); 
		}
	}

	$scope.heartHover = function(){
		iprogProj.setHeartHover(true);
	}

	$scope.leaveHover = function(){
		iprogProj.setHeartHover(false);
	}


});