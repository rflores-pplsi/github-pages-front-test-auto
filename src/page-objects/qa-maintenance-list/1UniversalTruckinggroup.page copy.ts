/* eslint-disable no-unused-vars */
/* eslint-disable require-jsdoc */
import { expect } from '@playwright/test';
import RegionsUtils from '../../utils/regions.utils';
import UrlsUtils from '../../utils/urls.utils';
import { CheckoutPersonalInfoPage } from '../checkout/checkout-personal-info.page';
import { LoginPage } from '../login/login.page';
import { OktaPage } from '../okta/okta.page';

// require('dotenv').config;

// ========================== Selectors ==================================

let street: string;
let city: string;
let postalCode: string;
const url1UniversalTrucking = UrlsUtils.groupsUrls.url1UniversalTrucking;
const tabSigningUp = 'a#signup';
const selectStatedorpdown = '#select_value_label_15';
const availablePlansLbl = '//h3[contains(text(),"Sélectionnez votre plan pour chauffeur commercial")]';
const rdbtnlanguage = '[aria-label="English"]';
const btnSelectUniversalTracking = '//button[contains(text(),"SELECT")]';
const tellUsAboutYourselfLbl = '//h1[contains(text(),"Tell us about yourself")]';

export class UniversalTruckingPage extends OktaPage {
  // ========================== Process Methods ============================
  selectStateUniversalTruckingPage = async (state: string): Promise<void> => {
    console.log(' - UniversalTruckingPage.selectStateUniversalTruckingPage');
    // Click to Select dropdown
    await this.page.waitForSelector(selectStatedorpdown);
    await this.page.locator(selectStatedorpdown).click();
    // Click on state >> nth=0
    await this.page
      .locator('text=' + state)
      .first()
      .click();
  };
  selectlanguage = async (language: string): Promise<void> => {
    console.log(' - UniversalTruckingPage.selectlanguage');
    // Locate a language radio button
    await this.page.waitForSelector(rdbtnlanguage);
    // Pick a language
    await this.page.locator('[aria-label="' + language + '"]').click();
    console.log('language is selected');
  };
  loginBestMoneyMoversGroupPage = async (): Promise<void> => {
    console.log(' - BestMoneyMoversGroupPage.loginBestMoneyMoversGroupPage');
    console.log('Redirected to login page');
    const loginPage = new LoginPage(this.page);
    await loginPage.login('mattfeeqa@gmail.com', 'Password10!');
  };
  updateAddressTestingHarnesGroupsPage = async (state: string): Promise<void> => {
    console.log(' - BestMoneyMoversGroupPage.updateAddressTestingHarnesGroupsPage');
    const checkoutPersonalInfoPage = new CheckoutPersonalInfoPage(this.page);
    for (const stte of RegionsUtils.usStates.filter((ste) => ste.name == state)) {
      street = stte.validAddress.street;
      city = stte.validAddress.city;
      postalCode = stte.validAddress.postalCode;
    }
    await checkoutPersonalInfoPage.changeAddress(street, city, postalCode);
  };

  // ========================== Navigate Methods ===========================
  navigateTo1UniversalTruckingGroupPage = async (): Promise<void> => {
    console.log(' - UniversalTruckingPage.navigateTo1UniversalTruckingGroupPage');
    // navigate to URL
    await this.page.goto(url1UniversalTrucking);
  };

  // ========================== Click Methods ==============================

  clickTabSigningUp = async (): Promise<void> => {
    console.log(' - UniversalTruckingPage.clickTabSigningUp');
    // Click on Enroll Now button
    await this.page.click(tabSigningUp);
  };
  clickBtnESelect = async (plan: string): Promise<void> => {
    console.log(' - UniversalTruckingPage.clickBtnESelect');
    // Click on SELECT button
    await this.page.locator('//h3[contains(text(),' + plan + ')]').click();
  };
  clickBtnSelectPlan = async (plan: string): Promise<void> => {
    console.log(' - UniversalTruckingPage.clickBtnESelectPlan');
    // Click on Enroll Now button
    await Promise.all([
      await this.page.waitForSelector(availablePlansLbl),
      await this.page.locator('text=' + plan + '/ MonthlyEnroll Now>> button').click(),
    ]);
    console.log('Plan is selected');
  };
  // ========================== Assertion Methods ==========================

  assertW3Url = async (): Promise<void> => {
    console.log(' - UniversalTruckingPage.assertTestingHarnesGroupsPricingPage');
    // Verify that pricing Page is displayed
    await this.page.waitForURL('https://w3.legalshield.com/gs/init?grp=1universaltrucking');
  };
  assertAvailablePlanTxt = async (): Promise<void> => {
    console.log(' - UniversalTruckingPage.assertTestingHarnesGroupsPricingPage');
    // Verify that Available Plans label is displayed
    await this.waitForElementToBeVisible(availablePlansLbl);
    console.log('State is selected and Available Plans Label is displayed');
  };
  assertTellUsAboutYourselfTxt = async (): Promise<void> => {
    console.log(' - UniversalTruckingPage.assertTellUsAboutYourselfTxt');
    console.log('logged in and redirected to personal info page');
    // Verify that Available Plans label is displayed
    await this.waitForElementToBeVisible(tellUsAboutYourselfLbl);
    this.page.locator(tellUsAboutYourselfLbl).isVisible;
    console.log('On Personal Info page');
  };
}
function forEach(
  stt: any,
  of: any,
  usStates: { name: string; abbrv: string; validAddress: { street: string; city: string; postalCode: string }; priority: boolean }[]
) {
  throw new Error('Function not implemented.');
}

function stt(
  stt: any,
  of: any,
  usStates: { name: string; abbrv: string; validAddress: { street: string; city: string; postalCode: string }; priority: boolean }[]
) {
  throw new Error('Function not implemented.');
}
