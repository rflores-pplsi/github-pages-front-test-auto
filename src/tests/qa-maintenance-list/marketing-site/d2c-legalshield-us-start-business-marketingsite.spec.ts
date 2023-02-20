/* eslint-disable no-undef */
import { test } from '@playwright/test';
import { LoginPage } from '../../../page-objects/login/login.page';
import { LegalShieldUSPage } from '../../../page-objects/qa-maintenance-list/d2c-legalshield-us-marketingsite.page';
import * as dotenv from 'dotenv';
dotenv.config();
// create instance of Page
let legalShieldUSPage: LegalShieldUSPage;
let loginPage: LoginPage;

// Setup environment before each test
test.beforeEach(async ({ context, page }) => {
  legalShieldUSPage = new LegalShieldUSPage(context, page);
  loginPage = new LoginPage(context, page);

  // test.slow triples the default wait times
  test.slow();
  // await checkoutConfirmationPage.navigateToCheckoutConfirmationPage('Alaska');
});
test('D2C LegalShield US marketing start a business plan', async () => {
  test.slow;
  await test.step('Navigate to Marketing Site', async () => {
    await legalShieldUSPage.navigateToLegalShieldUSMarketingSitePage('d2cLegalShieldUSMarketingSite');
  });
  await test.step('Pick annual plan', async () => {
    await legalShieldUSPage.pickAPlan('START_BUSINESS');
  });
  await test.step('Checkout', async () => {
    await legalShieldUSPage.checkout();
  });
  await test.step('Login', async () => {
    await loginPage.login(process.env.LOGIN_EMAIL_UAT as string, process.env.LOGIN_PASSWORD_UAT as string);
  });
});
