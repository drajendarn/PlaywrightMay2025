import { test } from "@playwright/test";

test.use({
  geolocation: {
    latitude: 40.6971934,
    longitude: -74.3091584,
  },
  permissions: [`geolocation`, "notifications"],
});

test(`Geolocation`, async ({ page }) => {
  await page.goto("https://www.google.co.in/maps");
  await page.click(`#sVuEFc`);
  await page.waitForTimeout(4000);
});
