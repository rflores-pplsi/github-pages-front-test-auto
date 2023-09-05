import { LoginPage } from '../login/login.page';

// Selectors
const LNK_SIGN_IN = '#signedout';

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
    await this.clickOnElement(LNK_SIGN_IN);
    // Wait for page to finish loading
    await this.page.waitForLoadState('load');
  };
}
