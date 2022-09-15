import { chromium, expect } from '@playwright/test';
import urlsUtils from '../../utils/urls.utils';
import { OktaPage } from '../okta/okta.page';

// ========================== Selectors ==================================
// Customize section
const url: string = urlsUtils.legalshieldUrls.shieldAtWork.url;
const btnViewGroup: string = '.lsux-button.lsux-button--standard.ml-3 > span';
const txtSearch: string = '[placeholder="Search by name or group number"]';
const btnSearch: string = '[id="searchButton"]';
const btnEnrollmentTab: string =
  '#root > div > div > div:nth-child(1) > div > div > div.px-6.pt-4.mb-6.oVjDjW_QqZkyeTOHfYTdP > div.lsux-tab--bar.lsux-tab--stretch.mt-4._1eLFtzcrk-k4lYLgF3dWc1 > div:nth-child(2) > div > a > h4';
const txtGroup: string = '#root  .lsux-container--flex-items-center.mb-2 > h3';
const btnManageSite: string = '.lsux-container.lsux-container--white div > h2 > button > span';
const txtNonNatTest48: string = '.lsux-heading.lsux-heading--t26';
const btnSave: string = '.add-button  span';
const txtNewGroupUrl: string = '[placeholder="group website"]';
const imgGroupLogo: string = '[class="group-logo-image"]';
const txtGroupName: string = '[placeholder="Group Name (if logo is not available)"]';
const txtDisplayMemberPerks: string = '.lsux-grid  div:nth-child(4) > div > label > span';
const txtSpecialInstructions: string = '[id="specialInstructions"]';
const btnAddLink: string = '.lsux-grid div:nth-child(5)  button > span';
const txtUserName: string = '[placeholder="Username"]';
const txtPassword: string = '[placeholder="Password"]';

// Checkout section
const txtPlanAndPricingUrl: string = '.lsux-grid form > div:nth-child(1) > div.form-custom-label > p';
const txtSelectCheckoutType: string = '.lsux-grid  div:nth-child(2) > div > div > div > div > select';
const txtCheckoutMessage: string = '[id="checkoutText"]';

