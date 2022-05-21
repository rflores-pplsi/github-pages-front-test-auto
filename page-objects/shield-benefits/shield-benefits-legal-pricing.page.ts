import { PlanalyzerCsrCheckoutPage } from '../planalyzer/planalyzer-csr-checkout.page';

// ========================== Selectors ==================================
const btnState = '//div[contains(@class,"mr-5") and contains (.,"State")]//button';
const btnPaymentFrequency = '//p[contains (.,"Payment frequency")]/following-sibling::div//button';
const conAvailablePlans = '//div[contains (@class,"filters mt-5 mb-5") and contains(.,"Available")]';

/**
 * @export
 * @class ShieldBenefitsLegalPricingPage
 * @extends {BasePage}
 */
export class ShieldBenefitsLegalPricingPage extends PlanalyzerCsrCheckoutPage {
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
    await this.clickOnElement(btnState);
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
    await this.clickOnElement(btnState);
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
    await this.clickOnElement(btnState);
    await this.clickOnElement(`//div[contains(@class,"lsux-link-content--menu") and contains (.,"${state}")]`);
    await this.clickOnElement(btnPaymentFrequency);
    await this.clickOnElement(`//div[contains(@class,"lsux-link-content--menu") and contains (.,"${paymentFrequency}")]`);
    await this.waitForElementToBeVisible(conAvailablePlans);
    await this.clickCombinationPlanEnrollNowButton(planName1, planName2);
  };

  // ========================== Navigate Methods ===========================
  // ========================== Click Methods ==============================

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
