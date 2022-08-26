import { expect } from '@playwright/test';
import { CheckoutPaymentsBankDraftPage } from './checkout-payments-bank-draft.page';

// ========================== Selectors ==================================
const txtWelcomeToLegalshiledFamily = 'h1.lsux-heading.confirmation-title.lsux-heading--t28';
const btnCompleteEnrollment = 'button:has-text("COMPLETE ENROLLMENT")';
const chkAgreement = '//div[contains(@class,"lsux-cb-container__cb   margin-right")]';
const lblMemberNumber = '//h3[contains(@class,"member-number") and contains(.,"Member number")]';
const conMembershipWrapper = '//div[contains(@class,"membership-wrapper")]';
const txaDisclaimer = '//div[contains(@class,"group-auth")]//span[string-length(text()) > 0]';
const txaTermsOfServiceLanguage = '//span[contains(@class,"tos-disclaimer")]';
const lnkTermsOfService = '//a[contains(@class,"tos-link")]';

// eslint-disable-next-line valid-jsdoc
/**
 * @export
 * @class CheckoutConfirmationPage
 * @extends {CheckoutPaymentsBankDraftPage}
 */
export class CheckoutConfirmationPage extends CheckoutPaymentsBankDraftPage {
  static pPlan: string;
  static pPlanPrice: string;
  static txtTotalLabel: string;
  static txtTotalPriceLabel: string;
  // ========================== Process Methods ============================
  // ========================== Navigate Methods ===========================
  navigateToCheckoutConfirmationPageUsingPlanalyzer = async (state: string, paymentMethod: string): Promise<void> => {
    await this.navigateToPaymentsPage(state);
    CheckoutConfirmationPage.pPlan = await this.fillOrderSummaryPlanValue();
    console.log(CheckoutConfirmationPage.pPlan);
    CheckoutConfirmationPage.pPlanPrice = await this.fillOrderSummaryPlanPriceValue();
    console.log(CheckoutConfirmationPage.pPlanPrice);
    CheckoutConfirmationPage.txtTotalLabel = await this.fillOrderSummaryTxtTotalLabelValue();
    console.log(CheckoutConfirmationPage.txtTotalLabel);
    CheckoutConfirmationPage.txtTotalPriceLabel = await this.fillOrderSummaryTxtTotalPriceLabelValue();
    console.log(CheckoutConfirmationPage.txtTotalPriceLabel);
    if (paymentMethod.toUpperCase() == 'BD') {
      console.log(' - checkoutPaymentPage.navigateToCheckoutConfirmationPage');
      await this.clickBankDraftBtn();
      await this.fillUsBankDraftFormAndSubmit();
    } else if (paymentMethod.toUpperCase() == 'CC') {
      // await this.clickBankDraftBtn();
      // await this.clickCreditCardBtn();
      await this.fillCreditCardForm();
    }
  };

  navigateFromPaymentBankDraftPageToConfirmationPage = async (): Promise<void> => {
    console.log(' - checkoutConfirmationPage.navigateFromPaymentBankDraftPageToConfirmationPage');
    await this.clickBankDraftBtn();
    await this.fillUsBankDraftFormAndSubmit();
    await this.page.waitForSelector(conMembershipWrapper, { timeout: 50000 });
  };

  navigateFromPaymentAgreementPageToConfirmationPage = async (): Promise<void> => {
    console.log(' - checkoutConfirmationPage.navigateFromPaymentAgreementPageToConfirmationPage');
    await this.clickAgreementCheckbox();
    await this.clickCompleteEnrollmentButton();
    await this.page.waitForSelector(conMembershipWrapper, { timeout: 50000 });
  };

  navigateFromPaymentBankDraftPageToConfirmationPageCanada = async (): Promise<void> => {
    console.log(' - checkoutConfirmationPage.navigateFromPaymentBankDraftPageToConfirmationPageCanada');
    await this.clickBankDraftBtn();
    await this.fillCaBankDraftFormAndSubmit();
    await this.page.waitForSelector(conMembershipWrapper, { timeout: 90000 });
  };

  navigateFromPaymentCreditCardPageToConfirmationPageCanada = async (): Promise<void> => {
    console.log(' - checkoutConfirmationPage.navigateFromPaymentCreditCardPageToConfirmationPageCanada');
    await this.fillCreditCardFormForCanada();
    await this.page.waitForSelector(conMembershipWrapper, { timeout: 90000 });
  };

