import { expect } from '@playwright/test';
import { LoginPage } from './login.page';
import UrlsUtils from '../../utils/urls.utils';

// ========================== Selectors ==========================
const imgLargeLogo: string = '#lsdsLargeLogoId';
const btnHelp: string = '#helpButton';
const btnMarketSelect: string = '#openDropdownRightButtonId';
const ddUnitedStateEnglishOption: string = 'a[onclick*=en-US]';
const ddUnitedStateSpanishOption: string = 'a[onclick*=es-US]';
const ddCanadaEnglishOption: string = 'a[onclick*=en-CA]';
const ddCanadaFrenchOption: string = 'a[onclick*=fr-CA]';
const ddHelp: string = '#helpDropdown';

/**
 * @export
 * @class LoginHeaderPage
 * @extends {LoginPage}
 */
export class LoginHeaderPage extends LoginPage {
  // ========================== Page Instances ==========================

  // ========================== Process Methods ==========================

  // Change market to English - United States
  changeMarketToEnUs = async (): Promise<void> => {
    console.log(' - loginHeaderPage.changeMarketToEnUs');
    // Click on Market Select button to expand dropdown
    await this.clickOnElement(btnMarketSelect);
    // Select Market from option list
    await this.clickOnElement(ddUnitedStateEnglishOption);
    // Wait for document to load before subsequent steps
    await this.page.waitForLoadState('domcontentloaded');
  };

  // Change market to Spanish - United States
  changeMarketToEsUS = async (): Promise<void> => {
    console.log(' - loginHeaderPage.changeMarketToEsUS');
    // Click on Market Select button to expand dropdown
    await this.clickOnElement(btnMarketSelect);
    // Select Market from option list
    await this.clickOnElement(ddUnitedStateSpanishOption);
    // Wait for document to load before subsequent steps
    await this.page.waitForLoadState('domcontentloaded');
  };

  // Change market to English - Canada
  changeMarketToEnCa = async (): Promise<void> => {
    console.log(' - loginHeaderPage.changeMarketToEnCa');
    // Click on Market Select button to expand dropdown
    await this.clickOnElement(btnMarketSelect);
    // Select Market from option list
    await this.clickOnElement(ddCanadaEnglishOption);
    // Wait for document to load before subsequent steps
    await this.page.waitForLoadState('domcontentloaded');
  };

  // Change market to French - Canada
  changeMarketToFrCa = async (): Promise<void> => {
    console.log(' - loginHeaderPage.changeMarketToFrCa');
    // Click on Market Select button to expand dropdown
    await this.clickOnElement(btnMarketSelect);
    // Select Market from option list
    await this.clickOnElement(ddCanadaFrenchOption);
    // Wait for document to load before subsequent steps
    await this.page.waitForLoadState('domcontentloaded');
  };

  // ========================== Click Methods ==========================

  clickPplsiLogo = async (): Promise<void> => {
    console.log(' - loginHeaderPage.clickPplsiLogo');
    // Click on the PPLSI logo
    await this.clickOnElement(imgLargeLogo);
  };

  clickHelpButton = async (): Promise<void> => {
    console.log(' - loginHeaderPage.clickHelpButton');
    // Click on the Help Button
    await this.clickOnElement(btnHelp);
  };

  // ========================== Navigate Methods ==========================

  // Navigate to Login page to access the Login Header
  navigateToLoginPage = async (): Promise<void> => {
    console.log(' - loginHeaderPage.navigateToLoginPage');
    // Goto Login Page URL
    await this.goTo(UrlsUtils.legalshieldUrls.login.url);
  };

  // ========================== Assertion Methods ==========================

  // Market Selection button should have text United States - English
  assertMarketIsUnitedStatesEnglish = async (): Promise<void> => {
    console.log(' - loginHeaderPage.assertMarketIsUnitedStatesEnglish');
    // Confirm the Market Selection button has the text for United States - English
    await this.assertElementHasText(btnMarketSelect, 'United States - English');
  };

  // Market Selection button should have text United States - English
  assertMarketIsEstadosUnidosEspanol = async (): Promise<void> => {
    console.log(' - loginHeaderPage.assertMarketIsEstadosUnidosEspanol');
    // Confirm the Market Selection button has the text for Estados Unidos - Español
    await this.assertElementHasText(btnMarketSelect, 'Estados Unidos - Español');
  };

  // Market Selection button should have text United States - English
  assertMarketIsCanadaEnglish = async (): Promise<void> => {
    console.log(' - loginHeaderPage.assertMarketIsCanadaEnglish');
    // Confirm the Market Selection button has the text for Canada - English
    await this.assertElementHasText(btnMarketSelect, 'Canada - English');
  };

  // Market Selection button should have text United States - English
  assertMarketIsCanadaFrench = async (): Promise<void> => {
    console.log(' - loginHeaderPage.assertMarketIsCanadaFrench');
    // Confirm the Market Selection button has the text for Canada - Français
    await this.assertElementHasText(btnMarketSelect, 'Canada - Français');
  };

  // Confirm URL for PPLSI page
  assertPplsiUrl = async (): Promise<void> => {
    console.log(' - loginHeaderPage.assertPplsiUrl');
    // Confirm the PPLSI Page URL is reached
    await expect(this.page).toHaveURL(UrlsUtils.pplsiUrls.home.url);
    // Wait for document to load before subsequent steps
    await this.page.waitForLoadState('networkidle');
  };

  // Confirm Sales/Service and Associate Support numbers displayed on Help Dropdown
  assertSupportNumbersInHelpDropdown = async (): Promise<void> => {
    console.log(' - loginHeaderPage.assertSupportNumbersInHelpDropdown');
    // Confirm the Sales and Customer Service phone number is displayed
    await this.assertElementContainsText(ddHelp, '800-654-7757');
    // Confirm the Associate Support phone number is displayed
    await this.assertElementContainsText(ddHelp, '580-436-7424');
  };
}
