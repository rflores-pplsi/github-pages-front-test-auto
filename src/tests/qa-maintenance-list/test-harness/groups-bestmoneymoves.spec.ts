import { BrowserContext, test } from '@playwright/test';
import { GroupsPage } from '../../../page-objects-refactored/qa-maintenance-list/groups.page';
// import { basicUser } from '../../../utils/user.utils';
import * as dotenv from 'dotenv';
import { basicUser } from '../../../utils/user.utils';
import { LoginPage } from '../../../page-objects-refactored/login/login.page';
dotenv.config();
// import RegionsUtils from '../../utils/regions.utils';
// create instance of Page
let groupsPage: GroupsPage;
let loginPage: LoginPage;
let context: BrowserContext;
// Setup environment before each test
test.beforeEach(async ({ page }) => {
  groupsPage = new GroupsPage(page);
  loginPage = new LoginPage(context, page);
  // test.slow triples the default wait times
  test.slow();
  // await checkoutConfirmationPage.navigateToCheckoutConfirmationPage('Alaska');
});
test('Best Money Movers Group', async () => {
  test.slow;
  // Go to https://www.shieldbenefits.com/bestmoneymoves/overview
  await groupsPage.navigateToGroupsPage('bestmoneymovers');
  // Click on legal plan tab
  await groupsPage.bestMoneyMoversLocLnkLegalPlan.click();
  // Click text=Enroll Now
  await groupsPage.bestMoneyMoversLocBtnEnrollNow.click();
  // Confirm button takes user to Pricing Page
  await groupsPage.assertTestingHarnesGroupsUrlPage('enrollment');
  // Select a state
  await groupsPage.selectBestMoneyMoversStateOrProvince('46');
  // Verify that Available Plans label isDisplayed
  await groupsPage.assertAvailablePlanTxt();
  // Click button:has-text("Select")
  await groupsPage.selectFrequencyBestMoneyMoversGroupPage('Monthly');
  // Select a plan
  await groupsPage.clickBtnESelectPlan('23.95');
  // Login
  await loginPage.login(basicUser.email as string, basicUser.password as string);
  // Verify that user is redirected to personal info page
  groupsPage.assertTellUsAboutYourselfTxt;
  // Update address
  await groupsPage.changeAddress('englishus', 'Virginia');
});
// for (const state of RegionsUtils.usStates) {
//   for (const plan of ['12.95', '22.95', '23.95', '43.90', '36.90']) {
//     test(`The sate of ${state.name} and the plan: ${plan} Testing Harnes groups`, async ({ page }) => {
//       test.slow;
//       // Go to https://www.shieldbenefits.com/bestmoneymoves/overview
//       await groupsPage.navigateToBestMoneyMoversGroupPage();
//       // Click text=Enroll Now
//       await groupsPage.clickBtnEnrollNow();
//       // Confirm button takes user to Pricing Page
//       await groupsPage.assertTestingHarnesGroupsPricingPage();
//       // Select a state
//       await groupsPage.selectStateBestMoneyMoversGroupPage(state.name);
//       // Verify that Available Plans label isDisplayed
//       await groupsPage.assertAvailablePlanTxt();
//       // Click button:has-text("Select")
//       await groupsPage.selectFrequencyBestMoneyMoversGroupPage('Monthly');
//       // Select a plan
//       await groupsPage.clickBtnESelectPlan(plan);
//       // Login
//       await groupsPage.loginBestMoneyMoversGroupPage();
//       // Verify that user is redirected to personal info page
//       groupsPage.assertTellUsAboutYourselfTxt;
//       // Update address
//       await groupsPage.updateAddressTestingHarnesGroupsPage(state.name);
//     });
//   }
// }
