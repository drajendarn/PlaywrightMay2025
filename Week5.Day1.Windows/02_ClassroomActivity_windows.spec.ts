import test, { expect } from "@playwright/test";

test("Window handling classroom activity", async ({ page, context }) => {
  await page.goto(`https://login.salesforce.com`);
  await page.locator(`#username`).fill(`vidyar@testleaf.com`);
  await page.locator(`#password`).fill(`Sales@123`);
  await page.getByRole("button", { name: "Log In" }).click();

  const newPage = context.waitForEvent("page");
  await page.getByRole("button", { name: "Learn More", exact: true }).click();

  const childPage = await newPage;
  await childPage.waitForLoadState('load');
  console.log("Title of new window :" + (await childPage.title()));
  await childPage.locator(`//button[text()='Confirm']`).click();
  console.log(childPage.url());
  expect(childPage.url()).toContain(
    "https://www.salesforce.com/service/cloud/"
  );
});

test.only("Window handling using concurrent way", async ({ page, context }) => {
  await page.goto(`https://login.salesforce.com`);
  await page.locator(`#username`).fill(`vidyar@testleaf.com`);
  await page.locator(`#password`).fill(`Sales@123`);
  await page.getByRole("button", { name: "Log In" }).click();

  const [newPage] = await Promise.all([context.waitForEvent("page"),
   page.getByRole("button", { name: "Learn More", exact: true }).click()]);

  //const childPage = await newPage;
  //await newPage[0].waitForLoadState('load');
  console.log("Title of new window :" + (await newPage.title()));
  await newPage.locator(`//button[text()='Confirm']`).click();
  console.log(newPage.url());
  expect(newPage.url()).toContain(
    "https://www.salesforce.com/service/cloud/"  );
});
