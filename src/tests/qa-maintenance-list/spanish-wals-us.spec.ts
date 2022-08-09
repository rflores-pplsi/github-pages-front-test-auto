/* eslint-disable no-undef */
import { test } from '@playwright/test';
import { SpanishWalsUSPage } from '../../page-objects/qa-maintenance-list/spanish-wals-us.page';
// create instance of Page
let spanishWalsUSPage: SpanishWalsUSPage;

// Setup environment before each test
test.beforeEach(async ({ page, request }) => {
  spanishWalsUSPage = new SpanishWalsUSPage(page);
  // test.slow triples the default wait times
  test.slow();
  // await checkoutConfirmationPage.navigateToCheckoutConfirmationPage('Alaska');
});
test('Spanish WALS-US', async ({ page }) => {
  test.slow;
  // Navigate to Spanish-WALS-US page
  await spanishWalsUSPage.navigateToSpanishWalsUSPage();
  // Update the state
  await spanishWalsUSPage.changeStateinformation('Virginia');
  // Get Started then pick a plan
  await spanishWalsUSPage.getStartedThenPickAPlan();
  // Verify that  it takes user to checkout
  await spanishWalsUSPage.assertContactInformationTxt();
  // Fill Contact information form
  await spanishWalsUSPage.filloutContactInformationForm('Virginia', 'tester2022@hotmail.com', 'testFt', 'testLt', '5712223333', 'Móvil');
  // Fill Security an Family info form
  await spanishWalsUSPage.filloutSecurityAndFamilyCoverageInfo(
    '12121990',
    '111223333',
    'testerDependentFirst',
    'testerDependentLast',
    '12122010',
    'Dependiente',
    'dependent@gmail.com'
  );
  // Create a User
  await spanishWalsUSPage.createAUser('Password1', 'Password1');
  // Select Commission option
  await spanishWalsUSPage.commissionOptions();
  // Fill Credit card form
  await spanishWalsUSPage.filloutBankAccountInfo('testerfirstlast', '103000648', '000000');
  // Verify that the user made the purchase
  await spanishWalsUSPage.assertWelcomelabel();
});
