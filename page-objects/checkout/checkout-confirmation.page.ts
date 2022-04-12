import { expect } from "@playwright/test";
import { CheckoutPaymentsBankDraftPage } from "./checkout-payments-bank-draft.page";

// ========================== Selectors ==================================
const txtWelcomeToLegalshiledFamily =
  "h1.lsux-heading.confirmation-title.lsux-heading--t28";

/**
 *
 *
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
  navigateToCheckoutConfirmationPage = async (state: string): Promise<void> => {
    console.log(" - checkoutPaymentPage.navigateToCheckoutConfirmationPage");
    await this.navigateToPaymentsBankDraftPage(state);
    CheckoutConfirmationPage.pPlan = await this.fillOrderSummarypPlanValue();
    console.log(CheckoutConfirmationPage.pPlan);
    CheckoutConfirmationPage.pPlanPrice =
      await this.fillOrderSummarypPlanPriceValue();
    console.log(CheckoutConfirmationPage.pPlanPrice);
    CheckoutConfirmationPage.txtTotalLabel =
      await this.fillOrderSummarytxtTotalLabelValue();
    console.log(CheckoutConfirmationPage.txtTotalLabel);
    CheckoutConfirmationPage.txtTotalPriceLabel =
      await this.fillOrderSummarytxtTotalPriceLabelValue();
    console.log(CheckoutConfirmationPage.txtTotalPriceLabel);
    await this.fillBankDraftForm();
  };
  // ========================== Click Methods ==============================
  // ========================== Assertion Methods ==========================
  assertWelcomeToLegalshiledFamilyPage = async () => {
    console.log(
      " - checkoutConfirmationPage.assertWelcomeToLegalshiledFamilyPage"
    );
    const welcome = await this.page.waitForSelector(
      txtWelcomeToLegalshiledFamily
    );
    console.log(welcome.innerText());
    await this.assertElementContainsText(
      txtWelcomeToLegalshiledFamily,
      "Welcome to the LegalShield family!"
    );
  };
  assertOrderSummaryPlanPriceConfirmationPage = async () => {
    console.log(
      " - checkoutConfirmationPage.assertOrderSummaryPlanPriceConfirmationPage"
    );
    const planPrice = this.page.locator(
      "div.lsux-card--inset.p-6 h3.lsux-heading.plan-price.lsux-heading--t20"
    );
    await expect(planPrice).toHaveText(CheckoutConfirmationPage.pPlanPrice);
  };
  assertOrderSummaryPlanLabelConfirmationPage = async () => {
    console.log(
      " - checkoutConfirmationPage.assertOrderSummaryPlanLabelConfirmationPage"
    );
    const lblplan = this.page.locator("text=Legal Plan");
    await expect(lblplan).toHaveText(CheckoutConfirmationPage.pPlan);
  };
  assertOrderSummaryLegalShieldMembershipConfirmationPage = async () => {
    console.log(
      " - checkoutConfirmationPage.assertOrderSummaryMonthlyConfirmationPage"
    );
    const lblplan = this.page.locator("text = LegalShield Membership");
    await expect(lblplan).toHaveText("LegalShield Membership");
  };
  assertOrderSummaryMonthlyConfirmationPage = async () => {
    console.log(
      " - checkoutConfirmationPage.assertOrderSummaryMonthlyConfirmationPage"
    );
    const lblplan = this.page.locator("text = Monthly Subscription");
    await expect(lblplan).toHaveText("Monthly Subscription");
  };
}
