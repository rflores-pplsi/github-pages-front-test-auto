import { LoginPage } from '../login/login.page'; // import the LoginPage for extension

// ========================== Selectors ==================================

const btnCheckout = '#checkout-btn';

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

  clickCheckoutButton = async () => {
    console.log(' -legalshieldCanadaTestHarnessCartComponent.clickCheckoutButton');
    await this.clickOnElement(btnCheckout);
  };
  // ========================== Assertion Methods ==========================
}
