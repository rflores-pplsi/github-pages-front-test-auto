/* eslint-disable no-undef */
import { test } from '@playwright/test';
import { FrenchWalsCaPage } from '../../../page-objects/qa-maintenance-list/french-wals-ca.page';
// create instance of Page
let frenchWalsCaPage: FrenchWalsCaPage;

// Setup environment before each test
test.beforeEach(async ({ page, request }) => {
  frenchWalsCaPage = new FrenchWalsCaPage(page);
  // test.slow triples the default wait times
  test.slow();
  // await checkoutConfirmationPage.navigateToCheckoutConfirmationPage('Alaska');
});
test('French WALS-US', async ({ page }) => {
  test.slow;
  await test.step('Navigate to French-WALS-Ca page', async () => {
    await frenchWalsCaPage.navigateToFrenchWalsCaPage();
  });
  await test.step('Update the Province', async () => {
    await frenchWalsCaPage.changeStateinformation('la Colombie-Britannique');
  });
  await test.step('Get Started then pick a plan', async () => {
    await frenchWalsCaPage.getStartedThenPickAPlan();
  });
  await test.step('Verify that  it takes user to checkout', async () => {
    await frenchWalsCaPage.assertContactInformationTxt();
  });
  await test.step('Fill Contact information form', async () => {
    await frenchWalsCaPage.filloutContactInformationForm('British Columbia', 'enepa20@gmail.com', 'testFt', 'testLt', '5712223333', 'Mobile');
  });
  await test.step('Fill Security an Family info form', async () => {
    await frenchWalsCaPage.filloutSecurityAndFamilyCoverageInfo(
      '12121990',
      '111223333',
      'testerDependentFirst',
      'testerDependentLast',
      '12122010',
      'Dépendant',
      'dependent@gmail.com'
    );
  });
  await test.step('Create a User', async () => {
    await frenchWalsCaPage.createAUser('Password1', 'Password1');
  });
  await test.step('Select Commission option', async () => {
    await frenchWalsCaPage.commissionOptions();
  });
  await test.step('Fill The Bank Draft form', async () => {
    await frenchWalsCaPage.filloutBankAccountInfo('testerfirstlast', '11242', '260', '000000');
  });
  await test.step('Verify that the user made the purchase', async () => {
    await frenchWalsCaPage.assertWelcomelabel();
  });
});
