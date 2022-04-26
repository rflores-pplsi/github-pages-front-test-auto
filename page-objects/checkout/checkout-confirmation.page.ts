import { expect } from '@playwright/test';
import { CheckoutPaymentsBankDraftPage } from './checkout-payments-bank-draft.page';

// ========================== Selectors ==================================
const txtWelcomeToLegalshiledFamily = 'h1.lsux-heading.confirmation-title.lsux-heading--t28';
const btnCompleteEnrollment = 'button:has-text("COMPLETE ENROLLMENT")';
const chkAgreement = '//div[contains(@class,"lsux-cb-container__cb   margin-right")]';
const txtMemberNumber = '//div[contains(@class,"membership-header-row")]//following::p[contains(@class,"member-id")]';

// eslint-disable-next-line valid-jsdoc
/**
 * @export
 * @class CheckoutConfirmationPage
 * @extends {PlanalyzerCsrCheckoutPage}
 */
export class CheckoutConfirmationPage extends CheckoutPaymentsBankDraftPage {
  static pPlan: string;
  static pPlanPrice: string;
  static txtTotalLabel: string;
  static txtTotalPriceLabel: string;
  // ========================== Process Methods ============================
  // ========================== Navigate Methods ===========================
  navigateToCheckoutConfirmationPageUsingPlanalyzer = async (state: string, paymentMethod: string): Promise<void> => {
    await this.navigateToPaymentsPage(state);
    CheckoutConfirmationPage.pPlan = await this.fillOrderSummarypPlanValue();
    console.log(CheckoutConfirmationPage.pPlan);
    CheckoutConfirmationPage.pPlanPrice = await this.fillOrderSummarypPlanPriceValue();
    console.log(CheckoutConfirmationPage.pPlanPrice);
    CheckoutConfirmationPage.txtTotalLabel = await this.fillOrderSummarytxtTotalLabelValue();
    console.log(CheckoutConfirmationPage.txtTotalLabel);
    CheckoutConfirmationPage.txtTotalPriceLabel = await this.fillOrderSummarytxtTotalPriceLabelValue();
    console.log(CheckoutConfirmationPage.txtTotalPriceLabel);
    if (paymentMethod.toUpperCase() == 'BD') {
      console.log(' - checkoutPaymentPage.navigateToCheckoutConfirmationPage');
      await this.clickBankDraftBtn();
      await this.fillBankDraftForm();
    } else if (paymentMethod.toUpperCase() == 'CC') {
      // await this.clickBankDraftBtn();
      // await this.clickCreditCardBtn();
      await this.fillCreditCardForm();
    }
  };
  // ========================== Click Methods ==============================
  /**
   * @memberof CheckoutConfirmationPage
   */
  clickCompleteEnrollmentButton = async () => {
    console.log(' - checkoutConfirmationPage.clickCompleteEnrollmentButton');
    // Click on Complete Enrollment Button
    await this.clickOnElement(btnCompleteEnrollment);
  };

  /**
   * @memberof CheckoutConfirmationPage
   */
  clickAgreementCheckbox = async () => {
    console.log(' - checkoutConfirmationPage.clickAgreementCheckbox');
    // Click on Complete Enrollment Button
    await this.checkCheckbox(chkAgreement);
  };

  // ========================== Assertion Methods ==========================
  assertWelcomeToLegalshiledFamilyPage = async () => {
    console.log(' - checkoutConfirmationPage.assertWelcomeToLegalshiledFamilyPage');
    const welcome = await this.page.waitForSelector(txtWelcomeToLegalshiledFamily);
    console.log(welcome.innerText());
    await this.assertElementContainsText(txtWelcomeToLegalshiledFamily, 'Welcome!');
  };
  assertOrderSummaryPlanPriceConfirmationPage = async () => {
    console.log(' - checkoutConfirmationPage.assertOrderSummaryPlanPriceConfirmationPage');
    const planPrice = this.page.locator('div.lsux-card--inset.p-6 h3.lsux-heading.plan-price.lsux-heading--t20');
    await expect(planPrice).toHaveText(CheckoutConfirmationPage.pPlanPrice);
  };

  /**
   * @param {string} planName
   * @memberof CheckoutConfirmationPage
   */
  assertOrderSummaryPlanLabelConfirmationPage = async (planName: string) => {
    console.log(' - checkoutConfirmationPage.assertOrderSummaryPlanLabelConfirmationPage');
    const lblplan = this.page.locator(`text=${planName}`);
    await expect(lblplan).toHaveText(CheckoutConfirmationPage.pPlan);
  };
  assertOrderSummaryLegalShieldMembershipConfirmationPage = async () => {
    console.log(' - checkoutConfirmationPage.assertOrderSummaryMonthlyConfirmationPage');
    const lblplan = this.page.locator('text = LegalShield Membership');
    await expect(lblplan).toHaveText('LegalShield Membership');
  };
  assertOrderSummaryMonthlyConfirmationPage = async () => {
    console.log(' - checkoutConfirmationPage.assertOrderSummaryMonthlyConfirmationPage');
    const lblplan = this.page.locator('text = Monthly Subscription');
    await expect(lblplan).toHaveText('Monthly Subscription');
  };

  assertMemberNumberDisplayed = async () => {
    console.log(' - checkoutConfirmationPage.assertMemberNumberDisplayed');
    await this.assertInnerTextIsTruthy(txtMemberNumber);
  };

  /**
   * @param {string} planName
   * @memberof CheckoutConfirmationPage
   */
  assertPlanNameDisplayed = async (planName: string) => {
    console.log(' - checkoutConfirmationPage.assertPlanNameDisplayed');
    const ele = `//div[contains(@class,"plan-details-card") and contains(.,"${planName}")]`;
    await this.assertInnerTextIsTruthy(ele);
  };

  /**
   * @param {string} planName
   * @memberof CheckoutConfirmationPage
   */
  assertPlanCostDisplayed = async (planName: string) => {
    console.log(' - checkoutConfirmationPage.assertPlanCostDisplayed');
    const ele = `//div[contains(@class,"plan-details-card") and contains(.,"${planName}")]//h3[contains(@class,"plan-price")]`;
    await this.assertInnerTextIsTruthy(ele);
  };
}
