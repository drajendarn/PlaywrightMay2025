"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeSignUp = void 0;
var EmployeeSignUp = /** @class */ (function () {
    function EmployeeSignUp() {
        this.eId = '1234';
        this.eName = 'Divya';
        this.ePhoneNum = 123456789;
        this.eSalary = 1234;
        EmployeeSignUp.company = 'companyName'; //static values need to be called using className
    }
    EmployeeSignUp.prototype.printDetails = function () {
        console.log("EmpID is :" + "".concat(this.eId));
        console.log("eName is :" + "".concat(this.eName));
        console.log("ePhoneNum is :" + "".concat(this.ePhoneNum));
        console.log("eSalary is :" + "".concat(this.eSalary));
        console.log("eSalary is :" + "".concat(EmployeeSignUp.company));
    };
    Object.defineProperty(EmployeeSignUp.prototype, "readdata", {
        get: function () {
            return this.eId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmployeeSignUp.prototype, "writeData", {
        set: function (salary) {
            this.eSalary = salary;
        },
        enumerable: false,
        configurable: true
    });
    return EmployeeSignUp;
}());
exports.EmployeeSignUp = EmployeeSignUp;
var emp = new EmployeeSignUp();
emp.printDetails();
console.log(emp.eId);
console.log(emp.eName);
//console.log(emp.ePhoneNum); //protected not accessible
//console.log(emp.eSalary); //private not accessible
console.log(emp.readdata); // using get method reading private values
emp.writeData = 92345;
console.log('After updating salary : ' + emp.readdata); // using get method reading private values
emp.writeData = 655656;
console.log(emp.readdata);
