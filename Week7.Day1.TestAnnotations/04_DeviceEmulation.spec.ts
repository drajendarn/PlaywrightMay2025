import { devices, test } from "@playwright/test";

test.use({
  ...devices["Galaxy Note 3"],
});

test(`Emulate the devices`, async ({ page }) => {
  page.goto(`https://www.testleaf.com/`);
  await page.waitForTimeout(4000);
});

/*
Notes for other browsers :


import { chromium, devices, test } from "@playwright/test";


test(`Emulate device in Chromium`, async () => {
const galaxy = devices['Galaxy Note 3'];

const browser = await chromium.launch();
const context = await browser.newContext({
...galaxy
});
const page = await context.newPage();


await page.goto("https://www.google.co.in/maps");
await page.waitForTimeout(4000);
await browser.close();
});
*/
