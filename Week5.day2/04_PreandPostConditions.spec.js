import { test } from "@playwright/test";

test.beforeEach("Learn xpat",async ({page})=>
{

    await page.goto('http://leaftaps.com/opentaps/control/main');
    await page.locator(`//input[@id='username']`).fill('demosalesmanager');
    await page.locator(`//input[@id='password']`).fill('crmsfa');
    await page.locator(`//input[@class='decorativeSubmit']`).click();
})

test.afterEach("",async ({page})=>
{

    
})