import { expect } from '@playwright/test';
import RegionsUtils from '../../../../../utils/regions.utils';
import { basicUser } from '../../../../../utils/user.utils';
import { legalshieldAssociateBuyNowData, legalshieldAssociateBuyNowCanadaData } from './data/legalshieldassociate-buynow.data';
import UrlsUtils from '../../../../../utils/urls.utils';
import { test } from '../../../../../fixtures/frontend-ui.fixture';

for (const testCase of legalshieldAssociateBuyNowData.filter((testCase) => testCase.disabled == false)) {
  for (const regionUnderTest of testCase.regions) {
    test.fixme(
      `Legalshield Associates (buynow) - Consumer Flow (${testCase.testCaseName}, ${regionUnderTest}) @legalshieldassociates-buynow-consumerflow ${testCase.tag}`,
      async ({ page, commonAssociateOfficeService, commonCheckoutService, commonLoginService, legalshieldAssociateService }) => {
        console.log(`Test Case: Legalshield Associates Buynow - Consumer Flow (${testCase.testCaseName}, ${regionUnderTest})`);
        test.slow();
        const regionInfo = RegionsUtils.usStates.filter((region) => region.name == regionUnderTest)[0];
        await test.step(`Navigate to legalshieldassociate.com/BuyNow`, async () => {
          await page.goto(`https://apptestuser.${UrlsUtils.legalshieldAssociateService.baseUrlNoSubdomain}/BuyNow`);
        });
        await test.step(`Select Market`, async () => {
          await legalshieldAssociateService.headerComponent.selectMarket(testCase.market);
        });
        await test.step(`Select Plans`, async () => {
          await legalshieldAssociateService.buyNowPage.newSelectPlans(testCase.planDetails, regionUnderTest);
        });
        await test.step(`Click Shopping Cart`, async () => {
          await legalshieldAssociateService.headerComponent.locShoppingCartIcon.click();
          await legalshieldAssociateService.cartComponent.selectState(regionInfo.name);
          await legalshieldAssociateService.cartComponent.locCheckoutButton.click();
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
        //TODO: remove after finding a way to explicitly wait
        await page.waitForTimeout(1800);
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
        });
        await test.step(`Verify Plans displayed in Order Summary on Personal Info Page`, async () => {
          await commonCheckoutService.personalInfoPage.orderSummaryComponent.assertDisplayedPlansIncludeExpectedData(testCase.planDetails);
        });
        await test.step(`Verify Supplements displayed in Order Summary on Personal Info Page`, async () => {
          await commonCheckoutService.personalInfoPage.orderSummaryComponent.assertDisplayedSupplementsIncludeExpectedData(
            testCase.planDetails[0].supplements
          );
        });
        await test.step(`Verify Order Total in Order Summary on Personal Info Page`, async () => {
          expect.soft(await commonCheckoutService.personalInfoPage.orderSummaryComponent.locTotalContainer.innerText()).toContain(testCase.termTotal);
        });
        if (process.env.USE_PROD == 'true') {
          console.log('* Production: Stop test at personal info page *');
          await test.step(`Assert Checkout Service Reached`, async () => {
            await commonCheckoutService.personalInfoPage.stepperComponent.locStepCircle1Current.isVisible();
          });
        } else {
          await test.step(`Click Save and Continue`, async () => {
            await commonCheckoutService.personalInfoPage.clickSaveAndContinueAndWaitForPaymentPageToLoad();
          });

          //Temporary until associate info checkout page done
          if (testCase.planDetails.some((item) => item.marketingName === 'Associate')) {
            await test.step(`Click continue on Associate Info Page`, async () => {
              await page.click('//button[@type="submit"]');
            });
          }

          // await test.step(`Click Save and Continue and wait for Payment page`, async () => {
          //   //TODO: someday remove this if you have time to figure out the click not responding
          //   await page.waitForTimeout(1000);
          //   await commonCheckoutService.personalInfoPage.clickSaveAndContinueAndWaitForPaymentPageToLoad();
          // });
          await test.step(`Verify Plans displayed in Order Summary on on Payment Page`, async () => {
            await commonCheckoutService.personalInfoPage.orderSummaryComponent.assertDisplayedPlansIncludeExpectedData(testCase.planDetails);
          });
          await test.step(`Verify Supplements displayed in Order Summary on on Payment Page`, async () => {
            await commonCheckoutService.personalInfoPage.orderSummaryComponent.assertDisplayedSupplementsIncludeExpectedData(
              testCase.planDetails[0].supplements
            );
          });
          await test.step(`Verify Order Total in Order Summary on Payment Page`, async () => {
            expect.soft(await commonCheckoutService.paymentPage.orderSummaryComponent.locTotalContainer.innerText()).toContain(testCase.termTotal);
          });
          await test.step('Click on Bank Draft Toggle', async () => {
            await commonCheckoutService.paymentPage.bankDraftComponent.locCreditCardBankDraftToggle.click();
          });
          await test.step('Complete Bank Draft Form', async () => {
            await commonCheckoutService.paymentPage.bankDraftComponent.completeBankDraftFormUnitedStates('1000123546', '103000648', 'Test');
          });
          // await test.step('Click Purchase Button and wait for Confirmation Page', async () => {
          //   await commonCheckoutService.paymentPage.clickPurchaseButtonAndWaitForConfirmationPageToLoad();
          // });
          // if (testCase.planDetails.some((item) => item.marketingName === 'Associate')) {
          //   await test.step(`Click Continue with Associate Start Up button`, async () => {
          //     await commonCheckoutService.associateStartupPage.locContinueAssociateStartupButton.click();
          //   });
          // await test.step(`Select First Site Name`, async () => {
          //   await commonAssociateOfficeService.yourWebsitePage.locFirstSiteNameOption.check();
          // });
          // await test.step(`Click next button`, async () => {
          //   await commonAssociateOfficeService.yourWebsitePage.locNextButton.click();
          // });
          // await test.step(`Complete payment information form`, async () => {
          //   await commonAssociateOfficeService.commissionDetailsPage.completePaymentInformationForm('1000123546', '103000648', 'Test');
          // });
          // await test.step(`Click Save button`, async () => {
          //   await commonAssociateOfficeService.commissionDetailsPage.locSaveButton.click();
          // });
          // await test.step(`Select Payment method`, async () => {
          //   await commonAssociateOfficeService.commissionDetailsPage.selectPaymentMethod('3546');
          // });
          // await test.step(`Click Next Button`, async () => {
          //   await commonAssociateOfficeService.commissionDetailsPage.locNextButton.click();
          // });
          // await test.step(`Skip Co-applicant screen`, async () => {
          //   await commonAssociateOfficeService.coApplicantPage.locSkipButton.click();
          // });
          // await test.step(`Assert Associate-Office Page URL`, async () => {
          //   await expect.soft(page).toHaveURL(new RegExp('associate-office'));
          // });
          // } else {
          //   await test.step(`Verify Plan Details in Confirmation Page Order Summary`, async () => {
          //     // await commonCheckoutService.confirmationPage.assertDisplayedProductsIncludeExpectedData(testCase.planDetails);
          //   });
          //   await test.step(`Click on the My account option in the header dropdown`, async () => {
          //     await commonCheckoutService.confirmationPage.locLetsGoButton.click();
          //   });
          //   await test.step(`Assert Accounts Page URL`, async () => {
          //     await expect.soft(page).toHaveURL(new RegExp('accounts'));
          //   });
          // }
        }
      }
    );
  }
}

