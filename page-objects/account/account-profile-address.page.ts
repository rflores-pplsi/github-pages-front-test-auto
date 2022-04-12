import { expect } from '@playwright/test';
import { AccountProfilePage } from './account-profile.page';

// ========================== Selectors ==========================
const txtBoxAddress1 = '[name="address1"]';
const txtBoxAddress1Option = '//ul/li';
const txtBoxAddress2 = '[name="address2"]';
const txtBoxCity = '[name="locality"]';
const selectState = '[name="administrativeArea"]';
const txtBoxZipPostal = '[name="postalCode"]';
const txtBoxZipPostalOption = '//div[@class="lsux-container lsux-container--white        lsux-options-list"]//following::li[1]';
const selectCountry = '[name="country"]';
const btnSaveAddress = '//span[text()="Save"]';
const txtBoxFillAddress = 'p.item-editable';

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
  addressForm = async (address1: string, zip: string) => {
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
    await this.page.locator(btnSaveAddress).click();
  };
  // ========================== Select Methods =============================

  /**
   * @param {string} label
   * @memberof AccountProfileAddressPage
   */
  stateSelectMethod = async (label: string): Promise<void> => {
    const select = await this.page.$(selectState);
    select?.selectOption({ label: label });
  };

  /**
   * @param {string} label
   * @memberof AccountProfileAddressPage
   */
  countrySelectMethod = async (label: string): Promise<void> => {
    const select = await this.page.$(selectCountry);
    select?.selectOption({ label: label });
  };

  // ========================== Fill Methods ===============================

  /**
   * @param {string} txt
   * @memberof AccountProfileAddressPage
   */
  address1EditTxtBox = async (txt: string): Promise<void> => {
    await this.page.waitForSelector(txtBoxAddress1);
    await this.fillTextBox(txtBoxAddress1, txt);
    await this.page.waitForSelector(txtBoxAddress1Option);
    const opt = await this.page.$$(txtBoxAddress1Option);
    await opt[0].click();
  };

  /**
   * @param {string} txt
   * @memberof AccountProfileAddressPage
   */
  address2EditTxtBox = async (txt: string): Promise<void> => {
    await this.page.waitForSelector(txtBoxAddress2);
    await this.page.fill(txtBoxAddress2, txt);
  };

  /**
   * @param {string} txt
   * @memberof AccountProfileAddressPage
   */
  cityEditTxtBox = async (txt: string): Promise<void> => {
    await this.page.waitForSelector(txtBoxCity);
    await this.page.fill(txtBoxCity, txt);
  };

  /**
   * @param {string} txt
   * @memberof AccountProfileAddressPage
   */
  zipPostalEditTxtBox = async (txt: string): Promise<void> => {
    await this.page.waitForSelector(txtBoxZipPostal);
    await this.page.fill(txtBoxZipPostal, txt);
    await this.page.waitForSelector(txtBoxZipPostalOption);
    const opt = await this.page.$$(txtBoxZipPostalOption);
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
    const address1txt = await this.page.$(txtBoxAddress1);
    console.log(await address1txt?.getAttribute('value'));
    expect(txt).toBe(await address1txt?.getAttribute('value'));
  };

  /**
   * @param {string} txt
   * @memberof AccountProfileAddressPage
   */
  assertAddress2HasText = async (txt: string): Promise<void> => {
    await this.page.waitForSelector(txtBoxAddress2);
    await expect(this.page.locator(txtBoxAddress2)).toHaveText(txt);
  };

  /**
   * @param {string} txt
   * @memberof AccountProfileAddressPage
   */
  assertCityHasText = async (txt: string): Promise<void> => {
    const citytxt = await this.page.$(txtBoxCity);
    expect(txt).toBe(await citytxt?.getAttribute('value'));
  };

  /**
   * @param {string} txt
   * @memberof AccountProfileAddressPage
   */
  assertStateHasText = async (txt: string): Promise<void> => {
    const statetxt = await this.page.$(selectState);
    expect(txt).toBe(await statetxt?.getAttribute('value'));
  };

  /**
   * @param {string} txt
   * @memberof AccountProfileAddressPage
   */
  assertZipPostalHasText = async (txt: string): Promise<void> => {
    const zipPortaltxt = await this.page.$(txtBoxZipPostal);
    expect(txt).toBe(await zipPortaltxt?.getAttribute('value'));
  };

  /**
   * @param {string} txt
   * @memberof AccountProfileAddressPage
   */
  assertCountryHasText = async (txt: string): Promise<void> => {
    await this.page.waitForSelector(selectCountry);
    await expect(this.page.locator(selectCountry)).toHaveText(txt);
  };

  /**
   * @param {string} txt
   * @memberof AccountProfileAddressPage
   */
  assertFullAddressHasText = async (txt: string): Promise<void> => {
    await this.page.waitForSelector(txtBoxFillAddress);
    const parag = await this.page.$$(txtBoxFillAddress);
    console.log(parag.length);
    const pargTxt = parag[2].inputValue();
    console.log(pargTxt);
    expect(parag).toBe(txt);
  };
}
