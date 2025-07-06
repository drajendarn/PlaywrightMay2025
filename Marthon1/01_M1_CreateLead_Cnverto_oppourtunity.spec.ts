import { expect, test } from "@playwright/test";

test("create lead in salesforce", async ({ page }) => {
  const fName = "FnameLead8";
  const oppurtunity = "Leadtooppourtunity1";

  await page.goto(`https://login.salesforce.com`);
  await page.locator(`#username`).fill(`vidyar@testleaf.com`);
  await page.locator(`#password`).fill(`Sales@123`);
  await page.getByRole("button", { name: "Log In" }).click();
  await page.getByTitle("App Launcher", { exact: true }).click();
  await page.locator(`//button[@aria-label='View All Applications']`).click();
  //await page.getByRole('combobox',{name:"Log InSearch apps or items..."}).fill(`sales`);
  await page.locator(`//p[text()='Sales']`).click();

  await page.getByTitle("Leads", { exact: true }).click();
  await page.getByRole("button", { name: "New" }).click();
  //await page.waitForTimeout(20000);
  await page.getByRole("combobox", { name: "Salutation" }).click();
  await page.locator(`//span[text()='Ms.']`).click();

  await page.getByPlaceholder("First Name", { exact: true }).fill(fName);
  await page
    .getByPlaceholder("Last Name", { exact: true })
    .fill("LastNameLead");
  await page.getByRole("textbox", { name: "*Company" }).fill("TestLeafLead");
  await page.getByRole("button", { name: "Save", exact: true }).click();
  const tostMessage1 = await page
    .getByText("Lead", { exact: true })
    .innerText();
  //const tostMessage2= await page.getByText("was created",{exact: true}).innerText();
  expect(tostMessage1).toContain("Lead");
  //expect(tostMessage2).toContain('was Created');

  //: In the newly created Lead page, locate the dropdown near Submit for Approval button and click on the Convert link
  setTimeout;
  const moreActions = await page.getByRole("button", {
    name: "Show more actions",
  });
  await moreActions.waitFor({ state: "visible", timeout: 5000 });
  await moreActions.click();
  await page.getByRole("menuitem", { name: "Convert" }).click();

  //create oppourtunity

  await page
    .locator(
      `//span[text()=' Create New Opportunity']//following::button[@class='slds-button transparentButton']`
    )
    .click();
  await page
    .locator(
      `//span[text()=' Create New Opportunity']//following::button[@class='slds-button transparentButton']//following::div[@class='createPanelExpanded']//input`
    )
    .fill(oppurtunity);
  await page.getByRole("button", { name: "Convert" }).click();

  const oppMessage = await page
    .locator(`//h2[text()='Your lead has been converted']`)
    .innerText();
  expect(oppMessage).toContain(`Your lead has been converted`);
  await page.getByRole("button", { name: "Go to Leads" }).click();
  console.log(page.title());

  const searchBox = await page.getByRole("searchbox", {
    name: "Search this list...",
  });
  await searchBox.fill(fName);
  await searchBox.focus();
  await page.keyboard.press("Enter");
  //await page.getByRole('searchbox', { name: 'Search this list...' }).press('Enter');
  const noMessage = await page
    .locator(`//span[text()='No items to display.']`)
    .innerText();
  expect(noMessage).toContain(`No items to display.`);

  //clcik oppourtunity
  await page.locator(`//span[text()='Opportunities']`).click();
  await page .getByRole("searchbox", { name: "Search this list..." })
    .fill(fName);
  await page
    .getByRole("searchbox", { name: "Search this list..." })
    .press("Enter");
  await page.getByTitle(oppurtunity);
});
