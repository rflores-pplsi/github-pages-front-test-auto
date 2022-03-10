import UrlsUtils from '../../utils/urls.utils';
import { LoginPage } from '../login/login.page';
import { expect } from '@playwright/test';

// ========================== Selectors ========================== 
let lnkBack : string = 'a:has-text("Back")';
let btnSendCode : string = 'button:has-text("Send code")';
let txtEmail : string = '[placeholder="Email"]';
let lnkDontKnowYourCode : string = 'text=know your code?';
let msgInvalidEmailAddress : string = 'text=Invalid email address.';


export class ActivateUnkownCodePage extends LoginPage {

  // ========================== Process Methods ========================== 

  enterEmail = async (email:string): Promise<void> => {
    console.log(" - activateUnknownCodePage.enterEmailAndSendCode")
    // Enter email address
    await this.fillTextBox(txtEmail,email);
  }

  enterEmailAndSendCode = async (email:string): Promise<void> => {
    console.log(" - activateUnknownCodePage.enterEmailAndSendCode")
    // Enter email address
    await this.fillTextBox(txtEmail,email);
    // Click Send Code to submit email
    await this.clickSendCodeButton();
  }

  // ========================== Navigate Methods ==========================

  // ========================== Click Methods ========================== 

  clickBackLink = async (): Promise<void> => {
    console.log(" - activateUnknownCodePage.clickBackLink")
    // Click back button
    await this.clickOnElement(lnkBack);
  }

  clickSendCodeButton = async (): Promise<void> => {
    console.log(" - activateUnknownCodePage.clickSendCodeButton")
    // Click Send Code button
    await this.clickOnElement(btnSendCode);
  }

  clickDontKnowYourCodeLink = async (): Promise<void> => {
    console.log(" - activateUnknownCodePage.clickDontKnowYourCodeLink")
    // Click Dont Know Your Code link
    await this.clickOnElement(lnkDontKnowYourCode);
  }

  // ========================== Assertion Methods ========================== 

  assertInvalidEmailAddressHintDisplayed = async (): Promise<void> => {
    console.log(" - activateUnknownCodePage.assertInvalidEmailAddressHintDisplayed")
    // Click Dont Know Your Code link
    await this.assertElementIsVisible(msgInvalidEmailAddress);
  }

  assertSendCodeButtonDisabled = async (): Promise<void> => {
    console.log(" - activateUnknownCodePage.assertSendCodeButtonDisabled")
    // Click Dont Know Your Code link
    await this.assertElementIsDisabled(btnSendCode);
  }

};
