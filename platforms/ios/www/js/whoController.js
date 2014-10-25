angular.module("starter")
.controller("WhoCtrl", function ($scope, $rootScope) {
  $scope.what = $rootScope.what;
});
