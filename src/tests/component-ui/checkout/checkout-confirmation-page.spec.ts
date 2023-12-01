import { test, expect } from '@playwright/test';
import { basicUser } from '../../../utils/user.utils';
import { LegalshieldCoverageAndPricingPage } from '../../../page-objects/marketing-sites/legalshield/legalshield-coverage-and-pricing.page';
import { CommonLoginService, CommonCheckoutService } from '@legalshield/frontend-automation-commons';

let legalshieldCoverageAndPricingPage: LegalshieldCoverageAndPricingPage;
let commonLoginService: CommonLoginService;
let commonCheckoutService: CommonCheckoutService;

test.beforeEach(async ({ context, page }) => {
  test.setTimeout(120000);
  legalshieldCoverageAndPricingPage = new LegalshieldCoverageAndPricingPage(page);
  commonLoginService = new CommonLoginService(page);
  commonCheckoutService = new CommonCheckoutService(context, page);
});

test.describe('United States - Colorado, Legal Plan - Monthly, Bank Draft', () => {
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
    await test.step('Populate all fields on Personal Information Page', async () => {
      await page.waitForTimeout(5000);
      await commonCheckoutService.personalInfoPage.fillAllNonBusinessFormFields(
        'Automation',
        'Tester',
        'Mobile',
        '5555555555',
        '200 16th Street',
        'Denver',
        '80202',
        '10',
        '10',
        '2001',
        '3333'
      );
    });
    await test.step('Click on the Save & Continue Button to go to Payment Page', async () => {
      await commonCheckoutService.personalInfoPage.clickSaveAndContinueAndWaitForPaymentPageToLoad();
    });
    await test.step('Click Bank Draft toggle', async () => {
      await commonCheckoutService.paymentPage.bankDraftComponent.locCreditCardBankDraftToggle.click();
    });
    await test.step('Fill out Bank Draft Form', async () => {
      await commonCheckoutService.paymentPage.bankDraftComponent.completeBankDraftFormUnitedStates('0000000', '000000000', 'Tester');
    });
    await test.step('Click Purchase Button', async () => {
      await commonCheckoutService.paymentPage.bankDraftComponent.clickPurchaseButtonAndWaitForConfirmationPageToLoad();
    });
  });

  test.describe('United States - Colorado, Legal Plan - Monthly, Bank Draft', () => {
    test('Verify Welcome Header is displayed on Confirmation Page @CheckoutConfirmationPage', async () => {
      console.log('Test Case: Verify Welcome Header is displayed on Confirmation Page');
      await test.step('Verify Header is displayed on Confirmation Page', async () => {
        await expect(commonCheckoutService.confirmationPage.locConfirmationFirstHeader).toContainText('Welcome to the Family!');
      });
    });

    test('Verify the membership wrapper is displayed on Confirmation Page @CheckoutConfirmationPage', async () => {
      console.log('Test Case: Verify the membership wrapper is displayed on Confirmation Page');
      await test.step('Verify the membership wrapper is displayed on Confirmation Page', async () => {
        await expect(commonCheckoutService.confirmationPage.locConfirmationScreenContainer).toBeVisible();
      });
    });

    test('Verify Order Summary Contents on Confirmation Page @CheckoutConfirmationPage', async () => {
      console.log('Test Case: Verify Order Summary Contents on Confirmation Page');
      await test.step('Verify Order Summary heading is displayed on Confirmation Page', async () => {
        await expect(commonCheckoutService.confirmationPage.locConfirmationOrderSummaryHeader).toContainText('Order Summary');
      });
      await test.step('Verify Plan and Cost is displayed in the Order Summary on Confirmation Page', async () => {
        await commonCheckoutService.confirmationPage.assertPlanDetailsCardInformation('Legal Plan', '$29.95', 'Monthly', true);
      });
    });

    test('Verify The Whats Next Component is displayed on Confirmation Page @CheckoutConfirmationPage', async () => {
      console.log('Test Case: Verify The Whats Next Component is displayed on Confirmation Page');
      await test.step('Verify The Whats Next heading is displayed on Confirmation Page', async () => {
        await expect(commonCheckoutService.confirmationPage.locConfirmationWhatsNextHeader).toBeVisible();
      });
    });
    test('Verify The Check Email Component is displayed on Confirmation Page @CheckoutConfirmationPage', async () => {
      console.log('Test Case: Verify The Check Email Component is displayed on Confirmation Page');
      await test.step('Verify Check Email is within the Whats Next Box on Confirmation Page', async () => {
        await expect(commonCheckoutService.confirmationPage.locWhatsNextCheckEmailComponent).toBeVisible();
      });
    });
    test('Verify The Download App Component is displayed on Confirmation Page @CheckoutConfirmationPage', async () => {
      console.log('Test Case: Verify The Download App Component is displayed on Confirmation Page');
      await test.step('Verify Download App is within the Whats Next Box on Confirmation Page', async () => {
        await expect(commonCheckoutService.confirmationPage.locWhatsNextDownloadAppComponent).toBeVisible();
      });
    });
    test('Verify Understand Your Plan Component is displayed on Confirmation Page @CheckoutConfirmationPage', async () => {
      console.log('Test Case: Verify Understand Your Plan Component is displayed on Confirmation Page');
      await test.step('Verify Understand Your Plan is within the Whats Next Box on Confirmation Page', async () => {
        await expect(commonCheckoutService.confirmationPage.locWhatsNextUnderstandYourPlanComponent).toBeVisible();
      });
    });
  });
});

