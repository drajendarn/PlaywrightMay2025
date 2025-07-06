import { test, expect } from '@playwright/test';
import path from 'path';
import { fileURLToPath } from 'url';

test('compare UI to wireframe', async ({ page }) => {
  // Load your local HTML file
  const filePath = path.resolve(__dirname, 'dummy-ui.html');
  await page.goto('file://' + filePath);

  // Optional: wait for layout to stabilize
  await page.waitForLoadState('load');

  // Compare screenshot to wireframe baseline
  await expect(page).toHaveScreenshot({
    name: 'wireframe-baseline.png',  // baseline stored in playwright/screenshots/
    maxDiffPixelRatio: 0.05,         // allow 5% visual difference
  });
});