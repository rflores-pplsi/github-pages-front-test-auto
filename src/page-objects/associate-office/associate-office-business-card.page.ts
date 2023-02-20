import { LoginPage } from '../login/login.page';
import UrlsUtils from '../../utils/urls.utils';
import { associateReportsCommissions } from '../../utils/user.utils';
import { expect } from '@playwright/test';
// ========================== Selectors ==================================
const LBL_TITLE_MARKETING_WEBSITE_PREFERENCES = 'h1.lsux-heading.lsux-heading--t28';
const LBL_PROFILE_INFORMATION = 'h3:has-text("Profile information")';
const LBL_FILL_CONTACT_INFORMATION_MSG = 'span:has-text("Please fill in your contact information that you wish to be displayed on your website")';
const LBL_YOUR_URL = 'h4:has-text("Your URL:")';
const LNK_WE_ARE_LEGAL_SHIELD = "(//span[contains(@class,'textPointer')])[1]";
const MSG_COPIED = '.lsux-alert.p-4.lsux-alert--success.lsux-alert--bold';
const LNK_MY_TEAM = '.lsux-navigation :nth-child(1) > div.lsux-link-content';
const LNK_REPORTS = '.lsux-navigation :nth-child(2) > div';
const LNK_ALL_REPORTS = '.lsux-navigation :nth-child(3) > div';
const LNK_COMMISSIONS = '.lsux-navigation :nth-child(4) > div';
const LNK_TAXES = '.lsux-navigation :nth-child(5) > div';
const LNK_RESOURCES = '.lsux-navigation :nth-child(6) > div';
const LNK_MESSAGES = '.lsux-navigation :nth-child(7) > div';
const LNK_COMPENSATION = '.lsux-navigation :nth-child(8) > div';
const LNK_LS_ADVANTAGE = '.lsux-navigation :nth-child(7) > div';
const LNK_ASSOCIATE_PERKS = '.lsux-navigation :nth-child(8) > div';
const HEADER_LOGO = '.fixedheader img.largemediumscreen';
const NAME_AO = '#lsdsTitle';
const HELP_ICON = '#helpButton > img';
const CUSTOMER_SUPPORT = '#helpContentCustom > a:nth-child(1) > div';
const SUPPORT_PHONE = 'a.lsux-link-content.lsux-link-content';
const DOWN_CARET = '#downCaret';
const MY_ACCOUNT = '#myDropdown > a:nth-child(1) > div';
const SIGN_OUT = '#myDropdown > a:nth-child(3) > div';
const LBL_FIRST_NAME = "(//label[@class='lsux-form-field-container__label '])[1]";
const TXT_FIRST_NAME = '[name="firstName"]';
const LBL_LAST_NAME = "(//label[@class='lsux-form-field-container__label '])[2]";
const TXT_LAST_NAME = '[name="lastName"]';
const LBL_EMAIL_ADDRESS = "(//label[@class='lsux-form-field-container__label '])[3]";
const TXT_EMAIL_ADDRESS = '[name="email"]';
const LBL_PHONE_NUMBER = "(//label[@class='lsux-form-field-container__label '])[4]";
const TXT_PHONE_NUMBER = '[name="cellPhone"]';
const CHK_DISPLAY_ON_WEBSITE = 'label.lsux-cb-container';
const BTN_PHOTO_ICON = "(//button[contains(@class,'lsux-button--icon-only   mb-3')])[1]";
const LNK_UPDATE_PROFILE_PICTURE = "(//div[contains(@class,'py-3 px-4')])[1]";
const LNK_EDIT_PROFILE_PICTURE = "(//div[contains(@class,'py-3 px-4')])[2]";
const LNK_RESET_PROFILE_PICTURE = "(//div[contains(@class,'py-3 px-4')])[3]";
const LBL_PLAN_SELECTION = 'h3:has-text("Plan selection")';
const LBL_SELECT_PLAN_MSG = 'span:has-text("Please select the plans you want to be visible on your marketing site.")';
const LBL_DISPLAYING_PLANS = 'p:has-text("Displaying")';
const LBL_DISPLAYING_PLANS2 = 'p:has-text(" plan(s) on your marketing site")';
const LBL_LEGAL_SHIELD_PLAN = 'h3:has-text("LegalShield Plan")';
const LBL_ID_SHIELD_PLAN = 'h3:has-text("IDShield Plan")';
const LBL_SMALL_BUSINESS_PLAN = 'h3:has-text("Small Business Plan")';
const LBL_UPDATES_WILL_APPEAR_MSG = 'span:has-text("Updates will appear within 3 days.")';
const LBL_NAME_PHOTO_APPROVED_MSG = 'span:has-text("The name and photo needs to be approved for updates to take place.")';
const BTN_PUBLISH = "(//button[contains(@class,'right-align mobile-stretch')])[1]";
const TERMS_OF_SERVICE = "a[href*='terms-service']";
const PRIVACY_POLICY = '.lsux-footer a:nth-child(2)';
const DISCLAIMER = "a[href*='disclaimer']";
const LOGO = '.lsux-footer > span > span';

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
    await this.login(associateReportsCommissions.username as string, associateReportsCommissions.password as string);
    await this.page.waitForSelector(LBL_TITLE_MARKETING_WEBSITE_PREFERENCES);
  };
  // ========================== Click Methods ==============================
  clickOnWeAreLegalShieldURL = async (): Promise<void> => {
    console.log(' - profilePickerPage.clickOnWeAreLegalShieldURL');
    await this.clickOnElement(LNK_WE_ARE_LEGAL_SHIELD);
  };

  clickOnPhotoLink = async (): Promise<void> => {
    console.log(' - profilePickerPage.clickOnPhotoLink');
    await this.clickOnElement(BTN_PHOTO_ICON);
  };

  // ========================== Assertion Methods ==========================
  assertPageHasCorrectURL = async (): Promise<void> => {
    console.log(' - BusinessCardPage.assertPageHasCorrectURL');
    await expect(this.page).toHaveURL(UrlsUtils.channelsUrls.businessCard.url);
    await this.page.waitForLoadState('domcontentloaded');
  };
  assertPageHasCorrectTitle = async (): Promise<void> => {
    console.log(' - BusinessCardPage.assertPageHasCorrectTitle');
    const TITLE = 'Marketing Site Preferences';
    await expect(this.page).toHaveTitle(TITLE);
  };

  assertNavMenuOnPage = async (): Promise<void> => {
    console.log(' - BusinessCardPage.assertNavMenuOnPage');
    await this.page.locator(LNK_MY_TEAM).isVisible();
    await this.page.locator(LNK_REPORTS).isVisible();
    await this.page.locator(LNK_ALL_REPORTS).isVisible();
    await this.page.locator(LNK_COMMISSIONS).isVisible();
    await this.page.locator(LNK_TAXES).isVisible();
    await this.page.locator(LNK_RESOURCES).isVisible();
    await this.page.locator(LNK_MESSAGES).isVisible();
    await this.page.locator(LNK_COMPENSATION).isVisible();
    await this.page.locator(LNK_LS_ADVANTAGE).isVisible();
    await this.page.locator(LNK_ASSOCIATE_PERKS).isVisible();
  };

  assertPageHasCorrectHeader = async (): Promise<void> => {
    console.log(' - BusinessCardPage.assertPageHasCorrectHeader');
    await this.assertElementIsVisible(HEADER_LOGO);
    await this.assertElementIsVisible(NAME_AO);
    await this.assertElementIsVisible(HELP_ICON);
    await this.clickOnElement(HELP_ICON);
    await this.assertElementIsVisible(CUSTOMER_SUPPORT);
    await this.assertElementIsVisible(SUPPORT_PHONE);
    await this.assertElementHasText(SUPPORT_PHONE, '1-580-436-7424');
    await this.assertElementIsVisible(DOWN_CARET);
    await this.clickOnElement(DOWN_CARET);
    await this.assertElementIsVisible(MY_ACCOUNT);
    await this.assertElementIsVisible(SIGN_OUT);
    await this.assertElementIsVisible(LBL_TITLE_MARKETING_WEBSITE_PREFERENCES);
  };

  assertProfileInfoMsg = async (): Promise<void> => {
    console.log(' - BusinessCardPage.assertProfileInfoMsg');
    await this.assertElementIsVisible(LBL_PROFILE_INFORMATION);
    await expect(this.page.locator(LBL_PROFILE_INFORMATION)).toContainText('Profile information');
    await this.assertElementIsVisible(LBL_FILL_CONTACT_INFORMATION_MSG);
    await expect(this.page.locator(LBL_FILL_CONTACT_INFORMATION_MSG)).toContainText(
      'Please fill in your contact information that you wish to be displayed on your website'
    );
  };

  assertWeAreLegalShieldURL = async (): Promise<void> => {
    console.log(' - BusinessCardPage.assertWeAreLegalShieldURL');
    await this.assertElementIsVisible(LBL_YOUR_URL);
    await expect(this.page.locator(LBL_YOUR_URL)).toContainText('Your URL:');
    await this.assertElementIsVisible(LNK_WE_ARE_LEGAL_SHIELD);
  };

  assertCopiedMsg = async (): Promise<void> => {
    console.log(' - BusinessCardPage.assertCopiedMsg');
    await this.assertElementIsVisible(MSG_COPIED);
    await expect(this.page.locator(MSG_COPIED)).toContainText('Copied!');
  };

  assertFirstAndLastNamesBox = async (): Promise<void> => {
    console.log(' - BusinessCardPage.assertFirstAndLastNamesBox');
    await this.assertElementIsVisible(LBL_FIRST_NAME);
    await expect(this.page.locator(LBL_FIRST_NAME)).toContainText('First name');
    await this.assertElementIsVisible(TXT_FIRST_NAME);
    await this.assertElementIsVisible(LBL_LAST_NAME);
    await expect(this.page.locator(LBL_LAST_NAME)).toContainText('Last name');
    await this.assertElementIsVisible(TXT_LAST_NAME);
  };

  assertEmailAddressBox = async (): Promise<void> => {
    console.log(' - BusinessCardPage.assertEmailAddressBox');
    await this.assertElementIsVisible(LBL_EMAIL_ADDRESS);
    await expect(this.page.locator(LBL_EMAIL_ADDRESS)).toContainText('Email address');
    await this.assertElementIsVisible(TXT_EMAIL_ADDRESS);
  };

  assertPhoneNumberBoxAndCheckbox = async (): Promise<void> => {
    console.log(' - BusinessCardPage.assertPhoneNumberBoxAndCheckbox');
    await this.assertElementIsVisible(LBL_PHONE_NUMBER);
    await expect(this.page.locator(LBL_PHONE_NUMBER)).toContainText('Phone number');
    await this.assertElementIsVisible(TXT_PHONE_NUMBER);
    await this.assertElementIsVisible(CHK_DISPLAY_ON_WEBSITE);
    await expect(this.page.locator(CHK_DISPLAY_ON_WEBSITE)).toContainText('Display phone number on site');
  };

  assertPhotoIconBtn = async (): Promise<void> => {
    console.log(' - BusinessCardPage.assertPhotoIconBtn');
    await this.assertElementIsVisible(BTN_PHOTO_ICON);
  };

  assertUpdateEditResetProfilePicture = async (): Promise<void> => {
    console.log(' - BusinessCardPage.assertUpdateEditResetProfilePicture');
    await this.assertElementIsVisible(LNK_UPDATE_PROFILE_PICTURE);
    await expect(this.page.locator(LNK_UPDATE_PROFILE_PICTURE)).toContainText('Update profile picture');
    await this.assertElementIsVisible(LNK_EDIT_PROFILE_PICTURE);
    await expect(this.page.locator(LNK_EDIT_PROFILE_PICTURE)).toContainText('Edit profile picture');
    await this.assertElementIsVisible(LNK_RESET_PROFILE_PICTURE);
    await expect(this.page.locator(LNK_RESET_PROFILE_PICTURE)).toContainText('Reset profile picture');
  };

  assertPlanSelection = async (): Promise<void> => {
    console.log(' - BusinessCardPage.assertPlanSelection');
    await this.assertElementIsVisible(LBL_PLAN_SELECTION);
    await expect(this.page.locator(LBL_PLAN_SELECTION)).toContainText('Plan selection');
    await this.assertElementIsVisible(LBL_SELECT_PLAN_MSG);
    await expect(this.page.locator(LBL_SELECT_PLAN_MSG)).toContainText('Please select the plans you want to be visible on your marketing site.');
    await this.assertElementIsVisible(LBL_DISPLAYING_PLANS);
    await expect(this.page.locator(LBL_DISPLAYING_PLANS)).toContainText('Displaying');
    await this.assertElementIsVisible(LBL_DISPLAYING_PLANS2);
    await expect(this.page.locator(LBL_DISPLAYING_PLANS2)).toContainText(' plan(s) on your marketing site');
  };

  assertLegalShieldPlanISDisplaying = async (): Promise<void> => {
    console.log(' - BusinessCardPage.assertLegalShieldPlanISDisplaying');
    await this.assertElementIsVisible(LBL_LEGAL_SHIELD_PLAN);
    await expect(this.page.locator(LBL_LEGAL_SHIELD_PLAN)).toContainText('LegalShield Plan');
  };

  assertIDShieldPlanISDisplaying = async (): Promise<void> => {
    console.log(' - BusinessCardPage.assertIDShieldPlanISDisplaying');
    await this.assertElementIsVisible(LBL_ID_SHIELD_PLAN);
    await expect(this.page.locator(LBL_ID_SHIELD_PLAN)).toContainText('IDShield Plan');
  };

  assertSmallBusinessPlanISDisplaying = async (): Promise<void> => {
    console.log(' - BusinessCardPage.assertSmallBusinessPlanISDisplaying');
    await this.assertElementIsVisible(LBL_SMALL_BUSINESS_PLAN);
    await expect(this.page.locator(LBL_SMALL_BUSINESS_PLAN)).toContainText('Small Business Plan');
  };

  assertEyeIconIsDisplaying = async (number = 0): Promise<void> => {
    console.log(' - BusinessCardPage.assertEyeIconIsDisplaying');
    await this.assertElementIsVisible(`(//img[@class='lsux-icon  lsux-icon--medium  '])[${number}]`);
  };

  assertHiddenLabelIsDisplaying = async (number = 0): Promise<void> => {
    console.log(' - BusinessCardPage.assertHiddenLabelIsDisplaying');
    await this.assertElementIsVisible(`(//p[@class='plan-icon'])[${number}]`);
    await expect(this.page.locator(`(//p[@class='plan-icon'])[${number}]`)).toContainText('Hidden');
  };

  assertDisplayBtnIsDisplaying = async (number = 0): Promise<void> => {
    console.log(' - BusinessCardPage.assertDisplayBtnIsDisplaying');
    await this.assertElementIsVisible(`(//button[@type='button'])[${number}]`);
    await expect(this.page.locator(`(//button[@type='button'])[${number}]`)).toContainText('Display');
  };

  assertPublishButton = async (): Promise<void> => {
    console.log(' - BusinessCardPage.assertPublishButton');
    await this.assertElementIsVisible(LBL_UPDATES_WILL_APPEAR_MSG);
    await expect(this.page.locator(LBL_UPDATES_WILL_APPEAR_MSG)).toContainText('Updates will appear within 3 days.');
    await this.assertElementIsVisible(LBL_NAME_PHOTO_APPROVED_MSG);
    await expect(this.page.locator(LBL_NAME_PHOTO_APPROVED_MSG)).toContainText('The name and photo needs to be approved for updates to take place.');
    await this.assertElementIsVisible(BTN_PUBLISH);
    await expect(this.page.locator(BTN_PUBLISH)).toContainText('Publish');
  };

  assertPageHasCorrectFooter = async (): Promise<void> => {
    console.log(' - BusinessCardPage.assertPageHasCorrectFooter');
    await this.assertElementIsVisible(TERMS_OF_SERVICE);
    await this.assertElementIsVisible(PRIVACY_POLICY);
    await this.assertElementIsVisible(DISCLAIMER);
    await this.assertElementIsVisible(LOGO);
  };
}
