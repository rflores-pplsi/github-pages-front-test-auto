import { expect } from '@playwright/test';
import { basicUser } from '../../../../utils/user.utils';
import { test } from '../../../../fixtures/frontend-ui.fixture';

test.beforeEach(async () => {
  test.slow();
});

test.describe('United States - Colorado, Legal Plan - Monthly', () => {
  test.beforeEach(async ({ page, legalshieldService }) => {
    await test.step(`Navigate to legalshield pricing and coverage page`, async () => {
      await legalshieldService.navigateToLegalshieldPricingAndCoveragePage('US', 'en');
    });
    await test.step(`Click on the Start Monthly Plan button`, async () => {
      await legalshieldService.legalshieldCoverageAndPricingPage.clickStartPlanButton('monthly');
    });
    await test.step(`Click on the Shopping Cart Checkout button`, async () => {
      await page.waitForTimeout(500);
      await legalshieldService.legalshieldCoverageAndPricingPage.marketingSiteCartComponent.locCheckoutButton.click();
    });
  });

  test('Verify that the Email Already on File Modal Already Exists  @LoginExistingUser', async ({ commonCheckoutService }) => {
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

  test('Verify redirected to Login Service after clicking on Click here to Login button on Modal @LoginExistingUser', async ({
    commonCheckoutService,
    commonLoginService,
  }) => {
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

  test('Verify Email Already on File modal disappears after clicking close button @LoginExistingUser', async ({ commonCheckoutService }) => {
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
