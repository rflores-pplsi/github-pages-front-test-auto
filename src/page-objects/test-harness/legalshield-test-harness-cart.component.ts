import { LoginPage } from '../login/login.page'; // import the LoginPage for extension

// ========================== Selectors ==================================

const BTN_CHECKOUT = '#checkout-btn';

/**
 *
 *
 * @export
 * @class idshieldTestHarnessMenuPage
 * @extends {LoginPage}
 */
export class LegalshieldTestHarnessCartComponent extends LoginPage {
  // ========================== Process Methods ============================
  // ========================== Navigate Methods ===========================
  // ========================== Click Methods ==============================

  clickCheckoutButton = async (): Promise<void> => {
    console.log(' - legalshieldTestHarnessCartComponent.clickCheckoutButton');
    await this.clickOnElement(BTN_CHECKOUT);
  };
  // ========================== Assertion Methods ==========================
}
