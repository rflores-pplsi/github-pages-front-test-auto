import { BrowserContext, expect, Page, Response } from '@playwright/test';
import { ProductDetails } from '../../tests/e2e/data-driven/data/type-definitions';
import { OktaPage } from '../okta/okta.page';
import { PlanalyzerCsrCheckoutPage } from '../planalyzer/planalyzer-csr-checkout.page';
import { CheckoutLocatorsPage } from './checkout-locators.page';
import { CheckoutPaymentsPage } from './checkout-payments.page';
import { CheckoutPaymentsBankDraftPage } from './checkout-payments-bank-draft.page';
import { CheckoutPaymentsCreditCardPage } from './checkout-payments-credit-card.page';

/**
 * @export
 * @extends CheckoutLocatorsPage
 * @class CheckoutConfirmationPage
 */
export class CheckoutConfirmationPage extends CheckoutLocatorsPage {
  // ========================== Instantiate Classes ==================================
  readonly oktaPage: OktaPage;
  readonly planalyzerCsrCheckoutPage: PlanalyzerCsrCheckoutPage;
  readonly checkoutPaymentsPage: CheckoutPaymentsPage;
  readonly checkoutPaymentsBankDraftPage: CheckoutPaymentsBankDraftPage;
  readonly checkoutPaymentsCreditCardPage: CheckoutPaymentsCreditCardPage;
  static pPlan: string;
  static pPlanPrice: string;
  static txtTotalLabel: string;
  static txtTotalPriceLabel: string;

  /**
   * @param {BrowserContext} context
   * @param {Page} page
   * @param {string} lineOfBusiness
   * @param {Array<string>} planSupp
   * @class CheckoutConfirmationPage
   */
  constructor(context: BrowserContext, page: Page, lineOfBusiness: string, planSupp: Array<string>) {
    super(context, page);
    this.page = page;
    this.oktaPage = new OktaPage(page);
    this.planalyzerCsrCheckoutPage = new PlanalyzerCsrCheckoutPage(page);
    this.checkoutPaymentsPage = new CheckoutPaymentsPage(context, page, lineOfBusiness, planSupp);
    this.checkoutPaymentsCreditCardPage = new CheckoutPaymentsCreditCardPage(context, page, lineOfBusiness, planSupp);
    this.checkoutPaymentsBankDraftPage = new CheckoutPaymentsBankDraftPage(context, page, lineOfBusiness, planSupp);
  }

  // ========================== Process Methods ============================

