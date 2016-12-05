
// Creating Custom Filters

// Set up a filter factory
function CustomFilterFactory(){
  return function(input, arg1) {
    // change input
    return changedInput;
  }
}

// Register the filter factory with a module
angular.module('app', [])
.controller('ctrl', Ctrl)
.filter('custom', CustomFilterFactory);
// register a factory function called custom
// the function returned by the given factory CustomFilterFactory
// will be named customFactory by the framework

// Inject the filter into the construct you plan to use it in
Ctrl.$inject = ['$scope', 'customFilter'];

function Ctrl($scope, customFilter){
  var msg = "Some Input";
  customFilter(msg, "arg1");
};
