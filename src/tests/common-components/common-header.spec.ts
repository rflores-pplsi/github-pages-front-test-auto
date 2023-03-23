import { test, expect } from '@playwright/test';
import UrlsUtils from '../../utils/urls.utils';
import { CommonHeaderComponent } from '../../page-objects-refactored/common-components/common-header.component';

let commonHeaderComponent: CommonHeaderComponent;

test.beforeEach(async ({ page }) => {
  test.slow();
  commonHeaderComponent = new CommonHeaderComponent(page);
});

test('Verify Help Drop Down options', async ({ page }) => {
  console.log('Test Case: Verify Help Drop Down options');
  await test.step(`Navigate to login service`, async () => {
    await page.goto(UrlsUtils.legalshieldUrls.login.url);
  });
  await test.step(`Click on the Help button in the Header of Login Service`, async () => {
    await commonHeaderComponent.locHelpButton.click();
  });
  await test.step(`Verify the Help Menu contents`, async () => {
    await expect(commonHeaderComponent.locSalesAndCustomerServicePhoneLink).toBeVisible();
    await expect(commonHeaderComponent.locMemberServicesEmailLink).toBeVisible();
    await expect(commonHeaderComponent.locAssociateSupportPhoneLink).toBeVisible();
  });
});
