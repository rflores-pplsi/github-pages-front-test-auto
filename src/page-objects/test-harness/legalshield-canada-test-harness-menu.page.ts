import { LoginPage } from '../login/login.page'; // import the LoginPage for extension

// ========================== Selectors ==================================

const ddlRegionSelector = '//select[contains(@class,"lsc_region_selector")]';

/**
 *
 *
 * @export
 * @class idshieldTestHarnessMenuPage
 * @extends {LoginPage}
 */
export class LegalshieldCanadaTestHarnessMenuPage extends LoginPage {
  // ========================== Process Methods ============================

  addProducts = async (productNames: Promise<Object>) => {
    console.log(' -legalshieldCanadaTestHarnessMenuPage.clickProductButton');
    await this.clickOnElement();
    await this.page.waitForLoadState('domcontentloaded');
  };
  // ========================== Navigate Methods ===========================
  // ========================== Click Methods ==============================

  clickProductButton = async (productName: string) => {
    console.log(' -legalshieldCanadaTestHarnessMenuPage.clickProductButton');
    await this.clickOnElement();
    await this.page.waitForLoadState('domcontentloaded');
  };
  // ========================== Assertion Methods ==========================
}
