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
export class LegalshieldTestHarnessMenuPage extends LoginPage {
  // ========================== Process Methods ============================

  addProducts = async (region: string, productNames: Object) => {
    console.log(' -legalshieldCanadaTestHarnessMenuPage.clickProductButton');
    for (const pn of productNames) {
    //TODO: Loop through productNames and click on the button associated with them as many times as needed
    await this.clickOnElement(`//div[contains(@class,"plan-layout")]//h1[text()="${productName}"]/following-sibling::a`);
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
