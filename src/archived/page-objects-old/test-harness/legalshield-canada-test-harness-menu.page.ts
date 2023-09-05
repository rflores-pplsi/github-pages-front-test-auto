import { LoginPage } from '../login/login.page'; // import the LoginPage for extension

// ========================== Selectors ==================================

/**
 *
 *
 * @export
 * @class idshieldTestHarnessMenuPage
 * @extends {LoginPage}
 */
export class LegalshieldCanadaTestHarnessMenuPage extends LoginPage {
  // ========================== Process Methods ============================

  addProducts = async (): Promise<void> => {
    console.log(' -legalshieldCanadaTestHarnessMenuPage.clickProductButton');
    // await this.clickOnElement();
    await this.page.waitForLoadState('domcontentloaded');
  };
  // ========================== Navigate Methods ===========================
  // ========================== Click Methods ==============================

  clickProductButton = async (): Promise<void> => {
    console.log(' -legalshieldCanadaTestHarnessMenuPage.clickProductButton');
    // await this.clickOnElement();
    await this.page.waitForLoadState('domcontentloaded');
  };
  // ========================== Assertion Methods ==========================
}
