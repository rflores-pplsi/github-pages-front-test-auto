import RegionsUtils from '../../utils/regions.utils';
import UrlsUtils from '../../utils/urls.utils';
import { CheckoutPersonalInfoPage } from '../../page-objects/checkout/checkout-personal-info.page';
import { LoginPage } from '../../page-objects/login/login.page';
import { OktaPage } from '../okta/okta.page';
import * as dotenv from 'dotenv';
dotenv.config();

// ========================== Selectors ==================================

let street: string;
let city: string;
let postalCode: string;
const url1UniversalTrucking = UrlsUtils.groupsUrls.url1UniversalTrucking;
const TAB_SIGNING_UP = 'a#signup';
const SELECT_STATE_DROPDOWN = '#select_value_label_15 span:nth-child(1)';
const AVAILABLE_PLANS_LBL = '//h3[contains(text(),"Sélectionnez votre plan juridique")]';
const RDBTN_LANGUAGE = '[aria-label="English"]';
const BTN_SELECT_UNIVERSAL_TRACKING = '//button[contains(text(),"SELECT")]';
const BTN_AJOUTER_AU_PANIER = '//button[contains(text(),"AJOUTER AU PANIER")]';
const TELL_US_ABOUT_YOURSELF_LBL = '//h1[contains(text(),"Tell us about yourself")]';
const TXT_PLANJURIDIQUE = '//div[@class="clearfix"]/h4/ng-bind-html[contains(text(),"Plan juridique")]';
const TXT_PAR_MOI = 'span.pull-right.summary__plan__price.ng-binding.ng-scope';

export class UniversalTruckingPage extends OktaPage {
  // ========================== Process Methods ============================
  selectStateUniversalTruckingPage = async (state: string): Promise<void> => {
    console.log(' - UniversalTruckingPage.selectStateUniversalTruckingPage');
    // Click to Select dropdown
    await this.page.waitForSelector(SELECT_STATE_DROPDOWN);
    await this.page.locator(SELECT_STATE_DROPDOWN).click({ force: true });
    // Click on state >> nth=0
    await this.page
      .locator('text=' + state)
      .first()
      .click();
  };
  selectlanguage = async (language: string): Promise<void> => {
    console.log(' - UniversalTruckingPage.selectlanguage');
    // Locate a language radio button
    await this.page.waitForSelector(RDBTN_LANGUAGE);
    // Pick a language
    await this.page.locator('[aria-label="' + language + '"]').click();
    console.log('language is selected');
  };
  loginBestMoneyMoversGroupPage = async (): Promise<void> => {
    console.log(' - BestMoneyMoversGroupPage.loginBestMoneyMoversGroupPage');
    console.log('Redirected to login page');
    const loginPage = new LoginPage(this.page);
    await loginPage.login('mattfeeqa@gmail.com', 'Password10!');
  };
  updateAddressTestingHarnesGroupsPage = async (state: string): Promise<void> => {
    console.log(' - BestMoneyMoversGroupPage.updateAddressTestingHarnesGroupsPage');
    const checkoutPersonalInfoPage = new CheckoutPersonalInfoPage(this.page);
    for (const stte of RegionsUtils.usStates.filter((ste) => ste.name == state)) {
      street = stte.validAddress.street;
      city = stte.validAddress.city;
      postalCode = stte.validAddress.postalCode;
    }
    await checkoutPersonalInfoPage.changeAddress(street, city, postalCode);
  };

  // ========================== Navigate Methods ===========================
  navigateTo1UniversalTruckingGroupPage = async (): Promise<void> => {
    console.log(' - UniversalTruckingPage.navigateTo1UniversalTruckingGroupPage');
    // navigate to URL
    await this.page.goto(url1UniversalTrucking);
  };

  // ========================== Click Methods ==============================

  clickTabSigningUp = async (): Promise<void> => {
    console.log(' - UniversalTruckingPage.clickTabSigningUp');
    // Click on Enroll Now button
    await this.page.click(TAB_SIGNING_UP);
  };
  clickBtnESelect = async (): Promise<void> => {
    console.log(' - UniversalTruckingPage.clickBtnESelect');
    // Click on SELECT button
    await this.page.locator(BTN_SELECT_UNIVERSAL_TRACKING).click();
  };
  clickBtnSelectPlan = async (): Promise<void> => {
    console.log(' - UniversalTruckingPage.clickBtnESelectPlan');
    // Click on Enroll Now button
    await this.page.waitForSelector(AVAILABLE_PLANS_LBL);
    await this.page.locator(AVAILABLE_PLANS_LBL).click();
    await this.page.waitForSelector(BTN_AJOUTER_AU_PANIER);
    const ajouter = await this.page.$$(BTN_AJOUTER_AU_PANIER);
    await ajouter[0].click();
    // await this.page.locator(btnCoordonnees).click();
    console.log('Plan is selected');
  };
  clickBtnCoordonnées = async (): Promise<void> => {
    console.log(' - UniversalTruckingPage.clickBtnESelectPlan');
    // await this.page.locator(btnCoordonnees).click();
    console.log('Plan is selected');
  };
  // ========================== Assertion Methods ==========================

  assertW3Url = async (): Promise<void> => {
    console.log(' - UniversalTruckingPage.assertTestingHarnesGroupsPricingPage');
    // Verify that pricing Page is displayed
    await this.page.waitForURL('https://w3.legalshield.com/gs/init?grp=1universaltrucking');
  };
  assertAvailablePlanTxt = async (): Promise<void> => {
    console.log(' - UniversalTruckingPage.assertTestingHarnesGroupsPricingPage');
    // Verify that Available Plans label is displayed
    await this.waitForElementToBeVisible(AVAILABLE_PLANS_LBL);
    console.log('State is selected and Available Plans Label is displayed');
  };
  assertTellUsAboutYourselfTxt = async (): Promise<void> => {
    console.log(' - UniversalTruckingPage.assertTellUsAboutYourselfTxt');
    console.log('logged in and redirected to personal info page');
    // Verify that Available Plans label is displayed
    await this.waitForElementToBeVisible(TELL_US_ABOUT_YOURSELF_LBL);
    this.page.locator(TELL_US_ABOUT_YOURSELF_LBL).isVisible;
    console.log('On Personal Info page');
  };
  assertSelectedPlanAndParMoiTxt = async (): Promise<void> => {
    console.log(' - UniversalTruckingPage.assertSelectedPlanTxt');
    await this.page.waitForLoadState();
    await this.page.waitForSelector(TXT_PLANJURIDIQUE);
    const plan = await this.page.$$(TXT_PLANJURIDIQUE);
    await plan[0].innerHTML();
    console.log(await plan[0].innerHTML());
    await this.assertElementHasText(TXT_PLANJURIDIQUE, 'Plan juridique');
    console.log(await this.page.locator(TXT_PAR_MOI).innerHTML());
    await this.assertElementHasText(TXT_PAR_MOI, '$24.95');
    // expect(await this.page.screenshot()).toMatchSnapshot('PlanJuridique.png');
  };
  assertParMoiTxt = async (): Promise<void> => {
    console.log(' - UniversalTruckingPage.assertParMoiTxt');
    await this.page.locator(TXT_PAR_MOI).isEnabled();
    // Verify that Selected Plans label is displayed
    await this.assertElementHasText(TXT_PAR_MOI, '$24.95');
    console.log('Plan juridique price is displayed ');
  };
}
