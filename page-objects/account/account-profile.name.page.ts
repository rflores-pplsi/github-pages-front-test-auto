import { expect, Locator, Page } from '@playwright/test';
import UrlsUtils from '../../utils/urls.utils';
import { LoginPage } from '../login/login.page';
import { AccountNavigationPage } from './account-navigation.page';
import { AccountProfilePage } from './account-profile.page';
require ('dotenv').config;

// ========================== Selectors ==========================
let url= UrlsUtils.legalshieldUrls.account.url + "/profile";

let txtBoxEditFirstName_Name = "input[name='firstName']";
let txtBoxEditLastName_Name = "input[name='lastName']";
let txtBoxEditMiddleName_Name = "input[name='middleName']";

export class AccountProfileNamePage extends AccountProfilePage{

// Page Instances
 
  //accoutNavigationPage = new AccountNavigationPage(this.page);



  // ========================== Process Methods ========================== 
  // Edit Name Page text boxes
  editNameForm= async (): Promise<void> =>{
    // Edit First Name text box
    await this.clickEditFirstNameTxtBox();
    // Edit Middle Name text box
    await this.clickEditMiddleNameTxtBox();
    // Edit Last Name text box
    await this.clickEditLastNameTxtBox();


  }
  // ========================== Navigate Methods ========================== 
  
  // Navigate to Profile Name page
  NavigateToProfileNamePage = async (): Promise<void> => {
    console.log(" - accountProfilePage.goToProfileNamePage")
    await this.NavigateToProfilePage();
    await this.clickEditNameButton();
    
  }
  // ========================== Click Methods ========================== 
  // Edit First Name text box
  clickEditFirstNameTxtBox = async (): Promise<void> =>{
    console.log(" - accountProfilePage.editNameBtn")
    await this.fillTextBox(txtBoxEditFirstName_Name,"AMTesteditName");
  }
   // Edit Last Name text box
  clickEditLastNameTxtBox = async (): Promise<void> =>{
    console.log(" - accountProfilePage.editLastNameTxtBox")
    await this.fillTextBox(txtBoxEditLastName_Name,"TestDEditLastName");
  }
   // Edit Middle Name text box
  clickEditMiddleNameTxtBox = async (): Promise<void> =>{
    console.log(" - accountProfilePage.editMiddleNameTxtBox")
    await this.fillTextBox(txtBoxEditMiddleName_Name,"TestEditMiddleName");
  }
  
  // ========================== Assertion Methods ========================== 
  assertProfileFirstNamePageUrl = async (): Promise<void> => {
    console.log(" - accountProfilePage.assertProfileFirstNamePageUrl");
    // Confirm the Profile First Name Page URL is reached
    await expect(this.page).toHaveURL(UrlsUtils.legalshieldUrls.account.url + '/profile/name');
    // Wait for document to load before subsequent steps
    await this.page.waitForLoadState('domcontentloaded');
  }
  

};