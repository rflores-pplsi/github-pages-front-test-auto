import { expect } from "@playwright/test";
import UsersUtils from "../../utils/user.utils";
import { CheckoutPersonalInfoPage } from "./checkout-personal-info.page";

// ========================== Selectors ==================================
const txtHowWouldYouLikeToPay = "h1.translate.checkout-v3-h2";
const btnBankDraft = "span.options.right.translate";

// create instance of Page
/**
 * @export
 * @class AccountPaymentsPage
 */
export class CheckoutPaymentsPage extends CheckoutPersonalInfoPage {
  // ========================== Process Methods ============================

  // ========================== Navigate Methods ===========================
  navigateToPaymentsPage = async (): Promise<void> => {
    console.log(" - accountPaymentPage.goToPaymentsPage");
    await this.navigateToPlanalyzerCsrCheckoutOktaLogin();
    await this.loginThroughOkta();
    await this.createOrderRedirectToCheckout(
      "D2C",
      "LegalShield",
      "Alabama",
      "en-US",
      "",
      "",
      ["Legal Plan"]
    );
    await this.navigatePersonalInfoPageFromLogin(
      UsersUtils.basicUser.email,
      UsersUtils.basicUser.password
    );
    await this.changeAddress("2021 Park Pl", "Birmingham", "35203");
    await this.clickSaveAndContinueButton();
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
    } else throw new Error("No such fram");
  };
  // ========================== Assertion Methods ==========================
  assertAccoutPaymentsPage = async () => {
    await this.page.frameLocator("//iframe[@title='payment iframe']");
    const frame = this.page.frameLocator("//iframe[@title='payment iframe']");
    if (frame != null) {
      // Click on Add Payment button
      const locator = frame.locator(txtHowWouldYouLikeToPay);
      await expect(locator).toContainText("How would you like to pay?");
    } else throw new Error("No such fram");
  };
}
// iframe
