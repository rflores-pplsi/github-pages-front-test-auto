import { OktaPage } from '../okta/okta.page';
export declare class PrimericaGroupPage extends OktaPage {
    fillAgentID: (id: string) => Promise<void>;
    selectlanguageAndRegion: (language: number) => Promise<void>;
    selectStateOrProvince: (state: string) => Promise<void>;
    loginBestMoneyMoversGroupPage: () => Promise<void>;
    navigateToPrimericaGroupPage: () => Promise<void>;
    clickSubmitBtn: () => Promise<void>;
    clickGetStartedBtn: () => Promise<void>;
    clickSelectYourPlanLnk: () => Promise<void>;
    clickAddToCartBtn: () => Promise<void>;
    clickContactInfoBtn: () => Promise<void>;
    assertRepresentativeLbl: (rep: string) => Promise<void>;
    assertCheckoutURL: () => Promise<void>;
}
