import { expect, Locator, Page } from '@playwright/test';
import UrlsUtils from '../../utils/urls.utils';
import { LoginPage } from '../login/login.page';
import { AccountNavigationPage } from './account-navigation.page';
import { AccountProfilePage } from './account-profile.page';
require ('dotenv').config;

// ========================== Selectors ==========================
let url= UrlsUtils.legalshieldUrls.account.url + "/profile";
let txtBoxEditDateOfBirth = "input[name='birthDate']";
let btnSavebtn = 'button:has-text("Save")';

export class AccountProfileDoBPage extends AccountProfilePage{

// Page Instances
  // Page Instances

  //accoutNavigationPage = new AccountNavigationPage(this.page);

  goToProfileDateOfBirthPage = async (): Promise<void> => {
    console.log(" - accountProfilePage.goToProfileNamePage")
    await this.goToProfilePage();
    await this.clickEditDateOfBirthButton();
    await this.page.waitForLoadState('networkidle');
    
  }

  // ========================== Process Methods ========================== 

  // ========================== Navigate Methods ========================== 

  // ========================== Click Methods ========================== 
  // Edit First Name text box
  editDateOfBirthTxtBox = async (): Promise<void> =>{
    console.log(" - accountProfilePage.editDateOfBirthTxtBox")
    await this.typeTextBox(txtBoxEditDateOfBirth,"12302000");
    await this.page.press('[placeholder="Date\\ of\\ birth"]', 'Tab');
    //await this.page.press('[placeholder="Date\\ of\\ birth"]', 'Tab');
    //await this.page.press('[placeholder="Date\\ of\\ birth"]', 'Enter');
    //await this.keyboardTextBox('');
  }
  saveDateOfBirthbtn = async (): Promise<void> =>{
    console.log(" - accountProfilePage.editDateOfBirthbtn")
    await this.clickOnElement(btnSavebtn);
  }

  
  // ========================== Assertion Methods ========================== 
  assertProfileDateOfBirthPageUrl = async (): Promise<void> => {
    console.log(" - accountProfilePage.assertProfileDateOfBirthPageUrl");
    // Confirm the Profile Date of Birth Page URL is reached
    await expect(this.page).toHaveURL(UrlsUtils.legalshieldUrls.account.url + '/profile/birth');
    // Wait for document to load before subsequent steps
    await this.page.waitForLoadState('domcontentloaded');
  }
  

};