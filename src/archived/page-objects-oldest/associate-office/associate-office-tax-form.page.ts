import { LoginPage } from '../login/login.page';
import { expect } from '@playwright/test';
import { associateReportsCommissions } from '../../../utils/user.utils';
import UrlsUtils from '../../../utils/urls.utils';

// ========================== Selectors ==================================
const LBL_TAX_FORM_REQUEST = "//h3[.='Tax form request']";
const LBL_SS_NOR_EIN = 'label[for=ssn]';
const TXA_SSN_INPUT = '//input';
const LBL_TAX_YEAR = "//label[contains(@for,'taxYear')]";
const DTP_TAX_YEAR = '//select';
const BTN_SUBMIT = "(//span[contains(@class,'lsux-text--body')])[2]";
const LBL_CONTENT_TEXT = "(//span[contains(@class,'lsux-text--body ')])[2]";
const MSG_ALERT = "//div[contains(@class,'lsux-form-field-container__hint')]";
/**
 *
 *
 * @export
 * @class TaxFormPage
 * @extends {LoginPage}
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
    await this.page.waitForSelector(TXA_SSN_INPUT);
    await this.fillTextBox(TXA_SSN_INPUT, SSNorEIN);
  };
  /**
   * select a year
   * @param {string} year
   * @memberof TaxFormPage
   */
  selectYear = async (year: string): Promise<void> => {
    console.log(' - TaxFormPage.selectYear');
    await this.selectFromDropDownMenu(DTP_TAX_YEAR, year);
  };
  // ========================== Navigate Methods ===========================
  navigateToTaxFormPage = async (): Promise<void> => {
    console.log(' - TaxFormPage.navigateToTaxFormsPage');
    // Navigate to Tax Form Page
    await this.goTo(UrlsUtils.channelsUrls.taxForm.url);
    await this.login(associateReportsCommissions.username as string, associateReportsCommissions.password as string);
    await this.page.waitForSelector(LBL_TAX_FORM_REQUEST);
  };
  // ========================== Click Methods ==============================
  clickOnSubmitButton = async (): Promise<void> => {
    // Click on data picker
    console.log(' - TaxFormPage.clickOnSubmitButton');
    await this.page.click(BTN_SUBMIT);
  };
  // ========================== Assertion Methods ==========================
  assertTaxFormPageElements = async (): Promise<void> => {
    console.log(' - TaxFormPage.assertTaxFormPageElements');
    await this.page.waitForSelector(LBL_TAX_FORM_REQUEST);
    await this.assertElementIsVisible(LBL_TAX_FORM_REQUEST);
    await expect(this.page.locator(LBL_TAX_FORM_REQUEST)).toContainText('Tax form request');
    console.log(await this.page.locator(LBL_TAX_FORM_REQUEST).textContent());
    await this.assertElementIsVisible(LBL_SS_NOR_EIN);
    await expect(this.page.locator(LBL_SS_NOR_EIN)).toContainText('SSN or EIN');
    console.log(await this.page.locator(LBL_SS_NOR_EIN).textContent());
    await this.assertElementIsVisible(TXA_SSN_INPUT);
    await this.assertElementIsVisible(LBL_TAX_YEAR);
    await expect(this.page.locator(LBL_TAX_YEAR)).toContainText('Tax year');
    console.log(await this.page.locator(LBL_TAX_YEAR).textContent());
    await this.assertElementIsVisible(DTP_TAX_YEAR);
    await this.assertElementIsVisible(BTN_SUBMIT);
    await this.assertElementIsVisible(LBL_CONTENT_TEXT);
    await expect(this.page.locator(LBL_CONTENT_TEXT)).toContainText("Complete the fields, and we'll find what you're looking for!");
    console.log(await this.page.locator(LBL_CONTENT_TEXT).textContent());
  };

  assertTaxFormAlertMessage = async (): Promise<void> => {
    console.log(' - TaxFormPage.assertTaxFormAlertMessage');
    await this.page.waitForSelector(LBL_TAX_FORM_REQUEST);
    await this.assertElementIsVisible(MSG_ALERT);
    await expect(this.page.locator(MSG_ALERT)).toContainText('ID number does not match this account');
    console.log(await this.page.locator(MSG_ALERT).textContent());
  };
}
