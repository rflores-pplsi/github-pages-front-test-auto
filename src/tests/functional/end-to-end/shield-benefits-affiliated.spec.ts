import RegionsUtils from '../../../utils/regions.utils';
import { expect } from '@playwright/test';
import { basicUser } from '../../../utils/user.utils';
import { test } from '../../../fixtures/frontend-ui.fixture';

const regionsUnderTest = ['New York'];
for (const regionUnderTest of regionsUnderTest) {
  test('Shield Benefits (nnlegaltest7, Legal Plan Family) -> Checkout -> Accounts @smoke @e2e', async ({
    shieldBenefitsService,
    commonCheckoutService,
    commonLoginService,
  }) => {
    console.log('Test Case: Shield Benefits (nnlegaltest7, Legal Plan Family) -> Checkout -> Accounts');
    test.slow();
    const regionInfo = RegionsUtils.usStates.filter((region) => region.name == regionUnderTest)[0];
    const homeAddress = regionInfo.validAddress.street;
    const city = regionInfo.validAddress.city;
    const postalCode = regionInfo.validAddress.postalCode;

    await test.step(`Navigate to Shield Benefits Enrollment Page for a Group`, async () => {
      await shieldBenefitsService.shieldBenefitsLegalOverviewPage.navigateToShieldBenefitsGroupOverviewPage('nnlegaltest7');
    });
    await test.step(`Click Enroll Now button`, async () => {
      await shieldBenefitsService.shieldBenefitsLegalOverviewPage.locEnrollNowButton.click();
    });
    await test.step(`Select State`, async () => {
      await shieldBenefitsService.shieldBenefitsLegalEnrollmentPage.selectStateOrProvince(regionInfo.name);
    });
    await test.step(`Click Select button to choose a plan`, async () => {
      await shieldBenefitsService.shieldBenefitsLegalEnrollmentPage.checkProductCheckbox('Legal Plan Family');
    });
    await test.step(`Click the Begin Enrollment Button`, async () => {
      await shieldBenefitsService.shieldBenefitsLegalEnrollmentPage.locBeginEnrollmentButton.click();
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
      expect(await commonCheckoutService.personalInfoPage.orderSummaryComponent.locTotalContainer.innerText()).toContain('$23.95');
    });
    await test.step(`Update Personal Info to match region`, async () => {
      await commonCheckoutService.personalInfoPage.fillAllNonBusinessFormFields(
        'ShieldBenefits',
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
    await test.step(`Click Save and Continue Button and wait for Payments Page to load`, async () => {
      await commonCheckoutService.personalInfoPage.clickSaveAndContinueAndWaitForPaymentPageToLoad();
    });
    await test.step(`Validate Order Summary on Payment Info Page`, async () => {
      expect(await commonCheckoutService.paymentPage.orderSummaryComponent.locTotalContainer.innerText()).toContain('$23.95');
    });

    if (process.env.USE_PROD == 'true') {
      console.log('* Do not finish transaction in PRODUCTION environment. We do not want to create additional memberships');
    } else {
      await test.step(`Click on Bank Draft Toggle`, async () => {
        await commonCheckoutService.paymentPage.bankDraftComponent.locCreditCardBankDraftToggle.click();
      });
      await test.step(`Fill out Bank Draft form`, async () => {
        await commonCheckoutService.paymentPage.bankDraftComponent.completeBankDraftFormUnitedStates('1000123546', '103000648', 'Test');
      });
      if (process.env.USE_PROD == 'true') {
        console.log('* Do not finish transaction in PRODUCTION environment *');
      } else {
        await test.step(`Click on Purchase button`, async () => {
          await commonCheckoutService.paymentPage.bankDraftComponent.locPurchaseButton.click();
        });
        await test.step(`Click on Purchase button`, async () => {
          await commonCheckoutService.confirmationPage.locConfirmationScreenContainer.waitFor();
          await expect(commonCheckoutService.confirmationPage.locConfirmationScreenContainer).toBeVisible();
        });
        //TODO: uncomment if myaccounts dropdown re-implemented on page
        // await test.step(`Click on the My account option in the header dropdown`, async () => {
        //   await commonCheckoutService.paymentPage.globalHeaderComponent.locAccountMenuDropDown.click();
        //   await commonCheckoutService.paymentPage.globalHeaderComponent.locAccountMenuMyAccountLink.click();
        // });
        // await test.step(`Assert Accounts Page URL`, async () => {
        //   await expect(page).toHaveURL(new RegExp('accounts'));
        // });
      }
    }
  });
}
