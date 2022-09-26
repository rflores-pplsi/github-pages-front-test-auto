import { test } from '@playwright/test';
import { CheckoutConfirmationPage } from '../../page-objects/checkout/checkout-confirmation.page';
import { basicUser } from '../../utils/user.utils';
import legalshieldIdShieldData from './data/legalshield-idshield/e2e-legalshield-idshield.json';
import legalshieldIdShieldAnnualData from './data/legalshield-idshield/e2e-legalshield-idshield-annual.json';
import UrlsUtils from '../../utils/urls.utils';
import { addPurchaseRequestListener, interceptedResponse } from '../../utils/api.utils';

// create instance of Page
let checkoutConfirmationPage: CheckoutConfirmationPage;

// Setup environment before each test
test.beforeEach(async ({ page }) => {
  checkoutConfirmationPage = new CheckoutConfirmationPage(page);
  // test.slow triples the default wait times
  test.slow();
});

// LegalShield - Monthly
for (const tc of legalshieldIdShieldData.filter((tc) => tc.disabled == false)) {
  for (const region of tc.regions) {
    test(`${tc.testCaseName} - ${region} @legalshield @testHarnessCheckoutRegression`, async ({ page }) => {
      console.log(`Test Case: ${tc.testCaseName} - ${region}`);

      // Select Plans and get to Personal Info Page
      await test.step(`Navigate to Test Harness - LegalShield}`, async () => {
        await checkoutConfirmationPage.goTo(UrlsUtils.testHarnessUrls.legalShield.url);
      });
      await test.step(`Select Region: ${region}`, async () => {
        await checkoutConfirmationPage.selectRegionFromDropdown(region);
      });
      await test.step(`Add Products: ${tc.productNamesAndCosts}`, async () => {
        await checkoutConfirmationPage.addProducts(tc.productNamesAndCosts);
      });
      await test.step(`Click Checkout Button`, async () => {
        await checkoutConfirmationPage.clickCheckoutButton();
      });
      await test.step(`Login with Credentials - Email:  ${basicUser.email}, Password: ${basicUser.password}`, async () => {
        await checkoutConfirmationPage.login(basicUser.email, basicUser.password);
      });
      await test.step(`Capture the Order Summary used for assertions - Personal Info Page`, async () => {
        await checkoutConfirmationPage.captureOrderSummaryWithoutTier();
      });
      // Personal Info Assertions
      await test.step(`Assert Product Names and Costs - Personal Info Page: ${tc.productNamesAndCosts}`, async () => {
        await checkoutConfirmationPage.assertAllProductNamesAndCosts(tc.productNamesAndCosts);
      });
      await test.step(`Assert Total Cost - Personal Info Page: ${tc.termTotal}`, async () => {
        await checkoutConfirmationPage.assertTermLabelAndTotal(tc.termTotal, tc.termTotal);
      });
      // Complete Necessary Forms and Continue to Payment Page
      await test.step(`Change Address to a valid one for Region: ${region}`, async () => {
        await checkoutConfirmationPage.changeAddressUs(region);
      });
      await test.step(`Complete Business Form if Necessary`, async () => {
        await checkoutConfirmationPage.completeBusinessInfoForm();
      });
      await test.step(`Click Save and Continue Button`, async () => {
        await checkoutConfirmationPage.clickSaveAndContinueButton();
      });
      await test.step(`Capture the Order Summary used for assertions - Payment Page:`, async () => {
        await checkoutConfirmationPage.captureOrderSummaryWithoutTier();
      });
      // Payment Page Assertions
      await test.step(`Assert Product Names and Costs - Payment Page: ${tc.productNamesAndCosts}`, async () => {
        await checkoutConfirmationPage.assertAllProductNamesAndCosts(tc.productNamesAndCosts);
      });
      await test.step(`Assert Total Cost - Payment Page: `, async () => {
        await checkoutConfirmationPage.assertTermLabelAndTotal(tc.termTotal, tc.termTotal);
      });
      // Fill out Payment Method and Continue to Confirmation Page
      await test.step(`Click Bank Draft Tab`, async () => {
        await checkoutConfirmationPage.clickBankDraftBtn();
      });
      await checkoutConfirmationPage.fillMarketBankDraftFormAndSubmit(tc.market);
      // // Confirmation Assertions
      await test.step(`Assert ${tc.planType} Tile is Displayed}`, async () => {
        await checkoutConfirmationPage.assertMembershipTilesAreDisplayed(tc.planType);
      });
      await test.step(`Assert Plan Tiles Displayed on Confirmation Page for: ${tc.productNamesAndCosts}`, async () => {
        await checkoutConfirmationPage.assertAllPlanTilesOnConfirmationPage(tc.productNamesAndCosts);
      });
    });
  }
}

