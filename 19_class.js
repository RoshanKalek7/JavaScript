// Declare class Student
var Student = /** @class */ (function () {
    //constructor 
    function Student(value) {
        this.name = value;
    }
    //Behaviour
    Student.prototype.display = function () {
        console.log("Name of student : " + this.name);
    };
    return Student;
}());
// Create object of above class
var obj1 = new Student("Roshan");
obj1.display();
