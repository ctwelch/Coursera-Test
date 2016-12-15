// sometimes we need to pass an entire template rather than string or object
// like a dialog box directive which needs buttons, functionality, etc.
//  but needs to be generic enough to allow users to detrmine which values are displayed

// the transclude property allows you
//  to wrap arbitraty content with your directive
//  including expression and funtion calls
// expressions wrapped in a directive which has it's transclude
//  property set to true are evaluated not in the directive's isolate scope,
//  but in the parent's scope

// step 1
function MyDirective() {
  var ddo = {
    scope: {...},
    transclude: true,
    ...
    templateUrl: 'template.html'
  };
  return ddo;
}

// step 2
<my-directive>
  <span>
    WARNING! {{ctrl.someProp}} // evaluated in the parent controller, not in the directive
  </span>
</my-directive>

// step 3
<div>
// Insert evaluated wrapped content into element marked with ng-transclude
  <div ng-transclude></div>
</div>
