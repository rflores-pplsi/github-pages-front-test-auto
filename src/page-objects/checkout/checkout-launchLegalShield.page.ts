// This page object is actually a marketing site page - keeping for reference
// import { expect } from '@playwright/test';
// import UrlsUtils from '../../utils/urls.utils';
// import { LoginPage } from '../login/login.page';

// // Selectors
// // let Produrl: string = UrlsUtils.launchUrls.devUrl.url;
// // let Devurl: string = UrlsUtils.launchUrls.devUrl.url;
// // let Uaturl: string = UrlsUtils.launchUrls.uatUrl.url;
// let startYourBusinessBtn = 'xpath=//div[@class="et_pb_button_module_wrapper et_pb_button_2_wrapper  et_pb_module "]/a';
// let updateRegionBtn = 'text=Update region';
// let yourRegionSelector = 'select.lsc_region_selector';
// let yourRegionCity = 'Virginia';
// let welcomeH3Locator = '.lsux-heading--t20';
// let welcomeH3Txt = 'Welcome, let’s get started! To complete your purchase, sign up for an account.';
// let continueShopping = '//a[text()= "Continue shopping"]';
// export class CheckoutLaunchLegalShieldPage extends LoginPage {
//   // Page Instances

//   // Process Methods
//   getEnv() {
//     let env = null;

//     if (process.env.USE_PROD == 'true' || process.env.USE_PRODUCTION == 'true') {
//       env = 'prod';
//     } else if (process.env.USE_UAT == 'true') {
//       env = 'uat';
//     } else if (process.env.USE_STAGE == 'true') {
//       env = 'stage';
//     } else env = 'dev';

//     return env;
//   }

//   checkoutLegalShieldLoginPage = async () => {
//     // Choose your region
//     try {
//       console.log('I am inside of the try block');
//       await this.selectYourRegionMenu();
//     } catch (error) {
//       console.error(error);
//       console.log('No popup');
//     }
//     try {
//       //Click on start your business button
//       await this.clickStartYourBusiness();
//     } catch (error) {
//       console.log('Start your business button is not visible');
//     }
//     // try {await this.clickOnElement(continueShopping);}
//     // catch(error){
//     //   console.log('The shopping cart is empty');
//     // }

//     // Verify the welcome text
//     await this.assertWelcomeText();

//     // }else if(env === 'uat' ){

//     //      // Choose your region
//     //      try {
//     //       console.log("I am inside of the try block");
//     //       await this.chooseYourRegionMenu();
//     //       // Click on start your business button
//     //       await this.clickStartYourBusiness();
//     //     } catch (error) {
//     //       console.error(error);
//     //       console.log("No popup")
//     //       // Click on start your business button
//     //       await this.clickStartYourBusiness();
//     //     }
//     // try {
//     //   console.log("I am inside of the try block");
//     //   // Click on update region button
//     //   await this.clickUpdateRegionBtn();
//     //   // Click on start your business button
//     //   await this.clickStartYourBusiness();
//     // } catch (error) {
//     //   console.error(error);
//     //   console.log("popup btn")
//     // }

//     // Verify the welcome text
//     await this.assertWelcomeText();
//   };

//   // Select your region
//   selectYourRegionMenu = async () => {
//     // Click on Start your business button
//     await this.page.waitForSelector(yourRegionSelector);
//     await this.selectFromDropDownMenu(yourRegionSelector, yourRegionCity);
//     await this.page.waitForLoadState('domcontentloaded');
//   };

//   // Navigate Methods
//   navigateToLaunch = async (): Promise<void> => {
//     if (this.getEnv() == 'prod') {
//       console.log('using dev variable');
//       console.log('Navigating to dev url:  ', UrlsUtils.launchUrls.prodUrl.url);
//       await this.page.goto(UrlsUtils.launchUrls.prodUrl.url, { waitUntil: 'networkidle' });
//     } else if (this.getEnv() == 'uat') {
//       console.log('using uat variable');
//       console.log('Navigating to uat url:  ', UrlsUtils.launchUrls.uatUrl.url);
//       await this.page.goto(UrlsUtils.launchUrls.uatUrl.url, { waitUntil: 'networkidle' });
//     } else {
//       console.log('using dev variable');
//       console.log('Navigating to dev url:  ', UrlsUtils.launchUrls.devUrl.url);
//       await this.page.goto(UrlsUtils.launchUrls.devUrl.url, { waitUntil: 'networkidle' });
//     }
//   };

//   // Click Methods

//   clickStartYourBusiness = async () => {
//     // Click on Start your business button

//     console.log('I am inside of clickStart');
//     await this.page.waitForLoadState('domcontentloaded');
//     await this.clickOnElement(startYourBusinessBtn);
//     console.log('I clicked clickStart');
//     await this.page.waitForLoadState('domcontentloaded');
//   };
//   clickUpdateRegionBtn = async () => {
//     // Click on Start your business button
//     await this.clickOnElement(updateRegionBtn);
//     await this.page.waitForLoadState('networkidle');
//   };

//   // Assertion Methods

//   assertWelcomeText = async (): Promise<void> => {
//     // Confirm the welcome text
//     //await this.assertElementHasText(welcomeH3Locator,welcomeH3Txt);
//     await this.page.waitForLoadState('domcontentloaded');
//     await expect(this.page.locator(welcomeH3Locator)).toHaveText(welcomeH3Txt);
//   };
// }
