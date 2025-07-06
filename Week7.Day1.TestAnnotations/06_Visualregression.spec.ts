 import { expect, test } from "@playwright/test";

//ocr - to check the content inside the page, groq AI,testselect
test(`Visual regression testing at page level`,async ({page}) => {
await page.goto(`https://www.testleaf.com/`)
const ss = await page.screenshot();
expect(ss).toMatchSnapshot()

}) 
test(`Visual regression specific to locator`,async ({page}) => {

//await page.goto(`http://leaftaps.com/opentaps/control/main`)
await page.goto(`https://www.testleaf.com/`)
const loc= page.locator(`//div[@id='form']`);
const ss = await loc.screenshot();
expect(ss).toMatchSnapshot()

}) 

//Notes :
//assert a specific portion

//import { expect, test } from "@playwright/test";

test("Partial Visual check", async ({ page }) => {
  await page.goto("https://www.testleaf.com/");

  // Crop the screenshot to a specific area
  const ss = await page.screenshot({
    clip: {
      x: 100, // starting x coordinate
      y: 200, // starting y coordinate
      width: 300, // width of the area
      height: 200, // height of the area
    },
  });

  expect(ss).toMatchSnapshot("partial-visual-check.png");
});
