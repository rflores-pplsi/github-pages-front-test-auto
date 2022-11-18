import { expect, Page, Response } from '@playwright/test';
import { ProductDetails } from '../../tests/e2e/data/type-definitions';
import { OktaPage } from '../okta/okta.page';
import { PlanalyzerCsrCheckoutPage } from '../../page-objects-refactored/planalyzer/planalyzer-csr-checkout.page';
import RegionsUtils from '../../utils/regions.utils';
import DataUtils from '../../utils/Tests.Data';
import { CheckoutLocatorsPage } from './checkout-locators.page';

/**
 * @export
 * @extends CheckoutLocatorsPage
 * @class CheckoutConfirmationPage
 */
export class CheckoutConfirmationPage extends CheckoutLocatorsPage {
  // ========================== Instantiate Classes ==================================
  readonly oktaPage: OktaPage;
  readonly planalyzerCsrCheckoutPage: PlanalyzerCsrCheckoutPage;

  static pPlan: string;
  static pPlanPrice: string;
  static txtTotalLabel: string;
  static txtTotalPriceLabel: string;

  /**
   * @param {Page} page
   * @class CheckoutConfirmationPage
   */
  constructor(page: Page) {
    super(page);
    this.page = page;
    this.oktaPage = new OktaPage(page);
    this.planalyzerCsrCheckoutPage = new PlanalyzerCsrCheckoutPage(page);
  }

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
    await this.oktaPage.navigateToPlanalyzerCsrCheckoutOktaLogin();
    await this.oktaPage.loginThroughOkta();
    await this.planalyzerCsrCheckoutPage.createOrderRedirectToCheckoutFromPlanalyzer('D2C', 'LegalShield', state, 'en-US', '', '', ['Legal Plan']);
    const regionObj = RegionsUtils.usStates;
    const stateObj = state;
    for (const obj of regionObj) {
      if (obj.name == stateObj) {
        await this.txtHomeAddress.fill(obj.validAddress.street);
        await this.txtCity.fill(obj.validAddress.city);
        await this.page.keyboard.press('Tab');
        await this.page.keyboard.press('Tab');
        await this.txtPostalCode.fill('');
        await this.txtPostalCode.fill(obj.validAddress.postalCode);
      }
    }
    await this.btnSaveAndContinue.click();

