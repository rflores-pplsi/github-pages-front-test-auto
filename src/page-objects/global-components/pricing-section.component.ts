import { Page, Locator, BrowserContext } from '@playwright/test';

export class PricingSectionComponent {
  protected page: Page;
  readonly context: BrowserContext;
  readonly locPricingSectionContentHeadline: Locator;
  readonly locPricingSectionContentParagraph: Locator;
  readonly locPricingSectionCard: Locator;
  readonly locPricingSectionCardPromoBadge: Locator;
  readonly locPricingSectionCardImage: Locator;
  readonly locCardHeader: Locator;
  readonly locPricingSectionCardDescription: Locator;
  readonly locPricingSectionCardInfoTitle: Locator;
  readonly locPricingSectionCardBenefits: Locator;
  readonly locPricingSectionCardBenefitsIndividual: Locator;
  readonly locPricingSectionCardSubHeader: Locator;
  readonly locPricingSectionCardPrice: Locator;
  readonly locPricingSectionCardPerMonth: Locator;
  readonly locPricingSectionCardFeeText: Locator;
  readonly locPricingSectionCardCTAButtonType: Locator;
  readonly locPricingSectionCardButtonLink: Locator;

  constructor(context: BrowserContext, page: Page) {
    this.page = page;
    this.context = context;
    this.locPricingSectionContentHeadline = this.page.locator('#section-pricing_section .lsux-grid .lsux-col h2.lsux-heading');
    this.locPricingSectionContentParagraph = this.page.locator('#section-pricing_section .lsux-grid .lsux-col p.lsux-text');
    this.locPricingSectionCard = this.page.locator('#section-pricing_section .lsux-grid .lsux-col .lsux-card');
    this.locPricingSectionCardPromoBadge = this.page.locator('#section-pricing_section .lsux-grid .lsux-col .lsux-card--has-promo .promo-badge');
    this.locPricingSectionCardImage = this.page.locator('#section-pricing_section .lsux-grid .lsux-col .lsux-card .lsux-card__image img');
    this.locCardHeader = this.page.locator('#section-pricing_section .lsux-grid .lsux-col .lsux-card .lsux-card__content h3.lsux-heading--t31');
    this.locPricingSectionCardDescription = this.page.locator(
      '#section-pricing_section .lsux-grid .lsux-col .lsux-card .lsux-card__content p.lsux-text'
    );
    this.locPricingSectionCardInfoTitle = this.page.locator(
      '#section-pricing_section .lsux-grid .lsux-col .lsux-card .lsux-card__content .plan-includes .plan-card-includes p.lsux-text'
    );
    this.locPricingSectionCardBenefits = this.page.locator(
      '#section-pricing_section .lsux-grid .lsux-col .lsux-card .lsux-card__content .plan-includes .plan-card-includes ul'
    );
    this.locPricingSectionCardBenefitsIndividual = this.page.locator(
      '#section-pricing_section .lsux-grid .lsux-col .lsux-card .lsux-card__content .plan-includes .plan-card-includes ul li'
    );
    this.locPricingSectionCardSubHeader = this.page.locator(
      '#section-pricing_section .lsux-grid .lsux-col .lsux-card .lsux-card__content .lsux-card__content p'
    );
    this.locPricingSectionCardPrice = this.page.locator(
      '#section-pricing_section .lsux-grid .lsux-col .lsux-card .lsux-card__content .lsux-card__content h3.lsux-heading--t49'
    );
    this.locPricingSectionCardPerMonth = this.page.locator(
      '#section-pricing_section .lsux-grid .lsux-col .lsux-card .lsux-card__content .lsux-card__content h3.lsux-heading span'
    );
    this.locPricingSectionCardFeeText = this.page.locator(
      '#section-pricing_section .lsux-grid .lsux-col .lsux-card .lsux-card__content .lsux-card__content .lsux-text'
    );
    this.locPricingSectionCardCTAButtonType = this.page.locator(
      '#section-pricing_section .lsux-grid .lsux-col .lsux-card .lsux-card__content .lsux-card__content .pricing-card-button'
    );
    this.locPricingSectionCardButtonLink = this.page.locator(
      '#section-pricing_section .lsux-grid .lsux-col .lsux-card .lsux-card__content .lsux-card__content .pricing-card-button a'
    );
  }
}
