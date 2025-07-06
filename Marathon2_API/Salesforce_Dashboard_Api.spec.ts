import { faker } from "@faker-js/faker";
import test, { expect } from "@playwright/test";

test(`salesforce create new dashboard from application`, async ({ page }) => {

    let dashboardName='Salesforce Automation by Divya';
  await page.goto(`https://login.salesforce.com`);
  await page.locator(`#username`).fill(`ravindran.ramdas@testleaf.com`);
  await page.locator(`#password`).fill(`RaviSalesTest#1432`);
    await page.getByRole("button", { name: "Log In" }).click();
  await page.getByTitle("App Launcher", { exact: true }).click();
  await page.locator(`//button[@aria-label='View All Applications']`).click();
  const dashBoardLink= page.getByRole("link",{name:"Dashboards"})
  await dashBoardLink.isVisible();
await dashBoardLink.click();

await page.locator(`//span[text()='Dashboards']`).isVisible();
await page.locator(`//div[@title='New Dashboard']`).click();

const iframe=await page.frameLocator(`//iframe[@title='dashboard']`).last()

await iframe.locator(`//input[@id='dashboardNameInput']`).fill(dashboardName);
await iframe.locator(`//button[@id='submitBtn']`).click();
await iframe.locator(`//button[text()='Save']`).click();
await page.getByRole("link",{name:"Dashboards"}).click();
const searchBox=  page.getByPlaceholder("Search recent dashboards...",{exact:true})
await searchBox.fill(dashboardName);
  //await searchBox.focus();
  //await page.keyboard.press("Enter");

  const searchResult= page.getByRole("link",{name:dashboardName}).nth(0);
  const getDashboardName= await searchResult.innerText();
  expect(getDashboardName).toContain(dashboardName);

});
let token: any;
let inst_url: any;
let tokenType: any;
let id: any;
let title:any
test.describe.serial(`Salesforce API testing for Dashboard`, async () => {
  test(`Generate a token`, async ({ request }) => {
    const response = await request.post(
      "https://login.salesforce.com/services/oauth2/token",
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        form: {
          grant_type: "password",
          client_id:
            "3MVG9VMBZCsTL9hnYaVamF_yN9dU9vnyYTjdMcnDvjqPwwaBINmmrxc5nreM3diNAwBKSsbWXhbOweaL8rdNB",
          client_secret:
            "045B87EED90898F6D00920E973955E048E340B15506294A39847C4C824C8E260",
          username: "ravindran.ramdas@testleaf.com",
          password: "RaviSalesTest#1432",
        },
      }
    );

    const responseBody = await response.json();
    console.log(responseBody);
    console.log(response.statusText());
    token = responseBody.access_token;
    inst_url = responseBody.instance_url;
    tokenType = responseBody.token_type;
  });

  test(`To Fetch Dashboard`, async ({ request }) => {
    const response = await request.get(
      `${inst_url}/services/data/v59.0/sobjects/Dashboard/`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${tokenType} ${token}`,
        },
      }
    );

    const respBody = await response.json();
    console.log(respBody);
    console.log(response.statusText());
    id = respBody.recentItems[0].Id;
    title=respBody.recentItems[0].Title;
    /* to Fetch all the values from the response
    const getListID = dashboard_response.recentItems
        for (const listID of getListID) {
            const titleName = listID.Title.toString();
            if(titleName.includes('RRAV')){
                getID = listID.Id
                console.log(` This ${getID.toString()} rename is deleted`);
            }
        };*/
    console.log(id);
  });

  test(`To Delete`, async ({ request }) => {
    const response = await request.delete(
      `${inst_url}/services/data/v59.0/sobjects/Dashboard/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${tokenType} ${token}`,
        },
      }
    );

    //const rBody = await response.json();
    //console.log(rBody);
    console.log(response.statusText());
  });
});
