import { Page, Locator, BrowserContext } from '@playwright/test';

export class EmailCaptureSectionComponent {
  protected page: Page;
  readonly context: BrowserContext;
  readonly sectionContainer: Locator;
  readonly header: Locator;
  readonly description: Locator;
  readonly emailForm: Locator;
  readonly nameInput: Locator;
  readonly emailInput: Locator;
  readonly locSubmitButton: Locator;

  constructor(context: BrowserContext, page: Page) {
    this.page = page;
    this.context = context;
    this.sectionContainer = this.page.locator('#section-email_capture');
    this.header = this.sectionContainer.locator('h3');
    this.description = this.sectionContainer.locator('p');
    this.emailForm = this.sectionContainer.locator('section#section-email_capture .email-form form#iterable-email-form');
    this.nameInput = this.sectionContainer.locator('section#section-email_capture input#firstname');
    this.emailInput = this.sectionContainer.locator('section#section-email_capture input#email');
    this.locSubmitButton = this.sectionContainer.locator('section#section-email_capture input.email-submit');
  }
}
