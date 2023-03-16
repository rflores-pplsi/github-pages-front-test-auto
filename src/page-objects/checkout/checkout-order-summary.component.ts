import { OrderSummaryRow } from './checkout.helpers';
import { OrderSummaryRowWithoutCost } from './checkout.helpers';
import { OrderSummaryRowWithoutTier } from './checkout.helpers';
import { ProductDetails } from '../../tests/e2e/data-driven/data/type-definitions';
import { CheckoutLocatorsPage } from './checkout-locators.page';
import { expect } from '@playwright/test';

/**
 * @export
 * @class CheckoutOrderSummaryComponent
 * @extends {CheckoutLocatorsPage}
 */
export class CheckoutOrderSummaryComponent extends CheckoutLocatorsPage {
  // ========================== Process Methods ============================

  /**
   * @param {string} groupPayConfig
   * @memberof CheckoutOrderSummaryComponent
   */
  captureOrderSummary = async (groupPayConfig: string): Promise<void> => {
    console.log(' - checkoutOrderSummaryComponent.captureOrderSummary');
    await this.OrderSummaryLocLnkEditOrder.waitFor();
    await this.page.waitForLoadState('networkidle');
    // reset rows to empty when calling this method from the payment page
    if (this.orderSummary.orderSummaryRows.length != 0) {
      this.orderSummary.orderSummaryRows = [];
    }
    // store as a variable
    // explore foreach
    const numberOfRows = (await this.page.$$('//div[contains(@class,"plan-name-row")]')).length;
    for (let i = 0; i < numberOfRows; i++) {
      if (groupPayConfig == 'Fringe') {
        const row = await this.captureOrderSummaryRowWithoutCost(i);
        this.orderSummaryWithoutCosts.addRow(row);
      } else {
        const row = await this.captureOrderSummaryRow(i);
        this.orderSummary.addRow(row);
      }
    }
  };

  /**
   * @memberof CheckoutOrderSummaryComponent
   */
  captureOrderSummaryWithoutTier = async (): Promise<void> => {
    console.log(' - checkoutOrderSummaryComponent.captureOrderSummaryWithoutTier');
    await this.OrderSummaryLocLnkEditOrder.waitFor();
    await this.page.waitForLoadState('networkidle');
    // reset rows to empty when calling this method from the payment page
    if (this.orderSummaryWithoutTiers.orderSummaryRows.length != 0) {
      this.orderSummaryWithoutTiers.orderSummaryRows = [];
    }
    // write all plans to the orderSummary object
    const numberOfPlans = await this.OrderSummaryLocTxtPlanNames.count();
    for (let i = 0; i < numberOfPlans; i++) {
      const row = await this.captureOrderSummaryRowWithoutTier(i);
      this.orderSummary.addRow(row as unknown as OrderSummaryRow);
    }
    // write all supplements to the orderSummary object
    const numberOfSupplements = await this.OrderSummaryLocTxtSupplementNames.count();
    for (let i = 0; i < numberOfSupplements; i++) {
      const row = await this.captureOrderSummarySupplementRowWithoutTier(i);
      this.orderSummary.addRow(row as unknown as OrderSummaryRow);
    }
  };

  /**
   * @param {number} [i=0]
   * @memberof CheckoutOrderSummaryComponent
   */
  captureOrderSummaryRowWithoutTier = async (i = 0): Promise<OrderSummaryRowWithoutTier> => {
    console.log(' - checkoutOrderSummaryComponent.captureOrderSummaryRowWithoutTier');
    const planNameText = this.OrderSummaryLocTxtPlanNames.nth(i).innerText();
    const planCostText = this.OrderSummaryLocTxtPlanCosts.nth(i).innerText();
    const planRow = new OrderSummaryRowWithoutTier(await planNameText, await planCostText);
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
    const supplementNameText = await this.OrderSummaryLocTxtSupplementNames.nth(i).innerText();
    const supplementCostText = await this.OrderSummaryLocTxtSupplementCosts.nth(i).innerText();
    const supplementRow = new OrderSummaryRowWithoutTier(supplementNameText, supplementCostText);
    return supplementRow;
  };

  /**
   * @param {number} [i=0]
   * @memberof CheckoutOrderSummaryComponent
   */
  captureOrderSummaryRowWithoutCost = async (i = 0): Promise<OrderSummaryRowWithoutCost> => {
    console.log(' - checkoutOrderSummaryComponent.captureOrderSummaryRowWithoutCost');
    const planAndTierNameText = await this.OrderSummaryLocTxtPlanNames.nth(i).innerText();
    const splitted = planAndTierNameText.split(' - ');
    const planNameText = splitted[0];
    const tierNameText = splitted[1];
    const planRow = new OrderSummaryRowWithoutCost(planNameText, tierNameText);
    return planRow;
  };

