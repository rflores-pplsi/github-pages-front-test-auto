import { test, expect, Page } from '@playwright/test';
import UrlsUtils from '../../utils/urls.utils';
import { HeroSectionComponent } from '../../page-objects/common-components/hero-section.component';
// import { GridSectionComponent } from '../../../page-objects/common-components/grid-section.component';
// import { NavListSectionComponent } from '../../../page-objects/common-components/nav-list-section.component';
// import { FeatureListSectionComponent } from '../../../page-objects/common-components/feature-list-section.component';
// import { TestimonialCarouselSectionComponent } from '../../../page-objects/common-components/testimonial-carousel-section.component';
// import { FactCalloutsSectionComponent } from '../../../page-objects/common-components/fact-callouts-section.component';
// import { ReviewSectionComponent } from '../../../page-objects/common-components/review-section.component';
// import { LogoCloudSectionComponent } from '../../../page-objects/common-components/logo-cloud-section.component';
// import { FeaturesGridSectionComponent } from '../../../page-objects/common-components/features-grid-section.component';
// import { PricingSectionComponent } from '../../../page-objects/common-components/pricing-section.component';
// import { EmailCaptureSectionComponent } from '../../../page-objects/common-components/email-capture-section.component';

// TODO: locators
let heroSectionComponent: HeroSectionComponent;
// let gridSectionComponent: GridSectionComponent;
// let navListComponent: NavListSectionComponent;
// let featureList = new FeatureListSectionComponent;
// let testimonialCarousel = new TestimonialCarouselSectionComponent;
// let factCalloutsComponent = new FactCalloutsSectionComponent;
// let reviewSectionComponent = new ReviewSectionComponent;
// let logoCloudSectionComponent = new LogoCloudSectionComponent;
// let featuresGridSectionComponent = new FeaturesGridSectionComponent;
// let pricingSectionComponent = new PricingSectionComponent;
// let emailCaptureSectionComponent = new EmailCaptureSectionComponent;

test.beforeEach(async ({ context, page }) => {
  // TODO: setup page-objects for common-components tests
  // Hero Section Tests
  heroSectionComponent = new HeroSectionComponent(context, page);
  // Grid Section Tests
  // -> gridSectionComponent = new GridSectionComponent(context, page);
  // Nav List Tests
  // -> navListComponent = new NavListComponent(context, page);
  // Feature List Tests
  // -> featureListComponent = new FeatureListComponent(context, page);
  // Testimonials Tests
  // -> testimonialsComponent = new TestimonialsComponent(context, page);
  // Fact Callouts Tests
  // -> factCalloutComponent = new FactCalloutComponent(context, page);
  // Review Section Tests
  // -> reviewSectionComponent = new ReviewSectionComponent(context, page);
  // Logo Cloud Tests
  // -> logoCloudComponent = new LogoCloudComponent(context, page);
  // Features Grid Tests
  // -> featuresGridSectionComponent = new FeaturesGridSectionComponent(context, page);
  // Pricing Section Tests
  // -> pricingSectionComponent = new PricingSectionComponent(context, page);
  // Email Capture Tests
  // -> emailCaptureSectionComponent = new EmailCaptureSectionComponent(context, page);
  test.slow();
});

