/* eslint-disable const-case/uppercase */
import { Locator, Page, BrowserContext, expect, test, Response } from '@playwright/test';
import { ProductDetails, PageUrlAndTitleArray, PlanNameCostArray } from '../../../types/types';
import UrlsUtils from '../../../utils/urls.utils';
import { HeaderComponent } from './header.page';
import { LegalshieldPage } from './legalshield.page';
import { LegalshieldCoverageAndPricingPage } from './legalshield-coverage-and-pricing.page';
import { GbbAllPlansPage } from './gbb-allplans.page';
import { SmallBusinessQualifyingComponent } from './legalshield-small-business-qualifying.component';
import { MarketingSitesCartComponent } from '../marketing-sites-cart-component';
import { MarketingSiteFooterComponent } from '../marketing-sites-footer-component';
import { MarketingSiteHeaderComponent } from '../marketing-sites-header-component';
import { HeroSectionComponent } from '../../global-components/hero-section.component';
import { GridSectionComponent } from '../../global-components/grid-section.component';
import { PricingSectionComponent } from '../../global-components/pricing-section.component';
import { NavListSectionComponent } from '../../global-components/nav_list-section.component';
import { FeaturesGridSectionComponent } from '../../global-components/features-grid-section.component';
import { CallToActionSectionComponent } from '../../global-components/call-to-action-section.component';
import { GbbPricingSectionComponent } from '../../global-components/gbb-pricing-section.component';

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
  readonly gbbPricingSectionComponent: GbbPricingSectionComponent;
  readonly legalshieldPage: LegalshieldPage;
  readonly legalshieldCoverageAndPricingPage: LegalshieldCoverageAndPricingPage;
  readonly gbbAllPlansPage: GbbAllPlansPage;
  readonly firstGetStartedButton: Locator;
  readonly locLinksThatNavigateToNewPage: Locator;
  readonly locLinksThatNavigateToNewTab: Locator;
  readonly locLinksThatAddToCart: Locator;
  readonly locLinksThatTriggerPopUps: Locator;
  readonly locDisplayedPopUpContainer: Locator;
  readonly locPopUpCloseButton: Locator;
  readonly locAnchorLinks: Locator;
  readonly locEmailCaptureSection: Locator;
  readonly locCartBox: Locator;

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
    this.gbbPricingSectionComponent = new GbbPricingSectionComponent(context, page);
    this.legalshieldPage = new LegalshieldPage(context, page);
    this.legalshieldCoverageAndPricingPage = new LegalshieldCoverageAndPricingPage(page);
    this.gbbAllPlansPage = new GbbAllPlansPage(page);
    this.firstGetStartedButton = this.page.locator(`//div[@id="main-content"]//a[@id="lsc-add-to-cart-button"]`).nth(0);
    this.locLinksThatNavigateToNewPage = this.page.locator(
      'body .lsux-link[href]:not([target="_blank"]):not([href*="javascript:void(0)"]):not([href*="#"]), body .lsux-button--primary[href]:not([target="_blank"]):not([href*="javascript:void(0)"]):not([href*="#"]),body .lsux-button--secondary[href]:not([target="_blank"]):not([href*="javascript:void(0)"]):not([href*="#"])'
    );
    this.locLinksThatNavigateToNewTab = this.page.locator(
      'body section:not([id="pre-footer"]) .lsux-link[href]:is([target="_blank"]), body section:not([id="pre-footer"]) .lsux-button--primary[href]:is([target="_blank"]), body section:not([id="pre-footer"]) .lsux-download-app a[href]:is([target="_blank"]), body section:not([id="pre-footer"]) .lsux-button--tertiary a[href]:is([target="_blank"])'
    );
    this.locLinksThatAddToCart = this.page.locator(
      'body .lsux-card:has(a#lsc-add-to-cart-button) a,body .lsux-heading:has(a#lsc-add-to-cart-button) a, body:has(a#lsc-add-to-cart-button) a.lsc-add-to-cart-button, body .pricing-card:has(a#lsc-add-to-cart-button) a'
    );
    this.locLinksThatTriggerPopUps = this.page.locator('body .lsux-link[href][id*="open-modal"], body .lsux-button--primary[href][id*="open-modal"]');
    this.locDisplayedPopUpContainer = this.page.locator('[id*="modal"][style*="display: block"]');
    this.locPopUpCloseButton = this.page.locator('[id*="modal"][style*="display: block"] button[class*="close-modal-button"]');
    this.locAnchorLinks = this.page.locator('body .lsux-link[href*="#"], body .lsux-button--primary[href*="#"]');
    this.locEmailCaptureSection = this.page.locator('body #section-email_capture');
    this.locCartBox = this.page.locator('.cart-box');
  }

  navigateToUrl = async (url: string): Promise<void> => {
    await this.page.goto(url);
    // eslint-disable-next-line const-case/uppercase
    if (process.env.USE_PROD == 'true') {
      const dialogCloseButton = '//div[contains(@class,"ub-emb-iframe-wrapper ub-emb-visible")]//button';
      const isDialogPresent = await this.page
        .waitForSelector(dialogCloseButton, { timeout: 9000 })
        .then(() => true)
        .catch(() => false);
      if (isDialogPresent == true) {
        await this.page.locator(dialogCloseButton).click();
      }
    }
  };

  navigateToLegalshieldPricingAndCoveragePage = async (market: string, language: string): Promise<void> => {
    let url = ''; // Add default value for url
    switch (`${language}-${market}`) {
      case 'en-US':
        url = `${UrlsUtils.marketingSitesUrls.legalShieldUSUrl}/personal-plan/coverage-and-pricing/`;
        break;
      case 'es-US':
        url = `${UrlsUtils.marketingSitesUrls.legalShieldUSUrl}/es/plan-personal/cobertura-y-precios/`;
        break;
      case 'en-CA':
        url = `${UrlsUtils.marketingSitesUrls.legalShieldCAUrl}/personal-plan/coverage-and-pricing`;
        break;
    }
    await this.navigateToUrl(url);
    await this.page.reload();
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
        case 'Essentials':
        case 'Plus':
        case 'Pro':
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
    const startPlanLocator = this.page.locator(`//div[contains(@class,"lsux-card__content") and contains(.,"${term}")]//a`);
    await expect(async () => {
      await startPlanLocator.click();
      await expect(this.page.locator('#cart-wrapper')).toBeVisible();
    }).toPass({ intervals: [0.3] });
  };

  addSmallBusinessPlan = async (productName: string): Promise<void> => {
    await this.page.goto(`${UrlsUtils.marketingSitesUrls.legalShieldUSUrl}/business-plan/plan-summary/`);
    productName = productName.replace(' Legal', '');
    const getStartedButtonLocator = this.page.locator(
      `//div[contains(@class,"lsux-container lsux-container--white lsux-card__content") and contains(.,"${productName}")]//a[@role="button"]`
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
        [response] = await Promise.all([this.page.waitForResponse((response) => response.url().includes(`${expectedURL}`)), locator.click()]);
      });
      await test.step(`Verify Status:200`, async () => {
        expect.soft([200, 301]).toContain(response.status());
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
      if (await locator.isVisible()) {
        // const shortCodes = await locator.locator('//div[contains(@class,"et_pb_code_inner")]').allInnerTexts();
        const prodId = await locator.getAttribute('data-product-id');
        await test.step(`Click add To Cart link`, async () => {
          await locator.click();
        });
        if ((await this.marketingSitesCartComponent.locPlanNames.innerText()).includes('Business')) {
          await this.smallBusinessQualifyingComponent.completeQualifyingQuestionnaireWithNos();
        }
        await test.step(`Verify Cart contains any Plan Name and Header displays plan added notification icon`, async () => {
          const locCart = this.page.locator('//div[@id="cart-container"]//div[@class="cart-box"]'); // check if parent product exists
          await expect.soft(locCart).toBeVisible();
          await expect.soft(this.page.locator(`//div[@id="cart-container"]//div[@id="${prodId?.toString()}"]`)).toBeVisible(); // check if supp exists
          await expect.soft(this.marketingSiteHeaderComponent.locShoppingCartItemAddedNotification).toBeVisible();
        });
        await this.marketingSitesCartComponent.locTrashCanIcon.nth(0).click();
        await this.marketingSitesCartComponent.locContinueShoppingLink.click();
      } // end isVisible()
    }
  };

  clickAllGBBAddToCartLinksAndVerifyCartIsUpdated = async (locator: Locator): Promise<void> => {
    const locators = await locator.all();
    console.log(`Found ${locators.length} locators`);
    for (const locator of locators) {
      if (await locator.isVisible()) {
        // const shortCodes = await locator.locator('//div[contains(@class,"et_pb_code_inner")]').allInnerTexts();
        const prodId = await locator.getAttribute('data-product-id');
        await test.step(`Click add To Cart link`, async () => {
          await locator.click();
        });
        if ((await this.marketingSitesCartComponent.locPlanNames.innerText()).includes('Business')) {
          await this.smallBusinessQualifyingComponent.completeQualifyingQuestionnaireWithNos();
        }
        await test.step(`Verify Cart contains any Plan Name and Header displays plan added notification icon`, async () => {
          const locCart = this.page.locator('//div[@id="cart-container"]//div[@class="cart-box"]'); // check if parent product exists
          await expect.soft(locCart).toBeVisible();
          await expect.soft(this.page.locator(`//div[@id="cart-container"]//div[@id="${prodId?.toString()}"]`)).toBeVisible(); // check if supp exists
          await expect.soft(this.marketingSiteHeaderComponent.locShoppingCartItemAddedNotification).toBeVisible();
          const planName = await this.marketingSitesCartComponent.locPlanNames.innerText();
          const planTypes = ['BASIC LEGAL PLAN', 'ADVANCED LEGAL PLAN', 'PREMIUM LEGAL PLAN'];
          expect.soft(planTypes.some((plan) => planName.includes(plan))).toBe(true);
        });
        await this.marketingSitesCartComponent.locTrashCanIcon.nth(0).click();
        await this.marketingSitesCartComponent.locContinueShoppingLink.click();
      } // end isVisible()
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
      if (await locator.isVisible()) {
        await test.step(`Click link to navigate to display Pop Up`, async () => {
          await locator.click();
        });
        await test.step(`Verify Pop Up is displayed`, async () => {
          await expect.soft(this.locDisplayedPopUpContainer).toBeVisible();
        });
        await this.locPopUpCloseButton.click({ force: true });
      }
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
      // get value of locator's href
      const locId = await locator.getAttribute('href');
      // create new locator from above value
      const locAnchor = this.page.locator(`${locId}`);

      await test.step(`Click link to scroll to a section on this page`, async () => {
        // get parent, check visibility
        const locParent = this.page.locator('.btn-group:not([style*="display: none"])', { has: locator });
        if (await locParent.isVisible()) {
          // click on anchor link
          await locator.click();
          // wait for the anchor to be in the viewport
          await expect(locAnchor).toBeInViewport();
        } else {
          // skip this test because the anchor is not visible
          test.skip();
        }
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
  // set cookies for GBB
  setPplsiRegionCookie = async (newCookieName: string, newCookieValue: string): Promise<void> => {
    // Retrieve all cookies
    const allCookies = await this.context.cookies();

    // Filter out the cookie you want to delete
    const cookiesToKeep = allCookies.filter((cookie) => cookie.name !== `${newCookieName}`);
    // Clear all cookies
    await this.context.clearCookies();

    // Set the remaining cookies back
    await this.context.addCookies(cookiesToKeep);
    const newCookie = [{ name: `${newCookieName}`, url: `${this.page.url()}`, value: `${newCookieValue}` }];
    await this.context.addCookies(newCookie);
    this.context.addCookies(cookiesToKeep);
    await this.page.reload();
  };
}
