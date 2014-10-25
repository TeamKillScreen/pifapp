cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.ohh2ahh.plugins.appavailability/www/AppAvailability.js",
        "id": "com.ohh2ahh.plugins.appavailability.AppAvailability",
        "clobbers": [
            "appAvailability"
        ]
    },
    {
        "file": "plugins/nl.x-services.plugins.socialsharing/www/SocialSharing.js",
        "id": "nl.x-services.plugins.socialsharing.SocialSharing",
        "clobbers": [
            "window.plugins.socialsharing"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.geolocation/www/Coordinates.js",
        "id": "org.apache.cordova.geolocation.Coordinates",
        "clobbers": [
            "Coordinates"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.geolocation/www/PositionError.js",
        "id": "org.apache.cordova.geolocation.PositionError",
        "clobbers": [
            "PositionError"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.geolocation/www/Position.js",
        "id": "org.apache.cordova.geolocation.Position",
        "clobbers": [
            "Position"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.geolocation/www/geolocation.js",
        "id": "org.apache.cordova.geolocation.geolocation",
        "clobbers": [
            "navigator.geolocation"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.ohh2ahh.plugins.appavailability": "0.3.1",
    "nl.x-services.plugins.socialsharing": "4.3.8",
    "org.apache.cordova.geolocation": "0.3.10"
}
// BOTTOM OF METADATA
});