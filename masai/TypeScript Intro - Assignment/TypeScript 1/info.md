
#### Instructions

# Introduction to TypeScript with Data Types

## Level

Level 0

## Time to solve

30 mins

## Overview

This assignment introduces you to TypeScript, a statically typed superset of JavaScript that adds type annotations to variables, functions, and other constructs. You will explore various data types supported by TypeScript and understand how to use them effectively in your code. By completing this assignment, you will gain practical experience in working with TypeScript's data types.

## Detailed Explanation

### Problem Statement

You are tasked with creating a TypeScript application that demonstrates the use of different data types. Follow the guidelines below:

1. **Setup TypeScript Environment** : Set up a TypeScript development environment using your preferred code editor and TypeScript compiler (e.g., `tsc` or integrated compiler in IDE).
2. **Variable Declarations** : Declare variables of different data types and assign values to them:

**Numeric Types:**

* Declare a variable `age` of type `number` and assign it a value of 25.
* Declare a variable `largeNumber` of type `bigint` and assign it a value of `9007199254740991n`.

**String Type:**

* Declare a variable `name` of type `string` and assign it a value of "John Doe".

3. **Boolean Type:**
   * Declare a variable `isStudent` of type `boolean` and assign it a value of `true`.

**Array Types:**

* Declare a variable `scores` of type `number[]` and assign it an array of numbers `[85, 90, 95]`.
* Declare a variable `colors` of type `string[]` and assign it an array of strings `["red", "green", "blue"]`.
* Declare a variable `answers` of type `boolean[]` and assign it an array of booleans `[true, false, true]`.

**Tuple Type:**

* Declare a variable `person` of type `[string, number]` and assign it a tuple `["Alice", 30]`.

**Enum Type:**

* Declare an enum `Direction` with members `North`, `East`, `South`, and `West`.
* Declare a variable `currentDirection` of type `Direction` and assign it the value `Direction.North`.

**Any Type:**

* Declare a variable `randomValue` of type `any` and assign it a value of `"Hello"`.

**Void Type:**

* Declare a function `logMessage` that returns `void` and takes a parameter `message` of type `string`. The function should log the message to the console.

**Null and Undefined Types:**

* Declare a variable `emptyValue` of type `null` and assign it a value of `null`.
* Declare a variable `notAssigned` of type `undefined` and assign it a value of `undefined`.

 **Function Declarations** : Define functions with parameter and return type annotations:

* Function Parameters: Declare parameters with type annotations.
* Return Types: Specify return types for functions.

 **Object Types** : Define object types using interfaces and type aliases:

* Interface: Create interfaces to define object shapes with specific properties and types.
* Type Alias: Use type aliases to create custom type names for complex data structures.

 **Testing** : Test your TypeScript code by assigning values of different data types to variables, passing arguments to functions, and accessing object properties.