test.describe('United States - Colorado, Legal Plan - Monthly, Credit Card', () => {
  test.beforeEach(async ({ page }) => {
    await test.step(`Navigate to legalshield pricing and coverage page`, async () => {
      await legalshieldCoverageAndPricingPage.navigateToLegalshieldPricingAndCoveragePage('US', 'en');
    });
    // await test.step(`Change Region`, async () => {
    //   await legalshieldCoverageAndPricingPage.marketingSiteFooterComponent.selectRegion('Colorado', 'CO');
    // });
    await test.step(`Click on the Start Monthly Plan button`, async () => {
      await legalshieldCoverageAndPricingPage.clickStartPlanButton('monthly');
    });
    await test.step(`Click on the Shopping Cart Checkout button`, async () => {
      await page.waitForTimeout(500);
      await legalshieldCoverageAndPricingPage.marketingSiteCartComponent.locCheckoutButton.click();
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
    await test.step('Populate all fields on Personal Information Page', async () => {
      await commonCheckoutService.personalInfoPage.fillAllNonBusinessFormFields(
        'Automation',
        'Tester',
        'Mobile',
        '5555555555',
        '200 16th Street',
        'Denver',
        '80202',
        '10',
        '10',
        '2001',
        '3333'
      );
    });
    await test.step('Click on the Save & Continue Button to go to Payment Page', async () => {
      await commonCheckoutService.personalInfoPage.clickSaveAndContinueAndWaitForPaymentPageToLoad();
    });
    await test.step(' Fill out Credit Card Form', async () => {
      await commonCheckoutService.paymentPage.creditCardComponent.completeCreditCardForm('4444333322221111', '1225', '123', 'Test User', '80202');
    });
    await test.step('Click Purchase Button', async () => {
      await commonCheckoutService.paymentPage.creditCardComponent.clickPurchaseButtonAndWaitForConfirmationPageToLoad();
    });
  });

  test('Verify Order Summary Contents on Confirmation Page Paid by Credit Card @CheckoutConfirmationPage', async () => {
    console.log('Test Case: Verify Order Summary Contents on Confirmation Page Paid by Credit Card');
    await test.step('Verify Order Summary heading is displayed on Confirmation Page Paid by Credit Card', async () => {
      await expect(commonCheckoutService.confirmationPage.locConfirmationOrderSummaryHeader).toContainText('Order Summary');
    });
    await test.step('Verify Plan and Cost is displayed in the Order Summary on Confirmation Page', async () => {
      await commonCheckoutService.confirmationPage.assertPlanDetailsCardInformation('Legal Plan', '$29.95', 'Monthly', true);
    });
  });
});
