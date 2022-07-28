import { OktaPage } from '../okta/okta.page';
/**
 * @export
 * @class GroupEnrollmentSmallBusinessPage
 * @extends {GroupEnrollmentSmallBusinessPage}
 */
export declare class GroupEnrollmentSmallBusinessPage extends OktaPage {
    searchGroup: () => Promise<void>;
    searchLawFirm: () => Promise<void>;
    copyNewGroupURL: () => Promise<void>;
    navigateToGroupEnrollmentGroupURLPage: () => Promise<void>;
    navigateToGroupEnrollmentSearchPage: () => Promise<void>;
    navigateToGroupEnrollmentSmallBusinessPage: () => Promise<void>;
    clickBtnEditGroup: () => Promise<void>;
    clickBtnSignIn: () => Promise<void>;
    clickAppStoreLink: () => Promise<void>;
    clickBtnBackToTop: () => Promise<void>;
    assertGroupEnrollmentSearchPageSmallBusinessTab: () => Promise<void>;
    assertAccountsV2Url: () => Promise<void>;
    assertLawFirmInformation: () => Promise<void>;
    assertAppStoreUrl: () => Promise<void>;
}
