// The link property of a directive holds a function
function LinkFunction (scope,
                       element,
                       attrs,
                       controller){
                         ...
                       }
// scope  -- is given the $scope of the directive
// the reason we omit the $ is to remind ourselvs that the scope
//  is not injected into the link function

// This is where you can manipulate the DOM directly or
//  by registering native event listeners

// element -- The top level element of the directive
// will be either the directive element or the element the attribute directive
//  is attached to. Is a wrapper around DOM with some jQlite.

// attrs -- attribute object that contains references to the attributes declared on the element

// controller -- reference to the Directive Controller if it is declared

function MyDirective () {
  var ddo = {
    scope: {...},
    link: LinkFunction,
    ...
    templateUrl: 'template.html'
  };
  return ddo;
}

// link can work along-side the directive's Controller
// or, since it has the same access to scope and properties
//  it can handle all the functionality

// the link function is always called with specific parameters
// so we don't inject anything into the link function directly

// if we want to use a service we can inject it into the directive factory function
