import { expect, Locator, Page } from '@playwright/test';
import { LoginPage } from '../login/login.page';
import UrlsUtils from '../../utils/urls.utils';

// ========================== Selectors ==========================
let imgSmallLogo= '#lsdsSmallLogoId';
let imgLargeLogo = '#lsdsLargeLogoId';
let txtTitle = '#lsux-page-title';
let btnHelp = '#helpButton';
let ddName = '#myButton';
let lnkSignOut = 'div#myDropdown a:has-text("Sign out")';
let ddMemberServices = '#helpContentDefault';

export class AccountHeaderPage extends LoginPage {

  // ========================== Process Methods ========================== 
    
  logout = async (): Promise<void> => {
    console.log(" - accountHeaderPage.logout");
    // Click name dropdown to reveal signout link
    await this.clickOnElement(ddName);
    // Click signout link to log out of account
    await this.clickOnElement(lnkSignOut);
  }

  // ========================== Navigate Methods ========================== 

  // ========================== Click Methods ========================== 

  clickLargeLogo = async (): Promise<void> => {
    // Click large logo that is displayed when viewport width is > 639px 
    console.log(" - accountHeaderPage.clickLargeLogo")
    await this.page.click(imgLargeLogo);
  }

  clickHelpButton = async (): Promise<void> => {
    // Click help button
    console.log(" - accountHeaderPage.clickHelpButton")
    await this.page.click(btnHelp);
  }

  // ========================== Assertion Methods ========================== 
    
  assertHelpDropdownInformation = async (): Promise<void> => {
    console.log(" - accountHeaderPage.assertHelpDropdownInformation");
    // Confirm Member Services dropdown displays
    await this.assertElementIsVisible(ddMemberServices);
    // Confirm Member Services phone number link is displayed
    await this.assertElementContainsText(ddMemberServices,"1-800-654-7757");
  }

  assertLoggedOutPageUrl = async (): Promise<void> => {
    console.log(" - accountHeaderPage.assertLoggedOutPageUrl");
    // Confirm the Accounts Plan Page URL is reached
    await expect(this.page).toHaveURL(UrlsUtils.legalshieldUrls.login.url + '/logged-out');
    // Wait for document to load before subsequent steps
    await this.page.waitForLoadState('domcontentloaded');
  }

  

}
