import { LoginPage } from '../login/login.page';
import { PlanRow } from './account.helpers';
import { PlansTable } from './account.helpers';
/**
 * @export
 * @class AccountPlansPage
 * @extends {LoginPage}
 */
export declare class AccountPlansPage extends LoginPage {
    /**
     * @memberof AccountPlansPage
     */
    createPlansTable: () => Promise<void>;
    /**
     * @param {number} [i=0]
     * @memberof AccountPlansPage
     */
    createPlanRow: (i?: number) => Promise<PlanRow>;
    /**
     * @param {PlansTable} plansTable
     * @param {String} planName
     * @memberof AccountPlansPage
     */
    getPlanRowIndexFromPlanName: (plansTable: PlansTable, planName: String) => Promise<number>;
    loginToNavigateToAccountsPlanPage: (emailOrUsername: string | undefined, password: string | undefined) => Promise<void>;
    /**
     * @param {String} planName
     * @memberof AccountPlansPage
     */
    clickGoToWebsiteLink: (planName: String) => Promise<void>;
    assertBodyHeader: (expectedHeader: string) => Promise<void>;
    assertIdShieldForBusinessPageUrl: () => Promise<void>;
    assertLegalPageUrl: () => Promise<void>;
    assertIdShieldPageUrl: () => Promise<void>;
    assertLaunchPageUrl: () => Promise<void>;
}
