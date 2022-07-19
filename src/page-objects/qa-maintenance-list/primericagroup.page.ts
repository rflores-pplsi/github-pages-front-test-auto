/* eslint-disable no-unused-vars */
/* eslint-disable require-jsdoc */
import { expect } from '@playwright/test';
import RegionsUtils from '../../utils/regions.utils';
import UrlsUtils from '../../utils/urls.utils';
import { CheckoutPersonalInfoPage } from '../checkout/checkout-personal-info.page';
import { LoginPage } from '../login/login.page';
import { OktaPage } from '../okta/okta.page';

require('dotenv').config;

// ========================== Selectors ==================================

let street: string;
let city: string;
let postalCode: string;
const urlPrimericaGroup = UrlsUtils.groupsUrls.urlPrimericaGroup;
const rdbtnlanguage = 'md-select#select_18';
const txtAgentID = '//input[@name="id"]';
const btnSubmit = '//button[contains(text(),"Submit")]';
const lblRepresentative = '//div/p[contains(text(),"Representative: JANICE S BRAY")]';
const btnGetStarted = '//div[@class="navContainer__top"]/a[contains(text(),"Get Started")]';
const btnStateOrProvince = 'span.glyphicon.startNow__section__icon.glyphicon-menu-down';
const lnkSelectYourPlan = '//h3[contains(text(),"Select Your Legal Plan")]';

export class PrimericaGroupPage extends OktaPage {
  // ========================== Process Methods ============================
  fillAgentID = async (id: string): Promise<void> => {
    console.log(' - PrimericaGroupPage.fillAgentID');
    // Type Agent ID
    await this.fillTextBox(txtAgentID, id);
  };
  selectlanguageAndRegion = async (language: number): Promise<void> => {
    console.log(' - PrimericaGroupPage.selectlanguageAndRegion');
    // Locate a language and Region select
    await this.page.waitForSelector(rdbtnlanguage);
    await this.page.locator(rdbtnlanguage).click();
    // Pick a language
    await this.page.locator('md-option#select_option_' + language).click();
    console.log('language is selected');
  };
  selectStateOrProvince = async (state: string): Promise<void> => {
    console.log(' - PrimericaGroupPage.selectlanguageAndRegion');
    // Locate state or province selector
    await this.page.waitForSelector(btnStateOrProvince);
    await this.page.locator(btnStateOrProvince).click();
    // Pick a state or province
    await this.page.locator('//a[contains(text(),"' + state + '")]').click();
    console.log('state is selected');
  };
  loginBestMoneyMoversGroupPage = async (): Promise<void> => {
    console.log(' - BestMoneyMoversGroupPage.loginBestMoneyMoversGroupPage');
    console.log('Redirected to login page');
    const loginPage = new LoginPage(this.page);
    await loginPage.login('mattfeeqa@gmail.com', 'Password10!');
  };

  // ========================== Navigate Methods ===========================
  navigateToPrimericaGroupPage = async (): Promise<void> => {
    console.log(' - PrimericaGroupPage.navigateToPrimericaGroupPage');
    // navigate to URL
    await this.page.goto(urlPrimericaGroup);
  };

  // ========================== Click Methods ==============================

  clickSubmitBtn = async (): Promise<void> => {
    console.log(' - PrimericaGroupPage.clickSubmitButton');
    // Click Submit button
    await this.clickOnElement(btnSubmit);
  };
  clickGetStartedBtn = async (): Promise<void> => {
    console.log(' - PrimericaGroupPage.clickGetStartedBtn');
    // Click Get Started button
    await this.clickOnElement(btnGetStarted);
  };
  clickSelectYourPlanLnk = async (): Promise<void> => {
    console.log(' - PrimericaGroupPage.clickSelectYourPlanLnk');
    // Click Select your plan Link
    await this.clickOnElement(lnkSelectYourPlan);
  };
  clickAddToCartbtn = async (): Promise<void> => {
    console.log(' - PrimericaGroupPage.clickSelectYourPlanLnk');
    // Click Select your plan Link
    await this.clickOnElement(lnkSelectYourPlan);
  };
  // ========================== Assertion Methods ==========================

  assertRepresentativeLbl = async (rep: string): Promise<void> => {
    console.log(' - UniversalTruckingPage.assertTestingHarnesGroupsPricingPage');
    // Verify that the Representative: JANICE S BRAY is displayed
    await this.page.waitForLoadState();
    await this.page.locator(lblRepresentative).isVisible();
    const par = await this.page.$$(lblRepresentative);
    const repLbl = await par[0].innerText();
    await this.assertStringMatch(repLbl, rep);
    console.log('${repLbl} page is displayed ');
  };

