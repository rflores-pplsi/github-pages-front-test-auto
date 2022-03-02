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



  // ========================== Process Methods ========================== 

  // ========================== Navigate Methods ========================== 

  navigateProfileDateOfBirthPage = async (): Promise<void> => {
    console.log(" - accountProfilePage.navigateProfileDateOfBirthPage")
    //navigate Profile page
    await this.navigateToProfilePage();
    //Click on Date of Birth page edit button
    await this.clickEditDateOfBirthButton();
    
  }
  // ========================== Click Methods ========================== 
  // Edit First Name text box
  editDateOfBirthTxtBox = async (): Promise<void> =>{
    console.log(" - accountProfilePage.editDateOfBirthTxtBox")
    //Update the date of birth text box
    await this.typeTextBox(txtBoxEditDateOfBirth,"10301990");
    await this.page.press('[placeholder="Date\\ of\\ birth"]', 'Tab');
  }
  saveDateOfBirthbtn = async (): Promise<void> =>{
    console.log(" - accountProfilePage.editDateOfBirthbtn")
    // Click on save button
    await this.clickOnElement(btnSavebtn);
  }

  
  // ========================== Assertion Methods ========================== 
  assertProfileDateOfBirthPageUrl = async (): Promise<void> => {
    console.log(" - accountProfilePage.assertProfileDateOfBirthPageUrl");
    //Click on Edit date of birth button
    await this.clickEditDateOfBirthButton();
    // Confirm the Profile Date of Birth text box is updated
    await this.page.waitForSelector(txtBoxEditDateOfBirth);
    let updatedDoB = await this.page.locator(txtBoxEditDateOfBirth).getAttribute('value');
    expect(updatedDoB).toBe('1990-10-30');
    await expect(this.page).toHaveURL(UrlsUtils.legalshieldUrls.account.url + '/profile/birth');
    // Wait for document to load before subsequent steps
    await this.page.waitForLoadState('domcontentloaded');
  }
  

};