// Hero Section Tests
test('Hero Section Tests', async ({ page }) => {
  console.log(
    'Hero Section: Hero Section contains required fields - Layout Style, Desktop/Mobile images, Headline,  and a CTA Button with appropriate link'
  );
  await test.step(`Verify the the Hero Section contents`, async () => {
    await expect(heroSectionComponent.locLayoutStyle).toBeVisible();
    await expect(heroSectionComponent.locDesktopImage).toHaveAttribute('src');
    // await expect(heroSectionComponent.locMobileImage).toBeHidden();
    await expect(heroSectionComponent.locHeadlineText).toBeVisible();
    await expect(heroSectionComponent.locCallToActionButton).toBeVisible();
    await expect(heroSectionComponent.locCallToActionButton).toHaveText('Get started');
    await expect(heroSectionComponent.locCallToActionButton).toHaveAttribute('href');
  });
});
// Grid section tests
test('Grid Section Tests', async ({ page }) => {
  console.log(
    'Grid Section: Grid Section contains required fields - Header, Subtext, Card::Image/Title/Text/Link, Button::optionalLink, and a background color selected'
  );
  await test.step(`Verify the the Grid Section contents`, async () => {
    // await expect(gridSectionComponent.locGridHeader).toContainText();
    // await expect(gridSectionComponent.locGridSubtext).toBeVisible();
    // await expect(gridSectionComponent.locGridCard).toBeVisible();
    // await expect(gridSectionComponent.locGridCardImage).toBeVisible();
    // await expect(gridSectionComponent.locGridCardTitle).toBeVisible();
    // await expect(gridSectionComponent.locGridCardText).toBeVisible();
    // await expect(gridSectionComponent.locGridCardLink).toHaveAttribute('href');    // await expect(gridSectionComponent.locGridButton).toBeVisible();
    // await expect(gridSectionComponent.locGridButtonLink).toHaveAttribute('href');
    // await expect(gridSectionComponent.locGridBackgroundColor).toBeVisible();
  });
});
// Nav List Section tests
test('Nav List Section Tests', async ({ page }) => {
  console.log('Nav List Section: Nav List Section contains required fields - Headline, Lists::Header/Links, Disclaimer, Background Color');
  await test.step(`Verify the the Nav List Section contents`, async () => {
    // await expect(navListComponent.locNavListHeadline).toContainText();
    // await expect(navListComponent.locNavListListsHeader).toBeVisible(); // repeater - many
    // await expect(navListComponent.locNavListListsLinks).toBeVisible(); // repeater - many
    // await expect(navListComponent.locNavListDisclaimer).toBeVisible();
    // await expect(navListComponent.locNavListBackgroundColor).toBeVisible();
  });
});
// Feature List Section
test('Feature List Section Tests', async ({ page }) => {
  console.log(
    'Feature List Section: Feature List Section contains required feilds - Content, Subheader, Image, List::Image/Headline/Content, Background Color'
  );
  // await expect(featureListComponent.locFeatureListContent).toBeVisible();
  // await expect(featureListComponent.locFeatureListSubheader).toBeVisible();
  // await expect(featureListComponent.locFeatureListImage).toBeVisible();
  // await expect(featureListComponent.locFeatureListList).toContain('repeating-fields');
  // await expect(featureListComponent.locFeatureListListImage).toBeVisible();
  // await expect(featureListComponent.locFeatureListListHeadline).toBeVisible();
  // await expect(featureListComponent.locFeatureListListContent).toContainText();
  // await expect(featureListComponent.locFeatureListBackgroundColor).toBeVisible();
});
// Testimonial Carousel Section
test('Testimonial Carousel Section Tests', async ({ page }) => {
  console.log('Testimonial Carousel Section: Testimonial Carousel Section contains required fields - Carousel::Image/Title/Text/Link;');
  // await expect(testimonialCarouselComponent.locTestimonialCarousel).toBeVisible(); // contains repeater fields
  // await expect(testimonialCarouselComponent.locTestimonialCarouselImage).toBeVisible();
  // await expect(testimonialCarouselComponent.locTestimonialCarouselText).toBeVisible();
  // await expect(testimonialCarouselComponent.locTestimonialCarouselLink).toBeVisible();
});
// Fact Callouts Section
test('Fact Callouts Section', async ({ page }) => {
  console.log(
    'Fact Callouts Section: Fact Callouts section contains required fields - Headline, Columns::LargeStatNumber/SmallStatNumber/SmallText, Background Color'
  );
  // await expect(factCalloutComponent.locFactCalloutHeadline).toBeVisible();
  // await expect(factCalloutComponent.locFactCalloutColumn).toBeVisible(); // repeater columns
  // await expect(factCalloutComponent.locFactCalloutColumnLargeStatNumber).toBeVisible();
  // await expect(factCalloutComponent.locFactCalloutColumnSmallStatNumber).toBeVisible();
  // await expect(factCalloutComponent.locFactCalloutColumnSmallText).toBeVisible();
  // await expect(factCalloutComponent.locFactCalloutBackground).toBeVisible();
});
// Review Section
test('Review Section', async ({ page }) => {
  console.log('Review Section: Review section contains required fields - Image, Background Color');
  // await expect(reviewSectionComponent.locReviewSectionImage).toBeVisible();
  // await expect(reviewSectionComponent.locReviewSectionBackground).toBeVisible();
});
// Logo Cloud Section
test('Logo Cloud Section', async ({ page }) => {
  console.log('Logo Cloud Section: Logo Cloud section contains required fields - Text, Image(s), Background Color');
  // await expect(logoCloudSectionComponent.locLogoCloudSectionText).toBeVisible();
  // await expect(logoCloudSectionComponent.locLogoCloudSectionImage).toBeVisible(); // repeater field
  // await expect(logoCloudSectionComponent.locLogoCloudSectionBackground).toBeVisible();
});
// Features Grid Section
test('Features Grid Section', async ({ page }) => {
  console.log(
    'Features Grid Section: Features Grid section contains required fields - Content::Headline/Paragraph, Cards::Image/Headline/ContentArea/Link, Background Color'
  );
  // await expect(featuresGridSectionComponent.locFeaturesGridSectionContent).toBeVisible();
  // await expect(featuresGridSectionComponent.locFeaturesGridSectionContentHeadline).toBeVisible();
  // await expect(featuresGridSectionComponent.locFeaturesGridSectionContentParagraph).toBeVisible();
  // await expect(featuresGridSectionComponent.locFeaturesGridSectionCards).toBeVisible(); // repeater fields
  // await expect(featuresGridSectionComponent.locFeaturesGridSectionCardsImage).toBeVisible();
  // await expect(featuresGridSectionComponent.locFeaturesGridSectionCardsHeadline).toBeVisible();
  // await expect(featuresGridSectionComponent.locFeaturesGridSectionCardsContentArea).toBeVisible();
  // await expect(featuresGridSectionComponent.locFeaturesGridSectionCardsLink).toHaveAttribute('href');
  // await expect(featuresGridSectionComponent.locFeaturesGridSectionBackgroundColor).toBeVisible();
});
// Pricing Section
test('Pricing Section', async ({ page }) => {
  console.log(
    'Pricing Section: Pricing section contains required fields - Content::Headline/Paragraph, Card::PromoBadge/Image/Headline/Description/InfoTitle/Benefits::IndividualBenefits,/SubHeader/Price/PerMonth/FeeText/CTAButtonType/ButtonLink'
  );
  // await expect(pricingSectionComponent.locPricingSectionContentHeadline).toBeVisible();
  // await expect(pricingSectionComponent.locPricingSectionContentParagraph).toBeVisible();
  // await expect(pricingSectionComponent.locPricingSectionCard).toBeVisible(); // repeater fields
  // await expect(pricingSectionComponent.locPricingSectionCardPromoBadge).toBeVisible();
  // await expect(pricingSectionComponent.locPricingSectionCardImage).toBeVisible();
  // await expect(pricingSectionComponent.locPricingSectionCardHeadline).toBeVisible();
  // await expect(pricingSectionComponent.locPricingSectionCardDescription).toBeVisible();
  // await expect(pricingSectionComponent.locPricingSectionCardInfoTitle).toBeVisible();
  // await expect(pricingSectionComponent.locPricingSectionCardBenefits).toBeVisible(); // repeater fields
  // await expect(pricingSectionComponent.locPricingSectionCardBenefitsIndividual).toBeVisible();
  // await expect(pricingSectionComponent.locPricingSectionCardSubHeader).toBeVisible();
  // await expect(pricingSectionComponent.locPricingSectionCardPrice).toBeVisible();
  // await expect(pricingSectionComponent.locPricingSectionCardPerMonth).toBeVisible();
  // await expect(pricingSectionComponent.locPricingSectionCardFeeText).toBeVisible();
  // await expect(pricingSectionComponent.locPricingSectionCardCTAButtonType).toBeVisible();
  // await expect(pricingSectionComponent.locPricingSectionCardButtonLink).toBeVisible();
});
// Email Capture Section
test('Email Capture Section', async ({ page }) => {
  console.log(
    'Email Capture Section: Email Capture Section contains required fields - Header, Subtext, PolicyLink, IterableCampaignName, IterableCaptureSource, IterableListId, IterableCampaignType, Background Color'
  );
  // await expect(emailCaptureSectionComponent.locEmailCaptureSectionHeader).toBeVisible();
  // await expect(emailCaptureSectionComponent.locEmailCaptureSectionSubtext).toBeVisible();
  // await expect(emailCaptureSectionComponent.locEmailCaptureSectionPolicyLink).toHaveAttribute('href');
  // await expect(emailCaptureSectionComponent.locEmailCaptureSectionIterableCampaignName).toBeDefined();
  // await expect(emailCaptureSectionComponent.locEmailCaptureSectionIterableCaptureSource).toBeDefined();
  // await expect(emailCaptureSectionComponent.locEmailCaptureSectionIterableId).toBeDefined();
  // await expect(emailCaptureSectionComponent.locEmailCaptureSectionIterableCampaignType).toBeDefined();
  // await expect(emailCaptureSectionComponent.locEmailCaptureSectionBackgroundColor).toBeVisible();
});
