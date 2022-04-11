import { LoginPage } from '../login/login.page';

// ========================== Selectors ==================================
const btnState = '//div[contains(@class,"mr-5") and contains (.,"State")]//button';
const btnPaymentFrequency = '//p[contains (.,"Payment frequency")]/following-sibling::div//button';
const conAvailablePlans = '//div[contains (@class,"filters mt-5 mb-5") and contains(.,"Available")]';

/**
 * @export
 * @class ShieldBenefitsIdentityPricingPage
 * @extends {BasePage}
 */
export class ShieldBenefitsIdentityPricingPage extends LoginPage {
  // ========================== Process Methods ============================
  /**
   * @param {string} state
   * @param {string} paymentFrequency
   * @param {string} planName
   * @memberof ShieldBenefitsLegalPricingPage
   */
  selectPlanAndEnroll = async (state: string, paymentFrequency: string, planName: string) => {
    console.log(' - shieldBenefitsLegalPricingPage.selectPlanAndEnroll');
    await this.clickOnElement(btnState);
    await this.clickOnElement(`//div[contains(@class,"lsux-link-content--menu") and contains (.,"${state}")]`);
    await this.clickOnElement(btnPaymentFrequency);
    await this.clickOnElement(`//div[contains(@class,"lsux-link-content--menu") and contains (.,"${paymentFrequency}")]`);
    await this.waitForElementToBeVisible(conAvailablePlans);
    await this.clickIndividualPlanEnrollNowButton(planName);
  };

  // ========================== Navigate Methods ===========================
  // ========================== Click Methods ==============================
  /**
   * @param {string} planName
   * @memberof ShieldBenefitsLegalPricingPage
   */
  clickIndividualPlanEnrollNowButton = async (planName: string) => {
    console.log(' - shieldBenefitsLegalPricingPage.clickIndividualPlanEnrollNowButton');
    // Click on Enroll Now button for selected Plan
    await this.clickOnElement(`//div[@class="groupTokenCard" and contains(.,"${planName}") ]//button`);
  };

  // ========================== Assertion Methods ==========================
}
