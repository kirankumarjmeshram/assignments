class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    displayDetails(): void {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
    }
}

class Student extends Person {
    rollNo: number;
    course: string;
    semister: number;

    constructor(name: string, age: number, rollNo: number, course: string, semister: number) {
        super(name, age);
        this.rollNo = rollNo;
        this.course = course;
        this.semister = semister;
    }

    displayDetails(): void {
        super.displayDetails();
        console.log(`Roll No: ${this.rollNo}`);
        console.log(`Course: ${this.course}`);
        console.log(`Semister: ${this.semister}`);
    }
}

class Staff extends Person {
    staffId: string;
    department: string;
    position: string;

    constructor(name: string, age: number, staffId: string, department: string, position: string) {
        super(name, age);
        this.staffId = staffId;
        this.department = department;
        this.position = position;
    }

    displayDetail(): void {
        super.displayDetails();
        console.log(`Staff ID: ${this.staffId}`);
        console.log(`Department: ${this.department}`);
        console.log(`Position: ${this.position}`);
    }
}

const student1 = new Student("Alice Johnson", 20, "S101", "Computer Science", 3);
const student2 = new Student("Bob Smith", 22, "S102", "Mechanical Engineering", 5);


const staff1 = new Staff("Dr. Emily Carter", 45, "T201", "Physics", "Professor");
const staff2 = new Staff("Mr. John Davis", 38, "T202", "Administration", "Clerk");

console.log("Student Details:");
student1.displayDetails();
student2.displayDetails();

console.log("\nStaff Details:");
staff1.displayDetails();
staff2.displayDetails();

/**
 * Student Details:
Name: Alice Johnson
Age: 20
Roll No: S101
Course: Computer Science
Semister: 3
Name: Bob Smith
Age: 22
Roll No: S102
Course: Mechanical Engineering
Semister: 5

Staff Details:
Name: Dr. Emily Carter
Age: 45
Name: Mr. John Davis
Age: 38
 */