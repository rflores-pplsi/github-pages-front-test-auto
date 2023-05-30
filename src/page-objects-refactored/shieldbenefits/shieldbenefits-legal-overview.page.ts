import { Page, Locator } from '@playwright/test';
import UrlsUtils from '../../utils/urls.utils';

export class ShieldBenefitsLegalOverviewPage {
  protected page: Page;
  readonly locEnrollNowButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.locEnrollNowButton = this.page.locator('//a[contains(.,"Enroll Now")]');
  }

  /**
   *
   *
   * @param {string} groupNameOrNumber
   * @memberof ShieldBenefitsLegalOverviewPage
   */
  navigateToShieldBenefitsGroupOverviewPage = async (groupNameOrNumber: string): Promise<void> => {
    const groupUrl = `${UrlsUtils.shieldBenefits.home.url}/${groupNameOrNumber}/overview`;
    await this.page.goto(groupUrl);
  };
}
