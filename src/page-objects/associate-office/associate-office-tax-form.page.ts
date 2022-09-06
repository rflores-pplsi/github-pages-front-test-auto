import { LoginPage } from '../login/login.page';
import { expect } from '@playwright/test';
import { associateReportsCommissions } from '../../utils/user.utils';
import UrlsUtils from '../../utils/urls.utils';

// ========================== Selectors ==================================
const lblTaxFormRequest: string = "//h3[.='Tax form request']";
const lblSSNorEIN: string = 'label[for=ssn]';
const txaSSNInput: string = '//input';
const lblTaxYear: string = "//label[contains(@for,'taxYear')]";
const dtpTaxYear: string = '//select';
const btnSubmit: string = "(//span[contains(@class,'lsux-text--body')])[2]";
const lblContentText: string = "(//span[contains(@class,'lsux-text--body ')])[2]";
const msgAlert: string = "//div[contains(@class,'lsux-form-field-container__hint')]";
/**
 *
 * @export
 * @class TaxFormPage
 * @extends
 */
export class TaxFormPage extends LoginPage {
  // ========================== Process Methods ============================
  /**
   * insert SSN or EIN
   * @param {string} SSNorEIN
   * @memberof TaxFormPage
   */
  insertSSNorEIN = async (SSNorEIN: string): Promise<void> => {
    console.log(' - TaxFormPage.insertSSNorEIN');
    await this.page.waitForSelector(txaSSNInput);
    await this.fillTextBox(txaSSNInput, SSNorEIN);
  };
  /**
   * select a year
   * @param {string} year
   * @memberof TaxFormPage
   */
  selectYear = async (year: string): Promise<void> => {
    console.log(' - TaxFormPage.selectYear');
    await this.selectFromDropDownMenu(dtpTaxYear, year);
  };
  // ========================== Navigate Methods ===========================
  navigateToTaxFormPage = async (): Promise<void> => {
    console.log(' - TaxFormPage.navigateToTaxFormsPage');
    // Navigate to Tax Form Page
    await this.goTo(UrlsUtils.channelsUrls.taxForm.url);
    await this.login(associateReportsCommissions.username, associateReportsCommissions.password);
    await this.page.waitForSelector(lblTaxFormRequest);
  };
  // ========================== Click Methods ==============================
  clickOnSubmitButton = async (): Promise<void> => {
    // Click on data picker
    console.log(' - TaxFormPage.clickOnSubmitButton');
    await this.page.click(btnSubmit);
  };
  // ========================== Assertion Methods ==========================
  assertTaxFormPageElements = async (): Promise<void> => {
    console.log(' - TaxFormPage.assertTaxFormPageElements');
    await this.page.waitForSelector(lblTaxFormRequest);
    await this.assertElementIsVisible(lblTaxFormRequest);
    await expect(this.page.locator(lblTaxFormRequest)).toContainText('Tax form request');
    console.log(await this.page.locator(lblTaxFormRequest).textContent());
    await this.assertElementIsVisible(lblSSNorEIN);
    await expect(this.page.locator(lblSSNorEIN)).toContainText('SSN or EIN');
    console.log(await this.page.locator(lblSSNorEIN).textContent());
    await this.assertElementIsVisible(txaSSNInput);
    await this.assertElementIsVisible(lblTaxYear);
    await expect(this.page.locator(lblTaxYear)).toContainText('Tax year');
    console.log(await this.page.locator(lblTaxYear).textContent());
    await this.assertElementIsVisible(dtpTaxYear);
    await this.assertElementIsVisible(btnSubmit);
    await this.assertElementIsVisible(lblContentText);
    await expect(this.page.locator(lblContentText)).toContainText("Complete the fields, and we'll find what you're looking for!");
    console.log(await this.page.locator(lblContentText).textContent());
  };

  assertTaxFormAlertMessage = async (): Promise<void> => {
    console.log(' - TaxFormPage.assertTaxFormAlertMessage');
    await this.page.waitForSelector(lblTaxFormRequest);
    await this.assertElementIsVisible(msgAlert);
    await expect(this.page.locator(msgAlert)).toContainText('ID number does not match this account');
    console.log(await this.page.locator(msgAlert).textContent());
  };
}
