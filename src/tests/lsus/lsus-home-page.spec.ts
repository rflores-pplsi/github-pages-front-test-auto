import { test, expect, Page } from '@playwright/test';
import UrlsUtils from '../../utils/urls.utils';
// import { HeroSectionComponent } from '../../../page-objects/common-components/hero-section.component';
// import { GridSectionComponent } from '../../../page-objects/common-components/grid-section.component';

// TODO: locators
// let heroSectionComponent: HeroSectionComponent;
// let gridSectionComponent: GridSectionComponent;

test.beforeEach(async ({ context, page }) => {
  // TODO: setup page-objects for common-components tests
  // Hero Section Tests
  // -> heroSectionComponent = new HeroSectionComponent(context, page);
  // Grid Section Tests
  // -> gridSectionComponent = new GridSectionComponent(context, page);
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
    // await expect(gridSectionComponent.locGridCardLink).toHaveAttribute('href');
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
    // await expect(gridSectionComponent.locGridCardLink).toHaveAttribute('href');
    // await expect(gridSectionComponent.locGridButton).toBeVisible();
    // await expect(gridSectionComponent.locGridButtonLink).toHaveAttribute('href');
    // await expect(gridSectionComponent.locGridBackgroundColor).toBeVisible();
  });
});
