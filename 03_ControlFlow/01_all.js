// 1. if
let age = 20;

if (age >= 18) {
    console.log("Eligible to vote");
}

// 2. if else
let marks = 30;

if (marks >= 35) {
    console.log("Pass");
} else {
    console.log("Fail");
}

// 3. else if ladder
marks = 78;

if (marks >= 90) {
    console.log("A+");
} else if (marks >= 75) {
    console.log("A");
} else {
    console.log("B");
}

// 4. nested if
let hasLicense = true;

if (age >= 18) {
    if (hasLicense) {
        console.log("Can drive");
    }
}

// 5. logical operators
console.log(age >= 18 && hasLicense);
console.log(age >= 18 || hasLicense);
console.log(!hasLicense);

// 6. ternary
let status = age >= 18 ? "Adult" : "Minor";
console.log(status);

// 7. switch
let day = 2;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    default:
        console.log("Invalid");
}