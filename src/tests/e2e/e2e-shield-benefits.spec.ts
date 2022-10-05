import { test } from '@playwright/test';
import { CheckoutConfirmationPage } from '../../page-objects/checkout/checkout-confirmation.page';
import { basicUser } from '../../utils/user.utils';
import selfPayData from './data/shield-benefits/e2e-shield-benefits-self-pay.json';
import payrollDeductData from './data/shield-benefits/e2e-shield-benefits-us-payroll-deduct.json';
import fringeData from './data/shield-benefits/e2e-shield-benefits-us-fringe.json';
import partialFringeData from './data/shield-benefits/e2e-shield-benefits-us-partial-fringe.json';

// create instance of Page
let checkoutConfirmationPage: CheckoutConfirmationPage;

// Setup environment before each test
test.beforeEach(async ({ page }) => {
  console.log('Before Each:');
  checkoutConfirmationPage = new CheckoutConfirmationPage(page);
  // test.slow triples the default wait times
  test.slow();
});

// Self-Pay Configurations - Single Plan
for (const tc of selfPayData.filter((tc) => tc.disabled == false)) {
  for (const region of tc.regions) {
    test(`${tc.testCaseName} - ${region} @selfPay @shieldBenefits`, async ({ page }) => {
      console.log(`Test Case: ${tc.testCaseName} - ${region}`);
      // Crete Cart from Pricing Page and Continue to Personal Info Page
      await test.step(`Navigate to Shield Benefits Pricing Page for Group: ${tc.groupNameOrNumber}`, async () => {
        await checkoutConfirmationPage.navigateToShieldBenefitsGroupOverview(tc.groupNameOrNumber);
        await checkoutConfirmationPage.clickShieldBenefitsPricingTab();
      });
      await test.step(`Select State: ${region}`, async () => {
        await checkoutConfirmationPage.selectStateOrProvince(region);
      });
      await test.step(`Select Payment Frequency: ${tc.payFrequency}`, async () => {
        await checkoutConfirmationPage.selectPaymentFrequency(tc.payFrequency);
      });
      await test.step(`Click Enroll Now for Plan: ${tc.planSupplementName} with Tier: ${tc.tierName}`, async () => {
        await checkoutConfirmationPage.clickPricingPageSinglePlanEnrollNowButton(tc.planSupplementName);
      });

      await test.step(`Login with Credentials - Email:  ${basicUser.email}, Password: ${basicUser.password}`, async () => {
        await checkoutConfirmationPage.login(basicUser.email, basicUser.password);
      });
      await test.step(`Capture the Order Summary used for assertions`, async () => {
        await checkoutConfirmationPage.captureOrderSummaryWithoutTier();
      });
      // Personal Info Page Assertions
      await test.step(`Assert Plan Name and Cost Exist in Order Summary - Plan: ${tc.orderSummaryPlanName}, Cost: ${tc.planCost}`, async () => {
        await checkoutConfirmationPage.assertPlanNameAndCost(tc.orderSummaryPlanName, tc.planCost);
      });
      await test.step(`Assert Total Cost: ${tc.totalCost}`, async () => {
        await checkoutConfirmationPage.assertPayPeriodTotal(tc.totalCost);
      });
      // Complete Necessary Forms and Continue to Payment Page
      await test.step(`Change Address to a valid one for Region: ${region}`, async () => {
        await checkoutConfirmationPage.changeAddressForMarket(tc.market, region);
      });
      await test.step(`Complete Business Form if necessary`, async () => {
        await checkoutConfirmationPage.completeBusinessInfoForm();
      });
      await test.step(`Click the Save and Continue Button`, async () => {
        await checkoutConfirmationPage.clickSaveAndContinueButton();
      });
      // Payment Page Assertions
      await test.step(`Assert Plan Name and Cost Exist in Order Summary - Plan: ${tc.orderSummaryPlanName}, Cost: ${tc.planCost}`, async () => {
        await checkoutConfirmationPage.assertPlanNameAndCost(tc.orderSummaryPlanName, tc.planCost);
      });
      await test.step(`Assert Pay Period Total: ${tc.totalCost}`, async () => {
        await checkoutConfirmationPage.assertPayPeriodTotal(tc.totalCost);
      });
      // Fill out Payment Method and Continue to Confirmation Page

      await test.step(`Click Bank Draft Tab`, async () => {
        await checkoutConfirmationPage.clickBankDraftBtn();
      });
      await checkoutConfirmationPage.fillMarketBankDraftFormAndSubmit(tc.market);
      // Confirmation Assertions
      await test.step(`Assert Membership Tile is Displayed`, async () => {
        await checkoutConfirmationPage.assertMembershipTileIsDisplayed(tc.planType);
      });
      await test.step(`Assert Plan Name is Displayed in Confirmation Page Order Summary`, async () => {
        await checkoutConfirmationPage.assertPlanNameDisplayedInConfirmationPageOrderSummary(tc.planSupplementName);
      });
      await test.step(`Assert Plan Cost is Displayed in Confirmation Page Order Summary`, async () => {
        await checkoutConfirmationPage.assertPlanCostIsDisplayedInConfirmationOrderSummaryForPlanName(tc.planSupplementName);
      });
    });
  }
}

