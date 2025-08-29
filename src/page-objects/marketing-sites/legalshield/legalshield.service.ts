import { Locator, Page, BrowserContext, expect, test, Response } from '@playwright/test';
import { ProductDetails, PageUrlAndTitleArray } from '../../../types/types';
import UrlsUtils from '../../../utils/urls.utils';
import { LegalshieldPage } from './legalshield.page';
import { LegalshieldCoverageAndPricingPage } from './legalshield-coverage-and-pricing.page';
import { SmallBusinessQualifyingComponent } from './legalshield-small-business-qualifying.component';
import { MarketingSitesCartComponent } from '../marketing-sites-cart-component';
import { HeaderComponent } from '../header-component';
import { HeroSectionComponent } from '../../global-components/hero-section.component';
import { GridSectionComponent } from '../../global-components/grid-section.component';
import { PricingSectionComponent } from '../../global-components/pricing-section.component';
import { NavListSectionComponent } from '../../global-components/nav_list-section.component';
import { FeaturesGridSectionComponent } from '../../global-components/features-grid-section.component';
import { CallToActionSectionComponent } from '../../global-components/call-to-action-section.component';
import { GbbPricingSectionComponent } from '../../global-components/gbb-pricing-section.component';
import { EmbeddedCartComponent } from './embedded-cart-component';
import { clickLocatorWithRetry, addQueryParamToUrl } from '../../../utils/helpers';
import { MarketingFooterComponent } from '../../marketing-sites/marketing-footer.component';

export class LegalshieldService {
  protected page: Page;
  protected context: BrowserContext;
  readonly headerComponent: HeaderComponent;
  readonly smallBusinessQualifyingComponent: SmallBusinessQualifyingComponent;
  readonly marketingSitesCartComponent: MarketingSitesCartComponent;
  readonly heroSectionComponent: HeroSectionComponent;
  readonly gridSectionComponent: GridSectionComponent;
  readonly pricingSectionComponent: PricingSectionComponent;
  readonly navListSectionComponent: NavListSectionComponent;
  readonly featuresGridSectionComponent: FeaturesGridSectionComponent;
  readonly callToActionSectionComponent: CallToActionSectionComponent;
  readonly gbbPricingSectionComponent: GbbPricingSectionComponent;
  readonly embeddedCartComponent: EmbeddedCartComponent;
  readonly marketingFooterComponent: MarketingFooterComponent;
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
  readonly locCartBox: Locator;
  readonly locPreFooterNavigation: Locator;
  private locPromotionDialogCloseButton: Locator;
  private locAcceptAllButton: Locator;
  private locKetchBanner: Locator;

  constructor(page: Page, context: BrowserContext) {
    this.page = page;
    this.context = context;
    this.headerComponent = new HeaderComponent(page);
    this.smallBusinessQualifyingComponent = new SmallBusinessQualifyingComponent(page);
    this.marketingSitesCartComponent = new MarketingSitesCartComponent(page);
    this.headerComponent = new HeaderComponent(page);
    this.heroSectionComponent = new HeroSectionComponent(context, page);
    this.gridSectionComponent = new GridSectionComponent(context, page);
    this.pricingSectionComponent = new PricingSectionComponent(context, page);
    this.navListSectionComponent = new NavListSectionComponent(context, page);
    this.featuresGridSectionComponent = new FeaturesGridSectionComponent(context, page);
    this.callToActionSectionComponent = new CallToActionSectionComponent(context, page);
    this.gbbPricingSectionComponent = new GbbPricingSectionComponent(context, page);
    this.embeddedCartComponent = new EmbeddedCartComponent(page);
    this.marketingFooterComponent = new MarketingFooterComponent(context, page);
    this.legalshieldPage = new LegalshieldPage(context, page);
    this.legalshieldCoverageAndPricingPage = new LegalshieldCoverageAndPricingPage(page);
    this.firstGetStartedButton = this.page.locator(`//div[contains(@class, 'pricing') and contains(@class, 'plan')]//a`);
    this.locLinksThatNavigateToNewPage = this.page.locator(
      'body .lsux-link[href]:not([target="_blank"]):not([href*="javascript:void(0)"]):not([href*="#"]), body .lsux-button--primary[href]:not([target="_blank"]):not([href*="javascript:void(0)"]):not([href*="#"]),body .lsux-button--secondary[href]:not([target="_blank"]):not([href*="javascript:void(0)"]):not([href*="#"])'
    );
    this.locLinksThatNavigateToNewTab = this.page.locator(
      'body section:not([id="pre-footer"]) .lsux-link[href]:is([target="_blank"]), body section:not([id="pre-footer"]) .lsux-button--primary[href]:is([target="_blank"]), body section:not([id="pre-footer"]) .lsux-download-app a[href]:is([target="_blank"]), body section:not([id="pre-footer"]) .lsux-button--tertiary a[href]:is([target="_blank"])'
    );
    // this.locLinksThatAddToCart = this.page.locator('//div[contains(@class, "pricing-new")]//a[contains(., "Add to cart")], '

    // );
    this.locLinksThatAddToCart = this.locLinksThatAddToCart = this.page.getByText('Add to cart').filter({ has: this.page.locator(':visible') });
    this.locLinksThatTriggerPopUps = this.page.locator('body .lsux-link[href][id*="open-modal"], body .lsux-button--primary[href][id*="open-modal"]');
    this.locDisplayedPopUpContainer = this.page.locator('[id*="modal"][style*="display: block"]');
    this.locPopUpCloseButton = this.page.locator('[id*="modal"][style*="display: block"] button[class*="close-modal-button"]');
    this.locAnchorLinks = this.page.locator('body .lsux-link[href*="#"], body .lsux-button--primary[href*="#"]');
    this.locEmailCaptureSection = this.page.locator('body #section-email_capture');
    this.locCartBox = this.page.locator('.cart-box');
    this.locPromotionDialogCloseButton = this.page.locator('//div[contains(@class,"ub-emb-iframe-wrapper ub-emb-visible")]//button');
    this.locAcceptAllButton = this.page.locator('#ketch-banner-button-primary');
    this.locPreFooterNavigation = this.page.locator('body .footer_top-wrapper a');
    this.locKetchBanner = this.page.locator('#ketch-banner');
  }
  
