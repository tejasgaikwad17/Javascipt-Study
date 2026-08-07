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

##      String

###     What is a String?
        A String is a sequence of characters used to store text.

###     Ways to Create Strings
        1. let name = "Tejas";
        2. let name = 'Tejas';
        3. let name = `Tejas`; //Template Literals (Backticks)

        4. Using template literals:

        let firstName = "Tejas";
        let age = 23;
        console.log(`My name is ${firstName} and I am ${age} years old.`);

###     String Properties

        1. length - Returns the number of characters.

        P1 - let name = "JavaScript";
             console.log(name.length); //10

        2. Accessing Characters - Strings are zero-indexed.
           J  a  v  a  S  c  r  i  p  t
           0  1  2  3  4  5  6  7  8  9

        P1 - let lang = "JavaScript";
             console.log(lang[0]);  //J
             console.log(lang[4]);  //s
             console.log(lang[9]);  //t

###    Common String Methods

####    1. toUpperCase() - Converts to uppercase.
        
        P1 - let name = "tejas";
             console.log(name.toUpperCase()); //TEJAS

####    2. toLowerCase() - Converts to lowercase.

        P1 - let name = "TEJAS";
             console.log(name.toLowerCase()); //tejas

####    3. trim() - Removes spaces from both ends.

        P1 - let name = "   Tejas   ";
             console.log(name.trim());
        
####    4. includes() - Checks whether a string contains another string.
        
        P1 - let message = "Welcome to JavaScript";
             console.log(message.includes("Java")); //true
        
####    5. startsWith() - 

        P1 - let str = "JavaScript";
             console.log(str.startsWith("Java")); //true
        
####    6. endsWith() - 
        
        P1 - let str = "JavaScript";
             console.log(str.endsWith("Script")); //true

####    7. indexOf() - Returns the first index of a character or substring.

        P1 - let str = "JavaScript";
             console.log(str.indexOf("S")); //4

####    8. lastIndexOf() - Returns the last occurrence.

        P1 - let str = "banana";
             console.log(str.lastIndexOf("a")); //5

####    9. slice() - Extracts part of a string.
        
        P1 - let str = "JavaScript";
             console.log(str.slice(0, 4)); //Script
        
####    10. substring() - Works similarly to slice() but doesn't support negative indexes.

        P1 - let str = "JavaScript";
             console.log(str.substring(4, 10)); //Script
        
####    11. replace() - Replaces the first matching occurrence.
        
        P1 - let str = "Hello Java";
             console.log(str.replace("Java", "PHP")); //Hello PHP
        
####    12. replaceAll() - Replaces all matching occurrences.

        P1 - let str = "Java Java Java";
             console.log(str.replaceAll("Java", "PHP")); //PHP PHP PHP

####    13. split() - Converts a string into an array.

        P1 - let str = "HTML,CSS,JavaScript";
             console.log(str.split(",")); //["HTML", "CSS", "JavaScript"]

####    14. concat() - Joins strings.
        
        P1 - let first = "Tejas";
             let last = "Gaikwad";
             console.log(first.concat(" ", last)); //Tejas Gaikwad

####    15. charAt() - Returns the character at a given index.

        P1 - let str = "JavaScript";
             console.log(str.charAt(4)); //S

##      Arrays -

###     What is an Array?
        An Array is a special object used to store multiple values in a single variable.

        P1 - let students = ["Tejas", "Rahul", "Amit", "Rohit"];
             console.log(students);   // [ 'Tejas', 'Rahul', 'Amit', 'Rohit' ]

###     Array Index
        Arrays use zero-based indexing.
        Fruit      Apple   Banana   Mango   Orange
        Index        0        1        2        3

        P1 - let fruits = ["Apple", "Banana", "Mango", "Orange"];
             console.log(fruits[0]); //Apple
             console.log(fruits[2]); //Mango

        P2 - let fruits = ["Apple", "Banana", "Mango"];
             fruits[1] = "Kiwi";
             console.log(fruits); //[ 'Apple', 'Kiwi', 'Mango' ]

###     Array length

        P1 - let fruits = ["Apple", "Banana", "Mango"];
             console.log(fruits.length); //3

