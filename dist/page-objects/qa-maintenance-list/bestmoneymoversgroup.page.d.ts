import { OktaPage } from '../okta/okta.page';
export declare class BestMoneyMoversGroupPage extends OktaPage {
    selectStateBestMoneyMoversGroupPage: (state: string) => Promise<void>;
    selectFrequencyBestMoneyMoversGroupPage: (frequency: string) => Promise<void>;
    loginBestMoneyMoversGroupPage: () => Promise<void>;
    updateAddressTestingHarnesGroupsPage: (state: string) => Promise<void>;
    navigateToBestMoneyMoversGroupPage: () => Promise<void>;
    clickBtnEnrollNow: () => Promise<void>;
    clickBtnESelectPlan: (plan: string) => Promise<void>;
    assertTestingHarnesGroupsPricingPage: () => Promise<void>;
    assertAvailablePlanTxt: () => Promise<void>;
    assertTellUsAboutYourselfTxt: () => Promise<void>;
}
