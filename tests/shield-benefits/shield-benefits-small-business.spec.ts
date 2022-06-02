import { test } from '@playwright/test';
import { ShieldBenefitsSmallBusinessPage } from '../../page-objects/shield-benefits/shield-benefits-small-business.page';

let shieldBenefitsSmallBusinessPage: ShieldBenefitsSmallBusinessPage;

test.beforeEach(async ({ page }) => {
  shieldBenefitsSmallBusinessPage = new ShieldBenefitsSmallBusinessPage(page);
  test.slow();
});

test('Verify functionality on the small business page - Sign In button redirects to accounts V2', async ({ page }) => {
  console.log('Test Case: Verify functionality on the small business page - Sign In button redirects to accounts V2');
  // Navigate to the small business page
  await shieldBenefitsSmallBusinessPage.navigateToGroupEnrollmentSmallBusinessPage('99645');
  // Click on Sign In button
  await shieldBenefitsSmallBusinessPage.clickBtnSignIn();
  // Verify Accounts v2 url displays
  await shieldBenefitsSmallBusinessPage.assertAccountsV2Url();
});

test('Verify functionality on the small business page - Law firm information is displayed', async ({ page }) => {
  console.log('Test Case: Verify functionality on the small business page - Law firm information is displayed');
  // Navigate to the small business page
  await shieldBenefitsSmallBusinessPage.navigateToGroupEnrollmentSmallBusinessPage('99645');
  // Type in the law search field zip code and click on Law Firm search button
  await shieldBenefitsSmallBusinessPage.searchLawFirm('80021');
  // Confirm Law Firm information displays on the small business page
  await shieldBenefitsSmallBusinessPage.assertLawFirmInformation();
});

test('Verify functionality on the small business page - App Store link connected to the store site', async ({ page }) => {
  console.log('Test Case: Verify functionality on the small business page - App Store link connected to the store site');
  // Navigate to the small business page
  await shieldBenefitsSmallBusinessPage.navigateToGroupEnrollmentSmallBusinessPage('99645');
  // Click on App Store link
  await shieldBenefitsSmallBusinessPage.clickAppStoreLink();
  // Confirm App store url displays
  await shieldBenefitsSmallBusinessPage.assertAppStoreUrl();
});

test('Verify functionality on the small business page - Back to top button takes users to top of page', async ({ page }) => {
  console.log('Test Case: Verify functionality on the small business page - Back to top button takes users to top of page');
  // Navigate to the small business page
  await shieldBenefitsSmallBusinessPage.navigateToGroupEnrollmentSmallBusinessPage('99645');
  // Click on Back to top button
  await shieldBenefitsSmallBusinessPage.clickBtnBackToTop();
  // Confirm top of page is displayed
  await shieldBenefitsSmallBusinessPage.assertShieldBenefitsSmallBusinessPageSmallBusinessPage();
});

test.only('Verify functionality on the small business page - View details button redirects to products and benefits page', async ({ page }) => {
  console.log('Test Case: Verify functionality on the small business page - View details button redirects to products and benefits page');
  // Navigate to the small business page
  await shieldBenefitsSmallBusinessPage.navigateToGroupEnrollmentSmallBusinessPage('99645');
  // Click on Pricing tab
  await shieldBenefitsSmallBusinessPage.clickBtnPricing();
  // Select state and payment frequency
  await shieldBenefitsSmallBusinessPage.selectStateAndPaymentFrequency('Colorado', 'Monthly');
  // Click on View Details button
  await shieldBenefitsSmallBusinessPage.clickBtnViewDetails();
  // Confirm Products and Benefits url is displayed
  await shieldBenefitsSmallBusinessPage.assertProductsAndBenefitsTitle();
});