for (const testCase of legalshieldAssociateBuyNowCanadaData.filter((testCase) => testCase.disabled == false)) {
  for (const regionUnderTest of testCase.regions) {
    test.skip(`${testCase.testCaseName}, ${regionUnderTest}: Checkout -> Accounts @legalshieldassociates-buynow-consumerflow @cartbuilder ${testCase.tag}`, async ({
      page,
      commonAssociateOfficeService,
      commonCheckoutService,
      commonLoginService,
      legalshieldAssociateService,
    }) => {
      console.log(`Test Case: ${testCase.testCaseName}, ${regionUnderTest} -> Checkout -> Accounts`);
      test.setTimeout(200000);
      const regionInfo = RegionsUtils.caProvinces.filter((region) => region.name == regionUnderTest)[0];
      await test.step(`Navigate to shieldassociate.com/BuyNow?market=fr-ca`, async () => {
        await page.goto(`https://apptestuser.${UrlsUtils.legalshieldAssociateService.baseUrlNoSubdomain}/BuyNow`);
      });
      await test.step(`Select Market`, async () => {
        await legalshieldAssociateService.headerComponent.selectMarket(testCase.market);
      });
      await test.step(`Select Plans`, async () => {
        await legalshieldAssociateService.buyNowPage.selectPlans(testCase.planDetails);
      });
      await test.step(`Assert Estimated Total`, async () => {
        // await legalshieldAssociateService .buyNowPage.assertEstimatedTotal(testCase.planDetails);
      });
      await test.step(`Click Continue Button`, async () => {
        await legalshieldAssociateService.buyNowPage.locContinueButton.click();
      });
      await test.step(`Select Plan Options`, async () => {
        await legalshieldAssociateService.buyNowPage.configureCoverage(testCase.planDetails, regionUnderTest);
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
      });
      if (process.env.USE_PROD == 'true') {
        await test.step(`Assert Checkout Service Reached`, async () => {
          await commonCheckoutService.personalInfoPage.stepperComponent.locStepCircle1Current.isVisible();
        });
        console.log('* Production: Stop test at personal info page *');
      } else {
        await test.step(`Fill all required fields on personal info ${regionInfo.name}`, async () => {
          await page.waitForTimeout(1800);
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
          });
        });
        await test.step(`Verify Plans displayed in Order Summary on Personal Info Page`, async () => {
          await commonCheckoutService.personalInfoPage.orderSummaryComponent.assertDisplayedPlansIncludeExpectedData(testCase.planDetails);
        });
        await test.step(`Verify Supplements displayed in Order Summary on Personal Info Page`, async () => {
          await commonCheckoutService.personalInfoPage.orderSummaryComponent.assertDisplayedSupplementsIncludeExpectedData(
            testCase.planDetails[0].supplements
          );
        });
        await test.step(`Verify Order Total in Order Summary on Personal Info Page`, async () => {
          expect.soft(await commonCheckoutService.personalInfoPage.orderSummaryComponent.locTotalContainer.innerText()).toContain(testCase.termTotal);
        });
        await test.step(`Click Save and Continue and wait for Payment page`, async () => {
          //TODO: someday remove this if you have time to figure out the click not responding
          await page.waitForTimeout(1000);
          await commonCheckoutService.personalInfoPage.clickSaveAndContinueAndWaitForPaymentPageToLoad();
        });
        await test.step(`Verify Plans displayed in Order Summary on on Payment Page`, async () => {
          await commonCheckoutService.personalInfoPage.orderSummaryComponent.assertDisplayedPlansIncludeExpectedData(testCase.planDetails);
        });
        await test.step(`Verify Supplements displayed in Order Summary on on Payment Page`, async () => {
          await commonCheckoutService.personalInfoPage.orderSummaryComponent.assertDisplayedSupplementsIncludeExpectedData(
            testCase.planDetails[0].supplements
          );
        });
        await test.step(`Verify Order Total in Order Summary on Payment Page`, async () => {
          expect.soft(await commonCheckoutService.paymentPage.orderSummaryComponent.locTotalContainer.innerText()).toContain(testCase.termTotal);
        });
        await test.step('Click on Bank Draft Toggle', async () => {
          await commonCheckoutService.paymentPage.bankDraftComponent.locCreditCardBankDraftToggle.click();
        });
        await test.step('Complete Bank Draft Form', async () => {
          await commonCheckoutService.paymentPage.bankDraftComponent.completeBankDraftFormCanada('0000011', '11242', '260', 'Tester');
        });

        await test.step('Click Purchase Button and wait for Confirmation Page', async () => {
          await commonCheckoutService.paymentPage.clickPurchaseButtonAndWaitForConfirmationPageToLoad();
        });
        if (testCase.planDetails.some((item) => item.marketingName === 'Associé')) {
          await test.step(`Click Continue with Associate Start Up button`, async () => {
            await commonCheckoutService.associateStartupPage.locContinueAssociateStartupButton.click();
          });
          await test.step(`Select First Site Name`, async () => {
            await commonAssociateOfficeService.yourWebsitePage.locFirstSiteNameOptionFrench.click();
          });
          await test.step(`Click next button`, async () => {
            await commonAssociateOfficeService.yourWebsitePage.locNextButton.click();
          });
          await test.step(`Complete payment information form`, async () => {
            await commonAssociateOfficeService.commissionDetailsPage.completePaymentInformationFormFrench('1000123546', '11111', '222', 'Test');
          });
          await test.step(`Click Save button`, async () => {
            await commonAssociateOfficeService.commissionDetailsPage.locSaveButton.click();
          });
          await test.step(`Select Payment method`, async () => {
            await commonAssociateOfficeService.commissionDetailsPage.selectPaymentMethod('3546');
          });
          await test.step(`Click Next Button`, async () => {
            await commonAssociateOfficeService.commissionDetailsPage.locNextButton.click();
          });
          await test.step(`Skip Co-applicant screen`, async () => {
            await commonAssociateOfficeService.coApplicantPage.locSkipButton.click();
          });
          await test.step(`Assert Associate-Office Page URL`, async () => {
            await expect.soft(page).toHaveURL(new RegExp('associate-office'));
          });
        } else {
          await test.step(`Verify Plan Details in Confirmation Page Order Summary`, async () => {
            // await commonCheckoutService.confirmationPage.assertDisplayedProductsIncludeExpectedData(testCase.planDetails);
          });
          await test.step(`Click on the My account option in the header dropdown`, async () => {
            await commonCheckoutService.confirmationPage.locLetsGoButton.click();
          });
          await test.step(`Assert Accounts Page URL`, async () => {
            await expect.soft(page).toHaveURL(new RegExp('accounts'));
          });
        }
      }
    });
  }
}
