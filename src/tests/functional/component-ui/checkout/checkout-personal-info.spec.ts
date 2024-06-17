import { expect } from '@playwright/test';
import { basicUser } from '../../../../utils/user.utils';
import { test } from '../../../../fixtures/frontend-ui.fixture';

test.describe('United States - Colorado, Legal Plan - Monthly', () => {
  test.beforeEach(async ({ page, legalshieldService, commonCheckoutService, commonLoginService }) => {
    test.slow();
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
  });

  test('Verify Personal Information Section Header Displays @CheckoutPersonalInfoPage', async ({ commonCheckoutService }) => {
    console.log('Test Case: Verify Personal Information Section Header Displays');
    await test.step('Verify Header is displayed on Personal Information Section', async () => {
      await expect(commonCheckoutService.personalInfoPage.locHeader).toContainText('Tell us about yourself');
    });
  });

  test('Verify no warning messages display when all non-business required fields are entered @CheckoutPersonalInfoPage', async ({
    commonCheckoutService,
  }) => {
    console.log('Test Case: Verify no warning messages display when all non-business required fields are entered');
    await test.step('Populate all non-business fields on Personal Information Page', async () => {
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
    await test.step('After fields are populated place cursor on Address Line 2', async () => {
      await commonCheckoutService.personalInfoPage.locHomeAddressInput2.click();
    });
    await test.step('No Warnings are displayed when all fields are entered', async () => {
      await commonCheckoutService.personalInfoPage.assertNoNonBusinessFormErrorsAreDisplayed();
    });
  });

  test('Verify the required message displays when the First Name input is empty @CheckoutPersonalInfoPage', async ({ commonCheckoutService }) => {
    console.log('Test Case: Verify the required message displays when the First Name input is empty');
    await test.step('Empty only First Name Field', async () => {
      await commonCheckoutService.personalInfoPage.locFirstNameInput.clear();
    });
    await test.step('Click on Save and Continue Button', async () => {
      await commonCheckoutService.personalInfoPage.locSaveAndContinueButton.click();
    });
    await test.step('Require Warning message that First Name is Required displays', async () => {
      await expect(commonCheckoutService.personalInfoPage.locFirstNameWarningMessage).toBeVisible();
    });
  });

  test('Verify the required message displays when the Last Name input is empty @CheckoutPersonalInfoPage', async ({ commonCheckoutService }) => {
    console.log('Test Case: Verify the required message displays when the Last Name input is empty');
    await test.step('Empty only Last Name Field', async () => {
      await commonCheckoutService.personalInfoPage.locLastNameInput.clear();
    });
    await test.step('Click on the Save & Continue Button', async () => {
      await commonCheckoutService.personalInfoPage.locSaveAndContinueButton.click();
    });
    await test.step('Require Warning message that Last Name is Required displays', async () => {
      await expect(commonCheckoutService.personalInfoPage.locLastNameWarningMessage).toBeVisible();
    });
  });

  test('Verify the required message displays when the Phone Number input is empty @CheckoutPersonalInfoPage', async ({ commonCheckoutService }) => {
    console.log('Test Case: Verify the required message displays when the Phone Number input is empty');
    await test.step('Empty only Phone Number Field', async () => {
      await commonCheckoutService.personalInfoPage.locPhoneNumberInput.clear();
    });
    await test.step('Click on the Save & Continue Button', async () => {
      await commonCheckoutService.personalInfoPage.locSaveAndContinueButton.click();
    });
    await test.step('Require Warning message that Phone Number is Required displays', async () => {
      await expect(commonCheckoutService.personalInfoPage.locPhoneNumberWarningMessage).toBeVisible();
    });
  });

  test('Verify the required message displays when Invalid Phone Number starting with zero is entered @CheckoutPersonalInfoPage', async ({
    commonCheckoutService,
  }) => {
    console.log('Test Case: Verify the required message displays when Invalid Phone Number starting with zero is entered');
    await test.step('Empty only Phone Number Field', async () => {
      await commonCheckoutService.personalInfoPage.locPhoneNumberInput.clear();
    });
    await test.step('Enter an invalid phone number starting with zero', async () => {
      await commonCheckoutService.personalInfoPage.locPhoneNumberInput.fill('0002221111');
    });
    await test.step('Click on the Save & Continue Button', async () => {
      await commonCheckoutService.personalInfoPage.locSaveAndContinueButton.click();
    });
    await test.step('Require Warning message that Phone Number is Required displays', async () => {
      await expect(commonCheckoutService.personalInfoPage.locPhoneNumberInvalidWarningMessage).toBeVisible();
    });
  });

  test('Verify the required message displays when Invalid Phone Number starting with one is entered @CheckoutPersonalInfoPage', async ({
    commonCheckoutService,
  }) => {
    console.log('Test Case: Verify the required message displays when Invalid Phone Number starting with one is entered');
    await test.step('Empty only Phone Number Field', async () => {
      await commonCheckoutService.personalInfoPage.locPhoneNumberInput.clear();
    });
    await test.step('Enter an invalid phone number starting with zero', async () => {
      await commonCheckoutService.personalInfoPage.locPhoneNumberInput.fill('1112227654');
    });
    await test.step('Click on the Save & Continue Button', async () => {
      await commonCheckoutService.personalInfoPage.locSaveAndContinueButton.click();
    });
    await test.step('Require Warning message that Phone Number is Required displays', async () => {
      await expect(commonCheckoutService.personalInfoPage.locPhoneNumberInvalidWarningMessage).toBeVisible();
    });
  });

  test('Verify the required message displays when Phone Number less than the expected length is entered @CheckoutPersonalInfoPage', async ({
    commonCheckoutService,
  }) => {
    console.log('Test Case: Verify the required message displays when Phone Number less than the expected length');
    await test.step('Empty only Phone Number Field', async () => {
      await commonCheckoutService.personalInfoPage.locPhoneNumberInput.clear();
    });
    await test.step('Enter an invalid phone number starting with zero', async () => {
      await commonCheckoutService.personalInfoPage.locPhoneNumberInput.fill('9999');
    });
    await test.step('Click on the Save & Continue Button', async () => {
      await commonCheckoutService.personalInfoPage.locSaveAndContinueButton.click();
    });
    await test.step('Require Warning message that Phone Number is Required displays', async () => {
      await expect(commonCheckoutService.personalInfoPage.locPhoneNumberInvalidWarningMessage).toBeVisible();
    });
  });

  test('Verify the required message displays when the Address input is empty @CheckoutPersonalInfoPage', async ({ commonCheckoutService }) => {
    console.log('Test Case: Verify the required message displays when the Address input is empty');
    await test.step('Empty only Home Address Field', async () => {
      await commonCheckoutService.personalInfoPage.locHomeAddressInput.clear();
    });
    await test.step('Click on the Save & Continue Button', async () => {
      await commonCheckoutService.personalInfoPage.locSaveAndContinueButton.click();
    });
    await test.step('Require Warning message that Home Address is Required displays', async () => {
      await expect(commonCheckoutService.personalInfoPage.locHomeAddressWarningMessage).toBeVisible();
    });
  });

  test('Verify the required message displays when the Home Address input is invalid length @CheckoutPersonalInfoPage', async ({
    commonCheckoutService,
  }) => {
    console.log('Test Case: Verify the required message displays when the Home Address input is invalid length');
    await test.step('Enter a invalid length in the Home Address Field', async () => {
      await commonCheckoutService.personalInfoPage.locHomeAddressInput.fill('12345AddressExceedsLengthOfThirty');
    });
    await test.step('Click on the Save & Continue Button', async () => {
      await commonCheckoutService.personalInfoPage.locSaveAndContinueButton.click();
    });
    await test.step('Require Warning message that Home Address exceeds expected length', async () => {
      await expect(commonCheckoutService.personalInfoPage.locAddressExceedsWarningMessage).toBeVisible();
    });
  });

  test('Verify the required message displays when the Address 2 input is invalid length @CheckoutPersonalInfoPage', async ({
    commonCheckoutService,
  }) => {
    console.log('Test Case: Verify the required message displays when the Address 2 input is invalid length');
    await test.step('Enter a invalid length in the Address 2 Field', async () => {
      await commonCheckoutService.personalInfoPage.locHomeAddressInput2.fill('12345AddressExceedsLengthOfThirty');
    });
    await test.step('Click on the Save & Continue Button', async () => {
      await commonCheckoutService.personalInfoPage.locSaveAndContinueButton.click();
    });
    await test.step('Require Warning message that Address Lne 2 exceeds expected length', async () => {
      await expect(commonCheckoutService.personalInfoPage.locAddressExceedsWarningMessage).toBeVisible();
    });
  });

  test('Verify the required message displays when the City input is empty @CheckoutPersonalInfoPage', async ({ commonCheckoutService }) => {
    console.log('Test Case: Verify the required message displays when the City input is empty');
    await test.step('Empty only City Field', async () => {
      await commonCheckoutService.personalInfoPage.locCityInput.clear();
    });
    await test.step('Click on the Save & Continue Button', async () => {
      await commonCheckoutService.personalInfoPage.locSaveAndContinueButton.click();
    });
    await test.step('Require Warning message that City is Required displays', async () => {
      await expect(commonCheckoutService.personalInfoPage.locCityWarningMessage).toBeVisible();
    });
  });

  test('Verify the required message displays when only the PostalCode input is empty @CheckoutPersonalInfoPage', async ({
    commonCheckoutService,
  }) => {
    console.log('Test Case: Verify the required message displays when only the Postal Code input is empty');
    await test.step('Place cursor in Postal Code Field', async () => {
      await commonCheckoutService.personalInfoPage.locPostalCodeInput.click();
    });
    await test.step('Empty Postal Code Field', async () => {
      await commonCheckoutService.personalInfoPage.locPostalCodeInput.clear();
    });
    await test.step('Click on the Save & Continue Button', async () => {
      await commonCheckoutService.personalInfoPage.locSaveAndContinueButton.click();
    });
    await test.step('Require Warning message that Postal Code is Requires displays', async () => {
      await expect(commonCheckoutService.personalInfoPage.locPostalCodeWarningMessage).toBeVisible();
    });
  });

  test('Verify the required message displays when DOB Month Date and Year are all empty @CheckoutPersonalInfoPage', async ({
    commonCheckoutService,
  }) => {
    console.log('Test Case: Verify the required message displays when the DOB fields are all empty');
    await test.step('Empty DOB Month Field', async () => {
      await commonCheckoutService.personalInfoPage.locDateOfBirthInput.clear();
    });
    await test.step('Click on the Save & Continue Button', async () => {
      await commonCheckoutService.personalInfoPage.locSaveAndContinueButton.click();
    });
    await test.step('Require Warning message that valid DOB is Required displays', async () => {
      await expect(commonCheckoutService.personalInfoPage.locDateOfBirthInvalidWarningMessage).toBeVisible();
    });
  });

  test('Verify the required message displays when the SSN input is empty @CheckoutPersonalInfoPage', async ({ commonCheckoutService }) => {
    console.log('Test Case: Verify the required message displays when the SSN input is empty');
    await test.step('Empty only SSN Field', async () => {
      await commonCheckoutService.personalInfoPage.locSocialSecurityInput.clear();
    });
    await test.step('Click on the Save & Continue Button', async () => {
      await commonCheckoutService.personalInfoPage.locSaveAndContinueButton.click();
    });
    await test.step('Require Warning message that SSN is Required displays', async () => {
      await expect(commonCheckoutService.personalInfoPage.locSocialSecurityWarningMessage).toBeVisible();
    });
  });

  test('Verify the required message displays when all non-business fields are Empty on Personal Info Page @CheckoutPersonalInfoPage', async ({
    commonCheckoutService,
  }) => {
    console.log('Test Case: Verify the required message displays when all non-business fields are Empty on Personal Info Page');
    await test.step('Empty all Fields on Personal Info Page ', async () => {
      await commonCheckoutService.personalInfoPage.clearAllNonBusinessFields();
    });
    await test.step('Click on the Save & Continue Button', async () => {
      await commonCheckoutService.personalInfoPage.locSaveAndContinueButton.click();
    });
    await test.step('Require Warning message under each field displays', async () => {
      await commonCheckoutService.personalInfoPage.assertAllNonBusinessFormErrorsAreDisplayed();
    });
  });

  test('Verify Stepper 2 is present on Personal Information Page @CheckoutPersonalInfoPage', async ({ commonCheckoutService }) => {
    console.log('Test Case: Verify Stepper 2 is present on Personal Information Page');
    await test.step('Assert that Step Circle 2 on Personal Info Page is solid black', async () => {
      await expect(commonCheckoutService.personalInfoPage.stepperComponent.locStepCircle2Current).toBeVisible();
    });
  });

  test('Verify user can submit valid information on all Non-Business Forms and reach the Payment Page @CheckoutPersonalInfoPage', async ({
    commonCheckoutService,
  }) => {
    console.log('Test Case: Verify user can submit valid information on all Non-Business Forms and reach the Payment Page');
    await test.step('Populate all fields on the Personal Information Page', async () => {
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
    await test.step('Assert user gets to Payment Page and that Step Circle 3 on Payment Page is solid black', async () => {
      expect(commonCheckoutService.paymentPage.stepperComponent.locStepCircle3Current).toBeVisible();
    });
  });

  test('Verify user will not get an error in birthday field by tabbing or hitting enter when address field is empty @CheckoutPersonalInfoPage', async ({
    commonCheckoutService,
    page,
  }) => {
    console.log('Test Case: Verify user will not get an error in birthday field by tabbing or hitting enter when address field is empty');
    await test.step('Populate all non-business fields on Personal Information Page leaving address, city, and zip empty', async () => {
      await commonCheckoutService.personalInfoPage.fillAllNonBusinessFormFields(
        'Automation',
        'Tester',
        '5555555555',
        'Mobile',
        '',
        '',
        '',
        '10',
        '10',
        '2001',
        '3333'
      );
    });

    await test.step('Click Enter to get Warning under Address, City, and Zip but not DOB', async () => {
      await page.keyboard.press('Enter');
    });

    await test.step('Require Warning message that Address is Required displays', async () => {
      await expect(commonCheckoutService.personalInfoPage.locHomeAddressWarningMessage).toBeVisible();
    });

    await test.step('Require Warning message that City is Required displays', async () => {
      await expect(commonCheckoutService.personalInfoPage.locCityWarningMessage).toBeVisible();
    });

    await test.step('Require Warning message that ZipCode is Required displays', async () => {
      await expect(commonCheckoutService.personalInfoPage.locPostalCodeWarningMessage).toBeVisible();
    });

    await test.step('Enter Address City and Zip Code ', async () => {
      await commonCheckoutService.personalInfoPage.fillRequiredAddressFields('200 16th Street', 'Denver', '80202');
    });

    await test.step('Tab from ZipCode field to DOB field', async () => {
      await page.keyboard.press('Tab');
    });

    await test.step('Empty DOB Month Field', async () => {
      await commonCheckoutService.personalInfoPage.locDateOfBirthInput.clear();
    });

    await test.step('Click Tab from the Keyboard the cursor should go into SSN field', async () => {
      await page.keyboard.press('Tab');
      await page.keyboard.press('Tab');
      await page.keyboard.press('Tab');
    });

    await test.step('Click Enter to get Warning under DOB field', async () => {
      await page.keyboard.press('Enter');
    });

    await test.step('Require Warning message that DOB is Required displays', async () => {
      await expect(commonCheckoutService.personalInfoPage.locDateOfBirthInvalidWarningMessage).toBeVisible();
    });
  });

  test('Verify the Have Questions Label is visible @CheckoutPersonalInfoPage', async ({ commonCheckoutService }) => {
    console.log('Test Case: Verify the Have Questions Label is visible');
    await test.step('Verify the Have Questions Label is visible ', async () => {
      expect(commonCheckoutService.haveQuestionsComponent.locHaveQuestionsLabel).toBeVisible();
    });
  });

  test('Verify the Phone Number button is visible @CheckoutPersonalInfoPage', async ({ commonCheckoutService }) => {
    console.log('Test Case: Verify the Phone Number button is visible');
    await test.step('Verify the Phone Number button is visible ', async () => {
      expect(commonCheckoutService.haveQuestionsComponent.locPhoneNumberButton).toBeVisible();
    });
  });

  test('Verify the information icon is visible and displays text @CheckoutPersonalInfoPage', async ({ commonCheckoutService, page }) => {
    console.log('Test Case: Verify the information icon is visible and displays text');
    await test.step('Verify the information icon is visible ', async () => {
      await commonCheckoutService.personalInfoPage.locInformationIcon.isVisible();
    });
    await test.step('Hover over the information icon', async () => {
      await commonCheckoutService.personalInfoPage.locInformationIcon.hover();
    });
    await test.step('Verify the information icon displays text', async () => {
      await expect(commonCheckoutService.personalInfoPage.locInformationIconTooltip).toContainText(
        'Click here to update your state/province. Because we tailor our benefits based on your location, this will empty your shopping cart. Once you have confirmed your region, you will need to reselect your items for checkout so we can update your plan to give you the best value.'
      );
    });
  });

  test('Verify user is redirected back to Marketing Page when Change Link is clicked @CheckoutPersonalInfoPage', async ({
    page,
    commonCheckoutService,
  }) => {
    console.log('Test Case: Verify user is redirected back to Marketing Page when Change Link is clicked');
    await test.step('Click on the Change Link to be redirected to Marketing Page', async () => {
      await commonCheckoutService.personalInfoPage.locChangeLink.click();
    });
    await test.step('Verify user is redirected to Marketing Page', async () => {
      await expect(page).toHaveURL(new RegExp('legalshield.com'));
    });
  });

  test('Verify user is redirected back to Marketing Page when Edit Link is clicked @CheckoutPersonalInfoPage', async ({
    page,
    commonCheckoutService,
  }) => {
    console.log('Test Case: Verify user is redirected back to Marketing Page when Edit Link is clicked');
    await test.step('Click on the Edit Link to be redirected to Marketing Page', async () => {
      await commonCheckoutService.personalInfoPage.locEditLink.click();
    });
    await test.step('Verify user is redirected to Marketing Page', async () => {
      await expect(page).toHaveURL(new RegExp('legalshield.com'));
    });
  });
});

test.describe('United States - Colorado, Business Plan', () => {
  test.beforeEach(async ({ page, legalshieldService, commonCheckoutService, commonLoginService }) => {
    test.slow();
    await test.step(`Navigate to legalshield business plan summary page and Click on the SMB ESS Plan button`, async () => {
      await legalshieldService.addSmallBusinessPlan('Essentials');
    });
    await test.step(`Click on the Shopping Cart Checkout button`, async () => {
      await page.waitForTimeout(500);
      await legalshieldService.legalshieldCoverageAndPricingPage.marketingSiteCartComponent.locCheckoutButton.click();
    });
    await test.step(`Choose Account by Email`, async () => {
      await commonCheckoutService.accountPage.locEmailAddressInput.fill(basicUser.email);
      await commonCheckoutService.accountPage.locContinueButton.click();
      await commonCheckoutService.accountPage.locClickHereToLoginButton.click();
      await commonLoginService.whatsYourEmailPage.locEmailAddressInput.fill(basicUser.email);
      await commonLoginService.whatsYourEmailPage.locContinueButton.click();
    });
    await test.step(`Log in with only password to reach checkout service`, async () => {
      await commonLoginService.loginPage.loginOnlyPassword(basicUser.password);
    });
  });

  test('Verify no warning messages display when all required fields are entered @CheckoutPersonalInfoPage', async ({ commonCheckoutService }) => {
    console.log('Test Case: Verify no warning messages display when all required fields are entered');
    await test.step('Populate all non-business fields on Personal Information Page', async () => {
      await commonCheckoutService.personalInfoPage.fillAllFields(
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
        '3333',
        'Testers Inc',
        '10',
        '10',
        '2021',
        '945433337'
      );
    });
    await test.step('After fields are populated place cursor on Address Line 2', async () => {
      await commonCheckoutService.personalInfoPage.locHomeAddressInput2.click();
    });
    await test.step('No Warnings are displayed when all fields are entered', async () => {
      await commonCheckoutService.personalInfoPage.assertNoFormErrorsAreDisplayed();
    });
  });

  test('Verify the required message displays when the Business Name input is empty @CheckoutPersonalInfoPage', async ({ commonCheckoutService }) => {
    console.log('Test Case: Verify the required message displays when the Business Name input is empty');
    await test.step('Empty only Business Name Field', async () => {
      await commonCheckoutService.personalInfoPage.locBusinessNameInput.clear();
    });
    await test.step('Click on Save and Continue Button', async () => {
      await commonCheckoutService.personalInfoPage.locSaveAndContinueButton.click();
    });
    await test.step('Require Warning message that Business Name is Required displays', async () => {
      await expect(commonCheckoutService.personalInfoPage.locBusinessNameWarningMessage).toBeVisible();
    });
  });

  test('Verify the required message displays when Date of Incorporation Month Day and Year are all empty @CheckoutPersonalInfoPage', async ({
    commonCheckoutService,
  }) => {
    console.log('Test Case: Verify the required message displays when Date of Incorporation Month Day and Year are all empty');
    await test.step('Empty Date of Incorporation Date Field', async () => {
      await commonCheckoutService.personalInfoPage.locDateOfIncorporationInput.clear();
    });
    await test.step('Click on the Save & Continue Button', async () => {
      await commonCheckoutService.personalInfoPage.locSaveAndContinueButton.click();
    });
    await test.step('Require Warning message that valid Date of Incorporation is Required displays', async () => {
      await expect(commonCheckoutService.personalInfoPage.locDateOfInCorpWarningMessage).toBeVisible();
    });
  });

  test('Verify the required message displays when the TaxID input is empty @CheckoutPersonalInfoPage', async ({ commonCheckoutService }) => {
    console.log('Test Case: Verify the required message displays when the TaxID input is empty');
    await test.step('Empty only TaxID Field', async () => {
      await commonCheckoutService.personalInfoPage.locTaxIdInput.clear();
    });
    await test.step('Click on the Save & Continue Button', async () => {
      await commonCheckoutService.personalInfoPage.locSaveAndContinueButton.click();
    });
    await test.step('Require Warning message that SSN is Required displays', async () => {
      await expect(commonCheckoutService.personalInfoPage.locBusinessTaxIdWarningMessage).toBeVisible();
    });
  });

  test('Verify the required message displays when all fields including Business Section are Empty on Personal Info Page @CheckoutPersonalInfoPage', async ({
    commonCheckoutService,
  }) => {
    console.log('Test Case: Verify the required message displays when all fields including Business Section are Empty on Personal Info Page');
    await test.step('Empty all Fields including Business Section on Personal Info Page ', async () => {
      await commonCheckoutService.personalInfoPage.clearAllFields();
    });
    await test.step('Click on the Save & Continue Button', async () => {
      await commonCheckoutService.personalInfoPage.locSaveAndContinueButton.click();
    });
    await test.step('Require Warning message under all fields are displayed', async () => {
      await commonCheckoutService.personalInfoPage.assertAllFormErrorsAreDisplayed();
    });
  });
});

test.describe('United States - Colorado, Business - Plan', () => {
  test.beforeEach(async ({ page, legalshieldService, commonCheckoutService, commonLoginService }) => {
    test.slow();

    await test.step(`Navigate to legalshield business plan summary page and Click on the SMB ESS Plan button`, async () => {
      await legalshieldService.addSmallBusinessPlan('Essentials');
    });
    await test.step(`Click on the Shopping Cart Checkout button`, async () => {
      await page.waitForTimeout(500);
      await legalshieldService.legalshieldCoverageAndPricingPage.marketingSiteCartComponent.locCheckoutButton.click();
    });
    await test.step(`Choose Account by Email`, async () => {
      await commonCheckoutService.accountPage.locEmailAddressInput.fill(basicUser.email);
      await commonCheckoutService.accountPage.locContinueButton.click();
      await commonCheckoutService.accountPage.locClickHereToLoginButton.click();
      await commonLoginService.whatsYourEmailPage.locEmailAddressInput.fill(basicUser.email);
      await commonLoginService.whatsYourEmailPage.locContinueButton.click();
    });
    await test.step(`Log in with only password to reach checkout service`, async () => {
      await commonLoginService.loginPage.loginOnlyPassword(basicUser.password);
    });
    await test.step('Populate all fields on Personal Information Page', async () => {
      await commonCheckoutService.personalInfoPage.fillAllFields(
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
        '3333',
        'Testers Inc',
        '10',
        '10',
        '2021',
        '945433337'
      );
    });
  });

  test('Verify user can submit valid information on all Forms and reach the Payment Page @CheckoutPersonalInfoPage', async ({
    commonCheckoutService,
    page,
  }) => {
    console.log('Test Case: Verify user can submit valid information on all Forms and reach the Payment Page');
    test.setTimeout(200000);
    await test.step('Click on the Save & Continue Button to go to Payment Page', async () => {
      await commonCheckoutService.personalInfoPage.clickSaveAndContinueAndWaitForPaymentPageToLoad();
    });
    await test.step('Assert user gets to Payment Page and that Step Circle 3 on Payment Page is solid black', async () => {
      expect(commonCheckoutService.paymentPage.stepperComponent.locStepCircle3Current).toBeVisible();
      await page.waitForTimeout(500);
    });
  });
});
