import urlsUtils from '../../utils/urls.utils';
import { OktaPage } from '../okta/okta.page';

// ========================== Selectors ==================================
// Customize section
const url: string = urlsUtils.legalshieldUrls.shieldAtWork.url;
const BTN_VIEW_GROUP = '.lsux-button.lsux-button--standard.ml-3 > span';
const TXT_SEARCH = '[placeholder="Search by name or group number"]';
const BTN_SEARCH = '[id="searchButton"]';
const BTN_ENROLLMENT_TAB =
  '#root > div > div > div:nth-child(1) > div > div > div.px-6.pt-4.mb-6.oVjDjW_QqZkyeTOHfYTdP > div.lsux-tab--bar.lsux-tab--stretch.mt-4._1eLFtzcrk-k4lYLgF3dWc1 > div:nth-child(2) > div > a > h4';
const TXT_GROUP = '#root  .lsux-container--flex-items-center.mb-2 > h3';
const BTN_MANAGE_SITE = '.lsux-container.lsux-container--white div > h2 > button > span';
const BTN_SAVE = '.add-button  span';
const TXT_NEW_GROUP_URL = '[placeholder="group website"]';
const IMG_GROUP_LOGO = '[class="group-logo-image"]';
const TXT_GROUP_NAME = '[placeholder="Group Name (if logo is not available)"]';
const TXT_DISPLAY_MEMBER_PERKS = '.lsux-grid  div:nth-child(4) > div > label > span';
const TXT_SPECIAL_INSTRUCTIONS = '[id="specialInstructions"]';
const BTN_ADD_LINK = '.lsux-grid div:nth-child(5)  button > span';
const TXT_USER_NAME = '[placeholder="Username"]';
const TXT_PASSWORD = '[placeholder="Password"]';

// Checkout section
const TXT_PLAN_AND_PRICING_URL = '.lsux-grid form > div:nth-child(1) > div.form-custom-label > p';
const TXT_SELECT_CHECKOUT_TYPE = '.lsux-grid  div:nth-child(2) > div > div > div > div > select';
const TXT_CHECKOUT_MESSAGE = '[id="checkoutText"]';

// Contact information section
const TXT_SELECT_TYPE = '.lsux-grid div > div > div:nth-child(2) > div > select';
const TXT_PHONE_NUMBER = '[name="contact-phone-number"]';
const TXT_EMAIL = '[name="contact-email"]';
const TXT_ASSOCIATE_FULL_NAME = '[placeholder="Full Name (optional) "]';
const TXT_ASSOCIATE_PHONE_NUMBER = '[placeholder="Phone Number (optional)"]';
const TXT_ASSOCIATE_EXT_NUMBER = '[placeholder="Ext Number (optional)"]';
const TXT_ASSOCIATE_EMAIL = '[placeholder="Email (optional)"]';

/**
 * @export
 * @class  WebBuilderShieldBenefits
 * @extends { WebBuilderShieldBenefits}
 */
export class WebBuilderShieldBenefits extends OktaPage {
  /**
   *
   *
   * @param {string} group
   * @memberof WebBuilderShieldBenefits
   */
  groupSearchByGroupNumber = async (group: string): Promise<void> => {
    console.log(' - WebBuilderShieldBenefits.groupSearchByGroupNumber');
    // Type in the search field the group number
    await this.page.fill(TXT_SEARCH, group);
    // Click on search button
    await this.clickOnElement(BTN_SEARCH);
    // Wait for the group name is displayed
    await this.page.waitForSelector(TXT_GROUP);
  };

  // ========================== Click Methods ==============================

  clickViewGroup = async (): Promise<void> => {
    console.log(' - WebBuilderShieldBenefits.clickViewGroup');
    // Click on View Group button
    await this.clickOnElement(BTN_VIEW_GROUP);
  };

  clickEnrollmentTab = async (): Promise<void> => {
    console.log(' - WebBuilderShieldBenefits.clickEnrollmentTab');
    // Click on Enrollment tab
    await this.clickOnElement(BTN_ENROLLMENT_TAB);
  };

  clickManageSiteButton = async (): Promise<void> => {
    console.log(' - WebBuilderShieldBenefits.clickManageSiteButton');
    // Click on Manage Site Button
    await this.clickOnElement(BTN_MANAGE_SITE);
  };

  clickSaveButton = async (): Promise<void> => {
    console.log(' - WebBuilderShieldBenefits.clickSaveButton');
    // Click on Save Button
    await this.page.waitForLoadState('domcontentloaded');
    await this.clickOnElement(BTN_SAVE);
  };

  // ========================== Navigate Methods ===========================

  // ========================== Navigate Methods ===========================

  navigateToGroupPage = async (): Promise<void> => {
    console.log(' - WebBuilderShieldBenefits.navigateToGroupPage');
    await this.page.goto(url);
    // Login through okta
    await this.loginThroughOktaGroupEnrollment();
    // Search group by group number
    await this.groupSearchByGroupNumber('111452');
    // Click on View group button
    await this.clickViewGroup();
  };

