import { expect } from '@playwright/test';        // import expect functionality from playwright
import UrlsUtils from '../../utils/urls.utils';   // import class of Urls
import { OktaPage } from '../okta/okta.page';  // import the OktaPage for extension

// ========================== Selectors ==================================
let ddlEnvironment: string = 'text=EnvironmentUATSTGPROD >> select';
let ddlChannel: string = 'text=ChannelChoose ChannelD2CNetworkSolutions >> select';
let ddlSubChannel: string = 'text=SubchannelChoose SubchannelLegalShieldIDShield >> select';
let ddlRegion: string = 'text=RegionChoose RegionAlabamaAlaskaArizonaArkansasCaliforniaColoradoConnecticutDela >> select';
let ddlMarketLocal: string = 'text=MarketLocaleChoose MarketLocaleen-CAen-USes-USfr-CA >> select';
let txtPrepaidMonth: string = '[placeholder="Pre-paid\ months"]';
let txtCouponCode: string = '[placeholder="Coupon\ code"]';
let btnShowReults: string = '';
// let txtEmailOrUsername: string = '';


export class PlanalyzerCsrCheckoutPage extends OktaPage {

// ========================== Process Methods ============================
createLegalPlanOklahomaOrderRedirectToCheckout = async (): Promise<void> => { 
    console.log(" - planalyzerCsrCheckoutPage.createLegalPlanOklahomaOrderRedirectToCheckout");
    await this.select

}

selectEnvironment = async (): Promise<void> => { 
    console.log(" - planalyzerCsrCheckoutPage.selectEnvironment");
    await this.selectFromDropDownMenu();

}


// ========================== Navigate Methods ===========================

// ========================== Click Methods ============================== 

clickShowResults = async (): Promise<void> => {
    console.log(" - planalyzerCsrCheckoutPage.clickShowResults");
    // Click on the Search Results Button
    await this.clickOnElement(btnShowReults);
    // Wait for document to load before subsequent steps
    await this.page.waitForLoadState('domcontentloaded');
  }
  clickGoToCheckout = async (): Promise<void> => {
    console.log(" - planalyzerCsrCheckoutPage.clickGoToCheckout");
    // Click on the Search Results Button
    await this.clickOnElement(btnGoToCheckout);
    // Wait for document to load before subsequent steps
    await this.page.waitForLoadState('domcontentloaded');
  }
// ========================== Assertion Methods ==========================

}
