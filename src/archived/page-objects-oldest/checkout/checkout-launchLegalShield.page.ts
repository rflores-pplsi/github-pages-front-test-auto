// This page object is actually a marketing site page - keeping for reference
import { BrowserContext, expect, Locator, Page } from '@playwright/test';
import UrlsUtils from '../../../utils/urls.utils';
import { CheckoutLocatorsPage } from './checkout-locators.page';
import { UpdateRegion } from './checkout.helpers';

export class CheckoutLaunchLegalShieldPage extends CheckoutLocatorsPage {
  readonly updateRegion: UpdateRegion;
  readonly launchLegalShieldStartYourBusinessBtn: Locator;
  readonly launchLegalCheckoutBtn: Locator;
  readonly launchLegalWelcomeH3Locator: Locator;
  readonly launchLegalWelcomeH3Txt: Locator;
  readonly launchLegalContinueShopping: Locator;
  /**
   * @param {BrowserContext} context
   * @param {Page} page
   * @memberof CheckoutLaunchLegalShieldPage
   */
  constructor(context: BrowserContext, page: Page) {
    super(context, page);
    this.page = page;
    this.updateRegion = new UpdateRegion(page);
    this.launchLegalShieldStartYourBusinessBtn = page.locator(
      'xpath=//div[@class="et_pb_button_module_wrapper et_pb_button_2_wrapper  et_pb_module "]/a'
    );
    this.launchLegalCheckoutBtn = this.page.locator('button#checkout-btn');
    this.launchLegalWelcomeH3Locator = page.locator('.lsux-heading--t20');
    this.launchLegalWelcomeH3Txt = page.locator('Welcome, let’s get started! To complete your purchase, sign up for an account.');
    this.launchLegalContinueShopping = page.locator('//a[text()= "Continue shopping"]');
  }

  // Process Methods
  getEnv(): string {
    let env = null;

    if (process.env.USE_PROD == 'true' || process.env.USE_PRODUCTION == 'true') {
      env = 'prod';
    } else if (process.env.USE_UAT == 'true') {
      env = 'uat';
    } else if (process.env.USE_STAGE == 'true') {
      env = 'stage';
    } else env = 'dev';

    return env;
  }
  /**
   * @param {Page} page
   * @param {string} region
   * @memberof CheckoutLaunchLegalShieldPage
   */
  selectYourRegionMenu = async (page: Page, region: string): Promise<void> => {
    // Click on Start your business button
    await this.updateRegion.selectRegion(region);
    await this.page.waitForLoadState('domcontentloaded');
  };

  // Navigate Methods
  navigateToLaunch = async (): Promise<void> => {
    if (this.getEnv() == 'prod') {
      console.log('using dev variable');
      console.log('Navigating to dev url:  ', UrlsUtils.launchUrls.prodUrl.url);
      await this.page.goto(UrlsUtils.launchUrls.prodUrl.url, { waitUntil: 'networkidle' });
    } else if (this.getEnv() == 'uat') {
      console.log('using uat variable');
      console.log('Navigating to uat url:  ', UrlsUtils.launchUrls.uatUrl.url);
      await this.page.goto(UrlsUtils.launchUrls.uatUrl.url, { waitUntil: 'networkidle' });
    } else {
      console.log('using dev variable');
      console.log('Navigating to dev url:  ', UrlsUtils.launchUrls.devUrl.url);
      await this.page.goto(UrlsUtils.launchUrls.devUrl.url, { waitUntil: 'networkidle' });
    }
  };

  // Click Methods

  clickStartYourBusiness = async (): Promise<void> => {
    // Click on Start your business button

    await this.page.waitForLoadState('domcontentloaded');
    await this.launchLegalShieldStartYourBusinessBtn.click();
    await this.page.waitForLoadState('domcontentloaded');
  };
  // clickUpdateRegionBtn = async (): Promise<void> => {
  //   // Click on Start your business button
  //   await this.clickOnElement(updateRegionBtn);
  //   await this.page.waitForLoadState('networkidle');
  // };

  // Assertion Methods

  assertWelcomeText = async (): Promise<void> => {
    // Confirm the welcome text
    //await this.assertElementHasText(welcomeH3Locator,welcomeH3Txt);
    await this.page.waitForLoadState('domcontentloaded');
    await expect(this.launchLegalWelcomeH3Txt).toHaveText('Welcome, let’s get started! To complete your purchase, sign up for an account.');
  };
}
