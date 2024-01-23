import { Locator, Page, FrameLocator, expect } from '@playwright/test';

/**
 *
 *
 * @export
 * @class PplsiBusinessSolutionsOrientationVideoComponent
 */
export class VideoComponent {
  readonly page: Page;
  readonly locVideoPlayerFrame: FrameLocator;
  readonly locVideoPlayerPlayButton: Locator;
  readonly locVideoPlayerPauseButton: Locator;
  readonly locVideoPlayerSlider: Locator;
  readonly locVideoPlayerTimeCodeContainer: Locator;
  readonly locVideoPlayerTimeCode1Second: Locator;
  readonly locVideoPlayerVolumeButton: Locator;
  readonly locVideoPlayerVolumeSlider: Locator;
  readonly locVideoPlayerClosedCaptionButton: Locator;
  readonly locVideoPlayerClosedCaptionMenu: Locator;
  readonly locVideoPlayerClosedCaptions: Locator;
  readonly locVideoPlayerClosedCaptionCloseButton: Locator;
  readonly locVideoPlayerSettingsButton: Locator;
  readonly locVideoPlayerSettingsMenu: Locator;
  readonly locVideoPlayerSettingsQualityOption: Locator;
  readonly locVideoPlayerSettingsSpeedOption: Locator;
  readonly locVideoPlayerSettingsCloseButton: Locator;

  /**
   * Creates an instance of PplsiBusinessSolutionsOrientationVideoComponent.
   * @param {Page} page
   * @memberof PplsiBusinessSolutionsOrientationVideoComponent
   */
  constructor(page: Page) {
    this.page = page;
    this.locVideoPlayerFrame = this.page.frameLocator('//iframe');
    this.locVideoPlayerPlayButton = this.locVideoPlayerFrame.locator('//button[contains(@class,"PlayButton") and contains(.,"Play")]');
    this.locVideoPlayerPauseButton = this.locVideoPlayerFrame.locator('//button[contains(@class,"PlayButton") and contains(.,"Pause")]');
    this.locVideoPlayerSlider = this.locVideoPlayerFrame.locator(
      '//div[contains(@class,"ChapterSegment_module_chapter")]//div[contains(@class,"ChapterSegment_module_chapter")]'
    );
    this.locVideoPlayerTimeCodeContainer = this.locVideoPlayerFrame.locator('//div[contains(@class,"Timecode_module_timecodeContainer")]');
    this.locVideoPlayerTimeCode1Second = this.locVideoPlayerFrame.locator(
      '//div[contains(@class,"Timecode_module_timecodeContainer") and contains(.,"00:01")]'
    );
    this.locVideoPlayerVolumeButton = this.locVideoPlayerFrame.locator('//button[contains(@aria-label,"Volume")]');
    this.locVideoPlayerVolumeSlider = this.locVideoPlayerFrame.locator('//div[contains(@aria-label,"Volume")]');

    this.locVideoPlayerClosedCaptionButton = this.locVideoPlayerFrame.locator('//button[@aria-label="Choose captions"]');
    this.locVideoPlayerClosedCaptionMenu = this.locVideoPlayerFrame.locator('//div[contains(@class,"vp-menu") and contains(.,"CC/Subtitles")]');
    this.locVideoPlayerClosedCaptions = this.locVideoPlayerFrame.locator('//div[contains(@class,"vp-captions")]');
    this.locVideoPlayerClosedCaptionCloseButton = this.locVideoPlayerFrame.locator(
      '//div[contains(@class,"MenuHeader_module_menuHeader") and contains(.,"CC")]//button[contains(@class,"closeButton")]'
    );
    this.locVideoPlayerSettingsButton = this.locVideoPlayerFrame.locator('//button[@aria-label="Settings"]');
    this.locVideoPlayerSettingsMenu = this.locVideoPlayerFrame.locator('//div[contains(@class,"vp-menu") and contains(.,"Quality")]');
    this.locVideoPlayerSettingsQualityOption = this.locVideoPlayerFrame.locator('//div[contains(@role,"menuitemradio") and contains(.,"Quality")]');
    this.locVideoPlayerSettingsSpeedOption = this.locVideoPlayerFrame.locator('//div[contains(@role,"menuitemradio") and contains(.,"Speed")]');
    this.locVideoPlayerSettingsCloseButton = this.locVideoPlayerFrame.locator(
      '//div[contains(@class,"MenuHeader_module_menuHeader") and contains(.,"Settings")]//button[contains(@class,"closeButton")]'
    );
  }

