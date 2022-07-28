import { OktaPage } from '../okta/okta.page';
export declare class EnglishWalsUSPage extends OktaPage {
    filloutContactInformationForm: (state: string, email: string, firstName: string, lastName: string) => Promise<void>;
    changeStateinformation: (state: string) => Promise<void>;
    loginBestMoneyMoversGroupPage: () => Promise<void>;
    navigateToEnglishWalsUSPage: () => Promise<void>;
    clickBecomeAssociateBtn: () => Promise<void>;
    clickGetStartedBtn: () => Promise<void>;
    selectHomeBusinessSupplement: () => Promise<void>;
    clickNextBtn: () => Promise<void>;
    clickIndividualChkBox: () => Promise<void>;
    clickNextWithFormBtn: () => Promise<void>;
    clickNoChkBox: () => Promise<void>;
    clickContinueBtn: () => Promise<void>;
    clickCheckoutBtn: () => Promise<void>;
    assertContactInformationTxt: () => Promise<void>;
}
