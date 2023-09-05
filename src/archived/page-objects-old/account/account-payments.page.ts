// import { expect } from '@playwright/test';
import UrlsUtils from '../../../utils/urls.utils';
import { LoginPage } from '../login/login.page';

// ========================== Selectors ==================================

/**
 * @export
 * @class PaymentsPage
 * @extends {LoginPage}
 */
export class PaymentsPage extends LoginPage {
  // ========================== Process Methods ============================

  // ========================== Navigate Methods ===========================
  navigateToAccountPaymentsPage = async (): Promise<void> => {
    console.log(' - accountResourcesPage.navigateToAccountPaymentsPage');
    // Navigate to Activate Page
    await this.goTo(UrlsUtils.legalshieldUrls.accounts.url + '/payments');
  };
  // ========================== Click Methods ==============================

  // ========================== Assertion Methods ==========================
}
