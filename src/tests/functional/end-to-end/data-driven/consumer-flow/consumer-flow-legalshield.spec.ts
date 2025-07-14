import RegionsUtils from '../../../../../utils/regions.utils';
import { basicUser } from '../../../../../utils/user.utils';
import { legalshieldData } from './data/legalshield.data';
import { test } from '../../../../../fixtures/frontend-ui.fixture';
import { IBusinessInfoData  } from '../../../../../interfaces/checkout-interfaces';
import { getDefaultBusinessInfoData } from '../../../../../utils/business-info-utils';

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
      commonLoginService
    }) => {
      test.slow();
      console.log(`Test Case: Legalshield - Consumer Flow (${testCase.testCaseName}, ${regionUnderTest}) `);
      const regionInfo = RegionsUtils.usStates.filter((region) => region.name == regionUnderTest)[0];
      await test.step(`Navigate to legalshield.com for ${testCase.market}-${testCase.language}`, async () => {
         await legalshieldService.navigateToLegalshieldPricingAndCoveragePage(testCase.market, testCase.language);
      }); 
      await test.step(`Accept All Cookies`, async () => {
        await legalshieldService.clickAcceptAllButton();
      });  
      await test.step(`Add Products: ${testCase.productDetails} and proceed to checkout`, async () => {
        await legalshieldService.addProductsFromProductDetails(testCase.productDetails, regionInfo.abbrv);
      });
      await test.step(`Click Shopping Cart to open embedded cart`, async () => {
        await legalshieldService.headerComponent.locShoppingCartIcon.click();
      });
      await test.step(`Assert expected products and costs`, async () => {
        await legalshieldService.embeddedCartComponent.assertExpectedProductsAndCostsDisplayed(testCase.productDetails);
      });
       await test.step(`Verify total due today`, async () => {
        await legalshieldService.embeddedCartComponent.assertTotalDueToday(testCase.totalDueToday);
      });
      await test.step(`Click Checkout button`, async () => {
        await legalshieldService.embeddedCartComponent.clickCheckoutButton();
      });
      await test.step(`Fill out Account Information`, async () => {
        if (testCase.userType == "New" ) {
          await test.step(`Enter Existing Email`, async () => {  
            await legalshieldService.embeddedCartComponent.enterExistingEmailAddress(basicUser.email, basicUser.password);
          });
          await test.step(`Change address`, async () => {
            await legalshieldService.embeddedCartComponent.changeAddress(
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
      if (process.env.USE_PROD == 'true' && testCase.prodPurchase == false) {
        // This case only runs through purchase in prod for a select 
        console.log('* Production: Stop test at personal info page *');
          await test.step(`Assert Continue to Payment Button`, async () => {
            await checkoutService.formsPage.assertContinueToPaymentButtonVisible();
          });
      } else {
        await test.step(`Click Bank Draft Tab`, async () => {
          await legalshieldService.embeddedCartComponent.clickPaymentToggle();
        });
        await test.step(`Fill Bank Draft Form and click Purchase`, async () => {
          await legalshieldService.embeddedCartComponent.fillPaymentInfoFormWithBankDraft();
          await legalshieldService.embeddedCartComponent.clickPurchaseButton();
        });
        await test.step(`Verify Payment Successful Message`, async () => {
          await checkoutService.confirmationPage.assertPaymentSuccessfulMessage();
        });
        await test.step(`Click Finish setting up your account button`, async () => {
          await checkoutService.confirmationPage.clickFinishSettingUpAccountButton();
        });
        await test.step(`Login with basic account`, async () => {
          await commonLoginService.loginPage.login(basicUser.email, basicUser.password);
        });
        await test.step(`Assert Account service reached`, async () => {
          await accountService.overviewPage.assertAccountsOverviewPageReached();
        });
      }
    });
  } 
}
