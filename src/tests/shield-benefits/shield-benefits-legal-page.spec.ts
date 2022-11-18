import { test } from '@playwright/test';
import { ShieldBenefitsLegalPage } from '../../page-objects/shield-benefits/shield-benefits-legal-page.page';

let shieldBenefitsLegalPage: ShieldBenefitsLegalPage;

test.beforeEach(async ({ page }) => {
  shieldBenefitsLegalPage = new ShieldBenefitsLegalPage(page);
  test.slow();
});

test('Verify functionality on the Legal page - Sign In button is displayed', async () => {
  console.log('Test Case: Verify functionality on the Legal page - Sign In button is displayed');
  await shieldBenefitsLegalPage.navigateToGroupEnrollmentLegalPage();
  await shieldBenefitsLegalPage.clickBtnLegalPage();
  await shieldBenefitsLegalPage.assertSignInButtonIsDisplayed();
});

test('Verify functionality on the Legal page - Law firm information is displayed', async () => {
  console.log('Test Case: Verify functionality on the Legal page - Law firm information is displayed');
  await shieldBenefitsLegalPage.navigateToGroupEnrollmentLegalPage();
  await shieldBenefitsLegalPage.clickBtnLegalPage();
  await shieldBenefitsLegalPage.searchLawFirm('80021');
  await shieldBenefitsLegalPage.assertLawFirmInformation();
});

test('Verify functionality on the Legal page - App Store button is displayed', async () => {
  console.log('Test Case: Verify functionality on the Legal page - App Store button is displayed');
  await shieldBenefitsLegalPage.navigateToGroupEnrollmentLegalPage();
  await shieldBenefitsLegalPage.clickBtnLegalPage();
  await shieldBenefitsLegalPage.assertAppStoreButtonISDisplayed();
});

test('Verify functionality on the Legal page - Back to top button takes users to top of page', async () => {
  console.log('Test Case: Verify functionality on the Legal page - Back to top button takes users to top of page');
  await shieldBenefitsLegalPage.navigateToGroupEnrollmentLegalPage();
  await shieldBenefitsLegalPage.clickBtnLegalPage();
  await shieldBenefitsLegalPage.clickBtnBackToTop();
  await shieldBenefitsLegalPage.assertShieldBenefitsLegalPage();
});

test('Verify functionality on the Legal page - View details button redirects to products and benefits page', async () => {
  console.log('Test Case: Verify functionality on the Legal page - View details button redirects to products and benefits page');
  await shieldBenefitsLegalPage.navigateToGroupEnrollmentLegalPage();
  await shieldBenefitsLegalPage.clickBtnPricing();
  await shieldBenefitsLegalPage.selectStateAndPaymentFrequency();
  await shieldBenefitsLegalPage.assertButtonViewDetailsIsDisplayed();
});

test('Verify functionality on the Legal page - Video "Legal Shield" is displayed on the legal page', async () => {
  console.log('Test Case: Verify functionality on the Legal page - Video "Legal Shield" is displayed on the legal page');
  await shieldBenefitsLegalPage.navigateToGroupEnrollmentLegalPage();
  await shieldBenefitsLegalPage.clickBtnLegalPage();
  await shieldBenefitsLegalPage.assertVideoPlayerIsDisplayed();
});
