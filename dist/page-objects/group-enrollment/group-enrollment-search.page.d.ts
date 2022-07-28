import { OktaPage } from '../okta/okta.page';
/**
 * @export
 * @class GroupEnrollmentSearchPage
 * @extends {GroupEnrollmentSearchPage}
 */
export declare class GroupEnrollmentSearchPage extends OktaPage {
    searchGroup: () => Promise<void>;
    copyNewGroupURL: () => Promise<void>;
    navigateToGroupEnrollmentGroupURLPage: () => Promise<void>;
    navigateToGroupEnrollmentSearchPage: () => Promise<void>;
    clickBtnEditGroup: () => Promise<void>;
    assertGroupEnrollmentSearchPageSmallBusinessTab: () => Promise<void>;
}
