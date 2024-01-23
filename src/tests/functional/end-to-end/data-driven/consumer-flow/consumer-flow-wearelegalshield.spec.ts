import { expect } from '@playwright/test';
import RegionsUtils from '../../../../../utils/regions.utils';
import { weAreLegalshieldData } from './data/wearelegalshield.data';
import { test } from '../../../../../fixtures/frontend-ui.fixture';

for (const testCase of weAreLegalshieldData.filter((testCase) => testCase.disabled == false)) {
  for (const regionUnderTest of testCase.regions) {
    test(`WeAreLegalShield (${testCase.testCaseName}, ${regionUnderTest}) -> Checkout -> Accounts @e2e @ConsumerFlowWeAreLegalShield @smoke`, async ({
      page,
      newCheckoutService,
      walsService,
    }) => {
      console.log(`Test Case: WeAreLegalShield (${testCase.testCaseName}, ${regionUnderTest}) -> Checkout -> Accounts`);
      test.setTimeout(120000);
      const regionInfo = RegionsUtils.usStates.filter((region) => region.name == regionUnderTest)[0];
      await test.step(`Navigate to wearelegalshield.com for `, async () => {
        await walsService.walsAffiliatedPage.navigateToAffiliatedWalsPage('apptestuser', 'wearelegalshield', 'com');
      });
      await test.step(`Select Region`, async () => {
        await walsService.walsGeolocateMenuComponent.changeRegion(regionUnderTest);
      });
      await test.step(`Add Plans: ${testCase.planDetails}`, async () => {
        await walsService.addPlansFromProductDetails(testCase.planDetails);
      });
      // TODO: Create/find account that allows purchase from associate account
      //   await test.step(`Fill all required fields on personal info ${regionInfo.name}`, async () => {
      //     await newCheckoutService.newCheckoutInformationPage.completeContactInformationForm(
      //       'test@tester.com',
      //       'Test',
      //       'Tester',
      //       regionInfo.validAddress.street,
      //       regionInfo.validAddress.city,
      //       regionInfo.validAddress.postalCode,
      //       '5555555555',
      //       'Mobile'
      //     );
      //   });
      //   await test.step(`Fill all required fields on security info ${regionInfo.name}`, async () => {
      //     await newCheckoutService.newCheckoutInformationPage.completeSecurityInformationForm('01012000', '2222');
      //   });
      //   await test.step(`Click Continue Button`, async () => {
      //     await newCheckoutService.newCheckoutInformationPage.locContinueButton.click();
      //   });
      //   await test.step(`Select Bank Draft Payment Type`, async () => {
      //     await newCheckoutService.newCheckoutPaymentPage.locBankDraftButton.click();
      //   });
      //   await test.step(`Complete Bank Draft Form`, async () => {
      //     await newCheckoutService.newCheckoutPaymentPage.completeBankDraftFrom('Tester', '103000648', '1000123546');
      //   });
      //   if (process.env.USE_PROD == 'true') {
      //     console.log('* Do not finish transaction in PRODUCTION environment *');
      //   } else {
      //     await test.step(`Click Purchase Button`, async () => {
      //       await newCheckoutService.newCheckoutPaymentPage.locSaveBankDraftButton.click();
      //     });
      //     await test.step(`Assert Confirmation Page`, async () => {
      //       await expect(newCheckoutService.newCheckoutConfirmationPage.locConfirmationWrapper).toBeVisible();
      //     });
      //   }
    });
  }
}
