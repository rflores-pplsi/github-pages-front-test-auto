import { expect, test } from '@playwright/test';
import RegionsUtils from '../../../../../utils/regions.utils';
import { basicUser } from '../../../../../utils/user.utils';
import { shieldAssociateMultiSelectData } from './data/shieldassociate.data';
import UrlsUtils from '../../../../../utils/urls.utils';
import { ShieldAssociateService } from '../../../../../page-objects/shieldassociate/shieldassociate-service';
import { CommonCheckoutService, CommonLoginService, CommonAssociateOfficeService } from '@legalshield/frontend-automation-commons';

let shieldAssociateService: ShieldAssociateService;
let commonCheckoutService: CommonCheckoutService;
let commonLoginService: CommonLoginService;
let commonAssociateOfficeService: CommonAssociateOfficeService;

test.beforeEach(async ({ context, page }) => {
  shieldAssociateService = new ShieldAssociateService(context, page);
  commonLoginService = new CommonLoginService(page);
  commonCheckoutService = new CommonCheckoutService(context, page);
  commonAssociateOfficeService = new CommonAssociateOfficeService(page);
  test.setTimeout(120000);
});

for (const testCase of shieldAssociateMultiSelectData.filter((testCase) => testCase.disabled == false)) {
  for (const regionUnderTest of testCase.regions) {
    test(`${testCase.testCaseName}, ${regionUnderTest} MultiSelect -> Checkout -> Accounts @e2e @ConsumerFlowShieldAssociates`, async ({ page }) => {
      console.log(`Test Case: ${testCase.testCaseName}, ${regionUnderTest} -> Checkout -> Accounts`);
      const regionInfo = RegionsUtils.usStates.filter((region) => region.name == regionUnderTest)[0];
      await test.step(`Navigate to shieldassociate.com/BuyNow`, async () => {
        await page.goto(`https://apptestuser.${UrlsUtils.shieldAssociateService.baseUrlNoSubdomain}/BuyNow`);
      });
      await test.step(`Select Market`, async () => {
        await shieldAssociateService.buyNowPage.globalFooterComponent.changeMarket(testCase.market);
      });
      await test.step(`Select Plans`, async () => {
        await shieldAssociateService.buyNowPage.selectPlans(testCase.planDetails);
      });
      await test.step(`Assert Estimated Total`, async () => {
        // await shieldAssociateService.buyNowPage.assertEstimatedTotal(testCase.planDetails);
      });
      await test.step(`Click Continue Button`, async () => {
        await shieldAssociateService.buyNowPage.locContinueButton.click();
      });
      await test.step(`Select Plan Options`, async () => {
        await shieldAssociateService.buyNowPage.configureCoverage(testCase.planDetails, regionUnderTest);
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
      await test.step(`Fill all required fields on personal info ${regionInfo.name}`, async () => {
        await commonCheckoutService.personalInfoPage.fillAllNonBusinessFormFields(
          'Test',
          'Tester',
          '5555555555',
          'Mobile',
          regionInfo.validAddress.street,
          regionInfo.validAddress.city,
          regionInfo.validAddress.postalCode,
          '10',
          '10',
          '1990',
          '3333333333'
        );
        if (await commonCheckoutService.personalInfoPage.locBusinessNameInput.isVisible()) {
          await commonCheckoutService.personalInfoPage.fillBusinessInformationFields('Testers Inc', '10', '10', '2021', '945433337');
        }
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
        expect(await commonCheckoutService.personalInfoPage.orderSummaryComponent.locTotalContainer.innerText()).toContain(testCase.termTotal);
      });
      await test.step(`Click Save and Continue and wait for Payment page`, async () => {
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
        expect(await commonCheckoutService.paymentPage.orderSummaryComponent.locTotalContainer.innerText()).toContain(testCase.termTotal);
      });
      await test.step('Click on Bank Draft Toggle', async () => {
        await commonCheckoutService.paymentPage.bankDraftComponent.locCreditCardBankDraftToggle.click();
      });
      await test.step('Complete Bank Draft Form', async () => {
        await commonCheckoutService.paymentPage.bankDraftComponent.completeBankDraftFormUnitedStates('1000123546', '103000648', 'Test');
      });
      await test.step('Click Purchase Button and wait for Confirmation Page', async () => {
        await commonCheckoutService.paymentPage.clickPurchaseButtonAndWaitForConfirmationPageToLoad();
      });
      if (testCase.planDetails.some((item) => item.marketingName === 'Associate')) {
        await test.step(`Click Continue with Associate Start Up button`, async () => {
          await commonCheckoutService.associateStartupPage.locContinueAssociateStartupButton.click();
        });
        await test.step(`Select First Site Name`, async () => {
          await commonAssociateOfficeService.yourWebsitePage.locFirstSiteNameOption.check();
        });
        await test.step(`Click next button`, async () => {
          await commonAssociateOfficeService.yourWebsitePage.locNextButton.click();
        });
        await test.step(`Complete payment information form`, async () => {
          await commonAssociateOfficeService.commissionDetailsPage.completePaymentInformationForm('1000123546', '103000648', 'Test');
        });
        await test.step(`Click Save button`, async () => {
          await commonAssociateOfficeService.commissionDetailsPage.locSaveButton.click();
        });
        await test.step(`Select Payment method`, async () => {
          await commonAssociateOfficeService.commissionDetailsPage.selectPaymentMethod('3546');
        });
        await test.step(`Select Payment method`, async () => {
          await commonAssociateOfficeService.commissionDetailsPage.locNextButton.click();
        });
        await test.step(`Skip Co-applicant screen`, async () => {
          await commonAssociateOfficeService.coApplicantPage.locSkipButton.click();
        });
        await test.step(`Assert Associate-Office Page URL`, async () => {
          await expect(page).toHaveURL(new RegExp('associate-office'));
        });
      } else {
        await test.step(`Verify Plan Details in Confirmation Page Order Summary`, async () => {
          // await commonCheckoutService.confirmationPage.assertDisplayedProductsIncludeExpectedData(testCase.planDetails);
        });
        await test.step(`Click on the My account option in the header dropdown`, async () => {
          await commonCheckoutService.confirmationPage.locLetsGoButton.click();
        });
        await test.step(`Assert Accounts Page URL`, async () => {
          await expect(page).toHaveURL(new RegExp('accounts'));
        });
      }
    });
  }
}
