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
  // ========================== Process Methods ============================
  // ========================== Navigate Methods ===========================
  navigateToCheckoutConfirmationPage = async (state: string): Promise<void> => {
    console.log(" - checkoutPaymentPage.navigateToCheckoutConfirmationPage");
    await this.navigateToPaymentsBankDraftPage(state);
    await this.fillBankDraftForm();
    // await this.clickBankDraftBtn();
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
}
