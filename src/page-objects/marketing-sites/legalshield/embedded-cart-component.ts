import { Locator, Page } from '@playwright/test';
import { CommonLoginService } from '@legalshield/frontend-automation-commons';

export class EmbeddedCartComponent {
  readonly page: Page;
  readonly commonLoginService: CommonLoginService;
  readonly locCartContainer: Locator;
  private locContinueButton: Locator;
  private locContinueShoppingButton: Locator;
  private locMonthlyTotal: Locator;
  private locAnnualTotal: Locator;
  private locTotalDueToday: Locator;
  private locProductArray: Locator;
  private locEmailAddressInput: Locator;
  private locFirstNameInput: Locator;
  private locLastNameInput: Locator;
  private locAddressInput: Locator;
  private locAddressLine2Input: Locator;
  private locCityInput: Locator;
  private locZipCodeInput: Locator;
  private locPhoneNumberInput: Locator;
  private locPhoneTypeDropdown: Locator;
  private locDateOfBirthInput: Locator;
  private locLastFourSSNInput: Locator;
  private locBusinessNameInput: Locator;
  private locIncorporationDateInput: Locator;
  private locTaxIdInput: Locator;
  private locWelcomeBackSignInButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.commonLoginService = new CommonLoginService(page);
    this.locCartContainer = this.page.locator('//nav[contains(@id,"EZDrawer")]');
    this.locContinueShoppingButton = this.page.getByText('Continue Shopping');
    this.locMonthlyTotal = this.page.locator('//div[@id="monthly_total_p"]//p');
    this.locAnnualTotal = this.page.locator('//div[@id="annual_total_p"]//p');
    this.locTotalDueToday = this.page.locator('//div[@id="total_due_today_p"]//p');
    this.locProductArray = this.page.locator('//div[contains(@class,"DrawerCartSelectedProduct")]');
    this.locEmailAddressInput = this.page.locator('//input[@id="email"]');
    this.locFirstNameInput = this.page.locator('//input[@name="firstName"]');
    this.locLastNameInput = this.page.locator('//input[@name="lastName"]');
    this.locAddressInput = this.page.locator('//input[@name="address"]');
    this.locAddressLine2Input = this.page.locator('//input[@name="address2"]');
    this.locCityInput = this.page.locator('//input[@name="city"]');
    this.locZipCodeInput = this.page.locator('//input[@name="zip"]');
    this.locPhoneNumberInput = this.page.locator('//input[@name="phone"]');
    this.locPhoneTypeDropdown = this.page.locator('//select[@name="phoneType"]');
    this.locDateOfBirthInput = this.page.locator('//input[@name="dob"]');
    this.locLastFourSSNInput = this.page.locator('//input[@name="ssn"]');
    this.locBusinessNameInput = this.page.locator('//input[@name="lastName"]');
    this.locIncorporationDateInput = this.page.locator('//input[@name="lastName"]');
    this.locTaxIdInput = this.page.locator('//input[@name="lastName"]');
    this.locWelcomeBackSignInButton = this.page.locator('//div[contains(@class,"EZDrawer") and .//h3[contains(text(),"Welcome back!")]]//a[contains(.,"Sign In")]');
    this.locContinueButton = this.page.locator('//nav[contains(@class,"EZDrawer")]//button');
  };

  clickContinueButton = async (): Promise<void> => {
    await this.locContinueButton.click();
  };

  clickContinueShoppingButton = async (): Promise<void> => {
    await this.locContinueShoppingButton.click(); 
    await this.page.waitForSelector('//body[not(@hidden)]');
  };

  submitAccountInformationForm = async (
    firstName: string,
    lastName: string,
    homeAddress: string,
    city: string,
    postalCode: string,
    phoneNumber: string,
    phoneType: string,
    dateOfBirth: string,
    socialSecurity: string,
  ): Promise<void> => {
    await this.fillFirstName(firstName);
    await this.fillLastName(lastName);
    await this.fillAddress(homeAddress);
    await this.fillCity(city);
    await this.fillZipCode(postalCode);
    await this.fillPhoneNumber(phoneNumber);
    await this.fillPhoneType(phoneType);
    await this.fillDateOfBirthInput(dateOfBirth);
    await this.fillSSNLastFour(socialSecurity);
  };

  changeAddress = async (
    homeAddress: string,
    city: string,
    postalCode: string,
  ): Promise<void> => {
    await this.fillAddress(homeAddress);
    await this.fillCity(city);
    await this.fillZipCode(postalCode);
  };

  fillBusinessInformationFields = async (
    businessName: string,
    dateOfBirth: string,
    taxId: string,
  ): Promise<void> => {
      await this.fillBusinessName(businessName);
      await this.fillIncorporationDate(dateOfBirth);
      await this.fillTaxId(taxId);
  };
  
  fillFirstNameInput = async (firstName:string ): Promise<void> => {
    await this.locFirstNameInput.fill(firstName);
  };
  
  enterExistingEmailAddress = async (email: string, pass: string): Promise<void> => {
      await this.fillEmailAddress(email);
      await this.page.keyboard.press('Tab');
      await this.page.waitForSelector('//h3[contains(text(),"Welcome back!")]');
      await this.clickWelcomeBackSignInButton();
      await this.commonLoginService.loginPage.login(email, pass);
  };

  enterNewRandomEmailAddress = async (): Promise<void> =>{
    const randomEmail = `qaopstest+${Math.floor(Math.random() * 10000000)}@pplsi.com`;
      await this.fillEmailAddress(randomEmail);
  };

  clickWelcomeBackSignInButton = async (): Promise<void> => {
    await this.locWelcomeBackSignInButton.click();
  };

  fillEmailAddress = async (email: string): Promise<void> => {
  await this.locEmailAddressInput.fill(email);
  };

  fillFirstName = async (firstName: string): Promise<void> => {
    await this.locFirstNameInput.fill(firstName);
  };

  fillLastName = async (lastName: string): Promise<void> => {
    await this.locLastNameInput.fill(lastName);
  };

  fillAddress = async (address: string): Promise<void> => {
    await this.locAddressInput.fill(address);
  };

  fillAddressLine2 = async (addressLine2: string): Promise<void> => {
    await this.locAddressLine2Input.fill(addressLine2);
  };

  fillCity = async (city: string): Promise<void> => {
    await this.locCityInput.fill(city);
  };

  fillZipCode = async (zipCode: string): Promise<void> => {
    await this.locZipCodeInput.fill(zipCode);
  };

  fillPhoneNumber = async (phoneNumber: string): Promise<void> => {
    await this.locPhoneNumberInput.fill(phoneNumber);
  };

  fillPhoneType = async (phoneType: string): Promise<void> => {
    await this.locPhoneTypeDropdown.selectOption(phoneType);
  };

  fillDateOfBirthInput = async (dateOfBirth: string): Promise<void> => {
    await this.locDateOfBirthInput.focus();
    await this.page.keyboard.type(dateOfBirth);
  };

  fillSSNLastFour = async (ssnLastFour: string): Promise<void> => {
    await this.locLastFourSSNInput.fill(ssnLastFour);
  };

  fillBusinessName = async (businessName: string): Promise<void> => {
  await this.locBusinessNameInput.fill(businessName);
  };

  fillIncorporationDate = async (incorporationDate: string): Promise<void> => {
    await this.locIncorporationDateInput.fill(incorporationDate);
  };

  fillTaxId = async (taxId: string): Promise<void> => {
    await this.locTaxIdInput.fill(taxId);
  };

};
