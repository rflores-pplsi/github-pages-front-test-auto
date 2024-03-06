import RegionsUtils from '../../../../utils/regions.utils';
import { basicUser } from '../../../../utils/user.utils';
import { expect } from '@playwright/test';
import { test } from '../../../../fixtures/frontend-ui.fixture';

const regionsUnderTest = ['California'];
for (const regionUnderTest of regionsUnderTest) {
  test(`LegalShield (Legal Plan, es-US, ${regionUnderTest}) -> Checkout -> Accounts @smoke `, async ({
    page,
    legalshieldService,
    commonLoginService,
    commonCheckoutService,
  }) => {
    console.log(`Test Case: LegalShield (Legal Plan, es-US, ${regionUnderTest}) -> Checkout -> Accounts`);
    test.setTimeout(120000);
    const regionInfo = RegionsUtils.usStates.filter((region) => region.name == regionUnderTest)[0];
    const homeAddress = regionInfo.validAddress.street;
    const city = regionInfo.validAddress.city;
    const postalCode = regionInfo.validAddress.postalCode;
    const regionAbbreviation = regionInfo.abbrv;

    await test.step(`Navigate to legalshield pricing and coverage page`, async () => {
      await legalshieldService.legalshieldCoverageAndPricingPage.navigateToLegalshieldPricingAndCoveragePage('US', 'es');
      await page.waitForTimeout(1000);
    });
    await test.step(`Click on the Start Monthly Plan button`, async () => {
      await legalshieldService.legalshieldCoverageAndPricingPage.clickSpanishStartPlanButton('mensual');
    });
    await test.step(`Click on the Shopping Cart Checkout button`, async () => {
      await legalshieldService.legalshieldCoverageAndPricingPage.marketingSiteCartComponent.locCheckoutButton.click();
    });
    await test.step(`Choose Account by Email`, async () => {
      await commonCheckoutService.accountPage.locEmailAddressInput.fill(basicUser.email);
      await commonCheckoutService.accountPage.locContinueButton.click();
      await commonCheckoutService.accountPage.locClickHereToLoginButton.click();
      await commonLoginService.whatsYourEmailPage.locEmailAddressInput.fill(basicUser.email);
      await commonLoginService.whatsYourEmailPage.locContinueButton.click();
    });
    await test.step(`Log in with only password to reach checkout service`, async () => {
      await commonLoginService.loginPage.loginOnlyPassword(basicUser.password);
    });
    await test.step(`Validate Order Summary on Personal Info Page`, async () => {
      expect(await commonCheckoutService.personalInfoPage.orderSummaryComponent.locTotalContainer.innerText()).toContain('$29.95');
    });
    if (process.env.USE_PROD == 'true') {
      console.log('* Production: Stop test at personal info page *');
      await test.step(`Assert Checkout Service Reached`, async () => {
        await commonCheckoutService.personalInfoPage.stepperComponent.locStepCircle1Current.isVisible();
      });
    } else {
      await test.step(`Update Personal Info to match region`, async () => {
        await commonCheckoutService.personalInfoPage.fillAllNonBusinessFormFields(
          'LegalShieldESUS',
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
        expect(await commonCheckoutService.paymentPage.orderSummaryComponent.locTotalContainer.innerText()).toContain('$29.95');
      });
      await test.step(`Click on the Bank Draft Toggle`, async () => {
        await commonCheckoutService.paymentPage.bankDraftComponent.locCreditCardBankDraftToggle.click();
      });
      await test.step(`Fill out Bank Draft form`, async () => {
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
    }
  });
}
