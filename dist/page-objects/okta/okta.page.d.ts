import { LegalshieldTestHarnessMenuPage } from '../../page-objects/test-harness/legalshield-test-harness-menu.page';
/**
 *
 *
 * @export
 * @class OktaPage
 * @extends {BasePage}
 */
export declare class OktaPage extends LegalshieldTestHarnessMenuPage {
    loginThroughOkta: () => Promise<void>;
    loginThroughOktaGroupEnrollment: () => Promise<void>;
    navigateToMemberSearchOktaLogin: () => Promise<void>;
    navigateToPlanalyzerCsrCheckoutOktaLogin: () => Promise<void>;
}