  resetOrderSummaryRows = async (): Promise<void> => {
    console.log(' - checkoutOrderSummaryComponent.resetOrderSummaryRows');
    //this.orderSummary.orderSummaryRows.forEach(async (row) => {
    //  delete row.planName;
    //});
  };

  /**
   * @param {number} [i=0]
   * @memberof CheckoutOrderSummaryComponent
   */
  captureOrderSummaryRow = async (i = 0): Promise<OrderSummaryRow> => {
    console.log(' - checkoutOrderSummaryComponent.captureOrderSummaryRow');
    const planNameText = this.OrderSummaryLocTxtPlanNames.nth(i).innerText();
    const tierNameText = this.OrderSummaryLocTxtTierNames.nth(i).innerText();
    // is this null, and is that ok
    const planCostText = this.OrderSummaryLocTxtPlanCosts.nth(i).innerText();
    const planRow = new OrderSummaryRow(await planNameText, await tierNameText, await planCostText);
    return planRow;
  };

  // ========================== Navigate Methods ===========================
  // ========================== Click Methods ==============================

  /**
   * @memberof CheckoutOrderSummaryComponent
   */
  clickEditOrderLink = async (): Promise<void> => {
    console.log(' - checkoutOrderSummaryComponent.clickEditOrderLink');
    // Click on Plans Link from Accounts Navigation
    await this.OrderSummaryLocLnkEditOrder.click();
  };

  /**
   * @memberof CheckoutOrderSummaryComponent
   */
  clickOrderSummaryUpChevron = async (): Promise<void> => {
    console.log(' - checkoutOrderSummaryComponent.clickOrderSummaryUpChevron');
    // Click on Plans Link from Accounts Navigation
    await this.OrderSummaryLocImgHideOrderSummaryChevron.click();
  };

