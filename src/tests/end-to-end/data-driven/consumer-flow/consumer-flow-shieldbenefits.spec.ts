import { expect, test } from '@playwright/test';
import RegionsUtils from '../../../../utils/regions.utils';
import { basicUser } from '../../../../utils/user.utils';
import { selfPayData } from './shieldbenefits.data';
import UrlsUtils from '../../../../utils/urls.utils';
import { ShieldBenefitsService } from '../../../../page-objects/shieldbenefits/shieldbenefits-service';
import { CommonCheckoutService, CommonLoginService } from '@legalshield/frontend-automation-commons';

let shieldBenefitsService: ShieldBenefitsService;
let commonCheckoutService: CommonCheckoutService;
let commonLoginService: CommonLoginService;

test.beforeEach(async ({ context, page }) => {
  shieldBenefitsService = new ShieldBenefitsService(page);
  commonLoginService = new CommonLoginService(page);
  commonCheckoutService = new CommonCheckoutService(context, page);
  test.setTimeout(120000);
});

// Self-Pay Configurations - Single Plan
for (const testCase of selfPayData.filter((testCase) => testCase.disabled == false)) {
  for (const regionUnderTest of testCase.regions) {
    test(`ShieldBenefits (${testCase.testCaseName}, ${regionUnderTest}) -> Checkout -> Accounts @e2e @ConsumerFlowShieldBenefits`, async ({
      page,
    }) => {
      console.log(`Test Case: ShieldBenefits (${testCase.testCaseName}, ${regionUnderTest}) -> Checkout -> Accounts`);
      const regionInfo = RegionsUtils.usStates.filter((region) => region.name == regionUnderTest)[0];

      await test.step(`Navigate to Shield Benefits Pricing Page for Group: ${testCase.groupNameOrNumber}`, async () => {
        await page.goto(`${UrlsUtils.shieldBenefits.home.url}/${testCase.groupNameOrNumber}/enrollment`);
      });
      await test.step(`Select State: ${regionUnderTest}`, async () => {
        await shieldBenefitsService.shieldBenefitsLegalEnrollmentPage.selectStateOrProvince(regionUnderTest);
      });
      await test.step(`Check product checkbox for product: ${testCase.productName} with Tier: ${testCase.tierName}`, async () => {
        await shieldBenefitsService.shieldBenefitsLegalEnrollmentPage.checkProductCheckbox(testCase.productName);
      });
      await test.step(`Click Enroll Now for Plan: ${testCase.productName} with Tier: ${testCase.tierName}`, async () => {
        await shieldBenefitsService.shieldBenefitsLegalEnrollmentPage.locBeginEnrollmentButton.click();
      });
      await test.step(`Choose Account by Email and Login`, async () => {
        if (testCase.userType == 'Existing') {
          await commonCheckoutService.accountPage.enterExistingAccountEmailAndLogin(basicUser.email);
          await commonLoginService.whatsYourEmailPage.enterEmailAndContinue(basicUser.email);
          await commonLoginService.loginPage.loginOnlyPassword(basicUser.password);
        }
        if (testCase.userType == 'New') {
          await commonCheckoutService.accountPage.enterRandomEmailAndNewPasswordAndLogin();
        }
      });
      await test.step(`Change Address to a valid one for Region: ${regionInfo.name}`, async () => {
        await commonCheckoutService.personalInfoPage.fillAllNonBusinessFormFields(
          'Test',
          'Tester',
          '5555555555',
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
        expect(await commonCheckoutService.personalInfoPage.orderSummaryComponent.locTotalContainer.innerText()).toContain(testCase.termTotal);
      });
      await test.step(`Click Save and Continue Button`, async () => {
        await commonCheckoutService.personalInfoPage.clickSaveAndContinueAndWaitForPaymentPageToLoad();
      });
      await test.step(`Verify Order Total in Order Summary`, async () => {
        expect(await commonCheckoutService.paymentPage.orderSummaryComponent.locTotalContainer.innerText()).toContain(testCase.termTotal);
      });
      await test.step(`Click Bank Draft Tab`, async () => {
        await commonCheckoutService.paymentPage.creditCardComponent.locCreditCardBankDraftToggle.click();
      });
      await test.step(`Fill Bank Draft Form and Submit`, async () => {
        await commonCheckoutService.paymentPage.bankDraftComponent.completeBankDraftFormUnitedStates('0000000', '000000000', 'Tester');
      });
      await test.step('Click Purchase Button', async () => {
        await commonCheckoutService.paymentPage.bankDraftComponent.clickPurchaseButtonAndWaitForConfirmationPageToLoad();
      });
      await test.step(`Click on Purchase button`, async () => {
        await commonCheckoutService.confirmationPage.locConfirmationScreenContainer.waitFor();
        await expect(commonCheckoutService.confirmationPage.locConfirmationScreenContainer).toBeVisible();
      });
    });
  }
}
