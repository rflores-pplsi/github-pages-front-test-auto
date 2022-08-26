import { ShieldBenefitsLegalOverviewPage } from '../shield-benefits/shield-benefits-legal-overview.page';

// ========================== Selectors ==================================
const btnStateSelect = '//div[contains(@class,"mr-custom")]//button';
const btnStateOrProvinceSelect = '//div[contains(@class,"mr-custom")]//button';
const btnPaymentFrequencySelect = '//p[contains (.,"Payment frequency")]/following-sibling::div//button';
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
  selectPlanFromShieldBenefitsPricingPage = async (state: string, paymentFrequency: string, planName: string, tierName: string) => {
    console.log(' - shieldBenefitsLegalPricingPage.selectPlanFromShieldBenefitsPricingPage');
    await this.clickOnElement(btnStateSelect);
    await this.clickOnElement(`//div[contains(@class,"lsux-link-content--menu") and contains (.,"${state}")]`);
    await this.clickOnElement(btnPaymentFrequencySelect);
    await this.clickOnElement(`//div[contains(@class,"lsux-link-content--menu") and contains (.,"${paymentFrequency}")]`);
    await this.waitForElementToBeVisible(conAvailablePlans);
    await this.clickEnrollNowButtonFromShieldBenefitsPricingPage(planName, tierName);
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
    await this.clickEnrollNowButtonFromShieldBenefitsPricingPage(planName, tierName);
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
    await this.clickOnElement(btnPaymentFrequencySelect);
    await this.clickOnElement(`//div[contains(@class,"lsux-link-content--menu") and contains (.,"${paymentFrequency}")]`);
    await this.waitForElementToBeVisible(conAvailablePlans);
    await this.clickCombinationPlanEnrollNowButton(planName1, planName2);
  };

  /**
   * @param {string} province
   * @memberof ShieldBenefitsLegalPricingPage
   */
  selectProvince = async (province: string) => {
    console.log(' - shieldBenefitsLegalPricingPage.selectPProvince');
    await this.clickStateOrProvinceSelectDropdown();
    await this.clickOnElement(`//div[contains(@class,"lsux-link-content lsux-link-content--menu py-3 px-4") and contains (.,"${province}")]`);
    await this.waitForElementToBeVisible(conAvailablePlans);
  };

  /**
   * @param {string} stateOrProvince
   * @memberof ShieldBenefitsLegalPricingPage
   */
  selectStateOrProvince = async (stateOrProvince: string) => {
    console.log(' - shieldBenefitsLegalPricingPage.selectState');
    await this.clickStateOrProvinceSelectDropdown();
    await this.clickOnElement(`//div[contains(@class,"lsux-link-content--menu") and contains (.,"${stateOrProvince}")]`);
  };

  /**
   * @param {string} paymentFrequency
   * @memberof ShieldBenefitsLegalPricingPage
   */
  selectPaymentFrequency = async (paymentFrequency: string) => {
    console.log(' - shieldBenefitsLegalPricingPage.selectPaymentFrequency');
    await this.clickPaymentFrequencyDropdown();
    await this.clickOnElement(`//div[contains(@class,"lsux-link-content--menu") and contains (.,"${paymentFrequency}")]`);
  };

  // ========================== Navigate Methods ===========================
  // ========================== Click Methods ==============================

  /**
   * @memberof ShieldBenefitsLegalPricingPage
   */
  clickStateOrProvinceSelectDropdown = async () => {
    console.log(' - shieldBenefitsLegalPricingPage.clickStateOrProvinceSelectDropdown');
    await this.clickOnElement(btnStateOrProvinceSelect);
  };

  /**
   * @memberof ShieldBenefitsLegalPricingPage
   */
  clickPaymentFrequencyDropdown = async () => {
    console.log(' - shieldBenefitsLegalPricingPage.clickPaymentFrequencyDropdown');
    await this.clickOnElement(btnPaymentFrequencySelect);
  };

  /**
   *
   *
   * @memberof ShieldBenefitsLegalPricingPage
   */
  clickPaymentFrequencyButton = async () => {
    console.log(' - shieldBenefitsLegalPricingPage.clickPaymentFrequencyButton');
    await this.clickOnElement(btnPaymentFrequencySelect);
  };

  /**
   * @param {string} planName
   * @param {string} tierName
   * @memberof ShieldBenefitsLegalPricingPage
   */
  clickEnrollNowButtonFromShieldBenefitsPricingPage = async (planName: string, tierName: string) => {
    console.log(' - shieldBenefitsLegalPricingPage.clickEnrollNowButtonFromShieldBenefitsPricingPage');
    // Click on Enroll Now button for selected Plan
    await this.waitForElementToBeVisible(conAvailablePlans);
    await this.page.pause();
    await this.clickOnElement(`//div[@class="groupTokenCard" and contains(.,"${planName}") and contains(.,"${tierName}")]//button`);
  };

  /**
   * @param {string} stateOrProvince
   * @param {string} payFrequency
   * @memberof ShieldBenefitsLegalPricingPage
   */
  // TODO research how to capture only a specific call - this may or not be the right approach
  selectStateOrProvinceAndFrequencyAndCaptureResponse = async (stateOrProvince: string, payFrequency: string) => {
    const [response] = await Promise.all([
      await this.page.waitForResponse((res) => res.status() == 200 && res.url().includes('products/benefits-and-supplements')),
      await this.selectStateOrProvince(stateOrProvince),
      await this.selectPaymentFrequency(payFrequency),
    ]);
    console.log(response.json);
  };

  /**
   * @param {string} planSupplementName
   * @memberof ShieldBenefitsLegalPricingPage
   */
  clickPricingPageSinglePlanEnrollNowButton = async (planSupplementName: string) => {
    console.log(' - shieldBenefitsLegalPricingPage.clickPricingPageSinglePlanEnrollNowButton');
    await this.waitForElementToBeVisible(conAvailablePlans);
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
