/**
 * @export
 * @class OrderSummaryRow
 */
export declare class OrderSummaryRow {
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
    constructor(planName: string | null, tierName: string | null, planCost: string | null);
}
/**
 * @export
 * @class OrderSummary
 */
export declare class OrderSummary {
    orderSummaryRows: OrderSummaryRow[];
    /**
     * Creates an instance of OrderSummary.
     * @memberof OrderSummary
     */
    constructor();
    /**
     * @param {OrderSummaryRow} row
     * @memberof OrderSummary
     */
    addRow: (row: OrderSummaryRow) => Promise<void>;
}
/**
 * @export
 * @class OrderSummaryWithoutCosts
 */
export declare class OrderSummaryWithoutCosts {
    orderSummaryRows: OrderSummaryRowWithoutCost[];
    /**
     * Creates an instance of OrderSummaryWithoutCosts.
     * @memberof OrderSummaryWithoutCosts
     */
    constructor();
    /**
     * @param {OrderSummaryRow} row
     * @memberof OrderSummary
     */
    addRow: (row: OrderSummaryRowWithoutCost) => Promise<void>;
}
/**
 * @export
 * @class OrderSummaryWithoutCosts
 */
export declare class OrderSummaryWithoutTiers {
    orderSummaryRows: OrderSummaryRowWithoutTier[];
    /**
     * Creates an instance of OrderSummaryWithoutCosts.
     * @memberof OrderSummaryWithoutTiers
     */
    constructor();
    /**
     * @param {OrderSummaryRow} row
     * @memberof OrderSummary
     */
    addRow: (row: OrderSummaryRowWithoutTier) => Promise<void>;
}
/**
 * @export
 * @class OrderSummaryRowWithoutCost
 */
export declare class OrderSummaryRowWithoutCost {
    planName: string | null;
    tierName: string | null;
    /**
     * Creates an instance of OrderSummaryRowWithoutCost.
     * @param {(string | null)} planName
     * @param {(string | null)} tierName
     * @memberof OrderSummaryRowWithoutCost
     */
    constructor(planName: string | null, tierName: string | null);
}
/**
 * @export
 * @class OrderSummaryRowWithoutCost
 */
export declare class OrderSummaryRowWithoutTier {
    planName: string | null;
    costName: string | null;
    /**
     * Creates an instance of OrderSummaryRowWithoutCost.
     * @param {(string | null)} planName
     * @param {(string | null)} costName
     * @memberof OrderSummaryRowWithoutCost
     */
    constructor(planName: string | null, costName: string | null);
}
