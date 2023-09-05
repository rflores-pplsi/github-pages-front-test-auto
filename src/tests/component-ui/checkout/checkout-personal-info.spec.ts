import { test, expect } from '@playwright/test';
import { basicUser } from '../../../utils/user.utils';
import UrlsUtils from '../../../utils/urls.utils';
import { LegalshieldCoverageAndPricingPage } from '../../../page-objects/marketing-sites/legalshield/legalshield-coverage-and-pricing.page';
import { CheckoutPersonalInfoPage } from '../../../page-objects/checkout/checkout-personal-info.page';
import { CommonLoginService, CommonCheckoutService } from '@legalshield/frontend-automation-commons';

let legalshieldCoverageAndPricingPage: LegalshieldCoverageAndPricingPage;
let checkoutPersonalInfoPage: CheckoutPersonalInfoPage;
let commonCheckoutService: CommonCheckoutService;
let commonLoginService: CommonLoginService;
test.beforeEach(async ({ context, page }) => {
  test.slow();
  legalshieldCoverageAndPricingPage = new LegalshieldCoverageAndPricingPage(page);
  commonLoginService = new CommonLoginService(page);
  commonCheckoutService = new CommonCheckoutService(context, page);
  checkoutPersonalInfoPage = new CheckoutPersonalInfoPage(context, page);
});

