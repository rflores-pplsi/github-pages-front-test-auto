import { test } from '@playwright/test';
import { WalsPage } from '../../../page-objects/qa-maintenance-list/wals.page';
// create instance of Page
let walsPage: WalsPage;

// Setup environment before each test
test.beforeEach(async ({ page }) => {
  walsPage = new WalsPage(page);
  // test.slow triples the default wait times
  test.slow();
  // await checkoutConfirmationPage.navigateToCheckoutConfirmationPage('Alaska');
});
test('French WALS-US', async () => {
  test.slow;
  await test.step('Navigate to French-WALS-Ca page', async () => {
    await walsPage.navigateToWalsPage('frenchca');
  });
  await test.step('Update the Province', async () => {
    await walsPage.changeRegion('la Colombie-Britannique');
  });
  await test.step('Get Started then pick a plan', async () => {
    await walsPage.getStartedThenPickAPlan();
  });
  await test.step('Verify that  it takes user to checkout', async () => {
    await walsPage.assertContactInformationTxt('frenchca');
  });
  await test.step('Fill Contact information form', async () => {
    await walsPage.filloutContactInformationForm(
      'frenchca',
      'la Colombie-Britannique',
      'tester2022@hotmail.com',
      'testFt',
      'testLt',
      '5712223333',
      'Mobile'
    );
  });
  await test.step('Fill Security an Family info form', async () => {
    await walsPage.filloutSecurityAndFamilyCoverageInfo(
      '12121990',
      '111223333',
      'testerDependentFirst',
      'testerDependentLast',
      '12122010',
      'Dépendant',
      'dependent@gmail.com'
    );
  });
  await walsPage.personalInfoLocBtnContactInfoContinue.waitFor();
  await walsPage.personalInfoLocBtnContactInfoContinue.click();
  await test.step('Create a User', async () => {
    await walsPage.createAUser('Password1', 'Password1');
  });
  await test.step('Select Commission option', async () => {
    await walsPage.commissionOptions();
  });
  await test.step('Fill The Bank Draft form', async () => {
    await walsPage.filloutCaBankAccountInfo('testerfirstlast', '11242', '260', '000000');
  });
  await test.step('Verify that the user made the purchase', async () => {
    await walsPage.assertWelcomelabel('french');
  });
});
