import RegionsUtils from '../../utils/regions.utils';
import { basicUser } from '../../utils/user.utils';
import { test, expect } from '@playwright/test';
import { IdshieldIndividualPlanPage } from '../../page-objects-refactored/marketing-sites/idshield/idshield-individual-plan.page';
import { CommonLoginPage, CommonCheckoutPage } from '@legalshield/frontend-automation-commons';

let idshieldIndividualPlanPage: IdshieldIndividualPlanPage;
let loginPage: CommonLoginPage;
let checkoutPage: CommonCheckoutPage;

test.beforeEach(async ({ page }) => {
  test.setTimeout(120000);
  loginPage = new CommonLoginPage(page);
  idshieldIndividualPlanPage = new IdshieldIndividualPlanPage(page);
  checkoutPage = new CommonCheckoutPage(page);
});

const regionsUnderTest = ['Alberta'];
for (const regionUnderTest of regionsUnderTest) {
  test(`${regionUnderTest} - Can purchase a plan and supplement in English from legalshield`, async ({ page }) => {
    console.log(`${regionUnderTest} - Can purchase a plan and supplement in English from legalshield`);
    const regionInfo = RegionsUtils.caProvinces.filter((region) => region.name == regionUnderTest)[0];
    const homeAddress = regionInfo.validAddress.street;
    const city = regionInfo.validAddress.city;
    const postalCode = regionInfo.validAddress.postalCode;
    const regionAbbreviation = regionInfo.abbrv;

    await test.step(`Navigate to idshield pricing and coverage page`, async () => {
      await idshieldIndividualPlanPage.navigateToIdshieldIndividualPlanPage('United States', 'English');
    });
    await test.step(`Change Region`, async () => {
      await idshieldIndividualPlanPage.marketingSiteFooterComponent.selectRegion(regionUnderTest, regionAbbreviation);
    });
    await test.step(`Click on the Sign Up button`, async () => {
      await idshieldIndividualPlanPage.clickSignUpButton('1 credit bureau monitoring');
    });
    await test.step(`Click on the Shopping Cart Checkout button`, async () => {
      await idshieldIndividualPlanPage.marketingSiteCartComponent.locCheckoutButton.click();
    });
    await test.step(`Log in to reach checkout service`, async () => {
      await loginPage.login(basicUser.email, basicUser.password);
    });
    await test.step(`Validate Order Summary on Personal Info Page`, async () => {
      expect(await checkoutPage.locOrderSummaryComponentTotalAmount.innerText()).toContain('$14.95');
    });
    await test.step(`Change Address to match region and continue to Payment Page`, async () => {
      await checkoutPage.changeAddress(homeAddress, city, postalCode);
      await checkoutPage.locPersonalInfoSaveAndContinueButton.click();
    });
    await test.step(`Validate Order Summary on Payment Info Page`, async () => {
      expect(await checkoutPage.locOrderSummaryComponentTotalAmount.innerText()).toContain('$14.95');
    });
    await test.step(`Fill out Bank Draft form and Submit`, async () => {
      await checkoutPage.completeBankDraftFormUnitedStates('1000123546', '103000648', 'Test');
    });
    await test.step(`Assert Confirmation Page URL`, async () => {
      await expect(checkoutPage.locConfirmationPageWelcomeHeader).toBeVisible({ timeout: 100000 });
    });
  });
}
