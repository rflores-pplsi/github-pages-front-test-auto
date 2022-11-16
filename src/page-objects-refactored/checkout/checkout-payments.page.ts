import { expect, Page } from '@playwright/test';
import RegionsUtils from '../../utils/regions.utils';
import { CheckoutPersonalInfoPage } from './checkout-personal-info.page';

// ========================== Selectors ==================================
const TXT_HOW_WOULD_YOU_LIKE_TO_PAY = 'h1.translate.checkout-v3-h2';
const BTN_BANK_DRAFT = 'span.options.right.translate';
const BTN_CREDIT_CARD = 'span.options.left.translate';
const LNK_TERMS_OF_SERVICE = '#cc_form >> text=Terms of Service';
const TXT_BANK_DRAFT_TERMS_OF_SERVICE_AGREEMENT = '//form[@id="bd_form"]//span[contains(@class,"termsConditions")]//br';

// create instance of Page
/**
 * @export
 * @class AccountPaymentsPage
 */
export class CheckoutPaymentsPage extends CheckoutPersonalInfoPage {
  // ========================== Process Methods ============================

  // ========================== Navigate Methods ===========================
  /**
   * @param {string} state
   * @memberof CheckoutPaymentsPage
   */
  navigateToPaymentsPage = async (state: string): Promise<void> => {
    console.log(' - accountPaymentPage.goToPaymentsPage');
    await this.navigateToPlanalyzerCsrCheckoutOktaLogin();
    await this.loginThroughOkta();
    await this.createOrderRedirectToCheckoutFromPlanalyzer('D2C', 'LegalShield', state, 'en-US', '', '', ['Legal Plan']);
    // await this.navigatePersonalInfoPageFromLogin(basicUser.email, basicUser.password);
    const regionObj = RegionsUtils.usStates;
    const stateObj = state;
    for (const obj of regionObj) {
      if (obj.name == stateObj) await this.changeAddress(obj.validAddress.street, obj.validAddress.city, obj.validAddress.postalCode);
    }

    await this.clickSaveAndContinueButton();
    // await this.page.waitForTimeout(3500);
  };

  // ========================== Click Methods ==============================

  /**
   * @memberof CheckoutPaymentsPage
   */
  clickBankDraftBtn = async () => {
    // Force a wait time
    // Switch to frame
    await this.page.waitForLoadState();
    this.page.frameLocator("//iframe[@title='payment iframe']");
    const frame = this.page.frameLocator("//iframe[@title='payment iframe']");
    if (frame != null) {
      // Click on Add Payment button
      await frame.locator(BTN_BANK_DRAFT).click();
    } else throw new Error('No such frame');
  };

  /**
   * @memberof CheckoutPaymentsPage
   */
  clickCreditCardBtn = async () => {
    // Switch to frame
    this.page.frameLocator("//iframe[@title='payment iframe']");
    const frame = this.page.frameLocator("//iframe[@title='payment iframe']");
    if (frame != null) {
      // Click on Add Payment button
      await frame.locator(BTN_CREDIT_CARD).click();
    } else throw new Error('No such frame');
  };

  // ========================== Assertion Methods ==========================
  /**
   * @memberof CheckoutPaymentsPage
   */
  assertAccountPaymentsPage = async () => {
    this.page.frameLocator("//iframe[@title='payment iframe']");
    const frame = this.page.frameLocator("//iframe[@title='payment iframe']");
    if (frame != null) {
      // Click on Add Payment button
      const locator = frame.locator(TXT_HOW_WOULD_YOU_LIKE_TO_PAY);
      await expect(locator).toContainText('How would you like to pay?');
    } else throw new Error('No such frame');
  };
  /**
   * @memberof CheckoutPaymentsPage
   */
  assertTermsOfServiceNewTab = async (): Promise<Page> => {
    const [newPage] = await Promise.all([this.context.waitForEvent('page'), await this.page.click(LNK_TERMS_OF_SERVICE)]);
    await newPage.waitForLoadState();
    await expect(newPage).toHaveTitle('Terms of Service Notice - LegalShield');
    return newPage;
  };

  // TODO: research why this method not finding text and implement step in e2e tests
  /**
   * @param {string} term
   * @param {string} cost
   * @memberof CheckoutPaymentsPage
   */
  assertPurchaseAgreementVerbiage = async (term: string, cost: string): Promise<void> => {
    console.log(' - accountPaymentPage.assertPurchaseAgreementVerbiage');
    this.page.frameLocator("//iframe[@title='payment iframe']");
    const frame = this.page.frameLocator("//iframe[@title='payment iframe']");
    if (frame != null) {
      // Click on Add Payment button
      await this.clickBankDraftBtn();
      await this.assertElementHasText(
        TXT_BANK_DRAFT_TERMS_OF_SERVICE_AGREEMENT,
        `authorize ${term.toLowerCase()} recurring subscription charge of ${cost}.`
      );
    } else throw new Error('No such frame');
  };
}
