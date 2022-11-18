import { expect, Page } from '@playwright/test';
import UrlsUtils from '../../utils/urls.utils';
import { WalsLocatorPage } from './wals-locators.page';

/**
 * @export
 * @extends WalsLocatorPage
 * @class WalsBenefitsPage
 */
export class WalsBenefitsPage extends WalsLocatorPage {
  /**
   * @param {Page} page
   * @memberof WalsBenefitsPage
   */
  constructor(page: Page) {
    super(page);
    this.page = page;
  }

  /**
   * @memberof navigateToWALSBenefitsUrl
   */
  navigateToWALSBenefitsUrl = async (): Promise<void> => {
    await this.page.goto(UrlsUtils.wals.urls.urlBenefits);
  };

  /**
   * @param {string} txt
   * @memberof assertBannerHeader
   */
  assertBannerHeader = async (txt: string): Promise<void> => {
    await expect(this.page.locator('role=heading[name="' + txt + '"]')).toBeVisible();
  };

  /**
   * @param {string} txt
   * @memberof assertBannerPlanPrice
   */
  assertBannerPlanPrice = async (txt: string): Promise<void> => {
    await expect(this.page.locator('//p[contains(text(), "' + txt + '")]')).toBeVisible();
  };
}
