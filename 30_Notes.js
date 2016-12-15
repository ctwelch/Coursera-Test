// now we tackle the problem of sending parameter arguments
// from the directive back to the calling scope.
// Such as when a user selects an item from a collection
// we need a way to link from the directive to command functions on the parent scope

// the parent has to execute the command in the parents context
// when we call the parents method and it tries to use $scope
//  we must be aware that this will refer to the parents $scope
//  not the directive's isolate scope
// reference binding uses '&'
//  allows us to execute an expression (such as a function value)
//  in the context of the parent scope
// Parent template must declare an attribute providing:
//  - Method reference to call on the parent
//  - Argument keys for directive to bind values to

// Then the directive calles the referenced method
//  and provides a map of argument key to value pairs

function Controller () {
  // arg1 comes from directive
  // we will pass this method into the directive as a reference
  //  so that the directive can delegate the call to this method
  //  whenever something happens inside the directive that only
  //  the directive will know about
  this.method = function (arg1) {
    this.prop = "Hi " + arg1;
  };
}

function MyDirective () {
  var ddo = {
    scope: {
      //                        method-reference-property on directive controller
      // myMethod is the property name of method to reference in directive controller
      // method is the attribute name to use in parent template for directive
      // now, directive controller can use myMethod to access method on parent controller
      myMethod: '&method'
    },
    templateUrl: 'template.html'
  };
  return ddo;
}

// in the outer html:
<div ng-controller="Controller as ctrl">
// method is a reference to method in controller being passed to the directive
// myArg is a placeholder label value to be passed in from directive
  <my-directive method="ctrl.method(myArg)"></my-directive>
</div>

// finally, in the directive template:
// myMethod is the method name from isolate scope mapping
// what's passed in as the argument is a map of parent template declared
//  arg name to value from directive
// keys must correspond to argument names the parent controller declared the call with
<button ng-click="dirCtrl.myMethod({myArg:'v1'});">
Remove Item </button>
