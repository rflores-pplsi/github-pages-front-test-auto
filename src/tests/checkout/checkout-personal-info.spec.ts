import { test, expect } from '@playwright/test';
import { basicUser } from '../../utils/user.utils';
import { LegalshieldCoverageAndPricingPage } from '../../page-objects-refactored/marketing-sites/legalshield/legalshield-coverage-and-pricing.page';
import { CheckoutPersonalInfoPage } from '../../page-objects-refactored/checkout/checkout-personal-info.page';
import { CommonCheckoutPage, CommonLoginPage } from '@legalshield/frontend-automation-commons';

let legalshieldCoverageAndPricingPage: LegalshieldCoverageAndPricingPage;
let commonLoginPage: CommonLoginPage;
let commonCheckoutPage: CommonCheckoutPage;
let checkoutPersonalInfoPage: CheckoutPersonalInfoPage;

test.beforeEach(async ({ page }) => {
  test.slow();
  legalshieldCoverageAndPricingPage = new LegalshieldCoverageAndPricingPage(page);
  commonLoginPage = new CommonLoginPage(page);
  commonCheckoutPage = new CommonCheckoutPage(page);
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
    await commonLoginPage.login(basicUser.email, basicUser.password);
  });
});

test('Verify Personal Information Section Header Displays', async () => {
  console.log('Test Case: Verify Personal Information Section Header Displays');
  await test.step('Verify Header is displayed on Personal Information Section', async () => {
    await expect(checkoutPersonalInfoPage.locHeader).toContainText('Tell us about yourself');
  });
});

test('Verify no warning messages display when all required fields are entered', async () => {
  console.log('Test Case: Verify no warning messages display when all required fields are entered');
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
  await test.step('After fields are populated place cursor on Address Line 2', async () => {
    await commonCheckoutPage.locPersonalInfoHomeAddress2Input.click();
  });
  await test.step('No Warnings are displayed when all fields are entered', async () => {
    await checkoutPersonalInfoPage.assertPersonalInfoPageErrorsAreNotDisplayed();
  });
});

test('Verify the required message displays when the First Name input is empty', async () => {
  console.log('Test Case: Verify the required message displays when the First Name input is empty');
  await test.step('Empty only First Name Field', async () => {
    await checkoutPersonalInfoPage.locFirstNameInput.clear();
  });
  await test.step('Click on Save and Continue Button', async () => {
    await commonCheckoutPage.locPersonalInfoSaveAndContinueButton.click();
  });
  await test.step('Require Warning message that First Name is Required displays', async () => {
    await expect(checkoutPersonalInfoPage.locFirstNameWarningMessage).toBeVisible();
  });
});

test('Verify the required message displays when the Last Name input is empty', async () => {
  console.log('Test Case: Verify the required message displays when the Last Name input is empty');
  await test.step('Empty only Last Name Field', async () => {
    await checkoutPersonalInfoPage.locLastNameInput.clear();
  });
  await test.step('Click on the Save & Continue Button', async () => {
    await commonCheckoutPage.locPersonalInfoSaveAndContinueButton.click();
  });
  await test.step('Require Warning message that Last Name is Required displays', async () => {
    await expect(checkoutPersonalInfoPage.locLastNameWarningMessage).toBeVisible();
  });
});

test('Verify the required message displays when the Phone Number input is empty', async () => {
  console.log('Test Case: Verify the required message displays when the Phone Number input is empty');
  await test.step('Empty only Phone Number Field', async () => {
    await checkoutPersonalInfoPage.locPhoneNumberInput.clear();
  });
  await test.step('Click on the Save & Continue Button', async () => {
    await commonCheckoutPage.locPersonalInfoSaveAndContinueButton.click();
  });
  await test.step('Require Warning message that Phone Number is Required displays', async () => {
    await expect(checkoutPersonalInfoPage.locPhoneNumberWarningMessage).toBeVisible();
  });
});

