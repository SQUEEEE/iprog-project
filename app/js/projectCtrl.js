iprogProj.controller('projectCtrl', function ($scope, iprogProj) {

	$scope.getProject = iprogProj.getProject();
	$scope.photos = $scope.getProject.project.photos;

	$scope.projname = $scope.getProject.project.name;

	$scope.getUser = iprogProj.getUser();
	$scope.userName = $scope.getUser.user.username;
	$scope.userPic = $scope.getUser.user.small_photo_url;


	$scope.myData = new Firebase("https://testiprog.firebaseio.com/");

    $scope.saveChoice = function() {
    	$scope.myData.push({data:"klickat!"});

    };


});