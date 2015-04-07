
iprogProj.controller('iprogCtrl', function ($scope, iprogProj) {

  $scope.numberOfGuests = iprogProj.getNumberOfGuests();

  $scope.setNumberOfGuest = function(number){
    iprogProj.setNumberOfGuests(number);
  }

  $scope.getNumberOfGuests = function() {
    return iprogProj.getNumberOfGuests();
  }

});