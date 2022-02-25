import { expect, Locator, Page } from '@playwright/test';
import UrlsUtils from '../../utils/urls.utils';
import { LoginPage } from '../login/login.page';
import { AccountNavigationPage } from './account-navigation.page';
import { AccountProfilePage } from './account-profile.page';
require ('dotenv').config;

// ========================== Selectors ==========================
let url= UrlsUtils.legalshieldUrls.account.url + "/profile"
let txtBoxAddress1 = '[name="address1"]';
let txtBoxAdd//ress1Option = '//div[@class="lsux-container lsux-container--white        lsux-options-list"]/ul/li';
let txtBoxAddress1Option = '//ul/li';
let txtBoxAddress2 = '[name="address2"]';
let txtBoxCity = '[name="locality"]';
let selectState = '[name="administrativeArea"]';
let txtBoxZipPostal = '[name="postalCode"]';
let txtBoxZipPostalOption = '//div[@class="lsux-container lsux-container--white        lsux-options-list"]//following::li[1]';
let selectCountry = '[name="country"]';
let btnSaveAddress = '//span[text()="Save"]';
let txtBoxFillAddress = 'p.item-editable';


export class AccountProfileAddressPage extends AccountProfilePage{

// Page Instances

  goToProfilePage = async (): Promise<void> => {
    console.log(" - accountProfilePage.goToProfilePage")
    await this.page.goto(url, { waitUntil: 'networkidle' });
    await this.login('mattfeeqa@gmail.com','Password10!');
  }

  // ========================== Process Methods ========================== 
  addressForm = async (address1:string,zip:string) => {
    await this.address1EdittxtBox(address1);
    await this.zipPostalEdittxtBox(zip);
  }
  // ========================== Navigate Methods ========================== 

  // ========================== Click Methods ============================= 

  // Click on save button
  saveAddressbtn = async ():Promise<void> => {
    await this.page.locator(btnSaveAddress).click();
}
  // ========================== Select Methods ============================= 
  
  // Select a state from the dropdown menu
  stateSelectMethod = async (label:string): Promise<void> => {
    const select = await this.page.$(selectState);
         select?.selectOption({ label:label });
   }
   // Select a Country from the dropdown menu
   countrySelectMethod = async (label:string): Promise<void> => {
    const select = await this.page.$(selectCountry);
        select?.selectOption({ label:label });
    
   }
  // ========================== Fill Methods =============================== 

  // Edit the Address1 text box
  address1EdittxtBox = async ( txt:string):Promise<void> => {
    await this.page.waitForSelector(txtBoxAddress1);
    await this.fillTextBox(txtBoxAddress1, txt);
    await this.page.waitForSelector(txtBoxAddress1Option);
    const opt = await this.page.$$(txtBoxAddress1Option);
    await opt[0].click();

   }
   // Edit the Address2 text box
   address2EdittxtBox = async ( txt:string):Promise<void> => {
    await this.page.waitForSelector(txtBoxAddress2);
    await this.page.fill(txtBoxAddress2, txt);
   }
   // Edit the City text box
   cityEdittxtBox = async ( txt:string):Promise<void> => {
    await this.page.waitForSelector(txtBoxCity);
    await this.page.fill(txtBoxCity, txt);
    
   }
   // Edit the Zip/Postal text box
   zipPostalEdittxtBox = async ( txt:string):Promise<void> => {
    await this.page.waitForSelector(txtBoxZipPostal);
    await this.page.fill(txtBoxZipPostal, txt);
    await this.page.waitForSelector(txtBoxZipPostalOption);
    const  opt = await this.page.$$(txtBoxZipPostalOption);
    for (let ele=0;ele < opt.length;ele++){
      let zip = await opt[ele].innerHTML();
        if(zip == '20147'){
          await opt[ele].click();
        }
    }
    
   }
  // ========================== Assertion Methods ========================== 
  // Verify that Address1 text is updated
  assertAddress1HasText = async (txt:string):Promise<void> => {
    const address1txt = await this.page.$(txtBoxAddress1);
    console.log(await address1txt?.getAttribute('value'));
    await expect(txt).toBe(await address1txt?.getAttribute('value'));
  }
  // Verify that Address2 text is updated
  assertAddress2HasText = async (txt:string):Promise<void> => {
    await this.page.waitForSelector(txtBoxAddress2);
    await expect(this.page.locator(txtBoxAddress2)).toHaveText(txt);
  }
  // Verify that City text is updated
  assertCityHasText = async (txt:string):Promise<void> => {
    const citytxt = await this.page.$(txtBoxCity);
    await expect(txt).toBe(await citytxt?.getAttribute('value'));

  }
  // Verify that State text is updated
  assertStateHasText = async (txt:string):Promise<void> => {
    const statetxt = await this.page.$(selectState);
    await expect(txt).toBe(await statetxt?.getAttribute('value'));
  }
  // Verify that Zip Postal text is updated
  assertZipPostalHasText = async (txt:string):Promise<void> => {
    const zipPortaltxt = await this.page.$(txtBoxZipPostal);
    await expect(txt).toBe(await zipPortaltxt?.getAttribute('value'));
  }
  // Verify that Country text is updated
  assertCountryHasText = async (txt:string):Promise<void> => {
    await this.page.waitForSelector(selectCountry);
    await expect(this.page.locator(selectCountry)).toHaveText(txt);
  }
  assertFullAddressHasText = async (txt:string):Promise<void> => {
    await this.page.waitForSelector(txtBoxFillAddress);
    const parag = await this.page.$$(txtBoxFillAddress);
    console.log(parag.length);
    const pargTxt = parag[2].inputValue();
  console.log(pargTxt);
    await expect(parag).toBe(txt);
  }
};