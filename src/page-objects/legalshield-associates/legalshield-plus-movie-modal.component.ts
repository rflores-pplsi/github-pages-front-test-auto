import { FrameLocator, Locator, Page, expect } from '@playwright/test';

export class LegalshieldPlusMovieModalComponent {
  protected page: Page;
  readonly locMovieModalContainer: Locator;
  readonly locMovieModalIframe: FrameLocator;
  readonly locMovieModalCloseButton: Locator;
  readonly locMovieModalPlayButton: Locator;
  readonly locVideoPlayerTimeCodeContainer: Locator;
  readonly locVideoPlayerTimeCode1Second: Locator;

  constructor(page: Page) {
    this.page = page;
    this.locMovieModalContainer = this.page.locator('//iframe[@title="LegalShield Product Overview"]');
    this.locMovieModalIframe = this.page.frameLocator('//iframe[@title="LegalShield Product Overview"]');
    this.locMovieModalCloseButton = this.page.locator('//button[@alt="Close"]');
    this.locMovieModalPlayButton = this.locMovieModalIframe.locator('//button[@aria-label="Play"]');
    this.locVideoPlayerTimeCodeContainer = this.locMovieModalIframe.locator('//div[contains(@class,"Timecode_module_timecode")]');
    this.locVideoPlayerTimeCode1Second = this.locMovieModalIframe.locator(
      '//div[contains(@class,"Timecode_module_timecode") and contains(text(),"00:01")]'
    );
  }

  assertVideoPlayerHasPlayed = async (): Promise<void> => {
    const timeStamp = await this.locVideoPlayerTimeCodeContainer.innerText();
    expect(timeStamp).not.toBe('00:00');
  };

  assertTimestamp = async (timestamp: string): Promise<void> => {
    const timeStampLocatorInnerText = await this.locVideoPlayerTimeCodeContainer.innerText();
    expect(timeStampLocatorInnerText).toBe(timestamp);
  };
}
