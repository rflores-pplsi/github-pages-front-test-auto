import { ProductDetails } from '../../tests/e2e/data-driven/data/type-definitions';
import { LegalshieldTestHarnessCartComponent } from './legalshield-test-harness-cart.component'; // import the LoginPage for extension

// ========================== Selectors ==================================

const BTN_PUBLICLY_TRADED_NO = '#traded-company-no';
const BTN_NON_PROFIT_NO = '#non-profit-no';
const BTN_ADD_TO_CART = '#add-to-cart-btn';
const ICN_CART = '//div[@id="lsc-header-cart-icon-desktop"]//img';
const DDL_REGION_SELECTOR = '//select[contains(@class,"lsc_region_selector")]';

/**
 * @export
 * @class LegalshieldTestHarnessMenuPage
 * @augments {LegalshieldTestHarnessCartComponent}
 */
export class LegalshieldTestHarnessMenuPage extends LegalshieldTestHarnessCartComponent {
  // ========================== Process Methods ============================

  /**
   * @param {string} region
   * @memberof LegalshieldTestHarnessMenuPage
   */
  selectRegionFromDropdown = async (region: string): Promise<void> => {
    console.log(' - legalshieldTestHarnessMenuPage.selectRegionFromDropdown');
    await this.selectFromDropDownMenu(DDL_REGION_SELECTOR, region);
    // await this.clickRegionSelectDropdown();
    // await this.clickOnElement(`//select[contains(@class,"lsc_region_selector")]//option[contains(.,"${region}")]`);
  };

  /**
   *
   *
   * @param {Array<Array<string>>} productNamesAndCosts
   * @memberof LegalshieldTestHarnessMenuPage
   */
  addProducts = async (productNamesAndCosts: Array<Array<string>>): Promise<void> => {
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
  addProductsByNameAndShortCode = async (productDetails: Array<ProductDetails>): Promise<void> => {
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
  completeQualifyingQuestionnaireWithNos = async (): Promise<void> => {
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
  clickProductButton = async (productName: string): Promise<void> => {
    console.log(' - legalshieldTestHarnessMenuPage.clickProductButton - ' + productName);
    await this.clickOnElement(`//div[contains(@class,"plan-layout")]//h1[text()="${productName}"]/following-sibling::a`);
    await this.page.waitForLoadState('domcontentloaded');
  };

  clickProductButtonByShortCode = async (shortCode: string): Promise<void> => {
    console.log(' - legalshieldTestHarnessMenuPage.clickProductButtonByShortCode - ' + shortCode);
    await this.clickOnElement(`//div[contains(@class,"plan-layout")]//a[contains(.,"${shortCode}")]`);
    await this.page.waitForLoadState('domcontentloaded');
  };

  clickCartIcon = async (): Promise<void> => {
    console.log(' - legalshieldTestHarnessMenuPage.clickCartIcon');
    await this.clickOnElement(ICN_CART);
  };

  /**
   * @memberof LegalshieldTestHarnessMenuPage
   */
  clickRegionSelectDropdown = async (): Promise<void> => {
    console.log(' - LegalShieldQualifyingContainerComponent.clickRegionSelectDropdown');
    await this.clickOnElement(DDL_REGION_SELECTOR);
  };

  /**
   * @memberof LegalshieldTestHarnessMenuPage
   */
  clickPubliclyTradedNoRadioButton = async (): Promise<void> => {
    console.log(' - LegalShieldQualifyingContainerComponent.clickPubliclyTradedNoRadioButton');
    await this.clickOnElement(BTN_PUBLICLY_TRADED_NO);
  };

  /**
   * @memberof LegalshieldTestHarnessMenuPage
   */
  clickNonProfitNoRadioButton = async (): Promise<void> => {
    console.log(' - LegalShieldQualifyingContainerComponent.clickNonProfitNoRadioButton');
    await this.clickOnElement(BTN_NON_PROFIT_NO);
  };

  /**
   * @memberof LegalshieldTestHarnessMenuPage
   */
  clickAddToCartButton = async (): Promise<void> => {
    console.log(' - LegalShieldQualifyingContainerComponent.clickAddToCartButton');
    await this.clickOnElement(BTN_ADD_TO_CART);
  };
  // ========================== Assertion Methods ==========================
}
