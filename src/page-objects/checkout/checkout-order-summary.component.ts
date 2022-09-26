/* eslint-disable valid-jsdoc */
import { ShieldBenefitsLegalPricingPage } from '../shield-benefits/shield-benefits-legal-pricing.page';
import { OrderSummary } from './checkout.helpers';
import { OrderSummaryRow } from './checkout.helpers';
import { OrderSummaryWithoutCosts } from './checkout.helpers';
import { OrderSummaryRowWithoutCost } from './checkout.helpers';
import { OrderSummaryWithoutTiers } from './checkout.helpers';
import { OrderSummaryRowWithoutTier } from './checkout.helpers';
import { ProductDetails } from '../../tests/e2e/data/type-definitions';

// Instantiations
const orderSummary = new OrderSummary();
const orderSummaryWithoutTiers = new OrderSummaryWithoutTiers();
const orderSummaryWithoutCosts = new OrderSummaryWithoutCosts();

// ========================== Selectors ==================================
const lnkEditOrder: string = 'button:has-text("Edit")';
const imgHideOrderSummaryChevron: string = 'img[alt="nav_chevron_single_up."]';
const imgShowOrderSummaryChevron: string = 'img[alt="nav_chevron_single_down."]';
const lblBillingFrequency: string = '//p[contains(@class,"billing-frequency")]';
const conOrderSummary: string = '//div[contains(@class,"order-summary")]';
const txtPlanNames: string = '//div[contains(@class,"plan-name-row")]//p[1]';
const txtTierNames: string = '//div[contains(@class,"plan-name-row")]//p//span[2]';
const txtSupplementNames: string =
  '//div[contains(@class,"lsux-row half children2 content-row mb-4 mt-4 pb-4")]//p[not(contains(@style,"text-align: right;"))]';
const txtSupplementCosts: string =
  '//div[contains(@class,"lsux-row half children2 content-row mb-4 mt-4 pb-4")]//p[contains(@style,"text-align: right;")]';
const txtPlanCosts: string = '//div[contains(@class,"lsux-row half children2 content-row mb-4")]//div[contains(@class,"right-label-col")]//p';
const txtTermTotalLabel: string = '//div[contains(@class,"left-label")]//p[contains(.,"Total:")]';
const txtMonthlyTotalLabel: string = '//div[contains(@class,"left-label")]//p[contains(.,"Monthly Total:")]';
const txtMonthlyTotalAmount: string = '//div[contains(@class,"footer-row") and contains(.,"Monthly Total:")]//div[contains(@class,"right-label")]//p';
const txtAnnualTotalLabel: string = '//div[contains(@class,"left-label")]//p[contains(.,"Annual Total:")]';
const txtAnnualTotalAmount: string = '//div[contains(@class,"footer-row") and contains(.,"Annual Total:")]//div[contains(@class,"right-label")]//p';
const txtTermTotalAmount: string = '//div[contains(@class,"footer-row")]//div[contains(@class,"right-label-col")]';
const txtTotalDueTodayLabel: string = '//div[contains(@class,"left-label")]//p[contains(.,"Total Due Today:")]';
const txtTotalDueTodayAmount: string =
  '//div[contains(@class, "footer-row") and contains(., "Total Due Today")]//div[contains(@class,"right-label")]//p';
