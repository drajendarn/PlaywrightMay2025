import { test } from "@playwright/test";

test("Learn xpat", async ({ page }) => {
  await page.goto("http://leaftaps.com/opentaps/control/main");
  await page.locator(`//input[@id='username']`).fill("demosalesmanager");
  await page.locator(`//input[@id='password']`).fill("crmsfa");
  await page.locator(`//input[@class='decorativeSubmit']`).click();
  await page.locator(`//a[contains(text(),'CRM/SFA')]`).click();
  await page.locator(`//a[text()='Create Lead']`).click();

  await page
    .locator(`//input[@id='createLeadForm_companyName']`)
    .fill(`CompanyName`);
  await page.locator(`//input[@id='createLeadForm_firstName']`).fill(`Fname`);
  await page.locator(`//input[@id='createLeadForm_lastName']`).fill(`Lname`);

  //Dropdown handling for Preffered currency

  //If you have select tag then use selectOption

  await page.selectOption(`#createLeadForm_dataSourceId`, {
    value: "LEAD_DIRECTMAIL",
  });

  //Get the values from the dropdown
  //const dropdown = await page.locator("#createLeadForm_dataSourceId>option");
  const dropdown =await  page.locator("#createLeadForm_dataSourceId>option");
    const dropDownCount = await dropdown.count();

  console.log(`No. of values in the dropdown ${dropDownCount}`);

  await page.waitForTimeout(3000);

  for (let index = 0; index < dropDownCount; index++) {
    console.log(await dropdown.nth(index).innerText());
  }
    //select by value
    await page.selectOption(`#createLeadForm_currencyUomId`, { value: "DZD" });
    await page.selectOption(`#createLeadForm_currencyUomId`, "ADP");

    //select by label
    await page.selectOption(`#createLeadForm_currencyUomId`, {
      label: "AFA - Afghani",
    });
    //select by index
    await page.selectOption(`#createLeadForm_currencyUomId`, { index: 2 });

    console.log("CURRENCY VALUES");
    const dropdown1 = await page.locator("#createLeadForm_currencyUomId>option");
  

  const countCurrency= await dropdown1.count();

  console.log(`No. of values in the dropdown ${countCurrency}`);

  await page.waitForTimeout(3000);

  for (let index = 0; index < countCurrency; index++) {
    console.log(await dropdown1.nth(index).innerText({ timeout: 100000 }));
    

    
  }
}
//await page.locator(`//input[@class='smallSubmit']`).click();
)
