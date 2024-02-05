import { Locator, Page, BrowserContext, expect, test, Response } from '@playwright/test';
import { ProductDetails, PageUrlAndTitleArray, PlanNameCostArray } from '../../../types/types';
import UrlsUtils from '../../../utils/urls.utils';
import { HeaderComponent } from './header.page';
import { LegalshieldPage } from './legalshield.page';
import { LegalshieldCoverageAndPricingPage } from './legalshield-coverage-and-pricing.page';
import { SmallBusinessQualifyingComponent } from './legalshield-small-business-qualifying.component';
import { MarketingSitesCartComponent } from '../marketing-sites-cart-component';
import { MarketingSiteFooterComponent } from '../marketing-sites-footer-component';
import { MarketingSiteHeaderComponent } from '../marketing-sites-header-component';
import { HeroSectionComponent } from '../../common-components/hero-section.component';
import { GridSectionComponent } from '../../common-components/grid-section.component';
import { PricingSectionComponent } from '../../common-components/pricing-section.component';
import { NavListSectionComponent } from '../../common-components/nav_list-section.component';
import { FeaturesGridSectionComponent } from '../../common-components/features-grid-section.component';
import { CallToActionSectionComponent } from '../../common-components/call-to-action-section.component';

export class LegalshieldService {
  protected page: Page;
  protected context: BrowserContext;
  readonly headerComponent: HeaderComponent;
  readonly smallBusinessQualifyingComponent: SmallBusinessQualifyingComponent;
  readonly marketingSitesCartComponent: MarketingSitesCartComponent;
  readonly marketingSiteHeaderComponent: MarketingSiteHeaderComponent;
  readonly marketingSiteFooterComponent: MarketingSiteFooterComponent;
  readonly heroSectionComponent: HeroSectionComponent;
  readonly gridSectionComponent: GridSectionComponent;
  readonly pricingSectionComponent: PricingSectionComponent;
  readonly navListSectionComponent: NavListSectionComponent;
  readonly featuresGridSectionComponent: FeaturesGridSectionComponent;
  readonly callToActionSectionComponent: CallToActionSectionComponent;
  readonly legalshieldPage: LegalshieldPage;
  readonly legalshieldCoverageAndPricingPage: LegalshieldCoverageAndPricingPage;
  readonly firstGetStartedButton: Locator;
  readonly locLinksThatNavigateToNewPage: Locator;
  readonly locLinksThatNavigateToNewTab: Locator;
  readonly locLinksThatAddToCart: Locator;
  readonly locLinksThatTriggerPopUps: Locator;
  readonly locDisplayedPopUpContainer: Locator;
  readonly locPopUpCloseButton: Locator;
  readonly locAnchorLinks: Locator;
  readonly locEmailCaptureSection: Locator;

  constructor(page: Page, context: BrowserContext) {
    this.page = page;
    this.context = context;
    this.headerComponent = new HeaderComponent(page);
    this.smallBusinessQualifyingComponent = new SmallBusinessQualifyingComponent(page);
    this.marketingSitesCartComponent = new MarketingSitesCartComponent(page);
    this.marketingSiteFooterComponent = new MarketingSiteFooterComponent(page);
    this.marketingSiteHeaderComponent = new MarketingSiteHeaderComponent(page);
    this.heroSectionComponent = new HeroSectionComponent(context, page);
    this.gridSectionComponent = new GridSectionComponent(context, page);
    this.pricingSectionComponent = new PricingSectionComponent(context, page);
    this.navListSectionComponent = new NavListSectionComponent(context, page);
    this.featuresGridSectionComponent = new FeaturesGridSectionComponent(context, page);
    this.callToActionSectionComponent = new CallToActionSectionComponent(context, page);
    this.legalshieldPage = new LegalshieldPage(context, page);
    this.legalshieldCoverageAndPricingPage = new LegalshieldCoverageAndPricingPage(page);
    this.firstGetStartedButton = this.page.locator(`//div[@id="main-content"]//a[@id="lsc-add-to-cart-button"]`).nth(0);
    this.locLinksThatNavigateToNewPage = this.page.locator(
      'body .lsux-link[href]:not([target="_blank"]):not([href*="javascript:void(0)"]):not([href*="#"]), body .lsux-button--primary[href]:not([target="_blank"]):not([href*="javascript:void(0)"]):not([href*="#"]),body .lsux-button--secondary[href]:not([target="_blank"]):not([href*="javascript:void(0)"]):not([href*="#"])'
    );
    this.locLinksThatNavigateToNewTab = this.page.locator(
      'body .lsux-link[href]:is([target="_blank"]), body .lsux-button--primary[href]:is([target="_blank"]), body .lsux-download-app a[href]:is([target="_blank"]), body .lsux-button--tertiary a[href]:is([target="_blank"])'
    );
    this.locLinksThatAddToCart = this.page.locator(
      'body .lsux-card:has(a#lsc-add-to-cart-button) a,body .lsux-heading:has(a#lsc-add-to-cart-button) a, body:has(a#lsc-add-to-cart-button) a.lsc-add-to-cart-button'
    );
    this.locLinksThatTriggerPopUps = this.page.locator('body .lsux-link[href][id*="open-modal"], body .lsux-button--primary[href][id*="open-modal"]');
    this.locDisplayedPopUpContainer = this.page.locator('[id*="modal"][style*="display: block"]');
    this.locPopUpCloseButton = this.page.locator('[id*="modal"][style*="display: block"] img');
    this.locAnchorLinks = this.page.locator('body .lsux-link[href*="#"], body .lsux-button--primary[href*="#"]');
    this.locEmailCaptureSection = this.page.locator('body #section-email_capture');
  }

