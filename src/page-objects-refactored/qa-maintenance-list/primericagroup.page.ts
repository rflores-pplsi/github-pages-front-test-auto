import { expect } from '@playwright/test';
import UrlsUtils from '../../utils/urls.utils';
import { LoginPage } from '../login/login.page';
import { OktaPage } from '../okta/okta.page';
import * as dotenv from 'dotenv';
dotenv.config();

// ========================== Selectors ==================================

const urlPrimericaGroup = UrlsUtils.groupsUrls.urlPrimericaGroup;
const RDBTN_LANGUAGE = 'md-select#select_18';
const TXT_AGENT_ID = '//input[@name="id"]';
const BTN_SUBMIT = '//button[contains(text(),"Submit")]';
const LBL_REPRESENTATIVE = '//div/p[contains(text(),"Representative: JANICE S BRAY")]';
const BTN_GET_STARTED = '//div[@class="navContainer__top"]/a[contains(text(),"Get Started")]';
const BTN_STATE_OR_PROVINCE = 'span.glyphicon.startNow__section__icon.glyphicon-menu-down';
const LNK_SELECT_YOUR_PLAN = '//h3[contains(text(),"Select Your Legal Plan")]';
const BTN_ADD_TO_CART = '//button[contains(text(),"ADD TO CART")]';
const BTN_CONTACT_INFO = '//button[contains(text(),"Contact Information")]';

export class PrimericaGroupPage extends OktaPage {
  // ========================== Process Methods ============================
  fillAgentID = async (id: string): Promise<void> => {
    console.log(' - PrimericaGroupPage.fillAgentID');
    // Type Agent ID
    await this.fillTextBox(TXT_AGENT_ID, id);
  };
  selectlanguageAndRegion = async (language: number): Promise<void> => {
    console.log(' - PrimericaGroupPage.selectlanguageAndRegion');
    // Locate a language and Region select
    await this.page.waitForSelector(RDBTN_LANGUAGE);
    await this.page.locator(RDBTN_LANGUAGE).click();
    // Pick a language
    await this.page.locator('md-option#select_option_' + language).click();
    console.log('language is selected');
  };
  selectStateOrProvince = async (state: string): Promise<void> => {
    console.log(' - PrimericaGroupPage.selectlanguageAndRegion');
    // Locate state or province selector
    await this.page.waitForSelector(BTN_STATE_OR_PROVINCE);
    await this.page.locator(BTN_STATE_OR_PROVINCE).click();
    // Pick a state or province
    await this.page.locator('//a[contains(text(),"' + state + '")]').click();
    console.log('state is selected');
  };
  loginBestMoneyMoversGroupPage = async (): Promise<void> => {
    console.log(' - BestMoneyMoversGroupPage.loginBestMoneyMoversGroupPage');
    console.log('Redirected to login page');
    const loginPage = new LoginPage(this.context, this.page);
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
    await this.clickOnElement(BTN_SUBMIT);
  };
  clickGetStartedBtn = async (): Promise<void> => {
    console.log(' - PrimericaGroupPage.clickGetStartedBtn');
    // Click Get Started button
    await this.clickOnElement(BTN_GET_STARTED);
  };
  clickSelectYourPlanLnk = async (): Promise<void> => {
    console.log(' - PrimericaGroupPage.clickSelectYourPlanLnk');
    // Click Select your plan Link
    await this.clickOnElement(LNK_SELECT_YOUR_PLAN);
  };
  clickAddToCartBtn = async (): Promise<void> => {
    console.log(' - PrimericaGroupPage.clickAddToCartBtn');
    // Click Add to cart button
    await this.page.waitForSelector(BTN_ADD_TO_CART);
    const ajouter = await this.page.$$(BTN_ADD_TO_CART);
    await ajouter[0].click();
  };
  clickContactInfoBtn = async (): Promise<void> => {
    console.log(' - PrimericaGroupPage.clickGetStartedBtn');
    // Click Get Started button
    await this.clickOnElement(BTN_CONTACT_INFO);
  };
  // ========================== Assertion Methods ==========================

  assertRepresentativeLbl = async (rep: string): Promise<void> => {
    console.log(' - PrimericaGroupPage.assertRepresentativeLbl');
    // Verify that the Representative: JANICE S BRAY is displayed
    await this.page.waitForLoadState();
    await this.page.locator(LBL_REPRESENTATIVE).isVisible();
    const par = await this.page.$$(LBL_REPRESENTATIVE);
    const repLbl = await par[0].innerText();
    await this.assertStringMatch(repLbl, rep);
    console.log('${repLbl} page is displayed ');
  };
  assertCheckoutURL = async (): Promise<void> => {
    console.log(' - PrimericaGroupPage.assertCheckoutURL');
    // Verify that  it takes user to checkout
    await expect(this.page).toHaveURL('https://checkout.legalshield.ca/groups/primericacaeng?agent=12345&region=ON');
    console.log('Landed on checkout page');
  };
}
