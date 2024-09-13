import { Page } from '@playwright/test';
import { YourWebsitePage } from './your-website.page';
import { CommissionDetailsPage } from './commission-details.page';
import { CoApplicantPage } from './co-applicant.page';

export class AssociateOfficeService {
  protected page: Page;
  readonly yourWebsitePage: YourWebsitePage;
  readonly commissionDetailsPage: CommissionDetailsPage;
  readonly coApplicantPage: CoApplicantPage;

  constructor(page: Page) {
    this.page = page;
    this.yourWebsitePage = new YourWebsitePage(page);
    this.commissionDetailsPage = new CommissionDetailsPage(page);
    this.coApplicantPage = new CoApplicantPage(page);
  }
}
