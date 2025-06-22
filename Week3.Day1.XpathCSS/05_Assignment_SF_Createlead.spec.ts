
import { test } from "@playwright/test";

test('create lead in salesforce',async ({page})=>
{
await page.goto(`https://login.salesforce.com`);
await page.locator(`#username`).fill(`vidyar@testleaf.com`);
await page.locator(`#password`).fill(`Sales@123`);
await page.getByRole('button',{name:"Log In"}).click();
await page.getByTitle('App Launcher',{ exact: true }).click();
await page.locator(`//button[@aria-label='View All Applications']`).click();
//await page.getByRole('combobox',{name:"Log InSearch apps or items..."}).fill(`sales`);
await page.locator(`//p[text()='Sales']`).click();

await page.getByTitle('Leads',{ exact: true }).click();
await page.getByRole('button',{name:"New"}).click();
//await page.waitForTimeout(20000);
await page.getByRole('combobox',{name:"Salutation"}).click();
await page.locator(`//span[text()='Ms.']`).click();
await page.getByPlaceholder('First Name',{exact:true}).fill('Fname');
await page.getByPlaceholder('Last Name',{exact:true}).fill('LastName');
await page.getByRole('textbox',{name:"*Company"}).fill('TestLeaf');
await page.getByRole('button',{name:"Save",exact: true}).click();
await page.getByText("Lead",{exact: true});
await page.getByText("was created",{exact: true});

//await save.scrollIntoViewIfNeeded();
//await save.click();




})