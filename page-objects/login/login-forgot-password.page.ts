import { expect } from '@playwright/test';
import { LoginPage } from '../login/login.page';

// Selectors 
let txtEmailAddress: string = '[placeholder="Email Address"]';
let btnSendEmail: string = 'button:has-text("Send Email")';
let lnkBack: string = 'a:has-text("Back")';
let alrtSuccess: string = 'span:has-text("If we find an email in our system that that matches that you will receive an email shortly. If you do not or are experiencing issues please call member services at 800-654-7757.")'; 

export class LoginForgotPasswordPage extends LoginPage {

// ========================== Page Instances ========================== 

// ========================== Process Methods ========================== 

  requestPasswordResetEmail = async (): Promise<void> => {
    console.log(" - loginForgotPasswordPage.requestPasswordEmail")
    // Click forgot password link
    await this.clickForgotPasswordLink();
    // Enter email address into Email Address input
    await this.fillTextBox(txtEmailAddress, "mattfeeQA@gmail.com");
    // Click on the Resend Email button to request password reset
    await this.clickOnElement(btnSendEmail);
  }

// ========================== Click Methods ========================== 

// ========================== Assertion Methods ========================== 

  assertSuccessBanner = async (): Promise<void> => {
    console.log(" - loginForgotPasswordPage.assertSuccessBanner")
    // Wait for Success Alert box to display forgot password page
    await this.page.locator(alrtSuccess).waitFor();
    expect(await this.page.isVisible(alrtSuccess)).toBeTruthy();
    // TODO: add assertion that email has been recieved in a test email account (Yopmail?)
  }
  
// ========================== Navigate Methods ==========================

};
  