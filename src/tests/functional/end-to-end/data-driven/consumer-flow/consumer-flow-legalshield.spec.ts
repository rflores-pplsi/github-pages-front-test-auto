import RegionsUtils from '../../../../../utils/regions.utils';
import { basicUser } from '../../../../../utils/user.utils';
import { legalshieldData } from './data/legalshield.data';
import { test } from '../../../../../fixtures/frontend-ui.fixture';
import { IBusinessInfoData  } from '../../../../../interfaces/checkout-interfaces';
import { getDefaultBusinessInfoData } from '../../../../../utils/business-info-utils';
import { addQueryParamToUrl } from '../../../../../utils/helpers';
import { AccountService } from '../../../../../page-objects/account/account.service';

let testDataBusiness: IBusinessInfoData;

test.beforeAll(async () => {
  testDataBusiness = getDefaultBusinessInfoData();
});

for (const testCase of legalshieldData.filter((testCase) => testCase.disabled == false)) {
  for (const regionUnderTest of testCase.regions) {
    test(`Legalshield(${testCase.testCaseName}, ${regionUnderTest}) @legalshield-consumerflow @e2e ${testCase.tags}`, async ({ 
      legalshieldService,
      checkoutService,
      accountService,
      page
    }) => {
      test.slow();
      console.log(`Test Case: Legalshield - Consumer Flow (${testCase.testCaseName}, ${regionUnderTest}) `);
      const regionInfo = RegionsUtils.usStates.filter((region) => region.name == regionUnderTest)[0];
      await test.step(`Navigate to legalshield.com for ${testCase.market}-${testCase.language}`, async () => {
         await legalshieldService.navigateToLegalshieldPricingAndCoveragePage(testCase.market, testCase.language);
      });   
      await test.step(`Add Products: ${testCase.productDetails} and proceed to checkout`, async () => {
        await legalshieldService.addProductsFromProductDetails(testCase.productDetails, regionInfo.abbrv,'600');
      });
      await test.step(`Click Checkout button`, async () => {
        await legalshieldService.marketingSiteHeaderComponent.locShoppingCartIcon.click();
        await legalshieldService.embeddedCartComponent.clickContinueButton();
     });
      await test.step(`Fill out Account Information`, async () => {
        if (testCase.userType == "Existing" ) {
          await test.step(`Enter Existing Email`, async () => {  
            await legalshieldService.embeddedCartComponent.enterExistingEmailAddress(basicUser.email, basicUser.password);
          });
          await test.step(`Add region Query param for checkout`, async () => {
            const urlWithQueryParam = await addQueryParamToUrl(page.url(), 'region', regionInfo.abbrv);
            await page.goto(urlWithQueryParam);
          });
          await test.step(`Change address`, async () => {
            await checkoutService.formsPage.changeAddress(
              regionInfo.validAddress.street,
              regionInfo.validAddress.city,
              regionInfo.validAddress.postalCode,);
          });
          if (testCase.productDetails.some(product => product.name.includes('Small Business'))) {
            await test.step(`Fill business form`, async () => {
            await checkoutService.formsPage.fillBusinessInfoForm(testDataBusiness);
          });
      }
        } else {
          await test.step(`Enter New Email`, async () => {
            await legalshieldService.embeddedCartComponent.enterNewRandomEmailAddress();
          });
          await test.step(`Fill out Account Information Form`, async () => {
            await legalshieldService.embeddedCartComponent.submitAccountInformationForm(
              'Test',
              'Tester',            
              regionInfo.validAddress.street,
              regionInfo.validAddress.city,
              regionInfo.validAddress.postalCode,
              '5555555555',
              'Mobile',
              '10101990',
              '3333');
          }); 
          if (process.env.USE_PROD == 'true' && testCase.prodPurchase == false) {
            console.log('* Production: Stop test at personal info page *');
            await test.step(`Assert Accounts Page URL`, async () => {            
              // TBD
            });
          } else {
            await test.step(`Click Continue to Payment`, async () => {
              await legalshieldService.embeddedCartComponent.clickContinueButton();
            }); 
            if (testCase.productDetails.some(product => product.name.includes('Small Business'))) {  
              await test.step(`Fill business form`, async () => {
                await legalshieldService.embeddedCartComponent.fillBusinessInformationFields(
                  'Test Business',
                  '10101990',
                  '111111111'
                );
              }); 
            }              
          }
        }
      });       
      await test.step(`Verify plans and supplements in order summary `, async () => {
        await checkoutService.orderSummaryComponent.assertExpectedProductsAndCostsDisplayed(testCase.productDetails);
      });  
      await test.step(`Verify totals in order summary `, async () => {
        await checkoutService.orderSummaryComponent.assertTermTotal(testCase.term, testCase.termTotal);
        await checkoutService.orderSummaryComponent.assertTotalDueToday(testCase.totalDueToday);
      });
      if (process.env.USE_PROD == 'true' && testCase.prodPurchase == false) {
        // This case only runs through purchase in prod for a select 
        console.log('* Production: Stop test at personal info page *');
          await test.step(`Assert Continue to Payment Button`, async () => {
            await checkoutService.formsPage.assertContinueToPaymentButtonVisible();
          });
      } else {
        // For cases that continue purchase and proceed to Accounts service
        await test.step(`Click on Continue to Payment button`, async () => {
          await checkoutService.formsPage.clickContinueToPaymentButton();
        });
        await test.step(`Click Bank Draft Tab`, async () => {
          await checkoutService.paymentPage.clickPaymentToggle();
        });
        await test.step(`Fill Bank Draft Form and click Purchase`, async () => {
          await checkoutService.paymentPage.fillPaymentInfoFormWithBankDraft();
          await checkoutService.paymentPage.clickPurchaseButton();
        });
        await test.step(`Verify Payment Successful Message`, async () => {
          await checkoutService.confirmationPage.assertPaymentSuccessfulMessage();
        });
        await test.step(`Click Finish setting up your account button`, async () => {
          await checkoutService.confirmationPage.clickFinishSettingUpAccountButton();
        });
        await test.step(`Assert Account service reached`, async () => {
          await accountService.overviewPage.assertAccountsOverviewPageReached();
        });
      }
    });
  } 
}
