import test from "@playwright/test";

test(`Frame interactions using url`, async ({ page }) => {
  await page.goto(`https://www.leafground.com/frame.xhtml`);
  const frame1 = page.frame({url: "https://www.leafground.com/default.xhtml"});
  await frame1?.locator("#Click").click();
});

test.only (`Frame interactions using index`, async ({ page }) => {
  await page.goto(`https://www.leafground.com/frame.xhtml`);
  const frameDetails=page.frames()

frameDetails.forEach((frame,index)=>{

    console.log(`Frame:${index}: ${frame.url()}`);
    
})


  const frameIndex=page.frames()
  frameIndex[4].locator(`#Click`).click();
  //const frame1 = page.frame({url: "https://www.leafground.com/default.xhtml"});
  //await frame1?.locator("#Click").click();
});

test(`Frame interactions using frameLocator`, async ({ page }) => {
  await page.goto(`https://www.leafground.com/frame.xhtml`);
  const frameLoc = page.frameLocator('(iframe)[1]')
  await frameLoc.locator("#Click").click();
});

test(`Frame interactions in nested Frames`, async ({ page }) => {
  await page.goto(`https://www.leafground.com/frame.xhtml`);
  const frameLoc = page.frameLocator('(iframe)[1]')
  await frameLoc.locator("#Click").click();
});