import { test } from "@playwright/test";
import dotenv from "dotenv";

dotenv.config({ path: "Data/qa.env" });

test(`Read the data from env file for salesforce`, async ({ page }) => {
  let sfurl = process.env.SF_BaseUrl as string;
  let sfusername = process.env.SF_userName as string;
  let sfpassword = process.env.SF_password as string;
  await page.goto(sfurl);
  await page.locator(`#username`).fill(sfusername);
  await page.locator(`#password`).fill(sfpassword);
  await page.getByRole("button", { name: "Log In" }).click();
  //process gives the system process and connects to the environment variable on that system
});

test(`Read the data from env file`, async ({ page }) => {
  console.log(process.env.BaseUrl);
  //   console.log(process.env.username);
  console.log(process.env.LF_Username);

  let url = process.env.BaseUrl as string;
  let username = process.env.LF_Username as string;
  let password = process.env.LF_Password as string;

  await page.goto(url);

  await page.fill("#username", username);

  await page.fill("#password", password);

  await page.click(".decorativeSubmit");
  //process gives the system process and connects to the environment variable os that system
});