###     Arrays Can Store Different Data Types

        P1 - let data = [
                          "Tejas",
                           23,
                           true,
                           null,
                           { city: "Pune" },
                           ["HTML", "CSS"]
                        ];

             console.log(data); //[ 'Tejas', 23, true, null, { city: 'Pune' }, [ 'HTML', 'CSS' ] ]

###     Common Array Methods

####    1. push() - Adds an element to the end.
        P1 - let fruits = ["Apple", "Banana"];
             fruits.push("Mango");
             console.log(fruits); // [ 'Apple', 'Banana', 'Mango' ]

####    2. pop() - Removes the last element.
        P1 - let fruits = ["Apple", "Banana", "Mango"];
             fruits.pop();
             console.log(fruits); //[ 'Apple', 'Banana' ]

####    3. unshift() - Adds an element at the beginning.
        P1 - let fruits = ["Banana", "Mango"];
             fruits.unshift("Apple");
             console.log(fruits); //['Apple','Banana', 'Mango']

####    4. shift() - Removes the first element.
        P1 - let fruits = ["Apple", "Banana", "Mango"];
             fruits.shift();
             console.log(fruits); // ['Banana', 'Mango']

####    5. indexOf() - Returns the index of an element.
        P1 - let fruits = ["Apple", "Banana", "Mango"];
             console.log(fruits.indexOf("Banana")); // 1

####    6. includes() - Checks if an element exists.
        P1 - let fruits = ["Apple", "Banana", "Mango"];
             console.log(fruits.includes("Mango")); // true

####    7. concat() - Joins two arrays.
        P1 - let arr1 = [1, 2];
             let arr2 = [3, 4];
             let result = arr1.concat(arr2);
             console.log(result); //[1, 2, 3, 4]

####    8. slice() - Returns part of an array.
        P1 - let numbers = [10, 20, 30, 40, 50];
             console.log(numbers.slice(1, 4)); // [20, 30, 40]

####    9. splice() - Adds or removes elements from the original array.
        P1 - let numbers = [10, 20, 30, 40];
             numbers.splice(1, 2);
             console.log(numbers); //[10, 40]

####    10. reverse() 
        P1 - let numbers = [1, 2, 3];
             console.log(numbers.reverse()); // [3, 2, 1]

####    11. sort()
        P1 - let fruits = ["Mango", "Apple", "Banana"];
             console.log(fruits.sort()); // [ 'Apple', 'Banana', 'Mango' ]

###     Loop Through an Array
        P1 - let fruits = ["Apple", "Banana", "Mango"];
             for (let i = 0; i < fruits.length; i++) {
                  console.log(fruits[i]); // Apple
             }                               Banana
                                             Mango

##      Objects in JavaScript

###     What is an Object?
        An object is a collection of properties.

        Each property has:
        1. a key (property name)
        2. a value

        P1 - let student = {
                              name: "Tejas",
                              age: 23
                           };
        
        Here:    name, age → key
                "Tejas", 23 → value

###     Why Use Objects?

####    1. Without objects:
           let name = "Tejas";
           let age = 23;
           let city = "Pune";

####    2. With objects:
           let student = {
             name: "Tejas",
             age: 23,
             city: "Pune"
           };

###     Creating Objects

####    Method 1: Object Literal (Most Common)

        P1 - let employee = {
                id: 101,
                name: "Tejas",
                salary: 45000
             };
             console.log(employee);

####    Method 2: Using new Object()

        P2 - let employee = new Object();
             employee.id = 101;
             employee.name = "Tejas";
             employee.salary = 45000;
             console.log(employee);

###     Accessing Object Properties

####    Dot Notation

        P1 - let student = {
                name: "Tejas",
                age: 23
             };

             console.log(student.name); //Tejas
             console.log(student.age);  //23

####    Bracket Notation

        P1 - let student = {
                name: "Tejas",
                age: 23
             };

             console.log(student["name"]); //Tejas
             console.log(student["age"]);  //23

####    When to use bracket notation?
        When the property name is dynamic.

        P1 - let key = "name";
             console.log(student[key]); //Tejas

####    Adding Properties
        P1 - let student = {
                name: "Tejas"
             };

             student.age = 23;
             student.city = "Pune";
             console.log(student); //{ name: 'Tejas', age: 23, city: 'Pune' }

####    Updating Properties
        P1 - let student = {
                name: "Tejas",
                age: 23
             };

             student.age = 24;
             console.log(student); //{name: "Tejas", age: 24}

