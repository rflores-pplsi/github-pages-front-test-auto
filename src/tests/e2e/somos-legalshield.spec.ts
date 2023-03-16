import RegionsUtils from '../../utils/regions.utils';
import { test, expect } from '@playwright/test';
import { WalsAffiliatedPage } from '../../page-objects-refactored/wals/wals-affiliated.page';
import { NewCheckoutInformationPage } from '../../page-objects-refactored/new-checkout/new-checkout-information.page';

let walsAffiliatedPage: WalsAffiliatedPage;
let newCheckoutInformationPage: NewCheckoutInformationPage;

test.beforeEach(async ({ page }) => {
  walsAffiliatedPage = new WalsAffiliatedPage(page);
  newCheckoutInformationPage = new NewCheckoutInformationPage(page);
});

const regionsUnderTest = ['California'];
for (const regionUnderTest of regionsUnderTest) {
  test('User can complete a plan purchase from somoslegalshield affiliated site @smoke', async ({ page }) => {
    console.log(`${regionUnderTest} - Can purchase a plan from somoslegalshield`);

    await test.step('Navigate to somoslegalshield.com', async () => {
      await walsAffiliatedPage.navigateToAffiliatedWalsPage('lspro', 'somoslegalshield', 'com');
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
      await newCheckoutInformationPage.completeContactInformationForm(regionUnderTest, 'test@gmail.com', 'Test', 'Tester', '5555555555', 'Móvil');
      await newCheckoutInformationPage.completeSecurityInformationForm('01012001', '2222');
      await newCheckoutInformationPage.locContinueButton.click();
      await page.pause();
    });
  });
}
