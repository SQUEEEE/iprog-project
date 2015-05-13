iprogProj.controller('projectCtrl', function ($scope, iprogProj) {
	$scope.getProject = iprogProj.getProject();
	$scope.photos = $scope.getProject.project.photos;
<<<<<<< HEAD
	$scope.titel = $scope.getProject.project.name;
=======
	$scope.projname = $scope.getProject.project.name;

	$scope.getUser = iprogProj.getUser();
	$scope.userName = $scope.getUser.user.username;
	$scope.userPic = $scope.getUser.user.small_photo_url;

>>>>>>> bab136471c1b2b2a12d5ee40ce221367b7b7c293
})