####    Deleting Properties
        P1 - let student = {
                name: "Tejas",
                age: 23,
                city: "Pune"
             };

             delete student.city;
             console.log(student); // {name: "Tejas", age: 23}

###     Object Methods
        Functions inside objects are called methods.

        P1 - let student = {
                name : "Tejas",
                age : 32,
                greet : function() {
                        console.log("Hello, My name is " + this.name)
                }
             }
             student.greet() //Hello, My name is Tejas

####    this
        this refers to the current object.

###     Nested Objects
        Objects can contain other objects.

        P1 - let student = {
                name: "Tejas",
                age: 23,

             address: {
                city: "Pune",
                state: "Maharashtra"
              }
        };

        console.log(student.address.city);  //Pune
        console.log(student.address.state); //Maharashtra

###     Object with Array

        P1 - let student = {
                name: "Tejas",
                skills: ["HTML", "CSS", "JavaScript"]
             };
             console.log(student.skills[0]); //HTML
             console.log(student.skills[2]); //JavaScript

###     Arrays of object 
        Very common in real projects.

        P1 - let employees = [
                { id: 1, name: "Tejas" },
                { id: 2, name: "Rahul" },
                { id: 3, name: "Amit" }
             ];
             console.log(employees[1].name); // Rahul

###     Looping Through an Object
        for...in

        P1 - let student = {
                name: "Tejas",
                age: 23,
                city: "Pune"
             };

             for (let key in student){
                console.log(key, ":" student[key])
             }        
             // name : Tejas
                age : 23
                city : Pune

###     Important Object Methods

####    Object.keys()

        P1 - let student = {
                name: "Tejas",
                age: 23
             };
             console.log(Object.keys(student)); // [ 'name', 'age' ]  - square braket because it retuns in the array format

####    Object.values()

        P1 - let student = {
                name: "Tejas",
                age: 23
             };
             console.log(Object.values(student)); //[ 'Tejas', 23 ]

####    Object.entries()

        P1 - let student = {
                name: "Tejas",
                age: 23
             };
             console.log(Object.entries(student)); //[ [ 'name', 'Tejas' ], [ 'age', 23 ] ]

###     Object Destructuring (ES6)
        Extract properties into variables.

        P1 - let student = {
                name: "Tejas",
                age: 23,
                city: "Pune"
             };

             let { name, age } = student;
             console.log(name); //Tejas
             console.log(age);  //23

###     Object Reference Behavior
        Objects are stored by reference.

        P1 - let obj1 = { name: "Tejas" };
             let obj2 = obj1;
             
             obj2.name = "Rahul";
             
             console.log(obj1.name); //Rahul
             console.log(obj2.name); //Rahul


##      Functions in JavaScript
        A function is a reusable block of code that performs a specific task.

        P1 - function greet() {
                console.log("Hello Tejas");
             }
        greet(); //Hello Tejas

###     Functions with parameter

        P1 - function greet(name) {
                     console.log("Hello " + name);
                  }

             greet("Tejas"); //Hello Tejas
             greet("Rahul"); //Hello Rahul

        Here name is a parameter, and "Tejas" is an argument.

###     Function Returning a Value

        P1 - function add(a, b) {
                return a + b;
             }

             let result = add(10, 20);
             console.log(result); //30

###     Arrow Function (ES6)

        P1 - const subtract = (a, b) => {
                  return a - b;
                };
             console.log(subtract(10, 3)); //7

###     Anonymous Function
        The function has no name.

        P1 - setTimeout(function() {
                        console.log("Executed after 1 second");
                }, 1000);

###     Callback Function

        P1 - function calculate(a, b, operation) {
                         return operation(a, b);
                      }

             function add(x, y) {
                        return x + y;
                     }

             console.log(calculate(5, 3, add)); //8

##      Function Scope vs Global Scope

###     What is Scope?
        Scope determines where a variable can be accessed.
        There are three main scopes:
        1. Global Scope
        2. Function Scope
        3. Block Scope

###     1. Global Scope
        Global variables are accessible everywhere.

        P1 - let globalVar = "I am global"
             function test() {
                console.log(globalVar)
             }
             test() //I am global
             console.log(globalVar) //I am global

