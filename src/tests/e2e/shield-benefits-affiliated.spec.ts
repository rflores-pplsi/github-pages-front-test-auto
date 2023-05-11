import RegionsUtils from '../../utils/regions.utils';
import { test, expect } from '@playwright/test';
import { basicUser } from '../../utils/user.utils';
import { ShieldBenefitsLegalOverviewPage } from '../../page-objects-refactored/shield-benefits-legal-overview.page';
import { ShieldBenefitsLegalEnrollmentPage } from '../../page-objects-refactored/shield-benefits-legal-enrollment.page';
import { CommonLoginService, CommonCheckoutService } from '@legalshield/frontend-automation-commons';
import * as dotenv from 'dotenv';
dotenv.config();

let shieldBenefitsLegalOverviewPage: ShieldBenefitsLegalOverviewPage;
let shieldBenefitsLegalEnrollmentPage: ShieldBenefitsLegalEnrollmentPage;
let commonLoginService: CommonLoginService;
let commonCheckoutService: CommonCheckoutService;

test.beforeEach(async ({ page }) => {
  shieldBenefitsLegalOverviewPage = new ShieldBenefitsLegalOverviewPage(page);
  shieldBenefitsLegalEnrollmentPage = new ShieldBenefitsLegalEnrollmentPage(page);
  commonLoginService = new CommonLoginService(page);
  commonCheckoutService = new CommonCheckoutService(page);
  test.slow();
});

const regionsUnderTest = ['New York'];
for (const regionUnderTest of regionsUnderTest) {
  test('Can navigate to checkout service from a shield benefits affiliated page @smoke', async ({ page }) => {
    console.log('Can navigate to checkout service from a shield benefits affiliated page');
    const regionInfo = RegionsUtils.usStates.filter((region) => region.name == regionUnderTest)[0];
    const homeAddress = regionInfo.validAddress.street;
    const city = regionInfo.validAddress.city;
    const postalCode = regionInfo.validAddress.postalCode;

    await test.step(`Navigate to Shield Benefits Enrollment Page for a Group`, async () => {
      await shieldBenefitsLegalOverviewPage.navigateToShieldBenefitsGroupOverviewPage('nnlegaltest7');
    });
    await test.step(`Navigate to Shield Benefits Enrollment Page for a Group`, async () => {
      await shieldBenefitsLegalOverviewPage.locEnrollNowButton.click();
    });
    await test.step(`Select State`, async () => {
      await shieldBenefitsLegalEnrollmentPage.selectStateOrProvince(regionInfo.name);
    });
    //TODO: Figure out how to select on the new select plan interface
    //   await test.step(`Click Select button to choose a plan`, async () => {
    //     await shieldBenefitsLegalEnrollmentPage.clickSelectButton('Legal Plan Family');
    //   });
    //   await test.step(`Log in to reach checkout service`, async () => {
    //     await loginPage.login(basicUser.email, basicUser.password);
    //   });
    //   await test.step(`Validate Order Summary on Personal Info Page`, async () => {
    //     expect(await checkoutPage.locOrderSummaryComponentTotalAmount.innerText()).toContain('$23.95');
    //   });
    //   await test.step(`Change Address to match region and continue to Payment Page`, async () => {
    //     await checkoutPage.changeAddress(homeAddress, city, postalCode);
    //     await checkoutPage.locPersonalInfoSaveAndContinueButton.click();
    //   });
    //   await test.step(`Validate Order Summary on Payment Info Page`, async () => {
    //     expect(await checkoutPage.locOrderSummaryComponentTotalAmount.innerText()).toContain('$23.95');
    //   });

    if (process.env.USE_PROD == 'true') {
      console.log('Do not finish transaction in PRODUCTION environment. We do not want to create additional memberships');
    } else {
      await test.step(`Fill out Bank Draft form and Submit`, async () => {
        await commonCheckoutService.paymentsPage.bankDraftComponent.completeBankDraftFormUnitedStates('1000123546', '103000648', 'Test');
      });
      await test.step(`Assert Confirmation Page URL`, async () => {
        await expect(page).toHaveURL(new RegExp('checkout'));
      });
      await test.step(`Click on the Let's go button`, async () => {
        await commonCheckoutService.confirmationPage.letsGoButton.click();
      });
      await test.step(`Assert Accounts Page URL`, async () => {
        await expect(page).toHaveURL(new RegExp('accounts'));
      });
    }
  });
}
