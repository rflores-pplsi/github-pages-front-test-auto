/* eslint-disable no-unused-vars */
/* eslint-disable require-jsdoc */
import { expect } from '@playwright/test';
import { AccountNavigationPage } from './account-navigation.page';
import { AccountProfilePage } from './account-profile.page';
// require('dotenv').config;

// ========================== Selectors ==========================
const btnEmailAddressAdd = 'button.lsux-button.lsux-button--primary.mt-4 img';
const txtBoxEditEmailAddress =
  '//div[@class="lsux-container lsux-container--white  lsux-container--flexbox   lsux-container--flex-justify-space-between   mobile-profile-grid-container"]';
const btnConfirmEmailAddress = '//*[@class="inputs--wrapper inputs--wrapper-list"]/div/div[3]/button[1]';
// eslint-disable-next-line no-unused-vars
let newAddedEmailValue;

export class AccountProfileEmailPage extends AccountProfilePage {
  // Page Instances

  accoutNavigationPage = new AccountNavigationPage(this.page);

  // ========================== Process Methods ==========================

  addEmailAddressFun = async (email: string): Promise<void> => {
    // Create an array that contains all Email text boxes
    await this.page.waitForSelector(txtBoxEditEmailAddress);
    const emailAddressAdd = await this.page.$$(txtBoxEditEmailAddress);
    console.log(emailAddressAdd.length);
    for (const emailAddress of emailAddressAdd) {
      // console.log(await emailEle.getAttribute('value'));
    }
    // Click on the edit button by creating an array then selecting the corresponding Btn
    await this.page.waitForSelector(btnConfirmEmailAddress);
    const confirmBtn = await this.page.$$(btnConfirmEmailAddress);
    console.log(confirmBtn.length);
    // Click on Add Button
    // await this.page.waitForSelector(btnEmailAddressAdd);
    await this.page.waitForLoadState('domcontentloaded');
    // Force Click on Add Button
    await this.page.waitForSelector(btnEmailAddressAdd);
    await this.page.locator(btnEmailAddressAdd).click();
    await this.page.waitForTimeout(1000);
    // await this.page.waitForTimeout(5000);
    console.log('I clicked on the Add button');
    // Fill-out new email text box
    await this.page.waitForSelector(
      '//div[@class="inputs--wrapper inputs--wrapper-list"]/div[' + (emailAddressAdd.length + 1) + ']/div/div/div/input'
    );
    await this.page.fill('//div[@class="inputs--wrapper inputs--wrapper-list"]/div[' + (emailAddressAdd.length + 1) + ']/div/div/div/input', email);
    const btn = await this.page.$('//div[@class="inputs--wrapper inputs--wrapper-list"]/div[' + (emailAddressAdd.length + 1) + ']/div[3]/button[1]');
    btn?.click({ force: true });
    await this.page.waitForTimeout(1000);
    // Assign the new email to newAddedEmailValue instance variable for later verification
    newAddedEmailValue = email;
  };

