import { Locator, Page } from '@playwright/test';

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
  planCost: string | null;

  /**
   * Creates an instance of OrderSummaryRowWithoutCost.
   * @param {(string | null)} planName
   * @param {(string | null)} planCost
   * @memberof OrderSummaryRowWithoutCost
   */
  constructor(planName: string | null, planCost: string | null) {
    this.planName = planName;
    this.planCost = planCost;
  }
}

/**
 * @export
 * @class AddPlanAndSomeSupplements
 */
export class AddPlanAndSomeSupplements {
  lineOfBusiness: string;
  planSupp: Array<string>;
  protected page: Page;
  readonly checkoutBtn: Locator;

  /**
   * Creates an instance of AddPlanAndSomeSupplements.
   * @param {(string)} lineOfBusiness
   * @param {(Array<string>)} planSupp
   * @param {(Page)} page
   * @memberof AddPlanAndSomeSupplements
   */
  constructor(lineOfBusiness: string, planSupp: Array<string>, page: Page) {
    this.lineOfBusiness = lineOfBusiness;
    this.planSupp = planSupp;
    this.page = page;
    this.checkoutBtn = this.page.locator('#checkout-btn');
  }

  /**
   * @param {Array<string>} planSupp
   * @param {string} lineOfBusiness
   * @memberof AddPlanAndSomeSupplements
   */
  pickAPlan = async (planSupp: Array<string>, lineOfBusiness: string): Promise<void> => {
    for (const ps of planSupp) {
      // Add a plan
      if (lineOfBusiness == 'd2cLegalShieldCA' || lineOfBusiness == 'd2cLegalShieldUS') {
        this.page.locator('//a[contains(text(),"' + ps + '")]').click();
      } else {
        this.page.locator('text=' + ps + ' >> nth=0').click();
      }
    }
    this.checkoutBtn.click();
  };
}

/**
 * @export
 * @class NavigateToTestingHarnessPage
 */
export class NavigateToTestingHarnessPage {
  protected page: Page;
  url: string;
  lineOfBusiness: string;

  /**
   * Creates an instance of NavigateToTestingHarnessPage.
   * @param {(Page)} page
   * @param {(string)} url
   * @param {(string)} lineOfBusiness
   * @memberof NavigateToTestingHarnessPage
   */
  constructor(page: Page, url: string, lineOfBusiness: string) {
    this.page = page;
    this.url = url;
    this.lineOfBusiness = lineOfBusiness;
  }

  /**
   * @param {string} url
   * @param {string} lineOfBusiness
   * @param {string} lofb
   * @memberof NavigateToTestingHarnessPage
   */
  navigate = async (url: string, lineOfBusiness: string, lofb: string): Promise<void> => {
    // navigate to URL
    await this.page.goto(url);
    await this.page.waitForLoadState();
    // Select D2C
    await this.page.click('text=Direct To Consumer Network Calendar >> img >> nth=0', { force: true });
    // navigate to URL
    await this.page.waitForLoadState();
    const LineOfBusiness = this.page.locator('div.et_pb_blurb_' + lofb);
    await this.page.waitForLoadState();
    await LineOfBusiness.click();
    this.page.screenshot({ fullPage: true, path: 'Screenshots/testingHarness/' + lineOfBusiness + 'TestingHarness.png' });
  };
}
export class UpdateRegion {
  protected page: Page;
  /**
   * Creates an instance of OrderSummaryRowWithoutCost.
   * @param {Page} page
   * @memberof UpdateRegion
   */
  constructor(page: Page) {
    this.page = page;
  }
  /**
   * @param {string} region
   * @memberof UpdateRegion
   */
  selectRegion = async (region: string): Promise<void> => {
    await this.page.selectOption('select.lsc_region_selector.region_select', { label: region });
  };
}
