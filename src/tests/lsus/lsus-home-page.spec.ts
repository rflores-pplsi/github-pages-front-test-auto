import { test, expect, Page } from '@playwright/test';
import UrlsUtils from '../../utils/urls.utils';
// import { HeroSectionComponent } from '../../../page-objects/common-components/hero-section.component';
// TODO: locators from Hero Section Common Component
// let heroSectionComponent: HeroSectionComponent;

test.beforeEach(async ({ context, page }) => {
  // TODO: setup page-objects for common-components tests
  // Hero Section Tests
  // -> heroSectionComponent = new HeroSectionComponent(context, page);
  // Grid Section Tests
  // Nav List Tests
  // Feature List Tests
  // Testimonials Tests
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
