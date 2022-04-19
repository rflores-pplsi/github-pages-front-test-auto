import { expect } from '@playwright/test';
import urlsUtils from '../../utils/urls.utils';
import { ClassicShieldAtWork } from './classic-login.page';

// ========================== Selectors ==================================
const url = urlsUtils.legalshieldUrls.classicShieldAtWork.url;
const btnView = '#franList > tbody > tr:nth-child(1) > td:nth-child(1) > a';
const btnEnrollment = '[id="enrollment"]';
const txtLastNameFirstName = '#ackList > thead > tr > th:nth-child(2)';
const btnEnrollNewMember = '#submitButton > button';
const txtEnrollNewMember = '#form1 > div > div.container.em-container > h2';

/**
 * @export
 * @class ShieldAtWorkAccountTab
 * @extends {LsWorkLoginPage}
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
    await this.clickOnElement(btnView);
  };

  clickEnrollmentTab = async (): Promise<void> => {
    console.log(' - accountClassicShieldAtWorkPage.clickEnrollmentTab');
    // Click on Enrollment tab
    await this.clickOnElement(btnEnrollment);
  };

  clickEnrollNewMemberBtn = async (): Promise<void> => {
    console.log(' - accountClassicShieldAtWorkPage.clickEnrollNewMemberBtn');
    // Click on Enroll new member button
    await this.clickOnElement(btnEnrollNewMember);
  };

  // ========================== Assertion Methods ==========================

  assertMemberList = async (): Promise<void> => {
    console.log(' - accountShieldAtWorkPage.assertMemberList');
    // Click on View button
    await this.clickViewBtn();
    // Click on Enrollment tab
    await this.clickEnrollmentTab();
    // Verify that Member list is displayed on the enrollment page
    const locator = this.page.locator(txtLastNameFirstName);
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
    const locator = this.page.locator(txtEnrollNewMember);
    await expect(locator).toContainText('Enroll New Member');
  };
}
