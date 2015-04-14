
iprogProj.controller('iprogCtrl', function ($scope, iprogProj) {


  	$scope.status = "nothing done"

  	$scope.testAPI = function(){
  		
  		//console.log("in testAPI")

  		$scope.status = "requesting..."
  		/*iprogProj.testAPI.get({}, function(data){
  			console.log(data)
  			$scope.status = "results"
  		}, 
  		function(data){
	  		$scope.status = "There was an error";
		});*/
  	
	}
});