test.describe('United States - Colorado, Legal Plan - Monthly', () => {
  test.beforeEach(async ({ page }) => {
    await test.step(`Navigate to legalshield pricing and coverage page`, async () => {
      await legalshieldCoverageAndPricingPage.navigateToLegalshieldPricingAndCoveragePage('US', 'en');
    });
    await test.step(`Change Region`, async () => {
      await legalshieldCoverageAndPricingPage.marketingSiteFooterComponent.selectRegion('Colorado', 'CO');
    });
    await test.step(`Click on the Start Monthly Plan button`, async () => {
      await legalshieldCoverageAndPricingPage.clickStartPlanButton('Monthly');
    });
    await test.step(`Click on the Shopping Cart Checkout button`, async () => {
      await page.waitForTimeout(500);
      await legalshieldCoverageAndPricingPage.marketingSiteCartComponent.locCheckoutButton.click();
    });
    await test.step(`Log in to reach checkout service`, async () => {
      await commonLoginService.loginPage.login(basicUser.email, basicUser.password);
    });
  });

  test('Verify Personal Information Section Header Displays', async () => {
    console.log('Test Case: Verify Personal Information Section Header Displays');
    await test.step('Verify Header is displayed on Personal Information Section', async () => {
      await expect(checkoutPersonalInfoPage.locHeader).toContainText('Tell us about yourself');
    });
  });

  test('Verify no warning messages display when all non-business required fields are entered', async () => {
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
      await checkoutPersonalInfoPage.assertNoNonBusinessFormErrorsAreDisplayed();
    });
  });

  test('Verify the required message displays when the First Name input is empty', async () => {
    console.log('Test Case: Verify the required message displays when the First Name input is empty');
    await test.step('Empty only First Name Field', async () => {
      await commonCheckoutService.personalInfoPage.locFirstNameInput.clear();
    });
    await test.step('Click on Save and Continue Button', async () => {
      await commonCheckoutService.personalInfoPage.locSaveAndContinueButton.click();
    });
    await test.step('Require Warning message that First Name is Required displays', async () => {
      await expect(checkoutPersonalInfoPage.locFirstNameWarningMessage).toBeVisible();
    });
  });

  test('Verify the required message displays when the Last Name input is empty', async () => {
    console.log('Test Case: Verify the required message displays when the Last Name input is empty');
    await test.step('Empty only Last Name Field', async () => {
      await commonCheckoutService.personalInfoPage.locLastNameInput.clear();
    });
    await test.step('Click on the Save & Continue Button', async () => {
      await commonCheckoutService.personalInfoPage.locSaveAndContinueButton.click();
    });
    await test.step('Require Warning message that Last Name is Required displays', async () => {
      await expect(checkoutPersonalInfoPage.locLastNameWarningMessage).toBeVisible();
    });
  });

  test('Verify the required message displays when the Phone Number input is empty', async () => {
    console.log('Test Case: Verify the required message displays when the Phone Number input is empty');
    await test.step('Empty only Phone Number Field', async () => {
      await commonCheckoutService.personalInfoPage.locPhoneNumberInput.clear();
    });
    await test.step('Click on the Save & Continue Button', async () => {
      await commonCheckoutService.personalInfoPage.locSaveAndContinueButton.click();
    });
    await test.step('Require Warning message that Phone Number is Required displays', async () => {
      await expect(checkoutPersonalInfoPage.locPhoneNumberWarningMessage).toBeVisible();
    });
  });

  test('Verify the required message displays when the Address input is empty', async () => {
    console.log('Test Case: Verify the required message displays when the Address input is empty');
    await test.step('Empty only Home Address Field', async () => {
      await commonCheckoutService.personalInfoPage.locHomeAddressInput.clear();
    });
    await test.step('Click on the Save & Continue Button', async () => {
      await commonCheckoutService.personalInfoPage.locSaveAndContinueButton.click();
    });
    await test.step('Require Warning message that Home Address is Required displays', async () => {
      await expect(checkoutPersonalInfoPage.locHomeAddressWarningMessage).toBeVisible();
    });
  });

  test('Verify the required message displays when the City input is empty', async () => {
    console.log('Test Case: Verify the required message displays when the City input is empty');
    await test.step('Empty only City Field', async () => {
      await commonCheckoutService.personalInfoPage.locCityInput.clear();
    });
    await test.step('Click on the Save & Continue Button', async () => {
      await commonCheckoutService.personalInfoPage.locSaveAndContinueButton.click();
    });
    await test.step('Require Warning message that City is Required displays', async () => {
      await expect(checkoutPersonalInfoPage.locCityWarningMessage).toBeVisible();
    });
  });

  test('Verify the required message displays when the PostalCode input is empty', async () => {
    console.log('Test Case: Verify the required message displays when the Postal Code input is empty');
    await test.step('Empty only Postal Code Field', async () => {
      await commonCheckoutService.personalInfoPage.locPostalCodeInput.clear();
    });
    await test.step('Click on the Save & Continue Button', async () => {
      await commonCheckoutService.personalInfoPage.locSaveAndContinueButton.click();
    });
    await test.step('Require Warning message that Postal Code is Requires displays', async () => {
      await expect(checkoutPersonalInfoPage.locPostalCodeWarningMessage).toBeVisible();
    });
  });

  test('Verify the required message displays when DOB Month Date and Year are all empty', async () => {
    console.log('Test Case: Verify the required message displays when the DOB fields are all empty');
    await test.step('Empty DOB Month Field', async () => {
      await commonCheckoutService.personalInfoPage.locBirthMonthInput.clear();
    });
    await test.step('Empty DOB Date Field', async () => {
      await commonCheckoutService.personalInfoPage.locBirthDateInput.clear();
    });
    await test.step('Empty DOB Year Field', async () => {
      await commonCheckoutService.personalInfoPage.locBirthYearInput.clear();
    });
    await test.step('Click on the Save & Continue Button', async () => {
      await commonCheckoutService.personalInfoPage.locSaveAndContinueButton.click();
    });
    await test.step('Require Warning message that valid DOB is Required displays', async () => {
      await expect(checkoutPersonalInfoPage.locDateOfBirthWarningMessage).toBeVisible();
    });
  });

  test('Verify the arrows increment/decrement the value of the Month Field and has 2 digits using the Keyboard', async ({ page }) => {
    console.log('Test Case: Verify the Up Arrow increments the value of the DOB Month Field and has 2 digits using the Keyboard');
    await test.step('Empty only DOB Month Field', async () => {
      await commonCheckoutService.personalInfoPage.locBirthMonthInput.clear();
    });
    await test.step('Click Up Arrow twice', async () => {
      await commonCheckoutService.personalInfoPage.locBirthMonthInput.focus();
      await page.keyboard.press('ArrowUp');
      await page.keyboard.press('ArrowUp');
    });
    await test.step('Verify the increments to 02', async () => {
      await expect(commonCheckoutService.personalInfoPage.locBirthMonthInput).toHaveValue('02');
    });
    await test.step('Click Down Arrow', async () => {
      await commonCheckoutService.personalInfoPage.locBirthMonthInput.focus();
      await page.keyboard.press('ArrowDown');
    });
    await test.step('Verify the decrement to 01', async () => {
      await expect(commonCheckoutService.personalInfoPage.locBirthMonthInput).toHaveValue('01');
    });
  });

  test('Verify the arrows increment/decrement the value of the Date Field and has 2 digits using the Keyboard', async ({ page }) => {
    console.log('Test Case: Verify the Up Arrow increments the value of the DOB Date Field and has 2 digits using the Keyboard');
    await test.step('Empty only DOB Date Field', async () => {
      await commonCheckoutService.personalInfoPage.locBirthDateInput.clear();
    });
    await test.step('Click Up Arrow twice', async () => {
      await commonCheckoutService.personalInfoPage.locBirthDateInput.focus();
      await page.keyboard.press('ArrowUp');
      await page.keyboard.press('ArrowUp');
    });
    await test.step('Verify the increments to 02', async () => {
      await expect(commonCheckoutService.personalInfoPage.locBirthDateInput).toHaveValue('02');
    });
    await test.step('Click Down Arrow', async () => {
      await commonCheckoutService.personalInfoPage.locBirthDateInput.focus();
      await page.keyboard.press('ArrowDown');
    });
    await test.step('Verify the decrement to 01', async () => {
      await expect(commonCheckoutService.personalInfoPage.locBirthDateInput).toHaveValue('01');
    });
  });

  test('Verify the required message displays when the SSN input is empty', async () => {
    console.log('Test Case: Verify the required message displays when the SSN input is empty');
    await test.step('Empty only SSN Field', async () => {
      await commonCheckoutService.personalInfoPage.locSocialSecurityInput.clear();
    });
    await test.step('Click on the Save & Continue Button', async () => {
      await commonCheckoutService.personalInfoPage.locSaveAndContinueButton.click();
    });
    await test.step('Require Warning message that SSN is Required displays', async () => {
      await expect(checkoutPersonalInfoPage.locSocialSecurityWarningMessage).toBeVisible();
    });
  });

  test('Verify the required message displays when all non-business fields are Empty on Personal Info Page', async ({ page }) => {
    console.log('Test Case: Verify the required message displays when all non-business fields are Empty on Personal Info Page');
    await test.step('Empty all Fields on Personal Info Page ', async () => {
      await commonCheckoutService.personalInfoPage.clearAllNonBusinessFields();
    });
    await test.step('Click on the Save & Continue Button', async () => {
      await commonCheckoutService.personalInfoPage.locSaveAndContinueButton.click();
    });
    await test.step('Require Warning message under each field displays', async () => {
      await checkoutPersonalInfoPage.assertAllNonBusinessFormErrorsAreDisplayed();
    });
  });

  test('Verify Stepper 2 is present on Personal Information Page', async () => {
    console.log('Test Case: Verify Stepper 2 is present on Personal Information Page');
    await test.step('Assert that Step Circle 2 on Personal Info Page is solid black', async () => {
      await expect(commonCheckoutService.personalInfoPage.stepperComponent.locStepCircle2Current).toBeVisible();
    });
  });

  test('Verify user can submit valid information on all Non-Business Forms and reach the Payment Page', async () => {
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
    await test.step('Assert that user is redirected to Personal Information Page and it contains header Tell us about yourself', async () => {
      expect(commonCheckoutService.paymentPage.stepperComponent.locStepCircle3Current).toBeVisible();
    });
  });

  test('Verify the Have Questions Label is visible', async () => {
    console.log('Test Case: Verify the Have Questions Label is visible');
    await test.step('Verify the Have Questions Label is visible ', async () => {
      expect(checkoutPersonalInfoPage.checkoutHaveQuestionsComponent.locHaveQuestionsLabel).toBeVisible();
    });
  });

  test('Verify the Phone Number button is visible', async () => {
    console.log('Test Case: Verify the Phone Number button is visible');
    await test.step('Verify the Phone Number button is visible ', async () => {
      expect(checkoutPersonalInfoPage.checkoutHaveQuestionsComponent.locPhoneNumberButton).toBeVisible();
    });
  });

  test('Verify user is redirected back to Marketing Page when Change Link is clicked', async ({ page }) => {
    console.log('Test Case: Verify user is redirected back to Marketing Page when Change Link is clicked');
    await test.step('Click on the Change Link to be redirected to Marketing Page', async () => {
      await checkoutPersonalInfoPage.locChangeLink.click();
    });
    await test.step('Verify user is redirected to Marketing Page', async () => {
      await expect(page).toHaveURL(new RegExp('legalshield.com'));
    });
  });

  test('Verify user is redirected back to Marketing Page when Edit Link is clicked', async ({ page }) => {
    console.log('Test Case: Verify user is redirected back to Marketing Page when Edit Link is clicked');
    await test.step('Click on the Edit Link to be redirected to Marketing Page', async () => {
      await checkoutPersonalInfoPage.locEditLink.click();
    });
    await test.step('Verify user is redirected to Marketing Page', async () => {
      await expect(page).toHaveURL(new RegExp('legalshield.com'));
    });
  });
});

