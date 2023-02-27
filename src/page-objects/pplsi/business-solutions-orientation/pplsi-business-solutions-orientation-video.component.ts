import { Locator, Page, FrameLocator, expect } from '@playwright/test';

/**
 *
 *
 * @export
 * @class PplsiBusinessSolutionsOrientationVideoComponent
 */
export class PplsiBusinessSolutionsOrientationVideoComponent {
  readonly page: Page;
  readonly locVideoPlayerFrame: FrameLocator;
  readonly locVideoPlayerPlayButton: Locator;
  readonly locVideoPlayerTimeCodeContainer: Locator;
  readonly locVideoPlayerTimeCode1Second: Locator;

  /**
   * Creates an instance of PplsiBusinessSolutionsOrientationVideoComponent.
   * @param {Page} page
   * @memberof PplsiBusinessSolutionsOrientationVideoComponent
   */
  constructor(page: Page) {
    this.page = page;
    this.locVideoPlayerFrame = this.page.frameLocator('//iframe');
    this.locVideoPlayerPlayButton = this.locVideoPlayerFrame.locator('//button[contains(@class,"PlayButton")]');
    this.locVideoPlayerTimeCodeContainer = this.locVideoPlayerFrame.locator('//div[contains(@class,"Timecode_module_timecodeContainer")]');
    this.locVideoPlayerTimeCode1Second = this.locVideoPlayerFrame.locator(
      '//div[contains(@class,"Timecode_module_timecodeContainer") and contains(.,"00:01")]'
    );
  }

  /**
   *
   *
   * @memberof PplsiBusinessSolutionsOrientationVideoComponent
   */
  assertVideoPlayerHasPlayed = async (): Promise<void> => {
    await this.locVideoPlayerTimeCode1Second.waitFor();
    const timeStamp = await this.locVideoPlayerTimeCodeContainer.innerText();
    expect(timeStamp).not.toBe('00:00');
  };
}
