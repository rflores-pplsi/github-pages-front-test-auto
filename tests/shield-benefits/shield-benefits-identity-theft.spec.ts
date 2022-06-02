import { test } from '@playwright/test';
import { ShieldBenefitsIdentityTheftPage } from '../../page-objects/shield-benefits/shield-benefits-identity-theft.page';

let shieldBenefitsIdentityTheftPage: ShieldBenefitsIdentityTheftPage;

test.beforeEach(async ({ page }) => {
  shieldBenefitsIdentityTheftPage = new ShieldBenefitsIdentityTheftPage(page);
  test.slow();
});

test('Verify functionality on the Identity Theft Page - Sign In button redirects to accounts V2', async ({ page }) => {
  console.log('Test Case: Verify functionality on the Identity Theft Page - Sign In button redirects to accounts V2');
  // Navigate to the Identity Theft Page
  await shieldBenefitsIdentityTheftPage.navigateToGroupEnrollmentIdentityTheftPage('99638');
  // Click on Sign In button
  await shieldBenefitsIdentityTheftPage.clickBtnSignIn();
  // Verify Accounts v2 url displays
  await shieldBenefitsIdentityTheftPage.assertAccountsV2Url();
});

test('Verify functionality on the Identity Theft Page - App Store link connected to the store site', async ({ page }) => {
  console.log('Test Case: Verify functionality on the Identity Theft Page - App Store link connected to the store site');
  // Navigate to the the Identity Theft Page
  await shieldBenefitsIdentityTheftPage.navigateToGroupEnrollmentIdentityTheftPage('99638');
  // Click on App Store link
  await shieldBenefitsIdentityTheftPage.clickAppStoreLink();
  // Confirm App store url displays
  await shieldBenefitsIdentityTheftPage.assertAppStoreUrl();
});

test('Verify functionality on the Identity Theft Page - Back to top button takes users to top of page', async ({ page }) => {
  console.log('Test Case: Verify functionality on the Identity Theft Page - Back to top button takes users to top of page');
  // Navigate to the Identity Theft Page
  await shieldBenefitsIdentityTheftPage.navigateToGroupEnrollmentIdentityTheftPage('99638');
  // Click on Back to top button
  await shieldBenefitsIdentityTheftPage.clickBtnBackToTop();
  // Confirm top of page is displayed
  await shieldBenefitsIdentityTheftPage.assertShieldBenefitsIdentityTheftPage();
});

test('Verify functionality on the Identity Theft Page - Identity Theft Page is translated to Spanish language', async ({ page }) => {
  console.log('Test Case: Verify functionality on the Identity Theft Page - Identity Theft Page is translated to Spanish language');
  // Navigate to the Identity Theft Page
  await shieldBenefitsIdentityTheftPage.navigateToGroupEnrollmentIdentityTheftPage('99638');
  // Select Spanish US language from dropdown
  await shieldBenefitsIdentityTheftPage.clickLanguageDropDown();
  await shieldBenefitsIdentityTheftPage.selectSpanishLanguage();
  // Verify that Sign In button is translated to Spanish
  await shieldBenefitsIdentityTheftPage.assertIniciarSesionTranslation();
});

test('Verify functionality on the Identity Theft Page - Verify that link is redirect to the Member Perks site', async ({ page }) => {
  console.log('Test Case: Verify functionality on the Identity Theft Page - Verify that link is redirect to the Member Perks site');
  // Navigate to the Identity Theft Page
  await shieldBenefitsIdentityTheftPage.navigateToGroupEnrollmentIdentityTheftPage('99638');
  // Click on Member Perks link
  await shieldBenefitsIdentityTheftPage.clickLnkMemberPerks();
  // Confirm that Member Perks site is displayed
  await shieldBenefitsIdentityTheftPage.assertMemberPerksUrl();
});
