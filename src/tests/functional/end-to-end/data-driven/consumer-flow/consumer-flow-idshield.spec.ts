import { expect } from '@playwright/test';
import RegionsUtils from '../../../../../utils/regions.utils';
import { basicUser } from '../../../../../utils/user.utils';
import { idshieldData, idshieldCanadaData } from './data/idshield.data';
import { test } from '../../../../../fixtures/frontend-ui.fixture';

for (const testCase of idshieldData.filter((testCase) => testCase.disabled == false)) {
  for (const regionUnderTest of testCase.regions) {
    test(`IDShield (${testCase.testCaseName}, ${regionUnderTest}) @idshield-consumerflow @e2e ${testCase.tags}`, async ({
      page,
      idshieldService,
      legalshieldService,
      commonCheckoutService,
      commonLoginService,
    }) => {
      test.setTimeout(120000);
      console.log(`Test Case: IdShield - US (${testCase.testCaseName}, ${regionUnderTest}) `);
      const regionInfo = RegionsUtils.usStates.filter((region) => region.name == regionUnderTest)[0];
      await test.step(`Navigate to idshield for ${testCase.market}-${testCase.language}`, async () => {
        await idshieldService.idshieldIndividualPlanPage.navigateToIdshieldPage(testCase.market, testCase.language);
      });
      await test.step('Select Region', async () => {
        await idshieldService.selectRegionFromDropdown(regionInfo.name);
      }); 
      await test.step('Click accept all cookies', async () => {
        await legalshieldService.clickAcceptAllButton();
      }); 
      await test.step(`Add Products: ${testCase.planDetails}`, async () => {
        await idshieldService.addProductsFromProductDetails(testCase.planDetails);
      });
      await test.step(`Choose Account by Email and Login`, async () => {
        if (testCase.userType == 'Existing') {
          await commonCheckoutService.accountPage.enterExistingAccountEmailAndLogin(basicUser.email);
          await commonLoginService.loginPage.locLoginEmailOrUsernameInput.fill(basicUser.email);
          await page.getByText('Continue').click();
          await commonLoginService.loginPage.login(basicUser.email, basicUser.password);
        }
        if (testCase.userType == 'New') {
          await commonCheckoutService.accountPage.enterRandomEmailAndNewPasswordAndLogin();
        }
        if (testCase.userType == 'Guest') {
          await commonCheckoutService.accountPage.enterRandomEmailAndContinueAsGuest();
        }
      });
        await test.step(`Fill all required fields on personal info ${regionInfo.name}`, async () => {
          //TODO: remove after finding a way to explicitly wait
          await page.waitForTimeout(1000);
          await commonCheckoutService.personalInfoPage.fillAllFields(
            'Test',
            'PplsiTest',
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
          // expect(await commonCheckoutService.personalInfoPage.orderSummaryComponent.locTotalContainer.innerText()).toContain(testCase.termTotal);
        });
        await test.step(`Click Save and Continue and wait for Payment page`, async () => {
          await commonCheckoutService.personalInfoPage.clickSaveAndContinueAndWaitForPaymentPageToLoad();
        });
        await test.step(`Verify Order Total in Order Summary`, async () => {
          //TODO: update data sheet to lsa standard
          // expect(await commonCheckoutService.paymentPage.orderSummaryComponent.locTotalContainer.innerText()).toContain(testCase.termTotal);
        });
        await test.step(`Click Bank Draft Tab`, async () => {
          await commonCheckoutService.paymentPage.clickBankDraftToggle();
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
      });
  }
}

for (const testCase of idshieldCanadaData.filter((testCase) => testCase.disabled == false)) {
  for (const regionUnderTest of testCase.regions) {
    test(`IDShield (${testCase.testCaseName}, ${regionUnderTest}) @idshield-consumerflow @e2e ${testCase.tags}`, async ({
      page,
      idshieldService,
      legalshieldService,
      commonCheckoutService,
      commonLoginService,
    }) => {
      test.setTimeout(120000);
      console.log(`Test Case: IdShield - Canada (${testCase.testCaseName}, ${regionUnderTest}) `);
      const regionInfo = RegionsUtils.caProvinces.filter((region) => region.name == regionUnderTest)[0];
      await test.step(`Navigate to idshield for ${testCase.market}-${testCase.language}`, async () => {
        await idshieldService.idshieldIndividualPlanPage.navigateToIdshieldPage(testCase.market, testCase.language);
      });
      await test.step('Click accept all cookies', async () => {
        await legalshieldService.clickAcceptAllButton();
      }); 
      await test.step('Select Region', async () => {
        await idshieldService.selectRegionFromDropdown(regionInfo.name);
      }); 
      await test.step(`Add Products: ${testCase.planDetails}`, async () => {
        await idshieldService.addProductsFromProductDetails(testCase.planDetails);
      });
      await test.step(`Choose Account by Email and Login`, async () => {
        if (testCase.userType == 'Existing') {
          await commonCheckoutService.accountPage.enterExistingAccountEmailAndLogin(basicUser.email);
          await commonLoginService.loginPage.locLoginEmailOrUsernameInput.fill(basicUser.email);
          await page.getByText('Continue').click();
          await commonLoginService.loginPage.login(basicUser.email, basicUser.password);
        }
        if (testCase.userType == 'New') {
          await commonCheckoutService.accountPage.enterRandomEmailAndNewPasswordAndLogin();
        }
        if (testCase.userType == 'Guest') {
          await commonCheckoutService.accountPage.enterRandomEmailAndContinueAsGuest();
        }
      });
        await test.step(`Fill all required fields on personal info ${regionInfo.name}`, async () => {
          //TODO: remove after finding a way to explicitly wait
          await page.waitForTimeout(1000);
          await commonCheckoutService.personalInfoPage.fillAllFields(
            'Test',
            'PplsiTest',
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
          // expect(await commonCheckoutService.personalInfoPage.orderSummaryComponent.locTotalContainer.innerText()).toContain(testCase.termTotal);
        });
        await test.step(`Click Save and Continue and wait for Payment page`, async () => {
          await commonCheckoutService.personalInfoPage.clickSaveAndContinueAndWaitForPaymentPageToLoad();
        });
        await test.step(`Verify Order Total in Order Summary`, async () => {
          //TODO: update data sheet to lsa standard
          // expect(await commonCheckoutService.paymentPage.orderSummaryComponent.locTotalContainer.innerText()).toContain(testCase.termTotal);
        });
        await test.step(`Click Bank Draft Tab`, async () => {
          await commonCheckoutService.paymentPage.clickBankDraftToggle();
        });
        await test.step(`Fill Bank Draft Form and Submit`, async () => {
          await page.waitForTimeout(500);
          await commonCheckoutService.paymentPage.bankDraftComponent.completeBankDraftFormCanada('0000011', '11242', '260', 'Tester');
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
      });
  }
}
