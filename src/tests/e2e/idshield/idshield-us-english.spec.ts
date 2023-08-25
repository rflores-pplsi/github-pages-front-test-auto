import RegionsUtils from '../../../utils/regions.utils';
import { basicUser } from '../../../utils/user.utils';
import { test, expect } from '@playwright/test';
import { IdshieldIndividualPlanPage } from '../../../page-objects-refactored/marketing-sites/idshield/idshield-individual-plan.page';
import { CommonLoginService, CommonCheckoutService } from '@legalshield/frontend-automation-commons';

let idshieldIndividualPlanPage: IdshieldIndividualPlanPage;
let commonLoginService: CommonLoginService;
let commonCheckoutService: CommonCheckoutService;

test.beforeEach(async ({ context, page }) => {
  test.setTimeout(120000);
  commonLoginService = new CommonLoginService(page);
  idshieldIndividualPlanPage = new IdshieldIndividualPlanPage(page);
  commonCheckoutService = new CommonCheckoutService(context, page);
});

const regionsUnderTest = ['California'];
for (const regionUnderTest of regionsUnderTest) {
  test(`IdShield (1 credit bureau monitoring, en-US, ${regionUnderTest}) -> Checkout -> Accounts @smoke`, async ({ page }) => {
    console.log(`Test Case: IdShield (1 credit bureau monitoring, en-US, ${regionUnderTest}) -> Checkout -> Accounts`);
    const regionInfo = RegionsUtils.usStates.filter((region) => region.name == regionUnderTest)[0];
    const homeAddress = regionInfo.validAddress.street;
    const city = regionInfo.validAddress.city;
    const postalCode = regionInfo.validAddress.postalCode;
    const regionAbbreviation = regionInfo.abbrv;

    await test.step(`Navigate to idshield pricing and coverage page`, async () => {
      await idshieldIndividualPlanPage.navigateToIdshieldIndividualPlanPage();
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
      await commonLoginService.loginPage.login(basicUser.email, basicUser.password);
    });
    await test.step(`Validate Order Summary on Personal Info Page`, async () => {
      expect(await commonCheckoutService.personalInfoPage.orderSummaryComponent.locTotalContainer.innerText()).toContain('$14.95');
    });
    test.step(`Fill all required fields on personal info ${regionInfo.name}`, async () => {
      await commonCheckoutService.personalInfoPage.fillAllNonBusinessFormFields(
        'Test',
        'Tester',
        '5555555555',
        'Mobile',
        regionInfo.validAddress.street,
        regionInfo.validAddress.city,
        regionInfo.validAddress.postalCode,
        '10',
        '10',
        '1990',
        '3333'
      );
    });
    await test.step(`Click Save and Continue Button`, async () => {
      //TODO: remove this wait after figuring out what exactly is interrupting button click
      await page.waitForTimeout(3000);
      await commonCheckoutService.personalInfoPage.clickSaveAndContinueAndWaitForPaymentPageToLoad();
    });
    await test.step(`Validate Order Summary on Payment Info Page`, async () => {
      expect(await commonCheckoutService.paymentPage.orderSummaryComponent.locTotalContainer.innerText()).toContain('$14.95');
    });
    await test.step(`Click on the Bank Draft Toggle`, async () => {
      await commonCheckoutService.paymentPage.bankDraftComponent.locCreditCardBankDraftToggle.click();
    });
    await test.step(`Fill out Bank Draft form and Submit`, async () => {
      await commonCheckoutService.paymentPage.bankDraftComponent.completeBankDraftFormUnitedStates('1000123546', '103000648', 'Test');
    });
    await test.step(`Click on the Purchase button`, async () => {
      await commonCheckoutService.paymentPage.bankDraftComponent.locPurchaseButton.click();
    });
    await test.step(`Click Let's Go Link`, async () => {
      await commonCheckoutService.paymentPage.confirmationPage.locLetsGoButton.click();
    });
    await test.step(`Assert Accounts Page URL`, async () => {
      await expect(page).toHaveURL(new RegExp('accounts'));
    });
  });
}