  // ========================== Click Methods ==============================
  /**
   * @memberof CheckoutConfirmationPage
   */
  clickCompleteEnrollmentButton = async () => {
    console.log(' - checkoutConfirmationPage.clickCompleteEnrollmentButton');
    // Click on Complete Enrollment Button
    await this.clickOnElement(btnCompleteEnrollment);
  };

  /**
   * @memberof CheckoutConfirmationPage
   */
  clickAgreementCheckbox = async () => {
    console.log(' - checkoutConfirmationPage.clickAgreementCheckbox');
    // Click on Complete Enrollment Button
    await this.checkCheckbox(chkAgreement);
  };

  // ========================== Assertion Methods ==========================
  assertWelcomeToLegalShieldFamilyPage = async () => {
    console.log(' - checkoutConfirmationPage.assertWelcomeToLegalshiledFamilyPage');
    const welcome = await this.page.waitForSelector(txtWelcomeToLegalshiledFamily);
    console.log(welcome.innerText());
    await this.assertElementContainsText(txtWelcomeToLegalshiledFamily, 'Welcome!');
  };

  assertOrderSummaryPlanPriceConfirmationPage = async () => {
    console.log(' - checkoutConfirmationPage.assertOrderSummaryPlanPriceConfirmationPage');
    const planPrice = this.page.locator('div.lsux-card--inset.p-6 h3.lsux-heading.plan-price.lsux-heading--t20');
    await expect(planPrice).toHaveText(CheckoutConfirmationPage.pPlanPrice);
  };

  /**
   * @param {string} planName
   * @memberof CheckoutConfirmationPage
   */
  assertOrderSummaryPlanLabelConfirmationPage = async (planName: string) => {
    console.log(' - checkoutConfirmationPage.assertOrderSummaryPlanLabelConfirmationPage');
    const lblplan = this.page.locator(`text=${planName}`);
    await expect(lblplan).toHaveText(CheckoutConfirmationPage.pPlan);
  };
  assertOrderSummaryLegalShieldMembershipConfirmationPage = async () => {
    console.log(' - checkoutConfirmationPage.assertOrderSummaryMonthlyConfirmationPage');
    const lblplan = this.page.locator('text = LegalShield Membership');
    await expect(lblplan).toHaveText('LegalShield Membership');
  };
  assertOrderSummaryMonthlyConfirmationPage = async () => {
    console.log(' - checkoutConfirmationPage.assertOrderSummaryMonthlyConfirmationPage');
    const lblplan = this.page.locator('text = Monthly Subscription');
    await expect(lblplan).toHaveText('Monthly Subscription');
  };

  assertNoMemberNumbersAreDisplayed = async () => {
    console.log(' - checkoutConfirmationPage.assertNoMemberNumbersAreDisplayed');
    await this.assertElementNotOnPage(lblMemberNumber);
  };

  assertIdShieldMembershipIsDisplayed = async () => {
    console.log(' - checkoutConfirmationPage.assertIdShieldMembershipIsDisplayed');
    const ele = '//h2[contains(@class,"membership-title") and contains (.,"IDShield Membership")]';
    await this.assertElementIsVisible(ele);
  };

  /**
   * @param {string} planType
   * @memberof CheckoutConfirmationPage
   */
  assertLegalShieldMembershipIsDisplayed = async (planType: string) => {
    console.log(' - checkoutConfirmationPage.assertLegalShieldMembershipIsDisplayed');
    const ele = `//h2[contains(@class,"membership-title") and contains (.,"${planType} Membership")]`;
    await this.assertElementIsVisible(ele);
  };

  assertMembershipTileIsDisplayed = async (planType: string) => {
    console.log(' - checkoutConfirmationPage.assertMembershipTileIsDisplayed');
    const ele = `//h2[contains(@class,"membership-title") and contains (.,"${planType} Membership")]`;
    await this.assertElementIsVisible(ele);
  };

  /**
   * @param {string} planName
   * @memberof CheckoutConfirmationPage
   */
  assertPlanNameDisplayedInConfirmationPageOrderSummary = async (planName: string) => {
    console.log(' - checkoutConfirmationPage.assertPlanNameDisplayedInConfirmationPageOrderSummary');
    if (planName.includes('-')) {
      const splitString = planName.split(' - ');
      planName = splitString[0];
    }
    const ele = `//div[contains(@class,"plan-details-card") and contains(.,"${planName}")]`;
    await this.page.waitForSelector(conMembershipWrapper, { timeout: 50000 });
    await this.assertElementIsVisible(ele);
  };

