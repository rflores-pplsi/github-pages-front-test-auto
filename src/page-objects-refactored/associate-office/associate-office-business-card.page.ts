import { LoginPage } from '../login/login.page';
import UrlsUtils from '../../utils/urls.utils';
import { associateReportsCommissions } from '../../utils/user.utils';
import { expect } from '@playwright/test';
// ========================== Selectors ==================================
const lblTitleMarketingWebsitePreferences: string = 'h1.lsux-heading.lsux-heading--t28';
const lblProfileInformation: string = 'h3:has-text("Profile information")';
const lblFillContactInformationMsg: string = 'span:has-text("Please fill in your contact information that you wish to be displayed on your website")';
const lblYourURL: string = 'h4:has-text("Your URL:")';
const lnkWeAreLegalShield: string = "(//span[contains(@class,'textPointer')])[1]";
const msgCopied: string = '.lsux-alert.p-4.lsux-alert--success.lsux-alert--bold';
const lnkMyTeam: string = '.lsux-navigation :nth-child(1) > div.lsux-link-content';
const lnkReports: string = '.lsux-navigation :nth-child(2) > div';
const lnkAllReports: string = '.lsux-navigation :nth-child(3) > div';
const lnkCommissions: string = '.lsux-navigation :nth-child(4) > div';
const lnkTaxes: string = '.lsux-navigation :nth-child(5) > div';
const lnkResources: string = '.lsux-navigation :nth-child(6) > div';
const lnkMessages: string = '.lsux-navigation :nth-child(7) > div';
const lnkCompensation: string = '.lsux-navigation :nth-child(8) > div';
const lnkLsAdvantage: string = '.lsux-navigation :nth-child(7) > div';
const lnkAssociatePerks: string = '.lsux-navigation :nth-child(8) > div';
const headerLogo: string = '.fixedheader img.largemediumscreen';
const nameAO: string = '#lsdsTitle';
const helpIcon: string = '#helpButton > img';
const customerSupport: string = '#helpContentCustom > a:nth-child(1) > div';
const supportPhone: string = 'a.lsux-link-content.lsux-link-content';
const downCaret: string = '#downCaret';
const myAccount: string = '#myDropdown > a:nth-child(1) > div';
const signOut: string = '#myDropdown > a:nth-child(3) > div';
const lblFirstName: string = "(//label[@class='lsux-form-field-container__label '])[1]";
const txtFirstName: string = '[name="firstName"]';
const lblLastName: string = "(//label[@class='lsux-form-field-container__label '])[2]";
const txtLastName: string = '[name="lastName"]';
const lblEmailAddress: string = "(//label[@class='lsux-form-field-container__label '])[3]";
const txtEmailAddress: string = '[name="email"]';
const lblPhoneNumber: string = "(//label[@class='lsux-form-field-container__label '])[4]";
const txtPhoneNumber: string = '[name="cellPhone"]';
const chkDisplayOnWebsite: string = 'label.lsux-cb-container';
const btnPhotoIcon: string = "(//button[contains(@class,'lsux-button--icon-only   mb-3')])[1]";
const lnkUpdateProfilePicture: string = "(//div[contains(@class,'py-3 px-4')])[1]";
const lnkEditProfilePicture: string = "(//div[contains(@class,'py-3 px-4')])[2]";
const lnkResetProfilePicture: string = "(//div[contains(@class,'py-3 px-4')])[3]";
const lblPlanSelection: string = 'h3:has-text("Plan selection")';
const lblSelectPlanMsg: string = 'span:has-text("Please select the plans you want to be visible on your marketing site.")';
const lblDisplayingPlans: string = 'p:has-text("Displaying")';
const lblDisplayingPlans2: string = 'p:has-text(" plan(s) on your marketing site")';
const lblLegalShieldPlan: string = 'h3:has-text("LegalShield Plan")';
const lblIDShieldPlan: string = 'h3:has-text("IDShield Plan")';
const lblSmallBusinessPlan: string = 'h3:has-text("Small Business Plan")';
const lblUpdatesWillAppearMsg: string = 'span:has-text("Updates will appear within 3 days.")';
const lblNamePhotoApprovedMsg: string = 'span:has-text("The name and photo needs to be approved for updates to take place.")';
const btnPublish: string = "(//button[contains(@class,'right-align mobile-stretch')])[1]";
const termsOfService: string = "a[href*='terms-service']";
const privacyPolicy: string = '.lsux-footer a:nth-child(2)';
const disclaimer: string = "a[href*='disclaimer']";
const logo: string = '.lsux-footer > span > span';

// eslint-disable-next-line valid-jsdoc
/**
 *
 *
 * @export
 * @class BusinessCard
 * @extends {LoginPage}
 */
