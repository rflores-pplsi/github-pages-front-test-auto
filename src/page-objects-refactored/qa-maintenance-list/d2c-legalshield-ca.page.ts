import UrlsUtils from '../../utils/urls.utils';
import { basicUser } from '../../utils/user.utils';
import { LoginPage } from '../login/login.page';
import { OktaPage } from '../okta/okta.page';
import * as dotenv from 'dotenv';
dotenv.config();

// ========================== Selectors ==================================
const urlD2CLegalShieldCaPage = UrlsUtils.testHarnessUrls.d2c.url;
const SLCT_CHOOSE_YOUR_REGION = 'select.lsc-region-popup__selector';
const BTN_UPDATE_REGION = '//button[contains(text(),"Update region")]';
const LBL_WELCOME = '//h1[contains(text(),"Welcome to the Family!")]';

export class D2CLegalShieldCaPage extends OktaPage {
  // ========================== Process Methods ============================
  selectDirecttoConsumerD2C = async (nth: string): Promise<void> => {
    // Select D2C
    await this.page.waitForLoadState();
    await this.page.click('text=Direct To Consumer Network Calendar >> img >> nth=' + nth, { force: true });
  };
  selectYourRegion = async (region: string): Promise<void> => {
    if (await this.page.locator(SLCT_CHOOSE_YOUR_REGION).isVisible()) {
      await this.page.waitForSelector(SLCT_CHOOSE_YOUR_REGION);
      await this.selectFromDropDownMenu(SLCT_CHOOSE_YOUR_REGION, region);
      await this.clickOnElement(BTN_UPDATE_REGION);
    }
  };
  addPlanAndSomeSupplements = async (lineOfBusiness: string, planSupp: Array<string>): Promise<void> => {
    for (const ps of planSupp) {
      // Add a plan
      if (lineOfBusiness == 'd2cLegalShieldCA' || lineOfBusiness == 'd2cLegalShieldUS') {
        await this.clickOnElement('//a[contains(text(),"' + ps + '")]');
      } else {
        await this.clickOnElement('text=' + ps + ' >> nth=0');
      }
    }
  };
  selectCheckout = async (lineofbusiness: string): Promise<void> => {
    // Take a screenshot of the cart
    if (lineofbusiness != 'd2cIDShieldCA') {
      await this.page.locator('#cart-container').screenshot({ path: 'Screenshots/testingHarness/' + lineofbusiness + 'Cart.png' });
      await this.clickOnElement('#checkout-btn');
    } else {
      if (await this.page.locator('#lsc-header-cart-icon-desktop img').isVisible()) {
        await this.page.waitForSelector('button:has-text("Continue")');
      } else {
        await this.clickOnElement('#lsc-header-cart-icon-desktop img');
      }
      await this.page.locator('#root').screenshot({ path: 'Screenshots/testingHarness/' + lineofbusiness + 'Cart.png' });
      await this.clickOnElement('button:has-text("Continue")');
    }
  };
  loginLegalShieldCA = async (lineofbusiness: string): Promise<void> => {
    await this.page.waitForLoadState();
    const loginPage = new LoginPage(this.context, this.page);
    await loginPage.login(basicUser.email as string, basicUser.password as string);
    await this.page.waitForLoadState();
    await this.page.screenshot({ fullPage: true, path: 'Screenshots/testingHarness/' + lineofbusiness + 'Checkout.png' });
  };
  // ========================== Navigate Methods ===========================
  navigateToTestingHarnessPage = async (lineofbusiness: string): Promise<void> => {
    // navigate to URL
    await this.page.goto(urlD2CLegalShieldCaPage);
    await this.page.waitForLoadState();
    await this.page.screenshot({ fullPage: true, path: 'Screenshots/testingHarness/' + lineofbusiness + 'TestingHarness.png' });
  };

  // ========================== Click Methods ==============================
  clickLegalShieldCA = async (lofb: string): Promise<void> => {
    // navigate to URL
    await this.page.waitForLoadState();
    const LineOfBusiness = 'div.et_pb_column_' + lofb;
    await this.page.waitForSelector(LineOfBusiness);
    await this.page.screenshot({ fullPage: true, path: 'Screenshots/testingHarness/d2cLegalShieldLineOfBusiness.png' });
    await this.clickOnElement(LineOfBusiness);
  };
  // ========================== Assertion Methods ==========================

  assertWelcomelabel = async (): Promise<void> => {
    // Verify that the user made the purchase
    await this.page.waitForLoadState();
    await this.page.waitForSelector(LBL_WELCOME);
    await this.assertElementContainsText(LBL_WELCOME, 'Welcome to the Family!');
    console.log('Welcome to the Family!');
    await this.page.screenshot({ fullPage: true, path: 'Screenshots/testingHarness/d2cLegalShieldConfirmation.png' });
  };
}
