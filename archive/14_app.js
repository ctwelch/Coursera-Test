(function () {
'use strict';

angular.module('CounterApp', [])
.controller('CounterController', CounterController);

CounterController.$inject = ['$scope', '$timeout'];
function CounterController($scope,$timeout) {
  $scope.counter = 0;
  $scope.upCounter = function() {
    $timeout(function(){
      $scope.counter++;
      console.log("Counter Incremented!");
    }, 2000);
  }
};
/*
  $scope.upCounter = function () {
    // This won't update the view when you increment counter
    //  because setTimeout is outside the context of angular
    //  and doesn't trigger the $digest cycle.
    setTimeout(function(){
      $scope.$apply(function () {
        $scope.counter++;
        console.log("Counter Incremented!");
      });

      // could force it to $digest
      //$scope.$digest();
      // but any exceptions thrown will not be visible to angular
      // for this use $apply
    }, 2000);
  };*/


})();
