iprogProj.controller('profileCtrl', function ($scope, iprogProj) {
	$scope.getUser = iprogProj.getUser();
	$scope.user = $scope.getUser.user;

	$scope.picture = $scope.getUser.user.large_photo_url;
	$scope.about_me = $scope.getUser.user.about_me;
	$scope.location = $scope.getUser.user.location;
	$scope.username = $scope.getUser.user.username;
	$scope.first_name = $scope.getUser.user.first_name;
	$scope.id = $scope.getUser.user.id;
	


})