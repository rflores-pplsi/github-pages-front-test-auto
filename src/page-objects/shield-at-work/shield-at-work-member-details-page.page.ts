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
const btnMemberName: string = '#root  div:nth-child(2) > div:nth-child(3) ';
const txtMemberInformation: string =
  '#root  div:nth-child(2) > div.lsux-container.lsux-container--flexbox.lsux-container--flex-justify-space-between h3';
const txtFamily: string = '#root div:nth-child(4) > div.mb-4._2nNbq5j54sbQ6MAihmSQg3 h3';

/**
 * @export
 * @class  ShieldAtWorkMemberDetailsPage
 * @extends {LsWorkLoginPage}
 */
export class ShieldAtWorkMemberDetailsPage extends OktaPage {
  /**
   *
   *
   * @param {string} group
   * @memberof  ShieldAtWorkMemberDetailsPage
   */
  groupSearchByGroupNumber = async (group: string): Promise<void> => {
    console.log(' -  ShieldAtWorkMemberDetailsPage.groupSearchByGroupNumber');
    // Type in the search field the group number
    await this.page.fill(txtSearch, group);
    // Click on search button
    await this.clickOnElement(btnSearch);
    // Wait for the group name is displayed
    await this.page.waitForSelector(txtGroup);
  };

  // ========================== Click Methods ==============================

  clickViewGroup = async (): Promise<void> => {
    console.log(' - ShieldAtWorkMemberDetailsPage.clickViewGroup');
    // Click on View Group button
    await this.clickOnElement(btnViewGroup);
  };

  clickEnrollmentTab = async (): Promise<void> => {
    console.log(' -  ShieldAtWorkMemberDetailsPage.clickEnrollmentTab');
    // Click on Enrollment tab
    await this.clickOnElement(btnEnrollmentTab);
  };

  clickMemberName = async (): Promise<void> => {
    console.log(' -  ShieldAtWorkMemberDetailsPage.clickMemberName');
    // Click on Member name
    await this.clickOnElement(btnMemberName);
  };

  // ========================== Navigate Methods ===========================

  /**
   *
   *
   * @param {String} groupNumber
   * @memberof ShieldAtWorkAccountTab
   */
  navigateToGroupPage = async (groupNumber: String): Promise<void> => {
    console.log(' - ShieldAtWorkMemberDetailsPage.navigateToGroupPage');
    await this.page.goto(url);
    // Login through okta
    await this.loginThroughOktaGroupEnrollment();
    // Search group by group number
    await this.groupSearchByGroupNumber('111452');
    // Click on View group button
    await this.clickViewGroup();
  };

  // ========================== Assertion Methods ==========================

  assertMemberInformationIsDisplayed = async (): Promise<void> => {
    console.log(' - ShieldAtWorkMemberDetailsPage.assertMemberInformationIsDisplayed');
    // Confirm clicking on member name redirects to the member details page
    await this.page.waitForLoadState('networkidle');
    await this.assertElementIsVisible(txtMemberInformation);
  };

  assertErrorMessageIsDisplayed = async (): Promise<void> => {
    console.log(' - ShieldAtWorkMemberDetailsPage.assertErrorMessageIsDisplayed');
    // Confirm error message is displayed for family section on the member details page
    await this.page.waitForSelector(txtFamily);
    const errorMessage = 'There are no family members to display.';
    await this.assertElementHasText(txtFamily, errorMessage);
  };
}
