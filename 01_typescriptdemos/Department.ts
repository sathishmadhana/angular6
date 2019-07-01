import {Employee} from './Employee'

class Department {

    addEmployee(emp:Employee) {

    }
}

var a = new Employee(10);
var b = new Department();
b.addEmployee(a);
console.log("Employee added");