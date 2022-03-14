import UrlsUtils from '../../utils/urls.utils';
import { LoginPage } from '../login/login.page';
import { expect } from '@playwright/test';

// ========================== Selectors ========================== 
let stpConfirm : string = '//div[contains(@class, "step-container") and contains(.,"Confirm")]//div[contains(@class,"step-circle--current")]';
let btnContinueToYourBenefits : string = 'button:has-text("Continue to your benefits")';

export class ActivateConfirmationPage extends LoginPage {

// ========================== Selectors ========================== 
// ========================== Process Methods ========================== 
// ========================== Navigate Methods ==========================
// ========================== Click Methods ========================== 

clickContinueToYourBenefits = async (): Promise<void> => {
  console.log(" - activateEnterCodePage.clickDontKnowCodeLink");
  await this.clickOnElement(btnContinueToYourBenefits);
}
// ========================== Assertion Methods ========================== 

assertActivatePageUrl = async (): Promise<void> => {
  console.log(" - activateEnterCodePage.assertActivatePageUrl");
  // Confirm the Activate Page URL with login redirect is reached
  await expect(this.page).toHaveURL(UrlsUtils.legalshieldUrls.activate.url);
  // Wait for document to load before subsequent steps
  await this.page.waitForLoadState('domcontentloaded');
}

assertOnTheActivateConfirmationPage = async (): Promise<void> => {
  console.log(" - activateEnterCodePage.assertOnTheActivateConfirmationPage");
  // Confirm Stepper displays Step 3 Confirm as current step 
  await this.assertElementIsVisible(stpConfirm);
}

};