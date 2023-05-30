import RegionsUtils from '../../utils/regions.utils';
import { test, expect } from '@playwright/test';
import { basicUser } from '../../utils/user.utils';
import { ShieldBenefitsService } from '../../page-objects-refactored/shieldbenefits/shieldbenefits-service';
import { CommonLoginService, CommonCheckoutService } from '@legalshield/frontend-automation-commons';

let shieldBenefitsService: ShieldBenefitsService;
let commonLoginService: CommonLoginService;
let commonCheckoutService: CommonCheckoutService;

test.beforeEach(async ({ context, page }) => {
  shieldBenefitsService = new ShieldBenefitsService(page);
  commonLoginService = new CommonLoginService(page);
  commonCheckoutService = new CommonCheckoutService(context, page);
  test.slow();
});

const regionsUnderTest = ['New York'];
for (const regionUnderTest of regionsUnderTest) {
  test('Shield Benefits (nnlegaltest7, Legal Plan Family) -> Checkout -> Accounts @smoke', async ({ page }) => {
    console.log('Test Case: Shield Benefits (nnlegaltest7, Legal Plan Family) -> Checkout -> Accounts');
    const regionInfo = RegionsUtils.usStates.filter((region) => region.name == regionUnderTest)[0];
    const homeAddress = regionInfo.validAddress.street;
    const city = regionInfo.validAddress.city;
    const postalCode = regionInfo.validAddress.postalCode;

    await test.step(`Navigate to Shield Benefits Enrollment Page for a Group`, async () => {
      await shieldBenefitsService.shieldBenefitsLegalOverviewPage.navigateToShieldBenefitsGroupOverviewPage('nnlegaltest7');
    });
    await test.step(`Navigate to Shield Benefits Enrollment Page for a Group`, async () => {
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
    await test.step(`Log in to reach checkout service`, async () => {
      await commonLoginService.loginPage.login(basicUser.email, basicUser.password);
    });
    await test.step(`Validate Order Summary on Personal Info Page`, async () => {
      expect(await commonCheckoutService.personalInfoPage.orderSummaryComponent.locTotalContainer.innerText()).toContain('$23.95');
    });
    await test.step(`Change Address to match region and continue to Payment Page`, async () => {
      await commonCheckoutService.personalInfoPage.fillRequiredAddressFields(homeAddress, city, postalCode);
    });
    await test.step(`Click Save and Continue Button and wait for Payments Page to load`, async () => {
      await commonCheckoutService.personalInfoPage.clickSaveAndContinueAndWaitForPaymentPageToLoad();
    });
    await test.step(`Validate Order Summary on Payment Info Page`, async () => {
      expect(await commonCheckoutService.paymentsPage.orderSummaryComponent.locTotalContainer.innerText()).toContain('$23.95');
    });

    if (process.env.USE_PROD == 'true') {
      console.log('* Do not finish transaction in PRODUCTION environment. We do not want to create additional memberships');
    } else {
      await test.step(`Click on Bank Draft Toggle`, async () => {
        await commonCheckoutService.paymentsPage.bankDraftComponent.locCreditCardBankDraftToggle.click();
      });
      await test.step(`Fill out Bank Draft form`, async () => {
        await commonCheckoutService.paymentsPage.bankDraftComponent.completeBankDraftFormUnitedStates('1000123546', '103000648', 'Test');
      });
      await test.step(`Click on Purchase button`, async () => {
        await commonCheckoutService.paymentsPage.bankDraftComponent.locPurchaseButton.click();
      });
      await test.step(`Click on the My account option in the header dropdown`, async () => {
        await commonCheckoutService.paymentsPage.globalHeaderComponent.locAccountMenuDropDown.click();
        await commonCheckoutService.paymentsPage.globalHeaderComponent.locAccountMenuMyAccountLink.click();
      });
      await test.step(`Assert Accounts Page URL`, async () => {
        await expect(page).toHaveURL(new RegExp('accounts'));
      });
    }
  });
}
