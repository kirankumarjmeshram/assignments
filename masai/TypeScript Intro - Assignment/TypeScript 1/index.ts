// Numeric Types
let age:Number = 25;
// let largeNumber:bigint = 9838833838n;

// String Type
let yourName: string = "John Doe";

// boolean Type
let isStudent: boolean = true;

// Array
let score: number[] = [85,90,95];
let color: string[] = ["red","green","blue"];
let answers: boolean[] = [true,false,true];

// Tuple Type
let person: [string,number] = ["Alice",30];

// Enum Type
enum Direction {
    "North",
    "East",
    "South",
    "West"
}
let currentDirection: Direction = Direction.North;

// Any Type
let randomValue: any = "Hello";

// Void Type
function logMessage(message: string): void {
    console.log(message);
}

// Null and Undefined
let emptyValue: null = null;
let notAssigned: undefined = undefined;

// Function Declaration
function addNumbers(a: number, b: number): number {
    return a + b;
}

let sum = addNumbers(10, 20);
console.log("Sum:", sum);

function greetUser(personName: string, isStudent: boolean): string {
  return `Hello, ${personName}! You are ${isStudent ? "a student" : "not a student"}.`;
}
console.log(greetUser("John", true));


// Object Type
let user: object = {
    name: "John Doe",
    age: 30
};

interface Car{
    brand: string;
    model: string;
    year: number;
}

let myCar:Car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020
}
console.log("Car Detail", myCar);

// Union Type
let mixed: string | number = 30;
mixed = "Hello";


// Never Type
function throwError(message: string): never {
    throw new Error(message);
}



// Type Assertions
let someValue: any = "Hello";

let strLength: number = (someValue as string).length;
let strLength1: number = (<string>someValue).length;


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
