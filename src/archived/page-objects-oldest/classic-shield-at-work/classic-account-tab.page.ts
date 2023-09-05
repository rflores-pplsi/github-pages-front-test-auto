import { expect } from '@playwright/test';
import urlsUtils from '../../../utils/urls.utils';
import { ClassicShieldAtWork } from './classic-login.page';

// ========================== Selectors ==================================
const url = urlsUtils.legalshieldUrls.classicShieldAtWork.url;
const BTN_VIEW_GROUP_STATE_OF_ALABAMA = '#franList > tbody > tr:nth-child(1) > td:nth-child(1) > a';
const BTN_MENU = '[id="header-menu-button"]';
const BTN_SECURITY = '#dropdownRightId > a:nth-child(2) > div';
const TXT_SECURITY = 'body > div > div.content > div > div:nth-child(1)';
const BTN_EDIT_EMPLOYEE = 'div:nth-child(2) > #submitButton > .lsux-button';
const TXT_NUMBER_OF_EMPLOYEES = '[class="nfSpacerW230"]';

/**
 *
 *
 * @export
 * @class ClassicShieldAtWorkAccountTab
 * @extends {ClassicShieldAtWork}
 */
export class ClassicShieldAtWorkAccountTab extends ClassicShieldAtWork {
  // ========================== Process Methods ============================

  navigateToClassicShieldAtWork = async (): Promise<void> => {
    console.log(' - accountClassicShieldAtWorkPage.navigateToClassicShieldAtWork');
    await this.page.goto(url);
  };

  // ========================== Click Methods ==============================

  clickViewBtn = async (): Promise<void> => {
    console.log(' - accountClassicShieldAtWorkPage.clickViewBtn');
    // Click on View Group button
    await this.clickOnElement(BTN_VIEW_GROUP_STATE_OF_ALABAMA);
  };

  clickMenuBtn = async (): Promise<void> => {
    console.log(' - accountClassicShieldAtWorkPage.clickMenuBtn');
    // Click on Menu button
    await this.clickOnElement(BTN_MENU);
  };

  clickSecurityBtn = async (): Promise<void> => {
    console.log(' - accountClassicShieldAtWorkPage.clickSecurityBtn');
    // Click on Security button
    await this.clickOnElement(BTN_SECURITY);
  };

  clickEditEmployeeBtn = async (): Promise<void> => {
    console.log(' - accountClassicShieldAtWorkPage.clickSecurityBtn');
    // Click on Edit Employee button
    await this.clickOnElement(BTN_EDIT_EMPLOYEE);
  };

  // ========================== Assertion Methods ==========================

  assertSecurityPage = async (): Promise<void> => {
    console.log(' - accountShieldAtWorkPage.assertSecurityPage');
    // Click on View button
    await this.clickViewBtn();
    // Click on Menu button
    await this.clickMenuBtn();
    // Click on Security button
    await this.clickSecurityBtn();
    // Verify that Security page is displayed on the account tab
    const locator = this.page.locator(TXT_SECURITY);
    await expect(locator).toContainText('Security');
  };

  assertEditEmployeePage = async (): Promise<void> => {
    console.log(' - accountShieldAtWorkPage.assertEditEmployeePage');
    // Click on View button
    await this.clickViewBtn();
    // Click on Edit Employee button
    await this.clickEditEmployeeBtn();
    // Verify that Edit Employee button redirects to the correct page to update the number of employees
    const locator = this.page.locator(TXT_NUMBER_OF_EMPLOYEES);
    await expect(locator).toContainText('Number of Employees: ');
  };
}
