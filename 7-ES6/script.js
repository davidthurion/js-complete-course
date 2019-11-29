// ES5
// var nameES5 = "David";
// var ageES5 = 35;
// nameES5 = "Peter";

// console.log(nameES5);

// ES6
// const nameES6 = "David";
// let ageES6 = 35;
// nameES6 = "Bernard";

// console.log(nameES6);

// function driversLicenceES5(passedTest) {
//   if (passedTest) {
//     var firstname = "John";
//     var birth = 1990;
//   }

//   console.log(firstname + ", born in " + birth + " is now allowed to drive.");
// }

// driversLicenceES5(true);

// function driversLicenceES6(passedTest) {
//   let firstname;
//   const birth = 1990;

//   if (passedTest) {
//     firstname = "John";
//   }
//   console.log(firstname + ", born in " + birth + " is now allowed to drive.");
// }

// driversLicenceES6(true);

// let i = 23;
// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// console.log(i);

// {
//   const a = 1;
//   let b = 2;
//   var c = 3;
// }

// console.log(c);
// console.log(a + b);

// let firstname = "David";
// let lastname = "Thurion";
// const birth = 1984;

// function calcAge(year) {
//   return 2019 - year;
// }

// // ES5
// console.log(
//   "This is " +
//     firstname +
//     " " +
//     lastname +
//     ". He is " +
//     calcAge(birth) +
//     " years old."
// );

// // ES6
// console.log(
//   `This is ${firstname} ${lastname}. He is ${calcAge(birth)} years old.`
// );

// const n = `${firstname} ${lastname}`;
// console.log(n.startsWith("D"));
// console.log(n.startsWith("d"));
// console.log(n.endsWith("rion"));
// console.log(n.includes("vid"));
// console.log(`${firstname} `.repeat(5));

const years = [1990, 1965, 1984, 1944];

// ES5
var agesES5 = years.map(function(element) {
  return 2019 - element;
});

console.log(agesES5);

// ES6
const agesES6 = years.map(element => 2019 - element);
console.log(agesES6);

let otherAgesES6 = years.map(
  (element, index) => `Index ${index + 1}: ${2019 - element}.`
);
console.log(otherAgesES6);

otherAgesES6 = years.map((element, index) => {
  const now = new Date().getFullYear();
  const age = now - element;
  return `Index ${index + 1}: ${age}.`;
});

console.log(otherAgesES6);
