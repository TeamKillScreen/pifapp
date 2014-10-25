angular.module("starter")
.controller("ValueCtrl", function ($scope, $rootScope, $state) {
    var getViewModelFromWhat = function (what) {
        switch (what) {
            case "food":
                return {
                    what: "Food",
                    icon: "ion-pizza",
                    coffees: [ 0, 1 ],
                    narrative: "A gift of food means...",
                    minValue: 2,
                    maxValue: 4
                };

            case "shelter":
                return {
                    what: "Shelter",
                    icon: "ion-home",
                    coffees: [0, 1, 2 ],
                    narrative: "A gift of shelter means...",
                    minValue: 3,
                    maxValue: 5
             };

            default:
                return {
                    what: "Clothing",
                    icon: "ion-person-stalker",
                    coffees: [0, 1, 2, 3, 4, 5 ],
                    narrative: "A gift of clothing means...",
                    minValue: 8,
                    maxValue: 8
                };
        }
    };

    $scope.vm = getViewModelFromWhat($rootScope.what);
});
