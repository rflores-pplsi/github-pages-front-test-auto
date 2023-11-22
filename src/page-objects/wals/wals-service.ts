import { Page } from '@playwright/test';
import { WalsAffiliatedPage } from './wals-affiliated.page';
import { WalsCartComponent } from './wals-cart.component';
import { WalsGeolocateMenuComponent } from './wals-geolocate-menu.component';
import { WeAreLegalShieldPage } from './wals-we-are-legalshield.page';
import { PlanDetails } from '../../types/types';
import { WalsHeaderComponent } from './wals-header-component';

export class WalsService {
  protected page: Page;
  readonly walsAffiliatedPage: WalsAffiliatedPage;
  readonly walsCartComponent: WalsCartComponent;
  readonly walsGeolocateMenuComponent: WalsGeolocateMenuComponent;
  readonly weAreLegalShieldPage: WeAreLegalShieldPage;
  readonly walsHeaderComponent: WalsHeaderComponent;

  constructor(page: Page) {
    this.page = page;
    this.walsAffiliatedPage = new WalsAffiliatedPage(page);
    this.walsCartComponent = new WalsCartComponent(page);
    this.walsGeolocateMenuComponent = new WalsGeolocateMenuComponent(page);
    this.weAreLegalShieldPage = new WeAreLegalShieldPage(page);
    this.walsHeaderComponent = new WalsHeaderComponent(page);
  }

  addPlansFromProductDetails = async (planDetails: Array<PlanDetails>): Promise<void> => {
    let counter = planDetails.length;
    for (const plan of planDetails) {
      switch (plan.name) {
        case 'Legal Plan':
          await this.walsAffiliatedPage.clickOnGetAPlanButton('Legal Plan');
          for (const supplement of plan.supplements) {
            const supplementLocator = this.page.locator(
              `//div[contains(@class,"content_mc")]//div[contains(@class,"main-content-modal") and contains(.,"${supplement.name}")]`
            );
            await supplementLocator.click();
          }
          break;
        // case 'Commercial Drivers Legal Plan':
        //   await this.addCommercialDriversLegalPlan();
        //   break;
        // case 'Small Business Legal Essentials':
        // case 'Small Business Legal Plus':
        // case 'Small Business Legal Pro':
        //   await this.addSmallBusinessPlan(product.name);
        //   break;
        // case 'Home Business Supplement':
        //   await this.addHomeBusinessSupplement();
        //   break;
        // case 'Trial Defense Supplement':
        //   await this.addTrialDefenseSupplement();
        //   break;
        // case 'Gun Owners Supplement':
        //   await this.addGunOwnersSupplement();
        //   break;
        // case 'Ride Share and Delivery Supplement':
        //   await this.addRideShareAndDeliverySupplement();
        //   break;
        default:
          break;
      }
      await this.walsCartComponent.locContinueButton.click();
      if (counter == 1) {
        await this.walsCartComponent.locCheckoutButton.click();
      } else {
        counter--;
        await this.walsCartComponent.locKeepShoppingLink.click();
      }
    }
  };

  // addSmallBusinessPlan = async (productName: string): Promise<void> => {
  //   await this.page.goto(`${UrlsUtils.marketingSitesUrls.legalShieldUSUrl}/business-plan/plan-summary/#chart`);
  //   await this.page.waitForLoadState('domcontentloaded');
  //   productName = productName.replace(' Legal', '');
  //   const getStartedButtonLocator = this.page.locator(
  //     `//div[contains(@class,"lsc-dynamic-single-plan  et_pb_css_mix_blend_mode_passthrough") and contains(.,"${productName}")]//a[@role="button"]`
  //   );
  //   await getStartedButtonLocator.click();
  //   await this.smallBusinessQualifyingComponent.completeQualifyingQuestionnaireWithNos();
  // };

  // /**
  //  *
  //  *
  //  * @memberof LegalshieldService
  //  */
  // addCommercialDriversLegalPlan = async (): Promise<void> => {
  //   await this.page.goto(`${UrlsUtils.marketingSitesUrls.legalShieldUSUrl}/legal-protection-truck-drivers-and-other-commercial-drivers/`);
  //   await this.firstGetStartedButton.click();
  // };
  // /**
  //  *
  //  *
  //  * @memberof LegalshieldService
  //  */
  // addHomeBusinessSupplement = async (): Promise<void> => {
  //   await this.page.goto(`${UrlsUtils.marketingSitesUrls.legalShieldUSUrl}/legal-protection-home-business/`);
  //   await this.firstGetStartedButton.click();
  // };
  // /**
  //  *
  //  *
  //  * @memberof LegalshieldService
  //  */
  // addTrialDefenseSupplement = async (): Promise<void> => {
  //   await this.page.goto(`${UrlsUtils.marketingSitesUrls.legalShieldUSUrl}/extended-trial-and-lawsuit-defense-protection/`);
  //   await this.firstGetStartedButton.click();
  // };
  // /**
  //  *
  //  *
  //  * @memberof LegalshieldService
  //  */
  // addGunOwnersSupplement = async (): Promise<void> => {
  //   await this.page.goto(`${UrlsUtils.marketingSitesUrls.legalShieldUSUrl}/gun-supplement/`);
  //   await this.firstGetStartedButton.click();
  // };
  // /**
  //  *
  //  *
  //  * @memberof LegalshieldService
  //  */
  // addRideShareAndDeliverySupplement = async (): Promise<void> => {
  //   await this.page.goto(`${UrlsUtils.marketingSitesUrls.legalShieldUSUrl}/legal-help-ride-share-and-delivery-drivers/`);
  //   await this.firstGetStartedButton.click();
  // };
}
