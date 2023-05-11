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

const regionsUnderTest = ['Alberta'];
for (const regionUnderTest of regionsUnderTest) {
  test(`${regionUnderTest} - Can purchase any legalshield plan for market=en-CA @smoke`, async ({ page }) => {
    console.log(`${regionUnderTest} - Can purchase any legalshield plan for market=en-CA`);
    const regionInfo = RegionsUtils.caFrenchProvinces.filter((region) => region.name == regionUnderTest)[0];
    const homeAddress = regionInfo.validAddress.street;
    const city = regionInfo.validAddress.city;
    const postalCode = regionInfo.validAddress.postalCode;
    const regionAbbreviation = regionInfo.abbrv;

    await test.step(`Navigate to legalshield pricing and coverage page`, async () => {
      await legalshieldCoverageAndPricingPage.navigateToLegalshieldPricingAndCoveragePage('CA', 'en');
    });
    await test.step(`Change Canadian Region`, async () => {
      await legalshieldCoverageAndPricingPage.changeCanadianRegion(regionUnderTest, regionAbbreviation);
    });
    await test.step(`Click on the Get Started button`, async () => {
      await legalshieldCoverageAndPricingPage.locCanadaGetStartedButton.click();
    });
    await test.step(`Click on the Shopping Cart Checkout button`, async () => {
      await legalshieldCoverageAndPricingPage.marketingSiteCartComponent.locCheckoutButton.click();
    });
    await test.step(`Log in to reach checkout service`, async () => {
      await commonLoginService.loginPage.login(basicUser.email, basicUser.password);
    });
    await test.step(`Validate Order Summary on Personal Info Page`, async () => {
      expect(await commonCheckoutService.personalInfoPage.orderSummaryComponent.locTotalAmount.innerText()).toContain('$32.95');
    });
    await test.step(`Change Address to match region and continue to Payment Page`, async () => {
      await commonCheckoutService.personalInfoPage.fillRequiredAddressFields(homeAddress, city, postalCode);
      await commonCheckoutService.personalInfoPage.locSaveAndContinueButton.click();
    });
    await test.step(`Validate Order Summary on Payment Info Page`, async () => {
      expect(await commonCheckoutService.paymentsPage.orderSummaryComponent.locTotalAmount.innerText()).toContain('$32.95');
    });
    await test.step(`Click on the Bank Draft Toggle`, async () => {
      await commonCheckoutService.paymentsPage.bankDraftComponent.locCreditCardBankDraftToggle.click();
    });
    await test.step(`Fill out Bank Draft form and Submit`, async () => {
      await commonCheckoutService.paymentsPage.bankDraftComponent.completeBankDraftFormCanada('0000000', '11242', '260', 'Tester');
    });
    await test.step(`Click on the Purchase button`, async () => {
      await commonCheckoutService.paymentsPage.bankDraftComponent.locPurchaseButton.click();
    });
    await test.step(`Click on the Let's go button`, async () => {
      await commonCheckoutService.confirmationPage.letsGoButton.click();
    });
    await test.step(`Assert Accounts Page URL`, async () => {
      await expect(page).toHaveURL(new RegExp('accounts'));
    });
  });
}