test.describe('United States - Colorado, Business Plan', () => {
  test.beforeEach(async ({ page }) => {
    await test.step(`Navigate to legalshield business plan summary page`, async () => {
      await page.goto(`${UrlsUtils.marketingSitesUrls.legalShieldUSUrl}/business-plan/plan-summary/`);
    });
    await test.step(`Change Region`, async () => {
      await legalshieldCoverageAndPricingPage.marketingSiteFooterComponent.selectRegion('Colorado', 'CO');
    });
    await test.step(`Click on the SMB ESS Plan button`, async () => {
      await legalshieldCoverageAndPricingPage.locEssGetStartedButton.click();
    });
    await test.step('Select No for Small Business Questions', async () => {
      await legalshieldCoverageAndPricingPage.smallBusinessQualifyingComponent.completeQualifyingQuestionnaireWithNos();
    });
    await test.step(`Click on the Shopping Cart Checkout button`, async () => {
      await legalshieldCoverageAndPricingPage.marketingSiteCartComponent.locCheckoutButton.click();
    });
    await test.step(`Log in to reach checkout service`, async () => {
      await commonLoginService.loginPage.login(basicUser.email, basicUser.password);
    });
  });

  test('Verify no warning messages display when all required fields are entered', async () => {
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
      await checkoutPersonalInfoPage.assertNoFormErrorsAreDisplayed();
    });
  });

  test('Verify the required message displays when the Business Name input is empty', async () => {
    console.log('Test Case: Verify the required message displays when the Business Name input is empty');
    await test.step('Empty only Business Name Field', async () => {
      await commonCheckoutService.personalInfoPage.locBusinessNameInput.clear();
    });
    await test.step('Click on Save and Continue Button', async () => {
      await commonCheckoutService.personalInfoPage.locSaveAndContinueButton.click();
    });
    await test.step('Require Warning message that Business Name is Required displays', async () => {
      await expect(checkoutPersonalInfoPage.locBusinessNameWarningMessage).toBeVisible();
    });
  });

  test('Verify the required message displays when the Date of Incorporation Month input is empty', async () => {
    console.log('Test Case: Verify the required message displays when the Date of Incorporation Month input is empty');
    await test.step('Empty only Date of Incorporation Month Field', async () => {
      await commonCheckoutService.personalInfoPage.locIncorporationMonthInput.clear();
    });
    await test.step('Click on the Save & Continue Button', async () => {
      await commonCheckoutService.personalInfoPage.locSaveAndContinueButton.click();
    });
    await test.step('Require Warning message that valid Date of Incorporation is Required displays', async () => {
      await expect(checkoutPersonalInfoPage.locDateOfIncorporationMonthWarningMessage).toBeVisible();
    });
  });

  test('Verify the required message displays when the Date of Incorporation Day input is empty', async () => {
    console.log('Test Case: Verify the required message displays when the Day of Incorporation Date input is empty');
    await test.step('Empty only Date of Incorporation Date Field', async () => {
      await commonCheckoutService.personalInfoPage.locIncorporationDayInput.clear();
    });
    await test.step('Click on the Save & Continue Button', async () => {
      await commonCheckoutService.personalInfoPage.locSaveAndContinueButton.click();
    });
    await test.step('Require Warning message that valid Date of Incorporation is Required displays', async () => {
      await expect(checkoutPersonalInfoPage.locDateOfIncorporationDateWarningMessage).toBeVisible();
    });
  });

  test('Verify the required message displays when the Date of Incorporation Year input is empty', async () => {
    console.log('Test Case: Verify the required message displays when the Date of Incorporation Year input is empty');
    await test.step('Empty only Date of Incorporation Year Field', async () => {
      await commonCheckoutService.personalInfoPage.locIncorporationYearInput.clear();
    });
    await test.step('Click on the Save & Continue Button', async () => {
      await commonCheckoutService.personalInfoPage.locSaveAndContinueButton.click();
    });
    await test.step('Require Warning message that valid Date of Incorporation is Required displays', async () => {
      await expect(checkoutPersonalInfoPage.locDateOfIncorporationYearWarningMessage).toBeVisible();
    });
  });

  test('Verify the required message displays when Date of Incorporation Month Day and Year are all empty', async () => {
    console.log('Test Case: Verify the required message displays when Date of Incorporation Month Day and Year are all empty');
    await test.step('Empty Date of Incorporation Month Field', async () => {
      await commonCheckoutService.personalInfoPage.locIncorporationMonthInput.clear();
    });
    await test.step('Empty Date of Incorporation Date Field', async () => {
      await commonCheckoutService.personalInfoPage.locIncorporationDayInput.clear();
    });
    await test.step('Empty Date of Incorporation Year Field', async () => {
      await commonCheckoutService.personalInfoPage.locIncorporationYearInput.clear();
    });
    await test.step('Click on the Save & Continue Button', async () => {
      await commonCheckoutService.personalInfoPage.locSaveAndContinueButton.click();
    });
    await test.step('Require Warning message that valid Date of Incorporation is Required displays', async () => {
      await expect(checkoutPersonalInfoPage.locDateOfInCorpWarningMessage).toBeVisible();
    });
  });

  test('Verify the arrows increment/decrement the value of the Month Field and has 2 digits using the Keyboard', async ({ page }) => {
    console.log('Test Case: Verify the Up Arrow increments the value of the DOI Month Field and has 2 digits using the Keyboard');
    await test.step('Empty only DOI Month Field', async () => {
      await commonCheckoutService.personalInfoPage.locIncorporationMonthInput.clear();
    });
    await test.step('Click Up Arrow twice', async () => {
      await commonCheckoutService.personalInfoPage.locIncorporationMonthInput.focus();
      await page.keyboard.press('ArrowUp');
      await page.keyboard.press('ArrowUp');
    });
    await test.step('Verify the increments to 02', async () => {
      await expect(commonCheckoutService.personalInfoPage.locIncorporationMonthInput).toHaveValue('02');
    });
    await test.step('Click Down Arrow', async () => {
      await commonCheckoutService.personalInfoPage.locIncorporationMonthInput.focus();
      await page.keyboard.press('ArrowDown');
    });
    await test.step('Verify the decrement to 01', async () => {
      await expect(commonCheckoutService.personalInfoPage.locIncorporationMonthInput).toHaveValue('01');
    });
  });

  test('Verify the arrows increment/decrement the value of the Date Field and has 2 digits using the Keyboard', async ({ page }) => {
    console.log('Test Case: Verify the Up Arrow increments the value of the DOI Date Field and has 2 digits using the Keyboard');
    await test.step('Empty only DOI Date Field', async () => {
      await commonCheckoutService.personalInfoPage.locIncorporationDayInput.clear();
    });
    await test.step('Click Up Arrow twice', async () => {
      await commonCheckoutService.personalInfoPage.locIncorporationDayInput.focus();
      await page.keyboard.press('ArrowUp');
      await page.keyboard.press('ArrowUp');
    });
    await test.step('Verify the increments to 02', async () => {
      await expect(commonCheckoutService.personalInfoPage.locIncorporationDayInput).toHaveValue('02');
    });
    await test.step('Click Down Arrow', async () => {
      await commonCheckoutService.personalInfoPage.locIncorporationDayInput.focus();
      await page.keyboard.press('ArrowDown');
    });
    await test.step('Verify the decrement to 01', async () => {
      await expect(commonCheckoutService.personalInfoPage.locIncorporationDayInput).toHaveValue('01');
    });
  });

  test('Verify the required message displays when the TaxID input is empty', async () => {
    console.log('Test Case: Verify the required message displays when the TaxID input is empty');
    await test.step('Empty only TaxID Field', async () => {
      await commonCheckoutService.personalInfoPage.locTaxIdInput.clear();
    });
    await test.step('Click on the Save & Continue Button', async () => {
      await commonCheckoutService.personalInfoPage.locSaveAndContinueButton.click();
    });
    await test.step('Require Warning message that SSN is Required displays', async () => {
      await expect(checkoutPersonalInfoPage.locBusinessTaxIdWarningMessage).toBeVisible();
    });
  });

  test('Verify the required message displays when all fields including Business Section are Empty on Personal Info Page', async () => {
    console.log('Test Case: Verify the required message displays when all fields including Business Section are Empty on Personal Info Page');
    await test.step('Empty all Fields including Business Section on Personal Info Page ', async () => {
      await commonCheckoutService.personalInfoPage.clearAllFields();
    });
    await test.step('Click on the Save & Continue Button', async () => {
      await commonCheckoutService.personalInfoPage.locSaveAndContinueButton.click();
    });
    await test.step('Require Warning message under all fields are displayed', async () => {
      await checkoutPersonalInfoPage.assertAllFormErrorsAreDisplayed();
    });
  });
});

