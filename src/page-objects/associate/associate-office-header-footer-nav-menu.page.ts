import { expect } from '@playwright/test';
import UrlsUtils from '../../utils/urls.utils';
import { BasePage } from '../base.page';

// ========================== Selectors ==========================
//header
const headerLogo: string = '.fixedheader img.largemediumscreen';
const nameAO: string = '#lsdsTitle';
const helpIcon: string = '#helpButton > img';
const customerSupport: string = '#helpContentCustom > a:nth-child(1) > div';
const supportPhone: string = 'a.lsux-link-content.lsux-link-content';
const downCaret: string = '#downCaret';
const myAccount: string = '#myDropdown > a:nth-child(1) > div';
const signOut: string = '#myDropdown > a:nth-child(3) > div';

//left nav menu
const myTeam: string = '.lsux-navigation :nth-child(1) > div.lsux-link-content';
const reports: string = '.lsux-navigation :nth-child(2) > div';
const allReports: string = '.lsux-navigation :nth-child(3) > div';
const commissions: string = '.lsux-navigation :nth-child(4) > div';
const taxes: string = '.lsux-navigation :nth-child(5) > div';
const resources: string = '.lsux-navigation :nth-child(6) > div';
const messages: string = '.lsux-navigation :nth-child(7) > div';
const compensation: string = '.lsux-navigation :nth-child(8) > div';
const lsAdvantage: string = '.lsux-navigation :nth-child(7) > div';
const associatePerks: string = '.lsux-navigation :nth-child(8) > div';

// footer
const termsOfService: string = "a[href*='terms-service']";
const privacyPolicy: string = '.lsux-footer a:nth-child(2)';
const disclaimer: string = "a[href*='disclaimer']";
const logo: string = '.lsux-footer > span > span'

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

  //Header
  assertHeaderLogoIsDisplayed = async(): Promise<void> => {
  console.log(' - navMenuPage.assertHeaderLogoIsDisplayed');
  await this.assertElementIsVisible(headerLogo);
  };

  assertNameAOIsDisplayed = async(): Promise<void> => {
  console.log(' - navMenuPage.assertNameAOIsDisplayed');
  await this.assertElementIsVisible(nameAO);
  };

  assertHelpIconIsDisplayed = async(): Promise<void> => {
  console.log(' - navMenuPage.assertHelpIconIsDisplayed');
  await this.assertElementIsVisible(helpIcon);
  };

  assertCustomerSupportIsDisplayed = async(): Promise<void> => {
  console.log(' - navMenuPage.assertCustomerSupportIsDisplayed');
  await this.clickOnElement(helpIcon);
  await this.assertElementIsVisible(customerSupport);
  await this.assertElementIsVisible(supportPhone);
  };

  assertSupportPhone = async(): Promise<void> => {
  console.log(' - navMenuPage.assertSupportPhone');
  await this.assertElementHasText(supportPhone, '1-580-436-7424');
  };

  assertDownCaretIsDisplayed = async(): Promise<void> => {
  console.log(' - navMenuPage.assertDownCaretIsDisplayed');
  await this.assertElementIsVisible(downCaret);
  };

  assertMyAccountIsDisplayed = async(): Promise<void> => {
  console.log(' - navMenuPage.assertMyAccountIsDisplayed');
  await this.clickOnElement(downCaret);
  await this.assertElementIsVisible(myAccount);
  };
  
  assertSignOutIsDisplayed = async(): Promise<void> => {
  console.log(' - navMenuPage.assertSignOutIsDisplayed');
  await this.clickOnElement(downCaret);
  await this.assertElementIsVisible(signOut);
  };

// Left Navigation Menu
  assertMyTeamIsDisplayed = async(): Promise<void> => {
  console.log(' - navMenuPage.assertMyTeamIsDisplayed');
  await this.page.waitForSelector(myTeam);
  await this.assertElementIsVisible(myTeam);
  };

  assertReportsIsDisplayed = async(): Promise<void> => {
  console.log(' - navMenuPage.assertReportsIsDisplayed');
  await this.page.waitForSelector(reports);
  await this.assertElementIsVisible(reports);
  };

  assertAllReportsIsDisplayed = async(): Promise<void> => {
  console.log(' - navMenuPage.assertAllReportsIsDisplayed');
  await this.page.waitForSelector(allReports);
  await this.assertElementIsVisible(allReports);
  };

  assertCommissionsIsDisplayed = async(): Promise<void> => {
  console.log(' - navMenuPage.assertCommissionsIsDisplayed');
  await this.page.waitForSelector(commissions);
  await this.assertElementIsVisible(commissions);
  };

  assertTaxesIsDisplayed = async(): Promise<void> => {
  console.log(' - navMenuPage.assertTaxesIsDisplayed');
  await this.page.waitForSelector(taxes);
  await this.assertElementIsVisible(taxes);
  };

  assertResourcesIsDisplayed = async(): Promise<void> => {
  console.log(' - navMenuPage.assertResourcesIsDisplayed');
  await this.page.waitForSelector(resources);
  await this.assertElementIsVisible(resources);
  };

  assertMessagesIsDisplayed = async(): Promise<void> => {
  console.log(' - navMenuPage.assertMessagesIsDisplayed');
  await this.page.waitForSelector(messages);
  await this.assertElementIsVisible(messages);
  };

  assertCompensationIsDisplayed = async(): Promise<void> => {
  console.log(' - navMenuPage.assertCompensationIsDisplayed');
  await this.page.waitForSelector(compensation);
  await this.assertElementIsVisible(compensation);
  };

  assertLSAdvantageIsDisplayed = async(): Promise<void> => {
  console.log(' - navMenuPage.assertLSAdvantageIsDisplayed');
  await this.page.waitForSelector(lsAdvantage);
  await this.assertElementIsVisible(lsAdvantage);
  };

  assertAssociatePerksIsDisplayed = async(): Promise<void> => {
  console.log(' - navMenuPage.assertAssociatePerksIsDisplayed');
  await this.page.waitForSelector(associatePerks);
  await this.assertElementIsVisible(associatePerks);
  };

  //Footer
  assertTermsOfServiceIsDisplayed = async(): Promise<void> => {
  console.log(' - navMenuPage.assertTermsOfServiceIsDisplayed');
  await this.page.waitForSelector(termsOfService);
  await this.assertElementIsVisible(termsOfService);
  };

  assertPrivacyPolicyIsDisplayed = async(): Promise<void> => {
  console.log(' - navMenuPage.assertPrivacyPolicyIsDisplayed');
  await this.assertElementIsVisible(privacyPolicy);
  };

  assertDisclaimerIsDisplayed = async(): Promise<void> => {
  console.log(' - navMenuPage.assertDisclaimerIsDisplayed');
  await this.assertElementIsVisible(disclaimer);
  };

  assertLogoIsDisplayed = async(): Promise<void> => {
  console.log(' - navMenuPage.assertLogoIsDisplayed');
  await this.assertElementIsVisible(logo);
  };
}