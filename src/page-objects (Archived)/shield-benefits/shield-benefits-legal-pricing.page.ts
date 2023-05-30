import { ShieldBenefitsLegalOverviewPage } from './shield-benefits-legal-overview.page';

// ========================== Selectors ==================================
const BTN_STATE_SELECT = '//div[contains(@class,"mr-custom")]//button';
const BTN_STATE_OR_PROVINCE_SELECT = '//div[contains(@class,"mr-custom")]//button';
const BTN_PAYMENT_FREQUENCY_SELECT = '//p[contains (.,"Payment frequency")]/following-sibling::div//button';
const CON_AVAILABLE_PLANS = '//div[contains (@class,"filters mt-5 mb-5") and contains(.,"Available")]';
const BTN_BEGIN_ENROLLMENT = '//button[@data-testid="enrollment-button"]';

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
  selectPlanFromShieldBenefitsPricingPage = async (state: string, paymentFrequency: string, planName: string, tierName: string): Promise<void> => {
    console.log(' - shieldBenefitsLegalPricingPage.selectPlanFromShieldBenefitsPricingPage');
    await this.clickOnElement(BTN_STATE_SELECT);
    await this.clickOnElement(`//div[contains(@class,"lsux-link-content--menu") and contains (.,"${state}")]`);
    await this.clickOnElement(BTN_PAYMENT_FREQUENCY_SELECT);
    await this.clickOnElement(`//div[contains(@class,"lsux-link-content--menu") and contains (.,"${paymentFrequency}")]`);
    await this.waitForElementToBeVisible(CON_AVAILABLE_PLANS);
    await this.clickEnrollNowButtonFromShieldBenefitsPricingPage(planName, tierName);
  };

  /**
   * @param {string} state
   * @param {string} planName
   * @param {string} tierName
   * @memberof ShieldBenefitsLegalPricingPage
   */
  selectPlanAndEnrollNoPaymentFrequency = async (state: string, planName: string, tierName: string): Promise<void> => {
    console.log(' - shieldBenefitsLegalPricingPage.selectPlanAndEnroll');
    await this.clickOnElement(BTN_STATE_SELECT);
    await this.clickOnElement(`//div[contains(@class,"lsux-link-content--menu") and contains (.,"${state}")]`);
    await this.waitForElementToBeVisible(CON_AVAILABLE_PLANS);
    await this.clickEnrollNowButtonFromShieldBenefitsPricingPage(planName, tierName);
  };

  /**
   * @param {string} state
   * @param {string} paymentFrequency
   * @param {string} planName1
   * @param {string} planName2
   * @memberof ShieldBenefitsLegalPricingPage
   */
  selectCombinationPlanAndEnroll = async (state: string, paymentFrequency: string, planName1: string, planName2: string): Promise<void> => {
    console.log(' - shieldBenefitsLegalPricingPage.selectCombinationPlanAndEnroll');
    await this.clickOnElement(BTN_STATE_SELECT);
    await this.clickOnElement(`//div[contains(@class,"lsux-link-content--menu") and contains (.,"${state}")]`);
    await this.clickOnElement(BTN_PAYMENT_FREQUENCY_SELECT);
    await this.clickOnElement(`//div[contains(@class,"lsux-link-content--menu") and contains (.,"${paymentFrequency}")]`);
    await this.waitForElementToBeVisible(CON_AVAILABLE_PLANS);
    await this.clickCombinationPlanEnrollNowButton(planName1, planName2);
  };

  /**
   * @param {string} province
   * @memberof ShieldBenefitsLegalPricingPage
   */
  selectProvince = async (province: string): Promise<void> => {
    console.log(' - shieldBenefitsLegalPricingPage.selectPProvince');
    await this.clickStateOrProvinceSelectDropdown();
    await this.clickOnElement(`//div[contains(@class,"lsux-link-content lsux-link-content--menu py-3 px-4") and contains (.,"${province}")]`);
    await this.waitForElementToBeVisible(CON_AVAILABLE_PLANS);
  };

  /**
   * @param {string} stateOrProvince
   * @memberof ShieldBenefitsLegalPricingPage
   */
  selectStateOrProvince = async (stateOrProvince: string): Promise<void> => {
    console.log(' - shieldBenefitsLegalPricingPage.selectState');
    await this.clickStateOrProvinceSelectDropdown();
    await this.clickOnElement(`//div[contains(@class,"lsux-link-content--menu") and contains (.,"${stateOrProvince}")]`);
  };

  /**
   * @param {string} paymentFrequency
   * @memberof ShieldBenefitsLegalPricingPage
   */
  selectPaymentFrequency = async (paymentFrequency: string): Promise<void> => {
    console.log(' - shieldBenefitsLegalPricingPage.selectPaymentFrequency');
    await this.clickPaymentFrequencyDropdown();
    await this.clickOnElement(`//div[contains(@class,"lsux-link-content--menu") and contains (.,"${paymentFrequency}")]`);
  };

  // ========================== Navigate Methods ===========================
  // ========================== Click Methods ==============================

  /**
   *
   *
   * @memberof ShieldBenefitsLegalPricingPage
   */
  clickBeginEnrollmentButton = async (): Promise<void> => {
    console.log(' - shieldBenefitsLegalPricingPage.clickBeginEnrollmentButton');
    await this.clickOnElement(BTN_BEGIN_ENROLLMENT);
  };

  /**
   * @memberof ShieldBenefitsLegalPricingPage
   */
  clickStateOrProvinceSelectDropdown = async (): Promise<void> => {
    console.log(' - shieldBenefitsLegalPricingPage.clickStateOrProvinceSelectDropdown');
    await this.clickOnElement(BTN_STATE_OR_PROVINCE_SELECT);
  };

  /**
   * @memberof ShieldBenefitsLegalPricingPage
   */
  clickPaymentFrequencyDropdown = async (): Promise<void> => {
    console.log(' - shieldBenefitsLegalPricingPage.clickPaymentFrequencyDropdown');
    await this.clickOnElement(BTN_PAYMENT_FREQUENCY_SELECT);
  };

  /**
   *
   *
   * @memberof ShieldBenefitsLegalPricingPage
   */
  clickPaymentFrequencyButton = async (): Promise<void> => {
    console.log(' - shieldBenefitsLegalPricingPage.clickPaymentFrequencyButton');
    await this.clickOnElement(BTN_PAYMENT_FREQUENCY_SELECT);
  };

  /**
   * @param {string} planName
   * @param {string} tierName
   * @memberof ShieldBenefitsLegalPricingPage
   */
  clickEnrollNowButtonFromShieldBenefitsPricingPage = async (planName: string, tierName: string): Promise<void> => {
    console.log(' - shieldBenefitsLegalPricingPage.clickEnrollNowButtonFromShieldBenefitsPricingPage');
    // Click on Enroll Now button for selected Plan
    await this.waitForElementToBeVisible(CON_AVAILABLE_PLANS);
    await this.clickOnElement(`//div[@class="groupTokenCard" and contains(.,"${planName}") and contains(.,"${tierName}")]//button`);
  };

  /**
   * @param {string} stateOrProvince
   * @param {string} payFrequency
   * @memberof ShieldBenefitsLegalPricingPage
   */
  // TODO research how to capture only a specific call - this may or not be the right approach
  selectStateOrProvinceAndFrequencyAndCaptureResponse = async (stateOrProvince: string, payFrequency: string): Promise<void> => {
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
  clickPricingPageSinglePlanEnrollNowButton = async (planSupplementName: string): Promise<void> => {
    console.log(' - shieldBenefitsLegalPricingPage.clickPricingPageSinglePlanEnrollNowButton');
    await this.waitForElementToBeVisible(CON_AVAILABLE_PLANS);
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
  clickCombinationPlanEnrollNowButton = async (planName1: string, planName2: string): Promise<void> => {
    console.log(' - shieldBenefitsLegalPricingPage.clickCombinationPlanEnrollNowButton');
    // Click on Enroll Now button for selected Plan
    await this.clickOnElement(`//div[@class="groupTokenCardCombine" and contains(.,"${planName1}") and contains(.,"${planName2}")]//button`);
  };
  // ========================== Assertion Methods ==========================
}
