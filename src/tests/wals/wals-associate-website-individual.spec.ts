import { test } from '@playwright/test';
// import { LoginPage } from '../../page-objects-refactored/login/login.page';
import { IDShieldUSPage } from '../../page-objects-refactored/qa-maintenance-list/d2c-idshield-us-marketingsite.page';
import { D2CLegalShieldCaPage } from '../../page-objects-refactored/qa-maintenance-list/d2c-legalshield-ca.page';
import DataUtils from '../../utils/Tests.Data';
import * as dotenv from 'dotenv';
import { WalsAssociateWebsitePage } from '../../page-objects-refactored/wals/wals-associate-website.page';
import UrlsUtils from '../../utils/urls.utils';
dotenv.config();

// create instance of Page
let idShieldUSPage: IDShieldUSPage;
// let loginPage: LoginPage;
let d2cLegalShieldCaPage: D2CLegalShieldCaPage;
let walsAssociateWebsitePage: WalsAssociateWebsitePage;

// Setup environment before each test
test.beforeEach(async ({ page }) => {
  idShieldUSPage = new IDShieldUSPage(page);
  // loginPage = new LoginPage(context, page);
  d2cLegalShieldCaPage = new D2CLegalShieldCaPage(page);
  walsAssociateWebsitePage = new WalsAssociateWebsitePage(page);

  // test.slow triples the default wait times
  test.slow();
});
test('D2E idShield US marketing individual monthly plan', async () => {
  test.slow;
  await test.step('Navigate to legalshield CA marketing site', async () => {
    await walsAssociateWebsitePage.navigateToEnglishWalsUSPage(UrlsUtils.wals.urls.urlSpUS);
  });
  await test.step('Choose a region', async () => {
    await walsAssociateWebsitePage.changeStateinformation(DataUtils.data.testingHarness.us.city.VA);
  });
  await test.step('Become an associate', async () => {
    await walsAssociateWebsitePage.becomeAssociate();
  });
  await test.step('Pick a plan', async () => {
    test.slow;
    await walsAssociateWebsitePage.associateWebsiteLocBtnGetAPlan.click();
    await walsAssociateWebsitePage.associateWebsiteLocChkBNo.click();
    await walsAssociateWebsitePage.associateWebsiteLocBtnContinue.click();
    await walsAssociateWebsitePage.associateWebsiteLocBtnCheckout.click();
  });
  await test.step('Fill out personal info', async () => {
    await walsAssociateWebsitePage.filloutContactInformationForm(
      DataUtils.data.testingHarness.us.city.VA,
      'enepa20@gmail.com',
      'TesterFirst',
      'TesterLast',
      '5714001234',
      '0'
    );
    await walsAssociateWebsitePage.filloutSecurityInfo('01011999', '222445555');
  });
  await walsAssociateWebsitePage.associateWebsiteLocBtnContinuePersonalInfoForm.click();
  await walsAssociateWebsitePage.createAUser('Hello@358', 'Hello@358');
  await walsAssociateWebsitePage.commissionOptions();
  await walsAssociateWebsitePage.associateWebsiteLocRdoBankDraft.click();
  await walsAssociateWebsitePage.filloutBankAccountInfo(
    DataUtils.data.testingHarness.us.bd.name,
    DataUtils.data.testingHarness.us.bd.Routing,
    DataUtils.data.testingHarness.us.bd.Account
  );
});
test('E2E idShield US marketing assert only one product can be purchased', async () => {
  await test.step('Navigate to legalshield CA marketing site', async () => {
    await idShieldUSPage.navigateToIDShieldUSMarketingSitePlage('d2cLegalShieldCA');
  });
  await test.step('Choose a region', async () => {
    await d2cLegalShieldCaPage.selectYourRegion(DataUtils.data.testingHarness.us.city.VA);
  });
  await test.step('Pick individual plan', async () => {
    test.slow;
    await idShieldUSPage.pickAnIndividualPlan('MONTHLY', 'CONTINUE_SHOPPING');
  });
  await test.step('Pick family plan', async () => {
    await idShieldUSPage.pickAFamilyPlan('MONTHLY', '');
  });
  await test.step('Assert the shopping cart only includes family plan and message box popped up to indicate that', async () => {
    await idShieldUSPage.assertShoppingCartIncludesFamilyPlan();
  });
  await test.step('Continue shopping', async () => {
    await idShieldUSPage.continueShopping();
  });
  await test.step('Pick business plan', async () => {
    await idShieldUSPage.pickABusinessPlan('MONTHLY', '');
  });
  await test.step('Assert the shopping cart only includes Business plan and message box popped up to indicate that', async () => {
    await idShieldUSPage.assertShoppingCartIncludesBusinessPlan();
  });
});
