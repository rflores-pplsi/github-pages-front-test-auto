import { test } from '@playwright/test';
import { BestMoneyMoversGroupPage } from '../../page-objects/qa-maintenance-list/bestmoneymoversgroup.page';
// import RegionsUtils from '../../utils/regions.utils';
// create instance of Page
let bestMoneyMoversGroupPage: BestMoneyMoversGroupPage;

// Setup environment before each test
test.beforeEach(async ({ page }) => {
  bestMoneyMoversGroupPage = new BestMoneyMoversGroupPage(page);
  // test.slow triples the default wait times
  test.slow();
  // await checkoutConfirmationPage.navigateToCheckoutConfirmationPage('Alaska');
});
test('Best Money Movers Group', async ({ page }) => {
  test.slow;
  // Go to https://www.shieldbenefits.com/bestmoneymoves/overview
  await bestMoneyMoversGroupPage.navigateToBestMoneyMoversGroupPage();
  // Click on legal plan tab
  await bestMoneyMoversGroupPage.clickOnLegalPlanTab();
  // Click text=Enroll Now
  await bestMoneyMoversGroupPage.clickBtnEnrollNow();
  // Confirm button takes user to Pricing Page
  await bestMoneyMoversGroupPage.assertTestingHarnesGroupsPricingPage();
  // Select a state
  await bestMoneyMoversGroupPage.selectStateBestMoneyMoversGroupPage('Virginia');
  // Verify that Available Plans label isDisplayed
  await bestMoneyMoversGroupPage.assertAvailablePlanTxt();
  // Click button:has-text("Select")
  await bestMoneyMoversGroupPage.selectFrequencyBestMoneyMoversGroupPage('Monthly');
  // Select a plan
  await bestMoneyMoversGroupPage.clickBtnESelectPlan('23.95');
  // Login
  await bestMoneyMoversGroupPage.loginBestMoneyMoversGroupPage();
  // Verify that user is redirected to personal info page
  bestMoneyMoversGroupPage.assertTellUsAboutYourselfTxt;
  // Update address
  await bestMoneyMoversGroupPage.updateAddressTestingHarnesGroupsPage('Virginia');
});
// for (const state of RegionsUtils.usStates) {
//   for (const plan of ['12.95', '22.95', '23.95', '43.90', '36.90']) {
//     test(`The sate of ${state.name} and the plan: ${plan} Testing Harnes groups`, async ({ page }) => {
//       test.slow;
//       // Go to https://www.shieldbenefits.com/bestmoneymoves/overview
//       await bestMoneyMoversGroupPage.navigateToBestMoneyMoversGroupPage();
//       // Click text=Enroll Now
//       await bestMoneyMoversGroupPage.clickBtnEnrollNow();
//       // Confirm button takes user to Pricing Page
//       await bestMoneyMoversGroupPage.assertTestingHarnesGroupsPricingPage();
//       // Select a state
//       await bestMoneyMoversGroupPage.selectStateBestMoneyMoversGroupPage(state.name);
//       // Verify that Available Plans label isDisplayed
//       await bestMoneyMoversGroupPage.assertAvailablePlanTxt();
//       // Click button:has-text("Select")
//       await bestMoneyMoversGroupPage.selectFrequencyBestMoneyMoversGroupPage('Monthly');
//       // Select a plan
//       await bestMoneyMoversGroupPage.clickBtnESelectPlan(plan);
//       // Login
//       await bestMoneyMoversGroupPage.loginBestMoneyMoversGroupPage();
//       // Verify that user is redirected to personal info page
//       bestMoneyMoversGroupPage.assertTellUsAboutYourselfTxt;
//       // Update address
//       await bestMoneyMoversGroupPage.updateAddressTestingHarnesGroupsPage(state.name);
//     });
//   }
// }
