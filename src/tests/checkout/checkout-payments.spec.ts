import { test, expect } from '@playwright/test';
import { basicUser } from '../../utils/user.utils';
import { LegalshieldCoverageAndPricingPage } from '../../page-objects-refactored/marketing-sites/legalshield/legalshield-coverage-and-pricing.page';
import { CheckoutPersonalInfoPage } from '../../page-objects-refactored/checkout/checkout-personal-info.page';
import { CommonLoginPage, CommonCheckoutPage } from '@legalshield/frontend-automation-commons';
import { CheckoutPaymentsPage } from '../../page-objects-refactored/checkout/checkout-payments.page';

let legalshieldCoverageAndPricingPage: LegalshieldCoverageAndPricingPage;
let commonLoginPage: CommonLoginPage;
let commonCheckoutPage: CommonCheckoutPage;
let checkoutPersonalInfoPage: CheckoutPersonalInfoPage;
let checkoutPaymentsPage: CheckoutPaymentsPage;

test.beforeEach(async ({ page }) => {
  test.slow();
  legalshieldCoverageAndPricingPage = new LegalshieldCoverageAndPricingPage(page);
  commonLoginPage = new CommonLoginPage(page);
  commonCheckoutPage = new CommonCheckoutPage(page);
  checkoutPersonalInfoPage = new CheckoutPersonalInfoPage(page);
  checkoutPaymentsPage = new CheckoutPaymentsPage(page);

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
    await commonLoginPage.login(basicUser.email, basicUser.password);
  });
  await test.step('Populate all fields on Personal Information Page', async () => {
    await checkoutPersonalInfoPage.locFirstNameInput.fill('Automation');
    await checkoutPersonalInfoPage.locLastNameInput.fill('Tester');
    await checkoutPersonalInfoPage.locPhoneNumberInput.fill('5555555555');
    await checkoutPersonalInfoPage.locPhoneTypeInput.selectOption({ label: 'Mobile' });
    await commonCheckoutPage.changeAddress('200 16th Street', 'Denver', '80202');
    await checkoutPersonalInfoPage.locBirthMonthInput.fill('10');
    await checkoutPersonalInfoPage.locBirthDateInput.fill('10');
    await checkoutPersonalInfoPage.locBirthYearInput.fill('2001');
    await checkoutPersonalInfoPage.locSocialSecurityInput.fill('3333');
  });
  await test.step('Click on the Save & Continue Button to go to Payment Page', async () => {
    await commonCheckoutPage.locPersonalInfoSaveAndContinueButton.click();
  });
});

test('Verify that we can reach the confirmation page with valid information in the bank draft form', async ({ page }) => {
  console.log('Test Case: Verify that we can reach the confirmation page with valid information in the bank draft form');
  await test.step('Click Bank Draft toggle', async () => {
    await commonCheckoutPage.locPaymentCreditCardBankDraftToggle.click();
  });
  await test.step('Fill out Bank Draft Form', async () => {
    await commonCheckoutPage.locPaymentAccountNumberInput.fill('0000000');
    await commonCheckoutPage.locPaymentRoutingNumberInput.fill('000000000');
    await commonCheckoutPage.locPaymentAccountHolderNameInput.fill('Tester');
  });
  await test.step('Submit Bank Draft Form', async () => {
    await commonCheckoutPage.locPaymentBankDraftPurchaseButton.click();
  });
  await test.step('Redirected to the Confirmation Page', async () => {
    await expect(commonCheckoutPage.locConfirmationPageWelcomeHeader).toBeVisible();
  });
});

test('Verify the required message displays when the Account Number input is empty', async ({ page }) => {
  console.log('Test Case: Verify the required message displays when the Account Number input is empty');
  await test.step('Click Bank Draft toggle', async () => {
    await commonCheckoutPage.locPaymentCreditCardBankDraftToggle.click();
  });
  await test.step('Empty only Account Number Field and all other fields are populated', async () => {
    await commonCheckoutPage.locPaymentAccountNumberInput.clear();
    await commonCheckoutPage.locPaymentRoutingNumberInput.fill('000000000');
    await commonCheckoutPage.locPaymentAccountHolderNameInput.fill('Tester');
  });
  await test.step('Submit Bank Draft Form', async () => {
    await commonCheckoutPage.locPaymentBankDraftPurchaseButton.click();
  });
  await test.step('Warning message that Account Number is Required displays', async () => {
    await expect(checkoutPaymentsPage.checkoutPaymentsBankDraftComponent.locAccountNumberWarningMessage).toBeVisible();
  });
});

