/**
*  Module
*
* Who controller
*/
angular.module("starter")
.controller("WhoCtrl", function ($scope, $rootScope, $cordovaGeolocation, $timeout){

	$scope.geopoint = {
		latitude: 0,
		longitude: 0
	};

	$scope.partners = [];

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
	    	
	    	var partnerDetails = {
							key: key,
							location: location,
							name: "",
							distance: distance
			};

			var partnerRef = new Firebase("https://pif.firebaseio.com/partners/" + key);

			partnerRef.on('value', function (snapshot) {
				var partner = snapshot.val();

				// Set name from object list returned in call above
				partnerDetails.name = partner.name;

				console.log(partnerDetails);
			}, function (errorObject) {
				console.log('The read failed: ' + errorObject.code);
			});

			$scope.partners.push(partnerDetails);
    	});
  	};
});
