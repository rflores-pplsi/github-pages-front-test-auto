import { expect } from '@playwright/test';        // import expect functionality from playwright
import UrlsUtils from '../../utils/urls.utils';   // import class of Urls
import { OktaPage } from '../okta/okta.page';  // import the OktaPage for extension
import EnvironmentUtil from '../../utils/env.utils';

// ========================== Selectors ==================================
let ddlEnvironment: string = 'text=EnvironmentUATSTGPROD >> select';
let ddlChannel: string = 'text=ChannelChoose ChannelD2CNetworkSolutions >> select';
let ddlSubChannel: string = 'text=SubchannelChoose SubchannelLegalShieldIDShield >> select';
let ddlRegion: string = 'text=RegionChoose RegionAlabamaAlaskaArizonaArkansasCaliforniaColoradoConnecticutDela >> select';
let ddlMarketLocal: string = 'text=MarketLocaleChoose MarketLocaleen-CAen-USes-USfr-CA >> select';
let txtPrepaidMonth: string = '[placeholder="Pre-paid\ months"]';
let txtCouponCode: string = '[placeholder="Coupon\ code"]';
let btnShowResults: string = 'button:has-text("Show Results")';
let chkLegalPlan: string = 'id=LPUS21';
// let txtEmailOrUsername: string = '';


export class PlanalyzerCsrCheckoutPage extends OktaPage {

// ========================== Process Methods ============================
createOrderRedirectToCheckout = async (channel : string, subChannel: string, region : string, marketLocale : string, prepaidMonths : string = "", couponCode : string = "", plans : Array<string> ): Promise<void> => { 
    console.log(" - planalyzerCsrCheckoutPage.createLegalPlanOklahomaOrderRedirectToCheckout");
    await this.selectEnvironment();
    await this.selectChannel(channel);
    await this.selectSubChannel(subChannel);
    await this.selectRegion(region);
    await this.selectMarketLocale(marketLocale);
    await this.enterPrepaidMonths(prepaidMonths);
    await this.enterCouponCode(couponCode);
    await this.clickShowResults();
    await this.clickPlanCheckbox(plans);
}

selectEnvironment = async (): Promise<void> => { 
    console.log(" - planalyzerCsrCheckoutPage.selectEnvironment");
    const environmentDropDownString = EnvironmentUtil.getDropDownEnvironmentOptions();
    await this.selectFromDropDownMenu(ddlEnvironment, environmentDropDownString);
}

selectChannel = async (channel: string): Promise<void> => { 
    console.log(" - planalyzerCsrCheckoutPage.selectChannel");
    await this.selectFromDropDownMenu(ddlChannel, channel );
}

selectSubChannel = async (subChannel: string): Promise<void> => { 
    console.log(" - planalyzerCsrCheckoutPage.selectSubChannel");
    await this.selectFromDropDownMenu(ddlSubChannel, subChannel);
}

selectRegion = async (region: string): Promise<void> => { 
    console.log(" - planalyzerCsrCheckoutPage.selectRegion");
    await this.selectFromDropDownMenu(ddlRegion, region);
}

selectMarketLocale = async (marketLocale: string): Promise<void> => { 
    console.log(" - planalyzerCsrCheckoutPage.selectMarketLocale");
    await this.selectFromDropDownMenu(ddlMarketLocal, marketLocale);
}

enterPrepaidMonths = async (prepaidMonths: string): Promise<void> => { 
    console.log(" - planalyzerCsrCheckoutPage.enterPrepaidMonths");
    await this.fillTextBox(txtPrepaidMonth, prepaidMonths);
}

enterCouponCode = async (couponCode: string): Promise<void> => { 
    console.log(" - planalyzerCsrCheckoutPage.enterCouponCode");
    await this.fillTextBox(txtCouponCode, couponCode);
}




// ========================== Navigate Methods ===========================

// ========================== Click Methods ============================== 

clickPlanCheckbox = async (plans: Array<string>): Promise<void> => { 
    console.log(" - planalyzerCsrCheckoutPage.clickPlanCheckbox");
    const longName = plans[0];
    let ele: string = "";
    switch (longName) {
        case 'Legal Plan':
          ele = chkLegalPlan;
          break;
        case 'uat':
          ele = 'UAT';
          break;
        case 'prod':
          ele = 'PROD';
          break;
      }
  
    await this.clickOnElement(ele);
}

clickShowResults = async (): Promise<void> => {
    console.log(" - planalyzerCsrCheckoutPage.clickShowResults");
    // Click on the Search Results Button
    await this.clickOnElement(btnShowResults);
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
