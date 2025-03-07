import { expect } from '@playwright/test';
import RegionsUtils from '../../../../../utils/regions.utils';
import { basicUser } from '../../../../../utils/user.utils';
import { legalshieldAssociateData } from './data/legalshieldassociate.data';
import { test } from '../../../../../fixtures/frontend-ui.fixture';
import { selectLegalshieldAssociatesPlansFromPlanDetails } from '../../../../../utils/flows.utils';

for (const testCase of legalshieldAssociateData.filter((testCase) => testCase.disabled == false)) {
  for (const regionUnderTest of testCase.regions) {
    test(`Legalshield Associates - Consumer Flow ${testCase.testCaseName}, ${regionUnderTest}) @legalshieldassociates-consumerflow @e2e ${testCase.tag}`, async ({
      page,
      legalshieldService,
      officeService,
      legalshieldAssociateService,
    }) => {
      console.log(`Test Case: Legalshield Associates - Consumer Flow (${testCase.testCaseName}, ${regionUnderTest})`);
      test.slow();
      const regionInfo = RegionsUtils.getRegionInfo(regionUnderTest);
      await test.step(`Navigate to legalshieldassociate home page`, async () => {
        await legalshieldAssociateService.homePage.navigateToHomePage();
      });
       await test.step(`Change Region`, async () => {
        await legalshieldService.setCookie('region', regionInfo.abbrv);
      });
      await test.step(`Select Market`, async () => {
        await legalshieldAssociateService.homePage.headerComponent.selectMarket(testCase.market);
      });
      await test.step(`Select Plans`, async () => {
        await selectLegalshieldAssociatesPlansFromPlanDetails(testCase.planDetails, regionInfo.name, page);
      });
      await test.step(`Click Checkout Button`, async () => {
        await legalshieldAssociateService.homePage.cartComponent.clickCheckoutButton();
      });
      await test.step(`Fill Business Info Form`, async () => {
        if (testCase.planDetails?.some(plan => plan.marketingName === 'Small Business')) {
          await officeService.purchasePage.fillBusinessInfoForm('Test Business', '10101990', '111111111');
          await officeService.purchasePage.clickContinueButton();
        }
      });
      await test.step(`Fill Personal Info Form and Submit`, async () => {
        await officeService.purchasePage.fillPersonalInfoForm(
            basicUser.email,
            'Test',
            'Tester',
            '5555555555',
            'Mobile',
            regionInfo.validAddress.street,
            regionInfo.validAddress.city,
            regionInfo.validAddress.postalCode,
            '10101990',
            '333333333');
        await officeService.purchasePage.clickContinueButton();    
      });
      await test.step(`Click continue again to skip Additional Information Form`, async () => {
        await officeService.purchasePage.skipAdditionalInformationForm(testCase.planDetails);
      });
      if (process.env.USE_PROD == 'true' && testCase.prodPurchase == false) {
        console.log('* Production: Stop test at personal info page *');
        await test.step(`Assert checkoutV3 rendered`, async () => {
          await officeService.purchasePage.assertPurchasePageReached();
        });
      } else {
        await test.step(`Fill out Bank Draft Form and Continue`, async () => {
          await officeService.purchasePage.clickCreditCardBankDraftToggle();
          await officeService.purchasePage.fillBankDraftForm('00000011', '103000648', 'Test Tester');
          await officeService.purchasePage.clickPaymentContinueButton();
        });
        await test.step(`Click Submit Button`, async () => {
          await officeService.purchasePage.clickSubmitButton();
        });
        await test.step(`Assert Payment Successful Message is Visible`, async () => {
          await officeService.postPurchasePage.assertPaymentSuccessfulMessageIsVisible();
        });
      }
    });
  }
}
