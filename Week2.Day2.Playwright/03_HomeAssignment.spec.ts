
import { chromium, firefox, test } from "@playwright/test";

test('Red Bus and Flipkart',async()=>
{

    const browser1=await chromium.launch({channel:'msedge'})
    const browser2=await firefox.launch()
    const context1=await browser1.newContext();
    const context2=await browser2.newContext();
    const page1=await context1.newPage();
    const page2=await context2.newPage();
await page1.goto('https://www.redbus.in/')
await page2.goto('https://www.flipkart.com/')


console.log(await page1.url());
console.log(await page2.url());
console.log(await page1.title());
console.log(await 
    page2.title());
  await browser1.close();
  await browser2.close();

}


)