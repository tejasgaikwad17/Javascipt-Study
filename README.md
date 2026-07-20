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

### Primitive Data Types (7)
    These store a single, simple value.
    1. String
    2. Number
    3. Boolean
    4. Undefined
    5. Null
    6. BigInt
    7. Symbol

### Non-Primitive (Reference) Data Type
    1. Object
    Arrays and functions are also objects in JavaScript.

## Type Conversion (Conversion Operations)

### What is Type Conversion?
    Type Conversion means changing a value from one data type to another.
    
    For example:
    1. String  ➝ Number
    2. Number  ➝ String
    3. Boolean ➝ Number

    P1 - let age = "23";
         let convertedAge = Number(age);
         console.log(convertedAge); //23
         console.log(typeof convertedAge); //Number

### Types of Conversion

    There are 2 types:
    1. Implicit Type Conversion (Type Coercion) → JavaScript does it automatically.
    2. Explicit Type Conversion → You do it manually.

    1.1. Invalid String ➝ Number

    let age = "25abc";
    let convertedAge = Number(age);
    console.log(convertedAge);
    console.log(typeof convertedAge);

## Operators 
   
### What is an Operator?
    An operator is a symbol that performs an operation on one or more operands (values or variables).

### Types of Operators

    JavaScript has the following main types:
    1. Arithmetic Operators
    2. Assignment Operators
    3. Comparison Operators
    4. Logical Operators
    5. Increment & Decrement Operators
    6. String Operators
    7. Ternary Operator
    8. Nullish Coalescing Operator (??)
    9. Optional Chaining (?.)
    10. Type Operators (typeof, instanceof)
    11. Bitwise Operators (Advanced)

#### 1. Arithmetic Operators -
        Used to perform mathematical operations.

        P1 -    let a = 10;
                let b = 3;

                console.log("Addition:", a + b); Addition: 13
                console.log("Subtraction:", a - b); Subtraction: 7
                console.log("Multiplication:", a * b); Multiplication: 30
                console.log("Division:", a / b); Division: 3.3333333333333335
                console.log("Modulus:", a % b); Modulus: 1
                console.log("Power:", a ** b); Power: 1000

#### 2. Assignment Operators -
        Used to assign values to variables.

        P1 -    let a = 10;

                a += 5;
                console.log(a); //15
                a -= 3;
                console.log(a); //12
                a *= 2;
                console.log(a); //24
                a /= 4;
                console.log(a); //6
                a %= 3;
                console.log(a); //0

#### 3. Comparison Operators -
        Comparison operators always return a Boolean (true or false).

        P1 -    let a = 10;
                let b = "10";

                console.log(a == b);  //true
                console.log(a === b); //false
                console.log(a != b);  //false
                console.log(a !== b); //true
                console.log(a > 5);   //true
                console.log(a < 20);  //true

#### 4. Logical Operators - 
        Used to combine or invert Boolean values.

#####   AND (&&)
        Returns true only if both conditions are true.
        P1 -    let age = 25;
                let hasLicense = true;
                console.log(age >= 18 && hasLicense); //true

#####   OR (||)
        Returns true if at least one condition is true.
        P1 -    let isWeekend = false;
                let isHoliday = true;
                console.log(isWeekend || isHoliday); //true

#####   NOT (!)
        Reverses the Boolean value.
        P1 -    let isLoggedIn = true;
                console.log(!isLoggedIn); //false

#### 5. Increment & Decrement Operators -

#####   Increment (++)
        Increases the value by 1.
        P1 -    let a = 5;
                a++;
                console.log(a); //6

#####   Decrement (--)
        Decreases the value by 1.
        P1 -    let a = 5;
                a--;
                console.log(a); //4

#####   Prefix vs Postfix
        Postfix
        P1 -    let a = 5;
                console.log(a++); //5
                console.log(a);   //6

        Prefix
        P1 -    let a = 5;
                console.log(++a); //6
                console.log(a);   //6

######  Easy way to remember:
        a++ → Use the current value first, then increase it.
        ++a → Increase the value first, then use it.

####    7. Ternary Operator -
        Short form of if...else.
        Syntax - condition ? valueIfTrue : valueIfFalse;

        P1 -  let age = 20;
        let result = age >= 18 ? "Eligible to Vote" : "Not Eligible";
        console.log(result); //Eligible to Vote