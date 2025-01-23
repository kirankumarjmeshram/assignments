var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.displayDetails = function () {
        console.log("Name: ".concat(this.name));
        console.log("Age: ".concat(this.age));
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, rollNo, course, semister) {
        var _this = _super.call(this, name, age) || this;
        _this.rollNo = rollNo;
        _this.course = course;
        _this.semister = semister;
        return _this;
    }
    Student.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        console.log("Roll No: ".concat(this.rollNo));
        console.log("Course: ".concat(this.course));
        console.log("Semister: ".concat(this.semister));
    };
    return Student;
}(Person));
var Staff = /** @class */ (function (_super) {
    __extends(Staff, _super);
    function Staff(name, age, staffId, department, position) {
        var _this = _super.call(this, name, age) || this;
        _this.staffId = staffId;
        _this.department = department;
        _this.position = position;
        return _this;
    }
    Staff.prototype.displayDetail = function () {
        _super.prototype.displayDetails.call(this);
        console.log("Staff ID: ".concat(this.staffId));
        console.log("Department: ".concat(this.department));
        console.log("Position: ".concat(this.position));
    };
    return Staff;
}(Person));
var student1 = new Student("Alice Johnson", 20, "S101", "Computer Science", 3);
var student2 = new Student("Bob Smith", 22, "S102", "Mechanical Engineering", 5);
var staff1 = new Staff("Dr. Emily Carter", 45, "T201", "Physics", "Professor");
var staff2 = new Staff("Mr. John Davis", 38, "T202", "Administration", "Clerk");
console.log("Student Details:");
student1.displayDetails();
student2.displayDetails();
console.log("\nStaff Details:");
staff1.displayDetails();
staff2.displayDetails();
