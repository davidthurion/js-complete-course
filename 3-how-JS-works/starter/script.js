///////////////////////////////////////
// Lecture: Hoisting

// functions can be called before declaration
/*
calculateAge(1984);

function calculateAge(year) {
  console.log(2018 - year);
}

// Not possible for variables
const retirement = function(year) {
  console.log(65 - (2018 - year));
};

retirement(1984);
*/
///////////////////////////////////////
// Lecture: Scoping

// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/

// Example to show the differece between execution stack and scope chain
/*
var a = "Hello!";
first();

function first() {
  var b = "Hi!";
  second();

  function second() {
    var c = "Hey!";
    third();
  }
}

function third() {
  var d = "John";
  console.log(a + b + c + d);
  console.log(a + d);
}
*/

///////////////////////////////////////
// Lecture: The this keyword

// console.log(this);
/*
calculateAge(1984);

function calculateAge(year) {
  console.log(2018 - year);
  console.log(this);
}
*/
/*
const david = {
  name: "David",
  yearOfBirth: 1984,
  calculateAge: function() {
    console.log(this);
    console.log(2018 - this.yearOfBirth);

    function innerFunction() {
      console.log(this);
    }
    innerFunction();

  }
};

david.calculateAge();

const mike = {
  name: "Mike",
  yearOfBirth: 1980
};

mike.calculateAge = david.calculateAge;
mike.calculateAge();
*/
