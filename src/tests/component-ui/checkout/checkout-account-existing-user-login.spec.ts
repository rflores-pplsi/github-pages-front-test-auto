import { test, expect } from '@playwright/test';
import { basicUser } from '../../../utils/user.utils';
import { LegalshieldCoverageAndPricingPage } from '../../../page-objects/marketing-sites/legalshield/legalshield-coverage-and-pricing.page';
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

  test('Verify user is redirected to Login Page and is able to login with an Existing Account @LoginExistingUser', async () => {
    console.log('Test Case: Verify user is redirected to Login Page and is able to login with an Existing Account');
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
    await test.step(`User is redirected to Personal Information Page`, async () => {
      await expect(commonCheckoutService.personalInfoPage.locHeader).toContainText('Tell us about yourself');
    });
  });

  test('Verify user cannot Login with Existing user with invalid Password @LoginExistingUser', async () => {
    console.log('Test Case: Verify user cannot Login with Existing user with invalid Password');
    await test.step(`Choose Account by Email`, async () => {
      await commonCheckoutService.accountPage.locEmailAddressInput.fill(basicUser.email);
      await commonCheckoutService.accountPage.locContinueButton.click();
      await commonCheckoutService.accountPage.locClickHereToLoginButton.click();
      await commonLoginService.whatsYourEmailPage.locEmailAddressInput.fill(basicUser.email);
      await commonLoginService.whatsYourEmailPage.locContinueButton.click();
    });
    await test.step(`Log in with invalid Password to get Error message`, async () => {
      await commonLoginService.loginPage.loginPasswordForError('tester');
    });
    await test.step(`Error messages appears under Password Field`, async () => {
      await expect(commonLoginService.loginPage.locInvalidCredentialsErrorMessage).toBeVisible();
    });
  });

  test('Verify user can login by trying a new account when trying to login with an Existing user @LoginExistingUser', async () => {
    console.log('Test Case: Verify user can login by trying a new account when trying to login with an Existing user');
    await test.step(`Choose Account by Email`, async () => {
      await commonCheckoutService.accountPage.locEmailAddressInput.fill(basicUser.email);
      await commonCheckoutService.accountPage.locContinueButton.click();
      await commonCheckoutService.accountPage.locClickHereToLoginButton.click();
      await commonLoginService.whatsYourEmailPage.locEmailAddressInput.fill('9847498375');
      await commonLoginService.whatsYourEmailPage.locContinueButton.click();
    });
    await test.step(`User is redirected to Email Not Found Page`, async () => {
      await commonLoginService.loginPage.locEmailNotFoundHeader.isVisible();
    });
    await test.step(`Click on Try Another Account Button`, async () => {
      await commonLoginService.loginPage.locTryAnotherAccount.click();
    });
    await test.step(`User is Directed to Enter Email Page`, async () => {
      await commonLoginService.loginPage.locWhatsYourEmailHeader.isVisible();
    });
    await test.step(`User logs in with Different Existing Email and goes to Sign in Page to Enter Password`, async () => {
      await commonLoginService.whatsYourEmailPage.locEmailAddressInput.fill(basicUser.email);
      await commonLoginService.whatsYourEmailPage.locContinueButton.click();
    });
    await test.step(`User is redirected where they need to enter Password to login `, async () => {
      await commonLoginService.loginPage.loginOnlyPassword(basicUser.password);
    });

    await test.step(`User is redirected to Personal Information Page`, async () => {
      await expect(commonCheckoutService.personalInfoPage.locHeader).toContainText('Tell us about yourself');
    });
  });

  test('Verify user can get to New Account Page when trying to login with an Existing user @LoginExistingUser', async ({ page }) => {
    console.log('Test Case: Verify user can get to New Account Page when trying to login with an Existing user');
    await test.step(`Choose Account by Email`, async () => {
      await commonCheckoutService.accountPage.locEmailAddressInput.fill(basicUser.email);
      await commonCheckoutService.accountPage.locContinueButton.click();
      await commonCheckoutService.accountPage.locClickHereToLoginButton.click();
      await commonLoginService.whatsYourEmailPage.locEmailAddressInput.fill('9847498375');
      await commonLoginService.whatsYourEmailPage.locContinueButton.click();
    });
    await test.step(`User is redirected to Email Not Found Page`, async () => {
      await commonLoginService.loginPage.locEmailNotFoundHeader.isVisible();
    });
    await test.step(`Click on Create New Account Button`, async () => {
      await commonLoginService.loginPage.locCreateNewAccount.click();
    });
    await test.step(`User is Directed to Create Account Page`, async () => {
      await commonLoginService.loginPage.locCreateAccountHeader.isVisible();
    });
    // COMEBACK TO THIS when Login with NEW USER ACCOUNT Automation is Complete to Expand an user is able to log in
  });
});
