// A Directive is a marker on a DOM element that tells Angular's HTML compiler
//  to attach a specified behavior to that DOM element.

// The Angular compiler can transform DOM elements and their children
//  during the phase where it scans the DOM for the ngApp it also has stock of the entire DOM

// Directive can be an attribute, element name, comment or CSS class -- last two are anti


// Directives are registered on the module
angular.module('app',[])
.controller('myCtrl', MyCtrl)
.directive('myTag', MyTag);
// Directive Name is normalized and will appear in HTML
// Factory function that returns a DDO: Directive Definition Object
//  It will execute only once, regardless of how many times it encounters the Directive
//  so it is ideal for handling initialization

MyTag.$inject = [...]
function MyTag() {
  var ddo = {
    template: 'Hello Directive World!'
  };

  return ddo;
}

// Now every time we use my-tag in the html we will get 'Hello Directive World'
