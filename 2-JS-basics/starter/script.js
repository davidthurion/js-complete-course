/*
    Variables and data types
*/

/*
    const firstName = "David";
    console.log(firstName);

    const lasName = "Thurion";
    const age = 34;

    const fullAge = true;
    console.log(fullAge);

    let job;
    console.log(job);

    job = "Webdesigner";
    console.log(job);

    const _3years = 3;
    const davidElza = "David et Elza";
    var if = 23
*/

/*
    Mutation and type coercion
*/

/*
const firstName = "David";
let age = 28;

// Coercion
console.log(firstName + " " + age);

let job, isMarried;
job = "Webdesigner";
isMarried = false;

console.log(
  firstName +
    " is a " +
    age +
    " year old " +
    job +
    ". Is he married? " +
    isMarried
);

// Mutation
age = "thirty four";
job = "driver";

alert(
  firstName +
    " is a " +
    age +
    " year old" +
    job +
    ". Is he married? " +
    isMarried
);

const lastName = prompt("What's your last name?");
console.log(lastName);
*/

/*
    Operators
*/

/*
// Math operators
const currentYear = 2018;
const ageDavid = 34;
const ageElza = 30;

const yearDavid = currentYear - ageDavid;
const yearElza = currentYear - ageElza;

console.log(yearDavid);
console.log(currentYear + 2);
console.log(currentYear * 2);
console.log(currentYear / 10);

// Logical operators
const davidOlder = ageDavid > ageElza;
console.log(davidOlder);

// typeof operator
console.log(typeof davidOlder);
 */

/*
    Operator precedence
*/
/*
const currentYear = 2018;
const yearDavid = 1984;
const fullAge = 18;

const isFullAge = currentYear - yearDavid >= fullAge;
console.log(isFullAge);

const ageDavid = currentYear - yearDavid;
const ageElza = 30;
const average = (ageDavid + ageElza) / 2;
console.log(average);

let x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y);

x *= 2;
console.log(x);

x++;
console.log(x);
 */

/*
    Challenge
*/
/*
const johnMass = 78;
const johnHeight = 1.69;
const johnBMI = johnMass / (johnHeight * johnHeight);

const peterMass = 92;
const peterHeight = 1.95;
const peterBMI = peterMass / (peterHeight * peterHeight);

const johnHigherBMI = johnBMI > peterBMI;

console.log("Is John's BMI higher than Peter's? " + johnHigherBMI);
 */

/*
    If / else statement
*/

/*
const firstName = "David";
const civilStatus = "married";

if (civilStatus === "married") {
  console.log(firstName + " is married!");
} else {
  console.log(firstName + " is still single.");
}

const isMarried = false;
if (isMarried) {
  console.log(firstName + " is married!");
} else {
  console.log(firstName + " is still single.");
}

const johnMass = 78;
const johnHeight = 1.69;
const johnBMI = johnMass / (johnHeight * johnHeight);

const peterMass = 92;
const peterHeight = 1.95;
const peterBMI = peterMass / (peterHeight * peterHeight);

// const johnHigherBMI = johnBMI > peterBMI;
// console.log("Is John's BMI higher than Peter's? " + johnHigherBMI);

if (johnBMI > peterBMI) {
  console.log("John's BMI is higher than Peter's");
} else {
  console.log("Peter's BMI is higher than John's");
}
*/

/*
    Boolean logic
*/

/*
const firstName = "David";
const age = 34;

if (age < 13) {
  console.log(firstName + " is a boy");
} else if (age >= 13 && age < 20) {
  console.log(firstName + " is a teenager");
} else if (age >= 20 && age < 30) {
  console.log(firstName + " is a young man");
} else {
  console.log(firstName + " is a man");
}
*/

