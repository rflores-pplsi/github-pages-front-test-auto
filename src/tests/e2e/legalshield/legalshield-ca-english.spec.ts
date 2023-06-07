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

const regionsUnderTest = ['Alberta'];
for (const regionUnderTest of regionsUnderTest) {
  test(`Legalshield (Legal Plan, en-CA, ${regionUnderTest}) -> Checkout -> Accounts @smoke`, async ({ page }) => {
    console.log(`Test Case: Legalshield (Legal Plan, en-CA, ${regionUnderTest}) -> Checkout -> Accounts`);
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
      expect(await commonCheckoutService.personalInfoPage.orderSummaryComponent.locTotalContainer.innerText()).toContain('$32.95');
    });
    await test.step(`Update Personal Info to match region`, async () => {
      await commonCheckoutService.personalInfoPage.fillAllNonBusinessFormFields(
        'Automation',
        'Tester',
        '5555555555',
        'Mobile',
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
      expect(await commonCheckoutService.paymentsPage.orderSummaryComponent.locTotalContainer.innerText()).toContain('$32.95');
    });
    await test.step(`Click on the Bank Draft Toggle`, async () => {
      await commonCheckoutService.paymentsPage.bankDraftComponent.locCreditCardBankDraftToggle.click();
    });
    await test.step(`Fill out Bank Draft form`, async () => {
      await commonCheckoutService.paymentsPage.bankDraftComponent.completeBankDraftFormCanada('0000000', '11242', '260', 'Tester');
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
