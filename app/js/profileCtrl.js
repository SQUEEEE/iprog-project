iprogProj.controller('profileCtrl', function ($scope, iprogProj) {
	$scope.getUser = iprogProj.getUser();
	$scope.picture = $scope.getUser.user.photo_url;


})