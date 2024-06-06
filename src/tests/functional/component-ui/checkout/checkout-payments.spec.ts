import { expect, Page } from '@playwright/test';
import { basicUser } from '../../../../utils/user.utils';
import { test } from '../../../../fixtures/frontend-ui.fixture';

test.describe('United States - Colorado, Legal Plan - Monthly', () => {
  test.beforeEach(async ({ page, legalshieldService, commonCheckoutService, commonLoginService }) => {
    test.setTimeout(120000);
    await test.step(`Navigate to legalshield pricing and coverage page`, async () => {
      await legalshieldService.navigateToLegalshieldPricingAndCoveragePage('US', 'en');
    });
    // await test.step(`Click on the Start Monthly Plan button`, async () => {
    //   await legalshieldService.legalshieldCoverageAndPricingPage.clickStartPlanButton('Monthly');
    // });
    await test.step(`Navigate to the legalshield pricing and coverage page and Click on the Start Monthly Plan button`, async () => {
      await legalshieldService.addLegalPlan('Monthly');
    });
    await test.step(`Click on the Shopping Cart Checkout button`, async () => {
      await page.waitForTimeout(500);
      await legalshieldService.legalshieldCoverageAndPricingPage.marketingSiteCartComponent.locCheckoutButton.click();
    });
    await test.step(`Choose Account by Email`, async () => {
      await commonCheckoutService.accountPage.enterExistingAccountEmailAndLogin(basicUser.email);
      await commonLoginService.whatsYourEmailPage.enterEmailAndContinue(basicUser.email);
    });
    await test.step(`Log in with only password to reach checkout service`, async () => {
      await commonLoginService.loginPage.loginOnlyPassword(basicUser.password);
    });
    await test.step('Populate all fields on Personal Information Page', async () => {
      await commonCheckoutService.personalInfoPage.fillAllNonBusinessFormFields(
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
    });
    await test.step('Click on the Save & Continue Button to go to Payment Page', async () => {
      await commonCheckoutService.personalInfoPage.clickSaveAndContinueAndWaitForPaymentPageToLoad();
    });
  });

  test('Verify that we can reach the confirmation page with valid information on the US Bank Draft form @CheckoutPaymentPage', async ({
    commonCheckoutService,
  }) => {
    console.log('Test Case: Verify that we can reach the confirmation page with valid information on the US Bank Draft form');
    await test.step('Click Bank Draft toggle', async () => {
      await commonCheckoutService.paymentPage.bankDraftComponent.locCreditCardBankDraftToggle.click();
    });
    await test.step('Fill out Bank Draft Form', async () => {
      await commonCheckoutService.paymentPage.bankDraftComponent.completeBankDraftFormUnitedStates('0000000', '000000000', 'Tester');
    });
    await test.step('Click Purchase Button', async () => {
      await commonCheckoutService.paymentPage.bankDraftComponent.clickPurchaseButtonAndWaitForConfirmationPageToLoad();
    });
    await test.step('Redirected to the Confirmation Page', async () => {
      await expect(commonCheckoutService.confirmationPage.locConfirmationScreenContainer).toBeVisible({ timeout: 100000 });
    });
  });

  test('Verify the required message displays when the Account Number input is empty on the US Bank Draft Page @CheckoutPaymentPage', async ({
    commonCheckoutService,
  }) => {
    console.log('Test Case: Verify the required message displays when the Account Number input is empty on the US Bank Draft Page');
    await test.step('Click Bank Draft toggle', async () => {
      await commonCheckoutService.paymentPage.bankDraftComponent.locCreditCardBankDraftToggle.click();
    });
    await test.step('Empty only Account Number Field and all other fields are populated', async () => {
      await commonCheckoutService.paymentPage.bankDraftComponent.completeBankDraftFormUnitedStates('', '000000000', 'Tester');
    });
    await test.step('Click Purchase button', async () => {
      await commonCheckoutService.paymentPage.bankDraftComponent.locPurchaseButton.click();
    });
    await test.step('Warning message that Account Number is Required displays', async () => {
      await expect(commonCheckoutService.paymentPage.bankDraftComponent.locAccountNumberWarningMessage).toBeVisible();
    });
  });

  test('Verify the required message displays when the Routing Number input is empty on the US Bank Draft Page @CheckoutPaymentPage', async ({
    commonCheckoutService,
  }) => {
    console.log('Test Case: Verify the required message displays when the Routing Number input is empty on the US Bank Draft Page');
    await test.step('Click Bank Draft toggle', async () => {
      await commonCheckoutService.paymentPage.bankDraftComponent.locCreditCardBankDraftToggle.click();
    });
    await test.step('Empty only Routing Number and all other fields are populated', async () => {
      await commonCheckoutService.paymentPage.bankDraftComponent.completeBankDraftFormUnitedStates('0000000', '', 'Tester');
    });
    await test.step('Click Purchase button', async () => {
      await commonCheckoutService.paymentPage.bankDraftComponent.locPurchaseButton.click();
    });
    await test.step('Warning message that Routing Number is Required displays', async () => {
      await expect(commonCheckoutService.paymentPage.bankDraftComponent.locRoutingNumberWarningMessage).toBeVisible();
    });
  });

  test('Verify the required message displays when the Account Holder Name input is empty on the US Bank Draft Page @CheckoutPaymentPage', async ({
    commonCheckoutService,
  }) => {
    console.log('Test Case: Verify the required message displays when the Account Holder Name input is empty on the US Bank Draft Page');
    await test.step('Click Bank Draft toggle', async () => {
      await commonCheckoutService.paymentPage.bankDraftComponent.locCreditCardBankDraftToggle.click();
    });
    await test.step('Empty only Account Holder Name Field and all other fields are populated', async () => {
      await commonCheckoutService.paymentPage.bankDraftComponent.completeBankDraftFormUnitedStates('0000000', '000000000', '');
    });
    await test.step('Click Purchase button', async () => {
      await commonCheckoutService.paymentPage.bankDraftComponent.locPurchaseButton.click();
    });
    await test.step('Warning message that Account Holder Name is Required displays', async () => {
      await expect(commonCheckoutService.paymentPage.bankDraftComponent.locAccountHolderNameWarningMessage).toBeVisible();
    });
  });

  test('Verify the required message displays when all fields are Empty on US Bank Draft Page @CheckoutPaymentPage', async ({
    commonCheckoutService,
  }) => {
    console.log('Test Case: Verify the required message displays when all fields are Empty on US Bank Draft Page');
    await test.step('Click Bank Draft toggle', async () => {
      await commonCheckoutService.paymentPage.bankDraftComponent.locCreditCardBankDraftToggle.click();
    });
    await test.step('Empty all Fields on Bank Draft Form ', async () => {
      await commonCheckoutService.paymentPage.bankDraftComponent.completeBankDraftFormUnitedStates('', '', '');
    });
    await test.step('Click Purchase button', async () => {
      await commonCheckoutService.paymentPage.bankDraftComponent.locPurchaseButton.click();
    });
    await test.step('Required Warning messages displays', async () => {
      await commonCheckoutService.paymentPage.bankDraftComponent.assertUSBankDraftErrorsAreDisplayed();
    });
  });

  test('Verify that we can reach the confirmation page with valid information on the US Credit Card Page @CheckoutPaymentPage', async ({
    commonCheckoutService,
  }) => {
    console.log('Test Case: Verify that we can reach the confirmation page with valid information on the US Credit Card Page');
    await test.step(' Fill out Credit Card Form', async () => {
      await commonCheckoutService.paymentPage.creditCardComponent.completeCreditCardForm('4444333322221111', '1225', '123', 'Test User', '80202');
    });
    await test.step('Click Purchase button', async () => {
      await commonCheckoutService.paymentPage.creditCardComponent.clickPurchaseButtonAndWaitForConfirmationPageToLoad();
    });
    await test.step('Redirected to the Confirmation Page', async () => {
      await expect(commonCheckoutService.confirmationPage.locConfirmationScreenContainer).toBeVisible({ timeout: 100000 });
    });
  });

  test('Verify the required message displays when the Card Number input is empty on the US Credit Card Page @CheckoutPaymentPage', async ({
    commonCheckoutService,
  }) => {
    console.log('Test Case: Verify the required message displays when the Card Number input is empty on the US Credit Card Page');
    await test.step('On the Credit Card Form - Empty only Card Number Field and all other fields are populated', async () => {
      await commonCheckoutService.paymentPage.creditCardComponent.completeCreditCardForm('', '1225', '123', 'Test User', '80202');
    });
    await test.step('Click Purchase button', async () => {
      await commonCheckoutService.paymentPage.creditCardComponent.locPurchaseButton.click();
    });
    await test.step('Warning message that Card Number is Required displays', async () => {
      await expect(commonCheckoutService.paymentPage.creditCardComponent.locCardNumberWarningMessage).toBeVisible();
    });
  });

  test('Verify the required message displays when the Expiration Date input is empty on the US Credit Card Page @CheckoutPaymentPage', async ({
    commonCheckoutService,
  }) => {
    console.log('Test Case: Verify the required message displays when the Expiration Date input is empty on the US Credit Card Page');
    await test.step('On the Credit Card Form - Empty only Expiration Date Field and all other fields are populated', async () => {
      await commonCheckoutService.paymentPage.creditCardComponent.completeCreditCardForm('4444333322221111', '', '123', 'Test User', '80202');
    });
    await test.step('Click Purchase button', async () => {
      await commonCheckoutService.paymentPage.creditCardComponent.locPurchaseButton.click();
    });
    await test.step('Warning message that Expiration Date is Required displays', async () => {
      await expect(commonCheckoutService.paymentPage.creditCardComponent.locExpirationDateWarningMessage).toBeVisible();
    });
  });

  test('Verify the required message displays when the Security Code input is empty on the US Credit Card Page @CheckoutPaymentPage', async ({
    commonCheckoutService,
  }) => {
    console.log('Test Case: Verify the required message displays when the Security Code input is empty on the US Credit Card Page');
    await test.step('On the Credit Card Form - Empty only Security Code Field and all other fields are populated', async () => {
      await commonCheckoutService.paymentPage.creditCardComponent.completeCreditCardForm('4444333322221111', '1225', '', 'Test User', '80202');
    });
    await test.step('Click Purchase button', async () => {
      await commonCheckoutService.paymentPage.creditCardComponent.locPurchaseButton.click();
    });
    await test.step('Warning message that Security Code is Required displays', async () => {
      await expect(commonCheckoutService.paymentPage.creditCardComponent.locSecurityCodeWarningMessage).toBeVisible();
    });
  });

  test('Verify the required message displays when the Name on Card input is empty on the US Credit Card Page @CheckoutPaymentPage', async ({
    commonCheckoutService,
  }) => {
    console.log('Test Case: Verify the required message displays when the Name on Card input is empty on the US Credit Card Page');
    await test.step('On the Credit Card Form - Empty only Name on Card Field and all other fields are populated', async () => {
      await commonCheckoutService.paymentPage.creditCardComponent.completeCreditCardForm('4444333322221111', '1225', '123', '', '80202');
    });
    await test.step('Click Purchase button', async () => {
      await commonCheckoutService.paymentPage.creditCardComponent.locPurchaseButton.click();
    });
    await test.step('Warning message that Name on Card is Required displays', async () => {
      await expect(commonCheckoutService.paymentPage.creditCardComponent.locNameOnCardWarningMessage).toBeVisible();
    });
  });

  test('Verify the required message displays when the Name on Card input is invalid Length on the US Credit Card Page @CheckoutPaymentPage', async ({
    commonCheckoutService,
  }) => {
    console.log('Test Case: Verify the required message displays when the Name on Card input is invalid Length on the US Credit Card Page');
    await test.step('On the Credit Card Form - Have invalid Length on Name on Card Field and all other fields are populated', async () => {
      await commonCheckoutService.paymentPage.creditCardComponent.completeCreditCardForm('4444333322221111', '1225', '123', 'W', '80202');
    });
    await test.step('Click Purchase button', async () => {
      await commonCheckoutService.paymentPage.creditCardComponent.locPurchaseButton.click();
    });
    await test.step('Warning message that Name on Card is Required displays', async () => {
      await expect(commonCheckoutService.paymentPage.creditCardComponent.locNameOnCardWarningMessage).toBeVisible();
    });
  });

  test('Verify the required message displays when the Billing Postal Code input is empty on the US Credit Card Page @CheckoutPaymentPage', async ({
    commonCheckoutService,
  }) => {
    console.log('Test Case: Verify the required message displays when the Billing Postal Code input is empty on the US Credit Card Page');
    await test.step('On the Credit Card Form - Empty only Billing Postal Code and all other fields are populated', async () => {
      await commonCheckoutService.paymentPage.creditCardComponent.completeCreditCardForm('4444333322221111', '1225', '123 ', 'Test User', '');
    });
    await test.step('Click Purchase button', async () => {
      await commonCheckoutService.paymentPage.creditCardComponent.locPurchaseButton.click();
    });
    await test.step('Warning message that Billing Postal Code is Required displays', async () => {
      await expect(commonCheckoutService.paymentPage.creditCardComponent.locBillingPostalCodeWarningMessage).toBeVisible();
    });
  });

  test('Verify the required message displays when all fields are Empty on the US Credit Card Page @CheckoutPaymentPage', async ({
    commonCheckoutService,
  }) => {
    console.log('Test Case: Verify the required message displays when all fields are empty on the US Credit Card Page');
    await test.step('Empty all Fields all fields on the Credit Card Form', async () => {
      await commonCheckoutService.paymentPage.creditCardComponent.completeCreditCardForm('', '', '', '', '');
    });
    await test.step('Click Purchase button', async () => {
      await commonCheckoutService.paymentPage.creditCardComponent.locPurchaseButton.click();
    });
    await test.step('Required Warning messages displays', async () => {
      await commonCheckoutService.paymentPage.creditCardComponent.assertUSCreditCardErrorsAreDisplayed();
    });
  });

  test('Verify user is redirected to the Terms Of Service Page from the US Credit Card Payment Page @CheckoutPaymentPage', async function ({
    commonCheckoutService,
  }) {
    console.log('Test Case: Verify user is redirected to the Terms Of Service Page from the US Credit Card Payment Page');
    let newPage: Page;
    await test.step('Click on Terms and Service Link on Credit Card Page', async () => {
      newPage = await commonCheckoutService.paymentPage.creditCardComponent.clickOnTermsOfServiceLink();
    });
    await test.step('Verify user is redirected to Terms of Service Page', async () => {
      expect(newPage).toHaveURL(new RegExp('pplsi.com/terms-service/'));
    });
  });

  test('Verify user is redirected to the Terms Of Service Page from the US Bank Draft Payment Page @CheckoutPaymentPage', async ({
    commonCheckoutService,
  }) => {
    console.log('Test Case: Verify user is redirected to the Terms OF Service Page from the US Bank Draft Payment Page');
    let newPage: Page;
    await test.step('Click on the Bank Draft Toggle', async () => {
      await commonCheckoutService.paymentPage.creditCardComponent.locCreditCardBankDraftToggle.click();
    });
    await test.step('Click on Terms of Service Link on Bank Draft Page', async () => {
      newPage = await commonCheckoutService.paymentPage.bankDraftComponent.clickOnTermsOfServiceLink();
    });
    await test.step('Verify user is redirected to Terms of Service Page', async () => {
      expect(newPage).toHaveURL(new RegExp('pplsi.com/terms-service/'));
    });
  });

  test('Verify the Have Questions Label is visible @CheckoutPaymentPage', async ({ commonCheckoutService }) => {
    console.log('Test Case: Verify the Have Questions Label is visible');
    await test.step('Verify the Have Questions Label is visible ', async () => {
      expect(commonCheckoutService.haveQuestionsComponent.locHaveQuestionsLabel).toBeVisible();
    });
  });

  test('Verify the Phone Number button is visible @CheckoutPaymentPage', async ({ commonCheckoutService }) => {
    console.log('Test Case: Verify the Phone Number button is visible');
    await test.step('Verify the Phone Number button is visible ', async () => {
      expect(commonCheckoutService.haveQuestionsComponent.locPhoneNumberButton).toBeVisible();
    });
  });

  test('Verify user can redirect to Personal Info Page By Clicking on Stepper 2 from Payment Page @CheckoutPaymentPage', async ({
    commonCheckoutService,
  }) => {
    console.log('Test Case: Verify user can redirect to Personal Info Page By Clicking on Stepper 2 from Payment Page');
    await test.step('Click on Step Circle 2 when on Payment Page', async () => {
      await commonCheckoutService.paymentPage.stepperComponent.locStepCirclePersonalInfoLink.click();
    });
    await test.step('Assert that user is redirected to Personal Information Page and it contains header Tell us about yourself', async () => {
      await expect(commonCheckoutService.personalInfoPage.locHeader).toContainText('Tell us about yourself');
    });
  });
});

test.describe('Canada - Alberta, Legal Plan', () => {
  test.beforeEach(async ({ legalshieldService, commonCheckoutService, commonLoginService }) => {
    test.setTimeout(120000);
    await test.step(`Navigate to legalshield pricing and coverage page`, async () => {
      await legalshieldService.navigateToLegalshieldPricingAndCoveragePage('CA', 'en');
    });
    await test.step(`Change Region`, async () => {
      await legalshieldService.legalshieldCoverageAndPricingPage.selectRegion('Alberta', 'AB');
    });
    await test.step(`Click on the Start Monthly Plan button`, async () => {
      await legalshieldService.legalshieldCoverageAndPricingPage.clickCanadaGetStartedButton();
    });
    await test.step(`Click on the Shopping Cart Checkout button`, async () => {
      await legalshieldService.legalshieldCoverageAndPricingPage.marketingSiteCartComponent.locCheckoutButton.click();
    });
    await test.step(`Choose Account by Email`, async () => {
      await commonCheckoutService.accountPage.enterExistingAccountEmailAndLogin(basicUser.email);
      await commonLoginService.whatsYourEmailPage.enterEmailAndContinue(basicUser.email);
    });
    await test.step(`Log in with only password to reach checkout service`, async () => {
      await commonLoginService.loginPage.loginOnlyPassword(basicUser.password);
    });
    await test.step('Populate all fields on Personal Information Page', async () => {
      await commonCheckoutService.personalInfoPage.fillAllNonBusinessFormFields(
        'Automation',
        'Tester',
        '5555555555',
        'Mobile',
        '5940 Blackfoot Trail SE',
        'Calgary',
        'T2H 2B5',
        '10',
        '10',
        '2001',
        '3333'
      );
    });
    await test.step('Click on the Save & Continue Button to go to Payment Page', async () => {
      await commonCheckoutService.personalInfoPage.clickSaveAndContinueAndWaitForPaymentPageToLoad();
    });
  });

  test('Verify that we can reach the confirmation page with valid information in the Canada Bank Draft form @CheckoutPaymentPage', async ({
    commonCheckoutService,
  }) => {
    console.log('Test Case: Verify that we can reach the confirmation page with valid information in the Canada Bank Draft form');
    await test.step('Click Bank Draft toggle', async () => {
      await commonCheckoutService.paymentPage.bankDraftComponent.locCreditCardBankDraftToggle.click();
    });
    await test.step('Fill out Bank Draft Form', async () => {
      await commonCheckoutService.paymentPage.bankDraftComponent.completeBankDraftFormCanada('0000000', '00000', '000', 'Tester');
    });
    await test.step('Click Purchase Button', async () => {
      await commonCheckoutService.paymentPage.bankDraftComponent.clickPurchaseButtonAndWaitForConfirmationPageToLoad();
    });
    await test.step('Redirected to the Confirmation Page', async () => {
      await expect(commonCheckoutService.confirmationPage.locConfirmationScreenContainer).toBeVisible({ timeout: 100000 });
    });
  });

  test('Verify the required message displays when the Account Number input is empty on the CA Bank Draft Page @CheckoutPaymentPage', async ({
    commonCheckoutService,
  }) => {
    console.log('Test Case: Verify the required message displays when the Account Number input is empty on the CA Bank Draft Page');
    await test.step('Click Bank Draft toggle', async () => {
      await commonCheckoutService.paymentPage.bankDraftComponent.locCreditCardBankDraftToggle.click();
    });
    await test.step('Empty only Account Number Field and all other fields are populated', async () => {
      await commonCheckoutService.paymentPage.bankDraftComponent.completeBankDraftFormCanada('', '00000', '000', 'Tester');
    });
    await test.step('Click Purchase button', async () => {
      await commonCheckoutService.paymentPage.bankDraftComponent.locPurchaseButton.click();
    });
    await test.step('Warning message that Account Number is Required displays', async () => {
      await expect(commonCheckoutService.paymentPage.bankDraftComponent.locAccountNumberWarningMessage).toBeVisible();
    });
  });

  test('Verify the required message displays when the Transit Number input is empty on the CA Bank Draft Page @CheckoutPaymentPage', async ({
    commonCheckoutService,
  }) => {
    console.log('Test Case: Verify the required message displays when the Transit Number input is empty on the CA Bank Draft Page');
    await test.step('Click Bank Draft toggle', async () => {
      await commonCheckoutService.paymentPage.bankDraftComponent.locCreditCardBankDraftToggle.click();
    });
    await test.step('Empty only Transit Number and all other fields are populated', async () => {
      await commonCheckoutService.paymentPage.bankDraftComponent.completeBankDraftFormCanada('0000000', '', '000', 'Tester');
    });
    await test.step('Click Purchase button', async () => {
      await commonCheckoutService.paymentPage.bankDraftComponent.locPurchaseButton.click();
    });
    await test.step('Warning message that Routing Number is Required displays', async () => {
      await expect(commonCheckoutService.paymentPage.bankDraftComponent.locCaTransitNumberWarningMessage).toBeVisible();
    });
  });

  test('Verify the required message displays when the Institution Number input is empty on the CA Bank Draft Page @CheckoutPaymentPage', async ({
    commonCheckoutService,
  }) => {
    console.log('Test Case: Verify the required message displays when the Institution Number input is empty on the CA Bank Draft Page');
    await test.step('Click Bank Draft toggle', async () => {
      await commonCheckoutService.paymentPage.bankDraftComponent.locCreditCardBankDraftToggle.click();
    });
    await test.step('Empty only Institution Number and all other fields are populated', async () => {
      await commonCheckoutService.paymentPage.bankDraftComponent.completeBankDraftFormCanada('0000000', '00000', '', 'Tester');
    });
    await test.step('Click Purchase button', async () => {
      await commonCheckoutService.paymentPage.bankDraftComponent.locPurchaseButton.click();
    });
    await test.step('Warning message that Institution Number is Required displays', async () => {
      await expect(commonCheckoutService.paymentPage.bankDraftComponent.locCaInstitutionNumberWarningMessage).toBeVisible();
    });
  });

  test('Verify the required message displays when the Account Holder Name input is empty on the CA Bank Draft Page @CheckoutPaymentPage', async ({
    commonCheckoutService,
  }) => {
    console.log('Test Case: Verify the required message displays when the Account Holder Name input is empty on the CA Bank Draft Page');
    await test.step('Click Bank Draft toggle', async () => {
      await commonCheckoutService.paymentPage.bankDraftComponent.locCreditCardBankDraftToggle.click();
    });
    await test.step('Empty only Account Holder Name and all other fields are populated', async () => {
      await commonCheckoutService.paymentPage.bankDraftComponent.completeBankDraftFormCanada('0000000', '00000', '000', '');
    });
    await test.step('Click Purchase button', async () => {
      await commonCheckoutService.paymentPage.bankDraftComponent.locPurchaseButton.click();
    });
    await test.step('Warning message that Account Holder Name is Required displays', async () => {
      await expect(commonCheckoutService.paymentPage.bankDraftComponent.locAccountHolderNameWarningMessage).toBeVisible();
    });
  });

  test('Verify the required message displays when all fields are Empty on the Canada Bank Draft Page @CheckoutPaymentPage', async ({
    commonCheckoutService,
  }) => {
    console.log('Test Case: Verify the required message displays when all fields are empty on the Canada Bank Draft Page');
    await test.step('Click Bank Draft toggle', async () => {
      await commonCheckoutService.paymentPage.bankDraftComponent.locCreditCardBankDraftToggle.click();
    });
    await test.step('Empty all fields and all other fields are populated', async () => {
      await commonCheckoutService.paymentPage.bankDraftComponent.completeBankDraftFormCanada('', '', '', '');
    });
    await test.step('Click Purchase button', async () => {
      await commonCheckoutService.paymentPage.bankDraftComponent.locPurchaseButton.click();
    });
    await test.step('Required Warning messages displays', async () => {
      await commonCheckoutService.paymentPage.bankDraftComponent.assertCABankDraftErrorsAreDisplayed();
    });
  });

  test('Verify that we can reach the confirmation page with valid information on the Canada Credit Card Page @CheckoutPaymentPage', async ({
    commonCheckoutService,
  }) => {
    console.log('Test Case: Verify that we can reach the confirmation page with valid information on the Canada Credit Card Page');
    await test.step(' Fill out Credit Card Form', async () => {
      await commonCheckoutService.paymentPage.creditCardComponent.completeCreditCardForm('4444333322221111', '1225', '123', 'Test User', 'T2H2B5');
    });
    await test.step('Click Purchase button', async () => {
      await commonCheckoutService.paymentPage.creditCardComponent.clickPurchaseButtonAndWaitForConfirmationPageToLoad();
    });
    await test.step('Redirected to the Confirmation Page', async () => {
      await expect(commonCheckoutService.confirmationPage.locConfirmationScreenContainer).toBeVisible({ timeout: 100000 });
    });
  });
});
