import { EmployeeSignUp } from "./04_AccessModifier";
import { FakerData } from "./05_FakerStatic";


class HR extends EmployeeSignUp
{

empupdate()
{
console.log(this.ePhoneNum); // Accessing protected variable from EmployeeSignUp
console.log(FakerData.getFirstName());
}
}

let hr=new HR();
console.log(hr.eId);
console.log(hr.eName);
hr.empupdate();