// Contact information section
const txtSelectType: string = '.lsux-grid div > div > div:nth-child(2) > div > select';
const txtPhoneNumber: string = '[name="contact-phone-number"]';
const txtEmail: string = '[name="contact-email"]';
const txtAssociateFullName: string = '[placeholder="Full Name (optional) "]';
const txtAssociatePhoneNumber: string = '[placeholder="Phone Number (optional)"]';
const txtAssociateExtNumber: string = '[placeholder="Ext Number (optional)"]';
const txtAssociateEmail: string = '[placeholder="Email (optional)"]';

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
    await this.page.fill(txtSearch, group);
    // Click on search button
    await this.clickOnElement(btnSearch);
    // Wait for the group name is displayed
    await this.page.waitForSelector(txtGroup);
  };

  // ========================== Click Methods ==============================

  clickViewGroup = async (): Promise<void> => {
    console.log(' - WebBuilderShieldBenefits.clickViewGroup');
    // Click on View Group button
    await this.clickOnElement(btnViewGroup);
  };

  clickEnrollmentTab = async (): Promise<void> => {
    console.log(' - WebBuilderShieldBenefits.clickEnrollmentTab');
    // Click on Enrollment tab
    await this.clickOnElement(btnEnrollmentTab);
  };
    
   clickManageSiteButton = async (): Promise<void> => {
    console.log(' - WebBuilderShieldBenefits.clickManageSiteButton');
    // Click on Manage Site Button
    await this.clickOnElement(btnManageSite);
  };

  clickSaveButton = async (): Promise<void> => {
    console.log(' - WebBuilderShieldBenefits.clickSaveButton');
    // Click on Save Button
    await this.page.waitForLoadState('domcontentloaded');
    await this.clickOnElement(btnSave);
  };

  // ========================== Navigate Methods ===========================

  navigateToWebBuilderShieldBenefitsPage = async (groupNumber: String): Promise<void> => {
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
   await this.isElementVisible(btnSave);
  };

  assertNewGroupUrlIsDisplayed = async (): Promise<void> => {
    console.log(' - WebBuilderShieldBenefits.assertNewGroupUrlIsDisplayed');
    // Confirm New Group Url is displayed
   await this.page.waitForLoadState('networkidle', { timeout: 30000 });
   await this.isElementVisible(txtNewGroupUrl);
  };

  assertGroupLogoImageIsDisplayed = async (): Promise<void> => {
    console.log(' - WebBuilderShieldBenefits.assertGroupLogoImageIsDisplayed');
    // Confirm Group Logo Image is displayed
   await this.page.waitForLoadState('networkidle', { timeout: 30000 });
   await this.isElementVisible(imgGroupLogo);
  };

  assertGroupNameFieldIsDisplayed = async (): Promise<void> => {
    console.log(' - WebBuilderShieldBenefits.assertGroupNameFieldIsDisplayed');
    // Confirm Group Name field is displayed
    await this.isElementVisible(txtGroupName);
  };

  assertDisplayMemberPerksIsDisplayed = async (): Promise<void> => {
    console.log(' - WebBuilderShieldBenefits.assertDisplayMemberPerks');
    // Confirm Display Member Perks? is visible 
    await this.isElementVisible(txtDisplayMemberPerks);
     };

     assertSpecialInstructionsIsDisplayed = async (): Promise<void> => {
     console.log(' - WebBuilderShieldBenefits.assertSpecialInstructionsIsDisplayed');
     // Confirm Special Instructions is displayed
     await this.isElementVisible(txtSpecialInstructions);
     };

     assertAddLinkButtonIsDisplayed = async (): Promise<void> => {
     console.log(' - WebBuilderShieldBenefits.assertSpecialInstructionsIsDisplayed');
     // Confirm Add Link button is displayed
     await this.isElementVisible(btnAddLink);
     };

     assertUserNameAndPasswordAreDisabled = async (): Promise<void> => {
     console.log(' - WebBuilderShieldBenefits.assertUserNameAndPasswordIsDisabled');
     // Confirm Username and Passord field are disabled if not select "Add username and password to enter site?"
     await this.assertElementIsHidden(txtUserName);
     await this.assertElementIsHidden(txtPassword);
     };

     assertPlansAndPricingUrlIsDisplayed = async (): Promise<void> => {
     console.log(' - WebBuilderShieldBenefits.assertPlansAndPricingUrlIsDisplayed');
     // Confirm Plans and Pricing Url is displayed
     await this.isElementVisible(txtPlanAndPricingUrl);
     };

     assertSelectCheckoutTypeIsDisplayed = async (): Promise<void> => {
     console.log(' - WebBuilderShieldBenefits.assertSelectCheckoutTypeIsDisplayed');
     // Confirm Select Checkout Type drop down is displayed
     await this.isElementVisible(txtSelectCheckoutType);
     };

     assertCheckoutMessageIsDisabled = async (): Promise<void> => {
     console.log(' - WebBuilderShieldBenefits.assertCheckoutMessageIsDisabled');
     // Confirm Checkout message is hidden when select "No" 
     await this.assertElementIsHidden(txtCheckoutMessage);
     };

     assertSelectTypeIsDisplayed = async (): Promise<void> => {
     console.log(' - WebBuilderShieldBenefits.assertSelectTypeIsDisplayed');
     // Confirm Select Type drop down is displayed
     await this.isElementVisible(txtSelectType);
     };

     assertPhoneNumberAndEmailAreDisplayed = async (): Promise<void> => {
     console.log(' - WebBuilderShieldBenefits.assertPhoneNumberAndEmailAreDisplayed');
     // Confirm Phone number and email are displayed
     await this.isElementVisible(txtPhoneNumber);
     await this.isElementVisible(txtEmail);
     };

     assertAssociateInformationIsDisplayed = async (): Promise<void> => {
     console.log(' - WebBuilderShieldBenefits.assertAssociateInformationIsDisplayed');
     // Confirm Associate information displayed
     await this.isElementVisible(txtAssociateFullName);
     await this.isElementVisible(txtAssociatePhoneNumber);
     await this.isElementVisible(txtAssociateExtNumber);
     await this.isElementVisible(txtAssociateEmail);
     };


  
}
