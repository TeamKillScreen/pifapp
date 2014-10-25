angular.module("starter")
.controller("ReportCtrl", function ($scope, $cordovaGeolocation, $cordovaSocialSharing, $cordovaContacts) {
  $scope.geopoint = {
    latitude: 0,
    longitude: 0
  };

  $scope.getLocation = function () {
    var win = function (position) {
      $scope.geopoint.latitude  = position.coords.latitude;
      $scope.geopoint.longitude = position.coords.longitude;
    };

    var fail = function (err) {
      $scope.message = "Failed to get location.";
    };

    $cordovaGeolocation
      .getCurrentPosition()
      .then(win, fail);
  };

  $scope.shareViaTwitter = function () {
    var win = function (position) {
      $scope.message = "Shared via Twitter.";
    };

    var fail = function (err) {
      $scope.message = "Failed share via Twitter.";
    };

    $cordovaSocialSharing
      .shareViaTwitter("Hello" /* , image, link */)
      .then(win, fail);
  };

  $scope.showCalendar = function () {
    document.location = "calshow://";
  };

  $scope.showPingit = function () {
    document.location = "pingit://00/07985222260";
  };

  $scope.pickContact = function () {
    var win = function (contact) {
      console.log("pickContact::win");
    };

    var fail = function () {
      console.log("pickContact::fail");
    };

    navigator.contacts.pickContact(win, fail);
  };
});
