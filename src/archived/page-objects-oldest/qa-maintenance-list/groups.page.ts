import { expect } from '@playwright/test';
import * as dotenv from 'dotenv';
import RegionsUtils from '../../../utils/regions.utils';
import UrlsUtils from '../../../utils/urls.utils';
import { QaMaintenanceListLocatorsPage } from './qa-maintenance-list-locators.page';
dotenv.config();

let street: string;
let city: string;
let postalCode: string;
export class GroupsPage extends QaMaintenanceListLocatorsPage {
  // ========================== Process Methods ============================
  fillAgentID = async (id: string): Promise<void> => {
    await this.groupEnterAgentIdInput.fill(id);
  };

  selectLanguageAndMarket = async (language: string): Promise<void> => {
    await this.groupSelectLanguageAndRegionDropdown.click();
    const dropdownOption = this.page.locator(
      `//div[contains(@class,"md-active")]//md-option[contains(@id,"select_option") and contains(.,"${language}")]`
    );
    await dropdownOption.click();
  };
  selectPrimericaStateOrProvince = async (state: string): Promise<void> => {
    await this.primericaGroupBtnSelectState.click();
    await this.page.locator(`//div[@id="btn-append-to-dropdownState"]//a[contains(.,"${state}")]`).click();
  };
  selectBestMoneyMoversStateOrProvince = async (state: string): Promise<void> => {
    // Locate state or province selector
    await this.bestMoneyMoversLocBtnSlctState.waitFor();
    await this.bestMoneyMoversLocBtnSlctState.click();
    // Pick a state or province
    await this.page.locator(`//div[@class="lsux-link-content lsux-link-content--menu py-3 px-4 gms-state"] >> nth= ${state}`).click();
  };

  selectStateOrProvince = async (stateOrProvince: string): Promise<void> => {
    console.log(' - shieldBenefitsLegalPricingPage.selectState');
    await this.shieldBenefitsSelectRegionButton.click();
    await this.clickOnElement(`//div[contains(@class,"lsux-link-content--menu") and contains (.,"${stateOrProvince}")]`);
  };

  async changeAddress(language: string, state: string): Promise<void> {
    await this.page.waitForLoadState();
    const Lan = language.toLowerCase();
    if (Lan == 'englishus') {
      for (const stte of RegionsUtils.usStates.filter((ste) => ste.name == state)) {
        street = stte.validAddress.street;
        city = stte.validAddress.city;
        postalCode = stte.validAddress.postalCode;
        // Fill Address
        await this.personalInfoLocTxtStreetAddress.fill(street);
        // Fill City
        await this.personalInfoLocTxtCityName.fill(city);
        await this.page.keyboard.press('Tab');
        await this.page.keyboard.press('Tab');
        // Fill Zip Code
        await this.personalInfoLocTxtPostalCode.fill('');
        await this.personalInfoLocTxtPostalCode.type(postalCode);
        await this.page.keyboard.press('Tab');
      }
    } else if (Lan == 'englishca') {
      for (const stte of RegionsUtils.caProvinces.filter((ste) => ste.name == state)) {
        street = stte.validAddress.street;
        city = stte.validAddress.city;
        postalCode = stte.validAddress.postalCode;
        // Fill Address
        await this.personalInfoLocTxtStreetAddress.fill(street);
        // Fill City
        await this.personalInfoLocTxtCityName.fill(city);
        await this.page.keyboard.press('Tab');
        await this.page.keyboard.press('Tab');
        // Fill Zip Code
        await this.personalInfoLocTxtPostalCode.type(postalCode);
        await this.page.keyboard.press('Tab');
      }
    } else if (Lan == 'frenchca') {
      for (const stte of RegionsUtils.caFrenchProvinces.filter((ste) => ste.name == state)) {
        street = stte.validAddress.street;
        city = stte.validAddress.city;
        postalCode = stte.validAddress.postalCode;
        // Fill Address
        await this.personalInfoLocTxtStreetAddress.fill(street);
        // Fill City
        await this.personalInfoLocTxtCityName.fill(city);
        await this.page.keyboard.press('Tab');
        // Fill Zip Code
        await this.personalInfoLocTxtPostalCode.type(postalCode);
        await this.page.keyboard.press('Tab');
      }
    } else if (Lan == 'spanishus') {
      for (const stte of RegionsUtils.usSpanishStates.filter((ste) => ste.name == state)) {
        street = stte.validAddress.street;
        city = stte.validAddress.city;
        postalCode = stte.validAddress.postalCode;
        // Fill Address
        await this.personalInfoLocTxtStreetAddress.fill(street);
        // Fill City
        await this.personalInfoLocTxtCityName.fill(city);
        await this.page.keyboard.press('Tab');
        // Fill Zip Code
        await this.personalInfoLocTxtPostalCode.type(postalCode);
        await this.page.keyboard.press('Tab');
      }
    }
  }
  selectFrequencyBestMoneyMoversGroupPage = async (frequency: string): Promise<void> => {
    console.log(' - BestMoneyMoversGroupPage.selectFrequencyBestMoneyMoversGroupPage');
    // Click to Frequency dropdown
    await this.bestMoneyMoversLocSlctFrequencyDropdown.waitFor();
    await this.bestMoneyMoversLocSlctFrequencyDropdown.click();
    // Click on Monthly >
    await this.page
      .locator('text=' + frequency)
      .nth(1)
      .click();
    console.log('Frequency is selected');
  };
  clickBtnESelectPlan = async (plan: string): Promise<void> => {
    console.log(' - BestMoneyMoversGroupPage.clickBtnESelectPlan');
    // Click on Enroll Now button
    await Promise.all([
      await this.bestMoneyMoversLocAvailablePlanLbl.waitFor(),
      await this.page.locator('text=' + plan + '/ MonthlyEnroll Now>> button').click(),
    ]);
    console.log('Plan is selected');
  };