/*
    Ternary
*/
/*
const firstName = "David";
const age = 34;

age >= 18
  ? console.log(firstName + " drinks beer.")
  : console.log(firstName + " drinks juice.");

const drink = age >= 18 ? "beer" : "juice";
console.log(drink);

if (age >= 18) {
  const drink = "beer";
} else {
  const drink = "juice";
}

// Switch
const job = "instructor";
switch (job) {
  case "teacher":
  case "instructor":
    console.log(firstName + " teaches kids how to code.");
    break;
  case "driver":
    console.log(firstName + " drives all day.");
    break;
  case "designer":
    console.log(firstName + " draw shits.");
    break;
  default:
    console.log(firstName + " does something else.");
}

switch (true) {
  case age < 13:
    console.log(firstName + " is a boy");
    break;
  case age >= 13 && age < 20:
    console.log(firstName + " is a teenager");
    break;
  case age >= 20 && age < 30:
    console.log(firstName + " is a young man");
    break;
  default:
    console.log(firstName + " is a man");
}
*/

/*
    Truthy falsy
*/
/*
let height;
height = 0;

if (height || height === 0) {
  console.log("Variable is defined.");
} else {
  console.log("Variable is not defined.");
}
*/

/*
    Basket challenga
*/
/*
let jTeamAVG = (89 + 120 + 103) / 3;
let mTeamAVG = (116 + 94 + 123) / 3;

jTeamAVG = 110;
mTeamAVG = 110;

if (jTeamAVG > mTeamAVG) {
  console.log("jTeam is the winner with " + jTeamAVG + " points.");
} else if (jTeamAVG === mTeamAVG) {
  console.log("Both team got the same average points with " + jTeamAVG);
} else {
  console.log("mTeam is the winner with " + mTeamAVG + " points.");
}

let maryTeamAVG = (97 + 134 + 105) / 3;
maryTeamAVG = 100;

if (jTeamAVG > mTeamAVG && jTeamAVG > maryTeamAVG) {
  console.log("jTeam is the winner with " + jTeamAVG + " points.");
} else if (mTeamAVG > jTeamAVG && mTeamAVG > maryTeamAVG) {
  console.log("mTeam is the winner with " + mTeamAVG + " points.");
} else if (maryTeamAVG > jTeamAVG && maryTeamAVG > mTeamAVG) {
  console.log("maryTeam is the winner with " + maryTeamAVG + " points.");
} else {
  console.log("There is a draw");
}
*/

/*
    Functions
*/
/*
function calculateAge(birthYear) {
  return 2018 - birthYear;
}

const ageDavid = calculateAge(1984);
const ageElza = calculateAge(1988);
const ageRandom = calculateAge(1956);
console.log(ageDavid, ageElza, ageRandom);

function yearsUntilRetirement(year, firstName) {
  const age = calculateAge(year);
  const retirement = 65 - age;
  if (retirement > 0) {
    console.log(firstName + " retires in " + retirement + " years.");
  } else {
    console.log(firstName + " is already retired.");
  }
}

yearsUntilRetirement(1984, "David");
yearsUntilRetirement(1988, "Elza");
yearsUntilRetirement(1956, "Random");
yearsUntilRetirement(1942, "Random Old");
*/

/*
    Functions expressions
*/
/*
const whatDoYouDo = function(job, firstName) {
  switch (job) {
    case "teacher":
      return firstName + " teaches kids how to code.";
    case "driver":
      return firstName + " drives all day.";
    case "designer":
      return firstName + " draws shit.";
    default:
      return firstName + " does something else.";
  }
};

console.log(whatDoYouDo("teacher", "John"));
console.log(whatDoYouDo("driver", "Peter"));
console.log(whatDoYouDo("designer", "David"));
console.log(whatDoYouDo("retired", "Marc"));
*/

/*
    Array
*/
/*
const names = ["David", "Elza", "Lénaëlle"];
const years = new Array(1984, 1988, 2018);

console.log(names[0] + " is born in " + years[0]);

names[1] = "André";
names[names.length] = "Mary"; // add element to end
console.log(names);

const david = ["David", "Thurion", 1984, "teacher", true];

david.push("blue");
david.unshift("Mr");
console.log(david);

david.pop();
david.shift();
console.log(david);

console.log(david.indexOf(1984));

const isDesigner =
  david.indexOf("designer") === -1
    ? "David is NOT a designer"
    : "David is a designer";
console.log(isDesigner);
*/

