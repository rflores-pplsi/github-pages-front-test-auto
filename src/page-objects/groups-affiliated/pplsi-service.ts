import { Page, BrowserContext } from '@playwright/test';
import { GroupsAffiliatedAgentPage } from './groups-affiliated-agent.page';
import { GroupsAffiliatedEnrollmentPage } from './groups-affiliated-enrollment.page';
import { GroupsAffiliatedPage } from './groups-affiliated.page';

export class PplsiService {
  protected page: Page;
  protected context: BrowserContext;
  readonly groupsAffiliatedAgentPage: GroupsAffiliatedAgentPage;
  readonly groupsAffiliatedEnrollmentPage: GroupsAffiliatedEnrollmentPage;
  readonly groupsAffiliatedPage: GroupsAffiliatedPage;

  constructor(page: Page, context: BrowserContext) {
    this.page = page;
    this.context = context;
    this.groupsAffiliatedAgentPage = new GroupsAffiliatedAgentPage(page);
    this.groupsAffiliatedEnrollmentPage = new GroupsAffiliatedEnrollmentPage(page);
    this.groupsAffiliatedPage = new GroupsAffiliatedPage(page);
  }
}
