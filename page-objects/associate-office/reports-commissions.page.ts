import { LoginPage } from '../login/login.page';
import EnvironmentUtil from '../../utils/env.utils';
import { Locator, Page } from '@playwright/test';
import { BasePage } from '../base.page';
import { associateAdvantagePlus } from '../../utils/user.utils';
import UrlsUtils from '../../utils/urls.utils';

// ========================== Selectors ==================================
const txtEmailOrUsername: string = '[placeholder="Email address/Username"]';
const txtPassword: string = '[placeholder="Password"]';
/**
 *
 * @export
 * @class ChannelsHeaderPage
 * @extends
 */
export class ReportsCommissionsPage extends LoginPage {
  // ========================== Process Methods ============================
  // ========================== Navigate Methods ===========================
  navigateToReportsCommissionsPage = async (): Promise<void> => {
    console.log(' - ReportsCommissionsPage.navigateToReportsCommissionsPage');
    // Navigate to Business Report Commission Page
    await this.goTo(UrlsUtils.channelsUrls.reportscommissions.url);
    await this.login(associateAdvantagePlus.username, associateAdvantagePlus.password);
    await this.page.waitForSelector(lblTitleMarketingWebsitePreferences);
  };
  // ========================== Click Methods ==============================
  // ========================== Assertion Methods ==========================
}
