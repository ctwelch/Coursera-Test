// Register Service Factory Function
angular.module('app', [])
.controller('ctrl', Ctrl)
// register the name CustomService to the CustomService
// factory method that will return the service
.factory('CustomService', CustomService);
// as opposed to the service set-up where
// you are registering with a function constructor

// either return a function directly
function CustomService() {
  var factory = function() {
    return new SomeService(); // returns a new object each time
  };

  return factory;
}

// or return through an object literal
function CustomService(){
  var factory = {
    getSomeService: function () {
      return new SomeService();
    }
  };

  return factory;
}