  navigateToUrl = async (url: string): Promise<void> => {
    await this.page.goto(url);
    // Keeping this around to see if the prod dialog
    // eslint-disable-next-line const-case/uppercase
    const dialogCloseButton = '//div[contains(@class,"ub-emb-iframe-wrapper ub-emb-visible")]//button';
    const isDialogPresent = await this.page
      .waitForSelector(dialogCloseButton, { timeout: 6000 })
      .then(() => true)
      .catch(() => false);
    if (isDialogPresent == true) {
      await this.page.locator(dialogCloseButton).click();
    }
  };

  /**
   *
   *
   * @param {Array<ProductDetails>} productDetails
   * @memberof LegalshieldService
   */
  addProductsFromProductDetails = async (productDetails: Array<ProductDetails>): Promise<void> => {
    let counter = productDetails.length;
    for (const product of productDetails) {
      switch (product.name) {
        case 'Legal Plan':
          await this.addLegalPlan(product.term);
          break;
        case 'Commercial Drivers Legal Plan':
          await this.addCommercialDriversLegalPlan();
          break;
        case 'Small Business Legal Essentials':
        case 'Small Business Legal Plus':
        case 'Small Business Legal Pro':
          await this.addSmallBusinessPlan(product.name);
          break;
        case 'Home Business Supplement':
          await this.addHomeBusinessSupplement();
          break;
        case 'Trial Defense Supplement':
          await this.addTrialDefenseSupplement();
          break;
        case 'Gun Owners Supplement':
          await this.addGunOwnersSupplement();
          break;
        case 'Ride Share and Delivery Supplement':
          await this.addRideShareAndDeliverySupplement();
          break;
        default:
          break;
      }
      if (counter == 1) {
        await this.page.waitForTimeout(500);
        await this.marketingSitesCartComponent.locCheckoutButton.click();
      } else {
        await this.marketingSitesCartComponent.locContinueShoppingLink.click();
      }
      counter--;
    }
  };

  /**
   *
   *
   * @param {string} term
   * @memberof LegalshieldService
   */
  addLegalPlan = async (term: string): Promise<void> => {
    await this.page.goto(`${UrlsUtils.marketingSitesUrls.legalShieldUSUrl}/personal-plan/coverage-and-pricing/`);
    const startPlanLocator = this.page.locator(`//a[contains(@class,"lsc-add-to-cart-button") and contains(.,"${term.toLowerCase()}")]`);
    await expect(async () => {
      await startPlanLocator.click();
      await expect(this.page.locator('#cart-wrapper')).toBeVisible();
    }).toPass({ intervals: [0.3] });
  };

