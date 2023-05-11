import { ShieldBenefitsLegalPricingPage } from '../shield-benefits/shield-benefits-legal-pricing.page';
import { OrderSummary } from './checkout.helpers';
import { OrderSummaryRow } from './checkout.helpers';
import { OrderSummaryWithoutCosts } from './checkout.helpers';
import { OrderSummaryRowWithoutCost } from './checkout.helpers';
import { OrderSummaryWithoutTiers } from './checkout.helpers';
import { OrderSummaryRowWithoutTier } from './checkout.helpers';
import { ProductDetails } from '../../types/types';
// Instantiations
const orderSummary = new OrderSummary();
const orderSummaryWithoutTiers = new OrderSummaryWithoutTiers();
const orderSummaryWithoutCosts = new OrderSummaryWithoutCosts();

// ========================== Selectors ==================================
const LNK_EDIT_ORDER = 'button:has-text("Edit")';
const IMG_HIDE_ORDER_SUMMARY_CHEVRON = 'img[alt="nav_chevron_single_up."]';
const IMG_SHOW_ORDER_SUMMARY_CHEVRON = 'img[alt="nav_chevron_single_down."]';
const CON_ORDER_SUMMARY = '//div[contains(@class,"order-summary")]';
const TXT_PLAN_NAMES = '//div[contains(@class,"plan-name-row")]//p[1]';
const TXT_TIER_NAMES = '//div[contains(@class,"plan-name-row")]//p//span[2]';
const TXT_SUPPLEMENT_NAMES =
  '//div[contains(@class,"lsux-row half children2 content-row mb-4 mt-4 pb-4")]//p[not(contains(@style,"text-align: right;"))]';
const TXT_SUPPLEMENT_COSTS = '//div[contains(@class,"lsux-row half children2 content-row mb-4 mt-4 pb-4")]//p[contains(@style,"text-align: right;")]';
const TXT_PLAN_COSTS = '//div[contains(@class,"lsux-row half children2 content-row mb-4")]//div[contains(@class,"right-label-col")]//p';
const TXT_TERM_TOTAL_LABEL = '//div[contains(@class,"left-label")]//p[contains(.,"Total:")]';
const TXT_MONTHLY_TOTAL_LABEL = '//div[contains(@class,"left-label")]//p[contains(.,"Monthly Total:")]';
const TXT_MONTHLY_TOTAL_AMOUNT = '//div[contains(@class,"footer-row") and contains(.,"Monthly Total:")]//div[contains(@class,"right-label")]//p';
const TXT_ANNUAL_TOTAL_LABEL = '//div[contains(@class,"left-label")]//p[contains(.,"Annual Total:")]';
const TXT_ANNUAL_TOTAL_AMOUNT = '//div[contains(@class,"footer-row") and contains(.,"Annual Total:")]//div[contains(@class,"right-label")]//p';
const TXT_TERM_TOTAL_AMOUNT = '//div[contains(@class,"footer-row")]//div[contains(@class,"right-label-col")]';
const TXT_TOTAL_DUE_TODAY_LABEL = '//div[contains(@class,"left-label")]//p[contains(.,"Total Due Today:")]';
const TXT_TOTAL_DUE_TODAY_AMOUNT = '//div[contains(@class, "footer-row") and contains(., "Total Due Today")]//div[contains(@class,"right-label")]//p';
const TXT_PAY_PERIOD_TOTAL_AMOUNT =
  '//div[contains(@class,"footer-row") and contains(.,"Pay Period Total:")]//div[contains(@class,"right-label")]//p';

/**
 * @export
 * @class CheckoutOrderSummaryComponent
 * @extends {ShieldBenefitsLegalPricingPage}
 */
export class CheckoutOrderSummaryComponent extends ShieldBenefitsLegalPricingPage {
  // ========================== Process Methods ============================

