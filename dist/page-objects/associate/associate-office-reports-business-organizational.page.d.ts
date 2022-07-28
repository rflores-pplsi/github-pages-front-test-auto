import { LoginPage } from '../login/login.page';
/**
 *
 *
 * @export
 * @class ReportsCommissionsPage
 * @extends {LoginPage}
 */
export declare class ReportsBusinessOrganizationalPage extends LoginPage {
    navigateToReportsBusinessOrganizationalPage: () => Promise<void>;
    clickTxtBoxSearch: () => Promise<void>;
    clickSearchResult: () => Promise<void>;
    clickOnSearchButton: () => Promise<void>;
    /**
     * @param {string} txt
     * @memberof ReportsCommissionsPage
     */
    fillTxtBoxSearch: (txt: string) => Promise<void>;
    assertReportsBusinessOrganizationalPageShow: () => Promise<void>;
    assertPageTitle: () => Promise<void>;
    assertBreadcrumbLinkIsDisplayed: () => Promise<void>;
    assertOrganizationalBusinessReportTaIsDisplayed: () => Promise<void>;
    assertTabPersonalBusinessReportIsDisplayed: () => Promise<void>;
    assertTxaAssociateNumberIsDisplayed: () => Promise<void>;
}