  navigateToUrl = async (url: string): Promise<void> => {
    await this.page.goto(url);
    await this.page.waitForLoadState('load');
    if (process.env.USE_PROD == 'true') {
      await this.closePromotionDialog();
    }
  };

  assertPDFViewerIsVisible = async (): Promise<void> => {
    await this.page.waitForSelector('.pdf-viewer', { state: 'visible' });
    expect.soft(this.page.locator('.pdf-viewer')).toBeVisible();
  };

  closePromotionDialog = async (): Promise<void> => {
    await this.locPromotionDialogCloseButton.click();
  };

  clickAcceptAllButton = async (): Promise<void> => {
    await this.locAcceptAllButton.waitFor({ state: 'visible' });
    await this.locAcceptAllButton.click();
  };

  blockKetchConsentBannerFromDisplaying = async (): Promise<void> => {
    if ( await this.locKetchBanner.isVisible().catch(() => false) ) {
      // dismiss banner with clicking of Continue button
      await this.locAcceptAllButton.click();
    }
    // Inject script before page loads to immediately hide banner when it appears
    await this.page.addInitScript(() => {
      // Function to hide the banner
      const hideBanner = () => {
        const banner = document.querySelector('#ketch-banner, #ketch-consent-banner') as HTMLElement | null;
        if (banner) {
          banner.style.display = 'none';
          banner.style.visibility = 'hidden';
          banner.style.opacity = '0';
          banner.style.pointerEvents = 'none';
        }
      };

      // Hide immediately if already present
      hideBanner();
    });
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
  };
  /**
   *
   *
   * @param {Array<ProductDetails>} productDetails
   * @memberof LegalshieldService
   */
  addProductsFromProductDetails = async (productDetails: Array<ProductDetails>, region: string): Promise<void> => {
    let counter = productDetails.length;
    for (const product of productDetails) {
      switch (product.marketingName) {
        case 'Basic':
        case 'Advanced':
        case 'Premium':
        case 'Home Business Supplement':
        case 'Home Business Add-On':
        case 'Trial Defense Supplement':
        case 'Gun Owners Supplement':
        case 'Ride Share and Delivery Supplement':
        // await this.addExperienceQueryParam(experience);
        await this.setCookie('pplsi-region', region);
          if (product.term == 'Annual') {
            await this.legalshieldCoverageAndPricingPage.clickAnnuallyToggle();
          } else {
            await this.legalshieldCoverageAndPricingPage.clickMonthlyToggle();
          }
          await this.addPlanUsingShortCode(product.shortCode);
          break;
        case 'Commercial Drivers Legal Plan':
          await this.addCommercialDriversLegalPlan(product.shortCode);
          break;
        case 'Essentials Plan':
        case 'Plus Plan':
        case 'Pro Plan':
          await this.navigateToUrl(`${UrlsUtils.marketingSitesUrls.legalShieldUSUrl}/business-plan/coverage-pricing`);
          // await this.addExperienceQueryParam(experience);
          await this.setCookie('pplsi-region', region);
          await this.addSmallBusinessPlan(product.shortCode);
          break;
        default:
          break;
      }
      if (counter == 1) {
        break;
      }
      counter--;
    }
  };