  /**
   * @param {string} groupPayConfig
   * @memberof CheckoutOrderSummaryComponent
   */
  captureOrderSummary = async (groupPayConfig: string): Promise<void> => {
    console.log(' - checkoutOrderSummaryComponent.captureOrderSummary');
    await this.page.waitForSelector(LNK_EDIT_ORDER);
    await this.page.waitForLoadState('networkidle');
    // reset rows to empty when calling this method from the payment page
    if (orderSummary.orderSummaryRows.length != 0) {
      orderSummary.orderSummaryRows = [];
    }
    // store as a variable
    // explore foreach
    const numberOfRows = (await this.page.$$('//div[contains(@class,"plan-name-row")]')).length;
    for (let i = 0; i < numberOfRows; i++) {
      if (groupPayConfig == 'Fringe') {
        const row = await this.captureOrderSummaryRowWithoutCost(i);
        orderSummaryWithoutCosts.addRow(row);
      } else {
        const row = await this.captureOrderSummaryRow(i);
        orderSummary.addRow(row);
      }
    }
  };

  /**
   * @memberof CheckoutOrderSummaryComponent
   */
  captureOrderSummaryWithoutTier = async (): Promise<void> => {
    console.log(' - checkoutOrderSummaryComponent.captureOrderSummaryWithoutTier');
    await this.page.waitForSelector(LNK_EDIT_ORDER);
    await this.page.waitForLoadState('networkidle');
    // reset rows to empty when calling this method from the payment page
    if (orderSummaryWithoutTiers.orderSummaryRows.length != 0) {
      orderSummaryWithoutTiers.orderSummaryRows = [];
    }
    // write all plans to the orderSummary object
    const numberOfPlans = (await this.page.$$(TXT_PLAN_NAMES)).length;
    for (let i = 0; i < numberOfPlans; i++) {
      const row = await this.captureOrderSummaryRowWithoutTier(i);
      orderSummary.addRow(row as unknown as OrderSummaryRow);
    }
    // write all supplements to the orderSummary object
    const numberOfSupplements = (await this.page.$$(TXT_SUPPLEMENT_NAMES)).length;
    for (let i = 0; i < numberOfSupplements; i++) {
      const row = await this.captureOrderSummarySupplementRowWithoutTier(i);
      orderSummary.addRow(row as unknown as OrderSummaryRow);
    }
  };

  /**
   * @param {number} [i=0]
   * @memberof CheckoutOrderSummaryComponent
   */
  captureOrderSummaryRow = async (i = 0): Promise<OrderSummaryRow> => {
    console.log(' - checkoutOrderSummaryComponent.captureOrderSummaryRow');
    const planNameJsHandle = (await this.page.$$(TXT_PLAN_NAMES))[i].getProperty('innerText');
    const planNameText = await (await planNameJsHandle).jsonValue();
    const tierNameJsHandle = (await this.page.$$(TXT_TIER_NAMES))[i].getProperty('innerText');
    // is this null, and is that ok
    const tierNameText = await (await tierNameJsHandle).jsonValue();
    const planCostJsHandle = (await this.page.$$(TXT_PLAN_COSTS))[i].getProperty('innerText');
    const planCostText = await (await planCostJsHandle).jsonValue();
    const planRow = new OrderSummaryRow(planNameText, tierNameText, planCostText);
    return planRow;
  };

  /**
   * @param {number} [i=0]
   * @memberof CheckoutOrderSummaryComponent
   */
  captureOrderSummaryRowWithoutTier = async (i = 0): Promise<OrderSummaryRowWithoutTier> => {
    console.log(' - checkoutOrderSummaryComponent.captureOrderSummaryRowWithoutTier');
    const planNameJsHandle = (await this.page.$$(TXT_PLAN_NAMES))[i].getProperty('innerText');
    const planNameText = await (await planNameJsHandle).jsonValue();
    const planCostJsHandle = (await this.page.$$(TXT_PLAN_COSTS))[i].getProperty('innerText');
    const planCostText = await (await planCostJsHandle).jsonValue();
    const planRow = new OrderSummaryRowWithoutTier(planNameText, planCostText);
    return planRow;
  };

