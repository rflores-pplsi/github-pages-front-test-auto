/**
 * @export
 * @class OrderSummaryRow
 */
export class OrderSummaryRow {
  planName: string;
  planCost: string;

  /**
   * Creates an instance of OrderSummaryRow.
   * @param {string} planName
   * @param {string} planCost
   * @memberof PlanRow
   */
  constructor(planName: string, planCost: string) {
    this.planName = planName;
    this.planCost = planCost;
  }
}

/**
 * @export
 * @class OrderSummary
 */
export class OrderSummary {
  orderSummaryRows: OrderSummaryRow[];

  /**
   * Creates an instance of OrderSummary.
   * @memberof OrderSummary
   */
  constructor() {
    this.orderSummaryRows = [];
  }

  /**
   * @param {OrderSummaryRow} row
   * @memberof OrderSummary
   */
  addRow = async (row: OrderSummaryRow): Promise<void> => {
    this.orderSummaryRows.push(row);
  };
}
