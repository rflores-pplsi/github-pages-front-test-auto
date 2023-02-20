import { expect } from '@playwright/test';
import DataUtils from '../../utils/Tests.Data';
import { CheckoutPaymentsPage } from './checkout-payments.page';

// ========================== Selectors ==================================

/**
 * @export
 * @class CheckoutPaymentsBankDraftPage
 * @extends {CheckoutPaymentsPage}
 */
export class CheckoutPaymentsBankDraftPage extends CheckoutPaymentsPage {
  // ========================== Process Methods ============================
  /**
   * @memberof CheckoutPaymentsBankDraftPage
   */
  fillUsBankDraftFormAndSubmit = async (): Promise<void> => {
    // Fill out the Bank Draft form
    await this.bankDraftLocTxtAccountNumber.fill(DataUtils.data.testingHarness.us.bd.Account);
    await this.page.keyboard.press('Tab');
    await this.bankDraftLocTxtRoutingNumber.fill(DataUtils.data.testingHarness.us.bd.Routing);
    await this.page.keyboard.press('Tab');
    await this.bankDraftLocTxtAccountHolderName.fill(DataUtils.data.testingHarness.us.bd.name);
    await this.page.keyboard.press('Tab');
    await this.bankDraftLocBtnBDPurchase.click();
  };

  // ========================== Navigate Methods ===========================
  // ========================== fill Text Box Methods ======================
  // ========================== Click Methods ==============================
  // ========================== Assertion Methods ==========================
  /**
   * @memberof CheckoutPaymentsBankDraftPage
   */
  assertWelcomeToLegalShieldFamilyPage = async (): Promise<void> => {
    await this.confirmationLocTxtWelcomeToLegalshiledFamily.waitFor();
    await expect(this.confirmationLocTxtWelcomeToLegalshiledFamily).toContainText('Welcome to the Family!');
  };
}
