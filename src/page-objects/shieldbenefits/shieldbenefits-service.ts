import { Page } from '@playwright/test';
import { ShieldBenefitsLegalEnrollmentPage } from './shieldbenefits-legal-enrollment.page';
import { ShieldBenefitsLegalOverviewPage } from './shieldbenefits-legal-overview.page';

export class ShieldBenefitsService {
  protected page: Page;
  readonly shieldBenefitsLegalEnrollmentPage: ShieldBenefitsLegalEnrollmentPage;
  readonly shieldBenefitsLegalOverviewPage: ShieldBenefitsLegalOverviewPage;

  constructor(page: Page) {
    this.page = page;
    this.shieldBenefitsLegalEnrollmentPage = new ShieldBenefitsLegalEnrollmentPage(page);
    this.shieldBenefitsLegalOverviewPage = new ShieldBenefitsLegalOverviewPage(page);
  }
}
