"use strict";
let app=angular.module("myApp",["ngRoute"]);
console.log("app.js");
app.config(function($routeProvider,$locationProvider){
  $locationProvider.html5Mode(false).hashPrefix('');
  $routeProvider
  .when("/",{
    templateUrl : "app/home/index.html",
    controller : "homeController",
    controllerAs : "home"
  })
  .when("/home",{
    templateUrl : "app/home/index.html",
    controller : "homeController",
    controllerAs : "home"
  })
  // .when("/email",{
  //   templateUrl : "app/email/email.html",
  //   controller : "emailCtrl"
  // })
  .otherwise({
    template:"<h1>None</h1><p>The page you are looking for is not exist anymore or haven't been created yet.</p>"
  });
});
