/* eslint-disable max-len */
import { FrameLocator, Locator, Page, expect } from '@playwright/test';
import { OrderSummaryComponent } from './components/order-summary.component';
import { IAccountInfoData, ISecurityInfoData, IBusinessInfoData } from '../../interfaces/checkout-interfaces';
import { getDefaultAccountInfoData } from '../../utils/account-info-utils';
import { getDefaultSecurityInfoData } from '../../utils/security-info-utils';
import { getDefaultBusinessInfoData } from '../../utils/business-info-utils';

export class FormsPage {
  readonly page: Page;
  readonly orderSummaryComponent: OrderSummaryComponent;
  readonly locPaymentIframe: FrameLocator;
  private readonly locEmailLabel: Locator;
  private readonly locEmailInput: Locator;
  private readonly locEmailDisplayedValue: Locator;
  private readonly locSignInButton: Locator;
  //Order Summary
  private readonly locOrderSummaryHeader: Locator;
  private readonly locOrderSummaryContainer: Locator;
  //Account Information Form
  private readonly locFirstNameInput: Locator;
  private readonly locLastNameInput: Locator;
  private readonly locHomeAddressInput: Locator;
  private readonly locHomeAddress2Input: Locator;
  private readonly locCityInput: Locator;
  private readonly locStateInput: Locator;
  private readonly locZipCodeInput: Locator;
  private readonly locPhoneNumberInput: Locator;
  private readonly locPhoneTypeInput: Locator;
  private readonly locDOBInput: Locator;
  private readonly locSSNInput: Locator;
  private readonly locBusinessNameInput: Locator;
  private readonly locDateOfIncorporationInput: Locator;
  private readonly locBusinessTaxIdInput: Locator;
  private readonly locContinueToPaymentButton: Locator;
  private readonly locAccountInformationHeader: Locator;
  private readonly locInformationIcon: Locator;
  private readonly locInformationIconTooltip: Locator;
  private readonly locPhoneTypeSelectOption: (phoneType: string) => Locator;
  private readonly locDownArrowOnPhoneType: Locator;

  constructor(page: Page) {
    this.page = page;
    this.orderSummaryComponent = new OrderSummaryComponent(page);
    this.locPaymentIframe = this.page.frameLocator('//iframe[@title=\'payment iframe\']');
    this.locEmailLabel = this.page.getByLabel('Enter your email address that you will use for this account');
    this.locEmailInput = this.page.getByPlaceholder('Your email');
    this.locEmailDisplayedValue = this.page.locator('//div[contains(@class,"lsux-grid CheckoutSection") and contains(.,"Account")]//div[contains(@class,"lsux-row")]').nth(0);
    this.locSignInButton = this.page.getByRole('button', { name: 'Sign In' });
    //Order Summary
    this.locOrderSummaryHeader = this.page.getByRole('heading', { name: 'Order Summary' });
    this.locOrderSummaryContainer = this.page.locator(
      '//div[contains(@class,"CheckoutSection") and contains(.,"Order summary")]',
    );
    //Account Information Form
    this.locFirstNameInput = this.page.getByPlaceholder('First Name');
    this.locLastNameInput = this.page.getByPlaceholder('Last Name');
    this.locHomeAddressInput = this.page.getByPlaceholder('Home Address');
    this.locHomeAddress2Input = this.page.getByPlaceholder('Address Line 2 (optional)');
    this.locCityInput = this.page.getByPlaceholder('City');
    this.locStateInput = this.page.locator('//div[contains(@class,"lsux-col") and contains(.,"State")]//p').nth(1);
    this.locZipCodeInput = this.page.getByPlaceholder('Postal Code');
    this.locPhoneNumberInput = this.page.getByPlaceholder('(555) 555-5555');
    this.locPhoneTypeInput = this.page.getByPlaceholder('Select Type');
    this.locDOBInput = this.page.locator('//input[@name="dateOfBirth"]');
    this.locSSNInput = this.page.getByPlaceholder('Last 4 SSN or SIN');
    this.locBusinessNameInput = this.page.getByPlaceholder('Business Name');
    this.locDateOfIncorporationInput = this.page.locator('//input[@name="dateOfIncorporation"]');
    this.locBusinessTaxIdInput = this.page.getByPlaceholder('EIN / TIN');
    this.locContinueToPaymentButton = this.page.getByRole('button', { name: 'Continue to Payment' });
    this.locAccountInformationHeader = this.page.getByRole('heading', { name: 'Account Information' });
    this.locInformationIcon = this.page.getByRole('img', { name: 'info' });
    this.locInformationIconTooltip = this.page.locator('.info-tooltip-text');
    this.locPhoneTypeSelectOption = (phoneType: string) => this.page.getByLabel( phoneType );  
    this.locDownArrowOnPhoneType = this.page.locator('.lsux-select__trigger__icon');
  }

  // #region Navigation
  
  // #endregion Navigation

  // #region Actions

