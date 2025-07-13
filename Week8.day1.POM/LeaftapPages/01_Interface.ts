
//Interface 1
export interface EleAction {
  typeAndEnter(locator: string): void; // here void is a return type
}

//Interface 2
export interface handleWindow {
  handleWindow(): string;
}
//Concrete class where interface is implemented
export class WebElement implements EleAction, handleWindow {
  typeAndEnter(locator: string): void {
    console.log("Interface Implemeted ");
  }
  handleWindow(): string {
    console.log("handle Window implemented");
    return "window";
  }
}

//Creating object for Concrete class[Note: Objects cannot be created for interfaces]
let obj = new WebElement();
obj.handleWindow();
obj.typeAndEnter("test");
