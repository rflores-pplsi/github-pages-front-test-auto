import { test, expect, Page } from '@playwright/test';
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

test.beforeEach(async ({ context, page }) => {
  test.slow();
  legalshieldCoverageAndPricingPage = new LegalshieldCoverageAndPricingPage(page);
  commonLoginPage = new CommonLoginPage(page);
  commonCheckoutPage = new CommonCheckoutPage(page);
  checkoutPersonalInfoPage = new CheckoutPersonalInfoPage(page);
  checkoutPaymentsPage = new CheckoutPaymentsPage(context, page);

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
  await test.step('Fill out Bank Draft Form', async () => {
    await commonCheckoutPage.completeBankDraftFormUnitedStates('0000000', '000000000', 'Tester');
  });
  await test.step('Redirected to the Confirmation Page', async () => {
    await expect(commonCheckoutPage.locConfirmationPageWelcomeHeader).toBeVisible({ timeout: 100000 });
  });
});

test('Verify the required message displays when the Account Number input is empty', async ({ page }) => {
  console.log('Test Case: Verify the required message displays when the Account Number input is empty');
  await test.step('Empty only Account Number Field and all other fields are populated', async () => {
    await commonCheckoutPage.completeBankDraftFormUnitedStates('', '000000000', 'Tester');
  });
  await test.step('Warning message that Account Number is Required displays', async () => {
    await expect(checkoutPaymentsPage.checkoutBankDraftComponent.locAccountNumberWarningMessage).toBeVisible();
  });
});

test('Verify the required message displays when the Routing Number input is empty', async ({ page }) => {
  console.log('Test Case: Verify the required message displays when the Routing Number input is empty');
  await test.step('Empty only Routing Number and all other fields are populated', async () => {
    await commonCheckoutPage.completeBankDraftFormUnitedStates('0000000', '', 'Tester');
  });
  await test.step('Warning message that Routing Number is Required displays', async () => {
    await expect(checkoutPaymentsPage.checkoutBankDraftComponent.locRoutingNumberWarningMessage).toBeVisible();
  });
});

test('Verify the required message displays when the Account Holder Name input is empty', async ({ page }) => {
  console.log('Test Case: Verify the required message displays when the Account Holder Name input is empty');
  await test.step('Empty only Account Holder Name Field and all other fields are populated', async () => {
    await commonCheckoutPage.completeBankDraftFormUnitedStates('0000000', '000000000', '');
  });
  await test.step('Warning message that Account Holder Name is Required displays', async () => {
    await expect(checkoutPaymentsPage.checkoutBankDraftComponent.locAccountHolderNameWarningMessage).toBeVisible();
  });
});

test('Verify the required message displays when all fields are Empty on US Bank Draft Page', async ({ page }) => {
  console.log('Test Case: Verify the required message displays when all fields are Empty on US Bank Draft Page');
  await test.step('Empty all Fields on Bank Draft Form ', async () => {
    await commonCheckoutPage.completeBankDraftFormUnitedStates('', '', '');
  });
  await test.step('Required Warning messages displays', async () => {
    await checkoutPaymentsPage.checkoutBankDraftComponent.assertUSBankDraftErrorsAreDisplayed();
  });
});

test('Verify that we can reach the confirmation page with valid information on the Credit Card Page', async ({ page }) => {
  console.log('Test Case: Verify that we can reach the confirmation page with valid information on the Credit Card Page');
  await test.step(' Fill out Credit Card Form', async () => {
    await commonCheckoutPage.completeCreditCardForm('4444333322221111', '1225', '123', 'Test User', '80202');
  });
  await test.step('Redirected to the Confirmation Page', async () => {
    await expect(commonCheckoutPage.locConfirmationPageWelcomeHeader).toBeVisible({ timeout: 100000 });
  });
});

test('Verify the required message displays when the Card Number input is empty  on the US Credit Card Page', async ({ page }) => {
  console.log('Test Case: Verify the required message displays when the Card Number input is empty on the US Credit Card Page');
  await test.step('On the Credit Card Form - Empty only Card Number Field and all other fields are populated', async () => {
    await commonCheckoutPage.completeCreditCardForm('', '1225', '123', 'Test User', '80202');
  });
  await test.step('Warning message that Card Number is Required displays', async () => {
    await expect(checkoutPaymentsPage.checkoutCreditCardComponent.locCardNumberWarningMessage).toBeVisible();
  });
});

test('Verify the required message displays when the Expiration Date input is empty on the US Credit Card Page', async ({ page }) => {
  console.log('Test Case: Verify the required message displays when the Expiration Date input is empty on the US Credit Card Page');
  await test.step('On the Credit Card Form - Empty only Expiration Date Field and all other fields are populated', async () => {
    await commonCheckoutPage.completeCreditCardForm('4444333322221111', '', '123', 'Test User', '80202');
  });
  await test.step('Warning message that Expiration Date is Required displays', async () => {
    await expect(checkoutPaymentsPage.checkoutCreditCardComponent.locExpirationDateWarningMessage).toBeVisible();
  });
});

