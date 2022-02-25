import { expect } from '@playwright/test';        // import expect functionality from playwright
import UrlsUtils from '../../utils/urls.utils';   // import class of Urls
import { LoginPage } from '../login/login.page';  // import the LoginPage for extension

// ========================== Selectors ==================================
let imgFormsLogoLarge: string = '//img[contains(@alt,"Legalshield Forms logo large")]';
let lblForms: string = '//h5[contains(text(),"Forms")]' 
let btnFormsGoToWebsite: string = '//div[contains(@class,"resources--forms-ls")]//button';
let imgMemberPerksLogoLarge: string = '//img[contains(@alt,"Member Perks logo large")]';
let lblMemberPerks: string = '//h5[contains(text(),"Member Perks")]' 
let btnMemberPerksGoToWebsite: string = '//div[contains(@class,"resources--member-perks")]//button';

export class AccountResourcesPage extends LoginPage {

// ========================== Process Methods ============================

// ========================== Navigate Methods ===========================
navigateToAccountResourcesPage = async (): Promise<void> => {
  console.log(" - accountResourcesPage.navigateToAccountResourcesPage");
  // Navigate to Activate Page
  await this.goTo(UrlsUtils.legalshieldUrls.account.url + '/resources');
}
// ========================== Click Methods ============================== 

clickFormsGoToWebsiteLink = async (): Promise<void> => {
  console.log(" - accountResourcesPage.clickFormsGoToWebsiteLink");
  // Click on the Forms Go To Website Link
  await this.clickOnElement(btnFormsGoToWebsite);
  // Wait for document to load before subsequent steps
  await this.page.waitForLoadState('domcontentloaded');
}

clickMemberPerksGoToWebsiteLink = async (): Promise<void> => {
  console.log(" - accountResourcesPage.clickMemberPerksGoToWebsiteLink");
  // Click on the Forgot Password Link
  await this.clickOnElement(btnMemberPerksGoToWebsite);
  // Wait for document to load before subsequent steps
  await this.page.waitForLoadState('domcontentloaded');
}
// ========================== Assertion Methods ==========================

assertFormsLogoIsDisplayed = async (): Promise<void> => {
  console.log(" - accountResourcesPage.assertFormsLogoIsDisplayed");
  // Confirm that the Forms label is deisplayed in the Forms Panel
  await this.assertElementIsVisible(imgFormsLogoLarge);
}

assertFormsLabelIsDisplayed = async (): Promise<void> => {
  console.log(" - accountResourcesPage.assertFormsLabelIsDisplayed");
  // Confirm that the Forms label is deisplayed in the Forms Panel
  await this.assertElementIsVisible(lblForms);
}

// Confirm URL for Forms page 
assertFormsPageUrl = async (): Promise<void> => {
  console.log(" - accountResourcesPage.assertFormsPageUrl");
  // Confirm the Forms Page URL is reached
  await expect(this.page).toHaveURL(UrlsUtils.legalshieldUrls.forms.url);
  // Wait for document to load before subsequent steps
  await this.page.waitForLoadState('networkidle');
}

assertMemberPerksLogoIsDisplayed= async (): Promise<void> => {
  console.log(" - accountResourcesPage.assertMemberPerksLogoIsDisplayed");
  // Confirm that the Member Perks logo is deisplayed in the Member Perks Panel
  await this.assertElementIsVisible(imgMemberPerksLogoLarge);
}
 
assertMemberPerksLabelIsDisplayed = async (): Promise<void> => {
  console.log(" - accountResourcesPage.assertMemberPerksLabelIsDisplayed");
  // Confirm that the Member Perks label is deisplayed in the Member Perks Panel
  await this.assertElementIsVisible(lblMemberPerks);
}
 
assertMemberPerksPageUrl = async (): Promise<void> => {
  console.log(" - accountResourcesPage.assertMemberPerksPageUrl");
  // Confirm the Member Perks Page URL is reached
  await expect(this.page).toHaveURL(UrlsUtils.memberPerksUrls.login.url);
  // Wait for document to load before subsequent steps
  await this.page.waitForLoadState('networkidle');
}

};
