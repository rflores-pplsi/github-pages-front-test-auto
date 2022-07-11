import { expect } from '@playwright/test';
import urlsUtils from '../../utils/urls.utils';
import { ClassicShieldAtWork } from './classic-login.page';

// ========================== Selectors ==================================
const url = urlsUtils.legalshieldUrls.classicShieldAtWork.url;
const btnViewGroupStateOfAlabama = '#franList > tbody > tr:nth-child(1) > td:nth-child(1) > a';
const btnReports = '[id="reports"]';
const btnSubmit = '#submitButton > button';

/**
 * @export
 * @class ClassicShieldAtWorkReportsTab
 * @extends {LsWorkLoginPage}
 */
export class ClassicShieldAtWorkReportsTab extends ClassicShieldAtWork {
  // ========================== Process Methods ============================

  navigateToClassicShieldAtWork = async (): Promise<void> => {
    console.log(' - accountClassicShieldAtWorkPage.navigateToClassicShieldAtWork');
    await this.page.goto(url);
  };

  // ========================== Click Methods ==============================

  clickViewBtn = async (): Promise<void> => {
    console.log(' - accountClassicShieldAtWorkPage.clickViewBtn');
    // Click on View Group button
    await this.clickOnElement(btnViewGroupStateOfAlabama);
  };

  clickReports = async (): Promise<void> => {
    console.log(' - accountClassicShieldAtWorkPage.clickReports');
    // Click on Reports tab
    await this.clickOnElement(btnReports);
    await this.page.waitForSelector(btnReports);
  };
  // ========================== Assertion Methods ==========================

  assertReportsPage = async (): Promise<void> => {
    console.log(' - accountShieldAtWorkPage.assertReportsPage');
    // Click on View button
    await this.clickViewBtn();
    // Click on Reports tab
    await this.clickReports();
    // Verify that Submit button is enabled on the reports page
    await this.page.waitForSelector(btnSubmit);
    const locator = this.page.locator(btnSubmit);
    await expect(locator).toBeEnabled();
  };
}