const txtPayPeriodTotalAmount: string =
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
    await this.page.waitForSelector(lnkEditOrder);
    await this.page.waitForLoadState('networkidle');
    // reset rows to empty when calling this method from the payment page
    if (orderSummary.orderSummaryRows.length != 0) {
      orderSummary.orderSummaryRows = [];
    }
    // store as a variable
    // explore foreach
    const numberOfRows = (await this.page.$$('//div[contains(@class,"plan-name-row")]')).length;
    for (let i: number = 0; i < numberOfRows; i++) {
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
    await this.page.waitForSelector(lnkEditOrder);
    await this.page.waitForLoadState('networkidle');
    // reset rows to empty when calling this method from the payment page
    if (orderSummaryWithoutTiers.orderSummaryRows.length != 0) {
      orderSummaryWithoutTiers.orderSummaryRows = [];
    }
    // write all plans to the orderSummary object
    const numberOfPlans = (await this.page.$$(txtPlanNames)).length;
    for (let i: number = 0; i < numberOfPlans; i++) {
      const row = await this.captureOrderSummaryRowWithoutTier(i);
      orderSummary.addRow(row as unknown as OrderSummaryRow);
    }
    // write all supplements to the orderSummary object
    const numberOfSupplements = (await this.page.$$(txtSupplementNames)).length;
    for (let i: number = 0; i < numberOfSupplements; i++) {
      const row = await this.captureOrderSummarySupplementRowWithoutTier(i);
      orderSummary.addRow(row);
    }
  };

  /**
   * @param {number} [i=0]
   * @memberof CheckoutOrderSummaryComponent
   */
  captureOrderSummaryRow = async (i: number = 0): Promise<OrderSummaryRow> => {
    console.log(' - checkoutOrderSummaryComponent.captureOrderSummaryRow');
    const planNameJsHandle = (await this.page.$$(txtPlanNames))[i].getProperty('innerText');
    const planNameText = await (await planNameJsHandle).jsonValue();
    const tierNameJsHandle = (await this.page.$$(txtTierNames))[i].getProperty('innerText');
    // is this null, and is that ok
    const tierNameText = await (await tierNameJsHandle).jsonValue();
    const planCostJsHandle = (await this.page.$$(txtPlanCosts))[i].getProperty('innerText');
    const planCostText = await (await planCostJsHandle).jsonValue();
    const planRow = new OrderSummaryRow(planNameText, tierNameText, planCostText);
    return planRow;
  };

  /**
   * @param {number} [i=0]
   * @memberof CheckoutOrderSummaryComponent
   */
  captureOrderSummaryRowWithoutTier = async (i: number = 0): Promise<OrderSummaryRowWithoutTier> => {
    console.log(' - checkoutOrderSummaryComponent.captureOrderSummaryRowWithoutTier');
    const planNameJsHandle = (await this.page.$$(txtPlanNames))[i].getProperty('innerText');
    const planNameText = await (await planNameJsHandle).jsonValue();
    const planCostJsHandle = (await this.page.$$(txtPlanCosts))[i].getProperty('innerText');
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
  captureOrderSummarySupplementRowWithoutTier = async (i: number = 0): Promise<OrderSummaryRowWithoutTier> => {
    console.log(' - checkoutOrderSummaryComponent.captureOrderSummaryRowWithoutTier');
    const supplementNameText = await this.page.locator(txtSupplementNames).nth(i).innerText();
    const supplementCostText = await this.page.locator(txtSupplementCosts).nth(i).innerText();
    const supplementRow = new OrderSummaryRowWithoutTier(supplementNameText, supplementCostText);
    return supplementRow;
  };

  /**
   * @param {number} [i=0]
   * @memberof CheckoutOrderSummaryComponent
   */
  captureOrderSummaryRowWithoutCost = async (i: number = 0): Promise<OrderSummaryRowWithoutCost> => {
    console.log(' - checkoutOrderSummaryComponent.captureOrderSummaryRowWithoutCost');
    const planAndTierNameText = await this.page.locator(txtPlanNames).nth(i).innerText();
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
  clickEditOrderLink = async () => {
    console.log(' - checkoutOrderSummaryComponent.clickEditOrderLink');
    // Click on Plans Link from Accounts Navigation
    await this.clickOnElement(lnkEditOrder);
  };

  /**
   * @memberof CheckoutOrderSummaryComponent
   */
  clickOrderSummaryUpChevron = async () => {
    console.log(' - checkoutOrderSummaryComponent.clickOrderSummaryUpChevron');
    // Click on Plans Link from Accounts Navigation
    await this.clickOnElement(imgHideOrderSummaryChevron);
  };

  /**
   * @memberof CheckoutOrderSummaryComponent
   */
  clickOrderSummaryDownChevron = async () => {
    console.log(' - checkoutOrderSummaryComponent.clickOrderSummaryDownChevron');
    // Click on Plans Link from Accounts Navigation
    await this.clickOnElement(imgShowOrderSummaryChevron);
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
    let found: boolean = false;
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
    let found: boolean = false;
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
   * @param {Array<Array<string>>} productNamesAndCosts
   * @memberof CheckoutOrderSummaryComponent
   */
  assertAllProductNamesAndCosts = async (productDetails: Array<ProductDetails>): Promise<void> => {
    console.log(' - checkoutOrderSummaryComponent.assertAllPlanNamesAndCosts');
    for (const pd of productDetails) {
      let found: boolean = false;
      let expectedProductName: string = pd.productName;
      // remove plan prefix if it is a supplement
      if (pd.productName.includes('-')) {
        expectedProductName = await this.extractSupplementName(pd.productName);
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
   * @param {string} productName
   * @memberof CheckoutOrderSummaryComponent
   */
  extractSupplementName = async (productName: string): Promise<string> => {
    console.log(' - checkoutOrderSummaryComponent.extractSupplementName');
    const supplementName = productName.split('- ', 3);
    return supplementName[1];
  };
  /**
   * @param {string} expectedPlanName
   * @memberof CheckoutOrderSummaryComponent
   */
  assertPlanCostsNotDisplayed = async (expectedPlanName: string): Promise<void> => {
    console.log(' - checkoutOrderSummaryComponent.assertPlanCostsNotDisplayed');
    await this.assertElementNotOnPage(txtPlanCosts);
  };

  /**
   * @param {string} planName
   * @param {string} tierName
   * @memberof CheckoutOrderSummaryComponent
   */
  assertPlanNameAndTierName = async (planAndTierName: string): Promise<void> => {
    console.log(' - checkoutOrderSummaryComponent.assertPlanNameAndTierName');
    await this.assertElementContainsText(conOrderSummary, planAndTierName);
  };

  /**
   * @param {string} term
   * @memberof CheckoutOrderSummaryComponent
   */
  assertTermLabel = async (term: string): Promise<void> => {
    console.log(' - checkoutOrderSummaryComponent.assertTermTotal');
    await this.assertElementHasText(txtTermTotalLabel, `${term} Total:`);
  };

  /**
   * @param {string} total
   * @memberof CheckoutOrderSummaryComponent
   */
  assertTermLabelAndTotal = async (term: string, total: string): Promise<void> => {
    console.log(' - checkoutOrderSummaryComponent.assertTermTotal');
    await this.assertElementHasText(txtMonthlyTotalLabel, `${term} Total:`);
    await this.assertElementHasText(txtMonthlyTotalAmount, total);
  };

  assertBillingFrequency = async (billingFrequency: string): Promise<void> => {
    console.log(' - checkoutOrderSummaryComponent.assertBillingFrequency');
    await this.assertElementContainsText(lblBillingFrequency, billingFrequency);
  };

  /**
   * @param {string} total
   * @memberof CheckoutOrderSummaryComponent
   */
  assertAnnualLabelAndTotal = async (total: string): Promise<void> => {
    console.log(' - checkoutOrderSummaryComponent.assertAnnualLabelAndTotal');
    await this.assertElementHasText(txtAnnualTotalLabel, 'Annual Total:');
    await this.assertElementHasText(txtAnnualTotalAmount, total);
  };

  /**
   * @param {string} termTotal
   * @memberof CheckoutOrderSummaryComponent
   */
  assertTermTotal = async (termTotal: string): Promise<void> => {
    console.log(' - checkoutOrderSummaryComponent.assertTermTotal');
    await this.assertElementHasText(txtTermTotalAmount, termTotal);
  };

  /**
   * @param {string} total
   * @memberof CheckoutOrderSummaryComponent
   */
  assertTotalDueToday = async (total: string): Promise<void> => {
    console.log(' - checkoutOrderSummaryComponent.assertTotalDueToday');
    await this.assertElementHasText(txtTotalDueTodayLabel, 'Total Due Today:');
    await this.assertElementHasText(txtTotalDueTodayAmount, total);
  };

  /**
   * @param {string} total
   * @memberof CheckoutOrderSummaryComponent
   */
  assertPayPeriodTotal = async (total: string): Promise<void> => {
    console.log(' - checkoutOrderSummaryComponent.assertPayPeriodTotal');
    await this.assertElementHasText(txtPayPeriodTotalAmount, total);
  };

  /**
   * @memberof CheckoutOrderSummaryComponent
   */
  assertPayPeriodTotalIsNotDisplayed = async (): Promise<void> => {
    console.log(' - checkoutOrderSummaryComponent.assertPayPeriodTotalIsNotDisplayed');
    await this.assertElementIsHidden(txtPayPeriodTotalAmount);
  };

  /**
   * @param {string} planName
   * @memberof CheckoutOrderSummaryComponent
   */
  assertPlanNameDisplayedInSummary = async (planName: string): Promise<void> => {
    console.log(' - checkoutOrderSummaryComponent.assertPlanNameDisplayedInSummary');
    await this.assertElementContainsText(conOrderSummary, planName);
  };
}
