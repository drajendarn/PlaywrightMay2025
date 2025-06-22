import { test } from "@playwright/test";

test(`FileUpload with type="file"`, async ({ page }) => {
  await page.goto(`https://leafground.com/file.xhtml`);

  const uploadFile = page.locator(`(//input[@type='file'])[1]`);
  await uploadFile.setInputFiles("Data/learningFileUpload.txt");

  // await uploadFile.setInputFiles("/learningFileUpload.txt");
  await page.waitForTimeout(3000);
});

test(`Multiple FileUpload`, async ({ page }) => {
  await page.goto(`https://leafground.com/file.xhtml`);

  const MultipleUpload = page.locator(`(//input[@type='file'])[2]`);
  await MultipleUpload.setInputFiles([
    "Data/BackGround Removed.png",
    "Data/WebEx_PlayWright_BG.png",
  ]);
  await page.waitForTimeout(3000);
});

test.only(`FileUpload with no type="file" attrribute`, async ({ page }) => {
  await page.goto(`https://the-internet.herokuapp.com/upload`);

  const filePromise = page.waitForEvent("filechooser");
  page.locator(`#drag-drop-upload`).click();
  const fileUpload = await filePromise;

  await fileUpload.setFiles("Data/WebEx_PlayWright_BG.png");
  await page.waitForTimeout(3000);
});
