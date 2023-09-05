import { expect } from '@playwright/test';
import { AccountNavigationPage } from './account-navigation.page';
import { AccountProfilePage } from './account-profile.page';
// require('dotenv').config;

// ========================== Selectors ==========================

const TXT_BOX_EDIT_PHONE_NUMBER_NAME = 'input[name="phoneNumber"]';
const BTN_DELETE_PHONE_NUMBER = '.lsux-button.lsux-button--primary.lsux-button--icon-only';
const BTN_EDIT_PHONE_NUMBER = '.lsux-button.lsux-button--standard.lsux-button--icon-only.mr-1.ml-2';
const BTN_ADD_PHONE = '//span[text()= "Add"]';
const TXT_BOX_ADD_PHONE = '[pattern="^[0-9]*$"]';
const TXT_ALERT_UPDATED_SUCCESSFULLY = '.lsux-text.lsux-text--body.lsux-alert__text ml-3 ';
const SELECT_PHONE_TYPE = '[name="phoneType"]';

export class AccountProfilePhonePage extends AccountProfilePage {
  // Page Instances
  accountProfilePage = new AccountProfilePage(this.page);
  accoutNavigationPage = new AccountNavigationPage(this.page);

  // ========================== Process Methods ==========================

  // Add a new phone number
  addPhoneNumberFun = async (phone: string): Promise<void> => {
    // Create an array that contains all phone text boxes
    await this.page.waitForSelector(TXT_BOX_EDIT_PHONE_NUMBER_NAME);
    const phNumAdd = await this.page.$$(TXT_BOX_EDIT_PHONE_NUMBER_NAME);
    // Click on the edit button by creating an array then selecting the corresponding Btn
    await this.page.waitForSelector(BTN_EDIT_PHONE_NUMBER);
    const addBtn = await this.page.$$(BTN_EDIT_PHONE_NUMBER);
    // Selecting a phone type
    const editTypeSelect = await this.page.$$(SELECT_PHONE_TYPE);
    for (const phele of phNumAdd) {
      console.log(await phele.innerText());
    }
    // The count variable is used as an index to click on the corresponding edit button.
    let count = 0;
    // Looping inside the text boxes array to pick the phone number to be edited.
    for await (const eph of phNumAdd) {
      const ph = await eph.getAttribute('pattern');
      console.log(ph);
      console.log(count);
      if (ph === '^[0-9]*$') {
        console.log('inside editBtn if');
        // Add the phone number text box
        await this.fillTextBox(TXT_BOX_ADD_PHONE, phone);
        // Update the phone type text box
        await editTypeSelect[count]?.selectOption({ label: 'Work' });
        // Click the confirm Btn
        await addBtn[count].click();
      }
      // increasing count variable
      count = count + 1;
    }
  };
  // Edit Phone Number Process Methods
  // Click on the edit button by creating an array then selecting the corresponding Btn

  editPhoneNumberFun = async (phone: string, edPhone: string): Promise<void> => {
    console.log(' - accountProfilePage.editPhoneNumberBtn');
    // Click on the edit button by creating an array then selecting the corresponding Btn
    await this.page.waitForSelector(BTN_EDIT_PHONE_NUMBER);
    const editBtn = await this.page.$$(BTN_EDIT_PHONE_NUMBER);
    console.log(await editBtn.length);
    // Create an array that contains all phone text boxes
    await this.page.waitForSelector(TXT_BOX_EDIT_PHONE_NUMBER_NAME);
    const phNum = await this.page.$$(TXT_BOX_EDIT_PHONE_NUMBER_NAME);
    // Selecting a phone type
    const editTypeSelect = await this.page.$$(SELECT_PHONE_TYPE);
    for (const phele of phNum) {
      console.log(await phele.innerText());
    }
    // The count variable is used as an index to click on the corresponding edit button.
    let count = 0;
    // Looping inside the text boxes array to pick the phone number to be edited.
    for await (const eph of phNum) {
      const ph = await eph.getAttribute('value');
      if (ph === phone) {
        console.log('inside editBtn if');
        // Click edit Btn
        await editBtn[count].waitForSelector;
        await editBtn[count].click();
        // Update the phone number text box
        await this.fillTextBox('input[value="' + phone + '"]', edPhone);
        // Update the phone type text box
        await editTypeSelect[count]?.selectOption({ label: 'Home' });
        // Click the confirm Btn
        await editBtn[count].click();
      }
      // increasing count variable
      count = count + 1;
    }
  };

  // Delete Phone Number Process Methods
  deletePhoneNumberFun = async (phone: string): Promise<void> => {
    console.log(' - accountProfilePage.deletePhoneNumberFun');
    // Click on the edit button by creating an array then selecting the corresponding Btn
    await this.page.waitForSelector(BTN_DELETE_PHONE_NUMBER);
    const deleteBtn = await this.page.$$(BTN_DELETE_PHONE_NUMBER);
    console.log(await deleteBtn.length);
    // Create an array that contains all phone text boxes
    await this.page.waitForSelector(TXT_BOX_EDIT_PHONE_NUMBER_NAME);
    const phNum = await this.page.$$(TXT_BOX_EDIT_PHONE_NUMBER_NAME);
    for (const phele of phNum) {
      console.log(await phele.innerText());
    }
    // The count variable is used as an index to click on the corresponding edit button.
    let count = 0;
    // Looping inside the text boxes array to pick the phone number to be edited.
    for await (const eph of phNum) {
      const ph = await eph.getAttribute('value');
      if (ph === phone) {
        console.log('inside deleteBtn if');
        // Click edit Btn
        await deleteBtn[count].waitForSelector;
        await deleteBtn[count].click();
      }
      // increasing count variable
      count = count + 1;
    }
    // Wait for document to load before subsequent steps
    await this.page.waitForLoadState('domcontentloaded');
  };
  // ========================== Navigate Methods ==========================
  // Navigate to Profile Phone page
  navigateToProfilePhoneNumberPage = async (): Promise<void> => {
    console.log(' - accountProfilePage.goToProfileNamePage');
    await this.navigateToProfilePage();
    await this.clickEditPhoneNumberButton();
  };
  // ========================== Click Methods ==========================

  // Clicking the Add Phone button
  clickAddPhoneNumberButton = async (): Promise<void> => {
    console.log(' - accountProfilePhonePage.addPhoneNumberBtn');
    await this.clickOnElement(BTN_ADD_PHONE);
  };

  // ========================== Assertion Methods ==========================

  // Verify that the phone number was updated
  assertProfilePhoneNumberTxtBox = async (phone: string): Promise<void> => {
    console.log(' - profilePhoneNumberPage.assertProfilePhoneNumberTxtBox');
    // Confirm the Phone Number  is updated
    const updatedPhone = await this.page.getAttribute('input[value="' + phone + '"]', 'value');
    expect(updatedPhone).toBe(phone);
    // Wait for document to load before subsequent steps
    await this.page.waitForLoadState('domcontentloaded');
  };
  // Verify that the phone number was deleted
  assertProfileDeletePhoneNumberMsg = async (): Promise<void> => {
    console.log(' - profilePhoneNumberPage.assertProfileDeletePhoneNumberMsg');
    // Confirm the Phone Number  is deleted
    const ele = await this.page.$(TXT_ALERT_UPDATED_SUCCESSFULLY);
    await this.page.on('dialog', (dialog) => {
      console.log(dialog.message());
    });
    await ele?.click();
    // console.log(msgDialog);
    // expect(msgDialog).toBe(msg);
    // Wait for document to load before subsequent steps
    await this.page.waitForLoadState('domcontentloaded');
  };
}
