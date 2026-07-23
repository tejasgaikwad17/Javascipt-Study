// ==============================
// JavaScript Data Types Example
// ==============================

// 1. String
let firstName = "Tejas";
let city = 'Pune';
let message = `Welcome to JavaScript`;

console.log("----- String -----");
console.log(firstName);
console.log(city);
console.log(message);
console.log(typeof firstName);

// 2. Number
let age = 23;
let price = 99.99;
let temperature = -5;

console.log("\n----- Number -----");
console.log(age);
console.log(price);
console.log(temperature);
console.log(typeof age);

// 3. Boolean
let isStudent = true;
let isLoggedIn = false;

console.log("\n----- Boolean -----");
console.log(isStudent);
console.log(isLoggedIn);
console.log(typeof isStudent);

// 4. Undefined
let salary;

console.log("\n----- Undefined -----");
console.log(salary);
console.log(typeof salary);

// 5. Null
let user = null;

console.log("\n----- Null -----");
console.log(user);
console.log(typeof user); // object (JavaScript historical bug)

// 6. BigInt
let bigNumber = 1234567890123456789012345678901234567890n;

console.log("\n----- BigInt -----");
console.log(bigNumber);
console.log(typeof bigNumber);

// 7. Symbol
let id = Symbol("EmployeeID");

console.log("\n----- Symbol -----");
console.log(id);
console.log(typeof id);

// 8. Object
let employee = {
    id: 101,
    name: "Tejas",
    age: 23,
    city: "Pune"
};

// console.log("\n----- Object -----");
// console.log(employee);
// console.log(employee.name);
// console.log(typeof employee);

// // 9. Array (Object Type)
// let skills = ["HTML", "CSS", "JavaScript", "PHP", "MySQL"];

// console.log("\n----- Array -----");
// console.log(skills);
// console.log(skills[0]);
// console.log(typeof skills);

// // 10. Function
// function greet() {
//     return "Hello, Welcome!";
// }

// console.log("\n----- Function -----");
// console.log(greet());
// console.log(typeof greet);


// ----- String -----
// Tejas
// Pune
// Welcome to JavaScript
// string

// ----- Number -----
// 23
// 99.99
// -5
// number

// ----- Boolean -----
// true
// false
// boolean

// ----- Undefined -----
// undefined
// undefined

// ----- Null -----
// null
// object

// ----- BigInt -----
// 1234567890123456789012345678901234567890n
// bigint

// ----- Symbol -----
// Symbol(EmployeeID)
// symbol

// ----- Object -----
// { id: 101, name: 'Tejas', age: 23, city: 'Pune' }
// Tejas
// object

// ----- Array -----
// [ 'HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL' ]
// HTML
// object

// ----- Function -----
// Hello, Welcome!
// function