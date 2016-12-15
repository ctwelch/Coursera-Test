// Before promises there were callbacks
asyncFuntion(function (){
  // do something when ansyncFunction is complete
});
// but it was tough to get the result back to the caller

// also, chaining was difficult; imagine errorhandling this:
asyncFunction1(function() {
  asyncFunction2(function() {
    ansyncFunction3(function() {
      // do when last async is done
    });
  });
});

// as of ES6 Api:
// A Promise is an object which can be passed around or returned
//  that holds references to the outcome of asynchronous behavior
// In Angular, promises are created through the $q service
function asyncFunction () {
  // defer creates an object that represents the async environment
  // with all the hooks into it, including the promise object
  var deferred = $q.defer();
  if (...) { deferred.resolve(result); } // successful completion
  else { deferred.reject(error); } // error handling
  return deferred.promise;
};

var promise = asyncFunction();

promise.then(function (result) {  // .then returns a promise, allowing chaining
  // do something with result
},
function (error) {
  // handle error
});

// The $q service can also resolve mutltiple promises asynchronously
//  so no promise has to wait for another to complete
// through the all method
$q.all([promise1, promise2])
.then(function (result) {
  // do something with all results
})

.catch(function (error) {
  // handle all errors;
})
