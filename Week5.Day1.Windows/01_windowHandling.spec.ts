import { test } from "@playwright/test";
test.describe('Window Handling',()=>{

test(`Event Launch different context with tabs`, async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("http://amazon.in");
  const page1 = await context.newPage();
  page1.goto("http://flipkart.com");

  const context2 = await browser.newContext();
  const page3 = await context2.newPage();
  await page3.goto("http://snapdeal.com");
});

test(`Handling tabs sequential way`, async ({ context, page }) => {
  await page.goto(`https://www.flipkart.com/`);

  const searchBox = page.locator(
    `//input[@placeholder='Search for Products, Brands and More']`
  );
  await searchBox.fill("Phones");
  await searchBox.press("Enter");

  const newPage = context.waitForEvent("page");

  await page.locator(`(//div[contains(text(),'MOTOROLA g05')])[1]`).click();

  const childPage = await newPage;
  await page.waitForLoadState("load");
  console.log(await childPage.title());

  console.log(await page.title());

  const price = await childPage
    .locator("//div[@class='Nx9bqj CxhGGd']")
    .innerText();
  console.log(price);

  await page.bringToFront();
  await page.locator(`//span[text()='Electronics']`).click();
  await page.close();
});

test(`Handling multiple windows using concurrent way`, async ({
  context,
  page,
}) => {
  await page.goto(`https://leafground.com/window.xhtml`);

  /*   //concurrent pages:
const [firstPage, secondPage] = await Promise.all([
context.waitForEvent('page'),
context.waitForEvent('page'),
page.getByText(`Open Multiple`,{exact:true}).click()
])
   */

  const [multiplePage] = await Promise.all([
    context.waitForEvent("page"),
    page.getByText(`Open Multiple`, { exact: true }).click(),
  ]);
  const allPages = multiplePage.context().pages();
  console.log(allPages.length);
  await allPages[0].waitForLoadState();
  const title = await allPages[0].title();
  console.log(title);

  //to get all window url and title
  for (let page of allPages) {
    console.log(page.url());
    console.log(await page.title());
  }
})

});
