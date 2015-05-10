
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
                $scope.userName = "";
                $scope.userPass = 0;

                $scope.myData = new Firebase("https://testiprog.firebaseio.com/");

                $scope.saveUser = function() {
                  console.log("hej3")
                  $scope.myData.push({userName:$scope.userName});
                  $scope.userName = "";
                  $scope.userPass = 0;
                };

                //$scope.myData.on('Value', function(snapshot) {
                  //$scope.användare = snapshot.val();
                //});
});