test('Verify the required message displays when the Security Code input is empty on the US Credit Card Page', async ({ page }) => {
  console.log('Test Case: Verify the required message displays when the Security Code input is empty on the US Credit Card Page');
  await test.step('On the Credit Card Form - Empty only Security Code Field and all other fields are populated', async () => {
    await commonCheckoutPage.completeCreditCardForm('4444333322221111', '1225', '', 'Test User', '80202');
  });
  await test.step('Warning message that Security Code is Required displays', async () => {
    await expect(checkoutPaymentsPage.checkoutCreditCardComponent.locSecurityCodeWarningMessage).toBeVisible();
  });
});

test('Verify the required message displays when the Name on Card input is empty on the US Credit Card Page', async ({ page }) => {
  console.log('Test Case: Verify the required message displays when the Security Code input is empty on the US Credit Card Page');
  await test.step('On the Credit Card Form - Empty only Name on Card Field and all other fields are populated', async () => {
    await commonCheckoutPage.completeCreditCardForm('4444333322221111', '1225', '123', '', '80202');
  });
  await test.step('Warning message that Name on Card is Required displays', async () => {
    await expect(checkoutPaymentsPage.checkoutCreditCardComponent.locNameOnCardWarningMessage).toBeVisible();
  });
});

test('Verify the required message displays when the Name on Card input is invalid Length on the US Credit Card Page', async ({ page }) => {
  console.log('Test Case: Verify the required message displays when the Name on Card input is invalid Length on the US Credit Card Page');
  await test.step('On the Credit Card Form - Have invalid Length on Name on Card Field and all other fields are populated', async () => {
    await commonCheckoutPage.completeCreditCardForm('4444333322221111', '1225', '123', 'W', '80202');
  });
  await test.step('Warning message that Name on Card is Required displays', async () => {
    await expect(checkoutPaymentsPage.checkoutCreditCardComponent.locNameOnCardWarningMessage).toBeVisible();
  });
});

test('Verify the required message displays when the Billing Postal Code input is empty on the US Credit Card Page', async ({ page }) => {
  console.log('Test Case: Verify the required message displays when the Billing Postal Code input is empty on the US Credit Card Page');
  await test.step('On the Credit Card Form - Empty only Billing Postal Code and all other fields are populated', async () => {
    await commonCheckoutPage.completeCreditCardForm('4444333322221111', '1225', '123 ', 'Test User', '');
  });
  await test.step('Warning message that Billing Postal Code is Required displays', async () => {
    await expect(checkoutPaymentsPage.checkoutCreditCardComponent.locBillingPostalCodeWarningMessage).toBeVisible();
  });
});

test('Verify the required message displays when all fields are Empty on the US Credit Card Page', async ({ page }) => {
  console.log('Test Case: Verify the required message displays when all fields are empty on the Credit Card Page');
  await test.step('Empty all Fields all fields on the Credit Card Form', async () => {
    await commonCheckoutPage.completeCreditCardForm('', '', '', '', '');
  });
  await test.step('Required Warning messages displays', async () => {
    await checkoutPaymentsPage.checkoutCreditCardComponent.assertUSCreditCardErrorsAreDisplayed();
  });
});

test('Verify user is redirected to the Terms Of Service Page from the Credit Card Payment Page', async function ({ page }) {
  console.log('Test Case: Verify user is redirected to the Terms Of Service Page from the Credit Card Payment Page');
  let newPage: Page;
  await test.step('Click on Terms and Service Link on Credit Card Page', async () => {
    // await checkoutPaymentsPage.checkoutCreditCardComponent.locTermsOfServiceLink.click();
    newPage = await checkoutPaymentsPage.checkoutCreditCardComponent.clickOnTermsOfServiceLink();
  });
  await test.step('Verify user is redirected to Terms of Service Page', async () => {
    expect(newPage).toHaveURL(new RegExp('pplsi.com/terms-service/'));
  });
});

test('Verify user is redirected to the Terms Of Service Page from the Bank Draft Payment Page', async () => {
  console.log('Test Case: Verify user is redirected to the Terms OF Service Page from the Bank DraftPayment Page');
  let newPage: Page;
  await test.step('Click on the Bank Draft Toggle', async () => {
    await commonCheckoutPage.locPaymentCreditCardBankDraftToggle.click();
  });
  await test.step('Click on Terms of Service Link on Bank Draft Page', async () => {
    // await checkoutPaymentsPage.checkoutBankDraftComponent.locTermsOfServiceLink.click();
    newPage = await checkoutPaymentsPage.checkoutBankDraftComponent.clickOnTermsOfServiceLink();
  });
  await test.step('Verify user is redirected to Terms of Service Page', async () => {
    expect(newPage).toHaveURL(new RegExp('pplsi.com/terms-service/'));
  });
});
