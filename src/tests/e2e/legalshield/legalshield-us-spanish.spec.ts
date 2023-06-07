import RegionsUtils from '../../../utils/regions.utils';
import { basicUser } from '../../../utils/user.utils';
import { test, expect } from '@playwright/test';
import { LegalshieldCoverageAndPricingPage } from '../../../page-objects-refactored/marketing-sites/legalshield/legalshield-coverage-and-pricing.page';
import { CommonLoginService, CommonCheckoutService } from '@legalshield/frontend-automation-commons';

let legalshieldCoverageAndPricingPage: LegalshieldCoverageAndPricingPage;
let commonLoginService: CommonLoginService;
let commonCheckoutService: CommonCheckoutService;

test.beforeEach(async ({ context, page }) => {
  test.setTimeout(120000);
  commonLoginService = new CommonLoginService(page);
  legalshieldCoverageAndPricingPage = new LegalshieldCoverageAndPricingPage(page);
  commonCheckoutService = new CommonCheckoutService(context, page);
});

const regionsUnderTest = ['California'];
for (const regionUnderTest of regionsUnderTest) {
  test(`LegalShield (Legal Plan, es-US, ${regionUnderTest}) -> Checkout -> Accounts @smoke`, async ({ page }) => {
    console.log(`Test Case: LegalShield (Legal Plan, es-US, ${regionUnderTest}) -> Checkout -> Accounts`);
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
      expect(await commonCheckoutService.personalInfoPage.orderSummaryComponent.locTotalContainer.innerText()).toContain('$29.95');
    });
    await test.step(`Update Personal Info to match region`, async () => {
      await commonCheckoutService.personalInfoPage.fillAllNonBusinessFormFields(
        'Automation',
        'Tester',
        '5555555555',
        'Móvil',
        homeAddress,
        city,
        postalCode,
        '10',
        '10',
        '2001',
        '3333'
      );
    });
    await test.step(`Click Save and Continue and wait for Payment page to load`, async () => {
      await commonCheckoutService.personalInfoPage.clickSaveAndContinueAndWaitForPaymentPageToLoad();
    });
    await test.step(`Validate Order Summary on Payment Info Page`, async () => {
      expect(await commonCheckoutService.paymentsPage.orderSummaryComponent.locTotalContainer.innerText()).toContain('$29.95');
    });
    await test.step(`Click on the Bank Draft Toggle`, async () => {
      await commonCheckoutService.paymentsPage.bankDraftComponent.locCreditCardBankDraftToggle.click();
    });
    await test.step(`Fill out Bank Draft form`, async () => {
      await commonCheckoutService.paymentsPage.bankDraftComponent.completeBankDraftFormUnitedStates('1000123546', '103000648', 'Test');
    });
    await test.step(`Click on the Purchase button`, async () => {
      await commonCheckoutService.paymentsPage.bankDraftComponent.locPurchaseButton.click();
    });
    await test.step(`Click on the My account option in the header dropdown`, async () => {
      await commonCheckoutService.paymentsPage.globalHeaderComponent.navigateToAccountsProfilePageThroughMyAccountsLink();
    });
    await test.step(`Assert Accounts Page URL`, async () => {
      await expect(page).toHaveURL(new RegExp('accounts'));
    });
  });
}
