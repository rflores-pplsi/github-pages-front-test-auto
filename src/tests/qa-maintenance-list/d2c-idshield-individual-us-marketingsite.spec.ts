/* eslint-disable no-undef */
import { test } from '@playwright/test';
import { LoginPage } from '../../page-objects/login/login.page';
import { IDShieldUSPage } from '../../page-objects/qa-maintenance-list/d2c-idshield-us-marketingsite.page';
import { D2CLegalShieldCaPage } from '../../page-objects/qa-maintenance-list/d2c-legalshield-ca.page';
import DataUtils from '../../utils/Tests.Data';

require('dotenv').config();
// create instance of Page
let idShieldUSPage: IDShieldUSPage;
let loginPage: LoginPage;
let d2cLegalShieldCaPage: D2CLegalShieldCaPage;

// Setup environment before each test
test.beforeEach(async ({ page, request }) => {
  idShieldUSPage = new IDShieldUSPage(page);
  loginPage = new LoginPage(page);
  d2cLegalShieldCaPage = new D2CLegalShieldCaPage(page);

  // test.slow triples the default wait times
  test.slow();
});
test('D2E idShield US marketing individual monthly plan', async ({ page }) => {
  test.slow;
  await test.step('Navigate to legalshield CA marketing site', async () => {
    await idShieldUSPage.navigateToIDShieldUSMarketingSitePlage('d2cLegalShieldCA');
  });
  await test.step('Choose a region', async () => {
    await d2cLegalShieldCaPage.selectYourRegion(DataUtils.data.testingHarness.us.city.VA);
  });
  await test.step('Pick a plan', async () => {
    test.slow;
    await idShieldUSPage.pickAnIndividualPlan('MONTHLY', 'CHECKOUT');
  });
  await test.step('Login', async () => {
    await loginPage.login(process.env.LOGIN_EMAIL_UAT, process.env.LOGIN_PASSWORD_UAT);
  });
});
test.only('D2E idShield US marketing assert only one product can be purchased', async () => {
  await test.step('Navigate to legalshield CA marketing site', async () => {
    await idShieldUSPage.navigateToIDShieldUSMarketingSitePlage('d2cLegalShieldCA');
  });
  await test.step('Choose a region', async () => {
    await d2cLegalShieldCaPage.selectYourRegion(DataUtils.data.testingHarness.us.city.VA);
  });
  await test.step('Pick individual plan', async () => {
    test.slow;
    await idShieldUSPage.pickAnIndividualPlan('MONTHLY', 'CONTINUE_SHOPPING');
  });
  await test.step('Pick family plan', async () => {
    await idShieldUSPage.pickAFamilyPlan('MONTHLY', '');
  });
  await test.step('Assert the shopping cart only includes family plan and message box popped up to indicate that', async () => {
    await idShieldUSPage.assertShoppingCartIncludesFamilyPlan();
  });
  await test.step('Continue shopping', async () => {
    await idShieldUSPage.continueShopping();
  });
  await test.step('Pick business plan', async () => {
    await idShieldUSPage.pickABusinessPlan('MONTHLY', '');
  });
  await test.step('Assert the shopping cart only includes Business plan and message box popped up to indicate that', async () => {
    await idShieldUSPage.assertShoppingCartIncludesBusinessPlan();
  });
});
