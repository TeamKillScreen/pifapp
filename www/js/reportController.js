angular.module("starter")
.controller("ReportCtrl", function($scope, $cordovaGeolocation) {
  $scope.geopoint = {
    latitude: 0,
    longitude: 0
  };

  $scope.getLocation = function() {
    console.log("Hello, World!");

    var win = function (position) {
      $scope.geopoint.latitude  = position.coords.latitude;
      $scope.geopoint.longitude = position.coords.longitude;
    };

    var fail = function(err) {
      $scope.errorMessage = "Failed to get location."
    };

    $cordovaGeolocation
      .getCurrentPosition()
      .then(win, fail);
  };
});
