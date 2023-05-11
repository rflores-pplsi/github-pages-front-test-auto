import { expect, test } from '@playwright/test';
import RegionsUtils from '../../../../utils/regions.utils';
import { basicUser } from '../../../../utils/user.utils';
import { consumerFlowData as consumerFlowLegalshieldData } from './legalshield.data';
import UrlsUtils from '../../../../utils/urls.utils';
import { LegalshieldService } from '../../../../page-objects-refactored/marketing-sites/legalshield/legalshield-service';
import { CommonCheckoutService, CommonLoginService } from '@legalshield/frontend-automation-commons';

let legalshieldService: LegalshieldService;
let commonCheckoutService: CommonCheckoutService;
let commonLoginService: CommonLoginService;

test.beforeEach(async ({ page }) => {
  legalshieldService = new LegalshieldService(page);
  commonLoginService = new CommonLoginService(page);
  commonCheckoutService = new CommonCheckoutService(page);
  test.slow();
});

// LegalShield - US - existing user
for (const testCase of consumerFlowLegalshieldData.filter((testCase) => testCase.disabled == false)) {
  for (const regionUnderTest of testCase.regions) {
    test(`${testCase.testCaseName} - Existing User, ${regionUnderTest}`, async ({ page }) => {
      console.log(`Test Case: ${testCase.testCaseName} - ${regionUnderTest} @ConsumerFlowEndToEnd`);
      const regionInfo = RegionsUtils.usStates.filter((region) => region.name == regionUnderTest)[0];

      await test.step(`Navigate to legalshield.com for ${testCase.market}-${testCase.language}`, async () => {
        await page.goto(UrlsUtils.marketingSitesUrls.legalShieldUSUrl);
      });
      await test.step(`Select Region`, async () => {
        await legalshieldService.marketingSiteFooterComponent.selectRegion(regionInfo.name, regionInfo.abbrv);
      });
      await test.step(`Add Products: ${testCase.productDetails}`, async () => {
        await legalshieldService.addProductsFromProductDetails(testCase.productDetails);
      });
      await test.step(`Login or Sign Up`, async () => {
        // TODO: Move this into a page model. Which?
        if ((testCase.userType = 'New')) {
          const randomEmail = `qatesting+${Math.floor(Math.random() * 1000)}@yopmail.com`;
          await commonLoginService.signUpPage.signUp(randomEmail, 'Password10!');
        } else {
          await commonLoginService.loginPage.login(basicUser.email, basicUser.password);
        }
      });
      await test.step(`Change Address to a valid one for Region: ${regionInfo.name}`, async () => {
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
          '3333333333'
        );
      });
      await test.step(`Verify Order Total in Order Summary`, async () => {
        expect(await commonCheckoutService.personalInfoPage.orderSummaryComponent.locTotalAmount.innerText()).toContain(testCase.termTotal);
      });
      await test.step(`Click Save and Continue Button`, async () => {
        await commonCheckoutService.personalInfoPage.clickSaveAndContinueAndWaitForPaymentPageToLoad();
      });
      await test.step(`Verify Order Total in Order Summary`, async () => {
        expect(await commonCheckoutService.personalInfoPage.orderSummaryComponent.locTotalAmount.innerText()).toContain(testCase.termTotal);
      });
      await test.step(`Click Bank Draft Tab`, async () => {
        await commonCheckoutService.paymentsPage.creditCardComponent.locCreditCardBankDraftToggle.click();
      });
      await test.step(`Fill Bank Draft Form and Submit`, async () => {
        await commonCheckoutService.paymentsPage.bankDraftComponent.completeBankDraftFormUnitedStates('0000000', '000000000', 'Tester');
      });
      await test.step('Click Purchase Button', async () => {
        await commonCheckoutService.paymentsPage.bankDraftComponent.clickPurchaseButtonAndWaitForConfirmationPageToLoad();
      });
      await test.step('Redirected to the Confirmation Page', async () => {
        await expect(commonCheckoutService.confirmationPage.letsGoButton).toBeVisible({ timeout: 100000 });
      });
    });
  }
}
