import { LoginPage } from '../login/login.page';
/**
 * @export
 * @class AccountResourcesPage
 * @extends {LoginPage}
 */
export declare class AccountResourcesPage extends LoginPage {
    navigateToAccountResourcesPage: () => Promise<void>;
    clickFormsGoToWebsiteLink: () => Promise<void>;
    clickMemberPerksGoToWebsiteLink: () => Promise<void>;
    assertFormsLogoIsDisplayed: () => Promise<void>;
    assertFormsLabelIsDisplayed: () => Promise<void>;
    assertFormsPageUrl: () => Promise<void>;
    assertMemberPerksLogoIsDisplayed: () => Promise<void>;
    assertMemberPerksLabelIsDisplayed: () => Promise<void>;
    assertMemberPerksPageUrl: () => Promise<void>;
}
