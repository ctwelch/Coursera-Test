(function ()
{
  angular.module('LunchCheckerApp', []).
  controller('LunchCheckerController',LunchCheckerController);

  LunchCheckerController.$inject = ['$scope'];

  function LunchCheckerController ($scope){
    $scope.inputString = "";

    $scope.checkIfTooMuch = function () {
      if($scope.inputString == ""){
        $scope.message = "Please enter data first";
      }
      else if($scope.inputString.split(",").length <= 3){
        $scope.message = "Enjoy!"
      }
      else {
        $scope.message = "Too Much!"
      }
    };
  };
})();
