import { test } from "@playwright/test";
import { createResource, fetchResource } from "./apiUtility.ts";

let lname: any;
test(`UI test to verify the resource`, async ({ page, request }) => {
  await createResource(request);
  lname = await fetchResource(request);

  await page.goto(`https://login.salesforce.com/?locale=in`);

  await page.getByLabel("Username").fill("ravindran.ramdas@testleaf.com");

  // await page.getByRole("textbox",{name:"Username"}).fill("ravindran.ramdas@testleaf.com");

  await page
    .getByRole("textbox", { name: "Password" })
    .fill("RaviSalesTest#1432");

  await page.waitForTimeout(2000);

  await page.getByRole("button", { name: "Log In" }).click();

  await page.getByTitle("App Launcher", { exact: true }).click();

  await page.getByText("View All", { exact: true }).click();

  await page
    .getByPlaceholder("Search apps or items...", { exact: true })
    .fill("Leads");

  await page.getByText("Leads", { exact: true }).click();

  const search = page.getByPlaceholder("Search this list...");

  await search.fill(lname);
  await search.press("Enter");
  await page.waitForTimeout(3000);
});
