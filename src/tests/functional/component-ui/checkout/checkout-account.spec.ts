import { test, expect } from '@playwright/test';
import { basicUser } from '../../../../utils/user.utils';
import { LegalshieldCoverageAndPricingPage } from '../../../../page-objects/marketing-sites/legalshield/legalshield-coverage-and-pricing.page';
import { CommonLoginService, CommonCheckoutService } from '@legalshield/frontend-automation-commons';

let legalshieldCoverageAndPricingPage: LegalshieldCoverageAndPricingPage;
let commonCheckoutService: CommonCheckoutService;
let commonLoginService: CommonLoginService;
test.beforeEach(async ({ context, page }) => {
  test.slow();
  legalshieldCoverageAndPricingPage = new LegalshieldCoverageAndPricingPage(page);
  commonLoginService = new CommonLoginService(page);
  commonCheckoutService = new CommonCheckoutService(context, page);
});

test.describe('United States - Colorado, Legal Plan - Monthly', () => {
  test.beforeEach(async ({ page }) => {
    await test.step(`Navigate to legalshield pricing and coverage page`, async () => {
      await legalshieldCoverageAndPricingPage.navigateToLegalshieldPricingAndCoveragePage('US', 'en');
    });
    await test.step(`Click on the Start Monthly Plan button`, async () => {
      await legalshieldCoverageAndPricingPage.clickStartPlanButton('monthly');
    });
    await test.step(`Click on the Shopping Cart Checkout button`, async () => {
      await page.waitForTimeout(500);
      await legalshieldCoverageAndPricingPage.marketingSiteCartComponent.locCheckoutButton.click();
    });
  });

  test('Verify that the Email Already on File Modal Already Exists  @LoginExistingUser', async () => {
    console.log('Test Case: Verify that the Email Already on File Modal Already Exists');
    await test.step(`Enter Existing Email Address`, async () => {
      await commonCheckoutService.accountPage.locEmailAddressInput.fill(basicUser.email);
    });
    await test.step(`Click the Continue Button`, async () => {
      await commonCheckoutService.accountPage.locContinueButton.click();
    });
    await test.step(`Email Already Exist Modal is displayed`, async () => {
      await expect(commonCheckoutService.accountPage.locExistingEmailModalContainer).toBeVisible();
    });
  });

  test.only('Verify redirected to Login Service after clicking on Click here to Login button on Modal @LoginExistingUser', async () => {
    console.log('Test Case: Verify redirected to Login Service after clicking on Click here to Login button on Modal');
    await test.step(`Enter Existing Email Address`, async () => {
      await commonCheckoutService.accountPage.locEmailAddressInput.fill(basicUser.email);
    });
    await test.step(`Click the Continue Button`, async () => {
      await commonCheckoutService.accountPage.locContinueButton.click();
    });
    await test.step(`Click on Click here to Login Button`, async () => {
      await commonCheckoutService.accountPage.locClickHereToLoginButton.click();
    });
    await test.step(`User is asked What is their Email on Login Service Page`, async () => {
      await expect(commonLoginService.loginPage.locWhatsYourEmailHeader).toContainText("What's your email?");
    });
  });

  test('Verify Email Already on File modal disappears after clicking close button @LoginExistingUser', async ({ page }) => {
    console.log('Test Case: Verify Email Already on File modal disappears after clicking close button');
    await test.step(`Enter Existing Email Address`, async () => {
      await commonCheckoutService.accountPage.locEmailAddressInput.fill(basicUser.email);
    });
    await test.step(`Click the Continue Button`, async () => {
      await commonCheckoutService.accountPage.locContinueButton.click();
    });
    await test.step(`Click on Close x button`, async () => {
      await commonCheckoutService.accountPage.locCloseModalButton.click();
    });
    await test.step(`Verify Email Already Exists Modal is closed`, async () => {
      await expect(commonCheckoutService.accountPage.locExistingEmailModalContainer).toBeHidden();
    });
  });
});
