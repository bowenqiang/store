"use strict";
app.directive("navigation",function(){
    return {
        templateUrl: "app/template/navigation.html",
        controller: "navigationController",
        controllerAs:"navigation"
    }
});

app.controller("navigationController",function($scope,$location){
  let self=this;
  self.$location=$location
});
