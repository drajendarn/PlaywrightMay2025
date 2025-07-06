import test from "@playwright/test";

test.describe.serial(`Test Annotation suite`, async () => 
    {
  test.skip(`Skip execution`, async ({ page }) => {
    console.log(`skip annotation`);
  });

  test.fixme(`fixme test annotation`, async ({ page }) => {
    console.log(`fixme test annotation`);
  });

  test.fail(`fail test execution`, async ({ page }) => {
    console.log(`fail test annotation`);
  });

});
