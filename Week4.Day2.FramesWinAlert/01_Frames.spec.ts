import { test } from "@playwright/test";
import { log } from "console";

test(`Handling frames`, async ({ page }) => {
  await page.goto(`https://www.oneindia.com/`);

  //to get the frames
  const allFrames = page.frames(); // frame() method to get the frame details from your page

  //console.log(allFrames);
  //To get the count of the frames

  const frameCount = allFrames.length;
  console.log(`The total count of frame is ${frameCount}`);

  for (let frametitle of allFrames) {
    const title = await frametitle.title();
    console.log(`The title of the frames are ${title}`);
    await page.waitForTimeout(3000);
  }
});
