import { PlanalyzerCsrCheckoutPage } from "../planalyzer/planalyzer-csr-checkout.page";
import { OrderSummary } from "./checkout.helpers";
import { OrderSummaryRow } from "./checkout.helpers";

// Instantiations
const orderSummary = new OrderSummary();

// ========================== Selectors ==================================
const lnkEditOrder: string = 'button:has-text("Edit")';
const imgHideOrderSummaryChevron: string = 'img[alt="nav_chevron_single_up."]';
const imgShowOrderSummaryChevron: string =
  'img[alt="nav_chevron_single_down."]';
const txtPlanNames: string = '//div[contains(@class,"plan-name-row")]';
const txtPlanCosts: string =
  '//div[contains(@class,"lsux-row half children2 content-row mb-4")]//div[contains(@class,"right-label-col")]//p';
const txtMonthlyTotalLabel: string =
  '//div[contains(@class,"left-label")]//p[contains(.,"Monthly Total:")]';
const txtMonthlyTotalAmount: string =
  '//div[contains(@class,"footer-row") and contains(.,"Monthly Total:")]//div[contains(@class,"right-label")]//p';
const txtAnnualTotalLabel: string =
  '//div[contains(@class,"left-label")]//p[contains(.,"Annual Total:")]';
const txtAnnualTotalAmount: string =
  '//div[contains(@class,"footer-row") and contains(.,"Annual Total:")]//div[contains(@class,"right-label")]//p';
const txtTotalDueTodayAmount: string =
  '//div[contains(@class, "footer-row") and contains(., "Total Due Today")]//div[contains(@class,"right-label")]//p';

/**
 * @export
 * @class CheckoutOrderSummaryComponent
 * @extends {PlanalyzerCsrCheckoutPage}
 */
export class CheckoutOrderSummaryComponent extends PlanalyzerCsrCheckoutPage {
  // ========================== Process Methods ============================

  /**
   * @memberof CheckoutOrderSummaryComponent
   */
  createOrderSummary = async (): Promise<void> => {
    console.log(" - checkoutOrderSummaryComponent.createOrderSummary");
    await this.page.waitForLoadState("networkidle");
    const numberOfRows = (
      await this.page.$$("div.order-summary  div.content-row div.pl-0 p")
    ).length;
    for (let i: number = 0; i < numberOfRows; i++) {
      const row = await this.createOrderSummaryRow(i);
      orderSummary.addRow(row);
    }
  };

  /**
   * @param {number} [i=0]
   * @memberof CheckoutOrderSummaryComponent
   */
  createOrderSummaryRow = async (i: number = 0): Promise<OrderSummaryRow> => {
    console.log(" - checkoutOrderSummaryComponent.createOrderSummaryRow");
    const planNameJsHandle = (await this.page.$$(txtPlanNames))[i].getProperty(
      "innerText"
    );
    const planNameText = await (await planNameJsHandle).jsonValue();
    const planCostJsHandle = (await this.page.$$(txtPlanCosts))[i].getProperty(
      "innerText"
    );
    const planCostText = await (await planCostJsHandle).jsonValue();
    const planRow = new OrderSummaryRow(planNameText, planCostText);
    return planRow;
  };

  // ========================== Navigate Methods ===========================
  // ========================== Click Methods ==============================

  /**
   * @memberof CheckoutOrderSummaryComponent
   */
  clickEditOrderLink = async () => {
    console.log(" - checkoutOrderSummaryComponent.clickEditOrderLink");
    // Click on Plans Link from Accounts Navigation
    await this.clickOnElement(lnkEditOrder);
  };

  /**
   * @memberof CheckoutOrderSummaryComponent
   */
  clickOrderSummaryUpChevron = async () => {
    console.log(" - checkoutOrderSummaryComponent.clickOrderSummaryUpChevron");
    // Click on Plans Link from Accounts Navigation
    await this.clickOnElement(imgHideOrderSummaryChevron);
  };

  /**
   * @memberof CheckoutOrderSummaryComponent
   */
  clickOrderSummaryDownChevron = async () => {
    console.log(
      " - checkoutOrderSummaryComponent.clickOrderSummaryDownChevron"
    );
    // Click on Plans Link from Accounts Navigation
    await this.clickOnElement(imgShowOrderSummaryChevron);
  };

  // ========================== Assertion Methods ==========================

  /**
   * @param {string} expectedPlanName
   * @param {string} expectedPlanCost
   * @memberof CheckoutOrderSummaryComponent
   */
  assertPlanNameAndCost = async (
    expectedPlanName: string,
    expectedPlanCost: string
  ): Promise<void> => {
    console.log(" - checkoutOrderSummaryComponent.assertPlanNameAndCost");
    let found: boolean = false;
    orderSummary.orderSummaryRows.forEach(async (row) => {
      const name = row.planName;
      const cost = row.planCost;
      if (name == expectedPlanName) {
        found = true;
        await this.assertStringMatch(cost, expectedPlanCost);
      }
    });

    if (found == false) {
      try {
        await this.assertBoolean(found, true);
      } catch {
        throw new Error("Plan Name not found in Order Summary");
      }
    }
  };

  /**
   * @param {string} total
   * @memberof CheckoutOrderSummaryComponent
   */
  assertMonthlyLabelAndTotal = async (total: string): Promise<void> => {
    console.log(" - checkoutOrderSummaryComponent.assertMonthlyTotal");
    await this.assertElementHasText(txtMonthlyTotalLabel, "Monthly Total:");
    await this.assertElementHasText(txtMonthlyTotalAmount, total);
  };

  /**
   * @param {string} total
   * @memberof CheckoutOrderSummaryComponent
   */
  assertAnnualLabelAndTotal = async (total: string): Promise<void> => {
    console.log(" - checkoutOrderSummaryComponent.assertMonthlyTotal");
    await this.assertElementHasText(txtAnnualTotalLabel, "Annual Total:");
    await this.assertElementHasText(txtAnnualTotalAmount, total);
  };

  /**
   * @param {string} total
   * @memberof CheckoutOrderSummaryComponent
   */
  assertTotalDueToday = async (total: string): Promise<void> => {
    console.log(" - checkoutOrderSummaryComponent.assertTotalDueToday");
    await this.assertElementHasText(txtTotalDueTodayAmount, total);
  };
}
