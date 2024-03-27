import { BrowserContext, Locator, Page } from '@playwright/test';

export class CalendarPage {
  readonly page: Page;
  readonly locCalendarContainer: Locator;

  constructor(context: BrowserContext, page: Page) {
    this.page = page;
    this.locCalendarContainer = this.page.locator('//div[@id="calendar"]');
  }
}
