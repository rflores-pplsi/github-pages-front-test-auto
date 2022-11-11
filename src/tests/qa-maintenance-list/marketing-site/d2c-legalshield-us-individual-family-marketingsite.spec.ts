/* eslint-disable no-undef */
import { test } from '@playwright/test';
import { LoginPage } from '../../page-objects/login/login.page';
import { LegalShieldUSPage } from '../../page-objects/qa-maintenance-list/d2c-legalshield-us-marketingsite.page';
require('dotenv').config();
// create instance of Page
let legalShieldUSPage: LegalShieldUSPage;
let loginPage: LoginPage;

// Setup environment before each test
test.beforeEach(async ({ page, request }) => {
  legalShieldUSPage = new LegalShieldUSPage(page);
  loginPage = new LoginPage(page);

  // test.slow triples the default wait times
  test.slow();
  // await checkoutConfirmationPage.navigateToCheckoutConfirmationPage('Alaska');
});
test('D2C LegalShield US marketing annual plan', async ({ page }) => {
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
    await loginPage.login(process.env.LOGIN_EMAIL_UAT, process.env.LOGIN_PASSWORD_UAT);
  });
});
test('D2C LegalShield US marketing monthly plan', async ({ page }) => {
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
    await loginPage.login(process.env.LOGIN_EMAIL_UAT, process.env.LOGIN_PASSWORD_UAT);
  });
});
test('D2C LegalShield US marketing user unable to purchase monthly and annual plan simultaneously', async ({ page }) => {
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
test('D2C Legalshield US marketing add annual plan should remove any existing monthly plans', async ({ page }) => {
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
test('D2C LegalShield US marketing supplement should remove annual plan from cart and be replaced with monthly plus supplement', async ({ page }) => {
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
