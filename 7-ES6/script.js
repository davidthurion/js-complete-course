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

function driversLicenceES5(passedTest) {
    if (passedTest) {
        var firstname = "John";
        var birth = 1990;
    }

    console.log(firstname + ', born in ' + birth + ' is now allowed to drive.');
}

driversLicenceES5(true);


function driversLicenceES6(passedTest) {
    let firstname;
    const birth = 1990;

    if (passedTest) {
        firstname = "John";
    }
    console.log(firstname + ', born in ' + birth + ' is now allowed to drive.');
}

driversLicenceES6(true);


let i = 23;
for (let i = 0; i < 5; i++) {
    console.log(i);
}

console.log(i);