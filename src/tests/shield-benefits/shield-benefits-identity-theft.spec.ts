import { test } from '@playwright/test';
import { ShieldBenefitsIdentityTheftPage } from '../../page-objects/shield-benefits/shield-benefits-identity-theft.page';

let shieldBenefitsIdentityTheftPage: ShieldBenefitsIdentityTheftPage;

test.beforeEach(async ({ page }) => {
  shieldBenefitsIdentityTheftPage = new ShieldBenefitsIdentityTheftPage(page);
  test.slow();
});

test('Verify functionality on the Identity Theft Page - Sign In button redirects to accounts V2', async ({ page }) => {
  console.log('Test Case: Verify functionality on the Identity Theft Page - Sign In button redirects to accounts V2');
  await shieldBenefitsIdentityTheftPage.navigateToGroupEnrollmentIdentityTheftPage('99638');
  await shieldBenefitsIdentityTheftPage.assertSignInButtonIsDisplayed();
});

test('Verify functionality on the Identity Theft Page - App Store link connected to the store site', async ({ page }) => {
  console.log('Test Case: Verify functionality on the Identity Theft Page - App Store link connected to the store site');
  await shieldBenefitsIdentityTheftPage.navigateToGroupEnrollmentIdentityTheftPage('99638');
  await shieldBenefitsIdentityTheftPage.assertAppStoreButtonISDisplayed();
});

test('Verify functionality on the Identity Theft Page - Back to top button takes users to top of page', async ({ page }) => {
  console.log('Test Case: Verify functionality on the Identity Theft Page - Back to top button takes users to top of page');
  await shieldBenefitsIdentityTheftPage.navigateToGroupEnrollmentIdentityTheftPage('99638');
  await shieldBenefitsIdentityTheftPage.clickBtnBackToTop();
  await shieldBenefitsIdentityTheftPage.assertShieldBenefitsIdentityTheftPage();
});

test('Verify functionality on the Identity Theft Page - Identity Theft Page is translated to Spanish language', async ({ page }) => {
  console.log('Test Case: Verify functionality on the Identity Theft Page - Identity Theft Page is translated to Spanish language');
  await shieldBenefitsIdentityTheftPage.navigateToGroupEnrollmentIdentityTheftPage('99638');
  await shieldBenefitsIdentityTheftPage.clickLanguageDropDown();
  await shieldBenefitsIdentityTheftPage.selectSpanishLanguage();
  await shieldBenefitsIdentityTheftPage.assertIniciarSesionTranslation();
});
