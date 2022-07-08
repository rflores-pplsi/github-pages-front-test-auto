import { expect } from '@playwright/test';
import UrlsUtils from '../../utils/urls.utils';
import { LoginPage } from '../login/login.page';
import { PlanRow } from './account.helpers';
import { PlansTable } from './account.helpers';

// ========================== Selectors ==========================
const hdrBody: string = 'h2';

// Instantiations
const plansTable = new PlansTable();

/**
 * @export
 * @class AccountPlansPage
 * @extends {LoginPage}
 */
export class AccountPlansPage extends LoginPage {
  // ========================== Process Methods ==========================

  /**
   * @memberof AccountPlansPage
   */
  createPlansTable = async (): Promise<void> => {
    console.log(' - accountPlansPage.createPlansTable');
    await this.page.waitForLoadState('networkidle', { timeout: 100000 });
    const numberOfPlans = (await this.page.$$('.config-tab.p-5')).length;
    for (let i: number = 0; i < numberOfPlans; i++) {
      const row = await this.createPlanRow(i);
      plansTable.addRow(row);
    }
  };

  /**
   * @param {number} [i=0]
   * @memberof AccountPlansPage
   */
  createPlanRow = async (i: number = 0): Promise<PlanRow> => {
    console.log(' - accountPlansPage.createPlanRow');
    await this.page.waitForLoadState('networkidle');
    const planNameJsHandle = (await this.page.$$('h5.lsux-heading'))[i].getProperty('innerText');
    const planNameText = await (await planNameJsHandle).jsonValue();
    const membersJsHandle = (await this.page.$$('div.config-tab--data p'))[i].getProperty('innerText');
    const membersText = await (await membersJsHandle).jsonValue();
    const websiteLinkLocator = this.page.locator('[type=button]').nth(i);
    const planRow = new PlanRow(planNameText, membersText, websiteLinkLocator);
    return planRow;
  };

  /**
   * @param {PlansTable} plansTable
   * @param {String} planName
   * @memberof AccountPlansPage
   */
  getPlanRowIndexFromPlanName = async (plansTable: PlansTable, planName: String): Promise<number> => {
    const entries = Object.entries(plansTable.planRows);
    // the '!' operator tells TS that I will assign the variable before using, there may be a better implementation
    let planRowIndex!: number;
    for (const entry of entries) {
      if (entry[1].planName == planName) {
        planRowIndex = Number(entry[0]);
      }
    }
    // Throw an error if plan does not exist for this account
    // TODO: add real exception
    if (planRowIndex == null) {
      console.log('ERROR: This account does not have an associated plan of type: ' + planName);
    }
    return planRowIndex;
  };

  // ========================== Navigate Methods ==========================

  loginToNavigateToAccountsPlanPage = async (emailOrUsername: string | undefined, password: string | undefined): Promise<void> => {
    console.log(' - accountPlansPage.loginToNavigateToAccountsPlanPage');
    await this.goTo(UrlsUtils.legalshieldUrls.account.url + '/plans');
    await this.login(emailOrUsername, password);
    await this.page.waitForURL(UrlsUtils.legalshieldUrls.account.url + '/plans?login_redirect=1');
  };

  // ========================== Click Methods ==========================

  /**
   * @param {String} planName
   * @memberof AccountPlansPage
   */
  clickGoToWebsiteLink = async (planName: String): Promise<void> => {
    console.log(' - accountPlansPage.clickGoToWebsiteLink');
    // Click go to website link for the
    const planRowIndex = await this.getPlanRowIndexFromPlanName(plansTable, planName);
    await plansTable.planRows[planRowIndex].websiteLink.click();
  };

  // ========================== Assertion Methods ==========================

  assertBodyHeader = async (expectedHeader: string): Promise<void> => {
    console.log(' - accountPlansPage.assertBodyHeader');
    this.assertElementHasText(hdrBody, expectedHeader);
  };

  assertIdShieldForBusinessPageUrl = async (): Promise<void> => {
    console.log(' - profileAddressPage.assertIdShieldForBusinessPageUrl');
    // Confirm the IDShield For Business Page URL is reached
    await this.assertUrlContains(this.page, 'ids4b');
    // Wait for document to load before subsequent steps
    await this.page.waitForLoadState('domcontentloaded');
  };

  assertLegalPageUrl = async (): Promise<void> => {
    console.log(' - profileAddressPage.assertLegalPageUrl');
    // Confirm the Legal Page URL is reached
    await this.assertUrlContains(this.page, 'legal');
    // Wait for document to load before subsequent steps
    await this.page.waitForLoadState('domcontentloaded');
  };

  assertIdShieldPageUrl = async (): Promise<void> => {
    console.log(' - profileAddressPage.assertIdShieldPageUrl');
    // Confirm the ID Shield Page URL is reached
    await this.assertUrlContains(this.page, 'ids');
    // Wait for document to load before subsequent steps
    await this.page.waitForLoadState('domcontentloaded');
  };

  assertLaunchPageUrl = async (): Promise<void> => {
    console.log(' - profileAddressPage.assertLaunchPageUrl');
    // Confirm the Legal Page URL is reached
    await this.assertUrlContains(this.page, 'mybusiness');
    // Wait for document to load before subsequent steps
    await this.page.waitForLoadState('domcontentloaded');
  };

  // ========================== Assertion Methods ==========================
}
