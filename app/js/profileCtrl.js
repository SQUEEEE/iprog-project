iprogProj.controller('profileCtrl', function ($scope, iprogProj) {
	$scope.getUser = iprogProj.getUser();
	$scope.user = $scope.getUser.user;

	$scope.picture = $scope.user.large_photo_url;
	$scope.about_me = $scope.user.about_me;
	$scope.location = $scope.user.location;
	$scope.username = $scope.user.username;
	$scope.first_name = $scope.user.first_name;
	$scope.id = $scope.user.id;
	


})