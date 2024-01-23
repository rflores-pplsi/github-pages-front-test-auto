import { expect } from '@playwright/test';
import { basicUser } from '../../../../utils/user.utils';
import UrlsUtils from '../../../../utils/urls.utils';
import { test } from '../../../../fixtures/frontend-ui.fixture';

test.describe('United States - Colorado, Legal Plan - Monthly', () => {
  test.beforeEach(async ({ page, legalshieldService, commonCheckoutService, commonLoginService }) => {
    test.slow();
    await test.step(`Navigate to legalshield pricing and coverage page`, async () => {
      await legalshieldService.legalshieldCoverageAndPricingPage.navigateToLegalshieldPricingAndCoveragePage('US', 'en');
    });
    await test.step(`Click on the Start Monthly Plan button`, async () => {
      await legalshieldService.legalshieldCoverageAndPricingPage.clickStartPlanButton('monthly');
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
        'Mobile',
        '5555555555',
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
    await test.step(`Navigate to legalshield business plan summary page`, async () => {
      await page.goto(`${UrlsUtils.marketingSitesUrls.legalShieldUSUrl}/business-plan/plan-summary/`);
    });
    await test.step(`Change Region`, async () => {
      await legalshieldService.legalshieldCoverageAndPricingPage.marketingSiteFooterComponent.selectRegion('Colorado', 'CO');
    });
    await test.step(`Click on the SMB ESS Plan button`, async () => {
      await legalshieldService.legalshieldCoverageAndPricingPage.locEssGetStartedButton.click();
    });
    await test.step('Select No for Small Business Questions', async () => {
      await legalshieldService.legalshieldCoverageAndPricingPage.smallBusinessQualifyingComponent.completeQualifyingQuestionnaireWithNos();
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

    await test.step(`Navigate to legalshield business plan summary page`, async () => {
      await page.goto(`${UrlsUtils.marketingSitesUrls.legalShieldUSUrl}/business-plan/plan-summary/`);
    });
    await test.step(`Change Region`, async () => {
      await legalshieldService.legalshieldCoverageAndPricingPage.marketingSiteFooterComponent.selectRegion('Colorado', 'CO');
    });
    await test.step(`Click on the SMB ESS Plan button`, async () => {
      await legalshieldService.legalshieldCoverageAndPricingPage.locEssGetStartedButton.click();
    });
    await test.step('Select No for Small Business Questions', async () => {
      await legalshieldService.legalshieldCoverageAndPricingPage.smallBusinessQualifyingComponent.completeQualifyingQuestionnaireWithNos();
    });
    await test.step(`Click on the Shopping Cart Checkout button`, async () => {
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
  }) => {
    console.log('Test Case: Verify user can submit valid information on all Forms and reach the Payment Page');
    await test.step('Click on the Save & Continue Button to go to Payment Page', async () => {
      await commonCheckoutService.personalInfoPage.clickSaveAndContinueAndWaitForPaymentPageToLoad();
    });
    await test.step('Assert user gets to Payment Page and that Step Circle 3 on Payment Page is solid black', async () => {
      expect(commonCheckoutService.paymentPage.stepperComponent.locStepCircle3Current).toBeVisible();
    });
  });
});
