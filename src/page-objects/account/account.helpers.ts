import { Locator } from '@playwright/test';

/**
 * @export
 * @class PlanRow
 */
export class PlanRow {
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
  constructor(planName: string, numberOfMembers: string, websiteLink: Locator) {
    this.planName = planName;
    this.numberOfMembers = numberOfMembers;
    this.websiteLink = websiteLink;
  }
}

/**
 * @export
 * @class PlansTable
 */
export class PlansTable {
  planRows: PlanRow[];

  /**
   * Creates an instance of PlansTable.
   * @memberof PlansTable
   */
  constructor() {
    this.planRows = [];
  }

  /**
   * @param {PlanRow} row
   * @memberof PlansTable
   */
  addRow = async (row: PlanRow): Promise<void> => {
    this.planRows.push(row);
  };
}
