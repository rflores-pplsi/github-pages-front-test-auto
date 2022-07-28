import { LoginPage } from '../login/login.page';
/**
 *
 * @export
 * @class ChannelsHeaderPage
 * @extends
 */
export declare class ReportsCommissionsPage extends LoginPage {
    /**
     * pick month and year from date picker
     * @param {string} year
     * @param {string} month
     * @memberof ReportsCommissionsPage
     */
    selectDateFromSearchDates: (year: string, month: string) => Promise<void>;
    /**
     * select a country from a combo
     * @param {string} country
     * @memberof ReportsCommissionsPage
     */
    selectCountry: (country: string) => Promise<void>;
    navigateToReportsCommissionsPage: () => Promise<void>;
    navigateToReportsCommissionsPage2: () => Promise<void>;
    clickOnSearchDates: () => Promise<void>;
    clickOnCalendarDate: () => Promise<void>;
    clickOnSearchDatesYear: () => Promise<void>;
    clickOnSearchDatesMonth: () => Promise<void>;
    clickOnSearchDatesDay2: () => Promise<void>;
    clickOnSearchDatesDay5: () => Promise<void>;
    clickOnSearchButton: () => Promise<void>;
    clickOnPendingStatements: () => Promise<void>;
    clickOnFastStartStatements: () => Promise<void>;
    clickOnRevenueReportTab: () => Promise<void>;
    assertReportsCommissionsPageShow: () => Promise<void>;
    assertAssociateAddressInfo: () => Promise<void>;
    assertTabAssociateStatementsIsDisplayed: () => Promise<void>;
    assertTabPendingStatementsIsDisplayed: () => Promise<void>;
    assertTabFastStartStatementsIsDisplayed: () => Promise<void>;
    assertTabRevenueReportIsDisplayed: () => Promise<void>;
    assertSearchDatesIsDisplayed: () => Promise<void>;
    assertComboCountryIsEnable: () => Promise<void>;
    assertComboCountryIsDisplayed: () => Promise<void>;
    assertSelectCalculationIsDisplayed: () => Promise<void>;
    assertLblSearchCommissionStatementsIsDisplayed: () => Promise<void>;
    assertBtnSearchIsDisplayed: () => Promise<void>;
    assertAdvancedCommissionIsDisplayed: () => Promise<void>;
    assertEarnedCommissionIsDisplayed: () => Promise<void>;
    assertCommissionAdvanceBalanceIsDisplayed: () => Promise<void>;
    assertComByOrganizationCalculationIsDisplayed: () => Promise<void>;
    assertCommissionAdjustmentsIsDisplayed: () => Promise<void>;
    assertPersonalMembershipsIsDisplayed: () => Promise<void>;
    assertPersonalCancellationsIsDisplayed: () => Promise<void>;
}
