import { ProductDetails } from '../../tests/e2e/data/type-definitions';
import { LegalshieldTestHarnessCartComponent } from './legalshield-test-harness-cart.component'; // import the LoginPage for extension

// ========================== Selectors ==================================

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
    await this.selectFromDropDownMenu(ddlRegionSelector, region);
    // await this.clickRegionSelectDropdown();
    // await this.clickOnElement(`//select[contains(@class,"lsc_region_selector")]//option[contains(.,"${region}")]`);
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
        // Complete the questionnaire with nos
        await this.completeQualifyingQuestionnaireWithNos();
      }
      await this.page.waitForLoadState('domcontentloaded');
    }
  };

  /**
   * @param {Array<Array<string>>} productDetails
   * @memberof LegalshieldTestHarnessMenuPage
   */
  addProductsByNameAndShortCode = async (productDetails: Array<ProductDetails>) => {
    console.log(' - legalshieldTestHarnessMenuPage.addProducts');
    for (const pd of productDetails) {
      await this.clickOnElement(
        `//div[contains(@class,"plan-layout")]//h1[text()="${pd.productName}"]/following-sibling::a[contains(.,"${pd.shortCode}")]`
      );
      if (pd.productName.includes('Small Business')) {
        // Complete the questionnaire with nos
        await this.completeQualifyingQuestionnaireWithNos();
      }
      await this.page.waitForLoadState('domcontentloaded');
    }
  };

  /**
   * @memberof LegalshieldTestHarnessMenuPage
   */
  completeQualifyingQuestionnaireWithNos = async () => {
    console.log(' - legalshieldTestHarnessMenuPage.completeQualifyingQuestionnaireWithNos');
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
