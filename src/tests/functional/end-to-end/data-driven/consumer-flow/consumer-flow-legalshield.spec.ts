import { expect } from '@playwright/test';
import RegionsUtils from '../../../../../utils/regions.utils';
import { basicUser } from '../../../../../utils/user.utils';
import { legalshieldData } from './data/legalshield.data';
import { test } from '../../../../../fixtures/frontend-ui.fixture';

for (const testCase of legalshieldData.filter((testCase) => testCase.disabled == false)) {
  for (const regionUnderTest of testCase.regions) {
    test(`Legalshield - Consumer Flow (${testCase.testCaseName}, ${regionUnderTest}) @legalshield-consumerflow ${testCase.tags}`, async ({
      page,
      legalshieldService,
      commonCheckoutService,
      commonLoginService,
    }) => {
      test.setTimeout(120000);
      console.log(`Test Case: Legalshield - Consumer Flow (${testCase.testCaseName}, ${regionUnderTest}) `);
      const regionInfo = RegionsUtils.usStates.filter((region) => region.name == regionUnderTest)[0];
      await test.step(`Navigate to legalshield.com for ${testCase.market}-${testCase.language}`, async () => {
        await legalshieldService.legalshieldCoverageAndPricingPage.navigateToLegalshieldPricingAndCoveragePage(testCase.market, testCase.language);
      });
      if (process.env.USE_UAT == 'true') {
        await test.step(`Select Region`, async () => {
          await legalshieldService.legalshieldCoverageAndPricingPage.selectRegion(regionUnderTest, regionInfo.abbrv);
        });
      }
      await test.step(`Add Products: ${testCase.productDetails}`, async () => {
        await legalshieldService.addProductsFromProductDetails(testCase.productDetails);
      });
      await test.step(`Choose Account by Email and Login`, async () => {
        if (testCase.userType == 'Existing') {
          await commonCheckoutService.accountPage.enterExistingAccountEmailAndLogin(basicUser.email);
          await commonLoginService.whatsYourEmailPage.enterEmailAndContinue(basicUser.email);
          await commonLoginService.loginPage.loginOnlyPassword(basicUser.password);
        }
        if (testCase.userType == 'New') {
          await commonCheckoutService.accountPage.enterRandomEmailAndNewPasswordAndLogin();
        }
        if (testCase.userType == 'Guest') {
          await commonCheckoutService.accountPage.enterRandomEmailAndContinueAsGuest();
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
        expect(await commonCheckoutService.paymentPage.orderSummaryComponent.locTotalContainer.innerText()).toContain(testCase.termTotal);
      });
      await test.step(`Click Bank Draft Tab`, async () => {
        await commonCheckoutService.paymentPage.creditCardComponent.locCreditCardBankDraftToggle.click();
      });
      await test.step(`Fill Bank Draft Form and Submit`, async () => {
        await page.waitForTimeout(500);
        await commonCheckoutService.paymentPage.bankDraftComponent.completeBankDraftFormUnitedStates('0000000', '000000000', 'Tester');
      });
      if (process.env.USE_PROD == 'true') {
        console.log('* Do not finish transaction in PRODUCTION environment *');
      } else {
        await test.step('Click Purchase Button', async () => {
          await commonCheckoutService.paymentPage.bankDraftComponent.clickPurchaseButtonAndWaitForConfirmationPageToLoad();
        });
        await test.step(`Click on the Let's Go button`, async () => {
          await commonCheckoutService.confirmationPage.locLetsGoButton.click();
        });
        await test.step(`Assert Accounts Page URL`, async () => {
          await expect(page).toHaveURL(new RegExp('accounts'));
        });
      }
    });
  }
}
