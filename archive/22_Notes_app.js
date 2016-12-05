// Using a Provider for a configurable controller

angular.module('app',[])
.controller('ctrl', Ctrl)
.provider('Service', ServiceProvider); // register a name with the ServiceProvider function
.config(Config); // runs before any services, factories or controllers are created

// must use provider function directly since
// this happens before any services exist
Config.$inject = ['ServiceProvider']; // name taken from name that was registered as the ServiceProvider function
function Config(ServiceProvider){
  ServiceProvider.config.prop = 'value';
};

function ServiceProvider() {
  var provider = this;
  provider.config = {}; // can  put your properties here

  // $get is a factory function directly attached to provider instance
  provider.$get = function () {
    var service = new Service(provider.config.prop);
    return service;
  };

  Ctrl.$inject = ['$scope', 'Service'];
  function Ctrl ($scope, Service){
    Service.someMethod();
  };

}
