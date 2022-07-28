import { CheckoutOrderSummaryComponent } from './checkout-order-summary.component';
/**
 * @export
 * @class CheckoutPersonalInfoPage
 * @extends {LoginPage}
 */
export declare class CheckoutPersonalInfoPage extends CheckoutOrderSummaryComponent {
    [x: string]: any;
    /**
     *
     *
     * @param {string} state
     * @param {string} paymentFrequency
     * @param {string} planName
     * @param {string} tierName
     * @memberof CheckoutPersonalInfoPage
     */
    selectPlanFromShieldBenefitsPricingPage: (state: string, paymentFrequency: string, planName: string, tierName: string) => Promise<void>;
    /**
     * @param {string} state
     * @param {string} planName
     * @param {string} tierName
     * @memberof CheckoutPersonalInfoPage
     */
    selectPlanWithoutPaymentFrequencyFromShieldBenefitsPricingPage: (state: string, planName: string, tierName: string) => Promise<void>;
    /**
     * @param {string} state
     * @param {string} paymentFrequency
     * @param {string} planName1
     * @param {string} planName2
     * @memberof CheckoutPersonalInfoPage
     */
    selectCombinationPlanFromShieldBenefitsPricingPage: (state: string, paymentFrequency: string, planName1: string, planName2: string) => Promise<void>;
    /**
     * @param {string} firstName
     * @param {string} lastName
     * @param {string} phone
     * @param {string} type
     * @param {string} homeAddress
     * @param {string} city
     * @param {string} postalCode
     * @memberof CheckoutPersonalInfoPage
     */
    completePersonalInfoForm: (firstName: string, lastName: string, phone: string, type: string, homeAddress: string, city: string, postalCode: string) => Promise<void>;
    completeBusinessInfoForm: () => Promise<void>;
    /**
     * @param {string} homeAddress
     * @param {string} city
     * @param {string} postalCode
     * @memberof CheckoutPersonalInfoPage
     */
    changeAddress: (homeAddress: string, city: string, postalCode: string) => Promise<void>;
    changeAddressCanada: (provinceName: string) => Promise<void>;
    changeAddressUs: (regionName: string) => Promise<void>;
    /**
     * @param {string} firstName
     * @memberof CheckoutPersonalInfoPage
     */
    enterFirstName: (firstName: string) => Promise<void>;
    /**
     * @param {string} lastName
     * @memberof CheckoutPersonalInfoPage
     */
    enterLastName: (lastName: string) => Promise<void>;
    /**
     * @param {string} phoneNumber
     * @memberof CheckoutPersonalInfoPage
     */
    enterPhoneNumber: (phoneNumber: string) => Promise<void>;
    /**
     * @param {string} phoneType
     * @memberof CheckoutPersonalInfoPage
     */
    enterPhoneType: (phoneType: string) => Promise<void>;
    /**
     * @param {string} homeAddress
     * @memberof CheckoutPersonalInfoPage
     */
    enterHomeAddress: (homeAddress: string) => Promise<void>;
    /**
     * @param {string} city
     * @memberof CheckoutPersonalInfoPage
     */
    enterCity: (city: string) => Promise<void>;
    /**
     * @param {string} postalCode
     * @memberof CheckoutPersonalInfoPage
     */
    enterPostalCode: (postalCode: string) => Promise<void>;
    /**
     * @memberof CheckoutPersonalInfoPage
     */
    hoverInformationIcon: () => Promise<void>;
    /**
     * @param {string} month
     * @memberof CheckoutPersonalInfoPage
     */
    enterMonth: (month: string) => Promise<void>;
    /**
     * @param {string} day
     * @memberof CheckoutPersonalInfoPage
     */
    enterDay: (day: string) => Promise<void>;
    /**
     * @param {string} year
     * @memberof CheckoutPersonalInfoPage
     */
    enterYear: (year: string) => Promise<void>;
    /**
     * @param {string} socialSecurityNumber
     * @memberof CheckoutPersonalInfoPage
     */
    enterSocialSecurityNumber: (socialSecurityNumber: string) => Promise<void>;
    /**
     * @param {string} businessName
     * @memberof CheckoutPersonalInfoPage
     */
    enterBusinessName: (businessName: string) => Promise<void>;
    /**
     * @param {string} Month
     * @memberof CheckoutPersonalInfoPage
     */
    enterIncorporationMonth: (Month: string) => Promise<void>;
    /**
     * @param {string} day
     * @memberof CheckoutPersonalInfoPage
     */
    enterIncorporationDay: (day: string) => Promise<void>;
    /**
     * @param {string} Year
     * @memberof CheckoutPersonalInfoPage
     */
    enterIncorporationYear: (Year: string) => Promise<void>;
    /**
     * @param {string} taxId
     * @memberof CheckoutPersonalInfoPage
     */
    enterTaxId: (taxId: string) => Promise<void>;
    /**
     * @memberof CheckoutPersonalInfoPage
     */
    clearAllFieldsOnPersonalInfoPageAndSave: () => Promise<void>;
    /**
     * @memberof CheckoutPersonalInfoPageSecurityInfo
     */
    clearAllFieldsInSecurityInfoSectionPersonalInfoPage: () => Promise<void>;
    /**
     * @param {(string | undefined)} emailOrUsername
     * @param {(string | undefined)} password
     * @param {string} groupNumber
     * @param {string} groupPayConfig
     * @param {string} stateName
     * @param {string} payTerm
     * @param {string} planName
     * @param {string} tierName
     * @param {string} street
     * @param {string} city
     * @param {string} postalCode
     * @memberof CheckoutPersonalInfoPage
     */
    navigateToPersonalInfoPageSinglePlan: (emailOrUsername: string | undefined, password: string | undefined, groupNumber: string, groupPayConfig: string, stateName: string, payTerm: string, planName: string, tierName: string, street: string, city: string, postalCode: string) => Promise<void>;
    /**
     * @param {(string | undefined)} emailOrUsername
     * @param {(string | undefined)} password
     * @param {string} groupNumber
     * @param {string} groupPayConfig
     * @param {string} stateName
     * @param {string} planName
     * @param {string} tierName
     * @param {string} street
     * @param {string} city
     * @param {string} postalCode
     * @memberof CheckoutPersonalInfoPage
     */
    navigateToPersonalInfoPageSinglePlanNoPaymentFrequency: (emailOrUsername: string | undefined, password: string | undefined, groupNumber: string, groupPayConfig: string, stateName: string, planName: string, tierName: string, street: string, city: string, postalCode: string) => Promise<void>;
    /**
     * @param {(string | undefined)} emailOrUsername
     * @param {(string | undefined)} password
     * @param {string} groupNumber
     * @param {string} groupPayConfig
     * @param {string} stateName
     * @param {string} payTerm
     * @param {string} planName
     * @param {string} plan2Name
     * @param {string} street
     * @param {string} city
     * @param {string} postalCode
     * @memberof CheckoutPersonalInfoPage
     */
    navigateToPersonalInfoPageComboPlan: (emailOrUsername: string | undefined, password: string | undefined, groupNumber: string, groupPayConfig: string, stateName: string, payTerm: string, planName: string, plan2Name: string, street: string, city: string, postalCode: string) => Promise<void>;
    /**
     * @param {string} groupNumber
     * @memberof CheckoutPersonalInfoPage
     */
    navigateToBusinessSolutionsLegalEnrollPage: (groupNumber: string) => Promise<void>;
    /**
     * @param {string} groupNumber
     * @memberof CheckoutPersonalInfoPage
     */
    navigateToShieldBenefitsPricingPage: (groupNumber: string) => Promise<void>;
    /**
     * @param {string} groupNumber
     * @memberof CheckoutPersonalInfoPage
     */
    navigateToBusinessSolutionsIdentityEnrollPage: (groupNumber: string) => Promise<void>;
    /**
     * @param {string} channel
     * @param {string} subChannel
     * @param {string} region
     * @param {string} marketLocale
     * @param {string} [prepaidMonths='']
     * @param {string} [couponCode='']
     * @param {Array<string>} plans
     * @memberof CheckoutPersonalInfoPage
     */
    navigateToPersonalInfoPageFromPlanalyzer: (channel: string, subChannel: string, region: string, marketLocale: string, prepaidMonths: string | undefined, couponCode: string | undefined, plans: Array<string>) => Promise<void>;
    /**
     * @param {string} navigateToPersonalInfoPageFromPlanalyzer
     * @memberof CheckoutPersonalInfoPage
     */
    navigateToPersonalInfoPageForIdsCaFromPlanalyzer: () => Promise<void>;
    navigateToPaymentsPageForF30IdsCa: (state: string) => Promise<void>;
    /**
     * @memberof CheckoutPersonalInfoPage
     */
    clickChangeStateLink: () => Promise<void>;
    /**
     * @memberof CheckoutPersonalInfoPage
     */
    clickSaveAndContinueButton: () => Promise<void>;
    /**
     * @param {string} region
     * @memberof CheckoutPersonalInfoPage
     */
    assertState: (region: string) => Promise<void>;
    /**
     * @param {string} region
     * @memberof CheckoutPersonalInfoPage
     */
    assertToolTipIsVisible: (region: string) => Promise<void>;
    /**
     * @memberof CheckoutPersonalInfoPage
     */
    assertPersonalInfoStepIsCurrent: () => Promise<void>;
    /**
     * @memberof CheckoutPersonalInfoPage
     */
    assertSupportCardIsDisplayed: () => Promise<void>;
    /**
     * @memberof CheckoutPersonalInfoPage
     */
    assertCallSupportButtonIsDisplayed: () => Promise<void>;
    /**
     * @memberof CheckoutPersonalInfoPage
     */
    assertPersonalInfoHeaderIsDisplayed: () => Promise<void>;
    /**
     * @memberof CheckoutPersonalInfoErrorFirstNameIsDisplayed
     */
    assertPersonalInfoPageErrorsAreDisplayed: () => Promise<void>;
    /**
     * @memberof CheckoutPersonalInfoErrorSecuritySectionAreDisplayed
     */
    assertPersonalInfoPageErrorsSecuritySectionAreDisplayed: () => Promise<void>;
}
