import { BasePage } from '../base.page';
/**
 * @export
 * @class AdvantagePage
 * @extends {BasePage}
 */
export declare class AdvantagePage extends BasePage {
    assertBannerContent: () => Promise<void>;
    assertPlansHeaderIsDisplayed: () => Promise<void>;
    assertBasicContainer: () => Promise<void>;
    assertAdvantagePlusContainer: () => Promise<void>;
    assertSupportContentIsDisplayed: () => Promise<void>;
}
