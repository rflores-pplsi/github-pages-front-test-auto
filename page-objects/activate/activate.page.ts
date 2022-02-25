import UrlsUtils from '../../utils/urls.utils';
import { LoginPage } from '../login/login.page';
import { expect } from '@playwright/test';

// ========================== Selectors ========================== 

export class ActivatePage extends LoginPage {

// ========================== Selectors ========================== 
// ========================== Process Methods ========================== 
// ========================== Navigate Methods ==========================
// ========================== Click Methods ========================== 
// ========================== Assertion Methods ========================== 

assertActivatePageLoginRedirectUrl = async (): Promise<void> => {
  console.log(" - activatePage.assertActivatePageLoginRedirectUrl");
  // Confirm the Activate Page URL with login redirect is reached
  await expect(this.page).toHaveURL(UrlsUtils.legalshieldUrls.activate.url + '?login_redirect=1');
  // Wait for document to load before subsequent steps
  await this.page.waitForLoadState('domcontentloaded');
}

};