"use strict";
app.controller('homeController',["$scope","$http",function($scope,$http){
  var self=this;  
  $http.get("products.json").then(function(response){
    self.products=response.data;
  });

  $scope.addProduct = function(){
    self.products.push($scope.item);
    $scope.item={};
  };

  $scope.deleteProduct = function(index){
    if(index<self.products.length){
      self.products.splice(index,1);
    }

  };

}]);
