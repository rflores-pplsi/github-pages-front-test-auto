/* eslint-disable no-undef */
import { test } from '@playwright/test';
import { PrimericaGroupPage } from '../../page-objects/qa-maintenance-list/primericagroup.page';
// create instance of Page
let primericaGroupPage: PrimericaGroupPage;

// Setup environment before each test
test.beforeEach(async ({ page }) => {
  primericaGroupPage = new PrimericaGroupPage(page);
  // test.slow triples the default wait times
  test.slow();
  // await checkoutConfirmationPage.navigateToCheckoutConfirmationPage('Alaska');
});
test.only('test', async ({ page }) => {
  test.slow;
  // Navigate to Primerica group url
  await primericaGroupPage.navigateToPrimericaGroupPage();
  // Select a language
  await primericaGroupPage.selectlanguageAndRegion(21);
  // Enter Agent ID
  await primericaGroupPage.fillAgentID('12345');
  // Click on Submit button
  await primericaGroupPage.clickSubmitBtn();
  // Verify that user can see Representative: JANICE S BRAY
  await primericaGroupPage.assertRepresentativeLbl('Representative: JANICE S BRAY');
  // Click on Get Started Button
  await primericaGroupPage.clickGetStartedBtn();
  // Verify the Plan name
  await primericaGroupPage.selectStateOrProvince('Manitoba');
  // Click select your plan link
  await primericaGroupPage.clickSelectYourPlanLnk();
});
