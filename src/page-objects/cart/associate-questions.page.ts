import { BrowserContext, Locator, Page } from '@playwright/test';

export class AssociateQuestionsPage {
  readonly page: Page;
  readonly locIndividualRadioButton: Locator;
  readonly locBusinessRadioButton: Locator;
  readonly locNoFelonyEtcRadioButton: Locator;
  readonly locContinueButton: Locator;

  constructor(context: BrowserContext, page: Page) {
    this.page = page;
    this.locIndividualRadioButton = this.page.locator('//input[@name="register" and @value="as an individual"]//following-sibling::div');
    this.locBusinessRadioButton = this.page.locator('//input[@name="register" and @value="as a business"]//following-sibling::div');
    this.locNoFelonyEtcRadioButton = this.page.locator('//input[@name="policy" and @value="no"]//following-sibling::div');
    this.locContinueButton = this.page.locator('//div[contains(@class,"total-section-container")]//button');
  }

  answerStartUpQuestions = async (individualOrBusiness: string): Promise<void> => {
    switch (individualOrBusiness) {
      case 'individual':
        await this.locIndividualRadioButton.click();
        break;
      case 'business':
        await this.locBusinessRadioButton.click();
        break;
    }
    await this.locNoFelonyEtcRadioButton.click();
    await this.page.waitForURL(new RegExp('data='));
  };
}