// LegalShield - Annual
for (const tc of legalshieldIdShieldAnnualData.filter((tc) => tc.disabled == false)) {
  for (const region of tc.regions) {
    test(`${tc.testCaseName} - ${region} @legalshield @testHarnessCheckoutRegression`, async ({ page }) => {
      console.log(`Test Case: ${tc.testCaseName} - ${region}`);
      // Select Plans and get to Personal Info Page
      await test.step(`Navigate to Test Harness - LegalShield}`, async () => {
        await checkoutConfirmationPage.goTo(UrlsUtils.testHarnessUrls.legalShield.url);
      });
      await test.step(`Select Region: ${region}`, async () => {
        await checkoutConfirmationPage.selectRegionFromDropdown(region);
      });
      await test.step(`Add Products: ${tc.productDetails}`, async () => {
        await checkoutConfirmationPage.addProductsByNameAndShortCode(tc.productDetails);
      });
      await test.step(`Click Checkout Button`, async () => {
        await checkoutConfirmationPage.clickCheckoutButton();
      });
      await test.step(`Login with Credentials - Email:  ${basicUser.email}, Password: ${basicUser.password}`, async () => {
        await checkoutConfirmationPage.login(basicUser.email, basicUser.password);
      });
      await test.step(`Capture the Order Summary used for assertions - Personal Info Page`, async () => {
        await checkoutConfirmationPage.captureOrderSummaryWithoutTier();
      });
      // Personal Info Assertions
      await test.step(`Assert Product Names and Costs - Personal Info Page: ${tc.productDetails}`, async () => {
        await checkoutConfirmationPage.assertAllProductNamesAndCosts(tc.productDetails);
      });
      await test.step(`Assert Billing Frequency: ${tc.term}`, async () => {
        await checkoutConfirmationPage.assertBillingFrequency(tc.term);
      });
      await test.step(`Assert Term Label - Personal Info Page: ${tc.termTotal}`, async () => {
        await checkoutConfirmationPage.assertTermLabel(tc.term);
      });
      await test.step(`Assert Term Total - Personal Info Page: ${tc.termTotal}`, async () => {
        await checkoutConfirmationPage.assertTermTotal(tc.termTotal);
      });
      // Complete Necessary Forms and Continue to Payment Page
      await test.step(`Change Address to a valid one for Region: ${region}`, async () => {
        await checkoutConfirmationPage.changeAddressUs(region);
      });
      await test.step(`Complete Business Form if Necessary`, async () => {
        await checkoutConfirmationPage.completeBusinessInfoForm();
      });
      await test.step(`Click Save and Continue Button`, async () => {
        await checkoutConfirmationPage.clickSaveAndContinueButton();
      });
      await test.step(`Capture the Order Summary used for assertions - Payment Page:`, async () => {
        await checkoutConfirmationPage.captureOrderSummaryWithoutTier();
      });
      // Payment Page Assertions
      await test.step(`Assert Product Names and Costs - Payment Page: ${tc.productDetails}`, async () => {
        await checkoutConfirmationPage.assertAllProductNamesAndCosts(tc.productDetails);
      });
      await test.step(`Assert Billing Frequency: ${tc.term}`, async () => {
        await checkoutConfirmationPage.assertBillingFrequency(tc.term);
      });
      await test.step(`Assert Term Label - Payment Page: ${tc.termTotal}`, async () => {
        await checkoutConfirmationPage.assertTermLabel(tc.term);
      });
      await test.step(`Assert Term Total - Payment Page: ${tc.termTotal}`, async () => {
        await checkoutConfirmationPage.assertTermTotal(tc.termTotal);
      });
      // Fill out Payment Method and Continue to Confirmation Page
      await test.step(`Click Bank Draft Tab`, async () => {
        await checkoutConfirmationPage.clickBankDraftBtn();
      });
      await test.step(`Create Purchase Response Listener to Capture Short Code`, async () => {
        await addPurchaseRequestListener(page);
      });
      await test.step(`Fill Bank Draft Form and Submit`, async () => {
        await checkoutConfirmationPage.fillMarketBankDraftFormAndSubmit(tc.market);
      });
      await test.step(`Assert Short Codes: ${tc.productDetails}`, async () => {
        await checkoutConfirmationPage.assertShortCodesInPurchaseResponse(interceptedResponse, tc.productDetails);
      });
      await test.step('Log Friendly ID from Purchase Response', async () => {
        await checkoutConfirmationPage.logFriendlyIDs(interceptedResponse, tc.productDetails);
      });
      // // Confirmation Assertions
      await test.step(`Assert Product Name, Cost, and Billing Frequency are Displayed in Confirmation Order Summary Tiles: ${tc.productDetails} `, async () => {
        await checkoutConfirmationPage.assertNameCostAndBillingFrequencyOnConfirmationPageForAllProducts(tc.productDetails);
      });
      await test.step(`Assert Plan Tiles Displayed on Confirmation Page for: ${tc.productDetails}`, async () => {
        await checkoutConfirmationPage.assertAllPlanTilesOnConfirmationPage(tc.productDetails);
      });
    });
  }
}
