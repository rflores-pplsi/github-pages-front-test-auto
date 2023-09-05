import { expect } from '@playwright/test';
import UrlsUtils from '../../../utils/urls.utils';
import { LoginPage } from '../login/login.page';
import { AccountNavigationPage } from './account-navigation.page';

const url = UrlsUtils.legalshieldUrls.accounts.url + '/profile';

// ========================== Selectors ==========================
const BTN_EDIT_NAME = '//h5[text()="Name"]/../../button';
const BTN_EDIT_DATE_OF_BIRTH = '//h5[text()="Date of birth"]/../../button';
const BTN_EDIT_PHONE = '//h5[text()="Phone number"]/../../button';
const BTN_EDIT_ADDRESS = '//h5[text()="Address"]/../../button';
const BTN_EDIT_EMAIL = '//h5[text()="Email Address"]/../../button';
const TXT_NAME_H3 = 'h3.lsux-heading.lsux-heading--t20';
const TXT_DOB_H3 = 'h3.lsux-heading.lsux-heading--t20';
const TXT_PHONE_NUMBER_H3 = 'h3.lsux-heading.lsux-heading--t20';
const TXT_ADDRESS_H3 = 'h3.lsux-heading.lsux-heading--t20';
const TXT_EMAIL_H3 = 'h3.lsux-heading.lsux-heading--t20';

/**
 *
 *
 * @export
 * @class AccountProfilePage
 * @extends {LoginPage}
 */
export class AccountProfilePage extends LoginPage {
  // ========================== Page Instances ==========================
  accountNavigationPage = new AccountNavigationPage(this.page);

  // ========================== Process Methods ==========================

  // ========================== Navigate Methods ==========================

  navigateToProfilePage = async (): Promise<void> => {
    console.log(' - accountProfilePage.goToProfilePage');
    await this.page.goto(url, { waitUntil: 'networkidle' });
    await this.login('mattfeeqa@gmail.com', 'Password10!');
  };

  // ========================== Click Methods ==========================

  // Clicking on the Name Edit button
  clickEditNameButton = async (): Promise<void> => {
    console.log(' - accountProfilePage.editNameBtn');
    await this.clickOnElement(BTN_EDIT_NAME);
    // Wait for document to load before subsequent steps
    await this.page.waitForSelector(TXT_NAME_H3);
  };

  // Clicking on the Date of Birth Edit button
  clickEditDateOfBirthButton = async (): Promise<void> => {
    console.log(' - accountProfilePage.editDateOfBirthBtn');
    await this.clickOnElement(BTN_EDIT_DATE_OF_BIRTH);
    // Wait for document to load before subsequent steps
    await this.page.waitForLoadState('domcontentloaded');
    await this.page.waitForSelector(TXT_DOB_H3);
  };

  // Clicking on the Phone Number Edit button
  clickEditPhoneNumberButton = async (): Promise<void> => {
    console.log(' - accountProfilePage.editPhoneBtn');
    await this.clickOnElement(BTN_EDIT_PHONE);
    // Wait for document to load before subsequent steps
    await this.page.waitForLoadState('domcontentloaded');
    await this.page.waitForSelector(TXT_PHONE_NUMBER_H3);
  };

  // Clicking on the Address Edit button
  clickEditAddressButton = async (): Promise<void> => {
    console.log(' - accountProfilePage.editAddressBtn');
    await this.clickOnElement(BTN_EDIT_ADDRESS);
    // Wait for document to load before subsequent steps
    await this.page.waitForLoadState('domcontentloaded');
    await this.page.waitForSelector(TXT_ADDRESS_H3);
  };

  // Clicking on the Email Edit button
  clickEditEmailButton = async (): Promise<void> => {
    console.log(' - accountProfilePage.editEmailBtn');
    await this.clickOnElement(BTN_EDIT_EMAIL);
    // Wait for document to load before subsequent steps
    await this.page.waitForLoadState('domcontentloaded');
    await this.page.waitForSelector(TXT_EMAIL_H3);
  };

  // ========================== Assertion Methods ==========================

  assertProfileNamePage = async (): Promise<void> => {
    console.log(' - accountProfilePage.assertProfileNamePage');
    // Confirm the landing on Profile Name Page
    const pageName = await this.page.locator(TXT_NAME_H3).innerText();
    expect(pageName).toBe('Name');
    // Wait for document to load before subsequent steps
    await this.page.waitForLoadState('domcontentloaded');
  };

  assertNameEditButtonIsDisabled = async (): Promise<void> => {
    console.log(' - accountProfilePage.assertNameEditButtonIsDisabled');
    // confirm Edit button for Name is disabled.
    await this.assertElementIsDisabled(BTN_EDIT_NAME);
  };

  assertAddressButtonIsDisabled = async (): Promise<void> => {
    console.log(' - accountProfilePage.assertAddressButtonIsDisabled');
    // confirm Edit button for Address is disabled.
    await this.assertElementIsDisabled(BTN_EDIT_ADDRESS);
  };

  assertProfileDateOfBirthPageUrl = async (): Promise<void> => {
    console.log(' - accountProfilePage.assertProfileDateOfBirthPageUrl');
    // Confirm the landing on Profile Date of Birth Page
    const pageDob = await this.page.locator(TXT_DOB_H3).innerText();
    expect(pageDob).toBe('Date of birth');
    // Wait for document to load before subsequent steps
    await this.page.waitForLoadState('domcontentloaded');
  };

  assertProfilePhoneNumberPageUrl = async (): Promise<void> => {
    console.log(' - accountProfilePage.assertProfilePhonePageUrl');
    // Confirm the landing on Profile Phone Number Page
    const pagePhone = await this.page.locator(TXT_PHONE_NUMBER_H3).innerText();
    expect(pagePhone).toBe('Phone number');
    // Wait for document to load before subsequent steps
    await this.page.waitForLoadState('domcontentloaded');
  };

  assertProfileAddressPageUrl = async (): Promise<void> => {
    console.log(' - profileAddressPage.assertProfileAddressPageUrl');
    // Confirm the landing on Profile Address Page
    const pageAddress = await this.page.locator(TXT_ADDRESS_H3).innerText();
    expect(pageAddress).toBe('Address');
    // Wait for document to load before subsequent steps
    await this.page.waitForLoadState('domcontentloaded');
  };

  assertProfileEmailPageUrl = async (): Promise<void> => {
    console.log(' - profileAddressPage.assertProfileEmailPageUrl');
    // Confirm the landing on Profile Email Page
    const pageEmail = await this.page.locator(TXT_EMAIL_H3).innerText();
    expect(pageEmail).toBe('Email Addresses');
    // Wait for document to load before subsequent steps
    await this.page.waitForLoadState('domcontentloaded');
  };
}
