import { AccountsLocatorsPage } from './accounts-locators.page';
import { Page } from '@playwright/test';

/**
 *
 *
 * @export
 * @class AccountsBasePage
 * @extends {AccountsLocatorsPage}
 */
export class AccountsBasePage extends AccountsLocatorsPage {
  /**
   *
   *
   * @memberof AccountsBasePage
   */
  logoutOfAccount = async (): Promise<void> => {
    await this.baseLocNameDropdown.click();
    await this.baseLocNameDropdownSignOutLink.click();
  };

  /**
   *
   *
   * @memberof AccountsBasePage
   */
  selectMyProductsLinkFromNameDropdown = async (): Promise<void> => {
    await this.baseLocNameDropdown.click();
    await this.baseLocNameDropdownMyProductsLink.click();
  };

  /**
   *
   *
   * @memberof AccountsBasePage
   */
  selectMyAccountLinkFromNameDropdown = async (): Promise<void> => {
    await this.baseLocNameDropdown.click();
    await this.baseLocNameDropdownMyAccountLink.click();
  };

  /**
   *
   *
   * @memberof AccountsBasePage
   */
  clickTermsOfServiceLink = async (): Promise<Page> => {
    const [newPage] = await Promise.all([this.context.waitForEvent('page'), await this.page.click('a:has-text("Terms of Service")')]);
    await newPage.waitForLoadState();
    await this.baseLocTermsOfServiceLink.click();
    return newPage;
  };

  /**
   *
   *
   * @memberof AccountsBasePage
   */
  clickPrivacyPolicyLink = async (): Promise<Page> => {
    const [newPage] = await Promise.all([this.context.waitForEvent('page'), await this.page.click('a:has-text("Privacy Policy")')]);
    await newPage.waitForLoadState();
    await this.baseLocPrivacyPolicyLink.click();
    return newPage;
  };

  /**
   *
   *
   * @memberof AccountsBasePage
   */
  clickLegalDisclaimerLink = async (): Promise<Page> => {
    const [newPage] = await Promise.all([this.context.waitForEvent('page'), await this.page.click('a:has-text("Legal")')]);
    await newPage.waitForLoadState();
    await this.baseLocLegalLink.click();
    return newPage;
  };
}