export class BusinessCard extends LoginPage {
  // ========================== Process Methods ============================
  // ========================== Navigate Methods ===========================
  navigateToBusinessCardPage = async (): Promise<void> => {
    console.log(' - BusinessCardPage.navigateToBusinessCardPage');
    // Navigate to Marketing Website Preferences/ Business Card Page
    await this.goTo(UrlsUtils.channelsUrls.businessCard.url);
    await this.login(associateReportsCommissions.username, associateReportsCommissions.password);
    await this.page.waitForSelector(lblTitleMarketingWebsitePreferences);
  };
  // ========================== Click Methods ==============================
  clickOnWeAreLegalShieldURL = async (): Promise<void> => {
    console.log(' - profilePickerPage.clickOnWeAreLegalShieldURL');
    await this.clickOnElement(lnkWeAreLegalShield);
  };

  clickOnPhotoLink = async (): Promise<void> => {
    console.log(' - profilePickerPage.clickOnPhotoLink');
    await this.clickOnElement(btnPhotoIcon);
  };

  // ========================== Assertion Methods ==========================
  assertPageHasCorrectURL = async (): Promise<void> => {
    console.log(' - BusinessCardPage.assertPageHasCorrectURL');
    await expect(this.page).toHaveURL(UrlsUtils.channelsUrls.businessCard.url);
    await this.page.waitForLoadState('domcontentloaded');
  };
  assertPageHasCorrectTitle = async (): Promise<void> => {
    console.log(' - BusinessCardPage.assertPageHasCorrectTitle');
    const title = 'Marketing Site Preferences';
    await expect(this.page).toHaveTitle(title);
  };

  assertNavMenuOnPage = async (): Promise<void> => {
    console.log(' - BusinessCardPage.assertNavMenuOnPage');
    await this.page.locator(lnkMyTeam).isVisible();
    await this.page.locator(lnkReports).isVisible();
    await this.page.locator(lnkAllReports).isVisible();
    await this.page.locator(lnkCommissions).isVisible();
    await this.page.locator(lnkTaxes).isVisible();
    await this.page.locator(lnkResources).isVisible();
    await this.page.locator(lnkMessages).isVisible();
    await this.page.locator(lnkCompensation).isVisible();
    await this.page.locator(lnkLsAdvantage).isVisible();
    await this.page.locator(lnkAssociatePerks).isVisible();
  };

  assertPageHasCorrectHeader = async (): Promise<void> => {
    console.log(' - BusinessCardPage.assertPageHasCorrectHeader');
    await this.assertElementIsVisible(headerLogo);
    await this.assertElementIsVisible(nameAO);
    await this.assertElementIsVisible(helpIcon);
    await this.clickOnElement(helpIcon);
    await this.assertElementIsVisible(customerSupport);
    await this.assertElementIsVisible(supportPhone);
    await this.assertElementHasText(supportPhone, '1-580-436-7424');
    await this.assertElementIsVisible(downCaret);
    await this.clickOnElement(downCaret);
    await this.assertElementIsVisible(myAccount);
    await this.assertElementIsVisible(signOut);
    await this.assertElementIsVisible(lblTitleMarketingWebsitePreferences);
  };

  assertProfileInfoMsg = async (): Promise<void> => {
    console.log(' - BusinessCardPage.assertProfileInfoMsg');
    await this.assertElementIsVisible(lblProfileInformation);
    await expect(this.page.locator(lblProfileInformation)).toContainText('Profile information');
    await this.assertElementIsVisible(lblFillContactInformationMsg);
    await expect(this.page.locator(lblFillContactInformationMsg)).toContainText(
      'Please fill in your contact information that you wish to be displayed on your website'
    );
  };

  assertWeAreLegalShieldURL = async (): Promise<void> => {
    console.log(' - BusinessCardPage.assertWeAreLegalShieldURL');
    await this.assertElementIsVisible(lblYourURL);
    await expect(this.page.locator(lblYourURL)).toContainText('Your URL:');
    await this.assertElementIsVisible(lnkWeAreLegalShield);
  };

  assertCopiedMsg = async (): Promise<void> => {
    console.log(' - BusinessCardPage.assertCopiedMsg');
    await this.assertElementIsVisible(msgCopied);
    await expect(this.page.locator(msgCopied)).toContainText('Copied!');
  };

  assertFirstAndLastNamesBox = async (): Promise<void> => {
    console.log(' - BusinessCardPage.assertFirstAndLastNamesBox');
    await this.assertElementIsVisible(lblFirstName);
    await expect(this.page.locator(lblFirstName)).toContainText('First name');
    await this.assertElementIsVisible(txtFirstName);
    await this.assertElementIsVisible(lblLastName);
    await expect(this.page.locator(lblLastName)).toContainText('Last name');
    await this.assertElementIsVisible(txtLastName);
  };

  assertEmailAddressBox = async (): Promise<void> => {
    console.log(' - BusinessCardPage.assertEmailAddressBox');
    await this.assertElementIsVisible(lblEmailAddress);
    await expect(this.page.locator(lblEmailAddress)).toContainText('Email address');
    await this.assertElementIsVisible(txtEmailAddress);
  };

