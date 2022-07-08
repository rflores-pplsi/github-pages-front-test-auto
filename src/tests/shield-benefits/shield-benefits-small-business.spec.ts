import { test } from '@playwright/test';
import { ShieldBenefitsSmallBusinessPage } from '../../page-objects/shield-benefits/shield-benefits-small-business.page';

let shieldBenefitsSmallBusinessPage: ShieldBenefitsSmallBusinessPage;

test.beforeEach(async ({ page }) => {
  shieldBenefitsSmallBusinessPage = new ShieldBenefitsSmallBusinessPage(page);
  test.slow();
});

test('Verify functionality on the small business page - Sign In button is displayed', async ({ page }) => {
  console.log('Test Case: Verify functionality on the small business page - Sign In button is displayed');
  await shieldBenefitsSmallBusinessPage.navigateToGroupEnrollmentSmallBusinessPage('99645');
  await shieldBenefitsSmallBusinessPage.assertSignInButtonIsDisplayed();
});

test('Verify functionality on the small business page - Law firm information is displayed', async ({ page }) => {
  console.log('Test Case: Verify functionality on the small business page - Law firm information is displayed');
  await shieldBenefitsSmallBusinessPage.navigateToGroupEnrollmentSmallBusinessPage('99645');
  await shieldBenefitsSmallBusinessPage.searchLawFirm('80021');
  await shieldBenefitsSmallBusinessPage.assertLawFirmInformation();
});

test('Verify functionality on the small business page - App Store button is displayed', async ({ page }) => {
  console.log('Test Case: Verify functionality on the small business page - App Store button is displayed');
  await shieldBenefitsSmallBusinessPage.navigateToGroupEnrollmentSmallBusinessPage('99645');
  await shieldBenefitsSmallBusinessPage.assertAppStoreButtonISDisplayed();
});

test('Verify functionality on the small business page - Back to top button takes users to top of page', async ({ page }) => {
  console.log('Test Case: Verify functionality on the small business page - Back to top button takes users to top of page');
  await shieldBenefitsSmallBusinessPage.navigateToGroupEnrollmentSmallBusinessPage('99645');
  await shieldBenefitsSmallBusinessPage.clickBtnBackToTop();
  await shieldBenefitsSmallBusinessPage.assertShieldBenefitsSmallBusinessPageSmallBusinessPage();
});

test('Verify functionality on the small business page - View details button redirects to products and benefits page', async ({ page }) => {
  console.log('Test Case: Verify functionality on the small business page - View details button redirects to products and benefits page');
  await shieldBenefitsSmallBusinessPage.navigateToGroupEnrollmentSmallBusinessPage('99645');
  await shieldBenefitsSmallBusinessPage.clickBtnPricing();
  await shieldBenefitsSmallBusinessPage.selectStateAndPaymentFrequency('Colorado', 'Monthly');
  await shieldBenefitsSmallBusinessPage.assertButtonViewDetailsIsDisplayed();
});
