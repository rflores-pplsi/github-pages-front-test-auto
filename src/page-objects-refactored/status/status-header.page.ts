import { LoginPage } from '../login/login.page';

// Selectors
const lnkSignIn: string = '#signedout';

/**
 * @export
 * @class StatusHeaderPage
 * @extends {LoginPage}
 */
export class StatusHeaderPage extends LoginPage {
  // Click Methods

  clickSignIn = async (): Promise<void> => {
    console.log(' - statusHeaderPage.clickSignIn');
    // Click on Sign In link
    await this.clickOnElement(lnkSignIn);
    // Wait for page to finish loading
    await this.page.waitForLoadState('load');
  };
}