    CheckoutConfirmationPage.pPlan = await this.page.locator(CheckoutConfirmationPage.pPlan).innerText();
    CheckoutConfirmationPage.pPlanPrice = await this.pPlanPrice.innerText();
    CheckoutConfirmationPage.txtTotalLabel = await this.txtTotalLabel.innerText();
    CheckoutConfirmationPage.txtTotalPriceLabel = await this.txtTotalPriceLabel.innerText();
    if (paymentMethod.toUpperCase() == 'BD') {
      await this.page.waitForLoadState();
      this.page.frameLocator("//iframe[@title='payment iframe']");
      if (this.frame != null) {
        // Click on Add Payment button
        await this.btnBankDraft.click();
      } else throw new Error('No such frame');

      // Fill  Account Number
      const txtAccountNumbertst1 = await this.txtAccountNumber;
      await txtAccountNumbertst1.type('000000000');

      await this.page.keyboard.press('Tab');

      // await this.fillRoutingNumberTxt();
      if (this.frmPayment != null) {
        // Fill  Routing Number
        const txtRoutingNumberTxt = await this.txtRoutingNumber;
        await txtRoutingNumberTxt.type('000000000');
      } else throw new Error('No such frame');

      await this.page.keyboard.press('Tab');

      if (this.frmPayment != null) {
        // Fill  Account Holder Name
        const txtAccountHolderNameTxt = await this.txtAccountHolderName;
        await txtAccountHolderNameTxt.type('Automation Tester');
      } else throw new Error('No such frame');

      await this.page.keyboard.press('Tab');

      if (this.frmPayment != null) {
        // Click on Purchase button
        await this.btnPurchase.click();
      } else throw new Error('No such frame');

      await this.conMembershipWrapper.waitFor({ timeout: 90000 });
    } else if (paymentMethod.toUpperCase() == 'CC') {
      // Fillout the Credit Card form
      // Fill  Account Number
      const txtCreditCardNumber = await this.txtCardNumber;
      await txtCreditCardNumber.type('4444333322221111');

      await this.page.keyboard.press('Tab');

      if (this.frmPayment != null) {
        // Fill  Expiration Date
        const txtExpDateTxt = this.txtExpirationDate;
        await txtExpDateTxt.type('01/23');
      } else throw new Error('No such frame');

      await this.page.keyboard.press('Tab');

      if (this.frmPayment != null) {
        // Fill  Security Code
        const txtExpDateTxt = this.txtSecurityCode;
        await txtExpDateTxt.type('111');
      } else throw new Error('No such frame');

      await this.page.keyboard.press('Tab');
      await this.page.keyboard.press('Tab');

      if (this.frmPayment != null) {
        // Fill  Credit Card Holder Name
        const txtCreditCardHolderNameTxt = this.txtCardholderName;
        await txtCreditCardHolderNameTxt.type('Automation Tester');
      } else throw new Error('No such frame');

      await this.page.keyboard.press('Tab');
      if (this.frmPayment != null) {
        // Fill  Postal Code
        const txtCreditCardHolderNameTxt = this.txtBillingPostalCode;
        await txtCreditCardHolderNameTxt.type('20147');
      } else throw new Error('No such frame');
      await this.page.keyboard.press('Tab');
      if (this.frmCCPayment != null) {
        // Click on Purchase button
        await this.btnCreditCardPurchase.click({ force: true });
      } else throw new Error('No such frame');
    }
  };

  navigateFromPaymentBankDraftPageToConfirmationPage = async (): Promise<void> => {
    await this.page.waitForLoadState();

    if (this.frame != null) {
      // Click on Add Payment button
      await this.btnBankDraft.click();
    } else throw new Error('No such frame');

    // Fill  Account Number
    const txtAccountNumbertst1 = await this.txtAccountNumber;
    await txtAccountNumbertst1.type('000000000');

    await this.page.keyboard.press('Tab');

    if (this.frmPayment != null) {
      // Fill  Routing Number
      const txtRoutingNumberTxt = await this.txtRoutingNumber;
      await txtRoutingNumberTxt.type('000000000');
    } else throw new Error('No such frame');

    await this.page.keyboard.press('Tab');

    if (this.frmPayment != null) {
      // Fill  Account Holder Name
      const txtAccountHolderNameTxt = await this.txtAccountHolderName;
      await txtAccountHolderNameTxt.type('Education Employee');
    } else throw new Error('No such frame');

    await this.page.keyboard.press('Tab');
    if (this.frmPayment != null) {
      // Click on Purchase button
      await this.btnPurchase.click();
    } else throw new Error('No such frame');
    await this.conMembershipWrapper.waitFor({ timeout: 90000 });
  };

  navigateFromPaymentAgreementPageToConfirmationPage = async (): Promise<void> => {
    await this.clickAgreementCheckbox();
    await this.clickCompleteEnrollmentButton();
    await this.conMembershipWrapper.waitFor({ timeout: 90000 });
  };

  navigateFromPaymentBankDraftPageToConfirmationPageCanada = async (): Promise<void> => {
    await this.page.waitForLoadState();
    if (this.frame != null) {
      // Click on Add Payment button
      await this.btnBankDraft.click();
    } else throw new Error('No such frame');

    await this.page.waitForLoadState();
    // Fill  Account Number
    const txtAccountNumbertst2 = await this.txtAccountNumber;
    await txtAccountNumbertst2.type(DataUtils.data.testingHarness.ca.bd.Account);

    await this.page.keyboard.press('Tab');
    if (this.frmPayment != null) {
      // Fill  Transit Number
      const txtTransitNumberTxt = await this.txtTransitNumber;
      await txtTransitNumberTxt.type(DataUtils.data.testingHarness.ca.bd.Transit);
    } else throw new Error('No such frame');

    await this.page.keyboard.press('Tab');

    if (this.frmPayment != null) {
      // Fill  Institution Number
      const txtInstitutionNumberTxt = await this.txtInstitutionNumber;
      await txtInstitutionNumberTxt.type(DataUtils.data.testingHarness.ca.bd.Institution);
    } else throw new Error('No such frame');

    await this.page.keyboard.press('Tab');

    if (this.frmPayment != null) {
      // Fill  Account Holder Name
      const txtAccountHolderNameTxt = await this.txtAccountHolderName;
      await txtAccountHolderNameTxt.type('Automation Tester');
    } else throw new Error('No such frame');

    await this.page.keyboard.press('Tab');
    if (this.frmPayment != null) {
      // Click on Purchase button
      await this.btnPurchase.click();
    } else throw new Error('No such frame');
    await this.conMembershipWrapper.waitFor({ timeout: 50000 });
  };

  navigateFromPaymentCreditCardPageToConfirmationPageCanada = async (): Promise<void> => {
    // Fill  Account Number
    const txtCreditCardNumber = await this.txtCardNumber;
    await txtCreditCardNumber.type('4444333322221111');

    await this.page.keyboard.press('Tab');

    if (this.frmPayment != null) {
      // Fill  Expiration Date
      const txtExpDateTxt = this.txtExpirationDate;
      await txtExpDateTxt.type('01/23');
    } else throw new Error('No such frame');

    await this.page.keyboard.press('Tab');
    if (this.frmPayment != null) {
      // Fill  Security Code
      const txtExpDateTxt = this.txtSecurityCode;
      await txtExpDateTxt.type('111');
    } else throw new Error('No such frame');

    await this.page.keyboard.press('Tab');
    await this.page.keyboard.press('Tab');
    if (this.frmPayment != null) {
      // Fill  Credit Card Holder Name
      const txtCreditCardHolderNameTxt = this.txtCardholderName;
      await txtCreditCardHolderNameTxt.type('Automation Tester');
    } else throw new Error('No such frame');

    await this.page.keyboard.press('Tab');
    if (this.frmPayment != null) {
      // Fill  Postal Code
      const txtCreditCardHolderNameTxt = this.txtBillingPostalCode;
      await txtCreditCardHolderNameTxt.type('L2G3V9');
    } else throw new Error('No such frame');

    await this.page.keyboard.press('Tab');
    if (this.frmCCPayment != null) {
      // Click on Purchase button
      await this.btnCreditCardPurchase.click({ force: true });
    } else throw new Error('No such frame');

    await this.conMembershipWrapper.waitFor({ timeout: 90000 });
  };

  // ========================== Click Methods ==============================
  /**
   * @memberof CheckoutConfirmationPage
   */
  clickCompleteEnrollmentButton = async () => {
    console.log(' - checkoutConfirmationPage.clickCompleteEnrollmentButton');
    // Click on Complete Enrollment Button
    await this.btnCompleteEnrollment.click();
  };

  /**
   * @memberof CheckoutConfirmationPage
   */
  clickAgreementCheckbox = async () => {
    console.log(' - checkoutConfirmationPage.clickAgreementCheckbox');
    // Click on Complete Enrollment Button
    await this.chkAgreement.setChecked(true, { force: true });
  };

  // ========================== Assertion Methods ==========================

  /**
   * @param {Array<ProductDetails>} productDetails
   * @memberof CheckoutConfirmationPage
   */
  assertNameCostAndBillingFrequencyOnConfirmationPageForAllProducts = async (productDetails: Array<ProductDetails>) => {
    for (const pd of productDetails) {
      // Name
      if (pd.productName.includes('-')) {
        const locator = this.page.locator(
          `//div[contains(@class,"plan-details-card") and contains(.,"${pd.productName.split(' - ')[1]}") and contains (.,"${
            pd.cost
          }") and contains(.,"Monthly")]`
        );
        await locator.isVisible();
      } else {
        const locator = this.page.locator(
          `//div[contains(@class,"plan-details-card") and contains(.,"${pd.productName}") and contains (.,"${pd.cost}") and contains(.,"Monthly")]`
        );
        await locator.isVisible();
      }
    }
  };

  /**
   * @param {Response} response
   * @param {Array<Array<string>>} productDetails
   * @memberof CheckoutConfirmationPage
   */
  assertShortCodesInPurchaseResponse = async (response: Response, productDetails: Array<ProductDetails>) => {
    console.log(' - checkoutConfirmationPage.assertShortCodeInPurchaseResponse');
    const responseBody = await response.json();
    let i = 0;
    for (const pd of productDetails) {
      if (!pd.productName.includes('-')) {
        // do not look for shortcodes for supplements
        const shortName = responseBody.offers[i].products[0].planDetails.short_name;
        await expect(shortName).toEqual(pd.shortCode);
      }
      i++;
    }
  };

  /**
   * @memberof CheckoutConfirmationPage
   */
  assertWelcomeToLegalShieldFamilyPage = async () => {
    await this.txtWelcomeToLegalshiledFamily.waitFor();
    await expect(this.txtWelcomeToLegalshiledFamily).toBe('Welcome!');
  };

  /**
   * @memberof CheckoutConfirmationPage
   */
  assertOrderSummaryPlanPriceConfirmationPage = async () => {
    const planPrice = this.page.locator('div.lsux-card--inset.p-6 h3.lsux-heading.plan-price.lsux-heading--t20');
    await expect(planPrice).toBe(CheckoutConfirmationPage.pPlanPrice);
  };

  /**
   * @param {string} planName
   * @memberof CheckoutConfirmationPage
   */
  assertOrderSummaryPlanLabelConfirmationPage = async (planName: string) => {
    const lblplan = this.page.locator(`text=${planName}`);
    await expect(lblplan).toBe(CheckoutConfirmationPage.pPlan);
  };

  /**
   * @memberof CheckoutConfirmationPage
   */
  assertOrderSummaryLegalShieldMembershipConfirmationPage = async () => {
    const lblplan = this.page.locator('text = LegalShield Membership');
    await expect(lblplan).toBe('LegalShield Membership');
  };

  /**
   * @memberof CheckoutConfirmationPage
   */
  assertOrderSummaryMonthlyConfirmationPage = async () => {
    const lblplan = this.page.locator('text = Monthly Subscription');
    await expect(lblplan).toBe('Monthly Subscription');
  };

  /**
   * @memberof CheckoutConfirmationPage
   */
  assertNoMemberNumbersAreDisplayed = async () => {
    expect(this.lblMemberNumber).toHaveLength(0);
  };

  /**
   * @memberof CheckoutConfirmationPage
   */
  assertIdShieldMembershipIsDisplayed = async () => {
    const ELE = '//h2[contains(@class,"membership-title") and contains (.,"IDShield Membership")]';
    await this.page.locator(ELE).isVisible();
  };

  /**
   * @param {string} planType
   * @memberof CheckoutConfirmationPage
   */
  assertLegalShieldMembershipIsDisplayed = async (planType: string) => {
    const ele = `//h2[contains(@class,"membership-title") and contains (.,"${planType} Membership")]`;
    await this.page.locator(ele).isVisible({ timeout: 100000 });
  };

  /**
   * @param {string} planType
   * @memberof CheckoutConfirmationPage
   */
  assertMembershipTileIsDisplayed = async (planType: string) => {
    const ele = `//h2[contains(@class,"membership-title") and contains (.,"${planType} Membership")]`;
    await this.page.locator(ele).isVisible({ timeout: 100000 });
  };

  /**
   * @param {string} planName
   * @memberof CheckoutConfirmationPage
   */
  assertPlanNameDisplayedInConfirmationPageOrderSummary = async (planName: string) => {
    if (planName.includes('-')) {
      const splitString = planName.split(' - ');
      planName = splitString[0];
    }
    const ele = `//div[contains(@class,"plan-details-card") and contains(.,"${planName}")]`;
    await this.conMembershipWrapper.isVisible({ timeout: 50000 });
    await this.page.locator(ele).isVisible({ timeout: 100000 });
  };

  /**
   * @param {Array<ProductDetails>} productDetails
   * @memberof CheckoutConfirmationPage
   */
  assertAllPlanTilesOnConfirmationPage = async (productDetails: Array<ProductDetails>): Promise<void> => {
    for (const pd of productDetails) {
      const ele = `//div[contains(@class,"plan-details-card") and contains(.,"${pd.productName}") and contains(.,"${pd.shortCode}")]`;
      await this.page.isVisible(ele);
    }
  };

  /**
   * @param {string} planName
   * @memberof CheckoutConfirmationPage
   */
  assertPlanCostIsNotDisplayedInConfirmationPageOrderSummaryForPlanName = async (planName: string) => {
    if (planName.includes('-')) {
      const splitString = planName.split(' - ');
      planName = splitString[0];
    }
    const ele = `//div[contains(@class,"plan-details-card") and contains(.,"${planName}")]//h3[contains(@class,"plan-price")]`;
    await this.page.locator(ele).isHidden();
  };

  /**
   * @memberof CheckoutConfirmationPage
   */
  assertNoPlanCostsAreDisplayedInConfirmationPageOrderSummary = async () => {
    const ele = `//div[contains(@class,"plan-details-card")]//h3[contains(@class,"plan-price")]`;
    expect(await this.page.$$(ele)).toHaveLength(0);
  };

  /**
   * @param {string} planName
   * @memberof CheckoutConfirmationPage
   */
  assertPlanCostNotEmpty = async (planName: string) => {
    const ele = `//div[contains(@class,"plan-details-card") and contains(.,"${planName}")]//h3[contains(@class,"plan-price")]`;
    const innerText = await this.page.innerText(ele);
    expect(innerText).toBeTruthy();
  };

  /**
   * @param {string} planName
   * @memberof CheckoutConfirmationPage
   */
  assertPlanCostIsDisplayedInConfirmationOrderSummaryForPlanName = async (planName: string) => {
    if (planName.includes('-')) {
      const splitString = planName.split(' - ');
      planName = splitString[0];
    }
    const ele = `//div[contains(@class,"plan-details-card") and contains(.,"${planName}")]//h3[contains(@class,"plan-price")]`;
    await this.page.locator(ele).isVisible({ timeout: 100000 });
  };

  /**
   * @param {string} planName
   * @memberof CheckoutConfirmationPage
   */
  assertPlanCostIsHidden = async (planName: string) => {
    const ele = `//div[contains(@class,"plan-details-card") and contains(.,"${planName}")]//h3[contains(@class,"plan-price")]`;
    await this.page.locator(ele).isHidden();
  };

  /**
   * @param {string} groupPayConfig
   * @param {string} totalCost
   * @memberof CheckoutConfirmationPage
   */
  assertDisclaimerLanguage = async (groupPayConfig: string, totalCost: string) => {
    await this.txaDisclaimer.isVisible({ timeout: 100000 });
    switch (groupPayConfig) {
      case 'Payroll Deduct':
        await expect(this.txaDisclaimer).toBe(
          `to deduct ${totalCost} per pay period from my earnings for my membership and to remit such amount directly to PPLSI. I agree that the company is not responsible or liable for my decision to purchase a membership from PPLSI nor the services provided through my membership and the company’s sole responsibility is to withhold and pay my membership fee to PPLSI.`
        );
        break;
      case 'Fringe':
        await expect(this.txaDisclaimer).toBe('');
        break;
      case 'Partial Fringe':
        await expect(this.txaDisclaimer).toBe(
          `to deduct ${totalCost} per pay period from my earnings for my membership and to remit such amount directly to PPLSI. I agree that the company is not responsible or liable for my decision to purchase a membership from PPLSI nor the services provided through my membership and the company’s sole responsibility is to withhold and pay my membership fee to PPLSI.`
        );
        break;
    }
  };

  /**
   * @memberof CheckoutConfirmationPage
   */
  assertTermsOfServiceLanguageAndLink = async () => {
    await this.txaTermsOfServiceLanguage.isVisible({ timeout: 100000 });
    await this.lnkTermsOfService.isVisible({ timeout: 100000 });
  };
}
