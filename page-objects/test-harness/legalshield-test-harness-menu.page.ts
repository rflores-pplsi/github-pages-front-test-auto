import { LegalshieldTestHarnessCartComponent } from './legalshield-test-harness-cart.component'; // import the LoginPage for extension

// ========================== Selectors ==================================

const ddlRegionSelector = '//select[contains(@class,"lsc_region_selector")]';

/**
 *
 *
 * @export
 * @class idshieldTestHarnessMenuPage
 * @extends {LoginPage}
 */
export class LegalshieldTestHarnessMenuPage extends LegalshieldTestHarnessCartComponent {
  // ========================== Process Methods ============================

  addProducts = async (region: string, productNamesAndCosts: Array<Array<string>>) => {
    console.log(' -legalshieldCanadaTestHarnessMenuPage.addProducts');
    for (const pn of productNamesAndCosts) {
      // TODO: Loop through productNames and click on the button associated with them as many times as needed
      console.log(pn[0], pn[1]);
      await this.clickProductButton(pn[0]);
      await this.page.waitForLoadState('domcontentloaded');
    }
  };
  // ========================== Navigate Methods ===========================
  // ========================== Click Methods ==============================

  clickProductButton = async (productName: string) => {
    console.log(' -legalshieldCanadaTestHarnessMenuPage.clickProductButton');
    await this.clickOnElement(`//div[contains(@class,"plan-layout")]//h1[text()="${productName}"]/following-sibling::a`);
    await this.page.waitForLoadState('domcontentloaded');
  };
  // ========================== Assertion Methods ==========================
}
