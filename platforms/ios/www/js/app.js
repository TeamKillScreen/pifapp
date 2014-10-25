angular.module("starter", ["ionic", "ngCordova" , "starter.controllers"])

.run(function ($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state("app", {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: "AppCtrl"
  })

  .state("app.search", {
    url: "/search",
    views: {
      "menuContent" :{
        templateUrl: "templates/search.html"
      }
    }
  })

  .state("app.browse", {
    url: "/browse",
    views: {
      "menuContent" :{
        templateUrl: "templates/browse.html",
        controller: "ReportCtrl"
      }
    }
  })
  .state("app.playlists", {
    url: "/playlists",
    views: {
      "menuContent" :{
        templateUrl: "templates/playlists.html",
        controller: "PlaylistsCtrl"
      }
    }
  })

  .state("app.single", {
    url: "/playlists/:playlistId",
    views: {
      "menuContent" :{
        templateUrl: "templates/playlist.html",
        controller: "PlaylistCtrl"
      }
    }
  })

  .state("app.what", {
    url: "/what",
    views: {
      "menuContent" :{
        templateUrl: "templates/what.html",
        controller: "WhatCtrl",
      }
    }
  })

  .state("app.who", {
    url: "/who",
    views: {
      "menuContent" :{
        templateUrl: "templates/who.html",
        controller: "WhoCtrl",
      }
    }
  })

  .state("app.value", {
    url: "/value",
    views: {
      "menuContent" :{
        templateUrl: "templates/value.html",
        controller: "ValueCtrl",
      }
    }
  })

  ;

  $urlRouterProvider.otherwise("/app/browse");
})

.value("gift", null)

;
