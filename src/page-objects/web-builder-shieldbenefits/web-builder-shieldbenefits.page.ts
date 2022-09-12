import urlsUtils from '../../utils/urls.utils';
import { OktaPage } from '../okta/okta.page';

// ========================== Selectors ==================================

const url: string = urlsUtils.legalshieldUrls.shieldAtWork.url;
const btnViewGroup: string = '.lsux-button.lsux-button--standard.ml-3 > span';
const txtSearch: string = '[placeholder="Search by name or group number"]';
const btnSearch: string = '[id="searchButton"]';
const btnEnrollmentTab: string =
  '#root > div > div > div:nth-child(1) > div > div > div.px-6.pt-4.mb-6.oVjDjW_QqZkyeTOHfYTdP > div.lsux-tab--bar.lsux-tab--stretch.mt-4._1eLFtzcrk-k4lYLgF3dWc1 > div:nth-child(2) > div > a > h4';
const txtGroup: string = '#root  .lsux-container--flex-items-center.mb-2 > h3';
const btnManageSite: string = '.lsux-container.lsux-container--white div > h2 > button > span';
const txtNonNatTest48: string = '.lsux-heading.lsux-heading--t26';
const btnSave: string = '#root > div > div.lsux-content > div > div.lsux-grid > div > div > div:nth-child(2) > div > div > form > div:nth-child(1) > div > button > span';

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

  
  // ========================== Navigate Methods ===========================

  navigateToGroupPage = async (groupNumber: String): Promise<void> => {
    console.log(' - WebBuilderShieldBenefits.navigateToGroupPage');
    await this.page.goto(url);
    // Login through okta
    await this.loginThroughOktaGroupEnrollment();
    // Search group by group number
    await this.groupSearchByGroupNumber('111452');
    // Click on View group button
    await this.clickViewGroup();
  };

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

  assertNonNatTest48IsVisible = async (): Promise<void> => {
    console.log(' - WebBuilderShieldBenefits.assertManageSiteButtonIsVisible');
    // Verify that Manage site button is displayed on the enrollment page
    await this.assertElementIsVisible(txtNonNatTest48);
  };

  
}
