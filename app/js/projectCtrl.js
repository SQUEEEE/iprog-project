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

    $scope.heartHoverText = 'Like'

	$scope.utdataHeartHover = function(){
		return iprogProj.getHeartHover();
	}

	$scope.heartHover = function(){
		iprogProj.setHeartHover(true);
	}

	$scope.leaveHeartHover = function(){
		iprogProj.setHeartHover(false);
	}


});