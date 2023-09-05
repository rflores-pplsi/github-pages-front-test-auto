import { expect } from '@playwright/test';
import UrlsUtils from '../../../utils/urls.utils';
import { AccountProfilePage } from './account-profile.page';

// ========================== Selectors ==========================
const TXT_BOX_EDIT_DATE_OF_BIRTH = "input[name='birthDate']";
const BTN_SAVE = 'button:has-text("Save")';

/**
 * @export
 * @class AccountProfileDoBPage
 * @extends {AccountProfilePage}
 */
export class AccountProfileDoBPage extends AccountProfilePage {
  // ========================== Process Methods ==========================

  // Edit First Name text box
  editDateOfBirthTxtBox = async (): Promise<void> => {
    console.log(' - accountProfileDoBPage.editDateOfBirthTxtBox');
    // Update the date of birth text box
    await this.typeTextBox(TXT_BOX_EDIT_DATE_OF_BIRTH, '10301990');
    await this.page.press('[placeholder="Date\\ of\\ birth"]', 'Tab');
  };

  // ========================== Navigate Methods ==========================

  navigateProfileDateOfBirthPage = async (): Promise<void> => {
    console.log(' - accountProfileDoBPage.navigateProfileDateOfBirthPage');
    // navigate Profile page
    await this.navigateToProfilePage();
    // Click on Date of Birth page edit button
    await this.clickEditDateOfBirthButton();
  };

  // ========================== Click Methods ==========================

  clickSaveDateOfBirthButton = async (): Promise<void> => {
    console.log(' - accountProfileDoBPage.clickSaveDateOfBirthButton');
    // Click on save button
    await this.clickOnElement(BTN_SAVE);
  };

  // ========================== Assertion Methods ==========================
  assertDateOfBirthOnProfileDOBPage = async (): Promise<void> => {
    console.log(' - accountProfileDoBPage.assertDateOfBirthOnProfileDOBPage');
    // Click on Edit date of birth button
    await this.clickEditDateOfBirthButton();
    // Confirm the Profile Date of Birth text box is updated
    await this.page.waitForSelector(TXT_BOX_EDIT_DATE_OF_BIRTH);
    const updatedDoB = await this.page.locator(TXT_BOX_EDIT_DATE_OF_BIRTH).getAttribute('value');
    expect(updatedDoB).toBe('1990-10-30');
    await expect(this.page).toHaveURL(UrlsUtils.legalshieldUrls.accounts.url + '/profile/birth');
    // Wait for document to load before subsequent steps
    await this.page.waitForLoadState('domcontentloaded');
  };
}
