import { test } from '@playwright/test';
import { LoginPage } from '../../../page-objects-refactored/login/login.page';
import { LegalShieldUSPage } from '../../../page-objects-refactored/qa-maintenance-list/d2c-legalshield-us-marketingsite.page';
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
test('D2C LegalShield US marketing annual plan', async () => {
  test.slow;
  await test.step('Navigate to Marketing Site', async () => {
    await legalShieldUSPage.navigateToLegalShieldUSMarketingSitePage('d2cLegalShieldUSMarketingSite');
  });
  await test.step('Pick annual plan', async () => {
    await legalShieldUSPage.pickAPlan('Annual');
  });
  await test.step('Checkout', async () => {
    await legalShieldUSPage.checkout();
  });
  await test.step('Login', async () => {
    await loginPage.login(process.env.LOGIN_EMAIL_UAT as string, process.env.LOGIN_PASSWORD_UAT as string);
  });
});
test('D2C LegalShield US marketing monthly plan', async () => {
  test.slow;
  await test.step('Navigate to Marketing Site', async () => {
    await legalShieldUSPage.navigateToLegalShieldUSMarketingSitePage('d2cLegalShieldUSMarketingSite');
  });
  await test.step('Pick monthly plan', async () => {
    await legalShieldUSPage.pickAPlan('Monthly');
  });
  await test.step('Checkout', async () => {
    await legalShieldUSPage.checkout();
  });
  await test.step('Login', async () => {
    await loginPage.login(process.env.LOGIN_EMAIL_UAT as string, process.env.LOGIN_PASSWORD_UAT as string);
  });
});
test('D2C LegalShield US marketing user unable to purchase monthly and annual plan simultaneously', async () => {
  test.slow;
  await test.step('Navigate to Marketing Site', async () => {
    await legalShieldUSPage.navigateToLegalShieldUSMarketingSitePage('d2cLegalShieldUSMarketingSite');
  });
  await test.step('Pick monthly plan', async () => {
    await legalShieldUSPage.pickAPlan('Monthly');
  });
  await test.step('Continue shopping', async () => {
    await legalShieldUSPage.continueShopping();
  });
  await test.step('Pick annual plan', async () => {
    await legalShieldUSPage.pickAnnualPlan();
  });
  await test.step('Check checkout cart', async () => {
    await legalShieldUSPage.assertExistingPlanInCart('Annual Total');
  });
});
test('D2C Legalshield US marketing add annual plan should remove any existing monthly plans', async () => {
  await test.step('Navigate to Marketing Site', async () => {
    await legalShieldUSPage.navigateToLegalShieldUSMarketingSitePage('d2cLegalShieldUSMarketingSite');
  });
  await test.step('Pick annual plan', async () => {
    await legalShieldUSPage.pickAPlan('Annual');
  });
  await test.step('Continue shopping', async () => {
    await legalShieldUSPage.continueShopping();
  });
  await test.step('Pick monthly plan', async () => {
    await legalShieldUSPage.pickMonthlyPlan();
  });
  await test.step('Check checkout cart', async () => {
    await legalShieldUSPage.assertExistingPlanInCart('Monthly Total');
  });
});
test('D2C LegalShield US marketing supplement should remove annual plan from cart and be replaced with monthly plus supplement', async () => {
  test.slow;
  await test.step('Navigate to Marketing Site', async () => {
    await legalShieldUSPage.navigateToLegalShieldUSMarketingSitePage('d2cLegalShieldUSMarketingSite');
  });
  await test.step('Pick annual plan', async () => {
    await legalShieldUSPage.pickAPlan('Annual');
  });
  await test.step('Continue shopping', async () => {
    await legalShieldUSPage.continueShopping();
  });
  await test.step('Pick small business', async () => {
    await legalShieldUSPage.pickSmallBusinessFromHeader();
  });
  await test.step('Check checkout cart', async () => {
    await legalShieldUSPage.assertMonthlyPlanAndSupplementInCart();
  });
});
