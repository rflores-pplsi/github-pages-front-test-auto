import { BasePage } from '../base.page';

// ========================== Selectors ==================================
const BTN_ENROLL = 'a:has-text("Enroll Now")';

/**
 * @export
 * @class ShieldBenefitsIdentityEnrollPage
 * @extends {BasePage}
 */
export class ShieldBenefitsIdentityEnrollPage extends BasePage {
  // ========================== Process Methods ============================
  // ========================== Navigate Methods ===========================
  // ========================== Click Methods ==============================
  clickEnrollNowButton = async () => {
    console.log(' - shieldBenefitsIdentityEnrollPage.clickEnrollButton');
    // Click on Enroll Now button to reach the pricing page
    await this.clickOnElement(BTN_ENROLL);
  };
  // ========================== Assertion Methods ==========================
}
