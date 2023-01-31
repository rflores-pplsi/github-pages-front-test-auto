import RegionsUtils from '../../utils/regions.utils';
import UrlsUtils from '../../utils/urls.utils';
import { basicUser } from '../../utils/user.utils';
import { test, expect } from '@playwright/test';
import { CommonLoginPage, CommonTestHarnessPage, CommonCheckoutPage } from '@legalshield/frontend-automation-commons';

let loginPage: CommonLoginPage;
let testHarnessPage: CommonTestHarnessPage;
let checkoutPage: CommonCheckoutPage;

test.beforeEach(async ({ page }) => {
  test.setTimeout(120000);
  loginPage = new CommonLoginPage(page);
  testHarnessPage = new CommonTestHarnessPage(page);
  checkoutPage = new CommonCheckoutPage(page);
});

const regionsUnderTest = ['New York', 'Colorado', 'Florida'];
for (const regionUnderTest of regionsUnderTest) {
  test.only(`${regionUnderTest} - Consumer end to end using frontend-automation-commons functionality`, async ({ page }) => {
    console.log(`${regionUnderTest} - Consumer end to end using frontend-automation-commons functionality`);
    const regionInfo = RegionsUtils.usStates.filter((region) => region.name == regionUnderTest)[0];
    const homeAddress = regionInfo.validAddress.street;
    const city = regionInfo.validAddress.city;
    const postalCode = regionInfo.validAddress.postalCode;
    // TODO: Convert Test Harness to Marketing sites when appropriate
    await test.step(`Navigate to Test Harness Menu Page`, async () => {
      await page.goto(UrlsUtils.testHarnessUrls.legalShield.url);
    });
    await test.step(`Change Region`, async () => {
      await testHarnessPage.changeRegion(regionUnderTest);
    });
    await test.step(`Add products to cart and click checkout`, async () => {
      await testHarnessPage.addProductsByNameAndShortCode([{ name: 'Legal Plan', shortCode: 'LPUS21' }]);
      await testHarnessPage.testHarnessCartModalLocCheckoutButton.click();
    });
    await test.step(`Log in to reach checkout service`, async () => {
      await loginPage.login(basicUser.email, basicUser.password);
    });
    await test.step(`Validate Order Summary on Personal Info Page`, async () => {
      // TODO: await checkoutPage.captureOrderSummary();
      // await checkoutPage.validateOrderSummaryPlansAndCosts(expectedPlansCosts);
      expect(await checkoutPage.locOrderSummaryComponentTotalAmount.innerText()).toContain('$29.95');
    });
    await test.step(`Change Address to match region and continue to Payment Page`, async () => {
      await checkoutPage.changeAddress(homeAddress, city, postalCode);
      await checkoutPage.locPersonalInfoSaveAndContinueButton.click();
    });
    await test.step(`Validate Order Summary on Payment Info Page`, async () => {
      // TODO: await checkoutPage.captureOrderSummary();
      // await checkoutPage.validateOrderSummaryPlansAndCosts(expectedPlansCosts);
      expect(await checkoutPage.locOrderSummaryComponentTotalAmount.innerText()).toContain('$29.95');
    });
    await test.step(`Fill out Bank Draft form and Submit`, async () => {
      await checkoutPage.completeBankDraftFormUnitedStates('1000123546', '103000648', 'Test');
    });

    await test.step(`Assert Confirmation Page URL`, async () => {
      //TODO: add Confirmation Page Assertions after new confirmation page is finished
      await expect(checkoutPage.locConfirmationPageWelcomeHeader).toBeVisible({ timeout: 100000 });
    });
  });
}
