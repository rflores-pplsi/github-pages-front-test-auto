import { BrowserContext, expect, Page } from '@playwright/test';
import RegionsUtils from '../../utils/regions.utils';
import { basicUser } from '../../utils/user.utils';
import { CheckoutLocatorsPage } from './checkout-locators.page';
import { CheckoutPersonalInfoPage } from './checkout-personal-info.page';
import { CommonLoginService } from '@legalshield/frontend-automation-commons';

// ========================== Create instance of Page ==================================

/**
 * @export
 * @class CheckoutPaymentsPage
 */
export class CheckoutPaymentsPage extends CheckoutLocatorsPage {
  readonly checkoutPersonalInfoPage: CheckoutPersonalInfoPage;
  readonly commonLoginService: CommonLoginService;
  /**
   * @param {BrowserContext} context
   * @param {Page} page
   * @param {string} lineOfBusiness
   * @param {Array<string>} planSupp
   * @memberof CheckoutPaymentsPage
   */
  constructor(context: BrowserContext, page: Page, lineOfBusiness: string, planSupp: Array<string>) {
    super(context, page);
    this.checkoutPersonalInfoPage = new CheckoutPersonalInfoPage(context, page, lineOfBusiness, planSupp);
    this.commonLoginService = new CommonLoginService(page);
    this.page = page;
  }
  // ========================== Process Methods ============================
  /**
   * @param {Page} page
   * @param {string} state
   * @param {string} url
   * @param {string} lineOfBusiness
   * @param {string} lofb
   * @param {Array<string>} planSupp
   * @memberof CheckoutPaymentsPage
   */
  navigateToPaymentsPage = async (
    page: Page,
    state: string,
    url: string,
    lineOfBusiness: string,
    lofb: string,
    planSupp: Array<string>
  ): Promise<void> => {
    await this.checkoutPersonalInfoPage.navigateToPersonalInfoPage(page, state, url, lineOfBusiness, lofb, planSupp);
    await this.page.waitForLoadState();
    const regionObj = RegionsUtils.usStates;
    const stateObj = state;
    for (const obj of regionObj) {
      if (obj.name == stateObj) await this.checkoutPersonalInfoPage.changeAddressUs(state);
    }
    await this.checkoutPersonalInfoPage.btnSaveAndContinue.click();
    this.page.waitForLoadState();
  };
  /**
   * @param {Page} page
   * @param {string} state
   * @param {string} url
   * @memberof CheckoutPaymentsPage
   */
  navigateToMarketingSitePaymentsPage = async (page: Page, state: string, url: string): Promise<void> => {
    await this.page.goto(url);
    this.page.waitForLoadState();
    await this.commonLoginService.loginPage.login(basicUser.email as string, basicUser.password as string);
    this.page.waitForLoadState();
    this.page.waitForLoadState();
    const regionObj = RegionsUtils.usStates;
    const stateObj = state;
    for (const obj of regionObj) {
      if (obj.name == stateObj) await this.checkoutPersonalInfoPage.changeAddressUs(state);
    }
    await this.checkoutPersonalInfoPage.btnSaveAndContinue.click();
    this.page.waitForLoadState();
  };

  // ========================== Click Methods ==============================

  /**
   * @param {string} paymentMethod
   * @memberof CheckoutPaymentsPage
   */
  clickPaymentBtn = async (paymentMethod: string): Promise<void> => {
    await this.page.waitForLoadState();
    if (paymentMethod.toLowerCase() === 'bd' && this.paymentsLocFrmPayment != null) {
      await this.paymentsLocBtnBankDraft.click();
    } else throw new Error('No such frame');
  };

  /**
   * @memberof CheckoutPaymentsPage
   */
  clickCreditCardBtn = async (): Promise<void> => {
    if (this.paymentsLocFrmPayment != null) {
      await this.paymentsLocBtnCreditCard.click();
    } else throw new Error('No such frame');
  };

  // ========================== Assertion Methods ==========================
  /**
   * @memberof CheckoutPaymentsPage
   */
  assertAccountPaymentsPage = async (): Promise<void> => {
    await this.page.waitForLoadState();
    await this.paymentsLocTxtHowWouldYouLikeToPay.waitFor();
    if (this.paymentsLocFrmPayment != null) {
      await expect(this.paymentsLocTxtHowWouldYouLikeToPay).toContainText('How would you like to pay?');
    } else throw new Error('No such frame');
  };
  /**
   * @memberof CheckoutPaymentsPage
   */
  assertTermsOfServiceNewTab = async (): Promise<void> => {
    await this.page.waitForLoadState();
    await this.paymentsLocLnkTermsOfService.click();
    await this.page.waitForLoadState();
    const [newPage] = await Promise.all([
      this.page.waitForEvent('popup'),
      await this.paymentsLocFrmPayment.locator('form#cc_form div div span a').click(),
    ]);
    await newPage.waitForLoadState();
    await expect(newPage).toHaveTitle('Terms of Service - PPLSI');
  };

  /**
   * @param {string} cost
   * @memberof CheckoutPaymentsPage
   */
  assertPurchaseAgreementVerbiage = async (cost: string): Promise<void> => {
    await this.page.waitForLoadState();
    console.log(cost);
    if (this.paymentsLocFrmPayment != null) {
      await this.clickPaymentBtn('bd');
      await expect(this.paymentsLocTxtBankDraftTermsOfServiceAgreement).toContainText(
        'By clicking Purchase I agree to LegalShield’s Terms of Service agreement and  authorize recurring subscription charges of ' + cost
      );
    } else throw new Error('No such frame');
    await this.paymentsLocTxtBankDraftTermsOfServiceAgreement.waitFor();
  };
}
