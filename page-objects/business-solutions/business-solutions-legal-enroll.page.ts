import { BasePage } from '../base.page';

// ========================== Selectors ==================================
const btnEnroll = 'a:has-text("Enroll Now")';

/**
 * @export
 * @class BusinessSolutionsIdentityEnrollPage
 * @extends {BasePage}
 */
export class BusinessSolutionsIdentityEnrollPage extends BasePage {
  // ========================== Process Methods ============================
  // ========================== Navigate Methods ===========================
  // ========================== Click Methods ==============================
  clickEnrollNowButton = async () => {
    console.log(' - businessSolutionsIdentityEnrollPage.clickEnrollButton');
    // Click on Plans Link from Accounts Navigation
    await this.clickOnElement(btnEnroll);
  };
  // ========================== Assertion Methods ==========================
}
