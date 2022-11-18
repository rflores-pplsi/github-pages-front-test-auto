import { expect } from '@playwright/test';
import UrlsUtils from '../../utils/urls.utils';
import { OktaPage } from '../okta/okta.page';

// require('dotenv').config;

// Selectors
// let Produrl: string = UrlsUtils.launchUrls.devUrl.url;
// let Devurl: string = UrlsUtils.launchUrls.devUrl.url;
// let Uaturl: string = UrlsUtils.launchUrls.uatUrl.url;
const START_YOUR_BUSINESS_BTN = 'xpath=//div[@class="et_pb_button_module_wrapper et_pb_button_2_wrapper  et_pb_module "]/a';
const UPDATE_REGION_BTN = 'text=Update region';
const YOUR_REGION_SELECTOR = 'select.lsc_region_selector';
const YOUR_REGION_CITY = 'Virginia';
const WELCOME_H3_LOCATOR = '.lsux-heading--t20';
const WELCOME_H3_TXT = 'Welcome, let’s get started! To complete your purchase, sign up for an account.';
export class CheckoutConfirmationPage extends OktaPage {
  // Page Instances

  // Process Methods
  getEnv(): string {
    let env = null;

    if (process.env.USE_PROD == 'true' || process.env.USE_PRODUCTION == 'true') {
      env = 'prod';
    } else if (process.env.USE_UAT == 'true') {
      env = 'uat';
    } else if (process.env.USE_STAGE == 'true') {
      env = 'stage';
    } else env = 'dev';

    return env;
  }

  checkoutLegalShieldLoginPage = async (): Promise<void> => {
    // Choose your region
    try {
      console.log('I am inside of the try block');
      await this.selectYourRegionMenu();
    } catch (error) {
      console.error(error);
      console.log('No popup');
    }
    try {
      // Click on start your business button
      await this.clickStartYourBusiness();
    } catch (error) {
      console.log('Start your business button is not visible');
    }
    // try {await this.clickOnElement(continueShopping);}
    // catch(error){
    //   console.log('The shopping cart is empty');
    // }

    // Verify the welcome text
    await this.assertWelcomeText();

    // }else if(env === 'uat' ){

    //      // Choose your region
    //      try {
    //       console.log("I am inside of the try block");
    //       await this.chooseYourRegionMenu();
    //       // Click on start your business button
    //       await this.clickStartYourBusiness();
    //     } catch (error) {
    //       console.error(error);
    //       console.log("No popup")
    //       // Click on start your business button
    //       await this.clickStartYourBusiness();
    //     }
    // try {
    //   console.log("I am inside of the try block");
    //   // Click on update region button
    //   await this.clickUpdateRegionBtn();
    //   // Click on start your business button
    //   await this.clickStartYourBusiness();
    // } catch (error) {
    //   console.error(error);
    //   console.log("popup btn")
    // }

    // Verify the welcome text
    await this.assertWelcomeText();
  };

  // Select your region
  selectYourRegionMenu = async (): Promise<void> => {
    // Click on Start your business button
    await this.page.waitForSelector(YOUR_REGION_SELECTOR);
    await this.selectFromDropDownMenu(YOUR_REGION_SELECTOR, YOUR_REGION_CITY);
    await this.page.waitForLoadState('domcontentloaded');
  };

  // Navigate Methods
  navigateToLaunch = async (): Promise<void> => {
    if (this.getEnv() == 'prod') {
      console.log('using dev variable');
      console.log('Navigating to dev url:  ', UrlsUtils.launchUrls.prodUrl.url);
      await this.page.goto(UrlsUtils.launchUrls.prodUrl.url, {
        waitUntil: 'networkidle',
      });
    } else if (this.getEnv() == 'uat') {
      console.log('using uat variable');
      console.log('Navigating to uat url:  ', UrlsUtils.launchUrls.uatUrl.url);
      await this.page.goto(UrlsUtils.launchUrls.uatUrl.url, {
        waitUntil: 'networkidle',
      });
    } else {
      console.log('using dev variable');
      console.log('Navigating to dev url:  ', UrlsUtils.launchUrls.devUrl.url);
      await this.page.goto(UrlsUtils.launchUrls.devUrl.url, {
        waitUntil: 'networkidle',
      });
    }
  };

  // Click Methods

  clickStartYourBusiness = async (): Promise<void> => {
    // Click on Start your business button

    console.log('I am inside of clickStart');
    await this.page.waitForLoadState('domcontentloaded');
    await this.clickOnElement(START_YOUR_BUSINESS_BTN);
    console.log('I clicked clickStart');
    await this.page.waitForLoadState('domcontentloaded');
  };
  clickUpdateRegionBtn = async (): Promise<void> => {
    // Click on Start your business button
    await this.clickOnElement(UPDATE_REGION_BTN);
    await this.page.waitForLoadState('networkidle');
  };

  // Assertion Methods

  assertWelcomeText = async (): Promise<void> => {
    // Confirm the welcome text
    // await this.assertElementHasText(welcomeH3Locator,welcomeH3Txt);
    await this.page.waitForLoadState('domcontentloaded');
    await expect(this.page.locator(WELCOME_H3_LOCATOR)).toHaveText(WELCOME_H3_TXT);
  };
}