  // ========================== Navigate Methods ===========================
  navigateToGroupsPage = async (url: string): Promise<void> => {
    const Lan = url.toLowerCase();
    if (Lan == 'primerica') {
      await this.page.goto(UrlsUtils.groupsUrls.urlPrimericaGroup);
    }
    if (Lan == 'bestmoneymovers') {
      await this.page.goto(UrlsUtils.groupsUrls.urlBestMoneyMovers);
    }
  };
  // ========================== Click Methods ==============================

  clickSubmitBtn = async (): Promise<void> => {
    console.log(' - PrimericaGroupPage.clickSubmitButton');
    // Click Submit button
    await this.primericaGroupBtnSubmit.click();
  };
  clickGetStartedBtn = async (): Promise<void> => {
    console.log(' - PrimericaGroupPage.clickGetStartedBtn');
    // Click Get Started button
    await this.primericaGroupBtnGetStart.click();
  };
  clickSelectYourPlanLnk = async (): Promise<void> => {
    console.log(' - PrimericaGroupPage.clickSelectYourPlanLnk');
    // Click Select your plan Link
    await this.primericaGroupLnkSelectYourPlan.click();
  };
  clickAddToCartBtn = async (): Promise<void> => {
    console.log(' - PrimericaGroupPage.clickAddToCartBtn');
    // Click Add to cart button
    await this.primericaGroupBtnAddToCart.waitFor();
    const ajouter = await this.page.$$('');
    await ajouter[0].click();
  };
  clickContactInfoBtn = async (): Promise<void> => {
    console.log(' - PrimericaGroupPage.clickGetStartedBtn');
    // Click Get Started button
    await this.primericaGroupBtnContactInfo.click();
  };
  // ========================== Assertion Methods ==========================

  assertRepresentativeLbl = async (rep: string): Promise<void> => {
    // Verify that the Representative: JANICE S BRAY is displayed
    await this.page.waitForLoadState();
    await this.primericaGroupLblRepresentative.isVisible();
    const par = await this.page.$$('');
    const repLbl = await par[0].innerText();
    expect(repLbl).toEqual(rep);
    console.log('${repLbl} page is displayed ');
  };
  assertCheckoutTitle = async (): Promise<void> => {
    // Verify that  it takes user to checkout
    expect(await this.page.title()).toEqual('Checkout');
    console.log('Landed on checkout page');
  };
  assertTestingHarnesGroupsUrlPage = async (tab: string): Promise<void> => {
    // Verify that pricing Page is displayed
    expect(this.page.url()).toEqual(`${UrlsUtils.shieldBenefits.home.url}/bestmoneymoves/${tab}`);
  };
  assertAvailablePlanTxt = async (): Promise<void> => {
    console.log(' - BestMoneyMoversGroupPage.assertTestingHarnesGroupsPricingPage');
    // Verify that Available Plans label is displayed
    await this.bestMoneyMoversLocAvailablePlanLbl.waitFor();
    console.log('State is selected and Available Plans Label is displayed');
  };
  assertTellUsAboutYourselfTxt = async (): Promise<void> => {
    console.log(' - BestMoneyMoversGroupPage.assertTellUsAboutYourselfTxt');
    console.log('logged in and redirected to personal info page');
    // Verify that Available Plans label is displayed
    await this.bestMoneyMoversLocLblTellUsAboutYourself.waitFor();
    await expect(this.bestMoneyMoversLocLblTellUsAboutYourself).toBeVisible();
    console.log('On Personal Info page');
  };
}
