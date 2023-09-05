import { BrowserContext, test } from '@playwright/test';
import { GroupsPage } from '../../../../archived/page-objects-oldest/qa-maintenance-list/groups.page';
// import { basicUser } from '../../../utils/user.utils';
import * as dotenv from 'dotenv';
import { basicUser } from '../../../../utils/user.utils';
import { LoginPage } from '../../../../archived/page-objects-oldest/login/login.page';
import UrlsUtils from '../../../../utils/urls.utils';
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
test('Best Money Movers Group', async ({ page }) => {
  test.slow;
  // await groupsPage.goTo('https://www.shieldbenefits.com/bestmoneymoves/overview');
  await groupsPage.goTo(UrlsUtils.shieldBenefits.home.url + '/bestmoneymoves/overview');

  //www.shieldbenefits.com/bestmoneymoves/overview
  // https: await groupsPage.goTo(`${UrlsUtils.shieldBenefits.home.url}/bestmoneymovers/overview`);
  // Click on legal plan tab
  await groupsPage.bestMoneyMoversLocLnkLegalPlan.click();
  // Click text=Enroll Now
  await groupsPage.bestMoneyMoversLocBtnEnrollNow.click();
  // Confirm button takes user to Pricing Page
  await groupsPage.assertTestingHarnesGroupsUrlPage('enrollment');
  // Select a state
  // await groupsPage.selectBestMoneyMoversStateOrProvince('46');
  await groupsPage.selectStateOrProvince('Colorado');
  // Verify that Available Plans label isDisplayed
  await groupsPage.assertAvailablePlanTxt();
  // Click button:has-text("Select")
  // await groupsPage.selectFrequencyBestMoneyMoversGroupPage('Monthly');
  // Select a plan
  await groupsPage.clickBtnESelectPlan('23.95');
  // Login
  await loginPage.login(basicUser.email as string, basicUser.password as string);
  // Verify that user is redirected to personal info page
  await groupsPage.assertTellUsAboutYourselfTxt();
  // Update address
  await groupsPage.changeAddress('englishus', 'Virginia');
});