  addLegalPlansOrSupplements = async (productShortCode: string, term: string): Promise<void> => {
    await this.page.goto(`${UrlsUtils.marketingSitesUrls.legalShieldUSUrl}/business-plan/coverage-pricing`);
    await this.addPlanUsingShortCode(productShortCode);
   };

  addSmallBusinessPlan = async (productShortCode: string): Promise<void> => {
    const smallBusinessGetStartedLocator = this.page.locator(`//div[contains(@class,"pricing-3_component-smb")]//a[@data-product-shortcode="${productShortCode}"]`);
    const cartProductShortCodeLocator = this.page.locator(`//div[@id="cart-items"]//a[@data-product-shortcode="${productShortCode}"]`);
    await smallBusinessGetStartedLocator.click();
    await clickLocatorWithRetry(this.smallBusinessQualifyingComponent.locAddToCartButton,cartProductShortCodeLocator);
    await this.embeddedCartComponent.clickContinueShoppingButton();
   };

  addCommercialDriversLegalPlan = async (productShortCode: string): Promise<void> => {
    const page = await this.context.newPage();
    await page.goto(`${UrlsUtils.marketingSitesUrls.legalShieldUSUrl}/legal-protection-truck-drivers-and-other-commercial-drivers/`);
    await page.waitForLoadState('load');
    await this.addPlanUsingShortCode(productShortCode);
  };

  addPlanUsingShortCode = async (productShortCode: string): Promise<void> => {
    await expect(async () => {
      const addToCartLocator = this.page.locator(`//a[@data-product-shortcode="${productShortCode}" and not(ancestor::*[contains(@class, "pricing-legacy")])]`).nth(0);   
      const cartProductShortCodeLocator = this.page.locator(`//div[@id="container"]//span[@data-product-shortcode="${productShortCode}"]`);
      await clickLocatorWithRetry(addToCartLocator,cartProductShortCodeLocator);
      await this.configurePlan(productShortCode);
      await this.embeddedCartComponent.clickContinueShoppingButton();
    }).toPass({ intervals: [0.3] });
  };

  configurePlan = async (productShortCode: string): Promise<void> => {
    switch (productShortCode) {
      case 'ESS':
      case 'PLUS':
      case 'PRO':
        await this.smallBusinessQualifyingComponent.clickAddToCartButton();
      default:
          break;
    }
  };

  addExperienceQueryParam = async (experience: string): Promise<void> => {
    const urlWithQueryParam = await addQueryParamToUrl(this.page.url(), 'exp', experience);
    await this.page.goto(urlWithQueryParam);
    await this.page.waitForLoadState('load');
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
        expect.soft([expectedStatusCode, 301]).toContain(response.status());
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
    console.log(locator);
    console.log(`Found ${locators.length} locators`);
    await this.page.pause();
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
          await expect.soft(this.headerComponent.locShoppingCartItemAddedNotification).toBeVisible();
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
          await expect.soft(this.headerComponent.locShoppingCartItemAddedNotification).toBeVisible();
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
  setCookie = async (newCookieName: string, newCookieValue: string): Promise<void> => {
    // Retrieve all cookies
    const allCookies = await this.context.cookies();
    // Filter out the cookie you want to delete
    const cookiesToKeep = allCookies.filter((cookie) => cookie.name !== `${newCookieName}`);
    // Clear all 
    await this.context.clearCookies();
    // Set the remaining cookies back
    await this.context.addCookies(cookiesToKeep);
    const newCookie = [{ name: `${newCookieName}`, url: `${this.page.url()}`, value: `${newCookieValue}` }];
    await this.context.addCookies(newCookie);
    await this.context.addCookies(cookiesToKeep);
    await this.page.reload();
    await this.page.waitForFunction(
      ([cookieName, expectedValue]) => {
      return document.cookie.split('; ').some(cookie => cookie.startsWith(`${cookieName}=${expectedValue}`));
      },[newCookieName, newCookieValue]
    );
  };
};
