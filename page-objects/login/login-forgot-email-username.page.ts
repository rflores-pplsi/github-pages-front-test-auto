import { expect } from '@playwright/test';
import { LoginPage } from '../login/login.page'

// ========================== Selectors ==========================
let lnkCustomerService : string = '#root :text("1-800-654-7757")';
let lnkAssociateSupport : string = '#root :text("580-436-7424")';
let lnkBack : string = 'a:has-text("Back")'; 

export class LoginForgotEmailUsernamePage extends LoginPage {

  // ========================== Process Methods ========================== 
  
  // ========================== Navigate Methods ========================== 

  // ========================== Click Methods ==========================
  
  // ========================== Assertion Methods ========================== 
  
  assertSupportNumbers = async (): Promise<void> => {
    console.log(" - loginForgotEmailUsernamePage.ssertSupportNumbers_LoginForgotEmailOrUsernamePage");
    // Confirm that the Customer Service phone number is displayed
    expect(await this.page.isVisible(lnkCustomerService)).toBeTruthy();
    // Confirm that the Associate Support phone number is displayed
    expect(await this.page.isVisible(lnkAssociateSupport)).toBeTruthy();
  }    

}
  

