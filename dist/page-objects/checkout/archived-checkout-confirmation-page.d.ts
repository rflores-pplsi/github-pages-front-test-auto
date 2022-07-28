import { OktaPage } from '../okta/okta.page';
export declare class CheckoutConfirmationPage extends OktaPage {
    getEnv(): string;
    checkoutLegalShieldLoginPage: () => Promise<void>;
    selectYourRegionMenu: () => Promise<void>;
    navigateToLaunch: () => Promise<void>;
    clickStartYourBusiness: () => Promise<void>;
    clickUpdateRegionBtn: () => Promise<void>;
    assertWelcomeText: () => Promise<void>;
}
