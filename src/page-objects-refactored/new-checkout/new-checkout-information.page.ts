import { Page, Locator, expect } from '@playwright/test';
import RegionsUtils from '../../utils/regions.utils';

export class NewCheckoutInformationPage {
  protected page: Page;
  readonly locEmailInput: Locator;
  readonly locFirstNameInput: Locator;
  readonly locLastNameInput: Locator;
  readonly locAddressInput: Locator;
  readonly locCityInput: Locator;
  readonly locZipCodeInput: Locator;
  readonly locPhoneNumberInput: Locator;
  readonly locPhoneTypeInput: Locator;
  readonly locDateOfBirthInput: Locator;
  readonly locSsnInput: Locator;
  readonly locContinueButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.locEmailInput = this.page.locator('#email-start-form');
    this.locFirstNameInput = this.page.locator('input[name="first-name"]');
    this.locLastNameInput = this.page.locator('input[name="last-name"]');
    this.locAddressInput = this.page.locator('#address');
    this.locCityInput = this.page.locator('#city');
    this.locZipCodeInput = this.page.locator('input[name="zipcode"]');
    this.locPhoneNumberInput = this.page.locator('#phone-number');
    this.locPhoneTypeInput = this.page.locator('#phone-type');
    this.locDateOfBirthInput = this.page.locator('#date-birth');
    this.locSsnInput = this.page.locator('#s-security');
    this.locContinueButton = this.page.locator('//button[contains(@class,"shared-button small")]');
  }

  completeContactInformationForm = async (
    stateFilter: string,
    email: string,
    firstName: string,
    lastName: string,
    phone: string,
    type: string
  ): Promise<void> => {
    await this.page.waitForLoadState();
    for (const region of RegionsUtils.usStates.filter((state) => state.name == stateFilter)) {
      await this.locEmailInput.fill(email);
      await this.locFirstNameInput.fill(firstName);
      await this.locLastNameInput.fill(lastName);
      await this.locAddressInput.fill(region.validAddress.street);
      await this.locCityInput.fill(region.validAddress.city);
      await this.page.pause();
      await this.page.keyboard.press('Tab');
      await this.selectZipCode(region.validAddress.postalCode);
      await this.locPhoneNumberInput.type(phone);
      await this.selectPhoneType(type);
    }
  };

  /**
   *
   *
   * @param {string} zipCode
   * @memberof NewCheckoutInformationPage
   */
  selectZipCode = async (zipCode: string): Promise<void> => {
    await this.locZipCodeInput.click();
    const zipCodeOptionLocator = this.page.locator(`//mat-option[contains(.,"${zipCode}")]`);
    await zipCodeOptionLocator.click();
  };

  /**
   *
   *
   * @param {string} type
   * @memberof NewCheckoutInformationPage
   */
  selectPhoneType = async (type: string): Promise<void> => {
    await this.locPhoneTypeInput.click();
    const optionLocator = this.page.locator(`//mat-option[contains(.,"${type}")]`);
    await optionLocator.click();
  };

  /**
   *
   *
   * @param {string} dateOfBirth
   * @param {string} lastFourSsn
   * @memberof NewCheckoutInformationPage
   */
  completeSecurityInformationForm = async (dateOfBirth: string, lastFourSsn: string): Promise<void> => {
    await this.locDateOfBirthInput.type(dateOfBirth);
    if (await this.locSsnInput.isVisible()) {
      await this.locSsnInput.type(lastFourSsn);
    } else {
      console.log('No SSN text box');
    }
  };
}
