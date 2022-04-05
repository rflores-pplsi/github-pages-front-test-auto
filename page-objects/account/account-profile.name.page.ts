import { expect } from "@playwright/test";
import UrlsUtils from "../../utils/urls.utils";
import { AccountProfilePage } from "./account-profile.page";

// ========================== Selectors ==========================
const txtBoxEditFirstName = "input[name='firstName']";
const txtBoxEditLastName = "input[name='lastName']";
const txtBoxEditMiddleName = "input[name='middleName']";

/**
 * @export
 * @class AccountProfileNamePage
 * @extends {AccountProfilePage}
 */
export class AccountProfileNamePage extends AccountProfilePage {
  // ========================== Process Methods ==========================
  // Edit Name Page text boxes
  editNameForm = async (): Promise<void> => {
    // Edit First Name text box
    await this.editFirstNameTxtBox();
    // Edit Middle Name text box
    await this.editMiddleNameTxtBox();
    // Edit Last Name text box
    await this.editLastNameTxtBox();
  };

  // Edit First Name text box
  editFirstNameTxtBox = async (): Promise<void> => {
    console.log(" - accountProfilePage.editFirstNameTxtBox");
    await this.fillTextBox(txtBoxEditFirstName, "AMTesteditName");
  };
  // Edit Last Name text box
  editLastNameTxtBox = async (): Promise<void> => {
    console.log(" - accountProfilePage.editLastNameTxtBox");
    await this.fillTextBox(txtBoxEditLastName, "TestDEditLastName");
  };
  // Edit Middle Name text box
  editMiddleNameTxtBox = async (): Promise<void> => {
    console.log(" - accountProfilePage.editMiddleNameTxtBox");
    await this.fillTextBox(txtBoxEditMiddleName, "TestEditMiddleName");
  };
  // ========================== Navigate Methods ==========================

  // Navigate to Profile Name page
  navigateToProfileNamePage = async (): Promise<void> => {
    console.log(" - accountProfilePage.goToProfileNamePage");
    await this.navigateToProfilePage();
    await this.clickEditNameButton();
  };
  // ========================== Click Methods ==========================

  // ========================== Assertion Methods ==========================
  assertProfileFirstNamePageUrl = async (): Promise<void> => {
    console.log(" - accountProfilePage.assertProfileFirstNamePageUrl");
    // Confirm the Profile First Name Page URL is reached
    await expect(this.page).toHaveURL(
      UrlsUtils.legalshieldUrls.account.url + "/profile/name"
    );
    // Wait for document to load before subsequent steps
    await this.page.waitForLoadState("domcontentloaded");
  };
}
