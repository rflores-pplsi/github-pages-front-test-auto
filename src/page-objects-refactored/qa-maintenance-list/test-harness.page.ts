import UrlsUtils from '../../utils/urls.utils';
import { basicUser } from '../../utils/user.utils';
import { LoginPage } from '../login/login.page';
import { expect } from '@playwright/test';
import * as dotenv from 'dotenv';
import { QaMaintenanceListLocatorsPage } from './qa-maintenance-list-locators.page';
dotenv.config();

// ========================== Selectors ==================================
const urlD2CLegalShieldCaPage = UrlsUtils.testHarnessUrls.d2c.url;

// lines 10 - 14 should be updated, added to 'locators' dir

export class TestHarnessD2cPage extends QaMaintenanceListLocatorsPage {
  // ========================== Process Methods ============================
  selectDirecttoConsumerD2C = async (nth: string): Promise<void> => {
    // Select D2C
    await this.page.waitForLoadState();
    await this.page.click('text=Direct To Consumer Network Calendar >> img >> nth=' + nth, { force: true });
  };
  selectYourRegion = async (region: string): Promise<void> => {
    // await waitNitroPackToLoadElementAsVisible(this.testHarnessD2cLocLscaRegionDropdown, this.page);
    await this.page.waitForLoadState();
    if (!(await this.testHarnessD2cLocSlctChooseYourRegion.isHidden())) {
      // button is not hidden (visible)
      await this.testHarnessD2cLocSlctChooseYourRegion.waitFor();
      await this.testHarnessD2cLocSlctChooseYourRegion.click();
      await this.testHarnessD2cLocSlctChooseYourRegion.selectOption(region);
      await this.testHarnessD2cLocBtnUpdateRegion.click();
      console.log('SLCT_CHOOSE_YOUR_REGION button is visible');
    } else {
      await this.testHarnessD2cLocSlctChooseYourRegion.click();
      await this.testHarnessD2cLocSlctChooseYourRegion.selectOption(region);
      await this.testHarnessD2cLocBtnUpdateRegion.click();
      console.log('SLCT_CHOOSE_YOUR_REGION button is hidden');
    }
  };
  selectYourCity = async (region: string): Promise<void> => {
    await this.testHarnessD2cLocSlctYourCity.waitFor();
    await this.testHarnessD2cLocSlctYourCity.selectOption(region);
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
  clickOnALineOfBusiness = async (lofb: string, lineofbusiness: string): Promise<void> => {
    // navigate to URL
    await this.page.waitForLoadState();
    const LineOfBusiness = 'div.et_pb_blurb_' + lofb;
    await this.page.waitForSelector(LineOfBusiness);
    await this.page.screenshot({ fullPage: true, path: 'Screenshots/testingHarness/' + lineofbusiness + 'LineOfBusiness.png' });
    await this.clickOnElement(LineOfBusiness);
  };
  // ========================== Assertion Methods ==========================

  assertWelcomelabel = async (): Promise<void> => {
    // Verify that the user made the purchase
    await this.page.waitForLoadState();
    await this.testHarnessD2cLocLblWelcome.waitFor();
    expect(await this.testHarnessD2cLocLblWelcome.innerText()).toEqual('Welcome to the Family!');
    await this.page.screenshot({ fullPage: true, path: 'Screenshots/testingHarness/d2cLegalShieldConfirmation.png' });
  };
  assertRegionsDropdown = async (): Promise<void> => {
    // Verify 5 Regions exist in LSCA dropdown
    await this.page.waitForLoadState();
    expect(this.testHarnessD2cLocLscaRegionDropdown.innerText()).toBe(
      `Alberta
British Columbia
Manitoba
Ontario
Saskatchewan`
    );
  };
}
