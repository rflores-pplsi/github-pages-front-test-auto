import { ShieldBenefitsLegalOverviewPage } from '../shield-benefits/shield-benefits-legal-overview.page';

// ========================== Selectors ==================================
const btnStateSelect = 'button:has-text("Select")';
const btnProvinceSelect = 'button:has-text("Select")';
const btnPaymentFrequency = '//p[contains (.,"Payment frequency")]/following-sibling::div//button';
const conAvailablePlans = '//div[contains (@class,"filters mt-5 mb-5") and contains(.,"Available")]';

/**
 *
 *
 * @export
 * @class ShieldBenefitsLegalPricingPage
 * @extends {ShieldBenefitsLegalOverviewPage}
 */
export class ShieldBenefitsLegalPricingPage extends ShieldBenefitsLegalOverviewPage {
  // ========================== Process Methods ============================

  /**
   * @param {string} state
   * @param {string} paymentFrequency
   * @param {string} planName
   * @param {string} tierName
   * @memberof ShieldBenefitsLegalPricingPage
   */
  selectPlanAndEnroll = async (state: string, paymentFrequency: string, planName: string, tierName: string) => {
    console.log(' - shieldBenefitsLegalPricingPage.selectPlanAndEnroll');
    await this.clickOnElement(btnStateSelect);
    await this.clickOnElement(`//div[contains(@class,"lsux-link-content--menu") and contains (.,"${state}")]`);
    await this.clickOnElement(btnPaymentFrequency);
    await this.clickOnElement(`//div[contains(@class,"lsux-link-content--menu") and contains (.,"${paymentFrequency}")]`);
    await this.waitForElementToBeVisible(conAvailablePlans);
    await this.clickIndividualPlanEnrollNowButton(planName, tierName);
  };

  /**
   * @param {string} state
   * @param {string} planName
   * @param {string} tierName
   * @memberof ShieldBenefitsLegalPricingPage
   */
  selectPlanAndEnrollNoPaymentFrequency = async (state: string, planName: string, tierName: string) => {
    console.log(' - shieldBenefitsLegalPricingPage.selectPlanAndEnroll');
    await this.clickOnElement(btnStateSelect);
    await this.clickOnElement(`//div[contains(@class,"lsux-link-content--menu") and contains (.,"${state}")]`);
    await this.waitForElementToBeVisible(conAvailablePlans);
    await this.clickIndividualPlanEnrollNowButton(planName, tierName);
  };

  /**
   * @param {string} state
   * @param {string} paymentFrequency
   * @param {string} planName1
   * @param {string} planName2
   * @memberof ShieldBenefitsLegalPricingPage
   */
  selectCombinationPlanAndEnroll = async (state: string, paymentFrequency: string, planName1: string, planName2: string) => {
    console.log(' - shieldBenefitsLegalPricingPage.selectCombinationPlanAndEnroll');
    await this.clickOnElement(btnStateSelect);
    await this.clickOnElement(`//div[contains(@class,"lsux-link-content--menu") and contains (.,"${state}")]`);
    await this.clickOnElement(btnPaymentFrequency);
    await this.clickOnElement(`//div[contains(@class,"lsux-link-content--menu") and contains (.,"${paymentFrequency}")]`);
    await this.waitForElementToBeVisible(conAvailablePlans);
    await this.clickCombinationPlanEnrollNowButton(planName1, planName2);
  };

  /**
   *
   *
   * @param {string} province
   * @memberof ShieldBenefitsLegalPricingPage
   */
  selectProvince = async (province: string) => {
    console.log(' - shieldBenefitsLegalPricingPage.selectPProvince');
    await this.clickProvinceSelectButton();
    await this.clickOnElement(`//div[contains(@class,"lsux-link-content lsux-link-content--menu py-3 px-4") and contains (.,"${province}")]`);
    await this.waitForElementToBeVisible(conAvailablePlans);
  };

  // ========================== Navigate Methods ===========================
  // ========================== Click Methods ==============================

  /**
   *
   *
   * @memberof ShieldBenefitsLegalPricingPage
   */
  clickProvinceSelectButton = async () => {
    console.log(' - shieldBenefitsLegalPricingPage.clickProvinceSelectButton');
    await this.clickOnElement(btnProvinceSelect);
  };

  /**
   *
   *
   * @memberof ShieldBenefitsLegalPricingPage
   */
  clickPaymentFrequencyButton = async () => {
    console.log(' - shieldBenefitsLegalPricingPage.clickPaymentFrequencyButton');
    await this.clickOnElement(btnPaymentFrequency);
  };

  /**
   * @param {string} planName
   * @param {string} tierName
   * @memberof ShieldBenefitsLegalPricingPage
   */
  clickIndividualPlanEnrollNowButton = async (planName: string, tierName: string) => {
    console.log(' - shieldBenefitsLegalPricingPage.clickIndividualPlanEnrollNowButton');
    // Click on Enroll Now button for selected Plan
    await this.clickOnElement(`//div[@class="groupTokenCard" and contains(.,"${planName}") and contains(.,"${tierName}")]//button`);
  };

  clickPricingPageSinglePlanEnrollNowButton = async (planSupplementName: Array<Array<string>>) => {
    console.log(' - shieldBenefitsLegalPricingPage.clickPricingPageSinglePlanEnrollNowButton');
    if (planSupplementName.includes('+')) {
      if (planSupplementName.includes(',')) {
        // 2 supplement case (if group configured with 3 or more we need to revisit this approach)
        await this.clickOnElement(`//div[@class="groupTokenCard" and contains(.,"${planSupplementName}")]//button`);
      } else {
        // 1 supplement case
        await this.clickOnElement(`//div[@class="groupTokenCard" and contains(.,"${planSupplementName}")and not(contains(.,','))]//button`);
      }
    } else {
      // 0 supplement case
      await this.clickOnElement(`//div[@class="groupTokenCard" and contains(.,"${planSupplementName}") and not(contains(.,'+'))]//button`);
    }
  };

  /**
   * @param {string} planName1
   * @param {string} planName2
   * @memberof ShieldBenefitsLegalPricingPage
   */
  clickCombinationPlanEnrollNowButton = async (planName1: string, planName2: string) => {
    console.log(' - shieldBenefitsLegalPricingPage.clickCombinationPlanEnrollNowButton');
    // Click on Enroll Now button for selected Plan
    await this.clickOnElement(`//div[@class="groupTokenCardCombine" and contains(.,"${planName1}") and contains(.,"${planName2}")]//button`);
  };
  // ========================== Assertion Methods ==========================
}
