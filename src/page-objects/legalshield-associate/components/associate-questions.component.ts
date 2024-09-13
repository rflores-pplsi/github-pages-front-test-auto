import { Locator, Page } from '@playwright/test';

export class AssociateQuestionsComponent {
  private page: Page;
  private locNoFelonyEtcRadioButton: Locator;
  private locContinueButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.locNoFelonyEtcRadioButton = this.page.locator('#felony_false');
    this.locContinueButton = this.page.locator(
      '//button[contains(@class,"lsux-button lsux-button--primary lsux-button--rectangular") and contains(.,"Continue")]'
    );
  }
  // #region Navigation
  // #endregion Navigation

  // #region Actions
  answerStartUpQuestions = async (registeredAs: string): Promise<void> => {
    const registeredAsRadioLocator = this.page.locator(`//input[@name="${registeredAs}"]`);
    await registeredAsRadioLocator.click();
    await this.locNoFelonyEtcRadioButton.click();
    await this.locContinueButton.click();
  };
  // #endregion Actions

  // #region Assertions
  // #endregion Assertions
}
