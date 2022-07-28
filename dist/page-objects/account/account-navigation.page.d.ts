import { LoginPage } from '../login/login.page';
/**
 * * @export
 * @class AccountNavigationPage
 * @extends {LoginPage}
 */
export declare class AccountNavigationPage extends LoginPage {
    loginPage: LoginPage;
    clickPlansLink: () => Promise<void>;
    clickProfileLink: () => Promise<void>;
    clickPaymentsLink: () => Promise<void>;
    clickSecurityLink: () => Promise<void>;
    clickResourcesLink: () => Promise<void>;
    clickPreferencesLink: () => Promise<void>;
    clickMfaLink: () => Promise<void>;
    navigateToAccountPlansPage: () => Promise<void>;
    assertAccountProfileUrl: () => Promise<void>;
    assertAccountPaymentsUrl: () => Promise<void>;
    assertAccountSecurityUrl: () => Promise<void>;
    assertAccountResourcesUrl: () => Promise<void>;
    assertAccountPreferencesUrl: () => Promise<void>;
    assertAccountMultifactorUrl: () => Promise<void>;
    assertAccountPlansUrl: () => Promise<void>;
}
