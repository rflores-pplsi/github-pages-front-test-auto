import { test } from '@playwright/test';
import { EnglishWalsCAPage } from '../../../page-objects/qa-maintenance-list/english-wals-ca.page';
// create instance of Page
let englishWalsCaPage: EnglishWalsCAPage;

// Setup environment before each test
test.beforeEach(async ({ page }) => {
  englishWalsCaPage = new EnglishWalsCAPage(page);
  // test.slow triples the default wait times
  test.slow();
  // await checkoutConfirmationPage.navigateToCheckoutConfirmationPage('Alaska');
});
test('English WALS-US', async ({}) => {
  test.slow;
  await test.step('Navigate to English-WALS-Ca page', async () => {
    await englishWalsCaPage.navigateToEnglishWalsCaPage();
  });
  await test.step('Update the Province', async () => {
    await englishWalsCaPage.changeStateinformation('British Columbia');
  });
  await test.step('Get Started then pick a plan', async () => {
    await englishWalsCaPage.getStartedThenPickAPlan();
  });
  await test.step('Verify that  it takes user to checkout', async () => {
    await englishWalsCaPage.assertContactInformationTxt();
  });
  await test.step('Fill Contact information form', async () => {
    await englishWalsCaPage.filloutContactInformationForm('British Columbia', 'enepa20@gmail.com', 'testFt', 'testLt', '5712223333', 'Mobile');
  });
  await test.step('Fill Security an Family info form', async () => {
    await englishWalsCaPage.filloutSecurityAndFamilyCoverageInfo(
      '12121990',
      '111223333',
      'testerDependentFirst',
      'testerDependentLast',
      '12122010',
      'Dependent',
      'dependent@gmail.com'
    );
  });
  await test.step('Create a User', async () => {
    await englishWalsCaPage.createAUser('Password1', 'Password1');
  });
  await test.step('Select Commission option', async () => {
    await englishWalsCaPage.commissionOptions();
  });
  await test.step('Fill The Bank Draft form', async () => {
    await englishWalsCaPage.filloutBankAccountInfo('testerfirstlast', '11242', '260', '000000');
  });
  await test.step('Verify that the user made the purchase', async () => {
    await englishWalsCaPage.assertWelcomelabel();
  });
});
