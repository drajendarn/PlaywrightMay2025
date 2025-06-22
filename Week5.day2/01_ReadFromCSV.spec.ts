import { test } from "@playwright/test";
import { parse } from "csv-parse/sync";
import fs from "fs";

const loginData = parse(fs.readFileSync("./Data/Login.csv"), {
  columns: true,
  skip_empty_lines: true,
});

//loginData stores an array if data from your csv [row1][row2]

for (let data of loginData) {
  test(`Learn to read CSV data ${data.TCID}`, async ({ page }) => {
    await page.goto(`http://leaftaps.com/opentaps/control/main`);

    await page.fill(`//input[@id='username']`, data.username);

    await page.fill(`//input[@id='password']`, data.password);

    await page.locator(`//input[@class='decorativeSubmit']`).click();

    await page.waitForTimeout(2000);
  });
}
/* 
parse method converts any data into a readable object array of data


fs --> filesystem --> npm install fs*/

/* 
tcid,username,password
1,demoCSR,crmsfa
2,demoSalesManager,crmsfa


will be parsed into an array of JavaScripts object 


[
{
tcid:1
username:demoCSR,
password:crmsfa
},
{
tcid:2
username:demoSalesManager,
password:crmsfa
}
]
*/
