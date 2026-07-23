let fruits = ["Apple", "Banana", "Mango"];

console.log("Original:", fruits);

fruits.push("Orange");
console.log("Push:", fruits);

fruits.pop();
console.log("Pop:", fruits);

fruits.unshift("Kiwi");
console.log("Unshift:", fruits);

fruits.shift();
console.log("Shift:", fruits);

console.log("Length:", fruits.length);
console.log("Index:", fruits.indexOf("Banana"));
console.log("Includes:", fruits.includes("Apple"));

let more = ["Grapes", "Pineapple"];
console.log("Concat:", fruits.concat(more));

console.log("Slice:", fruits.slice(1, 3));

fruits.splice(1, 1, "Papaya");
console.log("Splice:", fruits);

console.log("Reverse:", [...fruits].reverse());

console.log("Sort:", [...fruits].sort());

console.log("\nLoop:");

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}