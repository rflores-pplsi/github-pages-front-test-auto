import { expect } from '@playwright/test';
import urlsUtils from '../../../utils/urls.utils';
import { ClassicShieldAtWork } from './classic-login.page';

// ========================== Selectors ==================================
const url = urlsUtils.legalshieldUrls.classicShieldAtWork.url;
const BTN_VIEW_GROUP_STATE_OF_ALABAMA = '#franList > tbody > tr:nth-child(1) > td:nth-child(1) > a';
const BTN_ENROLLMENT = '[id="enrollment"]';
const TXT_LAST_NAME_FIRST_NAME = '#ackList > thead > tr > th:nth-child(2)';
const BTN_ENROLL_NEW_MEMBER = '#submitButton > button';
const TXT_ENROLL_NEW_MEMBER = '#form1 > div > div.container.em-container > h2';

/**
 *
 *
 * @export
 * @class ClassicShieldAtWorkEnrollmentTab
 * @extends {ClassicShieldAtWork}
 */
export class ClassicShieldAtWorkEnrollmentTab extends ClassicShieldAtWork {
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

  clickEnrollmentTab = async (): Promise<void> => {
    console.log(' - accountClassicShieldAtWorkPage.clickEnrollmentTab');
    // Click on Enrollment tab
    await this.clickOnElement(BTN_ENROLLMENT);
  };

  clickEnrollNewMemberBtn = async (): Promise<void> => {
    console.log(' - accountClassicShieldAtWorkPage.clickEnrollNewMemberBtn');
    // Click on Enroll new member button
    await this.clickOnElement(BTN_ENROLL_NEW_MEMBER);
  };

  // ========================== Assertion Methods ==========================

  assertMemberList = async (): Promise<void> => {
    console.log(' - accountShieldAtWorkPage.assertMemberList');
    // Click on View button
    await this.clickViewBtn();
    // Click on Enrollment tab
    await this.clickEnrollmentTab();
    // Verify that Member list is displayed on the enrollment page
    const locator = this.page.locator(TXT_LAST_NAME_FIRST_NAME);
    await expect(locator).toContainText('Last Name, First Name');
  };

  assertMemberEnrollmentForm = async (): Promise<void> => {
    console.log(' - accountShieldAtWorkPage.assertMemberEnrollmentForm');
    // Click on View button
    await this.clickViewBtn();
    // Click on Enrollment tab
    await this.clickEnrollmentTab();
    // Click on Enroll new member button
    await this.clickEnrollNewMemberBtn();
    // Verify that member enrollment form is displayed after clicking on Enroll New Member button
    const locator = this.page.locator(TXT_ENROLL_NEW_MEMBER);
    await expect(locator).toContainText('Enroll New Member');
  };
}
