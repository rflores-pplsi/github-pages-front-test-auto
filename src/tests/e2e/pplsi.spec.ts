import { test, expect } from '@playwright/test';
import UrlsUtils from '../../utils/urls.utils';
import { PplsiPage } from '../../page-objects-refactored/pplsi/pplsi.page';
import { PplsiBusinessSolutionsOrientationPage } from '../../page-objects-refactored/pplsi/business-solutions-orientation/pplsi-business-solutions-orientation.page';

let pplsiPage: PplsiPage;
let pplsiBusinessSolutionsOrientationPage: PplsiBusinessSolutionsOrientationPage;

test.beforeEach(async ({ context, page }) => {
  pplsiBusinessSolutionsOrientationPage = new PplsiBusinessSolutionsOrientationPage(context, page);
  pplsiPage = new PplsiPage(context, page);
});
test(`Can proceed through the entire Business Solutions Orientation Flow @smoke`, async ({ page }) => {
  console.log(`Test Case: Can proceed through the entire Business Solutions Orientation Flow`);
  await test.step(`Navigate to PPLSI.com Business Solutions Orientation Overview page`, async () => {
    await pplsiBusinessSolutionsOrientationPage.page.goto(`${UrlsUtils.pplsiUrls.home.url}/business-solutions-orientation/`);
  });
  await test.step(`Click the Get Started button in the bottom navigation menu on the business solutions orientation page `, async () => {
    await pplsiBusinessSolutionsOrientationPage.pplsiBusinessSolutionsOrientationBottomNavigationBarComponent.locGetStartedButton.click();
  });
  await test.step(`Click the Next button in the bottom navigation menu on the business solutions orientation overview page`, async () => {
    await pplsiBusinessSolutionsOrientationPage.pplsiBusinessSolutionsOrientationBottomNavigationBarComponent.locNextButton.click();
  });
  await test.step(`Click the Next button in the bottom navigation menu on the business solutions orientation compensation page`, async () => {
    await pplsiBusinessSolutionsOrientationPage.pplsiBusinessSolutionsOrientationBottomNavigationBarComponent.locNextButton.click();
  });
  await test.step(`Click the Next button in the bottom navigation menu on the business solutions orientation prospecting page`, async () => {
    await pplsiBusinessSolutionsOrientationPage.pplsiBusinessSolutionsOrientationBottomNavigationBarComponent.locNextButton.click();
  });
  await test.step(`Click the Next button in the bottom navigation menu on the business solutions orientation next steps page`, async () => {
    await pplsiBusinessSolutionsOrientationPage.pplsiBusinessSolutionsOrientationBottomNavigationBarComponent.locNextButton.click();
  });
  await test.step(`Click the Complete button in the bottom navigation menu on the business solutions orientation our culture page`, async () => {
    await pplsiBusinessSolutionsOrientationPage.pplsiBusinessSolutionsOrientationBottomNavigationBarComponent.locCompleteButton.click();
  });
  await test.step(`Validate Order Summary on Payment Info Page`, async () => {
    expect(page).toHaveTitle('Business Solutions Orientation - PPLSI');
  });
});

test(`User can click the Business Opportunity link in PPLSI footer and reach the Business Solutions Orientation Page @smoke`, async ({ page }) => {
  console.log(`Test Case: User can click the Business Opportunity link in PPLSI footer and reach the Business Solutions Orientation Page`);
  await test.step(`Navigate to PPLSI.com Business Solutions Orientation Overview page`, async () => {
    await page.goto(`${UrlsUtils.pplsiUrls.home.url}`);
  });
  await test.step(`Navigate to PPLSI.com Business Solutions Orientation Overview page`, async () => {
    await pplsiPage.pplsiFooterComponent.locBusinessOpportunityLink.click();
  });
  await test.step(`Navigate to PPLSI.com Business Solutions Orientation Overview page`, async () => {
    await pplsiPage.pplsiFooterComponent.locBusinessOpportunityLink.click();
  });
  await test.step(`Assert the Business Solutions Orientation page URL`, async () => {
    expect(page).toHaveURL(new RegExp('/business-solutions-orientation/'));
  });
});