  editEmailAddressFun = async (email: string, newEmail: string): Promise<void> => {
    console.log(' - accountProfilePage.editPhoneNumberBtn');
    // Create an array that contains all Email text boxes
    await this.page.waitForSelector(txtBoxEditEmailAddress);
    const emailAddressEdit = await this.page.$$(txtBoxEditEmailAddress);
    console.log(emailAddressEdit.length);
    for (let i = 1; i < emailAddressEdit.length + 1; i++) {
      const oEmail = await this.page
        .locator('//*[@class="inputs--wrapper inputs--wrapper-list"]/div[' + i + ']/div[2]/div/div[@class="lsux-input-container"]/input')
        .getAttribute('value');
      console.log(oEmail);
    }

    // Click on the edit button by creating an array then selecting the corresponding Btn
    for (let i = 1; i < emailAddressEdit.length + 1; i++) {
      const oEmail = await this.page
        .locator('//*[@class="inputs--wrapper inputs--wrapper-list"]/div[' + i + ']/div[2]/div/div[@class="lsux-input-container"]/input')
        .getAttribute('value');
      console.log(oEmail);
      if (oEmail === email) {
        console.log('I am insdide of edit email for loop');
        await this.clickOnElement('//*[@class="inputs--wrapper inputs--wrapper-list"]/div[' + i + ']/div[3]/button[1]');
        await this.fillTextBox(
          '//*[@class="inputs--wrapper inputs--wrapper-list"]/div[' + i + ']/div[2]/div/div[@class="lsux-input-container"]/input',
          newEmail
        );
        await this.page.click('//*[@class="inputs--wrapper inputs--wrapper-list"]/div[' + i + ']/div[3]/button[1]', {
          force: true,
        });
      }

      // await this.clickOnElement('//*[@class="inputs--wrapper inputs--wrapper-list"]/div['+i+']/div[3]/button[2]');
    }
  };
  deleteEmailAddressFun = async (email: string): Promise<void> => {
    console.log(' - accountProfilePage.deleteEmailAddressFun');
    // Create an array that contains all Email text boxes
    await this.page.waitForSelector(txtBoxEditEmailAddress);
    const emailAddressAdd = await this.page.$$(txtBoxEditEmailAddress);
    console.log(emailAddressAdd.length);
    // Click on the edit button by creating an array then selecting the corresponding Btn
    for (let i = 1; i < emailAddressAdd.length + 1; i++) {
      const oEmail = await this.page
        .locator('//*[@class="inputs--wrapper inputs--wrapper-list"]/div[' + i + ']/div[2]/div/div[@class="lsux-input-container"]/input')
        .getAttribute('value');
      if (oEmail === email) {
        console.log('I am insdide of edit email "if"');
        await this.clickOnElement('//*[@class="inputs--wrapper inputs--wrapper-list"]/div[' + i + ']/div[3]/button[2]');
      }
      // await this.clickOnElement('//*[@class="inputs--wrapper inputs--wrapper-list"]/div['+i+']/div[3]/button[2]');
    }
  };

  // ========================== Navigate Methods ==========================
  navigateToProfileEmailPage = async (): Promise<void> => {
    console.log(' - accountProfilePage.goToProfileNamePage');
    await this.navigateToProfilePage();
    await this.clickEditEmailButton();
  };
  // ========================== Click Methods ==========================

  // ========================== Assertion Methods ==========================
  // Verify that the Email Address was updated
  assertProfileUpdatedEmailTxtBox = async (email: string): Promise<void> => {
    console.log(' - profilePhoneNumberPage.assertProfilePhoneNumberTxtBox');
    // Confirm the Email Address  is updated
    const updatedEmail = await this.page?.locator('//input[@value="' + email + '"]');
    expect(await updatedEmail.getAttribute('value')).toBe(email);
    console.log('The updated Email: ' + (await updatedEmail.getAttribute('value')) + ' is equal to the email: ' + email);
    console.log(email);
    // Wait for document to load before subsequent steps
    await this.page.waitForLoadState('domcontentloaded');
  };
  // Verify that the Email Address was updated
  assertProfileAddEmailTxtBox = async (email: string): Promise<void> => {
    console.log(' - profilePhoneNumberPage.assertProfilePhoneNumberTxtBox');
    // Confirm the Email Address  is updated
    const addedEmail = await this.page?.locator('//input[@value="' + email + '"]');
    expect(await addedEmail.getAttribute('value')).toBe(email);
    console.log('The added Email: ' + (await addedEmail.getAttribute('value')) + ' is equal to the email: ' + email);
    console.log(email);
    // Wait for document to load before subsequent steps
    await this.page.waitForLoadState('domcontentloaded');
  };
  // Verify that the Email Address was updated
  assertProfileDeletedEmailTxtBox = async (email: string): Promise<void> => {
    console.log(' - profilePhoneNumberPage.assertProfilePhoneNumberTxtBox');
    // Confirm the Email Address  is deleted
    const addedEmail = await this.page?.locator('//input[@value="' + email + '"]');
    expect(await addedEmail.getAttribute('value')).toBe(email);
    console.log('The deleted Email: ' + (await addedEmail.getAttribute('value')) + ' is equal to the email: ' + email);
    console.log(email);
    // Wait for document to load before subsequent steps
    await this.page.waitForLoadState('domcontentloaded');
  };
}
