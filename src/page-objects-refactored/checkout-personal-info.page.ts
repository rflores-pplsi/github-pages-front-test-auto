import { expect, Locator, Page } from '@playwright/test';

export class CheckoutPersonalInfoPage {
  readonly page: Page;
  readonly locHeader: Locator;
  readonly locFirstNameInput: Locator;
  readonly locLastNameInput: Locator;
  readonly locPhoneNumberInput: Locator;
  readonly locPhoneTypeInput: Locator;
  readonly locHomeAddressInput: Locator;
  readonly locCityInput: Locator;
  readonly locPostalCodeInput: Locator;
  readonly locBirthMonthInput: Locator;
  readonly locBirthDateInput: Locator;
  readonly locBirthYearInput: Locator;
  readonly locSocialSecurityInput: Locator;
  readonly locFirstNameWarningMessage: Locator;
  readonly locLastNameWarningMessage: Locator;
  readonly locPhoneNumberWarningMessage: Locator;
  readonly locPhoneTypeWarningMessage: Locator;
  readonly locHomeAddressWarningMessage: Locator;
  readonly locCityWarningMessage: Locator;
  readonly locPostalCodeWarningMessage: Locator;
  readonly locDateOfBirthWarningMessage: Locator;
  readonly locDateOfBirthInvalidWarningMessage: Locator;
  readonly locSocialSecurityWarningMessage: Locator;
  readonly locSaveAndContinueButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.locHeader = this.page.locator('//h1');
    this.locFirstNameInput = this.page.locator('//input[@name="firstName"]');
    this.locLastNameInput = this.page.locator('//input[@name="lastName"]');
    this.locPhoneNumberInput = this.page.locator('//input[@name="phoneNumber"]');
    this.locPhoneTypeInput = this.page.locator('#phoneType');
    this.locHomeAddressInput = this.page.locator('//input[@name="homeAddress"]');
    this.locCityInput = this.page.locator('//input[@name="city"]');
    this.locPostalCodeInput = this.page.locator('//input[@name="postalCode"]');
    this.locBirthMonthInput = this.page.locator('[name="dobMonth"]');
    this.locBirthDateInput = this.page.locator('[name="dobDay"]');
    this.locBirthYearInput = this.page.locator('[name="dobYear"]');
    this.locSocialSecurityInput = this.page.locator('[placeholder="Last 4 SSN or SIN"]');
    this.locSaveAndContinueButton = this.page.locator('button:has-text("Save & Continue")');
    this.locFirstNameWarningMessage = this.page.locator('text = Must provide first name');
    this.locLastNameWarningMessage = this.page.locator('text = Must provide Last name');
    this.locPhoneNumberWarningMessage = this.page.locator('text = Must provide phone number');
    this.locPhoneTypeWarningMessage = this.page.locator('text = Must select phone type');
    this.locHomeAddressWarningMessage = this.page.locator('text = Must provide home address');
    this.locCityWarningMessage = this.page.locator('text = Must include name of city');
    this.locPostalCodeWarningMessage = this.page.locator('text = Must provide valid postal code');
    this.locDateOfBirthWarningMessage = this.page.locator('text = Must provide date of birth');
    this.locDateOfBirthInvalidWarningMessage = this.page.locator('text = Please enter a valid date in the MM/DD/YYYY format');
    this.locSocialSecurityWarningMessage = this.page.locator('text = Must provide SSN or SIN');
  }
  /**
   *
   *
   * @param {string} type
   * @memberof CheckoutPersonalInfoPage
   */
  selectPhoneType = async (type: string): Promise<void> => {
    // select dropdown for phone type behavior oddly, the click function seems to interact with the form so that it works.
    await this.locPhoneTypeInput.click();
    await this.locPhoneTypeInput.selectOption({ label: type });
    await this.locPhoneTypeInput.isVisible();
  };
  /**
   *
   *
   * @param {string} firstName
   * @param {string} lastName
   * @param {string} phoneNumber
   * @param {string} phoneType
   * @param {string} homeAddress
   * @param {string} city
   * @param {string} postalCode
   * @param {string} birthMonth
   * @param {string} birthDate
   * @param {string} birthYear
   * @param {string} socialSecurity
   * @memberof CheckoutPersonalInfoPage
   */
  populateAllFieldsOnPersonalInfoPageAndSave = async (
    firstName: string,
    lastName: string,
    phoneNumber: string,
    phoneType: string,
    homeAddress: string,
    city: string,
    postalCode: string,
    birthMonth: string,
    birthDate: string,
    birthYear: string,
    socialSecurity: string
  ): Promise<void> => {
    await this.locFirstNameInput.fill(firstName);
    await this.locLastNameInput.fill(lastName);
    await this.locPhoneNumberInput.fill(phoneNumber);
    await this.locPhoneTypeInput.selectOption({ label: phoneType });
    await this.locHomeAddressInput.fill(homeAddress);
    await this.locCityInput.fill(city);
    await this.locPostalCodeInput.fill(postalCode);
    await this.locBirthMonthInput.fill(birthMonth);
    await this.locBirthDateInput.fill(birthDate);
    await this.locBirthYearInput.fill(birthYear);
    await this.locSocialSecurityInput.fill(socialSecurity);
  };
  /**
   *
   *
   * @memberof CheckoutPersonalInfoPage
   */
  clearAllFieldsOnPersonalInfoPageAndSave = async (): Promise<void> => {
    await this.locFirstNameInput.clear();
    await this.locLastNameInput.clear();
    await this.locPhoneNumberInput.clear();
    await this.selectPhoneType('Select Type');
    await this.locHomeAddressInput.clear();
    await this.locCityInput.clear();
    await this.locPostalCodeInput.clear();
    await this.locBirthMonthInput.clear();
    await this.locBirthDateInput.clear();
    await this.locBirthYearInput.clear();
    await this.locSocialSecurityInput.clear();
  };
  /**
   *
   *
   * @memberof CheckoutPersonalInfoPage
   */
  assertPersonalInfoPageErrorsAreDisplayed = async (): Promise<void> => {
    await expect(this.locFirstNameWarningMessage).toBeVisible({ timeout: 100000 });
    await expect(this.locLastNameWarningMessage).toBeVisible({ timeout: 100000 });
    await expect(this.locPhoneNumberWarningMessage).toBeVisible({ timeout: 100000 });
    await expect(this.locPhoneTypeWarningMessage).toBeVisible({ timeout: 100000 });
    await expect(this.locHomeAddressWarningMessage).toBeVisible({ timeout: 100000 });
    await expect(this.locCityWarningMessage).toBeVisible({ timeout: 100000 });
    await expect(this.locPostalCodeWarningMessage).toBeVisible({ timeout: 100000 });
    await expect(this.locDateOfBirthWarningMessage).toBeVisible({ timeout: 100000 });
    await expect(this.locSocialSecurityWarningMessage).toBeVisible({ timeout: 100000 });
  };
}
