import { test } from "@playwright/test";

test(`Test to Handle alerts`, async ({ page }) => {
  await page.goto(`https://leafground.com/alert.xhtml`);

  //Simple alert
  await page.locator(`text=Show`).first().click();
  await page.waitForTimeout(3000);

  //Confirm alert
  await page
    .locator(".card")
    .filter({ hasText: "Confirm Dialog" })
    .locator(`//span[text()="Show"]`)
    .click();
  await page.waitForTimeout(3000);

  //Prompt alert
  await page
    .locator(".card")
    .filter({ hasText: "Prompt Dialog" })
    .locator(`//span[text()="Show"]`)
    .click();
  await page.waitForTimeout(3000);
});

test.only(`Test to Handle alerts using page.on event listeners`, async ({
  page,
}) => {
  await page.goto(`https://leafground.com/alert.xhtml`);

  //Event listenersA

  page.on("dialog", async (alert) => {
    // Notes of internal working -
    //  1. First trigger (Simple alert button click)--> "alert" will hold simple alert
    //2. Second trigger  (Confirm alert button click) -->  "alert" will hold confirm alert
    //3. Third trigger  (Prompt alert button click) -->  "alert" will hold prompt alert
    const message = alert.message();
    console.log(`The message says ${message}`);

    const type = alert.type();
    console.log(`The type pf the alert is ${type}`);

    if (type === "confirm") {
      await alert.accept();
    } else if (type === "prompt") {
      await alert.accept("Testleaf");
    } else alert.dismiss();
  });

  //Simple alert
  await page.locator(`text=Show`).first().click();
  await page.waitForTimeout(3000);

  //Confirm alert
  await page
    .locator(".card")
    .filter({ hasText: "Confirm Dialog" })
    .locator(`//span[text()="Show"]`)
    .click();
  await page.waitForTimeout(3000);

  //Prompt alert
  await page
    .locator(".card")
    .filter({ hasText: "Prompt Dialog" })
    .locator(`//span[text()="Show"]`)
    .click();
  await page.waitForTimeout(3000);
});
