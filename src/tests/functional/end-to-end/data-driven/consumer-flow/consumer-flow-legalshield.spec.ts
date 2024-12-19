import { expect, Page } from '@playwright/test';
import RegionsUtils from '../../../../../utils/regions.utils';
import { basicUser } from '../../../../../utils/user.utils';
import { legalshieldData } from './data/legalshield.data';
import { test } from '../../../../../fixtures/frontend-ui.fixture';
import UrlsUtils from '../../../../../utils/urls.utils';
import { IAccountInfoData, ISecurityInfoData, IBusinessInfoData  } from '../../../../../interfaces/checkout-interfaces';
import { getDefaultAccountInfoData } from '../../../../../utils/account-info-utils';
import { getDefaultSecurityInfoData } from '../../../../../utils/security-info-utils';
import { getDefaultBusinessInfoData } from '../../../../../utils/business-info-utils';

const urlsUtils = new UrlsUtils();
let testDataAccount: IAccountInfoData;
let testDataBusiness: IBusinessInfoData;
let testDataSecurity: ISecurityInfoData;

test.beforeAll(async () => {
  testDataAccount = getDefaultAccountInfoData(); // eslint-disable-line no-undef
  testDataBusiness = getDefaultBusinessInfoData(); // eslint-disable-line no-undef
  testDataSecurity = getDefaultSecurityInfoData(); // eslint-disable-line no-undef
});

for (const testCase of legalshieldData.filter((testCase) => testCase.disabled == false)) {
  for (const regionUnderTest of testCase.regions) {
    test(`Legalshield(${testCase.testCaseName}, ${regionUnderTest}) @legalshield-consumerflow ${testCase.tags}`, async ({ 
      legalshieldService,
      checkoutService,
      commonLoginService,
      accountService,
      commonCheckoutService,
      page
    }) => {
      test.slow();
      console.log(`Test Case: Legalshield - Consumer Flow (${testCase.testCaseName}, ${regionUnderTest}) `);
      const regionInfo = RegionsUtils.usStates.filter((region) => region.name == regionUnderTest)[0];
      await test.step(`Navigate to legalshield.com for ${testCase.market}-${testCase.language}`, async () => {
         await legalshieldService.navigateToLegalshieldPricingAndCoveragePage(testCase.market, testCase.language);
      });
      await test.step(`Change Region`, async () => {
        await legalshieldService.setCookie('pplsi-region', regionInfo.abbrv);
      });
      await test.step(`Add Products: ${testCase.productDetails} and proceed to checkout`, async () => {
        await legalshieldService.addProductsFromProductDetails(testCase.productDetails);
      });
      await test.step(`Verify plans and supplements in order summary `, async () => {
        await checkoutService.orderSummaryComponent.assertExpectedProductsAndCostsDisplayed(testCase.productDetails);
      });  
      await test.step(`Verify totals in order summary `, async () => {
        await checkoutService.orderSummaryComponent.assertTermTotal(testCase.term, testCase.termTotal);
        await checkoutService.orderSummaryComponent.assertTotalDueToday(testCase.totalDueToday);
      });     
      if (process.env.USE_PROD == 'true') {
        console.log('* Production: Stop test at personal info page *');
        await test.step(`Assert Checkout Service Reached`, async () => {
          await checkoutService.formsPage.page.waitForURL(new RegExp('checkout'));
        });
      } else {
        await test.step(`Choose Account by Email and Login`, async () => {
          if (testCase.userType == 'Existing') {
            await checkoutService.formsPage.enterEmailOfExistingAddress(basicUser.email);
            await checkoutService.formsPage.clickSignInButton();
            await commonLoginService.whatsYourEmailPage.enterEmailAndContinue(basicUser.email);
            await commonLoginService.loginPage.loginOnlyPassword(basicUser.password);
          } else {
            await checkoutService.formsPage.enterNewRandomEmailAddress();
          }
        });
        await test.step(`Fill all required fields on forms page and continue`, async () => {
          await checkoutService.formsPage.fillAccountAndSecurityInfoForm(testDataAccount, testDataSecurity);
          // fill out business form for appropriate plans
          if (testCase.productDetails.some(detail =>Object.values(detail).some(value =>['Essentials', 'Plus', 'Pro'].some(keyword => value.toString().includes(keyword))))) {
            await checkoutService.formsPage.fillBusinessInfoForm(testDataBusiness);
          }
          await checkoutService.formsPage.clickContinueToPaymentButton();
        }); 
        await test.step(`Click Bank Draft Tab`, async () => {
          await checkoutService.paymentPage.clickPaymentToggle();
        });
        await test.step(`Fill Bank Draft Form and click Purchase`, async () => {
          await checkoutService.paymentPage.fillPaymentInfoFormWithBankDraft();
          await checkoutService.paymentPage.clickPurchaseButton();
        });
        await test.step(`Click on Finish setting up your account button`, async () => {
          await checkoutService.confirmationPage.clickFinishSettingUpAccountButton();
        });
        //TODO: move this assertion to page model
        await test.step(`Assert Accounts Page URL`, async () => {
          if (testCase.userType == 'New') {
            await commonLoginService.whatsYourEmailPage.enterEmailAndContinue(basicUser.email);
            await commonLoginService.loginPage.loginOnlyPassword(basicUser.password);
          } 
          await accountService.overviewPage.assertAccountsOverviewPageReached();
        });
      }
    });
  } 
}
