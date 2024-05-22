import { Locator, Page } from '@playwright/test';

export class AssociateQuestionsComponent {
  readonly page: Page;
  readonly locIndividualRadioButton: Locator;
  readonly locBusinessRadioButton: Locator;
  readonly locNoFelonyEtcRadioButton: Locator;
  readonly locContinueButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.locIndividualRadioButton = this.page.locator('#individual');
    this.locBusinessRadioButton = this.page.locator('#business');
    this.locNoFelonyEtcRadioButton = this.page.locator('#felony_false');
    this.locContinueButton = this.page.locator(
      '//button[contains(@class,"lsux-button lsux-button--primary lsux-button--rectangular") and contains(.,"Continue")]'
    );
  }

  answerStartUpQuestions = async (registeredAs: string): Promise<void> => {
    const registeredAsRadioLocator = this.page.locator(`//input[@name="${registeredAs}"]`);
    await registeredAsRadioLocator.click();
    await this.locNoFelonyEtcRadioButton.click();
    await this.locContinueButton.click();
  };
}
