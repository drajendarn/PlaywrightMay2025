import { handleWindow } from "./01_interface";

export abstract class ElementWrapper {
  typeAndTab() 
  {
    console.log("Type and Tab implemented in abstractclass");
  }
  abstract takeScreenshot(): void; //un implemented abstract method
}

// extending abstarct class and implementing interface
export class concreteAbstarct extends ElementWrapper implements handleWindow {
  handleWindow(): string {
    console.log("Implementing interface in abstarct concrete class");
    return "abstarctWindow";
  }
  takeScreenshot(): void { //abstract method
    console.log("Take screenshot implemented in concrete class");
  }
}

let obj1=new concreteAbstarct();
obj1.handleWindow();
obj1.takeScreenshot()
obj1.typeAndTab();