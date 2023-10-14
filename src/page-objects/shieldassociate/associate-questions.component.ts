import { Locator, Page } from '@playwright/test';

export class AssociateQuestionsComponent {
  readonly page: Page;
  readonly locIndividualRadioButton: Locator;
  readonly locBusinessRadioButton: Locator;
  readonly locNoFelonyEtcRadioButton: Locator;
  readonly locContinueButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.locIndividualRadioButton = this.page.locator('//input[contains(@name,"assoc-q1-a1")]/ancestor::a');
    this.locBusinessRadioButton = this.page.locator('//input[contains(@name,"assoc-q1-a2")]/ancestor::a');
    this.locNoFelonyEtcRadioButton = this.page.locator('//input[contains(@name,"assoc-q2-a2")]/ancestor::a');
    this.locContinueButton = this.page.locator('//div[contains(@class,"lsux-modal")]//button[contains(@class,"lsux-button--primary")]');
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
  };
}
