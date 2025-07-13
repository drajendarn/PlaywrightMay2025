export class methodoverloadding {
  public click(element: string): void;
  public click(element: string, forceClick: boolean): void;

  //single implementation
  public click(element: string, forceClick?: boolean) {
    if (forceClick) {
      console.log("force clciking");
    } else console.log("clciking the element normally");
  }
}

let ob = new methodoverloadding();
ob.click("#normalclick");
ob.click("Forceclick", true);
