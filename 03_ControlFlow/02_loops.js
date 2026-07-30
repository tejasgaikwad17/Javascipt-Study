 for (let i = 1; i <= 5; i++)
     { console.log("For:", i); } 

  let a = 1; while (a <= 3) 
    { console.log("While:", a); a++; }

  let b = 1; do { console.log("Do While:", b); b++; } while (b <= 3);
for (let i = 1; i <= 5; i++) { if (i === 3) break; console.log("Break:", i); } 

 for (let i = 1; i <= 5; i++) { if (i === 3) continue; console.log("Continue:", i); } 
 
 let arr = [10, 20, 30]; for (let value of arr) { console.log("For of:", value); } 

 let obj = { a: 1, b: 2 }; for (let key in obj) { console.log("For in:", key, obj[key]); }