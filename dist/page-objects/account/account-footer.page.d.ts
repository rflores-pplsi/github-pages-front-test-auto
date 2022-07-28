import { Page } from '@playwright/test';
import { LoginPage } from '../login/login.page';
export declare class AccountFooterPage extends LoginPage {
    clickTermsOfServiceLink: () => Promise<Page>;
    clickPrivacyPolicyLink: () => Promise<void>;
    clickDisclaimerLink: () => Promise<void>;
    assertTermsOfServicePageUrlInNewTab: (newPage: Page) => Promise<void>;
    assertPrivacyPolicyPageUrlInNewTab: () => Promise<Page>;
    assertLegalDisclaimerPageUrlInNewTab: () => Promise<Page>;
}
