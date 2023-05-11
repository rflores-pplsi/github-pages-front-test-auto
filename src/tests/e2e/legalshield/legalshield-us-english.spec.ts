import RegionsUtils from '../../../utils/regions.utils';
import { basicUser } from '../../../utils/user.utils';
import { test, expect } from '@playwright/test';
import { LegalshieldCoverageAndPricingPage } from '../../../page-objects-refactored/marketing-sites/legalshield/legalshield-coverage-and-pricing.page';
import { CommonLoginService, CommonCheckoutService } from '@legalshield/frontend-automation-commons';

let legalshieldCoverageAndPricingPage: LegalshieldCoverageAndPricingPage;
let commonLoginService: CommonLoginService;
let commonCheckoutService: CommonCheckoutService;

test.beforeEach(async ({ page }) => {
  test.setTimeout(120000);
  commonLoginService = new CommonLoginService(page);
  legalshieldCoverageAndPricingPage = new LegalshieldCoverageAndPricingPage(page);
  commonCheckoutService = new CommonCheckoutService(page);
});

const regionsUnderTest = ['New York'];
for (const regionUnderTest of regionsUnderTest) {
  test(`${regionUnderTest} - Can purchase any legalshield plan for market=en-US @smoke`, async ({ page }) => {
    console.log(`${regionUnderTest} - Can purchase any legalshield plan for market=en-US`);
    const regionInfo = RegionsUtils.usStates.filter((region) => region.name == regionUnderTest)[0];
    const homeAddress = regionInfo.validAddress.street;
    const city = regionInfo.validAddress.city;
    const postalCode = regionInfo.validAddress.postalCode;
    const regionAbbreviation = regionInfo.abbrv;

    await test.step(`Navigate to legalshield pricing and coverage page`, async () => {
      await legalshieldCoverageAndPricingPage.navigateToLegalshieldPricingAndCoveragePage('US', 'es');
    });
    await test.step(`Change Region`, async () => {
      await legalshieldCoverageAndPricingPage.marketingSiteFooterComponent.selectRegion(regionUnderTest, regionAbbreviation);
    });
    await test.step(`Click on the Start Monthly Plan button`, async () => {
      await legalshieldCoverageAndPricingPage.clickStartPlanButton('Monthly');
    });
    await test.step(`Click on the Shopping Cart Checkout button`, async () => {
      await legalshieldCoverageAndPricingPage.marketingSiteCartComponent.locCheckoutButton.click();
    });
    await test.step(`Log in to reach checkout service`, async () => {
      await commonLoginService.loginPage.login(basicUser.email, basicUser.password);
    });
    await test.step(`Validate Order Summary on Personal Info Page`, async () => {
      expect(await commonCheckoutService.personalInfoPage.orderSummaryComponent.locTotalAmount.innerText()).toContain('$29.95');
    });
    await test.step(`Change Address to match region and continue to Payment Page`, async () => {
      await commonCheckoutService.personalInfoPage.fillRequiredAddressFields(homeAddress, city, postalCode);
      await commonCheckoutService.personalInfoPage.locSaveAndContinueButton.click();
    });
    await test.step(`Validate Order Summary on Payment Info Page`, async () => {
      expect(await commonCheckoutService.paymentsPage.orderSummaryComponent.locTotalAmount.innerText()).toContain('$29.95');
    });
    await test.step(`Fill out Bank Draft form and Submit`, async () => {
      await commonCheckoutService.paymentsPage.bankDraftComponent.completeBankDraftFormUnitedStates('1000123546', '103000648', 'Test');
    });
    await test.step(`Assert Confirmation Page URL`, async () => {
      await expect(page).toHaveURL(new RegExp('checkout'));
    });
    await test.step(`Click on the Let's go button`, async () => {
      await commonCheckoutService.confirmationPage.letsGoButton.click();
    });
    await test.step(`Assert Accounts Page URL`, async () => {
      await expect(page).toHaveURL(new RegExp('accounts'));
    });
  });
}
