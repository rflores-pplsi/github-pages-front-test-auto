import { expect } from '@playwright/test';
import urlsUtils from '../../../utils/urls.utils';
import { ClassicShieldAtWork } from './classic-login.page';

// ========================== Selectors ==================================
const url = urlsUtils.legalshieldUrls.classicShieldAtWork.url;
const BTN_VIEW_GROUP_STATE_OF_ALABAMA = '#franList > tbody > tr:nth-child(1) > td:nth-child(1) > a';
const BTN_REPORTS = '[id="reports"]';
const BTN_SUBMIT = '#submitButton > button';

/**
 *
 *
 * @export
 * @class ClassicShieldAtWorkReportsTab
 * @extends {ClassicShieldAtWork}
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
    await this.clickOnElement(BTN_VIEW_GROUP_STATE_OF_ALABAMA);
  };

  clickReports = async (): Promise<void> => {
    console.log(' - accountClassicShieldAtWorkPage.clickReports');
    // Click on Reports tab
    await this.clickOnElement(BTN_REPORTS);
    await this.page.waitForSelector(BTN_REPORTS);
  };
  // ========================== Assertion Methods ==========================

  assertReportsPage = async (): Promise<void> => {
    console.log(' - accountShieldAtWorkPage.assertReportsPage');
    // Click on View button
    await this.clickViewBtn();
    // Click on Reports tab
    await this.clickReports();
    // Verify that Submit button is enabled on the reports page
    await this.page.waitForSelector(BTN_SUBMIT);
    const locator = this.page.locator(BTN_SUBMIT);
    await expect(locator).toBeEnabled();
  };
}
