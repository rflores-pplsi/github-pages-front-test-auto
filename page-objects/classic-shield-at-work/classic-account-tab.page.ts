import { expect } from '@playwright/test';
import urlsUtils from '../../utils/urls.utils';
import { ClassicShieldAtWork } from './classic-login.page';

// ========================== Selectors ==================================
const url = urlsUtils.legalshieldUrls.classicShieldAtWork.url;
const btnView = '#franList > tbody > tr:nth-child(1) > td:nth-child(1) > a';
const btnMenu = '[id="header-menu-button"]';
const btnSecurity = '#dropdownRightId > a:nth-child(2) > div';
const txtSecurity = 'body > div > div.content > div > div:nth-child(1)';
const btnEditEmployee = 'div:nth-child(2) > #submitButton > .lsux-button';
const txtNumberOfEmployees = '[class="nfSpacerW230"]';

/**
 * @export
 * @class ShieldAtWorkAccountTab
 * @extends {LsWorkLoginPage}
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
    await this.clickOnElement(btnView);
  };

  clickMenuBtn = async (): Promise<void> => {
    console.log(' - accountClassicShieldAtWorkPage.clickMenuBtn');
    // Click on Menu button
    await this.clickOnElement(btnMenu);
  };

  clickSecurityBtn = async (): Promise<void> => {
    console.log(' - accountClassicShieldAtWorkPage.clickSecurityBtn');
    // Click on Security button
    await this.clickOnElement(btnSecurity);
  };

  clickEditEmployeeBtn = async (): Promise<void> => {
    console.log(' - accountClassicShieldAtWorkPage.clickSecurityBtn');
    // Click on Edit Employee button
    await this.clickOnElement(btnEditEmployee);
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
    const locator = this.page.locator(txtSecurity);
    await expect(locator).toContainText('Security');
  };

  assertEditEmployeePage = async (): Promise<void> => {
    console.log(' - accountShieldAtWorkPage.assertEditEmployeePage');
    // Click on View button
    await this.clickViewBtn();
    // Click on Edit Employee button
    await this.clickEditEmployeeBtn();
    // Verify that Edit Employee button redirects to the correct page to update the number of employees
    const locator = this.page.locator(txtNumberOfEmployees);
    await expect(locator).toContainText('Number of Employees: ');
  };
}
