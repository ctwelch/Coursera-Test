(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController)
.filter('loves', LovesFilterFactory)
.filter('truth', TruthFilterFactory);

MsgController.$inject = ['$scope', '$filter','lovesFilter'];
function MsgController($scope, $filter, lovesFilter) {
  $scope.name = "Yaakov";
  $scope.stateOfBeing = "hungry";
  $scope.cookieCost = .45;

  $scope.sayMessage = function () {
    var msg = "Yaakov likes to eat healthy snacks at night!";
    var output = $filter('uppercase')(msg);
    return output;
  };
  var secondOutput = $filter('uppercase');
  var uppered = secondOutput("Give me the cookies!")
  $scope.uppered = uppered;

  $scope.sayLovesMessage = function () {
    var msg = "Yaakov likes to eat healthy snacks at night!";
    var output = lovesFilter(msg);
    return output;
  };

  $scope.feedYaakov = function () {
    $scope.stateOfBeing = "fed";
  };
}

function LovesFilterFactory(){
  return function(input){
    input = input || "";
    input = input.replace("likes", "loves");
    return input;
  }
  };

function TruthFilterFactory(){
  return function(input, target, replace) {
    input = input || "";
    input = input.replace(target, replace);
    return input;
  }
 };




})();
