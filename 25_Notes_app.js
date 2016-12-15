// $http service is a method that returns a promise
$http({
  method: "GET",  // default
  url: "http://someurl",  // only required property
  params: { param1: "value1"} // this becomes the query string, gets url encoded
  ...
}).then(
function success(response) {
  // do something with response.data
  $scope.message = response.data;
},
function error(response) {
  // do something with error response
});