  /**
   * @param {Array<Array<string>>} productNamesAndCosts
   * @memberof CheckoutConfirmationPage
   */
  assertAllPlanTilesOnConfirmationPage = async (productNamesAndCosts: Array<Array<string>>): Promise<void> => {
    console.log(' - checkoutConfirmationPage.assertAllPlanTilesOnConfirmationPage');
    for (const pnc of productNamesAndCosts) {
      await this.isElementVisible(`//div[contains(@class,"plan-details-card") and contains(.,"${pnc[0]}") and contains(.,"${pnc[1]}")]`);
    }
  };

  /**
   * @param {string} planName
   * @memberof CheckoutConfirmationPage
   */
  assertPlanCostIsNotDisplayedInConfirmationPageOrderSummaryForPlanName = async (planName: string) => {
    console.log(' - checkoutConfirmationPage.assertPlanCostIsNotDisplayedInConfirmationPageOrderSummaryForPlanName');
    if (planName.includes('-')) {
      const splitString = planName.split(' - ');
      planName = splitString[0];
    }
    const ele = `//div[contains(@class,"plan-details-card") and contains(.,"${planName}")]//h3[contains(@class,"plan-price")]`;
    await this.assertElementIsHidden(ele);
  };

  assertNoPlanCostsAreDisplayedInConfirmationPageOrderSummary = async () => {
    console.log(' - checkoutConfirmationPage.assertNoPlanCostsAreDisplayedInConfirmationPageOrderSummary');
    const ele = `//div[contains(@class,"plan-details-card")]//h3[contains(@class,"plan-price")]`;
    await this.assertElementNotOnPage(ele);
  };

  /**
   * @param {string} planName
   * @memberof CheckoutConfirmationPage
   */
  assertPlanCostNotEmpty = async (planName: string) => {
    console.log(' - checkoutConfirmationPage.assertPlanCostNotEmpty');
    const ele = `//div[contains(@class,"plan-details-card") and contains(.,"${planName}")]//h3[contains(@class,"plan-price")]`;
    await this.assertInnerTextIsTruthy(ele);
  };

  /**
   * @param {string} planName
   * @memberof CheckoutConfirmationPage
   */
  assertPlanCostIsDisplayedInConfirmationOrderSummaryForPlanName = async (planName: string) => {
    console.log(' - checkoutConfirmationPage.assertPlanCostIsDisplayedInConfirmationOrderSummaryForPlanName ');
    if (planName.includes('-')) {
      const splitString = planName.split(' - ');
      planName = splitString[0];
    }
    const ele = `//div[contains(@class,"plan-details-card") and contains(.,"${planName}")]//h3[contains(@class,"plan-price")]`;
    await this.assertElementIsVisible(ele);
  };

  /**
   * @param {string} planName
   * @memberof CheckoutConfirmationPage
   */
  assertPlanCostIsHidden = async (planName: string) => {
    console.log(' - checkoutConfirmationPage.assertPlanCostIsHidden');
    const ele = `//div[contains(@class,"plan-details-card") and contains(.,"${planName}")]//h3[contains(@class,"plan-price")]`;
    await this.assertElementIsHidden(ele);
  };

  /**
   * @param {string} groupPayConfig
   * @param {string} totalCost
   * @memberof CheckoutConfirmationPage
   */
  assertDisclaimerLanguage = async (groupPayConfig: string, totalCost: string) => {
    console.log(' - checkoutConfirmationPage.assertDisclaimerLanguage');
    await this.page.waitForSelector(txaDisclaimer, { timeout: 100000 });
    switch (groupPayConfig) {
      case 'Payroll Deduct':
        await this.assertElementContainsText(
          txaDisclaimer,
          `to deduct ${totalCost} per pay period from my earnings for my membership and to remit such amount directly to PPLSI. I agree that the company is not responsible or liable for my decision to purchase a membership from PPLSI nor the services provided through my membership and the company’s sole responsibility is to withhold and pay my membership fee to PPLSI.`
        );
        break;
      case 'Fringe':
        await this.assertElementContainsText(txaDisclaimer, '');
        break;
      case 'Partial Fringe':
        await this.assertElementContainsText(
          txaDisclaimer,
          `to deduct ${totalCost} per pay period from my earnings for my membership and to remit such amount directly to PPLSI. I agree that the company is not responsible or liable for my decision to purchase a membership from PPLSI nor the services provided through my membership and the company’s sole responsibility is to withhold and pay my membership fee to PPLSI.`
        );
        break;
    }
  };

  assertTermsOfServiceLanguageAndLink = async () => {
    console.log(' - checkoutConfirmationPage.assertTermsOfServiceLanguageAndLink');
    await this.assertElementIsVisible(txaTermsOfServiceLanguage);
    await this.assertElementIsVisible(lnkTermsOfService);
  };
}
