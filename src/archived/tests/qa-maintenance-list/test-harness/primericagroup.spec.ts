import { expect, test } from '@playwright/test';
import { GroupsPage } from '../../../../archived/page-objects-oldest/qa-maintenance-list/groups.page';
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
test('Primerica Group', async ({ page }) => {
  test.slow;
  await primericaGroupPage.navigateToGroupsPage('primerica');
  await primericaGroupPage.selectLanguageAndMarket('English (US)');
  await primericaGroupPage.fillAgentID('12345');
  await primericaGroupPage.primericaGroupBtnEnrollNow.click();
  await primericaGroupPage.selectPrimericaStateOrProvince('New York');
  await expect(page).toHaveURL(new RegExp('checkout.legalshield'));
});
