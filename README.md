## Variables

 ### What is a Variable?
    A variable is a named container used to store data in memory so that you can use it later in your program.

 ### JavaScript has 3 ways to create variables
    1. var
    2. let
    3. const
    These are called variable declaration keywords.

 ### Rules:
    1. Can contain letters, numbers, _, and $.
    2. Cannot start with a number.
    3. Cannot use reserved keywords (let, var, const, if, for, etc.).
    4. JavaScript is case-sensitive, so age and Age are different variables.

 ### var   
    This is allowed with var, but it can lead to bugs.

    P1-    var city = "Pune";
           city = "Mumbai";
           console.log(city); //Mumbai

    P2-    var city = "Pune";
           var city = "Delhi";
           console.log(city); //Delhi

### let 
    Cannot be redeclared in the same scope

    P1 - let name = "Tejas";
         let name = "Rahul"; //SyntaxError: Identifier 'name' has already been declared

    P2 - let name = "Tejas";
         {
            let name = "Rahul";
            console.log(name); // Rahul
         }
         console.log(name); // Tejas

### const 
    Used for values that should not change.

    P1 - const country = "India";
         country = "USA"; //TypeError: Assignment to constant variable.

    P2 - const country = "India";
         const country = "USA"; //SyntaxError

### Which one should you use?
    1. Use const by default.
    2. Use let when the value needs to change.
    3. Avoid var in modern JavaScript unless you're maintaining older code.

## Data Types

### What is a Data Type?
    A data type tells JavaScript what kind of value is stored in a variable.

### JavaScript Data Types
    JavaScript has 8 data types.
    They are divided into two categories:

  
