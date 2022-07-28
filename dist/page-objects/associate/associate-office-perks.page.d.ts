import { BasePage } from '../base.page';
/**
 * @export
 * @class PerksPage
 * @extends {BasePage}
 */
export declare class PerksPage extends BasePage {
    perk: (perkTitle: string) => Promise<void>;
    description: (perkTitle: string) => Promise<void>;
    assertPerksPageUrl: () => Promise<void>;
    assertBannerIsDisplayed: () => Promise<void>;
    assertBannerTitleText: () => Promise<void>;
    assertBannerDescriptionText: () => Promise<void>;
    assertPerkText: () => Promise<void>;
    assertFeaturedOfferTitleText: () => Promise<void>;
    assertFeaturedPerkDescriptionText: () => Promise<void>;
    assertFeaturedPerkImageDisplayed: () => Promise<void>;
    assertASSOCIATEPerksDisplayed: () => Promise<void>;
    assertAvailableCanDisplayed: () => Promise<void>;
    assertAvailableCanImageDisplayed: () => Promise<void>;
    assertPerkDescriptionDisplayed: (perkTitle: string) => Promise<void>;
}
