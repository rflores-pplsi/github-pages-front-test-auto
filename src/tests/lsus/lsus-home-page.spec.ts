import { test, expect, Page } from '@playwright/test';
import UrlsUtils from '../../utils/urls.utils';
// import { HeroSectionComponent } from '../../../page-objects/common-components/hero-section.component';
// import { GridSectionComponent } from '../../../page-objects/common-components/grid-section.component';
// import { NavListComponent } from '../../../page-objects/common-components/nav-list-section.component';
// import { FeatureListComponent } from '../../../page-objects/common-components/feature-list-section.component';
// import { TestimonialCarouselComponent } from '../../../page-objects/common-components/testimonial-carousel-section.component';

// TODO: locators
// let heroSectionComponent: HeroSectionComponent;
// let gridSectionComponent: GridSectionComponent;
// let navListComponent: NavListComponent;
// let featureList = new FeatureListComponent;
// let testimonialCarousel = new TestimonialCarouselComponent;

test.beforeEach(async ({ context, page }) => {
  // TODO: setup page-objects for common-components tests
  // Hero Section Tests
  // -> heroSectionComponent = new HeroSectionComponent(context, page);
  // Grid Section Tests
  // -> gridSectionComponent = new GridSectionComponent(context, page);
  // Nav List Tests
  // -> navListComponent = new NavListComponent(context, page);
  // Feature List Tests
  // -> featureListComponent = new FeatureListComponent(context, page);
  // Testimonials Tests
  // -> testimonialsComponent = new TestimonialsComponent(context, page);
  // Fact Callouts Tests
  // Review Section Tests
  // Logo Cloud Tests
  // Pricing Section Tests
  // Email Capture Tests
  test.slow();
});

// Hero Section Tests
test('Hero Section Tests', async ({ page }) => {
  console.log(
    'Hero Section: Hero Section contains required fields - Layout Style, Desktop/Mobile images, Headline,  and a CTA Button with appropriate link'
  );
  await test.step(`Verify the the Hero Section contents`, async () => {
    // await expect(heroSectionComponent.locLayoutStyle).toBeVisible();
    // await expect(heroSectionComponent.locDesktopImage).toBeVisible();
    // await expect(heroSectionComponent.locMobileImage).toBeHidden();
    // await expect(heroSectionComponent.locHeadlineText).toBeVisible();
    // await expect(heroSectionComponent.locCallToActionButton).toBeVisible();
    // await expect(heroSectionComponent.locCallToActionButtonText).toBeVisible();
    // await expect(heroSectionComponent.locCallToActionButtonLink).toHaveAttribute('href');
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
