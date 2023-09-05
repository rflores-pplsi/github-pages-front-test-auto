import { test } from '@playwright/test';
import { WalsPage } from '../../../../archived/page-objects-oldest/qa-maintenance-list/wals.page';
// create instance of Page
let walsPage: WalsPage;

// Setup environment before each test
test.beforeEach(async ({ page }) => {
  walsPage = new WalsPage(page);
  // test.slow triples the default wait times
  test.slow();
  // await checkoutConfirmationPage.navigateToCheckoutConfirmationPage('Alaska');
});
test('English WALS-US', async () => {
  test.slow;
  // Navigate to English-WALS-US page
  await walsPage.navigateToWalsPage('englishus');
  // Update the state
  await walsPage.changeRegion('Virginia');
  // Get Started then pick a plan
  await walsPage.getStartedThenPickAPlan();
  // Verify that  it takes user to checkout
  await walsPage.assertContactInformationTxt('englishus');
  // Fill Contact information form
  await walsPage.filloutContactInformationForm('englishus', 'Virginia', 'tester2022@hotmail.com', 'testFt', 'testLt', '5712223333', 'Mobile');
  // Fill Security an Family info form
  await walsPage.filloutSecurityAndFamilyCoverageInfo(
    '12121990',
    '111223333',
    'testerDependentFirst',
    'testerDependentLast',
    '12122010',
    'Dependent',
    'dependent@gmail.com'
  );
  await walsPage.personalInfoLocBtnContactInfoContinue.waitFor();
  await walsPage.personalInfoLocBtnContactInfoContinue.click();
  // Create a User
  await walsPage.createAUser('Password1', 'Password1');
  // Select Commission option
  await walsPage.commissionOptions();
  // Fill Credit card form
  await walsPage.filloutBankAccountInfo('testerfirstlast', '103000648', '000000');
  // Verify that the user made the purchase
  await walsPage.assertWelcomelabel('englishus');
});
