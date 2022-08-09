/* eslint-disable no-undef */
import { test } from '@playwright/test';
import { EnglishWalsCAPage } from '../../page-objects/qa-maintenance-list/english-wals-ca.page';
// create instance of Page
let englishWalsCaPage: EnglishWalsCAPage;

// Setup environment before each test
test.beforeEach(async ({ page, request }) => {
  englishWalsCaPage = new EnglishWalsCAPage(page);
  // test.slow triples the default wait times
  test.slow();
  // await checkoutConfirmationPage.navigateToCheckoutConfirmationPage('Alaska');
});
test.only('English WALS-US', async ({ page }) => {
  test.slow;
  // Navigate to English-WALS-Ca page
  await englishWalsCaPage.navigateToEnglishWalsCaPage();
  // Update the Province
  await englishWalsCaPage.changeStateinformation('British Columbia');
  // Get Started then pick a plan
  await englishWalsCaPage.getStartedThenPickAPlan();
  // Verify that  it takes user to checkout
  await englishWalsCaPage.assertContactInformationTxt();
  // Fill Contact information form
  await englishWalsCaPage.filloutContactInformationForm('British Columbia', 'enepa20@gmail.com', 'testFt', 'testLt', '5712223333', 'Mobile');
  // Fill Security an Family info form
  await englishWalsCaPage.filloutSecurityAndFamilyCoverageInfo(
    '12121990',
    '111223333',
    'testerDependentFirst',
    'testerDependentLast',
    '12122010',
    'Dependent',
    'dependent@gmail.com'
  );
  // Create a User
  await englishWalsCaPage.createAUser('Password1', 'Password1');
  // Select Commission option
  await englishWalsCaPage.commissionOptions();
  // Fill Credit card form
  await englishWalsCaPage.filloutBankAccountInfo('testerfirstlast', '103000648', '000000');
  // Verify that the user made the purchase
  await englishWalsCaPage.assertWelcomelabel();
});
test('English WALS-US API verification', async ({ request }) => {
  test.slow;
  const _response = await request.get('https://checkoutv3.uat-legalshield.com/o/v1/orders', {
    headers: {
      Authorization: 'Basic dHR0ZXN0ZnRzdGVzdGx0czpQYXNzd29yZDE=',
    },
  });
  console.log(await _response.json);
});
