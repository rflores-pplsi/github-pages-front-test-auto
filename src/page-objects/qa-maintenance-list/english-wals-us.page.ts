/* eslint-disable no-undef */
/* eslint-disable new-cap */
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

const urlEnglishWalsUSPage = UrlsUtils.walsUrls.walsUrl.url;
const btnGetAPlan = '#block-is-business-builder-plan >> text=GET A PLAN';
const btnBecomeAssociate = '//span[contains(text(),"Become an Associate")]';
const lblHomeBusinessSupplement = 'label:has-text("Add Home Business Supplement")';
const btnNext = '#builder_modal_checkout_btn_continue';
const btnNextWithForm = '#builder_modal_checkout_btn_withform';
const chkbIndividual = '#individual-bdl';
const chkbNo = '#no-bdl';
const btnContinue = '#builder_modal_checkout_btn';
const btnCheckout = '#minicart_btn_checkout';
const ttlContactInfo = '//h2[contains(text(),"Contact information")]';
const txtEmail = '[placeholder="Email"]';
const txtFirstName = 'input[name="first-name"]';
const txtLastName = 'input[name="last-name"]';
const txtAddress = '[placeholder="Address"]';
const txtCity = '[placeholder="City"]';
const txtZipCode = '[placeholder="Zip Code"]';
const lnkChange = '//div/a[contains(text(),"Change")]';
const selectRegion = 'select[name="state_select"]';
const btnUpdateState = '#edit-submit--3';
let street: string;
let city: string;
let postalCode: string;

export class EnglishWalsUSPage extends OktaPage {
  // ========================== Process Methods ============================

  filloutContactInformationForm = async (state: string, email: string, firstName: string, lastName: string): Promise<void> => {
    console.log(' - EnglishWalsUSPage.FilloutContactInformationForm');
    for (const stte of RegionsUtils.usStates.filter((ste) => ste.name == state)) {
      street = stte.validAddress.street;
      city = stte.validAddress.city;
      postalCode = stte.validAddress.postalCode;
      // Fill Email
      await this.fillTextBox(txtEmail, email);
      // Fill first-name text box
      await this.fillTextBox(txtFirstName, firstName);
      // Fill input[name="last-name"]
      await this.fillTextBox(txtLastName, lastName);
      // Fill Address
      await this.fillTextBox(txtAddress, street);
      // Fill City
      await this.fillTextBox(txtCity, city);
      // Fill Zip Code
      await this.fillTextBox(txtZipCode, postalCode);
    }
  };
  changeStateinformation = async (state: string): Promise<void> => {
    console.log(' - EnglishWalsUSPage.ChangeStateinformation');
    // Click on change state
    await this.page.waitForLoadState;
    await this.page.locator(lnkChange).click({ force: true });
    // Select a state
    await this.page.waitForSelector(selectRegion);
    await this.selectFromDropDownMenu(selectRegion, state);
    // Click the Update State button
    await this.clickOnElement(btnUpdateState);
  };

  getStartedThenPickAPlan = async (): Promise<void> => {
    console.log(' - EnglishWalsUSPage.getStartedThenPickAPlan');
    await this.clickGetStartedBtn();
    // Click on label Add Home Business Supplement
    await this.selectHomeBusinessSupplement();
    // Click on Next button
    await this.clickNextBtn();
    // Check #individual-bdl
    await this.clickIndividualChkBox();
    // Click on Next button
    await this.clickNextWithFormBtn();
    // Check No checkbox
    await this.clickNoChkBox();
    // Click on Add to Cart Button
    await this.clickContinueBtn();
    // Click on Checkout Button
    await this.clickCheckoutBtn();
  };

  // ========================== Navigate Methods ===========================
  navigateToEnglishWalsUSPage = async (): Promise<void> => {
    console.log(' - EnglishWalsUSPage.navigateToEnglishWalsUSPage');
    // navigate to URL
    await this.page.goto(urlEnglishWalsUSPage);
  };

  // ========================== Click Methods ==============================

  clickBecomeAssociateBtn = async (): Promise<void> => {
    console.log(this.page.locator(btnBecomeAssociate));
    // await this.page.mouse.click(220, 800);
    await this.page.locator(btnBecomeAssociate).click();
  };
  clickGetStartedBtn = async (): Promise<void> => {
    console.log(' - PrimericaGroupPage.clickGetStartedBtn');
    await this.page.locator(btnGetAPlan).click();
  };
  selectHomeBusinessSupplement = async (): Promise<void> => {
    console.log(' - PrimericaGroupPage.selectHomeBusinessSupplement');
    // Click Select your plan Link
    await this.clickOnElement(lblHomeBusinessSupplement);
  };
  clickNextBtn = async (): Promise<void> => {
    console.log(' - PrimericaGroupPage.clickNextBtn');
    // Click on Next button
    await this.clickOnElement(btnNext);
  };
  clickIndividualChkBox = async (): Promise<void> => {
    console.log(' - PrimericaGroupPage.clickIndividualChkBox');
    // Check individual checkbox
    await this.clickOnElement(chkbIndividual);
  };
  clickNextWithFormBtn = async (): Promise<void> => {
    console.log(' - PrimericaGroupPage.clickNextWithFormBtn');
    // Click on Next button
    await this.clickOnElement(btnNextWithForm);
  };
  clickNoChkBox = async (): Promise<void> => {
    console.log(' - PrimericaGroupPage.clickNoChkBox');
    // Check No checkbox
    await this.clickOnElement(chkbNo);
  };
  clickContinueBtn = async (): Promise<void> => {
    console.log(' - PrimericaGroupPage.clickContinueBtn');
    // Click on Continue button
    await this.clickOnElement(btnContinue);
  };
  clickCheckoutBtn = async (): Promise<void> => {
    console.log(' - PrimericaGroupPage.clickCheckoutBtn');
    // Click on Checkout button
    await this.clickOnElement(btnCheckout);
  };
  // ========================== Assertion Methods ==========================

  assertContactInformationTxt = async (): Promise<void> => {
    console.log(' - PrimericaGroupPage.assertContactInformationTxt');
    // Verify that  it takes user to checkout
    await this.page.waitForSelector(ttlContactInfo);
    await this.assertElementContainsText(ttlContactInfo, 'Contact information');
    console.log('Landed on checkout page');
  };
}
