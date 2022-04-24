import { LoginPage } from '../../page-objects/login/login.page';
import EnvironmentUtil from '../../utils/env.utils';
import { Locator, Page } from '@playwright/test';
import { BasePage } from '../base.page';
import { associateAdvantagePlus } from '../../utils/user.utils';

// ========================== Selectors ==================================
const txtEmailOrUsername: string = '[placeholder="Email address/Username"]';
const txtPassword: string = '[placeholder="Password"]';
/**
 *
 * @export
 * @class ChannelsHeaderPage
 * @extends
 */
export class ChannelsHeaderPage extends LoginPage {
  loginPage = new LoginPage(this.page);

  // ========================== Process Methods ============================
  // ========================== Navigate Methods ===========================
  navigateToPage = async (url: string): Promise<void> => {
    console.log(' - ChannelsHeaderPage.navigateToPage');
    // Navigate to Account Plans Page
    await this.goTo(url);
    await this.loginPage.loginWithEnterKey(associateAdvantagePlus.username, associateAdvantagePlus.password);
    // Wait for page to finish loading
    await this.page.waitForLoadState('networkidle');
  };
  // ========================== Click Methods ==============================
  // ========================== Assertion Methods ==========================
}
