iprogProj.controller('patternCtrl', function ($scope, iprogProj) {
	$scope.getUser = iprogProj.getUser();
	$scope.getPattern = iprogProj.getPattern();

	$scope.photos = $scope.getPattern.pattern.photos;
	
	$scope.patternName = $scope.getPattern.pattern.name;

	$scope.author = $scope.getPattern.pattern.pattern_author.name;
	$scope.notes = $scope.getPattern.pattern.notes;
	$scope.sizes = $scope.getPattern.pattern.sizes_available;
	$scope.published = $scope.getPattern.pattern.published;

})