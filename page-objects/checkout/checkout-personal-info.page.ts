import { expect } from '@playwright/test'; // import expect functionality from playwright
import UrlsUtils from '../../utils/urls.utils'; // import class of Urls
import { LoginPage } from '../login/login.page'; // import the LoginPage for extension

// ========================== Selectors ==================================
const btnSaveAndContinue: string = 'button:has-text("Save & Continue")';

// ========================== Personal Info Selectors ====================
const stpPersonalInfoCurrent: string = 'TBD';
const txtFirstName: string = '[name="firstName"]';
const txtLastName: string = '[name="lastName"]';
const txtPhoneNumber: string = '[name="phoneNumber"]';
const txtPhoneType: string = '[name="phoneType"]';
const txtHomeAddress: string = '[name="homeAddress"]';
const txtCity: string = '[name="city"]';
const txtPostalCode: string = '[name="postalCode"]';
const txtRegion: string = '//span[contains(@class, "contact-region")]';
const lnkChangeState: string = 'a:has-text("Change")';
const imgStateChangeInformationIcon: string = '[alt="info"';

// ========================== Support Card Selectors ======================
const conSupportInfo: string = '//div[contains(@class, "support-card-container")]';
const btnCallSupport: string = 'button:has-text("Call (833)-951-2754")';

// ========================== Order Summary Selectors =====================
const lnkEditOrder: string = 'button:has-text("Edit")';
const imgHideOrderSummaryChevron: string = 'img[alt="nav_chevron_single_up."]';
const imgShowOrderSummaryChevron: string = 'img[alt="nav_chevron_single_down."]';
const txtTermTotalLabel: string =
  '//div[contains(@class,"lsux-row eight-four children2 footer-row mb-0")]//div[contains(@class,"left-label")]//p';
const txtTermTotalAmount: string =
  '//div[contains(@class,"lsux-row eight-four children2 footer-row mb-0")]//div[contains(@class,"right-label")]//p';
const txtTotalDueTodayAmount: string =
  '//div[contains(@class, "lsux-row half children2 footer-row mb-0") and contains(., "Total Due Today")]/div/following-sibling::div//p';

// ========================== Security Info Selectors ======================
const txtBirthMonth: string = '[name="dobMonth"]';
const txtBirthDay: string = '[name="dobDay"]';
const txtBirthYear: string = '[name="dobYear"]';
const txtSocialSecurityNumber: string = '[placeholder="Last 4 SSN or SIN"]';

// ========================== Business Info Selectors ======================
const txtBusinessName: string = '[placeholder="Last 4 SSN or SIN"]';
const txtIncorporationMonth: string = '[placeholder="Business Name"]';
const txtIncorporationDay: string = '[placeholder="Last 4 SSN or SIN"]';
const txtIncorporationYear: string = '[placeholder="Last 4 SSN or SIN"]';
const txtTaxId: string = '[placeholder="EIN / TIN"]';

/**
 *
 *
 * @export
 * @class CheckoutPersonalInfoPage
 * @extends {LoginPage}
 */
export class CheckoutPersonalInfoPage extends LoginPage {
  // ========================== Process Methods ============================

  fillOutEverything = async (firstName: string): Promise<void> => {
    this.fillOutPersonalInfo();
    this.fillOutSecurityInfo();
    this.fillOutBusinessInfo();
  };

  fillOutPersonalInfo = async (firstName: string): Promise<void> => {
    this.enterFirstName('matt');
    this.enterLastName('fee');
  };

  enterFirstName = async (firstName: string): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.enterFirstName');
    await this.fillTextBox(txtFirstName, firstName);
  };

  enterLastName = async (lastName: string): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.enterLastName');
    await this.fillTextBox(txtLastName, lastName);
  };

  enterPhoneNumber = async (phoneNumber: string): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.enterPhoneNumber');
    await this.fillTextBox(txtPhoneNumber, phoneNumber);
  };

  enterPhoneType = async (phoneType: string): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.enterPhoneType');
    await this.fillTextBox(txtPhoneType, phoneType);
  };

  enterHomeAddress = async (homeAddress: string): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.enterHomeAddress');
    await this.fillTextBox(txtHomeAddress, homeAddress);
  };

  enterCity = async (city: string): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.enterCity');
    await this.fillTextBox(txtCity, city);
  };

  enterPostalCode = async (postalCode: string): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.enterPostalCode');
    await this.fillTextBox(txtPostalCode, postalCode);
  };

  hoverInformationIcon = async (): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.enterPostalCode');
    await this.hoverElement(txt);
  };

  enterMonth = async (month: string): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.enterMonth');
    await this.fillTextBox(txtBirthMonth, month);
  };

  enterDay = async (day: string): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.enterDay');
    await this.fillTextBox(txtBirthDay, day);
  };

  enterYear = async (year: string): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.enterYear');
    await this.fillTextBox(txtBirthYear, year);
  };

  enterSocialSecurityNumber = async (socialSecurityNumber: string): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.enterSocialSecurityNumber');
    await this.fillTextBox(txtSocialSecurityNumber, socialSecurityNumber);
  };

  enterBusinessName = async (businessName: string): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.enterBusinessName');
    await this.fillTextBox(txtBusinessName, businessName);
  };

  enterIncorporationMonth = async (Month: string): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.enterIncorporationMonth');
    await this.fillTextBox(txtIncorporationMonth, Month);
  };

  enterIncorporationDay = async (day: string): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.enterIncorporationDay');
    await this.fillTextBox(txtIncorporationDay, day);
  };

  enterIncorporationYear = async (Year: string): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.enterIncorporationYear');
    await this.fillTextBox(txtIncorporationYear, Year);
  };

  enterTaxId = async (taxId: string): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.enterTaxId');
    await this.fillTextBox(txtTaxId, taxId);
  };

  // ========================== Navigate Methods ===========================
  // ========================== Click Methods ==============================
  clickChangeStateLink = async () => {
    console.log(' - checkoutPersonalInfoPage.clickChangeStateLink');
    // Click on Plans Link from Accounts Navigation
    await this.clickOnElement(lnkChangeState);
  };

  clickSaveAndContinueButton = async () => {
    console.log(' - checkoutPersonalInfoPage.clickSaveAndContinueButton');
    // Click on Plans Link from Accounts Navigation
    await this.clickOnElement(btnSaveAndContinue);
  };
  // ========================== Assertion Methods ==========================
}
