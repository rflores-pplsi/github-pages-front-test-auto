import { test, expect } from '@playwright/test';
import UrlsUtils from '../../utils/urls.utils';
import { ShieldAssociateService } from '../../page-objects/shieldassociate/shieldassociate-service';

let shieldAssociateService: ShieldAssociateService;

test.beforeEach(async ({ context, page }) => {
  shieldAssociateService = new ShieldAssociateService(context, page);
  test.slow();
});

test.describe('Navigate to Shield Associate Pages', () => {
  test('Navigate to Shield Associate Page @smoke', async ({ page }) => {
    console.log('Test Case: Navigate to Shield Associate Page');
    await test.step(`Navigate to Shield Associate Page`, async () => {
      await page.goto(`${UrlsUtils.shieldAssociateService.baseUrl}`);
    });
    await test.step('Verify Shield Associate page has loaded and Search Input is displayed', async () => {
      await expect(shieldAssociateService.findYourAssociatePage.locSearchInput).toBeVisible();
    });
  });
  // This will currently only work in PROD
  test('Navigate to Shield Associate Calendar Page @smoke', async ({ page }) => {
    console.log('Test Case: Navigate to Shield Associate Calendar Page');
    await test.step(`Navigate to Shield Associate Calendar Page`, async () => {
      await page.goto(`${UrlsUtils.shieldAssociateService.baseUrl}/calendar`);
    });
    await test.step('Verify Shield Associate Calender has loaded and the Calendar is displayed', async () => {
      await expect(shieldAssociateService.calendarPage.locCalendarContainer).toBeVisible();
    });
  });
});
