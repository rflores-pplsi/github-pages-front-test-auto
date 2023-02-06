import { test } from '@playwright/test';
import { GroupsPage } from '../../../page-objects-refactored/qa-maintenance-list/groups.page';
import { basicUser } from '../../../utils/user.utils';
import * as dotenv from 'dotenv';
dotenv.config();
// create instance of Page
let primericaGroupPage: GroupsPage;
// Setup environment before each test
test.beforeEach(async ({ page }) => {
  primericaGroupPage = new GroupsPage(page);
  // test.slow triples the default wait times
  test.slow();
  // await checkoutConfirmationPage.navigateToCheckoutConfirmationPage('Alaska');
});
test('Primerica Group', async () => {
  test.slow;
  // Navigate to Primerica group url
  await primericaGroupPage.navigateToGroupsPage('primerica');
  // Select a language
  await primericaGroupPage.selectLanguageAndRegion(0);
  // Click on Enroll Now
  await primericaGroupPage.primericaGroupBtnEnrollNow.click();
  // Enter Agent ID
  await primericaGroupPage.fillAgentID('12345');
  // Click on Submit button
  await primericaGroupPage.primericaGroupBtnFindRep.click();
  // Select State
  await primericaGroupPage.selectPrimericaStateOrProvince('46');
  // Click select your plan link
  await primericaGroupPage.clickSelectYourPlanLnk();
  // Click on Sign In
  await primericaGroupPage.login(basicUser.email as string, basicUser.password as string);
  // Click on Contact info Button
  await primericaGroupPage.changeAddress('englishus', 'Virginia');
  // Verify that  it takes user to checkout
  await primericaGroupPage.assertCheckoutTitle();
});
