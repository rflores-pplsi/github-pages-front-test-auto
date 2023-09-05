import { BasePage } from '../base.page';

// ========================== Selectors ==========================
// Header
const HEADER_LOGO = '.fixedheader img.largemediumscreen';
const NAME_AO = '#lsdsTitle';
const HELP_ICON = '#helpButton > img';
const CUSTOMER_SUPPORT = '#helpContentCustom > a:nth-child(1) > div';
const SUPPORT_PHONE = 'a.lsux-link-content.lsux-link-content';
const DOWN_CARET = '#downCaret';
const MY_ACCOUNT = '#myDropdown > a:nth-child(1) > div';
const SIGN_OUT = '#myDropdown > a:nth-child(3) > div';

// Left nav menu
const MY_TEAM = '.lsux-navigation :nth-child(1) > div.lsux-link-content';
const REPORTS = '.lsux-navigation :nth-child(2) > div';
const ALL_REPORTS = '.lsux-navigation :nth-child(3) > div';
const COMMISSIONS = '.lsux-navigation :nth-child(4) > div';
const TAXES = '.lsux-navigation :nth-child(5) > div';
const RESOURCES = '.lsux-navigation :nth-child(6) > div';
const MESSAGES = '.lsux-navigation :nth-child(7) > div';
const COMPENSATION = '.lsux-navigation :nth-child(8) > div';
const LS_ADVANTAGE = '.lsux-navigation :nth-child(7) > div';
const ASSOCIATE_PERKS = '.lsux-navigation :nth-child(8) > div';

// Footer
const TERMS_OF_SERVICE = "a[href*='terms-service']";
const PRIVACY_POLICY = '.lsux-footer a:nth-child(2)';
const DISCLAIMER = "a[href*='disclaimer']";
const LOGO = '.lsux-footer > span > span';

/**
 * @export
 * @class NavMenuPage
 * @extends {BasePage}
 */
export class NavMenuPage extends BasePage {
  // ========================== Process Methods ==========================

  // ========================== Navigate Methods ==========================

  // ========================== Click Methods ==========================

  // ========================== Assertion Methods ==========================

  // Header
  assertHeaderLogoIsDisplayed = async (): Promise<void> => {
    console.log(' - navMenuPage.assertHeaderLogoIsDisplayed');
    await this.assertElementIsVisible(HEADER_LOGO);
  };

  assertNameAOIsDisplayed = async (): Promise<void> => {
    console.log(' - navMenuPage.assertNameAOIsDisplayed');
    await this.assertElementIsVisible(NAME_AO);
  };

  assertHelpIconIsDisplayed = async (): Promise<void> => {
    console.log(' - navMenuPage.assertHelpIconIsDisplayed');
    await this.assertElementIsVisible(HELP_ICON);
  };

  assertCustomerSupportIsDisplayed = async (): Promise<void> => {
    console.log(' - navMenuPage.assertCustomerSupportIsDisplayed');
    await this.clickOnElement(HELP_ICON);
    await this.assertElementIsVisible(CUSTOMER_SUPPORT);
    await this.assertElementIsVisible(SUPPORT_PHONE);
  };

  assertSupportPhone = async (): Promise<void> => {
    console.log(' - navMenuPage.assertSupportPhone');
    await this.assertElementHasText(SUPPORT_PHONE, '1-580-436-7424');
  };

  assertDownCaretIsDisplayed = async (): Promise<void> => {
    console.log(' - navMenuPage.assertDownCaretIsDisplayed');
    await this.assertElementIsVisible(DOWN_CARET);
  };

  assertMyAccountIsDisplayed = async (): Promise<void> => {
    console.log(' - navMenuPage.assertMyAccountIsDisplayed');
    await this.clickOnElement(DOWN_CARET);
    await this.assertElementIsVisible(MY_ACCOUNT);
  };

