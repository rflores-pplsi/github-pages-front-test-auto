import RegionsUtils from '../../../../utils/regions.utils';
import { basicUser } from '../../../../utils/user.utils';
import { expect } from '@playwright/test';
import { test } from '../../../../fixtures/frontend-ui.fixture';

const regionsUnderTest = ['California'];
for (const regionUnderTest of regionsUnderTest) {
  test(`IdShield (1 credit bureau monitoring, en-US, ${regionUnderTest}) -> Checkout -> Accounts @smoke @super-smoke`, async ({
    page,
    idshieldService,
    commonCheckoutService,
    commonLoginService,
  }) => {
    console.log(`Test Case: IdShield (1 credit bureau monitoring, en-US, ${regionUnderTest}) -> Checkout -> Accounts`);
    test.setTimeout(120000);
    const regionInfo = RegionsUtils.usStates.filter((region) => region.name == regionUnderTest)[0];
    const regionAbbreviation = regionInfo.abbrv;
    await test.step(`Navigate to idshield pricing and coverage page`, async () => {
      await idshieldService.idshieldIndividualPlanPage.navigateToIdshieldIndividualPlanPage();
    });
    await test.step(`Change Region`, async () => {
      await idshieldService.idshieldIndividualPlanPage.marketingSiteFooterComponent.selectRegion(regionUnderTest, regionAbbreviation);
    });
    await test.step(`Click on the Sign Up button`, async () => {
      await idshieldService.idshieldIndividualPlanPage.clickSignUpButton('1 credit bureau monitoring');
    });
    await test.step(`Click on the Shopping Cart Checkout button`, async () => {
      await idshieldService.idshieldIndividualPlanPage.marketingSiteCartComponent.locCheckoutButton.click();
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
      expect(await commonCheckoutService.personalInfoPage.orderSummaryComponent.locTotalContainer.innerText()).toContain('$14.95');
    });
    if (process.env.USE_PROD == 'true') {
      console.log('* Production: Stop test at personal info page *');
      await test.step(`Assert Checkout Service Reached`, async () => {
        await commonCheckoutService.personalInfoPage.stepperComponent.locStepCircle1Current.isVisible();
      });
    } else {
      await test.step(`Fill all required fields on personal info ${regionInfo.name}`, async () => {
        await commonCheckoutService.personalInfoPage.fillAllNonBusinessFormFields(
          'IDShieldUS',
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
    }
  });
}
