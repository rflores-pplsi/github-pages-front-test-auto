import { expect } from '@playwright/test';
import { AccountProfilePage } from './account-profile.page';

// ========================== Selectors ==========================
const TXT_BOX_ADDRESS1 = '[name="address1"]';
const TXT_BOX_ADDRESS1_OPTION = '//ul/li';
const TXT_BOX_ADDRESS2 = '[name="address2"]';
const TXT_BOX_CITY = '[name="locality"]';
const SELECT_STATE = '[name="administrativeArea"]';
const TXT_BOX_ZIP_POSTAL = '[name="postalCode"]';
const TXT_BOX_ZIP_POSTAL_OPTION = '//div[@class="lsux-container lsux-container--white        lsux-options-list"]//following::li[1]';
const SELECT_COUNTRY = '[name="country"]';
const BTN_SAVE_ADDRESS = '//span[text()="Save"]';
const TXT_BOX_FILL_ADDRESS = 'p.item-editable';

/**
 * @export
 * @class AccountProfileAddressPage
 * @extends {AccountProfilePage}
 */
export class AccountProfileAddressPage extends AccountProfilePage {
  /**
   * @param {string} address1
   * @param {string} zip
   * @memberof AccountProfileAddressPage
   */
  addressForm = async (address1: string, zip: string): Promise<void> => {
    await this.address1EditTxtBox(address1);
    await this.zipPostalEditTxtBox(zip);
  };
  // ========================== Navigate Methods ==========================

  navigateToProfileAddressPage = async (): Promise<void> => {
    console.log(' - accountProfilePage.goToProfilePage');
    // Navigate to Profile page
    await this.navigateToProfilePage();
    // Click on Address edit button
    await this.clickEditAddressButton();
  };
  // ========================== Click Methods =============================

  // Click on save button
  clickSaveAddressButton = async (): Promise<void> => {
    await this.page.locator(BTN_SAVE_ADDRESS).click();
  };
  // ========================== Select Methods =============================

  /**
   * @param {string} label
   * @memberof AccountProfileAddressPage
   */
  stateSelectMethod = async (label: string): Promise<void> => {
    const select = await this.page.$(SELECT_STATE);
    select?.selectOption({ label: label });
  };

  /**
   * @param {string} label
   * @memberof AccountProfileAddressPage
   */
  countrySelectMethod = async (label: string): Promise<void> => {
    const select = await this.page.$(SELECT_COUNTRY);
    select?.selectOption({ label: label });
  };

  // ========================== Fill Methods ===============================

  /**
   * @param {string} txt
   * @memberof AccountProfileAddressPage
   */
  address1EditTxtBox = async (txt: string): Promise<void> => {
    await this.page.waitForSelector(TXT_BOX_ADDRESS1);
    await this.fillTextBox(TXT_BOX_ADDRESS1, txt);
    await this.page.waitForSelector(TXT_BOX_ADDRESS1_OPTION);
    const opt = await this.page.$$(TXT_BOX_ADDRESS1_OPTION);
    await opt[0].click();
  };

  /**
   * @param {string} txt
   * @memberof AccountProfileAddressPage
   */
  address2EditTxtBox = async (txt: string): Promise<void> => {
    await this.page.waitForSelector(TXT_BOX_ADDRESS2);
    await this.page.fill(TXT_BOX_ADDRESS2, txt);
  };

  /**
   * @param {string} txt
   * @memberof AccountProfileAddressPage
   */
  cityEditTxtBox = async (txt: string): Promise<void> => {
    await this.page.waitForSelector(TXT_BOX_CITY);
    await this.page.fill(TXT_BOX_CITY, txt);
  };

  /**
   * @param {string} txt
   * @memberof AccountProfileAddressPage
   */
  zipPostalEditTxtBox = async (txt: string): Promise<void> => {
    await this.page.waitForSelector(TXT_BOX_ZIP_POSTAL);
    await this.page.fill(TXT_BOX_ZIP_POSTAL, txt);
    await this.page.waitForSelector(TXT_BOX_ZIP_POSTAL_OPTION);
    const opt = await this.page.$$(TXT_BOX_ZIP_POSTAL_OPTION);
    for (let ele = 0; ele < opt.length; ele++) {
      const zip = await opt[ele].innerHTML();
      if (zip == '20147') {
        await opt[ele].click();
      }
    }
  };
  // ========================== Assertion Methods ==========================

  /**
   * @param {string} txt
   * @memberof AccountProfileAddressPage
   */
  assertAddress1HasText = async (txt: string): Promise<void> => {
    const address1txt = await this.page.$(TXT_BOX_ADDRESS1);
    console.log(await address1txt?.getAttribute('value'));
    expect(txt).toBe(await address1txt?.getAttribute('value'));
  };

  /**
   * @param {string} txt
   * @memberof AccountProfileAddressPage
   */
  assertAddress2HasText = async (txt: string): Promise<void> => {
    await this.page.waitForSelector(TXT_BOX_ADDRESS2);
    await expect(this.page.locator(TXT_BOX_ADDRESS2)).toHaveText(txt);
  };

  /**
   * @param {string} txt
   * @memberof AccountProfileAddressPage
   */
  assertCityHasText = async (txt: string): Promise<void> => {
    const citytxt = await this.page.$(TXT_BOX_CITY);
    expect(txt).toBe(await citytxt?.getAttribute('value'));
  };

  /**
   * @param {string} txt
   * @memberof AccountProfileAddressPage
   */
  assertStateHasText = async (txt: string): Promise<void> => {
    const statetxt = await this.page.$(SELECT_STATE);
    expect(txt).toBe(await statetxt?.getAttribute('value'));
  };

  /**
   * @param {string} txt
   * @memberof AccountProfileAddressPage
   */
  assertZipPostalHasText = async (txt: string): Promise<void> => {
    const zipPortaltxt = await this.page.$(TXT_BOX_ZIP_POSTAL);
    expect(txt).toBe(await zipPortaltxt?.getAttribute('value'));
  };

  /**
   * @param {string} txt
   * @memberof AccountProfileAddressPage
   */
  assertCountryHasText = async (txt: string): Promise<void> => {
    await this.page.waitForSelector(SELECT_COUNTRY);
    await expect(this.page.locator(SELECT_COUNTRY)).toHaveText(txt);
  };

  /**
   * @param {string} txt
   * @memberof AccountProfileAddressPage
   */
  assertFullAddressHasText = async (txt: string): Promise<void> => {
    await this.page.waitForSelector(TXT_BOX_FILL_ADDRESS);
    const parag = await this.page.$$(TXT_BOX_FILL_ADDRESS);
    console.log(parag.length);
    const pargTxt = parag[2].inputValue();
    console.log(pargTxt);
    expect(parag).toBe(txt);
  };
}
