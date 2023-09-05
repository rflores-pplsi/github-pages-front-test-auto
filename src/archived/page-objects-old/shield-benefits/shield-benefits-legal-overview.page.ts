import UrlsUtils from '../../../utils/urls.utils';
import { PlanalyzerCsrCheckoutPage } from '../planalyzer/planalyzer-csr-checkout.page';

// ========================== Selectors ==================================

const LNK_PRICING_TAB = 'a:has-text("Enroll Now")';

/**
 * @export
 * @class ShieldBenefitsLegalPage
 * @extends {ShieldBenefitsLegalPage}
 */
export class ShieldBenefitsLegalOverviewPage extends PlanalyzerCsrCheckoutPage {
  // ========================== Process Methods ============================

  // ========================== Navigate Methods ===========================
  /**
   *
   *
   * @param {string} groupNameOrNumber
   * @memberof ShieldBenefitsLegalOverviewPage
   */
  navigateToShieldBenefitsGroupOverview = async (groupNameOrNumber: string): Promise<void> => {
    console.log(' - ShieldBenefitsLegalOverviewPage.navigateToGroupEnrollmentLegalPage');
    const groupUrl = `${UrlsUtils.shieldBenefits.home.url}/${groupNameOrNumber}/overview`;
    await this.page.goto(groupUrl);
  };
  // ========================== Click Methods ==============================

  /**
   *
   *
   * @memberof ShieldBenefitsLegalOverviewPage
   */
  clickShieldBenefitsPricingTab = async (): Promise<void> => {
    console.log(' - ShieldBenefitsLegalOverviewPage.clickShieldBenefitsPricingTab');
    // Click on Edit button
    await this.page.click(LNK_PRICING_TAB);
  };

  // ========================== Assertion Methods ==========================
}
