import UrlsUtils from '../../utils/urls.utils';
import { LoginPage } from '../login/login.page';
import { expect } from '@playwright/test';

// ========================== Selectors ========================== 
let lnkBack = 'a:has-text("Back")';
let btnSendCode = 'button:has-text("Send code")';
let txtEmail : string = '[placeholder="Email"]';

export class ActivateUnkownCodePage extends LoginPage {

// ========================== Process Methods ========================== 

enterEmailAndSendCode = async (email:string): Promise<void> => {
  console.log(" - activateUnknownCodePage.enterEmailAndSendCode")
  // Enter email address
  await this.fillTextBox(txtEmail,email)
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

// ========================== Assertion Methods ========================== 


};