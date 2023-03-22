import { test, expect } from '@playwright/test';
import { basicUser } from '../../utils/user.utils';
import { LegalshieldCoverageAndPricingPage } from '../../page-objects-refactored/marketing-sites/legalshield/legalshield-coverage-and-pricing.page';
import { CheckoutPersonalInfoPage } from '../../page-objects-refactored/checkout-personal-info.page';
import { CommonLoginPage } from '@legalshield/frontend-automation-commons';

let legalshieldCoverageAndPricingPage: LegalshieldCoverageAndPricingPage;
let loginPage: CommonLoginPage;
let checkoutPersonalInfoPage: CheckoutPersonalInfoPage;

test.beforeEach(async ({ page }) => {
  test.slow();
  legalshieldCoverageAndPricingPage = new LegalshieldCoverageAndPricingPage(page);
  loginPage = new CommonLoginPage(page);
  checkoutPersonalInfoPage = new CheckoutPersonalInfoPage(page);
  await test.step(`Navigate to legalshield pricing and coverage page`, async () => {
    await legalshieldCoverageAndPricingPage.navigateToLegalshieldPricingAndCoveragePage();
  });
  await test.step(`Change Region`, async () => {
    await legalshieldCoverageAndPricingPage.marketingSiteFooterComponent.selectRegion('Colorado', 'CO');
  });
  await test.step(`Click on the Start Monthly Plan button`, async () => {
    await legalshieldCoverageAndPricingPage.clickStartPlanButton('Monthly');
  });
  await test.step(`Click on the Shopping Cart Checkout button`, async () => {
    await legalshieldCoverageAndPricingPage.marketingSiteCartComponent.locCheckoutButton.click();
  });
  await test.step(`Log in to reach checkout service`, async () => {
    // Need to wait for redirect to login service before looking for 'Sign in' link in the next step (the enrollment page has two elements with same tag)
    await page.waitForURL(new RegExp('login'));
    await loginPage.login(basicUser.email, basicUser.password);
  });
});

test('Verify Personal Information Section Header Displays', async ({ page }) => {
  console.log('Test Case: Verify Personal Information Section Header Displays');
  await page.pause();
  await expect(checkoutPersonalInfoPage.locHeader).toContainText('Tell us about yourself');
});

test('Verify ALL fields are populated on Personal Info Page Displays', async ({ page }) => {
  console.log('Test Case: Verify ALL fields are populated on Personal Info Page Displays');
  await checkoutPersonalInfoPage.populateAllFieldsOnPersonalInfoPageAndSave(
    'Automation',
    'Tester',
    '5555555555',
    'Mobile',
    '200 16th Street',
    'Denver',
    '80202',
    '10',
    '10',
    '2001',
    '3333'
  );
  await checkoutPersonalInfoPage.locSaveAndContinueButton.click();
  await page.pause();
});

test('Verify the required message displays when the First Name input is empty', async () => {
  console.log('Test Case: Verify the required message displays when the First Name input is empty');
  await checkoutPersonalInfoPage.locFirstNameInput.clear();
  await checkoutPersonalInfoPage.locSaveAndContinueButton.click();
  await expect(checkoutPersonalInfoPage.locFirstNameWarningMessage).toBeVisible();
});

test('Verify the required message displays when the Last Name input is empty', async () => {
  console.log('Test Case: Verify the required message displays when the Last Name input is empty');
  await checkoutPersonalInfoPage.locLastNameInput.clear();
  await checkoutPersonalInfoPage.locSaveAndContinueButton.click();
  await expect(checkoutPersonalInfoPage.locLastNameWarningMessage).toBeVisible();
});

test('Verify the required message displays when the Phone Number input is empty', async () => {
  console.log('Test Case: Verify the required message displays when the Phone Number input is empty');
  await checkoutPersonalInfoPage.locPhoneNumberInput.clear();
  await checkoutPersonalInfoPage.locSaveAndContinueButton.click();
  await expect(checkoutPersonalInfoPage.locPhoneNumberWarningMessage).toBeVisible();
});

