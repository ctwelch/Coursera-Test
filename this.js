function Person() {
  this.fullName = "Yaakov";
  this.fav = "Cookies";

  this.describe = function() {
    console.log('this is: ', this);
    console.log(this.fullName + " likes " + this.fav);
  };
}

var yaakov = new Person();
yaakov.describe(); // context here is person

var describe = yaakov.describe;
//describe(); // context here is window
// using call lets you pass context
//  it takes it from whatever the contex is of the function-instance
describe.call(yaakov);
