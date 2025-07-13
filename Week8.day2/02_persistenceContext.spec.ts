import { chromium, test } from "@playwright/test";


test(`persistence conetxt `,async({page})=>
{

    await chromium.launchPersistentContext

})