###     2. Function Scope

        P1 - function test() {
                                let localVar = "I am local";
                                console.log(localVar);
                        }
             test(); //I am local
             console.log(localVar); //ReferenceError: localVar is not defined

###     3. Block Scope (`let` and `const`)
        let and const are block-scoped.

        P1 - if (true) {
                        let a = 10;
                        const b = 20;

                        console.log(a); //10
                        console.log(b); //20
                }
                console.log(a); //ReferenceError: a is not defined

##      Control Flow in JavaScript

###     What is Conditional Flow?
        Conditional flow means executing different code based on a condition.

        Real-life example:
        1. If it is raining → take an umbrella.
        2. If marks are above 35 → pass.
        3. If age is 18 or more → eligible to vote.

        In JavaScript, conditions usually return true or false.

###     1. if Statement

        Syntax -    if (condition) {
                // code runs if condition is true
                }

        P1 - let age = 20;
             if (age >= 18) {
                console.log("Eligible to vote");
             } // Eligible to 
             
###     2. if...else
        Use when you have two possible outcomes.

        P1 -  let age = 16;

              if (age >= 18) {
                console.log("Eligible to vote");
              } else {
                console.log("Not eligible to vote"); //Not eligible to vote
              }

###     if...else if...else
        Use when there are multiple conditions.

        P1 - let marks = 82;

             if (marks >= 90) {
                console.log("Grade A+");
             } else if (marks >= 75) {
                console.log("Grade A"); //s Grade A
             } else if (marks >= 60) {
                console.log("Grade B");
             } else if (marks >= 35) {
                console.log("Grade C");
             } else {
                console.log("Fail");
             } 

###     4. Nested if
        An if inside another if.

        P1 -    let age = 22;
                let hasLicense = true;

                if (age >= 18) {
                if (hasLicense) {
                        console.log("You can drive"); //You can drive
                } else {
                        console.log("Get a driving license first");
                }
                } else {
                console.log("You are too young to drive");
                }

###     5. Ternary Operator
        Short form of if...else.

        Syntax - condition ? valueIfTrue : valueIfFalse;

        P1 -    let age = 20;
                             -condition- -true-    -false-
                let result = age >= 18 ? "Adult" : "Minor";

                console.log(result); // Adult

###     6. switch Statement
        Use when comparing one value against many options.

        Syntax - switch (value) {
                      case option1:
                      // code
                      break;

                      case option2:
                      // code
                      break;

                      default:
                      // code
                }

        P1 - let day = 3;

                switch (day) {
                        case 1:
                        console.log("Monday");
                        break;

                        case 2:
                        console.log("Tuesday");
                        break;

                        case 3:
                        console.log("Wednesday"); //Wednesday
                        break;

                        default:
                        console.log("Invalid day");
                }
        
####    Why break is Important
        Without break, execution continues into the next case.

        P1 - let day = 1;

                switch (day) {
                                case 1:
                                console.log("Monday");

                                case 2:
                                console.log("Tuesday");
                }
        OP - Monday
             Tuesday

##      Loops in JavaScript

###     What is a Loop?
        A loop repeatedly executes a block of code until a condition becomes false.

        Without a loop
        console.log(1);
        console.log(2);
        console.log(3);
        console.log(4);
        console.log(5);

        With a loop
        for (let i = 1; i <= 5; i++) {
           console.log(i);
        }

        Output:
        1
        2
        3
        4
        5

        Notice how only three lines of code print five numbers.

###     Types of Loops in JavaScript
        1. for
        2. while
        3. do...while
        4. for...of
        5. for...in

