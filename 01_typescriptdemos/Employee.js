"use strict";
exports.__esModule = true;
var Employee = /** @class */ (function () {
    function Employee(a) {
        this.a = a;
        this.nums = [1, 2, 3, 4, 5,];
        console.log("Employee Created");
    }
    Employee.prototype.getSalary = function (basic, hra) {
        return 100 + "";
    };
    Employee.prototype.getDetails = function () {
        var user = {};
        return user;
    };
    return Employee;
}());
exports.Employee = Employee;
var emp = new Employee(10);
console.log("Salary : " + emp.getSalary(1, 2));
console.log("Public const param : " + emp.a); // public constructor param can be accessed directly
console.log("Array : " + emp.nums);
console.log(" ");
console.log(" ");
emp.nums.forEach(function (each) { return console.log("1 " + each); });
emp.nums.forEach(function (each) {
    console.log("2 " + each);
});
emp.nums.forEach(function (each) {
    console.log("3 " + each);
});
