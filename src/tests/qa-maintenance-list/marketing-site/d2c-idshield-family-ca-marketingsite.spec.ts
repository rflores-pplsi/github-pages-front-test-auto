import { test } from '@playwright/test';
import { LoginPage } from '../../../page-objects-refactored/login/login.page';
import { IDShieldCAPage } from '../../../page-objects-refactored/qa-maintenance-list/d2c-idshield-ca-marketingsite.page';
import { D2CLegalShieldCaPage } from '../../../page-objects-refactored/qa-maintenance-list/d2c-legalshield-ca.page';
import DataUtils from '../../../utils/Tests.Data';
import * as dotenv from 'dotenv';
dotenv.config();

// create instance of Page
let idShieldCAPage: IDShieldCAPage;
let loginPage: LoginPage;
let d2cLegalShieldCaPage: D2CLegalShieldCaPage;

// Setup environment before each test
test.beforeEach(async ({ context, page }) => {
  idShieldCAPage = new IDShieldCAPage(page);
  loginPage = new LoginPage(context, page);
  d2cLegalShieldCaPage = new D2CLegalShieldCaPage(page);

  // test.slow triples the default wait times
  test.slow();
});
test('D2E idShield CA marketing family plan', async () => {
  test.slow();
  await test.step('Navigate to legalshield CA marketing site', async () => {
    await idShieldCAPage.navigateToIDShieldUSMarketingSitePlage('d2cLegalShieldCA');
  });
  await test.step('Choose a region', async () => {
    await d2cLegalShieldCaPage.selectYourRegion(DataUtils.data.testingHarness.ca.bd.province.BC);
  });
  await test.step('Pick a plan', async () => {
    test.slow();
    await idShieldCAPage.pickAPlan('FAMILY');
  });
  await test.step('Login', async () => {
    await loginPage.login(process.env.LOGIN_EMAIL_UAT as string, process.env.LOGIN_PASSWORD_UAT as string);
  });
});
