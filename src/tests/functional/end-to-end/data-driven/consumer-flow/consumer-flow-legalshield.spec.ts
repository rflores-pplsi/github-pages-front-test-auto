import { expect } from '@playwright/test';
import RegionsUtils from '../../../../../utils/regions.utils';
import { basicUser } from '../../../../../utils/user.utils';
import { legalshieldData } from './data/legalshield.data';
import { test } from '../../../../../fixtures/frontend-ui.fixture';
import UrlsUtils from '../../../../../utils/urls.utils';

const urlsUtils = new UrlsUtils();

for (const testCase of legalshieldData.filter((testCase) => testCase.disabled == false)) {
  for (const regionUnderTest of testCase.regions) {
    test(`Legalshield (${testCase.testCaseName}, ${regionUnderTest}) @legalshield-consumerflow ${testCase.tags}`, async ({
      page,
      legalshieldService,
      commonCheckoutService,
      commonLoginService,
    }) => {
      test.setTimeout(120000);
      console.log(`Test Case: Legalshield - Consumer Flow (${testCase.testCaseName}, ${regionUnderTest}) `);
      const regionInfo = RegionsUtils.usStates.filter((region) => region.name == regionUnderTest)[0];
      await test.step(`Navigate to legalshield.com for ${testCase.market}-${testCase.language}`, async () => {
        await legalshieldService.navigateToLegalshieldPricingAndCoveragePage(testCase.market, testCase.language);
      });
      await test.step(`Change Region`, async () => {
        await legalshieldService.setPplsiRegionCookie('pplsi-region', regionInfo.abbrv);
      });
      await test.step(`Add Products: ${testCase.productDetails}`, async () => {
        if ((await page.locator('#gbb-pricing-section').isVisible()) == true) {
          await legalshieldService.gbbAllPlansPage.addProductsFromProductDetails(testCase.productDetails);
        } else {
          await legalshieldService.addProductsFromProductDetails(testCase.productDetails);
        }
      });
      // This is the only way to ensure we don't hit one page checkout
      await test.step(`Revert checkout URL if we hit the new one-page checkout flow`, async () => {
        // if page.url contains one-page, revert to the old checkout flow
        if (page.url().includes('onePage=true')) {
          const nonOnePageUrl = await urlsUtils.revertCheckoutURLToBypassOnePage(page.url());
          await page.goto(nonOnePageUrl);
        }
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
      if (process.env.USE_PROD == 'true') {
        console.log('* Production: Stop test at personal info page *');
        await test.step(`Assert Checkout Service Reached`, async () => {
          await commonCheckoutService.personalInfoPage.stepperComponent.locStepCircle1Current.isVisible();
        });
      } else {
        await test.step(`Fill all required fields on personal info ${regionInfo.name}`, async () => {
          //TODO: remove after finding a way to explicitly wait
          await page.waitForTimeout(1000);
          await commonCheckoutService.personalInfoPage.fillAllFields(
            'Test',
            'Tester',
            '5555555555',
            'Business',
            regionInfo.validAddress.street,
            regionInfo.validAddress.city,
            regionInfo.validAddress.postalCode,
            '10',
            '10',
            '1990',
            '3333333333',
            'Testers Inc',
            '10',
            '10',
            '2021',
            '945433337'
          );
          if (await commonCheckoutService.personalInfoPage.locBusinessNameInput.isVisible()) {
            await commonCheckoutService.personalInfoPage.fillBusinessInformationFields('Testers Inc', '10', '10', '2021', '945433337');
          }
        });

        await test.step(`Verify Order Total in Order Summary`, async () => {
          //TODO: update data sheet to lsa standard
          // expect(await commonCheckoutService.personalInfoPage.orderSummaryComponent.assertExpectedProductsAndCostsDisplayed(testCase.productDetails);
        });
        await test.step(`Click Save and Continue and wait for Payment page`, async () => {
          await commonCheckoutService.personalInfoPage.clickSaveAndContinueAndWaitForPaymentPageToLoad();
        });
        await test.step(`Click Bank Draft Tab`, async () => {
          await commonCheckoutService.paymentPage.creditCardComponent.locCreditCardBankDraftToggle.click();
        });
        await test.step(`Fill Bank Draft Form and Submit`, async () => {
          await page.waitForTimeout(500);
          await commonCheckoutService.paymentPage.bankDraftComponent.completeBankDraftFormUnitedStates('0000000', '000000000', 'Tester');
        });
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
