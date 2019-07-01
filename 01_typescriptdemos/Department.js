"use strict";
exports.__esModule = true;
var Employee_1 = require("./Employee");
var Department = /** @class */ (function () {
    function Department() {
    }
    Department.prototype.addEmployee = function (emp) {
    };
    return Department;
}());
var a = new Employee_1.Employee();
var b = new Department();
b.addEmployee(a);
console.log("Employee added");
