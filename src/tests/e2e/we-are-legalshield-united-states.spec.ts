import { test, expect } from '@playwright/test';
import { WalsAffiliatedPage } from '../../page-objects-refactored/wals/wals-affiliated.page';
import { NewCheckoutInformationPage } from '../../page-objects-refactored/new-checkout/new-checkout-information.page';
import { NewCheckoutPaymentPage } from '../../page-objects-refactored/new-checkout/new-checkout-payment.page';

let walsAffiliatedPage: WalsAffiliatedPage;
let newCheckoutInformationPage: NewCheckoutInformationPage;
let newCheckoutPaymentPage: NewCheckoutPaymentPage;

test.beforeEach(async ({ page }) => {
  walsAffiliatedPage = new WalsAffiliatedPage(page);
  newCheckoutInformationPage = new NewCheckoutInformationPage(page);
  newCheckoutPaymentPage = new NewCheckoutPaymentPage(page);
});

const regionsUnderTest = ['California'];
for (const regionUnderTest of regionsUnderTest) {
  test('User can complete a plan purchase from weareleglshield affiliated site @smoke', async ({ page }) => {
    console.log(`${regionUnderTest} - Can purchase a plan and supplement in English from legalshield United States`);

    await test.step('Navigate to weareleglshield.com', async () => {
      await walsAffiliatedPage.navigateToAffiliatedWalsPage('lspro', 'wearelegalshield', 'com');
    });
    await test.step('Select a region', async () => {
      await walsAffiliatedPage.walsGeolocateMenuComponent.changeRegion(regionUnderTest);
    });
    await test.step('Click on GET A PLAN button', async () => {
      await walsAffiliatedPage.clickOnGetAPlanButton('Legal Plan');
    });
    await test.step('Click Continue button in shopping cart', async () => {
      await walsAffiliatedPage.walsCartComponent.locContinueButton.click();
    });
    await test.step('Click Checkout button in shopping cart', async () => {
      await walsAffiliatedPage.walsCartComponent.locCheckoutButton.click();
    });
    await test.step('Complete Forms on the New Checkout Information Page and continue', async () => {
      await newCheckoutInformationPage.completeContactInformationForm(regionUnderTest, 'test@gmail.com', 'Test', 'Tester', '5555555555', 'Mobile');
      await newCheckoutInformationPage.completeSecurityInformationForm('01012001', '2222');
      await newCheckoutInformationPage.locContinueButton.click();
      // await page.pause();
      // await page.waitForURL(new RegExp(''));
    });
    // await test.step('Complete Forms on the New Checkout Payment Page and continue', async () => {
    //   await newCheckoutPaymentPage.completeCreditCardForm('Tester', '4444333322221111', '01/26', '111');
    //   // await newCheckoutPaymentPage.locPurchaseButton.click();
    //   // await page.pause();
    // });
  });
}
