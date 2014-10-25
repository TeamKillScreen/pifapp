angular.module("starter")
.controller("PartnerCtrl", function ($scope, $geofire, $rootScope, $timeout) {
  $scope.geopoint = {
    latitude: 53.476730522494556,
    longitude: -2.25376319885253
  };

  $scope.searchResultsTemp = [{ key: "blah" }];

  $scope.getPartners = function () {

    // 53.476730522494556,-2.25376319885253
    //Given the current geo location, query firebase for the list of partners
    var firebaseRef = new Firebase("https://pif.firebaseio.com/geoLocationData");
    var geoFire = new GeoFire(firebaseRef);

    var geoQuery = geoFire.query({
      center: [53.476730522494556,-2.25376319885253], //MOSI
      radius: 3 //kilometers
    });

    geoQuery.on("key_entered", function(key, location, distance) {
      $scope.searchResultsTemp.push({key: key, location: location, distance: distance});

      console.log($scope.searchResultsTemp.length);
      $scope.$digest();  
    })
/*
    $timeout(function () {
      console.log("Timer");
      $scope.searchResultsTemp.push({ key: "blue" });
    }, 2000);  
*/
  };
});