  /**
   *
   *
   * @param {number} [i=0]
   * @memberof CheckoutOrderSummaryComponent
   */
  captureOrderSummarySupplementRowWithoutTier = async (i = 0): Promise<OrderSummaryRowWithoutTier> => {
    console.log(' - checkoutOrderSummaryComponent.captureOrderSummaryRowWithoutTier');
    const supplementNameText = await this.page.locator(TXT_SUPPLEMENT_NAMES).nth(i).innerText();
    const supplementCostText = await this.page.locator(TXT_SUPPLEMENT_COSTS).nth(i).innerText();
    const supplementRow = new OrderSummaryRowWithoutTier(supplementNameText, supplementCostText);
    return supplementRow;
  };

  /**
   * @param {number} [i=0]
   * @memberof CheckoutOrderSummaryComponent
   */
  captureOrderSummaryRowWithoutCost = async (i = 0): Promise<OrderSummaryRowWithoutCost> => {
    console.log(' - checkoutOrderSummaryComponent.captureOrderSummaryRowWithoutCost');
    const planAndTierNameText = await this.page.locator(TXT_PLAN_NAMES).nth(i).innerText();
    const splitted = planAndTierNameText.split(' - ');
    const planNameText = splitted[0];
    const tierNameText = splitted[1];
    const planRow = new OrderSummaryRowWithoutCost(planNameText, tierNameText);
    return planRow;
  };

  // resetOrderSummaryRows = async (): Promise<void> => {
  //   console.log(' - checkoutOrderSummaryComponent.resetOrderSummaryRows');
  //   orderSummary.orderSummaryRows.forEach(async (row) => {
  //     delete row.planName;
  //   )}
  // };

  // Figure out .textContent for Webkit failures
  // /**
  //  * @param {number} [i=0]
  //  * @memberof CheckoutOrderSummaryComponent
  //  */
  // captureOrderSummaryRow = async (i: number = 0): Promise<OrderSummaryRow> => {
  //   console.log(' - checkoutOrderSummaryComponent.captureOrderSummaryRow');
  //   const planNameText = await this.page.textContent(`//div[contains(@class,"plan-name-row")][${i}]`);
  //   console.log(planNameText);
  //   await this.page.pause();
  //   // const planNameJsHandle = (await this.page.$$(txtPlanNames))[i].getProperty('innerText');
  //   // const planNameText = await (await planNameJsHandle).jsonValue();
  //   // const planCostJsHandle = (await this.page.$$(txtPlanCosts))[i].getProperty('innerText');
  //   const planCostText = await this.page.textContent(
  //     `//div[contains(@class,"lsux-row half children2 content-row mb-4")]//div[contains(@class,"right-label-col")]//p[${i}]`
  //   );
  //   const planRow = new OrderSummaryRow(planNameText, planCostText);
  //   return planRow;
  // };

  // ========================== Navigate Methods ===========================
  // ========================== Click Methods ==============================

  /**
   * @memberof CheckoutOrderSummaryComponent
   */
  clickEditOrderLink = async (): Promise<void> => {
    console.log(' - checkoutOrderSummaryComponent.clickEditOrderLink');
    // Click on Plans Link from Accounts Navigation
    await this.clickOnElement(LNK_EDIT_ORDER);
  };

  /**
   * @memberof CheckoutOrderSummaryComponent
   */
  clickOrderSummaryUpChevron = async (): Promise<void> => {
    console.log(' - checkoutOrderSummaryComponent.clickOrderSummaryUpChevron');
    // Click on Plans Link from Accounts Navigation
    await this.clickOnElement(IMG_HIDE_ORDER_SUMMARY_CHEVRON);
  };

  /**
   * @memberof CheckoutOrderSummaryComponent
   */
  clickOrderSummaryDownChevron = async (): Promise<void> => {
    console.log(' - checkoutOrderSummaryComponent.clickOrderSummaryDownChevron');
    // Click on Plans Link from Accounts Navigation
    await this.clickOnElement(IMG_SHOW_ORDER_SUMMARY_CHEVRON);
  };

  // ========================== Assertion Methods ==========================

