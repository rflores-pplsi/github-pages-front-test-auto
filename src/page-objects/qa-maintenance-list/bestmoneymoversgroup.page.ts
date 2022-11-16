import RegionsUtils from '../../utils/regions.utils';
import UrlsUtils from '../../utils/urls.utils';
import { basicUser } from '../../utils/user.utils';
import { CheckoutPersonalInfoPage } from '../checkout/checkout-personal-info.page';
import { LoginPage } from '../login/login.page';
import { OktaPage } from '../okta/okta.page';
import * as dotenv from 'dotenv';
dotenv.config();

// ========================== Selectors ==================================

let street: string;
let city: string;
let postalCode: string;
const urlBestMoneyMovers = UrlsUtils.groupsUrls.urlBestMoneyMovers;
const BTN_ENROLL_NOW = 'text=Enroll Now';
const SELECT_STATE_DROPDOWN = '//span[contains(text(),"Select")]';
const AVAILABLE_PLANS_LBL = '//h3[contains(text(),"Available Plans")]';
const SELECT_FREQUENCY_DROPDOWN = '//span[contains(text(),"Monthly")]';
const TELL_US_ABOUT_YOURSELF_LBL = '//h1[contains(text(),"Tell us about yourself")]';
const LINK_LEGAL_PLAN = 'text="Legal Plan"';

export class BestMoneyMoversGroupPage extends OktaPage {
  // ========================== Process Methods ============================
  selectStateBestMoneyMoversGroupPage = async (state: string): Promise<void> => {
    console.log(' - BestMoneyMoversGroupPage.selectStateBestMoneyMoversGroupPage');
    // Click to Select dropdown
    await this.page.waitForSelector(SELECT_STATE_DROPDOWN);
    await this.page.locator(SELECT_STATE_DROPDOWN).click();
    // Click on state >> nth=0
    await this.page
      .locator('text=' + state)
      .first()
      .click();
  };
  selectFrequencyBestMoneyMoversGroupPage = async (frequency: string): Promise<void> => {
    console.log(' - BestMoneyMoversGroupPage.selectFrequencyBestMoneyMoversGroupPage');
    // Click to Frequency dropdown
    await this.page.waitForSelector(SELECT_FREQUENCY_DROPDOWN);
    await this.page.locator(SELECT_FREQUENCY_DROPDOWN).click();
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

  clickOnLegalPlanTab = async (): Promise<void> => {
    await this.page.click(LINK_LEGAL_PLAN);
  };

  clickBtnEnrollNow = async (): Promise<void> => {
    console.log(' - BestMoneyMoversGroupPage.clickBtnEnrollNow');
    // Click on Enroll Now button
    await this.page.click(BTN_ENROLL_NOW);
  };
  clickBtnESelectPlan = async (plan: string): Promise<void> => {
    console.log(' - BestMoneyMoversGroupPage.clickBtnESelectPlan');
    // Click on Enroll Now button
    await Promise.all([
      await this.page.waitForSelector(AVAILABLE_PLANS_LBL),
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
    await this.waitForElementToBeVisible(AVAILABLE_PLANS_LBL);
    console.log('State is selected and Available Plans Label is displayed');
  };
  assertTellUsAboutYourselfTxt = async (): Promise<void> => {
    console.log(' - BestMoneyMoversGroupPage.assertTellUsAboutYourselfTxt');
    console.log('logged in and redirected to personal info page');
    // Verify that Available Plans label is displayed
    await this.waitForElementToBeVisible(TELL_US_ABOUT_YOURSELF_LBL);
    this.page.locator(TELL_US_ABOUT_YOURSELF_LBL).isVisible;
    console.log('On Personal Info page');
  };
}