  addSmallBusinessPlan = async (productName: string): Promise<void> => {
    await this.page.goto(`${UrlsUtils.marketingSitesUrls.legalShieldUSUrl}/business-plan/plan-summary/#chart`);
    productName = productName.replace(' Legal', '');
    const getStartedButtonLocator = this.page.locator(
      `//div[contains(@class,"lsc-dynamic-single-plan  et_pb_css_mix_blend_mode_passthrough") and contains(.,"${productName}")]//a[@role="button"]`
    );
    await expect(async () => {
      await getStartedButtonLocator.click();
      await expect(this.page.locator('#qualifying-container')).toBeVisible();
    }).toPass({ intervals: [0.3] });
    await this.smallBusinessQualifyingComponent.completeQualifyingQuestionnaireWithNos();
  };

  /**
   *
   *
   * @memberof LegalshieldService
   */
  addCommercialDriversLegalPlan = async (): Promise<void> => {
    await this.page.goto(`${UrlsUtils.marketingSitesUrls.legalShieldUSUrl}/legal-protection-truck-drivers-and-other-commercial-drivers/`);
    await this.firstGetStartedButton.click();
  };
  /**
   *
   *
   * @memberof LegalshieldService
   */
  addHomeBusinessSupplement = async (): Promise<void> => {
    await this.page.goto(`${UrlsUtils.marketingSitesUrls.legalShieldUSUrl}/legal-protection-home-business/`);
    await this.firstGetStartedButton.click();
  };
  /**
   *
   *
   * @memberof LegalshieldService
   */
  addTrialDefenseSupplement = async (): Promise<void> => {
    await this.page.goto(`${UrlsUtils.marketingSitesUrls.legalShieldUSUrl}/extended-trial-and-lawsuit-defense-protection/`);
    await this.firstGetStartedButton.click();
  };
  /**
   *
   *
   * @memberof LegalshieldService
   */
  addGunOwnersSupplement = async (): Promise<void> => {
    await this.page.goto(`${UrlsUtils.marketingSitesUrls.legalShieldUSUrl}/gun-supplement/`);
    await this.firstGetStartedButton.click();
  };
  /**
   *
   *
   * @memberof LegalshieldService
   */
  addRideShareAndDeliverySupplement = async (): Promise<void> => {
    await this.page.goto(`${UrlsUtils.marketingSitesUrls.legalShieldUSUrl}/legal-help-ride-share-and-delivery-drivers/`);
    await this.firstGetStartedButton.click();
  };

  clickAllLinksAndVerifyExpectedUrlAndTitle = async (links: Locator, expectedUrlAndTitleArray: PageUrlAndTitleArray): Promise<void> => {
    const count = await links.count();
    for (let i = 0; i < count; i++) {
      try {
        await links.nth(i).click();
        await this.page.screenshot({ fullPage: true, path: `screenshots/${new Date().getTime()}-${i}.png` });
        await expect.soft(this.page).toHaveURL(new RegExp(expectedUrlAndTitleArray[i].url));
        await expect.soft(this.page).toHaveTitle(expectedUrlAndTitleArray[i].title);
        await this.page.goBack();
      } catch {
        console.log('Errored out in catch');
        continue;
      }
    }
  };

  clickItemsFromUnorderedList = async (listItems: Locator): Promise<Array<string>> => {
    const items = await listItems.all();
    let results = [];
    for (const item of items) {
      try {
        await item.click();
        await this.page.waitForLoadState();
        await this.page.screenshot({ fullPage: true, path: `screenshots/${new Date().getTime()}-${this.page.title()}.png` });
        results.push(this.page.url(), this.page.title());
        await this.page.goBack();
      } catch {
        console.log('Errored out in catch');
        continue;
      }
    }
    results = await Promise.all(results);
    return results;
  };

