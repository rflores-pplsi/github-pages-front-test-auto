import { test } from '@playwright/test';
import { LoginPage } from '../../../../page-objects/login/login.page';
import { IDShieldUSPage } from '../../../../page-objects/qa-maintenance-list/d2c-idshield-us-marketingsite.page';
import { D2CLegalShieldCaPage } from '../../../../page-objects (Archived)/qa-maintenance-list/d2c-legalshield-ca.page';
import DataUtils from '../../../../utils/Tests.Data';
import * as dotenv from 'dotenv';
dotenv.config();

// create instance of Page
let idShieldUSPage: IDShieldUSPage;
let loginPage: LoginPage;
let d2cLegalShieldCaPage: D2CLegalShieldCaPage;

// Setup environment before each test
test.beforeEach(async ({ context, page }) => {
  idShieldUSPage = new IDShieldUSPage(page);
  loginPage = new LoginPage(context, page);
  d2cLegalShieldCaPage = new D2CLegalShieldCaPage(page);

  // test.slow triples the default wait times
  test.slow();
  // await checkoutConfirmationPage.navigateToCheckoutConfirmationPage('Alaska');
});
test('E2E idShield US marketing family monthly plan', async () => {
  test.slow;
  await test.step('Navigate to legalshield CA marketing site', async () => {
    await idShieldUSPage.navigateToIDShieldUSMarketingSitePlage('d2cLegalShieldCA');
  });
  await test.step('Choose a region', async () => {
    await d2cLegalShieldCaPage.selectYourRegion(DataUtils.data.testingHarness.us.city.VA);
  });
  await test.step('Pick a plan', async () => {
    await idShieldUSPage.pickAFamilyPlan('MONTHLY', 'CHECKOUT');
  });
  await test.step('Login', async () => {
    await loginPage.login(process.env.LOGIN_EMAIL_UAT as string, process.env.LOGIN_PASSWORD_UAT as string);
  });
});
