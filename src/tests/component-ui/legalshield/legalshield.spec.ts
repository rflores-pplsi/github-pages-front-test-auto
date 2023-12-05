import { test, expect, Page } from '@playwright/test';
import UrlsUtils from '../../../utils/urls.utils';
import { LegalshieldService } from '../../../page-objects/marketing-sites/legalshield/legalshield-service';

let legalshieldService: LegalshieldService;

test.beforeEach(async ({ context, page }) => {
  await page.goto(UrlsUtils.legalshieldService.baseUrl);
  // instantiate Legalshield service
  legalshieldService = new LegalshieldService(page, context);

  test.slow();
});
// USE_UAT=true npx playwright test --grep @Legalshield
// Hero Section Tests
test('Hero Section Tests @Legalshield', async ({ page }) => {
  console.log(
    'Hero Section: Hero Section contains required fields - Layout Style, Desktop/Mobile images, Headline, and a CTA Button with appropriate link'
  );
  await test.step(`Legalshield Hero Section Click On Button`, async () => {
    await legalshieldService.legalshieldPage.heroSectionComponent.locCallToActionButton.click();

    await expect(page).toHaveURL(new RegExp('legalshield.com/legal-plans-overview-v2'));
    await expect(page).toHaveTitle('Prepaid Legal Plans - Online Legal Advice - LegalShield');
  });
});
// Grid section tests
test('Grid Section Test Links @Legalshield', async ({ page }) => {
  await test.step(`Verify we are within each card in the section by checking the header text of each`, async () => {
    await expect(legalshieldService.legalshieldPage.gridSectionComponent.locGridCardTitle).toHaveText([
      'Wills and Estates',
      'Family Law',
      'Consumer Matters',
      'Real Estate',
    ]);
    await test.step(`Click on all links within Grid Section and get the resulting page urls`, async () => {
      const locator = legalshieldService.legalshieldPage.gridSectionComponent.locGridCardLink;
      const results = await legalshieldService.legalshieldPage.clickLinksReturnResults(locator);
      expect(results).toEqual(
        expect.arrayContaining([
          'https://uat-legalshield.com/estate-planning/',
          'Find an Estate Planning Attorney & Get Legal Advice - LegalShield',
          'https://uat-legalshield.com/family-law/',
          'Family Law Lawyers - Get Legal Advice & Ask Questions Online',
          'https://uat-legalshield.com/consumer-finance/',
          'Consumer Finance & Online Legal Services - LegalShield',
          'https://uat-legalshield.com/real-estate/',
          'Real Estate Lawyers & Online Legal Advice - LegalShield',
        ])
      );
    });
  });
});
// Pricing Section
test('Pricing Section Test Links @Legalshield', async ({ page }) => {
  await test.step(`Verify we are within each card in the section by checking the header text of each`, async () => {
    await expect(legalshieldService.legalshieldPage.pricingSectionComponent.locPricingSectionCardHeadline).toHaveText([
      'Personal / Family',
      'Small Business',
      'Launch',
    ]);
  });
  await test.step(`Click on all links within Pricing Section Cards and get the resulting page urls`, async () => {
    const locator = legalshieldService.legalshieldPage.pricingSectionComponent.locPricingSectionCardButtonLink;
    const results = await legalshieldService.legalshieldPage.clickLinksReturnResults(locator);
    expect(results).toEqual(
      expect.arrayContaining([
        'https://uat-legalshield.com/personal-plan/plan-details/',
        'Personal Legal Plan: Get Legal Advice Now! - LegalShield',
        'https://uat-legalshield.com/business-plan/plan-summary/',
        'Online Small Business Legal Services & Pricing - LegalShield',
        'https://uat-legalshield.com/start-a-business/',
        'Start a Business Online With Launch by LegalShield',
      ])
    );
  });
});
// Nav List Section tests
test('Nav List Section Test Links @Legalshield', async ({ page }) => {
  await test.step(`Verify we are in the list section by checking the header of each list`, async () => {
    await expect(legalshieldService.legalshieldPage.pricingSectionComponent.locPricingSectionCardHeadline).toHaveText([
      'Personal / Family',
      'Small Business',
      'Launch',
    ]);
  });
  await test.step(`Click on all the Nav List Section links and get the resulting page urls`, async () => {
    const listItems = legalshieldService.legalshieldPage.navListSectionComponent.locNavListListsLinks;
    const results = await legalshieldService.legalshieldPage.clickItemsFromUnorderedList(listItems);
    expect(results).toEqual(
      expect.arrayContaining([
        'https://uat-legalshield.com/traffic-accident/',
        'Traffic Lawyers - Tickets & Violations - LegalShield',
        'https://uat-legalshield.com/renters/',
        'Renters Rights Lawyers - Get Legal Advice Online - LegalShield',
        'https://uat-legalshield.com/landlords/',
        'Online Landlord Lawyers & Legal Advice - LegalShield',
        'https://uat-legalshield.com/legal-protection-truck-drivers-and-other-commercial-drivers/',
        'Online Lawyers for Commercial Truck Drivers - LegalShield',
        'https://uat-legalshield.com/legal-protection-home-business/',
        'Online Home Business Lawyers & Legal Advice - LegalShield',
        'https://uat-legalshield.com/trial-defense-for-business-supplement/',
        'Trial Defense for Business Supplement - LegalShield',
        'https://uat-legalshield.com/intellectual-property/',
        'Intellectual Property Protection for Small Businesses - LegalShield',
        'https://uat-legalshield.com/collection/',
        'Online Debt Collection Attorneys for Small Businesses - LegalShield',
        'https://uat-legalshield.com/contracts/',
        'Online Contract Lawyers & Advice for Small Business - LegalShield',
        'https://uat-legalshield.com/employment/',
        'Employment Lawyers & Online Legal Advice - LegalShield',
        'https://uat-legalshield.com/business-licenses/',
        'Apply for Business Licenses Online - LegalShield',
        'https://uat-legalshield.com/civil-litigation/',
        'Business Litigation Legal Advice for Small Businesses - LegalShield',
        'https://uat-legalshield.com/start-a-business/business-formation/articles-of-organization/',
        'File Articles of Organization Online - LegalShield',
        'https://uat-legalshield.com/business-licenses/business-permits/',
        'Apply for Business Permits Online - LegalShield',
        'https://uat-legalshield.com/start-a-business/business-formation/business-structure/',
        'Selecting Your New Business Legal Structure - LegalShield',
        'https://uat-legalshield.com/start-a-business/business-formation/business-name-check/',
        'Business Name Check - Is Your Business Name Available? - LegalShield',
        'https://uat-legalshield.com/start-a-business/business-formation/business-type-comparison-chart/',
        'Business Type Comparison Chart - LegalShield',
        'https://uat-legalshield.com/start-a-business/business-formation/llc/',
        'Form an LLC Online - LegalShield',
      ])
    );
    await test.step(`Verifying that the disclaimer is visible below the nav list section`, async () => {
      await expect(legalshieldService.legalshieldPage.navListSectionComponent.locNavListDisclaimer).toBeVisible();
    });
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
