(function () {
  'use strict';

  angular.module('DIApp', [])
// notice different types are allowed in an array in js
// string literals will be protected from minification (real data not minified)
  .controller('DIController', DIController);

  // can tell angular to use a particular array for function dependencies
  DIController.$inject = ['$scope', '$filter', '$injector'];

  function DIController ($scope, $filter, $injector) {
    $scope.name = "Chad";
    $scope.upper = function () {
      var upCase = $filter('uppercase');
      $scope.name = upCase($scope.name);
    };

    console.log($injector.annotate(DIController));
  }

  function AnnotateMe(name, job, blah) {
    return "Blah!";
  }
  console.log(AnnotateMe.toString());
})();
