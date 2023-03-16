import { expect, Response } from '@playwright/test';
import { CheckoutPaymentsBankDraftPage } from './checkout-payments-bank-draft.page';
import { ProductDetails } from '../../tests/e2e/data-driven/data/type-definitions';

// ========================== Selectors ==================================
const TXT_WELCOME_TO_LEGALSHIELD_FAMILY = 'h1.lsux-heading.confirmation-title.lsux-heading--t28';
const BTN_COMPLETE_ENROLLMENT = 'button:has-text("COMPLETE ENROLLMENT")';
const CHK_AGREEMENT = '//div[contains(@class,"lsux-cb-container__cb   margin-right")]';
const LBL_MEMBER_NUMBER = '//h3[contains(@class,"member-number") and contains(.,"Member number")]';
const CON_MEMBERSHIP_WRAPPER = '//div[contains(@class,"membership-wrapper")]';
const TXT_DISCLAIMER = '//div[contains(@class,"group-auth")]//span[string-length(text()) > 0]';
const TXT_TERMS_OF_SERVICE_LANGUAGE = '//span[contains(@class,"tos-disclaimer")]';
const LNK_TERMS_OF_SERVICE = '//a[contains(@class,"tos-link")]';

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

  /**
   * @param {Response} response
   * @param {Array<ProductDetails>} productDetails
   * @memberof CheckoutConfirmationPage
   */
  logFriendlyIDs = async (response: Response, productDetails: Array<ProductDetails>): Promise<void> => {
    const responseBody = await response.json();
    let i = 0;
    for (const pd of productDetails) {
      if (!pd.productName.includes('-')) {
        // do not look for shortcodes for supplements
        const friendlyID = responseBody.offers[i].friendlyId;
        console.log(` * Friendly ID: ${friendlyID}`);
        i++;
      }
    }
  };
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
    await this.page.waitForSelector(CON_MEMBERSHIP_WRAPPER, { timeout: 90000 });
  };

  navigateFromPaymentAgreementPageToConfirmationPage = async (): Promise<void> => {
    console.log(' - checkoutConfirmationPage.navigateFromPaymentAgreementPageToConfirmationPage');
    await this.clickAgreementCheckbox();
    await this.clickCompleteEnrollmentButton();
    await this.page.waitForSelector(CON_MEMBERSHIP_WRAPPER, { timeout: 90000 });
  };

  navigateFromPaymentBankDraftPageToConfirmationPageCanada = async (): Promise<void> => {
    console.log(' - checkoutConfirmationPage.navigateFromPaymentBankDraftPageToConfirmationPageCanada');
    await this.clickBankDraftBtn();
    await this.fillCaBankDraftFormAndSubmit();
    await this.page.waitForSelector(CON_MEMBERSHIP_WRAPPER, { timeout: 90000 });
  };

  navigateFromPaymentCreditCardPageToConfirmationPageCanada = async (): Promise<void> => {
    console.log(' - checkoutConfirmationPage.navigateFromPaymentCreditCardPageToConfirmationPageCanada');
    await this.fillCreditCardFormForCanada();
    await this.page.waitForSelector(CON_MEMBERSHIP_WRAPPER, { timeout: 90000 });
  };

  // ========================== Click Methods ==============================
  /**
   * @memberof CheckoutConfirmationPage
   */
  clickCompleteEnrollmentButton = async (): Promise<void> => {
    console.log(' - checkoutConfirmationPage.clickCompleteEnrollmentButton');
    // Click on Complete Enrollment Button
    await this.clickOnElement(BTN_COMPLETE_ENROLLMENT);
  };

  /**
   * @memberof CheckoutConfirmationPage
   */
  clickAgreementCheckbox = async (): Promise<void> => {
    console.log(' - checkoutConfirmationPage.clickAgreementCheckbox');
    // Click on Complete Enrollment Button
    await this.checkCheckbox(CHK_AGREEMENT);
  };

  // ========================== Assertion Methods ==========================

  /**
   * @param {Array<ProductDetails>} productDetails
   * @memberof CheckoutConfirmationPage
   */
  assertNameCostAndBillingFrequencyOnConfirmationPageForAllProducts = async (productDetails: Array<ProductDetails>): Promise<void> => {
    console.log(' - checkoutConfirmationPage.assertNameCostAndBillingFrequencyForAllProducts');
    for (const pd of productDetails) {
      // Name
      if (pd.productName.includes('-')) {
        await this.assertElementIsVisible(
          `//div[contains(@class,"plan-details-card") and contains(.,"${pd.productName.split(' - ')[1]}") and contains (.,"${
            pd.cost
          }") and contains(.,"Monthly")]`
        );
      } else {
        await this.assertElementIsVisible(
          `//div[contains(@class,"plan-details-card") and contains(.,"${pd.productName}") and contains (.,"${pd.cost}") and contains(.,"Monthly")]`
        );
      }
    }
  };

  /**
   * @param {Response} response
   * @param {Array<Array<string>>} productDetails
   * @memberof CheckoutConfirmationPage
   */
  assertShortCodesInPurchaseResponse = async (response: Response, productDetails: Array<ProductDetails>): Promise<void> => {
    console.log(' - checkoutConfirmationPage.assertShortCodeInPurchaseResponse');
    const responseBody = await response.json();
    let i = 0;
    for (const pd of productDetails) {
      if (!pd.productName.includes('-')) {
        // do not look for shortcodes for supplements
        const shortName = responseBody.offers[i].products[0].planDetails.short_name;
        await this.assertStringMatch(shortName, pd.shortCode);
      }
      i++;
    }
  };

  /**
   * @memberof CheckoutConfirmationPage
   */
  assertWelcomeToLegalShieldFamilyPage = async (): Promise<void> => {
    console.log(' - checkoutConfirmationPage.assertWelcomeToLegalshiledFamilyPage');
    const welcome = await this.page.waitForSelector(TXT_WELCOME_TO_LEGALSHIELD_FAMILY);
    console.log(welcome.innerText());
    await this.assertElementContainsText(TXT_WELCOME_TO_LEGALSHIELD_FAMILY, 'Welcome!');
  };

  /**
   * @memberof CheckoutConfirmationPage
   */
  assertOrderSummaryPlanPriceConfirmationPage = async (): Promise<void> => {
    console.log(' - checkoutConfirmationPage.assertOrderSummaryPlanPriceConfirmationPage');
    const planPrice = this.page.locator('div.lsux-card--inset.p-6 h3.lsux-heading.plan-price.lsux-heading--t20');
    await expect(planPrice).toHaveText(CheckoutConfirmationPage.pPlanPrice);
  };

  /**
   * @param {string} planName
   * @memberof CheckoutConfirmationPage
   */
  assertOrderSummaryPlanLabelConfirmationPage = async (planName: string): Promise<void> => {
    console.log(' - checkoutConfirmationPage.assertOrderSummaryPlanLabelConfirmationPage');
    const lblplan = this.page.locator(`text=${planName}`);
    await expect(lblplan).toHaveText(CheckoutConfirmationPage.pPlan);
  };

  /**
   * @memberof CheckoutConfirmationPage
   */
  assertOrderSummaryLegalShieldMembershipConfirmationPage = async (): Promise<void> => {
    console.log(' - checkoutConfirmationPage.assertOrderSummaryMonthlyConfirmationPage');
    const lblplan = this.page.locator('text = LegalShield Membership');
    await expect(lblplan).toHaveText('LegalShield Membership');
  };

  /**
   * @memberof CheckoutConfirmationPage
   */
  assertOrderSummaryMonthlyConfirmationPage = async (): Promise<void> => {
    console.log(' - checkoutConfirmationPage.assertOrderSummaryMonthlyConfirmationPage');
    const lblplan = this.page.locator('text = Monthly Subscription');
    await expect(lblplan).toHaveText('Monthly Subscription');
  };

  /**
   * @memberof CheckoutConfirmationPage
   */
  assertNoMemberNumbersAreDisplayed = async (): Promise<void> => {
    console.log(' - checkoutConfirmationPage.assertNoMemberNumbersAreDisplayed');
    await this.assertElementNotOnPage(LBL_MEMBER_NUMBER);
  };

  /**
   * @memberof CheckoutConfirmationPage
   */
  assertIdShieldMembershipIsDisplayed = async (): Promise<void> => {
    console.log(' - checkoutConfirmationPage.assertIdShieldMembershipIsDisplayed');
    const ELE = '//h2[contains(@class,"membership-title") and contains (.,"IDShield Membership")]';
    await this.assertElementIsVisible(ELE);
  };

  /**
   * @param {string} planType
   * @memberof CheckoutConfirmationPage
   */
  assertLegalShieldMembershipIsDisplayed = async (planType: string): Promise<void> => {
    console.log(' - checkoutConfirmationPage.assertLegalShieldMembershipIsDisplayed');
    const ele = `//h2[contains(@class,"membership-title") and contains (.,"${planType} Membership")]`;
    await this.assertElementIsVisible(ele);
  };

  /**
   * @param {string} planType
   * @memberof CheckoutConfirmationPage
   */
  assertMembershipTileIsDisplayed = async (planType: string): Promise<void> => {
    console.log(' - checkoutConfirmationPage.assertMembershipTileIsDisplayed');
    const ele = `//h2[contains(@class,"membership-title") and contains (.,"${planType} Membership")]`;
    await this.assertElementIsVisible(ele);
  };

  /**
   * @param {string} planName
   * @memberof CheckoutConfirmationPage
   */
  assertPlanNameDisplayedInConfirmationPageOrderSummary = async (planName: string): Promise<void> => {
    console.log(' - checkoutConfirmationPage.assertPlanNameDisplayedInConfirmationPageOrderSummary');
    if (planName.includes('-')) {
      const splitString = planName.split(' - ');
      planName = splitString[0];
    }
    const ele = `//div[contains(@class,"plan-details-card") and contains(.,"${planName}")]`;
    await this.page.waitForSelector(CON_MEMBERSHIP_WRAPPER, { timeout: 50000 });
    await this.assertElementIsVisible(ele);
  };

  /**
   * @param {Array<ProductDetails>} productDetails
   * @memberof CheckoutConfirmationPage
   */
  assertAllPlanTilesOnConfirmationPage = async (productDetails: Array<ProductDetails>): Promise<void> => {
    console.log(' - checkoutConfirmationPage.assertAllPlanTilesOnConfirmationPage');
    for (const pd of productDetails) {
      await this.isElementVisible(
        `//div[contains(@class,"plan-details-card") and contains(.,"${pd.productName}") and contains(.,"${pd.shortCode}")]`
      );
    }
  };

  /**
   * @param {string} planName
   * @memberof CheckoutConfirmationPage
   */
  assertPlanCostIsNotDisplayedInConfirmationPageOrderSummaryForPlanName = async (planName: string): Promise<void> => {
    console.log(' - checkoutConfirmationPage.assertPlanCostIsNotDisplayedInConfirmationPageOrderSummaryForPlanName');
    if (planName.includes('-')) {
      const splitString = planName.split(' - ');
      planName = splitString[0];
    }
    const ele = `//div[contains(@class,"plan-details-card") and contains(.,"${planName}")]//h3[contains(@class,"plan-price")]`;
    await this.assertElementIsHidden(ele);
  };

  /**
   * @memberof CheckoutConfirmationPage
   */
  assertNoPlanCostsAreDisplayedInConfirmationPageOrderSummary = async (): Promise<void> => {
    console.log(' - checkoutConfirmationPage.assertNoPlanCostsAreDisplayedInConfirmationPageOrderSummary');
    const ele = `//div[contains(@class,"plan-details-card")]//h3[contains(@class,"plan-price")]`;
    await this.assertElementNotOnPage(ele);
  };

  /**
   * @param {string} planName
   * @memberof CheckoutConfirmationPage
   */
  assertPlanCostNotEmpty = async (planName: string): Promise<void> => {
    console.log(' - checkoutConfirmationPage.assertPlanCostNotEmpty');
    const ele = `//div[contains(@class,"plan-details-card") and contains(.,"${planName}")]//h3[contains(@class,"plan-price")]`;
    await this.assertInnerTextIsTruthy(ele);
  };

  /**
   * @param {string} planName
   * @memberof CheckoutConfirmationPage
   */
  assertPlanCostIsDisplayedInConfirmationOrderSummaryForPlanName = async (planName: string): Promise<void> => {
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
  assertPlanCostIsHidden = async (planName: string): Promise<void> => {
    console.log(' - checkoutConfirmationPage.assertPlanCostIsHidden');
    const ele = `//div[contains(@class,"plan-details-card") and contains(.,"${planName}")]//h3[contains(@class,"plan-price")]`;
    await this.assertElementIsHidden(ele);
  };

  /**
   * @param {string} groupPayConfig
   * @param {string} totalCost
   * @memberof CheckoutConfirmationPage
   */
  assertDisclaimerLanguage = async (groupPayConfig: string, totalCost: string): Promise<void> => {
    console.log(' - checkoutConfirmationPage.assertDisclaimerLanguage');
    await this.page.waitForSelector(TXT_DISCLAIMER, { timeout: 100000 });
    switch (groupPayConfig) {
      case 'Payroll Deduct':
        await this.assertElementContainsText(
          TXT_DISCLAIMER,
          `to deduct ${totalCost} per pay period from my earnings for my membership and to remit such amount directly to PPLSI. I agree that the company is not responsible or liable for my decision to purchase a membership from PPLSI nor the services provided through my membership and the company’s sole responsibility is to withhold and pay my membership fee to PPLSI.`
        );
        break;
      case 'Fringe':
        await this.assertElementContainsText(TXT_DISCLAIMER, '');
        break;
      case 'Partial Fringe':
        await this.assertElementContainsText(
          TXT_DISCLAIMER,
          `to deduct ${totalCost} per pay period from my earnings for my membership and to remit such amount directly to PPLSI. I agree that the company is not responsible or liable for my decision to purchase a membership from PPLSI nor the services provided through my membership and the company’s sole responsibility is to withhold and pay my membership fee to PPLSI.`
        );
        break;
    }
  };

  /**
   * @memberof CheckoutConfirmationPage
   */
  assertTermsOfServiceLanguageAndLink = async (): Promise<void> => {
    console.log(' - checkoutConfirmationPage.assertTermsOfServiceLanguageAndLink');
    await this.assertElementIsVisible(TXT_TERMS_OF_SERVICE_LANGUAGE);
    await this.assertElementIsVisible(LNK_TERMS_OF_SERVICE);
  };
}
