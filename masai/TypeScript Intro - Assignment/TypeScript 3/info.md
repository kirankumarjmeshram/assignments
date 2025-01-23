#### Instructions

# Advanced TypeScript with Classes and Inheritance

## Level

Level 2

## Time to solve

45 mins

## Overview

This assignment explores advanced TypeScript concepts related to classes and inheritance. You will build a TypeScript application that utilizes classes to model real-world entities and demonstrates inheritance to establish relationships between entities. By completing this assignment, you will gain a deeper understanding of object-oriented programming principles in TypeScript.

## Detailed Explanation

### Problem Statement

You are tasked with developing a TypeScript application for managing a university's student and staff records. The application should implement the following functionalities using classes and inheritance:

1. **Class Definitions** : Define classes to represent different entities within the university:

* Create a `Person` class with properties `name` and `age` to model basic information about individuals.
* Extend the `Person` class to create two subclasses:
  * `Student`: Represents a student enrolled in the university. It should have additional properties such as `studentId`, `course`, and `semester`.
  * `Staff`: Represents a staff member working at the university. It should have additional properties such as `staffId`, `department`, and `position`.

1. **Inheritance** : Utilize inheritance to establish relationships between base and derived classes:

* Ensure that both the `Student` and `Staff` classes inherit common properties and methods from the `Person` class.
* Implement constructors in the derived classes to initialize their specific properties while invoking the superclass constructor to initialize inherited properties.

1. **Functionality** :

* Create instances of the `Student` and `Staff` classes with sample data.
* Display the details of each student and staff member on the console, including their name, age, and additional properties specific to their role (e.g., student ID, staff ID).

1. **Testing** :

* Test your TypeScript code by creating instances of the `Student` and `Staff` classes and verifying that their properties are initialized correctly.
* Ensure that inheritance is functioning as expected by accessing inherited properties and methods from the base class.