  assertSignOutIsDisplayed = async (): Promise<void> => {
    console.log(' - navMenuPage.assertSignOutIsDisplayed');
    await this.clickOnElement(DOWN_CARET);
    await this.assertElementIsVisible(SIGN_OUT);
  };

  // Left Navigation Menu
  assertMyTeamIsDisplayed = async (): Promise<void> => {
    console.log(' - navMenuPage.assertMyTeamIsDisplayed');
    await this.page.waitForSelector(MY_TEAM);
    await this.assertElementIsVisible(MY_TEAM);
  };

  assertReportsIsDisplayed = async (): Promise<void> => {
    console.log(' - navMenuPage.assertReportsIsDisplayed');
    await this.page.waitForSelector(REPORTS);
    await this.assertElementIsVisible(REPORTS);
  };

  assertAllReportsIsDisplayed = async (): Promise<void> => {
    console.log(' - navMenuPage.assertAllReportsIsDisplayed');
    await this.page.waitForSelector(ALL_REPORTS);
    await this.assertElementIsVisible(ALL_REPORTS);
  };

  assertCommissionsIsDisplayed = async (): Promise<void> => {
    console.log(' - navMenuPage.assertCommissionsIsDisplayed');
    await this.page.waitForSelector(COMMISSIONS);
    await this.assertElementIsVisible(COMMISSIONS);
  };

  assertTaxesIsDisplayed = async (): Promise<void> => {
    console.log(' - navMenuPage.assertTaxesIsDisplayed');
    await this.page.waitForSelector(TAXES);
    await this.assertElementIsVisible(TAXES);
  };

  assertResourcesIsDisplayed = async (): Promise<void> => {
    console.log(' - navMenuPage.assertResourcesIsDisplayed');
    await this.page.waitForSelector(RESOURCES);
    await this.assertElementIsVisible(RESOURCES);
  };

  assertMessagesIsDisplayed = async (): Promise<void> => {
    console.log(' - navMenuPage.assertMessagesIsDisplayed');
    await this.page.waitForSelector(MESSAGES);
    await this.assertElementIsVisible(MESSAGES);
  };

  assertCompensationIsDisplayed = async (): Promise<void> => {
    console.log(' - navMenuPage.assertCompensationIsDisplayed');
    await this.page.waitForSelector(COMPENSATION);
    await this.assertElementIsVisible(COMPENSATION);
  };

  assertLSAdvantageIsDisplayed = async (): Promise<void> => {
    console.log(' - navMenuPage.assertLSAdvantageIsDisplayed');
    await this.page.waitForSelector(LS_ADVANTAGE);
    await this.assertElementIsVisible(LS_ADVANTAGE);
  };

  assertAssociatePerksIsDisplayed = async (): Promise<void> => {
    console.log(' - navMenuPage.assertAssociatePerksIsDisplayed');
    await this.page.waitForSelector(ASSOCIATE_PERKS);
    await this.assertElementIsVisible(ASSOCIATE_PERKS);
  };

  // Footer
  assertTermsOfServiceIsDisplayed = async (): Promise<void> => {
    console.log(' - navMenuPage.assertTermsOfServiceIsDisplayed');
    await this.page.waitForSelector(TERMS_OF_SERVICE);
    await this.assertElementIsVisible(TERMS_OF_SERVICE);
  };

  assertPrivacyPolicyIsDisplayed = async (): Promise<void> => {
    console.log(' - navMenuPage.assertPrivacyPolicyIsDisplayed');
    await this.assertElementIsVisible(PRIVACY_POLICY);
  };

  assertDisclaimerIsDisplayed = async (): Promise<void> => {
    console.log(' - navMenuPage.assertDisclaimerIsDisplayed');
    await this.assertElementIsVisible(DISCLAIMER);
  };

  assertLogoIsDisplayed = async (): Promise<void> => {
    console.log(' - navMenuPage.assertLogoIsDisplayed');
    await this.assertElementIsVisible(LOGO);
  };
}
