import { test } from "@playwright/test";
import { ViewLeadPage } from "../../Pages/Leaftap/06_ViewLead";



 test(`CreateAccount verification`, async({page})=>{
    const vp = new ViewLeadPage(page)
    await vp.loadurl("http://leaftaps.com/opentaps/control/login");
    await vp.enterCredentials("demoSalesManager","crmsfa");
    await vp.clickLogin();
    await vp.clickCRM()
    await vp.clickAccounts()

})

