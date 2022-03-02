import { expect, Locator, Page } from '@playwright/test';
import UrlsUtils from '../../utils/urls.utils';
import { LoginPage } from '../login/login.page';
import { AccountNavigationPage } from './account-navigation.page';
import { AccountProfilePage } from './account-profile.page';
require ('dotenv').config;

// ========================== Selectors ==========================

let url= UrlsUtils.legalshieldUrls.account.url + "/profile";
let newPhoneValue: string;
let newAddedPhoneValue:string;
let txtBoxEditPhoneNumber_Name= 'input[name="phoneNumber"]';
let btnDeletePhoneNumber='.lsux-button.lsux-button--primary.lsux-button--icon-only';
let btnEditPhoneNumber='.lsux-button.lsux-button--standard.lsux-button--icon-only.mr-1.ml-2';
let btnCloseEditPhoneNumber='.lsux-button.lsux-button--primary.lsux-button--icon-only';
let btnAddPhone = '//span[text()= "Add"]';
let txtBoxAddPhone = '[pattern="^[0-9]*$"]';
let txtAlertUpdatedSuccessfully = '.lsux-text.lsux-text--body.lsux-alert__text ml-3 ';
let selectPhoneType = '[name="phoneType"]';


export class AccountProfilePhonePage extends AccountProfilePage{

// Page Instances
accountProfilePage = new AccountProfilePage(this.page);
accoutNavigationPage = new AccountNavigationPage(this.page);


  // ========================== Process Methods ========================== 

  // Add a new phone number
addPhoneNumberFun = async (phone:string): Promise<void> =>{
  // Create an array that contains all phone text boxes 
  await this.page.waitForSelector(txtBoxEditPhoneNumber_Name);
  let phNumAdd = await this.page.$$(txtBoxEditPhoneNumber_Name);
  // Click on the edit button by creating an array then selecting the corresponding Btn
  await this.page.waitForSelector(btnEditPhoneNumber);
  let addBtn = await this.page.$$(btnEditPhoneNumber);
  // Selecting a phone type
  let editTypeSelect = await this.page.$$(selectPhoneType);
  for(const phele of phNumAdd){
  console.log(await phele.innerText());
  }
  // The count variable is used as an index to click on the corresponding edit button.
  let count = 0;
  // Looping inside the text boxes array to pick the phone number to be edited.
  for await(const eph of phNumAdd){
  let ph = await eph.getAttribute('pattern');
  console.log(ph);
  console.log(count);
  if(ph ==='^[0-9]*$'){
  console.log( 'inside editBtn if');
  // Add the phone number text box
  await this.fillTextBox(txtBoxAddPhone,phone);
  // Update the phone type text box
await editTypeSelect[count]?.selectOption({label : 'Work'} )
  // Click the confirm Btn
  await addBtn[count].click();
  // Assign the new phone to newPhoneValue instance variable for later verification
  newAddedPhoneValue = phone;
  }
  // increasing count variable
  count = count + 1;
  }
  } 
// Edit Phone Number Process Methods 
// Click on the edit button by creating an array then selecting the corresponding Btn

editPhoneNumberFun = async (phone:string,edPhone:string): Promise<void> =>{
console.log(" - accountProfilePage.editPhoneNumberBtn")
// Click on the edit button by creating an array then selecting the corresponding Btn
await this.page.waitForSelector(btnEditPhoneNumber);
let editBtn = await this.page.$$(btnEditPhoneNumber);
console.log(await editBtn.length);
// Create an array that contains all phone text boxes 
await this.page.waitForSelector(txtBoxEditPhoneNumber_Name);
let phNum = await this.page.$$(txtBoxEditPhoneNumber_Name);
// Selecting a phone type
let editTypeSelect = await this.page.$$(selectPhoneType);
for(const phele of phNum){
console.log(await phele.innerText());
}
// The count variable is used as an index to click on the corresponding edit button.
let count = 0;
// Looping inside the text boxes array to pick the phone number to be edited.
for await(const eph of phNum){
let ph = await eph.getAttribute('value');    
if(ph === phone){
console.log( 'inside editBtn if');
// Click edit Btn
await editBtn[count].waitForSelector;
await editBtn[count].click();
// Update the phone number text box
await this.fillTextBox('input[value="'+phone+'"]',edPhone);
// Update the phone type text box
await editTypeSelect[count]?.selectOption({label : 'Home'} )
// Click the confirm Btn
await editBtn[count].click();
// Assign the new phone to newPhoneValue instance variable for later verification
newPhoneValue = edPhone;
}
// increasing count variable
count = count + 1;
}
}

// Delete Phone Number Process Methods 
deletePhoneNumberFun = async (phone:string): Promise<void> =>{
  console.log(" - accountProfilePage.deletePhoneNumberFun")
  // Click on the edit button by creating an array then selecting the corresponding Btn
  await this.page.waitForSelector(btnDeletePhoneNumber);
  let deleteBtn = await this.page.$$(btnDeletePhoneNumber);
  console.log(await deleteBtn.length);
  // Create an array that contains all phone text boxes 
  await this.page.waitForSelector(txtBoxEditPhoneNumber_Name);
  let phNum = await this.page.$$(txtBoxEditPhoneNumber_Name);
  for(const phele of phNum){
  console.log(await phele.innerText());
  }
  // The count variable is used as an index to click on the corresponding edit button.
  let count = 0;
  // Looping inside the text boxes array to pick the phone number to be edited.
  for await(const eph of phNum){
  let ph = await eph.getAttribute('value');    
  if(ph === phone){
  console.log( 'inside deleteBtn if');
  // Click edit Btn
  await deleteBtn[count].waitForSelector;
  await deleteBtn[count].click();

  }
  // increasing count variable
  count = count + 1;
  }
    // Wait for document to load before subsequent steps
    await this.page.waitForLoadState('domcontentloaded');
  }
  // ========================== Navigate Methods ========================== 
  // Navigate to Profile Phone page
  NavigateToProfilePhoneNumberPage = async (): Promise<void> => {
    console.log(" - accountProfilePage.goToProfileNamePage")
    await this.NavigateToProfilePage();
    await this.clickEditPhoneNumberButton();
        
    }
  // ========================== Click Methods ========================== 

// Clicking the Add Phone button
clickAddPhoneNumberButton = async (): Promise<void> =>{
console.log(" - accountProfilePhonePage.addPhoneNumberBtn")
await this.clickOnElement(btnAddPhone);
}
  
  // ========================== Assertion Methods ========================== 

// Verify that the phone number was updated
assertProfilePhoneNumberTxtBox = async (phone:string): Promise<void> => {
console.log(" - profilePhoneNumberPage.assertProfilePhoneNumberTxtBox");
// Confirm the Phone Number  is updated
const updatedPhone = await this.page.getAttribute('input[value="'+phone+'"]', 'value');
expect(updatedPhone).toBe(phone);
// Wait for document to load before subsequent steps
await this.page.waitForLoadState('domcontentloaded');
} 
// Verify that the phone number was deleted
assertProfileDeletePhoneNumberMsg = async (msg:string): Promise<void> => {
  console.log(" - profilePhoneNumberPage.assertProfileDeletePhoneNumberMsg");
  // Confirm the Phone Number  is deleted
  const ele = await this.page.$(txtAlertUpdatedSuccessfully);
  await this.page.on("dialog", (dialog) => {
      console.log(dialog.message())  
  });
  await ele?.click();
  // console.log(msgDialog);
  // expect(msgDialog).toBe(msg);
  // Wait for document to load before subsequent steps
  await this.page.waitForLoadState('domcontentloaded');
  } 

};



