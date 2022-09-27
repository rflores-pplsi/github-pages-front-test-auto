import { expect, Response } from '@playwright/test';
import { CheckoutPaymentsBankDraftPage } from './checkout-payments-bank-draft.page';
import { ProductDetails } from '../../tests/e2e/data/type-definitions';

// ========================== Selectors ==================================
const txtWelcomeToLegalshiledFamily = 'h1.lsux-heading.confirmation-title.lsux-heading--t28';
const btnCompleteEnrollment = 'button:has-text("COMPLETE ENROLLMENT")';
const chkAgreement = '//div[contains(@class,"lsux-cb-container__cb   margin-right")]';
const lblMemberNumber = '//h3[contains(@class,"member-number") and contains(.,"Member number")]';
const conMembershipWrapper = '//div[contains(@class,"membership-wrapper")]';
const txaDisclaimer = '//div[contains(@class,"group-auth")]//span[string-length(text()) > 0]';
const txaTermsOfServiceLanguage = '//span[contains(@class,"tos-disclaimer")]';
const lnkTermsOfService = '//a[contains(@class,"tos-link")]';
const conOrderSummary = '//div[contains(@class,"lsux-grid order-grid")]';

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

  /**
   * @param {Response} response
   * @param {Array<ProductDetails>} productDetails
   * @memberof CheckoutConfirmationPage
   */
  logFriendlyIDs = async (response: Response, productDetails: Array<ProductDetails>) => {
    const responseBody = await response.json();
    let i = 0;
    // eslint-disable-next-line no-unused-vars
    for (const pn of productDetails) {
      const friendlyID = responseBody.offers[i].friendlyId;
      console.log(`Friendly ID: ${friendlyID}`);
      i++;
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
    await this.page.waitForSelector(conMembershipWrapper, { timeout: 90000 });
  };

  navigateFromPaymentAgreementPageToConfirmationPage = async (): Promise<void> => {
    console.log(' - checkoutConfirmationPage.navigateFromPaymentAgreementPageToConfirmationPage');
    await this.clickAgreementCheckbox();
    await this.clickCompleteEnrollmentButton();
    await this.page.waitForSelector(conMembershipWrapper, { timeout: 90000 });
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

  /**
   * @param {Array<ProductDetails>} productDetails
   * @memberof CheckoutConfirmationPage
   */
  assertNameCostAndBillingFrequencyOnConfirmationPageForAllProducts = async (productDetails: Array<ProductDetails>) => {
    console.log('- checkoutConfirmationPage.assertNameCostAndBillingFrequencyForAllProducts');
    for (const pd of productDetails) {
      // Name
      await this.assertElementIsVisible(
        `//div[contains(@class,"plan-details-card") and contains(.,"${pd.productName}") and contains (.,"${pd.cost}") and contains(.,"Monthly")]`
      );
    }
  };

  /**
   * @param {Response} response
   * @param {Array<Array<string>>} productDetails
   * @memberof CheckoutConfirmationPage
   */
  assertShortCodesInPurchaseResponse = async (response: Response, productDetails: Array<ProductDetails>) => {
    console.log('- checkoutConfirmationPage.assertShortCodeInPurchaseResponse');
    const responseBody = await response.json();
    let i = 0;
    for (const pd of productDetails) {
      const shortName = responseBody.offers[i].products[0].planDetails.short_name;
      await this.assertStringMatch(shortName, pd.shortCode);
      i++;
    }
  };

  /**
   * @memberof CheckoutConfirmationPage
   */
  assertWelcomeToLegalShieldFamilyPage = async () => {
    console.log(' - checkoutConfirmationPage.assertWelcomeToLegalshiledFamilyPage');
    const welcome = await this.page.waitForSelector(txtWelcomeToLegalshiledFamily);
    console.log(welcome.innerText());
    await this.assertElementContainsText(txtWelcomeToLegalshiledFamily, 'Welcome!');
  };

  /**
   * @memberof CheckoutConfirmationPage
   */
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

  /**
   * @memberof CheckoutConfirmationPage
   */
  assertOrderSummaryLegalShieldMembershipConfirmationPage = async () => {
    console.log(' - checkoutConfirmationPage.assertOrderSummaryMonthlyConfirmationPage');
    const lblplan = this.page.locator('text = LegalShield Membership');
    await expect(lblplan).toHaveText('LegalShield Membership');
  };

  /**
   * @memberof CheckoutConfirmationPage
   */
  assertOrderSummaryMonthlyConfirmationPage = async () => {
    console.log(' - checkoutConfirmationPage.assertOrderSummaryMonthlyConfirmationPage');
    const lblplan = this.page.locator('text = Monthly Subscription');
    await expect(lblplan).toHaveText('Monthly Subscription');
  };

  /**
   * @memberof CheckoutConfirmationPage
   */
  assertNoMemberNumbersAreDisplayed = async () => {
    console.log(' - checkoutConfirmationPage.assertNoMemberNumbersAreDisplayed');
    await this.assertElementNotOnPage(lblMemberNumber);
  };

  /**
   * @memberof CheckoutConfirmationPage
   */
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

  /**
   * @param {Array<Array<string>>} productDetails
   * @memberof CheckoutConfirmationPage
   */
  assertMembershipTilesAreDisplayed = async (productDetails: Array<Array<string>>) => {
    console.log(' - checkoutConfirmationPage.assertMembershipTilesAreDisplayed');
    for (const pn of productDetails) {
      const ele = `//h2[contains(@class,"membership-title") and contains (.,"${pn.planType} Membership")]`;
      await this.assertElementIsVisible(ele);
    }
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
  assertPlanCostIsNotDisplayedInConfirmationPageOrderSummaryForPlanName = async (planName: string) => {
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

  /**
   * @memberof CheckoutConfirmationPage
   */
  assertTermsOfServiceLanguageAndLink = async () => {
    console.log(' - checkoutConfirmationPage.assertTermsOfServiceLanguageAndLink');
    await this.assertElementIsVisible(txaTermsOfServiceLanguage);
    await this.assertElementIsVisible(lnkTermsOfService);
  };
}