// Fringe Group Configurations - Single Plan
for (const tc of fringeData.filter((tc) => tc.disabled == false)) {
  for (const state of tc.regions) {
    test(`${tc.testCaseName} - ${state} @fringe @shieldBenefits`, async ({ page }) => {
      console.log(`Test Case: ${tc.testCaseName} - ${state}`);
      // Crete Cart from Pricing Page and Continue to Personal Info Page
      await test.step(`Navigate to Shield Benefits Pricing Page for Group: ${tc.groupNumber}`, async () => {
        await checkoutConfirmationPage.navigateToShieldBenefitsPricingPage(tc.groupNumber);
      });
      await test.step(`Select State: ${state}`, async () => {
        await checkoutConfirmationPage.selectStateOrProvince(state);
      });
      await test.step(`Click Enroll Now for Plan: ${tc.planName} with Tier: ${tc.tierName}`, async () => {
        await checkoutConfirmationPage.clickEnrollNowButtonFromShieldBenefitsPricingPage(tc.planName, tc.tierName);
      });
      await test.step(`Login with Credentials - Email:  ${basicUser.email}, Password: ${basicUser.password}`, async () => {
        await checkoutConfirmationPage.login(basicUser.email, basicUser.password);
      });
      await test.step(`Capture the Order Summary used for assertions`, async () => {
        await checkoutConfirmationPage.captureOrderSummary(tc.groupPayConfig);
      });
      // Personal Info Page Assertions
      await test.step(`Assert Plan Name and Tier Name in Order Summary - Plan: ${tc.orderSummaryPlanName}, Tier: ${tc.tierName}`, async () => {
        await checkoutConfirmationPage.assertPlanNameAndTierName(tc.orderSummaryPlanName);
      });
      // // Complete Necessary Forms and Continue to Payment Page
      await test.step(`Change Address to a valid one for State: ${state}`, async () => {
        await checkoutConfirmationPage.changeAddressUs(state);
      });
      await test.step(`Complete Business Form if necessary`, async () => {
        await checkoutConfirmationPage.completeBusinessInfoForm();
      });
      await test.step(`Click the Save and Continue Button`, async () => {
        await checkoutConfirmationPage.clickSaveAndContinueButton();
      });
      // // Agreement Form Assertions
      await test.step(`Assert Plan Name and Tier Name in Order Summary - Plan: ${tc.orderSummaryPlanName}, Tier: ${tc.tierName}`, async () => {
        await checkoutConfirmationPage.assertPlanNameAndTierName(tc.orderSummaryPlanName);
      });
      await test.step(`Assert Disclaimer`, async () => {
        await checkoutConfirmationPage.assertDisclaimerLanguage(tc.groupPayConfig, tc.totalCost);
      });
      await test.step(`Assert Terms of Service and Link`, async () => {
        await checkoutConfirmationPage.assertTermsOfServiceLanguageAndLink();
      });
      await test.step(`Click Agree Checkbox and Complete Enrollment Button`, async () => {
        await checkoutConfirmationPage.navigateFromPaymentAgreementPageToConfirmationPage();
      });
      // Confirmation Assertions
      await test.step(`Assert Membership Tile is Displayed`, async () => {
        await checkoutConfirmationPage.assertMembershipTileIsDisplayed(tc.planType);
      });
      await test.step(`Assert Plan Name is Displayed in Confirmation Page Order Summary`, async () => {
        await checkoutConfirmationPage.assertPlanNameDisplayedInConfirmationPageOrderSummary(tc.planName);
      });
    });
  }
}

