import { expect } from '@playwright/test';
import UrlsUtils from '../../utils/urls.utils';
import { BasePage } from '../base.page';

require ('dotenv').config;

let url: string = UrlsUtils.legalshieldUrls.login.url;

// ========================== Selectors ========================== 
let txtEmailOrUsername: string = '[placeholder="Email address/Username"]';
let txtEmail: string = '[placeholder="Email"]';
let txtPassword: string ='[placeholder="Password"]';
let txtConfirmPassword: string = '[placeholder="Re-enter Password"]';
let btnSignIn: string = 'button[type="submit"]';
let btnSignUp: string = 'button:has-text("Sign up")';
let lnkSignUp: string = 'a:has-text("Sign up")';
let lnkSignIn: string = 'a:has-text("Sign in")';
let lnkForgotPassword: string = 'a:has-text("Forgot Password?")';
let lnkForgotEmailUsername: string = 'a:has-text("Forgot Email/Username?")';
let chkStaySignedIn: string = 'input[name="persist"]';
let hdrBody: string = 'h2';

export class LoginPage extends BasePage {
 
// ========================== Process Methods ========================== 

  login = async (emailOrUsername: string, password: string):Promise<void> => {
    console.log(" - loginPage.login");
    // If statement exists because dependning on the application you came from, you may be on signup or signin pages
    if (await this.isElementVisible(lnkSignIn) == true) {
      await this.clickOnElement(lnkSignIn);
    }
    // Enter email or username into input
    await this.fillTextBox(txtEmailOrUsername,emailOrUsername);
    // Enter password into input
    await this.fillTextBox(txtPassword,password);
    // Click on Sign In to submit login form
    await this.clickOnElement(btnSignIn);
    // Wait for page to finish loading 
    await this.page.waitForLoadState('networkidle');
  }

  loginWithEnterKey = async (emailOrUsername: string, password: string): Promise<void> => {
    console.log(" - loginPage.loginWithEnterKey");
    // Enter email or username into input
    await this.fillTextBox(txtEmailOrUsername,emailOrUsername);
    // Enter password into input
    await this.fillTextBox(txtPassword,password);
    // Press Enter key to submit login form
    await this.page.keyboard.press("Enter");
    // Wait for page to finish loading
    await this.page.waitForLoadState('networkidle');
  }
  
  // ========================== Navigate Methods ========================== 

  navigateToLoginPage = async (): Promise<void> => {
    console.log(" - loginPage.navigateToLoginPage");    
    // Navigate to Account Plans Page
    await this.goTo(UrlsUtils.legalshieldUrls.login.url);
    // Wait for page to finish loading
    await this.page.waitForLoadState('networkidle');
  }

  navigateToAccountPlansPage = async (): Promise<void> => {
    console.log(" - loginPage.navigateToAccountPlansPage");    
    // Navigate to Account Plans Page
    await this.goTo(UrlsUtils.legalshieldUrls.account.url + '/plans');
    // Wait for page to finish loading
    await this.page.waitForLoadState('networkidle');
  }

  navigateToActivatePage = async (): Promise<void> => {
    console.log(" - loginPage.navigateToActivatePage");
    // Navigate to Activate Page
    await this.goTo(UrlsUtils.legalshieldUrls.activate.url);
  }

  navigateToLoginForgotUsernameOrEmailPage = async (): Promise<void> => {
    console.log(" - loginPage.navigateToLoginForgotUsernameOrEmailPage");
    // Click on Forgot Email/Username to navigate to Forgot Username Or Email Page
    await this.clickOnElement(lnkForgotEmailUsername);
    // Wait for document to load before subsequent steps
    await this.page.waitForLoadState('domcontentloaded');
  }
 
  // ========================== Click Methods ========================== 

  clickForgotPasswordLink = async (): Promise<void> => {
    console.log(" - loginPage.clickForgotPasswordLink");
    // Click on the Forgot Password Link
    await this.clickOnElement(lnkForgotPassword);
    // Wait for document to load before subsequent steps
    await this.page.waitForLoadState('domcontentloaded');
  }

  clickSignUpLink = async (): Promise<void> => {
    console.log(" - loginPage.clickSignUpLink");
    // Click on the Forgot Password Link
    await this.clickOnElement(lnkSignUp);
    // Wait for document to load before subsequent steps
    await this.page.waitForLoadState('domcontentloaded');
  }

  // ========================== Assertion Methods ========================== 

  assertAccountsPlanPageUrl = async (): Promise<void> => {
    console.log(" - loginPage.assertAccountsPlanPageUrl");
    // Confirm the Accounts Plan Page URL is reached
    await expect(this.page).toHaveURL(UrlsUtils.legalshieldUrls.account.url + '/plans');
    // Wait for document to load before subsequent steps
    await this.page.waitForLoadState('domcontentloaded');
  }

  assertAccountsPlanPageLoginRedirectUrl = async (): Promise<void> => {
    console.log(" - loginPage.assertAccountsPlanPageLoginRedirectUrl");
    // Confirm the Accounts Plan Page URL with login redirect is reached
    await expect(this.page).toHaveURL(UrlsUtils.legalshieldUrls.account.url + '/plans?login_redirect=1');
    // Wait for document to load before subsequent steps
    await this.page.waitForLoadState('domcontentloaded');
  }

  assertActivatePageUrl = async (): Promise<void> => {
    console.log(" - loginPage.assertActivatePageUrl");
    // Confirm the Activate Page URL is reached
    await expect(this.page).toHaveURL(UrlsUtils.legalshieldUrls.activate.url);
    // Wait for document to load before subsequent steps
    await this.page.waitForLoadState('domcontentloaded');
  }

  assertStatusPageUrl = async (): Promise<void> => {
    console.log(" - loginPage.assertStatusPageUrl");
    // Confirm the Status Page URL is reached
    await expect(this.page).toHaveURL(UrlsUtils.legalshieldUrls.status.url);
    // Wait for document to load before subsequent steps
    await this.page.waitForLoadState('domcontentloaded');
  }

}
