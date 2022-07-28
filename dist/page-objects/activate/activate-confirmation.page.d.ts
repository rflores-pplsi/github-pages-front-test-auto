import { LoginPage } from '../login/login.page';
/**
 *
 *
 * @export
 * @class ActivateConfirmationPage
 * @extends {LoginPage}
 */
export declare class ActivateConfirmationPage extends LoginPage {
    clickContinueToYourBenefits: () => Promise<void>;
    assertActivatePageUrl: () => Promise<void>;
    assertOnTheActivateConfirmationPage: () => Promise<void>;
}
