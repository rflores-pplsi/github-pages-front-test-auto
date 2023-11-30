import { test, expect, Page } from '@playwright/test';
import UrlsUtils from '../../../utils/urls.utils';
import { LegalshieldService } from '../../../page-objects/marketing-sites/legalshield/legalshield-service';
// import { NavListSectionComponent } from '../../../page-objects/common-components/nav-list-section.component';
// import { FeatureListSectionComponent } from '../../../page-objects/common-components/feature-list-section.component';
// import { TestimonialCarouselSectionComponent } from '../../../page-objects/common-components/testimonial-carousel-section.component';
// import { FactCalloutsSectionComponent } from '../../../page-objects/common-components/fact-callouts-section.component';
// import { ReviewSectionComponent } from '../../../page-objects/common-components/review-section.component';
// import { LogoCloudSectionComponent } from '../../../page-objects/common-components/logo-cloud-section.component';
// import { FeaturesGridSectionComponent } from '../../../page-objects/common-components/features-grid-section.component';
import { PricingSectionComponent } from '../../../page-objects/common-components/pricing-section.component';
// import { EmailCaptureSectionComponent } from '../../../page-objects/common-components/email-capture-section.component';

// TODO: locators
let legalshieldService: LegalshieldService;
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
  await page.goto(UrlsUtils.legalshieldService.baseUrl); // use Utils?
  // TODO: setup page-objects for common-components tests
  // instantiate Legalshield service
  legalshieldService = new LegalshieldService(page, context);

  test.slow();
});

// Hero Section Tests
// USE_UAT=true npx playwright test --grep @Legalshield
test('Hero Section Tests @Legalshield', async ({ page }) => {
  console.log(
    'Hero Section: Hero Section contains required fields - Layout Style, Desktop/Mobile images, Headline, and a CTA Button with appropriate link'
  );
  await test.step(`Legalshield Hero Section Click On Button`, async () => {
    await legalshieldService.legalshieldPage.heroSectionComponent.locCallToActionButton.click();

    await expect(page).toHaveURL(new RegExp('legalshield.com/legal-plans-overview'));
    await expect(page).toHaveTitle('Prepaid Legal Plans - Online Legal Advice - LegalShield');
  });
});
// Grid section tests
test('Grid Section Tests @Legalshield', async ({ page }) => {
  console.log(
    'Grid Section: Grid Section contains required fields - Header, Subtext, Card::Image/Title/Text/Link, Button::optionalLink, and a background color selected'
  );
  await test.step(`Verify the the Grid Section contents`, async () => {
    await expect(legalshieldService.legalshieldPage.gridSectionComponent.locGridCardTitle).toHaveText([
      'Wills and Estates',
      'Family Law',
      'Consumer Matters',
      'Real Estate',
    ]);
    const links = legalshieldService.legalshieldPage.gridSectionComponent.locGridCardLink;
    const count = await links.count();
    for (let i = 0; i < count; i++) {
      await links.nth(i).click();
      await page.waitForLoadState();
      await page.screenshot({ fullPage: true, path: `screenshots/${new Date().getTime()}-${i}.png` });
      console.log(page.url());
      await page.goBack();
    }
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
test('Pricing Section Tests @Legalshield', async ({ page }) => {
  console.log(
    'Pricing Section: Pricing section contains required fields - Content::Headline/Paragraph, Card::PromoBadge/Image/Headline/Description/InfoTitle/Benefits::IndividualBenefits,/SubHeader/Price/PerMonth/FeeText/CTAButtonType/ButtonLink'
  );
  const links = await legalshieldService.legalshieldPage.pricingSectionComponent.locPricingSectionCardButtonLink;
  const count = await links.count();
  for (let i = 0; i < count; i++) {
    await links.nth(i).click();
    await page.waitForLoadState();
    await page.screenshot({ fullPage: true, path: `screenshots/${new Date().getTime()}-${i}.png` });
    console.log(page.url());
    await page.goBack();
  }
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
