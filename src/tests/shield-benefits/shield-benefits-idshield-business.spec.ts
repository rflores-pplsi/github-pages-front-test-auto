import { test } from '@playwright/test';
import { ShieldBenefitsIDShieldBusinessPage } from '../../page-objects/shield-benefits/shield-benefits-idshield-business.page';

let shieldBenefitsIDShieldBusinessPage: ShieldBenefitsIDShieldBusinessPage;

test.beforeEach(async ({ page }) => {
  shieldBenefitsIDShieldBusinessPage = new ShieldBenefitsIDShieldBusinessPage(page);
  test.slow();
});

test('Verify functionality on the IDShield Business page - Sign In button is displayed', async ({ page }) => {
  console.log('Test Case: Verify functionality on the IDShield Business page - Sign In button is displayed');
  await shieldBenefitsIDShieldBusinessPage.navigateToGroupEnrollmentIDShieldBusinessPage('83696');
  await shieldBenefitsIDShieldBusinessPage.clickBtnIDShieldBusinessPage();
  await shieldBenefitsIDShieldBusinessPage.assertSignInButtonIsDisplayed();
});

test('Verify functionality on the IDShield Business page - Enroll now button is displayed', async ({ page }) => {
  console.log('Test Case: Verify functionality on the IDShield Business page - Enroll now button is displayed');
  await shieldBenefitsIDShieldBusinessPage.navigateToGroupEnrollmentIDShieldBusinessPage('83696');
  await shieldBenefitsIDShieldBusinessPage.assertEnrollNowButtonIsDisplayed();
});

test('Verify functionality on the IDShieldBusiness page - Back to top button takes users to top of page', async ({ page }) => {
  console.log('Test Case: Verify functionality on the IDShieldBusiness page - Back to top button takes users to top of page');
  await shieldBenefitsIDShieldBusinessPage.navigateToGroupEnrollmentIDShieldBusinessPage('83696');
  await shieldBenefitsIDShieldBusinessPage.clickBtnIDShieldBusinessPage();
  await shieldBenefitsIDShieldBusinessPage.clickBtnBackToTop();
  await shieldBenefitsIDShieldBusinessPage.assertShieldBenefitsIDShieldBusinessPage();
});

test('Verify functionality on the IDShieldBusiness  page - View details button redirects to products and benefits page', async ({ page }) => {
  console.log('Test Case: Verify functionality on the IDShieldBusiness page - View details button redirects to products and benefits page');
  await shieldBenefitsIDShieldBusinessPage.navigateToGroupEnrollmentIDShieldBusinessPage('83696');
  await shieldBenefitsIDShieldBusinessPage.clickBtnPricing();
  await shieldBenefitsIDShieldBusinessPage.selectStateAndPaymentFrequency('Colorado', 'Monthly');
  await shieldBenefitsIDShieldBusinessPage.assertButtonViewDetailsIsDisplayed();
});

test('Verify functionality on the IDShieldBusiness  page - Member Perks link is displayed on the Commercial Driver page', async ({ page }) => {
  console.log('Test Case: Verify functionality on the IDShieldBusiness page - Member Perks link is displayed on the Commercial Driver page');
  await shieldBenefitsIDShieldBusinessPage.navigateToGroupEnrollmentIDShieldBusinessPage('83696');
  await shieldBenefitsIDShieldBusinessPage.clickBtnIDShieldBusinessPage();
  await shieldBenefitsIDShieldBusinessPage.assertLinkMemberPerksIsDisplayed();
});
