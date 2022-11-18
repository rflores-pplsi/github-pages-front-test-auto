import { test } from '@playwright/test';
import { ShieldBenefitsIdentityTheftPage } from '../../page-objects/shield-benefits/shield-benefits-identity-theft.page';

let shieldBenefitsIdentityTheftPage: ShieldBenefitsIdentityTheftPage;

test.beforeEach(async ({ page }) => {
  shieldBenefitsIdentityTheftPage = new ShieldBenefitsIdentityTheftPage(page);
  test.slow();
});

test('Verify functionality on the Identity Theft Page - Sign In button redirects to accounts V2', async () => {
  console.log('Test Case: Verify functionality on the Identity Theft Page - Sign In button redirects to accounts V2');
  await shieldBenefitsIdentityTheftPage.navigateToGroupEnrollmentIdentityTheftPage();
  await shieldBenefitsIdentityTheftPage.assertSignInButtonIsDisplayed();
});

test('Verify functionality on the Identity Theft Page - App Store link connected to the store site', async () => {
  console.log('Test Case: Verify functionality on the Identity Theft Page - App Store link connected to the store site');
  await shieldBenefitsIdentityTheftPage.navigateToGroupEnrollmentIdentityTheftPage();
  await shieldBenefitsIdentityTheftPage.assertAppStoreButtonISDisplayed();
});

test('Verify functionality on the Identity Theft Page - Back to top button takes users to top of page', async () => {
  console.log('Test Case: Verify functionality on the Identity Theft Page - Back to top button takes users to top of page');
  await shieldBenefitsIdentityTheftPage.navigateToGroupEnrollmentIdentityTheftPage();
  await shieldBenefitsIdentityTheftPage.clickBtnBackToTop();
  await shieldBenefitsIdentityTheftPage.assertShieldBenefitsIdentityTheftPage();
});

test('Verify functionality on the Identity Theft Page - Identity Theft Page is translated to Spanish language', async () => {
  console.log('Test Case: Verify functionality on the Identity Theft Page - Identity Theft Page is translated to Spanish language');
  await shieldBenefitsIdentityTheftPage.navigateToGroupEnrollmentIdentityTheftPage();
  await shieldBenefitsIdentityTheftPage.clickLanguageDropDown();
  await shieldBenefitsIdentityTheftPage.selectSpanishLanguage();
  await shieldBenefitsIdentityTheftPage.assertIniciarSesionTranslation();
});