test('Verify the required message displays when the Phone Type input is empty', async () => {
  console.log('Test Case: Verify the required message displays when the Phone Type input is empty');
  await checkoutPersonalInfoPage.selectPhoneType('Select Type');
  await checkoutPersonalInfoPage.locSaveAndContinueButton.click();
  await expect(checkoutPersonalInfoPage.locPhoneTypeWarningMessage).toBeVisible();
});

test('Verify the required message displays when the Address input is empty', async () => {
  console.log('Test Case: Verify the required message displays when the Address input is empty');
  await checkoutPersonalInfoPage.locHomeAddressInput.clear();
  await checkoutPersonalInfoPage.locSaveAndContinueButton.click();
  await expect(checkoutPersonalInfoPage.locHomeAddressWarningMessage).toBeVisible();
});

test('Verify the required message displays when the City input is empty', async () => {
  console.log('Test Case: Verify the required message displays when the City input is empty');
  await checkoutPersonalInfoPage.locCityInput.clear();
  await checkoutPersonalInfoPage.locSaveAndContinueButton.click();
  await expect(checkoutPersonalInfoPage.locCityWarningMessage).toBeVisible();
});

test('Verify the required message displays when the PostalCode input is empty', async () => {
  console.log('Test Case: Verify the required message displays when the Postal Code input is empty');
  await checkoutPersonalInfoPage.locPostalCodeInput.clear();
  await checkoutPersonalInfoPage.locSaveAndContinueButton.click();
  await expect(checkoutPersonalInfoPage.locPostalCodeWarningMessage).toBeVisible();
});

test('Verify the required message displays when the Date of Birth Month input is empty', async () => {
  console.log('Test Case: Verify the required message displays when the DOB Month input is empty');
  await checkoutPersonalInfoPage.locBirthMonthInput.clear();
  await checkoutPersonalInfoPage.locSaveAndContinueButton.click();
  await expect(checkoutPersonalInfoPage.locDateOfBirthInvalidWarningMessage).toBeVisible();
});

test('Verify the required message displays when the Date of Birth Date input is empty', async () => {
  console.log('Test Case: Verify the required message displays when the DOB Date input is empty');
  await checkoutPersonalInfoPage.locBirthDateInput.clear();
  await checkoutPersonalInfoPage.locSaveAndContinueButton.click();
  await expect(checkoutPersonalInfoPage.locDateOfBirthInvalidWarningMessage).toBeVisible();
});

test('Verify the required message displays when the Date of Birth Year input is empty', async () => {
  console.log('Test Case: Verify the required message displays when the DOB Year input is empty');
  await checkoutPersonalInfoPage.locBirthYearInput.clear();
  await checkoutPersonalInfoPage.locSaveAndContinueButton.click();
  await expect(checkoutPersonalInfoPage.locDateOfBirthInvalidWarningMessage).toBeVisible();
});

test('Verify the required message displays when DOB Month Date and Year are all empty', async () => {
  console.log('Test Case: Verify the required message displays when the DOB fields are all empty');
  await checkoutPersonalInfoPage.locBirthMonthInput.clear();
  await checkoutPersonalInfoPage.locBirthDateInput.clear();
  await checkoutPersonalInfoPage.locBirthYearInput.clear();
  await checkoutPersonalInfoPage.locSaveAndContinueButton.click();
  await expect(checkoutPersonalInfoPage.locDateOfBirthWarningMessage).toBeVisible();
});

test('Verify the required message displays when the SSN input is empty', async () => {
  console.log('Test Case: Verify the required message displays when the SSN input is empty');
  await checkoutPersonalInfoPage.locSocialSecurityInput.clear();
  await checkoutPersonalInfoPage.locSaveAndContinueButton.click();
  await expect(checkoutPersonalInfoPage.locSocialSecurityWarningMessage).toBeVisible();
});

test('Verify the required message displays when all fields are Empty on Personal Info Page', async () => {
  console.log('Test Case: Verify the required message displays when all fields are Empty on Personal Info Page');
  await checkoutPersonalInfoPage.clearAllFieldsOnPersonalInfoPageAndSave();
  await checkoutPersonalInfoPage.locSaveAndContinueButton.click();
  await checkoutPersonalInfoPage.assertPersonalInfoPageErrorsAreDisplayed();
});
