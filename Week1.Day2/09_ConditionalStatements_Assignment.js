function launchBrowser(browserName) 
{
  if (browserName == "chrome") 
  console.log("The given browser is chrome");
  else 
  console.log("other browsers");
}
launchBrowser("chrome");


function runTests(testType) {
  switch (testType) {
    case "smoke":
      console.log("Test type is smoke");
      break;
    case "sanity":
      console.log("Test type is sanity");
      break;
    case "regression":
      console.log("Test type is regression");
      break;

    default:
      console.log("Test type is smoke");
      break;
  }
}
runTests("smoke");