  assertPhoneNumberBoxAndCheckbox = async (): Promise<void> => {
    console.log(' - BusinessCardPage.assertPhoneNumberBoxAndCheckbox');
    await this.assertElementIsVisible(lblPhoneNumber);
    await expect(this.page.locator(lblPhoneNumber)).toContainText('Phone number');
    await this.assertElementIsVisible(txtPhoneNumber);
    await this.assertElementIsVisible(chkDisplayOnWebsite);
    await expect(this.page.locator(chkDisplayOnWebsite)).toContainText('Display phone number on site');
  };

  assertPhotoIconBtn = async (): Promise<void> => {
    console.log(' - BusinessCardPage.assertPhotoIconBtn');
    await this.assertElementIsVisible(btnPhotoIcon);
  };

  assertUpdateEditResetProfilePicture = async (): Promise<void> => {
    console.log(' - BusinessCardPage.assertUpdateEditResetProfilePicture');
    await this.assertElementIsVisible(lnkUpdateProfilePicture);
    await expect(this.page.locator(lnkUpdateProfilePicture)).toContainText('Update profile picture');
    await this.assertElementIsVisible(lnkEditProfilePicture);
    await expect(this.page.locator(lnkEditProfilePicture)).toContainText('Edit profile picture');
    await this.assertElementIsVisible(lnkResetProfilePicture);
    await expect(this.page.locator(lnkResetProfilePicture)).toContainText('Reset profile picture');
  };

  assertPlanSelection = async (): Promise<void> => {
    console.log(' - BusinessCardPage.assertPlanSelection');
    await this.assertElementIsVisible(lblPlanSelection);
    await expect(this.page.locator(lblPlanSelection)).toContainText('Plan selection');
    await this.assertElementIsVisible(lblSelectPlanMsg);
    await expect(this.page.locator(lblSelectPlanMsg)).toContainText('Please select the plans you want to be visible on your marketing site.');
    await this.assertElementIsVisible(lblDisplayingPlans);
    await expect(this.page.locator(lblDisplayingPlans)).toContainText('Displaying');
    await this.assertElementIsVisible(lblDisplayingPlans2);
    await expect(this.page.locator(lblDisplayingPlans2)).toContainText(' plan(s) on your marketing site');
  };

  assertLegalShieldPlanISDisplaying = async (): Promise<void> => {
    console.log(' - BusinessCardPage.assertLegalShieldPlanISDisplaying');
    await this.assertElementIsVisible(lblLegalShieldPlan);
    await expect(this.page.locator(lblLegalShieldPlan)).toContainText('LegalShield Plan');
  };

  assertIDShieldPlanISDisplaying = async (): Promise<void> => {
    console.log(' - BusinessCardPage.assertIDShieldPlanISDisplaying');
    await this.assertElementIsVisible(lblIDShieldPlan);
    await expect(this.page.locator(lblIDShieldPlan)).toContainText('IDShield Plan');
  };

  assertSmallBusinessPlanISDisplaying = async (): Promise<void> => {
    console.log(' - BusinessCardPage.assertSmallBusinessPlanISDisplaying');
    await this.assertElementIsVisible(lblSmallBusinessPlan);
    await expect(this.page.locator(lblSmallBusinessPlan)).toContainText('Small Business Plan');
  };

  assertEyeIconIsDisplaying = async (number: number = 0): Promise<void> => {
    console.log(' - BusinessCardPage.assertEyeIconIsDisplaying');
    await this.assertElementIsVisible(`(//img[@class='lsux-icon  lsux-icon--medium  '])[${number}]`);
  };

  assertHiddenLabelIsDisplaying = async (number: number = 0): Promise<void> => {
    console.log(' - BusinessCardPage.assertHiddenLabelIsDisplaying');
    await this.assertElementIsVisible(`(//p[@class='plan-icon'])[${number}]`);
    await expect(this.page.locator(`(//p[@class='plan-icon'])[${number}]`)).toContainText('Hidden');
  };

  assertDisplayBtnIsDisplaying = async (number: number = 0): Promise<void> => {
    console.log(' - BusinessCardPage.assertDisplayBtnIsDisplaying');
    await this.assertElementIsVisible(`(//button[@type='button'])[${number}]`);
    await expect(this.page.locator(`(//button[@type='button'])[${number}]`)).toContainText('Display');
  };

  assertPublishButton = async (): Promise<void> => {
    console.log(' - BusinessCardPage.assertPublishButton');
    await this.assertElementIsVisible(lblUpdatesWillAppearMsg);
    await expect(this.page.locator(lblUpdatesWillAppearMsg)).toContainText('Updates will appear within 3 days.');
    await this.assertElementIsVisible(lblNamePhotoApprovedMsg);
    await expect(this.page.locator(lblNamePhotoApprovedMsg)).toContainText('The name and photo needs to be approved for updates to take place.');
    await this.assertElementIsVisible(btnPublish);
    await expect(this.page.locator(btnPublish)).toContainText('Publish');
  };

  assertPageHasCorrectFooter = async (): Promise<void> => {
    console.log(' - BusinessCardPage.assertPageHasCorrectFooter');
    await this.assertElementIsVisible(termsOfService);
    await this.assertElementIsVisible(privacyPolicy);
    await this.assertElementIsVisible(disclaimer);
    await this.assertElementIsVisible(logo);
  };
}