test.describe('United States - Colorado, Business - Plan', () => {
  test.beforeEach(async ({ context, page }) => {
    test.slow();
    legalshieldCoverageAndPricingPage = new LegalshieldCoverageAndPricingPage(page);
    commonLoginService = new CommonLoginService(page);
    commonCheckoutService = new CommonCheckoutService(context, page);

    await test.step(`Navigate to legalshield business plan summary page`, async () => {
      await page.goto(`${UrlsUtils.marketingSitesUrls.legalShieldUSUrl}/business-plan/plan-summary/`);
    });
    await test.step(`Change Region`, async () => {
      await legalshieldCoverageAndPricingPage.marketingSiteFooterComponent.selectRegion('Colorado', 'CO');
    });
    await test.step(`Click on the SMB ESS Plan button`, async () => {
      await legalshieldCoverageAndPricingPage.locEssGetStartedButton.click();
    });
    await test.step('Select No for Small Business Questions', async () => {
      await legalshieldCoverageAndPricingPage.smallBusinessQualifyingComponent.completeQualifyingQuestionnaireWithNos();
    });
    await test.step(`Click on the Shopping Cart Checkout button`, async () => {
      await legalshieldCoverageAndPricingPage.marketingSiteCartComponent.locCheckoutButton.click();
    });
    await test.step(`Log in to reach checkout service`, async () => {
      await commonLoginService.loginPage.login(basicUser.email, basicUser.password);
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

  test('Verify user can submit valid information on all Forms and reach the Payment Page', async () => {
    console.log('Test Case: Verify user can submit valid information on all Forms and reach the Payment Page');
    await test.step('Click on the Save & Continue Button to go to Payment Page', async () => {
      await commonCheckoutService.personalInfoPage.clickSaveAndContinueAndWaitForPaymentPageToLoad();
    });
    await test.step('Assert that user is redirected to Personal Information Page and it contains header Tell us about yourself', async () => {
      expect(commonCheckoutService.paymentPage.stepperComponent.locStepCircle3Current).toBeVisible();
    });
  });
});
