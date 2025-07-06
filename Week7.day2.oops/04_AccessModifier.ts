
export class EmployeeSignUp
{
    
    public eName:string
    public eId:string
    protected readonly ePhoneNum:number //phonenumber cannot be updated
    private eSalary:number
    public static company:string


    constructor()
    {
       this.eId='1234'
       this.eName='Divya'
       this.ePhoneNum=123456789
       this.eSalary =1234
       EmployeeSignUp.company='companyName'; //static values need to be called using className
    }
    printDetails() {
        console.log("EmpID is :" + `${this.eId}`);
         console.log("eName is :" + `${this.eName}`);
          console.log("ePhoneNum is :" + `${this.ePhoneNum}`);
           console.log("eSalary is :" + `${this.eSalary}`);
        console.log("eSalary is :" + `${EmployeeSignUp.company}`);
    }

    public get readdata()
    {
        return this.eId;
    }

     public set writeData(salary:number){
         this.eSalary=salary
    }
}

const emp=new EmployeeSignUp();
emp.printDetails();
console.log(emp.eId);
console.log(emp.eName);
//console.log(emp.ePhoneNum); //protected not accessible
//console.log(emp.eSalary); //private not accessible
console.log(emp.readdata); // using get method reading private values

emp.writeData=92345;
console.log('After updating salary : '+ emp.readdata); // using get method reading private values
emp.writeData=655656
console.log(emp.readdata);