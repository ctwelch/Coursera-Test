// This one is about using isolate scope to transfer objects
//  to a directive like you would a function
//  instead of hard-coding say, the controller name in an html template

// By default the directive will inherit the scope of the calling DOM element

// Scope can be configured in the ddo
function MyDirective () {
  var ddo = {
    scope: {  // Signals Isolate Scope -- parent scope is NOT inherited
      // Explicitly bind predefined attributes to the isolate scope properties
      //  value will be = sign and the HTML template attribute name
      //  in the HTML template the object value specified here
      //  will be evaluated in the parent scope and passed in here
      myProperty: '=attributeName'
    }
  };
  return ddo;
}

// = sign gives Bidirectional Binding, or, two-way binding
function MyDirective () {
  var ddo = {
    scope: {
      // '=' assumes the attribute name is same as property, i.e. my-property
      // '=?' signals that the attribute is optional, may be null
      // '@myAttribute' binds myProperty to the value of DOM attribute my-property
      myProperty: '='
    }
  };
  return ddo;
}

// @ sign give One-Way Binding
// Changes to HTML attribute won't go to the data
// always results in directive property being a string
function MyDirective () {
  var ddo = {
    scope: {
      // '@myAttribute' binds myProperty to the value of DOM attribute my-property
      myProperty: '@myAttribute'
    }
  };
  return ddo;
}
// Changes to DOM attribute value are propogated to the directive property, but not the other way around
