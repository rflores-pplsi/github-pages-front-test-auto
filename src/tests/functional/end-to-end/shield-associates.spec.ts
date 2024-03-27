import { expect } from '@playwright/test';
import UrlsUtils from '../../../utils/urls.utils';
import { test } from '../../../fixtures/frontend-ui.fixture';

test.describe('Navigate to Shield Associate Pages', () => {
  test('Navigate to Shield Associate Page @smoke ', async ({ page, legalshieldAssociateService }) => {
    console.log('Test Case: Navigate to Shield Associate Page');
    test.slow();
    await test.step(`Navigate to Shield Associate Page`, async () => {
      await page.goto(`${UrlsUtils.shieldAssociateService.baseUrl}`);
    });
    await test.step('Verify Shield Associate page has loaded and Search Input is displayed', async () => {
      await expect(legalshieldAssociateService.findYourAssociatePage.locH1Header).toContainText('Smart, Simple Coverage Starts Here');
    });
  });
  // This will currently only work in PROD
  test('Navigate to Shield Associate Calendar Page @smoke ', async ({ page }) => {
    console.log('Test Case: Navigate to Shield Associate Calendar Page');
    test.slow();
    await test.step(`Navigate to Shield Associate Calendar Page`, async () => {
      await page.goto(`${UrlsUtils.shieldAssociateService.baseUrl}/calendar`);
    });
    await test.step('Verify Shield Associate Calender has loaded and the Calendar is displayed', async () => {
      expect(page).toHaveURL(new RegExp('pplsi/calendar/'));
    });
  });
});