test('Verify the required message displays when the Routing Number input is empty', async ({ page }) => {
  console.log('Test Case: Verify the required message displays when the Routing Number input is empty');
  await test.step('Click Bank Draft toggle', async () => {
    await commonCheckoutPage.locPaymentCreditCardBankDraftToggle.click();
  });
  await test.step('Empty only Routing Number and all other fields are populated', async () => {
    await commonCheckoutPage.locPaymentAccountNumberInput.fill('0000000');
    await commonCheckoutPage.locPaymentRoutingNumberInput.clear();
    await commonCheckoutPage.locPaymentAccountHolderNameInput.fill('Tester');
  });
  await test.step('Submit Bank Draft Form', async () => {
    await commonCheckoutPage.locPaymentBankDraftPurchaseButton.click();
  });
  await test.step('Warning message that Routing Number is Required displays', async () => {
    await expect(checkoutPaymentsPage.checkoutPaymentsBankDraftComponent.locRoutingNumberWarningMessage).toBeVisible();
  });
});

test('Verify the required message displays when the Account Holder Name input is empty', async ({ page }) => {
  console.log('Test Case: Verify the required message displays when the Account Holder Name input is empty');
  await test.step('Click Bank Draft toggle', async () => {
    await commonCheckoutPage.locPaymentCreditCardBankDraftToggle.click();
  });
  await test.step('Empty only Account Holder Name Field and all other fields are populated', async () => {
    await commonCheckoutPage.locPaymentAccountNumberInput.fill('0000000');
    await commonCheckoutPage.locPaymentRoutingNumberInput.fill('000000000');
    await commonCheckoutPage.locPaymentAccountHolderNameInput.clear();
  });
  await test.step('Submit Bank Draft Form', async () => {
    await commonCheckoutPage.locPaymentBankDraftPurchaseButton.click();
  });
  await test.step('Warning message that Account Holder Name is Required displays', async () => {
    await expect(checkoutPaymentsPage.checkoutPaymentsBankDraftComponent.locAccountHolderNameWarningMessage).toBeVisible();
  });
});

test('Verify the required message displays when all fields are Empty on US Bank Draft Page', async ({ page }) => {
  console.log('Test Case: Verify the required message displays when all fields are Empty on US Bank Draft Page');
  await test.step('Click Bank Draft toggle', async () => {
    await commonCheckoutPage.locPaymentCreditCardBankDraftToggle.click();
  });
  await test.step('Empty all Fields on Bank Draft Form ', async () => {
    await commonCheckoutPage.locPaymentAccountNumberInput.clear();
    await commonCheckoutPage.locPaymentRoutingNumberInput.clear();
    await commonCheckoutPage.locPaymentAccountHolderNameInput.clear();
  });
  await test.step('Submit Bank Draft Form', async () => {
    await commonCheckoutPage.locPaymentBankDraftPurchaseButton.click();
  });
  await test.step('Required Warning messages displays', async () => {
    await checkoutPaymentsPage.checkoutPaymentsBankDraftComponent.assertUSBankDraftErrorsAreDisplayed();
  });
});

test('Verify that we can reach the confirmation page with valid information in the Credit Card form', async ({ page }) => {
  console.log('Test Case: Verify that we can reach the confirmation page with valid information in the Credit Card form');
  await test.step('Click Credit Card toggle to get to Bank Draft', async () => {
    await commonCheckoutPage.locPaymentCreditCardBankDraftToggle.click();
  });
  await test.step('Click Credit Card toggle to get to Credit Card Page', async () => {
    await commonCheckoutPage.locPaymentCreditCardBankDraftToggle.click();
  });
  await test.step('Fill out Credit Card Form', async () => {
    await commonCheckoutPage.locPaymentAccountNumberInput.fill('0000000');
    await commonCheckoutPage.locPaymentRoutingNumberInput.fill('000000000');
    await commonCheckoutPage.locPaymentAccountHolderNameInput.fill('Tester');
  });
  await test.step('Submit Bank Draft Form', async () => {
    await commonCheckoutPage.locPaymentBankDraftPurchaseButton.click();
  });
  await test.step('Redirected to the Confirmation Page', async () => {
    await expect(commonCheckoutPage.locConfirmationPageWelcomeHeader).toBeVisible();
  });
});
