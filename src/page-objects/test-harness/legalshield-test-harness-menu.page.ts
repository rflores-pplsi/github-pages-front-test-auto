import { LegalshieldTestHarnessCartComponent } from './legalshield-test-harness-cart.component'; // import the LoginPage for extension

// ========================== Selectors ==================================

const ddlRegionSelector = '//select[contains(@class,"lsc_region_selector")]';
const btnPubliclyTradedNo: string = '#traded-company-no';
const btnNonProfitNo: string = '#non-profit-no';
const btnAddToCart: string = '#add-to-cart-btn';

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
    console.log(' - legalshieldTestHarnessMenuPage.addProducts');
    for (const pn of productNamesAndCosts) {
      // TODO: Loop through productNames and click on the button associated with them as many times as needed

      await this.clickProductButton(pn[0]);
      if (pn[0].includes('Small Business')) {
        // Complete the questionairre with nos
        await this.completeQualifyingQuestionairreWithNos();
      }
      await this.page.waitForLoadState('domcontentloaded');
    }
  };

  completeQualifyingQuestionairreWithNos = async () => {
    console.log(' - legalshieldTestHarnessMenuPage.completeQualifyingQuestionairreWithNos');
    await this.clickPubliclyTradedNoRadioButton();
    await this.clickNonProfitNoRadioButton();
    await this.clickAddToCartButton();
  };
  // ========================== Navigate Methods ===========================
  // ========================== Click Methods ==============================

  clickProductButton = async (productName: string) => {
    console.log(' - legalshieldTestHarnessMenuPage.clickProductButton - ' + productName);
    await this.clickOnElement(`//div[contains(@class,"plan-layout")]//h1[text()="${productName}"]/following-sibling::a`);
    await this.page.waitForLoadState('domcontentloaded');
  };

  clickPubliclyTradedNoRadioButton = async () => {
    console.log(' - LegalShieldQualifyingContainerComponent.clickPubliclyTradedNoRadioButton');
    await this.clickOnElement(btnPubliclyTradedNo);
  };

  clickNonProfitNoRadioButton = async () => {
    console.log(' - LegalShieldQualifyingContainerComponent.clickNonProfitNoRadioButton');
    await this.clickOnElement(btnNonProfitNo);
  };

  clickAddToCartButton = async () => {
    console.log(' - LegalShieldQualifyingContainerComponent.clickAddToCartButton');
    await this.clickOnElement(btnAddToCart);
  };
  // ========================== Assertion Methods ==========================
}
