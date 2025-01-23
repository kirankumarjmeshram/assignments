// Numeric Types
var age = 25;
// let largeNumber:bigint = 9838833838n;
// String Type
var yourName = "John Doe";
// boolean Type
var isStudent = true;
// Array
var score = [85, 90, 95];
var color = ["red", "green", "blue"];
var answers = [true, false, true];
// Tuple Type
var person = ["Alice", 30];
// Enum Type
var Direction;
(function (Direction) {
    Direction[Direction["North"] = 0] = "North";
    Direction[Direction["East"] = 1] = "East";
    Direction[Direction["South"] = 2] = "South";
    Direction[Direction["West"] = 3] = "West";
})(Direction || (Direction = {}));
var currentDirection = Direction.North;
// Any Type
var randomValue = "Hello";
// Void Type
function logMessage(message) {
    console.log(message);
}
// Null and Undefined
var emptyValue = null;
var notAssigned = undefined;
// Function Declaration
function addNumbers(a, b) {
    return a + b;
}
var sum = addNumbers(10, 20);
console.log("Sum:", sum);
function greetUser(personName, isStudent) {
    return "Hello, ".concat(personName, "! You are ").concat(isStudent ? "a student" : "not a student", ".");
}
console.log(greetUser("John", true));
// Object Type
var user = {
    name: "John Doe",
    age: 30
};
var myCar = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020
};
console.log("Car Detail", myCar);
// Union Type
var mixed = 30;
mixed = "Hello";
// Never Type
function throwError(message) {
    throw new Error(message);
}
// Type Assertions
var someValue = "Hello";
var strLength = someValue.length;
var strLength1 = someValue.length;
// Testing
console.log("Age:", age);
// console.log("Large Number:", largeNumber);
console.log("Your Name:", yourName);
console.log("Is Student:", isStudent);
console.log("Scores:", score);
console.log("Colors:", color);
console.log("Answers:", answers);
console.log("Person:", person);
console.log("Current Direction:", Direction[currentDirection]);
console.log("Random Value:", randomValue);
logMessage("This is a void function");
console.log("Empty Value:", emptyValue);
console.log("Not Assigned:", notAssigned);
console.log("Sum:", sum);
console.log(greetUser("John", true));
console.log("User Object:", user);
console.log("Car Detail:", myCar);
console.log("Mixed Value:", mixed);
console.log("String Length (Type Assertion - 'as'):", strLength);
console.log("String Length (Type Assertion - '<>'):", strLength1);
/**
 * Sum: 30
Hello, John! You are a student.
Car Detail { brand: 'Toyota', model: 'Corolla', year: 2020 }
Age: 25
Your Name: John Doe
Is Student: true
Scores: [ 85, 90, 95 ]
Colors: [ 'red', 'green', 'blue' ]
Answers: [ true, false, true ]
Person: [ 'Alice', 30 ]
Current Direction: North
Random Value: Hello
This is a void function
Empty Value: null
Not Assigned: undefined
Sum: 30
Hello, John! You are a student.
User Object: { name: 'John Doe', age: 30 }
Car Detail: { brand: 'Toyota', model: 'Corolla', year: 2020 }
Mixed Value: Hello
String Length (Type Assertion - 'as'): 5
String Length (Type Assertion - '<>'): 5
 */
