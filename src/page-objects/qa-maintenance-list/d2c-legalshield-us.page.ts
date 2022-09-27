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
const slctYourCity = 'select.lsc_region_selector';
const btnUpdateRegion = '//button[contains(text(),"Update region")]';
const lblWelcome = '//h1[contains(text(),"Welcome to the Family!")]';

export class D2CLegalShieldUSPage extends OktaPage {
  // ========================== Process Methods ============================

  selectYourCity = async (region: string): Promise<void> => {
    await this.page.waitForSelector(slctYourCity);
    await this.selectFromDropDownMenu(slctYourCity, region);
  };

  // ========================== Navigate Methods ===========================

  // ========================== Click Methods ==============================
  clickLegalShieldUS = async (lofb: string, lineofbusiness: string): Promise<void> => {
    // navigate to URL
    await this.page.waitForLoadState();
    const LineOfBusiness = 'div.et_pb_column_' + lofb;
    await this.page.waitForSelector(LineOfBusiness);
    await this.page.screenshot({ path: 'Screenshots/testingHarness/' + lineofbusiness + 'LineOfBusiness.png', fullPage: true });
    await this.clickOnElement(LineOfBusiness);
  };
  // ========================== Assertion Methods ==========================

  assertWelcomelabel = async (lineofbusiness: string): Promise<void> => {
    // Verify that the user made the purchase
    await this.page.waitForLoadState();
    await this.page.waitForSelector(lblWelcome);
    await this.assertElementContainsText(lblWelcome, 'Welcome to the Family!');
    console.log('Welcome to the Family!');
    await this.page.screenshot({ path: 'Screenshots/testingHarness/' + lineofbusiness + 'Confirmation.png', fullPage: true });
  };
}
