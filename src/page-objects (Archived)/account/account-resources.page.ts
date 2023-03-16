import { expect } from '@playwright/test';
import UrlsUtils from '../../utils/urls.utils';
import { LoginPage } from '../login/login.page';

// ========================== Selectors ==================================
const IMG_FORMS_LOGO_LARGE = '//img[contains(@alt,"Legalshield Forms logo large")]';
const LBL_FORMS = '//h5[contains(text(),"Forms")]';
const BTN_FORMS_GO_TO_WEBSITE = '//div[contains(@class,"resources--forms-ls")]//button';
const IMG_MEMBER_PERKS_LOGO_LARGE = '//img[contains(@alt,"Member Perks logo large")]';
const LBL_MEMBER_PERKS = '//h5[contains(text(),"Member Perks")]';
const BTN_MEMBER_PERKS_GO_TO_WEBSITE = '//div[contains(@class,"resources--member-perks")]//button';

/**
 * @export
 * @class AccountResourcesPage
 * @extends {LoginPage}
 */
export class AccountResourcesPage extends LoginPage {
  // ========================== Process Methods ============================

  // ========================== Navigate Methods ===========================
  navigateToAccountResourcesPage = async (): Promise<void> => {
    console.log(' - accountResourcesPage.navigateToAccountResourcesPage');
    // Navigate to Activate Page
    await this.goTo(UrlsUtils.legalshieldUrls.accounts.url + '/resources');
  };
  // ========================== Click Methods ==============================

  clickFormsGoToWebsiteLink = async (): Promise<void> => {
    console.log(' - accountResourcesPage.clickFormsGoToWebsiteLink');
    // Click on the Forms Go To Website Link
    await this.clickOnElement(BTN_FORMS_GO_TO_WEBSITE);
    // Wait for document to load before subsequent steps
    await this.page.waitForLoadState('domcontentloaded');
  };

  clickMemberPerksGoToWebsiteLink = async (): Promise<void> => {
    console.log(' - accountResourcesPage.clickMemberPerksGoToWebsiteLink');
    // Click on the Forgot Password Link
    await this.clickOnElement(BTN_MEMBER_PERKS_GO_TO_WEBSITE);
    // Wait for document to load before subsequent steps
    await this.page.waitForLoadState('domcontentloaded');
  };
  // ========================== Assertion Methods ==========================

  assertFormsLogoIsDisplayed = async (): Promise<void> => {
    console.log(' - accountResourcesPage.assertFormsLogoIsDisplayed');
    // Confirm that the Forms label is displayed in the Forms Panel
    await this.assertElementIsVisible(IMG_FORMS_LOGO_LARGE);
  };

  assertFormsLabelIsDisplayed = async (): Promise<void> => {
    console.log(' - accountResourcesPage.assertFormsLabelIsDisplayed');
    // Confirm that the Forms label is displayed in the Forms Panel
    await this.assertElementIsVisible(LBL_FORMS);
  };

  // Confirm URL for Forms page
  assertFormsPageUrl = async (): Promise<void> => {
    console.log(' - accountResourcesPage.assertFormsPageUrl');
    // Confirm the Forms Page URL is reached
    await expect(this.page).toHaveURL(UrlsUtils.legalshieldUrls.forms.url);
    // Wait for document to load before subsequent steps
    await this.page.waitForLoadState('networkidle');
  };

  assertMemberPerksLogoIsDisplayed = async (): Promise<void> => {
    console.log(' - accountResourcesPage.assertMemberPerksLogoIsDisplayed');
    // Confirm that the Member Perks logo is displayed in the Member Perks Panel
    await this.assertElementIsVisible(IMG_MEMBER_PERKS_LOGO_LARGE);
  };

  assertMemberPerksLabelIsDisplayed = async (): Promise<void> => {
    console.log(' - accountResourcesPage.assertMemberPerksLabelIsDisplayed');
    // Confirm that the Member Perks label is displayed in the Member Perks Panel
    await this.assertElementIsVisible(LBL_MEMBER_PERKS);
  };

  assertMemberPerksPageUrl = async (): Promise<void> => {
    console.log(' - accountResourcesPage.assertMemberPerksPageUrl');
    // Confirm the Member Perks Page URL is reached
    await expect(this.page).toHaveURL(UrlsUtils.memberPerksUrls.login.url);
    // Wait for document to load before subsequent steps
    await this.page.waitForLoadState('networkidle');
  };
}
