import { expect } from '@playwright/test';
import DataUtils from '../../../utils/Tests.Data';
import { CheckoutPaymentsPage } from './checkout-payments.page';

/**
 * @export
 * @class CheckoutPaymentsCreditCardPage
 * @extends {CheckoutPaymentsPage}
 */
export class CheckoutPaymentsCreditCardPage extends CheckoutPaymentsPage {
  // ========================== Process Methods ============================
  fillCreditCardForm = async (): Promise<void> => {
    await this.creditCardLocTxtCardNumber.fill(DataUtils.data.testingHarness.us.cc.cn);
    await this.creditCardLocTxtExpirationDate.fill(DataUtils.data.testingHarness.us.cc.exp);
    await this.creditCardLocTxtSecurityCode.fill(DataUtils.data.testingHarness.us.cc.cvv);
    await this.creditCardLocTxtCardholderName.fill(DataUtils.data.testingHarness.us.cc.name);
    await this.creditCardLocTxtBillingPostalCode.fill(DataUtils.data.testingHarness.us.cc.postalCode);
    await this.creditCardLocBtnCCPurchase.click();
  };

  // ========================== Navigate Methods ===========================

  // ========================== fill Text Box Methods ======================

  // ========================== Click Methods ==============================
  /**
   * @export
   * @memberof CheckoutPaymentsCreditCardPage
   */
  clickCreditCardPurchaseBtn = async (): Promise<void> => {
    // Switch to frame
    if (this.paymentsLocFrmPayment != null) {
      // Click on Purchase button
      await this.paymentsLocBtnCreditCard.click({ force: true });
    } else throw new Error('No such frame');
  };
  // ========================== Assertion Methods ==========================
  /**
   * @export
   * @memberof CheckoutPaymentsCreditCardPage
   */
  assertWelcomeToLegalShieldFamilyPage = async (): Promise<void> => {
    const welcome = await this.confirmationLocTxtWelcomeToLegalshiledFamily.innerText();
    console.log(welcome);
    await expect(this.confirmationLocTxtWelcomeToLegalshiledFamily).toContainText('Welcome!');
  };
}
