import { test } from '@playwright/test';
import { ShieldBenefitsCommercialDriverPage } from '../../page-objects/shield-benefits/shield-benefits-commercial-driver.page';

let shieldBenefitsCommercialDriverPage: ShieldBenefitsCommercialDriverPage;

test.beforeEach(async ({ page }) => {
  shieldBenefitsCommercialDriverPage = new ShieldBenefitsCommercialDriverPage(page);
  test.slow();
});

test('Verify functionality on the Commercial Driver page - Sign In button is displayed', async ({}) => {
  console.log('Test Case: Verify functionality on the Commercial Driver page - Sign In button is displayed');
  await shieldBenefitsCommercialDriverPage.navigateToGroupEnrollmentCommercialDriverPage();
  await shieldBenefitsCommercialDriverPage.clickBtnCommercialDriverPage();
  await shieldBenefitsCommercialDriverPage.assertSignInButtonIsDisplayed();
});

test('Verify functionality on the Commercial Driver page - Law firm information is displayed', async ({}) => {
  console.log('Test Case: Verify functionality on the Commercial Driver  page - Law firm information is displayed');
  await shieldBenefitsCommercialDriverPage.navigateToGroupEnrollmentCommercialDriverPage();
  await shieldBenefitsCommercialDriverPage.clickBtnCommercialDriverPage();
  await shieldBenefitsCommercialDriverPage.assertLawFirmInformation();
});

test('Verify functionality on the Commercial Driver page - App Store button is displayed', async ({}) => {
  console.log('Test Case: Verify functionality on the Commercial Driver page - App Store button is displayed');
  await shieldBenefitsCommercialDriverPage.navigateToGroupEnrollmentCommercialDriverPage();
  await shieldBenefitsCommercialDriverPage.clickBtnCommercialDriverPage();
  await shieldBenefitsCommercialDriverPage.assertAppStoreButtonISDisplayed();
});

test('Verify functionality on the Commercial Driver page - Back to top button takes users to top of page', async ({}) => {
  console.log('Test Case: Verify functionality on the Commercial Driver page - Back to top button takes users to top of page');
  await shieldBenefitsCommercialDriverPage.navigateToGroupEnrollmentCommercialDriverPage();
  await shieldBenefitsCommercialDriverPage.clickBtnCommercialDriverPage();
  await shieldBenefitsCommercialDriverPage.clickBtnBackToTop();
  await shieldBenefitsCommercialDriverPage.assertShieldBenefitsCommercialDriverPage();
});

test('Verify functionality on the Commercial Driver page - View details button redirects to products and benefits page', async ({}) => {
  console.log('Test Case: Verify functionality on the Commercial Driver page - View details button redirects to products and benefits page');
  await shieldBenefitsCommercialDriverPage.navigateToGroupEnrollmentCommercialDriverPage();
  await shieldBenefitsCommercialDriverPage.clickBtnPricing();
  await shieldBenefitsCommercialDriverPage.selectStateAndPaymentFrequency();
  await shieldBenefitsCommercialDriverPage.assertButtonViewDetailsIsDisplayed();
});

test('Verify functionality on the Commercial Driver page - Member Perks link is displayed on the Commercial Driver page', async ({}) => {
  console.log('Test Case: Verify functionality on the Commercial Driver page - Member Perks link is displayed on the Commercial Driver page');
  await shieldBenefitsCommercialDriverPage.navigateToGroupEnrollmentCommercialDriverPage();
  await shieldBenefitsCommercialDriverPage.clickBtnCommercialDriverPage();
  await shieldBenefitsCommercialDriverPage.assertLinkMemberPerksIsDisplayed();
});
