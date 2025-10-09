import RegionsUtils from '../../../../../utils/regions.utils';
import { basicUser } from '../../../../../utils/user.utils';
import { legalshieldData, legalshieldCanadaData  } from './data/legalshield.data';
import { test } from '../../../../../fixtures/frontend-ui.fixture';

for (const testCase of legalshieldData.filter((testCase) => testCase.disabled == false)) {
  for (const regionUnderTest of testCase.regions) {
    test(`Legalshield - US (${testCase.testCaseName}, ${regionUnderTest}) @lsus-consumer-flow @legalshield-consumerflow @e2e ${testCase.tags}`, async ({
      legalshieldService,
      checkoutService,
    }) => {
      test.slow();
      console.log(`Test Case: Legalshield - US (${testCase.testCaseName}, ${regionUnderTest}) `);
      const regionInfo = RegionsUtils.usStates.filter((region) => region.name == regionUnderTest)[0];
      await test.step(`Navigate to legalshield.com for ${testCase.market}-${testCase.language}`, async () => {
         await legalshieldService.navigateToLegalshieldPricingAndCoveragePage(testCase.market, testCase.language);
      });
      await test.step('Block Promotional Iframe', async () => {
        // removing container prevents iframe from loading in prod, and has no adverse affects in other environments
        await legalshieldService.removeUMBContainer();
      });
      await test.step('Select Region', async () => {
        await legalshieldService.selectRegionFromDropdown(regionInfo.name);
      }); 
      await test.step('Click accept all cookies', async () => {
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
        if (testCase.userType == "Existing" ) {
          await test.step(`Enter Existing Email`, async () => {  
            await legalshieldService.embeddedCartComponent.enterExistingEmailAndLogin(basicUser.email, basicUser.password);
          });
        } else {
          await test.step(`Enter New Email`, async () => {
            await legalshieldService.embeddedCartComponent.enterNewRandomEmailAddress();
          });
        }
      });
      await test.step(`Fill out Account Information Form`, async () => {
        await legalshieldService.embeddedCartComponent.submitAccountInformationForm(
          'Test',
          'PplsiTest',            
          regionInfo.validAddress.street,
          regionInfo.validAddress.city,
          regionInfo.validAddress.postalCode,
          '5555555555',
          'Mobile',
          '10101990',
          '3333');
      });
        await test.step(`Click Continue to Payment`, async () => {
          await legalshieldService.embeddedCartComponent.clickContinueButton();
        }); 
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
    });
  } 
}

for (const testCase of legalshieldCanadaData.filter((testCase) => testCase.disabled == false)) {
  for (const regionUnderTest of testCase.regions) {
    test(`Legalshield - Canada (${testCase.testCaseName}, ${regionUnderTest}) @lsus-consumer-flow @legalshield-consumerflow @e2e ${testCase.tags}`, async ({
      legalshieldService,
      checkoutService, 
    }) => {
      test.slow();
      console.log(`Test Case: Legalshield - Canada (${testCase.testCaseName}, ${regionUnderTest}) `);
      const regionInfo = RegionsUtils.caProvinces.filter((region) => region.name == regionUnderTest)[0];
      await test.step(`Navigate to legalshield.com for ${testCase.market}-${testCase.language}`, async () => {
         await legalshieldService.navigateToLegalshieldPricingAndCoveragePage(testCase.market, testCase.language);
      }); 
      await test.step('Block Promotional Iframe', async () => {
        // removing container prevents iframe from loading in prod, and has no adverse affects in other environments
        await legalshieldService.removeUMBContainer();
      });
      await test.step('Select Region', async () => {
        await legalshieldService.selectRegionFromDropdown(regionInfo.name);
      }); 
      await test.step('Click accept all cookies', async () => {
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
        if (testCase.userType == "Existing" ) {
          await test.step(`Enter Existing Email`, async () => {  
            await legalshieldService.embeddedCartComponent.enterExistingEmailAndLogin(basicUser.email, basicUser.password);
          });
        } else {
          await test.step(`Enter New Email`, async () => {
            await legalshieldService.embeddedCartComponent.enterNewRandomEmailAddress();
          });
        }
      });
      await test.step(`Fill out Account Information Form`, async () => {
        await legalshieldService.embeddedCartComponent.submitAccountInformationForm(
          'Test',
          'PplsiTest',            
          regionInfo.validAddress.street,
          regionInfo.validAddress.city,
          regionInfo.validAddress.postalCode,
          '5555555555',
          'Mobile',
          '10101990',
          '3333');
      });
        await test.step(`Click Continue to Payment`, async () => {
          await legalshieldService.embeddedCartComponent.clickContinueButton();
        }); 
        await test.step(`Click Bank Draft Tab`, async () => {
          await legalshieldService.embeddedCartComponent.clickPaymentToggle();
        });
        await test.step(`Fill Bank Draft Form and click Purchase`, async () => {
          await legalshieldService.embeddedCartComponent.fillPaymentInfoFormWithCanadianBankDraft();
          await legalshieldService.embeddedCartComponent.clickPurchaseButton();
        });
        await test.step(`Verify Payment Successful Message`, async () => {
          await checkoutService.confirmationPage.assertPaymentSuccessfulMessage();
        });
    });
  } 
}
