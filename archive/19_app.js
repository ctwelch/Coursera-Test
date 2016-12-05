(function () {
'use strict';

angular.module('ControllerAsApp', [])
.controller('ParentController1', ParentController1)
.controller('ChildController1', ChildController1)
.controller('ParentController2', ParentController2)
.controller('ChildController2', ChildController2);

ParentController1.$inject = ['$scope'];

function ParentController1($scope) {
  $scope.parentValue = 1;
  $scope.pc = this; // this is going to point to ParentController1
  $scope.pc.parentValue = 1;
}


ChildController1.$inject = ['$scope'];
function ChildController1($scope) {
  console.log("$scope.parentValue: ", $scope.parentValue);
  console.log("CHILD $scope: ", $scope);
  //
   $scope.parentValue = 5; // set a parentValue on the child scope, masking the parent scope
   console.log("*** CHANGED: $scope.parentValue = 5 ***");
   console.log("$scope.parentValue: ", $scope.parentValue);
   console.log($scope);
  //
  console.log("$scope.pc.parentValue: ", $scope.pc.parentValue);
  // will set parentValue at the root of the inheritance chain
  // because we set pc to be the instance
   $scope.pc.parentValue = 5;
   console.log("** CHANGED: $scope.pc.parentValue = 5; ***");
   console.log("$scope.pc.parentValue: ", $scope.pc.parentValue);
   console.log("$scope: ", $scope);

   console.log("$scope.$parent.parentValue: ", $scope.$parent.parentValue);
}

// ** Controller As syntax
function ParentController2() {
  var parent = this; // this is the viewModel
  parent.value = 1;
}
ChildController2.$inject = ['$scope'];
function ChildController2($scope) {
  var child = this; // this is the viewModel
  child.value = 5;
  console.log("ChildController2 $scope: ", $scope);
}

})();
