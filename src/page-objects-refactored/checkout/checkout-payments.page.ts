import { BrowserContext, expect, FrameLocator, Locator, Page } from '@playwright/test';
import RegionsUtils from '../../utils/regions.utils';
import { CheckoutPersonalInfoPage } from '../../page-objects-refactored/checkout/checkout-personal-info.page';

// ========================== Selectors ==================================

// create instance of Page
/**
 * @export
 * @class AccountPaymentsPage
 */
export class CheckoutPaymentsPage {
  readonly checkoutPersonalInfoPage: CheckoutPersonalInfoPage;
  protected page: Page;
  readonly txtHowWouldYouLikeToPay: Locator;
  readonly btnBankDraft: Locator;
  readonly btnCreditCard: Locator;
  readonly lnkTermsOfService: Locator;
  readonly txtBankDraftTermsOfServiceAgreement: Locator;
  readonly paymentFrame: FrameLocator;
  /**
   * @param {Page} page
   * @param {string} lineOfBusiness
   * @param {Array<string>} planSupp
   * @memberof CheckoutPaymentsPage
   */
  constructor(page: Page, lineOfBusiness: string, planSupp: Array<string>) {
    this.page = page;
    this.paymentFrame = this.page.frameLocator("//iframe[@title='payment iframe']");
    this.txtHowWouldYouLikeToPay = this.paymentFrame.locator('h1.translate.checkout-v3-h2');
    this.btnBankDraft = this.paymentFrame.locator('span.options.right.translate');
    this.btnCreditCard = this.page.locator('span.options.left.translate');
    this.lnkTermsOfService = this.page.locator('#cc_form >> text=Terms of Service');
    this.txtBankDraftTermsOfServiceAgreement = this.page.locator('//form[@id="bd_form"]//span[contains(@class,"termsConditions")]//br');
    this.checkoutPersonalInfoPage = new CheckoutPersonalInfoPage(page, lineOfBusiness, planSupp);
  }
  // ========================== Process Methods ============================

  // ========================== Navigate Methods ===========================
  /**
   * @param {Page} page
   * @param {string} state
   * @memberof CheckoutPaymentsPage
   */
  navigateToPaymentsPage = async (page: Page, state: string): Promise<void> => {
    await this.checkoutPersonalInfoPage.navigateToPaymentsPageForF30IdsCa('Virginia');
    // await this.navigatePersonalInfoPageFromLogin(basicUser.email, basicUser.password);
    const regionObj = RegionsUtils.usStates;
    const stateObj = state;
    for (const obj of regionObj) {
      if (obj.name == stateObj) await this.checkoutPersonalInfoPage.changeAddressUs(state);
    }
    // await this.checkoutPersonalInfoPage.btnSaveAndContinue.click();
    // await this.page.waitForTimeout(3500);
    this.txtHowWouldYouLikeToPay.waitFor();
  };

  // ========================== Click Methods ==============================

  /**
   * @param {string} paymentMethod
   * @memberof CheckoutPaymentsPage
   */
  clickPaymentBtn = async (paymentMethod: string) => {
    // Force a wait time
    // Switch to frame
    await this.page.waitForLoadState();
    if (paymentMethod.toLowerCase() === 'bd' && this.paymentFrame != null) {
      // Click on Add Payment button
      await this.btnBankDraft.click();
    } else throw new Error('No such frame');
    if (paymentMethod.toLowerCase() === 'cc' && this.paymentFrame != null) {
      // Click on Add Payment button
      await this.btnCreditCard.click();
    } else throw new Error('No such frame');
  };

  // ========================== Assertion Methods ==========================
  /**
   * @memberof CheckoutPaymentsPage
   */
  assertAccountPaymentsPage = async () => {
    await this.page.waitForLoadState();
    if (this.paymentFrame != null) {
      await expect(this.txtHowWouldYouLikeToPay).toContainText('How would you like to pay?');
    } else throw new Error('No such frame');
  };
  /**
   * @param {BrowserContext} context
   * @memberof CheckoutPaymentsPage
   */
  assertTermsOfServiceNewTab = async (context: BrowserContext): Promise<Page> => {
    const [newPage] = await Promise.all([context.waitForEvent('page'), await this.lnkTermsOfService.click()]);
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
    console.log(term, cost);
    if (this.paymentFrame != null) {
      // Click on Add Payment button
      await this.clickPaymentBtn('bd');
      await expect(this.txtBankDraftTermsOfServiceAgreement).toContainText(
        'authorize ${term.toLowerCase()} recurring subscription charge of ${cost}.'
      );
    } else throw new Error('No such frame');
  };
}