  /**
   * @memberof CheckoutOrderSummaryComponent
   */
  clickOrderSummaryDownChevron = async (): Promise<void> => {
    console.log(' - checkoutOrderSummaryComponent.clickOrderSummaryDownChevron');
    // Click on Plans Link from Accounts Navigation
    await this.OrderSummaryLocImgShowOrderSummaryChevron.click();
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
    this.orderSummary.orderSummaryRows.forEach(async (row) => {
      const planName = row.planName;
      const tierName = row.tierName;
      const cost = row.planCost;
      if (planName == expectedPlanName) {
        found = true;
        expect(tierName as string).toEqual(expectedTierName as string);
        expect(cost as string).toEqual(expectedPlanCost);
      }
    });

    if (found == false) {
      try {
        expect(found).toEqual(true);
      } catch {
        console.log(JSON.stringify(this.orderSummary));
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
    this.orderSummary.orderSummaryRows.forEach(async (row) => {
      const planName = row.planName;
      const costs = row.planCost;
      if (planName == expectedPlanName) {
        found = true;
        expect(costs as string).toEqual(expectedPlanCost);
      }
    });
    if (found == false) {
      try {
        expect(found).toEqual(true);
      } catch {
        console.log(JSON.stringify(this.orderSummary));
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
  assertAllProductNamesAndCosts = async (productDetails: Array<ProductDetails>): Promise<void> => {
    console.log(' - checkoutOrderSummaryComponent.assertAllProductNamesAndCosts');
    for (const pd of productDetails) {
      let found = false;
      let expectedProductName: string = pd.productName;
      // remove plan prefix if it is a supplement
      if (pd.productName.includes('-')) {
        expectedProductName = await this.extractSupplementName(pd.productName);
      }
      for (const row of this.orderSummary.orderSummaryRows) {
        const planName = row.planName;
        const costs: string | null | undefined = row.planCost;
        // If product is a supplement, need to remove the name of the parent plan from the string
        if (planName == expectedProductName) {
          found = true;
          expect(costs).toEqual(pd.cost);
          // break out of productAndNames For loop if found
          break;
        }
      }

      if (found == false) {
        try {
          expect(found).toEqual(true);
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
   *
   *
   * @memberof CheckoutOrderSummaryComponent
   */
  assertPlanCostsNotDisplayed = async (): Promise<void> => {
    console.log(' - checkoutOrderSummaryComponent.assertPlanCostsNotDisplayed');
    await expect(await this.OrderSummaryLocTxtPlanCosts).toHaveLength(0);
  };

  /**
   *
   *
   * @param {string} planAndTierName
   * @memberof CheckoutOrderSummaryComponent
   */
  assertPlanNameAndTierName = async (planAndTierName: string): Promise<void> => {
    console.log(' - checkoutOrderSummaryComponent.assertPlanNameAndTierName');
    await expect(this.OrderSummaryLocCocOrderSummary).toContainText(planAndTierName);
  };

  /**
   * @param {string} term
   * @memberof CheckoutOrderSummaryComponent
   */
  assertTermLabel = async (term: string): Promise<void> => {
    console.log(' - checkoutOrderSummaryComponent.assertTermLabel');
    await expect(this.OrderSummaryLocTxtTermTotalLabel).toHaveText(`${term} Total:`);
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
    await expect(this.OrderSummaryLocTxtMonthlyTotalLabel).toHaveText(`${term} Total:`);
    await expect(this.OrderSummaryLocTxtMonthlyTotalAmount).toHaveText(total);
  };

  assertBillingFrequenciesForAllProducts = async (productDetails: Array<ProductDetails>): Promise<void> => {
    console.log(' - checkoutOrderSummaryComponent.assertBillingFrequency');
    for (const pd of productDetails) {
      if (pd.productName.includes('-')) {
        // parse out supplement name from the testharness product name
        const supplementName = pd.productName.split(' - ');
        const eleBillingFrequency = `//div[contains(@class,"lsux-row half children2 content-row mb-4 mt-4") and contains(.,"${supplementName[1]}")]/following-sibling::div[1]`;
        const locator = this.page.locator(eleBillingFrequency);
        await expect(locator).toContainText(pd.term);
      } else {
        const eleBillingFrequency = `//div[contains(@class,"lsux-row half children2 content-row mb-4 mt-4") and contains(.,"${pd.productName}")]/following-sibling::div[1]`;
        const locator = this.page.locator(eleBillingFrequency);
        await expect(locator).toContainText(pd.term);
      }
    }
  };

  /**
   * @param {string} total
   * @memberof CheckoutOrderSummaryComponent
   */
  assertAnnualLabelAndTotal = async (total: string): Promise<void> => {
    console.log(' - checkoutOrderSummaryComponent.assertAnnualLabelAndTotal');
    await expect(this.OrderSummaryLocTxtAnnualTotalLabel).toHaveText('Annual Total:');
    await expect(this.OrderSummaryLocTxtAnnualTotalAmount).toHaveText(total);
  };

  /**
   * @param {string} termTotal
   * @memberof CheckoutOrderSummaryComponent
   */
  assertTermTotal = async (termTotal: string): Promise<void> => {
    console.log(' - checkoutOrderSummaryComponent.assertTermTotal');
    await expect(this.OrderSummaryLocTxtTermTotalAmount).toHaveText(termTotal);
  };

  /**
   * @param {string} total
   * @memberof CheckoutOrderSummaryComponent
   */
  assertTotalDueToday = async (total: string): Promise<void> => {
    console.log(' - checkoutOrderSummaryComponent.assertTotalDueToday');
    await expect(this.OrderSummaryLocTxtTotalDueTodayLabel).toHaveText('Total Due Today:');
    await expect(this.OrderSummaryLocTxtTotalDueTodayAmount).toHaveText(total);
  };

  /**
   * @param {string} total
   * @memberof CheckoutOrderSummaryComponent
   */
  assertPayPeriodTotal = async (total: string): Promise<void> => {
    console.log(' - checkoutOrderSummaryComponent.assertPayPeriodTotal');
    await expect(this.OrderSummaryLocTxtPayPeriodTotalAmount).toHaveText(total);
  };

  /**
   * @memberof CheckoutOrderSummaryComponent
   */
  assertPayPeriodTotalIsNotDisplayed = async (): Promise<void> => {
    console.log(' - checkoutOrderSummaryComponent.assertPayPeriodTotalIsNotDisplayed');
    await expect(this.OrderSummaryLocTxtPayPeriodTotalAmount).toBeHidden();
  };

  /**
   * @param {string} planName
   * @memberof CheckoutOrderSummaryComponent
   */
  assertPlanNameDisplayedInSummary = async (planName: string): Promise<void> => {
    console.log(' - checkoutOrderSummaryComponent.assertPlanNameDisplayedInSummary');
    await expect(this.OrderSummaryLocCocOrderSummary).toHaveText(planName);
  };
}
