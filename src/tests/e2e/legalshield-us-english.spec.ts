import RegionsUtils from '../../utils/regions.utils';
import { basicUser } from '../../utils/user.utils';
import { test, expect } from '@playwright/test';
import { LegalshieldCoverageAndPricingPage } from '../../page-objects-refactored/marketing-sites/legalshield/legalshield-coverage-and-pricing.page';
import { CommonLoginPage, CommonCheckoutPage } from '@legalshield/frontend-automation-commons';

let legalshieldCoverageAndPricingPage: LegalshieldCoverageAndPricingPage;
let loginPage: CommonLoginPage;
let checkoutPage: CommonCheckoutPage;

test.beforeEach(async ({ page }) => {
  test.setTimeout(120000);
  loginPage = new CommonLoginPage(page);
  legalshieldCoverageAndPricingPage = new LegalshieldCoverageAndPricingPage(page);
  checkoutPage = new CommonCheckoutPage(page);
});

const regionsUnderTest = ['New York'];
for (const regionUnderTest of regionsUnderTest) {
  test(`${regionUnderTest} - Can purchase a plan and supplement in English from legalshield United States @smoke`, async ({ page }) => {
    console.log(`${regionUnderTest} - Can purchase a plan and supplement in English from legalshield United States`);
    const regionInfo = RegionsUtils.usStates.filter((region) => region.name == regionUnderTest)[0];
    const homeAddress = regionInfo.validAddress.street;
    const city = regionInfo.validAddress.city;
    const postalCode = regionInfo.validAddress.postalCode;
    const regionAbbreviation = regionInfo.abbrv;

    await test.step(`Navigate to legalshield pricing and coverage page`, async () => {
      await legalshieldCoverageAndPricingPage.navigateToLegalshieldPricingAndCoveragePage();
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
      // Need to wait for redirect to login service before looking for 'Sign in' link in the next step (the enrollment page has two elements with same tag)
      await page.waitForURL(new RegExp('login'));
      await loginPage.login(basicUser.email, basicUser.password);
    });
    await test.step(`Validate Order Summary on Personal Info Page`, async () => {
      expect(await checkoutPage.locOrderSummaryComponentTotalAmount.innerText()).toContain('$29.95');
    });
    await test.step(`Change Address to match region and continue to Payment Page`, async () => {
      await checkoutPage.changeAddress(homeAddress, city, postalCode);
      await checkoutPage.locPersonalInfoSaveAndContinueButton.click();
    });
    await test.step(`Validate Order Summary on Payment Info Page`, async () => {
      expect(await checkoutPage.locOrderSummaryComponentTotalAmount.innerText()).toContain('$29.95');
    });
    await test.step(`Fill out Bank Draft form and Submit`, async () => {
      await checkoutPage.completeBankDraftFormUnitedStates('1000123546', '103000648', 'Test');
    });
    await test.step(`Assert Confirmation Page URL`, async () => {
      await expect(checkoutPage.locConfirmationPageWelcomeHeader).toBeVisible({ timeout: 100000 });
    });
  });
}
