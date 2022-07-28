import { test } from '@playwright/test';
import { ShieldBenefitsPrimericaLegalPage } from '../../page-objects/shield-benefits/shield-benefits-primerica-legal-page.page';

let shieldBenefitsPrimericaLegalPage: ShieldBenefitsPrimericaLegalPage;

test.beforeEach(async ({ page }) => {
  shieldBenefitsPrimericaLegalPage = new ShieldBenefitsPrimericaLegalPage(page);
  test.slow();
});

test('Verify functionality on the Primerica Overview Page- ? in top right corner to verify correct number and website for Member services is displayed', async ({
  page,
}) => {
  console.log(
    'Test Case: Verify functionality on the Primerica Overview Page  - ? in top right corner to verify correct number and website for Member services is displayed'
  );
  await shieldBenefitsPrimericaLegalPage.navigateToPrimericaOverviewPage();
  await shieldBenefitsPrimericaLegalPage.clickIconQuestionMark();
  await shieldBenefitsPrimericaLegalPage.assertNumberAndWebsiteIsDisplayed();
});

test('Verify functionality on the Primerica Overview Page - More Information button is displayed', async ({ page }) => {
  console.log('Test Case: Verify functionality on the Primerica Overview Page - More Information button is displayed');
  await shieldBenefitsPrimericaLegalPage.navigateToPrimericaOverviewPage();
  await shieldBenefitsPrimericaLegalPage.assertMoreInformationButtonIsDisplayed();
});

test('Verify functionality on the Primerica Legal page - App Store button is displayed', async ({ page }) => {
  console.log('Test Case: Verify functionality on the Primerica Legal page - App Store button is displayed');
  await shieldBenefitsPrimericaLegalPage.navigateToPrimericaLegalPage();
  await shieldBenefitsPrimericaLegalPage.clickBtnLegalPage();
  await shieldBenefitsPrimericaLegalPage.assertAppStoreButtonISDisplayed();
});

test('Verify functionality on the Primerica Legal page - Back to top button takes users to top of page', async ({ page }) => {
  console.log('Test Case: Verify functionality on the Primerica Legal page - Back to top button takes users to top of page');
  await shieldBenefitsPrimericaLegalPage.navigateToPrimericaLegalPage();
  await shieldBenefitsPrimericaLegalPage.clickBtnLegalPage();
  await shieldBenefitsPrimericaLegalPage.clickBtnBackToTop();
  await shieldBenefitsPrimericaLegalPage.assertShieldBenefitsPrimericaLegalPage();
});

test('Verify functionality on the Primerica Legal page - Enroll now button redirects to to Checkout V1', async ({ page }) => {
  console.log('Test Case: Verify functionality on the Primerica Legal page - View details button redirects to products and benefits page');
  await shieldBenefitsPrimericaLegalPage.navigateToPrimericaLegalPage();
  await shieldBenefitsPrimericaLegalPage.clickBtnPricing();
  await shieldBenefitsPrimericaLegalPage.selectStateAndRepresentative('12345');
  await shieldBenefitsPrimericaLegalPage.assertEnrollNowButtonIsDisplayed();
});

test('Verify functionality on the Primerica Legal page - Law firm information is displayed', async ({ page }) => {
  console.log('Test Case: Verify functionality on the Primerica Legal page - Law firm information is displayed');
  await shieldBenefitsPrimericaLegalPage.navigateToPrimericaLegalPage();
  await shieldBenefitsPrimericaLegalPage.clickBtnLegalPage();
  await shieldBenefitsPrimericaLegalPage.searchLawFirm('80021');
  await shieldBenefitsPrimericaLegalPage.assertLawFirmInformation();
});

test('Verify functionality on the Primerica Legal page - Terms of services are displayed', async ({ page }) => {
console.log('Test Case: Verify functionality on the Primerica Legal page - Terms of services are displayed');
await shieldBenefitsPrimericaLegalPage.navigateToPrimericaLegalPage();
await shieldBenefitsPrimericaLegalPage.clickBtnLegalPage();
await shieldBenefitsPrimericaLegalPage.assertTermsOfServicesBtnIsDisplayed();
});

test('Verify functionality on the Primerica Legal page - Privacy Policy is displayed', async ({ page }) => {
console.log('Test Case: Verify functionality on the Primerica Legal page - Privacy Policy is displayed');
await shieldBenefitsPrimericaLegalPage.navigateToPrimericaLegalPage();
await shieldBenefitsPrimericaLegalPage.clickBtnLegalPage();
await shieldBenefitsPrimericaLegalPage.assertPrivacyPolicyBtnIsDisplayed();
});

test('Verify functionality on the Primerica Legal page - Code of Ethics is displayed', async ({ page }) => {
console.log('Test Case: Verify functionality on the Primerica Legal page - Code of Ethics is displayed');
await shieldBenefitsPrimericaLegalPage.navigateToPrimericaLegalPage();
await shieldBenefitsPrimericaLegalPage.clickBtnLegalPage();
await shieldBenefitsPrimericaLegalPage.assertCodeOfEthicsBtnIsDisplayed();
});