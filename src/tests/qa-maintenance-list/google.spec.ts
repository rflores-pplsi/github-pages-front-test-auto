import { test, expect } from '@playwright/test';
export let interceptedRequest: Request;
test('test', async ({ page, request }) => {
  // Go to https://www.google.com/?gws_rd=ssl
  // page.on('request', (request) => console.log('>>', request.method(), request.url()));
  page.on('response', (response) => console.log('<<', response));
  await page.goto('https://www.google.com/?gws_rd=ssl');
  // Click [aria-label="Search"]
  await page.locator('[aria-label="Search"]').click();
  // Fill [aria-label="Search"]
  await page.locator('[aria-label="Search"]').fill('Abdel');
  // Click text=No thanks
  await page.frameLocator('iframe[role="presentation"]').locator('text=No thanks').click();
  // Click .L3eUgb > div:nth-child(2)
  await page.locator('.L3eUgb > div:nth-child(2)').click();
  // Click text=Google Search I'm Feeling LuckyI'm Feeling CuriousI'm Feeling HungryI'm Feeling  >> [aria-label="Google Search"]
});
