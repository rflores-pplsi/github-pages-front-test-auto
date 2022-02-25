import { expect } from '@playwright/test';
import UrlsUtils from '../../utils/urls.utils';
import { LoginPage }  from './login.page'
require ('dotenv').config;

let url: string = UrlsUtils.legalshieldUrls.login.url + '/sign-up';

// ========================== Selectors ========================== 
let txtEmail: string = '[placeholder="Email"]';
let txtPassword: string ='[placeholder="Password"]';
let txtConfirmPassword: string = '[placeholder="Re-enter Password"]';
let btnSignUp: string = 'button:has-text("Sign up")';
let lnkSignIn: string = 'a:has-text("Sign in")';

export class LoginSignUpPage extends LoginPage {
 
// ========================== Process Methods ========================== 
  
  signUp = async (): Promise<void> => {
    console.log(" - loginSignUpPage.signUp")
    // generate random number to append to new email
    const randomEmail = 'qatesting+' + await this.createRandomInt() + '@yopmail.com';
    // Enter email or username into input
    await this.fillTextBox(txtEmail,randomEmail);
    // Enter password into input
    await this.fillTextBox(txtPassword,"Password10!");
    // Enter password into input to confirm password
    await this.fillTextBox(txtConfirmPassword,"Password10!");
    // Click on Sign In to submit login form
    await this.clickOnElement(btnSignUp);
    // Wait for page to finish loading
    await this.page.waitForLoadState('networkidle');
  } 

  // ========================== Navigate Methods ========================== 
 
  // ========================== Click Methods ========================== 

  // ========================== Assertion Methods ========================== 

}
