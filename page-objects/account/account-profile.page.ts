import { expect  } from '@playwright/test';
import UrlsUtils from '../../utils/urls.utils';
import { LoginPage } from '../login/login.page';
import { AccountNavigationPage } from './account-navigation.page';
require ('dotenv').config;

let url= UrlsUtils.legalshieldUrls.account.url + "/profile"

// ========================== Selectors ==========================
let hdrPage='h2.lsux-heading';
let txtName='//h5[text()="Name"]/following-sibling::p'
let btnEditName='//h5[text()="Name"]/../../button'
let txtDateOfBirth='//h5[text()="Date of birth"]/following-sibling::p'
let btnEditDateOfBirth='//h5[text()="Date of birth"]/../../button'
let txtPhone='//h5[text()="Phone number"]/following-sibling::p'
let btnEditPhone='//h5[text()="Phone number"]/../../button'
let txtAddress='//h5[text()="Address"]/following-sibling::p'
let btnEditAddress='//h5[text()="Address"]/../../button'
let txtEmail='//h5[text()="Email Address"]/following-sibling::p'
let btnEditEmail='//h5[text()="Email Address"]/../../button'
let txtNameH3 = 'h3.lsux-heading.lsux-heading--t20';
let txtDobH3 = 'h3.lsux-heading.lsux-heading--t20';
let txtPhoneNumberH3 = 'h3.lsux-heading.lsux-heading--t20';
let txtAddressH3 = 'h3.lsux-heading.lsux-heading--t20';
let txtEmailH3 = 'h3.lsux-heading.lsux-heading--t20';

export class AccountProfilePage extends LoginPage {

  // ========================== Page Instances ========================== 
  accoutNavigationPage = new AccountNavigationPage(this.page);

  
  // ========================== Process Methods ========================== 
  
  // ========================== Navigate Methods ========================== 

  navigateToProfilePage = async (): Promise<void> => {
    console.log(" - accountProfilePage.goToProfilePage")
    await this.page.goto(url, { waitUntil: 'networkidle' });
    await this.login('mattfeeqa@gmail.com','Password10!');
  }

  // ========================== Click Methods ========================== 
  
  // Clicking on the Name Edit button
  clickEditNameButton = async (): Promise<void> =>{
    console.log(" - accountProfilePage.editNameBtn")
    await this.clickOnElement(btnEditName);
    // Wait for document to load before subsequent steps
    await this.page.waitForSelector(txtNameH3);
  }
  
  // Clicking on the Date of Birth Edit button
  clickEditDateOfBirthButton = async (): Promise<void> =>{
    console.log(" - accountProfilePage.editDateOfBirthBtn")
    await this.clickOnElement(btnEditDateOfBirth);
    // Wait for document to load before subsequent steps
    await this.page.waitForLoadState('domcontentloaded');
    await this.page.waitForSelector(txtDobH3);
  }

  // Clicking on the Phone Number Edit button
  clickEditPhoneNumberButton = async (): Promise<void> =>{
    console.log(" - accountProfilePage.editPhoneBtn")
    await this.clickOnElement(btnEditPhone);
    // Wait for document to load before subsequent steps
    await this.page.waitForLoadState('domcontentloaded');
    await this.page.waitForSelector(txtPhoneNumberH3);
  }

  // Clicking on the Address Edit button
  clickEditAddressButton = async (): Promise<void> =>{
    console.log(" - accountProfilePage.editAddressBtn")
    await this.clickOnElement(btnEditAddress);
    // Wait for document to load before subsequent steps
    await this.page.waitForLoadState('domcontentloaded');
    await this.page.waitForSelector(txtAddressH3);
  }

  // Clicking on the Email Edit button
  clickEditEmailButton = async (): Promise<void> =>{
    console.log(" - accountProfilePage.editEmailBtn")
    await this.clickOnElement(btnEditEmail);
    // Wait for document to load before subsequent steps
    await this.page.waitForLoadState('domcontentloaded');
    await this.page.waitForSelector(txtEmailH3);
  } 

  // ========================== Assertion Methods ========================== 

  assertProfileNamePage = async (): Promise<void> => {
    console.log(" - accountProfilePage.assertProfileNamePageUrl");
    // Confirm the landing on Profile Name Page 
    const pageName = await this.page.locator(txtNameH3).innerText();
    expect(pageName).toBe('Name');
    // Wait for document to load before subsequent steps
    await this.page.waitForLoadState('domcontentloaded');
  }

  assertProfileDateOfBirthPageUrl = async (): Promise<void> => {
    console.log(" - accountProfilePage.assertProfileDateOfBirthPageUrl");
    // Confirm the landing on Profile Date of Birth Page 
    const pageDob = await this.page.locator(txtDobH3).innerText();
    expect(pageDob).toBe('Date of birth');
    // Wait for document to load before subsequent steps
    await this.page.waitForLoadState('domcontentloaded');
  }

  assertProfilePhoneNumberPageUrl = async (): Promise<void> => {
    console.log(" - accountProfilePage.assertProfilePhonePageUrl");
    // Confirm the landing on Profile Phone Number Page 
    const pagePhone = await this.page.locator(txtPhoneNumberH3).innerText();
    expect(pagePhone).toBe('Phone number');
    // Wait for document to load before subsequent steps
    await this.page.waitForLoadState('domcontentloaded');
  }

  assertProfileAddressPageUrl = async (): Promise<void> => {
    console.log(" - profileAddressPage.assertProfileAddressPageUrl");
    // Confirm the landing on Profile Address Page 
    const pageAddress = await this.page.locator(txtAddressH3).innerText();
    expect(pageAddress).toBe('Address');
    // Wait for document to load before subsequent steps
    await this.page.waitForLoadState('domcontentloaded');
  }

  assertProfileEmailPageUrl = async (): Promise<void> => {
    console.log(" - profileAddressPage.assertProfileEmailPageUrl");
     // Confirm the landing on Profile Email Page 
     const pageEmail = await this.page.locator(txtEmailH3).innerText();
     expect(pageEmail).toBe('Email Addresses');   
     // Wait for document to load before subsequent steps
     await this.page.waitForLoadState('domcontentloaded');
  }  


};