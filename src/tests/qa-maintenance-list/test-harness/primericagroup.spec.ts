import { test } from '@playwright/test';
import { PrimericaGroupPage } from '../../../page-objects/qa-maintenance-list/primericagroup.page';
// create instance of Page
let primericaGroupPage: PrimericaGroupPage;

// Setup environment before each test
test.beforeEach(async ({ page }) => {
  primericaGroupPage = new PrimericaGroupPage(page);
  // test.slow triples the default wait times
  test.slow();
  // await checkoutConfirmationPage.navigateToCheckoutConfirmationPage('Alaska');
});
test('Primerica Group', async () => {
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
  // await primericaGroupPage.assertRepresentativeLbl('Representative: JANICE S BRAY');
  // Click on Get Started Button
  await primericaGroupPage.clickGetStartedBtn();
  // Verify the Plan name
  await primericaGroupPage.selectStateOrProvince('Ontario');
  // Click select your plan link
  await primericaGroupPage.clickSelectYourPlanLnk();
  // Click on Add to Cart Button
  await primericaGroupPage.clickAddToCartBtn();
  // Click on Contact info Button
  await primericaGroupPage.clickContactInfoBtn();
  // Verify that  it takes user to checkout
  await primericaGroupPage.assertCheckoutURL();
});
