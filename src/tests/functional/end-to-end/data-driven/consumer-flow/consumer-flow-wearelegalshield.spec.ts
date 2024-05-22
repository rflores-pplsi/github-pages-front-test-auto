import { expect } from '@playwright/test';
import RegionsUtils from '../../../../../utils/regions.utils';
import { weAreLegalshieldData } from './data/wearelegalshield.data';
import { test } from '../../../../../fixtures/frontend-ui.fixture';

for (const testCase of weAreLegalshieldData.filter((testCase) => testCase.disabled == false)) {
  for (const regionUnderTest of testCase.regions) {
    test(`WeAreLegalShield  - Consumer Flow (${testCase.testCaseName}, ${regionUnderTest}) @wearelegalshield-consumerflow`, async ({
      page,
      newCheckoutService,
      walsService,
    }) => {
      console.log(`Test Case: WeAreLegalShield (${testCase.testCaseName}, ${regionUnderTest})`);
      test.setTimeout(120000);
      const regionInfo = RegionsUtils.usStates.filter((region) => region.name == regionUnderTest)[0];
      await test.step(`Navigate to wearelegalshield.com for `, async () => {
        await walsService.walsAffiliatedPage.navigateToAffiliatedWalsPage('lspro', 'wearelegalshield', 'com');
      });
      await test.step(`Select Region`, async () => {
        await walsService.walsGeolocateMenuComponent.changeRegion(regionUnderTest);
      });
      await test.step(`Add Plans: ${testCase.planDetails}`, async () => {
        await walsService.addPlansFromProductDetails(testCase.planDetails);
      });
      if (process.env.USE_PROD == 'true') {
        console.log('* Production: Stop test at personal info page *');
        await test.step(`Assert Checkout Service Reached`, async () => {
          await newCheckoutService.newCheckoutInformationPage.locAddressInput.waitFor();
          expect(page.url()).toContain('newcheckout');
        });
      } else {
        await test.step(`Fill all required fields on personal info ${regionInfo.name}`, async () => {
          await newCheckoutService.newCheckoutInformationPage.completeContactInformationForm(
            'test@tester.com',
            'Test',
            'Tester',
            regionInfo.validAddress.street,
            regionInfo.validAddress.city,
            regionInfo.validAddress.postalCode,
            '5555555555',
            'Mobile'
          );
        });
        await test.step(`Fill all required fields on security info ${regionInfo.name}`, async () => {
          await newCheckoutService.newCheckoutInformationPage.completeSecurityInformationForm('01012000', '2222');
        });
        await test.step(`Click Continue Button`, async () => {
          await newCheckoutService.newCheckoutInformationPage.locContinueButton.click();
        });
        await test.step(`Select Bank Draft Payment Type`, async () => {
          await newCheckoutService.newCheckoutPaymentPage.locBankDraftButton.click();
        });
        await test.step(`Complete Bank Draft Form`, async () => {
          await newCheckoutService.newCheckoutPaymentPage.completeBankDraftFrom('Tester', '103000648', '1000123546');
        });
        await test.step(`Click Purchase Button`, async () => {
          await newCheckoutService.newCheckoutPaymentPage.locSaveBankDraftButton.click();
        });
        await test.step(`Assert Confirmation Page`, async () => {
          await expect(newCheckoutService.newCheckoutConfirmationPage.locConfirmationWrapper).toBeVisible();
        });
      }
    });
  }
}
