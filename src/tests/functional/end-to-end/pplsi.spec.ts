import { expect } from '@playwright/test';
import UrlsUtils from '../../../utils/urls.utils';
import { test } from '../../../fixtures/frontend-ui.fixture';

test(`Business Solutions Orientation Flow @smoke @e2e`, async ({ page, pplsiService }) => {
  console.log(`Test Case: Business Solutions Orientation Flow`);
  await test.step(`Navigate to PPLSI.com Business Solutions Orientation Overview page`, async () => {
    await page.goto(`${UrlsUtils.pplsiUrls.home.url}/business-solutions-orientation/`);
  });
  await test.step(`Click the Get Started button in the bottom navigation menu on the business solutions orientation page `, async () => {
    await pplsiService.businessSolutionsOrientationPage.bottomNavigationBarComponent.locGetStartedButton.click();
  });
  await test.step(`Click the Next button in the bottom navigation menu on the business solutions orientation overview page`, async () => {
    await pplsiService.businessSolutionsOrientationPage.bottomNavigationBarComponent.locNextButton.click();
  });
  await test.step(`Click the Next button in the bottom navigation menu on the business solutions orientation compensation page`, async () => {
    await pplsiService.businessSolutionsOrientationPage.bottomNavigationBarComponent.locNextButton.click();
  });
  await test.step(`Click the Next button in the bottom navigation menu on the business solutions orientation prospecting page`, async () => {
    await pplsiService.businessSolutionsOrientationPage.bottomNavigationBarComponent.locNextButton.click();
  });
  await test.step(`Click the Next button in the bottom navigation menu on the business solutions orientation next steps page`, async () => {
    await pplsiService.businessSolutionsOrientationPage.bottomNavigationBarComponent.locNextButton.click();
  });
  await test.step(`Click the Complete button in the bottom navigation menu on the business solutions orientation our culture page`, async () => {
    await pplsiService.businessSolutionsOrientationPage.bottomNavigationBarComponent.locCompleteButton.click();
  });
  await test.step(`Validate Title of Business Solutions Orientation Page`, async () => {
    expect(page).toHaveTitle('Business Solutions Orientation - PPLSI');
  });
});

test(`PPLSI footer Business Opportunity link to Business Solutions Orientation Page @smoke @e2e`, async ({ page, pplsiService }) => {
  console.log(`Test Case: PPLSI footer Business Opportunity link to Business Solutions Orientation Page`);
  await test.step(`Navigate to PPLSI.com Business Solutions Orientation Overview page`, async () => {
    await page.goto(`${UrlsUtils.pplsiUrls.home.url}`);
  });
  await test.step(`Navigate to PPLSI.com Business Solutions Orientation Overview page`, async () => {
    await pplsiService.pplsiPage.pplsiFooterComponent.locBusinessOpportunityLink.click();
  });
  await test.step(`Navigate to PPLSI.com Business Solutions Orientation Overview page`, async () => {
    await pplsiService.pplsiPage.pplsiFooterComponent.locBusinessOpportunityLink.click();
  });
  await test.step(`Assert the Business Solutions Orientation page URL`, async () => {
    expect(page).toHaveURL(new RegExp('/business-solutions-orientation/'));
  });
});
