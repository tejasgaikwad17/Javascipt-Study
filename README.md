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

             