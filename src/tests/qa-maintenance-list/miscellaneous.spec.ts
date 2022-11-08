/* eslint-disable no-undef */
import { expect, test } from '@playwright/test';
import UrlsUtils from '../../utils/urls.utils';
// test('Testing miscellaneous Opportunity links', async ({ page }) => {
//   await test.step('Navigate to Opportunity', async () => {
//     await page.goto(UrlsUtils.miscellaneousUrls.opportunityUrl);
//   });
//   await test.step('Confirm the url is redirected', async () => {
//     await expect(page).toHaveURL(UrlsUtils.miscellaneousUrls.opportunityRedirectUrl);
//   });
// });
test('Testing miscellaneous Business links', async ({ page }) => {
  await test.step('Navigate to Business', async () => {
    await page.goto(UrlsUtils.miscellaneousUrls.businessUrl);
  });
  await test.step('Confirm the url is redirected', async () => {
    await expect(page).toHaveURL(UrlsUtils.miscellaneousUrls.businessRedirectUrl);
  });
});
test('Testing miscellaneous Lunch links', async ({ page }) => {
  await test.step('Navigate to Business', async () => {
    await page.goto(UrlsUtils.miscellaneousUrls.launchUrl);
  });
  await test.step('Confirm the url is redirected', async () => {
    await page.waitForLoadState();
    await expect(page).toHaveURL(UrlsUtils.miscellaneousUrls.launchRedirectUrl);
  });
});
