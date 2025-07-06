import { test } from "@playwright/test";

test.skip(`Test Annotations with skip cause test not suitable ofr the environment`, async ({
  page,
}) => {
  await page.goto(`http://leaftaps.com/opentaps/control/main`);
  await page.locator(`#username`).fill("democsr2");
  await page.locator(`#password`).fill("crmsfa");
  await page.locator(`.decorativeSubmit`).click();
  await page.locator("text=CRM/SFA").click();
  await page.waitForTimeout(2000);
});
/* Purpose :
If your test is not ready and the environment is not suitable */

test.fixme(
  `Test Annotations with fixme not suitable for PROD environment`,
  async ({ page }) => {
    await page.goto(`http://leaftaps.com/opentaps/control/main`);
    await page.locator(`#username`).fill("democsr2");
    await page.locator(`#password`).fill("crmsfa");
    await page.locator(`.decorativeSubmit`).click();
    await page.locator("text=CRM/SFA").click();
    await page.waitForTimeout(2000);
  }
);

/* Purpose :
Test script not working under repair.
Test Annotations with fixme to tell your team that the code is to be fixed
It serves as a reminder to fix that test
It is also useful when you know thetest is'nt working as expected
{example : flakiness, outdated, or needs to be updated after some changes in the application} */

test.fail(`Unable to click the submit button`, async ({ page }) => {
  await page.goto(`http://leaftaps.com/opentaps/control/main`);
  await page.locator(`#username`).fill("democsr2");
  await page.locator(`#password`).fill("crmsfa");
  await page.locator(`.decorativeSubm`).click();
  await page.locator("text=CRM/SFA").click();
  await page.waitForTimeout(2000);
});

/* Purpose :
The application submit button shows the bug clearly
Kepp the test in the test suite so it still runs
MArk the test as "expected to fail" until the bug is fixed in the application */

test(`Test anootation with slow`, async ({ page }) => {
  test.slow(); //generally used to double the test timeout --> similar to that of "timeout" in config file
  await page.locator(`#username`).fill("democsr2");
  await page.locator(`#password`).fill("crmsfa");
  await page.locator(`.decorativeSubm`).click();
  await page.locator("text=CRM/SFA").click();
  await page.waitForTimeout(2000);
});
