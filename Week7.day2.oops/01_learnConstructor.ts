class Browser {
  browserInfo: string = "Chrome";
  browserVersion: number = 131;

  launchBrowser() {
    //userdefined method --> test logic wiil be written inside a method --> chromium.launch
    console.log("Launching chrome"); // to launch a browser
  }
}

let leafTaps = new Browser(); // reference created for the class and stored under the variable leafTaps

//let/const variable = new classname() --> constructor

leafTaps.launchBrowser(); // this method performs action
console.log(leafTaps.browserInfo);
console.log(leafTaps.browserVersion);
