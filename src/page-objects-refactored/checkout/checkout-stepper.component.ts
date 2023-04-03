import { Locator, Page } from '@playwright/test';

export class CheckoutStepperComponent {
  readonly page: Page;
  readonly locStepCirclePersonalInfoLink: Locator;
  readonly locStepCircle1Current: Locator;
  readonly locStepCircle2Current: Locator;
  readonly locStepCircle3Current: Locator;

  constructor(page: Page) {
    this.page = page;
    this.locStepCirclePersonalInfoLink = this.page.locator('//a[contains(@class,"step") and contains(.,"Personal Info")]');
    this.locStepCircle1Current = this.page.locator('//div[contains(@class,"step-circle--current") and contains(.,"1")]');
    this.locStepCircle2Current = this.page.locator('//div[contains(@class,"step-circle--current") and contains(.,"2")]');
    this.locStepCircle3Current = this.page.locator('//div[contains(@class,"step-circle--current") and contains(.,"3")]');
  }
}
