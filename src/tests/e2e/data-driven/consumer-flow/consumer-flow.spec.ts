import { expect, test } from '@playwright/test';
import RegionsUtils from '../../../../utils/regions.utils';
import { basicUser } from '../../../../utils/user.utils';
import { legalshieldData } from './legalshield.data';
import { selfPayData, fringeData, partialFringeData, payrollDeductData } from './shieldbenefits.data';
import UrlsUtils from '../../../../utils/urls.utils';
import { LegalshieldService } from '../../../../page-objects-refactored/marketing-sites/legalshield/legalshield-service';
import { ShieldBenefitsService } from '../../../../page-objects-refactored/shieldbenefits/shieldbenefits-service';
import { CommonCheckoutService, CommonLoginService } from '@legalshield/frontend-automation-commons';

let legalshieldService: LegalshieldService;
let shieldBenefitsService: ShieldBenefitsService;
let commonCheckoutService: CommonCheckoutService;
let commonLoginService: CommonLoginService;

test.beforeEach(async ({ context, page }) => {
  shieldBenefitsService = new ShieldBenefitsService(page);
  legalshieldService = new LegalshieldService(page);
  commonLoginService = new CommonLoginService(page);
  commonCheckoutService = new CommonCheckoutService(context, page);
  test.setTimeout(100000);
});

// LegalShield - US - existing user
for (const testCase of legalshieldData.filter((testCase) => testCase.disabled == false)) {
  for (const regionUnderTest of testCase.regions) {
    test(`Legalshield (${testCase.testCaseName}, ${regionUnderTest}) -> Checkout -> Accounts @ConsumerFlowEndToEnd`, async ({ page }) => {
      console.log(`Test Case: Legalshield (${testCase.testCaseName}, ${regionUnderTest}) -> Checkout -> Accounts`);
      const regionInfo = RegionsUtils.usStates.filter((region) => region.name == regionUnderTest)[0];

      await test.step(`Navigate to legalshield.com for ${testCase.market}-${testCase.language}`, async () => {
        await page.goto(`${UrlsUtils.marketingSitesUrls.legalShieldUSUrl}/personal-plan/coverage-and-pricing/`);
      });
      await test.step(`Select Region`, async () => {
        await legalshieldService.marketingSiteFooterComponent.selectRegion(regionInfo.name, regionInfo.abbrv);
      });
      await test.step(`Add Products: ${testCase.productDetails}`, async () => {
        await legalshieldService.addProductsFromProductDetails(testCase.productDetails);
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

      await test.step(`Verify Order Total in Order Summary`, async () => {
        expect(await commonCheckoutService.personalInfoPage.orderSummaryComponent.locTotalContainer.innerText()).toContain(testCase.termTotal);
      });
      await test.step(`Click Save and Continue and wait for Payment page`, async () => {
        await commonCheckoutService.personalInfoPage.clickSaveAndContinueAndWaitForPaymentPageToLoad();
      });
      await test.step(`Verify Order Total in Order Summary`, async () => {
        expect(await commonCheckoutService.paymentsPage.orderSummaryComponent.locTotalContainer.innerText()).toContain(testCase.termTotal);
      });
      await test.step(`Click Bank Draft Tab`, async () => {
        await commonCheckoutService.paymentsPage.creditCardComponent.locCreditCardBankDraftToggle.click();
      });
      await test.step(`Fill Bank Draft Form and Submit`, async () => {
        await commonCheckoutService.paymentsPage.bankDraftComponent.completeBankDraftFormUnitedStates('0000000', '000000000', 'Tester');
      });
      await test.step('Click Purchase Button', async () => {
        await commonCheckoutService.paymentsPage.bankDraftComponent.clickPurchaseButtonAndWaitForConfirmationPageToLoad();
      });
      await test.step(`Click on the Let's Go button`, async () => {
        await commonCheckoutService.confirmationPage.locLetsGoButton.click();
      });
      await test.step(`Assert Accounts Page URL`, async () => {
        await expect(page).toHaveURL(new RegExp('accounts'));
      });
    });
  }
}

// Self-Pay Configurations - Single Plan
for (const testCase of selfPayData.filter((testCase) => testCase.disabled == false)) {
  for (const regionUnderTest of testCase.regions) {
    test(`ShieldBenefits (${testCase.testCaseName}, ${regionUnderTest}) -> Checkout -> Accounts @ConsumerFlowEndToEnd`, async ({ page }) => {
      console.log(`Test Case: ShieldBenefits (${testCase.testCaseName}, ${regionUnderTest}) -> Checkout -> Accounts`);
      const regionInfo = RegionsUtils.usStates.filter((region) => region.name == regionUnderTest)[0];

      await test.step(`Navigate to Shield Benefits Pricing Page for Group: ${testCase.groupNameOrNumber}`, async () => {
        await page.goto(`${UrlsUtils.shieldBenefits.home.url}/${testCase.groupNameOrNumber}/enrollment`);
      });
      await test.step(`Select State: ${regionUnderTest}`, async () => {
        await shieldBenefitsService.shieldBenefitsLegalEnrollmentPage.selectStateOrProvince(regionUnderTest);
      });
      await test.step(`Check product checkbox for product: ${testCase.productName} with Tier: ${testCase.tierName}`, async () => {
        await shieldBenefitsService.shieldBenefitsLegalEnrollmentPage.checkProductCheckbox(testCase.productName);
      });
      await test.step(`Click Enroll Now for Plan: ${testCase.productName} with Tier: ${testCase.tierName}`, async () => {
        await shieldBenefitsService.shieldBenefitsLegalEnrollmentPage.locBeginEnrollmentButton.click();
      });
      await test.step(`Login or Sign Up`, async () => {
        if (testCase.userType == 'New') {
          await commonLoginService.signUpPage.signUp();
        } else {
          await commonLoginService.loginPage.login(basicUser.email, basicUser.password);
        }
      });
      await test.step(`Change Address to a valid one for Region: ${regionInfo.name}`, async () => {
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
      });
      await test.step(`Verify Order Total in Order Summary`, async () => {
        expect(await commonCheckoutService.personalInfoPage.orderSummaryComponent.locTotalContainer.innerText()).toContain(testCase.termTotal);
      });
      await test.step(`Click Save and Continue Button`, async () => {
        await commonCheckoutService.personalInfoPage.clickSaveAndContinueAndWaitForPaymentPageToLoad();
      });
      await test.step(`Verify Order Total in Order Summary`, async () => {
        expect(await commonCheckoutService.paymentsPage.orderSummaryComponent.locTotalContainer.innerText()).toContain(testCase.termTotal);
      });
      await test.step(`Click Bank Draft Tab`, async () => {
        await commonCheckoutService.paymentsPage.creditCardComponent.locCreditCardBankDraftToggle.click();
      });
      await test.step(`Fill Bank Draft Form and Submit`, async () => {
        await commonCheckoutService.paymentsPage.bankDraftComponent.completeBankDraftFormUnitedStates('0000000', '000000000', 'Tester');
      });
      await test.step('Click Purchase Button', async () => {
        await commonCheckoutService.paymentsPage.bankDraftComponent.clickPurchaseButtonAndWaitForConfirmationPageToLoad();
      });
      //TODO:update with steps to get to accounts service once the MyAccount dropDown issue fixed?
      // await test.step(`Click on the Let's Go button`, async () => {
      //   await page.pause();
      //   await commonCheckoutService.confirmationPage.locLetsGoButton.click();
      // });
      // await test.step(`Assert Accounts Page URL`, async () => {
      //   await expect(page).toHaveURL(new RegExp('accounts'));
      // });
    });
  }
}
