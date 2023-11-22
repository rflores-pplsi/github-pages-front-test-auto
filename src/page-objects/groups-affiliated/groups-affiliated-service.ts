import { Page } from '@playwright/test';
import { GroupsAffiliatedAgentPage } from './groups-affiliated-agent.page';
import { GroupsAffiliatedPage } from './groups-affiliated.page';
import { GroupsAffiliatedEnrollmentPage } from './groups-affiliated-enrollment.page';

export class GroupsAffiliatedService {
  protected page: Page;
  readonly groupsAffiliatedAgentPage: GroupsAffiliatedAgentPage;
  readonly groupsAffiliatedPage: GroupsAffiliatedPage;
  readonly groupsAffiliatedEnrollmentPage: GroupsAffiliatedEnrollmentPage;

  constructor(page: Page) {
    this.page = page;
    this.groupsAffiliatedAgentPage = new GroupsAffiliatedAgentPage(page);
    this.groupsAffiliatedPage = new GroupsAffiliatedPage(page);
    this.groupsAffiliatedEnrollmentPage = new GroupsAffiliatedEnrollmentPage(page);
  }
}
