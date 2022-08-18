/* eslint-disable no-undef */
import { test } from '@playwright/test';
import { EnglishWalsUSPage } from '../../page-objects/qa-maintenance-list/english-wals-us.page';
// create instance of Page
let englishWalsUSPage: EnglishWalsUSPage;

// Setup environment before each test
test.beforeEach(async ({ page, request }) => {
  englishWalsUSPage = new EnglishWalsUSPage(page);
  // test.slow triples the default wait times
  test.slow();
  // await checkoutConfirmationPage.navigateToCheckoutConfirmationPage('Alaska');
});
test.only('English WALS-US', async ({ page }) => {
  test.slow;
  // Navigate to English-WALS-US page
  await englishWalsUSPage.navigateToEnglishWalsUSPage();
  // Update the state
  await englishWalsUSPage.changeStateinformation('Virginia');
  // Get Started then pick a plan
  await englishWalsUSPage.getStartedThenPickAPlan();
  // Verify that  it takes user to checkout
  await englishWalsUSPage.assertContactInformationTxt();
  // Fill Contact information form
  await englishWalsUSPage.filloutContactInformationForm('Virginia', 'enepa20@gmail.com', 'testFt', 'testLt', '5712223333', 'Mobile');
  // Fill Security an Family info form
  await englishWalsUSPage.filloutSecurityAndFamilyCoverageInfo(
    '12121990',
    '111223333',
    'testerDependentFirst',
    'testerDependentLast',
    '12122010',
    'Dependent',
    'dependent@gmail.com'
  );
  // Create a User
  await englishWalsUSPage.createAUser('Password1', 'Password1');
  // Select Commission option
  await englishWalsUSPage.commissionOptions();
  // Fill Credit card form
  await englishWalsUSPage.filloutBankAccountInfo('testerfirstlast', '103000648', '000000');
  // Verify that the user made the purchase
  await englishWalsUSPage.assertWelcomelabel();
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
