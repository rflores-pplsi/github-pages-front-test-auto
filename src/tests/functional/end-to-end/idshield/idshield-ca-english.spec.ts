import RegionsUtils from '../../../../utils/regions.utils';
import { basicUser } from '../../../../utils/user.utils';
import { expect } from '@playwright/test';
import UrlsUtils from '../../../../utils/urls.utils';
import { test } from '../../../../fixtures/frontend-ui.fixture';

const regionsUnderTest = ['Manitoba'];
for (const regionUnderTest of regionsUnderTest) {
  test(`IdShield (Individual Plan, en-CA, ${regionUnderTest}) -> Checkout -> Accounts @smoke @e2e`, async ({
    page,
    idshieldService,
    commonLoginService,
    commonCheckoutService,
  }) => {
    console.log(`Test Case: IdShield (Individual Plan, en-CA, ${regionUnderTest}) -> Checkout -> Accounts`);
    test.setTimeout(120000);
    const regionInfo = RegionsUtils.caProvinces.filter((region) => region.name == regionUnderTest)[0];
    const homeAddress = regionInfo.validAddress.street;
    const city = regionInfo.validAddress.city;
    const postalCode = regionInfo.validAddress.postalCode;
    const regionAbbreviation = regionInfo.abbrv;

    await test.step(`Navigate to idshield canada page`, async () => {
      await page.goto(UrlsUtils.marketingSitesUrls.idShieldCAUrl);
    });
    await test.step(`Change Region`, async () => {
      await idshieldService.idshieldPage.selectRegion(regionUnderTest, regionAbbreviation);
      await idshieldService.idshieldPage.locUpdateRegionButton.click();
      await page.waitForSelector(`//div[(@id="page-container") and contains(.,"${regionsUnderTest}")]`);
    });
    await test.step(`Click on the Sign Up button`, async () => {
      await idshieldService.idshieldPage.clickGetStartedButton('Individual Plan');
    });
    await test.step(`Choose Account by Email`, async () => {
      await commonCheckoutService.accountPage.locEmailAddressInput.fill(basicUser.email);
      await commonCheckoutService.accountPage.locContinueButton.click();
      await commonCheckoutService.accountPage.locClickHereToLoginButton.click();
      await commonLoginService.whatsYourEmailPage.locEmailAddressInput.fill(basicUser.email);
      await commonLoginService.whatsYourEmailPage.locContinueButton.click();
    });
    await test.step(`Log in with only password to reach checkout service`, async () => {
      await commonLoginService.loginPage.loginOnlyPassword(basicUser.password);
    });
    await test.step(`Validate Order Summary on Personal Info Page`, async () => {
      expect(await commonCheckoutService.personalInfoPage.orderSummaryComponent.locTotalContainer.innerText()).toContain('$14.95');
    });
    await test.step(`Update Personal Info to match region`, async () => {
      await commonCheckoutService.personalInfoPage.fillAllNonBusinessFormFields(
        'Automation',
        'Tester',
        '5555555555',
        'Mobile',
        homeAddress,
        city,
        postalCode,
        '10',
        '10',
        '2001',
        '3333'
      );
    });
    await test.step(`Click Save and Continue and wait for Payment page to load`, async () => {
      await commonCheckoutService.personalInfoPage.clickSaveAndContinueAndWaitForPaymentPageToLoad();
    });
    await test.step(`Validate Order Summary on Payment Info Page`, async () => {
      expect(await commonCheckoutService.paymentPage.orderSummaryComponent.locTotalContainer.innerText()).toContain('$14.95');
    });
    await test.step(`Click on the Bank Draft Toggle`, async () => {
      await commonCheckoutService.paymentPage.bankDraftComponent.locCreditCardBankDraftToggle.click();
    });
    await test.step(`Fill out Bank Draft form and Submit`, async () => {
      await commonCheckoutService.paymentPage.bankDraftComponent.completeBankDraftFormCanada('0000000', '11242', '260', 'Tester');
    });
    if (process.env.USE_PROD == 'true') {
      console.log('* Do not finish transaction in PRODUCTION environment *');
    } else {
      await test.step(`Click on the Purchase button`, async () => {
        await commonCheckoutService.paymentPage.bankDraftComponent.locPurchaseButton.click();
      });
      await test.step(`Click Let's Go Link`, async () => {
        await commonCheckoutService.paymentPage.confirmationPage.locLetsGoButton.click();
      });
      await test.step(`Assert Accounts Page URL`, async () => {
        await expect(page).toHaveURL(new RegExp('accounts'));
      });
    }
  });
}