###     1. for Loop
        
        Syntax - 
        for (initialization; condition; update)
         { // code }

        Example - 
        for (let i = 1; i <= 5; i++) 
        { console.log(i); }

        Output:
        2
        4
        6
        8
        10

###     2. while Loop
        Used when the number of iterations is not known in advance.

        Syntax -
        while (condition) 
        { // code }

        Example
        let i = 1;
        while (i <= 5) { 
                console.log(i);
                i++; 
            } // 1 to 5
        
###     3. do...while Loop
        Executes the code at least once, even if the condition is false.

        Syntax - 
        do { 
                // code
           } while (condition);
        
        Example - 
        let i = 1;
        do { 
              console.log(i);
              i++; 
           } while (i <= 5); // 1 to 5
        
###     4. break
        Stops the loop immediately.

        for (let i = 1; i <= 10; i++) {
                if (i === 5) {
                        break;
                  }
                 console.log(i); // 1 to 5
               }

###     5. continue
        Skips the current iteration.

        for (let i = 1; i <= 5; i++) {
                 if (i === 3) {
                         continue; 
                         } 
                         console.log(i); 
                         } // 1 to 5

###     6. Nested Loops
        A loop inside another loop.

        Multiplication Table

        for (let i = 1; i <= 3; i++) {
                for (let j = 1; j <= 3; j++) {
                        console.log(i + " x " + j + " = " + i * j);
                        }
                }
        
        Output:

        1 x 1 = 1
        1 x 2 = 2
        1 x 3 = 3
        2 x 1 = 2
        2 x 2 = 4
        2 x 3 = 6
        3 x 1 = 3
        3 x 2 = 6
        3 x 3 = 9


##      What is forEach()?

        forEach() is an array method used to execute a function once for each element in an array.

        Think of it as a cleaner alternative to a for loop when you only want to visit each element.

        Syntax - 

        array.forEach(function(element, index, array) {
            // code
        });

        1. element → current item
        2. index → position of the item
        3. array → the original array

###     Example 1: Print Array Elements

        let fruits = ["Apple", "Banana", "Mango"];

        fruits.forEach(function(fruit) {
        console.log(fruit);
        });
        Output
        Apple
        Banana
        Mango

        This does the same work as:

        for (let i = 0; i < fruits.length; i++) {
        console.log(fruits[i]);
        }

###     Example 2: Using Arrow Function
        
        let fruits = ["Apple", "Banana", "Mango"];

        fruits.forEach((fruit) => {
        console.log(fruit);
        });

        Shorter syntax:

        fruits.forEach(fruit => console.log(fruit));

##      map()

        What is map()?
        map() is an array method that creates a new array by applying a function to every element of the original array.

        Syntax -
        array.map(function(element, index, array) {
                return transformedValue;
        });
        element → current item
        index → position
        array → original array
        return → value that goes into the new array

###     Example 1: Double Numbers
        let numbers = [1, 2, 3, 4];

        let doubled = numbers.map(function(num) {
        return num * 2;
        });

        console.log(doubled);
        console.log(numbers);
        Output
        [2, 4, 6, 8]
        [1, 2, 3, 4]

        Notice:

        doubled is a new array.
        numbers remains unchanged.

##      filter()

        What is filter()?
        filter() is an array method that creates a new array containing only the elements that satisfy a condition.

        Syntax -
        array.filter(function(element, index, array) {
                return condition;
        });
        element → current item
        index → position
        array → original array
        Must return true or false
        true → keep the element
        false → discard the element

###     Example 1: Filter Even Numbers
        let numbers = [1, 2, 3, 4, 5, 6];

        let evenNumbers = numbers.filter(function(num) {
        return num % 2 === 0;
        });

        console.log(evenNumbers);
        console.log(numbers);
        Output
        [2, 4, 6]
        [1, 2, 3, 4, 5, 6]

        Notice that the original array is not modified.

##      reduce()

        What is reduce()?
        reduce() is used to reduce an entire array into a single value.


        Syntax
        array.reduce((accumulator, currentValue) => {
        return updatedAccumulator;
        }, initialValue);

        Parameters
        Parameter :	|  Meaning :
        accumulator	|  Stores the running result
        currentValue	|  Current array element
        initialValue	|  Starting value

        Examples:

        Sum of all numbers
        Product of all numbers
        Maximum value
        Minimum value
        Count occurrences
        Group data
        Build objects from arrays

        Think of it like this:

        [1, 2, 3, 4, 5]
                ↓
        reduce
                ↓
        15

        Many values become one value.

###     Example 1: Sum of Numbers
        let numbers = [1, 2, 3, 4, 5];

        let sum = numbers.reduce((acc, curr) => {
        return acc + curr;
        }, 0);

        console.log(sum);
        Output
        15

##      forEach() vs map() vs filter() vs reduce()

        Method	    |           Purpose	                 |          Returns
        forEach()	        Perform action	                    undefined
        map()	                Transform data	                    New array
        filter()	        Select data	                    New array
        reduce()	        Combine data	                    Single value