  /**
   * @param {Response} response
   * @param {Array<ProductDetails>} productDetails
   * @memberof CheckoutConfirmationPage
   */
  logFriendlyIDs = async (response: Response, productDetails: Array<ProductDetails>): Promise<void> => {
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
  // navigateToCheckoutConfirmationPageUsingPlanalyzer = async (state: string, paymentMethod: string): Promise<void> => {
  //   await this.oktaPage.navigateToPlanalyzerCsrCheckoutOktaLogin();
  //   await this.oktaPage.loginThroughOkta();
  //   await this.planalyzerCsrCheckoutPage.createOrderRedirectToCheckoutFromPlanalyzer('D2C', 'LegalShield', state, 'en-US', '', '', ['Legal Plan']);
  //   const regionObj = RegionsUtils.usStates;
  //   const stateObj = state;
  //   for (const obj of regionObj) {
  //     if (obj.name == stateObj) {
  //       await this.txtHomeAddress.fill(obj.validAddress.street);
  //       await this.txtCity.fill(obj.validAddress.city);
  //       await this.page.keyboard.press('Tab');
  //       await this.page.keyboard.press('Tab');
  //       await this.txtPostalCode.fill('');
  //       await this.txtPostalCode.fill(obj.validAddress.postalCode);
  //     }
  //   }
  //   await this.btnSaveAndContinue.click();

  //   CheckoutConfirmationPage.pPlan = await this.page.locator(CheckoutConfirmationPage.pPlan).innerText();
  //   CheckoutConfirmationPage.pPlanPrice = await this.pPlanPrice.innerText();
  //   CheckoutConfirmationPage.txtTotalLabel = await this.txtTotalLabel.innerText();
  //   CheckoutConfirmationPage.txtTotalPriceLabel = await this.txtTotalPriceLabel.innerText();
  //   if (paymentMethod.toUpperCase() == 'BD') {
  //     await this.page.waitForLoadState();
  //     this.page.frameLocator("//iframe[@title='payment iframe']");
  //     if (this.frame != null) {
  //       // Click on Add Payment button
  //       await this.btnBankDraft.click();
  //     } else throw new Error('No such frame');

  //     // Fill  Account Number
  //     const txtAccountNumbertst1 = await this.txtAccountNumber;
  //     await txtAccountNumbertst1.type('000000000');

  //     await this.page.keyboard.press('Tab');

  //     // await this.fillRoutingNumberTxt();
  //     if (this.frmPayment != null) {
  //       // Fill  Routing Number
  //       const txtRoutingNumberTxt = await this.txtRoutingNumber;
  //       await txtRoutingNumberTxt.type('000000000');
  //     } else throw new Error('No such frame');

  //     await this.page.keyboard.press('Tab');

  //     if (this.frmPayment != null) {
  //       // Fill  Account Holder Name
  //       const txtAccountHolderNameTxt = await this.txtAccountHolderName;
  //       await txtAccountHolderNameTxt.type('Automation Tester');
  //     } else throw new Error('No such frame');

  //     await this.page.keyboard.press('Tab');

  //     if (this.frmPayment != null) {
  //       // Click on Purchase button
  //       await this.btnPurchase.click();
  //     } else throw new Error('No such frame');

  //     await this.conMembershipWrapper.waitFor({ timeout: 90000 });
  //   } else if (paymentMethod.toUpperCase() == 'CC') {
  //     // Fillout the Credit Card form
  //     // Fill  Account Number
  //     const txtCreditCardNumber = await this.txtCardNumber;
  //     await txtCreditCardNumber.type('4444333322221111');

  //     await this.page.keyboard.press('Tab');

  //     if (this.frmPayment != null) {
  //       // Fill  Expiration Date
  //       const txtExpDateTxt = this.txtExpirationDate;
  //       await txtExpDateTxt.type('01/23');
  //     } else throw new Error('No such frame');

  //     await this.page.keyboard.press('Tab');

  //     if (this.frmPayment != null) {
  //       // Fill  Security Code
  //       const txtExpDateTxt = this.txtSecurityCode;
  //       await txtExpDateTxt.type('111');
  //     } else throw new Error('No such frame');

  //     await this.page.keyboard.press('Tab');
  //     await this.page.keyboard.press('Tab');

  //     if (this.frmPayment != null) {
  //       // Fill  Credit Card Holder Name
  //       const txtCreditCardHolderNameTxt = this.txtCardholderName;
  //       await txtCreditCardHolderNameTxt.type('Automation Tester');
  //     } else throw new Error('No such frame');

  //     await this.page.keyboard.press('Tab');
  //     if (this.frmPayment != null) {
  //       // Fill  Postal Code
  //       const txtCreditCardHolderNameTxt = this.txtBillingPostalCode;
  //       await txtCreditCardHolderNameTxt.type('20147');
  //     } else throw new Error('No such frame');
  //     await this.page.keyboard.press('Tab');
  //     if (this.frmCCPayment != null) {
  //       // Click on Purchase button
  //       await this.btnCreditCardPurchase.click({ force: true });
  //     } else throw new Error('No such frame');
  //   }
  // };

  navigateFromPaymentBankDraftPageToConfirmationPage = async (): Promise<void> => {
    await this.page.waitForLoadState();

    if (this.paymentsLocFrmPayment != null) {
      // Click on Add Payment button
      await this.paymentsLocBtnBankDraft.click();
    } else throw new Error('No such frame');

    // // Fill  Account Number
    // const txtAccountNumbertst1 = await this.txtAccountNumber;
    // await txtAccountNumbertst1.type('000000000');

    // await this.page.keyboard.press('Tab');

    // if (this.frmPayment != null) {
    //   // Fill  Routing Number
    //   const txtRoutingNumberTxt = await this.txtRoutingNumber;
    //   await txtRoutingNumberTxt.type('000000000');
    // } else throw new Error('No such frame');

    // await this.page.keyboard.press('Tab');

    // if (this.frmPayment != null) {
    //   // Fill  Account Holder Name
    //   const txtAccountHolderNameTxt = await this.txtAccountHolderName;
    //   await txtAccountHolderNameTxt.type('Education Employee');
    // } else throw new Error('No such frame');

    // await this.page.keyboard.press('Tab');
    // if (this.frmPayment != null) {
    //   // Click on Purchase button
    //   await this.btnPurchase.click();
    // } else throw new Error('No such frame');
    // await this.conMembershipWrapper.waitFor({ timeout: 90000 });
  };

  // navigateFromPaymentAgreementPageToConfirmationPage = async (): Promise<void> => {
  //   await this.clickAgreementCheckbox();
  //   await this.clickCompleteEnrollmentButton();
  //   await this.conMembershipWrapper.waitFor({ timeout: 90000 });
  // };

  // navigateFromPaymentBankDraftPageToConfirmationPageCanada = async (): Promise<void> => {
  //   await this.page.waitForLoadState();
  //   if (this.frame != null) {
  //     // Click on Add Payment button
  //     await this.btnBankDraft.click();
  //   } else throw new Error('No such frame');

  //   await this.page.waitForLoadState();
  //   // Fill  Account Number
  //   const txtAccountNumbertst2 = await this.txtAccountNumber;
  //   await txtAccountNumbertst2.type(DataUtils.data.testingHarness.ca.bd.Account);

  //   await this.page.keyboard.press('Tab');
  //   if (this.frmPayment != null) {
  //     // Fill  Transit Number
  //     const txtTransitNumberTxt = await this.txtTransitNumber;
  //     await txtTransitNumberTxt.type(DataUtils.data.testingHarness.ca.bd.Transit);
  //   } else throw new Error('No such frame');

  //   await this.page.keyboard.press('Tab');

  //   if (this.frmPayment != null) {
  //     // Fill  Institution Number
  //     const txtInstitutionNumberTxt = await this.txtInstitutionNumber;
  //     await txtInstitutionNumberTxt.type(DataUtils.data.testingHarness.ca.bd.Institution);
  //   } else throw new Error('No such frame');

  //   await this.page.keyboard.press('Tab');

  //   if (this.frmPayment != null) {
  //     // Fill  Account Holder Name
  //     const txtAccountHolderNameTxt = await this.txtAccountHolderName;
  //     await txtAccountHolderNameTxt.type('Automation Tester');
  //   } else throw new Error('No such frame');

  //   await this.page.keyboard.press('Tab');
  //   if (this.frmPayment != null) {
  //     // Click on Purchase button
  //     await this.btnPurchase.click();
  //   } else throw new Error('No such frame');
  //   await this.conMembershipWrapper.waitFor({ timeout: 50000 });
  // };

  // navigateFromPaymentCreditCardPageToConfirmationPageCanada = async (): Promise<void> => {
  //   // Fill  Account Number
  //   const txtCreditCardNumber = await this.txtCardNumber;
  //   await txtCreditCardNumber.type('4444333322221111');

  //   await this.page.keyboard.press('Tab');

  //   if (this.frmPayment != null) {
  //     // Fill  Expiration Date
  //     const txtExpDateTxt = this.txtExpirationDate;
  //     await txtExpDateTxt.type('01/23');
  //   } else throw new Error('No such frame');

  //   await this.page.keyboard.press('Tab');
  //   if (this.frmPayment != null) {
  //     // Fill  Security Code
  //     const txtExpDateTxt = this.txtSecurityCode;
  //     await txtExpDateTxt.type('111');
  //   } else throw new Error('No such frame');

  //   await this.page.keyboard.press('Tab');
  //   await this.page.keyboard.press('Tab');
  //   if (this.frmPayment != null) {
  //     // Fill  Credit Card Holder Name
  //     const txtCreditCardHolderNameTxt = this.txtCardholderName;
  //     await txtCreditCardHolderNameTxt.type('Automation Tester');
  //   } else throw new Error('No such frame');

  //   await this.page.keyboard.press('Tab');
  //   if (this.frmPayment != null) {
  //     // Fill  Postal Code
  //     const txtCreditCardHolderNameTxt = this.txtBillingPostalCode;
  //     await txtCreditCardHolderNameTxt.type('L2G3V9');
  //   } else throw new Error('No such frame');

  //   await this.page.keyboard.press('Tab');
  //   if (this.frmCCPayment != null) {
  //     // Click on Purchase button
  //     await this.btnCreditCardPurchase.click({ force: true });
  //   } else throw new Error('No such frame');

  //   await this.conMembershipWrapper.waitFor({ timeout: 90000 });
  // };

  // ========================== Click Methods ==============================
  /**
   * @memberof CheckoutConfirmationPage
   */
  // clickCompleteEnrollmentButton = async (): Promise<void> => {
  //   console.log(' - checkoutConfirmationPage.clickCompleteEnrollmentButton');
  //   // Click on Complete Enrollment Button
  //   await this.btnCompleteEnrollment.click();
  // };

  /**
   * @memberof CheckoutConfirmationPage
   */
  // clickAgreementCheckbox = async (): Promise<void> => {
  //   console.log(' - checkoutConfirmationPage.clickAgreementCheckbox');
  //   // Click on Complete Enrollment Button
  //   await this.chkAgreement.setChecked(true, { force: true });
  // };

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
        const locator = this.page.locator(
          `//div[contains(@class,"plan-details-card") and contains(.,"${pd.productName.split(' - ')[1]}") and contains (.,"${
            pd.cost
          }") and contains(.,"Monthly")]`
        );
        await expect(locator).toBeVisible();
      } else {
        const locator = this.page.locator(
          `//div[contains(@class,"plan-details-card") and contains(.,"${pd.productName}") and contains (.,"${pd.cost}") and contains(.,"Monthly")]`
        );
        await expect(locator).toBeVisible();
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
        expect(shortName).toEqual(pd.shortCode);
      }
      i++;
    }
  };

  /**
   * @memberof CheckoutConfirmationPage
   */
  // assertWelcomeToLegalShieldFamilyPage = async (): Promise<void> => {
  //   await this.txtWelcomeToLegalshiledFamily.waitFor();
  //   await expect(this.txtWelcomeToLegalshiledFamily).toBe('Welcome!');
  // };

  /**
   * @memberof CheckoutConfirmationPage
   */
  assertOrderSummaryPlanPriceConfirmationPage = async (): Promise<void> => {
    console.log(' - checkoutConfirmationPage.assertOrderSummaryPlanPriceConfirmationPage');
    const planPrice = this.page.locator('div.lsux-card--inset.p-6 h3.lsux-heading.plan-price.lsux-heading--t20');
    expect(planPrice).toBe(CheckoutConfirmationPage.pPlanPrice);
  };

  /**
   * @param {string} planName
   * @memberof CheckoutConfirmationPage
   */
  assertOrderSummaryPlanLabelConfirmationPage = async (planName: string): Promise<void> => {
    console.log(' - checkoutConfirmationPage.assertOrderSummaryPlanLabelConfirmationPage');
    const lblplan = this.page.locator(`text=${planName}`);
    expect(lblplan).toBe(CheckoutConfirmationPage.pPlan);
  };

  /**
   * @memberof CheckoutConfirmationPage
   */
  assertOrderSummaryLegalShieldMembershipConfirmationPage = async (): Promise<void> => {
    console.log(' - checkoutConfirmationPage.assertOrderSummaryMonthlyConfirmationPage');
    const lblplan = this.page.locator('text = LegalShield Membership');
    expect(lblplan).toBe('LegalShield Membership');
  };

  /**
   * @memberof CheckoutConfirmationPage
   */
  assertOrderSummaryMonthlyConfirmationPage = async (): Promise<void> => {
    console.log(' - checkoutConfirmationPage.assertOrderSummaryMonthlyConfirmationPage');
    const lblplan = this.page.locator('ext = Monthly Subscription');
    expect(lblplan).toBe('Monthly Subscription');
  };

  /**
   * @memberof CheckoutConfirmationPage
   */
  // assertNoMemberNumbersAreDisplayed = async (): Promise<void> => {
  //   expect(this.lblMemberNumber).toHaveLength(0);
  // };

  /**
   * @memberof CheckoutConfirmationPage
   */
  assertIdShieldMembershipIsDisplayed = async (): Promise<void> => {
    console.log(' - checkoutConfirmationPage.assertIdShieldMembershipIsDisplayed');
    const ELE = '//h2[contains(@class,"membership-title") and contains (.,"IDShield Membership")]';
    await this.page.locator(ELE).isVisible();
  };

  /**
   * @param {string} planType
   * @memberof CheckoutConfirmationPage
   */
  assertLegalShieldMembershipIsDisplayed = async (planType: string): Promise<void> => {
    console.log(' - checkoutConfirmationPage.assertLegalShieldMembershipIsDisplayed');
    const ele = `//h2[contains(@class,"membership-title") and contains (.,"${planType} Membership")]`;
    await expect(this.page.locator(ele)).toBeVisible({ timeout: 100000 });
  };

  /**
   * @param {string} planType
   * @memberof CheckoutConfirmationPage
   */
  assertMembershipTileIsDisplayed = async (planType: string): Promise<void> => {
    console.log(' - checkoutConfirmationPage.assertMembershipTileIsDisplayed');
    const ele = `//h2[contains(@class,"membership-title") and contains (.,"${planType} Membership")]`;
    await expect(this.page.locator(ele)).toBeVisible({ timeout: 100000 });
  };

  /**
   * @param {string} planName
   * @memberof CheckoutConfirmationPage
   */
  // assertPlanNameDisplayedInConfirmationPageOrderSummary = async (planName: string): Promise<void> => {
  //   console.log(' - checkoutConfirmationPage.assertPlanNameDisplayedInConfirmationPageOrderSummary');
  //   if (planName.includes('-')) {
  //     const splitString = planName.split(' - ');
  //     planName = splitString[0];
  //   }
  //   const ele = `//div[contains(@class,"plan-details-card") and contains(.,"${planName}")]`;
  //   await this.conMembershipWrapper.isVisible({ timeout: 50000 });
  //   await this.page.locator(ele).isVisible({ timeout: 100000 });
  // };

  /**
   * @param {Array<ProductDetails>} productDetails
   * @memberof CheckoutConfirmationPage
   */
  assertAllPlanTilesOnConfirmationPage = async (productDetails: Array<ProductDetails>): Promise<void> => {
    for (const pd of productDetails) {
      const ele = `//div[contains(@class,"plan-details-card") and contains(.,"${pd.productName}") and contains(.,"${pd.shortCode}")]`;
      await expect(this.page.locator(ele)).toBeVisible();
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
    await this.page.locator(ele).isHidden();
  };

  /**
   * @memberof CheckoutConfirmationPage
   */
  assertNoPlanCostsAreDisplayedInConfirmationPageOrderSummary = async (): Promise<void> => {
    console.log(' - checkoutConfirmationPage.assertNoPlanCostsAreDisplayedInConfirmationPageOrderSummary');
    const ele = `//div[contains(@class,"plan-details-card")]//h3[contains(@class,"plan-price")]`;
    expect(await this.page.$$(ele)).toHaveLength(0);
  };

  /**
   * @param {string} planName
   * @memberof CheckoutConfirmationPage
   */
  assertPlanCostNotEmpty = async (planName: string): Promise<void> => {
    const ele = `//div[contains(@class,"plan-details-card") and contains(.,"${planName}")]//h3[contains(@class,"plan-price")]`;
    const innerText = await this.page.innerText(ele);
    expect(innerText).toBeTruthy();
  };

  /**
   * @param {string} planName
   * @param {string} price
   * @memberof CheckoutConfirmationPage
   */
  assertPlanCostIsDisplayedInConfirmationOrderSummaryForPlanName = async (planName: string, price: string): Promise<void> => {
    // if (planName.includes('-')) {
    //   const splitString = planName.split(' - ');
    //   planName = splitString[0];
    // }
    const eleName = `//div[contains(@class,"plan-details-card") and contains(.,"${planName}")]//h3[contains(@class,"lsux-card--title")]`;
    await this.page.waitForSelector(eleName);
    await expect(this.page.locator(eleName)).toHaveText(planName);
    const elePrice = `//div[contains(@class,"plan-details-card") and contains(.,"${planName}")]//h3[contains(@class,"plan-price")]`;
    await expect(this.page.locator(elePrice)).toHaveText(price);
    //div[contains(@class,"plan-details-card") and contains(.,"IDShield Individual")]//h3[contains(@class,"lsux-card--title")]
  };

  /**
   * @param {string} planName
   * @memberof CheckoutConfirmationPage
   */
  assertPlanCostIsHidden = async (planName: string): Promise<void> => {
    const ele = `//div[contains(@class,"plan-details-card") and contains(.,"${planName}")]//h3[contains(@class,"plan-price")]`;
    await this.page.locator(ele).isHidden();
  };

  /**
   * @param {string} groupPayConfig
   * @param {string} totalCost
   * @memberof CheckoutConfirmationPage
   */
  // assertDisclaimerLanguage = async (groupPayConfig: string, totalCost: string): Promise<void> => {
  //   await this.txaDisclaimer.isVisible({ timeout: 100000 });
  //   switch (groupPayConfig) {
  //     case 'Payroll Deduct':
  //       await expect(this.txaDisclaimer).toBe(
  //         `to deduct ${totalCost} per pay period from my earnings for my membership and to remit such amount directly to PPLSI. I agree that the company is not responsible or liable for my decision to purchase a membership from PPLSI nor the services provided through my membership and the company’s sole responsibility is to withhold and pay my membership fee to PPLSI.`
  //       );
  //       break;
  //     case 'Fringe':
  //       await expect(this.txaDisclaimer).toBe('');
  //       break;
  //     case 'Partial Fringe':
  //       await expect(this.txaDisclaimer).toBe(
  //         `to deduct ${totalCost} per pay period from my earnings for my membership and to remit such amount directly to PPLSI. I agree that the company is not responsible or liable for my decision to purchase a membership from PPLSI nor the services provided through my membership and the company’s sole responsibility is to withhold and pay my membership fee to PPLSI.`
  //       );
  //       break;
  //   }
  // };

  /**
   * @memberof CheckoutConfirmationPage
   */
  // assertTermsOfServiceLanguageAndLink = async (): Promise<void> => {
  //   await this.txaTermsOfServiceLanguage.isVisible({ timeout: 100000 });
  //   await this.lnkTermsOfService.isVisible({ timeout: 100000 });
  // };
}
