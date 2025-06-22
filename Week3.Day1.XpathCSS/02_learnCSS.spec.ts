
import { test } from "@playwright/test";

test("Learn CSS Selector locators",async ({page})=>
{

    await page.goto('http://leaftaps.com/opentaps/control/main');
    await page.locator(`#username`).fill('demosalesmanager'); //id based css selector
    await page.locator(`#password`).fill('crmsfa'); // id bases css selector
    await page.locator(`.decorativeSubmit`).click(); //class based css selector
    await page.locator(`a:has-text('CRM/SFA')`).click(); //playwright css selector
    await page.locator(`a:has-text('Create Lead')`).click(); // contains based Css selector

    await page.locator(`input[id$='companyName']`).fill( `CompanyName`) //ends with css selector
     await page.locator(`input[id$='firstName']`).fill( `Fname`)
      await page.locator(`//input[@id='createLeadForm_lastName']`).fill( `Lname`)
      await page.locator(`//input[@class='smallSubmit']`).click();
})