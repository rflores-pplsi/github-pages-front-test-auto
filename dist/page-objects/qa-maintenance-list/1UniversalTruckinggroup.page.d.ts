import { OktaPage } from '../okta/okta.page';
export declare class UniversalTruckingPage extends OktaPage {
    selectStateUniversalTruckingPage: (state: string) => Promise<void>;
    selectlanguage: (language: string) => Promise<void>;
    loginBestMoneyMoversGroupPage: () => Promise<void>;
    updateAddressTestingHarnesGroupsPage: (state: string) => Promise<void>;
    navigateTo1UniversalTruckingGroupPage: () => Promise<void>;
    clickTabSigningUp: () => Promise<void>;
    clickBtnESelect: () => Promise<void>;
    clickBtnSelectPlan: (plan: string) => Promise<void>;
    clickBtnCoordonnées: () => Promise<void>;
    assertW3Url: () => Promise<void>;
    assertAvailablePlanTxt: () => Promise<void>;
    assertTellUsAboutYourselfTxt: () => Promise<void>;
    assertSelectedPlanAndParMoiTxt: () => Promise<void>;
    assertParMoiTxt: () => Promise<void>;
}
