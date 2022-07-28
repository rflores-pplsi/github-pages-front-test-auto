import { Locator } from '@playwright/test';
/**
 * @export
 * @class PlanRow
 */
export declare class PlanRow {
    planName: string;
    numberOfMembers: string;
    websiteLink: Locator;
    /**
     * Creates an instance of PlanRow.
     * @param {string} planName
     * @param {string} numberOfMembers
     * @param {Locator} websiteLink
     * @memberof PlanRow
     */
    constructor(planName: string, numberOfMembers: string, websiteLink: Locator);
}
/**
 * @export
 * @class PlansTable
 */
export declare class PlansTable {
    planRows: PlanRow[];
    /**
     * Creates an instance of PlansTable.
     * @memberof PlansTable
     */
    constructor();
    /**
     * @param {PlanRow} row
     * @memberof PlansTable
     */
    addRow: (row: PlanRow) => Promise<void>;
}
