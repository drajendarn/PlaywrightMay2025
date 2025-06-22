const { rejects } = require("assert");
const { resolve } = require("path");

let batonDel = new Promise((resolve, reject) => {
  let isBatonPassed = false;
  if (isBatonPassed) {
    resolve("Passed");
  } else {
    reject("Failed");
  }
})
batonDel.then(message=>{
    console.log(message);
    
})
.catch(error=>{
    console.log(error);
    
})
;
