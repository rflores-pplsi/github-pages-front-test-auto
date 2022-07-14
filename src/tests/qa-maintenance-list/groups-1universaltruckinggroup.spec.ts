/* eslint-disable no-undef */
import { test } from '@playwright/test';
import { UniversalTruckingPage } from '../../page-objects/qa-maintenance-list/1UniversalTruckinggroup.page copy';
import RegionsUtils from '../../utils/regions.utils';
// create instance of Page
let universalTruckingPage: UniversalTruckingPage;

// Setup environment before each test
test.beforeEach(async ({ page }) => {
  universalTruckingPage = new UniversalTruckingPage(page);
  // test.slow triples the default wait times
  test.slow();
  // await checkoutConfirmationPage.navigateToCheckoutConfirmationPage('Alaska');
});
test.only('test', async ({ page }) => {
  test.slow;
  // Go to https://www.shieldbenefits.com/bestmoneymoves/overview
  await universalTruckingPage.navigateTo1UniversalTruckingGroupPage();
  // Confirm button takes user to W3 URL
  await universalTruckingPage.assertW3Url();
  // Click on SignUp tab
  await universalTruckingPage.clickTabSigningUp();
  // Select a language
  await universalTruckingPage.selectlanguage('French');
  // Select a state
  await universalTruckingPage.selectStateUniversalTruckingPage('Texas');
  await universalTruckingPage.clickBtnESelect();
  // Select a plan
  await universalTruckingPage.clickBtnSelectPlan('Sélectionnez votre plan juridique');
  // Verify the Plan name
  universalTruckingPage.assertSelectedPlanTxt('Plan juridique');
  // Verify the price
  universalTruckingPage.assertParMoiTxt();
  // Click on Coordonnees button
  await universalTruckingPage.clickBtnCoordonnées();
});
for (const state of RegionsUtils.usStates) {
  for (const plan of ['12.95', '22.95', '23.95', '43.90', '36.90']) {
    test(`The sate of ${state.name} and the plan: ${plan} Testing Harnes groups`, async ({ page }) => {
      test.slow;
      // Go to https://www.shieldbenefits.com/bestmoneymoves/overview
      await universalTruckingPage.navigateTo1UniversalTruckingGroupPage();
      // Confirm button takes user to W3 URL
      await universalTruckingPage.assertW3Url();
      // Click on SignUp tab
      await universalTruckingPage.clickTabSigningUp();
      // Select a state
      await universalTruckingPage.selectStateUniversalTruckingPage(state.name);
      // Click button:has-text("Select")
      await universalTruckingPage.clickBtnESelect();
      // Verify that Available Plans label isDisplayed
      await universalTruckingPage.assertAvailablePlanTxt();
      // Select a plan
      // await universalTruckingPage.clickBtnESelectPlan(plan);
      // Login
      await universalTruckingPage.loginBestMoneyMoversGroupPage();
      // Verify that user is redirected to personal info page
      universalTruckingPage.assertTellUsAboutYourselfTxt;
      // Update address
      await universalTruckingPage.updateAddressTestingHarnesGroupsPage(state.name);
    });
  }
}
