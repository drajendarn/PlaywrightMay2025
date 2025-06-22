//Intreact frames with URL

import { test } from "@playwright/test";

test(`Test to interact with the frames using URL`, async ({ page }) => {
  await page.goto(`https://leafground.com/frame.xhtml`);

  //interact with the frames using URL
  const frameURL = page.frame({ url: "https://leafground.com/default.xhtml" });
  frameURL?.locator("#Click").click(); // Optional chaining

  await page.waitForTimeout(5000);

  /* Comparison
    if(frame){
    await frame.locator("#Click").click();
    }else{ // if there is no frame it will return NULL it would crash wioth an error
    comsole.log("Frame not found")
    }
    */
});

test(`Test to interact with the frames using index`, async ({ page }) => {
  await page.goto(`https://leafground.com/frame.xhtml`);

  const frameDetails = page.frames();

  console.log(frameDetails);

  frameDetails.forEach((frame, index) => {
    console.log(`Frame ${index}: ${frame.url()} `);
  });

  //using index :

  const frameIndex = page.frames();
  await frameIndex[4].click("button#Click");

  await page.waitForTimeout(3000);
});

test.only(`Test to interact with the frames usinf framelocator`, async ({
  page,
}) => {
  await page.goto(`https://leafground.com/frame.xhtml`);

  //Using frame locator
  /* const frameLoc = page.frameLocator("(//iframe)[0]"); 
      frameLoc.locator("#Click").click(); */

  //Interact with nested frame

  const card = page.locator(".card").filter({ hasText: "Inside Nested frame" });
  const frame_outerframe = card.frameLocator("iframe");
  const frame_innerframe = frame_outerframe.frameLocator("iframe");
  await frame_innerframe.locator("#Click").click();

  await page.waitForTimeout(3000);
});
