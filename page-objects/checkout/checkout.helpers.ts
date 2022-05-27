/**
 * @export
 * @class OrderSummaryRow
 */
export class OrderSummaryRow {
  planName: string | null;
  tierName: string | null;
  planCost: string | null;

  /**
   * Creates an instance of OrderSummaryRow.
   * @param {string} planName
   * @param {string} tierName
   * @param {string} planCost

   * @memberof PlanRow
   */
  constructor(planName: string | null, tierName: string | null, planCost: string | null) {
    this.planName = planName;
    this.tierName = tierName;
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

/**
 * @export
 * @class OrderSummaryWithoutCosts
 */
export class OrderSummaryWithoutCosts {
  orderSummaryRows: OrderSummaryRowWithoutCost[];

  /**
   * Creates an instance of OrderSummaryWithoutCosts.
   * @memberof OrderSummaryWithoutCosts
   */
  constructor() {
    this.orderSummaryRows = [];
  }

  /**
   * @param {OrderSummaryRow} row
   * @memberof OrderSummary
   */
  addRow = async (row: OrderSummaryRowWithoutCost): Promise<void> => {
    this.orderSummaryRows.push(row);
  };
}

/**
 * @export
 * @class OrderSummaryWithoutCosts
 */
export class OrderSummaryWithoutTiers {
  orderSummaryRows: OrderSummaryRowWithoutTier[];

  /**
   * Creates an instance of OrderSummaryWithoutCosts.
   * @memberof OrderSummaryWithoutTiers
   */
  constructor() {
    this.orderSummaryRows = [];
  }

  /**
   * @param {OrderSummaryRow} row
   * @memberof OrderSummary
   */
  addRow = async (row: OrderSummaryRowWithoutTier): Promise<void> => {
    this.orderSummaryRows.push(row);
  };
}

/**
 * @export
 * @class OrderSummaryRowWithoutCost
 */
export class OrderSummaryRowWithoutCost {
  planName: string | null;
  tierName: string | null;

  /**
   * Creates an instance of OrderSummaryRowWithoutCost.
   * @param {(string | null)} planName
   * @param {(string | null)} tierName
   * @memberof OrderSummaryRowWithoutCost
   */
  constructor(planName: string | null, tierName: string | null) {
    this.planName = planName;
    this.tierName = tierName;
  }
}

/**
 * @export
 * @class OrderSummaryRowWithoutCost
 */
export class OrderSummaryRowWithoutTier {
  planName: string | null;
  costName: string | null;

  /**
   * Creates an instance of OrderSummaryRowWithoutCost.
   * @param {(string | null)} planName
   * @param {(string | null)} costName
   * @memberof OrderSummaryRowWithoutCost
   */
  constructor(planName: string | null, costName: string | null) {
    this.planName = planName;
    this.costName = costName;
  }
}
