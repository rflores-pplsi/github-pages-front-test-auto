import { expect } from '@playwright/test';
import RegionsUtils from '../../utils/regions.utils';
import { basicUser } from '../../utils/user.utils';
import { CheckoutPersonalInfoPage } from './checkout-personal-info.page';

// ========================== Selectors ==================================
const txtHowWouldYouLikeToPay = 'h1.translate.checkout-v3-h2';
const btnBankDraft = 'span.options.right.translate';

// create instance of Page
/**
 * @export
 * @class AccountPaymentsPage
 */
export class CheckoutPaymentsPage extends CheckoutPersonalInfoPage {
  // ========================== Process Methods ============================

  // ========================== Navigate Methods ===========================
  navigateToPaymentsPage = async (state: string): Promise<void> => {
    console.log(' - accountPaymentPage.goToPaymentsPage');
    await this.navigateToPlanalyzerCsrCheckoutOktaLogin();
    await this.loginThroughOkta();
    await this.createOrderRedirectToCheckout('D2C', 'LegalShield', state, 'en-US', '', '', ['Legal Plan']);
    await this.navigatePersonalInfoPageFromLogin(basicUser.email, basicUser.password);
    const regionObj = RegionsUtils.usStates;
    const stateObj = state;
    for (const obj of regionObj) {
      if (obj.name == stateObj) await this.changeAddress(obj.validAddress.street, obj.validAddress.city, obj.validAddress.postalCode);
    }

    await this.clickSaveAndContinueButton();
    await this.page.waitForTimeout(3500);
    await this.clickBankDraftBtn();
  };

  // ========================== Click Methods ==============================
  clickBankDraftBtn = async () => {
    // Force a wait time
    // Switch to frame
    await this.page.frameLocator("//iframe[@title='payment iframe']");
    const frame = this.page.frameLocator("//iframe[@title='payment iframe']");
    if (frame != null) {
      // Click on Add Payment button
      await frame.locator(btnBankDraft).click();
    } else throw new Error('No such fram');
  };
  // ========================== Assertion Methods ==========================
  assertAccoutPaymentsPage = async () => {
    await this.page.frameLocator("//iframe[@title='payment iframe']");
    const frame = this.page.frameLocator("//iframe[@title='payment iframe']");
    if (frame != null) {
      // Click on Add Payment button
      const locator = frame.locator(txtHowWouldYouLikeToPay);
      await expect(locator).toContainText('How would you like to pay?');
    } else throw new Error('No such fram');
  };
}
// iframe