// Payroll Deduct Configurations - Single Plan
for (const tc of payrollDeductData.filter((tc) => tc.disabled == false)) {
  for (const state of tc.regions) {
    test(`${tc.testCaseName} - ${state} @payrollDeduct @shieldBenefits`, async ({ page }) => {
      console.log(`Test Case: ${tc.testCaseName} - ${state}`);
      // Crete Cart from Pricing Page and Continue to Personal Info Page
      await test.step(`Navigate to Shield Benefits Pricing Page for Group: ${tc.groupNumber}`, async () => {
        await checkoutConfirmationPage.navigateToShieldBenefitsPricingPage(tc.groupNumber);
      });
      await test.step(`Select State: ${state}`, async () => {
        await checkoutConfirmationPage.selectStateOrProvince(state);
      });
      await test.step(`Select Payment Frequency: ${tc.payFrequency}`, async () => {
        await checkoutConfirmationPage.selectPaymentFrequency(tc.payFrequency);
      });
      await test.step(`Click Enroll Now for Plan: ${tc.planName} with Tier: ${tc.tierName}`, async () => {
        await checkoutConfirmationPage.clickEnrollNowButtonFromShieldBenefitsPricingPage(tc.planName, tc.tierName);
      });
      await test.step(`Login with Credentials - Email:  ${basicUser.email}, Password: ${basicUser.password}`, async () => {
        await checkoutConfirmationPage.login(basicUser.email, basicUser.password);
      });
      await test.step(`Capture the Order Summary used for assertions`, async () => {
        await checkoutConfirmationPage.captureOrderSummaryWithoutTier();
      });
      // Personal Info Page Assertions
      await test.step(`Assert Plan Name and Cost Exist in Order Summary - Plan: ${tc.orderSummaryPlanName}, Cost: ${tc.planCost}`, async () => {
        await checkoutConfirmationPage.assertPlanNameAndCost(tc.orderSummaryPlanName, tc.planCost);
      });
      await test.step(`Assert Total Cost: ${tc.totalCost}`, async () => {
        await checkoutConfirmationPage.assertPayPeriodTotal(tc.totalCost);
      });
      // Complete Necessary Forms and Continue to Payment Page
      await test.step(`Change Address to a valid one for State: ${state}`, async () => {
        await checkoutConfirmationPage.changeAddressUs(state);
      });
      await test.step(`Complete Business Form if necessary`, async () => {
        await checkoutConfirmationPage.completeBusinessInfoForm();
      });
      await test.step(`Click the Save and Continue Button`, async () => {
        await checkoutConfirmationPage.clickSaveAndContinueButton();
      });
      // Payment Page Assertions
      await test.step(`Assert Plan Name and Cost Exist in Order Summary - Plan: ${tc.orderSummaryPlanName}, Cost: ${tc.planCost}`, async () => {
        await checkoutConfirmationPage.assertPlanNameAndCost(tc.orderSummaryPlanName, tc.planCost);
      });
      await test.step(`Assert Pay Period Total: ${tc.totalCost}`, async () => {
        await checkoutConfirmationPage.assertPayPeriodTotal(tc.totalCost);
      });
      // Fill out Agreement Form and Continue to Confirmation Page
      await test.step(`Click Agree Checkbox and Complete Enrollment Button`, async () => {
        await checkoutConfirmationPage.navigateFromPaymentAgreementPageToConfirmationPage();
      });
      // Confirmation Assertions
      await test.step(`Assert Membership Tile is Displayed`, async () => {
        await checkoutConfirmationPage.assertMembershipTileIsDisplayed(tc.planType);
      });
      await test.step(`Assert Plan Name is Displayed in Confirmation Page Order Summary`, async () => {
        await checkoutConfirmationPage.assertPlanNameDisplayedInConfirmationPageOrderSummary(tc.planName);
      });
    });
  }
}