test('Verify the required message displays when the Phone Type input is empty', async () => {
  console.log('Test Case: Verify the required message displays when the Phone Type input is empty');
  await test.step('Empty only Phone Type Field', async () => {
    await checkoutPersonalInfoPage.selectPhoneType('Select Type');
  });
  await test.step('Click on the Save & Continue Button', async () => {
    await commonCheckoutPage.locPersonalInfoSaveAndContinueButton.click();
  });
  await test.step('Require Warning message that Phone Type is Required displays', async () => {
    await expect(checkoutPersonalInfoPage.locPhoneTypeWarningMessage).toBeVisible();
  });
});

test('Verify the required message displays when the Address input is empty', async () => {
  console.log('Test Case: Verify the required message displays when the Address input is empty');
  await test.step('Empty only Home Address Field', async () => {
    await commonCheckoutPage.locPersonalInfoHomeAddressInput.clear();
  });
  await test.step('Click on the Save & Continue Button', async () => {
    await commonCheckoutPage.locPersonalInfoSaveAndContinueButton.click();
  });
  await test.step('Require Warning message that Home Address is Required displays', async () => {
    await expect(checkoutPersonalInfoPage.locHomeAddressWarningMessage).toBeVisible();
  });
});

test('Verify the required message displays when the City input is empty', async () => {
  console.log('Test Case: Verify the required message displays when the City input is empty');
  await test.step('Empty only City Field', async () => {
    await commonCheckoutPage.locPersonalInfoCityInput.clear();
  });
  await test.step('Click on the Save & Continue Button', async () => {
    await commonCheckoutPage.locPersonalInfoSaveAndContinueButton.click();
  });
  await test.step('Require Warning message that City is Required displays', async () => {
    await expect(checkoutPersonalInfoPage.locCityWarningMessage).toBeVisible();
  });
});

test('Verify the required message displays when the PostalCode input is empty', async () => {
  console.log('Test Case: Verify the required message displays when the Postal Code input is empty');
  await test.step('Empty only Postal Code Field', async () => {
    await commonCheckoutPage.locPersonalInfoPostalCodeInput.clear();
  });
  await test.step('Click on the Save & Continue Button', async () => {
    await commonCheckoutPage.locPersonalInfoSaveAndContinueButton.click();
  });
  await test.step('Require Warning message that Postal Code is Requires displays', async () => {
    await expect(checkoutPersonalInfoPage.locPostalCodeWarningMessage).toBeVisible();
  });
});

test('Verify the required message displays when the Date of Birth Month input is empty', async () => {
  console.log('Test Case: Verify the required message displays when the DOB Month input is empty');
  await test.step('Empty only DOB Month Field', async () => {
    await checkoutPersonalInfoPage.locBirthMonthInput.clear();
  });
  await test.step('Click on the Save & Continue Button', async () => {
    await commonCheckoutPage.locPersonalInfoSaveAndContinueButton.click();
  });
  await test.step('Require Warning message that valid DOB is Required displays', async () => {
    await expect(checkoutPersonalInfoPage.locDateOfBirthInvalidWarningMessage).toBeVisible();
  });
});

test('Verify the required message displays when the Date of Birth Date input is empty', async () => {
  console.log('Test Case: Verify the required message displays when the DOB Date input is empty');
  await test.step('Empty only DOB Date Field', async () => {
    await checkoutPersonalInfoPage.locBirthDateInput.clear();
  });
  await test.step('Click on the Save & Continue Button', async () => {
    await commonCheckoutPage.locPersonalInfoSaveAndContinueButton.click();
  });
  await test.step('Require Warning message that valid DOB is Required displays', async () => {
    await expect(checkoutPersonalInfoPage.locDateOfBirthInvalidWarningMessage).toBeVisible();
  });
});

test('Verify the required message displays when the Date of Birth Year input is empty', async () => {
  console.log('Test Case: Verify the required message displays when the DOB Year input is empty');
  await test.step('Empty only DOB Year Field', async () => {
    await checkoutPersonalInfoPage.locBirthYearInput.clear();
  });
  await test.step('Click on the Save & Continue Button', async () => {
    await commonCheckoutPage.locPersonalInfoSaveAndContinueButton.click();
  });
  await test.step('Require Warning message that valid DOB is Required displays', async () => {
    await expect(checkoutPersonalInfoPage.locDateOfBirthInvalidWarningMessage).toBeVisible();
  });
});

