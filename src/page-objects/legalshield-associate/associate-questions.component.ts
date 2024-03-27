import { Locator, Page } from '@playwright/test';

export class AssociateQuestionsComponent {
  readonly page: Page;
  readonly locIndividualRadioButton: Locator;
  readonly locBusinessRadioButton: Locator;
  readonly locNoFelonyEtcRadioButton: Locator;
  readonly locContinueButton: Locator;

  constructor(page: Page) {
    this.page = page;
    // For the Radio Buttons, I used the nth identifier reluctantly as I couldn't figure out another way (without using text on page) to differentiate. May revisit.
    this.locIndividualRadioButton = this.page.locator('//div[@role="dialog"]//a[contains(@class,"lsux-list-item-input__button")]').nth(0);
    this.locBusinessRadioButton = this.page.locator('//div[@role="dialog"]//a[contains(@class,"lsux-list-item-input__button")]').nth(1);
    this.locNoFelonyEtcRadioButton = this.page.locator('//div[@role="dialog"]//a[contains(@class,"lsux-list-item-input__button")]').nth(3);
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