  clickNavigationLocatorsAndVerifyResponseCodes = async (pageUnderTestURL: string, locator: Locator, expectedStatusCode: number): Promise<void> => {
    const locators = await locator.all();
    let response: Response;
    console.log(`Found ${locators.length} elements`);
    for (const locator of locators) {
      const expectedURL = await locator.getAttribute('href');
      await test.step(`Click link to navigate to ${expectedURL}`, async () => {
        [response] = await Promise.all([this.page.waitForResponse((response) => response.url() === expectedURL), locator.click()]);
      });
      await test.step(`Verify Status:200`, async () => {
        expect.soft(response.status()).toBe(expectedStatusCode);
      });
      await test.step(`Return to Page Under Test`, async () => {
        await this.page.goto(pageUnderTestURL);
      });
    }
  };
  clickNavigationLocatorsAndVerifyNewTabURLWithoutError = async (locator: Locator): Promise<void> => {
    const locators = await locator.all();
    let newTab: Page;
    console.log(`Found ${locators.length} elements`);
    for (const locator of locators) {
      const expectedURL = await locator.getAttribute('href');
      await test.step(`Click link to navigate to ${expectedURL}`, async () => {
        [newTab] = await Promise.all([this.context.waitForEvent('page'), await locator.click()]);
      });
      await test.step(`Verify Expected URL loads without a Page Not Found`, async () => {
        expect.soft(newTab.url()).toBe(expectedURL);
        //expect.soft((await newTab.title()).toLowerCase).not.toContain('page not found');
      });
    }
  };

  /**
   *
   *
   * @param {Locator} locator
   * @memberof LegalshieldService
   */
  clickAllAddToCartLinksAndVerifyCartIsUpdated = async (locator: Locator): Promise<void> => {
    const locators = await locator.all();
    console.log(`Found ${locators.length} locators`);
    for (const locator of locators) {
      const shortCode = await locator.locator('+ .lsc-shortcode-field .et_pb_code_inner').innerText();
      await test.step(`Click add To Cart link`, async () => {
        await locator.click();
      });
      if (shortCode.includes('BUS') || shortCode.includes('PRO') || shortCode.includes('PLUS') || shortCode.includes('ESS')) {
        await this.smallBusinessQualifyingComponent.completeQualifyingQuestionnaireWithNos();
      }
      await test.step(`Verify Cart contains Plan Name and Header displays plan added notification icon`, async () => {
        await expect.soft(this.marketingSitesCartComponent.locCartContainerDiv).toContainText(shortCode);
        await expect.soft(this.marketingSiteHeaderComponent.locShoppingCartItemAddedNotification).toBeVisible();
      });
      await this.marketingSitesCartComponent.locTrashCanIcon.click();
      await this.marketingSitesCartComponent.locContinueShoppingLink.click();
    }
  };

  /**
   *
   *
   * @param {Locator} locator
   * @memberof LegalshieldService
   */
  clickAllPopUpLinksAndVerifyPopUpDisplays = async (locator: Locator): Promise<void> => {
    const locators = await locator.all();
    console.log(`Found ${locators.length} elements`);
    for (const locator of locators) {
      await test.step(`Click link to navigate to display Pop Up`, async () => {
        await locator.click();
      });
      await test.step(`Verify Pop Up is displayed`, async () => {
        await expect.soft(this.locDisplayedPopUpContainer).toBeVisible();
      });
      await this.locPopUpCloseButton.click();
    }
  };

  /**
   *
   *
   * @param {Locator} locator
   * @memberof LegalshieldService
   */
  clickAllAnchorLinksAndVerifyScroll = async (locator: Locator): Promise<void> => {
    const locators = await locator.all();
    console.log(`Found ${locators.length} elements`);
    for (const locator of locators) {
      await test.step(`Click link to scroll to a section on this page`, async () => {
        await locator.click();
      });
      await test.step(`Verify page has scrolled`, async () => {
        const pageScrollY = await this.page.evaluate(() => window.scrollY);
        expect(pageScrollY).toBeGreaterThan(0);
      });
    }
  };

  /**
   *
   *
   * @param {Locator} locator
   * @memberof LegalshieldService
   */
  fillOutEmailFormAndSubmit = async (locator: Locator): Promise<void> => {
    const forms = await locator.all();
    let response: Response;
    console.log(`Found ${forms.length} email forms`);
    for (const form of forms) {
      await test.step(`Fill out email form and submit it`, async () => {
        await form.locator('#iterable-email-form input#firstname').fill('Test Name');
        await form.locator('#iterable-email-form input#email').fill('testingLSUS@lsus-testing.com');
        [response] = await Promise.all([
          this.page.waitForResponse((response) => response.status() === 200),
          await form.locator('#iterable-email-form input.email-submit').click(),
        ]);
        await test.step(`Verify Status:200`, async () => {
          expect.soft(response.status()).toBe(200);
        });
      });
    }
  };
}