  /**
   * @param {string} expectedPlanName
   * @param {string} expectedTierName
   * @param {string} expectedPlanCost
   * @memberof CheckoutOrderSummaryComponent
   */
  assertPlanNameFriendlyTierNameAndCost = async (
    expectedPlanName: string,
    expectedTierName: string | undefined,
    expectedPlanCost: string
  ): Promise<void> => {
    console.log(' - checkoutOrderSummaryComponent.assertPlanNameTierNameAndCost');
    let found = false;
    orderSummary.orderSummaryRows.forEach(async (row) => {
      const planName = row.planName;
      const tierName = row.tierName;
      const cost = row.planCost;
      if (planName == expectedPlanName) {
        found = true;
        await this.assertStringMatch(tierName as string, expectedTierName as string);
        await this.assertStringMatch(cost as string, expectedPlanCost);
      }
    });

    if (found == false) {
      try {
        await this.assertBoolean(found, true);
      } catch {
        console.log(JSON.stringify(orderSummary));
        throw new Error('Plan Name not found in Order Summary');
      }
    }
  };
  /**
   * @param {string} expectedPlanName
   * @param {string} expectedPlanCost
   * @memberof CheckoutOrderSummaryComponent
   */
  assertPlanNameAndCost = async (expectedPlanName: string, expectedPlanCost: string): Promise<void> => {
    console.log(' - checkoutOrderSummaryComponent.assertPlanNameAndCost');
    let found = false;
    orderSummary.orderSummaryRows.forEach(async (row) => {
      const planName = row.planName;
      const costs = row.planCost;
      if (planName == expectedPlanName) {
        found = true;
        await this.assertStringMatch(costs as string, expectedPlanCost);
      }
    });
    if (found == false) {
      try {
        await this.assertBoolean(found, true);
      } catch {
        console.log(JSON.stringify(orderSummary));
        throw new Error('Plan Name not found in Order Summary');
      }
    }
  };

  /**
   *
   *
   * @param {Array<ProductDetails>} productDetails
   * @memberof CheckoutOrderSummaryComponent
   */
  assertAllnamesAndCosts = async (productDetails: Array<ProductDetails>): Promise<void> => {
    console.log(' - checkoutOrderSummaryComponent.assertAllnamesAndCosts');
    for (const pd of productDetails) {
      let found = false;
      let expectedProductName: string = pd.name;
      // remove plan prefix if it is a supplement
      if (pd.name.includes('-')) {
        expectedProductName = await this.extractSupplementName(pd.name);
      }
      for (const row of orderSummary.orderSummaryRows) {
        const planName = row.planName;
        const costs = row.planCost;
        // If product is a supplement, need to remove the name of the parent plan from the string
        if (planName == expectedProductName) {
          found = true;
          await this.assertStringMatch(costs, pd.cost);
          // break out of productAndNames For loop if found
          break;
        }
      }

      if (found == false) {
        try {
          await this.assertBoolean(found, true);
        } catch {
          // console.log('Order Summary' + JSON.stringify(orderSummary));
          throw new Error('Product Name not found in Order Summary');
        }
      }
    }
  };

  /**
   * @param {string} name
   * @memberof CheckoutOrderSummaryComponent
   */
  extractSupplementName = async (name: string): Promise<string> => {
    console.log(' - checkoutOrderSummaryComponent.extractSupplementName');
    const supplementName = name.split('- ', 3);
    return supplementName[1];
  };
  /**
   *
   *
   * @memberof CheckoutOrderSummaryComponent
   */
  assertPlanCostsNotDisplayed = async (): Promise<void> => {
    console.log(' - checkoutOrderSummaryComponent.assertPlanCostsNotDisplayed');
    await this.assertElementNotOnPage(TXT_PLAN_COSTS);
  };

  /**
   *
   *
   * @param {string} planAndTierName
   * @memberof CheckoutOrderSummaryComponent
   */
  assertPlanNameAndTierName = async (planAndTierName: string): Promise<void> => {
    console.log(' - checkoutOrderSummaryComponent.assertPlanNameAndTierName');
    await this.assertElementContainsText(CON_ORDER_SUMMARY, planAndTierName);
  };

