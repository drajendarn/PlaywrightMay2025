
import { test } from "@playwright/test";

test("Learn xpat",async ({page})=>
{

    await page.goto('http://leaftaps.com/opentaps/control/main');
    await page.locator(`//input[@id='username']`).fill('demosalesmanager');
    await page.locator(`//input[@id='password']`).fill('crmsfa');
    await page.locator(`//input[@class='decorativeSubmit']`).click();
    await page.locator(`//a[contains(text(),'CRM/SFA')]`).click();
    await page.locator(`//a[text()='Create Lead']`).click();

    await page.locator(`//input[@id='createLeadForm_companyName']`).fill( `CompanyName`)
     await page.locator(`//input[@id='createLeadForm_firstName']`).fill( `Fname`)
      await page.locator(`//input[@id='createLeadForm_lastName']`).fill( `Lname`)
      await page.locator(`//input[@class='smallSubmit']`).click();
})