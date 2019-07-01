export class Employee {
    nums = [1, 2, 3, 4, 5,];
    private user: string;
    constructor(public a: number){
        console.log("Employee Created")
    }   

    getSalary(basic: Number, hra: Number): String {        
        return 100 +"";
    }

    getDetails(){
        let user = {};
        return user;
    }
}

var emp = new Employee(10);
console.log("Salary : "+emp.getSalary(1,2));
console.log("Public const param : "+emp.a);  // public constructor param can be accessed directly
console.log("Array : "+emp.nums);
console.log(" ");
console.log(" ");
console.log("Print Arrays");
emp.nums.forEach(each => console.log("1 "+each));

emp.nums.forEach(each => {
    console.log("2 "+each);
}); 

emp.nums.forEach(function(each) {
    console.log("3 "+each);
});