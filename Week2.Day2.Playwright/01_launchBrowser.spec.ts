
import {chromium,firefox, webkit,test  } from "@playwright/test";

test('Launch Browser',async ()=>{

    //const browser=await chromium.launch();
    //const browser=await firefox.launch();
    //const browser=await webkit.launch();
    const browser=await chromium.launch({channel:'chrome'});
    const context=await browser.newContext();
    const page= await context.newPage();
    await page.goto("https://Google.com");

}


)