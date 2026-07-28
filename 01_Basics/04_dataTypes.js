let a = 10;
let b = 3;
let c = "10";

console.log("=== Arithmetic ===");
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

console.log("\n=== Comparison ===");
console.log(a == c);
console.log(a === c);
console.log(a != c);
console.log(a !== c);

console.log("\n=== Logical ===");
console.log(true && true);
console.log(true && false);
console.log(true || false);
console.log(!true);

console.log("\n=== Assignment ===");
let x = 5;
x += 5;
console.log(x);

console.log("\n=== Increment ===");
let y = 10;
console.log(y++);
console.log(y);

console.log(++y);

console.log("\n=== Ternary ===");
let age = 18;
console.log(age >= 18 ? "Adult" : "Minor");