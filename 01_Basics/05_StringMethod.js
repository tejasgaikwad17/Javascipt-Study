let fullName = "   Tejas Gaikwad   ";

console.log("Original:", fullName); //Original:    Tejas Gaikwad
console.log("Length:", fullName.length); //Length: 19
console.log("Trim:", fullName.trim()); //Trim: Tejas Gaikwad
console.log("Upper:", fullName.toUpperCase()); //Upper:    TEJAS GAIKWAD
console.log("Lower:", fullName.toLowerCase()); //Lower:    tejas gaikwad

let language = "JavaScript";

console.log("Character:", language[0]); //Character: J
console.log("charAt:", language.charAt(4)); //charAt: S
console.log("Index:", language.indexOf("S")); //Index: 4
console.log("Last Index:", language.lastIndexOf("a")); //Last Index: 3

console.log("Slice:", language.slice(0, 4)); //Slice: Java
console.log("Substring:", language.substring(4, 10)); //Substring: Script

console.log("Replace:", language.replace("Java", "Type")); //Replace: TypeScript

console.log("Includes:", language.includes("Script")); //Includes: true
console.log("Starts With:", language.startsWith("Java")); //Starts With: true
console.log("Ends With:", language.endsWith("Script")); //Ends With: true

let skills = "HTML,CSS,JS,PHP";
console.log("Split:", skills.split(",")); //Split: [ 'HTML', 'CSS', 'JS', 'PHP' ]

let first = "Hello";
let second = "World";
console.log(first.concat(" ", second)); //Hello World

let name = "Tejas";
let age = 23;

console.log(`My name is ${name} and I am ${age} years old.`); //My name is Tejas and I am 23 years old.