  /**
   * @param {string} term
   * @memberof CheckoutOrderSummaryComponent
   */
  assertTermLabel = async (term: string): Promise<void> => {
    console.log(' - checkoutOrderSummaryComponent.assertTermLabel');
    await this.assertElementHasText(TXT_TERM_TOTAL_LABEL, `${term} Total:`);
  };

  /**
   *
   *
   * @param {string} term
   * @param {string} total
   * @memberof CheckoutOrderSummaryComponent
   */
  assertTermLabelAndTotal = async (term: string, total: string): Promise<void> => {
    console.log(' - checkoutOrderSummaryComponent.assertTermTotal');
    await this.assertElementHasText(TXT_MONTHLY_TOTAL_LABEL, `${term} Total:`);
    await this.assertElementHasText(TXT_MONTHLY_TOTAL_AMOUNT, total);
  };

  assertBillingFrequenciesForAllProducts = async (productDetails: Array<ProductDetails>): Promise<void> => {
    console.log(' - checkoutOrderSummaryComponent.assertBillingFrequency');
    for (const pd of productDetails) {
      if (pd.name.includes('-')) {
        // parse out supplement name from the testharness product name
        const supplementName = pd.name.split(' - ');
        const eleBillingFrequency = `//div[contains(@class,"lsux-row half children2 content-row mb-4 mt-4") and contains(.,"${supplementName[1]}")]/following-sibling::div[1]`;
        await this.assertElementContainsText(eleBillingFrequency, pd.term);
      } else {
        const eleBillingFrequency = `//div[contains(@class,"lsux-row half children2 content-row mb-4 mt-4") and contains(.,"${pd.name}")]/following-sibling::div[1]`;
        await this.assertElementContainsText(eleBillingFrequency, pd.term);
      }
    }
  };

  /**
   * @param {string} total
   * @memberof CheckoutOrderSummaryComponent
   */
  assertAnnualLabelAndTotal = async (total: string): Promise<void> => {
    console.log(' - checkoutOrderSummaryComponent.assertAnnualLabelAndTotal');
    await this.assertElementHasText(TXT_ANNUAL_TOTAL_LABEL, 'Annual Total:');
    await this.assertElementHasText(TXT_ANNUAL_TOTAL_AMOUNT, total);
  };

  /**
   * @param {string} termTotal
   * @memberof CheckoutOrderSummaryComponent
   */
  assertTermTotal = async (termTotal: string): Promise<void> => {
    console.log(' - checkoutOrderSummaryComponent.assertTermTotal');
    await this.assertElementHasText(TXT_TERM_TOTAL_AMOUNT, termTotal);
  };

  /**
   * @param {string} total
   * @memberof CheckoutOrderSummaryComponent
   */
  assertTotalDueToday = async (total: string): Promise<void> => {
    console.log(' - checkoutOrderSummaryComponent.assertTotalDueToday');
    await this.assertElementHasText(TXT_TOTAL_DUE_TODAY_LABEL, 'Total Due Today:');
    await this.assertElementHasText(TXT_TOTAL_DUE_TODAY_AMOUNT, total);
  };

  /**
   * @param {string} total
   * @memberof CheckoutOrderSummaryComponent
   */
  assertPayPeriodTotal = async (total: string): Promise<void> => {
    console.log(' - checkoutOrderSummaryComponent.assertPayPeriodTotal');
    await this.assertElementHasText(TXT_PAY_PERIOD_TOTAL_AMOUNT, total);
  };

  /**
   * @memberof CheckoutOrderSummaryComponent
   */
  assertPayPeriodTotalIsNotDisplayed = async (): Promise<void> => {
    console.log(' - checkoutOrderSummaryComponent.assertPayPeriodTotalIsNotDisplayed');
    await this.assertElementIsHidden(TXT_PAY_PERIOD_TOTAL_AMOUNT);
  };

  /**
   * @param {string} planName
   * @memberof CheckoutOrderSummaryComponent
   */
  assertPlanNameDisplayedInSummary = async (planName: string): Promise<void> => {
    console.log(' - checkoutOrderSummaryComponent.assertPlanNameDisplayedInSummary');
    await this.assertElementContainsText(CON_ORDER_SUMMARY, planName);
  };
}
