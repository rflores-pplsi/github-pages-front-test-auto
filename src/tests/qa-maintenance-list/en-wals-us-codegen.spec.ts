import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {
  // Go to https://lspro.wearelegalshield.com/
  await page.goto('https://lspro.wearelegalshield.com/');
  // Click text=Information for District of Columbia Change >> a
  await page.locator('text=Information for District of Columbia Change >> a').click();
  // Select 46
  await page.locator('select[name="state_select"]').selectOption('10');
  // Go to https://lspro.wearelegalshield.com/
  await page.goto('https://lspro.wearelegalshield.com/');
  // Click text=Become an Associate >> nth=2
  await page.locator('text=Become an Associate').nth(2).click();
  // Click text=Associate Startup Starting at $ 99.00 as a one time fee Associates can sell Lega >> a >> nth=0
  await page.locator('text=Associate Startup Starting at $ 99.00 as a one time fee Associates can sell Lega >> a').first().click();
  // Check #individual
  await page.locator('#individual').check();
  // Check #no
  await page.locator('#no').check();
  // Click #associate-startup_modal_checkout_btn
  await page.locator('#associate-startup_modal_checkout_btn').click();
  await expect(page).toHaveURL('https://lspro.wearelegalshield.com/#');
  // Click text=CHECKOUT - $ 99.00
  await page.locator('text=CHECKOUT - $ 99.00').click();
});
