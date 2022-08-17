/* eslint-disable no-unused-vars */
/* eslint-disable require-jsdoc */
import { expect } from '@playwright/test';
import RegionsUtils from '../../utils/regions.utils';
import UrlsUtils from '../../utils/urls.utils';
import { basicUser } from '../../utils/user.utils';
import { CheckoutPersonalInfoPage } from '../checkout/checkout-personal-info.page';
import { LoginPage } from '../login/login.page';
import { OktaPage } from '../okta/okta.page';

require('dotenv').config;

// ========================== Selectors ==================================

let street: string;
let city: string;
let postalCode: string;
const urlBestMoneyMovers = UrlsUtils.groupsUrls.urlBestMoneyMovers;
const btnEnrollNow = 'text=Enroll Now';
const selectStatedorpdown = '//span[contains(text(),"Select")]';
const availablePlansLbl = '//h3[contains(text(),"Available Plans")]';
const selectFrequencydorpdown = '//span[contains(text(),"Monthly")]';
const tellUsAboutYourselfLbl = '//h1[contains(text(),"Tell us about yourself")]';

export class BestMoneyMoversGroupPage extends OktaPage {
  // ========================== Process Methods ============================
  selectStateBestMoneyMoversGroupPage = async (state: string): Promise<void> => {
    console.log(' - BestMoneyMoversGroupPage.selectStateBestMoneyMoversGroupPage');
    // Click to Select dropdown
    await this.page.waitForSelector(selectStatedorpdown);
    await this.page.locator(selectStatedorpdown).click();
    // Click on state >> nth=0
    await this.page
      .locator('text=' + state)
      .first()
      .click();
  };
  selectFrequencyBestMoneyMoversGroupPage = async (frequency: string): Promise<void> => {
    console.log(' - BestMoneyMoversGroupPage.selectFrequencyBestMoneyMoversGroupPage');
    // Click to Frequency dropdown
    await this.page.waitForSelector(selectFrequencydorpdown);
    await this.page.locator(selectFrequencydorpdown).click();
    // Click on Monthly >
    await this.page
      .locator('text=' + frequency)
      .nth(1)
      .click();
    console.log('Frequency is selected');
  };
  loginBestMoneyMoversGroupPage = async (): Promise<void> => {
    console.log(' - BestMoneyMoversGroupPage.loginBestMoneyMoversGroupPage');
    console.log('Redirected to login page');
    const loginPage = new LoginPage(this.page);
    await loginPage.login(basicUser.email, basicUser.password);
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

  navigateToBestMoneyMoversGroupPage = async (): Promise<void> => {
    console.log(' - BestMoneyMoversGroupPage.navigateToBestMoneyMoversGroupPage');
    // navigate to URL
    await this.page.goto(urlBestMoneyMovers);
  };

  // ========================== Click Methods ==============================

  clickBtnEnrollNow = async (): Promise<void> => {
    console.log(' - BestMoneyMoversGroupPage.clickBtnEnrollNow');
    // Click on Enroll Now button
    await this.page.click(btnEnrollNow);
  };
  clickBtnESelectPlan = async (plan: string): Promise<void> => {
    console.log(' - BestMoneyMoversGroupPage.clickBtnESelectPlan');
    // Click on Enroll Now button
    await Promise.all([
      await this.page.waitForSelector(availablePlansLbl),
      await this.page.locator('text=' + plan + '/ MonthlyEnroll Now>> button').click(),
    ]);
    console.log('Plan is selected');
  };
  // ========================== Assertion Methods ==========================

  assertTestingHarnesGroupsPricingPage = async (): Promise<void> => {
    console.log(' - BestMoneyMoversGroupPage.assertTestingHarnesGroupsPricingPage');
    // Verify that pricing Page is displayed
    await this.page.waitForURL('https://www.shieldbenefits.com/bestmoneymoves/pricing');
  };
  assertAvailablePlanTxt = async (): Promise<void> => {
    console.log(' - BestMoneyMoversGroupPage.assertTestingHarnesGroupsPricingPage');
    // Verify that Available Plans label is displayed
    await this.waitForElementToBeVisible(availablePlansLbl);
    console.log('State is selected and Available Plans Label is displayed');
  };
  assertTellUsAboutYourselfTxt = async (): Promise<void> => {
    console.log(' - BestMoneyMoversGroupPage.assertTellUsAboutYourselfTxt');
    console.log('logged in and redirected to personal info page');
    // Verify that Available Plans label is displayed
    await this.waitForElementToBeVisible(tellUsAboutYourselfLbl);
    this.page.locator(tellUsAboutYourselfLbl).isVisible;
    console.log('On Personal Info page');
  };
}
