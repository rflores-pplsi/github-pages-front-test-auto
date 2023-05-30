import { test } from '@playwright/test';
import { LoginPage } from '../../../../page-objects/login/login.page';
import { LegalShieldCAPage } from '../../../../page-objects/qa-maintenance-list/d2c-legalshield-ca-marketingsite.page';
import { D2CLegalShieldCaPage } from '../../../../page-objects/qa-maintenance-list/d2c-legalshield-ca.page';
import DataUtils from '../../../../utils/Tests.Data';
import * as dotenv from 'dotenv';
dotenv.config();

// create instance of Page
let legalShieldCAPage: LegalShieldCAPage;
let loginPage: LoginPage;
let d2cLegalShieldCaPage: D2CLegalShieldCaPage;

// Setup environment before each test
test.beforeEach(async ({ context, page }) => {
  legalShieldCAPage = new LegalShieldCAPage(context, page);
  loginPage = new LoginPage(context, page);
  d2cLegalShieldCaPage = new D2CLegalShieldCaPage(page);

  // test.slow triples the default wait times
  test.slow();
  // await checkoutConfirmationPage.navigateToCheckoutConfirmationPage('Alaska');
});
test('D2E LegalShield CA marketing annual plan', async () => {
  test.slow;
  await test.step('Navigate to legalshield CA marketing site', async () => {
    await legalShieldCAPage.navigateToLegalShieldCAMarketingSitePlage('d2cLegalShieldCA');
  });
  await test.step('Choose a region', async () => {
    await d2cLegalShieldCaPage.selectYourRegion(DataUtils.data.testingHarness.ca.bd.province.BC);
  });
  await test.step('Pick a monthly plan', async () => {
    await legalShieldCAPage.pickAPlan('SMALL_BUSINESS');
  });
  await test.step('Login', async () => {
    await loginPage.login(process.env.LOGIN_EMAIL_UAT as string, process.env.LOGIN_PASSWORD_UAT as string);
  });
});
