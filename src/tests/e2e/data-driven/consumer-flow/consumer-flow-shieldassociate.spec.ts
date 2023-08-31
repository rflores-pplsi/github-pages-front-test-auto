import { expect, test } from '@playwright/test';
import RegionsUtils from '../../../../utils/regions.utils';
import { basicUser } from '../../../../utils/user.utils';
import { shieldAssociateData } from './shieldassociate.data';
import UrlsUtils from '../../../../utils/urls.utils';
import { ShieldAssociateService } from '../../../../page-objects-refactored/shieldassociate/shieldassociate-service';
import { CommonCheckoutService, CommonLoginService } from '@legalshield/frontend-automation-commons';
import { CartService } from '../../../../page-objects-refactored/cart/cart-service';

let shieldAssociateService: ShieldAssociateService;
let cartService: CartService;
let commonCheckoutService: CommonCheckoutService;
let commonLoginService: CommonLoginService;

test.beforeEach(async ({ context, page }) => {
  shieldAssociateService = new ShieldAssociateService(context, page);
  cartService = new CartService(context, page);
  commonLoginService = new CommonLoginService(page);
  commonCheckoutService = new CommonCheckoutService(context, page);
  test.setTimeout(120000);
});

for (const testCase of shieldAssociateData.filter((testCase) => testCase.disabled == false)) {
  for (const regionUnderTest of testCase.regions) {
    test(`${testCase.testCaseName}, ${regionUnderTest} -> Checkout -> Accounts @ConsumerFlowShieldAssociates`, async ({ page }) => {
      console.log(`Test Case: ${testCase.testCaseName}, ${regionUnderTest} -> Checkout -> Accounts`);
      const regionInfo = RegionsUtils.usStates.filter((region) => region.name == regionUnderTest)[0];
      await test.step(`Navigate to shieldbenefits.com/BuyNow`, async () => {
        await page.goto(`https://apptestuser.${UrlsUtils.shieldAssociateService.baseUrlNoSubdomain}/BuyNow`);
      });
      await test.step(`Select Market`, async () => {
        await shieldAssociateService.buyNowPage.globalFooterComponent.changeMarket(testCase.market);
      });
      await test.step(`Click the Buy Now button to select plan`, async () => {
        //TODO: Once multiple plans can be selected, update this to loop through the planDetails array
        await shieldAssociateService.buyNowPage.clickBuyNowButtonAndWaitForCartService(
          testCase.planDetails[0].marketingName,
          testCase.planDetails[0].associateRegistrationType
        );
      });
      await test.step(`Select Region`, async () => {
        await cartService.checkoutPage.selectRegion(regionUnderTest);
      });
      await test.step(`Select Supplements`, async () => {
        await cartService.checkoutPage.selectSupplementsOrTier(testCase.planDetails[0].supplementsOrTier);
      });
      await test.step(`Click Continue Button`, async () => {
        await cartService.checkoutPage.locContinueButton.click();
      });
      await test.step(`Login or Sign Up`, async () => {
        if (testCase.userType == 'New') {
          await commonLoginService.signUpPage.signUp();
        } else {
          await commonLoginService.loginPage.login(basicUser.email, basicUser.password);
        }
      });
      await test.step(`Fill all required fields on personal info ${regionInfo.name}`, async () => {
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
        if (await commonCheckoutService.personalInfoPage.locBusinessNameInput.isVisible()) {
          await commonCheckoutService.personalInfoPage.fillBusinessInformationFields('Testers Inc', '10', '10', '2021', '945433337');
        }
      });
      await test.step(`Verify Plans displayed in Order Summary on Personal Info Page`, async () => {
        await commonCheckoutService.personalInfoPage.orderSummaryComponent.assertDisplayedPlansIncludeExpectedData(testCase.planDetails);
      });
      await test.step(`Verify Supplements displayed in Order Summary on Personal Info Page`, async () => {
        await commonCheckoutService.personalInfoPage.orderSummaryComponent.assertDisplayedSupplementsIncludeExpectedData(
          testCase.planDetails[0].supplementsOrTier
        );
      });
      await test.step(`Verify Order Total in Order Summary on Personal Info Page`, async () => {
        expect(await commonCheckoutService.personalInfoPage.orderSummaryComponent.locTotalContainer.innerText()).toContain(testCase.termTotal);
      });
      await test.step(`Click Save and Continue and wait for Payment page`, async () => {
        await commonCheckoutService.personalInfoPage.clickSaveAndContinueAndWaitForPaymentPageToLoad();
      });
      await test.step(`Verify Plans displayed in Order Summary on on Payment Page`, async () => {
        await commonCheckoutService.personalInfoPage.orderSummaryComponent.assertDisplayedPlansIncludeExpectedData(testCase.planDetails);
      });
      await test.step(`Verify Supplements displayed in Order Summary on on Payment Page`, async () => {
        await commonCheckoutService.personalInfoPage.orderSummaryComponent.assertDisplayedSupplementsIncludeExpectedData(
          testCase.planDetails[0].supplementsOrTier
        );
      });
      await test.step(`Verify Order Total in Order Summary on Payment Page`, async () => {
        expect(await commonCheckoutService.paymentPage.orderSummaryComponent.locTotalContainer.innerText()).toContain(testCase.termTotal);
      });
      await test.step('Select Payment Method from Wallet', async () => {
        await commonCheckoutService.paymentPage.clickFirstPaymentMethodFromWallet();
      });
      await test.step('Click Purchase Button and wait for Confirmation Page', async () => {
        await commonCheckoutService.paymentPage.clickPurchaseButtonAndWaitForConfirmationPageToLoad();
      });
      await test.step(`Verify Plan Membership Tile`, async () => {
        await commonCheckoutService.confirmationPage.assertMembershipTitleDisplayed(testCase.planDetails[0].type);
      });
      await test.step(`Verify Plan Details in Confirmation Page Order Summary`, async () => {
        await commonCheckoutService.confirmationPage.assertDisplayedProductsIncludeExpectedData(testCase.planDetails);
      });
      await test.step(`Click on the My account option in the header dropdown`, async () => {
        await commonCheckoutService.confirmationPage.locLetsGoButton.click();
      });
      await test.step(`Assert Accounts Page URL`, async () => {
        await expect(page).toHaveURL(new RegExp('accounts'));
      });
    });
  }
}