  navigateToWebBuilderShieldBenefitsPage = async (): Promise<void> => {
    console.log(' - WebBuilderShieldBenefits.navigateToWebBuilderShieldBenefitsPage');
    await this.page.goto(url);
    // Login through okta
    await this.loginThroughOktaGroupEnrollment();
    // Search group by group number
    await this.groupSearchByGroupNumber('83696');

    // Click on View group button
    await this.clickViewGroup();
  };

  // ========================== Assertion Methods ==========================

  assertButtonSaveIsDisplayed = async (): Promise<void> => {
    console.log(' - WebBuilderShieldBenefits.assertButtonSaveIsDisplayed');
    // Confirm button Save is displayed
    await this.page.waitForLoadState('networkidle', { timeout: 30000 });
    await this.isElementVisible(BTN_SAVE);
  };

  assertNewGroupUrlIsDisplayed = async (): Promise<void> => {
    console.log(' - WebBuilderShieldBenefits.assertNewGroupUrlIsDisplayed');
    // Confirm New Group Url is displayed
    await this.page.waitForLoadState('networkidle', { timeout: 30000 });
    await this.isElementVisible(TXT_NEW_GROUP_URL);
  };

  assertGroupLogoImageIsDisplayed = async (): Promise<void> => {
    console.log(' - WebBuilderShieldBenefits.assertGroupLogoImageIsDisplayed');
    // Confirm Group Logo Image is displayed
    await this.page.waitForLoadState('networkidle', { timeout: 30000 });
    await this.isElementVisible(IMG_GROUP_LOGO);
  };

  assertGroupNameFieldIsDisplayed = async (): Promise<void> => {
    console.log(' - WebBuilderShieldBenefits.assertGroupNameFieldIsDisplayed');
    // Confirm Group Name field is displayed
    await this.isElementVisible(TXT_GROUP_NAME);
  };

  assertDisplayMemberPerksIsDisplayed = async (): Promise<void> => {
    console.log(' - WebBuilderShieldBenefits.assertDisplayMemberPerks');
    // Confirm Display Member Perks? is visible
    await this.isElementVisible(TXT_DISPLAY_MEMBER_PERKS);
  };

  assertSpecialInstructionsIsDisplayed = async (): Promise<void> => {
    console.log(' - WebBuilderShieldBenefits.assertSpecialInstructionsIsDisplayed');
    // Confirm Special Instructions is displayed
    await this.isElementVisible(TXT_SPECIAL_INSTRUCTIONS);
  };

  assertAddLinkButtonIsDisplayed = async (): Promise<void> => {
    console.log(' - WebBuilderShieldBenefits.assertSpecialInstructionsIsDisplayed');
    // Confirm Add Link button is displayed
    await this.isElementVisible(BTN_ADD_LINK);
  };

  assertUserNameAndPasswordAreDisabled = async (): Promise<void> => {
    console.log(' - WebBuilderShieldBenefits.assertUserNameAndPasswordIsDisabled');
    // Confirm Username and Passord field are disabled if not select "Add username and password to enter site?"
    await this.assertElementIsHidden(TXT_USER_NAME);
    await this.assertElementIsHidden(TXT_PASSWORD);
  };

  assertPlansAndPricingUrlIsDisplayed = async (): Promise<void> => {
    console.log(' - WebBuilderShieldBenefits.assertPlansAndPricingUrlIsDisplayed');
    // Confirm Plans and Pricing Url is displayed
    await this.isElementVisible(TXT_PLAN_AND_PRICING_URL);
  };

  assertSelectCheckoutTypeIsDisplayed = async (): Promise<void> => {
    console.log(' - WebBuilderShieldBenefits.assertSelectCheckoutTypeIsDisplayed');
    // Confirm Select Checkout Type drop down is displayed
    await this.isElementVisible(TXT_SELECT_CHECKOUT_TYPE);
  };

  assertCheckoutMessageIsDisabled = async (): Promise<void> => {
    console.log(' - WebBuilderShieldBenefits.assertCheckoutMessageIsDisabled');
    // Confirm Checkout message is hidden when select "No"
    await this.assertElementIsHidden(TXT_CHECKOUT_MESSAGE);
  };

  assertSelectTypeIsDisplayed = async (): Promise<void> => {
    console.log(' - WebBuilderShieldBenefits.assertSelectTypeIsDisplayed');
    // Confirm Select Type drop down is displayed
    await this.isElementVisible(TXT_SELECT_TYPE);
  };

  assertPhoneNumberAndEmailAreDisplayed = async (): Promise<void> => {
    console.log(' - WebBuilderShieldBenefits.assertPhoneNumberAndEmailAreDisplayed');
    // Confirm Phone number and email are displayed
    await this.isElementVisible(TXT_PHONE_NUMBER);
    await this.isElementVisible(TXT_EMAIL);
  };

  assertAssociateInformationIsDisplayed = async (): Promise<void> => {
    console.log(' - WebBuilderShieldBenefits.assertAssociateInformationIsDisplayed');
    // Confirm Associate information displayed
    await this.isElementVisible(TXT_ASSOCIATE_FULL_NAME);
    await this.isElementVisible(TXT_ASSOCIATE_PHONE_NUMBER);
    await this.isElementVisible(TXT_ASSOCIATE_EXT_NUMBER);
    await this.isElementVisible(TXT_ASSOCIATE_EMAIL);
  };
}
