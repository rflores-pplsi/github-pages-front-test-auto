import { expect } from '@playwright/test';
import UrlsUtils from '../../../utils/urls.utils';
import { test } from '../../../fixtures/frontend-ui.fixture';

test.describe('Navigate to Shield Associate Pages', () => {
  test.skip('Navigate to Shield Associate Page @smoke @e2e', async ({ page, shieldAssociateService }) => {
    console.log('Test Case: Navigate to Shield Associate Page');
    test.slow();
    await test.step(`Navigate to Shield Associate Page`, async () => {
      await page.goto(`${UrlsUtils.legalshieldAssociateService.baseUrl}`);
    });
    await test.step('Verify Shield Associate page has loaded and Search Input is displayed', async () => {
      await expect(shieldAssociateService.findYourAssociatePage.locH1Header).toContainText('Smart, Simple Coverage Starts Here');
    });
  });
  // This will currently only work in PROD
  test.skip('Navigate to Shield Associate Calendar Page @smoke @e2e', async ({ page, shieldAssociateService }) => {
    console.log('Test Case: Navigate to Shield Associate Calendar Page');
    test.slow();
    await test.step(`Navigate to Shield Associate Calendar Page`, async () => {
      await page.goto(`${UrlsUtils.legalshieldAssociateService.baseUrl}/calendar`);
    });
    await test.step('Verify Shield Associate Calender has loaded and the Calendar is displayed', async () => {
      await expect(shieldAssociateService.calendarPage.locCalendarContainer).toBeVisible();
    });
  });
});
