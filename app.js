(function ()
{
  angular.module('LunchCheckerApp', []).
  controller('LunchCheckerController',LunchCheckerController);

  LunchCheckerController.$inject = ['$scope'];

  function LunchCheckerController ($scope){
    $scope.inputString = "";
    $scope.splitString = $scope.inputString.split(",");
    $scope.numOfFoods = 0;

    $scope.checkIfTooMuch = function () {
      $scope.splitString = $scope.inputString.split(",");
      $scope.numOfFoods = 0;

      for(var i = 0; i < $scope.splitString.length; i ++){
        if($scope.splitString[i] != ""){
            $scope.numOfFoods++;
        }
      }

      if($scope.inputString == ""){
        $scope.message = "Please enter data first";
        $scope.color = "red";
      }
      else{
        $scope.color = "green";

        if($scope.numOfFoods <= 3){
          $scope.message = "Enjoy!"
        }
        else {
          $scope.message = "Too Much!"
        }
      }
    };
  };
})();
