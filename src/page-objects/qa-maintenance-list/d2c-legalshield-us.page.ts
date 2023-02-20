import { OktaPage } from '../okta/okta.page';
import * as dotenv from 'dotenv';
dotenv.config();

// ========================== Selectors ==================================
const SLCT_YOUR_CITY = 'select.lsc_region_selector';
const LBL_WELCOME = '//h1[contains(text(),"Welcome to the Family!")]';

export class D2CLegalShieldUSPage extends OktaPage {
  // ========================== Process Methods ============================

  selectYourCity = async (region: string): Promise<void> => {
    await this.page.waitForSelector(SLCT_YOUR_CITY);
    await this.selectFromDropDownMenu(SLCT_YOUR_CITY, region);
  };

  // ========================== Navigate Methods ===========================

  // ========================== Click Methods ==============================
  clickOnALineOfBusiness = async (lofb: string, lineofbusiness: string): Promise<void> => {
    // navigate to URL
    await this.page.waitForLoadState();
    const LineOfBusiness = 'div.et_pb_blurb_' + lofb;
    await this.page.waitForSelector(LineOfBusiness);
    await this.page.screenshot({ fullPage: true, path: 'Screenshots/testingHarness/' + lineofbusiness + 'LineOfBusiness.png' });
    await this.clickOnElement(LineOfBusiness);
  };
  // ========================== Assertion Methods ==========================

  assertWelcomelabel = async (lineofbusiness: string): Promise<void> => {
    // Verify that the user made the purchase
    await this.page.waitForLoadState();
    await this.page.waitForSelector(LBL_WELCOME);
    await this.assertElementContainsText(LBL_WELCOME, 'Welcome to the Family!');
    console.log('Welcome to the Family!');
    await this.page.screenshot({ fullPage: true, path: 'Screenshots/testingHarness/' + lineofbusiness + 'Confirmation.png' });
  };
}
