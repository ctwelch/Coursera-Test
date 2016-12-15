// Sometimes we want to bundle behavior with the directive
// One way is to declare a controller on the directive
function MyDirective() {
  var ddo = {
    scope: {
      // use '<' for one-way binding to avoid unnecessary watches on these properties
      // it will watches only the identity of the parent property
      // not the property inside the directive
      prop: '<',
    },
    controller: ControllerFunction,
    //  bindToController tells Angular to attach
    //  declared scope properties to controller instance
    //  instead of directly to $scope, a best practice -- bindings should have a dot in them
    bindToController: true,
    // properties get bound to myCtrl object, then Angular attaches it to the $scope for you
    templateUrl: 'template.html'
    controllerAs: 'myCtrl',
  };
  return ddo;
}

ControllerFunction.$inject = ['Service'];
function ControllerFunction(Service) {
  var myCtrl = this;

  myCtrl.method = function () {
    // can use the declared isolate scope properties
    var name = "Hello " + myCtrl.prop;
  }
}

<div ng-if="myCtrl.method()">{{myCtrl.prop}}</div>

<my-directive ng-controller="ControllerFunction as myCtrl" prop="World">{{method();}}</my-directive>
