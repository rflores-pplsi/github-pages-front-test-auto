import { LegalshieldTestHarnessCartComponent } from './legalshield-test-harness-cart.component'; // import the LoginPage for extension

// ========================== Selectors ==================================

const ddlRegionSelector = '//select[contains(@class,"lsc_region_selector")]';
const btnPubliclyTradedNo: string = '#traded-company-no';
const btnNonProfitNo: string = '#non-profit-no';
const btnAddToCart: string = '#add-to-cart-btn';
const icnCart: string = '//div[@id="lsc-header-cart-icon-desktop"]//img';

/**
 * @export
 * @class LegalshieldTestHarnessMenuPage
 * @extends {LegalshieldTestHarnessCartComponent}
 */
export class LegalshieldTestHarnessMenuPage extends LegalshieldTestHarnessCartComponent {
  // ========================== Process Methods ============================

  /**
   * @param {string} region
   * @memberof LegalshieldTestHarnessMenuPage
   */
  selectRegionFromDropdown = async (region: string) => {
    console.log(' - legalshieldTestHarnessMenuPage.selectRegionFromDropdown');
    await this.clickRegionSelectDropdown();
    await this.clickOnElement(`//select[contains(@class,"lsc_region_selector")]//option[contains(.,"${region}")]`);
  };

  /**
   * @param {Array<Array<string>>} productNamesAndCosts
   * @memberof LegalshieldTestHarnessMenuPage
   */
  addProducts = async (productNamesAndCosts: Array<Array<string>>) => {
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

  /**
   * @memberof LegalshieldTestHarnessMenuPage
   */
  completeQualifyingQuestionairreWithNos = async () => {
    console.log(' - legalshieldTestHarnessMenuPage.completeQualifyingQuestionairreWithNos');
    await this.clickPubliclyTradedNoRadioButton();
    await this.clickNonProfitNoRadioButton();
    await this.clickAddToCartButton();
  };
  // ========================== Navigate Methods ===========================
  // ========================== Click Methods ==============================

  /**
   * @param {string} productName
   * @memberof LegalshieldTestHarnessMenuPage
   */
  clickProductButton = async (productName: string) => {
    console.log(' - legalshieldTestHarnessMenuPage.clickProductButton - ' + productName);
    await this.clickOnElement(`//div[contains(@class,"plan-layout")]//h1[text()="${productName}"]/following-sibling::a`);
    await this.page.waitForLoadState('domcontentloaded');
  };

  clickCartIcon = async () => {
    console.log(' - legalshieldTestHarnessMenuPage.clickCartIcon');
    await this.clickOnElement(icnCart);
  };

  /**
   * @memberof LegalshieldTestHarnessMenuPage
   */
  clickRegionSelectDropdown = async () => {
    console.log(' - LegalShieldQualifyingContainerComponent.clickRegionSelectDropdown');
    await this.clickOnElement(ddlRegionSelector);
  };

  /**
   * @memberof LegalshieldTestHarnessMenuPage
   */
  clickPubliclyTradedNoRadioButton = async () => {
    console.log(' - LegalShieldQualifyingContainerComponent.clickPubliclyTradedNoRadioButton');
    await this.clickOnElement(btnPubliclyTradedNo);
  };

  /**
   * @memberof LegalshieldTestHarnessMenuPage
   */
  clickNonProfitNoRadioButton = async () => {
    console.log(' - LegalShieldQualifyingContainerComponent.clickNonProfitNoRadioButton');
    await this.clickOnElement(btnNonProfitNo);
  };

  /**
   * @memberof LegalshieldTestHarnessMenuPage
   */
  clickAddToCartButton = async () => {
    console.log(' - LegalShieldQualifyingContainerComponent.clickAddToCartButton');
    await this.clickOnElement(btnAddToCart);
  };
  // ========================== Assertion Methods ==========================
}
