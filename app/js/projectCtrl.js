iprogProj.controller('projectCtrl', function ($scope, iprogProj) {
	$scope.getProject = iprogProj.getProject();
	$scope.photos = $scope.getProject.project.photos;
	$scope.titel = $scope.getProject.project.name;
})