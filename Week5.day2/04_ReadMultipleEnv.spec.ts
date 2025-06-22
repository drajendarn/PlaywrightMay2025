import test from "@playwright/test";
import dotEnv from "dotenv";

let fileName=process.env.envFile||'qa'
//dotEnv.config({ path: "C:\Users\DIVYA\Desktop\Playwright\PlaywrightAutomationMay2025\Data\qa.env" });
dotEnv.config({ path: `Data/${fileName}.env` });

test(`Read data from dotEnv file`, async ({ page }) => {
  let url = process.env.BaseUrl as string;
  let username = process.env.LF_Username as string;
  let password = process.env.LF_Password as string;
console.log(url);

  await page.goto(url);

  await page.fill("#username", username);

  await page.fill("#password", password);

  await page.click(".decorativeSubmit");
});

//console.log(process.env);

//console.log(process.env.username);

//process gives the system process and connects to the environment variable os that system