test('Verify the required message displays when DOB Month Date and Year are all empty', async () => {
  console.log('Test Case: Verify the required message displays when the DOB fields are all empty');
  await test.step('Empty DOB Month Field', async () => {
    await checkoutPersonalInfoPage.locBirthMonthInput.clear();
  });
  await test.step('Empty DOB Date Field', async () => {
    await checkoutPersonalInfoPage.locBirthDateInput.clear();
  });
  await test.step('Empty DOB Year Field', async () => {
    await checkoutPersonalInfoPage.locBirthYearInput.clear();
  });
  await test.step('Click on the Save & Continue Button', async () => {
    await commonCheckoutPage.locPersonalInfoSaveAndContinueButton.click();
  });
  await test.step('Require Warning message that valid DOB is Required displays', async () => {
    await expect(checkoutPersonalInfoPage.locDateOfBirthWarningMessage).toBeVisible();
  });
});

test('Verify the required message displays when the SSN input is empty', async () => {
  console.log('Test Case: Verify the required message displays when the SSN input is empty');
  await test.step('Empty only SSN Field', async () => {
    await checkoutPersonalInfoPage.locSocialSecurityInput.clear();
  });
  await test.step('Click on the Save & Continue Button', async () => {
    await commonCheckoutPage.locPersonalInfoSaveAndContinueButton.click();
  });
  await test.step('Require Warning message that SSN is Required displays', async () => {
    await expect(checkoutPersonalInfoPage.locSocialSecurityWarningMessage).toBeVisible();
  });
});

test('Verify the required message displays when all fields are Empty on Personal Info Page', async () => {
  console.log('Test Case: Verify the required message displays when all fields are Empty on Personal Info Page');
  await test.step('Empty all Fields on Personal Info Page ', async () => {
    await checkoutPersonalInfoPage.clearAllFieldsOnPersonalInfoPageAndSave();
  });
  await test.step('Click on the Save & Continue Button', async () => {
    await commonCheckoutPage.locPersonalInfoSaveAndContinueButton.click();
  });
  await test.step('Require Warning message under each field displays', async () => {
    await checkoutPersonalInfoPage.assertPersonalInfoPageErrorsAreDisplayed();
  });
});

test('Verify Stepper 2 is present on Personal Information Page', async () => {
  console.log('Test Case: Verify Stepper 2 is present on Personal Information Page');
  await test.step('Assert that Step Circle 2 on Personal Info Page is solid black', async () => {
    await expect(checkoutPersonalInfoPage.checkoutStepperComponent.locStepCircle2Current).toBeVisible();
  });
});

test('Verify Stepper 3 is present on Payment Page', async () => {
  console.log('Test Case: Verify Stepper 3 is present on Payment Page');
  await test.step('Populate all fields on the Personal Information Page', async () => {
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
  await test.step('Assert that Step Circle 3 on Payment Page is solid black', async () => {
    await expect(checkoutPersonalInfoPage.checkoutStepperComponent.locStepCircle3Current).toBeVisible();
  });
});

test('Verify user can redirect to Personal info Page By Clicking on Stepper 2 from Payment Page', async () => {
  console.log('Test Case: Verify user can redirect to Personal info Page By Clicking on Stepper 2 from Payment Page');
  await test.step('Populate all fields on the Personal Information Page', async () => {
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
  await test.step('Click on Step Circle 2 when on Payment Page', async () => {
    await checkoutPersonalInfoPage.checkoutStepperComponent.locStepCirclePersonalInfoLink.click();
  });
  await test.step('Assert that user is redirected to Personal Information Page and it contains header Tell us about yourself', async () => {
    await expect(checkoutPersonalInfoPage.locHeader).toContainText('Tell us about yourself');
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
