/* eslint-disable no-undef */
/* eslint-disable new-cap */
/* eslint-disable no-unused-vars */
/* eslint-disable require-jsdoc */
import UrlsUtils from '../../utils/urls.utils';
import { basicUser } from '../../utils/user.utils';
import { LoginPage } from '../login/login.page';
import { OktaPage } from '../okta/okta.page';

require('dotenv').config;

// ========================== Selectors ==================================
const urlD2CLegalShieldCaPage = UrlsUtils.testHarnessUrls.d2c.url;
const slctChooseYourRegion = 'select.lsc-region-popup__selector';
const btnUpdateRegion = '//button[contains(text(),"Update region")]';
const lblWelcome = '//h1[contains(text(),"Welcome to the Family!")]';

export class D2CLegalShieldCaPage extends OktaPage {
  // ========================== Process Methods ============================
  selectDirecttoConsumerD2C = async (): Promise<void> => {
    // Select D2C
    await this.page.waitForLoadState();
    await this.page.click('text=Direct To Consumer Network Calendar >> img >> nth=0', { force: true });
  };
  selectYourRegion = async (region: string): Promise<void> => {
    await this.page.waitForSelector(slctChooseYourRegion);
    await this.selectFromDropDownMenu(slctChooseYourRegion, region);
    await this.clickOnElement(btnUpdateRegion);
  };
  addPlanAndSomeSupplements = async (planSupp: Array<string>): Promise<void> => {
    for (const ps of planSupp) {
      // Add a plan
      await this.clickOnElement('//a[contains(text(),"' + ps + '")]');
    }
  };
  selectCheckout = async (lineofbusiness: string): Promise<void> => {
    // Take a screenshot of the cart
    await this.page.locator('#cart-container').screenshot({ path: 'Screenshots/testingHarness/' + lineofbusiness + 'Cart.png' });
    await this.clickOnElement('#checkout-btn');
  };
  loginLegalShieldCA = async (lineofbusiness: string): Promise<void> => {
    await this.page.waitForLoadState();
    const loginPage = new LoginPage(this.page);
    await loginPage.login(basicUser.email, basicUser.password);
    await this.page.waitForLoadState();
    await this.page.screenshot({ path: 'Screenshots/testingHarness/' + lineofbusiness + 'Checkout.png', fullPage: true });
  };
  // ========================== Navigate Methods ===========================
  navigateToTestingHarnessPage = async (lineofbusiness: string): Promise<void> => {
    // navigate to URL
    await this.page.goto(urlD2CLegalShieldCaPage);
    await this.page.waitForLoadState();
    await this.page.screenshot({ path: 'Screenshots/testingHarness/' + lineofbusiness + 'TestingHarness.png', fullPage: true });
  };

  // ========================== Click Methods ==============================
  clickLegalShieldCA = async (lofb: string): Promise<void> => {
    // navigate to URL
    await this.page.waitForLoadState();
    const LineOfBusiness = 'div.et_pb_column_' + lofb;
    await this.page.waitForSelector(LineOfBusiness);
    await this.page.screenshot({ path: 'Screenshots/testingHarness/d2cLegalShieldLineOfBusiness.png', fullPage: true });
    await this.clickOnElement(LineOfBusiness);
  };
  // ========================== Assertion Methods ==========================

  assertWelcomelabel = async (): Promise<void> => {
    // Verify that the user made the purchase
    await this.page.waitForLoadState();
    await this.page.waitForSelector(lblWelcome);
    await this.assertElementContainsText(lblWelcome, 'Welcome to the Family!');
    console.log('Welcome to the Family!');
    await this.page.screenshot({ path: 'Screenshots/testingHarness/d2cLegalShieldConfirmation.png', fullPage: true });
  };
}
