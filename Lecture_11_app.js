(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope'];
function MsgController($scope) {
  $scope.name = "Chad";

  $scope.stateOfBeing = "hungry";

  $scope.sayMessage = function () {
    return "Chad likes to build.";
  };

  $scope.feedYaakov = function () {
    $scope.stateOfBeing = $scope.stateOfBeing == "fed" ? "hungry" : "fed";
  };
}

})();
