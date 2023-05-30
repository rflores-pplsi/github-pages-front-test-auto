import { test } from '@playwright/test';
import { TaxFormPage } from '../../../page-objects (Archived)/associate-office/associate-office-tax-form.page';

// create instance of Page
let taxFormPage: TaxFormPage;

// Setup environment before each test
test.beforeEach(async ({ page }) => {
  taxFormPage = new TaxFormPage(page);
  await taxFormPage.navigateToTaxFormPage();
});

test('Assert all Tax Form elements on the page', async () => {
  await taxFormPage.assertTaxFormPageElements();
});

test('Displays the validation message when requesting a tax form with wrong ss#', async () => {
  await taxFormPage.insertSSNorEIN('2424242');
  await taxFormPage.selectYear('2019');
  await taxFormPage.clickOnSubmitButton();
  await taxFormPage.assertTaxFormAlertMessage();
});
