import { expect } from '@playwright/test';
import UrlsUtils from '../../utils/urls.utils';
import { oktaUser } from '../../utils/user.utils';
import { BasePage } from '../base.page';

require ('dotenv').config;

// ========================== Selectors ========================== 
let txtEmailAddres: string = '#okta-signin-username';
let btnSignIn: string = '#okta-signin-submit';
let txtPassword: string ='#okta-signin-password';

export class OktaPage extends BasePage {
 
// ========================== Process Methods ========================== 

loginThroughOkta = async ():Promise<void> => {
    console.log(" - OktaPage.loginThroughOkta");
    // Enter email 
    await this.fillTextBox(txtEmailAddres,oktaUser.email);
    // Enter password into input
    await this.fillTextBox(txtPassword,oktaUser.password);
    // Click on Sign In to submit login form
    await this.clickOnElement(btnSignIn);
    // Wait for page to finish loading 
    await this.page.waitForLoadState('networkidle');
  }

  
  // ========================== Navigate Methods ========================== 

  navigateToMemberSearchOktaLogin = async ():Promise<void> => {
    console.log(" - loginPage.navigateToMemberSearchOktaLogin");    
    // Navigate to Okta
    await this.goTo(UrlsUtils.legalshieldInternalUrls.member_search.url);
    // Wait for page to finish loading
    await this.page.waitForLoadState('networkidle');
  }

  navigateToPlanalyzerCsrCheckoutOktaLogin = async ():Promise<void> => {
    console.log(" - loginPage.navigateToPlanalyzerSearchOktaLogin");    
    // Navigate to Okta
    await this.goTo(UrlsUtils.legalshieldInternalUrls.planalyzer_csr_checkout.url);
    // Wait for page to finish loading
    await this.page.waitForLoadState('networkidle');
  }
// ========================== Click Methods ========================== 



// ========================== Assertion Methods ========================== 

  

}