  /**
   *
   *
   * @memberof PplsiBusinessSolutionsOrientationVideoComponent
   */
  assertVideoPlayerHasPlayed = async (): Promise<void> => {
    const timeStamp = await this.locVideoPlayerTimeCodeContainer.innerText();
    expect(timeStamp).not.toBe('00:00');
  };

  /**
   *
   *
   * @param {string} timestamp
   * @memberof PplsiBusinessSolutionsOrientationVideoComponent
   */
  assertTimestamp = async (timestamp: string): Promise<void> => {
    const timeStampLocatorInnerText = await this.locVideoPlayerTimeCodeContainer.innerText();
    expect(timeStampLocatorInnerText).toBe(timestamp);
  };

  /**
   *
   *
   * @param {string} language
   * @memberof PplsiBusinessSolutionsOrientationVideoComponent
   */
  selectClosedCaptionOption = async (language: string): Promise<void> => {
    await this.locVideoPlayerClosedCaptionButton.click();
    const languageLocator = this.locVideoPlayerFrame.locator(`//li[@role="menuitemradio" and contains(.,"${language}")]`);
    await languageLocator.click();
  };

  /**
   *
   *
   * @param {string} quality
   * @memberof PplsiBusinessSolutionsOrientationVideoComponent
   */
  selectQualitySetting = async (quality: string): Promise<void> => {
    await this.locVideoPlayerSettingsButton.click();
    // Could not find a way to avoid this implicit wait, may revisit
    await this.page.waitForTimeout(100);
    await this.locVideoPlayerSettingsQualityOption.click();
    const qualityLocator = this.locVideoPlayerFrame.locator(`//li[contains(@role,"menuitemradio") and contains(.,"${quality}")]`);
    await qualityLocator.click();
  };

  /**
   *
   *
   * @param {string} speed
   * @memberof PplsiBusinessSolutionsOrientationVideoComponent
   */
  selectSpeedSetting = async (speed: string): Promise<void> => {
    await this.locVideoPlayerSettingsButton.click();
    // Could not find a way to avoid this implicit wait, may revisit
    await this.page.waitForTimeout(100);
    await this.locVideoPlayerSettingsSpeedOption.click();
    const qualityLocator = this.locVideoPlayerFrame.locator(`//li[contains(@role,"menuitemradio") and contains(.,"${speed}")]`);
    await qualityLocator.click();
  };

  /**
   *
   *
   * @param {string} quality
   * @memberof PplsiBusinessSolutionsOrientationVideoComponent
   */
  assertQualitySetting = async (quality: string): Promise<void> => {
    const qualityLocator = this.locVideoPlayerFrame.locator(`//li[@role="menuitemradio" and contains(.,"${quality}")]`);
    expect(qualityLocator).toHaveAttribute('aria-checked', 'true');
  };

  /**
   *
   *
   * @param {string} speed
   * @memberof PplsiBusinessSolutionsOrientationVideoComponent
   */
  assertSpeedSetting = async (speed: string): Promise<void> => {
    const qualityLocator = this.locVideoPlayerFrame.locator(
      `//li[@role="menuitemradio" and contains(.,"${speed}")]//div[contains(@class,"activeCheck")]`
    );
    expect(qualityLocator).toBeVisible();
  };

  /**
   *
   *
   * @param {string} closedCaption
   * @memberof PplsiBusinessSolutionsOrientationVideoComponent
   */
  assertClosedCaptionSetting = async (closedCaption: string): Promise<void> => {
    const closedCaptionLocator = this.locVideoPlayerFrame.locator(`//li[@role="menuitemradio" and contains(.,"${closedCaption}")]`);
    expect(closedCaptionLocator).toHaveAttribute('aria-checked', 'true');
  };
}