/*
    Challenge
*/
/*
function calcTips(bill) {
  let percentage;
  if (bill < 50) {
    percentage = 0.2;
  } else if (bill >= 50 && bill < 200) {
    percentage = 0.15;
  } else {
    percentage = 0.1;
  }
  return bill * percentage;
}

const bills = [124, 48, 268];
const totalWithTips = [
  bills[0] + calcTips(bills[0]),
  bills[1] + calcTips(bills[1]),
  bills[2] + calcTips(bills[2])
];

console.log(bills, totalWithTips);
*/

/*
    Object
*/
/*
const david = {
  firstName: "David",
  lastName: "Thurion",
  birth: 1984,
  family: ["Stéphane", "Thierry", "Christine"],
  job: "designer",
  isMarried: true
};

console.log(david);
console.log(david.firstName);
console.log(david["lastName"]);
const x = "birth";
console.log(david[x]);

david.job = "driver";
console.log(david);
*/

/*
    Object and methods
*/
/*
const david = {
  firstName: "David",
  lastName: "Thurion",
  birth: 1984,
  family: ["Stéphane", "Thierry", "Christine"],
  job: "designer",
  isMarried: true,
  calcAge: function() {
    this.age = 2018 - this.birth;
  }
};

david.calcAge();
console.log(david);
*/
/*
const john = {
  firstName: "John",
  height: 1.95,
  mass: 120,
  calcBMI: function() {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
};
const mark = {
  firstName: "Mark",
  height: 1.69,
  mass: 78,
  calcBMI: function() {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
};

console.log(john, mark);

if (john.calcBMI() > mark.calcBMI()) {
  console.log(john.firstName + " has the higher BMI with " + john.bmi);
} else if (mark.calcBMI() > john.calcBMI()) {
  console.log(mark.firstName + " has the higher BMI with " + mark.bmi);
} else {
  console.log("They have the same BMI");
}
*/

/*
    Loops
*/
/*
for (let i = 0; i < 10; i++) {
  console.log(i);
}

const david = ["David", "Thurion", 1984, "teacher", true];

for (let i = 0; i < david.length; i++) {
  console.log(david[i]);
}

let i = 0;
while (i < david.length) {
  console.log(david[i]);
  i++;
}
*/
/*
const david = ["David", "Thurion", 1984, "teacher", true];

for (let i = 0; i < david.length; i++) {
  if (typeof david[i] !== "string") continue;
  console.log(david[i]);
}

for (let i = 0; i < david.length; i++) {
  if (typeof david[i] !== "string") break;
  console.log(david[i]);
}

for (let i = david.length - 1; i >= 0; i--) {
  console.log(david[i]);
}
*/

/*
    Challenge 5
*/

const john = {
  fullName: "John Smitjh",
  bills: [124, 48, 268, 180, 42],
  calcTips: function() {
    this.tips = [];
    this.total = [];
    for (let i = 0; i < john.bills.length; i++) {
      let percentage;
      let bill = this.bills[i];
      if (bill < 50) {
        percentage = 0.2;
      } else if (bill >= 50 && bill < 200) {
        percentage = 0.15;
      } else {
        percentage = 0.1;
      }
      this.tips[i] = bill * percentage;
      this.total[i] = bill + bill * percentage;
    }
  }
};

const mark = {
  fullName: "Mark Miller",
  bills: [77, 475, 110, 45],
  calcTips: function() {
    this.tips = [];
    this.total = [];
    for (let i = 0; i < mark.bills.length; i++) {
      let percentage;
      let bill = this.bills[i];
      if (bill < 100) {
        percentage = 0.2;
      } else if (bill >= 100 && bill < 300) {
        percentage = 0.1;
      } else {
        percentage = 0.25;
      }
      this.tips[i] = bill * percentage;
      this.total[i] = bill + bill * percentage;
    }
  }
};

function calcAvg(tips) {
  let sum = 0;
  for (let i = 0; i < tips.length; i++) {
    sum += tips[i];
  }
  return sum / tips.length;
}

john.calcTips();
mark.calcTips();

john.avg = calcAvg(john.tips);
mark.avg = calcAvg(mark.tips);

console.log(john, mark);

if (john.avg > mark.avg) {
  console.log(
    john.fullName + "'s family pays higher tips with an average of " + john.avg
  );
} else if (mark.avg > john.avg) {
  console.log(
    mark.fullName + "'s family pays higher tips with an average of " + mark.avg
  );
}
