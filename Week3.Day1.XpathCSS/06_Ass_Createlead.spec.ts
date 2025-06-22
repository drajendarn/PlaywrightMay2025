import test, { expect } from "@playwright/test";

test('Create lead with Assertion',async({page})=>{


    await page.goto('http://leaftaps.com/opentaps/control/main');
    await page.locator(`//input[@id='username']`).fill('demosalesmanager');
    await page.locator(`//input[@id='password']`).fill('crmsfa');
    await page.locator(`//input[@class='decorativeSubmit']`).click();
    await page.locator(`//a[contains(text(),'CRM/SFA')]`).click();
    await page.locator(`//a[text()='Create Lead']`).click();

    await page.locator(`//input[@id='createLeadForm_companyName']`).fill( `CompanyName`)
     await page.locator(`//input[@id='createLeadForm_firstName']`).fill( `Fname`)
      await page.locator(`//input[@id='createLeadForm_lastName']`).fill( `Lname`)

//Fill the Salutation

await page.fill('#createLeadForm_personalTitle','Mrs');
// 12. Fill the Title 
await page.fill('#createLeadForm_generalProfTitle','Title');
// 13. Fill the Annual Revenue
await page.fill('#createLeadForm_annualRevenue','40000');
// 14. Fill the Department 
await page.fill('#createLeadForm_departmentName','Department');
// 15. Fill the Phone number
await page.fill('#createLeadForm_primaryPhoneNumber','22324343'); 
// 16. Click Create Lead button 
await page.locator(`//input[@class='smallSubmit']`).click();
// 17. Verify the company name, first name, last name and the status using auto retrying and non-retrying assertions
const companyName=await page.locator('#viewLead_companyName_sp').innerText();
expect(companyName).toContain(`CompanyName`);

const fName=await page.locator('#viewLead_firstName_sp').innerText();
expect(fName).toContain(`Fname`);

const lName=await page.locator('#viewLead_lastName_sp').innerText();
expect(lName).toContain(`Lname`);

const status=await page.locator('#viewLead_statusId_sp').innerText();
expect(status).toContain(`Assigned`);
      
})