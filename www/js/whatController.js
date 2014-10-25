angular.module("starter")
.controller("WhatCtrl", function ($scope, $rootScope, $state) {
  $scope.giveFood = function () {
    console.log("Food");
    $rootScope.what = "food";
    $state.go("app.who");
  };

  $scope.giveShelter = function () {
    console.log("Shelter");
    $rootScope.what = "shelter";
    $state.go("app.who");
  };

  $scope.giveClothing = function () {
    console.log("Clothing");
    $rootScope.what = "clothing";
    $state.go("app.who");
  };
});
