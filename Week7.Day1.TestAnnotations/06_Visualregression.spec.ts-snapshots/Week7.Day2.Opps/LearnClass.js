/* class Employee{


empName:string //global class property and it needs to be addressed with refrence of the class using "this" keyword
empId:string



printDetails(name:string,id:string){
this.empName=name
this.empId=id


let empNameLocal


console.log(`Employee details ${this.empName} : ${this.empId}`);



}


payroll(){
console.log("emp payroll process");
}


empDetails(emid:string){ // emid --> local variable available only to this block
console.log(`The id of the employee ${emid}`);

}


constructor(){
console.log("This is a default constructor");

}


}


const emp = new Employee() // default constructor


emp.printDetails("Ravi","emp1234");
emp.printDetails("Hari","emp456");
emp.payroll();
emp.empDetails("emp789"); */
/* Hirarchy of execution of methods
-------------------------------------
1. constructor()
2. Normal methods/ property*/
//constructor is a special method --> executes before all normal method
var Login = /** @class */ (function () {
    function Login(lpage, applnName) {
        // parameterized constructor
        this.page = lpage;
        console.log("Using the page refernce from constructor:" + this.page);
        this.loadUrl(applnName);
    }
    Login.prototype.loadUrl = function (applnName) {
        // global method
        console.log("page is loaded with ".concat(applnName, " url : ").concat(this.page));
    };
    return Login;
}());
var lf = new Login("pg12234", "Leaftaps");
lf.loadUrl("LeafTaps");
var sf = new Login("pg7894", "Salesforce");
sf.loadUrl("Salesforce");
