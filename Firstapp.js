(function(){
  'use strict';

  angular.module('myFirstApp', [])
// define the view models in cohesive controllers for each ascpect of the view
// data and view presentation logic live in controllers
  .controller('MyFirstController', function($scope){
    $scope.name = "Chad";
    $scope.sayHello = function (){
      return "Hello Coursera!";
    };
  });
})();
