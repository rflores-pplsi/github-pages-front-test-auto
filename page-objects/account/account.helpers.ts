import { Locator} from '@playwright/test';

export class PlanRow {

  planName: string;
  numberOfMembers: string;
  websiteLink: Locator;

  constructor(planName:string, numberOfMembers: string, websiteLink: Locator ) {
    this.planName = planName;
    this.numberOfMembers = numberOfMembers;
    this.websiteLink = websiteLink;
  }
  
}

export class PlansTable {

  planRows: PlanRow[];

  constructor() {
    this.planRows = [];
  }

  addRow = async (row: PlanRow):Promise<void> => {
    this.planRows.push(row);
  }

}