  async clickEmailInput(): Promise<void> {
    await this.locEmailInput.click();
  }
  async enterNewRandomEmailAddress(): Promise<string> {
    const randomEmail = `qaopstest+${Math.floor(Math.random() * 10000000)}@pplsi.com`;
    await this.locEmailInput.fill(randomEmail);
    return randomEmail;
  }
  async enterEmailOfExistingAddress(emailAddress: string): Promise<void> {
    await this.locEmailInput.fill(emailAddress);
    await this.page.keyboard.press('Enter');
  }
  async clickSignInButton(): Promise<void> {
    await this.locSignInButton.click();
  }
  async clickFirstNameInput(): Promise<void> {
    await this.locFirstNameInput.click();
  }
  async enterFirstName(firstName: string): Promise<void> {
    await this.locFirstNameInput.fill(firstName);
  }
  async clickLastNameInput(): Promise<void> {
    await this.locLastNameInput.click();
  }
  async enterLastName(lastName: string): Promise<void> {
    await this.locLastNameInput.fill(lastName);
  }
  async clickHomeAddressInput(): Promise<void> {
    await this.locHomeAddressInput.click();
  }
  async enterHomeAddress(homeAddressName: string): Promise<void> {
    await this.locHomeAddressInput.fill(homeAddressName);
  }
  async clickHomeAddress2Input(): Promise<void> {
    await this.locHomeAddress2Input.click();
  }
  async enterHomeAddress2(homeAddress2Name: string): Promise<void> {
    await this.locHomeAddress2Input.fill(homeAddress2Name);
  }
  async clickCityNameInput(): Promise<void> {
    await this.locCityInput.click();
  }
  async enterCityName(cityName: string): Promise<void> {
    await this.locCityInput.fill(cityName);
  }
  async clickZipCodeInput(): Promise<void> {
    await this.locZipCodeInput.click();
  }
  async enterZipCode(zipCode: string): Promise<void> {
    await this.locZipCodeInput.fill(zipCode);
  }
  async clickPhoneNumberInput(): Promise<void> {
    await this.locPhoneNumberInput.click();
  }
  async enterPhoneNumber(phoneNumber: string): Promise<void> {
    await this.locPhoneNumberInput.fill(phoneNumber);
  }

  async selectPhoneType(phoneType: string): Promise<void> {
    await this.locPhoneTypeInput.focus();
    await this.locDownArrowOnPhoneType.click();
    await this.locPhoneTypeSelectOption(phoneType).click();
  }
  
  async clickPhoneTypeInput(): Promise<void> {
    await this.locPhoneTypeInput.click({ force: true });
  }
  async clickDOBInput(): Promise<void> {
    await this.locDOBInput.click();
  }
  async focusAndTypeDateOfBirth(dateOfBirth: string): Promise<void> {
    await this.locDOBInput.focus();
    await this.page.keyboard.type(dateOfBirth);
  }
  async clickSSNInput(): Promise<void> {
    await this.locSSNInput.click();
  }
  async enterSSN(ssn: string): Promise<void> {
    await this.locSSNInput.fill(ssn);
  }
  async clickBusinessNameInput(): Promise<void> {
    await this.locBusinessNameInput.click();
  }
  async enterBusinessName(businessName: string): Promise<void> {
    await this.locBusinessNameInput.fill(businessName);
  }
  async clickDateOfIncorporationInput(): Promise<void> {
    await this.locDateOfIncorporationInput.click();
  }
  async focusAndTypeDateOfIncorporation(dateOfIncorporation: string): Promise<void> {
    await this.locDateOfIncorporationInput.focus();
    await this.page.keyboard.type(dateOfIncorporation);
  }
  async clickBusinessTaxIdInput(): Promise<void> {
    await this.locBusinessTaxIdInput.click();
  }
  async enterBusinessTaxId(businessTaxId: string): Promise<void> {
    await this.locBusinessTaxIdInput.fill(businessTaxId);
  }
  async clickContinueToPaymentButton(): Promise<void> {
    await this.locContinueToPaymentButton.click();
  }

  async fillAccountInfoForm(testDataAccount?: IAccountInfoData): Promise<void> {
    // get profile data to fill out form
    await this.locFirstNameInput.fill(testDataAccount?.firstName || '');
    await this.locLastNameInput.fill(testDataAccount?.lastName || '');
    await this.locHomeAddressInput.fill(testDataAccount?.homeAddress || '');
    await this.locHomeAddress2Input.fill(testDataAccount?.homeAddress2 || '');
    await this.locCityInput.fill(testDataAccount?.cityName || '');
    await this.locZipCodeInput.fill(testDataAccount?.zipCode || '');
    await this.locPhoneNumberInput.fill(testDataAccount?.phoneNumber || '');
  }

  changeAddress = async (
    homeAddress: string,
    city: string,
    postalCode: string,
  ): Promise<void> => {
    await this.enterHomeAddress(homeAddress);
    await this.enterCityName(city);
    await this.enterZipCode(postalCode);
  };

  fillSecurityInfoForm = async (customSecurityInfoData?: ISecurityInfoData): Promise<void> => {
    // get profile data to fill out form
    await this.focusAndTypeDateOfBirth(customSecurityInfoData?.dob || '');
    await this.locSSNInput.fill(customSecurityInfoData?.ssn || '');
  };

  fillBusinessInfoForm = async (customBusinessInfoData?: IBusinessInfoData): Promise<void> =>{
    // get profile data to fill out form
    await this.locBusinessNameInput.fill(customBusinessInfoData?.businessName || '');
    await this.focusAndTypeDateOfIncorporation(customBusinessInfoData?.businessDOI || '');
    await this.locBusinessTaxIdInput.fill(customBusinessInfoData?.businessTaxID || '');
  };

  fillAccountAndSecurityInfoForm = async (testDataAccount?: IAccountInfoData, testDataSecurity?: ISecurityInfoData): Promise<void> => { 
    await this.fillAccountInfoForm(testDataAccount);
    await this.fillSecurityInfoForm(testDataSecurity);  
  };

  // #endregion Actions

  // #region Assertions
  assertContinueToPaymentButtonVisible = async (): Promise<void> => {
    await expect(this.locContinueToPaymentButton).toBeVisible();
  };
  // #endregion Assertions
}