// Partial-Fringe Group Configurations - Single Plan
for (const tc of partialFringeData.filter((tc) => tc.disabled == false)) {
  for (const state of tc.regions) {
    test(`${tc.testCaseName} - ${state} @partialFringe @shieldBenefits`, async ({ page }) => {
      console.log(`Test Case: ${tc.testCaseName} - ${state}`);
      // Crete Cart from Pricing Page and Continue to Personal Info Page
      await test.step(`Navigate to Shield Benefits Pricing Page for Group: ${tc.groupNumber}`, async () => {
        await checkoutConfirmationPage.navigateToShieldBenefitsPricingPage(tc.groupNumber);
      });
      await test.step(`Select State: ${state}`, async () => {
        await checkoutConfirmationPage.selectStateOrProvince(state);
      });
      await test.step(`Select Payment Frequency: ${tc.payFrequency}`, async () => {
        await checkoutConfirmationPage.selectPaymentFrequency(tc.payFrequency);
      });
      await test.step(`Click Enroll Now for Plan: ${tc.planName} with Tier: ${tc.tierName}`, async () => {
        await checkoutConfirmationPage.clickEnrollNowButtonFromShieldBenefitsPricingPage(tc.planName, tc.tierName);
      });
      await test.step(`Login with Credentials - Email:  ${basicUser.email}, Password: ${basicUser.password}`, async () => {
        await checkoutConfirmationPage.login(basicUser.email, basicUser.password);
      });
      await test.step(`Capture the Order Summary used for assertions`, async () => {
        await checkoutConfirmationPage.captureOrderSummaryWithoutTier();
      });
      // Personal Info Page Assertions
      await test.step(`Assert Plan Name and Cost Exist in Order Summary - Plan: ${tc.orderSummaryPlanName}, Cost: ${tc.planCost}`, async () => {
        await checkoutConfirmationPage.assertPlanNameAndCost(tc.orderSummaryPlanName, tc.planCost);
      });
      await test.step(`Assert Total Cost: ${tc.totalCost}`, async () => {
        await checkoutConfirmationPage.assertPayPeriodTotal(tc.totalCost);
      });
      // Complete Necessary Forms and Continue to Payment Page
      await test.step(`Change Address to a valid one for State: ${state}`, async () => {
        await checkoutConfirmationPage.changeAddressUs(state);
      });
      await test.step(`Complete Business Form if necessary`, async () => {
        await checkoutConfirmationPage.completeBusinessInfoForm();
      });
      await test.step(`Click the Save and Continue Button`, async () => {
        await checkoutConfirmationPage.clickSaveAndContinueButton();
      });
      // Payment Page Assertions
      await test.step(`Assert Plan Name and Cost Exist in Order Summary - Plan: ${tc.orderSummaryPlanName}, Cost: ${tc.planCost}`, async () => {
        await checkoutConfirmationPage.assertPlanNameAndCost(tc.orderSummaryPlanName, tc.planCost);
      });
      await test.step(`Assert Pay Period Total: ${tc.totalCost}`, async () => {
        await checkoutConfirmationPage.assertPayPeriodTotal(tc.totalCost);
        // Fill out Agreement Form and Continue to Confirmation Page
      });
      await test.step(`Click Agree Checkbox and Complete Enrollment Button`, async () => {
        await checkoutConfirmationPage.navigateFromPaymentAgreementPageToConfirmationPage();
      });
      // Confirmation Assertions
      await test.step(`Assert Membership Tile is Displayed`, async () => {
        await checkoutConfirmationPage.assertMembershipTileIsDisplayed(tc.planType);
      });
      await test.step(`Assert Plan Name is Displayed in Confirmation Page Order Summary`, async () => {
        await checkoutConfirmationPage.assertPlanNameDisplayedInConfirmationPageOrderSummary(tc.planName);
      });
    });
  }
}
